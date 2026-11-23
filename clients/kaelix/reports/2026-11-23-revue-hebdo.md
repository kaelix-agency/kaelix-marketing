# Revue hebdo — KAELIX — 2026-11-23 (S48)

| | |
|---|---|
| **Client / date** | `kaelix` (l'agence, cliente d'elle-même) — lundi 2026-11-23, revue produite en session non interactive |
| **Période des données** | GSC 7 j : 15/11 → 21/11 ; GSC 28 j : 25/10 → 21/11 (dernier jour complet côté Google : 21/11). Série quotidienne 14 j et 60 j lues en complément |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page ×2, query ×1, date ×2, ctr-gap ×1, inspect ×8, sitemaps, check404), Haloscan MCP (`get_domains_positions`), site en ligne (statuts HTTP, meta robots, sitemap, en-têtes de cache), repo web-agency via `gh pr list` / `gh pr view` (#81, #82, #83, #84, #85), repo marketing (git) |
| **Sources empêchées** | ⚠️ **PostHog** : `posthog-fetch.mjs contacts --days 7 / 28`, `pages --days 28` **refusés par les permissions de la session** (non interactive — **3e revue consécutive** : 19/10, 16/11, 23/11 ; to-do #11 toujours ouverte, aucune des quatre commandes n'est dans `.claude/settings.local.json`) → section Contacts non produite ; ⚠️ **Haloscan API directe** (`haloscan-fetch.mjs positions`) refusée pour la même raison — le MCP a répondu (`NO_RESULT`) ; ⚠️ `gh api commits/main/status` **refusé** → l'état du déploiement de production est lu par les statuts Vercel attachés aux PR (#84, #85) et par les en-têtes de cache ; ⚠️ **tableau de bord « Action Kaelix SEO »** (ArtifactData) indisponible dans cette session → les lignes de to-do modifiées **ne sont pas reportées dans la base** (2e semaine) ; ⚠️ GBP / BrightLocal : sans objet (fiche en validation depuis le 20/10, to-do #2) |
| **Statut** | interne — 🕓 brouillon (à lire, valider) |

## L'essentiel en 5 lignes

- **Semaine blanche : rien n'a bougé côté publication.** Les quatre contenus de novembre (#81 du 02/11, #82 du 03/11, #83 du 09/11, #85 du 16/11) sont toujours en PR **ouvertes, 0 review, 0 fusion** ; dernière fusion sur web-agency : #84 le 15/11 (CI). Novembre se termine dimanche à **4/4 produits, 0/4 publiés**. Les quatre aperçus Claude fabriqués le 16/11 (journal de la to-do) rendent la relecture possible d'un clic : le goulot n'est plus l'outillage, c'est le temps de gate.
- **La production kaelix.fr est toujours figée sur le build du 23/10** : l'accueil est servi depuis le cache Vercel depuis **≈ 31 jours** (`Age: 2 702 082 s`), `/audit-gratuit` depuis ≈ 28 jours. Confirmé cette semaine par les statuts Vercel lus sur les PR : « Vercel – web-agency » **FAILURE** sur le dernier commit fusionné dans `main` (#84, 15/11) et sur #85 (16/11), pendant que les quatre projets « -preprod » de Mickael passent. **La to-do #24 (P1, échéance 18/11) n'est pas faite** — fusionner les quatre PR ne mettrait toujours rien en ligne.
- **GSC : 8 impressions / 2 clics sur 28 j, 4 impressions / 1 clic sur 7 j, tout sur l'accueil, requêtes anonymisées (marque).** La baisse 19 → 8 sur 28 j n'est pas une chute : les impressions des 17-27/10 sont sorties de la fenêtre. Fait nouveau : **un filet reprend depuis le 13/11** (1 impression les 13, 15, 17, 19 et 20/11 ; 1 clic le 19/11 en pos. 2) après 16 jours à zéro (28/10 → 12/11). Google a relu le sitemap le **20/11**.
- **J30 de l'accueil et de /audit-gratuit (21/11) : observation, rien à faire.** Accueil : 6 impressions / 2 clics en 28 j, 0 impression sur la famille TPE/PME — attendu sur un domaine sans autorité. `/audit-gratuit` : **0 impression**, et surtout **toujours pas recrawlée depuis le 17/10** : 32 jours après le refresh (#36) et le correctif (#67), Google indexe encore l'ancienne version. Contacts PostHog : non mesurables (contrôle empêché).
- **Indexation : 6 / 23, inchangé pour la 5e semaine.** Un frémissement : `/services/boutique-en-ligne` passe de « inconnue » à **« découverte, non indexée »** ; en sens inverse, `/agence-web-paris` repasse de « découverte » à « inconnue ». `/services/site-vitrine` et `/services/seo-performance` restent **inconnues de Google** après trois demandes. Haloscan : `NO_RESULT`.

---

## 1. Constats de la semaine (16/11 → 22/11)

- **Côté repo marketing** : ligne 14 produite le 16/11 (`/research` + `/write` → PR #85) ; aperçus Claude des quatre PR fabriqués le 16/11 ; **aucun commit kaelix depuis** — ni gate, ni fusion, ni relevé.
- **Côté web-agency** : **aucune fusion depuis #84 (15/11)**. Les quatre PR de contenu : #81 (21 j, checks rouges hérités de la CI cassée), #82 (20 j, idem), #83 (14 j, idem), #85 (7 j : Lint et Migrations **verts**, Playwright rouge, « Vercel – web-agency » rouge). `mergeable: UNKNOWN` sur les quatre (GitHub ne recalcule pas sans activité). #81-#83 demandent un rebase sur `main` pour des checks verts ; #85 est déjà sur la CI réparée.
- **Site en ligne (23/11)** : `/agence-web-val-d-oise` et `/refonte-site-internet` **404** (normal, PR non fusionnées) ; `/blog` 200 en `noindex, nofollow` (normal, #82 non fusionnée) ; sitemap **23 URLs**, `check404` ✅ (sitemap en 200, 19 anciennes URLs WordPress en 308 vers des 200) ; `X-Vercel-Cache: HIT` avec `Age` ≈ 31 j sur l'accueil.
- **Signaux externes** : toujours un seul lien entrant connu (pied de page Ansquer, 03/11, 20 jours) ; fiche Google « Kaelix Digital » en validation depuis le 20/10 (**34 jours**, to-do #2 sans nouvelle).

## 2. Search Console (API directe, propriété préfixe `https://kaelix.fr/`)

### 2.1 Search Analytics

| Fenêtre | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| 7 j (15/11-21/11) | 1 | 4 | 25,0 % | 6,5 (accueil) |
| 28 j (25/10-21/11) | 2 | 8 | 25,0 % | — (voir par page) |
| *Rappel 28 j au 16/11 (18/10-14/11)* | *3* | *19* | *15,8 %* | — |

Par page, 28 j :

| Page | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| `/` | 2 | 6 | 33,3 % | 6,3 |
| `/tarifs` | 0 | 1 | 0 % | 4,0 |
| `/a-propos` | 0 | 1 | 0 % | 10,0 |

- **Par requête : 0 ligne** (requêtes anonymisées sous le seuil Google) → recherche de marque. Aucune impression sur la famille TPE/PME (ligne 1) ni sur « audit site internet gratuit » (ligne 2) à J30 — attendu.
- **Série quotidienne** : zéro du 28/10 au 12/11 (16 jours), puis **1 impression les 13/11 (pos. 11), 15/11 (pos. 7), 17/11 (pos. 11), 19/11 (1 clic, pos. 2) et 20/11 (pos. 6)**. Cinq impressions en neuf jours : un filet, pas une tendance ; on compte, on ne conclut pas. Le passage 19 → 8 impressions sur 28 j est un effet de fenêtre (les 17-27/10 sont sortis), pas une baisse.
- `ctr-gap` : aucune ligne au seuil de 30 impressions. Sans objet.

### 2.2 Indexation (`inspect`, 23/11)

| URL | Couverture (23/11) | Dernier crawl | Évolution depuis le 16/11 |
|---|---|---|---|
| `/` | ✅ Submitted and indexed | 06/11 14 h 02 | = |
| `/audit-gratuit` | ✅ indexée | **17/10** | = — ⚠️ **32 j après le refresh #36 / correctif #67, toujours la version d'avant dans l'index** |
| `/tarifs` | ✅ indexée | 17/10 | = |
| `/agence-web-montpellier` | ✅ indexée | 17/10 | = |
| `/services/site-vitrine` | ⚪ **URL unknown to Google** | jamais | = (3 demandes : 17/10, 02/11, 16/11) |
| `/services/seo-performance` | ⚪ unknown | jamais | = |
| `/services/boutique-en-ligne` | 🟡 **Discovered, not indexed** | jamais | **progrès** (était « unknown » le 16/11) |
| `/agence-web-paris` | ⚪ unknown | jamais | **régression** (était « découverte » le 16/11) — sa 308 arrive avec #81 |

**Bilan : 6 indexées / 23, inchangé depuis le 19/10 (5 semaines).** Le crawl est quasi nul : une seule page recrawlée depuis le 17/10 (l'accueil, le 06/11). Même `/audit-gratuit`, indexée et maillée depuis l'accueil, n'est pas revisitée en 5 semaines — ce n'est pas un problème de découverte, c'est un **budget de crawl d'un domaine sans autorité**. Les leviers restent externes (fiche Google validée, liens) et la mise en ligne de contenu neuf. Les demandes manuelles n'ont rien donné trois fois : ne pas en refaire avant un déploiement de production réussi.

### 2.3 Sitemap et 404

- `sitemap.xml` : lu par Google le **20/11** (était le 11/11) — 23 soumises, 0 erreur, 0 avertissement ; compteur « 0 indexée » toujours périmé. Contient encore `/agence-web-paris` (sort avec #81) et `/alternative-wordpress-performance` (page pivot, ligne 8, 12/2026 S4).
- `check404` : ✅ aucune anomalie.

## 3. Haloscan (positions du domaine)

`get_domains_positions kaelix.fr` → `NO_RESULT` (17/10, 19/10, 16/11, 23/11). Aucune position connue ; la GSC reste le seul canal (invariant 8). Cannibalisation : non mesurable ; côté structure, les partitions 10 / 13 / 14 / 8 sont documentées dans les briefs. `haloscan-fetch.mjs positions` (API directe) : ⚠️ refusé par les permissions.

## 4. Contacts (PostHog)

⚠️ **Contrôle empêché — 3e revue consécutive** : `posthog-fetch.mjs contacts --days 7|28 --site https://kaelix.fr/` et `pages --days 28` **refusés par les permissions de la session non interactive**. Vérifié ce jour : `.claude/settings.local.json` n'autorise ni `node scripts/posthog-fetch.mjs`, ni `node scripts/haloscan-fetch.mjs`, ni `gh api`, ni `gh run list` (alors que `gsc-fetch.mjs` passe). Aucun chiffre produit ; dernier relevé connu : 02/11 (manuel) — 97 visites / 0 contact sur 28 j. **Conséquence concrète cette semaine : le J30 de `/audit-gratuit` (21/11), dont le KPI est le nombre de formulaires PostHog, ne peut pas être relevé.** La session ne s'auto-accorde pas de permissions : c'est l'opérateur qui ajoute les quatre règles (to-do #11, skill `update-config`).

## 5. Règle des 90 jours

| Contenu | Publié | J30 | J60 | J90 | État |
|---|---|---|---|---|---|
| Accueil `/` (ligne 1) | 22/10 | **21/11 ✅ passé** — 6 imprs / 2 clics 28 j (marque), 0 sur la famille TPE/PME ; recrawlé 06/11 | 21/12 | 20/01/2027 | < 90 j — observation |
| `/audit-gratuit` (ligne 2) | 22/10 (+ correctif 23/10) | **21/11 ✅ passé** — 0 impr. 28 j, **non recrawlée depuis le 17/10** (version d'avant le refresh dans l'index), contacts non mesurables (#11) | 21/12 | 20/01/2027 | < 90 j — observation ; ⚠️ le J90 jugera une page que Google n'a peut-être pas relue : noter la date du prochain crawl |
| `/agence-web-montpellier` (existant 07/09) | — | — | — | **06/12** | fenêtre refresh dans 13 jours (ligne 3, 12/2026 S1) |
| `/services/site-vitrine` (existant 16/09) | — | — | — | **15/12** | ligne 4, 12/2026 S2 |
| `/services/boutique-en-ligne` (12/10) | — | — | — | 10/01/2027 | ligne 7 |
| `/tarifs`, `/services/seo-performance` (v6 17/10) | — | — | — | 15/01/2027 | lignes 5 et 15 |

Aucune action sur ces pages. Les PR #81, #82, #83, #85 ne sont pas publiées : leurs fenêtres démarrent à la fusion (chaque semaine d'attente décale d'autant leur J90).

## 6. Diagnostic (contenus ≥ 90 j)

Sans objet : aucun contenu de la mission n'a 90 jours ; les pages pré-mission n'ont ni position ni impression hors marque. Gisement 4-20 (brief §5 étape B) : **toujours vide**. Les positions 2-11 de la série quotidienne sont celles de la marque.

## 7. Re-check bimestriel par typologie

Non dû (aucun contenu publié depuis 60 jours). Premier re-check : janvier 2027.

## 8. Équilibre du trafic

8 impressions, 2 clics, **100 % sur l'accueil** (marque). Baseline d'un site neuf, pas une alerte de concentration. Dépendance SEO / total : non mesurable (PostHog empêché).

## 9. Tableau des contenus (verdict)

| Contenu | Type / ligne | Statut 23/11 | Verdict |
|---|---|---|---|
| Accueil `/` | refresh ligne 1 | publié 22/10, indexé (crawl 06/11), 6 imprs / 2 clics 28 j, J30 passé | **< 90 j — observation** (J60 le 21/12) |
| `/audit-gratuit` | refresh ligne 2 | publié 22/10, **toujours la version du 17/10 dans l'index**, 0 impr., J30 passé sans KPI (PostHog) | **< 90 j — observation** ; relever le prochain crawl |
| `/agence-web-val-d-oise` | création ligne 6 | **PR #81 ouverte depuis 21 j**, 0 review, aperçu Claude disponible | **à agir — gate** : rebase, relecture, « publie 81 » |
| `/blog/refonte-site-sans-perdre-referencement` | création ligne 13 | **PR #82 ouverte depuis 20 j**, 0 review, aperçu Claude disponible | **à agir — gate** : « publie 82 » (avant #83) |
| `/refonte-site-internet` | création ligne 10 | **PR #83 ouverte depuis 14 j**, 0 review, aperçu Claude disponible | **à agir — gate** : « publie 83 » après #82 |
| `/blog/agence-web-ou-freelance` | création ligne 14 | **PR #85 ouverte depuis 7 j**, 0 review, Lint/Migrations verts, aperçu Claude disponible | **à agir — gate** : « publie 85 » (après le redéploiement, CGV du 11/11) |
| `/services/site-vitrine`, `/services/seo-performance` | existants, refreshes 12/2026-01/2027 | **inconnues de Google** après 3 demandes | **à agir (technique)** — levier = déploiement réparé + signaux externes, pas une 4e demande |
| `/services/boutique-en-ligne` | existant, refresh ligne 7 (≥ 10/01) | passe à « découverte, non indexée » | on_track (frémissement) |
| `/agence-web-montpellier` | refresh ligne 3 (≥ 06/12) | indexée, 0 impression | < 90 j — observation ; `/research` dès le GO de décembre (voir §11) |
| `/tarifs` | refresh ligne 5 (≥ 15/01) | indexée, 1 impr. pos. 4 (marque) | < 90 j — observation |
| `/agence-web-paris` | → 308 avec #81 | repassée « inconnue » | on_track (part avec #81) |
| `/blog` | hub | noindex jusqu'à #82 | on_track |

## 10. Plan d'action S48 (23-29/11) — max 5

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Rétablir le déploiement de production de kaelix.fr** (to-do #24, échéance 18/11 **dépassée**) : dans Vercel, projet `web-agency`, dernier déploiement de `main` → s'il est rouge ou bloqué, faire l'étape **H2** (Root Directory `apps/kaelix` + « Include files outside the Root Directory ») dans l'ordre de `web-agency/docs/decisions.md` §5 (H1, H4 avant), avec Mickael ; puis vérifier que l'`Age` de l'accueil retombe à zéro | opérateur → to-do #24 | **P1 — bloquant, 3e semaine** | preuve de la semaine : « Vercel – web-agency » FAILURE sur #84 (main, 15/11) et #85 (16/11) ; cache de 31 j sur l'accueil. Sans ça : 0 publication possible, six mises à jour de Mickael hors ligne, `/audit-gratuit` jugée à J90 sur une version que Google n'a pas relue |
| ② | **Relire et publier les quatre PR, dans l'ordre #81 → #82 → #83 → #85**, depuis les aperçus Claude du 16/11 (liens dans le journal de la to-do), 10-15 min par page ; rebaser #81-#83 sur `main` avant la fusion (checks verts) ; répondre aux points fermés de #20, #21, #22, #25 et dire « publie 8x » | opérateur → to-do #20, #21, #22, #25 | **P1** | novembre finit à 0/4 publié dimanche ; chaque semaine d'attente repousse les quatre J90 d'autant ; #85 attend en plus le redéploiement (CGV du 11/11) |
| ③ | **Décider le GO de décembre en connaissance de la pile** : produire le brouillon du rapport de novembre (`/report kaelix`) au plus tard le 30/11 et y donner — ou non — le `go-12/2026` groupé (lignes 3 Montpellier S1 ≥ 06/12, 4 site vitrine S2 ≥ 15/12, 12 guide prix S3, 8 pivot S4). Le throttle du plan (« une page non relue attend, ne part jamais ») dit : **ne pas lancer décembre tant que les quatre PR de novembre ne sont pas relues** — décision opérateur, pas système | `/report` (système) → gate opérateur, to-do **#26** (nouvelle) | **P1 — J-7 du 06/12 = 29/11** | sans statut `go-12/2026` dans le plan, la tâche « Production du mois » du 30/11 ne lance pas Montpellier (§1.30) ; le `/research` ligne 8 doit inscrire le transfert de la migration vers la page refonte et un title sans « freelance ou agence » |
| ④ | **Lever les contrôles empêchés** (to-do #11, échéance 22/11 **dépassée**, 3e revue) : ajouter `Bash(node scripts/posthog-fetch.mjs *)`, `Bash(node scripts/haloscan-fetch.mjs *)`, `Bash(gh api *)`, `Bash(gh run list *)` à `permissions.allow` de `.claude/settings.local.json` (skill `update-config`) ; Lighthouse mobile ×3 toujours dû | opérateur → to-do #11 | P2 | le J30 de `/audit-gratuit` n'a pas pu être relevé faute de PostHog ; le J60 (21/12) le sera-t-il ? |
| ⑤ | **Fiche Google « Kaelix Digital »** (to-do #2) : 34 jours en validation pour un « ≤ 5 j » annoncé → ouvrir le compte de Mickael, lire l'état (validée / vidéo demandée / refusée) et, si validée, mise au NAP + transfert dans l'organisation | opérateur → to-do #2 | P2 | seul levier externe immédiat pour le crawl des pages services et le pack local des lignes 3 et 6 |

⛔ Aucune action « demander au client » (invariant 14 — ici sans objet, la discipline reste).

## 11. Plan éditorial (état vs prévu)

- **Novembre `go-11/2026` : 4/4 produits, 0/4 publiés** au 23/11 ; novembre se clôt dimanche 29/11. Lignes 6, 13, 10, 14 : `PR ouverte` (02, 03, 09, 16/11). **Aucun changement de statut** par cette revue : les statuts reflètent le réel (une PR ouverte n'est ni publiée ni abandonnée).
- **Décembre `prévu`** (lignes 3, 4, 12, 8) : **le GO groupé n'est pas donné** — il se donne sur le brouillon du rapport mensuel (§1.30, §1.31), à produire avant le 30/11 (action ③). Sans `go-12/2026`, rien ne se recherche ni ne s'écrit en décembre : c'est voulu.
- **Dérive** : production **à l'heure** (4/4), publication **en retard de trois semaines** sur le gate, et **plus d'un mois** sans mise en ligne (dernier déploiement réussi : 23/10). Ce n'est toujours pas un signal de révision du plan (`/content-plan`) : les sujets, l'ordre et la cadence tiennent. C'est un **signal de pile** : si décembre démarre avec quatre PR non relues, le throttle du plan n'est plus respecté et la pile passe à huit en janvier. La règle du plan tranche d'elle-même (« une page non relue attend ») ; reste à l'opérateur de choisir entre relire novembre cette semaine ou glisser décembre d'une semaine.

## 12. Circuit avis / citations (étapes 12-13)

Sans objet : fiche Google en validation (to-do #2), pas de `avis.md`, pas de campagne citations. 23/11 = 4e lundi → le contrôle citations n'est de toute façon pas dû.

## 13. Mises à jour effectuées par cette revue

`reports/README.md` (index) · `tracking.md` (relevé global 23/11, colonne « dernier relevé » et J30 des lignes accueil et /audit-gratuit, état d'indexation, §2 historique) · `content-plan.md` (journal 23/11 — aucun statut modifié ; GO de décembre à donner sur le rapport) · `todo-operateur.md` (#20, #21, #22, #25 ré-échéancés au 27/11 ; #24 au 25/11 ; #11 au 29/11 ; #2 annoté ; **#26 ajouté** : rapport de novembre + GO décembre ; journal). ⚠️ **Tableau de bord ArtifactData non synchronisé** (outil absent de la session, 2e semaine) : #26 à créer, #20-#25 à mettre à jour dans la base `actions` à la prochaine session interactive — **le gate #26 n'apparaîtra pas dans le résumé du matin tant que ce n'est pas fait.**
