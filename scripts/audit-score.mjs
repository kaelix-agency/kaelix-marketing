#!/usr/bin/env node
/**
 * KAELIX — audit gratuit, brique 2 : NOTATION à la grille (docs/grille-audit-gratuit.md, 26 critères, 100 / 50 / 0).
 *   node scripts/audit-score.mjs <slug> [--json] [--write-audit]
 *
 * Entrées : prospects/<slug>/collecte.json (brique 1) et, s'il existe, prospects/<slug>/lecture-manuelle.json — ce que
 *   l'opérateur a lu à la main pour les critères que la collecte ne mesure pas (10, 19, 20, 25, et tout critère qu'il veut
 *   forcer). Format : { "10": 50, "19": 0, "20": 100, "25": 0, "note": "…" } — la valeur est 100 / 50 / 0 ; une clé absente
 *   laisse le critère « non vérifiable ».
 * Sortie  : prospects/<slug>/scores.json + tableau lisible. Avec --write-audit, les 4 scores de piliers et le score
 *   global sont reportés dans prospects/<slug>/audit.json (champs `piliers[].score` et `audit.score`), le reste du fichier
 *   est laissé tel quel.
 *
 * Règles (grille du 21/10/2026, calibrage « sévère » gardé par décision d'Axel le 22/10/2026) :
 *   - le score d'un pilier est la MOYENNE de ses critères VÉRIFIÉS ; un critère non vérifiable est retiré du calcul et
 *     listé (règle des contrôles empêchés) ; un pilier sans aucun critère vérifié est « non vérifiable » et le global aussi ;
 *   - global = Site 30 % + Google 30 % + Fiche 20 % + Parcours 20 % ;
 *   - un audit noté ici ne se compare pas à un audit noté à la main (Cadres Concept du 21/10 : 51 à la main).
 */

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const slug = args[0] && !args[0].startsWith("--") ? args[0] : null;
if (!slug) { console.error("usage : node scripts/audit-score.mjs <slug> [--json] [--write-audit]"); process.exit(1); }
const dir = resolve(root, "prospects", slug);
const cFile = resolve(dir, "collecte.json");
if (!existsSync(cFile)) { console.error(`prospects/${slug}/collecte.json absent — lancer d'abord scripts/audit-collect.mjs ${slug}`); process.exit(2); }
const c = JSON.parse(await readFile(cFile, "utf8"));
const manual = existsSync(resolve(dir, "lecture-manuelle.json")) ? JSON.parse(await readFile(resolve(dir, "lecture-manuelle.json"), "utf8")) : {};

const P = c.piliers ?? {};
const site = P["1_site_vitesse"] ?? {}; const psi = site.prospect ?? {};
const goog = P["2_visibilite_google"] ?? {}; const syn = goog.synthese; const cat = goog.catalogue_et_contenus ?? {};
const fiche = (P["3_fiche_google"] ?? {}).prospect ?? {}; const ficheConc = (P["3_fiche_google"] ?? {}).concurrents ?? [];
const parc = P["4_parcours"] ?? {};
const LOCAL = c.prospect?.type === "local";
const ct = parc.contact ?? null;
const isBlocked = (x) => !x || x.statut === "non vérifiable" || x.statut === "aucune fiche trouvée" || x.statut === "fiche douteuse";
const nv = (raison) => ({ score: null, raison });
const ok = (score, preuve) => ({ score, preuve });
const tiers = (v, good, mid, { higherIsBetter = false } = {}) => v == null ? null : higherIsBetter ? (v >= good ? 100 : v >= mid ? 50 : 0) : (v < good ? 100 : v < mid ? 50 : 0);
const compVals = (arr, pick) => arr.filter((x) => !isBlocked(x)).map(pick).filter((v) => v != null);

