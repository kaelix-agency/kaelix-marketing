#!/usr/bin/env node
/**
 * KAELIX — accès DIRECT à l'API Google Search Console (zéro SaaS intermédiaire).
 * Rationnel : docs/rationnel-des-choix.md §1.24. Auth : compte de service GCP
 * (JWT RS256 signé localement, zéro dépendance npm), clé JSON HORS repo :
 *   - variable d'env GSC_KEY_FILE, sinon %USERPROFILE%\.kaelix\gsc-service-account.json
 *
 * Usage :
 *   node scripts/gsc-fetch.mjs query   [--site sc-domain:transportsansquer.fr] [--days 28] [--start AAAA-MM-JJ --end AAAA-MM-JJ] [--dimension page|query|page,query|date] [--limit 25] [--filter-page <sous-chaîne>]
 *   node scripts/gsc-fetch.mjs inspect <url> [<url>...]
 *   node scripts/gsc-fetch.mjs sitemaps
 *   node scripts/gsc-fetch.mjs check404 [--site-repo D:\Users\Axel\KAELIX\transports-ansquer]
 *   node scripts/gsc-fetch.mjs request-indexing <url> [<url>...]
 *
 * ⚠️ request-indexing utilise l'Indexing API, officiellement réservée aux pages
 * JobPosting/BroadcastEvent : pour des pages classiques la demande peut être
 * ignorée par Google. Le bouton « Demander l'indexation » de l'inspection d'URL
 * dans l'interface GSC reste la voie sûre — le script le rappelle en sortie.
 */

import { readFile } from "node:fs/promises";
import { createSign } from "node:crypto";
import { homedir } from "node:os";
import { join } from "node:path";

const DEFAULT_SITE = "sc-domain:transportsansquer.fr";
const args = process.argv.slice(2);
const cmd = args[0];
const opt = (name, dflt) => {
  const i = args.indexOf("--" + name);
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt;
};
const positionals = args.slice(1).filter((a, i, arr) => !a.startsWith("--") && (i === 0 || !arr[i - 1].startsWith("--") || ["query", "inspect", "sitemaps", "check404", "request-indexing"].includes(arr[i - 1])));

const site = opt("site", DEFAULT_SITE);

// ---------------------------------------------------------------- auth (JWT RS256)
async function getToken(scopes) {
  const keyFile = process.env.GSC_KEY_FILE || join(homedir(), ".kaelix", "gsc-service-account.json");
  let key;
  try {
    key = JSON.parse(await readFile(keyFile, "utf8"));
  } catch (e) {
    console.error(`ERREUR: clé de compte de service introuvable ou illisible: ${keyFile}`);
    console.error(`Posez la clé JSON là, ou définissez GSC_KEY_FILE. La clé ne doit JAMAIS être commitée.`);
    process.exit(2);
  }
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = b64({ alg: "RS256", typ: "JWT" }) + "." + b64({
    iss: key.client_email,
    scope: scopes.join(" "),
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  });
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  const jwt = unsigned + "." + signer.sign(key.private_key, "base64url");
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: `grant_type=${encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer")}&assertion=${jwt}`,
  });
  const j = await r.json();
  if (!j.access_token) {
    console.error("ERREUR auth Google:", JSON.stringify(j));
    process.exit(2);
  }
  return { token: j.access_token, email: key.client_email };
}

