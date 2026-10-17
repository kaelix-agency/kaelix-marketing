# Audit technique kaelix.fr — 2026-10-17

| | |
|---|---|
| **Client** | `kaelix` (type `local` hybride, brief §1) |
| **Date** | 2026-10-17 (samedi) — audit initial, le jour de la bascule de l'offre v6 (PR web-agency#28 en production) |
| **Périmètre** | 36 URLs du sitemap + liens internes découverts (aucune URL hors sitemap trouvée) |
| **Outils** | crawl Playwright local (Chrome du poste, rendu complet) · Search Console API (`gsc-fetch.mjs` : `sitemaps`, `check404`, `inspect`) · Lighthouse 12.8.2 CLI (desktop + mobile, throttling simulé, 1 passe par page, depuis ce PC sur la prod) · Haloscan MCP · `curl` (en-têtes, robots, bots IA) |
| **Statut** | 🕓 à traiter |

## 0. Contrôles empêchés (à lire avant les findings)

| Contrôle | Raison | Ce qui le remplace |
|---|---|---|
| Positions / mots-clés classés (Haloscan) | `SITE_NOT_FOUND` sur `kaelix.fr` (overview, positions, page_best_keywords vides) — le domaine est inconnu de l'index Haloscan | Rien côté positions. La cannibalisation /tarifs vs /services/seo-performance vs /services/site-vitrine est analysée **sur la page** (titles, H1, intentions) — pas sur des SERP |
| Trafic GSC (clics, impressions, étape B du §5) | Propriété `https://kaelix.fr/` créée le 17/10 : **aucune donnée de trafic attendue avant le 18/10**, baseline 28 j vers la mi-novembre | Inspection d'URL (état d'indexation) et rapport sitemap, disponibles dès maintenant |
| Trafic des bots LLM (signal GEO) | Pas d'accès aux logs Vercel depuis ce repo | Test par User-Agent (GPTBot, ClaudeBot, PerplexityBot, Google-Extended → 200) + lecture de robots.txt |
| Core Web Vitals terrain (INP réel) | Pas de données CrUX (site trop récent) ; Lighthouse ne mesure pas l'INP | TBT lab en proxy |
| Inspection GSC de /services/boutique-en-ligne | erreur 500 côté API à la 1re passe ; 2e passe OK (« inconnue de Google ») | — |
| `check404` | le script n'a couvert que 25 URLs (sa liste est tirée du repo, pas du sitemap live à 36) | le crawl Playwright a vérifié les 36 : toutes en 200 |

## 1. Synthèse

Le site est **techniquement sain** (36/36 en 200, canonicals justes, un seul H1 partout, aucun noindex, SSR complet, FAQPage valide sur 20 pages, redirections www/http/slash en 308) et **très rapide sur desktop** (Lighthouse 99-100). Trois problèmes structurels dominent, tous antérieurs à la v6 :

1. **Google n'indexe qu'une page sur 36** (l'accueil, dernier crawl 23/09 — version pré-v6). Le rapport sitemap affiche 36 soumises / 0 indexées. Cause la plus probable : **14 pages orphelines** (zéro lien interne entrant, joignables uniquement par le sitemap) sur un domaine jeune sans lien externe.
2. **8 pages villes générées par un template** (`/agence-web/[ville]`, 07/09), dont **6 villes que l'agence ne sert pas** (Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille) — contraire au brief §9 (zones réelles uniquement) et au ciblage §5 (une page Montpellier, une page Val-d'Oise). Textes quasi identiques (~385 mots), 8 `LocalBusiness` différents avec horaires non arbitrés.
3. **Résidus v5 dans les métadonnées** (« trois niveaux qui se cumulent » dans la meta de la page SEO) — invisibles dans le texte rendu, donc hors du grep E2E CA-5.

**CA-10 (spec `tarification-seo-v3.md`) : PASS sur desktop** — /tarifs performance 99, SEO 100, bonnes pratiques 96, LCP 0,62 s, CLS 0,011. **Mobile en revanche : performance 85, LCP 3,73 s** — sous la promesse publique de `/garanties` (« Lighthouse ≥ 90 en performance mobile »). Cause identifiée : le H1 est l'élément LCP et il est retardé par une animation d'entrée.