/** Each criterion: number, label, pillar, and a function reading the collection (or the manual file) → ok()/nv(). */
const CRITERIA = [
  // ---- Pilier 1 — Site & vitesse ------------------------------------------------------------------------------------
  { n: 1, p: 1, label: "Note de vitesse mobile (note Google reprise)", f: () => isBlocked(psi) ? nv(psi.raison ?? "PageSpeed absent") : ok(psi.note_performance, `${psi.note_performance}/100 (PageSpeed mobile, ${psi.date?.slice(0, 10)}${psi.reprise ? ", mesure reprise" : ""})`) },
  { n: 2, p: 1, label: "Affichage de l'image principale (LCP) < 2,5 s / < 4 s", f: () => isBlocked(psi) || psi.lcp_s == null ? nv("LCP absent") : ok(tiers(psi.lcp_s, 2.5, 4), `${psi.lcp_s} s`) },
  { n: 3, p: 1, label: "Mesure terrain Google (vrais visiteurs) réussie", f: () => isBlocked(psi) ? nv("PageSpeed absent") : psi.terrain?.statut !== "mesuré" ? ok(0, "pas assez de visiteurs pour que Google mesure (absence = donnée)") : ok(psi.terrain.verdict === "FAST" ? 100 : psi.terrain.verdict === "AVERAGE" ? 50 : 0, `terrain ${psi.terrain.verdict}`) },
  { n: 4, p: 1, label: "Réponse du serveur < 0,5 s / < 1,5 s", f: () => isBlocked(psi) || psi.ttfb_s == null ? nv("TTFB absent") : ok(tiers(psi.ttfb_s, 0.5, 1.5), `${psi.ttfb_s} s (PageSpeed, 1 mesure — la grille en veut 5 : valeur indicative)`) },
  { n: 5, p: 1, label: "Fichiers chargés < 50 / < 100", f: () => isBlocked(psi) || psi.requetes == null ? nv("nombre de fichiers absent") : ok(tiers(psi.requetes, 50, 100), `${psi.requetes} fichiers`) },
  { n: 6, p: 1, label: "Site sécurisé (https)", f: () => { const h = psi.https ?? (typeof site.https_site === "boolean" ? site.https_site : null); return h == null ? nv("https non lu") : ok(h ? 100 : 0, h ? "https" : "http"); } },
  { n: 7, p: 1, label: "Qualité des balises (note SEO Google reprise)", f: () => isBlocked(psi) || psi.note_seo == null ? nv("note SEO absente") : ok(psi.note_seo, `${psi.note_seo}/100`) },
  // ---- Pilier 2 — Visibilité Google ----------------------------------------------------------------------------------
  { n: 8, p: 2, label: "Part des recherches dans les 3 premiers", f: () => !syn || !syn.recherches_testees ? nv("aucune SERP Haloscan") : verifiedSerps() === 0 ? nv("toutes les recherches sont inconnues de Haloscan") : ok(Math.round(100 * syn.dans_les_3_premiers / verifiedSerps()), `${syn.dans_les_3_premiers}/${verifiedSerps()} vérifiées (sur ${syn.recherches_testees} testées ; SERP Haloscan ordinateur)`) },
  { n: 9, p: 2, label: "Part des recherches dans les 50 premiers", f: () => !syn || !syn.recherches_testees ? nv("aucune SERP Haloscan") : verifiedSerps() === 0 ? nv("toutes les recherches sont inconnues de Haloscan") : ok(Math.round(100 * syn.dans_les_50_premiers / verifiedSerps()), `${syn.dans_les_50_premiers}/${verifiedSerps()} vérifiées`) },
  ...(LOCAL ? [
    { n: 10, p: 2, label: "Présence dans le pack local Maps sur les recherches testées (part, relevé direct)", f: () => man(10, "relevé direct des recherches (pack Maps) — lecture-manuelle.json « 10 » : part en %") },
    { n: 11, p: 2, label: "Pages service / zone dédiées (une page par service et par ville visée)", f: () => man(11, null) ?? (cat.entrees_menu == null ? nv("menu non lu") : nv(`menu lu : ${cat.entrees_menu} entrées — juger à la main si chaque service et chaque ville visée a sa page (lecture-manuelle.json « 11 »)`)) },
  ] : [
    { n: 10, p: 2, label: "Présence dans l'onglet Shopping", f: () => man(10, "recherche Google à la main") },
    { n: 11, p: 2, label: "Entrées de catalogue vs meilleur concurrent", f: () => man(11, null) ?? (cat.entrees_menu == null ? nv("menu non lu") : nv(`menu lu : ${cat.entrees_menu} entrées, mais pas celui des concurrents — à trancher à la main (lecture-manuelle.json « 11 »)`)) },
  ]),
  { n: 12, p: 2, label: "Contenus publiés (guides, articles)", f: () => man(12, null) ?? (cat.blog == null ? nv("site non lu") : cat.blog.present ? ok(50, `un blog existe (${cat.blog.url}) — régularité à juger à la main pour 100`) : ok(0, "aucun blog ni guide trouvé au menu")) },
  // ---- Pilier 3 — Fiche Google ---------------------------------------------------------------------------------------
  { n: 13, p: 3, label: "Nom de la fiche = enseigne", f: () => isBlocked(fiche) ? nv(fiche.raison ?? fiche.statut ?? "fiche absente") : ok(sameName(fiche.nom, c.prospect?.nom) ? 100 : 0, `fiche « ${fiche.nom} » vs enseigne « ${c.prospect?.nom} »`) },
  { n: 14, p: 3, label: "Catégorie principale adaptée", f: () => man(14, null) ?? (isBlocked(fiche) ? nv("fiche absente") : fiche.categorie == null ? nv("catégorie non remontée par Places — à lire sur la fiche (lecture-manuelle.json « 14 »)") : nv(`catégorie « ${fiche.categorie} » : adaptée ou non, c'est un jugement — lecture-manuelle.json « 14 »`)) },
  { n: 15, p: 3, label: "Horaires présents", f: () => isBlocked(fiche) ? nv("fiche absente") : ok(fiche.horaires ? 100 : 0, fiche.horaires ? "horaires présents" : "horaires absents") },
  { n: 16, p: 3, label: "Téléphone de la fiche = téléphone du site", f: () => { if (isBlocked(fiche) || !fiche.telephone) return nv("téléphone de la fiche absent"); const tels = Object.keys(parc.telephones ?? {}); if (!tels.length) return nv("aucun téléphone lu sur le site"); const t = fiche.telephone.replace(/\D/g, "").replace(/^33/, "0"); return ok(tels.includes(t) ? 100 : 0, `fiche ${fiche.telephone} · site ${tels.join(", ")}`); } },
  { n: 17, p: 3, label: "Photos ≥ 20 / 5-19 / < 5", f: () => man(17, null) ?? (isBlocked(fiche) ? nv("fiche absente") : fiche.nb_photos >= 10 ? nv(`Places renvoie 10 photos au plus (${fiche.nb_photos}) — compter sur la fiche pour trancher 50/100 (lecture-manuelle.json « 17 »)`) : ok(fiche.nb_photos >= 5 ? 50 : 0, `${fiche.nb_photos} photos`)) },
  { n: 18, p: 3, label: "Avis vs les deux concurrents", f: () => { if (isBlocked(fiche)) return nv("fiche absente"); const cv = compVals(ficheConc, (x) => x.nb_avis); if (!cv.length) return nv("aucune fiche concurrente lue"); const me = fiche.nb_avis ?? 0; const above = cv.filter((v) => me > v).length; return ok(above === cv.length ? 100 : above > 0 ? 50 : 0, `${me} avis vs ${cv.join(" / ")}`); } },
  { n: 19, p: 3, label: "Produits ou publications sur la fiche", f: () => man(19, "non exposé par Places — lire la fiche") },
  // ---- Pilier 4 — Parcours d'achat / de contact ----------------------------------------------------------------------
  ...(LOCAL ? [
    { n: 20, p: 4, label: "Téléphone cliquable au premier écran", f: () => man(20, null) ?? (!ct ? nv("site non lu") : ok(ct.tel_premier_ecran ? 100 : ct.tel_cliquable_accueil ? 50 : 0, ct.tel_premier_ecran ? "lien tel: en haut de l'accueil" : ct.tel_cliquable_accueil ? "lien tel: présent, mais bas dans la page" : "aucun lien tel: sur l'accueil")) },
    { n: 21, p: 4, label: "Avis affichés sur le site", f: () => man(21, null) ?? (parc.avis_sur_pages == null ? nv("site non lu") : parc.avis_sur_pages ? ok(100, "avis visibles sur l'accueil") : ok(0, "aucun avis lu sur l'accueil")) },
    { n: 22, p: 4, label: "Demande de devis ou de contact dès l'accueil (lien ou formulaire)", f: () => !ct ? nv("site non lu") : ok(ct.formulaire_accueil && ct.lien_devis_ou_contact_accueil ? 100 : ct.formulaire_accueil || ct.lien_devis_ou_contact_accueil ? 50 : 0, `formulaire sur l'accueil : ${ct.formulaire_accueil ? "oui" : "non"} · lien devis/contact : ${ct.lien_devis_ou_contact_accueil ? "oui" : "non"}`) },
    { n: 23, p: 4, label: "Zone d'intervention annoncée", f: () => !ct ? nv("site non lu") : ok(ct.zone_intervention?.length ? 100 : 0, ct.zone_intervention?.length ? ct.zone_intervention.slice(0, 3).join(" | ") : "aucune zone lue") },
    { n: 24, p: 4, label: "Délai d'intervention ou disponibilité annoncés", f: () => !ct ? nv("site non lu") : ok(ct.delai_intervention?.length ? 100 : 0, ct.delai_intervention?.length ? ct.delai_intervention.slice(0, 3).join(" | ") : "aucun délai lu") },
    { n: 25, p: 4, label: "Preuves de confiance (assurance, garanties, certifications)", f: () => !ct ? nv("site non lu") : ok(ct.preuves_confiance?.length >= 2 ? 100 : ct.preuves_confiance?.length ? 50 : 0, ct.preuves_confiance?.length ? ct.preuves_confiance.slice(0, 4).join(", ") : "aucune mention") },
  ] : [
  { n: 20, p: 4, label: "Tri du catalogue (pièce, format, prix)", f: () => man(20, "filtres non lisibles sans navigateur") },
    { n: 21, p: 4, label: "Avis affichés sur les fiches produit", f: () => man(21, null) ?? (parc.avis_sur_pages == null ? nv("site non lu") : parc.avis_sur_pages ? ok(50, "avis visibles sur l'accueil — sur les fiches produit : à confirmer à la main pour 100") : ok(0, "aucun avis lu sur l'accueil")) },
    { n: 22, p: 4, label: "Moyens de paiement annoncés avant le panier", f: () => !parc.paiement ? nv("site non lu") : ok(parc.paiement.avant_panier ? 100 : parc.paiement.mentions?.length ? 50 : 0, parc.paiement.avant_panier ? `annoncés : ${parc.paiement.mentions.join(", ")}` : parc.paiement.mentions?.length ? `mention vague ou tardive : ${parc.paiement.mentions.join(", ")}` : "aucune mention") },
    { n: 23, p: 4, label: "Conditions de retour annoncées", f: () => !parc.retours ? nv("site non lu") : ok(parc.retours.annonces ? 100 : parc.retours.dans_cgv_seulement ? 50 : 0, parc.retours.annonces ? "visibles" : parc.retours.dans_cgv_seulement ? "dans les CGV seulement" : "nulle part") },
    { n: 24, p: 4, label: "Paiement en plusieurs fois", f: () => !parc.paiement ? nv("site non lu") : ok(parc.paiement.plusieurs_fois ? 100 : 0, parc.paiement.plusieurs_fois ? "proposé" : "non proposé") },
    { n: 25, p: 4, label: "Relance des paniers abandonnés", f: () => man(25, "non constatable sans parcours réel") },
]),
  { n: 26, p: 4, label: "Cohérence des informations entre les pages", f: () => { if (parc.telephones_distincts == null) return nv("site non lu"); const tel = parc.telephones_distincts; const delaisN = (parc.delais_cites ?? []).length; const incoh = (tel > 1 ? 1 : 0) + (delaisN > 1 ? 1 : 0); return ok(incoh === 0 ? 100 : incoh === 1 ? 50 : 0, `${tel} téléphone(s) · délais cités : ${delaisN ? parc.delais_cites.join(" | ") : "aucun"} — relire les délais à la main : deux formulations ne sont pas forcément deux délais`); } },
];
function verifiedSerps() { return (goog.serps ?? []).filter((s) => s && !s.statut).length; }
// Une lecture manuelle vaut 0 / 50 / 100 — ou, pour les critères « en part » (8, 9, 10 local), n'importe quel entier de 0 à 100.
// La preuve reprend la note entière du fichier si elle est courte, sinon la phrase qui cite le numéro du critère.
function man(n, raisonSiAbsent) {
  const v = manual[String(n)];
  if (Number.isInteger(v) && v >= 0 && v <= 100) {
    const note = String(manual.note ?? "");
    const phrase = note.length <= 160 ? note : (note.split(/(?<=\.)\s+/).find((ph) => new RegExp(`(^|\\D)${n}\\s*:`).test(ph)) ?? "");
    return ok(v, `lecture manuelle${phrase ? " — " + phrase.trim() : ""}`);
  }
  return raisonSiAbsent == null ? null : nv(`${raisonSiAbsent} (lecture-manuelle.json « ${n} »)`);
}
function sameName(a, b) { const z = (s) => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, ""); return a && b && z(a) === z(b); }