async function api(token, url, body) {
  const r = await fetch(url, {
    method: body ? "POST" : "GET",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  let j; try { j = JSON.parse(text); } catch { j = { raw: text }; }
  if (!r.ok) throw new Error(`${r.status} ${url} :: ${text.slice(0, 300)}`);
  return j;
}

const enc = encodeURIComponent;
const pad = (s, n) => String(s ?? "").padEnd(n).slice(0, n);
const num = (v, d = 0) => (v == null ? "-" : Number(v).toFixed(d));
const day = (dt) => dt.toISOString().slice(0, 10);

// ---------------------------------------------------------------- commandes
async function cmdQuery() {
  const days = parseInt(opt("days", "28"), 10);
  const end = opt("end", day(new Date(Date.now() - 2 * 86400000)));   // GSC : ~2 j de latence
  const start = opt("start", day(new Date(new Date(end).getTime() - (days - 1) * 86400000)));
  const dims = opt("dimension", "page").split(",");
  const limit = parseInt(opt("limit", "25"), 10);
  const filterPage = opt("filter-page", null);
  const { token } = await getToken(["https://www.googleapis.com/auth/webmasters.readonly"]);
  const body = { startDate: start, endDate: end, dimensions: dims, rowLimit: limit };
  if (filterPage) body.dimensionFilterGroups = [{ filters: [{ dimension: "page", operator: "contains", expression: filterPage }] }];
  const j = await api(token, `https://www.googleapis.com/webmasters/v3/sites/${enc(site)}/searchAnalytics/query`, body);
  console.log(`# Search Analytics ${site} — ${start} → ${end} — dimensions: ${dims.join("+")}`);
  const rows = j.rows || [];
  if (!rows.length) { console.log("(aucune ligne — normal sur un site/contenu récent : Google n'a pas encore de données agrégées sur la période)"); return; }
  console.log(pad("clics", 7) + pad("imprs", 8) + pad("CTR%", 7) + pad("pos", 6) + dims.join(" | "));
  for (const r of rows) {
    console.log(pad(r.clicks, 7) + pad(r.impressions, 8) + pad(num(r.ctr * 100, 1), 7) + pad(num(r.position, 1), 6) + r.keys.join(" | "));
  }
  const tot = rows.reduce((a, r) => ({ c: a.c + r.clicks, i: a.i + r.impressions }), { c: 0, i: 0 });
  console.log(`TOTAL (${rows.length} lignes affichées) : ${tot.c} clics, ${tot.i} impressions`);
}

async function cmdInspect(requestIndexing = false) {
  const urls = positionals.filter((u) => u.startsWith("http"));
  if (!urls.length) { console.error("Usage: inspect <url> [...]"); process.exit(1); }
  const { token } = await getToken(["https://www.googleapis.com/auth/webmasters"]);
  for (const u of urls) {
    try {
      const j = await api(token, "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", { inspectionUrl: u, siteUrl: site });
      const r = j.inspectionResult?.indexStatusResult || {};
      console.log(`${u}`);
      console.log(`  verdict: ${r.verdict || "-"} · couverture: ${r.coverageState || "-"} · état: ${r.indexingState || "-"}`);
      console.log(`  dernier crawl: ${r.lastCrawlTime || "jamais"} · canonique Google: ${r.googleCanonical || "-"}`);
    } catch (e) { console.log(`${u}\n  ERREUR inspection: ${e.message}`); }
  }
}

async function cmdSitemaps() {
  const { token } = await getToken(["https://www.googleapis.com/auth/webmasters.readonly"]);
  const j = await api(token, `https://www.googleapis.com/webmasters/v3/sites/${enc(site)}/sitemaps`);
  const maps = j.sitemap || [];
  if (!maps.length) { console.log(`Aucun sitemap soumis pour ${site} (soumission : interface GSC ou API sitemaps.submit)`); return; }
  for (const m of maps) {
    const c = (m.contents || []).map((x) => `${x.type}: ${x.submitted} soumis / ${x.indexed ?? "?"} indexés`).join(" ; ");
    console.log(`${m.path}\n  soumis: ${m.lastSubmitted || "-"} · lu par Google: ${m.lastDownloaded || "-"} · erreurs: ${m.errors || 0} · avertissements: ${m.warnings || 0}\n  contenu: ${c || "-"}`);
  }
}

async function cmdCheck404() {
  const siteRepo = opt("site-repo", "D:\\Users\\Axel\\KAELIX\\transports-ansquer");
  const base = "https://transportsansquer.fr";
  const anomalies = [];
  const head = async (url) => {
    const r = await fetch(url, { method: "GET", redirect: "manual" });
    return { status: r.status, location: r.headers.get("location") };
  };
  // 1. Sitemap courant : tout doit répondre 200
  const sm = await (await fetch(`${base}/sitemap.xml`)).text();
  const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`# check404 — ${urls.length} URLs du sitemap courant`);
  for (const u of urls) {
    const r = await head(u);
    if (r.status !== 200) anomalies.push(`SITEMAP ${r.status} ${u}${r.location ? " -> " + r.location : ""}`);
  }
  // 2. Anciennes URLs WordPress : sources des redirections du next.config du repo site
  let sources = [];
  try {
    const conf = await readFile(join(siteRepo, "next.config.ts"), "utf8").catch(() => readFile(join(siteRepo, "next.config.mjs"), "utf8"));
    // Le site déclare ses redirections dans `legacyRedirects` ({ from, to }) — on lit les `from:` littéraux.
    sources = [...conf.matchAll(/from:\s*["'`]([^"'`]+)["'`]/g)].map((m) => m[1]).filter((s) => !s.includes(":") && !s.includes("*"));
  } catch { console.log("⚠️ next.config du repo site illisible — anciennes URLs non testées"); }
  console.log(`# check404 — ${sources.length} anciennes URLs (redirections WordPress du next.config)`);
  for (const s of sources) {
    const r = await head(base + s);
    if (![301, 308].includes(r.status)) { anomalies.push(`ANCIENNE ${r.status} ${base + s} (attendu 308)`); continue; }
    const r2 = await head(new URL(r.location, base).href);
    if (r2.status !== 200) anomalies.push(`ANCIENNE ${base + s} -> ${r.location} répond ${r2.status} (chaîne cassée)`);
  }
  if (!anomalies.length) console.log("✅ Aucune anomalie : sitemap 200 partout, anciennes URLs en 308 vers des 200.");
  else { console.log(`⚠️ ${anomalies.length} anomalie(s) :`); anomalies.forEach((a) => console.log("  " + a)); process.exitCode = 1; }
}

async function cmdRequestIndexing() {
  const urls = positionals.filter((u) => u.startsWith("http"));
  if (!urls.length) { console.error("Usage: request-indexing <url> [...]"); process.exit(1); }
  console.log("⚠️ Indexing API : officiellement réservée aux pages JobPosting/BroadcastEvent — pour des pages");
  console.log("   classiques, Google peut ignorer la demande. Voie sûre : inspection d'URL dans l'interface GSC");
  console.log("   → bouton « Demander l'indexation ». Ce script tente quand même, puis inspecte l'état.\n");
  const { token } = await getToken(["https://www.googleapis.com/auth/indexing", "https://www.googleapis.com/auth/webmasters"]);
  for (const u of urls) {
    try {
      const j = await api(token, "https://indexing.googleapis.com/v3/urlNotifications:publish", { url: u, type: "URL_UPDATED" });
      console.log(`${u}\n  publish: OK (notifyTime: ${j.urlNotificationMetadata?.latestUpdate?.notifyTime || "-"})`);
    } catch (e) { console.log(`${u}\n  publish: ÉCHEC — ${e.message.slice(0, 200)}`); }
  }
}

// ---------------------------------------------------------------- dispatch
const table = { query: cmdQuery, inspect: cmdInspect, sitemaps: cmdSitemaps, check404: cmdCheck404, "request-indexing": cmdRequestIndexing };
if (!table[cmd]) {
  console.error("Commandes : query · inspect · sitemaps · check404 · request-indexing (voir l'en-tête du fichier)");
  process.exit(1);
}
await table[cmd]();