## 2. Findings par sévérité

Porteur : **contenu** (ce repo → `/refresh` ou `/write`, via PR MDX) · **technique** (repo `web-agency` → issue GitHub, texte prêt en §5) · **configuration** (opérateur / outils).

### 🔴 Critique

| # | Finding | Preuve | Action | Porteur |
|---|---|---|---|---|
| C1 | **Indexation : 1 page sur 36.** Accueil « Submitted and indexed » (dernier crawl 2026-09-23, donc version v5). /tarifs, /services/site-vitrine, /audit-gratuit, /realisations/transports-ansquer, Montpellier, Paris, Lyon, Bordeaux, Nantes : « Discovered – currently not indexed ». /services, /services/seo-performance, /services/boutique-en-ligne, /blog, /blog/seo-technique-checklist, /site-vitrine-artisan, Marseille, Toulouse, Lille : « URL is unknown to Google ». Sitemap soumis le 27/09, lu le 10/10, 0 erreur, **36 soumises / 0 indexées** | `gsc-fetch.mjs inspect` ×20, `sitemaps` | ① Corriger C2 (le maillage est le levier n°1) · ② **« Demander l'indexation » dans l'interface GSC** pour 10 URLs clés (/, /tarifs, /services/site-vitrine, /services/seo-performance, /services/boutique-en-ligne, /agence-web-montpellier, /audit-gratuit, /realisations, /a-propos, /blog) — l'Indexing API n'est pas fiable pour ces pages · ③ Fiche Google Business (to-do #2) + premières citations = premiers liens externes · ④ re-contrôler à la weekly du 27/10 | ① technique · ② **configuration (opérateur, 15 min)** · ③ configuration |
| C2 | **14 pages orphelines** (0 lien interne entrant ; joignables uniquement via le sitemap) : /services, /agence-web-{montpellier,paris,lyon,marseille,toulouse,bordeaux,nantes,lille}, /site-web-restaurant, /site-vitrine-artisan, /garanties, /agence-web-tpe-pme, /developpement-site-sur-mesure, /alternative-wordpress-performance. /process n'a qu'un seul lien entrant. Le reste du site est bien maillé (35 entrants pour les pages du menu/footer) | crawl : `inbound = 0` | Pour les pages conservées : lien depuis le footer (zones, métiers, garanties, process), liens contextuels depuis /services/site-vitrine (→ artisan, restaurant) et depuis l'accueil (→ Montpellier, Val-d'Oise). Pour les pages supprimées : voir C3/A3 | technique (navigation/footer) + contenu (liens contextuels dans les refreshes) |
| C3 | **6 pages villes hors zones servies** + 2 à requalifier. Template `/agence-web/[ville]` : title/meta/H2 identiques au nom près, 382-399 mots, « Le contexte économique à <ville> », 8 `LocalBusiness` avec `addressLocality` différentes, `geo` du centre-ville et `openingHours` 9-18 **jamais arbitrés** (nap.md §2 🕓). Brief §9 : « aucune page locale hors IdF/Montpellier » ; §5 décision (1) : « une seule page locale par zone ». Risque doorway pages + dilution du budget de crawl sur un site non indexé | sitemap ; crawl ; JSON-LD | **Arbitrage opérateur** puis : Lyon/Marseille/Toulouse/Bordeaux/Nantes/Lille → **retirer du sitemap + 410** (ou 301 vers /services/site-vitrine) ; **Montpellier → conserver** et refresh via `/research` (cibles §5 : « agence web montpellier » 833, « création site internet montpellier » 300) ; **Paris → devenir la page Île-de-France / Val-d'Oise** (cibles §5 : « création site internet 95 » 200, « agence web 95 » 79) — URL à décider (`/agence-web-val-d-oise` + 301 depuis Paris, ou garder Paris comme hub IdF). Les `LocalBusiness` par ville disparaissent : une seule `Organization` (siège non publié) avec `areaServed` | **décision opérateur** → technique (route, sitemap, 410) → contenu (2 refreshes) |
| C4 | **Lexique v5 dans les métadonnées** : meta description de /services/seo-performance = « …**Trois niveaux qui se cumulent**, de 199 à 399 € HT/mois » (concept « cumulatif » interdit v6 — et **faux** : les formules ne se cumulent plus) ; meta de /services = « référencement en **trois niveaux** » (v6 = cinq formules sur deux axes). Le texte visible est propre (voir §3) : le test E2E CA-5 ne lit que le DOM visible, pas le `<head>` | crawl (`metaDesc`) | Réécrire les 2 metas (ex. « Cinq formules, Local ou National, avec ou sans fiche Google, de 199 à 399 € HT/mois… ») ; étendre CA-5 au `<head>` (title, description, og:*) | technique (`generateMetadata`) — correction immédiate : erreur factuelle (exception de la règle des 90 j) |

