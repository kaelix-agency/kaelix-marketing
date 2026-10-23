// Génère la page HTML de l'audit gratuit (teaser) d'un prospect à partir de son audit.json.
//   node scripts/audit-teaser.mjs <slug-prospect> [--light]
//   --light : version « super light » envoyée au prospect (décision d'Axel du 23/10/2026) — score, verdict et les 3 points
//             (vu → ce que ça coûte), SANS « ce qu'on ferait », sans graphiques, sans piliers, sans plan : tout ça se
//             développe au rendez-vous. Sans --light : la version complète (la page longue de l'audit complet).
// Entrée  : prospects/<slug>/audit.json   (schéma : prospects/README.md)
// Sortie  : prospects/<slug>/audit-teaser.html  (page autoporteuse, à publier en lien privé)
// Rendu validé sur maquette le 2026-10-21 (canvas « Audit gratuit KAELIX — maquette »).
import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const slug = process.argv.slice(2).find((a) => !a.startsWith("--"));
const light = process.argv.includes("--light");
if (!slug) { console.error("usage : node scripts/audit-teaser.mjs <slug-prospect> [--light]"); process.exit(1); }
const dir = resolve(root, "prospects", slug);
const d = JSON.parse(await readFile(resolve(dir, "audit.json"), "utf8"));

