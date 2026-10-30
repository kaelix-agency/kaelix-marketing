# Briefs de production (`/research`) — Transports Ansquer

Livrables de la phase 0 (`/research`) : un **brief de production** par sujet, persisté ici AVANT présentation au gate. Motif : un brief non commité meurt avec la session (leçon du 2026-08-24 : le brief du guide empotage/dépotage a été perdu et a dû être refait le 2026-08-28).

## Règles

- **Un brief = un fichier daté** `AAAA-MM-JJ-<slug-sujet>.md`. Jamais d'append : une re-recherche du même sujet = un nouveau fichier, l'ancien reste (historique des angles).
- Le brief est **lu par `/write`** : il porte l'angle, le plan H2/H3, les mots-clés, le first-party à mobiliser, la capture et le maillage. Il ne contient jamais de rédaction.
- Les mini-briefs `serp-analyst` bruts sont collés dans le brief (annexe) — ce sont les données du verdict.
- Statut : 🕓 `en attente de GO` · ✅ `GO opérateur` (date) · ⛔ `écarté` (motif) · 📝 `produit` (lien tracking).

## Index

| Fichier | Sujet | Mot-clé principal | Statut |
|---|---|---|---|
| [`2026-08-28-guide-empotage-depotage-conteneur.md`](./2026-08-28-guide-empotage-depotage-conteneur.md) | Guide empotage + dépotage de conteneur (08/2026, cluster A, P2) | empotage conteneur + dépotage conteneur | 📝 produit — GO 2026-08-28, `/write` le jour même, double PASS, PR #5 mergée `128399d` → ✅ publié (`tracking.md`) |
| [`2026-09-02-comparatif-transport-dedie-messagerie-coursier.md`](./2026-09-02-comparatif-transport-dedie-messagerie-coursier.md) | Comparatif dédié / messagerie / coursier (09/2026 n°1, cluster F ⭐, P1) | transport dédié (70) + traîne comparative vierge | 📝 produit — GO 2026-09-02, scroll-check chrome ✅, `/write` le jour même, double PASS, PR #6 mergée `16c8e45` → ✅ publié (`tracking.md`) |
| [`2026-09-13-combien-de-palettes-dans-un-conteneur.md`](./2026-09-13-combien-de-palettes-dans-un-conteneur.md) | Combien de palettes dans un conteneur ? 20'/40'/40'HC (09/2026 n°2, cluster A, P2) | combien de palettes dans un conteneur (cluster ≈ 230-280) + 100x120/40' (90) | 📝 produit — GO « continue » 2026-09-13, `/write` 2026-09-14, double PASS, PR #7 mergée `0e4784c` → ✅ publié (`tracking.md`) |
| [`2026-10-30-refresh-entrepot-cross-docking-ile-de-france.md`](./2026-10-30-refresh-entrepot-cross-docking-ile-de-france.md) | Refresh `/stockage/entrepot-gennevilliers/` — cross-docking Île-de-France : title/meta + FAQ + schéma du flux quai PL → quai VL (11/2026, cluster C, P1) | crossdocking île de france (GSC 94 imprs pos. 4, 0 clic ; Haloscan NA) | 📝 produit — `go-11/2026` (GO d'Axel 29/10) → brief prêt 2026-10-30 → refresh codé le jour même, double PASS, **PR [#11](https://github.com/kaelix-agency/transports-ansquer/pull/11) ouverte** (gate : weekly du 2/11) |
| [`2026-10-30-commissionnaire-ou-transporteur-qui-mandater.md`](./2026-10-30-commissionnaire-ou-transporteur-qui-mandater.md) | Commissionnaire de transport ou transporteur : qui mandater ? (11/2026, cluster B, P2) | différence transporteur commissionnaire (NA, KVI 1 — pari-émergent) ; tête « commissionnaire de transport » (200) en corps | 📝 produit — `go-11/2026` (GO d'Axel 29/10) → brief prêt 2026-10-30 → `/write` le jour même, double PASS, **PR [#12](https://github.com/kaelix-agency/transports-ansquer/pull/12) ouverte** (gate : weekly du 2/11). ⚠️ Annexe E du brief : « capacité financière » parmi les conditions du registre était fautive (supprimée depuis 2010, constat fact-checker) — l'article dit « honorabilité professionnelle et capacité professionnelle » |
