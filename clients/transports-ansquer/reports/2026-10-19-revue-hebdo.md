# Revue hebdo — Transports Ansquer — 2026-10-19 (S43)

| | |
|---|---|
| **Client / date** | `transports-ansquer` — lundi 2026-10-19, revue produite en session `/weekly-review` non interactive (weekly **autonome** depuis le 15/10 : plus d'issue GitHub de validation) |
| **Période des données** | GSC 7 j : 11/10 → 17/10 ; GSC 28 j : 20/09 → 17/10 (dernier jour complet côté Google : 17/10) |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page / query / query filtré blog en 7 j et 28 j, `ctr-gap` page et page+query, inspect ×4, sitemaps, check404), Haloscan MCP (positions du domaine, 3,2 s), repo marketing (git, to-do, plan) |
| **Sources empêchées** | ⚠️ **PostHog** (`posthog-fetch.mjs contacts / pages`) : commande **hors liste blanche de la session** (approbation requise, non interactive) → section Contacts non produite, **première lecture à faire en session interactive** ; ⚠️ **fiche Google publique** : Playwright refusé (permission non accordée) → avis non relevés, **7e semaine** (dernier relevé valide : **04/09**) ; ⚠️ GBP insights / BrightLocal : non fournis ; ⚠️ crawl technique : non lancé (mensuel, `/tech-audit`) |
| **Statut** | interne — ✅ autonome (aucune validation attendue ; les actions opérateur sont dans `todo-operateur.md`) |

