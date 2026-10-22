#!/usr/bin/env node
/**
 * KAELIX — accès DIRECT à l'API Haloscan (zéro pont MCP, zéro dépendance npm).
 * Rationnel : docs/rationnel-des-choix.md §1.24 (même doctrine que gsc-fetch.mjs
 * et posthog-fetch.mjs) : le serveur MCP Haloscan démarre par `npx` et dépasse
 * souvent le délai de connexion en session interactive ; l'API REST, elle,
 * répond toujours. Haloscan reste LA référence mots-clés/positions (invariant 8).
 *
 * Clé HORS repo, dans cet ordre :
 *   - variable d'env HALOSCAN_API_KEY ;
 *   - sinon le bloc `env.HALOSCAN_API_KEY` de .claude/settings.local.json (ignoré par git).
 *
 * Usage :
 *   node scripts/haloscan-fetch.mjs credit
 *   node scripts/haloscan-fetch.mjs bulk      <mot-clé> [<mot-clé>...]          → volume, KVI, CPC, concurrence, nb de mots (1 ligne par mot-clé)
 *   node scripts/haloscan-fetch.mjs overview  <mot-clé> [--data metrics,serp,related_question,...]
 *   node scripts/haloscan-fetch.mjs match     <mot-clé> [--limit 25] [--exact]  → mots-clés contenant l'expression
 *   node scripts/haloscan-fetch.mjs related   <mot-clé> [--limit 25]            → recherches associées
 *   node scripts/haloscan-fetch.mjs questions <mot-clé> [--limit 25] [--paa]    → questions (PAA seules avec --paa)
 *   node scripts/haloscan-fetch.mjs similar   <mot-clé> [--limit 25]            → mots-clés à SERP similaire (cannibalisation)
 *   node scripts/haloscan-fetch.mjs scrap     <mot-clé> [<mot-clé>...]          → demande de (re)scrape de la SERP (consomme du crédit)
 *   node scripts/haloscan-fetch.mjs domain    <domaine> [--data metrics,positions_breakdown,best_keywords]
 *   node scripts/haloscan-fetch.mjs positions <domaine> [--limit 50] [--pos-max 20]  → mots-clés positionnés (gisement 4-20 avec --pos-min 4 --pos-max 20)
 *   node scripts/haloscan-fetch.mjs page-keywords <url> [--limit 25]            → meilleurs mots-clés d'une page
 *
 * Options communes : --json (sortie brute JSON), --lang fr (défaut).
 * Les mots-clés et domaines sont lus TELS QUELS ; un mot-clé inconnu renvoie
 * KEYWORD_UNKNOWN, un domaine absent de l'index SITE_NOT_FOUND / NO_RESULT —
 * c'est une information, pas une erreur (brief kaelix §5 : « domaine inconnu de l'index »).
 */

import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const BASE_URL = "https://api.haloscan.com/api";
const here = dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const command = args[0];
const flags = {};
const positional = [];
for (let i = 1; i < args.length; i++) {
  const a = args[i];
  if (a.startsWith("--")) {
    const key = a.slice(2);
    const next = args[i + 1];
    if (next !== undefined && !next.startsWith("--")) {
      flags[key] = next;
      i++;
    } else flags[key] = true;
  } else positional.push(a);
}

function usage(code = 1) {
  console.error(`Usage : node scripts/haloscan-fetch.mjs <credit|bulk|overview|match|related|questions|similar|scrap|domain|positions|page-keywords> ... (voir l'en-tête du script)`);
  process.exit(code);
}

async function loadApiKey() {
  if (process.env.HALOSCAN_API_KEY) return process.env.HALOSCAN_API_KEY.trim();
  const settings = join(here, "..", ".claude", "settings.local.json");
  try {
    const json = JSON.parse(await readFile(settings, "utf8"));
    const key = json?.env?.HALOSCAN_API_KEY;
    if (key) return String(key).trim();
  } catch {
    /* fall through */
  }
  console.error(`Clé Haloscan introuvable : définissez HALOSCAN_API_KEY ou posez-la dans le bloc env de .claude/settings.local.json (jamais dans git).`);
  process.exit(2);
}

async function call(endpoint, params, method = "POST") {
  const apiKey = await loadApiKey();
  const url = method === "GET" && params && Object.keys(params).length ? `${BASE_URL}${endpoint}?${new URLSearchParams(params)}` : `${BASE_URL}${endpoint}`;
  const res = await fetch(url, {
    method,
    headers: { accept: "application/json", "content-type": "application/json", "haloscan-api-key": apiKey },
    body: method === "POST" ? JSON.stringify(params ?? {}) : undefined,
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    console.error(`Haloscan ${endpoint} → HTTP ${res.status}`);
    console.error(typeof data === "object" ? JSON.stringify(data, null, 2).slice(0, 2000) : text.slice(0, 2000));
    process.exit(3);
  }
  return data;
}

const num = (v) => (v === null || v === undefined || v === "" ? "-" : v);
const pad = (s, n) => String(s).padEnd(n);
const lang = flags.lang || "fr";
const limit = flags.limit ? Number(flags.limit) : undefined;
const json = Boolean(flags.json);

/** The API answers with a `results` array (keyword tools) or a `data` object; print whichever is there. */
function rowsOf(data) {
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data)) return data;
  return [];
}

