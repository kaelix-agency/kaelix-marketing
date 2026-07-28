# Publier un article pour le référencement naturel — méthodologie + responsabilités

Toutes les étapes théoriques, dans l'ordre, **annotées du module et de l'outil** qui les prend en charge dans l'architecture orchestrateur + Claude Code. Pensé pour 2026 : SEO classique en socle, doublé du GEO, d'un E-E-A-T renforcé et de l'**information gain** comme signal central.

> Format d'annotation à chaque étape : `↳ Module(s) · Outil(s)`.

## Légende des modules & outils

| Repère | Rôle |
|---|---|
| `Analysis` | IA analytique de l'orchestrateur (briefs, scoring, classification, narratif) |
| `Decision` | moteur déterministe (file de tâches, règles, seuils, throttle) |
| `Claude Code` + skill `article-writer` | production de texte (rédaction, structure) |
| `seo-schema` | package partagé du monorepo qui génère le JSON-LD depuis le frontmatter |
| `SeoChannel` / `Publication` | distribution : écriture git, merge, déploiement |
| `Ingestion` | récupération et normalisation des données externes |
| `LocalSeo` / `GbpChannel` | volet local (NAP, citations, GBP) |
| `Reporting` | rapport mensuel de mise en valeur |
| `Gate` | validation humaine dans la console (opérateur) |
| **Hors orchestrateur** | dépend du template Next.js du site client, ou d'un travail humain |
| Outils | SE Ranking · Google Search Console (GSC) · BrightLocal · API GBP · PostHog · API sociale · git · Search Console Indexing API · modèle Claude frontier |

---

## Phase 0 — Stratégie & recherche (avant d'écrire)

La phase la plus déterminante. **Propriétaire : `Analysis` + `Decision` (orchestrateur).** Sortie : le brief (`content_task.brief`), que Claude Code lira via l'outil MCP `get_task`.

1. **Définir l'intention de recherche** — informationnelle, commerciale, transactionnelle ou navigationnelle ; identifier le persona. Tout en découle.
   *↳ `Decision` (champ `keyword.intent`) + `Analysis` · SE Ranking, GSC*
2. **Recherche de mots-clés** — principal + variantes + longue traîne + questions associées ; volume, difficulté, intention.
   *↳ `Decision` (table `keyword`) · SE Ranking*
3. **Analyser la SERP réelle** — qui se classe, quel format domine, quelle profondeur ; matcher le format gagnant.
   *↳ `Analysis` · SE Ranking*
4. **Content gap & analyse concurrentielle** — ce que couvrent les leaders, et surtout ce qui leur manque.
   *↳ `Analysis` + `Decision` (détection de gap → tâche) · SE Ranking, GSC*
5. **Définir l'information gain** — la valeur unique non réplicable (donnée first-party, expérience, angle, données originales).
   *↳ `Analysis` (scoring) · données : `client_strategy.first_party_sources`*
6. **Place dans l'architecture** — rattacher au cluster (pillar + soutien), prévoir le maillage, définir l'URL, éviter la cannibalisation.
   *↳ `Decision` (tables `topic_cluster`, anti-cannibalisation via `content_piece`) · base orchestrateur*
7. **Définir l'objectif / CTA** — l'action attendue du lecteur.
   *↳ `Analysis` (intégré au brief) · données : `client_strategy.channel_strategy`*

---

## Phase 1 — Rédaction & structure (le contenu)

**Propriétaire : `Claude Code`, cadré par la skill `article-writer`.** Il lit son contexte via MCP (`get_task`, `get_client_strategy`, `get_nap`, `list_content`). Outil : modèle Claude frontier.

8. **Plan structuré** — H1 unique, hiérarchie H2/H3 couvrant les sous-intentions et les « People Also Ask ».
   *↳ `Claude Code` / `article-writer`*
9. **Title tag** — mot-clé en tête, ~50-60 caractères, accroche au clic.
   *↳ `Claude Code` / `article-writer`*
10. **Meta description** — ~150-160 caractères, incitative, mot-clé, promesse de valeur.
    *↳ `Claude Code` / `article-writer`*