## L'essentiel en 5 lignes
- **Indexation débloquée** : le guide empotage et le comparatif sont **« Submitted and indexed », crawlés le 16/10** (12:26 et 12:30), moins de 4 heures après le geste opérateur (to-do #8 : entrée sitemap parasite supprimée + 2 demandes d'indexation). Le guide a déjà **27 impressions en pos. 11,1 sur 2 jours** (« empotage conteneur » 14,7, « dépotage conteneur » pos. 1,0 sur 1 impression). Date de départ réelle de l'observation des deux articles : **16/10**.
- **GSC 28 j : 39 clics / 2 288 impressions** (S42 : 40 / 2 109). Semaine du 11/10 : 8 clics / 559. **Homepage pos. 6,1 sur 7 j** (138 imprs) : meilleure semaine depuis le rebuild, mais 2 clics seulement — la marque (« transport ansquer ») n'a fait que 4 impressions et 0 clic cette semaine, d'où des clics plats. **Article palettes J30 : 694 imprs, pos. 6,3, 3 clics sur 28 j** (143 / 5,7 / 1 sur 7 j).
- **Écart CTR qualifié** : « transporteur gennevilliers » = **84 impressions, 0 clic, pos. 8,1** sur 28 j (ctr-gap : 2 clics manquants). La SERP porte un pack local (Haloscan : `local_listings, map`) — les clics vont à la fiche Google, pas à la page. Avant J90, le seul levier autorisé est la **conformité de la fiche** (to-do #2b : tél 06, horaires, catégorie, description), pas un refresh.
- **Semaine opérateur dense (12-17/10)** : rapport de septembre 📤 émis le 15/10, #8 clos le 16/10, **mesure des contacts PostHog active en prod depuis le 17/10** (PR #9 + politique de confidentialité PR #10), weekly autonome, revue stratégique J90 planifiée en cloud le **29/10**, dossier API GBP prêt (#21). Reste ouvert : **réponse à l'avis gilles non publiée à J+45** du GO (#12).
- **Plan éditorial : octobre 0/2 acté.** La fenêtre de réversibilité de « Commissionnaire vs transporteur » (GO avant le 16/10) est passée sans GO → le sujet **reste `reporté` 11/2026**, à trancher à la revue J90 du 29/10 (signal renforcé : Haloscan le scrape en **pos. 22** le 14/10, GSC 36 imprs pos. 39). Tout reste en fenêtre 90 j → **aucun refresh**. Citations : non dues (3e lundi ; prochain contrôle le 02/11).

---

## 1. Constats de la semaine (12/10 → 18/10)

- **Production** : aucune. Dernier contenu publié : palettes, le 14/09 (5 semaines). Aucun `/research` depuis le 13/09.
- **Pilotage** : 20 commits sur le client en 3 jours (15-17/10), tous tracés dans `todo-operateur.md` :
  - #19 ✅ rapport 2026-09 produit, validé et **émis le 15/10 à 11h28** (retard du 01/10 résorbé) ;
  - #8 ✅ **16/10** : entrée sitemap parasite supprimée + indexation demandée pour les 2 articles → **effet constaté ce matin** (§2.4) ;
  - #22 ✅ **17/10** : PostHog EU actif (projet `transports-ansquer`, clé dans Vercel, événements reçus), politique de confidentialité déployée (PR #10) ;
  - #14 clos : la weekly ne crée plus d'issue (migration cloud étape 2), issues #6/#7/#8 fermées ;
  - #20 : rapport mensuel migré en tâche cloud (01/11 07:49) → **désactiver la tâche Windows « Report mensuel »** reste à faire ;
  - #21 ajouté : formulaire d'accès API GBP à soumettre ;
  - revue stratégique **J90 planifiée le 29/10** (tâche cloud one-shot, livrable PDF, plan nov→janv après GO).
- **Toujours en attente** : #12 (réponse avis gilles, GO du 04/09, texte remis le 15/10), #2b (checklist GBP), #10/#11 (citations), #18 (décision commissionnaire → 29/10).

## 2. Search Console (API directe, propriété préfixe `https://transportsansquer.fr/`)

### 2.1 Vue d'ensemble

| Fenêtre | Clics | Impressions | CTR | Homepage (clics / imprs / pos.) |
|---|---|---|---|---|
| 7 j (11/10-17/10) | 8 | 559 | 1,4 % | 2 / 138 / **6,1** |
| S42 — 7 j (04/10-10/10) | 8 | 567 | 1,4 % | 4 / 125 / 9,5 |
| 28 j (20/09-17/10) | **39** | **2 288** | 1,7 % | 20 / 535 / **7,8** |
| S42 — 28 j (13/09-10/10) | 40 | 2 109 | 1,9 % | 25 / 514 / 8,5 |

Lecture : les impressions progressent encore (+179 sur 28 j, portées par le palettes +119 et par l'entrée du guide empotage), les clics restent sur un plateau de 8/semaine. La homepage gagne 0,7 point sur 28 j et touche 6,1 sur la semaine : c'est le signal attendu avant J90, mais la semaine n'a produit que 2 clics parce que la requête de marque a quasi disparu (4 imprs, 0 clic contre 20 imprs / 5 clics sur le 28 j précédent) — bruit sur de petits nombres, pas une tendance. **10 pages avec au moins 1 clic** (9 en S42).

### 2.2 Pages (28 j)

| Page | Clics | Imprs | Pos. | Lecture |
|---|---|---|---|---|
| `/` | 20 | 535 | 7,8 | **51 %** des clics (62 % en S42) — concentration en baisse pour la 4e revue |
| `/transport/hayon-20m3-paris/` | 6 | 94 | 7,3 | 2e page du site, meilleur CTR (6,4 %) ; 2 clics cette semaine |
| `/blog/combien-de-palettes-dans-un-conteneur/` | **3** | **694** | **6,3** | **J30** — voir §2.4 ; 143 imprs sur 7 j, pos. 5,7 |
| `/stockage/entrepot-gennevilliers/` | 2 | 84 | 11,3 | « crossdocking île de france » **4,7** (24) — **3,1 sur 7 j** |
| `/transport/tournee-reguliere/` | 2 | 28 | 9,5 | 1er clics de la page service du cluster F ⭐ (1 cette semaine, pos. 5,8 sur 7 j) |
| `/recrutement/` | 2 | 16 | 32,2 | hors cible |
| `/entreprise/` | 1 | 35 | 31,1 | |
| `/stockage/` (hub) | 1 | 49 | 8,7 | |
| `/stockage/externalisation-logistique/` | 1 | 81 | 20,1 | « entrepôt de stockage externalisé » 18,0 (29) |
| `/transport/` (hub) | 1 | 86 | 33,6 | bruit « transport déchets industriels » (26 + 13 imprs, pos. 53-58) |
| `/stockage/depotage-empotage-conteneurs/` (pilier A) | 0 | 150 | 25,7 | « empotage des conteneurs » 26 / 42,6 ; « dépotage conteneur gennevilliers » 24 / 47,4 (**26,9 sur 7 j**) |
| `/transport/course-urgente/` | 0 | 79 | 24,4 | « course urgente » 44 / 19,6 (**16,0 sur 7 j**) — cluster E, refresh 11/2026 |
| `/transport/transport-pl-ile-de-france/` | 0 | 72 | 17,7 | « transport pl » 13,0 (5) ; 0 clic ce mois (2 en S42) |
| `/contact/` | 0 | 69 | 14,0 | |
| `/transport/transport-international/` | 0 | 55 | 35,4 | « commissionnaire de transport international » 36 / 39,0 — sujet B toujours sans page |
| `/transport/affretement-europe/` | 0 | 28 | 26,2 | « affretement routier europeen » 15 / 40,5 |
| `/blog/empotage-depotage-conteneur/` | 0 | **27** | **11,1** | **indexé le 16/10** — 27 imprs en 2 jours |
| `/manutention/` (ancienne URL, 308) | 0 | 24 | 17,0 | migration d'index |
| `/blog/tournee-livraison-reguliere/` | 0 | 16 | 7,5 | voir §2.4 |
| `/stockage/groupage-degroupage/` | 0 | 20 | 14,9 | |
| `/stockage/preparation-commandes/` | 0 | 15 | 30,6 | |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 0 | 1 | 10,0 | **indexé le 16/10** — 1re impression |
| `/transport/recyclage-tri/`, `/transport/debarras/`, `/blog/`, `/98ee9-contact/` | 0 | 13 / 6 / 6 / 5 | — | résidus |

### 2.3 Requêtes à suivre (28 j) — brief §5B, grappe locale

| Requête | Imprs | Pos. | Clics | 7 j | Page | S42 (28 j) | Pré-rebuild |
|---|---|---|---|---|---|---|---|
| transporteur gennevilliers | **84** | **8,1** | **0** | 21 imprs, pos. 7,7 | `/` | 70 / 8,8 | pos. 4 |
| transport gennevilliers | 9 | 8,6 | 0 | 3 / 10,0 | `/` | 6 / 7,8 | pos. 9 |
| gennevilliers transport | 4 | 14,0 | 0 | 1 / 13,0 | `/` | 3 / 14,3 | pos. 6 |
| **transport ansquer** (marque) | 15 | **1,0** | **2** | 4 / 1,0 — 0 clic | `/` | 20 / 1,0 — 5 clics | — |
| crossdocking île de france | 24 | **4,7** | 0 | 10 / **3,1** | `/stockage/entrepot-gennevilliers/` | 17 / 5,2 | — |
| cross docking île de france | 27 | 12,5 | 0 | — | idem | 32 / 12,2 | — |
| course urgente | 44 | 19,6 | 0 | 9 / 16,0 | `/transport/course-urgente/` | 45 / 21,0 | — |
| commissionnaire de transport international | 36 | 39,0 | 0 | 6 / 40,5 | `/transport/transport-international/` | 44 / 40,9 | — |
| entrepôt de stockage externalisé | 29 | 18,0 | 0 | 4 / 17,3 | `/stockage/externalisation-logistique/` | 29 / 18,8 | — |
| dépotage conteneur gennevilliers | 24 | 47,4 | 0 | 7 / **26,9** | pilier A (test) | 23 / 56,7 | pos. 19 |
| empotage des conteneurs | 26 | 42,6 | 0 | 5 / 39,6 | pilier A | 25 / 43,6 | — |
| empotage conteneur | 12 | **31,0** | 0 | 7 / **19,0** | pilier A **+ guide (6 imprs, pos. 14,7)** | 10 / 37,9 | — |
| empotage d'un conteneur | 8 | 25,9 | 0 | 7 / 22,7 | guide (5 imprs, pos. 12,6) | — | — |
| dépotage conteneur | 8 | 35,3 | 0 | 3 / 27,7 | pilier A + guide (1 impr, **pos. 1,0**) | 7 / 38,9 | — |

Lecture : la tête de grappe « transporteur gennevilliers » tient entre 7,7 et 8,1 pour la 3e semaine (Haloscan la re-scrape en **pos. 6** le 17/10, inchangée depuis le 28/09) mais **ne génère aucun clic sur 84 impressions** : la SERP affiche un pack local au-dessus des résultats organiques, les clics vont aux fiches. La fiche Ansquer est non conforme (tél 01, horaires sans coupure, catégorie générique, description vide — to-do #2b) : c'est le levier de la semaine, et le seul autorisé avant J90. « crossdocking île de france » passe en pos. 3,1 sur 7 j (top 3 de fait, 0 clic — requête à faible volume). Le cluster A national bouge dès l'indexation du guide : « empotage conteneur » 37,9 → 31,0 sur 28 j et **19,0 sur 7 j**, le guide prenant une partie des impressions au pilier. « course urgente » continue de remonter sur 7 j (16,0). La marque est en creux (15 imprs vs 20) : rien à conclure.

### 2.4 Blog (4 articles)

| Article | Publié | Âge | Inspection GSC (19/10) | Données 28 j | Évolution vs S42 |
|---|---|---|---|---|---|
| `/blog/tournee-livraison-reguliere/` | 24/08 | J+56 | ✅ Submitted and indexed (crawl 26/08, pas de re-crawl) | 16 imprs, pos. 7,5, 0 clic (7 j : 6 imprs, pos. 8,3) | stable (21 / 7,6) ; **J60 le 23/10**, re-check `guide` à la revue du 26/10 |
| `/blog/empotage-depotage-conteneur/` | 28/08 | J+52 | ✅ **Submitted and indexed — crawl 2026-10-16 12:26** | **27 imprs, pos. 11,1**, 0 clic (tout en 7 j) | 🟢 **débloqué** (5 revues « jamais crawlé ») ; **observation réelle depuis le 16/10** |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 02/09 | J+47 | ✅ **Submitted and indexed — crawl 2026-10-16 12:30** | 1 impr, pos. 10,0 (« transport dédié ») | 🟢 **débloqué** ; **observation réelle depuis le 16/10** |
| `/blog/combien-de-palettes-dans-un-conteneur/` | 14/09 | **J+35 (J30 relevé)** | ✅ Submitted and indexed (crawl 17/09) | **694 imprs, pos. 6,3, 3 clics** (7 j : 143 imprs, pos. 5,7, 1 clic) | +119 imprs ; position en progrès (6,5 → 6,3 ; 5,7 sur 7 j) ; clics 2 → 3 |

**Relevé J30 formel de l'article palettes** (28 j au 17/10) : 694 impressions, pos. 6,3, 3 clics, CTR 0,4 % ; `ctr-gap` : **20 clics « manquants »** (CTR attendu 3,3 % à cette position) — premier écart du site, mais la SERP répond toute seule (requêtes « combien de palettes… » = featured snippet / PAA, Haloscan : `people_also_ask`). Verdict : **observation** ; la raison de cliquer au-delà de la réponse affichée (la table complète 20'/40'/40'HC, le cas gerbage, le poids) sera l'angle du refresh title/meta **à J90 (13/12)**, pas avant. Requêtes attribuées (28 j, 44 impressions sur 694) : « combien de palette dans un container 40 pieds » **1,0** · « nombre de palettes dans un container 40 pieds » 3,5 · « combien de palettes 80x120 dans un conteneur 40 pieds » 5,5 · « nombre de palette dans un conteneur 40 pieds » 5,8 · « combien de palettes dans un conteneur 40 pieds » 6,0 · « …100x120 … 20 pieds » 6,3 · « …europe … 40 pieds » 7,7 · mot-clé principal (100x120 / 40') 8,0 · « peut-on doubler les palettes en 40 pieds » 12,5 · « combien de palettes dans un 40 pieds » 20,0 · « …20 pieds » 22,5 · « …high cube de 40 pieds » 21,7.

**Lecture indexation** : le blocage de 7 semaines avait une cause unique côté GSC (l'entrée sitemap parasite pointant sur l'URL du guide, soumise par erreur le 03/09) ; sa suppression le 16/10 vers midi a été suivie du crawl des deux URL en moins de 4 heures. Aucune retouche de contenu n'a été nécessaire — l'exception technique à la règle des 90 j est **refermée**. Conséquence de calendrier : les deux articles n'ont été exposés à Google que depuis le 16/10 ; leur J90 « publication » (26/11 et 01/12) ne correspond à rien de mesuré → **J90 effectif à compter du 16/10 ≈ 14/01/2027** pour les deux, à acter à la revue stratégique du 29/10 (les colonnes J30/J60/J90 de `tracking.md` portent les deux dates).

### 2.5 Écarts CTR (`ctr-gap`, 28 j, pos. ≤ 20, ≥ 30 imprs)

| Page / requête | Imprs | Clics | CTR | CTR attendu | Pos. | Manque | Qualification |
|---|---|---|---|---|---|---|---|
| `/blog/combien-de-palettes-dans-un-conteneur/` | 694 | 3 | 0,4 % | 3,3 % | 6,3 | **20** | SERP répond seule (snippet/PAA) ; < 90 j → observation, angle title/meta à J90 (13/12) |
| `/` × « transporteur gennevilliers » | 84 | 0 | 0 % | 2,5 % | 8,1 | 2 | pack local capte les clics → **fiche GBP** (#2b), pas de refresh avant J90 |
| `/contact/` | 69 | 0 | 0 % | 1,2 % | 14,0 | 1 | marque en 2e résultat, normal |
| `/transport/transport-pl-ile-de-france/` | 72 | 0 | 0 % | 0,8 % | 17,7 | 1 | hors zone de rendement |
| `/transport/course-urgente/` × « course urgente » | 44 | 0 | 0 % | 0,6 % | 19,6 | 0 | refresh hub urgence 11/2026 |

Homepage, hayon, entrepôt, `/stockage/` : CTR au-dessus de l'attendu (0 manque).

### 2.6 Sitemaps et 404

- `sitemap.xml` : lu par Google le **15/10**, 0 erreur, 25 URLs soumises ; compteur « indexés » toujours à 0 (retard d'affichage habituel).
- ✅ **Entrée parasite disparue** : un seul sitemap listé (to-do #8 exécuté le 16/10).
- `check404` : ✅ 25 URLs du sitemap en 200, 19 anciennes URLs en 308 vers des 200. Aucune anomalie.

## 3. Haloscan (positions du domaine)

30 mots-clés, 15 pages (28 / 13 en S42). Scrapes nouveaux depuis le 12/10 :

| Mot-clé | Pos. | Page | Scrape | Volume | Lecture |
|---|---|---|---|---|---|
| transporteur gennevilliers | **6** | `/` | **17/10** (re-scrape, était 28/09) | 110 (était 140 au brief) | tête de grappe stable en pos. 6 côté Haloscan, 7,7-8,1 côté GSC |
| **commissionnaire de transport international** | **22** | `/transport/transport-international/` | **14/10** (nouveau) | 20 | GSC : 36 imprs pos. 39 — Haloscan voit la page plus haut ; **1re entrée du cluster B dans le suivi**, le sujet reporté garde sa justification |
| transport et valorisation paris | 14 | `/transport/` | 14/10 (nouveau) | NA | opportuniste (déchets/valorisation) |
| transport de matériel lourd | 35 | `/transport/transport-pl-ile-de-france/` | 13/10 (nouveau) | NA | hors cible |

Inchangés : « entreprise de transport gennevilliers » 10 · « société de transport gennevilliers » 12 · « tournée régulière transport » 13 (`/transport/tournee-reguliere/`) · « prestataire stockage gennevilliers » 14 · « svp transport gennevilliers » 18 · « stockage gennevilliers » 24 · « crossdocking » 32 · « externaliser logistique » 36 · « dépotage conteneur » 39 · « course urgente » 43 · « commissionnaire de transport ile de france » 55. « transport gennevilliers » (9) et « gennevilliers transport » (6) : toujours non re-scrapés depuis plus de 2 mois. **Toujours aucun article de blog scrapé par Haloscan** (694 impressions GSC sur le palettes).

**Cannibalisation** : inchangée (« entreprise de transport gennevilliers » `/` 10 vs `/contact/` 36 ; « prestataire stockage gennevilliers » `/stockage/` 14 vs `/` 35). Aucune action ; à relire à la revue J90.

## 4. Règle des 90 jours

| Contenu | Publié | J90 | Statut |
|---|---|---|---|
| Site entier (16 pages) | ~fin 07/2026 | **~fin 10/2026** | ⛔ observation — **revue stratégique J90 le 29/10** (tâche cloud) ; la revue du 26/10 consolide le gisement 4-20 |
| Article tournée | 24/08 | 22/11 | ⛔ observation — **J60 le 23/10** → relevé + re-check `guide` à la revue du 26/10 |
| Article empotage | 28/08 (indexé **16/10**) | 26/11 (publi.) / **~14/01/2027 (effectif)** | ⛔ observation — J0 réel le 16/10 ; exception technique refermée |
| Article comparatif | 02/09 (indexé **16/10**) | 01/12 (publi.) / **~14/01/2027 (effectif)** | ⛔ observation — J0 réel le 16/10 |
| Article palettes | 14/09 | 13/12 | ⛔ observation — **J30 relevé** : 694 / 6,3 / 3 ; écart CTR noté pour le refresh title/meta de J90 |

**Aucune action corrective sur les contenus.** Exceptions prévues inchangées (renvoi € du comparatif à la sortie du sujet « coût tournée » ; lien « Poids d'un conteneur » dans l'article palettes à sa publication).

## 5. Diagnostic (contenus ≥ 90 j)

Aucun contenu éligible. **Gisement 4-20 pour la revue J90 du 29/10** (mis à jour) : « transporteur gennevilliers » 8,1 (84 imprs, 0 clic — pack local) · « transport gennevilliers » 8,6 · « crossdocking île de france » 4,7 (3,1 sur 7 j) / « cross docking île de france » 12,5 · `/transport/hayon-20m3-paris/` 7,3 (6 clics, meilleur CTR du site) · `/transport/tournee-reguliere/` 9,5 (2 clics) · `/stockage/` 8,7 · « transport pl » 13,0 · « entrepôt de stockage externalisé » 18,0 · « course urgente » 19,6 (16,0 sur 7 j) · « commissionnaire de transport international » 39 GSC / 22 Haloscan.

Pour le 29/10 : (a) la grappe locale est en pos. 6-8 avec 0 clic organique — le refresh homepage de 11/2026 doit viser le top 3 **et** la fiche doit être conforme, sinon le gain reste dans le pack ; (b) le palettes prouve que la traîne conteneur répond en jours → dater tôt « Poids d'un conteneur » ; (c) le guide empotage entre en pos. 11-15 sur « empotage conteneur » dès son 2e jour — le cluster A national est en route ; (d) commissionnaire : page service en pos. 22 Haloscan sans contenu dédié → le sujet B est le meilleur candidat « création » de novembre.

## 6. Re-check bimestriel

Non dû (contenu le plus ancien : J+56). Premier re-check à la revue du **26/10** — typologie `guide` : article tournée (J60 le 23/10) ; le guide empotage, indexé depuis 3 jours, n'a pas encore de matière.

## 7. Équilibre du trafic

- **Concentration** : homepage = 20 clics / 39 (**51 %**, vs 62 %) ; les 3 premières pages (`/`, hayon, palettes) = 29 / 39 (**74 %**, vs 78 %). Toujours au-dessus du seuil de fragilité, mais la part de la homepage baisse pour la 4e revue consécutive (81 → 79 → 72 → 62 → 51 %) et 10 pages ont reçu au moins un clic — la diversification se fait par les pages service (hayon, tournée, entrepôt) et le blog.
- **Dépendance SEO** : ⚠️ non mesurable cette semaine (PostHog empêché, §8). Conversions = emails du formulaire devis (Resend), non relevés ici.

## 8. Contacts (PostHog) — ⚠️ contrôle empêché

PostHog est actif depuis le **17/10** (brief §8). La lecture `node scripts/posthog-fetch.mjs contacts --days 7 / --days 28` et `pages --days 28` (`--site https://transportsansquer.fr/`) a été **refusée par la session** (commande hors liste blanche, approbation requise en mode non interactif) → aucune donnée, aucun chiffre inventé. Rappels pour la première lecture (session interactive ou revue J90 du 29/10) : 2 jours de données seulement au 19/10 ; < 50 visites → on compte, on ne conclut pas ; PostHog = contacts, GSC = trafic, jamais mélangés ; exclure les hôtes `*-kaelixs-projects.vercel.app` (le filtre `--site` le fait par domaine). **Action système** : ajouter `node scripts/posthog-fetch.mjs` à la liste blanche des commandes de la session planifiée (même chemin que `gsc-fetch.mjs`, piège §1.13 des conventions).

## 9. Plan d'action S43 (19-23/10) — max 5

Les trois P1 des 6 dernières revues sont closes (rapport, indexation, mesure). Le plan bascule sur le hors-site local et la préparation du J90.

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Publier la réponse à l'avis gilles 4/5** (GO du 04/09) : coller le texte de `avis.md` dans la fiche Google → Avis → Répondre, puis dire « avis gilles publié » | opérateur → to-do #12 | **P1** | **J+45** du GO ; dernier point ouvert du circuit avis ; le relevé de fiche (7 semaines sans) se fait dans la même session |
| ② | **Checklist GBP #2b** : tél **06 03 87 31 66**, horaires 07:30-12:30 / 13:30-16:00, catégorie « Société de transport routier », description de `nap.md` §2 bis, zone 92/94/78/95 + Paris — ⛔ adresse intouchable | opérateur → to-do #2b (skill `local-seo`) | **P1** | justification nouvelle : « transporteur gennevilliers » = 84 imprs / **0 clic** en pos. 8,1, les clics vont au pack local ; seul levier autorisé avant J90 |
| ③ | **Préparer la revue stratégique J90 du 29/10** : la revue du 26/10 relève J60 tournée + re-check `guide`, consolide le gisement 4-20 (§5) et les écarts CTR ; la J90 tranche commissionnaire (Haloscan 22), « Poids d'un conteneur », « coût tournée », refreshes homepage + hub urgence, volume calé sur la capacité **constatée** (octobre 0/2) ; **première lecture PostHog** à cette occasion | système → revue 26/10 + tâche cloud 29/10 → `/content-plan` | P2 | aucun first-party à attendre (invariant 14) |
| ④ | **Désactiver la tâche Windows « KAELIX - Report mensuel »** (doublon du circuit cloud du 01/11) et vérifier les options veille/rattrapage de la tâche « Weekly » | opérateur → to-do #20 | P2 | avant le **01/11** |
| ⑤ | **Citations lot 1** (#10 : Pages Jaunes + Mappy via Solocal, 118000) puis **API GBP** (#21 : formulaire d'accès) | opérateur → to-do #10, #21 | P3 | échéances dépassées depuis septembre ; prochain contrôle citations le 02/11 |

⛔ Aucune action « demander au client » (invariant 14).

## 10. Plan éditorial (état vs prévu)

- **Août** : 2/2. **Septembre** : 2/2. **Octobre** : **0/2 acté** — la fenêtre de réversibilité de « Commissionnaire vs transporteur » (GO `/research` avant le 16/10) s'est refermée sans GO ; le sujet reste **`reporté` 11/2026** (motif inchangé : capacité opérateur ; signal renforcé : Haloscan pos. 22 le 14/10). « Coût d'une tournée externalisée » : toujours « à requalifier » (refus tarifaire).
- **Dérive structurelle confirmée** (un mois sans production après deux mois à 2/2). Pas de rattrapage : la **revue stratégique J90 du 29/10** (déjà planifiée) recale novembre → 2 refreshes post-J90 prioritaires en valeur + 1 création max (commissionnaire ou « Poids d'un conteneur »), selon la capacité réelle de relecture — la semaine du 15-17/10 montre qu'elle existe quand l'opérateur est en session.
- Aucun statut modifié cette semaine ; journal du plan mis à jour.

## 11. Circuit avis (étape 12)

- Relevé de la fiche publique : **⚠️ contrôle empêché** (Playwright : permission refusée ; WebFetch indisponible dans cette session). 7e relevé hebdomadaire manqué. Dernier relevé valide : 04/09, 1 avis (gilles, 4/5), note 4,0.
- Aucun nouvel avis connu ; aucune issue créée. **Un avis publié depuis le 04/09 ne serait pas détecté** — le relevé se fait en session interactive avec le plan ① ; à terme, l'API GBP (#21) automatisera le relevé.
- GO du 04/09 (issue #3) : toujours à exécuter (plan ①), **J+45**.

## 12. Citations (étape 13)

Non dû (3e lundi du mois). Dernier contrôle mensuel : 05/10 (rien de soumis, Mappy inchangé). Prochain : lundi **02/11**.

## 13. Mises à jour effectuées par cette revue

`tracking.md` (relevé global, colonne « dernier relevé » des 4 articles, J30 palettes, J0 réel des 2 articles indexés, historique S43, pari émergent) · `content-plan.md` (journal : octobre 0/2 acté, commissionnaire reste `reporté`, décision → J90 du 29/10) · `todo-operateur.md` (#12 P1 J+45 ; #2b P1 re-justifié par l'écart CTR ; #18 → décision J90 29/10 ; #10, #11, #20, #21 inchangés ; journal) · `avis.md` (relevé 19/10 empêché, 7e) · `reports/README.md` (index).
