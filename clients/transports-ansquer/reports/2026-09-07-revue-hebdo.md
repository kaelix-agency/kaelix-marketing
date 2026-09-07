# Revue hebdo — Transports Ansquer — 2026-09-07 (S37)

| | |
|---|---|
| **Client / date** | `transports-ansquer` — lundi 2026-09-07, **1re revue produite par le Planificateur** (tâche « KAELIX - Weekly », log `logs/2026-09-07-weekly.log`) |
| **Période des données** | GSC 7 j : 30/08 → 05/09 ; GSC 28 j : 09/08 → 05/09 (dernier jour complet côté Google : 05/09) |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query, inspect, sitemaps, check404), repo marketing (git), issues GitHub (API publique) |
| **Sources empêchées** | ⚠️ Haloscan : **403 sur tous les appels** (positions, overview, crédit) → aucune position Haloscan ; ⚠️ fiche Google publique + Mappy : navigateur/fetch hors liste blanche de la session planifiée → avis non relevés ; ⚠️ GBP insights / BrightLocal : non fournis ; ⚠️ crawl technique : non outillé (§1.24) |
| **Statut** | interne — 🕓 brouillon (à lire, valider, fermer l'issue) |

## L'essentiel en 5 lignes
- **Signal GSC 28 j : 20 clics / 1 142 impressions** (7 j : 8 / 462). Homepage = 15 clics sur 20. Tout est en fenêtre 90 j → observation seule, aucun refresh.
- **Articles 2 et 3 toujours inconnus de Google** (empotage J+10, comparatif J+5 : jamais crawlés) ; l'article tournée est indexé (21 impressions 28 j, pos. 11, 0 clic). To-do #8 (2 clics « Demander une indexation ») reste la seule accélération.
- **Haloscan hors service (403)** : à rétablir avant le `/research` palettes (le serp-analyst en dépend) — action opérateur, côté compte/clé.
- **Avis** : GO « Publie » acquis le 04/09 sur l'issue #3 (avis gilles 4/5) mais **réponse toujours non publiée** ; aucun relevé possible aujourd'hui (fiche injoignable par outil) — dernier relevé du 04/09 : 1 avis.
- **Anomalie GSC à corriger** : l'URL de l'article empotage a été soumise **comme sitemap** le 03/09 (1 erreur) — entrée parasite à retirer (opérateur, 1 clic).

---

## 1. Constats de la semaine (31/08 → 06/09)

- **Production** : comparatif dédié/messagerie/coursier publié le 02/09 (PR #6). Septembre = 1/2 publié ; le sujet palettes (P2, ré-anglé au gate du 02/09) est le prochain `/research`.
- **Chantiers infra livrés** : GSC en API directe (03/09), Planificateur (1re exécution réelle = cette revue), campagne citations posée (04/09), circuit avis testé de bout en bout (issue #3).
- **GO non exécuté** : l'issue #3 a été fermée le 04/09 avec le commentaire « Publie » ; la publication de la réponse (voix publique du client) n'a pas eu lieu — elle ne peut pas se faire depuis une session planifiée (aucun accès navigateur, et c'est voulu).

## 2. Search Console (API directe, propriété préfixe `https://transportsansquer.fr/`)

### 2.1 Vue d'ensemble

| Fenêtre | Clics | Impressions | CTR | Pos. moyenne homepage |
|---|---|---|---|---|
| 7 j (30/08-05/09) | 8 | 462 | 1,7 % | 13,3 (6 clics / 145 imprs) |
| 28 j (09/08-05/09) | 20 | 1 142 | 1,8 % | 13,6 (15 clics / 475 imprs) |
| Pouls précédent (28/08-03/09, mémoire) | 7 | 451 | — | ~13 |

Lecture : plateau stable, ordre de grandeur d'un site fraîchement remplacé (~40 j). Pas de chute, pas de décollage. **Pas de conclusion possible avant J90** (fin octobre pour le site).

### 2.2 Pages (28 j)

| Page | Clics | Imprs | Pos. | Lecture |
|---|---|---|---|---|
| `/` | 15 | 475 | 13,6 | porte 75 % des clics (fragilité structurelle, normale à ce stade) |
| `/stockage/entrepot-gennevilliers/` | 0 | 108 | 17,8 | « crossdocking île de france » **pos. 3,2** (30 imprs) + variante pos. 13,1 (18) — meilleur signal hors homepage |
| `/transport/course-urgente/` | 0 | 95 | 23,4 | « course urgente » 78 imprs pos. 23 — le cluster E existe déjà en impressions |
| `/transport/` (hub) | 0 | 85 | 37,3 | impressions sur « transport déchets industriels » (44) — intention déchets, pas transport : bruit |
| `/stockage/externalisation-logistique/` | 0 | 55 | 32,2 | traîne « externalisation … » (vrac, e-logistique, meuble volumineux) |
| `/stockage/` (hub) | 2 | 52 | 14,9 | |
| `/stockage/depotage-empotage-conteneurs/` (pilier A) | 0 | 39 | 31,7 | « dépotage conteneur gennevilliers » **pos. 1,7** (3 imprs) ; « empotage des conteneurs » pos. 43 (13) |
| `/transport/hayon-20m3-paris/` | 1 | 23 | 7,2 | |
| `/blog/tournee-livraison-reguliere/` | 0 | 21 | 11,0 | voir §2.4 |
| Anciennes URLs WordPress (5 URLs en 308) | 1 | 64 | — | Google affiche encore d'anciennes URLs (`/le-stockage-et-le-transport-durgence/` 36 imprs pos. 9,9, `/manutention/` 17…) : migration d'index en cours, normal, `check404` ✅ (308 → 200) |

### 2.3 Requêtes à suivre (28 j) — brief §5B, grappe locale

| Requête | Imprs | Pos. | Page | Rappel pré-rebuild (brief) |
|---|---|---|---|---|
| transporteur gennevilliers | 55 | 9,1 | `/` | pos. 4 |
| transport gennevilliers | 20 | 11,1 | `/` | pos. 9 |
| gennevilliers transport | 3 | 12,3 | `/` | pos. 6 |
| transport routier gennevilliers | 4 | 12,8 | `/` | — |
| ansquer (marque) | 7 | 4,7 | `/` | — |
| crossdocking île de france | 30 | 3,2 | `/stockage/entrepot-gennevilliers/` | — |
| course urgente | 78 | 23,0 | `/transport/course-urgente/` | — |
| commissionnaire de transport international | 16 | 40,4 | `/transport/transport-international/` | — |
| dépotage conteneur gennevilliers | 19 (toutes pages) | 1,7 sur le pilier ; 8 autres pages testées entre 6 et 100 | pilier A | pos. 19 (`/manutention/`) |

Lecture : la grappe locale de la homepage a **reculé par rapport au pré-rebuild** (4 → 9 sur « transporteur gennevilliers »), ce qui est le comportement attendu d'une migration en test. « ansquer » à pos. 4,7 en marque est faible : la fiche GBP et les citations (lot 1) sont le levier, pas le site. Google teste 9 pages sur « dépotage conteneur gennevilliers » et sert le pilier en 1,7 : pas une cannibalisation à traiter, une SERP qui se stabilise.

### 2.4 Blog (3 articles)

| Article | Publié | Âge | Inspection GSC | Données 28 j |
|---|---|---|---|---|
| `/blog/tournee-livraison-reguliere/` | 24/08 | J+14 | ✅ **Submitted and indexed** (crawl 26/08) | 21 imprs, pos. 11,0, 0 clic — requêtes : « tournées régulières » pos. 6,7 (3), « livraison ponctuelle » pos. 10 (4), « transport regulier » pos. 15, « organiser sa tournée livraison » pos. 38 |
| `/blog/empotage-depotage-conteneur/` | 28/08 | J+10 | ⚠️ **URL is unknown to Google**, jamais crawlée | aucune |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 02/09 | J+5 | ⚠️ **URL is unknown to Google**, jamais crawlée | aucune |

Note : le filtre `--filter-page /blog/` renvoie 0 ligne sur les mêmes fenêtres alors que la dimension page montre 21 impressions pour l'article tournée. Comportement du filtre à vérifier dans le script (contains vs equals) — sans incidence sur la lecture ci-dessus.

### 2.5 Sitemaps et 404

- `sitemap.xml` : soumis 03/09, relu par Google le **06/09**, 0 erreur, 24 URLs (« 0 indexés » = compteur GSC en retard, l'article tournée est bien indexé).
- ⚠️ **Entrée parasite** : `https://transportsansquer.fr/blog/empotage-depotage-conteneur/` figure dans la liste des **sitemaps** (soumise le 03/09 19:40, 1 erreur — ce n'est pas un sitemap). Effet nul sur l'indexation, mais bruit permanent dans le rapport : à supprimer dans GSC → Sitemaps → menu de la ligne → Supprimer (opérateur, to-do #8 élargi).
- `check404` : ✅ 24 URLs du sitemap en 200, 19 anciennes URLs en 308 vers des 200.

## 3. Règle des 90 jours

| Contenu | Publié | J90 | Statut |
|---|---|---|---|
| Site entier (16 pages) | ~fin 07/2026 | ~fin 10/2026 | ⛔ observation |
| Article tournée | 24/08 | 22/11 | ⛔ observation (J30 le 23/09) |
| Article empotage | 28/08 | 26/11 | ⛔ observation (non indexé — pas une anomalie technique à J+10) |
| Article comparatif | 02/09 | 01/12 | ⛔ observation |

**Aucune action corrective.** Les exceptions prévues (câblage du lien palettes dans l'article empotage à la sortie de l'article palettes ; câblage du renvoi € dans le comparatif à la sortie du sujet 10) restent des corrections de maillage, pas des refreshes.

## 4. Diagnostic (contenus ≥ 90 j)

Aucun contenu éligible. **Gisement 4-20 noté pour le refresh de 11/2026** (cluster D) : « transporteur gennevilliers » 9,1 · « transport gennevilliers » 11,1 · « crossdocking île de france » 3,2 → déjà top 3, à protéger · « course urgente » 23 (cluster E, refresh-élargissement 11/2026 confirmé pertinent : 78 impressions sans rien avoir fait).

## 5. Re-check bimestriel

Non dû (aucun contenu > 60 j ; premier re-check possible fin octobre).

## 6. Équilibre du trafic

- **Concentration** : homepage = 15 clics / 20 (75 %). Signal de fragilité, mais structurel sur un site de 40 jours avec 3 articles — pas d'action, à re-mesurer au rapport de septembre.
- **Dépendance SEO** : sans analytics (décision GSC seule), la part du SEO dans le trafic total n'est pas mesurable. Conversions = emails du formulaire devis (Resend), non relevés dans cette revue.

## 7. Plan d'action S37 (07-11/09) — max 5

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Publier la réponse à l'avis gilles 4/5** (GO « Publie » acquis le 04/09, issue #3) puis passer `avis.md` à 📤 | `/review-response` (phase publication, session interactive : tentative Chrome budget 2 min, sinon texte à coller) | P1 | seul gate déjà rendu et non exécuté |
| ② | **Rétablir Haloscan** (403 sur positions / overview / crédit → clé ou crédit du compte) | opérateur (compte Haloscan) → to-do #13 | P1 | conditionne ③ : le serp-analyst du `/research` n'a pas de positions sans lui |
| ③ | **`/research` palettes** « La table 20'/40'/40'HC et ses limites de poids » (sujet 09/2026 P2, ré-angle validé) — brief persisté et commité dans `research/` AVANT présentation au gate | `/research` | P1 | first-party : stock existant + sources publiques ISO/CTU (invariant 14 respecté) ; si Haloscan reste HS, la recherche se fait en mode dégradé annoncé (« non vérifiable ») |
| ④ | **Indexation articles 2-3** (2 clics « Demander une indexation ») + **retrait de l'entrée sitemap parasite** | opérateur → to-do #8 | P2 | sans cela, le sitemap fera le travail, plus lentement ; J+10 sans crawl reste dans la normale |
| ⑤ | **Citations lot 1** (validation Solocal en courrier indésirable — double délai) + **checklist GBP #2b** (catégorie, horaires 2 plages, description §2 bis) | opérateur → to-do #10, #2b | P2 | c'est le levier de la requête de marque « ansquer » (pos. 4,7) et du pack local |

⛔ Aucune action « demander au client » (invariant 14).

## 8. Plan éditorial (état vs prévu)

- **Août** : 2/2 publiés. **Septembre** : 1/2 (comparatif ✅ 02/09) ; palettes `prévu` → `/research` cette semaine, production fin septembre. Pas de dérive structurelle (retard < 1 mois, cadence 2/mois tenue).
- Rappel : le sujet 10/2026 « coût tournée » reste à requalifier (refus tarifaire définitif) — décision à la révision de 11/2026, rien à faire cette semaine.

## 9. Circuit avis (étape 12)

- Relevé de la fiche publique : **⚠️ contrôle empêché** (WebFetch et navigateur hors liste blanche de la session planifiée). Dernier relevé valide : 04/09, 1 avis (gilles, 4/5), note 4,0.
- Aucun nouvel avis connu ; aucune issue à créer.
- GO du 04/09 sur l'issue #3 : **à exécuter** (plan ①).

## 10. Citations (étape 13 — 1er lundi du mois)

- Contrôle léger dû aujourd'hui. Aucune fiche au statut `soumis` / `vérifié` dans `citations.md` (lot 1 non encore soumis : validation Solocal en attente) → rien à re-fetcher.
- Re-fetch Mappy (écart 49 / horaires / tél) : **⚠️ empêché** (fetch hors liste blanche) — état inchangé par hypothèse, à re-contrôler au prochain contrôle mensuel (05/10) ou dès la correction Solocal.

## 11. Mises à jour effectuées par cette revue

`tracking.md` (relevé global, colonne « dernier relevé » des 3 articles, historique S37) · `content-plan.md` (journal) · `todo-operateur.md` (#8 élargi, #12 → GO acquis / publication en attente, #13 Haloscan ajouté) · `avis.md` (statut avis #1) · `reports/README.md` (index).
