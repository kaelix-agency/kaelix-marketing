#!/usr/bin/env node
/**
 * KAELIX — audit gratuit, brique 3 : les 8 DIAPOSITIVES de l'audit complet, générées depuis le même JSON que le teaser.
 *   node scripts/audit-deck.mjs <slug> [--force]
 *
 * Entrées : prospects/<slug>/audit.json (schéma du teaser, prospects/README.md) et prospects/<slug>/deck-content.json —
 *   les textes propres à la présentation (forces, frictions, écarts, notes d'orateur…). Quand deck-content.json manque,
 *   le script l'ÉCRIT, pré-rempli depuis audit.json avec des « [À RÉDIGER] » là où il faut une phrase humaine, et
 *   s'arrête : la rédaction reste en session principale (CLAUDE.md), puis on relance.
 * Sortie  : prospects/<slug>/deck/{cover,forces,frictions,ecart,prestations,offre,bilan,suite}.html + deck.json,
 *   au format de l'artifact Slides (un <section> par fichier, styles en ligne, notes d'orateur dans <aside>) — modèle :
 *   prospects/cadres-concept/deck/ (présenté le 22/10/2026). Sans --force, un deck déjà présent n'est pas écrasé.
 *
 * Règles (prospects/README.md, « L'audit complet : structure validée ») : huit diapositives dans cet ordre, chaque fait
 *   une seule fois, les forces d'abord, l'offre en montants seulement, le tableau du bilan avec sa colonne « On garde ? »
 *   vide, une date pour finir. Pas de vocabulaire technique. Le score de la couverture est celui du teaser envoyé.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const slug = args[0] && !args[0].startsWith("--") ? args[0] : null;
if (!slug) { console.error("usage : node scripts/audit-deck.mjs <slug> [--force]"); process.exit(1); }
const dir = resolve(root, "prospects", slug);
const aFile = resolve(dir, "audit.json");
if (!existsSync(aFile)) { console.error(`prospects/${slug}/audit.json absent`); process.exit(2); }
const a = JSON.parse(await readFile(aFile, "utf8"));
const cFile = resolve(dir, "deck-content.json");

// ---- aides ------------------------------------------------------------------------------------------------------------
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const fr = (n, dec = 0) => Number(n).toLocaleString("fr-FR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
const dateFR = (iso) => new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
const today = new Date().toISOString().slice(0, 10);
const scoreColor = (s) => (s < 40 ? "#C2431F" : s < 60 ? "#E8893C" : "#2E9A64");
const concNames = (a.concurrents ?? []).map((c) => c.nom).filter(Boolean);
const concList = concNames.length ? concNames.join(" et ") : "vos concurrents";
const TODO = "[À RÉDIGER]";

// ---- 1. deck-content.json : pré-remplissage depuis audit.json ------------------------------------------------------------
/** Standard KAELIX offer for an online shop (October 2026): the shop, the seven options, the National visibility. */
const OFFRE = {
  boutique: 150, options_total: 220, visibilite: 199, total_plein: 569, mois_offerts: 4,
  options: [
    { nom: "Relance des paniers", bilan: "Paniers récupérés × panier moyen = chiffre d'affaires sauvé" },
    { nom: "Produits sur Google Shopping", bilan: "Visiteurs venus de Shopping, commandes, chiffre d'affaires" },
    { nom: "Cartes cadeaux", bilan: "Cartes vendues, montant encaissé" },
    { nom: "Demande d'avis Google", bilan: "Avis gagnés, note, effet sur votre fiche" },
    { nom: "Suivi des ventes", bilan: "C'est l'outil qui produit ce tableau" },
    { nom: "Mesure de fréquentation", bilan: "D'où viennent vos visiteurs, où ils s'arrêtent" },
    { nom: "Sauvegarde renforcée", bilan: "Ne se mesure pas en euros : c'est une assurance" },
  ],
};
function prefill() {
  const avis = a.graphiques?.avis;
  const forces = [];
  if (avis?.client?.note) forces.push({ chiffre: fr(avis.client.note, 1), titre: `sur ${fr(avis.client.nb)} avis Google`, texte: avis.concurrents?.length ? `${TODO} comparer : ${concNames.map((n, i) => `${n} ${fr(avis.concurrents[i]?.nb ?? 0)}`).join(", ")}.` : TODO });
  forces.push({ chiffre: TODO, titre: TODO, texte: `${TODO} une force mesurée (trafic relatif, vitesse chez les vrais visiteurs, livraison…)` });
  forces.push({ chiffre: TODO, titre: TODO, texte: `${TODO} ce que les concurrents n'ont pas (histoire, atelier, fabrication)` });
  forces.push({ chiffre: TODO, titre: TODO, texte: `${TODO} la base saine (site sécurisé, pages renseignées…)` });
  const points = a.points ?? [];
  return {
    _mode_d_emploi: "Pré-rempli depuis audit.json. Remplacer chaque « [À RÉDIGER] », relire les notes d'orateur (aside), puis relancer scripts/audit-deck.mjs. Un fait n'apparaît qu'une fois : les frictions (diapo 3) parlent du site seul, l'écart (diapo 4) seulement de ce que montre la comparaison. Pas de vocabulaire technique.",
    date_presentation: today,
    cover: { titre: a.audit?.verdict_titre ?? TODO, sous_titre: `Ce qui est solide chez vous, ce qui vous coûte des ventes, ce que font ${concList} — et ce qu'on fait contre, point par point.`, criteres: 26, aside: `Le ${a.audit?.score ?? "?"} sur 100 est celui de l'audit envoyé : ne pas en changer. ${TODO} le fil de la présentation.` },
    forces: { titre: "Ce qui est solide chez vous", cartes: forces, conclusion: "Vous avez déjà le plus difficile : <b>un produit qui plaît et des clients qui le disent.</b> Le reste — être vraiment trouvé, et ne plus perdre ceux qui arrivent — se répare.", aside: "Commencer par là, et le dire sans flatterie : ce sont des chiffres, pas des compliments." },
    frictions: { titre: points[0]?.titre ?? TODO, sous_titre: points[0]?.vu ?? TODO,
      lignes: [
        { etape: "arrive", bloque: points[0]?.vu ?? TODO, fait: points[0]?.action ?? TODO },
        { etape: "cherche", bloque: TODO, fait: TODO }, { etape: "compare", bloque: TODO, fait: TODO }, { etape: "hésite", bloque: TODO, fait: TODO }, { etape: "s'en va", bloque: TODO, fait: TODO },
      ],
      pied: `Relevé du ${a.audit?.date ? dateFR(a.audit.date) : TODO} · Vitesse mesurée avec l'outil de Google, sur téléphone`, aside: "Une ligne à la fois. Ne pas promettre de pourcentages : on n'a pas encore de mesure sur son site, c'est ce qu'on installe." },
    ecart: { titre: "Ce qu'ils ont et que vous n'avez pas",
      lignes: [
        { sujet: "Le prix d'appel", ecart: TODO, fait: "À trancher ensemble : aligner un prix d'appel, ou rendre visible ce qui justifie l'écart" },
        { sujet: "L'onglet Shopping de Google", ecart: TODO, fait: "Vos produits envoyés dans Shopping, avec vos avis" },
        { sujet: "Les conseils", ecart: TODO, fait: "Deux contenus par mois" },
        { sujet: "La place sur Google", ecart: points[1]?.vu ?? TODO, fait: points[1]?.action ?? TODO },
        { sujet: "Les langues", ecart: TODO, fait: "On en reparle au bilan, si les ventes suivent" },
      ],
      pied: `Relevé du ${a.audit?.date ? dateFR(a.audit.date) : TODO} : sites, fiches Google et onglet Shopping des enseignes comparées`, aside: "Le prix : poser la question, ne pas y répondre à sa place. Ne pas revenir sur ce qui était dans la diapositive d'avant." },
    prestations: { titre: "Ce qu'on met en place chez vous", colonnes: (a.plan ?? []).map((p) => ({ periode: p.periode, titre: p.titre, puces: [p.texte, TODO, TODO] })), aside: "La seule diapositive où l'on parle de nous. Dire les trois temps et s'arrêter." },
    offre: { titre: `Vous payez la boutique. Le reste est offert ${OFFRE.mois_offerts} mois.`, ...OFFRE, aside: `Un seul chiffre à faire entendre : ${OFFRE.total_plein} € de prestations pour ${OFFRE.boutique} €, sans engagement.` },
    bilan: { titre: "Vous décidez avec les chiffres", sous_titre: "D'abord ceux que votre site ne vous donne pas aujourd'hui : combien de visiteurs, d'où ils viennent, combien de commandes, votre panier moyen, et à quel moment les autres s'en vont.", options: OFFRE.options, conclusion: "Chaque ligne se décide séparément : vous gardez ce qui se paie tout seul, vous coupez le reste. <b>Et si les ventes suivent, on ouvre une langue.</b>", aside: "C'est la diapositive qui fait signer : un essai qui se juge sur pièces, ligne par ligne. Si on demande le prix d'une langue : 60 € par mois." },
    suite: { titre: TODO + " (une date : « Si on démarre cette semaine, la boutique est en ligne avant… »)", etapes: [
      { quand: "Aujourd'hui", titre: "Vous recevez le lien pour démarrer votre projet", texte: "Vous vérifiez, vous validez. Rien n'est débité avant le démarrage des travaux." },
      { quand: "Semaine 1", titre: "Une heure ensemble", texte: "Vos produits, vos photos, votre fiche Google, et vos prochaines dates." },
      { quand: "Semaines 3 à 5", titre: "Mise en ligne, vitesse vérifiée devant vous", texte: `Puis un point de 15 minutes chaque mois, et le bilan au ${OFFRE.mois_offerts}e mois.` },
    ], contact: "Axel · 06 35 44 30 10 · axel@kaelix.fr · kaelix.fr", aside: "Terminer par une date, pas par « réfléchissez »." },
  };
}
if (!existsSync(cFile)) {
  await writeFile(cFile, JSON.stringify(prefill(), null, 2) + "\n");
  console.log(`prospects/${slug}/deck-content.json créé (pré-rempli depuis audit.json). Remplacer les « ${TODO} » puis relancer : node scripts/audit-deck.mjs ${slug}`);
  process.exit(0);
}
const c = JSON.parse(await readFile(cFile, "utf8"));
const todos = (JSON.stringify(c).match(/\[À RÉDIGER\]/g) ?? []).length;
if (todos) console.error(`⚠️ ${todos} « ${TODO} » restent dans deck-content.json — le deck est généré, mais il n'est pas présentable.`);

