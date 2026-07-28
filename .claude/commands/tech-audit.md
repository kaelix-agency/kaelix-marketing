---
description: Audit technique mensuel du site (phases 2 & 5)
argument-hint: <slug-client>
---
Audit technique pour `$ARGUMENTS`.

1. **Cuik MCP** : crawl complet du domaine + croisement Search Console + logs si disponibles.
2. Synthèse par sévérité (critique/avertissement/info) : erreurs de crawl, liens cassés, balises manquantes/dupliquées, contenu mince, opportunités de maillage interne, Core Web Vitals, couverture sitemap, et **trafic des bots LLM** (ChatGPT/Perplexity/Claude — signal GEO).
3. Pour chaque finding : action recommandée et qui la porte — contenu (→ /refresh ou /write), template/technique du site (hors repo marketing, à transmettre au dev), ou configuration.
4. Livrable : rapport d'audit daté dans `clients/<slug>/audits/` (créer le dossier si absent) + liste des 3 actions prioritaires.
