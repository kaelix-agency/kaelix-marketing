# Revue hebdo — Transports Ansquer — 2026-11-23 (S48)

| | |
|---|---|
| **Client / date** | `transports-ansquer` — lundi 2026-11-23, revue produite en session `/weekly-review` non interactive (weekly autonome). Revue précédente : S47 du 16/11 |
| **Période des données** | GSC 7 j : 15/11 → 21/11 ; GSC 28 j : 25/10 → 21/11 (dernier jour complet côté Google : 21/11). Comparaisons : revue S47 (28 j au 14/11, 7 j 08-14/11) et revue S43 (28 j au 17/10). Fenêtre J90 de l'article tournée : 24/08 → 21/11 (90 j) |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page 7 j / 28 j, query 7 j / 28 j, page+query 28 j blog + 6 pages de service + accueil 7 j / 28 j, date 28 j, date 28 j commissionnaire, date 90 j article tournée, page 90 j blog, `ctr-gap` page et page+query, `inspect` ×3, `sitemaps`, `check404`), Haloscan MCP (`get_domains_positions`, 3,3 s, 56 mots-clés / 23 pages), repo marketing (git, plan, to-do, revue S47) |
| **Sources empêchées** | ⚠️ **PostHog** (`posthog-fetch.mjs contacts 7 j / 28 j`, `pages 28 j`) : **refusé par les permissions de la session** (commande seule comme en chaîne) — **5e revue consécutive** sans section Contacts ; la liste blanche n'a pas bougé depuis le 16/11 (aucune ligne `scripts/` dans `permissions.allow`, to-do #28 non faite) ; ⚠️ **fiche Google** (horaires, catégorie, avis) : `node .crawl/places-ansquer.mjs` refusé (`node` hors liste blanche), WebFetch refusé → **dernier relevé valide : 16/11** (exécution planifiée « Production du mois », API Places : inchangée) ; aucune exécution « Production du mois » n'a laissé de trace dans le repo entre le 17 et le 22/11 → pas de relevé intermédiaire ; ⚠️ **tableau de bord « Action Kaelix SEO »** (ArtifactData) indisponible dans cette session (2e fois) → les lignes de to-do modifiées ci-dessous **ne sont pas reportées dans la base** ; ⚠️ re-check `guide` à J90 (évolutions externes : code CTU, pratiques de quai, réglementation urbaine VL) non vérifiable sans accès web ; ⚠️ GBP insights / BrightLocal : non fournis |
| **Statut** | interne — ✅ autonome (aucune validation attendue ; les actions opérateur sont dans `todo-operateur.md`) |

## L'essentiel en 5 lignes

- **Meilleure semaine du site** : GSC 7 j = **22 clics / 1 273 impressions** (08-14/11 : 11 / 1 030 ; record précédent 18 clics la semaine du 25/10). Sur 28 j : **68 clics / 5 060 impressions** (S47 : 59 / 5 047) — les impressions plafonnent, les clics montent (+15 %). L'accueil fait 12 clics sur 7 j (CTR 10 %), la marque « transport ansquer » 6 ; le guide empotage rebondit à 545 impressions sur la semaine (424 la semaine précédente) et reprend 3 clics.
- **Verdict J90 de l'article tournée (J90 le 22/11)** : **0 clic / 64 impressions / pos. 8,3 sur 90 j**, 0 impression depuis le 13/11, jamais scrapé par Haloscan sur son mot-clé cible → **pari émergent non confirmé en trafic direct** (le volume ~0 annoncé est réel : Google classe la page en 1re page, personne ne cherche). **Décision : aucun refresh dédié ; l'article reste en place comme satellite** (maillage, autorité du cluster F ⭐ priorité business) ; son complément léger (facteurs de coût, maillage) est **absorbé par le refresh de la page service `/transport/tournee-reguliere/` déjà `prévu` 12/2026** — la page service, elle, convertit (3 clics / 31 impressions / 10,0, CTR 9,7 %). Pas de nouvelle création sur le cluster F tant que la page service n'est pas top 3.
- **Règle de bascule du 23/11 appliquée : le refresh de l'accueil passe `go-11/2026` → `reporté 12/2026`** (motif : prérequis fiche Google non rempli — inchangée au dernier relevé valide du 16/11, 6 relevés identiques du 04 au 16/11 ; relevé du 23/11 empêché ; to-do #2 toujours ouverte). Le brief du 04/11 reste valable ; **réversible au GO de décembre** (rapport de novembre, 01/12) si la fiche est conforme d'ici là ou si Axel lève le prérequis — décembre aurait alors 3 refreshes (haut de la capacité déclarée). **Novembre finit à 2/3.** La grappe locale continue de reculer : « transporteur gennevilliers » **16 impressions / 0 clic / pos. 9,7** sur 28 j (30 en S47, 84 en S43) ; Haloscan « entreprise de transport gennevilliers » 10 → **18** (21/11).
- **Publications du 02/11 à J+21** : la page entrepôt rafraîchie fait **ses 2 premiers clics** (114 impressions / 12,1) mais « crossdocking île de france » recule de 3,0 à **7,2** (55 impressions, 0 clic) — test Google post-refresh, lecture `ctr-gap` à J+30 (~02/12). L'article commissionnaire est à **0 impression depuis le 14/11** (107 impressions / 2 clics, toutes entre le 02 et le 13/11) alors que l'inspection le dit toujours « Submitted and indexed » (crawl 09/11) : observation (< 90 j), **re-inspection à J30 (02/12)** ; si toujours 0 impression, c'est un signal technique à qualifier, pas un refresh.
- **Gisement 4-20 (pages ≥ 90 j)** : `/stockage/externalisation-logistique/` **248 impressions / 0 clic / pos. 16,9** (221 en S47, 2e semaine consécutive en tête des pages de service sans clic ; 5 requêtes en pos. 8,4-16,4 ; Haloscan « prestataire stockage gennevilliers » 4) — son refresh (pilier C) est `reporté 02/2027` : **signal à arbitrer au GO de décembre**, avec l'accueil reporté. ⚠️ PostHog refusé (5e revue, #28 non faite), fiche Google et tableau de bord empêchés. Citations : non dues (4e lundi → 07/12). Aucune action corrective sur les contenus : tout le blog est < 90 j sauf l'article tournée (verdict ci-dessus), et les actions des pages ≥ 90 j sont au plan.

