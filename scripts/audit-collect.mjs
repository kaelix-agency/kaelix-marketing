#!/usr/bin/env node
/**
 * KAELIX — audit gratuit, brique 1 : COLLECTE des données d'un prospect.
 *   node scripts/audit-collect.mjs <slug> [--site https://… --nom "…" --ville "…" --activite "…" --type ecommerce|local|saas]
 *                                         [--concurrent https://… --concurrent https://…] [--requetes "a|b|c"] [--json]
 *
 * Entrées : prospects/<slug>/prospect.json (créé ou complété par les options ci-dessus). Quatre informations
 *   suffisent (doctrine du teaser, prospects/README.md) : site, activité, ville, concurrents (0 à 2, facultatifs).
 *   Les 10 recherches testées viennent de --requetes ou de prospect.json `requetes` ; à défaut, Haloscan `match`
 *   sur l'activité (10 plus gros volumes, hors marques).
 * Sortie  : prospects/<slug>/collecte.json — une section par pilier de docs/grille-audit-gratuit.md, chaque mesure
 *   datée et sourcée ; une mesure impossible est écrite `{ "statut": "non vérifiable", "raison": "…" }`, jamais omise
 *   (règle des contrôles empêchés, CLAUDE.md). La brique 2 (audit-score.mjs) note à partir de ce fichier.
 *
 * Sources (toutes optionnelles, chacune signalée si absente) :
 *   - PageSpeed Insights API, mobile (PSI_API_KEY) — critères 1, 2, 3, 4, 5, 6, 7 ; pour le prospect et chaque concurrent.
 *   - Haloscan API directe (HALOSCAN_API_KEY) — critères 8, 9 : SERP de chaque recherche (overview/serp), positions
 *     du prospect et des concurrents dans les 50 premiers ; volumes des recherches (bulk).
 *   - Places API (New) (GOOGLE_PLACES_API_KEY) — critères 13 à 19 : fiche Google du prospect et des concurrents.
 *   - Lecture du site (fetch, sans navigateur) — critères 6, 10 (lien Shopping non mesurable ici), 11, 12, 20 à 26 :
 *     pages d'accueil, FAQ, CGV, livraison, contact ; moyens de paiement, retours, paiement en plusieurs fois,
 *     téléphones et délais sur toutes les pages lues (cohérence), nombre de collections au menu, présence d'un blog.
 * Clés : variables d'environnement, sinon le fichier .env à la racine du repo (jamais commité).
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const slug = args[0] && !args[0].startsWith("--") ? args[0] : null;
if (!slug) { console.error("usage : node scripts/audit-collect.mjs <slug> [--site … --nom … --ville … --activite … --concurrent … --requetes 'a|b']"); process.exit(1); }
const flags = {}; const multi = { concurrent: [] };
for (let i = 1; i < args.length; i++) {
  if (!args[i].startsWith("--")) continue;
  const k = args[i].slice(2); const v = args[i + 1] && !args[i + 1].startsWith("--") ? args[++i] : true;
  if (k in multi) multi[k].push(v); else flags[k] = v;
}
const today = new Date().toISOString().slice(0, 10);
const now = () => new Date().toISOString();

// ---- .env (sans dépendance) ---------------------------------------------------------------------------------------
async function loadEnv() {
  try {
    const txt = await readFile(resolve(root, ".env"), "utf8");
    for (const line of txt.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/); if (!m || line.trim().startsWith("#")) continue;
      if (!process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch { /* pas de .env : les clés viennent de l'environnement, ou manquent (signalé par source) */ }
}
await loadEnv();
const KEYS = { psi: process.env.PSI_API_KEY, places: process.env.GOOGLE_PLACES_API_KEY, haloscan: process.env.HALOSCAN_API_KEY };

