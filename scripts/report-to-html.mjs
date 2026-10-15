// Variante HTML-only de generate-report-pdf.mjs, pour les environnements sans Chromium
// (tâches cloud claude.ai) : même séparation bandeau/client, même CSS, footer porté en
// règles @page CSS pour WeasyPrint. Sortie : <rapport>.html à côté du .md, puis :
//   python3 -m weasyprint <rapport>.html <rapport>.pdf
// Rationnel : la migration cloud du 2026-10-15 (to-do transports-ansquer #20).
import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname, basename } from "node:path";
import { marked } from "marked";

const mdPath = resolve(process.argv[2]);
const htmlPath = mdPath.replace(/\.md$/i, ".html");
const raw = await readFile(mdPath, "utf8");
const MARKER = "<!-- CLIENT -->";
const idx = raw.indexOf(MARKER);
if (idx === -1) { console.error("marqueur CLIENT absent"); process.exit(1); }
const banner = raw.slice(0, idx);
const body = raw.slice(idx + MARKER.length).trim();
const meta = (key) => {
  const m = banner.match(new RegExp(`\\|\\s*\\*\\*${key}\\*\\*\\s*\\|\\s*([^|]+)\\|`, "i"));
  return m ? m[1].trim() : "";
};
const client = meta("Client") || basename(dirname(dirname(mdPath)));
const periode = meta("Période") || basename(mdPath).slice(0, 7);
const statut = meta("Statut");
const isDraft = !/^(✅|📤)/.test(statut);
const generatedOn = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

marked.setOptions({ gfm: true, breaks: false });
const html = marked.parse(body);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const css = `
  @page {
    size: A4; margin: 16mm 18mm 18mm 18mm;
    @bottom-left { content: "KAELIX · ${client} · ${periode}"; font-size: 7.5pt; color: #8a96a3; font-family: "DejaVu Sans", Arial, sans-serif; }
    @bottom-right { content: "page " counter(page) " / " counter(pages); font-size: 7.5pt; color: #8a96a3; font-family: "DejaVu Sans", Arial, sans-serif; }
  }
  * { box-sizing: border-box; }
  html { font-size: 10.5pt; }
  body { font-family: "DejaVu Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif; color: #1b2430; line-height: 1.5; margin: 0; }
  .brand { border-bottom: 2px solid #1f3a5f; padding-bottom: 6px; margin-bottom: 18px; }
  .brand .name { font-weight: 800; letter-spacing: 0.22em; font-size: 13pt; color: #1f3a5f; display: inline-block; }
  .brand .meta { font-size: 8.5pt; color: #5d6b7a; text-align: right; float: right; }
  .draft { background: #fff3e0; border: 1px solid #e8a23c; color: #8a4b00; font-weight: 600; font-size: 9pt; padding: 6px 10px; margin-bottom: 14px; border-radius: 3px; }
  h1 { font-size: 19pt; color: #1f3a5f; margin: 0 0 4px; line-height: 1.25; }
  .subtitle { color: #5d6b7a; margin: 0 0 18px; font-size: 10pt; }
  h2 { font-size: 12.5pt; color: #1f3a5f; margin: 20px 0 8px; padding-bottom: 3px; border-bottom: 1px solid #d8dee6; page-break-after: avoid; }
  h2 .num { display: inline-block; min-width: 1.6em; color: #c2571d; font-weight: 800; }
  h3 { font-size: 10.5pt; margin: 12px 0 4px; color: #2b3a4b; page-break-after: avoid; }
  p { margin: 0 0 8px; }
  ul, ol { margin: 0 0 8px 1.2em; padding: 0; }
  li { margin: 0 0 3px; }
  table { border-collapse: collapse; width: 100%; margin: 6px 0 12px; font-size: 9.5pt; page-break-inside: avoid; }
  th, td { border: 1px solid #d8dee6; padding: 5px 8px; text-align: left; vertical-align: top; }
  th { background: #eef2f7; color: #1f3a5f; font-weight: 600; }
  tr:nth-child(even) td { background: #fafbfc; }
  a { color: #1f3a5f; text-decoration: none; border-bottom: 1px solid #b8c4d3; }
  blockquote { margin: 8px 0 12px; padding: 8px 12px; border-left: 3px solid #c2571d; background: #fbf6f1; color: #2b3a4b; }
  strong { color: #1b2430; }
  hr { border: 0; border-top: 1px solid #d8dee6; margin: 16px 0; }
  img { max-width: 100%; display: block; margin: 8px auto 2px; }
  .closing { margin-top: 22px; font-size: 9.5pt; color: #5d6b7a; }
`;

const styledHtml = html.replace(/<h2>([①-⑳])\s*/g, '<h2><span class="num">$1</span>');
const page = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${css}</style></head><body>
  <div class="brand"><div class="meta">Rapport mensuel · ${esc(client)} · ${esc(periode)}<br>Édité le ${generatedOn}</div><div class="name">KAELIX</div></div>
  ${isDraft ? '<div class="draft">BROUILLON — document non validé, ne pas transmettre au client.</div>' : ""}
  ${styledHtml}
  <p class="closing">KAELIX · acquisition et visibilité en ligne · ce document est établi à partir des données réelles de la période ; les positions et le trafic des contenus de moins de 90 jours ne sont pas encore stabilisés.</p>
</body></html>`;
await writeFile(htmlPath, page);
console.log(`${isDraft ? "HTML brouillon" : "HTML final"} : ${htmlPath}`);
