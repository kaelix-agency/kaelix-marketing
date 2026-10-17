# Brief client — KAELIX (l'agence, cliente d'elle-même)

| | |
|---|---|
| **Slug** | `kaelix` |
| **Créé le** | 2026-10-16 |
| **Dernière mise à jour** | 2026-10-17 |

---

## 1. Identité

- **Activité** : agence web et SEO qui conçoit, héberge et fait vivre les sites des TPE/PME — « Faites votre métier, on s'occupe du reste ».
- **Offre** : site vitrine sur mesure codé à la main à partir de 80 € HT/mois sans frais de création (conception, hébergement, maintenance, interlocuteur dédié) ; boutique en ligne 150 € HT/mois (engagement 12 mois) ; **SEO — offre v6 décidée et déployée le 17/10/2026** (`web-agency/docs/offre-kaelix-v6.md`, spec PR web-agency#27, implémentation PR #28 en production, base et Stripe test alignés) : cinq formules sur deux axes — **Local 199 €** · **Local + fiche Google 299 €** (le plus choisi) · **National 199 €** · **National + fiche Google 299 €** · **Local + National + fiche Google 399 €** — engagement 3 mois sur les cinq, annuel −10 %, multilingue 60 €/langue ; **liens hors grille, sur devis après étude de cas**. **Plus aucune souscription en ligne** : toute formule passe par un appel (créneau ou rappel), le client paie ensuite sur sa proposition pré-remplie. Le site est en v6 depuis le 17/10 : tout contenu cite « dès 199 € HT/mois » ; jamais 249/399/599, jamais « liens », « cumulatif » ou « Souscrire en ligne ». L'ancien écart site/grille (249 vs 199) est **tranché par la v6**.
- **Type** : `local` — **hybride décidé à l'entretien du 16/10** : requêtes nationales (création de site, SEO TPE/PME) + pages locales sur les zones réelles (Île-de-France entière + Montpellier). Architecture de contenu empruntée au modèle SaaS (pages business avant le blog, §6) ; routines locales (GBP, avis, citations) applicables dès que la fiche existe.
- **Statut product-market fit** : `PMF validé` — entretien du 16/10 : plusieurs clients payants réguliers (dont Transports Ansquer en SEO ; Portaya, UCPLE et autres au web).
- **Canaux actifs** : bouche-à-oreille / réseau uniquement. Le SEO de kaelix.fr est l'objet de cette mission ; LinkedIn et prospection : inactifs à ce jour.
- **Concurrents** (entretien 16/10) : ① agences web locales sous WordPress (le 500-1 000 €/mois de la grille) ; ② plateformes self-service (Wix, SiteW, Solocal, Simplebo) ; ③ freelances/indépendants. Angle différenciant : sites codés from scratch nativement optimisés (Lighthouse 95+, pas de dette technique) qui rendent le SEO moins cher — « Crafted Code, Proven Performance ».
- **Contact opérationnel** : Axel (co-fondateur, marketing/SEO — l'opérateur de ce repo).
- **YMYL** : non.
- **Cadence éditoriale et relecture (décision d'Axel, 17/10/2026)** : **2 contenus par mois**, capacité de relecture **2 par mois** → volume retenu du plan = **2/mois** (12 sur 6 mois). Ordre : refreshes « argent » d'abord (accueil, /tarifs, /services/site-vitrine, /audit-gratuit, Montpellier), puis la page Val-d'Oise, puis la page pivot comparaison et la page refonte ; le blog repart de zéro (articles d'origine retirés le 17/10).

## 2. Repo du site

| Champ | Valeur |
|---|---|
| URL du repo | https://github.com/kaelix-agency/web-agency (confirmé entretien 16/10) |
| Forge | `github` (`gh`) |
| Chemin local convenu | à convenir à la première session de production |
| Chemin des articles | `src/content/blog/<slug>.mdx` (3 articles de février 2026, relevé à l'audit du 17/10) — route `src/app/(public)/blog/[slug]` ; **pipeline MDX (frontmatter, composants) à relever avant tout `/write`** |
| Chemin des pages locales | ⚠️ pas de dossier de contenu : les 8 pages villes sont une **route dynamique** `src/app/(public)/agence-web/[ville]` (template TSX, pas MDX) — à requalifier (audit 17/10, C3) avant toute page locale |
| **Version du contrat de contenu supportée** | ⚠️ **à auditer avant le premier `/write`** — champ critique, tout ou rien (v1/v2) |
| Branche par défaut | `main` (confirmé 17/10) |
| Rendu | SSR/SSG confirmé le 17/10 (`X-Nextjs-Prerender: 1`, HTML complet sans JS) |

## 3. Marque & voix

- **Ton** : direct, chaleureux, sans jargon ; vouvoiement ; concret (chiffres réels, avant/après) plutôt qu'adjectifs. Slogan : « Faites votre métier, on s'occupe du reste. »
- **Vocabulaire maison** : site « codé à la main », « from scratch », « sans modèle », « le code vous appartient », un seul interlocuteur, « Crafted Code, Proven Performance ».
- **Interdits** : aucune garantie de position Google ; pas de dénigrement nominatif d'un concurrent (on compare des catégories — « agence WordPress classique », « plateforme en self-service » — pas des noms) ; pas de jargon SEO non expliqué ; aucun chiffre client sans source vérifiable ; anonymisation des clients non référencés publiquement (les 3 références du site sont publiables).
- **Auteur affiché** (E-E-A-T) : **Axel** (co-fondateur — marketing, SEO, rédaction) pour la stratégie/SEO/acquisition ; **Mickael** (co-fondateur — développement, 10 ans, ex-salles de marché) pour la technique/performance. Attribution par sujet, décidée au brief de chaque contenu.
- **Exemples de référence** : la page d'accueil kaelix.fr (avant/après Ansquer chiffré) ; l'étude de cas /realisations/transports-ansquer.

### Porte-parole expert

| Champ | Valeur |
|---|---|
| Nom | Axel (marketing/SEO) et Mickael (technique) |
| Rôle / titre | « Axel, co-fondateur de KAELIX » / « Mickael, co-fondateur et développeur de KAELIX » |
| Photo | à relever dans le repo du site (section fondateurs de l'accueil) |
| **Autorisation de citation** | ✅ oui pour les deux (entretien 16/10) — attribution selon le sujet |
| Verbatims disponibles | §7 — à alimenter (les prises de position du site sont reprises telles quelles) |

### Source d'avis clients

| Plateforme | URL | Nb d'avis | Note moyenne |
|---|---|---|---|
| ⚠️ aucune fiche Google KAELIX à ce jour | — | — | — |

→ Action onboarding : créer la fiche Google Business « zone desservie » (sans adresse publique) — voir §9 et to-do.

## 4. Cibles

| | Fichier | Statut |
|---|---|---|
| **ICP** (profil d'ENTREPRISE cible) | [`icp.md`](./icp.md) | `hypothèse` — v1 du 16/10, à retravailler via le skill `icp` |
| **Personas** (les PERSONNES dedans) | [`personas.md`](./personas.md) | `hypothèse` — v1 du 16/10, à retravailler via le skill `personas` |

- **Rappel d'application** : l'ICP décide quels mots-clés valent la peine ; les personas décident à qui parle chaque contenu. Un contenu = un persona.

## 5. Ciblage SEO — méthode en 3 étapes

> Données **Haloscan du 17/10/2026** (crédit vérifié par appel réel : 10 000 crédits mots-clés, 2 999 crédits site ; SERP scrapées les 16/09 et 16/10). Conventions : **Volume** = volume Haloscan (jamais le volume Google Ads que l'API expose aussi — sur « création site internet » il affiche 6 600 contre 400 Haloscan ; un seul chiffre de référence par KPI, invariant 8) ; **Difficulté** = KVI Haloscan (0-100). Empreinte actuelle de kaelix.fr : **domaine inconnu de l'index Haloscan** (`SITE_NOT_FOUND`) — aucune position connue, tout est à construire. Étapes A et C remplies le 17/10 ; **B attend la GSC** (voir ci-dessous).
>
> Lecture d'ensemble des 6 SERP-semences : (1) « création site internet » (400, KVI 28) et « agence web » (4 800, KVI 20) sont des SERP nationales **100 % plateformes DIY / annuaires / top-listes** (Ionos, Squarespace, Wix, Canva ; Sortlist, Wikipédia, PagesJaunes) — aucune agence TPE n'y figure : écartées comme mots-clés cibles, gardées comme têtes sémantiques. (2) Les requêtes **métier** (« site internet artisan ») et **locales** (Montpellier, 95) ont des SERP tenues par des **freelances et agences locales de taille comparable** (DVI 1 à 40) : c'est là que kaelix.fr peut entrer. (3) « création site internet TPE PME » est **inconnu de Haloscan** (`KEYWORD_UNKNOWN`) et toute la famille TPE/PME est à 5-50 de volume : l'hypothèse de l'accueil (§6, ordre 1) est à réviser (voir C).

### Étape A — Mots-clés qui rapportent du trafic aux concurrents

> 9 domaines analysés sur les 3 catégories du brief. Les deux géants ne sont pas des références exploitables : **Solocal** (45 000 sur sa marque, puis uniquement bourse / espace client / **résiliation** 355 — signal d'insatisfaction, voir C) et **SiteW** (trafic surtout sur des guides génériques « créer un site gratuit », « maquette site web »). **Pilot'in** (agence WordPress, Lyon) est le modèle de ce qu'une agence peut faire : 6 400 mots-clés dont des **pages hub par ville** (« agence web marseille » pos. 3, « agence wordpress lyon » pos. 1) et des articles de blog en pos. 1 sur « refonte seo », « audit seo wordpress ». **Le Web Français** (plateforme abonnement 19,99 €/mois) industrialise des pages département/ville (657 pages, 434 visites/mois) — le contenu de masse que le brief §9 interdit, mais la preuve que les requêtes locales de département sont prenables.

| Concurrent (catégorie) | Mot-clé | Volume | Difficulté (KVI) | Position du concurrent | Intérêt pour nous |
|---|---|---|---|---|---|
| beeween.com (① agence WordPress Montpellier, 246 mots-clés, 83 visites/mois) | agences web montpellier | 833 | 19 | 2 | **fort** — la requête locale n°1 de la zone prioritaire ; SERP tenue par des agences de taille comparable (DVI 20-30) |
| beeween.com (①) | agence creation site internet montpellier | 279 | 14 | 2 | **fort** — intention transactionnelle locale pure, CPC 12 € |
| beeween.com (①) | création site internet montpellier | 300 | 8 | 8 | **fort** — même page cible, KVI le plus bas du lot local |
| beeween.com (①) | site internet montpellier | 186 | 7 | 3 | moyen — variante courte, se couvre sémantiquement sur la page Montpellier |
| hrz.fr — Horizon (① agence multi-villes « TPE et PME », 3 700 mots-clés) | agence creation site internet montpellier | 279 | 14 | 5 | fort — le concurrent qui dit « TPE/PME » comme nous, avec une page /agence-web-montpellier/ dédiée |
| hrz.fr (①) | création site web toulouse | 900 | 11 | 10 | nul pour la zone (Toulouse non servie) — **modèle de structure** : une page « agence-web-<ville> » par implantation réelle |
| benefitswebagency.com (① agence 95, 330 mots-clés, 89 visites/mois) | creation site internet 95 | 200 | 5 | 2 | **fort** — requête départementale du Val-d'Oise (Axel sur place) ; SERP de petites agences et freelances (DVI 1-33) |
| benefitswebagency.com (①) | agence web 95 | 79 | 10 | 1 | fort — même page ; le leader local plafonne à 89 visites/mois : la place est prenable |
| benefitswebagency.com (①) | referencement val d'oise | 82 | 12 | 3 | moyen — pour la page service SEO déclinée localement, après la page 95 |
| pilot-in.com (① agence WordPress multi-hubs, 6 400 mots-clés, 3 300 visites/mois) | agence web marseille | 900 | 13 | 3 | nul géographiquement — **preuve** qu'une agence classe des hubs ville en top 3 ; à répliquer pour Montpellier / 95 |
| pilot-in.com (①) | refonte seo | 320 | 7 | 1 | **fort** — intention « refaire son site sans perdre son SEO » = persona P3 ; KVI 7 pour un article de blog |
| pilot-in.com (①) | agence web | 4 800 | 20 | 16 | nul — même le leader n'est que pos. 16 sur la tête générique : confirme l'écartement |
| petitefabrik.fr (③ freelance « artisans du bâtiment », 2 150 mots-clés, 712 visites/mois) | création site internet artisan | 140 | 12 | 2 | **fort** — le mot-clé métier de notre persona P1 ; un freelance seul tient la pos. 1-2 : prenable |
| petitefabrik.fr (③) | site internet artisan | 100 | 1 | 1 | fort — même page ; KVI 1 |
| petitefabrik.fr (③) | refaire site internet | 600 | 17 | 11 | fort — intention refonte (P3), un article de blog de freelance pos. 11 : marge |
| petitefabrik.fr (③) | création site internet menuisier | 40 | 4 | 2 | moyen — déclinaison métier×page ; valide le pattern « site internet + métier » en longue traîne (ne pas industrialiser) |
| simplebo.fr (② plateforme accompagnée, 33 600 mots-clés, 11 800 visites/mois) | simplebo tarifs | 110 | 17 | 1 | moyen — requête de marque tierce : on ne la vise pas nominativement (brief §3), mais elle révèle l'intention « combien ça coûte par mois » que notre /tarifs doit capter |
| simplebo.fr (②) | creation site internet batiment | 70 | 7 | 1 | fort — Simplébo gagne les artisans avec une **page par métier** (bâtiment, menuisier, paysagiste, électricien…) : le pattern à reprendre avec parcimonie |
| simplebo.fr (②) | wix site internet | 4 700 | 28 | 4 | nul en volume utile — article « créer un site Wix » qui draine des DIY ; montre que le trafic « Wix » n'est **pas** notre cible |
| lewebfrancais.fr (② plateforme abonnement 19,99 €/mois, 657 pages) | agence web oise / agence web vendee | 320 / 191 | 4 / 1 | 13 / 3 | moyen — pages département industrialisées : le volume local existe par département, mais c'est le contenu de masse interdit par §9 ; on ne reprend que les zones réelles |
| sitew.com (② builder FR, 69 000 mots-clés) | site internet pas chere | 733 | 11 | 8 | nul — intention prix plancher = anti-ICP (<80 €/mois → plateformes) |
| solocal.com (② groupe) | resiliation solocal | 355 | 25 | 1 | moyen — le signal : des clients cherchent à **partir** ; une page comparaison « plateforme en self-service vs agence » capte cette douleur sans nommer |

- **Domaines écartés à l'analyse** : wix.com (marque mondiale, trafic DIY), jeremy-carre.com (freelance 95, pos. 2 sur « création site internet val d'oise » mais empreinte Haloscan trop faible pour en tirer des mots-clés — non vérifiable au-delà de la SERP).
- **Ce que A nous apprend** : nos concurrents atteignables classent **(1) des pages locales par ville/département**, **(2) des pages métier**, **(3) des articles « refonte »** — et aucun d'eux ne porte l'angle « codé à la main, performance native, abonnement sans frais de départ » : c'est le gap d'information gain.

### Étape B — Existant en positions 4-20

> ⏳ **À remplir à partir du 18/10** — propriété GSC `https://kaelix.fr/` créée le 17/10 (préfixe d'URL, compte de service en accès total), premières données sous 24 h, baseline 28 j lisible vers la mi-novembre. Commande : `node scripts/gsc-fetch.mjs query --site https://kaelix.fr/ --days 28`. Côté Haloscan, le domaine kaelix.fr est **inconnu de l'index** (`SITE_NOT_FOUND` le 17/10) → aucune position connue par ce canal ; **non vérifiable** tant que le site n'a pas d'historique. Pages existantes à inventorier à ce moment-là (dates de publication à relever dans le repo web-agency pour poser les fenêtres 90 j) : accueil, /tarifs, 3 pages services, /realisations (×3), /a-propos, /audit-gratuit, /contact, /blog.

| URL | Mot-clé | Position | Volume | Action | Priorité |
|---|---|---|---|---|---|
| à remplir dès le 18/10 (GSC kaelix.fr, 28 j) | | | | | |

### Étape C — Nouveaux mots-clés, par ordre de valeur

> **15 mots-clés passés au `serp-analyst` le 17/10** (une instance par mot-clé, en parallèle ; 1 analyse dégradée : « agence web ile de france », budget d'exécution atteint sur WebFetch). Chaque mini-brief porte le verdict zéro-clic (§1.27). **Contrôles empêchés communs aux 15** : (a) **scroll non vérifiable par outil** (Haloscan donne les features de SERP, pas leur ordre à l'écran) → `scroll-check chrome` à dérouler en session principale à l'étape 3 de chaque `/research` avant production ; (b) **cannibalisation côté plan non vérifiable** (`content-plan.md` n'existe pas encore — c'est précisément ce que `/content-plan kaelix` va créer) ; côté publié, `tracking.md` est vide, aucun conflit. **Prérequis transverse** : les 2 pages locales jouent le pack local → la fiche Google Business « zone desservie » (to-do #2) est un prérequis parallèle, pas un blocage de la page.
>
> Deux décisions d'architecture issues des collisions du lot : **(1) une seule page locale par zone** (« agence web montpellier » et « création site internet montpellier » ont la même SERP → une page ; idem 95) ; **(2) une seule page comparaison par catégories** (« alternative wix », « solocal avis », « simplebo tarifs » visent la même page §6 ordre 3 → une page pivot « site en self-service ou agence : le vrai coût sur 3 ans », jamais trois pages nominatives — interdit §3).

| Priorité | Mot-clé | Intention | Volume | Difficulté (KVI) | Cluster | Persona visé |
|---|---|---|---|---|---|---|
| 1 — argent | **famille « site internet TPE/PME »** (site internet pme 50 · creation site internet pme 36 · site internet tpe 10 · création site internet tpe 10…) → **refresh de l'accueil** (H1/title portent la famille, pas un mot-clé isolé) | commerciale mixte, zéro-clic partiel (AIO sur les variantes « création ») | 50 (famille ~185) | 17 (TPE 6, création PME 3) | accueil / positionnement | P2 (P1 secondaire) |
| 1 — argent | **prix site vitrine** → **refresh de /tarifs** (angle « ce que ça coûte vraiment sur 3 ans », tableau DIY / freelance / agence WP / abonnement) — v6 en prod depuis le 17/10 : vise « dès 199 € » | commerciale (fourchette avant devis) — **zéro-clic FORT** (AIO + snippets donnent les fourchettes) ; l'angle qui force le clic = coût total 3 ans + propriété du code | 480 | 15 | tarifs | P2 |
| 1 — argent | **création site vitrine** → **refresh de /services/site-vitrine** (comparatif par catégories, preuve Ansquer, délai 3-5 semaines) | commerciale mixte, zéro-clic partiel (PAA « comment / étapes ») | 500 | 27 | services | P2 (P1 via preuve Ansquer) |
| 1 — argent | **agence web montpellier + création site internet montpellier** → **une page locale /montpellier** (Mickael sur place) | commerciale-locale, zéro-clic faible à partiel (pack local = noms et notes, pas de prix ni de techno) | 833 (pluriel) + 300 | 19 / 8 | local Montpellier | P1 (P2 en tableau) |
| 1 — argent | **création site internet 95 + agence web 95** → **une page locale /val-d-oise** (Axel sur place ; villes citées, pas de pages-villes de masse) | commerciale-locale, **zéro-clic faible** (0 AIO) ; ⚠️ la SERP vend du « sans abonnement » → le modèle 80 €/mois doit se justifier par le coût total 3 ans | 200 + 79 | 5 / 10 | local Île-de-France | P1 |
| 1 — argent | **création site internet artisan + site internet artisan** → page métier (ordre 2-5 §6), déclinaison métier **sans industrialisation** | commerciale + composante locale ; zéro-clic ⚠️ non vérifiable par outil (AIO signalée, contenu non lisible) ; snippets = prix unitaires 290-1 600 € | 140 + 100 | 12 / 1 | métiers | P1 |
| 2 — choix | **site internet abonnement** (+ creation site internet abonnement 10) → **page pivot comparaison** « site en self-service ou agence : le vrai coût sur 3 ans » — récupère sans nommer les intentions « alternative wix » (90), « solocal avis » (600), « simplebo tarifs » (110) ; `pari-émergent` (volume faible, intention ultra-qualifiée, CPC 3,86 €) | commerciale comparative, zéro-clic partiel (AIO présente, 4 liens) | 20 | 11 | comparaison / alternatives (§6 ordre 3) | P2 |
| 2 — choix | **refonte site internet** (section « WordPress lent, cassé ou plus maintenu : réparer ou refaire ? » absorbant « refonte site wordpress » 90 KVI 7 et « refonte site internet prix » 110) | informationnelle-commerciale (CPC 12,9 €), zéro-clic partiel (AIO = définition/étapes ; pas de prix TPE, pas de « changer de prestataire sans rien perdre ») | 800 | 17 | refonte | P3 (P1 secondaire) |
| 2 — choix | **audit site internet gratuit** → **refresh de /audit-gratuit** sur cette variante (formulaire allégé URL + email, extrait d'audit réel, 72 h assumées) — « audit seo gratuit » écarté (voir ci-dessous) | transactionnelle-commerciale, zéro-clic partiel (AIO nomme des outils, ne lance rien, ne lit rien) | 200 | 33 | free tool | P3 (P1 secondaire) |
| 3 — traîne | **combien coute un site internet** (+ creation site internet prix 400, même SERP) → guide blog **différé** (ordre 6) adossé au calculateur « coût réel de votre site » (free tool ② §6) ; ne JAMAIS y pointer /tarifs (mismatch de format) | informationnelle — **zéro-clic FORT** (AIO + fourchettes partout) ; l'angle = coût total de possession 3-5 ans, dette technique → SEO plus cher | 400 | 29 | tarifs (satellite blog) | P2 |

**Sujets écartés** (verdict NO-GO motivé — ne pas re-proposer sans nouvelle donnée) :

| Mot-clé | Volume | KVI | Pourquoi écarté |
|---|---|---|---|
| création site internet | 400 | 28 | SERP 100 % plateformes DIY (Ionos, Squarespace, Wix, Canva) : intention « le faire soi-même », hors ICP ; tête sémantique seulement |
| agence web | 4 800 | 20 | annuaires + top-listes + Wikipédia ; le meilleur concurrent atteignable (pilot-in) n'est que pos. 16 |
| création site internet TPE PME | — | — | `KEYWORD_UNKNOWN` chez Haloscan : la requête telle quelle n'existe pas ; la famille se vise par l'accueil (ligne 1 du tableau) |
| audit seo gratuit | 600 | 10 | **scroll disqualifiant de format** : SERP 100 % outils instantanés (score en 30 s), première page d'agence à audit humain en pos. 23 ; /audit-gratuit = formulaire 5 champs + 72 h → mismatch frontal, le KVI 10 n'y change rien |
| solocal avis (+ avis solocal 590, resiliation solocal 355) | 600 | 23 | **zéro-clic fort** (AIO résume Trustpilot, griefs, résiliation) + SERP de réputation (Trustpilot, 60 Millions, forums) + intention « déjà client, mécontent » + **interdit §3** (pas de nominatif) ; l'intention est récupérée par la page pivot comparaison |
| alternative wix | 90 | 25 | listicles de builders DIY (Squarespace, Capterra, BDM) + AIO ; aucun acteur « faire faire » dans le top 20 ; angle secondaire de la page pivot, jamais page dédiée |
| simplebo tarifs | 110 | 17 | requête de marque tierce : 6 des 10 premiers résultats sont des propriétés Simplébo ; interdit §3 ; intention récupérée par « site internet abonnement » |
| site wordpress lent | 20 | 5 | **zéro-clic fort** (AIO + PAA) + SERP 100 % tutoriels de réparation DIY sur 56 résultats ; profil technicien hors personas ; sujet mature (pas de pari-émergent) → absorbé en section de la page refonte |
| agence web ile de france | 210 | 20 | 4 annuaires + pages « Paris » (DVI 20-75) + pack local ; les pages régionales d'agences plafonnent en pos. 17-51 ; ≥ 3 blocs avant le 1er organique (probable disqualifiant) → au mieux un hub parent plus tard, après la page 95 |

- **Ce que C change dans §6** (à appliquer par `/content-plan`) : l'accueil ne vise plus « création site internet TPE/PME » comme mot-clé mais la **famille** TPE/PME ; la page comparaison (ordre 3) est **une** page catégorielle et non des pages « vs Wix / Solocal / Simplebo » ; les pages locales (ordre 5) sont **deux** pages (Montpellier, Val-d'Oise), pas une par ville ; le free tool calculateur (idée ② §6) devient le mécanisme de capture des deux sujets prix.
- **Anti-cannibalisation** : les intentions prix convergent vers /tarifs (transactionnel) et un seul guide blog (informationnel) qui maille vers /tarifs ; les deux pages locales maillent vers /services/site-vitrine ; « refonte » garde la section WordPress plutôt qu'une page séparée. Vérification Haloscan + tracking avant chaque création (`/research`).

## 6. Architecture de contenu

Ordre imposé (modèle SaaS adapté à l'agence — les pages business avant le blog) :

| Ordre | Page / section | Statut | Mot-clé principal | Commentaire |
|---|---|---|---|---|
| 1 | Accueil + /tarifs | existantes, à refresh SEO | création site internet TPE/PME (hyp.) | refresh après ciblage §5 |
| 2 | /services/site-vitrine, /services/seo-performance, /services/boutique-en-ligne | existantes, à refresh | par service | idem |
| 3 | Pages comparaison/alternatives | à créer | « agence web vs Wix/Solocal », « alternative Simplebo »… | le gisement commercial type SaaS — capter la phase de choix |
| 4 | /realisations (+ études de cas) | existantes | preuve | enrichir au fil des clients |
| 5 | Pages locales métier×ville | à créer | « création site internet Montpellier », « agence web <ville IdF> »… | zones réelles uniquement (§9) |
| 6 | /blog | existant | longue traîne | EN DERNIER — équilibre et maillage vers les pages business |

- **Free tools envisagés** : ① `/audit-gratuit` **existe déjà** — à positionner SEO (mot-clé commercial « audit site internet gratuit ») ; ② idée à l'étude : calculateur « coût réel de votre site (WordPress/plateforme vs abonnement) ».

## 7. Données first-party disponibles

| Élément | Type | Utilisable publiquement ? | Déjà utilisé dans | Ajouté le |
|---|---|---|---|---|
| Cas Ansquer : impressions ×2,8 et clics ×2,2 en 1 mois (sept. 2026, GSC, fenêtres 28 j) | chiffre client sourcé | oui (référence publiée sur le site) | accueil kaelix.fr | 2026-10-16 |
| Refonte Ansquer : Lighthouse 100/100/100 (SEO, bonnes pratiques, accessibilité), perf mobile 78, 11→1 CSS, 12→9 scripts, zéro jQuery | chiffre technique | oui (affiché sur le site) | accueil kaelix.fr | 2026-10-16 |
| Livraison d'un site vitrine en 3 à 5 semaines | méthode | oui | accueil | 2026-10-16 |
| Deux cousins fondateurs : Axel (marketing, ex e-commerce, région parisienne) + Mickael (dev 10 ans, ex-salles de marché, Montpellier) | histoire | oui | /a-propos | 2026-10-16 |
| Le système d'exploitation marketing de l'agence (ce repo : weekly automatisées, rapports mensuels, gates humains) | méthode maison | oui — angle différenciant fort « on applique à nos clients ce qu'on s'applique » | — | 2026-10-16 |
| Temps interne par pack (Starter 4-5 h/mois, Local 7-8 h/mois) | chiffre interne | ⚠️ non (grille interne) | — | 2026-10-16 |
| Positionnement prix : le trou de marché 150-500 €/mois (grille v2 §1) | prise de position | oui (reformulée) | grille interne | 2026-10-16 |

## 8. Analytics

| Outil | Connecté ? | Détail |
|---|---|---|
| Search Console (API directe) | ✅ **CONNECTÉE le 2026-10-17** | propriété **préfixe d'URL `https://kaelix.fr/`** (compte axel@kaelix.fr propriétaire), compte de service `gsc-fetch@kaelix-498715.iam.gserviceaccount.com` en accès total → `node scripts/gsc-fetch.mjs query --site https://kaelix.fr/`. ⚠️ Propriété toute récente : **premières données à partir du 18/10**, baseline 28 j lisible vers la mi-novembre |
| Haloscan | ✅ requêtes à la demande | comme Ansquer : pas de projet suivi (l'API s'interroge par domaine/mot-clé) — optionnel côté interface |
| PostHog | ✅ **ACTIF depuis le 2026-10-17** (web-agency#26 mergée, réception vérifiée) | même dispositif sans cookie qu'Ansquer, **même projet PostHog** (309342, plan gratuit = 1 projet ; lecture filtrée `--site https://kaelix.fr/`) ; 5 événements : `$pageview`, **`contact_rendez_vous`** (lien de réservation, action principale), `contact_telephone`, `contact_email`, `contact_formulaire` (`formulaire: contact|audit`) ; `$referrer` envoyé (attribution par source possible, contrairement à Ansquer). Clé `NEXT_PUBLIC_POSTHOG_KEY` posée dans Vercel (Production + Preview). ⚠️ Exclure les hôtes `*-kaelixs-projects.vercel.app` (le filtre `--site` le fait) |
| GA4 | non | — |
| BrightLocal (pont manuel) | non | — |

## 9. Zone d'intervention

- **Coordonnées canoniques** : [`nap.md`](./nap.md) — ⚠️ particularité : pas d'adresse publique (agence sans local ouvert au public) → fiche Google en mode « zone desservie », adresse masquée.
- **Zones servies** (entretien 16/10) :

| Ville / zone | Distance du siège | Services proposés | Page dédiée | Priorité |
|---|---|---|---|---|
| Montpellier et agglomération | Mickael sur place | tout | à créer | 1 — marché moins saturé, présence physique |
| Île-de-France (ensemble) | Axel sur place (Val-d'Oise) | tout | à créer par ville à fort volume après ciblage §5 | 2 |
| Reste de la France (à distance) | — | tout (visio) | pas de page dédiée | — |

- **Zones explicitement NON servies** : aucune (travail à distance possible) — mais **aucune page locale** hors IdF/Montpellier (critère anti-contenu-de-masse).

---

## Journal des mises à jour

| Date | Ce qui a changé | Par |
|---|---|---|
| 2026-10-17 (5) | **Premier `/tech-audit`** → [`audits/2026-10-17-tech-audit.md`](./audits/2026-10-17-tech-audit.md) (crawl Playwright 36 URLs, GSC inspect/sitemaps, Lighthouse ×6, Haloscan `SITE_NOT_FOUND`). Constats : **1 page indexée sur 36** (accueil crawlé le 23/09, pré-v6 ; 36 soumises / 0 indexées) ; **14 pages orphelines** ; **8 pages villes templatées dont 6 hors zones §9** (Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille) ; metas v5 résiduelles (« trois niveaux qui se cumulent » sur la page SEO) ; **CA-10 PASS desktop** (/tarifs 99/100/96, LCP 0,62 s, CLS 0,011), mobile 85 (LCP 3,73 s, H1 animé) sous la promesse de /garanties. Lexique v6 du texte rendu : propre (0 × 249/599/cumulatif/backlink). §2 complété : articles MDX dans `src/content/blog/`, branche `main`, SSR confirmé. To-do #5/#6/#7 | session 17/10 |
| 2026-10-17 (2) | **§5 ciblage SEO rempli (A et C)** sur Haloscan (crédit vérifié ; 9 domaines concurrents sur les 3 catégories ; 15 mots-clés passés au serp-analyst en parallèle avec verdict zéro-clic). Bandeau « contrôle empêché » retiré. **B attend la GSC** (données dès le 18/10). Décisions : famille TPE/PME sur l'accueil (« création site internet TPE PME » inconnu de Haloscan), une page locale par zone (Montpellier, 95), une page comparaison catégorielle (jamais nominative), /audit-gratuit re-ciblé sur « audit site internet gratuit ». 9 sujets écartés et motivés. Contrôles empêchés : scroll non vérifiable par outil (chrome à dérouler en /research), content-plan.md absent | session 17/10 |
| 2026-10-17 (6) | Suites de l'audit en prod (PR web-agency#30) : site réduit à 26 URLs dans le sitemap, pages locales Montpellier + Paris (Val-d'Oise à écrire), blog vide en attente du plan, maillage par le pied de page, Organization unique sans adresse | session 17/10 |
| 2026-10-17 (5) | **Audit post-v6** (`audits/2026-10-17-tech-audit.md`) et arbitrages : pages locales = Montpellier + Val-d'Oise (`/agence-web-val-d-oise`, 301 depuis Paris ; 6 villes hors zone en 410) ; zéro nom technique sur tout le site public, blog compris ; **les 3 articles existants sont supprimés** — le blog repart de zéro avec le `/content-plan` ; grille SEO conservée sur les pages services | session 17/10 |
| 2026-10-17 (4) | **v6 en prod** : PR web-agency#28 fusionnée et déployée, migrations `20261017000001`/`000002` poussées (accord explicite), Stripe test re-semé. Plus de souscription en ligne (appel systématique). Le refresh /tarifs (§5 prio 1) peut viser « dès 199 € » | session 17/10 |
| 2026-10-17 (3) | **Offre v6** (décision Axel) : SEO sur deux axes dès 199 €, 5 formules, 3 mois, liens sur devis — §1 mis à jour ; spec PR web-agency#27 ; to-do #3 clos (l'écart 249/199 est tranché). Conséquence ciblage §5 : la priorité « prix site vitrine » (refresh /tarifs) attend la bascule v6 du site | session 17/10 |
| 2026-10-17 | §8 : GSC connectée (compte de service, données dès le 18/10), Haloscan sans projet, PostHog en PR web-agency#26 (clé Vercel posée). To-do dédiée créée (`todo-operateur.md` : mesure, fiche GBP, écart tarifs). Favicon : `favicon.ico` régénéré depuis le X-viseur dans la même PR | session 17/10 |
| 2026-10-16 | Création — onboarding en session claude.ai (entretien Axel : type hybride, PMF validé, concurrents, zones, porte-parole, PostHog) + grille tarifaire v2 + lecture kaelix.fr. Ciblage §5 : contrôle empêché (Haloscan/GSC sur PC), à remplir avant `/content-plan` | session 16/10 |
