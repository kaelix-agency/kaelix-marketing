# Briefs de production (`/research`) — KAELIX (l'agence, cliente d'elle-même)

Livrables de la phase 0 (`/research`) : un **brief de production** par sujet, **persisté et commité ici AVANT présentation au gate**. Un brief non commité meurt avec la session (leçon du 2026-08-24, Ansquer).

## Règles

- **Un brief = un fichier daté** `AAAA-MM-JJ-<slug-sujet>.md`. Jamais d'append : une re-recherche du même sujet = un nouveau fichier, l'ancien reste (historique des angles).
- Le brief est **l'entrée de `/write` ou `/refresh`** : angle, format cible, longueur, plan H2/H3, mots-clés, FAQ, first-party à mobiliser (avec statut de véracité), composants, visuels, maillage, capture, garde-fous. Il ne contient jamais de rédaction.
- Les mini-briefs `serp-analyst` bruts sont annexés au brief — ce sont les données du verdict. Les contrôles empêchés (scroll non vérifiable, outil indisponible) y figurent **tels quels**.
- **KPI datés** (§1.29, 22/10) : volume et KVI portent toujours leur date de relevé ; quand le MCP Haloscan ne charge pas, `scripts/haloscan-fetch.mjs bulk` donne les chiffres du jour (même champ `kvi` que le MCP).
- Particularité kaelix : plusieurs pages du plan (accueil, pages services, pages locales, `/audit-gratuit`) sont des **composants TSX** du repo web-agency, pas des MDX — le contrat de contenu s'applique sur le fond (véracité, lexique v6, FAQ, maillage, NAP), pas sur la whitelist de composants.
- Les décisions attendues du gate sont listées en fin de brief ; les arbitrages rendus sont tracés dans le fichier (ou dans le journal du `content-plan.md`) au GO.

**Statuts** : 🕓 `en attente de GO` · ✅ `GO opérateur` (date) · ⛔ `écarté` (motif) · 📝 `produit` (lien `tracking.md`)

## Index

| Fichier | Sujet | Mot-clé principal | Statut |
|---|---|---|---|
| [`2026-10-20-accueil-famille-site-internet-tpe-pme.md`](./2026-10-20-accueil-famille-site-internet-tpe-pme.md) | Refresh de l'accueil `/` sur la famille TPE/PME (11/2026 n°1, cluster A, ligne 1, P2) | famille « site internet TPE/PME » (site internet pme 50 · creation site internet pme 36 · site internet tpe 10 · création site internet tpe 10 — Haloscan 17/10) | 📝 **produit** — GO 2026-10-20 (angle famille, title court, ExpertQuote en proposition signalée), `/refresh` le jour même, double PASS, PR web-agency#33 mergée → ✅ **publié le 22/10** (`tracking.md`, J90 20/01/2027) |
| [`2026-10-22-audit-gratuit-audit-site-internet-gratuit.md`](./2026-10-22-audit-gratuit-audit-site-internet-gratuit.md) | Refresh de `/audit-gratuit` en **ré-angle page de capture** (11/2026 n°2, cluster G, ligne 2, P3) : « un fondateur lit votre site, rapport sous 72 h, voici à quoi il ressemble », extrait d'audit réel anonymisé, formulaire URL + e-mail | audit site internet gratuit (200 · KVI 33 — bulk 22/10) — **scroll disqualifiant** (4 pubs + AIO) et zéro-clic fort : trafic organique résiduel **assumé**, KPI = contacts PostHog | 🕓 en attente de GO — 5 serp-analyst (dégradés, Haloscan MCP en timeout) + KPI du jour par API directe + scroll-check chrome ×2 ✅ ; 6 décisions au gate (extrait Cadres Concept anonymisé vs audit kaelix.fr, formulaire, title A/B, grille publique, ExpertQuote) |
| [`2026-11-02-agence-web-val-d-oise.md`](./2026-11-02-agence-web-val-d-oise.md) | Création de `/agence-web-val-d-oise` (11/2026 S1, cluster C, ligne 6, P1) : « Agence web dans le Val-d'Oise : votre site codé à la main, par un fondateur du 95 » — une page pour les deux têtes, villes du 95 en sections, coût 3 ans face au « sans abonnement », 301 depuis `/agence-web-paris` | creation site internet 95 (200 · KVI 4) + agence web 95 (100 · KVI 5) — bulk 02/11 ; ZC faible (17/10, non re-vérifié) | 📝 **produit** — `go-11/2026` (GO mensuel du 02/11, §1.30, aucun gate de brief) → `/write` le 02/11 → **PR [web-agency#81](https://github.com/kaelix-agency/web-agency/pull/81) ouverte** (double PASS) ; 4 serp-analyst dégradés (SERP Google non observable par outil, `scrap` vide), scroll-check **non vérifiable** (pas de navigateur) |