// ---- prospect.json ------------------------------------------------------------------------------------------------
const dir = resolve(root, "prospects", slug);
await mkdir(dir, { recursive: true });
const pFile = resolve(dir, "prospect.json");
let prospect = existsSync(pFile) ? JSON.parse(await readFile(pFile, "utf8")) : {};
if (!existsSync(pFile) && existsSync(resolve(dir, "audit.json"))) {
  // Un audit fait à la main existe déjà : on repart de ses entrées.
  const a = JSON.parse(await readFile(resolve(dir, "audit.json"), "utf8"));
  prospect = { nom: a.prospect?.nom, site: a.prospect?.site, ville: a.prospect?.ville, activite: a.prospect?.activite, type: a.prospect?.type,
    concurrents: (a.concurrents ?? []).map((c) => ({ nom: c.nom, site: c.site })) };
}
const norm = (u) => { if (!u) return u; const s = String(u).trim(); return /^https?:\/\//i.test(s) ? s : `https://${s}`; };
for (const k of ["site", "nom", "ville", "activite", "type"]) if (flags[k]) prospect[k] = flags[k];
prospect.site = norm(prospect.site);
prospect.concurrents = (prospect.concurrents ?? []).map((c) => ({ ...c, site: norm(c.site) }));
for (const c of multi.concurrent) if (!prospect.concurrents.some((x) => x.site === norm(c))) prospect.concurrents.push({ site: norm(c) });
if (flags.requetes) prospect.requetes = String(flags.requetes).split("|").map((s) => s.trim()).filter(Boolean);
prospect.slug = slug;
if (!prospect.site) { console.error("Le site du prospect est obligatoire (--site https://…)."); process.exit(1); }
await writeFile(pFile, JSON.stringify(prospect, null, 2) + "\n");

// ---- aides ------------------------------------------------------------------------------------------------------------
const host = (u) => { try { return new URL(norm(u)).hostname.replace(/^www\./, ""); } catch { return String(u); } };
const blocked = (raison) => ({ statut: "non vérifiable", raison });
const log = (...a) => console.error(...a);
async function getJson(url, init = {}, timeoutMs = 60_000) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: ctl.signal });
    const text = await res.text(); let data; try { data = JSON.parse(text); } catch { data = { raw: text.slice(0, 500) }; }
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${data?.error?.message ?? data?.message ?? data?.raw ?? ""}`.trim());
    return data;
  } finally { clearTimeout(t); }
}
async function getHtml(url, timeoutMs = 30_000) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), timeoutMs); const t0 = Date.now();
  try {
    const res = await fetch(url, { signal: ctl.signal, redirect: "follow", headers: { "user-agent": "Mozilla/5.0 (compatible; KAELIX audit gratuit; +https://kaelix.fr/audit-gratuit)", "accept-language": "fr" } });
    return { ok: res.ok, status: res.status, finalUrl: res.url, ms: Date.now() - t0, html: res.ok ? await res.text() : "" };
  } catch (e) { return { ok: false, status: 0, finalUrl: url, ms: Date.now() - t0, html: "", error: e.message }; }
  finally { clearTimeout(t); }
}
const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const uniq = (a) => [...new Set(a)];

// ---- 1. Site & vitesse : PageSpeed Insights (mobile) ------------------------------------------------------------------
async function pagespeed(url) {
  if (!KEYS.psi) return blocked("PSI_API_KEY absente (.env)");
  try {
    const q = new URLSearchParams({ url, strategy: "mobile", key: KEYS.psi });
    for (const c of ["performance", "seo"]) q.append("category", c);
    const d = await getJson(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${q}`, {}, 120_000);
    const lr = d.lighthouseResult ?? {}; const au = lr.audits ?? {};
    const num = (id) => au[id]?.numericValue;
    const field = d.loadingExperience?.metrics ? d.loadingExperience : null;
    return {
      source: "PageSpeed Insights API, mobile", date: now(), url_finale: lr.finalUrl ?? url,
      note_performance: Math.round((lr.categories?.performance?.score ?? NaN) * 100),
      note_seo: Math.round((lr.categories?.seo?.score ?? NaN) * 100),
      lcp_s: num("largest-contentful-paint") != null ? +(num("largest-contentful-paint") / 1000).toFixed(1) : null,
      ttfb_s: num("server-response-time") != null ? +(num("server-response-time") / 1000).toFixed(2) : null,
      requetes: au["network-requests"]?.details?.items?.length ?? null,
      poids_ko: au["total-byte-weight"]?.numericValue != null ? Math.round(au["total-byte-weight"].numericValue / 1024) : null,
      https: /^https:/i.test(lr.finalUrl ?? url),
      terrain: field ? { statut: "mesuré", verdict: field.overall_category, lcp_ms_p75: field.metrics?.LARGEST_CONTENTFUL_PAINT_MS?.percentile ?? null }
                     : { statut: "absent", note: "Google n'a pas assez de visiteurs pour mesurer ce site : c'est une donnée (trafic relatif faible)" },
    };
  } catch (e) { return blocked(`PageSpeed : ${e.message}`); }
}

