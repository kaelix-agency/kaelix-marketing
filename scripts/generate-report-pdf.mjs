#!/usr/bin/env node
/**
 * Génère le PDF « prêt à l'envoi » d'un rapport mensuel client.
 *
 *   npm run report:pdf -- clients/<slug>/reports/2026-08-rapport-client.md
 *   (sortie : même dossier, même nom, extension .pdf)
 *
 * Contrat du fichier markdown (docs/rationnel-des-choix.md §1.17, command /report) :
 *   - un bandeau INTERNE en tête (table Client / Période / Statut / …), jamais rendu ;
 *   - un marqueur `<!-- CLIENT -->` : tout ce qui suit est le contenu client ;
 *   - le statut est lu dans le bandeau : 🕓 brouillon → bandeau « BROUILLON » dans le
 *     PDF ; ✅ validé ou 📤 émis → PDF propre.
 *
 * Outils : marked (markdown → HTML) + Playwright/Chromium (HTML → PDF A4).
 * Aucune dépendance externe (pandoc, LaTeX) : reproductible sur la machine de l'agence.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname, basename } from "node:path";
import { marked } from "marked";
import { chromium } from "playwright";

const input = process.argv[2];
if (!input) {
  console.error("Usage : node scripts/generate-report-pdf.mjs <chemin/rapport.md>");
  process.exit(1);
}

const mdPath = resolve(input);
const pdfPath = mdPath.replace(/\.md$/i, ".pdf");
const raw = await readFile(mdPath, "utf8");

const MARKER = "<!-- CLIENT -->";
const idx = raw.indexOf(MARKER);
if (idx === -1) {
  console.error(`Marqueur ${MARKER} absent : le bandeau interne ne peut pas être séparé du contenu client.`);
  process.exit(1);
}
const banner = raw.slice(0, idx);
const body = raw.slice(idx + MARKER.length).trim();

/** Lit une ligne « | **Clé** | valeur | » du bandeau interne. */
const meta = (key) => {
  const m = banner.match(new RegExp(`\\|\\s*\\*\\*${key}\\*\\*\\s*\\|\\s*([^|]+)\\|`, "i"));
  return m ? m[1].trim() : "";
};
const client = meta("Client") || basename(dirname(dirname(mdPath)));
const periode = meta("Période") || basename(mdPath).slice(0, 7);
const statut = meta("Statut");
const isDraft = !/✅|📤/.test(statut);
const generatedOn = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

marked.setOptions({ gfm: true, breaks: false });
const html = marked.parse(body);

const css = `
  @page { size: A4; margin: 22mm 18mm 20mm 18mm; }
  * { box-sizing: border-box; }
  html { font-size: 10.5pt; }
  body {
    font-family: "Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif;
    color: #1b2430; line-height: 1.5; margin: 0;
  }
  .brand {
    display: flex; justify-content: space-between; align-items: baseline;
    border-bottom: 2px solid #1f3a5f; padding-bottom: 6px; margin-bottom: 18px;
  }
  .brand .name { font-weight: 800; letter-spacing: 0.22em; font-size: 13pt; color: #1f3a5f; }
  .brand .meta { font-size: 8.5pt; color: #5d6b7a; text-align: right; }
  .draft {
    background: #fff3e0; border: 1px solid #e8a23c; color: #8a4b00;
    font-weight: 600; font-size: 9pt; padding: 6px 10px; margin-bottom: 14px; border-radius: 3px;
  }
  h1 { font-size: 19pt; color: #1f3a5f; margin: 0 0 4px; line-height: 1.25; }
  .subtitle { color: #5d6b7a; margin: 0 0 18px; font-size: 10pt; }
  h2 {
    font-size: 12.5pt; color: #1f3a5f; margin: 20px 0 8px; padding-bottom: 3px;
    border-bottom: 1px solid #d8dee6; page-break-after: avoid;
  }
  h2 .num { display: inline-block; min-width: 1.6em; color: #c2571d; font-weight: 800; }
  h3 { font-size: 10.5pt; margin: 12px 0 4px; color: #2b3a4b; page-break-after: avoid; }
  p { margin: 0 0 8px; }
  ul, ol { margin: 0 0 8px 1.2em; padding: 0; }
  li { margin: 0 0 3px; }
  table {
    border-collapse: collapse; width: 100%; margin: 6px 0 12px; font-size: 9.5pt;
    page-break-inside: avoid;
  }
  th, td { border: 1px solid #d8dee6; padding: 5px 8px; text-align: left; vertical-align: top; }
  th { background: #eef2f7; color: #1f3a5f; font-weight: 600; }
  tr:nth-child(even) td { background: #fafbfc; }
  a { color: #1f3a5f; text-decoration: none; border-bottom: 1px solid #b8c4d3; }
  blockquote {
    margin: 8px 0 12px; padding: 8px 12px; border-left: 3px solid #c2571d;
    background: #fbf6f1; color: #2b3a4b;
  }
  strong { color: #1b2430; }
  hr { border: 0; border-top: 1px solid #d8dee6; margin: 16px 0; }
  .closing { margin-top: 22px; font-size: 9.5pt; color: #5d6b7a; }
`;

// Numérote les H2 « ① … » déjà écrits en markdown avec un numéro cerclé : on garde le
// symbole, on le stylise seulement.
const styledHtml = html.replace(/<h2>([①-⑳])\s*/g, '<h2><span class="num">$1</span>');

const page = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${css}</style></head><body>
  <div class="brand">
    <div class="name">KAELIX</div>
    <div class="meta">Rapport mensuel · ${escapeHtml(client)} · ${escapeHtml(periode)}<br>Édité le ${generatedOn}</div>
  </div>
  ${isDraft ? '<div class="draft">BROUILLON — document non validé, ne pas transmettre au client.</div>' : ""}
  ${styledHtml}
  <p class="closing">KAELIX · acquisition et visibilité en ligne · ce document est établi à partir des données réelles de la période ; les positions et le trafic des contenus de moins de 90 jours ne sont pas encore stabilisés.</p>
</body></html>`;

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

const browser = await chromium.launch();
try {
  const tab = await browser.newPage();
  await tab.setContent(page, { waitUntil: "load" });
  await tab.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate: `<div style="width:100%;font-size:7.5pt;color:#8a96a3;padding:0 18mm;display:flex;justify-content:space-between;font-family:'Segoe UI',Arial,sans-serif;">
      <span>KAELIX · ${escapeHtml(client)} · ${escapeHtml(periode)}</span>
      <span>page <span class="pageNumber"></span> / <span class="totalPages"></span></span>
    </div>`,
    margin: { top: "16mm", right: "18mm", bottom: "18mm", left: "18mm" },
  });
} finally {
  await browser.close();
}

console.log(`${isDraft ? "PDF brouillon" : "PDF final"} : ${pdfPath}`);
