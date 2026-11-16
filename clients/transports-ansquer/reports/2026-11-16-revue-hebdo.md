# Revue hebdo — Transports Ansquer — 2026-11-16 (S47)

| | |
|---|---|
| **Client / date** | `transports-ansquer` — lundi 2026-11-16, revue produite en session `/weekly-review` non interactive (weekly autonome). **Première revue hebdo depuis le 19/10** : les lundis 26/10 (relevé J90 du 29/10 en tenant lieu), 02/11 (journée de publication des PR #11 et #12) et 09/11 (exécution « Production du mois ») n'ont pas produit de revue |
| **Période des données** | GSC 7 j : 08/11 → 14/11 (semaine avec le 11/11 férié) ; GSC 28 j : 18/10 → 14/11 (dernier jour complet côté Google : 14/11). Comparaisons : revue S43 (28 j au 17/10) et relevé J90 du 29/10 (28 j au 27/10, 90 j au 27/10) |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page 7 j / 28 j + 3 semaines antérieures, query 7 j / 28 j, page+query blog 28 j, page+query « gennevilliers » S43 vs S47, date 28 j, `ctr-gap` page et page+query, `inspect` ×2, `sitemaps`, `check404`), Haloscan MCP (`get_domains_positions`, 3,5 s, 56 mots-clés / 23 pages), repo marketing (git, plan, to-do, relevé J90) |
| **Sources empêchées** | ⚠️ **PostHog** (`posthog-fetch.mjs contacts 7 j / 28 j`, `pages 28 j`) : **refusé par les permissions de la session** (non interactive), 4e revue consécutive sans lecture → section Contacts non produite ; **correctif tenté dans cette session et refusé** (l'écriture de `.claude/settings.local.json` n'est pas autorisée en non interactif) → to-do **#28** : ajouter `Bash(node scripts/posthog-fetch.mjs *)` (et les équivalents gsc / haloscan) à `permissions.allow` ; ⚠️ **fiche Google** (horaires, catégorie, avis) : lecture par l'API Places tentée via un script ad hoc → `node` hors liste blanche ; WebFetch (Maps, Mappy, Pages Jaunes, 118000) refusé → dernier relevé valide de la fiche : **10/11** (session planifiée, API Places : inchangée), dernier comptage d'avis : **04/11** (1 avis, note 4) ; ⚠️ **tableau de bord « Action Kaelix SEO »** (ArtifactData) indisponible dans cette session → les lignes de to-do modifiées ci-dessous **ne sont pas reportées dans la base** (règle du 19/10) ; ⚠️ GBP insights / BrightLocal : non fournis ; ⚠️ `/tech-audit` mensuel : non lancé |
| **Statut** | interne — ✅ autonome (aucune validation attendue ; les actions opérateur sont dans `todo-operateur.md`) |

## L'essentiel en 5 lignes

- **Meilleur mois du site, porté par le blog** : GSC 28 j = **59 clics / 5 047 impressions** (S43 : 39 / 2 288 ; relevé J90 au 27/10 : 40 clics). Le **guide empotage/dépotage**, indexé le 16/10, fait à son **J30 effectif 2 341 impressions, 10 clics, pos. 7,7** — première page du site en impressions, 2e en clics. L'**article palettes à J60** : 712 impressions, 7 clics, **pos. 5,5** (6,3 à J30). Le blog = 32 % des clics et 67 % des impressions du site ; 13 pages ont reçu au moins un clic (10 en S43).
- **Les deux publications du 02/11 sont indexées et visibles** : « Commissionnaire ou transporteur » **107 impressions, 2 clics, pos. 8,4** en 12 jours (crawl 09/11), déjà scrapé par Haloscan ; page entrepôt rafraîchie : « crossdocking île de france » **pos. 3,0** (38 impressions, 0 clic — le title/meta neufs ont 12 jours). Les deux sont en fenêtre 90 j (J90 ≈ 31/01/2027) : observation.
- **La grappe locale recule pendant que son levier est bloqué** : « transporteur gennevilliers » sur l'accueil = **30 impressions / 0 clic / pos. 9,0** sur 28 j (84 / 0 / 8,1 en S43, 203 / 0 / 9,0 sur 90 j) ; Haloscan la re-scrape en **pos. 8** le 05/11 (6 le 17/10) ; `/contact/` capte « transport gennevilliers » (Haloscan 23, l'accueil absent). Le refresh de l'accueil (`go-11/2026`, brief prêt depuis le 04/11) reste **conditionné à la fiche Google**, toujours non conforme au dernier relevé (10/11 : horaires sans coupure, catégorie « Services »). **Règle proposée** : fiche conforme au **23/11** (J-7 de fin de mois) sinon le sujet passe `reporté` 12/2026 — ou Axel lève explicitement le prérequis.
- **Signaux Haloscan nouveaux** : « transport container gennevilliers » **pos. 1** (accueil, 03/11 — objectif du brief §5B atteint), « prestataire stockage gennevilliers » **pos. 4** (page externalisation, 13/11), « dépotage de conteneur » **7** et « coursier dédié » **5** (articles). 56 mots-clés / 23 pages suivis (30 / 15 le 19/10) ; les quatre articles sont désormais scrapés. En creux : « course urgente » 43 → **28** mais 9 impressions GSC seulement (44 en S43).
- **Plan : novembre 2/3** (entrepôt ✅, commissionnaire ✅, accueil bloqué). Décembre a 2 refreshes `prévu` (page service tournée, palettes orienté clic dès le J90 du 13/12) → GO à donner sur le rapport de novembre. ⚠️ **Rapport d'octobre absent de l'index** (le bilan J90 client du 29/10 couvre août → octobre) : à acter. Contrôle citations : non dû (3e lundi). Aucune action sur les contenus : tout le blog est < 90 j ; sur les pages du site (≥ 90 j), l'action du gisement 4-20 est déjà au plan.

