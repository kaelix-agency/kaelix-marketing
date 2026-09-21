# Revue hebdo — Transports Ansquer — 2026-09-21 (S39)

| | |
|---|---|
| **Client / date** | `transports-ansquer` — lundi 2026-09-21, 3e revue produite par le Planificateur (tâche « KAELIX - Weekly », log `logs/2026-09-21-weekly.log`) |
| **Période des données** | GSC 7 j : 13/09 → 19/09 ; GSC 28 j : 23/08 → 19/09 (dernier jour complet côté Google : 19/09) |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page / query / page+query filtré blog, inspect ×5, sitemaps, check404), **Haloscan MCP (positions du domaine — 1re fois disponible en headless : le correctif du 14/09 fonctionne)**, curl (statuts HTTP), issues GitHub (API publique), repo marketing |
| **Sources empêchées** | ⚠️ fiche Google publique : WebFetch et Playwright **hors liste blanche** de la session planifiée → avis non relevés (dernier relevé valide : 04/09) ; ⚠️ GBP insights / BrightLocal : non fournis ; ⚠️ crawl technique : non outillé (§1.24) |
| **Statut** | interne — 🕓 brouillon (à lire, valider, fermer l'issue) |

## L'essentiel en 5 lignes
- **Article palettes indexé en 3 jours** (crawl 17/09, « Submitted and indexed ») et déjà **19 impressions en pos. 7,6 sur 7 j** — le meilleur démarrage des 4 articles. À l'inverse, le guide empotage (J+24) et le comparatif (J+19) restent « découverts, jamais crawlés » : ce n'est donc pas un problème de site, c'est un problème de ces 2 URL → **to-do #8 reste P1** (retrait de l'entrée sitemap parasite, relue par Google le 18/09 avec encore 1 erreur, puis 2 clics d'indexation).
- **GSC 28 j : 34 clics / 1 539 impressions** (S38 : 27 / 1 439) ; 7 j : 9 clics / 373 (S38 : 12 / 411). Homepage pos. 8,4 sur 7 j (7,3 en S38) — oscillation de test, rien à conclure avant fin octobre. Marque « transport ansquer » : pos. 1, 6 clics sur 28 j. Tout reste en fenêtre 90 j → observation, aucun refresh.
- **Haloscan enfin lu en headless** : 27 mots-clés, 10 pages ; nouveau signal `/transport/tournee-reguliere/` pos. 13 sur « tournée régulière transport » (scrape 17/09) ; grappe locale non re-scrapée depuis le rebuild (données > 2 mois) — la Search Console reste la seule lecture fraîche de la grappe.
- **Septembre 2/2 tenu** (palettes publié le 14/09). Prochain sujet : `/research` « Commissionnaire vs transporteur » (10/2026, cluster B) — GSC confirme la demande (« commissionnaire de transport international » 47 imprs, pos. 41,5).
- **Avis** : GO du 04/09 (issue #3) **toujours non exécuté à J+17** — publication manuelle par l'opérateur, texte dans `avis.md`. Pilotage : issues #4 et #5 fermées le 14/09 → revues S37 et S38 **validées** (to-do #14 ✅).

---

## 1. Constats de la semaine (14/09 → 20/09)

- **Production** : article palettes publié le 14/09 (PR #7 mergée `0e4784c`) + renvoi câblé dans le guide empotage (PR #8, exception 90 j consommée). Septembre = 2/2. Aucune production depuis (normal : phase 0 du sujet d'octobre à lancer).
- **Infra** : Planificateur corrigé le 14/09 (semaine ISO, `MCP_TIMEOUT` 120 s, version Haloscan épinglée) — **preuve réelle ce matin** : titre d'issue avec numéro de semaine attendu, Haloscan répondu en 3 s au premier appel. Chantier clos.
- **Gates** : revues S37 et S38 validées (issues #4 et #5 fermées le 14/09 à 08:23). GO avis gilles non exécuté.

## 2. Search Console (API directe, propriété préfixe `https://transportsansquer.fr/`)

### 2.1 Vue d'ensemble

| Fenêtre | Clics | Impressions | CTR | Homepage (clics / imprs / pos.) |
|---|---|---|---|---|
| 7 j (13/09-19/09) | 9 | 373 | 2,4 % | 7 / 114 / **8,4** |
| 28 j (23/08-19/09) | 34 | 1 539 | 2,2 % | 27 / 527 / 11,4 |
| S38 — 7 j (06/09-12/09) | 12 | 411 | 2,9 % | 11 / 130 / 7,3 |
| S38 — 28 j (16/08-12/09) | 27 | 1 439 | 1,9 % | 22 / 501 / 11,4 |

Lecture : la fenêtre 28 j progresse (+7 clics, +100 impressions) ; la semaine seule redescend légèrement après la meilleure semaine du rebuild. La homepage oscille entre 7 et 9 sur 7 j : c'est la phase de test attendue à ~J+50 du site. **Pas de conclusion avant J90** (fin octobre).

### 2.2 Pages (28 j)

| Page | Clics | Imprs | Pos. | Lecture |
|---|---|---|---|---|
| `/` | 27 | 527 | 11,4 | porte **79 %** des clics (81 % en S38) |
| `/transport/transport-pl-ile-de-france/` | 2 | 78 | 20,4 | 2 clics cette semaine (pos. 16,9 sur 7 j) — « transport pl » pos. 3 sur 7 j |
| `/stockage/` (hub) | 2 | 67 | 15,6 | |
| `/transport/hayon-20m3-paris/` | 1 | 53 | 7,8 | |
| `/stockage/depotage-empotage-conteneurs/` (pilier A) | 1 | 92 | 27,7 | le clic de S38 ; « dépotage conteneur gennevilliers » désormais testé en moyenne pos. 55,9 toutes pages (25 imprs) — Google a élargi l'échantillon, le pilier n'est plus servi seul en 1,8 : **volatilité de test, pas de cannibalisation** (une seule page cible) |
| `/le-stockage-et-le-transport-durgence/` (ancienne URL, 308) | 1 | 21 | 11,2 | migration d'index en cours |
| `/transport/` (hub) | 0 | 124 | 40,0 | bruit « transport déchets industriels IdF/Paris » (71 imprs, pos. 55-58) |
| `/stockage/entrepot-gennevilliers/` | 0 | 103 | 18,6 | « crossdocking île de france » **pos. 4,1** (19 imprs) + « cross docking île de france » 12,7 (27) — top 3 à protéger |
| `/stockage/externalisation-logistique/` | 0 | 100 | 28,1 | traîne « externalisation … vrac / e-logistique / meuble volumineux » |
| `/transport/course-urgente/` | 0 | 93 | 22,9 | « course urgente » 72 imprs pos. 23,3 — cluster E confirmé pour le refresh 11/2026 |
| `/contact/` | 0 | 74 | 18,0 | marque + « transport gennevilliers » |
| `/transport/affretement-europe/` | 0 | 41 | 39,6 | « affretement routier europeen » 31 imprs pos. 43 |
| `/blog/tournee-livraison-reguliere/` | 0 | 32 | 10,1 | voir §2.4 — **11 imprs sur 7 j, pos. 8,2** (le creux de S38 est terminé) |
| `/blog/combien-de-palettes-dans-un-conteneur/` | 0 | 19 | 7,6 | voir §2.4 — toutes les impressions sont de cette semaine |
| `/manutention/` (ancienne URL, 308) | 0 | 27 | 15,0 | migration d'index |
| `/blog/` (index) | 0 | 10 | 20,4 | 1re apparition de l'index du blog |
| `/98ee9-contact/` (ancienne URL WordPress) | 0 | 6 | 7,3 | encore indexée (dernier crawl 31/07) ; **308 → `/contact/` vérifié** ce jour, rien à faire |

### 2.3 Requêtes à suivre (28 j) — brief §5B, grappe locale

| Requête | Imprs | Pos. | Page | S38 (28 j) | Pré-rebuild (brief) |
|---|---|---|---|---|---|
| transporteur gennevilliers | 48 | 10,9 | `/` | 54 / 10,0 | pos. 4 |
| transport gennevilliers | 21 | 10,3 | `/` | 22 / 10,0 | pos. 9 |
| gennevilliers transport | 3 | 12,0 | `/` | 3 / 12,0 | pos. 6 |
| transport routier gennevilliers | 5 | 18,8 | `/` | 3 / 12,3 | — |
| ansquer (marque) | 8 | 3,8 | `/` | 9 / 4,0 | — |
| **transport ansquer** (marque) | 13 | **1,0** — 6 clics | `/` | 4 / 1,0 | — |
| crossdocking île de france | 19 | 4,1 | `/stockage/entrepot-gennevilliers/` | 24 / 3,5 | — |
| course urgente | 72 | 23,3 | `/transport/course-urgente/` | 78 / 22,5 | — |
| commissionnaire de transport international | 47 | 41,5 | `/transport/transport-international/` | 32 / 39,7 | — |
| dépotage conteneur gennevilliers | 25 | 55,9 (toutes pages) | pilier A + pages testées | 23 / 1,8 sur le pilier | pos. 19 (`/manutention/`) |
| empotage des conteneurs | 24 | 42,8 | pilier A | 18 / 43 | — |

Lecture : grappe locale **toujours autour de la pos. 10-11**, sans recul ni remontée nette (« transporteur gennevilliers » 11,9 sur 7 j). **La marque monte** : « transport ansquer » passe de 4 à 13 impressions et de 3 à 6 clics en pos. 1 — la fiche GBP et les citations (lot 1) restent le levier le plus direct. « commissionnaire de transport international » continue de grossir (47 imprs) sans page dédiée : le sujet 10/2026 « commissionnaire vs transporteur » est confirmé.

### 2.4 Blog (4 articles)

| Article | Publié | Âge | Inspection GSC (21/09) | Données 28 j | Évolution vs S38 |
|---|---|---|---|---|---|
| `/blog/tournee-livraison-reguliere/` | 24/08 | J+28 | ✅ Submitted and indexed (crawl 26/08) | 32 imprs, pos. 10,1, 0 clic — « tournées régulières » 6,7 (3), « livraison ponctuelle » 10 (4), « transport regulier » 15 | **11 imprs sur 7 j, pos. 8,2** : le creux de S38 (0 impr.) est refermé ; J30 le 23/09 → checkpoint à la revue du 28/09 |
| `/blog/empotage-depotage-conteneur/` | 28/08 | J+24 | 🟡 **Discovered - currently not indexed**, jamais crawlée | aucune | **progrès** : « inconnue » → « découverte » (le renvoi câblé le 14/09 depuis l'article palettes et/ou le sitemap ont fait leur effet) ; mais toujours pas crawlée à J+24 |
| `/blog/transport-dedie-messagerie-ou-coursier/` | 02/09 | J+19 | 🟡 **Discovered - currently not indexed**, jamais crawlée | aucune | inchangé |
| `/blog/combien-de-palettes-dans-un-conteneur/` | 14/09 | J+7 | ✅ **Submitted and indexed** (crawl 17/09 21:58) | **19 imprs, pos. 7,6**, 0 clic — « combien de palettes 80x120 dans un conteneur 40 pieds » pos. 11 (1 impr. ; 18 autres non attribuées à une requête) | nouveau — indexé en **3 jours** sans clic opérateur (Indexing API 403 le 14/09) |

**Lecture** : l'article le plus récent a été crawlé et indexé en 3 jours, alors que deux articles plus anciens restent « découverts, jamais crawlés ». Le crawl du site fonctionne ; ce sont ces 2 URL précises que Google laisse de côté. L'entrée sitemap parasite (le guide empotage déclaré comme sitemap) a été **relue le 18/09 avec 1 erreur** : elle est toujours là. **To-do #8 reste P1**, réduit à 2 URL (le palettes en sort).

Note outil : `--filter-page /blog/` (avec les slashes) renvoie 0 ligne ; `--filter-page blog` fonctionne. À corriger dans le script ou à documenter dans son en-tête (chantier mineur, hors client).

### 2.5 Sitemaps et 404

- `sitemap.xml` : lu par Google le **17/09**, 0 erreur, **25 URLs** (article palettes ajouté) ; compteur « 0 indexés » toujours en retard.
- ⚠️ **Entrée parasite toujours présente** : `https://transportsansquer.fr/blog/empotage-depotage-conteneur/` listée comme sitemap (soumise 03/09, relue **18/09**, 1 erreur) → to-do #8.
- `check404` : ✅ 25 URLs du sitemap en 200, 19 anciennes URLs en 308 vers des 200. Vérification manuelle : `/98ee9-contact/` → 308 `/contact/` ; `/stockage/preparation-commandes` (sans slash, pos. 2 sur 1 impr.) → 308 vers la version avec slash. Aucune anomalie.

## 3. Haloscan (positions du domaine, 1re lecture headless)

| Mot-clé | Pos. | Page | Scrape | Volume | Lecture |
|---|---|---|---|---|---|
| tournée régulière transport | **13** | `/transport/tournee-reguliere/` | 17/09 (nouveau) | NA | 1er scrape post-rebuild sur le cluster F ⭐ ; SERP avec AI Overview |
| entreprise de transport gennevilliers | 10 | `/` | 07/09 | 40 | grappe locale, cohérent GSC |
| société de transport gennevilliers | 12 | `/` | 05/09 | NA | idem |
| prestataire stockage gennevilliers | 14 | `/stockage/` | 05/09 | NA | variante « prestation » repérée aux écartés du plan — à retester en 11/2026 |
| stockage gennevilliers | 24 | `/stockage/` | 10/09 | NA | |
| crossdocking | 32 | `/stockage/entrepot-gennevilliers/` | 03/09 | 100 | le local (« île de france ») est en pos. 4 GSC ; le générique reste loin |
| dépotage conteneur | 39 | pilier A | 29/08 | 90 | national = rôle du guide blog (non indexé) |
| commissionnaire de transport ile de france | 55 | `/transport/` | 04/09 | 40 | sans page dédiée — sujet 10/2026 |
| transporteur / transport / gennevilliers transport | 8 / 9 / 6 | `/` | **> 2 mois** (pré-rebuild) | 140 / 170 / 170 | non re-scrapés : la GSC (pos. ~10-11) fait foi |

Total : 27 mots-clés connus, 10 pages, aucun article de blog encore scrapé par Haloscan. Aucune cannibalisation (une URL par mot-clé sur les scrapes récents ; les doublons « schenker gennevilliers » sur 3 pages datent du WordPress).

## 4. Règle des 90 jours

| Contenu | Publié | J90 | Statut |
|---|---|---|---|
| Site entier (16 pages) | ~fin 07/2026 | ~fin 10/2026 | ⛔ observation |
| Article tournée | 24/08 | 22/11 | ⛔ observation — **J30 le 23/09** (checkpoint relevé à la revue du 28/09) |
| Article empotage | 28/08 | 26/11 | ⛔ observation — non-indexation à J+24 = correction technique GSC (to-do #8), pas un refresh |
| Article comparatif | 02/09 | 01/12 | ⛔ observation — même traitement (to-do #8) |
| Article palettes | 14/09 | 13/12 | ⛔ observation — J30 le 14/10 |

**Aucune action corrective sur les contenus.** Exceptions prévues inchangées (renvoi € du comparatif à la sortie du sujet 10 ; lien « Poids d'un conteneur » dans l'article palettes à sa publication).

## 5. Diagnostic (contenus ≥ 90 j)

Aucun contenu éligible. **Gisement 4-20 pour les refreshes de 11/2026** (mis à jour) : « transporteur gennevilliers » 10,9 · « transport gennevilliers » 10,3 (cluster D) · « crossdocking île de france » 4,1 → top 3 à protéger · « course urgente » 23,3 (cluster E) · « transport pl » pos. 3 sur 7 j / page PL pos. 16,9 (nouveau, 2 clics) · « commissionnaire de transport international » 47 imprs pos. 41,5 (cluster B, sujet 10/2026).

## 6. Re-check bimestriel

Non dû (aucun contenu > 60 j ; premier re-check possible fin octobre — typologie `guide` : article tournée).

## 7. Équilibre du trafic

- **Concentration** : homepage = 27 clics / 34 (**79 %**, vs 81 %). Légère diversification (PL IdF, stockage, hayon, pilier A = 6 clics). Fragilité structurelle normale à ce stade ; à re-mesurer au rapport de septembre.
- **Dépendance SEO** : non mesurable (GSC seule, pas d'analytics). Conversions = emails du formulaire devis (Resend), non relevés ici.

## 8. Plan d'action S39 (21-25/09) — max 5

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Publier la réponse à l'avis gilles 4/5** (GO du 04/09, issue #3) : coller le texte de `avis.md` dans la fiche Google → Avis → Répondre, puis dire « avis gilles publié » | opérateur → to-do #12 | **P1** | seul gate rendu et non exécuté ; **J+17** |
| ② | **Retirer l'entrée sitemap parasite** (GSC → Sitemaps → ligne `blog/empotage-depotage-conteneur/` → ⋮ → Supprimer) **puis 2 clics « Demander une indexation »** (guide empotage, comparatif) — le palettes n'en a plus besoin | opérateur → to-do #8 | **P1** | 2 articles « découverts, jamais crawlés » à J+24 / J+19 alors que le palettes a été indexé en 3 j |
| ③ | **`/research` « Commissionnaire de transport vs transporteur : qui mandater ? »** (10/2026 n°1, cluster B, P2) en session interactive — sur GO opérateur ; production 1re quinzaine d'octobre | gate + `/research` → to-do #18 | P2 | aucun first-party à attendre (registre : statut sans numéro, point fermé) ; GSC : 47 imprs « commissionnaire de transport international » |
| ④ | **Rapport de septembre** : généré par le Planificateur le **01/10 08:00** ; avant, en session interactive : relevé de la fiche Google (avis, note — ligne avis permanente) et vérification que l'avis gilles est bien publié | `/report` (auto) + opérateur (relevé fiche, validation) → to-do #19 | P2 | la fiche est hors de portée des sessions planifiées ; sans relevé interactif, la ligne avis du rapport repose sur le 04/09 |
| ⑤ | **Citations lot 1 + checklist GBP #2b** : valider Solocal (mail du 04/09, purge ~04/10), créer PJ + corriger Mappy, 118000 ; finir catégorie/description/zone GBP | opérateur → to-do #10, #2b | P2 | la marque monte (« transport ansquer » 13 imprs, 6 clics, pos. 1) : chaque citation renforce le pack local |

⛔ Aucune action « demander au client » (invariant 14). Le sujet 10/2026 « coût tournée » reste à requalifier via `/research` (ré-angle méthode/facteurs) — décision maintien/remplacement à la révision de 11/2026, pas cette semaine.

## 9. Plan éditorial (état vs prévu)

- **Août** : 2/2. **Septembre** : **2/2** (comparatif 02/09, palettes 14/09). **Octobre** : 2 sujets `prévu` (commissionnaire vs transporteur ; coût tournée à requalifier) — phase 0 du premier à lancer cette semaine ou la suivante pour publier dans la 1re quinzaine. Pas de dérive structurelle (retard 0, cadence 2/mois tenue depuis août).
- Sujet candidat « Poids d'un conteneur » (cluster A) et amendement de frontière : à dater à la révision de 11/2026.

## 10. Circuit avis (étape 12)

- Relevé de la fiche publique : **⚠️ contrôle empêché** (WebFetch et Playwright hors liste blanche de la session planifiée — 3e semaine consécutive). Dernier relevé valide : 04/09, 1 avis (gilles, 4/5), note 4,0.
- Aucun nouvel avis connu ; aucune issue à créer.
- GO du 04/09 sur l'issue #3 : **toujours à exécuter** (plan ①), J+17. Aucune trace de publication dans `avis.md` ni dans l'historique git.
- Recommandation d'outillage : ajouter le relevé de la fiche à une session interactive hebdomadaire courte (ou autoriser `WebFetch` sur `google.com/maps` dans la liste blanche du Planificateur) — sinon le circuit avis ne tourne qu'en manuel.

## 11. Citations (étape 13 — 1er lundi du mois)

Non dû (21/09 = 3e lundi ; dernier contrôle 07/09, prochain le **05/10**). Rappel du délai Solocal (plan ⑤).

## 12. Mises à jour effectuées par cette revue

`tracking.md` (relevé global, colonne « dernier relevé » des 4 articles, historique S39, statuts S37/S38 → validées, pari émergent) · `content-plan.md` (journal) · `todo-operateur.md` (#14 ✅, #8 réduit à 2 URL, #12 J+17, #18 GO `/research` commissionnaire, #19 rapport de septembre, #10/#11/#2/#2b inchangés) · `avis.md` (relevé 21/09 empêché) · `reports/README.md` (index + S37/S38 validées).