// ---- 3. Fiche Google : Places API (New) --------------------------------------------------------------------------------
async function placeOf(query) {
  if (!KEYS.places) return blocked("GOOGLE_PLACES_API_KEY absente (.env)");
  try {
    const d = await getJson("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: { "content-type": "application/json", "X-Goog-Api-Key": KEYS.places,
        "X-Goog-FieldMask": "places.id,places.displayName,places.primaryTypeDisplayName,places.primaryType,places.rating,places.userRatingCount,places.nationalPhoneNumber,places.internationalPhoneNumber,places.websiteUri,places.regularOpeningHours,places.photos,places.formattedAddress,places.googleMapsUri" },
      body: JSON.stringify({ textQuery: query, languageCode: "fr", regionCode: "FR", maxResultCount: 3 }),
    }, 30_000);
    const p = (d.places ?? [])[0];
    if (!p) return { statut: "aucune fiche trouvée", requete: query, source: "Places API (New), searchText", date: now() };
    return {
      source: "Places API (New), searchText", date: now(), requete: query, candidats: (d.places ?? []).length,
      nom: p.displayName?.text ?? null, categorie: p.primaryTypeDisplayName?.text ?? p.primaryType ?? null,
      note: p.rating ?? null, nb_avis: p.userRatingCount ?? 0, telephone: p.nationalPhoneNumber ?? null,
      site: p.websiteUri ?? null, horaires: Boolean(p.regularOpeningHours), nb_photos: (p.photos ?? []).length,
      adresse: p.formattedAddress ?? null, maps: p.googleMapsUri ?? null,
      limites: "nb_photos = photos renvoyées par l'API (10 max) ; publications et produits de la fiche non exposés par Places → critère 19 à lire à la main",
    };
  } catch (e) { return blocked(`Places : ${e.message}`); }
}

// ---- 2. Visibilité Google : Haloscan ----------------------------------------------------------------------------------
const HALO = "https://api.haloscan.com/api";
async function halo(endpoint, params) {
  return getJson(`${HALO}${endpoint}`, { method: "POST", headers: { accept: "application/json", "content-type": "application/json", "haloscan-api-key": KEYS.haloscan }, body: JSON.stringify(params) }, 60_000);
}
const rowsOf = (d) => Array.isArray(d?.results) ? d.results : Array.isArray(d?.data) ? d.data : Array.isArray(d) ? d : [];
async function pickQueries(activite) {
  if (prospect.requetes?.length) return { requetes: prospect.requetes.slice(0, 10), origine: "prospect.json / --requetes" };
  if (!KEYS.haloscan) return { requetes: [], origine: blocked("HALOSCAN_API_KEY absente et aucune --requetes") };
  if (!activite) return { requetes: [], origine: blocked("aucune --requetes et aucune activité pour interroger Haloscan") };
  try {
    const d = await halo("/keywords/match", { keyword: activite, lang: "fr", lineCount: 40 });
    const rows = rowsOf(d).filter((r) => r.keyword && (r.volume ?? 0) > 0).sort((a, b) => (b.volume ?? 0) - (a.volume ?? 0));
    return { requetes: rows.slice(0, 10).map((r) => r.keyword), origine: `Haloscan match « ${activite} », 10 plus gros volumes (à relire : retirer les marques)` };
  } catch (e) { return { requetes: [], origine: blocked(`Haloscan match : ${e.message}`) }; }
}
/** Finds, in whatever shape the overview answers, the ranked results (objects carrying a url and a position). */
function serpRows(d) {
  const found = [];
  const walk = (x, depth) => {
    if (!x || depth > 6) return;
    if (Array.isArray(x)) { if (x.length && x.every((e) => e && typeof e === "object" && ("url" in e || "domain" in e) && ("position" in e || "pos" in e || "rank" in e))) found.push(x); else x.forEach((e) => walk(e, depth + 1)); }
    else if (typeof x === "object") Object.values(x).forEach((e) => walk(e, depth + 1));
  };
  walk(d, 0);
  return found.sort((a, b) => b.length - a.length)[0] ?? [];
}
async function serp(keyword, domains) {
  try {
    const d = await halo("/keywords/overview", { keyword, lang: "fr", requested_data: ["metrics", "serp"] });
    const rows = serpRows(d);
    const metrics = d.metrics ?? d.data?.metrics ?? d.results?.metrics ?? {};
    const volume = metrics.volume ?? d.volume ?? null;
    if (!rows.length) return { requete: keyword, volume, statut: "non vérifiable", raison: "forme de la SERP Haloscan non reconnue (overview/serp) — à relever à la main", echantillon: JSON.stringify(d).slice(0, 300) };
    const posOf = (dom) => { const r = rows.find((x) => host(x.url ?? x.domain ?? "") === dom || host(x.url ?? x.domain ?? "").endsWith("." + dom)); return r ? Number(r.position ?? r.pos ?? r.rank) : null; };
    return { requete: keyword, volume, positions: Object.fromEntries(domains.map((dm) => [dm, posOf(dm)])), premier: host(rows[0]?.url ?? rows[0]?.domain ?? ""), top3: rows.slice(0, 3).map((x) => host(x.url ?? x.domain ?? "")), nb_resultats_lus: rows.length };
  } catch (e) { return { requete: keyword, statut: "non vérifiable", raison: `Haloscan overview : ${e.message}` }; }
}