### 🟠 Avertissement

| # | Finding | Preuve | Action | Porteur |
|---|---|---|---|---|
| A1 | **Performance mobile sous la promesse publique.** Lighthouse mobile : /tarifs **85** (LCP **3,73 s**, SI 3,8 s, TBT 179 ms), accueil **89** (LCP 2,61 s), /services/seo-performance **92** (LCP 2,76 s). /garanties affirme « score Lighthouse de 90 et plus en performance mobile ». Desktop irréprochable (99-100, LCP 0,56-0,62 s, CLS ≤ 0,011). L'élément LCP est **le H1** (`h1#tarifs-title.hero-in`, `animation-delay: 0.25s` ; accueil `0.65s`) : l'animation d'entrée retarde le rendu du plus grand texte. Autres pistes : `preconnect` manquant vers `eu.i.posthog.com` (−300 ms estimés), 25 KiB de JS inutilisé dans un chunk, main-thread 2,4 s | Lighthouse 12.8.2, 1 passe, throttling simulé, mesuré sur la prod depuis ce PC (variance ±5 pts à prévoir ; la spec CA-10 mesure un build local) | Rendre le H1 visible dès le premier rendu (pas d'opacity 0 initiale sur l'élément LCP, ou animer autre chose que le texte) ; `<link rel="preconnect" href="https://eu.i.posthog.com">` ; re-mesurer 3 passes mobile. Objectif : ≥ 90 mobile sur /, /tarifs, pages services — sinon reformuler /garanties | technique |
| A2 | **Noms techniques sur pages publiques** (interdit v6 « noms techniques », brief §3 « pas de jargon ») : /developpement-site-sur-mesure (Next.js ×2, React ×2, Vercel, Tailwind, TypeScript — une section « nos outils »), /alternative-wordpress-performance (Next.js ×4, React, Tailwind), /agence-web-tpe-pme (« Next.js, React et Tailwind CSS »), /realisations/{transports-ansquer,portaya,ucple} (« Technologies : Next.js, Vercel »). **Blog** : 2 des 3 articles sont centrés sur Next.js (« WordPress vs Next.js », « Pourquoi coder son site à la main » ×4) — à arbitrer (le blog s'adresse aussi à un lecteur technique ?). Pages légales exemptées (hébergeurs obligatoires). « WordPress » et « Lighthouse » sont tolérés (catégorie de concurrent ; différenciateur chiffré du brief) | grep du texte rendu | Pages marketing : réécrire sans noms (« un code moderne, sans extension tierce ») ; études de cas : retirer la ligne « Technologies » ou la remplacer par le résultat mesuré ; blog : décision opérateur (garder = assumer un blog technique ; sinon refresh des 2 articles > 90 j) | contenu (4 refreshes) + arbitrage blog |
| A3 | **Doublons d'intention / cannibalisation** (analyse on-page, Haloscan empêché) : (a) **accueil vs /agence-web-tpe-pme** — même famille TPE/PME (§5 prio 1 = refresh de l'accueil sur cette famille), même promesse « dès 80 € » ; (b) **/services/site-vitrine vs /developpement-site-sur-mesure vs /tarifs** — « 80 € HT par mois » dans 2 titles, le H1 de /tarifs (« Un site ou une boutique à partir de 80 € ») reprend la promesse de la page service ; (c) **cluster WordPress** : /alternative-wordpress-performance + 2 articles blog + section « Sur trois ans, le vrai coût » de /tarifs — 4 pages sur « WordPress vs site codé » alors que le §5 prévoit **une** page pivot comparaison catégorielle ; (d) /tarifs vs /services/seo-performance : intentions distinctes (prix global vs service SEO), grille v6 dupliquée sur les deux + sur /services/boutique-en-ligne — acceptable si /tarifs reste la cible de « prix site vitrine » et la page SEO celle de la famille « référencement TPE/artisan » ; à surveiller à la GSC | crawl (titles, H1, H2) | Trancher dans `/content-plan kaelix` : /agence-web-tpe-pme → 301 vers l'accueil (ou devient la page « famille TPE/PME » et l'accueil reste marque) ; /developpement-site-sur-mesure → 301 vers /services/site-vitrine ; /alternative-wordpress-performance → **devient la page pivot comparaison** du §5 (prio 2) après réécriture sans nominatif technique ; les 2 articles blog maillent vers elle | contenu (`/content-plan`, puis `/refresh`) + technique (301) |
| A4 | **Titles/metas hors gabarit** : /tarifs title **80 car.** (tronqué vers 60) et meta **214 car.** ; /services/seo-performance meta 181 ; /services/boutique-en-ligne meta 188 ; /politique-confidentialite meta 168 ; /services title 65. Aucun title ni meta dupliqué (bien) | crawl | /tarifs : « Tarifs : site vitrine 80 €, SEO dès 199 € HT/mois \| Kaelix » (≈55) + meta ≤ 155 ; à faire **dans le refresh /tarifs** (§5 prio 1, angle « ce que ça coûte vraiment sur 3 ans ») | contenu (/tarifs via `/refresh`) · technique pour les 3 autres |
| A5 | **Contenu mince** sur des pages cibles : /site-vitrine-artisan **268 mots** (= la cible §5 « création site internet artisan » 140 + « site internet artisan » 100, KVI 1-12 — un freelance tient le top 2 avec un vrai contenu), /site-web-restaurant 279, /audit-gratuit 248 (cible §5 « audit site internet gratuit » 200), /contact 246. Hubs fins mais acceptables : /services 151, /realisations 154, /blog 194, /process 195, /garanties 197, /realisations/portaya 132, /ucple 133 | crawl (`words`, contenu `<main>`) | **Refresh plutôt que création** (invariant 5) : /site-vitrine-artisan et /audit-gratuit sont déjà dans le §5 ; /site-web-restaurant → `/research` avant décision (pas dans le ciblage) ; études de cas Portaya/UCPLE : enrichir au fil du first-party (§6 ordre 4) | contenu |
| A6 | **Données structurées incohérentes** : (a) 3 variantes d'`Organization` (accueil : `@graph` + `@id`, adresse « Montpellier », sans téléphone ni logo ; /tarifs : logo + téléphone, sans adresse ; pages marketing : variante sans `@id`) ; (b) 8 `LocalBusiness` par ville avec `geo` et `openingHoursSpecification` 9-18 **non arbitrés** (nap.md §2 🕓, to-do #2) et `addressLocality` ≠ NAP (invariant 3 : pas d'adresse publiée) ; (c) blog `Article.author` = `Person` « Kaelix » (brief §3 : auteur affiché Axel ou Mickael, E-E-A-T) ; (d) `Service` SEO nommé « Référencement SEO Local » alors qu'il couvre National (v6) ; (e) `Service` « Site vitrine » et « Outil métier » pointent `url: /tarifs` au lieu de leur page service. FAQPage, BreadcrumbList, AggregateOffer (5 offres aux prix v6) : **valides** — CA-9 confirmé en prod | JSON-LD extrait des pages | Une `Organization` unique (`@id`), téléphone + e-mail du NAP, **sans adresse postale**, `areaServed` Montpellier + Île-de-France ; supprimer les `LocalBusiness` villes (ou n'en garder qu'un, sans horaires tant que nap.md §2 n'est pas tranché) ; `author` = Person Axel/Mickael ; renommer le Service SEO « Référencement, Local ou National » | technique (schema) + configuration (nap.md : SIRET, horaires — to-do #2) |
| A7 | **Politique de confidentialité périmée v5** : « La page de **souscription en ligne** (Stripe Checkout) est hébergée par Stripe… » — depuis la v6 aucune souscription ne part du site public (seule une proposition émise par l'admin ouvre `/souscrire/[jeton]`). Le reste (PostHog EU, Vercel, Supabase) est à jour | grep du texte rendu | Reformuler : « la page de paiement de votre proposition commerciale (Stripe Checkout)… » | technique (page légale, hors MDX) |
| A8 | **Accessibilité** (Lighthouse a11y 91 sur /tarifs desktop, 95 accueil) : contraste insuffisant `span.text-kaelix-white/45` dans les listes des cartes /tarifs (×3) ; `aria-orientation` non autorisé sur `<ul data-slot="navigation-menu-list">` ; `aria-label="Kaelix, accueil"` du logo ≠ nom visible (header + footer) | Lighthouse `color-contrast`, `aria-allowed-attr`, `label-content-name-mismatch` | Passer à `/60` minimum ; retirer `aria-orientation` du `ul` (le composant le pose sur le mauvais nœud) ; `aria-label="Kaelix"` | technique |

### 🔵 Info

| # | Finding | Action | Porteur |
|---|---|---|---|
| I1 | **Sitemap `lastmod` = heure de build** pour 33 URLs sur 36 (toutes à `2026-10-17T16:41:47Z`), seuls les 3 articles portent une vraie date. Google ignore un `lastmod` non fiable | Dater depuis la vraie dernière modification (git ou frontmatter) ou retirer le champ | technique |
| I2 | **GEO** : robots.txt n'exclut aucun bot IA ; GPTBot, ClaudeBot, PerplexityBot, Google-Extended reçoivent 200 (test par UA) ; HTML complet servi sans JS (SSR) ; FAQPage sur 20 pages, `Article` datés ; **aucun `llms.txt`** (404, optionnel) ; **pas de flux RSS** (404 sur /feed.xml, /rss.xml). Trafic réel des bots : non vérifiable (logs) | RSS du blog (signal de fraîcheur + reprise par les agrégateurs) ; `llms.txt` facultatif | technique (faible priorité) |
| I3 | `/index` répond **200** avec le contenu de l'accueil (canonical vers `/` : pas de duplicata indexé, mais une URL de plus à crawler). `/tarifs/`, `www.`, `http://` → 308 ✅ ; `/TARIFS` → 404 ✅ ; URL inexistante → 404 ✅ ; `?utm_*` → 200 + canonical ✅ | 308 `/index` → `/` | technique |
| I4 | Images : les halos décoratifs portent `alt=""` + `aria-hidden` (conforme — le crawl les compte en « sans alt » par construction) ; images des réalisations sur l'accueil servies trop grandes (90 KiB économisables, desktop) ; `hreflang` absent (mono-langue : normal) ; `lang="fr"`, viewport, OG image (`/opengraph-image`) présents partout ; **aucun `noindex`**, aucun `X-Robots-Tag` | `sizes` plus serrés sur les vignettes | technique (mineur) |
| I5 | **CSP Report-Only** : `connect-src` n'inclut pas `eu.i.posthog.com` (ni `script-src` le script PostHog si chargé en externe). Sans effet aujourd'hui (report-only) — **casserait la mesure au passage en mode enforce** | Ajouter les hôtes PostHog avant tout durcissement | technique |
| I6 | **Haloscan** : domaine inconnu de l'index → rien à comparer ce mois ; **étape B du §5** toujours en attente de la GSC (données à partir du 18/10) | Première lecture `gsc-fetch.mjs query --site https://kaelix.fr/ --days 7` à la weekly du 27/10 | configuration (calendrier) |
| I7 | **Dates de création des routes (git web-agency)**, pour poser les fenêtres 90 j du tracking : la plupart des pages datent du **25/04/2026** (> 90 j, refresh libre) ; `/services/site-vitrine` et `/services/seo-performance` **16/09** ; `/services/application-web` 17/09 ; pages villes **07/09** ; `/services/boutique-en-ligne` **12/10** ; `/tarifs`, `/services/seo-performance`, `/cgv`, `/politique-confidentialite` modifiés le **17/10** (v6). Articles blog : 10, 15 et 20/02/2026. Le contenu pré-mission n'est pas protégé par la règle des 90 j (elle démarre à la première publication/refresh de la mission) — mais la **page SEO et /tarifs viennent d'être refondues (17/10)** : laisser Google les lire avant de retoucher le fond ; seules les corrections factuelles (C4) passent | Reporté dans `tracking.md` | — |
| I8 | **Lexique v6 — montants hors /tarifs** : accueil « dès 199 € HT/mois » ✅ ; /services « 199–399 € HT/mois » ✅ ; /services/site-vitrine « dès 199 € » ✅ ; **/services/seo-performance** affiche la grille complète (199/299/399, « +100 € ») et **/services/boutique-en-ligne** aussi (5 lignes) — conforme à la spec v6 (§1.5 « pages SEO ») mais au-delà de la règle « seul montant hors /tarifs = dès 199 € » telle qu'énoncée pour cet audit → à confirmer par l'opérateur que c'est voulu | Confirmer ou retirer la grille des pages services (laisser « dès 199 € » + lien /tarifs) | arbitrage opérateur |

## 3. Lexique v6 — grep du texte rendu des 36 pages

| Terme interdit | Occurrences | Verdict |
|---|---|---|
| « 249 € » | 0 | ✅ |
| « 599 € » | 0 | ✅ |
| « six mois » / « 6 mois » | 1 — /a-propos « Six mois à construire l'infrastructure… » (récit fondateurs, pas le SEO) | ✅ (faux positif) |
| « cumulatif » / « cumulent » | **texte : 0 · `<head>` : 1** — meta de /services/seo-performance « trois niveaux qui se cumulent » | ❌ **C4** |
| « liens » (pluriel, sens SEO) | 2 — /blog/seo-technique-checklist « Liens contextuels… » (article de février, sujet SEO technique) ; /mentions-legales « Liens hypertextes » (juridique). Singulier « lien » (/contact : lien visio ; /boutique : lien panier) : hors sujet | ⚠️ article blog à arbitrer avec A2 |
| « backlink » | 0 | ✅ |
| « Souscrire en ligne » | 1 — /politique-confidentialite « page de souscription en ligne (Stripe Checkout) » | ❌ **A7** |
| noms techniques | 4 pages marketing + 3 études de cas + 2 articles — voir A2 | ❌ **A2** |
| « trois niveaux » | metas de /services et /services/seo-performance | ❌ **C4** |

Montants : voir I8. `/tarifs` : grille v6 complète, « Engagement 3 mois », « annuel −10 % », « 60 € HT/mois par langue », aucun « Souscrire en ligne » ✅.

## 4. Lighthouse (12.8.2, 2026-10-17 ~18h50, prod, 1 passe par cible)

| Page | Form factor | Perf | SEO | A11y | BP | LCP | CLS | TBT | FCP | SI |
|---|---|---|---|---|---|---|---|---|---|---|
| / | desktop | 100 | 100 | 95 | 96 | 0,58 s | 0,004 | 0 ms | 0,31 s | 1,10 s |
| / | mobile | **89** | 100 | 100 | 96 | **2,61 s** | 0,000 | 266 ms | 1,23 s | 4,41 s |
| /tarifs (**CA-10**) | desktop | **99** | **100** | 91 | **96** | **0,62 s** | **0,011** | 0 ms | 0,32 s | 1,19 s |
| /tarifs | mobile | **85** | 100 | 96 | 96 | **3,73 s** | 0,000 | 179 ms | 1,29 s | 3,79 s |
| /services/seo-performance | desktop | 100 | 100 | 100 | 96 | 0,56 s | 0,004 | 0 ms | 0,31 s | 0,86 s |
| /services/seo-performance | mobile | **92** | 100 | 100 | 96 | **2,76 s** | 0,000 | 210 ms | 1,23 s | 2,55 s |

**CA-10 : PASS** (desktop ≥ 95 sur performance/SEO/bonnes pratiques, LCP < 2,5 s, CLS < 0,1). Réserve : mesuré sur la prod depuis ce poste, pas sur un build local comme l'écrit la spec ; une passe par cible. INP : non mesurable en lab (TBT ≤ 266 ms, pas d'alerte). BP 96 partout = `inspector-issues` (CSP report-only remontée en console) ; `uses-long-cache-ttl` sur `/cc21d9ee02e4c27d/script.js` (script tiers, TTL 31 j).

## 5. Les 3 actions prioritaires

1. **Débloquer l'indexation** (C1 + C2 + C3) — *cette semaine*. Opérateur : trancher le sort des 6 villes hors zone et de Paris (C3), puis « Demander l'indexation » sur 10 URLs dans l'interface GSC. Web-agency : maillage footer/contextuel des pages conservées, retrait/410 des pages supprimées, 301 des doublons (A3). Contrôle : inspection GSC à la weekly du 27/10.
2. **Une PR web-agency « hygiène v6 »** (C4 + A4 + A7 + A6 + A8 + I1 + I3) — metas des pages SEO/services, politique de confidentialité, `Organization` unique sans adresse, auteurs des articles, contrastes, `lastmod`, 308 `/index`. Correctifs factuels, hors règle des 90 j.
3. **LCP mobile** (A1) — rendre le H1 visible au premier rendu, preconnect PostHog, re-mesurer ×3 ; objectif ≥ 90 mobile pour honorer `/garanties`. Sinon, reformuler la garantie (contenu).

Côté **contenu** (ce repo), rien ne se produit avant `/content-plan kaelix` : il absorbe A3 (fusions/301), A2 (noms techniques), A5 (artisan, audit gratuit) et les 2 refreshes locaux de C3 — avec les cibles du §5 déjà posées.

### Texte prêt pour l'issue GitHub `web-agency` (à ouvrir par l'opérateur — rien n'est modifié dans ce repo-là)

```
Titre : Audit SEO 17/10 (post-v6) — indexation, maillage, pages villes, metas v5, LCP mobile

Source : kaelix-marketing/clients/kaelix/audits/2026-10-17-tech-audit.md

Critique
- [ ] C2 Maillage : 14 pages sans aucun lien interne entrant (/services, 8 pages /agence-web-*, /site-web-restaurant, /site-vitrine-artisan, /garanties, /agence-web-tpe-pme, /developpement-site-sur-mesure, /alternative-wordpress-performance) → footer + liens contextuels pour celles qu'on garde
- [ ] C3 Pages villes : retirer du sitemap + 410 (ou 301 → /services/site-vitrine) Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille ; garder Montpellier ; Paris → page Île-de-France/Val-d'Oise (décision Axel) ; supprimer les LocalBusiness par ville
- [ ] C4 Metas v5 : /services/seo-performance « Trois niveaux qui se cumulent » et /services « référencement en trois niveaux » → vocabulaire v6 ; étendre le test CA-5 au <head>

Avertissement
- [ ] A1 LCP mobile /tarifs 3,73 s (perf 85), accueil 2,61 s (89) : le H1 (.hero-in, animation-delay) est l'élément LCP → visible au premier rendu ; preconnect eu.i.posthog.com ; objectif ≥ 90 mobile (promesse /garanties)
- [ ] A4 /tarifs title 80 car. / meta 214 ; metas > 160 sur seo-performance, boutique-en-ligne, politique-confidentialite
- [ ] A6 Schema : une Organization unique (@id, tel + e-mail, sans adresse postale, areaServed Montpellier + IdF) ; Article.author = Axel/Mickael ; Service SEO renommé « Local ou National » ; Service url → page service
- [ ] A7 Politique de confidentialité : « page de souscription en ligne (Stripe Checkout) » → « page de paiement de votre proposition »
- [ ] A8 A11y : contraste text-kaelix-white/45 (/tarifs), aria-orientation sur ul du menu, aria-label du logo

Info
- [ ] I1 sitemap lastmod = heure de build → vraie date ou retrait
- [ ] I3 /index → 308 /
- [ ] I5 CSP report-only sans eu.i.posthog.com (à ajouter avant enforce)
- [ ] I2 RSS du blog (optionnel)
```

## 6. Prochain audit

1er lundi de novembre (**2026-11-02**) : re-crawl Playwright (même script), inspection GSC des 10 URLs, Lighthouse mobile ×3 passes, premier croisement avec les 28 jours de GSC.
