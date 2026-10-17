# Audits techniques — KAELIX (l'agence, cliente d'elle-même)

Rapports d'audit technique produits par `/tech-audit` (cadence mensuelle, 1er lundi du mois). Depuis le retrait de Cuik (2026-09-03, rationnel §1.24), le crawl est fait par un **script Playwright local** (Chromium/Chrome du poste) sur le sitemap + les liens internes découverts, croisé avec Search Console (API directe), Lighthouse (CLI) et Haloscan (MCP).

## Règles

- **Un audit = un fichier daté** `AAAA-MM-JJ-tech-audit.md`. Un audit archivé ne se réécrit pas : le mois suivant = un nouveau fichier. C'est ce qui permet de comparer deux états du site dans le temps.
- Chaque finding porte **qui le traite** : contenu (→ `/refresh` ou `/write`), template/technique du site (→ repo `web-agency`, transmis comme issue GitHub — jamais corrigé depuis ce repo), ou configuration.
- Les findings « contenu » se déversent dans le plan d'action de la `/weekly-review` suivante ; les findings « technique » sortent du périmètre de ce repo.
- Un contrôle non exécutable s'affiche **« contrôle empêché »** avec sa raison — jamais un ✅.

**Statuts** : 🕓 `à traiter` · 🔧 `en cours` · ✅ `traité` · ↪️ `transmis au dev` (hors repo)

## Index

| Fichier | Type | Période | Statut |
|---|---|---|---|
| [`2026-10-17-tech-audit.md`](./2026-10-17-tech-audit.md) | audit technique initial (post-bascule offre v6, PR web-agency#28) | 2026-10 | 🕓 à traiter — 4 critiques, 8 avertissements |