const PILLARS = { 1: { nom: "Site & vitesse", poids: 0.3 }, 2: { nom: "Visibilité Google", poids: 0.3 }, 3: { nom: "Fiche Google", poids: 0.2 }, 4: { nom: "Achat & contact", poids: 0.2 } };
const rows = CRITERIA.map((cr) => { const r = cr.f() ?? nv("non évalué"); return { n: cr.n, pilier: cr.p, critere: cr.label, score: r.score, preuve: r.preuve ?? null, raison: r.raison ?? null }; });
const piliers = Object.entries(PILLARS).map(([k, meta]) => {
  const mine = rows.filter((r) => r.pilier === Number(k)); const done = mine.filter((r) => r.score != null);
  const score = done.length ? Math.round(done.reduce((a, r) => a + r.score, 0) / done.length) : null;
  return { pilier: Number(k), nom: meta.nom, poids: meta.poids, score, criteres_verifies: done.length, criteres_total: mine.length, non_verifiables: mine.filter((r) => r.score == null).map((r) => `${r.n} ${r.critere} — ${r.raison}`) };
});
const allScored = piliers.every((p) => p.score != null);
const global = allScored ? Math.round(piliers.reduce((a, p) => a + p.score * p.poids, 0)) : null;
const out = { slug, date: new Date().toISOString().slice(0, 10), grille: "docs/grille-audit-gratuit.md (21/10/2026, calibrage sévère gardé le 22/10/2026)", collecte_du: c.date, score_global: global,
  avertissement: allScored ? null : "score global non calculable : un pilier n'a aucun critère vérifié", piliers, criteres: rows,
  note: "Un critère non vérifiable est retiré de la moyenne de son pilier, jamais compté 0. Les scores à la grille ne se comparent pas aux audits notés à la main." };