---

## 1. Constats de la période (16/11 → 22/11)

- **Production** : aucune. Le seul sujet `go-11/2026` restant (refresh accueil) est resté bloqué par le prérequis fiche Google ; l'exécution « Production du mois » du 16/11 (après la revue S47) a fait le 6e relevé API Places : fiche inchangée. Aucune exécution n'a laissé de trace entre le 17 et le 22/11.
- **Pilotage** : revue S47 du 16/11 commitée (règle de bascule du 23/11 proposée, to-do #27 et #28 ajoutées). Aucune action opérateur close depuis (#2, #27, #28 ouvertes ; liste blanche inchangée). Kaelix : revue S48 produite ce matin (même refus PostHog).
- **Toujours ouvert côté opérateur** : #2 fiche Google (P1), #27 rapport d'octobre / GO de décembre, #28 liste blanche, #10 118000, #11 lot 2 citations, #21 API GBP (porte la réponse à l'avis de gilles, GO du 04/09 → J+80).

## 2. Search Console (API directe, propriété préfixe `https://transportsansquer.fr/`)

### 2.1 Vue d'ensemble

| Fenêtre | Clics | Impressions | CTR | Homepage (clics / imprs / pos.) |
|---|---|---|---|---|
| **7 j (15/11-21/11)** | **22** | **1 273** | 1,7 % | **12 / 120 / 6,9** (CTR 10 %) |
| 7 j (08/11-14/11, 11/11 férié) | 11 | 1 030 | 1,1 % | 5 / 75 / 6,9 |
| 7 j (01/11-07/11) | 17 | 1 443 | 1,2 % | 4 / 113 / 5,2 |
| 7 j (25/10-31/10) | 18 | ≈ 945 | — | 13 / 106 / 7,3 |
| **28 j (25/10-21/11)** | **68** | **5 060** | 1,3 % | 34 / 421 / **6,4** |
| S47 — 28 j (18/10-14/11) | 59 | 5 047 | 1,2 % | 27 / 415 / 7,7 |
| S43 — 28 j (20/09-17/10) | 39 | 2 288 | 1,7 % | 20 / 535 / 7,8 |

Par jour (15 → 21/11) : 0 / 3 / 6 / 5 / 4 / 2 / 2 clics ; 102 / 270 / 183 / 205 / 179 / 140 / 102 impressions. Le 17/11 (6 clics) et le 16/11 (270 impressions) sont les deux meilleurs jours du mois.

Lecture : les impressions du site sont **au plateau** (5 047 → 5 060 sur 28 j) : le guide empotage ne grossit plus (2 341 → 2 204) et aucune page nouvelle n'est entrée en impressions. Les **clics montent** (59 → 68) par l'accueil (27 → 34, dont la marque 6 → 10) et par le premier clic post-refresh de la page entrepôt. La semaine 15-21/11 est la meilleure du site en clics (22) ; elle ne contient ni férié ni creux — la précédente avait le 11/11.

### 2.2 Pages (28 j)

| Page | Clics | Imprs | Pos. | S47 (28 j) | Lecture |
|---|---|---|---|---|---|
| `/` | **34** | 421 | **6,4** | 27 / 415 / 7,7 | **50 %** des clics (46 % en S47) ; marque « transport ansquer » **10 clics / 35 imprs pos. 1,1** (6 / 33) — le reste des clics est sur des requêtes anonymisées (marque probable) ; grappe locale : 0 clic, cf. §2.3 |
| `/blog/empotage-depotage-conteneur/` | 9 | 2 204 | 7,8 | 10 / 2 341 / 7,7 | **J+38 effectif** — §2.4 ; semaine 15-21/11 : 545 imprs / 3 clics / 7,3 (rebond après 424) |
| `/blog/combien-de-palettes-dans-un-conteneur/` | 5 | 758 | **5,4** | 7 / 712 / 5,5 | **J+70** — §2.4 ; 7 j : 187 imprs / 1 clic / 5,5 ; J90 le **13/12** |
| `/contact/` | 3 | 125 | 8,6 | 2 / 103 / 10,4 | marque 1 clic / 27 imprs pos. 6,3 ; « transport gennevilliers » 1 impr pos. 45 (3 en S47) — la fuite GSC se résorbe, Haloscan la voit encore (23) |
| `/transport/` (hub) | 3 | 134 | 35,9 | 2 / 138 / 36,9 | bruit déchets / valorisation (« transport déchets industriels paris » 42 imprs pos. 75) ; reporté 02/2027 |
| `/transport/tournee-reguliere/` | 3 | 31 | 10,0 | 3 / 28 / 10,1 | **CTR 9,7 %** ; page service du cluster F ⭐, refresh `prévu` 12/2026 — absorbe désormais le complément de l'article (verdict J90, §2.4) ; 7 j : 0 / 5 / 8,4 |
| `/blog/commissionnaire-ou-transporteur/` | 2 | 107 | 8,4 | 2 / 107 / 8,4 | **J+21** — chiffres identiques à S47 : **0 impression depuis le 14/11** (§2.4) |
| `/recrutement/` | 2 | 31 | 15,1 | 1 / 29 / 16,6 | hors cible (candidatures) |
| `/stockage/` (hub) | 2 | 57 | 6,6 | 1 / 58 / 7,3 | Haloscan « logistique gennevilliers » 14 |
| `/stockage/entrepot-gennevilliers/` | **2** | 114 | 12,1 | 0 / 81 / 12,4 | **refresh du 02/11 (J+21) : 2 premiers clics** (requêtes anonymisées) ; « crossdocking île de france » **55 imprs / pos. 7,2 / 0 clic** (38 / 3,0 en S47), « cross docking île de france » 20 / 17,4 ; 7 j : 2 clics / 51 imprs / 10,9, « crossdocking… » 28 imprs / 11,4 — test post-refresh, observation ; `ctr-gap` à J+30 (~02/12) |
| `/transport/hayon-20m3-paris/` | 2 | 118 | 8,8 | 3 / 112 / 8,0 | « hayon livraison » 5 / 4,4, « livraison hayon » 6 / 7,7 — on_track |
| `/stockage/depotage-empotage-conteneurs/` (pilier A) | 1 | 89 | 11,0 | 1 / 76 / 11,7 | « dépotage conteneur gennevilliers » 6 imprs **pos. 1,7** ; « dépotage conteneur » national 3 imprs / 49,7 (le guide le porte) ; refresh reporté 02/2027 |
| `/stockage/externalisation-logistique/` | 0 | **248** | 16,9 | 0 / 221 / 15,9 | **gisement 4-20 (page ≥ 90 j), 2e semaine en tête** : « entrepôt de stockage externalisé » 43 / 12,1 · « prestataire externalisation logistique » 36 / 16,4 · « externalisation préparation commandes » 28 / **8,4** · « externalisation transport » 27 / 12,1 · « externaliser préparation de commandes » 16 / 11,8 · « externalisation logistique vrac » 10 / 25,2 ; Haloscan « prestataire stockage gennevilliers » **4**, « externalisation transport » 15 ; refresh pilier C `reporté 02/2027` → **GO de décembre** (§5) |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 0 | 208 | 10,0 | 0 / 209 / 9,3 | **J+38 effectif** — « transport dédié » 43 / 11,7, « transport dedie » 13 / 18,5, « transport ponctuel » 11 / **6,4**, « "transport dédié" » 8 / 10,5 ; 7 j : 58 imprs / 10,3 ; Haloscan « coursier dédié » 5, « qu est ce qu un transport dédié » 8, « qu est ce que le transport dédié » 12 |
| `/transport/transport-pl-ile-de-france/` | 0 | 111 | 18,4 | 0 / 103 / 20,6 | « transport pl » 7 / 10,7 ; « transport marchandise ile de france » 21 / 42,5 ; Haloscan « transporteur pl » 10, « transport poids lourd ile de france » 15 ; hors plan, à suivre |
| `/transport/affretement-europe/` | 0 | 65 | 36,8 | 0 / 65 / 33,0 | « affretement routier europeen » 46 / 34,3 — hors gisement |
| `/transport/course-urgente/` | 0 | 64 | 27,8 | 0 / 62 / 27,3 | « course urgente » **7** imprs / 21,3 (9 en S47, 44 en S43) ; Haloscan 28 (16/11) ; reporté 02/2027 |
| `/transport/transport-international/` | 0 | 49 | 19,6 | 0 / 49 / 22,5 | « commissionnaire de transport international » 6 / 45,3 (10 / 41,7) ; refresh léger « à inscrire » (plan) |
| `/entreprise/` | 0 | 36 | 8,1 | 0 / 36 / 19,0 | position ÷2 ; `ctr-gap` 1 — rien |
| `/blog/tournee-livraison-reguliere/` | 0 | 13 | 5,9 | 0 / 16 / 5,6 | **J90 le 22/11 → verdict §2.4** ; 0 impression depuis le 13/11 |
| `/stockage/groupage-degroupage/`, `/stockage/preparation-commandes/`, `/transport/recyclage-tri/`, `/transport/debarras/`, `/transport/collecte-valorisation/`, `/manutention/` (308), `/blog/`, `/98ee9-contact/` | 0 | 14 / 11 / 24 / 10 / 5 / 3 / 8 / 2 | — | | résidus |

### 2.3 Grappe locale (brief §5B) — 28 j, S43 → S47 → S48

| Requête → page | S48 (imprs / pos. / clics) | S47 | S43 | 7 j S48 | Haloscan (date) | Pré-rebuild |
|---|---|---|---|---|---|---|
| transporteur gennevilliers → `/` | **16 / 9,7 / 0** | 30 / 9,0 / 0 | 84 / 8,1 / 0 | 3 / 10,7 | **8** (05/11, non re-scrapé) ; `/contact/` 34 | 4 |
| transport gennevilliers → `/` | 13 / 8,1 / 0 | 12 / 7,3 | 9 / 8,6 | 6 / 7,2 | `/contact/` **23** (03/11), `/` non scrapé | 9 |
| transport routier gennevilliers → `/` | 7 / 11,4 / 0 | 6 / 11,0 | — | 1 / 14 | 14 (25/10) ; `/contact/` 41 | — |
| gennevilliers transport → `/` | 2 / 10,5 / 0 | 2 / 10,5 | 4 / 14,0 | — | 6 (> 2 mois) | 6 |
| entreprise de transport gennevilliers → `/` | — | — | — | — | **18** (21/11 ; était 10, > 2 mois) ; `/contact/` **38** (21/11) | — |
| entreprise transport gennevilliers → `/` | — | — | — | — | 18 (14/11) ; `/contact/` 43 | — |
| société de transport gennevilliers → `/` | — | — | — | — | 21 (06/11) ; `/contact/` 40 | — |
| transitaire gennevilliers → `/` | — | — | — | — | 16 (04/11) ; `/contact/` 30 | — |
| transport container gennevilliers → `/` | — | — | — | — | **1** (03/11) ; externalisation 23, pilier A 38 | 19 |
| prestataire stockage gennevilliers → externalisation | — | — | — | — | **4** (13/11) | — |
| logistique gennevilliers → `/stockage/` | — | — | — | — | 14 (03/11) ; `/` 36, `/contact/` 60 | — |
| port de gennevilliers entreprises → `/` | — | — | — | — | 41 (16/11, nouveau, vol. 40) | — |
| dépotage conteneur gennevilliers (toutes pages) | 17 / 30,2 / 0 (pilier **1,7** sur 6) | 23 / 34,3 | 24 / 47,4 | 3 / 37 | — | 19 |
| **transport ansquer** (marque) → `/` | **35 / 1,1 / 10** | 33 / 1,1 / 6 | 15 / 1,0 / 2 | 12 / 1,1 / 6 | — | — |
| crossdocking île de france → entrepôt | 55 / **7,2** / 0 | 38 / 3,0 / 0 | 24 / 4,7 | 28 / 11,4 | — | — |
| course urgente → course-urgente | 7 / 21,3 / 0 | 9 / 22,2 | 44 / 19,6 | — | 28 (16/11) | — |
| commissionnaire de transport international → international | 6 / 45,3 / 0 | 10 / 41,7 | 36 / 39,0 | 1 / 47 | 22 (14/10, non re-scrapé) | — |

Lecture : **la tête de grappe perd encore des impressions** (84 → 30 → 16 sur 28 j, position 8,1 → 9,0 → 9,7) et n'a toujours **aucun clic** ; Haloscan confirme le recul sur la variante « entreprise de transport gennevilliers » (10 → 18). Le pack local (fiche non conforme) capte toujours les clics de la SERP. La fuite `/contact/` sur « transport gennevilliers » se résorbe côté GSC (3 → 1 impression) mais Haloscan voit toujours `/contact/` devant `/` sur six requêtes de la grappe. **Le levier prévu (refresh accueil + title de `/contact/` recentré) est reporté à décembre par la règle de bascule** (§10) ; le levier hors-site (fiche Google, to-do #2) reste le seul actionnable d'ici là. En parallèle, la **marque monte** (2 → 6 → 10 clics sur 28 j) et les **niches locales tiennent** : « transport container gennevilliers » 1, « prestataire stockage gennevilliers » 4, « dépotage conteneur gennevilliers » 1,7 sur le pilier A.

### 2.4 Blog (5 articles) et refresh du 02/11

| Contenu | Publié | Âge | Inspection GSC | 28 j (clics / imprs / pos.) | Par semaine (25/10 → 21/11) | Verdict |
|---|---|---|---|---|---|---|
| `/blog/tournee-livraison-reguliere/` | 24/08 | **J+91 — J90 passé le 22/11** | ✅ indexé (dernier crawl 26/08) | 0 / 13 / 5,9 | 7 → 3 → 3 → **0** imprs | **VERDICT J90** : **0 clic / 64 impressions / pos. 8,3 sur 90 j** (24/08 → 21/11) ; requêtes visibles : « livraison ponctuelle » 4 / 10, « tournées régulières » 3 / 6,7, « transport regulier » 1 / 15, « organiser sa tournée livraison » 1 / 38 ; 0 impression depuis le 13/11 ; Haloscan : jamais scrapé sur « tournée régulière transport » (seule entrée : « organiser sa tournée livraison » pos. 35 le 28/08). **Pari émergent non confirmé en trafic direct** — Google le classe en 1re page, le volume ~0 annoncé le 02/08 est réel. **Décision : pas de refresh dédié, article conservé comme satellite** (maillage vers la page service, autorité du cluster F ⭐ priorité business) ; complément léger absorbé par le refresh de la page service `prévu` 12/2026 ; pas de nouvelle création cluster F tant que la page service n'est pas top 3. Re-check `guide` à J90 : évolutions externes **non vérifiables** (pas d'accès web) → à faire dans le `/research` du refresh de la page service |
| `/blog/empotage-depotage-conteneur/` | 28/08 (indexé **16/10**) | J+87 / **J+38 effectif** | ✅ indexé | **9 / 2 204 / 7,8**, CTR 0,4 % | 567 → 637 → 424 → **545** imprs ; 3 → 2 → 1 → **3** clics | ⛔ observation — plateau 420-640 imprs/semaine ; `ctr-gap` **48** (att. 2,6 %) ; requêtes : « empotage » 224 / 9,4 · « empotage conteneur » 102 / 13,1 · « dépotage » 64 / 19,3 · « empotage container » 58 / 13,2 · « dépotage conteneur » 56 / 11,4 · « empotage d'un conteneur » 46 / 10,8 · « depotage » 43 / 10,6 · « empotage des conteneurs » 30 / 9,6 · « depotage c'est quoi » 20 / 9,4 · « l'empotage » 11 / 8,9 · « dépoter un conteneur » 10 / 15,7 · « dépotage de conteneur » 10 / 7,6 — SERP définitionnelle (AI Overview + PAA) → l'angle du refresh orienté clic **01/2027** reste confirmé ; Haloscan « dépotage de conteneur » **7**, « dépoter un conteneur » 10, « depotage douane » 16, « plan d'empotage » 16 ; **J90 effectif ~14/01/2027** |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 02/09 (indexé **16/10**) | J+82 / **J+38 effectif** | ✅ indexé | 0 / 208 / 10,0 | 45 → 53 → 44 → **58** imprs | ⛔ observation — `ctr-gap` 4 ; « transport ponctuel » 11 / **6,4** (9 / 6,2) ; Haloscan « coursier dédié » **5** ; J90 effectif ~14/01/2027 |
| `/blog/combien-de-palettes-dans-un-conteneur/` | 14/09 | **J+70** | ✅ indexé | **5 / 758 / 5,4** | 155 → 224 → 183 → **187** imprs ; 1 → 1 → 2 → **1** clics | ⛔ observation — J30 : 694 / 3 / 6,3 → J60 : 712 / 7 / 5,5 → J+70 : 758 / 5 / 5,4 ; `ctr-gap` **26** (att. 4,1 %) ; requêtes visibles « …high cube de 40 pieds » 11 / 7,2, « peut-on doubler les palettes en 40 pieds » 11 / 6,2, « nombre de palettes dans un container 40 pieds » 1 / 4 ; Haloscan « combien de palettes dans un container 20 pieds » 14 ; **J90 le 13/12** → refresh orienté clic `prévu` 12/2026 (GO au rapport de novembre) |
| `/blog/commissionnaire-ou-transporteur/` | **02/11** | **J+21** | ✅ **Submitted and indexed, crawl 09/11** (inchangé) | **2 / 107 / 8,4** (identique à S47) | — → 88 / 2 clics → 19 / 0 → **0 / 0** | ⛔ observation — **0 impression du 14 au 21/11** (1 le 13/11, dernière le 09/11 à 12 imprs) : Google a retiré la page de ses tests après 8 jours d'exposition ; l'inspection ne signale rien (indexée, canonique OK). Normal en fenêtre de test, mais **à re-inspecter au J30 (02/12)** : si toujours 0 impression sur 3 semaines, qualifier la cause (crawl, canonique, cannibalisation avec `/transport/transport-international/` qui ne bouge pas : 6 imprs / 45,3) — jamais un refresh |
| Refresh `/stockage/entrepot-gennevilliers/` | **02/11** | **J+21** | ✅ indexé, crawl 02/11 07:55 | **2 / 114 / 12,1** | 24 / 8,2 → 19 / 28,2 → **51 / 10,9 (2 clics)** | ⛔ observation — **2 premiers clics depuis le refresh** (requêtes anonymisées) ; « crossdocking île de france » **55 imprs / 7,2 / 0 clic** (3,0 en S47 — Google re-teste le title/meta neufs : 3,0 → 7,2, 7 j à 11,4), « cross docking île de france » 20 / 17,4 ; `ctr-gap` 2 ; lecture `ctr-gap` à J+30 (~02/12) ; J90 ~31/01/2027 |

