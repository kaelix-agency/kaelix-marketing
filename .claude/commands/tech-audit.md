---
description: Audit technique mensuel du site (phases 2 & 5)
argument-hint: <slug-client>
---
Audit technique pour `$ARGUMENTS`.

1. **Crawl complet du domaine** : ⚠️ **à re-outiller** (Cuik retiré le 2026-09-03, rationnel §1.24 — chantier séparé : crawler local ou script Playwright). D'ici là, afficher « contrôle empêché : crawl indisponible » et couvrir ce qui l'est : `node scripts/gsc-fetch.mjs check404` (sitemap + anciennes URLs), `sitemaps`, `inspect` des URLs clés, + `fetch` direct des pages pour les contrôles on-page.
2. Synthèse par sévérité (critique/avertissement/info) : erreurs de crawl, liens cassés, balises manquantes/dupliquées, contenu mince, opportunités de maillage interne, Core Web Vitals, couverture sitemap, et **trafic des bots LLM** (ChatGPT/Perplexity/Claude — signal GEO).
3. Pour chaque finding : action recommandée et qui la porte — contenu (→ /refresh ou /write), template/technique du site (hors repo marketing, à transmettre au dev), ou configuration.
4. Livrable : rapport d'audit daté dans `clients/<slug>/audits/` (créer le dossier si absent) + liste des 3 actions prioritaires.
