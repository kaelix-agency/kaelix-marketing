# Revue hebdo — Transports Ansquer — 2026-09-14 (S38)

| | |
|---|---|
| **Client / date** | `transports-ansquer` — lundi 2026-09-14, 2e revue produite par le Planificateur (tâche « KAELIX - Weekly », log `logs/2026-09-14-weekly.log`) |
| **Période des données** | GSC 7 j : 06/09 → 12/09 ; GSC 28 j : 16/08 → 12/09 (dernier jour complet côté Google : 12/09) |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page / query / page+query, inspect ×3, sitemaps, check404), sitemap live du site (curl), issues GitHub (API publique), repo marketing |
| **Sources empêchées** | ⚠️ Haloscan : **MCP en timeout de connexion (30 s)** — la clé était bien chargée par le wrapper cette fois (log 07:47:09), donc cause ≠ S37 (démarrage `npx @occirank/haloscan-server` trop lent en headless) ; appel API direct impossible (bac à sable : lecture de variable d'env bloquée) → aucune position Haloscan ; ⚠️ fiche Google publique : WebFetch refusé (hors liste blanche), Playwright hors liste blanche → avis non relevés ; ⚠️ GBP insights / BrightLocal : non fournis ; ⚠️ crawl technique : non outillé (§1.24) |
| **Statut** | interne — 🕓 brouillon (à lire, valider, fermer l'issue) |

## L'essentiel en 5 lignes
- **GSC 28 j : 27 clics / 1 439 impressions** (S37 : 20 / 1 142) ; **7 j : 12 clics / 411** (S37 : 8 / 462). La homepage passe à **pos. 7,3 sur 7 j** (13,3 la semaine passée) et signe 11 des 12 clics. Tout reste en fenêtre 90 j → observation, aucun refresh.
- **Article empotage toujours « inconnu de Google » à J+17** alors qu'il est dans le sitemap lu le 10/09 ; le comparatif est passé à « Découverte, non indexée » (J+12, progrès). L'entrée sitemap parasite (cette même URL déclarée comme sitemap) est toujours là, relue le 11/09 avec 1 erreur → to-do #8 monte en P1.
- **Haloscan de nouveau absent en headless**, pour une autre raison qu'en S37 : timeout de connexion du MCP, pas la clé. Chantier wrapper à faire en session interactive (pré-chauffage npx ou `MCP_TIMEOUT`).
- **Avis** : GO « Publie » du 04/09 (issue #3) **toujours non exécuté à J+10** ; 2 tentatives Chrome échouées le 13/09, texte remis à l'opérateur pour collage. Fiche injoignable aujourd'hui (dernier relevé valide : 04/09, 1 avis).
- **Pilotage** : l'issue #4 « Weekly S » (revue S37) est **toujours ouverte** depuis le 07/09 (revue non validée) et son titre n'a pas de numéro de semaine (bug `ISOWeek` absent de PowerShell 5.1). Le brief palettes (13/09) attend son GO : sans GO d'ici le 21/09, septembre finit à 1/2.

---

## 1. Constats de la semaine (07/09 → 13/09)

- **Production** : aucune publication (normal : le 2e sujet de septembre est en phase 0). `/research` palettes fait et commité le 13/09 (`research/2026-09-13-combien-de-palettes-dans-un-conteneur.md`, 3 serp-analyst GO, décision de frontière « poids » à trancher au GO).
- **Infra** : Haloscan rétabli en headless côté clé (commit 48dde5e, test 8/8 PASS le 13/09) — mais voir la nouvelle panne ci-dessous. Circuit avis : 2 tentatives de publication Chrome échouées (13/09), piège permanent documenté (répondre aux avis = opérateur).
- **Gates rendus / non exécutés** : GO avis gilles (04/09) non exécuté ; revue S37 non validée (issue #4 ouverte).

## 2. Search Console (API directe, propriété préfixe `https://transportsansquer.fr/`)

### 2.1 Vue d'ensemble

| Fenêtre | Clics | Impressions | CTR | Homepage (clics / imprs / pos.) |
|---|---|---|---|---|
| 7 j (06/09-12/09) | 12 | 411 | 2,9 % | 11 / 130 / **7,3** |
| 28 j (16/08-12/09) | 27 | 1 439 | 1,9 % | 22 / 501 / 11,4 |
| S37 — 7 j (30/08-05/09) | 8 | 462 | 1,7 % | 6 / 145 / 13,3 |
| S37 — 28 j (09/08-05/09) | 20 | 1 142 | 1,8 % | 15 / 475 / 13,6 |

Lecture : la semaine est la meilleure depuis le rebuild (12 clics, homepage en page 1 sur 7 j). C'est un mouvement de test de Google, pas une tendance : à ~J+45 du site, une semaine ne prouve rien. **Pas de conclusion avant J90** (fin octobre).

### 2.2 Pages (28 j)

| Page | Clics | Imprs | Pos. | Lecture |
|---|---|---|---|---|
| `/` | 22 | 501 | 11,4 | porte **81 %** des clics (fragilité structurelle, normale à ce stade) |
| `/transport/` (hub) | 0 | 114 | 38,4 | impressions « transport déchets industriels IdF/Paris » (pos. 53-60) : bruit d'intention, rien à faire |
| `/stockage/entrepot-gennevilliers/` | 0 | 106 | 18,1 | « crossdocking île de france » **pos. 3,5** (24 imprs) + « cross docking île de france » pos. 13 (21) — meilleur signal hors homepage, stable |
| `/transport/course-urgente/` | 0 | 93 | 22,7 | « course urgente » 78 imprs pos. 22,5 — le cluster E existe en impressions, refresh 11/2026 confirmé pertinent |
| `/stockage/externalisation-logistique/` | 0 | 82 | 29,6 | traîne « externalisation … vrac / e-logistique / meuble volumineux » |
| `/stockage/depotage-empotage-conteneurs/` (pilier A) | **1** | 67 | 29,3 | **1er clic du pilier** ; « dépotage conteneur gennevilliers » pos. 1,8 (4 imprs) ; « empotage des conteneurs » pos. 43 (18) — national = rôle du guide blog (non indexé, §2.4) |
| `/stockage/` (hub) | 2 | 58 | 17,6 | |
| `/transport/transport-pl-ile-de-france/` | 0 | 53 | 20,3 | |
| `/contact/` | 0 | 49 | 21,4 | requêtes de marque + « transport gennevilliers » |
| `/transport/hayon-20m3-paris/` | 1 | 39 | 6,9 | |
| `/le-stockage-et-le-transport-durgence/` (ancienne URL, 308) | 1 | 38 | 9,8 | migration d'index encore en cours, `check404` ✅ |
| `/transport/transport-international/` | 0 | 36 | 36,3 | « commissionnaire de transport international » 32 imprs pos. 39,7 |
| `/transport/affretement-europe/` | 0 | 33 | 39,8 | « affretement routier europeen » 24 imprs pos. 43 |
| `/blog/tournee-livraison-reguliere/` | 0 | 21 | 11,0 | voir §2.4 |
| `/transport/tournee-reguliere/` | 0 | 15 | 12,3 | page service du cluster F ⭐ : premières impressions |

### 2.3 Requêtes à suivre (28 j) — brief §5B, grappe locale

| Requête | Imprs | Pos. | Page | S37 (28 j) | Pré-rebuild (brief) |
|---|---|---|---|---|---|
| transporteur gennevilliers | 54 | 10,0 | `/` | 55 / 9,1 | pos. 4 |
| transport gennevilliers | 22 | 10,0 | `/` | 20 / 11,1 | pos. 9 |
| gennevilliers transport | 3 | 12,0 | `/` | 3 / 12,3 | pos. 6 |
| transport routier gennevilliers | 3 | 12,3 | `/` | 4 / 12,8 | — |
| ansquer (marque) | 9 | 4,0 | `/` | 7 / 4,7 | — |
| **transport ansquer** (marque) | 4 | **1,0** | `/` | — | — |
| crossdocking île de france | 24 | 3,5 | `/stockage/entrepot-gennevilliers/` | 30 / 3,2 | — |
| course urgente | 78 | 22,5 | `/transport/course-urgente/` | 78 / 23,0 | — |
| commissionnaire de transport international | 32 | 39,7 | `/transport/transport-international/` | 16 / 40,4 | — |
| dépotage conteneur gennevilliers | 23 (toutes pages) | 1,8 sur le pilier (4 imprs) ; 7 autres pages testées entre 6 et 98 | pilier A | 19 / 1,7 | pos. 19 (`/manutention/`) |

Lecture : grappe locale **stable autour de la pos. 10** (pas de nouveau recul, pas de remontée) ; sur 7 j « transport gennevilliers » pointe à 8,9 et « transporteur gennevilliers » à 12,5 — bruit de test. **3 des 12 clics de la semaine viennent de « transport ansquer » en pos. 1** : la marque commence à être cherchée, ce qui renforce la priorité de la fiche GBP et des citations (lot 1). Google continue à tester 8 pages sur « dépotage conteneur gennevilliers » et sert le pilier en 1,8 : pas une cannibalisation, une SERP qui se stabilise.

### 2.4 Blog (3 articles)

| Article | Publié | Âge | Inspection GSC (14/09) | Données 28 j | Évolution vs S37 |
|---|---|---|---|---|---|
| `/blog/tournee-livraison-reguliere/` | 24/08 | J+21 | ✅ Submitted and indexed (crawl 26/08) | 21 imprs, pos. 11,0, 0 clic — « tournées régulières » 6,7 (3), « livraison ponctuelle » 10 (4), « transport regulier » 15 | **0 impression sur 7 j** (les 21 datent d'avant le 06/09) : creux de test, observation |
| `/blog/empotage-depotage-conteneur/` | 28/08 | J+17 | ⚠️ **URL is unknown to Google**, jamais crawlée | aucune | inchangé — anormal à J+17 pour une URL présente dans un sitemap lu le 10/09 |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 02/09 | J+12 | 🟡 **Discovered - currently not indexed** | aucune | progrès (inconnue → découverte) : le sitemap fait son travail |

**Hypothèse sur l'article empotage** : c'est précisément l'URL soumise **comme sitemap** le 03/09 (entrée parasite, relue par Google le 11/09 avec 1 erreur). Google la traite comme un fichier sitemap en échec, ce qui peut expliquer qu'elle ne soit pas enregistrée comme page à découvrir alors que le comparatif, lui, l'a été. Le retrait de l'entrée parasite n'est donc plus cosmétique : **to-do #8 monte en P1** (retrait + 2 clics « Demander une indexation »).

Note : `--filter-page blog` fonctionne bien en dimension `page,query` (6 lignes) ; c'est le filtre combiné à la dimension `page` seule qui renvoyait 0 ligne en S37. Sans incidence.

### 2.5 Sitemaps et 404

- `sitemap.xml` : lu par Google le **10/09**, 0 erreur, **24 URLs** — vérifiées ce jour sur le sitemap live (3 articles présents, y compris l'article empotage). Compteur « 0 indexés » toujours en retard (l'article tournée est indexé).
- ⚠️ **Entrée parasite toujours présente** : `https://transportsansquer.fr/blog/empotage-depotage-conteneur/` listée comme sitemap (soumise 03/09, relue 11/09, 1 erreur) → to-do #8.
- `check404` : ✅ 24 URLs du sitemap en 200, 19 anciennes URLs en 308 vers des 200.

## 3. Règle des 90 jours

| Contenu | Publié | J90 | Statut |
|---|---|---|---|
| Site entier (16 pages) | ~fin 07/2026 | ~fin 10/2026 | ⛔ observation |
| Article tournée | 24/08 | 22/11 | ⛔ observation (J30 le 23/09 : relevé de checkpoint à la revue du 28/09) |
| Article empotage | 28/08 | 26/11 | ⛔ observation — non-indexation à J+17 = **problème technique probable** (entrée sitemap parasite), traité comme correction technique GSC, pas comme refresh |
| Article comparatif | 02/09 | 01/12 | ⛔ observation |

**Aucune action corrective sur les contenus.** Les exceptions prévues (câblage du lien palettes dans l'article empotage à la sortie de l'article palettes ; câblage du renvoi € dans le comparatif à la sortie du sujet 10) restent des corrections de maillage.

## 4. Diagnostic (contenus ≥ 90 j)

Aucun contenu éligible. **Gisement 4-20 noté pour les refreshes de 11/2026** (inchangé) : « transporteur gennevilliers » 10,0 · « transport gennevilliers » 10,0 (cluster D) · « crossdocking île de france » 3,5 → top 3 à protéger · « course urgente » 22,5 (cluster E) · nouveau : « commissionnaire de transport international » 32 imprs pos. 40 (cluster B, sujet 10/2026 « commissionnaire vs transporteur » confirmé utile).

## 5. Re-check bimestriel

Non dû (aucun contenu > 60 j ; premier re-check possible fin octobre).

## 6. Équilibre du trafic

- **Concentration** : homepage = 22 clics / 27 (**81 %**, en hausse vs 75 %). Signal de fragilité, structurel sur un site de ~45 jours dont 2 articles sur 3 ne sont pas indexés — pas d'action, à re-mesurer au rapport de septembre.
- **Dépendance SEO** : non mesurable (décision GSC seule, pas d'analytics). Conversions = emails du formulaire devis (Resend), non relevés dans cette revue.

## 7. Plan d'action S38 (14-18/09) — max 5

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Publier la réponse à l'avis gilles 4/5** (GO du 04/09, issue #3) : coller le texte de `avis.md` dans la fiche Google → Avis → Répondre, puis dire « avis gilles publié » | opérateur → to-do #12 | P1 | seul gate rendu et non exécuté ; 10 jours de retard sur le GO |
| ② | **GO sur le brief palettes** (frontière « poids » §6 à trancher) puis **`/write`** en session interactive **avant le 25/09** pour tenir septembre à 2/2 | gate + `/write` | P1 | brief `research/2026-09-13-…` ; aucun first-party à attendre (invariant 14). ⚠️ Sans GO d'ici le **21/09**, le sujet passe `reporté` 10/2026 (motif : capacité, pas first-party) |
| ③ | **Retirer l'entrée sitemap parasite** (GSC → Sitemaps → ligne `blog/empotage-depotage-conteneur/` → ⋮ → Supprimer) **puis 2 clics « Demander une indexation »** (art. empotage et comparatif) | opérateur → to-do #8 | **P1** (était P2) | art. empotage inconnu de Google à J+17 ; hypothèse : l'entrée parasite bloque sa découverte |
| ④ | **Planificateur** : (a) valider et fermer l'issue #4 (revue S37) + celle de cette revue ; (b) corriger le titre d'issue (`[System.Globalization.ISOWeek]` n'existe pas en PowerShell 5.1 → `$IsoWeek = Get-Date -UFormat %V`) ; (c) Haloscan en headless : timeout de connexion MCP à 30 s → pré-chauffer `npx -y @occirank/haloscan-server` dans le wrapper avant `claude -p` (ou `MCP_TIMEOUT` plus long) et le vérifier par `-Mission test` | opérateur (a) ; session interactive + GO (b, c) → to-do #14, #15 | P2 | la S37 avait un 403 (clé), la S38 un timeout (démarrage) : deux pannes distinctes, la 2e reste à corriger |
| ⑤ | **Citations lot 1 + checklist GBP #2b** : valider Solocal (mail du 04/09, purge indésirables ~04/10, lien probablement expiré → redemander la validation depuis le compte), créer PJ + corriger Mappy, 118000 ; finir catégorie/description/zone GBP | opérateur → to-do #10, #2b | P2 | levier direct de la marque (« transport ansquer » pos. 1, « ansquer » pos. 4) et du pack local |

⛔ Aucune action « demander au client » (invariant 14).

## 8. Plan éditorial (état vs prévu)

- **Août** : 2/2 publiés. **Septembre** : 1/2 (comparatif ✅ 02/09) ; palettes **researché le 13/09, en attente de GO** → production possible dès le GO, fenêtre de tenue du mois : `/write` avant le 25/09. Pas de dérive structurelle (retard < 1 mois, cadence 2/mois tenable).
- Rappel : sujet 10/2026 « coût tournée » à requalifier (refus tarifaire définitif) — décision à la révision de 11/2026 ; sujet candidat « Poids d'un conteneur » (13/09) à dater à la même révision.

## 9. Circuit avis (étape 12)

- Relevé de la fiche publique : **⚠️ contrôle empêché** (WebFetch refusé — hors liste blanche du Planificateur ; Playwright hors liste blanche). Dernier relevé valide : 04/09, 1 avis (gilles, 4/5), note 4,0.
- Aucun nouvel avis connu ; aucune issue à créer.
- GO du 04/09 sur l'issue #3 : **à exécuter** (plan ①) — publication manuelle, piège documenté le 13/09.

## 10. Citations (étape 13 — 1er lundi du mois)

Non dû (contrôle mensuel fait le 07/09 ; prochain le 05/10). Rappel du délai Solocal (plan ⑤).

## 11. Mises à jour effectuées par cette revue

`tracking.md` (relevé global, colonne « dernier relevé » des 3 articles, historique S38) · `content-plan.md` (journal) · `todo-operateur.md` (#8 → P1 avec hypothèse sitemap, #12 échéance, #10 délai Solocal, #14 issues weekly, #15 Planificateur) · `avis.md` (relevé 14/09 empêché) · `reports/README.md` (index).
