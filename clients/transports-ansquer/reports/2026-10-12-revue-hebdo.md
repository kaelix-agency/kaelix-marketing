# Revue hebdo — Transports Ansquer — 2026-10-12 (S42)

| | |
|---|---|
| **Client / date** | `transports-ansquer` — lundi 2026-10-12, revue produite par le Planificateur (tâche « KAELIX - Weekly », lancée à **07:30** — à l'heure, log `logs/2026-10-12-weekly.log`) |
| **Période des données** | GSC 7 j : 04/10 → 10/10 ; GSC 28 j : 13/09 → 10/10 (dernier jour complet côté Google : 10/10) |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page / query / query filtré blog, inspect ×4, sitemaps, check404), Haloscan MCP (positions du domaine, 3,7 s), issues GitHub (API publique), logs du Planificateur, repo marketing (git) |
| **Sources empêchées** | ⚠️ fiche Google publique : WebFetch et Playwright **refusés** (hors liste blanche de la session planifiée) → avis non relevés, **6e semaine** (dernier relevé valide : **04/09**) ; ⚠️ GBP insights / BrightLocal : non fournis ; ⚠️ crawl technique : non outillé (§1.24) ; ⚠️ repo du site : non lu (privé, pas de jeton en session planifiée) |
| **Statut** | interne — 🕓 brouillon (à lire, valider, fermer l'issue) |

## L'essentiel en 5 lignes
- **GSC 28 j : 40 clics / 2 109 impressions** (S41 : 43 / 1 869) — les impressions montent (+240, toutes portées par l'article palettes : **575 imprs, pos. 6,5, 2 clics**), les clics stagnent. Semaine du 04/10 : 8 clics / 567. **« transporteur gennevilliers » : 22 imprs en pos. 7,2 sur 7 j, meilleure semaine de la tête de grappe depuis le rebuild** (8,8 sur 28 j). Tout reste en fenêtre 90 j → observation, aucun refresh.
- **Indexation : toujours bloquée, sans aggravation.** Guide empotage (J+45) et comparatif (J+40) sont tous deux « découverts, non indexés », **jamais crawlés** (le comparatif est remonté de « inconnu » à « découvert »). L'entrée sitemap parasite est toujours là, relue par Google le **06/10** avec 1 erreur. **To-do #8 (5 minutes dans GSC) non exécutée depuis le 03/09.**
- **Aucune activité opérateur depuis le 21/09 (3 semaines)** : aucun commit, issues #6 (S39) et #7 (S41) ouvertes sans commentaire, **rapport de septembre toujours non produit** (11 jours de retard — seul livrable client du mois), réponse à l'avis gilles non publiée à **J+38** du GO.
- **Octobre : 0/2 et la phase 0 n'a pas été lancée** → conformément à la règle posée le 05/10, « Commissionnaire vs transporteur » passe **`reporté` 11/2026** (motif : capacité opérateur, aucun manque de first-party). Réversible si le GO `/research` tombe cette semaine et le `/write` avant le 23/10. Octobre finira au mieux à 1/2 → la révision `/content-plan` de novembre (J90 du site ≈ fin octobre) devra recaler le calendrier.
- **Avis** : relevé empêché (6e semaine) — un avis publié depuis le 04/09 ne serait pas détecté. Citations : pas de contrôle (2e lundi ; prochain le 02/11). Le Planificateur a tourné à l'heure ce matin ; les exécutions manquées du 28/09 et du 01/10 restent à diagnostiquer (to-do #20).

---

## 1. Constats de la semaine (05/10 → 11/10)

- **Production** : aucune. Dernier contenu publié : palettes, le 14/09 (4 semaines). Aucun `/research` dans `research/` depuis le 13/09.
- **Pilotage** : aucun commit depuis la revue S41 (05/10, commit `46e724c`). Issues **#6** (S39, 21/09) et **#7** (S41, 05/10) ouvertes, 0 commentaire. Dernière action opérateur tracée : GO MERGE palettes, le 14/09 (gate) ; fermeture des issues #4/#5 le 14/09.
- **Planificateur** : session de ce matin lancée à **07:30:02**, clé Haloscan chargée, `MCP_TIMEOUT` 120 s, Haloscan répond en 3,7 s → le canal fonctionne quand le poste est allumé. Les deux exécutions manquées (28/09 à 11:15 puis interrompue ; 01/10 jamais démarrée) n'ont toujours pas été diagnostiquées (to-do #20) : **le rapport mensuel du 01/11 est exposé au même risque**.
- **Rapport de septembre** : aucun fichier `reports/2026-09-rapport-client.md` → non généré, non validé, non émis. Rappel : un rapport se produit en session interactive (`/report transports-ansquer 2026-09`), précédé du relevé de la fiche Google (ligne avis permanente).

## 2. Search Console (API directe, propriété préfixe `https://transportsansquer.fr/`)

### 2.1 Vue d'ensemble

| Fenêtre | Clics | Impressions | CTR | Homepage (clics / imprs / pos.) |
|---|---|---|---|---|
| 7 j (04/10-10/10) | 8 | 567 | 1,4 % | 4 / 125 / 9,5 |
| S41 — 7 j (27/09-03/10) | 8 | 469 | 1,7 % | 4 / 114 / 8,3 |
| S41 — semaine du 20/09 | 13 | 618 | 2,1 % | 9 / 143 / 7,2 |
| 28 j (13/09-10/10) | **40** | **2 109** | 1,9 % | 25 / 514 / **8,5** |
| S41 — 28 j (06/09-03/10) | 43 | 1 869 | 2,3 % | 31 / 514 / 7,8 |

Lecture : le volume d'impressions franchit les 2 000 sur 28 j, entièrement grâce à l'article palettes (27 % des impressions du site). Les clics ne suivent pas (40 vs 43) : les requêtes « combien de palettes » sont informationnelles et répondues en SERP (featured/PAA), la page capte peu. La homepage oscille entre 8 et 9,5 sur les fenêtres courtes : test Google normal, rien à conclure avant J90 (fin octobre). CTR global en baisse mécanique (dénominateur gonflé par le blog).

### 2.2 Pages (28 j)

| Page | Clics | Imprs | Pos. | Lecture |
|---|---|---|---|---|
| `/` | 25 | 514 | 8,5 | **62 %** des clics (72 % en S41) — concentration en baisse |
| `/transport/hayon-20m3-paris/` | 4 | 78 | 7,0 | 2e page du site (1 clic cette semaine, pos. 7,8 sur 7 j) |
| `/blog/combien-de-palettes-dans-un-conteneur/` | **2** | **575** | **6,5** | voir §2.4 — 177 imprs sur 7 j, pos. 6,4 ; plateau 160-210/semaine depuis 3 semaines |
| `/stockage/entrepot-gennevilliers/` | 2 | 81 | 12,3 | « crossdocking île de france » pos. 5,2 (17) ; « cross docking île de france » 12,2 (32) |
| `/transport/transport-pl-ile-de-france/` | 2 | 69 | 17,8 | « transport pl » pos. 12,8 (5) |
| `/recrutement/` | 2 | 14 | 33,1 | hors cible |
| `/stockage/externalisation-logistique/` | 1 | 84 | 21,5 | 1er clic (semaine du 04/10) ; « entrepôt de stockage externalisé » 18,8 (29) |
| `/stockage/` (hub) | 1 | 48 | 7,4 | |
| `/stockage/groupage-degroupage/` | 1 | 23 | 16,1 | |
| `/stockage/depotage-empotage-conteneurs/` (pilier A) | 0 | 145 | 24,9 | « empotage des conteneurs » 25 imprs pos. 43,6 ; « dépotage conteneur gennevilliers » 23 / 56,7 (dispersion de test, cf. S41) |
| `/transport/` (hub) | 0 | 84 | 31,3 | bruit « transport déchets industriels » (25 + 11 imprs, pos. 53-57) |
| `/transport/course-urgente/` | 0 | 81 | 23,9 | « course urgente » 45 imprs pos. 21,0 (**16,1 sur 7 j**, 8 imprs) — cluster E, refresh 11/2026 |
| `/contact/` | 0 | 76 | 14,1 | marque en second résultat |
| `/transport/transport-international/` | 0 | 62 | 37,6 | « commissionnaire de transport international » 44 imprs pos. 40,9 — sujet B toujours sans page |
| `/manutention/` (ancienne URL, 308) | 0 | 30 | 13,7 | migration d'index, inchangé |
| `/entreprise/` | 0 | 28 | 25,5 | |
| `/transport/affretement-europe/` | 0 | 27 | 27,3 | « affretement routier europeen » 16 imprs pos. 41,5 |
| `/transport/tournee-reguliere/` | 0 | 24 | 11,7 | « tournées régulières » pos. 11,0 (2) |
| `/blog/tournee-livraison-reguliere/` | 0 | 21 | 7,6 | voir §2.4 |
| `/stockage/preparation-commandes/` | 0 | 16 | 35,1 | « service picking packing ile de france » 32,7 (14) |
| `/transport/recyclage-tri/`, `/transport/debarras/`, `/blog/`, `/98ee9-contact/`, `/transport/collecte-valorisation/` | 0 | 11 / 7 / 5 / 5 / 1 | — | résidus et pages secondaires |

9 pages avec au moins 1 clic sur 28 j (9 en S41).

### 2.3 Requêtes à suivre (28 j) — brief §5B, grappe locale

| Requête | Imprs | Pos. | 7 j | Page | S41 (28 j) | Pré-rebuild (brief) |
|---|---|---|---|---|---|---|
| transporteur gennevilliers | 70 | **8,8** | **22 imprs, pos. 7,2** | `/` | 58 / 10,5 | pos. 4 |
| transport gennevilliers | 6 | 7,8 | 2 imprs, 9,5 | `/` | 12 / 8,5 | pos. 9 |
| gennevilliers transport | 3 | 14,3 | — | `/` | 4 / 12,8 | pos. 6 |
| transport routier gennevilliers | 2 | 28,5 | — | `/` | 2 / 28,5 | — |
| **transport ansquer** (marque) | 20 | **1,0** — 5 clics | 2 imprs, 1 clic | `/` | 22 / 1,0 — 7 clics | — |
| ansquer (marque) | 3 | 2,0 | 1 / 2,0 | `/` | 6 / 3,2 | — |
| crossdocking île de france | 17 | 5,2 | 5 / 6,0 | `/stockage/entrepot-gennevilliers/` | 20 / 4,9 | — |
| cross docking île de france | 32 | 12,2 | 15 / 12,9 | idem | 21 / 11,1 | — |
| course urgente | 45 | 21,0 | 8 / **16,1** | `/transport/course-urgente/` | 53 / 21,9 | — |
| commissionnaire de transport international | 44 | 40,9 | 10 / 42,0 | `/transport/transport-international/` | 51 / 40,1 | — |
| entrepôt de stockage externalisé | 29 | 18,8 | 15 / 17,1 | `/stockage/externalisation-logistique/` | 14 / 21,6 | — |
| dépotage conteneur gennevilliers | 23 | 56,7 | 6 / 48,3 | pages multiples (test) | 24 / 59,1 | pos. 19 |
| empotage des conteneurs | 25 | 43,6 | 5 / 42,6 | pilier A | 24 / 42,8 | — |
| empotage conteneur / dépotage conteneur | 10 / 7 | 37,9 / 38,9 | 3 / 2 | pilier A | — | — |

Lecture : la tête de grappe « transporteur gennevilliers » gagne 1,7 point sur 28 j (10,5 → 8,8) et affiche sa meilleure semaine (7,2) : à confirmer sur 2-3 semaines, mais c'est le signal attendu avant le refresh homepage de 11/2026 (viser le top 3 à partir de ~8). La marque recule légèrement en volume (20 imprs vs 22) — bruit. « course urgente » monte sur 7 j (16,1) : à relire au refresh hub urgence. Les requêtes « empotage / dépotage conteneur » (national) restent en pos. 38-44 sur le **pilier**, faute de guide indexé : c'est exactement le coût du blocage d'indexation (§2.4).

### 2.4 Blog (4 articles)

| Article | Publié | Âge | Inspection GSC (12/10) | Données 28 j | Évolution vs S41 |
|---|---|---|---|---|---|
| `/blog/tournee-livraison-reguliere/` | 24/08 | J+49 | ✅ Submitted and indexed (crawl 26/08, toujours pas de re-crawl) | 21 imprs, pos. 7,6, 0 clic (7 j : 2 imprs, pos. 6,0) | stable (19 / 7,8) ; J60 le 23/10 |
| `/blog/empotage-depotage-conteneur/` | 28/08 | J+45 | 🟡 Discovered - currently not indexed, **jamais crawlée** | aucune | inchangé depuis le 21/09 (4e revue) |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 02/09 | J+40 | 🟡 Discovered - currently not indexed, **jamais crawlée** | aucune | remontée « inconnue » (05/10) → « découverte » ; toujours 0 crawl |
| `/blog/combien-de-palettes-dans-un-conteneur/` | 14/09 | J+28 | ✅ Submitted and indexed (crawl 17/09) | **575 imprs, pos. 6,5, 2 clics** (7 j : 177 imprs, pos. 6,4, 1 clic) | +178 imprs ; plateau hebdo 160-210 ; **J30 le 14/10** |

Requêtes attribuées à l'article palettes (28 j, 39 impressions sur 575 — le reste est anonymisé par Google) : « combien de palette dans un container 40 pieds » **1,0** (1) · « nombre de palettes dans un container 40 pieds » 3,5 (4) · « nombre de palette dans un conteneur 40 pieds » 5,8 (4) · « combien de palettes dans un conteneur 40 pieds » 6,0 (4) · « combien de palettes 100x120 dans un conteneur 20 pieds » 6,3 (3) · « combien de palettes 80x120 dans un conteneur 40 pieds » 6,6 (5) · « combien de palettes europe dans un container 40 pieds » 7,7 (3) · « combien de palettes 100x120 dans un conteneur 40 pieds » 8,0 (1, mot-clé principal) · « combien de palette dans un conteneur 40 pieds » 8,0 (2) · « peut-on doubler les palettes en 40 pieds » 13,0 (3) · « combien de palettes dans un 40 pieds » 20,0 (3) · « combien de palettes dans un 20 pieds » 22,5 (2) · « … high cube de 40 pieds » 24,5 (2).

**Lecture indexation** : rien de nouveau côté site (sitemap relu le 04/10, 0 erreur ; 25 URLs en 200 au `check404`). Deux articles sur quatre sont invisibles depuis 40 et 45 jours alors que les deux autres ont été indexés en 2-3 jours. Les requêtes nationales que le guide empotage doit porter (« empotage conteneur » 210/mois, « dépotage conteneur » 110) tournent en pos. 38-44 sur le pilier : **le blocage coûte un cluster entier**. Traitement inchangé : exception technique à la règle des 90 j, action GSC seule (retrait de l'entrée parasite, puis 2 demandes d'indexation — to-do #8), aucune retouche de contenu. À l'indexation, noter la date réelle de départ de l'observation des deux articles.

### 2.5 Sitemaps et 404

- `sitemap.xml` : lu par Google le **04/10**, 0 erreur, 25 URLs soumises ; compteur « 0 indexés » toujours en retard.
- ⚠️ **Entrée parasite toujours présente** : `https://transportsansquer.fr/blog/empotage-depotage-conteneur/` listée comme sitemap (soumise 03/09, **relue 06/10**, 1 erreur) → to-do #8.
- `check404` : ✅ 25 URLs du sitemap en 200, 19 anciennes URLs en 308 vers des 200. Aucune anomalie.

## 3. Haloscan (positions du domaine)

28 mots-clés, 13 pages (27 / 13 en S41). Un seul scrape nouveau depuis le 05/10 :

| Mot-clé | Pos. | Page | Scrape | Volume | Lecture |
|---|---|---|---|---|---|
| cross docking | 35 | `/stockage/entrepot-gennevilliers/` | **11/10** | 100 (ads 1 900) | tête générique du cluster cross-dock ; « crossdocking » pos. 32 (03/09). Hors cible locale, trafic opportuniste |

Inchangés : « transporteur gennevilliers » **6** (28/09) · « entreprise de transport gennevilliers » 10 · « société de transport gennevilliers » 12 · « tournée régulière transport » 13 (`/transport/tournee-reguliere/`) · « prestataire stockage gennevilliers » 14 · « svp transport gennevilliers » 18 · « stockage gennevilliers » 24 · « externaliser logistique » 36 (30/09) · « dépotage conteneur » 39 · « course urgente » 43 · « commissionnaire de transport ile de france » 55. « transport gennevilliers » (9) et « gennevilliers transport » (6) : toujours non re-scrapés depuis plus de 2 mois (valeurs pré-rebuild). **Aucun article de blog scrapé par Haloscan** malgré 575 impressions GSC sur le palettes — Haloscan ne suit pas encore ces requêtes pour ce domaine.

**Cannibalisation** : inchangée (« entreprise de transport gennevilliers » `/` 10 vs `/contact/` 36 ; « prestataire stockage gennevilliers » `/stockage/` 14 vs `/` 35). URL secondaire loin derrière, aucune action ; à relire à la révision de 11/2026.

## 4. Règle des 90 jours

| Contenu | Publié | J90 | Statut |
|---|---|---|---|
| Site entier (16 pages) | ~fin 07/2026 | **~fin 10/2026** | ⛔ observation — J90 dans 2-3 semaines ; la révision `/content-plan` de 11/2026 (refreshes homepage + hub urgence) se prépare à la revue du 26/10 |
| Article tournée | 24/08 | 22/11 | ⛔ observation — J60 le 23/10 (relevé à la revue du 26/10, avec le re-check `guide`) |
| Article empotage | 28/08 | 26/11 | ⛔ observation — non indexé à J+45 : correction technique GSC (to-do #8), pas un refresh |
| Article comparatif | 02/09 | 01/12 | ⛔ observation — non indexé à J+40 : même traitement |
| Article palettes | 14/09 | 13/12 | ⛔ observation — **J30 le 14/10** : relevé au 12/10 (J+28) = 575 imprs / pos. 6,5 / 2 clics sur 28 j ; relevé J30 formel à la revue du 19/10 |

**Aucune action corrective sur les contenus.** Exceptions prévues inchangées (renvoi € du comparatif à la sortie du sujet « coût tournée » ; lien « Poids d'un conteneur » dans l'article palettes à sa publication).

## 5. Diagnostic (contenus ≥ 90 j)

Aucun contenu éligible. **Gisement 4-20 pour les refreshes de 11/2026** (mis à jour) : « transporteur gennevilliers » 8,8 (7,2 sur 7 j) · « transport gennevilliers » 7,8 · « crossdocking île de france » 5,2 / « cross docking île de france » 12,2 · `/transport/hayon-20m3-paris/` 7,0 (4 clics) · `/stockage/` 7,4 · « tournées régulières » 11,0 · « transport pl » 12,8 · « course urgente » 21,0 (16,1 sur 7 j) · « entrepôt de stockage externalisé » 18,8.

Pour la révision de 11/2026 : (a) la grappe locale approche du seuil où un refresh homepage a le plus de rendement (pos. 7-9 → top 3) ; (b) la traîne « palettes / conteneur » répond en quelques jours → dater tôt « Poids d'un conteneur » ; (c) le cluster B (commissionnaire) reste sans page avec 44 imprs/28 j en pos. 41 — le sujet reporté garde toute sa justification.

## 6. Re-check bimestriel

Non dû (contenu le plus ancien : J+49). Premier re-check à la revue du **26/10** — typologie `guide` : article tournée (J60 le 23/10) ; le guide empotage n'étant pas indexé, son re-check n'a pas de sens avant indexation.

## 7. Équilibre du trafic

- **Concentration** : homepage = 25 clics / 40 (**62 %**, vs 72 %) ; les 3 premières pages (`/`, hayon, palettes ou entrepôt à égalité) = 31 / 40 (**78 %**, vs 84 %). Toujours au-dessus du seuil de fragilité, mais la part de la homepage baisse pour la 3e revue consécutive (81 → 79 → 72 → 62 %). 9 pages ont reçu au moins un clic.
- **Dépendance SEO** : non mesurable (GSC seule, pas d'analytics). Conversions = emails du formulaire devis (Resend), non relevés ici.

## 8. Plan d'action S42 (12-16/10) — max 5

Le goulot est l'opérateur (3 semaines sans gate) : le plan **ne crée aucune action nouvelle**, il reconduit les P1 dans l'ordre où elles débloquent le plus.

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Rapport de septembre** : en session interactive, « relève la fiche Google » puis `/report transports-ansquer 2026-09` → validation → PDF → émission | `/report` + opérateur → to-do #19 | **P1** | seul livrable client du mois ; **11 jours de retard** ; le rapport d'octobre (01/11) arrive dans 3 semaines |
| ② | **Indexation des 2 articles invisibles** : GSC → Sitemaps → supprimer la ligne `blog/empotage-depotage-conteneur/` ; puis « Inspecter l'URL » → « Demander une indexation » pour le guide empotage et le comparatif | opérateur → to-do #8 | **P1** | ~5 minutes ; en attente depuis le 03/09 ; coût : le cluster conteneurs national tourne en pos. 38-44 |
| ③ | **Valider les revues S39 et S41** (fermer les issues #6 et #7, ou commenter) et **diagnostiquer le Planificateur** (historique des tâches du 28/09 et du 01/10 ; options « exécuter dès que possible si manquée » / « sortir de veille ») — avant le rapport du 01/11 | session interactive → to-do #14, #20 | P2 | la tâche de ce matin a tourné à l'heure : le problème est l'état du poste aux heures planifiées |
| ④ | **Publier la réponse à l'avis gilles 4/5** (GO du 04/09, issue #3) : coller le texte de `avis.md` dans la fiche Google → Avis → Répondre, puis dire « avis gilles publié » | opérateur → to-do #12 | P2 | **J+38** ; à faire avant le relevé de fiche de ① |
| ⑤ | **Octobre — décision éditoriale** : « Commissionnaire vs transporteur » est passé `reporté` 11/2026 ce jour (règle du 05/10). Pour le récupérer en octobre : GO `/research` cette semaine + `/write` avant le 23/10 (la session remet alors le statut `prévu`). Sinon : rien à faire, la révision `/content-plan` de fin octobre (J90 du site) recale novembre (refreshes homepage + hub urgence, commissionnaire, « Poids d'un conteneur », « coût tournée » à trancher) | gate → to-do #18 / `/content-plan` | P3 | aucun first-party à attendre (invariant 14) ; un octobre à 0/2 n'est pas un rattrapage à forcer, c'est un signal de révision |

Rappel hors plan (échéances dépassées, inchangé) : citations lot 1 et lot 2 (to-do #10, #11 — validation Solocal à redemander depuis le compte), checklist GBP #2b.

⛔ Aucune action « demander au client » (invariant 14).

## 9. Plan éditorial (état vs prévu)

- **Août** : 2/2. **Septembre** : 2/2. **Octobre** : **0/2 au 12/10**, phase 0 non lancée.
  - « Commissionnaire vs transporteur » : **`prévu` → `reporté` 11/2026** (motif : capacité opérateur — GO `/research` attendu le 28/09 puis le 09/10, non donné ; aucun manque de first-party). Réversible cette semaine (plan ⑤).
  - « Coût d'une tournée externalisée » : reste « à requalifier » (refus tarifaire), décision à la révision de 11/2026.
- **Dérive** : **structurelle à partir de cette revue** si rien n'est publié en octobre (un mois entier sans production après deux mois à 2/2 ; 3 semaines sans gate). Pas de rattrapage au forceps : la révision trimestrielle de 11/2026 était déjà prévue (J90 du site) ; elle absorbera le recalage (novembre = 2 refreshes post-J90 prioritaires en valeur + 1 création max, selon la capacité réelle de relecture constatée en octobre, pas la capacité déclarée).
- Révision de 11/2026 : à préparer dès la revue du 26/10.

## 10. Circuit avis (étape 12)

- Relevé de la fiche publique : **⚠️ contrôle empêché** (WebFetch et Playwright refusés en session planifiée). 6e relevé hebdomadaire manqué. Dernier relevé valide : 04/09, 1 avis (gilles, 4/5), note 4,0.
- Aucun nouvel avis connu ; aucune issue créée. **Un avis publié depuis le 04/09 ne serait pas détecté** — le relevé interactif précédant le rapport de septembre (plan ①) est la seule occasion de rattraper.
- GO du 04/09 sur l'issue #3 : toujours à exécuter (plan ④), J+38.

## 11. Citations (étape 13)

Non dû (2e lundi du mois). Dernier contrôle mensuel : 05/10 (rien de soumis, Mappy inchangé). Prochain : lundi **02/11**.

## 12. Mises à jour effectuées par cette revue

`tracking.md` (relevé global, colonne « dernier relevé » des 4 articles, historique S42, pari émergent) · `content-plan.md` (sujet commissionnaire `reporté` 11/2026 dans le tableau et le cluster B, journal) · `todo-operateur.md` (#8, #12, #18, #19 ré-échéancés ; #14 issues #6/#7 ; #20 annoté ; journal) · `avis.md` (relevé 12/10 empêché) · `reports/README.md` (index).
