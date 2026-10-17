#!/usr/bin/env node
/**
 * KAELIX — crawl technique local d'un site client pour /tech-audit (remplace le crawl Cuik,
 * retiré le 2026-09-03 — rationnel §1.24). Playwright + Chrome/Chromium du poste, rendu complet.
 *
 * Point de départ : le sitemap du site ; les liens internes découverts sont ajoutés à la file.
 * Pour chaque page : statut HTTP, title, meta description, H1/H2, canonical, meta robots, hreflang,
 * nombre de mots du <main>, liens internes entrants/sortants, images sans alt, JSON-LD (types + validité).
 *
 * Usage :
 *   node scripts/crawl-site.mjs --site https://kaelix.fr [--out <dossier>] [--max 300]
 *                               [--grep "249 €|599 €|cumulatif|backlink"]   ← lexique interdit à chercher dans le texte rendu
 *                               [--chrome "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
 *
 * Sorties (dans --out, défaut ./.crawl/<hôte>/) : crawl.json (brut) + crawl.md (tableau on-page,
 * orphelines, doublons title/meta, occurrences du --grep, images sans alt). Les deux sont ignorés par git.
 *
 * Dépendance : `playwright` (npm i -D playwright). Le navigateur : Chrome installé (chemin détecté sous
 * Windows, ou --chrome), sinon le Chromium de Playwright (`npx playwright install chromium`).
 * Les chemins /admin, /dashboard, /api… (Disallow du robots.txt) sont ignorés.
 * Règle des contrôles empêchés : si le crawl échoue, le script sort en code 2 avec la raison — /tech-audit
 * doit alors afficher « contrôle empêché », jamais un ✅.
 */

import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf("--" + name); return i >= 0 && args[i + 1] ? args[i + 1] : dflt; };
const site = opt("site");
if (!site) { console.error("Usage: node scripts/crawl-site.mjs --site https://exemple.fr [--out dossier] [--max 300] [--grep 'a|b'] [--chrome chemin]"); process.exit(1); }
const ORIGIN = new URL(site).origin;
const MAX = Number(opt("max", 300));
const grepRe = opt("grep") ? new RegExp(opt("grep"), "gi") : null;
const outDir = opt("out", join(".crawl", new URL(site).host));

let chromium;
try { ({ chromium } = await import("playwright")); }
catch { console.error("contrôle empêché : module `playwright` absent — `npm i -D playwright` (ou `npx playwright install chromium`)"); process.exit(2); }