// ---- 4. Lecture du site (fetch) ---------------------------------------------------------------------------------------
const PHONE_RE = /(?:\+33\s?[1-9]|0[1-9])(?:[\s.-]?\d{2}){4}/g;
const normPhone = (p) => p.replace(/\D/g, "").replace(/^33/, "0");
function pickLinks(html, base) {
  const links = [];
  for (const m of html.matchAll(/<a\s[^>]*href=["']([^"'#?]+)[^"']*["'][^>]*>([\s\S]{0,200}?)<\/a>/gi)) {
    try { const u = new URL(m[1], base); if (u.origin === new URL(base).origin) links.push({ url: u.href.replace(/\/$/, ""), text: strip(m[2]).trim().toLowerCase() }); } catch { /* ignore */ }
  }
  return links;
}
const WANT = [
  ["cgv", /cgv|conditions[- ]g[ée]n[ée]rales|terms/i], ["livraison", /livraison|exp[ée]dition|shipping|delivery/i], ["paiement", /paiement|payment/i],
  ["retours", /retour|rembours|return/i], ["faq", /faq|questions/i], ["contact", /contact/i], ["mentions", /mentions[- ]l[ée]gales/i], ["blog", /blog|conseils|actualit|guide|journal|magazine/i],
];
async function readSite(site) {
  const home = await getHtml(site);
  if (!home.ok) return blocked(`accueil injoignable (${home.error ?? "HTTP " + home.status})`);
  const links = pickLinks(home.html, home.finalUrl);
  const pages = { accueil: home };
  const picked = {};
  for (const [key, re] of WANT) {
    const l = links.find((x) => re.test(x.text) || re.test(x.url));
    if (l) picked[key] = l.url;
  }
  for (const [key, url] of Object.entries(picked)) { if (!Object.values(pages).some((p) => p.finalUrl.replace(/\/$/, "") === url)) pages[key] = await getHtml(url); }
  const texts = Object.fromEntries(Object.entries(pages).map(([k, p]) => [k, strip(p.html)]));
  const all = Object.values(texts).join(" \n ");
  const homeText = texts.accueil;
  const phones = {};
  for (const [k, t] of Object.entries(texts)) for (const m of t.match(PHONE_RE) ?? []) { const n = normPhone(m); if (n.length === 10) (phones[n] ??= new Set()).add(k); }
  const delais = uniq((all.match(/(?:livr(?:é|ée|aison)[^.]{0,40}?|exp[ée]di[ée]e?s?[^.]{0,40}?|sous)\s(\d{1,2})\s?(?:h|heures|jours?|j)\b/gi) ?? []).map((s) => s.replace(/\s+/g, " ").trim())).slice(0, 12);
  const title = (home.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim();
  const h1 = (home.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "").replace(/<[^>]+>/g, "").trim();
  const nav = home.html.match(/<nav[\s\S]*?<\/nav>/gi)?.join(" ") ?? home.html.slice(0, 40_000);
  const navLinks = uniq(pickLinks(nav, home.finalUrl).map((l) => l.text).filter((t) => t && t.length < 40));
  const flag = (re, where = all) => re.test(where);
  const found = (re, where = all) => uniq((where.match(re) ?? []).map((s) => s.toLowerCase())).slice(0, 10);
  return {
    source: "lecture du site (fetch, sans navigateur — ce qu'un client voit dans la page, pas ce que JavaScript ajoute)", date: now(),
    pages_lues: Object.fromEntries(Object.entries(pages).map(([k, p]) => [k, { url: p.finalUrl, statut: p.status, ms: p.ms }])),
    https: /^https:/i.test(home.finalUrl), redirige_vers: home.finalUrl, temps_reponse_s: +(home.ms / 1000).toFixed(2),
    title, h1, entrees_menu: navLinks.length, menu: navLinks.slice(0, 40),
    blog: picked.blog ? { present: true, url: picked.blog } : { present: false },
    paiement: { avant_panier: flag(/\b(visa|mastercard|carte bancaire|\bcb\b|paypal|apple pay|google pay|virement|stripe)\b/i, homeText + " " + (texts.livraison ?? "") + " " + (texts.paiement ?? "") + " " + (texts.faq ?? "")),
      mentions: found(/\b(visa|mastercard|carte bancaire|paypal|apple pay|google pay|virement|ch[èe]que|stripe|alma|klarna|scalapay|paiement en \d fois|\b[234] ?x\b)\b/gi),
      plusieurs_fois: flag(/paiement en (?:2|3|4|plusieurs) fois|\b[234]x sans frais|alma|klarna|scalapay/i) },
    retours: { annonces: flag(/retour|rembours|satisfait ou/i, homeText + " " + (texts.livraison ?? "") + " " + (texts.faq ?? "")), dans_cgv_seulement: !flag(/retour|rembours/i, homeText + " " + (texts.livraison ?? "") + " " + (texts.faq ?? "")) && flag(/retour|rembours/i, texts.cgv ?? "") },
    telephones: Object.fromEntries(Object.entries(phones).map(([n, s]) => [n, [...s]])), telephones_distincts: Object.keys(phones).length,
    delais_cites: delais,
    avis_sur_pages: flag(/avis (?:clients?|v[ée]rifi[ée]s)|trustpilot|google avis|\b\d[,.]\d\s?\/\s?5\b|★|étoiles/i, homeText),
    relance_panier: blocked("non constatable sans parcours d'achat réel (critère 25 : lecture à la main)"),
    tri_catalogue: blocked("filtres du catalogue non lisibles sans navigateur (critère 20 : lecture à la main, ou crawl-site.mjs)"),
    shopping: blocked("présence dans l'onglet Google Shopping : recherche Google à la main (critère 10)"),
  };
}

// ---- orchestration ----------------------------------------------------------------------------------------------------
const domains = [host(prospect.site), ...prospect.concurrents.map((c) => host(c.site))];
log(`Collecte « ${prospect.nom ?? slug} » — ${prospect.site} — concurrents : ${prospect.concurrents.map((c) => c.site).join(", ") || "aucun"}`);
log(`Clés : PageSpeed ${KEYS.psi ? "✓" : "✗"} · Places ${KEYS.places ? "✓" : "✗"} · Haloscan ${KEYS.haloscan ? "✓" : "✗"}`);

const [psiMe, ...psiComp] = await Promise.all([pagespeed(prospect.site), ...prospect.concurrents.map((c) => pagespeed(c.site))]);
log("PageSpeed : fait");
const { requetes, origine } = await pickQueries(prospect.activite);
let serps = [];
if (requetes.length && KEYS.haloscan) { for (const q of requetes) serps.push(await serp(q, domains)); log(`Haloscan : ${serps.length} recherches`); }
let volumes = null;
if (requetes.length && KEYS.haloscan) { try { volumes = rowsOf(await halo("/keywords/bulk", { keywords: requetes, lang: "fr", lineCount: requetes.length })).map((r) => ({ requete: r.keyword, volume: r.volume ?? null, kvi: r.kvi ?? null })); } catch (e) { volumes = blocked(`Haloscan bulk : ${e.message}`); } }
const fiches = { prospect: await placeOf([prospect.nom, prospect.ville].filter(Boolean).join(" ") || host(prospect.site)), concurrents: [] };
for (const c of prospect.concurrents) fiches.concurrents.push(await placeOf([c.nom, c.ville].filter(Boolean).join(" ") || host(c.site)));
log("Places : fait");
const lecture = await readSite(prospect.site);
log("Lecture du site : fait");

const topCount = (n) => serps.filter((s) => s.positions && s.positions[domains[0]] != null && s.positions[domains[0]] <= n).length;
const collecte = {
  slug, date: today, prospect,
  piliers: {
    "1_site_vitesse": { prospect: psiMe, concurrents: prospect.concurrents.map((c, i) => ({ site: c.site, ...psiComp[i] })), https_site: typeof lecture === "object" && "https" in lecture ? lecture.https : blocked("site non lu") },
    "2_visibilite_google": {
      requetes: { liste: requetes, origine, volumes },
      serps: serps.length ? serps : blocked(typeof origine === "object" ? origine.raison : "Haloscan indisponible ou aucune recherche"),
      synthese: serps.length ? { recherches_testees: serps.length, dans_les_3_premiers: topCount(3), dans_les_50_premiers: topCount(50), absent: serps.filter((s) => s.positions && s.positions[domains[0]] == null).length,
        premier_le_plus_frequent: (() => { const c = {}; for (const s of serps) if (s.premier) c[s.premier] = (c[s.premier] ?? 0) + 1; return Object.entries(c).sort((a, b) => b[1] - a[1])[0] ?? null; })() } : null,
      catalogue_et_contenus: typeof lecture === "object" && lecture.menu ? { entrees_menu: lecture.entrees_menu, blog: lecture.blog } : blocked("site non lu"),
      shopping: blocked("onglet Google Shopping : relevé à la main"),
    },
    "3_fiche_google": fiches,
    "4_parcours": typeof lecture === "object" && lecture.paiement ? { paiement: lecture.paiement, retours: lecture.retours, telephones: lecture.telephones, telephones_distincts: lecture.telephones_distincts, delais_cites: lecture.delais_cites, avis_sur_pages: lecture.avis_sur_pages, relance_panier: lecture.relance_panier, tri_catalogue: lecture.tri_catalogue } : lecture,
  },
  lecture_site: lecture,
  a_lire_a_la_main: ["critère 10 (Shopping)", "critère 19 (publications/produits sur la fiche)", "critère 20 (tri du catalogue)", "critère 25 (relance panier)", "critère 26 (délais : comparer `delais_cites`)", "incohérences de téléphone : comparer `telephones`"],
};
await writeFile(resolve(dir, "collecte.json"), JSON.stringify(collecte, null, 2) + "\n");
if (flags.json) console.log(JSON.stringify(collecte, null, 2));
else {
  const p = psiMe.statut ? `non vérifiable (${psiMe.raison})` : `perf ${psiMe.note_performance}/100 · LCP ${psiMe.lcp_s} s · terrain ${psiMe.terrain.statut}${psiMe.terrain.verdict ? " " + psiMe.terrain.verdict : ""} · ${psiMe.requetes ?? "?"} fichiers · SEO ${psiMe.note_seo}`;
  const f = fiches.prospect.statut ? `${fiches.prospect.statut}${fiches.prospect.raison ? " (" + fiches.prospect.raison + ")" : ""}` : `« ${fiches.prospect.nom} » · ${fiches.prospect.categorie} · ${fiches.prospect.nb_avis} avis à ${fiches.prospect.note} · tél ${fiches.prospect.telephone ?? "—"} · horaires ${fiches.prospect.horaires ? "oui" : "non"}`;
  const g = collecte.piliers["2_visibilite_google"].synthese ? `${collecte.piliers["2_visibilite_google"].synthese.dans_les_3_premiers}/${serps.length} dans le top 3, ${collecte.piliers["2_visibilite_google"].synthese.dans_les_50_premiers}/${serps.length} dans les 50` : "non vérifiable";
  const l = lecture.statut ? `non vérifiable (${lecture.raison})` : `paiement avant panier ${lecture.paiement.avant_panier ? "oui" : "non"} · plusieurs fois ${lecture.paiement.plusieurs_fois ? "oui" : "non"} · retours ${lecture.retours.annonces ? "annoncés" : lecture.retours.dans_cgv_seulement ? "CGV seulement" : "nulle part"} · ${lecture.telephones_distincts} téléphone(s) · blog ${lecture.blog.present ? "oui" : "non"}`;
  console.log(`# Collecte ${slug} — ${today}\n1. Site & vitesse : ${p}\n2. Visibilité Google : ${g}\n3. Fiche Google : ${f}\n4. Parcours : ${l}\n→ prospects/${slug}/collecte.json (à lire à la main : ${collecte.a_lire_a_la_main.length} points)`);
}