function printKeywordRows(rows) {
  if (!rows.length) {
    console.log("(aucun résultat)");
    return;
  }
  console.log(`${pad("mot-clé", 48)} ${pad("volume", 8)} ${pad("KVI", 5)} ${pad("CPC", 6)} ${pad("conc.", 6)} ${pad("mots", 4)}`);
  for (const r of rows) {
    const kw = r.keyword ?? r.query ?? r.text ?? "?";
    console.log(`${pad(kw, 48)} ${pad(num(r.volume), 8)} ${pad(num(r.kvi), 5)} ${pad(num(r.cpc), 6)} ${pad(num(r.competition), 6)} ${pad(num(r.word_count), 4)}`);
  }
}

async function main() {
  if (!command || flags.help) usage(command ? 1 : 0);
  const kw = positional[0];
  switch (command) {
    case "credit": {
      const data = await call("/user/credit", {}, "GET");
      if (json) return console.log(JSON.stringify(data, null, 2));
      console.log(`Crédits Haloscan : ${JSON.stringify(data)}`);
      return;
    }
    case "bulk": {
      if (!positional.length) usage();
      const data = await call("/keywords/bulk", { keywords: positional, lang, lineCount: positional.length });
      if (json) return console.log(JSON.stringify(data, null, 2));
      console.log(`# Haloscan bulk — ${positional.length} mot(s)-clé(s), ${new Date().toISOString().slice(0, 10)}`);
      const rows = rowsOf(data);
      const found = new Set(rows.map((r) => (r.keyword ?? "").toLowerCase()));
      printKeywordRows(rows);
      for (const k of positional) if (!found.has(k.toLowerCase())) console.log(`${pad(k, 48)} KEYWORD_UNKNOWN (inconnu de l'index Haloscan)`);
      return;
    }
    case "overview": {
      if (!kw) usage();
      const requested_data = flags.data ? String(flags.data).split(",") : ["metrics", "related_search", "related_question", "similar_serp", "serp"];
      const data = await call("/keywords/overview", { keyword: kw, lang, requested_data });
      if (json) return console.log(JSON.stringify(data, null, 2));
      console.log(`# Haloscan overview — « ${kw} » (${requested_data.join(", ")})`);
      console.log(JSON.stringify(data, null, 2).slice(0, 20000));
      return;
    }
    case "match":
    case "related":
    case "questions":
    case "similar": {
      if (!kw) usage();
      const endpoint = { match: "/keywords/match", related: "/keywords/related", questions: "/keywords/questions", similar: "/keywords/similar" }[command];
      const params = { keyword: kw, lang, lineCount: limit ?? 25 };
      if (flags.exact) params.exact_match = true;
      if (command === "questions" && flags.paa) params.keep_only_paa = true;
      const data = await call(endpoint, params);
      if (json) return console.log(JSON.stringify(data, null, 2));
      console.log(`# Haloscan ${command} — « ${kw} » (${params.lineCount} max)`);
      printKeywordRows(rowsOf(data));
      return;
    }
    case "scrap": {
      if (!positional.length) usage();
      const data = await call("/keywords/scrap", { keywords: positional });
      console.log(JSON.stringify(data, null, 2));
      return;
    }
    case "domain": {
      if (!kw) usage();
      const requested_data = flags.data ? String(flags.data).split(",") : ["metrics", "positions_breakdown", "best_keywords"];
      const data = await call("/domains/overview", { input: kw, mode: flags.mode || "root", requested_data });
      if (json) return console.log(JSON.stringify(data, null, 2));
      console.log(`# Haloscan domain — ${kw}`);
      console.log(JSON.stringify(data, null, 2).slice(0, 20000));
      return;
    }
    case "positions": {
      if (!kw) usage();
      const params = { input: kw, mode: flags.mode || "root", lineCount: limit ?? 50, order_by: flags["order-by"] || "traffic", order: "desc" };
      if (flags["pos-min"]) params.position_min = Number(flags["pos-min"]);
      if (flags["pos-max"]) params.position_max = Number(flags["pos-max"]);
      const data = await call("/domains/positions", params);
      if (json) return console.log(JSON.stringify(data, null, 2));
      const rows = rowsOf(data);
      console.log(`# Haloscan positions — ${kw} (${rows.length} lignes${flags["pos-max"] ? `, positions ${flags["pos-min"] || 1}-${flags["pos-max"]}` : ""})`);
      if (!rows.length) return console.log(`(aucune position — ${data?.message || data?.error || "NO_RESULT / SITE_NOT_FOUND"})`);
      console.log(`${pad("mot-clé", 48)} ${pad("pos.", 5)} ${pad("volume", 8)} ${pad("KVI", 5)} ${pad("trafic", 7)} url`);
      for (const r of rows) console.log(`${pad(r.keyword ?? "?", 48)} ${pad(num(r.position), 5)} ${pad(num(r.volume), 8)} ${pad(num(r.kvi), 5)} ${pad(num(r.traffic), 7)} ${r.url ?? ""}`);
      return;
    }
    case "page-keywords": {
      if (!kw) usage();
      const data = await call("/domains/pageBestKeywords", { input: kw, lineCount: limit ?? 25 });
      if (json) return console.log(JSON.stringify(data, null, 2));
      console.log(`# Haloscan page-keywords — ${kw}`);
      const rows = rowsOf(data);
      if (!rows.length) return console.log(`(aucun résultat — ${data?.message || data?.error || "NO_RESULT"})`);
      console.log(`${pad("mot-clé", 48)} ${pad("pos.", 5)} ${pad("volume", 8)} ${pad("KVI", 5)}`);
      for (const r of rows) console.log(`${pad(r.keyword ?? "?", 48)} ${pad(num(r.position), 5)} ${pad(num(r.volume), 8)} ${pad(num(r.kvi), 5)}`);
      return;
    }
    default:
      usage();
  }
}

main().catch((e) => {
  console.error(e?.message || e);
  process.exit(1);
});