// ---- 2. gabarits ----------------------------------------------------------------------------------------------------------
const FONT = "font-family:'Manrope', Arial, sans-serif";
const light = (id, inner, gap = 48, bottom = 128) => `<section id="${id}" data-transition="fade" style="background:#F7F5F0;color:#141413;${FONT};padding:128px 128px ${bottom}px;display:flex;flex-direction:column;gap:${gap}px">\n${inner}\n</section>\n`;
const dark = (id, inner, bg = "#141413", color = "#ECEAE4") => `<section id="${id}" data-transition="fade" style="background:${bg};color:${color};${FONT};padding:128px 128px 160px;display:flex;flex-direction:column;justify-content:space-between;gap:48px">\n${inner}\n</section>\n`;
const head = (kicker, titre, color = "#3D5BFF", size = 64, sub = "") => `<div style="display:flex;flex-direction:column;gap:12px">
<p style="font-size:26px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${color}">${esc(kicker)}</p>
<h2 style="font-size:${size}px;font-weight:800;letter-spacing:-2px;line-height:1.1;width:1600px">${esc(titre)}</h2>${sub ? `\n<p style="font-size:28px;line-height:1.4;color:#4A4945;width:1600px">${esc(sub)}</p>` : ""}
</div>`;
const foot = (text, color = "#8C8A82") => `<p style="position:absolute;left:128px;bottom:64px;font-size:24px;color:${color};width:1600px">${esc(text)}</p>`;
const aside = (text) => `<aside>${esc(text)}</aside>`;
const table = (cols, rows, font = 26) => `<table style="font-size:${font}px;background:#FFFFFF;border:2px solid #E6E2D9;border-radius:16px">
<tr style="background:#EFECE4">${cols.map((col, i) => `<th style="width:${col.w};text-align:${col.align ?? "left"};${i === 0 ? "padding:14px 20px" : ""}">${esc(col.t)}</th>`).join("")}</tr>
${rows.map((r) => `<tr>${r.map((cell, i) => `<td${cols[i].align ? ` style="text-align:${cols[i].align}"` : cols[i].green ? ' style="color:#1F7A4D"' : ""}>${i === 0 ? `<b>${esc(cell)}</b>` : cell === "" ? "&#160;" : esc(cell)}</td>`).join("")}</tr>`).join("\n")}
</table>`;
const card = (inner, border = "#E6E2D9", bg = "#FFFFFF", pad = 32) => `<div style="background:${bg};border:2px solid ${border};border-radius:24px;padding:${pad}px;display:flex;flex-direction:column;gap:12px">\n${inner}\n</div>`;

