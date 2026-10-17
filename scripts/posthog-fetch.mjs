#!/usr/bin/env node
/**
 * KAELIX — lecture DIRECTE de PostHog Cloud EU (contacts et audience), zéro dépendance npm.
 * Pendant de `gsc-fetch.mjs` : la Search Console dit d'où vient le trafic, PostHog dit ce
 * que les visiteurs FONT sur le site (clics téléphone / e-mail, formulaires envoyés).
 *
 * Source des événements : le site du client (ex. Transports Ansquer, `src/lib/analytics.ts`,
 * PR #9 du 2026-10-15) — mesure sans cookie, un `distinct_id` par onglet (= une visite),
 * événements `$pageview`, `contact_telephone`, `contact_email`, `contact_formulaire` (+ `besoin`),
 * propriétés `$current_url` et `$pathname`. ⚠️ Pas de `$referrer` : aucune attribution par
 * source ici — pour « d'où viennent-ils », c'est la Search Console.
 *
 * Auth : clé PERSONNELLE PostHog (lecture seule, scopes `query:read` + `project:read`),
 * HORS repo :
 *   - variable d'env POSTHOG_API_KEY, sinon fichier POSTHOG_KEY_FILE,
 *     sinon %USERPROFILE%\.kaelix\posthog.json  →  { "personal_api_key": "phx_…",
 *     "project_id": 309342, "host": "https://eu.posthog.com" }
 *   ⚠️ Ne pas confondre avec la clé de PROJET (phc_…, publique, ingestion seule) posée dans Vercel.
 *
 * Un seul projet PostHog pour tous les sites (plan gratuit = 1 projet) : chaque lecture est
 * FILTRÉE par domaine (`--site`), ce qui exclut du même coup les hôtes de preview Vercel.
 *
 * Usage :
 *   node scripts/posthog-fetch.mjs check                       # auth + événements vus sur 30 j (tous hôtes)
 *   node scripts/posthog-fetch.mjs contacts [--days 28] [--start AAAA-MM-JJ --end AAAA-MM-JJ]
 *                                                              # visites, pages vues, 3 contacts, taux — vs période précédente
 *   node scripts/posthog-fetch.mjs pages    [--days 28] [--limit 25]
 *                                                              # par page : pages vues, visites, contacts, taux de contact
 *   node scripts/posthog-fetch.mjs events   [--days 7]  [--limit 50]
 *                                                              # liste brute des événements de contact (vérification)
 *   options communes : --site https://transportsansquer.fr/  (défaut) · --sql (affiche le HogQL, n'exécute rien)
 *
 * Toutes les dates sont en UTC (fuseau du projet PostHog). `--end` est INCLUS.
 */

import { readFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

const DEFAULT_SITE = "https://transportsansquer.fr/";
const CONTACT_EVENTS = ["contact_telephone", "contact_email", "contact_formulaire"];

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (name, dflt) => {
  const i = args.indexOf("--" + name);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : dflt;
};
const flag = (name) => args.includes("--" + name);

const site = opt("site", DEFAULT_SITE).replace(/\/+$/, "") + "/";
if (!/^https?:\/\/[a-z0-9.-]+\/$/i.test(site)) die(`--site invalide : ${site} (attendu : https://domaine.tld/)`);
const limit = Math.max(1, Math.min(500, parseInt(opt("limit", cmd === "events" ? "50" : "25"), 10) || 25));

function die(msg, code = 2) {
  console.error("ERREUR: " + msg);
  process.exit(code);
}

// ---------------------------------------------------------------- périodes
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const toISO = (d) => d.toISOString().slice(0, 10);
const addDays = (iso, n) => {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return toISO(d);
};
function period() {
  const today = toISO(new Date());
  let start = opt("start"), end = opt("end");
  if (start || end) {
    if (!start || !end || !ISO.test(start) || !ISO.test(end)) die("--start et --end requis ensemble, format AAAA-MM-JJ");
  } else {
    const days = parseInt(opt("days", cmd === "events" ? "7" : "28"), 10);
    if (!(days > 0 && days <= 366)) die("--days doit être entre 1 et 366");
    end = addDays(today, -1); // hier = dernier jour complet
    start = addDays(end, -(days - 1));
  }
  if (start > end) die("--start postérieur à --end");
  const len = Math.round((new Date(end) - new Date(start)) / 86400000) + 1;
  return { start, end, len, prevStart: addDays(start, -len), prevEnd: addDays(start, -1) };
}

// ---------------------------------------------------------------- auth + requête
async function config() {
  let file = {};
  if (!process.env.POSTHOG_API_KEY) {
    const keyFile = process.env.POSTHOG_KEY_FILE || join(homedir(), ".kaelix", "posthog.json");
    try {
      file = JSON.parse(await readFile(keyFile, "utf8"));
    } catch {
      die(`clé personnelle PostHog introuvable ou illisible : ${keyFile}\n` +
          `Posez-y { "personal_api_key": "phx_…", "project_id": 309342, "host": "https://eu.posthog.com" },\n` +
          `ou définissez POSTHOG_API_KEY (+ POSTHOG_PROJECT_ID, POSTHOG_HOST). La clé ne doit JAMAIS être commitée.`);
    }
  }
  const key = process.env.POSTHOG_API_KEY || file.personal_api_key;
  const projectId = process.env.POSTHOG_PROJECT_ID || file.project_id || 309342;
  const host = (process.env.POSTHOG_HOST || file.host || "https://eu.posthog.com").replace(/\/+$/, "");
  if (!key) die("clé personnelle PostHog vide");
  if (!/^phx_/.test(key)) console.error("⚠️ la clé ne commence pas par phx_ : est-ce bien une clé PERSONNELLE (pas la clé de projet phc_) ?");
  return { key, projectId, host };
}

async function hogql(cfg, query) {
  if (flag("sql")) { console.log(query.trim() + "\n"); return { results: [], columns: [] }; }
  const r = await fetch(`${cfg.host}/api/projects/${cfg.projectId}/query/`, {
    method: "POST",
    headers: { authorization: `Bearer ${cfg.key}`, "content-type": "application/json" },
    body: JSON.stringify({ query: { kind: "HogQLQuery", query } }),
  });
  const text = await r.text();
  if (!r.ok) {
    if (r.status === 401 || r.status === 403) die(`PostHog ${r.status} — clé personnelle refusée ou scopes insuffisants (il faut query:read + project:read) : ${text.slice(0, 300)}`);
    if (r.status === 404) die(`PostHog 404 — projet ${cfg.projectId} introuvable sur ${cfg.host} (région EU ? bon project_id ?)`);
    die(`PostHog ${r.status} : ${text.slice(0, 500)}`);
  }
  return JSON.parse(text);
}

// SQL helpers — les valeurs sont contrôlées (dates ISO validées, site validé par regex, entiers bornés)
const q = (s) => "'" + String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
const between = (start, end) => `timestamp >= toDateTime(${q(start + " 00:00:00")}) AND timestamp < toDateTime(${q(addDays(end, 1) + " 00:00:00")})`;
const onSite = () => `properties.$current_url LIKE ${q(site + "%")}`;
const contactsIn = () => `event IN (${CONTACT_EVENTS.map(q).join(", ")})`;

// ---------------------------------------------------------------- affichage
const pad = (v, n) => String(v ?? "").padEnd(n);
const rpad = (v, n) => String(v ?? "").padStart(n);
const pct = (num, den) => (den > 0 ? (100 * num / den).toFixed(1) + " %" : "—");
const delta = (cur, prev) => {
  if (!prev) return cur ? "(nouveau)" : "";
  const d = ((cur - prev) / prev) * 100;
  return (d >= 0 ? "+" : "") + d.toFixed(0) + " %";
};

// ---------------------------------------------------------------- commandes
async function cmdCheck(cfg) {
  const since = addDays(toISO(new Date()), -30);
  const r = await hogql(cfg, `
    SELECT event, count() AS n, uniq(distinct_id) AS visites,
           min(timestamp) AS premier, max(timestamp) AS dernier,
           countIf(${onSite()}) AS sur_site
    FROM events
    WHERE timestamp >= toDateTime(${q(since + " 00:00:00")})
    GROUP BY event ORDER BY n DESC`);
  if (flag("sql")) return;
  console.log(`# PostHog check — projet ${cfg.projectId} @ ${cfg.host} — 30 derniers jours, tous hôtes — filtre --site = ${site}`);
  if (!r.results.length) { console.log("(aucun événement reçu sur 30 j — clé Vercel posée et site redéployé ?)"); return; }
  console.log(pad("événement", 22) + rpad("total", 7) + rpad("visites", 9) + rpad("sur site", 10) + "  premier → dernier (UTC)");
  for (const [event, n, v, first, last, onsite] of r.results)
    console.log(pad(event, 22) + rpad(n, 7) + rpad(v, 9) + rpad(onsite, 10) + `  ${String(first).slice(0, 16)} → ${String(last).slice(0, 16)}`);
  const hors = r.results.reduce((s, row) => s + (row[1] - row[5]), 0);
  if (hors) console.log(`ℹ️ ${hors} événement(s) hors ${site} (previews Vercel, autres domaines du projet) — exclus par le filtre --site des autres commandes`);
  const missing = ["$pageview", ...CONTACT_EVENTS].filter((e) => !r.results.some((row) => row[0] === e));
  if (missing.length) console.log(`ℹ️ jamais vus sur 30 j : ${missing.join(", ")} (normal si aucun visiteur n'a encore fait l'action)`);
}

async function totals(cfg, start, end) {
  const r = await hogql(cfg, `
    SELECT countIf(event = '$pageview') AS pages_vues,
           uniqIf(distinct_id, event = '$pageview') AS visites,
           countIf(event = 'contact_telephone') AS tel,
           countIf(event = 'contact_email') AS email,
           countIf(event = 'contact_formulaire') AS formulaire,
           uniqIf(distinct_id, ${contactsIn()}) AS visites_avec_contact
    FROM events
    WHERE ${between(start, end)} AND ${onSite()}`);
  const [pv, visites, tel, email, form, vac] = r.results[0] || [0, 0, 0, 0, 0, 0];
  return { pv, visites, tel, email, form, contacts: tel + email + form, vac };
}

async function cmdContacts(cfg) {
  const p = period();
  const cur = await totals(cfg, p.start, p.end);
  const prev = await totals(cfg, p.prevStart, p.prevEnd);
  if (flag("sql")) return;
  console.log(`# PostHog contacts ${site} — ${p.start} → ${p.end} (${p.len} j) vs ${p.prevStart} → ${p.prevEnd}`);
  const row = (label, a, b, extra = "") => console.log(pad(label, 30) + rpad(a, 8) + rpad(b, 10) + rpad(delta(a, b), 10) + extra);
  console.log(pad("", 30) + rpad("période", 8) + rpad("précéd.", 10) + rpad("évol.", 10));
  row("visites (onglets)", cur.visites, prev.visites);
  row("pages vues", cur.pv, prev.pv);
  row("clics téléphone", cur.tel, prev.tel);
  row("clics e-mail", cur.email, prev.email);
  row("formulaires envoyés", cur.form, prev.form);
  row("contacts (total)", cur.contacts, prev.contacts);
  row("visites avec ≥1 contact", cur.vac, prev.vac);
  console.log(pad("taux de contact (visites)", 30) + rpad(pct(cur.vac, cur.visites), 8) + rpad(pct(prev.vac, prev.visites), 10));
  if (cur.visites < 50) console.log("⚠️ moins de 50 visites sur la période : les taux ne sont pas interprétables, on compte, on ne conclut pas.");
  if (p.start < "2026-10-17") console.log("ℹ️ mesure active depuis le 2026-10-17 : avant cette date il n'y a aucune donnée (ce n'est pas une baisse).");
  console.log("ℹ️ une « visite » = un onglet ouvert (identifiant de session, sans cookie) — non comparable aux « utilisateurs » GA4 ni aux clics GSC.");
}

async function cmdPages(cfg) {
  const p = period();
  const r = await hogql(cfg, `
    SELECT properties.$pathname AS page,
           countIf(event = '$pageview') AS pages_vues,
           uniqIf(distinct_id, event = '$pageview') AS visites,
           countIf(event = 'contact_telephone') AS tel,
           countIf(event = 'contact_email') AS email,
           countIf(event = 'contact_formulaire') AS formulaire,
           uniqIf(distinct_id, ${contactsIn()}) AS visites_avec_contact
    FROM events
    WHERE ${between(p.start, p.end)} AND ${onSite()}
    GROUP BY page
    ORDER BY visites_avec_contact DESC, pages_vues DESC
    LIMIT ${limit}`);
  if (flag("sql")) return;
  console.log(`# PostHog pages ${site} — ${p.start} → ${p.end} (${p.len} j) — triées par visites avec contact, puis pages vues — ${limit} max`);
  if (!r.results.length) { console.log("(aucune page vue sur la période et ce domaine)"); return; }
  console.log(rpad("vues", 6) + rpad("visites", 9) + rpad("tél", 5) + rpad("mail", 6) + rpad("form", 6) + rpad("v.contact", 11) + rpad("taux", 8) + "  page");
  for (const [page, pv, v, tel, email, form, vac] of r.results)
    console.log(rpad(pv, 6) + rpad(v, 9) + rpad(tel, 5) + rpad(email, 6) + rpad(form, 6) + rpad(vac, 11) + rpad(pct(vac, v), 8) + "  " + (page ?? "(inconnue)"));
  console.log("ℹ️ un clic tél/mail est compté sur la page où il a lieu (CallBar, pied de page…) — pas sur la page d'arrivée de la visite.");
}

async function cmdEvents(cfg) {
  const p = period();
  const r = await hogql(cfg, `
    SELECT timestamp, event, properties.$pathname AS page, properties.besoin AS besoin, distinct_id
    FROM events
    WHERE ${between(p.start, p.end)} AND ${onSite()} AND ${contactsIn()}
    ORDER BY timestamp DESC
    LIMIT ${limit}`);
  if (flag("sql")) return;
  console.log(`# PostHog événements de contact ${site} — ${p.start} → ${p.end} — ${limit} derniers`);
  if (!r.results.length) { console.log("(aucun événement de contact sur la période)"); return; }
  console.log(pad("horodatage (UTC)", 18) + pad("événement", 20) + pad("besoin", 14) + pad("visite", 10) + "page");
  for (const [ts, ev, page, besoin, did] of r.results)
    console.log(pad(String(ts).slice(0, 16), 18) + pad(ev, 20) + pad(besoin ?? "", 14) + pad(String(did).slice(0, 8), 10) + (page ?? ""));
}

// ---------------------------------------------------------------- main
const commands = { check: cmdCheck, contacts: cmdContacts, pages: cmdPages, events: cmdEvents };
if (!commands[cmd]) {
  console.error("Usage : node scripts/posthog-fetch.mjs <check|contacts|pages|events> [--site URL] [--days N | --start D --end D] [--limit N] [--sql]");
  process.exit(1);
}
const cfg = flag("sql") ? { key: "phx_dry_run", projectId: opt("project", 309342), host: "https://eu.posthog.com" } : await config();
await commands[cmd](cfg);
