---
description: Audit technique mensuel du site (phases 2 & 5)
argument-hint: <slug-client>
---
Audit technique pour `$ARGUMENTS`.

1. **Crawl complet du domaine** : `node scripts/crawl-site.mjs --site <url du site> --grep "<lexique interdit du brief>"` (Playwright + Chrome du poste, depuis le sitemap + liens internes découverts — statuts, title/meta/H1/canonical/robots/hreflang, mots, liens entrants/sortants, images sans alt, JSON-LD, occurrences du lexique dans le texte rendu **et** le `<head>`). Lire `.crawl/<hôte>/crawl.md`. Croiser avec `node scripts/gsc-fetch.mjs sitemaps`, `check404`, `inspect` des URLs clés (état d'indexation). Core Web Vitals : Lighthouse CLI desktop **et** mobile sur les 3 pages business principales. Si le crawl ou un outil échoue (module absent, navigateur introuvable, API 500), afficher « contrôle empêché : <raison> » — jamais un ✅.
2. Synthèse par sévérité (critique/avertissement/info) : erreurs de crawl, liens cassés, balises manquantes/dupliquées, contenu mince, opportunités de maillage interne, Core Web Vitals, couverture sitemap, et **trafic des bots LLM** (ChatGPT/Perplexity/Claude — signal GEO).
3. Pour chaque finding : action recommandée et qui la porte — contenu (→ /refresh ou /write), template/technique du site (hors repo marketing, à transmettre au dev), ou configuration.
4. Livrable : rapport d'audit daté dans `clients/<slug>/audits/` (créer le dossier si absent) + liste des 3 actions prioritaires.