const slides = {};
const p = a.prospect ?? {}; const au = a.audit ?? {};
// 1. cover
slides.cover = dark("cover", `<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
<p style="font-size:44px;font-weight:800;letter-spacing:-1px;color:#ECEAE4">KÆLI<span style="color:#3D5BFF">X</span></p>
<p style="font-size:28px;color:#9C9A93">Audit complet · ${esc(dateFR(c.date_presentation ?? today))}</p>
</div>
<div style="display:flex;flex-direction:column;gap:32px">
<p style="font-size:28px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#8FA0FF">${esc([p.nom, p.site, p.ville].filter(Boolean).join(" · "))}</p>
<h1 style="font-size:92px;font-weight:800;line-height:1.05;letter-spacing:-3px;width:1560px">${esc(c.cover.titre)}</h1>
<p style="font-size:36px;line-height:1.4;color:#C9C7C0;width:1440px">${esc(c.cover.sous_titre)}</p>
</div>
<div style="background:#1F1F25;border:2px solid #2A2A2E;border-radius:24px;padding:32px 40px;display:flex;flex-direction:row;align-items:center;gap:48px">
<p style="font-size:30px;line-height:1.4;color:#C9C7C0;flex:1">Sur ${esc(c.cover.criteres)} critères mesurés — votre site, votre fiche Google et ${esc(au.perimetre?.recherches ?? 10)} recherches — nous évaluons votre performance en ligne à</p>
<div style="display:flex;flex-direction:column;align-items:center">
<p style="font-size:96px;font-weight:800;line-height:1;letter-spacing:-3px;color:${scoreColor(au.score ?? 0)}">${esc(au.score)}</p>
<p style="font-size:26px;color:#9C9A93">sur 100</p>
</div>
</div>
${foot(`Préparé par ${au.auteur ?? "Axel"}, KAELIX · Mesures du ${au.date ? dateFR(au.date) : "—"} · Document personnel et confidentiel`, "#6F6E68")}
${aside(c.cover.aside)}`);
// 2. forces
slides.forces = light("forces", `${head("D'abord, ce qui marche", c.forces.titre)}
<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:24px">
${(c.forces.cartes ?? []).map((f) => card(`<p style="font-size:${String(f.chiffre).length > 6 ? 48 : 72}px;font-weight:800;line-height:1.1;letter-spacing:-3px;color:#1F7A4D">${esc(f.chiffre)}</p>
<h3 style="font-size:26px;font-weight:800;line-height:1.25">${esc(f.titre)}</h3>
<p style="font-size:24px;line-height:1.45;color:#4A4945">${esc(f.texte)}</p>`)).join("\n")}
</div>
<p style="font-size:34px;line-height:1.35;color:#141413;width:1600px">${c.forces.conclusion}</p>
${aside(c.forces.aside)}`);
// 3. frictions
slides.frictions = light("frictions", `${head("Chez vous", c.frictions.titre, "#3D5BFF", 58, c.frictions.sous_titre)}
${table([{ t: "Le client…", w: "16%" }, { t: "Ce qui le bloque", w: "44%" }, { t: "Ce qu'on fait", w: "40%", green: true }], c.frictions.lignes.map((l) => [l.etape, l.bloque, l.fait]))}
${foot(c.frictions.pied)}
${aside(c.frictions.aside)}`, 36, 160);
// 4. écart
slides.ecart = light("ecart", `${head("Face à eux", c.ecart.titre)}
${table([{ t: "Le sujet", w: "20%" }, { t: "L'écart", w: "44%" }, { t: "Ce qu'on fait", w: "36%", green: true }], c.ecart.lignes.map((l) => [l.sujet, l.ecart, l.fait]))}
${foot(c.ecart.pied)}
${aside(c.ecart.aside)}`, 40, 160);
// 5. prestations
slides.prestations = light("prestations", `${head("Notre intervention", c.prestations.titre)}
<div style="display:grid;grid-template-columns:${c.prestations.colonnes.map(() => "1fr").join(" ")};gap:28px">
${c.prestations.colonnes.map((col) => card(`<p style="font-size:24px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#3D5BFF">${esc(col.periode)}</p>
<h3 style="font-size:32px;font-weight:800;line-height:1.2">${esc(col.titre)}</h3>
<ul style="font-size:24px;line-height:1.5;color:#4A4945">
${(col.puces ?? []).map((x) => `<li>${esc(x)}</li>`).join("\n")}
</ul>`, "#E6E2D9", "#FFFFFF", 36)).join("\n")}
</div>
${aside(c.prestations.aside)}`, 44);
// 6. offre
const o = c.offre;
slides.offre = dark("offre", `${head("L'offre", o.titre, "#8FA0FF")}
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:28px">
${card(`<p style="font-size:26px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8FA0FF">La boutique</p>
<p style="font-size:72px;font-weight:800;line-height:1;letter-spacing:-2px;color:#ECEAE4">${fr(o.boutique)} €</p>
<p style="font-size:28px;color:#9C9A93">hors taxes, par mois</p>
<p style="font-size:26px;line-height:1.5;color:#C9C7C0">Sans frais de création. Sans engagement. Création, hébergement et maintenance compris.</p>`, "#3D5BFF", "#1F1F25", 40)}
${card(`<p style="font-size:26px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6FD6A8">Les ${o.options.length === 7 ? "sept" : o.options.length} outils</p>
<p style="font-size:72px;font-weight:800;line-height:1;letter-spacing:-2px;color:#6FD6A8">0 €</p>
<p style="font-size:28px;color:#9C9A93">au lieu de ${fr(o.options_total)} € par mois</p>
<p style="font-size:26px;line-height:1.5;color:#C9C7C0">Tous activés, offerts ${o.mois_offerts} mois. Vous ne gardez ensuite que ceux qui se paient tout seuls.</p>`, "#2E9A64", "#1F1F25", 40)}
${card(`<p style="font-size:26px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6FD6A8">La visibilité</p>
<p style="font-size:72px;font-weight:800;line-height:1;letter-spacing:-2px;color:#6FD6A8">0 €</p>
<p style="font-size:28px;color:#9C9A93">au lieu de ${fr(o.visibilite)} € par mois</p>
<p style="font-size:26px;line-height:1.5;color:#C9C7C0">Offerte ${o.mois_offerts} mois. La décision se prend au bilan, les résultats sous les yeux.</p>`, "#2E9A64", "#1F1F25", 40)}
</div>
<div style="display:flex;flex-direction:row;gap:48px;align-items:center;border-top:2px solid #2A2A2E;padding:32px 0 0 0">
<p style="font-size:36px;font-weight:800;color:#ECEAE4">Pendant ${o.mois_offerts} mois : <span style="color:#8FA0FF">${fr(o.boutique)} € hors taxes par mois</span>, tout compris</p>
<p style="font-size:26px;line-height:1.4;color:#9C9A93;width:600px">${fr(o.total_plein)} € de prestations pour ${fr(o.boutique)} €. Rien n'est débité avant le démarrage, et le code du site vous appartient si vous partez.</p>
</div>
${foot("Tarifs KAELIX d'octobre 2026 · Prix hors taxes, TVA 20 % en sus", "#6F6E68")}
${aside(o.aside)}`);
// 7. bilan
slides.bilan = light("bilan", `${head(`Au ${c.offre.mois_offerts}e mois`, c.bilan.titre, "#3D5BFF", 64, c.bilan.sous_titre)}
${table([{ t: "Ce qu'on a activé", w: "32%" }, { t: "Ce qu'on vous montre au bilan", w: "48%" }, { t: "On garde ?", w: "20%", align: "center" }], c.bilan.options.map((x) => [x.nom, x.bilan, ""]), 24)}
<p style="font-size:30px;line-height:1.35;color:#141413;width:1600px">${c.bilan.conclusion}</p>
${aside(c.bilan.aside)}`, 32);
// 8. suite
slides.suite = dark("suite", `<div style="display:flex;flex-direction:column;gap:32px">
<p style="font-size:26px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#D6DDFF">La suite</p>
<h2 style="font-size:96px;font-weight:800;letter-spacing:-3px;line-height:1.05;width:1560px">${esc(c.suite.titre)}</h2>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:28px">
${c.suite.etapes.map((e) => `<div style="background:#2A47E0;border-radius:24px;padding:36px;display:flex;flex-direction:column;gap:12px">
<p style="font-size:24px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#D6DDFF">${esc(e.quand)}</p>
<p style="font-size:30px;font-weight:800;line-height:1.2">${esc(e.titre)}</p>
<p style="font-size:24px;line-height:1.4;color:#D6DDFF">${esc(e.texte)}</p>
</div>`).join("\n")}
</div>
${foot(c.suite.contact, "#D6DDFF")}
${aside(c.suite.aside)}`, "#3D5BFF", "#FFFFFF");

