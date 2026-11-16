# Revue hebdo — KAELIX — 2026-11-16 (S47)

| | |
|---|---|
| **Client / date** | `kaelix` (l'agence, cliente d'elle-même) — lundi 2026-11-16, revue produite en session non interactive |
| **Période des données** | GSC 7 j : 08/11 → 14/11 ; GSC 28 j : 18/10 → 14/11 (dernier jour complet côté Google : 14/11). Série quotidienne 60 j lue en complément |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page ×2, query ×2, date ×1, ctr-gap ×2, inspect ×12, sitemaps, check404), Haloscan MCP (`get_domains_positions`), site en ligne (statuts HTTP, meta robots, sitemap, en-têtes de cache), repo web-agency via `gh pr list` / `gh pr view` (#81, #82, #83, #84), repo marketing (git) |
| **Sources empêchées** | ⚠️ **PostHog** : `posthog-fetch.mjs contacts --days 7 / 28`, `pages --days 28`, `check` **refusés par les permissions de la session** (non interactive — même cause que le 19/10 ; to-do #11 toujours ouverte) → section Contacts non produite ; ⚠️ **Haloscan API directe** (`haloscan-fetch.mjs positions`) refusée pour la même raison — le MCP a répondu (`NO_RESULT`) ; ⚠️ `gh api commits/main/status`, `gh run list`, liste des commits de `main` **refusés** → l'état des déploiements de production n'est lu qu'indirectement (en-têtes de cache du site) ; ⚠️ **tableau de bord « Action Kaelix SEO »** (ArtifactData) indisponible dans cette session → les lignes de to-do modifiées ci-dessous **ne sont pas reportées dans la base** (règle du 19/10) ; ⚠️ GBP / BrightLocal : sans objet (fiche en validation depuis le 20/10, to-do #2) |
| **Statut** | interne — 🕓 brouillon (à lire, valider) |

## L'essentiel en 5 lignes

- **Rien ne sort en ligne depuis trois semaines.** Les trois contenus de novembre (Val-d'Oise #81 du 02/11, article refonte SEO #82 du 03/11, page refonte #83 du 09/11) sont en PR **ouvertes, sans relecture ni fusion** ; le mois est à **0/4 publié** le 16, avec la 4e production (ligne 14) due cette semaine. Le goulot n'est pas la production, c'est le gate.
- **Le site de production semble figé sur le build des 23-26/10** : l'accueil est servi depuis le cache Vercel depuis ≈ 24 jours (`Age: 2 059 154 s`), `/audit-gratuit` depuis ≈ 21 jours — cohérent avec le constat du 03/11 (déploiements en échec depuis le 26/10, Root Directory du monorepo non réglé — étape H2). ⚠️ Non vérifiable directement (API GitHub des statuts refusée). **Tant que ce n'est pas réglé, fusionner #81-#83 ne met rien en ligne.**
- **Vercel bloque les aperçus pour une raison de plan, pas de droits** : le commentaire du bot sur #83 dit que `kaelix-agency` « n'est pas membre de l'équipe kaelix's projects » et que l'ajouter exige **un abonnement Pro** (ou un repo public). La to-do #23 « inviter kaelix-agency » n'est donc pas faisable telle quelle → la relecture se fait **sur le poste** (`npm run dev -w kaelix` sur la branche de la PR) ; la fusion par Axel (squash → auteur Axel) déploie normalement, comme #33 et #36 l'ont fait en octobre.
- **GSC : 19 impressions / 3 clics sur 28 j, 1 impression sur 7 j, zéro activité depuis le 28/10.** Cinq pages ont au moins une impression (accueil 7, /tarifs 4, /a-propos 4, /audit-gratuit 2, /realisations 2) ; les requêtes sont anonymisées (0 ligne par mot-clé) : c'est du trafic de marque. Indexation **inchangée depuis le 19/10 : 6 pages** ; les trois pages de services sont **toujours « inconnues de Google »** malgré les demandes des 17/10 et 02/11 ; `/agence-web-paris` est « découverte, non indexée ». Google a relu le sitemap le 11/11 (23 URLs, 0 erreur). Haloscan : `NO_RESULT`. Aucun diagnostic de contenu possible, et aucun n'est attendu : toutes les pages de la mission ont moins de 90 jours.
- **CI de web-agency rouge depuis le 26/10, réparée le 15/11** (PR #84, « aucun code de production modifié ») : les trois PR de contenu affichent encore des checks en échec hérités de cette période ; un rebase sur `main` devrait les remettre au vert avant relecture.

---

## 1. Constats de la semaine (09/11 → 15/11)

- **Côté repo marketing** : ligne 10 (page refonte) produite le 09/11 → PR #83 ; exécution du 10/11 rejouée en doublon puis réconciliée (aucune seconde PR). Ligne 14 (« agence web ou freelance », S4) **en attente de sa semaine : c'est celle-ci** (16/11 → 22/11) — la tâche planifiée « Production du mois » doit l'enchaîner (`/research` → `/write` → 4e PR).
- **Côté web-agency** : une seule fusion depuis le 23/10 visible dans la liste des PR : **#84** (15/11, correctifs de CI). PR ouvertes : #81 (02/11, 1 commentaire bot), #82 (03/11), #83 (09/11, 2 commentaires bot). **0 review** sur les trois, `mergeable: UNKNOWN`, checks « Lint / tests », « Playwright », « Vercel » en **FAILURE** (CI cassée à l'époque de leur ouverture + Vercel bloqué).
- **Site en ligne (16/11)** : `/refonte-site-internet` 404 et `/agence-web-val-d-oise` 404 (normal : PR non fusionnées) ; `/agence-web-paris` 200 (sa redirection part avec #81) ; `/blog` 200 en `noindex, nofollow` (normal : l'article #82 n'est pas fusionné) ; sitemap 23 URLs, 0 anomalie `check404` (23 en 200, 19 anciennes URLs WordPress en 308 vers des 200).

## 2. Search Console (API directe, propriété préfixe `https://kaelix.fr/`)

### 2.1 Search Analytics

| Fenêtre | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| 7 j (08/11-14/11) | 0 | 1 | 0 % | 11,0 (accueil) |
| 28 j (18/10-14/11) | 3 | 19 | 15,8 % | — (voir par page) |

Par page, 28 j :

| Page | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| `/` | 3 | 7 | 42,9 % | 3,1 |
| `/tarifs` | 0 | 4 | 0 % | 5,0 |
| `/a-propos` | 0 | 4 | 0 % | 5,0 |
| `/audit-gratuit` | 0 | 2 | 0 % | 4,0 |
| `/realisations` | 0 | 2 | 0 % | 6,0 |

- **Par requête : 0 ligne** sur les deux fenêtres (requêtes anonymisées sous le seuil Google) → avec des positions 3-6 sur toutes les pages, c'est la **recherche de marque** (« kaelix », variantes), pas du trafic de mots-clés. Aucune impression sur la famille TPE/PME (ligne 1) ni sur « audit site internet gratuit » (ligne 2) à ce stade : attendu à J+25 d'un refresh sur un domaine sans historique.
- **Série quotidienne** : impressions les 17/10, 20-21/10 et 27/10 uniquement ; **zéro depuis le 28/10** (la fenêtre 7 j ne porte qu'une impression le 10-11/11, pos. 11). Le 28/10 coïncide avec le début des déploiements en échec (26/10) — corrélation, pas causalité : un site qui n'est pas redéployé reste servi (cache), Google n'a aucune raison de le pénaliser pour ça. La cause plausible est l'absence totale de signaux (0 lien entrant hormis le pied de page Ansquer du 03/11, fiche Google non validée).
- `ctr-gap` : aucune ligne au seuil de 30 impressions. Sans objet.

### 2.2 Indexation (`inspect`, 16/11)

| URL | Couverture (16/11) | Dernier crawl | Évolution depuis le 19/10 |
|---|---|---|---|
| `/` | ✅ Submitted and indexed | **06/11** 14 h 02 | recrawlée (version du 22/10 → c'est bien le refresh accueil qui est dans l'index) |
| `/tarifs` | ✅ indexée | 17/10 | = |
| `/agence-web-montpellier` | ✅ indexée | 17/10 | = |
| `/audit-gratuit` | ✅ indexée | 17/10 | = — ⚠️ le refresh du 22/10 (#36) et le correctif du 23/10 (#67) **ne sont pas encore recrawlés** |
| `/realisations` | ✅ indexée | 17/10 | = |
| `/a-propos` | ✅ indexée | 17/10 | = |
| `/services/site-vitrine` | ⚪ **URL unknown to Google** | jamais | **régression de statut** (était « découverte, non indexée » le 19/10) malgré la demande du 02/11 |
| `/services/seo-performance` | ⚪ unknown | jamais | = (demandes 17/10 et 02/11 sans effet) |
| `/services/boutique-en-ligne` | ⚪ unknown | jamais | = (idem) |
| `/services` (hub) | ⚪ unknown | jamais | régression (était « découverte ») |
| `/blog` | ⚪ unknown | jamais | noindex volontaire jusqu'à #82 — sans objet |
| `/agence-web-paris` | 🟡 Discovered, not indexed | jamais | nouveau — sa 308 vers Val-d'Oise arrive avec #81 |

**Bilan : 6 indexées / 23, inchangé en 4 semaines.** Les trois pages de vente ne sont **jamais crawlées** alors qu'elles sont maillées depuis le pied de page et l'accueil en prod. Deux demandes manuelles n'ont rien donné : ce n'est plus un problème de découverte, c'est un **budget de crawl quasi nul** sur un domaine sans autorité. Les leviers sont externes (liens, fiche Google validée) et la mise en ligne des trois nouvelles pages (du contenu neuf fait revenir Googlebot). Re-demander une troisième fois ne coûte rien mais n'est pas la réponse — à faire **après** un déploiement de production réussi, pour que Google lise la bonne version.

### 2.3 Sitemap et 404

- `sitemap.xml` : lu par Google le **11/11** (était le 10/10 à la revue précédente) — 23 soumises, 0 erreur, 0 avertissement ; compteur « 0 indexée » **toujours périmé** (6 le sont). Le sitemap en ligne contient `/agence-web-paris` (sort avec #81) et `/alternative-wordpress-performance` (page pivot, réécriture en décembre, ligne 8).
- `check404` : ✅ aucune anomalie.

## 3. Haloscan (positions du domaine)

`get_domains_positions kaelix.fr` → `NO_RESULT` (comme les 17/10 et 19/10). Aucune position connue ; **la GSC reste le seul canal de positions** (invariant 8). Cannibalisation : non mesurable ; côté structure, les partitions des lignes 10 / 13 / 8 sont documentées dans les briefs.

## 4. Contacts (PostHog)

⚠️ **Contrôle empêché** : `posthog-fetch.mjs contacts --days 7|28 --site https://kaelix.fr/`, `pages --days 28` et `check` **refusés par les permissions de la session non interactive** — identique au 19/10 (to-do #11, ouverte depuis 4 semaines). Aucun chiffre produit. Dernier relevé connu : 02/11 (contrôle manuel d'Axel) — 97 visites / 0 contact sur 28 j. Cadre de lecture quand le relevé reviendra : mesure active depuis le 17/10 15 h 50 ; < 50 visites → on compte, on ne conclut pas ; PostHog = contacts, GSC = trafic. **Ce contrôle manque pour la 2e revue consécutive : il doit être réglé par la liste blanche, pas rattrapé à la main.**

## 5. Règle des 90 jours

| Contenu | Publié | J30 | J60 | J90 | État |
|---|---|---|---|---|---|
| Accueil `/` (ligne 1) | 22/10 | **21/11** | 21/12 | 20/01/2027 | < 90 j — observation ; recrawlé le 06/11 ✅ |
| `/audit-gratuit` (ligne 2) | 22/10 (+ correctif 23/10) | **21/11** | 21/12 | 20/01/2027 | < 90 j — observation ; pas encore recrawlé |
| `/agence-web-montpellier` (existant 07/09) | — | — | — | **06/12** | fenêtre refresh ouverte dans 3 semaines (ligne 3, 12/2026 S1) |
| `/services/site-vitrine` (existant 16/09) | — | — | — | **15/12** | ligne 4, 12/2026 S2 |
| `/services/boutique-en-ligne` (12/10) | — | — | — | 10/01/2027 | ligne 7 |
| `/tarifs`, `/services/seo-performance` (v6 17/10) | — | — | — | 15/01/2027 | lignes 5 et 15 |

J30 de l'accueil et de /audit-gratuit **samedi 21/11** : observation seule (impressions GSC + contacts PostHog si le contrôle est rétabli), aucune action. Les PR #81-#83 ne sont pas publiées : leurs fenêtres démarrent à la fusion.

## 6. Diagnostic (contenus ≥ 90 j)

Sans objet : aucun contenu de la mission n'a 90 jours, et les pages pré-mission n'ont ni position ni impression hors marque. Le gisement 4-20 (brief §5 étape B) est **toujours vide** à la mi-novembre, date à laquelle le brief attendait une baseline — la baseline est là : **≈ 0**. Elle ne se remplira qu'avec des pages en ligne et des signaux externes.

## 7. Re-check bimestriel par typologie

Non dû (aucun contenu publié depuis 60 jours). Premier re-check : janvier 2027.

## 8. Équilibre du trafic

19 impressions, 3 clics, **100 % des clics sur l'accueil** (recherche de marque). C'est la baseline d'un site neuf, pas une alerte de concentration. Dépendance SEO / total : non mesurable (PostHog empêché).

## 9. Tableau des contenus (verdict)

| Contenu | Type / ligne | Statut 16/11 | Verdict |
|---|---|---|---|
| Accueil `/` | refresh ligne 1 | publié 22/10, indexé (crawl 06/11), 7 imprs / 3 clics 28 j | **< 90 j — observation** (J30 le 21/11) |
| `/audit-gratuit` | refresh ligne 2 | publié 22/10, indexé (version du 17/10), 2 imprs | **< 90 j — observation** (J30 le 21/11) |
| `/agence-web-val-d-oise` | création ligne 6 | **PR #81 ouverte depuis 14 j**, 0 review, checks rouges hérités | **à agir — gate** : rebase, relecture sur le poste, « publie 81 » |
| `/blog/refonte-site-sans-perdre-referencement` | création ligne 13 | **PR #82 ouverte depuis 13 j**, 0 review | **à agir — gate** : « publie 82 » (avant #83) |
| `/refonte-site-internet` | création ligne 10 | **PR #83 ouverte depuis 7 j**, 0 review | **à agir — gate** : « publie 83 » après #82 |
| Article « agence web ou freelance » | création ligne 14 | `go-11/2026`, S4 = cette semaine | **on_track** — production par la tâche planifiée ; 4e PR en attente de relecture à prévoir |
| `/services/site-vitrine`, `/services/seo-performance`, `/services/boutique-en-ligne` | existants, refreshes 12/2026-01/2027 | **inconnues de Google** après 2 demandes | **à agir (technique)** — redemander après déploiement réparé ; levier réel = signaux externes |
| `/agence-web-montpellier` | refresh ligne 3 (≥ 06/12) | indexée, 0 impression | < 90 j — observation ; `/research` à partir du 30/11 (J-7) |
| `/tarifs` | refresh ligne 5 (≥ 15/01) | indexée, 4 imprs pos. 5 (marque) | < 90 j — observation |
| `/agence-web-paris` | → 308 avec #81 | découverte, non indexée | on_track (part avec #81) |
| `/blog` | hub | noindex jusqu'à #82 | on_track |

## 10. Plan d'action S47 (16-22/11) — max 5

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **Rétablir le déploiement de production de kaelix.fr** : vérifier dans Vercel que le dernier déploiement `main` est vert ; sinon faire l'étape **H2** (Root Directory `apps/kaelix` + « Include files outside the Root Directory ») dans l'ordre de `web-agency/docs/decisions.md` §5 (H1, H4 avant), avec Mickael | opérateur → to-do **#24** (nouvelle) | **P1 — bloquant** | preuve indirecte : accueil servi depuis le cache depuis ≈ 24 j, `/audit-gratuit` ≈ 21 j ; sans ça, fusionner #81-#83 ne publie rien et six mises à jour de Mickael restent hors ligne |
| ② | **Relire et publier les trois PR dans l'ordre #81 → #82 → #83** sur le poste (`git fetch && git checkout content/<branche>` puis `npm run dev -w kaelix`) : rebaser chaque branche sur `main` (CI réparée par #84 le 15/11) pour des checks verts, répondre aux points ①-⑤ de chaque to-do, dire « publie 8x » | opérateur → to-do #20, #21, #22 | **P1** | 0/4 publié au 16/11 ; la relecture sur aperçu est **impossible sans Vercel Pro** (voir ③) → relecture locale, 10-15 min par page comme prévu au plan |
| ③ | **Trancher la question Vercel** (#23 reformulée) : le bot dit « kaelix-agency n'est pas membre de l'équipe, Pro requis ». Trois voies : (a) **ne rien changer** — relecture locale, fusion par Axel (déploie, comme #33/#36) ; (b) faire pousser les branches de contenu avec un auteur git membre de l'équipe ; (c) passer Pro. Recommandation : (a), gratuite, et retirer « aperçu Vercel » des gates | opérateur → to-do #23 | P2 | la cause des aperçus refusés est désormais connue et lue à la source (commentaire Vercel sur #83) |
| ④ | **Produire la ligne 14** « Agence web ou freelance : la mauvaise question » (S4, `go-11/2026`) : `/research` → `/write` → PR, par la tâche planifiée « Production du mois » | `/research` + `/write` (système) | P2 | ⚠️ si #81-#83 ne sont pas relues d'ici vendredi, **4 PR non relues** = le throttle du plan est dépassé (« une page non relue attend, ne part jamais ») — signal de pile, pas de dérive de production |
| ⑤ | **Lever définitivement les deux contrôles empêchés récurrents** : ajouter `node scripts/posthog-fetch.mjs *`, `node scripts/haloscan-fetch.mjs *` et `gh api *`/`gh run list *` à la liste blanche des sessions non interactives (`.claude/settings.local.json`, skill `update-config`) ; au passage, **vérifier l'état de la fiche Google « Kaelix Digital »** (validation « ≤ 5 j » annoncée le 20/10 — 27 j) | opérateur → to-do #11, #2 | P3 | 2e revue de suite sans contacts ni Lighthouse ; la fiche validée est le seul levier externe immédiat pour le crawl et le pack local |

⛔ Aucune action « demander au client » (invariant 14 — ici sans objet, la discipline reste).

## 11. Plan éditorial (état vs prévu)

- **Novembre `go-11/2026` : 3/4 produits, 0/4 publiés** au 16/11. Lignes 6, 13, 10 : `PR ouverte` (02, 03, 09/11). Ligne 14 : S4 = semaine du 16/11, à produire par la tâche planifiée. **Aucun changement de statut** par cette revue (les statuts reflètent le réel).
- **Décembre `prévu`** : ligne 3 Montpellier (S1, ≥ 06/12 → `/research` possible dès le 30/11), ligne 4 site vitrine (S2, ≥ 15/12), ligne 12 guide prix (S3), ligne 8 page pivot (S4). ⚠️ Le `/research` de la ligne 8 doit inscrire **la migration passe à la page refonte** (décision du 10/11).
- **Dérive** : production **à l'heure** ; publication **en retard de deux semaines** sur le gate. Ce n'est pas un signal de révision du plan (`/content-plan`) mais un signal de **file d'attente de relecture** : si la 4e PR s'ajoute aux trois sans qu'aucune ne sorte, décembre démarre avec un stock non relu et le throttle du plan n'est plus respecté. Décision opérateur, pas système.

## 12. Circuit avis / citations (étapes 12-13)

Sans objet : fiche Google en validation (to-do #2), pas de `avis.md`, pas de campagne citations. 16/11 = 3e lundi → le contrôle citations n'est de toute façon pas dû.

## 13. Mises à jour effectuées par cette revue

`reports/README.md` (index) · `tracking.md` (relevé global 16/11, colonne « dernier relevé » des lignes accueil et /audit-gratuit, état d'indexation, §2 historique) · `content-plan.md` (journal 16/11 — aucun statut modifié) · `todo-operateur.md` (#20-#22 ré-échéancés, #23 reformulé, #24 ajouté, #11 et #2 annotés ; journal). ⚠️ **Tableau de bord ArtifactData non synchronisé** (outil absent de la session) : #24 à créer et #20-#23 à mettre à jour dans la base `actions` à la prochaine session interactive.