11. **URL / slug** — court, descriptif, avec mot-clé, stable.
    *↳ `Claude Code` / `article-writer` (champ `slug`)*
12. **Introduction « réponse directe »** — les ~100 premiers mots répondent à l'intention (snippets + extraction IA).
    *↳ `Claude Code` / `article-writer`*
13. **Corps complet (topical depth)** — profondeur, passages auto-suffisants, scannable.
    *↳ `Claude Code` / `article-writer`*
14. **E-E-A-T** — auteur qualifié, sources, données, dates ; critique sur YMYL.
    *↳ `Claude Code` / `article-writer` · données : `client_strategy`, `client.ymyl`*
15. **Optimisation sémantique** — entités, synonymes, termes co-occurrents ; pas de keyword stuffing.
    *↳ `Claude Code` / `article-writer`*
16. **Formats d'extraction** — FAQ, tableaux, listes, définitions, « points clés ».
    *↳ `Claude Code` / `article-writer` (remplit `content_geo.faq_pairs`)*
17. **Lisibilité & ton** — adapté au persona et à la langue.
    *↳ `Claude Code` / `article-writer`*
18. **Maillage interne** — liens vers pillar et cluster, ancres descriptives.
    *↳ `Claude Code` (informé par l'outil MCP `list_content` pour savoir quoi lier)*
19. **Liens externes** — vers des sources autoritaires.
    *↳ `Claude Code` / `article-writer`*
20. **Appel à l'action** — orienter vers l'objectif de la phase 0.
    *↳ `Claude Code` / `article-writer`*

---

## Phase 2 — Médias & technique on-page

**Propriétaire : partagé.** Le contenu structuré vient de l'orchestrateur ; la performance technique de la page dépend du **template du site**.

21. **Images pertinentes** — compressées, WebP/AVIF, dimensions explicites.
    *↳ Génération d'image = **futur** (table `asset`) · compression/format = **Hors orchestrateur** (template Next.js)*
22. **Attributs `alt` & noms de fichiers** — descriptifs.
    *↳ `Claude Code` / `article-writer` (texte alt) · rendu = template du site*
23. **Média enrichi (vidéo, schéma)** — si l'intention le justifie.
    *↳ **Futur** (asset média, hors périmètre texte actuel)*
24. **Données structurées (JSON-LD)** — Article, Author, Organization, FAQPage, HowTo, Breadcrumb.
    *↳ `seo-schema` (génère depuis le frontmatter) + `Claude Code` (remplit `content_geo`) · validation : test Rich Results*
25. **Open Graph / Twitter Cards** — partage social propre.
    *↳ **Hors orchestrateur** (template du site) à partir du frontmatter produit par `Claude Code`*
26. **Balise canonique** — éviter le duplicate.
    *↳ **Hors orchestrateur** (template du site)*
27. **Core Web Vitals (LCP, INP, CLS)** — performance de la page.
    *↳ **Hors orchestrateur** (template Next.js du site — responsabilité réelle mais externe à l'orchestrateur)*
28. **Mobile-first** — rendu et lisibilité mobile.
    *↳ **Hors orchestrateur** (template du site)*
29. **Fondations techniques** — HTTPS, page explorable, pas d'erreur d'exploration.
    *↳ **Hors orchestrateur** (template + hébergement du site)*
30. **Dates** — `datePublished` / `dateModified` (fraîcheur).
    *↳ `Claude Code` (frontmatter) + `Publication` (met à jour `content_piece.date_modified`)*

---

## Phase 3 — Publication & indexation

**Propriétaire : `Publication` + adapter `SeoChannel`**, après le `Gate`.

31. **Vérifications finales** — relecture, liens, rendu, preview des données structurées.
    *↳ `Gate` (opérateur, console) + contrôles automatisés*
32. **Publier** — écriture/merge en git, déploiement.
    *↳ `SeoChannel` / `Publication` · git, déploiement (Vercel/Hetzner)*
33. **Maillage entrant** — liens depuis des pages existantes vers le nouvel article.
    *↳ `Decision` (tâche) → `Claude Code` (édition des pages liantes) · git*
34. **Sitemap à jour** — l'URL doit figurer dans `sitemap.xml`.
    *↳ **Hors orchestrateur** (template du site) — à vérifier au déploiement*
35. **Soumettre à l'indexation** — demande d'indexation GSC ; IndexNow pour Bing.
    *↳ `Publication` · Search Console Indexing API — **à ajouter à la spec** (étape post-déploiement non encore explicitée)*

---

## Phase 4 — Promotion & off-page

**Propriétaire : mixte ; en partie hors système.**

36. **Distribution / repurposing** — décliner l'angle en formats natifs, partager sur les canaux.
    *↳ `Decision` (tâche `repurpose`) + `Channels` · API sociale (LinkedIn), GbpChannel*
37. **Acquisition de backlinks** — mentions, citations, liens contextuels de qualité.
    *↳ **Hors orchestrateur** (travail humain — non mécanisable, et c'est volontaire)*
38. **Signaux locaux** — cohérence NAP, fiche GBP, citations (si intention locale).
    *↳ `LocalSeo` + `GbpChannel` · BrightLocal, API GBP*

---

## Phase 5 — Suivi & itération (après publication)

**Propriétaire : `Ingestion` + `Decision` (+ `Reporting`).** C'est le point fort de l'architecture : la boucle de feedback est native.

39. **Vérifier l'indexation** — couverture GSC.
    *↳ `Ingestion` · GSC*
40. **Suivre la performance** — positions, impressions, clics, CTR, visibilité IA.
    *↳ `Ingestion` (→ `search_performance`, `position_tracking`, `ai_visibility`) · GSC, SE Ranking · affichage : console*
41. **Suivre l'engagement on-site** — temps, scroll, conversions.
    *↳ `Ingestion` (→ `onsite_metrics`) · PostHog (si le client l'a connecté)*
42. **Diagnostiquer & agir** — forte impression/faible CTR → refresh title/meta ; bloqué page 2 → profondeur + autorité + maillage.
    *↳ `Decision` (règles déterministes → nouvelles tâches)*
43. **Refresh régulier** — actualiser données et sections, mettre à jour `date_modified`.
    *↳ `Decision` (crée la tâche `refresh`) → `Claude Code` (exécute) · cycle complet*
44. **Élagage (content pruning)** — fusionner ou rediriger le contenu durablement sous-performant.
    *↳ `Decision` (détection) + `Gate` (décision opérateur)*

**Et la mise en valeur :** le travail réalisé (étapes 32, 33, 36, 38, 43) et les résultats (étapes 40-41) sont agrégés mensuellement pour le client.
*↳ `Reporting` (→ `client_report`) · données : `generation_log`, métriques ingérées*

---

## Synthèse : qui porte quoi

| Phase | Propriétaire principal | Outils clés |
|---|---|---|
| 0 · Stratégie/recherche | `Analysis` + `Decision` | SE Ranking, GSC |
| 1 · Rédaction/structure | `Claude Code` / `article-writer` | modèle Claude frontier |
| 2 · Technique on-page | `seo-schema` + `Claude Code` / **template du site** | test Rich Results |
| 3 · Publication/indexation | `Publication` / `SeoChannel` | git, déploiement, Indexing API |
| 4 · Promotion/off-page | `Channels` + **humain** (backlinks) | API sociale, BrightLocal |
| 5 · Suivi/itération | `Ingestion` + `Decision` + `Reporting` | GSC, SE Ranking, PostHog |

## Les trois points où l'architecture ne *garantit* pas la méthodologie

1. **La qualité du contenu (phases 0-1)** dépend de ce que la skill `article-writer` encode réellement. L'archi rend la méthodologie *possible* ; le `Gate` est le filet de sécurité qui vérifie qu'elle a été suivie avant `pending_review`.
2. **La performance technique (phase 2 : CWV, mobile, HTTPS, sitemap)** vit dans le **template Next.js du site client**, pas dans l'orchestrateur. À traiter au niveau des sites.
3. **Les backlinks (phase 4)** ne sont pas mécanisables et restent un **travail humain** — volontairement hors système.

Et un ajout à prévoir dans la spec : l'**étape d'indexation/sitemap** (35) dans le module `Publication`.