// ---- aides ------------------------------------------------------------------
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const fr = (n, dec = 0) => Number(n).toLocaleString("fr-FR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
const dateFR = (iso) => new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
// Couleur de score : rouge < 40, orange < 60, vert sinon (règle de la maquette).
const tone = (s) => s < 40 ? { fg: "#C2431F", bar: "#C2431F", label: "Insuffisant" }
                 : s < 60 ? { fg: "#B8601A", bar: "#E8893C", label: "À renforcer" }
                 :          { fg: "#1F7A4D", bar: "#2E9A64", label: "Correct" };
const verdictLabel = (s) => s < 40 ? "Visibilité très faible" : s < 60 ? "Visibilité insuffisante" : s < 80 ? "Bonne base, à renforcer" : "Bonne visibilité";
const ACCENT = "#3D5BFF";

// Un graphique à barres horizontales : vous + concurrents, barre la plus longue = 100 %.
function bars(g, fmt) {
  const rows = [{ nom: "Vous", v: g.client, me: true }, ...g.concurrents.map((v, i) => ({ nom: d.concurrents[i]?.nom ?? `Concurrent ${i + 1}`, v }))];
  const max = Math.max(...rows.map(r => fmt.num(r.v))) || 1;
  return `
    <div class="chart">
      <div class="chart-head"><div class="chart-title">${esc(g.titre)}</div><div class="chart-sub">${esc(g.sous_titre)}</div></div>
      <div class="chart-rows">${rows.map(r => {
        const w = Math.max(3, Math.round(100 * fmt.num(r.v) / max));
        return `<div class="row"><div class="row-head"><span class="${r.me ? "me" : ""}">${esc(r.nom)}</span><span class="${r.me ? "me-val" : "val"}">${fmt.label(r.v)}</span></div><div class="track"><div class="fill ${r.me ? "fill-me" : ""}" style="width:${w}%"></div></div></div>`;
      }).join("")}</div>
      <div class="chart-foot">${g.conclusion}</div>
    </div>`;
}
const G = d.graphiques;
const charts = [
  G.visites && bars(G.visites, { num: v => v, label: v => `≈ ${fr(v)}` }),
  G.vitesse && bars(G.vitesse, { num: v => v, label: v => `${fr(v, 1)} s` }),
  G.avis && bars(G.avis, { num: v => v.nb, label: v => `${fr(v.nb)} avis · ${fr(v.note, 1)} ★` }),
].filter(Boolean).join("");

const pct = Math.max(0, Math.min(100, d.audit.score));
const vt = tone(d.audit.score);

// ---- page -------------------------------------------------------------------
const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Audit gratuit — ${esc(d.prospect.nom)} · KAELIX</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap">
<style>
:root{--bg:#F7F5F0;--card:#FFFFFF;--line:#E6E2D9;--ink:#141413;--ink-2:#4A4945;--mute:#6B6963;--faint:#8C8A82;--accent:${ACCENT};--track:#F0EDE6;--me:#E8893C;--me-ink:#B8601A;--other:#8C8A82}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:Manrope,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:#2A47E0}
.wrap{max-width:1040px;margin:0 auto;padding:0 24px}
.top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding-top:32px}
.logo{font-size:26px;font-weight:800;letter-spacing:-.02em}.logo b{color:var(--accent);font-weight:800}
.meta{font-size:13px;color:var(--mute)}
.hero{display:flex;flex-wrap:wrap;align-items:center;gap:40px;padding:56px 0 48px}
.hero-txt{flex:1 1 440px;min-width:0}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:14px}
h1{margin:0 0 16px;font-size:clamp(30px,5vw,44px);line-height:1.08;font-weight:800;letter-spacing:-.025em}
.lead{font-size:17px;line-height:1.55;color:var(--ink-2);max-width:560px}
.ring{width:200px;height:200px;border-radius:50%;background:conic-gradient(var(--me) 0 ${pct}%,var(--line) ${pct}% 100%);display:flex;align-items:center;justify-content:center;margin:0 auto}
.ring-in{width:160px;height:160px;border-radius:50%;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center}
.ring-n{font-size:64px;line-height:1;font-weight:800;letter-spacing:-.04em}.ring-s{font-size:13px;font-weight:600;color:var(--mute)}
.ring-l{text-align:center;font-size:14px;font-weight:700;color:var(--me-ink);margin-top:12px}
h2{margin:0 0 20px;font-size:clamp(22px,3.5vw,30px);font-weight:800;letter-spacing:-.025em}
.sec{padding:0 0 56px}
.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.grid4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
@media(max-width:860px){.grid3,.grid4{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.grid3,.grid4{grid-template-columns:1fr}}
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:24px}
.num{width:38px;height:38px;border-radius:11px;background:var(--accent);color:#fff;font-weight:800;font-size:16px;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
h3{margin:0 0 10px;font-size:19px;line-height:1.25;font-weight:800}
.vu{font-size:15px;line-height:1.5;color:var(--ink-2);margin-bottom:14px}
.coute{padding:12px 14px;border-radius:12px;background:var(--bg);margin-bottom:14px}
.coute small{display:block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--mute);margin-bottom:4px}
.coute div{font-size:15px;font-weight:700;line-height:1.4}
.act{font-size:14px;line-height:1.5}.act b{color:var(--accent)}
.band{background:var(--card);border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:56px 0 64px}
.band .sub{font-size:16px;color:var(--mute);margin:-10px 0 28px}
.chart{border:1px solid var(--line);border-radius:18px;padding:22px;display:flex;flex-direction:column;gap:18px}
.chart-title{font-size:16px;font-weight:800}.chart-sub{font-size:13px;color:var(--mute);margin-top:3px}
.chart-rows{display:flex;flex-direction:column;gap:12px}
.row-head{display:flex;justify-content:space-between;font-size:13px;color:var(--ink-2);margin-bottom:6px}
.row-head .me{font-weight:700;color:var(--ink)}.me-val{font-weight:800;color:var(--me-ink)}.val{font-weight:700}
.track{height:13px;border-radius:7px;background:var(--track);overflow:hidden}
.fill{height:100%;border-radius:7px;background:var(--other)}.fill-me{background:var(--me)}
.chart-foot{font-size:14px;line-height:1.5;padding-top:14px;border-top:1px solid var(--line)}
.pil .nom{font-size:14px;font-weight:700;color:var(--mute);margin-bottom:10px}
.pil .sc{font-size:42px;font-weight:800;letter-spacing:-.03em;line-height:1;margin-bottom:10px}
.pil .bar{height:8px;border-radius:4px;background:var(--track);overflow:hidden;margin-bottom:12px}.pil .bar div{height:100%;border-radius:4px}
.pil .ct{font-size:13px;line-height:1.5;color:var(--ink-2)}
.hint{font-size:14px;color:var(--mute)}
.plan{background:var(--ink);color:#ECEAE4;border-radius:24px;padding:40px}
.plan h2{color:#ECEAE4}.plan .sub{color:#9C9A93;font-size:15px;margin:-10px 0 28px}
.step small{display:block;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8FA0FF;margin-bottom:8px}
.step b{display:block;font-size:18px;font-weight:800;margin-bottom:8px}.step p{margin:0;font-size:14px;line-height:1.5;color:#C9C7C0}
.cta{display:flex;flex-wrap:wrap;align-items:center;gap:22px;padding-top:26px;margin-top:28px;border-top:1px solid #2A2A2E}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:0 30px;border-radius:14px;background:var(--accent);color:#fff;font-size:17px;font-weight:800;text-decoration:none}
.cta p{margin:0;flex:1 1 260px;font-size:14px;line-height:1.5;color:#9C9A93}.cta a.tel{color:#ECEAE4;font-weight:700}
.foot{font-size:12px;line-height:1.6;color:var(--faint);padding:20px 4px 60px}
</style>
</head>
<body>
<div class="wrap">
  <div class="top">
    <div class="logo">KÆLI<b>X</b></div>
    <div class="meta">Audit gratuit · préparé par ${esc(d.audit.auteur)} pour ${esc(d.prospect.prenom_contact)} · ${dateFR(d.audit.date)}</div>
  </div>

  <div class="hero">
    <div class="hero-txt">
      <div class="eyebrow">${esc(d.prospect.nom)} · ${esc(d.prospect.site)}</div>
      <h1>${esc(d.audit.verdict_titre)}</h1>
      <div class="lead">${esc(d.audit.verdict_texte)}</div>
    </div>
    <div>
      <div class="ring"><div class="ring-in"><div class="ring-n">${d.audit.score}</div><div class="ring-s">sur 100</div></div></div>
      <div class="ring-l" style="color:${vt.fg}">${verdictLabel(d.audit.score)}</div>
    </div>
  </div>

  <div class="sec">
    <h2>Les ${d.points.length} points qui vous coûtent le plus</h2>
    <div class="grid3">${d.points.map((p, i) => `
      <div class="card">
        <div class="num">${i + 1}</div>
        <h3>${esc(p.titre)}</h3>
        <div class="vu">${esc(p.vu)}</div>
        <div class="coute"><small>Ce que ça vous coûte</small><div>${esc(p.coute)}</div></div>
        ${light ? "" : `<div class="act"><b>Ce qu'on ferait :</b> ${esc(p.action)}</div>`}
      </div>`).join("")}
    </div>
  </div>
</div>

${charts && !light ? `<div class="band"><div class="wrap">
  <h2>${d.concurrents.length === 1 ? `Face à ${esc(d.concurrents[0].nom)}, votre concurrent direct` : "Face aux deux boutiques qui passent devant vous"}</h2>
  <div class="sub">${esc(d.graphiques_sous_titre ?? (d.concurrents.map(c => c.nom).join(" et ") + " : même activité, même zone, mêmes clients."))}</div>
  <div class="grid3">${charts}</div>
</div></div>` : ""}

<div class="wrap">
  ${light ? "" : `<div class="sec" style="padding-top:56px">
    <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px"><h2>Votre score, pilier par pilier</h2><div class="hint" style="margin-bottom:20px">Le détail de chaque pilier vous est présenté en rendez-vous.</div></div>
    <div class="grid4">${d.piliers.map(p => { const t = tone(p.score); return `
      <div class="card pil"><div class="nom">${esc(p.nom)}</div><div class="sc" style="color:${t.fg}">${p.score}</div><div class="bar"><div style="width:${p.score}%;background:${t.bar}"></div></div><div class="ct">${esc(p.constats)}</div></div>`; }).join("")}
    </div>
  </div>`}

  <div class="sec">
    <div class="plan">
      <h2>${light ? "Le détail, et par où on commencerait" : "Par où on commencerait"}</h2>
      <div class="sub">${light ? "Les quatre piliers, ce qu'on ferait contre chaque point et dans quel ordre : on vous le présente en 30 minutes, à l'écran." : "Dans l'ordre, avec ce que ça change pour vous."}</div>
      ${light ? "" : `<div class="grid3">${d.plan.map(s => `<div class="step"><small>${esc(s.periode)}</small><b>${esc(s.titre)}</b><p>${esc(s.texte)}</p></div>`).join("")}</div>`}
      <div class="cta">
        <a class="btn" href="${esc(d.cta.rdv_url)}">Réserver 30 min avec ${esc(d.audit.auteur)}</a>
        <p>${esc(d.cta.texte)} Ou par téléphone : <a class="tel" href="tel:${esc(d.cta.telephone.replace(/\s/g, ""))}">${esc(d.cta.telephone)}</a></p>
      </div>
    </div>
  </div>

  <div class="foot">
    Mesures réalisées le ${dateFR(d.audit.date)} sur ${esc(d.prospect.site)} et la fiche Google « ${esc(d.prospect.nom)} ». ${esc(d.methode)}<br>
    KAELIX · agence web &amp; SEO pour artisans et PME · kaelix.fr · Document personnel et confidentiel.
  </div>
</div>
</body>
</html>`;

const out = resolve(dir, light ? "audit-teaser.html" : "audit-complet.html");
await writeFile(out, html, "utf8");
console.log(light ? "teaser (super light) écrit :" : "page complète écrite :", out, `(${(html.length / 1024).toFixed(0)} Ko)`);
