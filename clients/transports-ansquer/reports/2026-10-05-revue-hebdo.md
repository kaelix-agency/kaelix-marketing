# Revue hebdo — Transports Ansquer — 2026-10-05 (S41)

| | |
|---|---|
| **Client / date** | `transports-ansquer` — lundi 2026-10-05, revue produite par le Planificateur (tâche « KAELIX - Weekly », log `logs/2026-10-05-weekly.log`). ⚠️ **La revue du 28/09 (S40) n'existe pas** : session lancée à 11:15, interrompue sans livrable (§1) — cette revue couvre donc **deux semaines** |
| **Période des données** | GSC 7 j : 27/09 → 03/10 ; semaine manquée : 20/09 → 26/09 ; GSC 28 j : 06/09 → 03/10 (dernier jour complet côté Google : 03/10) |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page / query / page+query / date, inspect ×4, sitemaps, check404), Haloscan MCP (positions du domaine), curl (statuts HTTP, sitemap, robots, Mappy), issues GitHub (API publique), logs du Planificateur, repo marketing |
| **Sources empêchées** | ⚠️ fiche Google publique : WebFetch et Playwright hors liste blanche ; l'essai par curl renvoie la coquille Maps sans aucune donnée d'avis → avis non relevés (dernier relevé valide : **04/09**) ; ⚠️ Pages Jaunes : 403 au curl ; ⚠️ GBP insights / BrightLocal : non fournis ; ⚠️ crawl technique : non outillé (§1.24) ; ⚠️ repo du site : API GitHub 404 (privé) → activité du site non vérifiée |
| **Statut** | interne — 🕓 brouillon (à lire, valider, fermer l'issue) |

## L'essentiel en 5 lignes
- **L'article palettes décolle : 397 impressions sur 28 j en pos. 6,6 et le 1er clic du blog** (161 imprs sur 7 j, 209 la semaine d'avant). À J+21 il pèse à lui seul 21 % des impressions du site. Fenêtre 90 j → on observe, on ne touche à rien.
- **GSC 28 j : 43 clics / 1 869 impressions** (S39 : 34 / 1 539). Homepage pos. **7,8** sur 28 j (11,4 en S39), 72 % des clics (79 %). Semaine du 27/09 : 8 clics / 469 ; semaine du 20/09 : 13 / 618 (meilleure semaine depuis le rebuild).
- **Indexation : le problème s'aggrave.** Le comparatif (J+33) est **retombé de « découvert » à « inconnu de Google »** ; le guide empotage (J+38) reste « découvert, jamais crawlé ». Les deux pages répondent en 200, sont dans le sitemap (relu le 04/10, 0 erreur), sans noindex. L'entrée sitemap parasite est toujours là (relue le 27/09, 1 erreur). **To-do #8 non exécutée depuis le 03/09.**
- **Trois livrables manquent** : la revue S40 (session du 28/09 interrompue), le **rapport de septembre** (la tâche du 01/10 n'a laissé aucun log : elle n'a pas tourné) et le `/research` d'octobre (GO attendu le 28/09). Aucune activité opérateur tracée depuis le 21/09 ; l'issue #6 (S39) est toujours ouverte. **Octobre : 0/2, phase 0 non lancée.**
- **Avis** : relevé empêché (5e semaine) ; GO du 04/09 sur la réponse à l'avis gilles **toujours non exécuté à J+31**. Citations (1er lundi) : aucune fiche soumise à re-contrôler ; Mappy inchangé (49, 7h30-16h30).

---

## 1. Constats des deux semaines (21/09 → 04/10)