const chromeCandidates = [opt("chrome"), process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/usr/bin/google-chrome", "/usr/bin/chromium"].filter(Boolean);
const executablePath = chromeCandidates.find((p) => existsSync(p));

// ---------------------------------------------------------------- robots.txt (Disallow) + sitemap
let disallow = [];
try {
  const r = await fetch(ORIGIN + "/robots.txt");
  if (r.ok) disallow = (await r.text()).split(/\r?\n/).filter((l) => /^disallow:/i.test(l)).map((l) => l.split(":")[1].trim()).filter(Boolean);
} catch {}
const isDisallowed = (path) => disallow.some((d) => path === d || path.startsWith(d.endsWith("/") ? d : d + "/"));

let sitemapUrls = [];
try {
  const r = await fetch(ORIGIN + "/sitemap.xml");
  if (!r.ok) throw new Error("HTTP " + r.status);
  let xml = await r.text();
  const subs = [...xml.matchAll(/<sitemap>\s*<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  for (const s of subs) { try { xml += await (await fetch(s)).text(); } catch {} }
  sitemapUrls = [...xml.matchAll(/<url>\s*<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
} catch (e) { console.error(`contrôle empêché : sitemap illisible (${e.message}) — le crawl part de l'accueil seul`); sitemapUrls = [ORIGIN + "/"]; }

const norm = (u, base) => {
  try { const x = new URL(u, base || ORIGIN); if (x.origin !== ORIGIN) return null; x.hash = ""; x.search = ""; const p = x.pathname.replace(/\/$/, ""); return ORIGIN + p; } catch { return null; }
};
const queue = [...new Set(sitemapUrls.map((u) => norm(u)).filter(Boolean))];
const seen = new Set(queue);
const pages = {}; const inbound = {};

// ---------------------------------------------------------------- crawl
let browser;
try { browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) }); }
catch (e) { console.error("contrôle empêché : impossible de lancer un navigateur — " + e.message.split("\n")[0]); process.exit(2); }
const ctx = await browser.newContext({ userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36 KaelixAudit/1.0" });

while (queue.length && Object.keys(pages).length < MAX) {
  const url = queue.shift();
  const page = await ctx.newPage();
  let resp;
  try { resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 }); }
  catch (e) { pages[url] = { error: String(e).slice(0, 200), inbound: [] }; await page.close(); console.error(`ERR ${url}`); continue; }
  await page.waitForTimeout(600);
  const status = resp ? resp.status() : null;
  const data = await page.evaluate(() => {
    const q = (s) => document.querySelector(s); const qa = (s) => [...document.querySelectorAll(s)];
    const main = (q("main") || document.body).innerText || "";
    const ld = qa('script[type="application/ld+json"]').map((s) => {
      try { const j = JSON.parse(s.textContent); const types = []; const walk = (o) => { if (!o || typeof o !== "object") return; if (Array.isArray(o)) return o.forEach(walk); if (o["@type"]) types.push(o["@type"]); if (o["@graph"]) walk(o["@graph"]); }; walk(j); return { ok: true, types: types.flat() }; }
      catch (e) { return { ok: false, err: String(e) }; }
    });
    return {
      title: document.title, metaDesc: q('meta[name="description"]')?.content ?? null,
      canonical: q('link[rel="canonical"]')?.href ?? null, robots: q('meta[name="robots"]')?.content ?? null,
      hreflang: qa('link[rel="alternate"][hreflang]').map((l) => l.hreflang),
      h1: qa("h1").map((h) => h.innerText.trim()), h2: qa("h2").map((h) => h.innerText.trim()).slice(0, 30),
      words: main.split(/\s+/).filter(Boolean).length, bodyText: document.body.innerText,
      imgs: qa("img").length,
      imgsNoAlt: qa("img").filter((i) => !i.hasAttribute("alt")).map((i) => (i.currentSrc || i.src || "").slice(-80)),
      imgsEmptyAltDecorative: qa("img").filter((i) => i.getAttribute("alt") === "").length,
      ld, links: qa("a[href]").map((a) => a.getAttribute("href")), lang: document.documentElement.lang,
      ogTitle: q('meta[property="og:title"]')?.content ?? null, ogImage: q('meta[property="og:image"]')?.content ?? null,
    };
  });
  const internal = new Set(); let external = 0;
  for (const h of data.links) {
    if (!h || /^(mailto:|tel:|#|javascript:)/.test(h)) continue;
    const n = norm(h, url); if (n) internal.add(n); else external++;
  }
  for (const t of internal) {
    inbound[t] = inbound[t] || new Set(); if (t !== url) inbound[t].add(url);
    if (!seen.has(t) && !isDisallowed(new URL(t).pathname)) { seen.add(t); queue.push(t); }
  }
  const { links, ...rest } = data;
  pages[url] = { status, finalUrl: page.url(), ...rest, internalOut: internal.size, externalOut: external };
  await page.close();
  console.error(`${status} ${url} (${data.words} mots)`);
}
await browser.close();
for (const u of Object.keys(pages)) pages[u].inbound = [...(inbound[u] || [])].filter((x) => x !== u);

// ---------------------------------------------------------------- rapport
mkdirSync(outDir, { recursive: true });
const rel = (u) => u.replace(ORIGIN, "") || "/";
const L = [];
L.push(`# Crawl ${ORIGIN} — ${new Date().toISOString().slice(0, 16).replace("T", " ")}`, "");
L.push(`Sitemap : ${sitemapUrls.length} URL · crawlées : ${Object.keys(pages).length} · hors sitemap découvertes : ${Object.keys(pages).filter((u) => !sitemapUrls.map((s) => norm(s)).includes(u)).length} · navigateur : ${executablePath || "chromium Playwright"}`, "");
L.push("| Page | HTTP | title (car.) | meta (car.) | H1 | canonical | robots | hreflang | mots | entrants | sortants int. | img sans alt | JSON-LD |", "|---|---|---|---|---|---|---|---|---|---|---|---|---|");
const titles = {}, metas = {};
for (const [u, p] of Object.entries(pages)) {
  if (p.error) { L.push(`| ${rel(u)} | ERREUR ${p.error} |||||||||||||`); continue; }
  (titles[p.title] ||= []).push(rel(u)); (metas[p.metaDesc] ||= []).push(rel(u));
  const canonOk = p.canonical && p.canonical.replace(/\/$/, "") === u;
  L.push(`| ${rel(u)} | ${p.status} | ${p.title.length} | ${p.metaDesc ? p.metaDesc.length : "∅"} | ${p.h1.length} | ${canonOk ? "ok" : "✗ " + (p.canonical || "∅")} | ${p.robots || "∅"} | ${p.hreflang.length || "∅"} | ${p.words} | ${p.inbound.length} | ${p.internalOut} | ${p.imgsNoAlt.length}/${p.imgs} | ${p.ld.map((l) => l.ok ? l.types.join("+") : "INVALID").join(" ; ") || "∅"} |`);
}
const dup = (m) => Object.entries(m).filter(([, v]) => v.length > 1);
L.push("", "## Titles dupliqués", ...(dup(titles).map(([t, v]) => `- « ${t} » → ${v.join(", ")}`) || []), ...(dup(titles).length ? [] : ["aucun"]));
L.push("", "## Metas dupliquées", ...(dup(metas).map(([t, v]) => `- « ${(t || "∅").slice(0, 100)} » → ${v.join(", ")}`)), ...(dup(metas).length ? [] : ["aucune"]));
L.push("", "## Pages orphelines ou peu liées (≤ 1 lien interne entrant)");
for (const [u, p] of Object.entries(pages)) if (!p.error && p.inbound.length <= 1) L.push(`- ${rel(u)} ← ${p.inbound.length}${p.inbound.length ? " (" + p.inbound.map(rel).join(", ") + ")" : ""}`);
L.push("", "## Statuts ≠ 200 / erreurs");
const bad = Object.entries(pages).filter(([, p]) => p.error || p.status !== 200);
L.push(...(bad.length ? bad.map(([u, p]) => `- ${rel(u)} → ${p.error || p.status}`) : ["aucun"]));
L.push("", "## Images sans attribut alt (alt=\"\" décoratif exclu)");
const noalt = Object.entries(pages).filter(([, p]) => p.imgsNoAlt?.length);
L.push(...(noalt.length ? noalt.map(([u, p]) => `- ${rel(u)} : ${p.imgsNoAlt.join(", ")}`) : ["aucune"]));
L.push("", "## Titles · H1 · meta");
for (const [u, p] of Object.entries(pages)) if (!p.error) L.push(`- **${rel(u)}**  \n  T: ${p.title}  \n  H1: ${p.h1.join(" | ")}  \n  M: ${p.metaDesc}`);
if (grepRe) {
  L.push("", `## Lexique recherché : /${grepRe.source}/i (texte rendu, body entier)`);
  let any = false;
  for (const [u, p] of Object.entries(pages)) {
    if (p.error) continue;
    const hits = [...p.bodyText.matchAll(grepRe)];
    const head = [p.title, p.metaDesc || ""].join(" ");
    const headHits = [...head.matchAll(grepRe)];
    if (!hits.length && !headHits.length) continue; any = true;
    L.push(`- **${rel(u)}** : texte ×${hits.length}${headHits.length ? ` · <head> ×${headHits.length} (${headHits.map((m) => m[0]).join(", ")})` : ""}`);
    for (const m of hits.slice(0, 5)) L.push(`  - « …${p.bodyText.slice(Math.max(0, m.index - 60), m.index + m[0].length + 60).replace(/\s+/g, " ")}… »`);
  }
  if (!any) L.push("aucune occurrence");
}
for (const p of Object.values(pages)) delete p.bodyText;
writeFileSync(join(outDir, "crawl.json"), JSON.stringify(pages, null, 1));
writeFileSync(join(outDir, "crawl.md"), L.join("\n"));
console.error(`\nOK — ${Object.keys(pages).length} pages → ${join(outDir, "crawl.md")} (+ crawl.json)`);