**Blog dans l'ensemble** : 16 clics / 68 (**24 %**, 32 % en S47) et 3 298 impressions / 5 060 (**65 %**). 90 j (24/08 → 21/11) : guide 13 clics / 2 969 imprs / 7,7 ; palettes 11 / 1 633 / 5,9 ; commissionnaire 2 / 107 ; comparatif 0 / 279 / 9,9 ; tournée 0 / 64 / 8,3 — **26 clics / 5 081 impressions pour 5 articles**.

### 2.5 Écarts CTR (`ctr-gap`, 28 j, pos. ≤ 20, ≥ 30 imprs)

| Page / requête | Imprs | Clics | CTR | Att. | Pos. | Manque | Qualification |
|---|---|---|---|---|---|---|---|
| guide empotage/dépotage | 2 204 | 9 | 0,4 % | 2,6 % | 7,8 | **48** | SERP répond seule (AI Overview + PAA) ; < 90 j effectif → refresh orienté clic 01/2027 (plan) |
| article palettes | 758 | 5 | 0,7 % | 4,1 % | 5,4 | **26** | idem (snippet/PAA) ; refresh orienté clic 12/2026 dès le J90 du 13/12 (plan) |
| comparatif dédié | 208 | 0 | 0 % | 1,8 % | 10,0 | 4 | < 90 j effectif ; observation |
| guide × « empotage » | 224 | 0 | 0 % | 1,9 % | 9,4 | 4 | définitionnel pur ; observation |
| entrepôt × « crossdocking île de france » | 55 | 0 | 0 % | 2,9 % | 7,2 | 2 | J+21, position en test ; lecture J+30 |
| `/stockage/externalisation-logistique/` | 248 | 0 | 0 % | 0,9 % | 16,9 | 2 | **page ≥ 90 j, gisement 4-20** → refresh pilier C (reporté 02/2027) — signal pour le GO de décembre |
| `/entreprise/` | 36 | 0 | 0 % | 2,5 % | 8,1 | 1 | page institutionnelle ; rien |
| `/transport/transport-pl-ile-de-france/` | 111 | 0 | 0 % | 0,7 % | 18,4 | 1 | hors plan ; à suivre |
| `/` × « transport ansquer » | 35 | 10 | 28,6 % | 20,9 % | 1,1 | 0 | marque au-dessus de l'attendu |