- **Production** : aucune. Dernier contenu publié : palettes, le 14/09. Aucun commit dans ce repo depuis la revue S39 du 21/09.
- **Planificateur** :
  - **28/09** : tâche lancée à **11:15** (au lieu de 07:30 — poste probablement éteint à l'heure prévue). Le log s'arrête à la ligne de lancement de `claude -p` : ni « termine », ni « TIMEOUT », sorties `.out` / `.err` vides. Le wrapper lui-même a été interrompu (hypothèse : poste éteint ou mis en veille pendant la session). Aucun livrable, aucune issue.
  - **01/10** : **aucun log `2026-10-01-report.log`** → la tâche « KAELIX - Report mensuel » n'a pas démarré. Pas de brouillon du rapport de septembre.
  - **05/10** : session de ce matin lancée à 07:30, Haloscan répond en 3,6 s.
- **Gates** : issue #6 (revue S39) ouverte, sans commentaire → S39 non validée. Aucune nouvelle issue depuis.

## 2. Search Console (API directe, propriété préfixe `https://transportsansquer.fr/`)

### 2.1 Vue d'ensemble

| Fenêtre | Clics | Impressions | CTR | Homepage (clics / imprs / pos.) |
|---|---|---|---|---|
| 7 j (27/09-03/10) | 8 | 469 | 1,7 % | 4 / 114 / 8,3 |
| semaine manquée (20/09-26/09) | 13 | 618 | 2,1 % | 9 / 143 / **7,2** |
| 28 j (06/09-03/10) | **43** | **1 869** | 2,3 % | 31 / 514 / **7,8** |
| S39 — 7 j (13/09-19/09) | 9 | 373 | 2,4 % | 7 / 114 / 8,4 |
| S39 — 28 j (23/08-19/09) | 34 | 1 539 | 2,2 % | 27 / 527 / 11,4 |

Lecture : la fenêtre 28 j progresse encore (+9 clics, +330 impressions). La hausse d'impressions vient presque entièrement de l'article palettes ; le CTR global baisse mécaniquement (beaucoup d'impressions informationnelles en pos. 6-7, peu de clics). La homepage se stabilise autour de 7-8 sur les trois dernières semaines, contre 11,4 en moyenne 28 j il y a deux semaines. **Pas de conclusion avant J90** (fin octobre).

### 2.2 Pages (28 j)

| Page | Clics | Imprs | Pos. | Lecture |
|---|---|---|---|---|
| `/` | 31 | 514 | 7,8 | **72 %** des clics (79 % en S39) |
| `/transport/hayon-20m3-paris/` | 3 | 64 | 6,6 | **3 clics cette semaine, pos. 4,5 sur 7 j** (13 imprs, CTR 23 %) |
| `/stockage/entrepot-gennevilliers/` | 2 | 83 | 12,1 | 2 clics la semaine du 20/09 ; « crossdocking île de france » pos. 4,9 |
| `/transport/transport-pl-ile-de-france/` | 2 | 83 | 19,7 | « transport pl » pos. 10,7 (6 imprs) |
| `/blog/combien-de-palettes-dans-un-conteneur/` | **1** | **397** | **6,6** | voir §2.4 — 1er clic du blog |
| `/stockage/depotage-empotage-conteneurs/` (pilier A) | 1 | 134 | 26,3 | « empotage des conteneurs » 25 imprs pos. 43,6 |
| `/stockage/` (hub) | 1 | 50 | 13,3 | |
| `/stockage/groupage-degroupage/` | 1 | 22 | 17,9 | 1er clic |
| `/recrutement/` | 1 | 11 | 35,6 | hors cible |
| `/transport/course-urgente/` | 0 | 89 | 22,4 | « course urgente » 53 imprs pos. 21,9 — cluster E, refresh 11/2026 |
| `/transport/` (hub) | 0 | 89 | 30,7 | bruit « transport déchets industriels » (36 imprs, pos. 54-59) |
| `/stockage/externalisation-logistique/` | 0 | 79 | 23,6 | traîne « entrepôt de stockage externalisé » 21,6 (14), « externalisation logistique vrac » 27,9 (13) |
| `/contact/` | 0 | 79 | 13,4 | marque (« transport ansquer » pos. 6 en second résultat) |
| `/transport/affretement-europe/` | 0 | 37 | 31,6 | « affretement routier europeen » 21 imprs pos. 41,7 |
| `/manutention/` (ancienne URL, 308) | 0 | 30 | 15,0 | migration d'index |
| `/blog/tournee-livraison-reguliere/` | 0 | 19 | 7,8 | voir §2.4 |
| `/transport/tournee-reguliere/` | 0 | 19 | 10,4 | « tournées régulières » 11,7 (3) |
| `/entreprise/` | 0 | 18 | 17,2 | |
| `/transport/recyclage-tri/` | 0 | 17 | 16,0 | « transport déchets recyclables » 14,4 (7) |
| `/stockage/preparation-commandes/` | 0 | 14 | 42,9 | « service picking packing ile de france » 41,4 (12) |
| anciennes URLs `/le-stockage-et-le-transport-durgence/`, `/98ee9-contact/` | 0 | 6 + 4 | 9,3 / 8,8 | résidus en baisse (21 imprs en S39), 308 vérifiés |

### 2.3 Requêtes à suivre (28 j) — brief §5B, grappe locale

| Requête | Imprs | Pos. | Page | S39 (28 j) | Pré-rebuild (brief) |
|---|---|---|---|---|---|
| transporteur gennevilliers | 58 | **10,5** (7 j : 18 imprs, **9,3**) | `/` | 48 / 10,9 | pos. 4 |
| transport gennevilliers | 12 | **8,5** (7 j : 2 imprs, 5,0) | `/` | 21 / 10,3 | pos. 9 |
| gennevilliers transport | 4 | 12,8 | `/` | 3 / 12,0 | pos. 6 |
| transport routier gennevilliers | 2 | 28,5 | `/` + `/contact/` | 5 / 18,8 | — |
| **transport ansquer** (marque) | 22 | **1,0** — 7 clics | `/` | 13 / 1,0 — 6 clics | — |
| ansquer (marque) | 6 | 3,2 | `/` | 8 / 3,8 | — |
| crossdocking île de france | 20 | 4,9 | `/stockage/entrepot-gennevilliers/` | 19 / 4,1 | — |
| cross docking île de france | 21 | 11,1 | idem | 27 / 12,7 | — |
| course urgente | 53 | 21,9 | `/transport/course-urgente/` | 72 / 23,3 | — |
| commissionnaire de transport international | 51 | 40,1 | `/transport/transport-international/` | 47 / 41,5 | — |
| dépotage conteneur gennevilliers | 24 | 59,1 (toutes pages ; pilier seul : 2,0 sur 3 imprs) | 8 pages testées | 25 / 55,9 | pos. 19 (`/manutention/`) |
| empotage des conteneurs | 25 | 43,6 | pilier A | 24 / 42,8 | — |

Lecture : la grappe locale grignote (« transporteur gennevilliers » 10,9 → 10,5, 9,3 sur 7 j ; « transport gennevilliers » 10,3 → 8,5), sans rupture. La marque continue de monter (22 impressions, 7 clics en pos. 1). « commissionnaire de transport international » reste à 51 impressions en pos. 40 sans page dédiée : le sujet d'octobre est toujours justifié. « dépotage conteneur gennevilliers » : Google teste 8 pages différentes sur la requête, le pilier restant le mieux placé (pos. 2) — dispersion de test, à relire à J90 (une seule page cible, pas de fusion à prévoir).

### 2.4 Blog (4 articles)

| Article | Publié | Âge | Inspection GSC (05/10) | Données 28 j | Évolution vs S39 |
|---|---|---|---|---|---|
| `/blog/tournee-livraison-reguliere/` | 24/08 | J+42 | ✅ Submitted and indexed (crawl 26/08, pas de re-crawl depuis) | 19 imprs, pos. 7,8, 0 clic (7 j : 6 imprs, pos. 8,0) | **J30 passé le 23/09** : indexé, faible volume, position 8-10 stable — conforme à un pari émergent à volume nul |
| `/blog/empotage-depotage-conteneur/` | 28/08 | J+38 | 🟡 Discovered - currently not indexed, **jamais crawlée** | aucune | inchangé depuis le 21/09 ; **J30 passé le 27/09 sans indexation** |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 02/09 | J+33 | 🔴 **URL is unknown to Google**, jamais crawlée | aucune | **régression** : « découverte » le 21/09 → « inconnue » le 05/10 ; **J30 passé le 02/10 sans indexation** |
| `/blog/combien-de-palettes-dans-un-conteneur/` | 14/09 | J+21 | ✅ Submitted and indexed (crawl 17/09) | **397 imprs, pos. 6,6, 1 clic** (7 j : 161 imprs, pos. 6,4, 1 clic) | ×20 en deux semaines (19 imprs le 21/09) |

Requêtes de l'article palettes (28 j, 37 impressions attribuées sur 397 — le reste est anonymisé par Google) : « nombre de palettes dans un container 40 pieds » **3,5** (4) · « nombre de palette dans un conteneur 40 pieds » 5,8 (4) · « combien de palettes dans un conteneur 40 pieds » 6,0 (4) · « combien de palettes 100x120 dans un conteneur 20 pieds » 6,3 (3) · « combien de palettes 80x120 dans un conteneur 40 pieds » 6,6 (5) · « combien de palettes europe dans un container 40 pieds » 7,7 (3) · « combien de palettes 100x120 dans un conteneur 40 pieds » 8,0 (1, mot-clé principal) · « peut-on doubler les palettes en 40 pieds » 14,0 (2) · « combien de palettes dans un 40 pieds » 20,0 (3).

**Lecture indexation** : contrôles faits ce jour sur le comparatif : HTTP 200, canonique sur elle-même, pas de `noindex`, présente dans `sitemap.xml` (lastmod 02/09), `robots.txt` ouvert. Rien ne bloque côté site. Deux articles sur quatre sont donc invisibles depuis plus d'un mois alors que l'article palettes prouve que le blog peut se placer en première page en trois semaines. C'est un **problème technique bloquant** au sens de l'exception à la règle des 90 jours : la correction est une action GSC (retrait de l'entrée parasite, demande d'indexation), pas une retouche de contenu. Les J90 de ces deux articles (26/11 et 01/12) ne mesureront rien si l'indexation n'arrive pas vite : il faudra, à l'indexation, noter la date réelle de départ de leur fenêtre d'observation.

### 2.5 Sitemaps et 404

- `sitemap.xml` : lu par Google le **04/10**, 0 erreur, 25 URLs ; compteur « 0 indexés » toujours en retard.
- ⚠️ **Entrée parasite toujours présente** : `https://transportsansquer.fr/blog/empotage-depotage-conteneur/` listée comme sitemap (soumise 03/09, relue **27/09**, 1 erreur) → to-do #8.
- `check404` : ✅ 25 URLs du sitemap en 200, 19 anciennes URLs en 308 vers des 200. Aucune anomalie.

## 3. Haloscan (positions du domaine)

27 mots-clés, **13 pages** (10 le 21/09). Scrapes nouveaux depuis la dernière revue :

| Mot-clé | Pos. | Page | Scrape | Volume | Lecture |
|---|---|---|---|---|---|
| **transporteur gennevilliers** | **6** | `/` | **28/09** | 140 | 1er scrape post-rebuild de la tête de grappe (valeur précédente, pré-rebuild : 8). Chiffre Haloscan, non comparable à la position moyenne GSC |
| course urgente | 43 | `/transport/course-urgente/` | 25/09 | 20 | 1re apparition ; loin — cluster E, refresh 11/2026 |
| externaliser logistique | 36 | `/stockage/externalisation-logistique/` | 30/09 | 720 | 1re apparition sur le mot-clé du satellite PME de 01/2027 |

Inchangés (scrapes de septembre) : « tournée régulière transport » 13 (17/09) · « entreprise de transport gennevilliers » 10 · « société de transport gennevilliers » 12 · « prestataire stockage gennevilliers » 14 · « stockage gennevilliers » 24 · « crossdocking » 32 · « dépotage conteneur » 39 · « commissionnaire de transport ile de france » 55. « transport gennevilliers » (9) et « gennevilliers transport » (6) : toujours non re-scrapés depuis plus de 2 mois. Aucun article de blog encore scrapé par Haloscan.

**Cannibalisation** : deux mots-clés ont deux URL classées sur un même scrape — « entreprise de transport gennevilliers » (`/` pos. 10 et `/contact/` pos. 36, 07/09) et « prestataire stockage gennevilliers » (`/stockage/` pos. 14 et `/` pos. 35). L'URL secondaire est loin derrière à chaque fois : à surveiller, aucune action (site en fenêtre 90 j). À relire à la révision de 11/2026.

## 4. Règle des 90 jours

| Contenu | Publié | J90 | Statut |
|---|---|---|---|
| Site entier (16 pages) | ~fin 07/2026 | **~fin 10/2026** | ⛔ observation — J90 dans ~3-4 semaines : les refreshes de 11/2026 (homepage, hub urgence) se préparent à la révision du plan |
| Article tournée | 24/08 | 22/11 | ⛔ observation — J30 relevé (§2.4) ; J60 le 23/10 |
| Article empotage | 28/08 | 26/11 | ⛔ observation — non indexé à J+38 : correction technique GSC (to-do #8), pas un refresh |
| Article comparatif | 02/09 | 01/12 | ⛔ observation — inconnu de Google à J+33 : même traitement |
| Article palettes | 14/09 | 13/12 | ⛔ observation — J30 le 14/10 |

**Aucune action corrective sur les contenus.** Exceptions prévues inchangées (renvoi € du comparatif à la sortie du sujet 10 ; lien « Poids d'un conteneur » dans l'article palettes à sa publication).

## 5. Diagnostic (contenus ≥ 90 j)

Aucun contenu éligible. **Gisement 4-20 pour les refreshes de 11/2026** (mis à jour) : « transporteur gennevilliers » 10,5 · « transport gennevilliers » 8,5 (cluster D) · « crossdocking île de france » 4,9 / « cross docking île de france » 11,1 · `/transport/hayon-20m3-paris/` pos. 6,6 (3 clics, nouveau) · « course urgente » 21,9 (cluster E) · « transport pl » 10,7 · « entrepôt de stockage externalisé » 21,6 (cluster C).

Signal pour la révision de 11/2026 : la traîne « combien de palettes / nombre de palettes » répond très vite. Le sujet candidat « Poids d'un conteneur » (cluster A, même famille d'intention, ~670/mois cumulés) mérite d'être daté tôt.

## 6. Re-check bimestriel

Non dû (contenu le plus ancien : J+42). Premier re-check à la revue du **26/10** — typologie `guide` : article tournée (J60 le 23/10).

## 7. Équilibre du trafic

- **Concentration** : homepage = 31 clics / 43 (**72 %**, vs 79 %) ; les 3 premières pages (`/`, hayon, entrepôt) = 36 / 43 (**84 %**). Au-dessus du seuil de fragilité, mais la diversification avance : 9 pages ont reçu au moins un clic sur 28 j (6 en S39), dont le blog pour la première fois.
- **Dépendance SEO** : non mesurable (GSC seule, pas d'analytics). Conversions = emails du formulaire devis (Resend), non relevés ici.

## 8. Plan d'action S41 (05-09/10) — max 5

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Rapport de septembre** : jamais généré (tâche du 01/10 non lancée). En session interactive : « relève la fiche Google » puis `/report transports-ansquer 2026-09` → validation → PDF → émission | `/report` + opérateur → to-do #19 | **P1** | seul livrable client du mois ; déjà 5 jours de retard |
| ② | **Indexation des 2 articles invisibles** : GSC → Sitemaps → supprimer la ligne `blog/empotage-depotage-conteneur/` ; puis « Inspecter l'URL » → « Demander une indexation » pour le guide empotage et le comparatif | opérateur → to-do #8 | **P1** | comparatif retombé à « inconnu » ; ~5 minutes ; en attente depuis le 03/09 |
| ③ | **GO `/research` « Commissionnaire de transport vs transporteur : qui mandater ? »** (10/2026 n°1, cluster B, P2) en session interactive ; `/write` dans la foulée | gate + `/research` → to-do #18 | **P1** | GO attendu le 28/09 ; pour publier en octobre, brief cette semaine et `/write` avant le 23/10 ; aucun first-party à attendre |
| ④ | **Publier la réponse à l'avis gilles 4/5** (GO du 04/09, issue #3) : coller le texte de `avis.md` dans la fiche Google → Avis → Répondre, puis dire « avis gilles publié » | opérateur → to-do #12 | P2 | **J+31** ; à faire avant le relevé de fiche du rapport (①) |
| ⑤ | **Planificateur** : comprendre l'interruption du 28/09 et l'absence de la tâche du 01/10 (historique du Planificateur de tâches Windows ; options « exécuter dès que possible si manquée » et « sortir l'ordinateur de veille ») ; valider l'issue #6 (S39) et celle de cette revue | session interactive → to-do #20, #14 | P2 | deux exécutions manquées en trois semaines |

Rappel hors plan (échéances dépassées, inchangé) : citations lot 1 et lot 2, checklist GBP #2b (to-do #10, #11, #2b) — le mail de validation Solocal du 04/09 a été purgé le 04/10, la validation est à redemander depuis le compte Solocal.

⛔ Aucune action « demander au client » (invariant 14).

## 9. Plan éditorial (état vs prévu)

- **Août** : 2/2. **Septembre** : 2/2. **Octobre** : **0/2 au 05/10**, phase 0 non lancée.
  - « Commissionnaire vs transporteur » : reste `prévu`. Tenable en octobre si le `/research` part cette semaine (plan ③).
  - « Coût d'une tournée externalisée » : reste « à requalifier » (refus tarifaire), décision à la révision de 11/2026. Il ne sera vraisemblablement pas produit en octobre → **octobre finira au mieux à 1/2**.
- **Dérive** : pas encore structurelle (retard inférieur à un mois, cadence tenue en août et septembre), mais trois semaines sans gate opérateur. Si le `/research` n'est pas lancé au 12/10, le sujet passera `reporté` 11/2026 (motif : capacité opérateur) et la révision trimestrielle de novembre devra recaler le calendrier avec les refreshes post-J90.
- Révision de 11/2026 : à préparer dès la dernière semaine d'octobre (J90 du site).

## 10. Circuit avis (étape 12)

- Relevé de la fiche publique : **⚠️ contrôle empêché** (WebFetch et Playwright hors liste blanche ; curl sur le lien de la fiche : HTTP 200 mais page Maps sans contenu exploitable, aucun avis ni note dans le HTML). 5e relevé hebdomadaire manqué. Dernier relevé valide : 04/09, 1 avis (gilles, 4/5), note 4,0.
- Aucun nouvel avis connu ; aucune issue créée. **Un avis publié depuis le 04/09 ne serait pas détecté.**
- GO du 04/09 sur l'issue #3 : toujours à exécuter (plan ④), J+31.

## 11. Citations (étape 13 — 1er lundi du mois)

- Aucune fiche au statut `soumis` ou `vérifié` : rien à re-contrôler au sens strict. Les lots 1 et 2 n'ont pas été soumis (to-do #10, #11).
- Contrôle léger de l'existant :
  - **Mappy** (curl, 200) : inchangé — « 49 rte Principale du Port », « 7h30 à 16h30 », ni téléphone ni site. Écart identique à l'audit du 04/09.
  - **Pages Jaunes** : ⚠️ non vérifiable (403 au curl). État connu : absente (04/09).
  - **118000, Apple Plans, Bing Places** : non re-vérifiés (aucune soumission ; outils de recherche web hors liste blanche).
- Aucun écart nouveau. Prochain contrôle : lundi 02/11.

## 12. Mises à jour effectuées par cette revue

`tracking.md` (relevé global, colonnes J30 et « dernier relevé » des 4 articles, historique S40 manquée + S41, pari émergent) · `content-plan.md` (journal) · `todo-operateur.md` (#8, #12, #18, #19 ré-échéancés ; #10 Solocal ; #14 issue #6 ; #20 nouveau) · `avis.md` (relevés 28/09 et 05/10 empêchés) · `citations.md` (contrôle mensuel du 05/10) · `reports/README.md` (index).
