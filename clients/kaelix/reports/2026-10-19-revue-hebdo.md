# Revue hebdo — KAELIX — 2026-10-19 (S43) — première revue

| | |
|---|---|
| **Client / date** | `kaelix` (l'agence, cliente d'elle-même) — lundi 2026-10-19, revue produite en session (non interactive) |
| **Période des données** | GSC 7 j : 11/10 → 17/10 ; GSC 28 j : 20/09 → 17/10 (dernier jour complet côté Google : 17/10). ⚠️ Propriété créée le 17/10 : **aucune ligne Search Analytics sur les deux fenêtres** — attendu, pas un défaut |
| **Sources utilisées** | Search Console en API directe (`gsc-fetch.mjs` : query page / query / ctr-gap ×2, inspect ×12, sitemaps, check404), Haloscan MCP (positions du domaine), site en ligne (statuts HTTP, sitemap, meta robots), repo web-agency via `gh pr list` / `gh pr view` (#31, #25), repo marketing (git) |
| **Sources empêchées** | ⚠️ **PostHog** : `posthog-fetch.mjs` (contacts 7 j / 28 j, pages 28 j) **refusé par les permissions de la session** (non interactive, aucune approbation possible) → section Contacts non produite ; ⚠️ **Lighthouse mobile ×3** (suite de l'audit du 17/10, PR #30) : `npx lighthouse` refusé, même cause ; ⚠️ `gh issue list` refusé (la liste des issues web-agency n'est pas relue) ; ⚠️ GBP / BrightLocal : sans objet (pas de fiche Google à ce jour, to-do #2) |
| **Statut** | interne — 🕓 brouillon (à lire, valider) |

## L'essentiel en 5 lignes

- **GSC : zéro donnée sur 7 j et 28 j** (propriété du 17/10, données à partir du 18/10 avec 2-3 jours de latence côté API) → **première lecture réelle à la revue du 26/10**, baseline 28 j vers la mi-novembre. Aucun diagnostic possible cette semaine, et aucun n'est attendu.
- **Indexation : 6 des 10 demandes du 17/10 ont abouti en moins d'une heure** (accueil, /tarifs, /agence-web-montpellier, /audit-gratuit, /realisations, /a-propos — toutes crawlées le 17/10 entre 17 h 34 et 17 h 40, soit **après** la mise en prod de la PR #30 à 17 h 27 : c'est la version v6 maillée qui est indexée). 3 pages restent hors index (/services/site-vitrine et /services « découvertes, jamais crawlées » ; /services/seo-performance et /services/boutique-en-ligne « inconnues de Google ») ; /blog est noindex par décision. Rien à re-demander : on laisse Google dérouler le maillage, relevé le 26/10.
- **Les trois 301 décidées au gate du 17/10 ne sont pas en prod** : la PR web-agency#31 (tpe-pme → `/`, sur-mesure et restaurant → /services/site-vitrine ; preview Vercel verte) est **ouverte depuis le 17/10 à 18 h 11, sans GO MERGE**. Les trois doublons répondent toujours 200 et sont toujours dans le sitemap (26 URLs ; #31 le ramène à 23). Tant que Google n'a crawlé aucune des trois (toutes « inconnues »), le merge reste sans coût — mais c'est la première action de la semaine.
- **Une PR antérieure à la v6 traîne** : web-agency#25 « Boutique sans engagement » (13/10, 66 fichiers, migration de prix en attente d'un « ok migration » jamais donné) est restée ouverte pendant la bascule v6 (#28) et touche trois pages que #31 supprime → **conflit certain**. Décision opérateur : rebaser et trancher, ou fermer. Si elle passe, le brief §1 et la ligne 7 du plan (« boutique 150 €/mois, 12 mois ») changent.
- **Plan éditorial validé le 17/10** (to-do #8 clos par cette revue). Novembre = refresh de l'accueil (ligne 1) + refresh /audit-gratuit (ligne 2), tous deux `prévu`. Le `/research` de l'accueil peut démarrer dès cette semaine (scroll-check chrome en session interactive). Aucune dérive : le plan a 2 jours.

---

## 1. Constats de la semaine (12/10 → 18/10)

- **Côté site (repo web-agency)** : semaine dense le 17/10 — mesure PostHog (#26), spec et implémentation de l'offre v6 (#27, #28), suites de l'audit (#30 : 6 villes et 3 articles en 410, sitemap sans lastmod, /blog noindex, pied de page 4 colonnes, Organization unique, metas v6, LCP). Vérifié en ligne ce matin : `/agence-web/lyon` → 308 → `/agence-web-lyon` → **410** ✅ ; `/blog` 200 avec `noindex, nofollow` ✅ ; ancien article de blog → 404/410 ✅ ; `/agence-web-val-d-oise` → 404 (page de décembre, ligne 6 — normal) ; `/agence-web-paris` → 200 (sa 301 part avec la création de la page Val-d'Oise, même PR).
- **Côté repo marketing** : ciblage §5 (A, C), premier `/tech-audit`, `content-plan.md` validé, to-do kaelix créée. Aucun contenu produit par la mission à ce jour → `tracking.md` §1 vide (c'est normal : la première production est en novembre).
- **PR ouvertes sur web-agency** : **#31** (3 × 301, 17/10, preview Vercel SUCCESS, 0 review) et **#25** (boutique sans engagement, 13/10, pré-v6). Voir §8.

## 2. Search Console (API directe, propriété préfixe `https://kaelix.fr/`)

### 2.1 Search Analytics

| Fenêtre | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| 7 j (11/10-17/10) | — | — | — | — |
| 28 j (20/09-17/10) | — | — | — | — |

Aucune ligne par page, par requête, ni au `ctr-gap` (seuil 30 impressions). **Lecture** : la propriété a été créée le 17/10 ; Search Analytics ne remonte des agrégats qu'à partir du 18/10 et l'API sert les jours avec 2-3 jours de retard. La première fenêtre lisible est celle du 26/10 (7 j : 18/10 → 24/10) ; la baseline 28 j attendue par le brief §5 étape B arrive vers le **15/11**. Un site de 36 URLs dont 1 indexée jusqu'au 17/10 n'aurait de toute façon produit que du bruit.

### 2.2 Indexation — contrôle des 10 demandes du 17/10 (`inspect`, 19/10)

| URL | Couverture (19/10) | Dernier crawl | Lecture |
|---|---|---|---|
| `/` | ✅ Submitted and indexed | 17/10 17 h 34 | réindexée en version v6 + #30 (prod 17 h 27) |
| `/tarifs` | ✅ Submitted and indexed | 17/10 17 h 34 | idem — la grille « dès 199 € » est dans l'index |
| `/agence-web-montpellier` | ✅ Submitted and indexed | 17/10 17 h 38 | pilier local, cluster C |
| `/audit-gratuit` | ✅ Submitted and indexed | 17/10 17 h 38 | free tool, ligne 2 de novembre |
| `/realisations` | ✅ Submitted and indexed | 17/10 17 h 40 | |
| `/a-propos` | ✅ Submitted and indexed | 17/10 17 h 40 | |
| `/services/site-vitrine` | 🟡 Discovered, not indexed | jamais | pilier cluster B — à surveiller le 26/10 |
| `/services` (hub) | 🟡 Discovered, not indexed | jamais | |
| `/services/seo-performance` | ⚪ URL unknown to Google | jamais | demande du 17/10 non encore prise en compte côté API |
| `/services/boutique-en-ligne` | ⚪ URL unknown to Google | jamais | idem — pilier cluster F (cible e-commerce) |
| `/blog` | 🟡 Discovered, not indexed | jamais | **noindex volontaire** (#30) : statut sans objet jusqu'au premier article |
| `/agence-web-tpe-pme` (doublon, 301 en attente) | ⚪ URL unknown to Google | jamais | le merge de #31 ne détruit rien d'indexé |

**Bilan : 6 indexées / 10 demandées, contre 1 / 36 à l'audit du 17/10.** Les quatre pages de services restent dehors ; elles sont maillées depuis le pied de page (#30) et depuis l'accueil → pas de nouvelle demande cette semaine (le budget de demandes manuelles se garde pour les contenus du plan). Relevé `inspect` ×4 le 26/10 ; si « unknown » persiste au 02/11 (audit mensuel), une seule nouvelle demande pour /services/site-vitrine (pilier le plus maillé).

### 2.3 Sitemap et 404

- `sitemap.xml` : soumis le 27/09, **lu par Google le 10/10** (avant #30 et #31) — compteur « 36 soumises / 0 indexée » **périmé** (le sitemap en ligne compte 26 URLs ; les 6 indexées ci-dessus n'y sont pas encore comptées). Pas d'erreur. Prochaine lecture Google à attendre ; si le compteur n'a pas bougé le 02/11, re-soumettre le sitemap dans l'interface.
- `check404` : ✅ 25 URLs du sitemap en 200 ; 19 anciennes URLs WordPress en 308 vers des 200. Aucune anomalie.
- **Sitemap en ligne (26 URLs)** : contient encore `/agence-web-tpe-pme`, `/developpement-site-sur-mesure`, `/site-web-restaurant` (sortent avec #31) et `/agence-web-paris` (sort avec la page Val-d'Oise, décembre). Aucune page ville hors zone, aucun article : conforme aux décisions du 17/10.

## 3. Haloscan (positions du domaine)

`get_domains_positions kaelix.fr` → `NO_RESULT` (17/10 : `SITE_NOT_FOUND`). **Aucune position connue**, comme attendu pour un domaine qui n'avait qu'une page indexée. Haloscan ne verra le domaine qu'après plusieurs semaines d'indexation ; **la GSC est le seul canal de positions jusqu'à nouvel ordre** (invariant 8 : on ne comparera pas les deux). Cannibalisation : non mesurable ; côté structure, les trois doublons d'intention sont traités par #31.

## 4. Contacts (PostHog)

⚠️ **Contrôle empêché** : `node scripts/posthog-fetch.mjs contacts --days 7|28 --site https://kaelix.fr/` et `pages --days 28` ont été **refusés par les permissions de cette session non interactive** (aucune approbation possible). Aucun chiffre de contacts n'est donc produit — jamais d'invention. Rappel du cadre quand le relevé reviendra : mesure active depuis le **17/10 15 h 50** (premier pageview reçu) → une « période précédente » à 0 n'est pas une hausse ; < 50 visites → on compte, on ne conclut pas ; PostHog = contacts, GSC = trafic, jamais mélangés. À rattraper en session interactive (plan ④) ou en ajoutant la commande à la liste blanche.

## 5. Règle des 90 jours

Aucun contenu publié par la mission. Pour l'existant (dates git relevées à l'audit), le plan a déjà posé les fenêtres : libres depuis le 25/04 (accueil, /audit-gratuit, /site-vitrine-artisan, /alternative-wordpress-performance) ; **/agence-web-montpellier dès le 06/12**, **/services/site-vitrine dès le 15/12**, **/services/boutique-en-ligne dès le 10/01**, **/tarifs et /services/seo-performance dès le 15/01/2027** (refonte v6 du 17/10). Aucune action corrective sur ces pages d'ici là, hors erreur factuelle ou blocage technique. **Rien à signaler cette semaine.**

## 6. Diagnostic (contenus ≥ 90 j)

Sans objet : aucune donnée GSC, aucune position Haloscan. Le gisement 4-20 (brief §5 étape B) se remplit à partir du 26/10 et devient lisible vers le 15/11.

## 7. Re-check bimestriel par typologie

Non dû (aucun contenu publié par la mission ; le blog est vide). Premier re-check possible au plus tôt en janvier 2027 (J60 des refreshes de novembre).

## 8. Équilibre du trafic

Non mesurable (aucune donnée). À la première lecture, l'attendu est une concentration quasi totale sur l'accueil (seule page indexée depuis des mois) : ce sera la baseline, pas une alerte.

## 9. Tableau des contenus (verdict)

| Contenu | Type | Statut | Verdict |
|---|---|---|---|
| Accueil `/` | existant (25/04), refresh prévu 11/2026 (ligne 1) | indexé v6 le 17/10 | **on_track** — `/research` à lancer |
| `/audit-gratuit` | existant (25/04), refresh prévu 11/2026 (ligne 2) | indexé le 17/10 | **on_track** — first-party « extrait d'audit réel » : l'audit kaelix.fr du 17/10 (ou celui d'Ansquer, anonymisé) **est** cet extrait → pas de manque, on ré-angle avec le stock |
| `/tarifs` | refondu v6 17/10, refresh ≥ 15/01 (ligne 5) | indexé le 17/10 | **< 90 j — observation** (J90 : 15/01/2027) |
| `/agence-web-montpellier` | existant 07/09, refresh 01/2027 (ligne 3) | indexé le 17/10 | **< 90 j — observation** (J90 : 06/12) |
| `/services/site-vitrine` | existant 16/09, refresh 12/2026 (ligne 4) | 🟡 découvert, non indexé | **< 90 j — observation** ; indexation à relever le 26/10 |
| `/services/seo-performance` | refondu v6 17/10 (réserve, ligne 15) | ⚪ inconnu de Google | **< 90 j — observation** (J90 : 15/01/2027) |
| `/services/boutique-en-ligne` | existant 12/10, refresh 02/2027 (ligne 7) | ⚪ inconnu de Google | **< 90 j — observation** (J90 : 10/01) ; devenir de la PR #25 à trancher |
| `/agence-web-tpe-pme`, `/developpement-site-sur-mesure`, `/site-web-restaurant` | doublons → 301 (gate 17/10) | 200, dans le sitemap, inconnus de Google | **à agir** — GO MERGE #31 |
| `/agence-web-paris` | → 301 vers Val-d'Oise (décembre, ligne 6) | 200 | on_track (part avec la création) |
| `/blog` | vide, noindex | — | on_track (repart avec le premier article du plan) |

## 10. Plan d'action S43 (19-25/10) — max 5

| # | Action | Command / canal | Priorité | Note |
|---|---|---|---|---|
| ① | **GO MERGE web-agency#31** (3 × 301 : tpe-pme → `/`, sur-mesure et restaurant → /services/site-vitrine ; sitemap 26 → 23) | opérateur → to-do #9 | **P1** | preview Vercel verte ; aucune des trois URL n'est indexée → merge sans perte ; à faire avant la prochaine lecture du sitemap par Google |
| ② | **Trancher web-agency#25** « Boutique sans engagement » (13/10, pré-v6) : rebaser sur main (#28, #30, #31) et donner « ok migration », ou fermer. Si merge : mettre à jour brief §1 (boutique 150 €/mois **sans engagement**) et la ligne 7 du plan | opérateur → to-do #10 | **P1** | la PR modifie 3 pages que #31 supprime → conflit certain ; une PR qui dort pendant une bascule d'offre est un risque de régression |
| ③ | **Lancer `/research kaelix` pour l'accueil** (ligne 1, famille « site internet TPE/PME », ZC partiel) — scroll-check chrome en session interactive ; brief persisté dans `research/` puis gate | `/research` → to-do #12 | P2 | production en novembre, relecture 2/mois ; démarrer la phase 0 la semaine du 26/10 au plus tard laisse 3 semaines avant le `/write` |
| ④ | **Rattraper les deux contrôles empêchés en session interactive** : PostHog (contacts 7 j / 28 j, pages 28 j) et Lighthouse mobile ×3 (`/`, `/tarifs`, `/services/site-vitrine`) après la correction LCP de #30 — ou ajouter `posthog-fetch.mjs` et `npx lighthouse` à la liste blanche des sessions planifiées | opérateur → to-do #11 | P2 | la promesse « Lighthouse ≥ 90 mobile » de /garanties reste non vérifiée depuis #30 (audit : 85 sur /tarifs, 89 sur l'accueil) |
| ⑤ | **Fiche Google Business « zone desservie »** : SIRET + arbitrage horaires dans `nap.md`, puis création — prérequis parallèle du pack local pour Montpellier et Val-d'Oise | opérateur → to-do #2 | P3 | kaelix est son propre client : pas une sollicitation ; échéance posée avant le `/research` Val-d'Oise (début décembre) |

⛔ Aucune action « demander au client » (invariant 14 — ici sans objet, la discipline reste).

## 11. Plan éditorial (état vs prévu)

- Plan ✅ validé le 17/10 (gate en session : Val-d'Oise avancée à décembre, Montpellier en janvier, 301 immédiates). **Novembre : 0/2 produit, 2 `prévu`** (accueil, /audit-gratuit) — c'est l'état normal à J+2 du gate.
- Changements de statut cette semaine : **aucun**. Seule note : les « 301 immédiates » du plan sont en PR non mergée (#31) — annoté dans le plan (clusters A et B), pas un changement de statut.
- Dérive : aucune. Point d'attention : la cadence 2/mois suppose le `/research` de l'accueil lancé avant fin octobre (plan ③).

## 12. Circuit avis / citations (étapes 12-13)

Sans objet : pas de fiche Google (to-do #2), pas de registre `avis.md`, pas de campagne citations. Ces deux circuits s'ouvrent à la création de la fiche.

## 13. Mises à jour effectuées par cette revue

`reports/README.md` (créé depuis le gabarit, index) · `tracking.md` (relevé global 19/10, état d'indexation, §2 historique des revues) · `content-plan.md` (journal 19/10 ; annotation PR #31 sur les 301 des clusters A et B — aucun statut modifié) · `todo-operateur.md` (#8 clos ; #9 merge #31, #10 sort de #25, #11 contrôles empêchés, #12 GO /research accueil ajoutés ; #2 ré-échéancé ; journal).