await writeFile(resolve(dir, "scores.json"), JSON.stringify(out, null, 2) + "\n");

if (args.includes("--write-audit") && existsSync(resolve(dir, "audit.json"))) {
  const a = JSON.parse(await readFile(resolve(dir, "audit.json"), "utf8"));
  if (global != null) a.audit.score = global;
  a.piliers = piliers.map((p, i) => ({ ...(a.piliers?.[i] ?? { nom: p.nom, constats: "" }), nom: a.piliers?.[i]?.nom ?? p.nom, score: p.score ?? a.piliers?.[i]?.score ?? 0 }));
  a.audit.notation = `grille KAELIX du 21/10/2026, calculée le ${out.date} (${rows.filter((r) => r.score != null).length}/26 critères vérifiés)`;
  await writeFile(resolve(dir, "audit.json"), JSON.stringify(a, null, 2) + "\n");
}

if (args.includes("--json")) console.log(JSON.stringify(out, null, 2));
else {
  console.log(`# Notation ${slug} — grille du 21/10 (sévère) — collecte du ${c.date}`);
  for (const p of piliers) {
    console.log(`\n## ${p.pilier}. ${p.nom} (${Math.round(p.poids * 100)} %) → ${p.score ?? "non vérifiable"}  [${p.criteres_verifies}/${p.criteres_total} critères vérifiés]`);
    for (const r of rows.filter((r) => r.pilier === p.pilier)) console.log(`  ${String(r.n).padStart(2)}. ${r.score == null ? "  — " : String(r.score).padStart(3) + " "} ${r.critere} — ${r.preuve ?? "non vérifiable : " + r.raison}`);
  }
  console.log(`\n## Score global : ${global ?? "non calculable"}${out.avertissement ? " — " + out.avertissement : ""}  (${rows.filter((r) => r.score != null).length}/26 vérifiés)`);
  console.log(`→ prospects/${slug}/scores.json${args.includes("--write-audit") ? " + audit.json mis à jour" : ""}`);
}