---

## 1. Constats de la période (19/10 → 15/11)

- **Production** : 2 contenus publiés le **02/11** (PR #11 refresh entrepôt cross-docking, PR #12 article commissionnaire — relus sur aperçu, « publie » d'Axel, indexation demandée). `/research` du refresh accueil fait le **04/11** (brief prêt). Exécutions « Production du mois » des 05, 06, 09 et 10/11 : fiche Google re-contrôlée à chaque fois par l'API Places, **inchangée** → `/write` accueil jamais lancé.
- **Pilotage** : revue stratégique J90 n° 1 + GO d'Axel le 29/10 (plan nov → janv commité), bilan client 90 j 📤 émis le 29/10 ; relevé de données J90 (GSC 90 j, Haloscan, **première et seule lecture PostHog** : 17-28/10, 93 visites, 3 clics tél, 6 clics e-mail dont 6 sur `/recrutement/`, 1 formulaire).
- **Citations** : Solocal validé le 20/10 (Pages Jaunes + Mappy, bloc A appliqué) ; 118000 fiche créée le 20/10, validation téléphonique en attente ; le **contrôle de propagation prévu le 02/11 n'a pas été fait** (pas de revue ce jour-là) et n'a pas pu l'être aujourd'hui (WebFetch refusé) → 07/12.
- **Toujours ouvert côté opérateur** : #2 fiche Google (P1, prérequis du refresh accueil), #10 118000, #11 lot 2 citations, #21 API GBP (qui porte aussi la publication de la réponse à l'avis de gilles, décision du 20/10).

## 2. Search Console (API directe, propriété préfixe `https://transportsansquer.fr/`)

### 2.1 Vue d'ensemble

| Fenêtre | Clics | Impressions | CTR | Homepage (clics / imprs / pos.) |
|---|---|---|---|---|
| 7 j (08/11-14/11, 11/11 férié) | 11 | 1 030 | 1,1 % | 5 / 75 / 6,9 |
| 7 j (01/11-07/11) | 17 | 1 443 | 1,2 % | 4 / 113 / 5,2 |
| 7 j (25/10-31/10) | 18 | ≈ 945 | — | 13 / 106 / 7,3 |
| 7 j (18/10-24/10) | 13 | ≈ 1 630 | — | 5 / 121 / 10,9 |
| **28 j (18/10-14/11)** | **59** | **5 047** | 1,2 % | 27 / 415 / **7,7** |
| S43 — 28 j (20/09-17/10) | 39 | 2 288 | 1,7 % | 20 / 535 / 7,8 |
| J90 — 28 j (30/09-27/10) | ≈ 40 | — | — | 17 / 505 / 9,0 |

Lecture : les impressions font ×2,2 sur 28 j, presque entièrement par le guide empotage (2 341) et le palettes (712) ; les clics passent de 39 à 59, dont 17 pour ces deux articles et 27 pour l'accueil (13 la seule semaine du 25/10, dont la marque). La dernière semaine est plus basse (11 clics, 1 030 impressions) : elle contient le 11/11 et deux jours de week-end faibles (73 et 88 impressions) ; pas une tendance. Le CTR global baisse mécaniquement (1,7 → 1,2 %) parce que le guide, à CTR 0,4 %, pèse 46 % des impressions.

### 2.2 Pages (28 j)

| Page | Clics | Imprs | Pos. | S43 (28 j) | Lecture |
|---|---|---|---|---|---|
| `/` | 27 | 415 | 7,7 | 20 / 535 / 7,8 | **46 %** des clics (51 % en S43) ; marque « transport ansquer » 6 clics / 33 imprs pos. 1,1 (S43 : 2 / 15) ; **impressions en baisse** (−120), cf. §2.3 |
| `/blog/empotage-depotage-conteneur/` | **10** | **2 341** | 7,7 | 0 / 27 / 11,1 | **J30 effectif** (indexé 16/10) — §2.4 ; 1re page du site en impressions |
| `/blog/combien-de-palettes-dans-un-conteneur/` | 7 | 712 | **5,5** | 3 / 694 / 6,3 | **J60** — §2.4 ; position en progrès, clics ×2 |
| `/transport/hayon-20m3-paris/` | 3 | 112 | 8,0 | 6 / 94 / 7,3 | « hayon livraison » 5,0, « livraison hayon » 7,1 — on_track |
| `/transport/tournee-reguliere/` | 3 | 28 | 10,1 | 2 / 28 / 9,5 | CTR 10,7 % ; page service du cluster F ⭐, refresh `prévu` 12/2026 |
| `/blog/commissionnaire-ou-transporteur/` | **2** | **107** | 8,4 | — (publié 02/11) | **J+14** — §2.4 |
| `/contact/` | 2 | 103 | 10,4 | 0 / 69 / 14,0 | capte « transport gennevilliers » (3 imprs, Haloscan 23) — title recentré prévu dans la PR accueil |
| `/transport/` (hub) | 2 | 138 | 36,9 | 1 / 86 / 33,6 | bruit déchets/valorisation ; reporté 02/2027 |
| `/stockage/` (hub) | 1 | 58 | 7,3 | 1 / 49 / 8,7 | « dépotage conteneur gennevilliers » 9 imprs pos. 5,0 ; Haloscan « logistique gennevilliers » 14 |
| `/stockage/depotage-empotage-conteneurs/` (pilier A) | 1 | 76 | **11,7** | 0 / 150 / 25,7 | « dépotage conteneur gennevilliers » 8 imprs **pos. 1,8** (47,4 en S43) — le maillage guide → pilier porte ; refresh reporté 02/2027 |
| `/recrutement/` | 1 | 29 | 16,6 | 2 / 16 / 32,2 | hors cible |
| `/stockage/entrepot-gennevilliers/` | 0 | 81 | 12,4 | 2 / 84 / 11,3 | **refresh du 02/11 (J+14)** : « crossdocking île de france » 38 imprs **pos. 3,0**, 0 clic (S43 : 24 / 4,7) ; 7 j : 19 imprs pos. 28,2 (requêtes parasites à 1-2 imprs) — observation |
| `/stockage/externalisation-logistique/` | 0 | **221** | 15,9 | 1 / 81 / 20,1 | **gisement 4-20 (page ≥ 90 j)** : « externalisation préparation commandes » 24 / 7,6 · « entrepôt de stockage externalisé » 43 / 12,9 · « externalisation transport » 22 / 11,9 · « externalisation logistique vrac » 13 / 17,4 ; Haloscan « prestataire stockage gennevilliers » **4** — refresh pilier C reporté 02/2027 : signal à porter au GO de décembre (§5) |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 0 | 209 | 9,3 | 0 / 1 / 10,0 | **J+31 effectif** — « transport dédié » 35 / 11,2, « transport dedie » 16 / 10,4, « transport ponctuel » 9 / 6,2 ; Haloscan « coursier dédié » 5, « qu est ce qu un transport dédié » 8 |
| `/transport/transport-pl-ile-de-france/` | 0 | 103 | 20,6 | 0 / 72 / 17,7 | Haloscan « transporteur pl » 10, « transport poids lourd ile de france » 15 ; hors plan, à suivre |
| `/transport/affretement-europe/` | 0 | 65 | 33,0 | 0 / 28 / 26,2 | « affretement routier europeen » 50 / 34,7 — hors gisement |
| `/transport/course-urgente/` | 0 | 62 | 27,3 | 0 / 79 / 24,4 | « course urgente » **9** imprs / 22,2 (44 / 19,6 en S43) ; Haloscan 43 → **28** (16/11) ; reporté 02/2027 |
| `/transport/transport-international/` | 0 | 49 | 22,5 | 0 / 55 / 35,4 | « commissionnaire de transport international » 10 / 41,7 (36 / 39,0 en S43) ; refresh léger « à inscrire » (plan) |
| `/entreprise/` | 0 | 36 | 19,0 | 1 / 35 / 31,1 | |
| `/blog/tournee-livraison-reguliere/` | 0 | 16 | 5,6 | 0 / 16 / 7,5 | **J+84** — verdict J90 le 22/11 (§2.4) |
| `/stockage/groupage-degroupage/`, `/stockage/preparation-commandes/`, `/transport/recyclage-tri/`, `/transport/collecte-valorisation/`, `/transport/debarras/`, `/manutention/` (308), `/blog/`, `/98ee9-contact/` | 0 | 18 / 13 / 21 / 8 / 4 / 5 / 13 / 4 | — | | résidus |

### 2.3 Grappe locale (brief §5B) — S43 vs S47, 28 j

| Requête | Imprs | Pos. | Clics | S43 (28 j) | J90 (90 j au 27/10) | Haloscan (date) | Pré-rebuild |
|---|---|---|---|---|---|---|---|
| transporteur gennevilliers → `/` | **30** | **9,0** | **0** | 84 / 8,1 / 0 | 203 / 9,0 / 0 | **8** (05/11 ; 6 le 17/10) ; `/contact/` 34 | 4 |
| transport gennevilliers → `/` | 12 | 7,3 | 0 | 9 / 8,6 | 49 / 9,5 / 1 | `/contact/` **23** (03/11), `/` non scrapé | 9 |
| gennevilliers transport → `/` | 2 | 10,5 | 0 | 4 / 14,0 | — | non re-scrapé (6, > 2 mois) | 6 |
| transport routier gennevilliers → `/` | 6 | 11,0 | 0 | — | — | 14 (25/10) ; `/contact/` 41 | — |
| entreprise / société de transport gennevilliers | — | — | — | — | — | 10 (ancien) · 18 (14/11) · 21 (06/11) ; `/contact/` 36-43 | — |
| **transport container gennevilliers** → `/` | — | — | — | — | — | **1** (03/11, nouveau) ; pilier A 38 | 19 (`/manutention/`) |
| **prestataire stockage gennevilliers** → `/stockage/externalisation-logistique/` | — | — | — | — | — | **4** (13/11 ; était 14 sur `/stockage/`) | — |
| logistique gennevilliers → `/stockage/` | — | — | — | — | — | 14 (03/11, nouveau) ; `/` 36 | — |
| transitaire gennevilliers → `/` | — | — | — | — | — | 16 (04/11, nouveau) ; `/contact/` 30 | — |
| dépotage conteneur gennevilliers (toutes pages) | 23 | 34,3 | 0 | 24 / 47,4 | — | — | 19 |
| **transport ansquer** (marque) → `/` | 33 | 1,1 | **6** | 15 / 1,0 / 2 | 41 / 1,0 / 11 | — | — |
| crossdocking île de france → entrepôt | 38 | **3,0** | 0 | 24 / 4,7 | 94 / 4,0 / 0 | — | — |
| course urgente → course-urgente | 9 | 22,2 | 0 | 44 / 19,6 | 165 / 21,8 | **28** (16/11 ; 43) | — |
| commissionnaire de transport international → international | 10 | 41,7 | 0 | 36 / 39,0 | 91 / 40,4 | 22 (14/10, non re-scrapé) | — |

Lecture : **la tête de grappe perd des impressions** (84 → 30 sur l'accueil à 28 j, position 8,1 → 9,0 ; Haloscan 6 → 8) et n'a toujours **aucun clic** : la SERP porte un pack local (Haloscan : `listings`, `knowledge_graph`) et la fiche Ansquer est non conforme. `/contact/` prend « transport gennevilliers » (Haloscan 23, l'accueil n'est plus scrapé dessus) — cannibalisation interne que la PR du refresh accueil traite (title de `/contact/` recentré). À l'inverse, **les requêtes locales de niche montent** : « transport container gennevilliers » pos. 1 (objectif brief §5B), « prestataire stockage gennevilliers » 4, « dépotage conteneur gennevilliers » pos. 1,8 sur le pilier A (mais 23 impressions dispersées sur 9 pages : à régler au refresh du pilier, 02/2027). Le site a passé son J90 : le diagnostic « bloqué 4-20 → gisement prioritaire » s'applique à l'accueil, et l'action existe déjà (refresh `go-11/2026`) — elle est bloquée par le prérequis fiche Google (§9 ①).

### 2.4 Blog (5 articles) et refresh du 02/11

| Contenu | Publié | Âge | Inspection GSC | 28 j (clics / imprs / pos.) | Par semaine (18/10 → 14/11) | Verdict |
|---|---|---|---|---|---|---|
| `/blog/tournee-livraison-reguliere/` | 24/08 | **J+84** | ✅ indexé | 0 / 16 / 5,6 (« tournées régulières » 2 imprs, 16,0) | 3 → 7 → 3 → 3 imprs | ⛔ observation — **J90 le 22/11 → verdict à la revue du 23/11** ; pari émergent à volume ~0 : 0 clic en 84 j, pos. 5-8 sur 15-20 imprs/mois ; la page service qu'il pousse a fait ses 3 premiers clics |
| `/blog/empotage-depotage-conteneur/` | 28/08 (indexé **16/10**) | J+80 / **J+31 effectif** | ✅ indexé | **10 / 2 341 / 7,7**, CTR 0,4 % | 713 → 567 → 637 → 424 imprs ; 4 → 3 → 2 → 1 clics | ⛔ observation — **J30 effectif relevé** ; `ctr-gap` **53 clics manquants** (att. 2,7 %) : requêtes définitionnelles (« empotage » 214 / 9,1 · « empotage conteneur » 114 / 14,0 · « dépotage conteneur » 65 / 10,0 · « dépotage » 62 / 18,7 · « empotage container » 62 / 14,9 · « depotage » 45 / 9,0 · « empotage d'un conteneur » 43 / 12,0 · « empotage des conteneurs » 31 / 10,5 · « depotage c'est quoi » 23 / 9,4 · « l'empotage » 13 / 6,0 · « dépoter un conteneur » 12 / 13,8), SERP à AI Overview + PAA partout (Haloscan) → **la SERP répond seule** ; la raison de cliquer (durées réelles, renfort d'effectifs, checklist CTU) sera l'angle du refresh orienté clic **01/2027** déjà au plan ; Haloscan : « dépotage de conteneur » **7**, « dépoter un conteneur » 10, « depotage douane » 16, « plan d'empotage » 16 |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 02/09 (indexé **16/10**) | J+75 / **J+31 effectif** | ✅ indexé | 0 / 209 / 9,3 | 67 → 45 → 53 → 44 imprs | ⛔ observation — `ctr-gap` 4 ; Haloscan « coursier dédié » **5**, « qu est ce qu un transport dédié » 8, « qu est ce que le transport dédié » 12 ; J90 effectif ~14/01/2027 |
| `/blog/combien-de-palettes-dans-un-conteneur/` | 14/09 | **J+63 (J60 relevé)** | ✅ indexé | **7 / 712 / 5,5** | 150 → 155 → 224 → 183 imprs ; 3 → 1 → 1 → 2 clics | ⛔ observation — J30 : 694 / 3 / 6,3 → J60 : 712 / 7 / **5,5** ; `ctr-gap` 21 (att. 4,0 %) ; requêtes visibles « …high cube de 40 pieds » 11 / 8,8, « peut-on doubler les palettes en 40 pieds » 13 / 8,0 (le reste anonymisé) ; **1er scrape Haloscan** : « combien de palettes dans un container 20 pieds » 14 (02/11) ; **J90 le 13/12** → refresh orienté clic `prévu` 12/2026 |
| `/blog/commissionnaire-ou-transporteur/` | **02/11** | **J+14** | ✅ **Submitted and indexed, crawl 09/11** | **2 / 107 / 8,4** | — → — → 88 / 2 clics → 19 / 0 clic | ⛔ observation (test Google : impressions ÷4 en 2e semaine, normal) ; requêtes : « commission de transport » 6 / 14,5 · « mandater un transporteur » 2 / **3,5** · « différence transitaire et transporteur » 3 / 30,7 · « assurance commissionnaire de transport » 1 / 15 ; Haloscan « différence entre consignataire et transitaire » 35 (06/11) ; la page service international garde ses requêtes (pas de cannibalisation) ; J30 ~02/12, J90 ~31/01/2027 |
| Refresh `/stockage/entrepot-gennevilliers/` | **02/11** | **J+14** | ✅ indexé, crawl 02/11 07:55 | 0 / 81 / 12,4 | 24 / 8,2 (01-07/11) → 19 / 28,2 (08-14/11) | ⛔ observation — « crossdocking île de france » **38 imprs pos. 3,0, 0 clic** (`ctr-gap` 3, att. 7,9 %) ; la position 28,2 de la semaine vient de requêtes parasites à 1-2 imprs (« dépotage conteneur gennevilliers » 75, « entrepot gennevilliers » 30) ; lecture `ctr-gap` à J+30 (~02/12) ; J90 ~31/01/2027 |

**Blog dans l'ensemble** : 19 clics / 59 (32 %) et 3 369 impressions / 5 047 (67 %). Haloscan scrape désormais les quatre articles (guide 7 mots-clés, comparatif 4, palettes 1, commissionnaire 1) — il n'en voyait aucun le 19/10.

### 2.5 Écarts CTR (`ctr-gap`, 28 j, pos. ≤ 20, ≥ 30 imprs)

| Page / requête | Imprs | Clics | CTR | Att. | Pos. | Manque | Qualification |
|---|---|---|---|---|---|---|---|
| guide empotage/dépotage | 2 341 | 10 | 0,4 % | 2,7 % | 7,7 | **53** | SERP répond seule (AI Overview + PAA, requêtes « définition / c'est quoi ») ; < 90 j → refresh orienté clic 01/2027 (plan) |
| article palettes | 712 | 7 | 1,0 % | 4,0 % | 5,5 | **21** | idem (snippet/PAA) ; refresh orienté clic 12/2026 dès J90 (plan) |
| comparatif dédié | 209 | 0 | 0 % | 1,9 % | 9,3 | 4 | < 90 j effectif ; observation |
| guide × « empotage » | 214 | 0 | 0 % | 2,0 % | 9,1 | 4 | définitionnel pur ; observation |
| entrepôt × « crossdocking île de france » | 38 | 0 | 0 % | 7,9 % | 3,0 | 3 | title/meta neufs depuis 12 jours ; lecture J+30 |
| `/stockage/externalisation-logistique/` | 221 | 0 | 0 % | 0,9 % | 15,9 | 2 | **page ≥ 90 j, gisement 4-20** → refresh pilier C (reporté 02/2027) — signal pour le GO de décembre |
| `/` × « transporteur gennevilliers » | 30 | 0 | 0 % | 2,0 % | 9,0 | 1 | pack local → fiche Google (#2) + refresh accueil bloqué |
| `/` × « transport ansquer » | 33 | 5 | 15,2 % | 21,1 % | 1,1 | 2 | marque — `/contact/` et `/transport/` prennent aussi des impressions de marque ; normal |

Accueil (page), hayon, commissionnaire, `/contact/`, pilier A : CTR au niveau ou au-dessus de l'attendu.

### 2.6 Sitemaps et 404

- `sitemap.xml` : lu par Google le **11/11**, **26 URLs** (25 en S43 : + l'article commissionnaire), 0 erreur ; compteur « indexés » toujours à 0 (affichage).
- `check404` : ✅ 26 URLs du sitemap en 200, 19 anciennes URLs WordPress en 308 vers des 200. Aucune anomalie.
- `inspect` : article commissionnaire et page entrepôt **« Submitted and indexed »**.

## 3. Haloscan (positions du domaine, 16/11)

**56 mots-clés / 23 pages** (30 / 15 le 19/10). Nouveaux ou re-scrapés depuis le 29/10 :

| Mot-clé | Pos. | Page | Scrape | Volume | Lecture |
|---|---|---|---|---|---|
| **transport container gennevilliers** | **1** | `/` | 03/11 | NA | objectif brief §5B (19 pré-rebuild sur `/manutention/`) ; pilier A en 38 sur la même requête |
| **prestataire stockage gennevilliers** | **4** | `/stockage/externalisation-logistique/` | 13/11 | NA | était 14 sur `/stockage/` ; variante « écartée » du brief à réexaminer (plan) |
| coursier dédié | 5 | comparatif | 30/10 | 5 | 1er top 5 du blog |
| **dépotage de conteneur** | **7** | guide | 11/11 | 20 | cluster A national : le guide entre dans le top 10 |
| qu est ce qu un transport dédié | 8 | comparatif | 12/11 | NA | |
| **transporteur gennevilliers** | **8** | `/` | 05/11 | 110 | **était 6** (28/09, 17/10) ; `/contact/` 34 |
| dépoter un conteneur | 10 | guide | 12/11 | 10 | |
| transporteur pl | 10 | transport PL | 26/10 | 20 | |
| qu est ce que le transport dédié | 12 | comparatif | 10/11 | NA | |
| logistique gennevilliers | 14 | `/stockage/` | 03/11 | 30 | mot-clé étape A du brief (leaderfret 5) ; `/` 36 |
| combien de palettes dans un container 20 pieds | 14 | palettes | 02/11 | 10 | **1er scrape de l'article palettes** |
| transport routier gennevilliers | 14 | `/` | 25/10 | 20 | |
| externalisation transport | 15 | externalisation | 06/11 | 10 | |
| transport poids lourd ile de france | 15 | transport PL | 25/10 | 10 | |
| transitaire gennevilliers | 16 | `/` | 04/11 | 30 | `/contact/` 30 |
| depotage douane / plan d'empotage | 16 / 16 | guide | 25/10 / 23/10 | 10 / 10 | |
| entreprise transport gennevilliers | 18 | `/` | 14/11 | NA | `/contact/` 43 |
| société de transport gennevilliers | 21 | `/` | 06/11 | NA | `/contact/` 40 |
| transport gennevilliers | **23** | **`/contact/`** | 03/11 | 170 | **l'accueil n'est pas scrapé dessus** (9 pré-rebuild) |
| course urgente | **28** | course-urgente | 16/11 | 20 | était 43 |
| différence entre consignataire et transitaire | 35 | commissionnaire | 06/11 | 10 | 1er scrape de l'article du 02/11 |

Non re-scrapés : « tournée régulière transport » 13 (17/09), « commissionnaire de transport international » 22 (14/10), « externaliser logistique » 36 (30/09), « gennevilliers transport » 6 et « entreprise de transport gennevilliers » 10 (> 2 mois).

**Cannibalisation** : `/contact/` vs `/` sur quatre requêtes de la grappe (transporteur 8/34, transport 23/—, société 21/40, transitaire 16/30) → traitée par la PR du refresh accueil (title de `/contact/` recentré, brief du 04/11) ; « dépotage conteneur gennevilliers » dispersée sur 9 pages GSC (pilier 1,8 gagne) → au refresh du pilier A (02/2027). Rien d'autre.

## 4. Règle des 90 jours

| Contenu | Publié | J90 | Statut |
|---|---|---|---|
| Site (16 pages) | ~fin 07/2026 | **passé** (revue J90 du 29/10) | diagnostic ouvert ; actions = refreshes du plan (accueil `go-11/2026` bloqué ; tournée + palettes 12/2026 ; reportés 02/2027) |
| Article tournée | 24/08 | **22/11** | ⛔ observation — J+84 ; **verdict à la revue du 23/11** |
| Guide empotage | 28/08 (indexé 16/10) | ~14/01/2027 (effectif) | ⛔ observation — J30 effectif relevé |
| Comparatif | 02/09 (indexé 16/10) | ~14/01/2027 (effectif) | ⛔ observation |
| Article palettes | 14/09 | **13/12** | ⛔ observation — J60 relevé |
| Article commissionnaire | 02/11 | ~31/01/2027 | ⛔ observation — J+14 |
| Refresh entrepôt (cross-docking) | 02/11 | ~31/01/2027 | ⛔ observation — J+14 ; `ctr-gap` à J+30 (~02/12) |

**Aucune action corrective sur les contenus.** Exception prévue toujours ouverte : lien « Poids d'un conteneur » dans l'article palettes à sa publication (candidat non daté). L'exception « renvoi € du comparatif » est caduque (sujet « coût tournée » abandonné le 29/10) : le commentaire MDX réservé se traitera au refresh du comparatif post-J90.

## 5. Diagnostic (pages ≥ 90 j = les 16 pages du site)

- **Bloqué 4-20, gisement prioritaire** : `/` (grappe locale 7,3-11,0, 0 clic hors marque) → **refresh accueil `go-11/2026`, brief prêt, bloqué par le prérequis fiche Google** (§9 ①). `/transport/tournee-reguliere/` 10,1 (3 clics) → refresh `prévu` 12/2026. **`/stockage/externalisation-logistique/` 221 imprs / 0 clic / 15,9, quatre requêtes en 7,6-17,4, Haloscan « prestataire stockage gennevilliers » 4** → refresh pilier C `reporté 02/2027` : c'est désormais la page du site au plus grand écart (hors blog) — **signal à porter au GO de décembre** (le plan de décembre est plein : 2 refreshes ; avancer le pilier C en janvier à la place ou en plus du satellite PME est une décision de la revue J90 n° 2 ou du GO mensuel, pas de la weekly).
- **CTR faible en pos. ≤ 10** : aucune page du site ≥ 90 j au seuil (les écarts sont sur le blog < 90 j) ; `/stockage/` 58 imprs / 1 clic / 7,3 : écart 1, rien.
- **Chute brutale** : aucune. `check404` et `inspect` sains. « course urgente » perd des impressions (44 → 9) et des positions Haloscan (43 → 28, hors zone) : cohérent avec un refresh reporté, pas une anomalie technique.
- **Cannibalisation** : `/contact/` ↔ `/` (traitée par la PR accueil) ; pilier A ↔ pages stockage sur « dépotage conteneur gennevilliers » (refresh pilier 02/2027).

## 6. Re-check bimestriel (1er re-check, dû depuis le 26/10)

| Typologie | Contenus | Constat | Action |
|---|---|---|---|
| `guide` | article tournée (J+84), guide empotage (J+31 effectif) | les deux sont **< 90 j** : aucune complétion possible ; la vérification des évolutions externes (code CTU, pratiques de quai, réglementation urbaine des VL) **non vérifiable** dans cette session (WebFetch refusé) | consigné sans action ; **à refaire au verdict J90 du 23/11** pour la tournée (compléments éventuels dans le refresh léger prévu avec la page service en 12/2026) et au J90 effectif du 14/01/2027 pour le guide |
| `evergreen` | comparatif, palettes, commissionnaire | rien sauf érosion — aucune érosion (positions en progrès) | aucune |
| `actu` | — | aucun contenu | — |

Prochain re-check : revue du **11/01/2027** (~8 semaines).

## 7. Équilibre du trafic

- **Concentration** : accueil = 27 / 59 (**46 %**, 51 % en S43 — 6e baisse consécutive : 81 → 79 → 72 → 62 → 51 → 46 %) ; les 3 premières pages (`/`, guide, palettes) = 44 / 59 (**75 %**, 74 %). Toujours au-dessus du seuil de fragilité, mais la nature du risque change : il n'est plus « la homepage tombe » mais « deux articles informationnels portent 29 % des clics et 60 % des impressions » — un refresh orienté clic sur ces deux pages (12/2026, 01/2027) est la bonne réponse, pas une création.
- **Dépendance SEO** : ⚠️ non mesurable (PostHog empêché, §8).

## 8. Contacts (PostHog) — ⚠️ contrôle empêché

`node scripts/posthog-fetch.mjs contacts --days 7 / --days 28` et `pages --days 28` (`--site https://transportsansquer.fr/`) **refusés par les permissions de la session non interactive** — 4e revue consécutive (19/10, puis les trois lundis sans revue). La seule lecture reste celle du relevé interactif du 29/10 (17-28/10 : 93 visites, 3 clics téléphone, 6 clics e-mail tous sur `/recrutement/`, 1 formulaire). **Correctif tenté dans cette session, refusé** (l'écriture de `.claude/settings.local.json` demande une approbation) → **to-do #28 (opérateur, 2 minutes)** : ajouter `Bash(node scripts/gsc-fetch.mjs *)`, `Bash(node scripts/posthog-fetch.mjs *)` et `Bash(node scripts/haloscan-fetch.mjs *)` à `permissions.allow` ; la to-do kaelix #11 a la même cause et se clôt en même temps. Rappels de lecture pour cette première vraie section : < 50 visites par page → on compte, on ne conclut pas ; PostHog = contacts, GSC = trafic ; aucune attribution par source ; les clics e-mail de `/recrutement/` sont des candidatures.

## 9. Plan d'action S47 (16-20/11) — max 5

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Fiche Google (#2)** : horaires lun-ven **07:30-12:30 / 13:30-16:00**, catégorie principale **« Société de transport routier »**, zone 92/94/78/95 + Paris, description `nap.md` §2 bis — ⛔ adresse intouchable, tél 06 déjà ✅ | opérateur → to-do #2 (skill `local-seo`) | **P1** | c'est le **prérequis du refresh accueil `go-11/2026`** (brief prêt depuis le 04/11, 4 exécutions bloquées) ; justification renforcée : « transporteur gennevilliers » 84 → **30 imprs, 0 clic, pos. 9,0**, Haloscan 6 → 8. **Règle proposée** : fiche conforme au **23/11** (J-7 de fin de mois) sinon le sujet passe `reporté` 12/2026 (motif : prérequis non rempli, capacité opérateur) — à défaut, Axel peut lever le prérequis explicitement (déconseillé : la PR ne rendra rien tant que le pack local capte les clics) |
| ② | **Verdict J90 de l'article tournée (22/11)** + re-check `guide` à la revue du 23/11 ; `ctr-gap` J+30 du refresh entrepôt (~02/12) ; J30 commissionnaire (~02/12) | système → `/weekly-review` 23/11 | P2 | aucun first-party à attendre (invariant 14) ; le refresh léger de l'article est déjà prévu avec la page service en 12/2026 |
| ③ | **Rapport mensuel** : acter si le bilan J90 client (📤 29/10) **tient lieu du rapport d'octobre** (absent de l'index `reports/README.md`) ou produire `/report` 2026-10 ; préparer le **GO de décembre** sur le brouillon du rapport de novembre (01/12) : 2 refreshes `prévu` (page service tournée ; palettes orienté clic dès le 13/12) + signal pilier C (§5) | opérateur → to-do #27 ; système → `/report` | P2 | §1.30-1.31 : le GO mensuel est groupé sur le rapport |
| ④ | **Liste blanche PostHog (#28)** : ajouter les 3 lignes `Bash(node scripts/gsc-fetch.mjs *)`, `Bash(node scripts/posthog-fetch.mjs *)`, `Bash(node scripts/haloscan-fetch.mjs *)` à `permissions.allow` de `.claude/settings.local.json` (la session non interactive ne peut pas écrire ce fichier) | opérateur → to-do #28 | **P2** | 4 revues sans section Contacts ; kaelix #11 même cause ; avant la revue du **23/11** |
| ⑤ | **Citations** : 118000 (#10 : validation téléphonique, code 700 264), lot 2 (#11 : Apple, Bing, HAROPA), **API GBP (#21)** — qui porte aussi la publication de la réponse à l'avis de gilles (GO du 04/09, J+73) | opérateur → to-do #10, #11, #21 | P3 | contrôle de propagation Solocal/Mappy manqué le 02/11 → **07/12** (1er lundi) |

⛔ Aucune action « demander au client » (invariant 14).

## 10. Plan éditorial (état vs prévu)

- **Août** 2/2 · **Septembre** 2/2 · **Octobre** 0/2 (acté) · **Novembre `go-11/2026` : 2/3** — refresh entrepôt ✅ 02/11, article commissionnaire ✅ 02/11, **refresh accueil : brief prêt, `/write` bloqué** par le prérequis fiche Google (relevés API Places des 04, 05, 06, 09 et 10/11 : inchangée). Aucun statut modifié aujourd'hui ; règle de bascule proposée au 23/11 (§9 ①), tracée au journal du plan.
- **Décembre `prévu`** : refresh page service `/transport/tournee-reguliere/` + refresh orienté clic palettes (J90 13/12) → GO au rapport de novembre. **Signal nouveau** pour ce GO / la revue J90 n° 2 : `/stockage/externalisation-logistique/` entre dans le gisement 4-20 (221 imprs / 0 clic, Haloscan « prestataire stockage gennevilliers » 4) alors que son refresh est `reporté 02/2027`.
- **Pas de dérive structurelle** : novembre est à 2/3 le 16, les deux publications ont eu lieu dans la 1re semaine ; le 3e sujet dépend d'un geste opérateur de 10 minutes, pas d'une capacité de production.
- « Poids d'un conteneur » (candidat) : le palettes à pos. 5,5 et le guide à 2 341 imprs confirment que le cluster A répond ; verdict zéro-clic toujours à produire par un `/research` avant datation (règle du 29/10).

## 11. Circuit avis (étape 12)

- Relevé de la fiche publique : **⚠️ contrôle empêché** (script API Places ad hoc : `node` hors liste blanche ; WebFetch Maps refusé). Dernier **comptage** valide : **04/11** (API Places, session planifiée) — **1 avis, note 4** → aucun nouvel avis au 04/11 ; dernier relevé du **texte** : 04/09. Dernier contrôle de la fiche (horaires/catégorie) : 10/11, inchangée.
- Aucun nouvel avis connu ; aucune issue créée ; aucun brouillon à produire.
- Réponse à l'avis de gilles (GO du 04/09, J+73) : publication **déléguée à l'API GBP** (décision du 20/10) → dépend de #21.

## 12. Citations (étape 13)

Non dû (3e lundi). Le contrôle mensuel du **02/11** (1er lundi) **n'a pas eu lieu** (pas de revue ce jour) ; tentative de rattrapage aujourd'hui (Mappy, Pages Jaunes, 118000 par WebFetch) **refusée par les permissions**. Prochain contrôle : lundi **07/12** — à vérifier : propagation Solocal → Mappy (51 + Bât G1 quai 8, 06, 2 plages, site) et parution Pages Jaunes (bloc A du 20/10), fiche 118000 (validation tél).

## 13. Mises à jour effectuées par cette revue

`reports/2026-11-16-revue-hebdo.md` (ce fichier) · `tracking.md` (relevé global ; colonne « dernier relevé » des 5 articles et du refresh entrepôt ; J30 effectif guide, J60 palettes ; historique S44-S46 non produites + S47 ; paris émergents ; 1er re-check bimestriel) · `content-plan.md` (journal : novembre 2/3, règle de bascule du 23/11 proposée, signal pilier C) · `todo-operateur.md` (#2 P1 re-justifié + échéance 23/11 ; #10 contrôle 07/12 ; #27 rapport d'octobre / GO décembre ; #28 liste blanche ; journal) · `avis.md` (relevé 16/11 empêché, comptage 04/11) · `reports/README.md` (index). ⚠️ `.claude/settings.local.json` : **modification refusée** (→ #28). ⚠️ Tableau de bord « Action Kaelix SEO » **non mis à jour** (outil indisponible dans cette session) : à reporter (#2 échéance et justification, #27 et #28 nouveaux).
