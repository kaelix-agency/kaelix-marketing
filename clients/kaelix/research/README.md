# Briefs de production (`/research`) — KAELIX (l'agence, cliente d'elle-même)

Livrables de la phase 0 (`/research`) : un **brief de production** par sujet, **persisté et commité ici AVANT présentation au gate**. Un brief non commité meurt avec la session (leçon du 2026-08-24, Ansquer).

## Règles

- **Un brief = un fichier daté** `AAAA-MM-JJ-<slug-sujet>.md`. Jamais d'append : une re-recherche du même sujet = un nouveau fichier, l'ancien reste (historique des angles).
- Le brief est **l'entrée de `/write` ou `/refresh`** : angle, format cible, longueur, plan H2/H3, mots-clés, FAQ, first-party à mobiliser (avec statut de véracité), composants, visuels, maillage, capture, garde-fous. Il ne contient jamais de rédaction.
- Les mini-briefs `serp-analyst` bruts sont annexés au brief — ce sont les données du verdict. Les contrôles empêchés (scroll non vérifiable, outil indisponible) y figurent **tels quels**.
- Particularité kaelix : plusieurs pages du plan (accueil, pages services, pages locales) sont des **composants TSX** du repo web-agency, pas des MDX — le contrat de contenu s'applique sur le fond (véracité, lexique v6, FAQ, maillage, NAP), pas sur la whitelist de composants.
- Les décisions attendues du gate sont listées en fin de brief ; les arbitrages rendus sont tracés dans le fichier (ou dans le journal du `content-plan.md`) au GO.

**Statuts** : 🕓 `en attente de GO` · ✅ `GO opérateur` (date) · ⛔ `écarté` (motif) · 📝 `produit` (lien `tracking.md`)

## Index

| Fichier | Sujet | Mot-clé principal | Statut |
|---|---|---|---|
| [`2026-10-20-accueil-famille-site-internet-tpe-pme.md`](./2026-10-20-accueil-famille-site-internet-tpe-pme.md) | Refresh de l'accueil `/` sur la famille TPE/PME (11/2026 n°1, cluster A, ligne 1, P2) | famille « site internet TPE/PME » (site internet pme 50 · creation site internet pme 36 · site internet tpe 10 · création site internet tpe 10 — Haloscan 17/10) | 🕓 en attente de GO — ⚠️ analyse dégradée (Haloscan MCP indisponible le 20/10) ; scroll-check chrome ✅ OK sur les 2 têtes ; 6 décisions au gate (title, boutique engagement, ordre PR #31, ExpertQuote) |