Accueil (page : 8,1 % vs 3,3 % attendu), `/contact/`, `/stockage/`, hayon, commissionnaire, pilier A, entrepôt, tournée régulière, recrutement : CTR au niveau ou au-dessus de l'attendu. « transporteur gennevilliers » sort du tableau (16 imprs < seuil 30) — son écart reste le même : 0 clic sur un pack local.

### 2.6 Sitemaps et 404

- `sitemap.xml` : lu par Google le **21/11**, **26 URLs**, 0 erreur, 0 avertissement ; compteur « indexés » toujours à 0 (affichage).
- `check404` : ✅ 26 URLs du sitemap en 200, 19 anciennes URLs WordPress en 308 vers des 200. Aucune anomalie.
- `inspect` : article tournée (crawl 26/08), article commissionnaire (crawl 09/11), page entrepôt (crawl 02/11) — tous **« Submitted and indexed »**, canonique = URL.

## 3. Haloscan (positions du domaine, 23/11)

**56 mots-clés / 23 pages** — inchangé depuis le 16/11 (aucun mot-clé nouveau). Re-scrapes depuis le 16/11 :

| Mot-clé | Pos. | Page | Scrape | Volume | Lecture |
|---|---|---|---|---|---|
| **entreprise de transport gennevilliers** | **18** | `/` | 21/11 | 40 | **était 10** (> 2 mois) — recul de la grappe confirmé ; `/contact/` 38 sur la même requête |
| port de gennevilliers entreprises | 41 | `/` | 16/11 | 40 | nouveau scrape, hors cible (requête annuaire) |
| transport alizé gennevilliers | 10 | `/` | 15/11 | NA | marque tierce, opportuniste |
| course urgente | 28 | course-urgente | 16/11 | 20 | inchangé depuis S47 |
| emballage routage service recrutement | 69 | `/recrutement/` | 18/11 | 10 | bruit |