// ---- 3. écriture ------------------------------------------------------------------------------------------------------------
const out = resolve(dir, "deck");
const order = ["cover", "forces", "frictions", "ecart", "prestations", "offre", "bilan", "suite"];
if (existsSync(resolve(out, "deck.json")) && !args.includes("--force")) { console.error(`prospects/${slug}/deck/ existe déjà — relancer avec --force pour l'écraser.`); process.exit(3); }
await mkdir(out, { recursive: true });
for (const id of order) await writeFile(resolve(out, `${id}.html`), slides[id]);
await writeFile(resolve(out, "deck.json"), JSON.stringify({
  v: 4, createdOnFiles: { v: 1, at: new Date().toISOString() }, lists: "css", title: `Audit complet KAELIX — ${p.nom ?? slug}`, order,
  sections: { s1: { description: `Ce qui est solide chez ${p.nom ?? "lui"}, puis ce qui lui coûte des ventes`, start: "cover" }, s2: { description: `Ce que la comparaison avec ${concList} révèle`, start: "ecart" }, s3: { description: `Ce qu'on met en place, ce que ça coûte, et comment il le jugera au ${c.offre.mois_offerts}e mois`, start: "prestations" } },
  faces: { manrope: { family: "Manrope", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&display=swap" } }, designSystems: [],
}, null, 2) + "\n");
console.log(`Deck écrit : prospects/${slug}/deck/ (8 diapositives + deck.json)${todos ? ` — ⚠️ ${todos} « ${TODO} » à remplacer dans deck-content.json` : ""}`);