Tête de liste inchangée : « transport container gennevilliers » **1** (03/11), « transporteur conteneur gennevilliers » 2 (ancien), « prestataire stockage gennevilliers » **4** (13/11), « coursier dédié » 5, « dépotage de conteneur » **7**, « qu est ce qu un transport dédié » 8, « transporteur gennevilliers » **8** (05/11, non re-scrapé depuis). Non re-scrapés : « tournée régulière transport » 13 (17/09), « commissionnaire de transport international » 22 (14/10), « externaliser logistique » 36 (30/09).

**Cannibalisation** : `/contact/` vs `/` sur six requêtes de la grappe (transporteur 8/34, transport 23/—, société 21/40, entreprise 18/38 et 18/43, transitaire 16/30, logistique 36/60) → traitée par la PR du refresh accueil (title de `/contact/` recentré), **reportée à décembre** avec le sujet ; « transport container gennevilliers » dispersée sur 8 pages (l'accueil gagne en 1) et « prestataire stockage gennevilliers » sur 4 (externalisation gagne en 4) : rien à faire, la bonne page est devant. Rien d'autre.

## 4. Règle des 90 jours

| Contenu | Publié | J90 | Statut |
|---|---|---|---|
| Site (16 pages) | ~fin 07/2026 | **passé** (revue J90 du 29/10) | diagnostic ouvert ; actions = refreshes du plan (accueil **reporté 12/2026** ce jour ; tournée + palettes 12/2026 ; reportés 02/2027) |
| **Article tournée** | 24/08 | **22/11 — passé** | **verdict rendu (§2.4)** : satellite conservé, pas de refresh dédié, complément absorbé par le refresh de la page service 12/2026 |
| Guide empotage | 28/08 (indexé 16/10) | ~14/01/2027 (effectif) | ⛔ observation — J+38 effectif |
| Comparatif | 02/09 (indexé 16/10) | ~14/01/2027 (effectif) | ⛔ observation — J+38 effectif |
| Article palettes | 14/09 | **13/12** | ⛔ observation — J+70 |
| Article commissionnaire | 02/11 | ~31/01/2027 | ⛔ observation — J+21 ; re-inspection à J30 (02/12) si toujours 0 impression |
| Refresh entrepôt (cross-docking) | 02/11 | ~31/01/2027 | ⛔ observation — J+21 ; `ctr-gap` à J+30 (~02/12) |

**Aucune action corrective sur les contenus.** Exception prévue toujours ouverte : lien « Poids d'un conteneur » dans l'article palettes à sa publication (candidat non daté).

## 5. Diagnostic (pages ≥ 90 j = les 16 pages du site + l'article tournée)

- **Bloqué 4-20, gisement prioritaire** : `/` (grappe locale 8,1-11,4, 0 clic hors marque, en recul 3 revues de suite) → refresh accueil **reporté 12/2026** (règle de bascule, §10), levier immédiat = fiche Google (#2). `/transport/tournee-reguliere/` 10,0 (3 clics, CTR 9,7 %) → refresh `prévu` 12/2026, qui absorbe désormais le complément de l'article tournée (verdict J90). **`/stockage/externalisation-logistique/` 248 imprs / 0 clic / 16,9**, « externalisation préparation commandes » en **8,4**, Haloscan « prestataire stockage gennevilliers » 4 → refresh pilier C `reporté 02/2027` : **2e revue consécutive en tête des pages de service sans clic → à arbitrer au GO de décembre** (décembre a déjà 2 refreshes + l'accueil reporté : c'est une décision du GO mensuel ou de la revue J90 n° 2, pas de la weekly).
- **CTR faible en pos. ≤ 10** : aucune page ≥ 90 j au seuil (les écarts sont sur le blog < 90 j effectif) ; `/entreprise/` 36 imprs / 8,1 : écart 1, rien.
- **Chute brutale** : aucune côté technique (`check404`, `sitemaps`, `inspect` sains). Deux extinctions d'impressions à qualifier plus tard, pas maintenant : article commissionnaire 0 impression depuis le 14/11 (J+21, re-inspection au J30) et article tournée 0 depuis le 13/11 (verdict rendu). « crossdocking île de france » 3,0 → 7,2 : re-test post-refresh, J+30.
- **Cannibalisation** : `/contact/` ↔ `/` (PR accueil, reportée 12/2026) ; rien de nouveau.

## 6. Re-check bimestriel

Non dû (dernier le 16/11, prochain ~11/01/2027). **Re-check `guide` au J90 de l'article tournée** (prévu le 16/11 pour aujourd'hui) : évolutions externes (code CTU, pratiques de quai, réglementation urbaine des VL) **non vérifiables** dans cette session (pas d'accès web) → reporté dans le `/research` du refresh de la page service `/transport/tournee-reguliere/` (12/2026), qui lira la SERP et complétera l'article en même temps que la page.

## 7. Équilibre du trafic

- **Concentration** : accueil = 34 / 68 (**50 %**, 46 % en S47 — la série 81 → 79 → 72 → 62 → 51 → 46 % s'interrompt, par la marque : 10 clics sur 34) ; les 3 premières pages (`/`, guide, palettes) = 48 / 68 (**71 %**, 75 %). Toujours au-dessus du seuil de fragilité ; 13 pages ont reçu au moins un clic (13 en S47). La réponse reste la même : refreshes orientés clic des deux articles (12/2026, 01/2027) et refresh de l'accueil (12/2026) — pas de création.
- **Dépendance SEO** : ⚠️ non mesurable (PostHog empêché, §8).

## 8. Contacts (PostHog) — ⚠️ contrôle empêché

`node scripts/posthog-fetch.mjs contacts --days 7 / --days 28` et `pages --days 28` (`--site https://transportsansquer.fr/`) **refusés par les permissions de la session non interactive**, en chaîne comme en commande seule — **5e revue consécutive** (19/10, 16/11, et les trois lundis sans revue). La liste blanche n'a pas été modifiée depuis le 16/11 (aucune ligne `scripts/` dans `permissions.allow`) → **to-do #28 toujours ouverte** (2 minutes opérateur) ; la to-do kaelix #11 a la même cause. Seule lecture disponible : relevé interactif du 29/10 (17-28/10 : 93 visites, 3 clics téléphone, 6 clics e-mail tous sur `/recrutement/`, 1 formulaire). Conséquence concrète : le rapport de novembre (01/12) partira **sans section Contacts** si #28 n'est pas faite avant.

## 9. Plan d'action S48 (23-27/11) — max 5

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Fiche Google (#2)** : horaires lun-ven **07:30-12:30 / 13:30-16:00**, catégorie principale **« Société de transport routier »**, zone 92/94/78/95 + Paris, description `nap.md` §2 bis — ⛔ adresse intouchable, tél 06 déjà ✅ | opérateur → to-do #2 (skill `local-seo`) | **P1** | le refresh accueil est **reporté 12/2026** par la règle de bascule : la fiche n'est plus un prérequis daté au 23/11 mais **la condition de reprise du sujet au GO de décembre** (01/12) — nouvelle échéance **30/11**. Justification intacte : « transporteur gennevilliers » 84 → 30 → **16 imprs / 0 clic / 9,7**, Haloscan « entreprise de transport gennevilliers » 10 → 18 ; la fiche non conforme laisse le pack local capter les clics |
| ② | **Rapport de novembre + GO de décembre (#27)** : le 01/12 la tâche cloud produit le brouillon → y donner le GO : refresh page service `/transport/tournee-reguliere/` (absorbe le complément de l'article tournée, verdict J90) + refresh orienté clic palettes (J90 13/12) ; **arbitrer** : reprise de l'accueil reporté (si fiche conforme / prérequis levé → 3 refreshes, haut de capacité) et signal pilier C (`/stockage/externalisation-logistique/` 248 imprs / 0 clic, 2e semaine) ; acter le rapport d'octobre (bilan J90 en tient lieu ?) | opérateur → to-do #27 ; système → `/report` | **P1** | §1.30-1.31 : le GO mensuel est groupé sur le rapport ; sans #28, le rapport partira sans section Contacts |
| ③ | **Liste blanche (#28)** : 3 lignes `Bash(node scripts/gsc-fetch.mjs *)`, `Bash(node scripts/posthog-fetch.mjs *)`, `Bash(node scripts/haloscan-fetch.mjs *)` dans `permissions.allow` de `.claude/settings.local.json` | opérateur → to-do #28 | **P2** | 5 revues sans Contacts ; kaelix #11 même cause ; avant la revue du **30/11** (et le rapport du 01/12) |
| ④ | **Surveillance système** : re-inspection + `ctr-gap` de l'article commissionnaire au J30 (02/12 — 0 impression depuis le 14/11) ; `ctr-gap` J+30 du refresh entrepôt (~02/12, « crossdocking île de france » 3,0 → 7,2) ; contrôle citations le 07/12 ; J90 palettes le 13/12 | système → `/weekly-review` 30/11 et 07/12 | P2 | aucune action de contenu ; qualification technique seulement si le 0 persiste |
| ⑤ | **Citations** : 118000 (#10 : validation téléphonique, code 700 264), lot 2 (#11 : Apple, Bing, HAROPA), **API GBP (#21)** — qui porte aussi la publication de la réponse à l'avis de gilles (GO du 04/09, **J+80**) | opérateur → to-do #10, #11, #21 | P3 | contrôle de propagation Solocal/Mappy → **07/12** (1er lundi) |

⛔ Aucune action « demander au client » (invariant 14).

## 10. Plan éditorial (état vs prévu)

- **Août** 2/2 · **Septembre** 2/2 · **Octobre** 0/2 (acté) · **Novembre `go-11/2026` : 2/3 — final.** Refresh entrepôt ✅ 02/11, article commissionnaire ✅ 02/11, **refresh accueil : `go-11/2026` → `reporté 12/2026`** (règle de bascule du 23/11, proposée à la revue S47 : fiche Google non conforme au dernier relevé valide du 16/11 — 6 relevés API Places identiques du 04 au 16/11 —, relevé du 23/11 empêché, to-do #2 ouverte ; motif : prérequis non rempli, capacité opérateur). Le brief `research/2026-11-04-refresh-accueil-grappe-locale.md` reste valable (aucune donnée périmée : grappe inchangée en intention, positions à rafraîchir au `/write`). **Réversible au GO de décembre** : fiche conforme ou prérequis levé explicitement par Axel → le sujet est repris en décembre.
- **Décembre** : 2 refreshes `prévu` (page service tournée — qui absorbe désormais le complément de l'article tournée après son verdict J90 — et palettes orienté clic dès le 13/12) + l'accueil reporté à arbitrer = **3 sujets candidats pour une capacité déclarée de 2-3** ; signal supplémentaire : pilier C (`/stockage/externalisation-logistique/`) en tête du gisement 4-20 pour la 2e semaine → **le GO de décembre devra choisir** (rapport de novembre, 01/12).
- **Pas de dérive structurelle** : novembre a produit 2 contenus dans sa 1re semaine ; le report de l'accueil tient à un geste opérateur de 10 minutes, pas à la capacité de production. Signal tout de même : c'est le **2e mois consécutif où un sujet glisse pour une raison opérateur** (octobre : commissionnaire ; novembre : accueil). À noter pour la revue J90 n° 2 (27/01/2027).
- **Cluster F ⭐** : verdict J90 de l'article tournée rendu (pari non confirmé en trafic direct, satellite conservé). La page service convertit (CTR 9,7 %) : la priorité business reste servie par la page service, pas par le blog. Aucune création F avant que la page service soit top 3.
- « Poids d'un conteneur » (candidat) : palettes 5,4 et guide 2 204 imprs — le cluster A répond ; verdict zéro-clic toujours à produire par un `/research` avant datation (règle du 29/10).

## 11. Circuit avis (étape 12)

- Relevé de la fiche publique : **⚠️ contrôle empêché** (`node .crawl/places-ansquer.mjs` refusé — `node` hors liste blanche ; WebFetch refusé). Dernier **comptage** valide : **16/11** (API Places, exécution planifiée) — **1 avis, note 4** → aucun nouvel avis au 16/11 ; dernier relevé du **texte** : 04/09.
- Aucun nouvel avis connu ; aucune issue créée ; aucun brouillon à produire.
- Réponse à l'avis de gilles (GO du 04/09, **J+80**) : publication **déléguée à l'API GBP** (décision du 20/10) → dépend de #21.

## 12. Citations (étape 13)

Non dû (4e lundi). Prochain contrôle : lundi **07/12** — propagation Solocal → Mappy (51 + Bât G1 quai 8, 06, 2 plages, site), parution Pages Jaunes (bloc A du 20/10), fiche 118000 (validation tél, code 700 264).

## 13. Mises à jour effectuées par cette revue

`reports/2026-11-23-revue-hebdo.md` (ce fichier) · `tracking.md` (relevé global ; colonne « dernier relevé » des 5 articles et du refresh entrepôt ; **verdict J90 de l'article tournée** ; sortie de la fenêtre de test ; historique S48 ; paris émergents ; re-check `guide` J90 non vérifiable) · `content-plan.md` (**refresh accueil `go-11/2026` → `reporté 12/2026`**, cluster D et tableau des sujets ; verdict J90 tournée au cluster F ; journal : novembre 2/3 final, décembre à arbitrer) · `todo-operateur.md` (#2 échéance 30/11 et re-justification ; #27 élargi — arbitrage accueil + pilier C ; #28 5e revue ; #21 J+80 ; journal) · `avis.md` (relevé 23/11 empêché, comptage 16/11) · `reports/README.md` (index). ⚠️ Tableau de bord « Action Kaelix SEO » **non mis à jour** (outil indisponible, 2e fois) : #2 (échéance 30/11), #27 (élargi), #28 (rappel) à reporter dans la base.
