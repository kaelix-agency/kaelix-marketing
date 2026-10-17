# Plan éditorial — KAELIX (l'agence, cliente d'elle-même)

<!--
La CARTE DU PRÉVU sur plusieurs mois (tracking.md est le journal du RÉALISÉ).
⚠️ DOCUMENT VIVANT — c'est l'exception au régime « fichier figé » des reports/ et prompts/.
Les statuts par sujet bougent au fil des semaines (/weekly-review re-priorise) ; le fichier
n'est JAMAIS re-généré et une ligne ne s'efface JAMAIS. Un sujet abandonné se raye par son
statut, il ne disparaît pas — sa trace d'audit passe par le statut et par git.
Justification : docs/rationnel-des-choix.md §1.11.
-->

| | |
|---|---|
| **Client** | `kaelix` |
| **Horizon** | 6 mois — de 11/2026 à 04/2027 |
| **Généré le** | 2026-10-17 |
| **Statut** | 🕓 brouillon |
| **Validé le** | — |
| **Prochaine révision** | 2027-01-18 (trimestrielle — ou avant si le brief change : nouveau client e-commerce, nouvelle zone) |
| **Cadence contractuelle** | 2 contenus / mois (brief §1, fixé par l'opérateur le 17/10) |
| **Capacité de relecture opérateur** | 2 contenus / mois (Axel) |
| **Volume retenu** | **2 contenus / mois — 12 sujets sur 6 mois** |

---

## ⚠️ Règle d'or de ce plan

> **Les refreshes de l'existant en positions 4-20 se planifient AVANT toute création.**
>
> Pousser vers le top 3 une page déjà positionnée est le levier le plus rentable du SEO : hors top 3, le trafic est très faible, et l'optimisation de l'existant augmente le trafic **sans rien créer**. Créer du neuf pendant que des gains faciles dorment dans l'existant, c'est inverser l'ordre de valeur.

> **Second garde-fou — le throttle.** Le volume mensuel se cale sur la **capacité de relecture**, jamais sur la capacité de génération. Publier plus que ce qu'on peut relire = publier du non-relu = ne pas performer. Repère : une demi-journée de relecture par semaine ≈ 2 contenus relus sérieusement.

### Lecture particulière pour kaelix.fr (à lire avant le tableau)

- **L'étape B du ciblage (§5 : existant en positions 4-20) est vide par construction** : au 17/10, une seule page sur 36 est indexée (audit C1), aucune position connue ni chez Haloscan (`SITE_NOT_FOUND`) ni dans la GSC (propriété créée le 17/10). Il n'y a donc **aucune page 4-20 à pousser** — la règle d'or s'applique quand même : les 7 pages existantes du plan sont traitées comme des **refreshes « à zéro »** (on ré-angle une page qui existe, on ne crée pas à côté), et elles passent **avant** les 5 créations.
- **Règle des 90 jours sur l'existant** (dates git relevées à l'audit, `tracking.md`) : les pages du **25/04/2026** sont libres (accueil, /audit-gratuit, /site-vitrine-artisan, /alternative-wordpress-performance) ; les pages refondues en septembre-octobre ne se retouchent qu'à J90 — **/agence-web-montpellier dès le 06/12**, **/services/site-vitrine dès le 15/12**, **/services/boutique-en-ligne dès le 10/01**, **/tarifs et /services/seo-performance dès le 15/01/2027** (refonte v6 du 17/10). D'ici là, seules les corrections factuelles passent. C'est ce qui place /tarifs en janvier malgré sa priorité « argent ».
- **Décisions opérateur du 17/10, acquises** : pages locales = Montpellier (refresh) + Val-d'Oise (création, 301 depuis /agence-web-paris dans la même PR) ; blog reparti de zéro (les 3 articles sont en 410) ; **zéro nom technique** sur tout le site public, blog compris ; grille SEO conservée sur les pages services ; **une seule** page pivot comparaison, catégorielle, jamais nominative ; **restauration hors cible pour l'instant, l'e-commerce est la cible** (message opérateur du 17/10).
- **Doublons d'intention tranchés ici** (audit A3) : `/agence-web-tpe-pme` → **301 vers l'accueil** (l'accueil porte la famille TPE/PME, ligne 1 du plan) ; `/developpement-site-sur-mesure` → **301 vers /services/site-vitrine** ; `/site-web-restaurant` → **301 vers /services/site-vitrine** (NO-GO, voir écartés). Ces trois 301 sont des actions techniques (repo web-agency), à grouper dans la PR du premier refresh de novembre — elles ne consomment pas de créneau.
- **Information gain** : Kaelix est son propre client. Un sujet sans first-party mobilisable est flagué « à alimenter » et listé en §2 ; la liste est traitée par Axel et Mickael, jamais sollicitée (invariant 14 — ici sans objet, mais la discipline reste).
- **Zéro-clic** : chaque ligne porte le verdict du serp-analyst ; les sujets à zéro-clic fort (/tarifs, guide prix) n'entrent qu'avec l'angle qui force le clic (coût total sur 3 ans, propriété du code). Le **scroll n'est vérifiable par aucun outil** : le `scroll-check chrome` se déroule en session principale à l'étape 3 de chaque `/research`, avant production — un scroll disqualifiant fait glisser le sujet, pas produire.

---

## 1. Clusters

### Cluster A — Positionnement & prix (la famille TPE/PME)

| | |
|---|---|
| **Page pilier** | `/` (accueil) |
| **Statut du pilier** | existante, à refresh (libre : 25/04/2026) |
| **Objectif SEO** | faire indexer puis classer l'accueil sur la **famille** « site internet TPE/PME » (site internet pme 50 · creation site internet pme 36 · site internet tpe 10 · création site internet tpe 10 — famille ~185/mois, KVI 3-17), puis pousser /tarifs sur « prix site vitrine » (480) ; horizon J90 avril 2027 |
| **Mot-clé pilier** | famille « site internet TPE/PME » (title/H1 portent la famille, pas un mot-clé isolé — « création site internet TPE PME » n'existe pas chez Haloscan) |
| **Persona dominant** | P2 (P1 secondaire) |

**Sujets rattachés** :
- [ ] 11/2026 — refresh accueil (ligne 1)
- [ ] 01/2027 — refresh /tarifs « ce que ça coûte vraiment sur 3 ans » (ligne 5)
- [ ] 04/2027 — free tool simulateur prix site internet (ligne 11) → maille vers /tarifs
- [ ] 04/2027 — guide blog « combien coûte un site internet » (ligne 12) → maille vers le simulateur, **jamais vers /tarifs** (mismatch de format info/transactionnel)
- 301 `/agence-web-tpe-pme` → `/` (technique, PR de novembre)

### Cluster B — Site vitrine & pages métier

| | |
|---|---|
| **Page pilier** | `/services/site-vitrine` |
| **Statut du pilier** | existante, à refresh (J90 : 15/12/2026) |
| **Objectif SEO** | entrer sur « création site vitrine » (500, KVI 27, PAA « comment / étapes ») avec le comparatif par catégories + la preuve Ansquer + le délai 3-5 semaines ; recevoir le maillage des deux pages locales et de la page artisan |
| **Mot-clé pilier** | création site vitrine |
| **Persona dominant** | P2 (P1 via la preuve Ansquer) |

**Sujets rattachés** :
- [ ] 12/2026 — refresh /services/site-vitrine (ligne 4)
- [ ] 03/2027 — refresh /site-vitrine-artisan « création site internet artisan » (ligne 9) — la **seule** page métier du plan (pattern Simplébo « une page par métier » repris avec parcimonie, jamais industrialisé)
- 301 `/developpement-site-sur-mesure` et `/site-web-restaurant` → pilier (technique, PR de novembre)

### Cluster C — Zones réelles (local)

| | |
|---|---|
| **Pages piliers** | `/agence-web-montpellier` (existante, J90 : 06/12/2026) · `/agence-web-val-d-oise` (à créer ; 301 depuis `/agence-web-paris`) |
| **Statut** | 1 refresh + 1 création — **une page par zone, pas une par ville** (§5 décision 1) |
| **Objectif SEO** | Montpellier : « agence web montpellier » (833, KVI 19) + « création site internet montpellier » (300, KVI 8), SERP d'agences comparables (DVI 20-30) → viser la page 1 à J90 ; Val-d'Oise : « création site internet 95 » (200, KVI 5) + « agence web 95 » (79, KVI 10), le leader local plafonne à 89 visites/mois → place prenable |
| **Persona dominant** | P1 (P2 en tableau) |
| **Prérequis parallèle** | la fiche Google Business « zone desservie » (to-do #2 : SIRET + horaires) pour le pack local — **prérequis parallèle, pas bloquant** pour les pages |

**Sujets rattachés** :
- [ ] 12/2026 — refresh /agence-web-montpellier (ligne 3) — absorbe « création site e-commerce montpellier » (28, featured snippet) en section, pas en page
- [ ] 01/2027 — création /agence-web-val-d-oise (ligne 6) — ⚠️ la SERP du 95 vend du « sans abonnement » : le modèle 80 €/mois se justifie par le coût total sur 3 ans
- Les deux pages maillent vers /services/site-vitrine (cluster B) et /services/seo-performance

### Cluster D — Comparaison & choix (la phase P2)

| | |
|---|---|
| **Page pilier** | page pivot « site en self-service ou agence : le vrai coût sur 3 ans » — réécriture de `/alternative-wordpress-performance` (libre : 25/04/2026) ; URL à trancher au `/research` (garder l'URL = zéro risque ; nouveau slug sans « wordpress » + 301 = cohérence catégorielle) |
| **Statut du pilier** | existante, à refresh-réécriture complète |
| **Objectif SEO** | capter sans nommer les intentions « alternative wix » (90), « solocal avis » (600), « simplebo tarifs » (110), « boutique en ligne abonnement » via la tête « site internet abonnement » (20, KVI 11, CPC 3,86 €) — `pari-émergent` assumé ; colonne « freelance » pour absorber « agence web ou freelance » en attendant son satellite |
| **Mot-clé pilier** | site internet abonnement (+ creation site internet abonnement 10) |
| **Persona dominant** | P2 |

**Sujets rattachés** :
- [ ] 02/2027 — réécriture page pivot (ligne 8)
- [ ] réserve — satellite blog « agence web ou freelance : la mauvaise question » (famille ~60/mois, KVI 13, SERP 100 % prenable) — **hors volume 6 mois**, reporté à la révision de janvier (ligne 14)

### Cluster E — Refonte (la douleur P3 et P1)

| | |
|---|---|
| **Page pilier** | page « refonte site internet » — à créer (URL proposée `/refonte-site-internet`) |
| **Statut du pilier** | à créer |
| **Objectif SEO** | « refonte site internet » (800, KVI 17, CPC 12,9 €) en absorbant « refaire site internet » (600 — même SERP, Google réécrit « refaire » en « refonte » : title/H2 « réparer ou refaire ? »), « refonte site wordpress » (90, KVI 7) et « refonte site internet prix » (110) ; section « WordPress lent, cassé ou plus maintenu » (absorbe « site wordpress lent », écarté comme page) |
| **Mot-clé pilier** | refonte site internet |
| **Persona dominant** | P3 (P1 secondaire) |

**Sujets rattachés** :
- [ ] 03/2027 — création page refonte (ligne 10)
- [ ] réserve — satellite blog « refaire son site sans perdre son référencement : la checklist TPE » (« refonte seo » 320, KVI 7, SERP disjointe de la page refonte : 0 URL commune) — **hors volume 6 mois**, reporté à la révision de janvier (ligne 13) ; la page refonte n'en garde qu'un paragraphe + lien
- `/audit-gratuit` (cluster G) est la capture naturelle du cluster

### Cluster F — E-commerce (cible commerciale prioritaire de l'opérateur)

| | |
|---|---|
| **Page pilier** | `/services/boutique-en-ligne` |
| **Statut du pilier** | existante, à refresh (J90 : 10/01/2027) |
| **Objectif SEO** | repositionner la page sur l'intention « faire faire » : « agence création boutique en ligne » (40, KVI 14, CPC 17,66 €) + famille « agence web boutique en ligne » (20, 0 AIO), « creation site internet boutique en ligne » (20), « cout creation site e commerce » (20) ; angle « pour commerçants, artisans et producteurs — 150 € HT/mois tout compris, on gère la technique ». Toute la famille **prix** e-commerce (site e commerce prix 210 · cout site e commerce 90…) est informationnelle à zéro-clic fort → section e-commerce du guide prix (ligne 12), jamais une page |
| **Mot-clé pilier** | agence création boutique en ligne |
| **Persona dominant** | P1 (commerçant/artisan qui vend déjà des produits) |
| **Signal d'alerte** | aucune requête « boutique en ligne + artisan/commerçant/TPE » n'a de volume Haloscan, et « boutique en ligne artisan » est 100 % B2C : le cluster n'a **qu'un pilier** et pas de satellite viable tant que la GSC ne montre pas d'impressions e-commerce — à ré-examiner à la révision de janvier avec les premières données |

**Sujets rattachés** :
- [ ] 02/2027 — refresh /services/boutique-en-ligne (ligne 7)
- section « marketplace ou boutique à soi » dans le guide prix (ligne 12) ; lien depuis /site-vitrine-artisan (« vous vendez des produits ? »)

### Cluster G — Free tools (capture transversale)

| | |
|---|---|
| **Pages** | `/audit-gratuit` (existante, libre : 25/04) · simulateur prix site internet (à créer, URL proposée `/outils/simulateur-prix-site-internet`) |
| **Statut** | 1 refresh + 1 création |
| **Objectif SEO** | /audit-gratuit : « audit site internet gratuit » (200, KVI 33 — « audit seo gratuit » 600 écarté : SERP 100 % outils instantanés) ; simulateur : « simulateur prix site internet » (20, KVI 4, SERP 100 % pages outil, disjointe du guide) — la valeur est la capture et le maillage, pas le trafic |
| **Mot-clé** | audit site internet gratuit · simulateur prix site internet |
| **Persona dominant** | P3 (audit) · P2 (simulateur) |

**Sujets rattachés** :
- [ ] 11/2026 — refresh /audit-gratuit (ligne 2) — formulaire allégé (URL + e-mail), extrait d'audit réel, 72 h assumées
- [ ] 04/2027 — création simulateur (ligne 11) — résultat sans coordonnées, e-mail optionnel pour le détail (invariant 10) ; **se produit avant le guide** qui s'y adosse

### Hors plan 6 mois — Cluster H (réserve) : service SEO

| | |
|---|---|
| **Page pilier** | `/services/seo-performance` (existante, J90 : 15/01/2027) |
| **Objectif** | refresh sur « agence seo pme » (50, KVI 1, CPC 22 € — 8 pages service d'agences dans le top 10, des DVI 1-5 en page 1-3) ; secondaires « seo pour pme » 70, « consultant seo pme » 30, section « combien coûte un référencement local » (absorbe « tarif référencement local » 10). La famille « référencement local prix » est inconnue de Haloscan. **Reporté** à la révision de janvier : la page vient d'être refondue (v6) et le volume 6 mois est plein ; candidate n°1 si un créneau se libère (ligne 15) |

---

## 2. Tableau des sujets

<!-- Mois = production ; la publication suit le gate. ZC = verdict zéro-clic du serp-analyst (fort / partiel / faible).
     Toutes les lignes : scroll-check chrome à dérouler au /research (aucun outil ne le vérifie). -->

| # | Mois | Type | Sujet (titre provisoire) | Mot-clé principal | Intention | Persona | Typologie | Cluster | Capture | First-party à mobiliser | Statut |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 11/2026 | refresh | **Accueil** — « Le site internet de votre TPE/PME, codé à la main, dès 80 € HT/mois » : title/H1 portent la famille TPE/PME, preuve Ansquer en premier écran, « dès 199 € » pour le SEO. Même PR : 301 `/agence-web-tpe-pme` → `/` | famille « site internet TPE/PME » (50 / ~185, KVI 3-17) — ZC partiel (AIO sur les variantes « création ») | commerciale mixte | P2 | evergreen | A | réservation 30 min (`contact_rendez_vous`) | Ansquer impressions ×2,8 / clics ×2,2 (GSC, 28 j) ; Lighthouse 100/100/100 ; livraison 3-5 semaines ; deux cousins fondateurs | prévu |
| 2 | 11/2026 | refresh | **/audit-gratuit** — « Audit gratuit de votre site internet : ce qu'on regarde, ce que vous recevez sous 72 h » : formulaire allégé (URL + e-mail), un extrait d'audit réel, sans promesse de position | audit site internet gratuit (200, KVI 33) — ZC partiel (AIO nomme des outils, ne lit rien) | transactionnelle-commerciale | P3 | evergreen | G | formulaire audit (`contact_formulaire` audit) | méthode d'audit maison (ce repo : weekly, rapports, gates) · ⚠️ **à alimenter : un extrait d'audit réel anonymisé** (Axel/Mickael) | prévu |
| 3 | 12/2026 (≥ 06/12) | refresh | **/agence-web-montpellier** — « Agence web à Montpellier : un site codé à la main par un fondateur sur place » : Mickael à Montpellier, cas Portaya (client montpelliérain), communes de la métropole, section « boutique en ligne à Montpellier » (absorbe « création site e-commerce montpellier » 28) | agence web montpellier (833, KVI 19) + création site internet montpellier (300, KVI 8) — ZC faible à partiel (pack local) | commerciale-locale | P1 | evergreen | C | réservation 30 min + téléphone (`contact_telephone`) | Mickael sur place ; **Portaya** (porte d'intérieur italienne, Montpellier, 300 modèles, devis en ligne — référence publiée) ; NAP `nap.md` (tél, e-mail, pas d'adresse) | prévu |
| 4 | 12/2026 (≥ 15/12) | refresh | **/services/site-vitrine** — « Création de site vitrine : ce qu'une agence vous livre, en 3 à 5 semaines » : comparatif par catégories (plateforme / freelance / agence classique / abonnement), étapes, preuve Ansquer avant/après ; reçoit les liens des pages locales et artisan. Même PR : 301 `/developpement-site-sur-mesure` et `/site-web-restaurant` → cette page | création site vitrine (500, KVI 27) — ZC partiel (PAA « comment / étapes ») | commerciale mixte | P2 | evergreen | B | audit gratuit + réservation | Ansquer avant/après (captures publiées) ; 3-5 semaines ; 11→1 CSS, 12→9 scripts, zéro jQuery | prévu |
| 5 | 01/2027 (≥ 15/01) | refresh | **/tarifs** — « Ce qu'un site coûte vraiment sur 3 ans » : tableau plateforme / freelance WordPress / agence WordPress / abonnement, propriété du code, grille v6 « dès 199 € » ; title ≤ 60 car., meta ≤ 155 (audit A4) ; lien vers le simulateur dès qu'il existe | prix site vitrine (480, KVI 15) — **ZC FORT** (AIO + snippets donnent les fourchettes) → l'angle qui force le clic = coût total 3 ans + propriété du code | commerciale (fourchette avant devis) | P2 | evergreen | A | réservation 30 min ; simulateur (à partir d'avril) | trou de marché 150-500 €/mois (reformulé) ; grille v6 ; Lighthouse Ansquer · ⚠️ **à alimenter : coûts réels sourcés d'un site WordPress sur 3 ans** (hébergement, extensions, maintenance, refonte) — données publiques à compiler ou cas client chiffré | prévu |
| 6 | 01/2027 | création | **/agence-web-val-d-oise** — « Agence web dans le Val-d'Oise : votre site codé à la main, par un fondateur du 95 » : Axel sur place, villes du 95 citées (pas de pages-villes), justification du modèle 80 €/mois face au « sans abonnement » de la SERP ; 301 `/agence-web-paris` → cette page dans la même PR ; LocalBusiness interdit (pas d'adresse) → Organization + `areaServed` | création site internet 95 (200, KVI 5) + agence web 95 (79, KVI 10) — **ZC faible** (0 AIO) | commerciale-locale | P1 | evergreen | C | réservation 30 min + téléphone | Axel en Val-d'Oise ; Ansquer (Gennevilliers, Île-de-France — client francilien, pas 95) · ⚠️ **à alimenter : un client ou un chantier dans le 95** (sinon la page s'appuie sur Ansquer « à 20 min » et sur la présence d'Axel — angle plus faible, assumé) | prévu |
| 7 | 02/2027 (≥ 10/01) | refresh | **/services/boutique-en-ligne** — « Agence de création de boutique en ligne pour commerçants et artisans : 150 € HT/mois tout compris, on gère la technique » : tableau « vous / nous » (produits, paiement, livraison, CGV, hébergement, maintenance), marketplace vs boutique à soi (commissions sourcées), code qui vous appartient | agence création boutique en ligne (40, KVI 14, CPC 17,66 €) + agence web boutique en ligne (20) — ZC partiel (AIO cite des annuaires, aucun prix) | commerciale « faire faire » | P1 | evergreen | F | réservation 30 min | offre boutique 150 €/mois, 12 mois ; Portaya (catalogue 300 modèles + devis en ligne — un catalogue, pas une boutique : à présenter honnêtement) · ⚠️ **à alimenter : un client e-commerce livré** (c'est la cible commerciale prioritaire — la page sera réécrite au premier cas) | prévu |
| 8 | 02/2027 | refresh (réécriture) | **Page pivot comparaison** — « Site en self-service, freelance ou agence : le vrai coût sur 3 ans » (réécriture de `/alternative-wordpress-performance`, URL à trancher au /research) : 4 catégories, continuité, propriété du code, coût de sortie ; **jamais de nom** (ni Wix, ni Solocal, ni Simplébo, ni techno) | site internet abonnement (20, KVI 11) — `pari-émergent` ; récupère sans nommer « solocal avis » 600, « alternative wix » 90, « simplebo tarifs » 110 — ZC partiel (AIO 4 liens) | commerciale comparative | P2 | evergreen | D | simulateur (avril) ; réservation en attendant | trou de marché 150-500 € ; Ansquer Lighthouse + avant/après ; « le code vous appartient » (CGV) ; système d'exploitation marketing de l'agence (« on s'applique ce qu'on vend ») | prévu |
| 9 | 03/2027 | refresh | **/site-vitrine-artisan** — « Site internet pour artisan : être trouvé dans sa zone, montrer ses chantiers, recevoir des demandes de devis » : galerie avant/après, devis en ligne, SEO local inclus, lien « vous vendez des produits ? » vers la boutique | création site internet artisan (140, KVI 12) + site internet artisan (100, KVI 1) — ZC ⚠️ non vérifiable par outil (AIO signalée, snippets = prix unitaires 290-1 600 €) | commerciale + locale | P1 | evergreen | B | audit gratuit | ⚠️ **à alimenter : un client artisan** (aucun dans §7 — Ansquer est transporteur, Portaya commerçant) ; à défaut, ré-angler sur « métiers de terrain » avec Ansquer, ou glisser (règle de dégradation) | prévu |
| 10 | 03/2027 | création | **Page refonte** — « Refonte de site internet : réparer ou refaire ? » (`/refonte-site-internet`) : 6 signes qu'il faut refaire, WordPress lent / cassé / plus maintenu, changer de prestataire sans perdre domaine ni positions (paragraphe + lien vers le futur article), prix TPE en abonnement vs devis unique | refonte site internet (800, KVI 17, CPC 12,9 €) — absorbe refaire site internet 600, refonte site wordpress 90, refonte site internet prix 110 — ZC partiel (AIO = définition/étapes, pas de prix TPE) | informationnelle-commerciale | P3 | guide | E | audit gratuit | **Ansquer = une refonte** : avant/après, impressions ×2,8 / clics ×2,2 en 1 mois, 11→1 CSS ; livraison 3-5 semaines | prévu |
| 11 | 04/2027 | création (free tool) | **Simulateur prix site internet** — « Le coût réel de votre site sur 3 ans, selon le modèle » (`/outils/simulateur-prix-site-internet`) : 4 modèles paramétrables, résultat immédiat sans coordonnées, e-mail optionnel pour le détail, sources affichées ; title sans « prix site vitrine » ni « tarif » (anti-collision /tarifs) | simulateur prix site internet (20, KVI 4 ; famille ~130) — ZC partiel (l'AIO ne peut pas simuler) | commerciale-outil | P2 | evergreen | G (→ A) | e-mail optionnel (détail du chiffrage) ; CTA réservation | grille v6 (80 / 150 / dès 199 €) ; trou de marché · ⚠️ **à alimenter : les mêmes coûts WordPress sourcés que la ligne 5** (un seul jeu de données pour /tarifs, le simulateur et le guide) | prévu |
| 12 | 04/2027 | création (blog) | **Guide « Combien coûte un site internet en 2027 ? »** — coût total de possession sur 3-5 ans, dette technique = SEO plus cher, section e-commerce (« combien coûte une boutique en ligne », marketplace vs boutique), section « pour une TPE » ; CTA vers le simulateur, **jamais vers /tarifs** | combien coute un site internet (400, KVI 29) + creation site internet prix (400, même SERP) — **ZC FORT** (AIO + fourchettes partout) → l'angle = coût total + ce que les fourchettes cachent | informationnelle | P2 | guide | A | simulateur (ligne 11) → e-mail | Ansquer Lighthouse + trafic ; grille v6 ; coûts WordPress sourcés (ligne 5) ; auteur Axel | prévu |
| 13 | réserve | création (blog) | « Refaire son site sans perdre son référencement : la checklist TPE en 7 points, et ce qu'exiger de votre prestataire » — scénario changement d'agence/domaine, plan de redirections sans jargon | refonte seo (320, KVI 7) — SERP disjointe de la page refonte (0 URL commune) — ZC partiel | informationnelle | P3 | guide | E | audit gratuit ou checklist PDF (e-mail) | Ansquer (refonte réussie, GSC) | **reporté** — hors volume 6 mois ; candidat prioritaire à la révision du 18/01/2027 ou si un créneau se libère |
| 14 | réserve | création (blog) | « Agence web ou freelance : la mauvaise question » — 3 catégories (freelance / agence classique / agence à abonnement), continuité, propriété du code, coût 3 ans ; aucune fourchette de prix (renvoi simulateur) | agence web ou freelance (famille ~60, KVI 13) — SERP 100 % prenable (DVI 1-39, 0 DIY) — ZC partiel | informationnelle-commerciale | P2 | guide | D | simulateur ; réservation | Ansquer ; deux fondateurs (« la réactivité d'un freelance, la continuité d'une structure ») | **reporté** — hors volume 6 mois ; la page pivot (ligne 8) porte une colonne « freelance » en attendant |
| 15 | réserve | refresh | **/services/seo-performance** — « Agence SEO pour TPE et PME : cinq formules dès 199 € HT/mois, Local ou National, avec ou sans fiche Google » + ce qu'on fait chaque mois + section « combien coûte un référencement local » | agence seo pme (50, KVI 1, CPC 22 €) ; secondaires seo pour pme 70, consultant seo pme 30, tarif référencement local 10 — ZC partiel | commerciale | P2 | evergreen | H | réservation 30 min | Ansquer (impressions ×2,8 — un client SEO réel) ; grille v6 ; système d'exploitation marketing | **reporté** — J90 le 15/01/2027 et volume plein ; n°1 si un créneau se libère |

### Sujets écartés

| Mot-clé / sujet | Motif d'écartement | Réexaminable ? |
|---|---|---|
| **site internet restaurant** (100, KVI 20 ; famille ~230) — page `/site-web-restaurant` | **Décision opérateur du 17/10 : la restauration n'est pas la cible, l'e-commerce l'est.** Confirmé par la SERP : builders spécialisés restauration (réservation + menu + QR à 25-99 €/mois) et listicles d'exemples ; prestataires comparables en pos. 10-50 ; aucune référence CHR dans le first-party → information gain impossible. **Action : 301 → /services/site-vitrine** (PR de décembre, ligne 4) | oui — si un client restaurateur signe (page métier appuyée sur son cas, angle « votre site vous appartient, pas à la plateforme de réservation ») |
| refaire site internet (600, KVI 17) | même SERP que « refonte site internet » (Google réécrit « refaire » → « refonte », 10/10 titres « refonte ») → **absorbé** par la page refonte (title/H2 « réparer ou refaire ? », H2 « 6 signes ») ; un satellite cannibaliserait | non (absorbé) |
| boutique en ligne artisan (vol. NA, KVI 17) et toute la famille « boutique/e-commerce + artisan / commerçant / TPE / proximité » | SERP 100 % B2C (acheteurs d'artisanat : marketplaces, e-shops) ; variantes B2B inconnues de Haloscan ; une 2e page « artisan » cannibaliserait /site-vitrine-artisan → l'angle passe dans le **refresh** de /services/boutique-en-ligne (ligne 7) | oui — à la révision de janvier si la GSC montre des impressions e-commerce |
| création boutique en ligne prix · site e commerce prix (210, KVI 28) · cout site e commerce (90) · prix boutique en ligne (50) · combien coute un site e commerce (50) · tarif site e commerce (30) | famille **prix e-commerce** : SERP de guides (francenum.gouv, Chronopost, Shopify, Wix, Ionos), zéro-clic fort, mismatch de format pour une page service et collision frontale avec le guide « combien coûte un site internet » et /tarifs → **section e-commerce du guide** (ligne 12) + FAQ prix sur la page boutique | non (absorbé) |
| boutique en ligne abonnement | `KEYWORD_UNKNOWN` → une ligne du tableau de la page pivot (ligne 8), pas une page | non |
| e commerce artisan (vol. NA, KVI 23) | seule SERP mixte B2B atteignable de la famille, mais volume invisible et pos. 1 parasite (service-public) → pari trop incertain pour une page ; se capte par le refresh boutique | oui — avec données GSC |
| créateur site e commerce (720, KVI 29) · vendre ses créations en ligne gratuit (210, KVI 22) | DIY + AIO / micro-créateurs sans PMF → hors ICP | non |
| référencement local prix · tarif référencement local (10) · prestation référencement local (20, KVI 24) · agence seo local (5, KVI 27) · référencement local artisan (NA) | tête inconnue de Haloscan ; famille à 5-20/mois dont les SERP sont des guides, des géants (Eskimoz, Semji) ou des vidéos → **section « combien coûte un référencement local »** de la page SEO (ligne 15), jamais une page | non (absorbé) |
| prix référencement google (390, KVI 18) | informationnel SEO/SEA mélangé → éventuel satellite blog du cluster H, après le refresh de la page SEO | oui — révision de janvier |
| agence web freelance (30, KVI 0) | SERP mixte emploi (Indeed) → ne pas viser ; la famille « agence web ou freelance » se vise par la ligne 14 | non |
| estimation site web · estimer son site internet · combien vaut mon site | intention **valorisation** d'un site existant (dotmarket, storybee) — bruit de la SERP du simulateur, à exclure du titre et du contenu de la ligne 11 | non |
| agence seo montpellier (100, KVI 25) | déclinaison de la page Montpellier (section), pas de la page SEO ni d'une page neuve | non (absorbé, ligne 3) |
| création site internet (400) · agence web (4 800) · création site internet TPE PME · audit seo gratuit (600) · solocal avis (600) · alternative wix (90) · simplebo tarifs (110) · site wordpress lent (20) · agence web ile de france (210) | écartés et motivés au ciblage du 17/10 — **brief §5, tableau « Sujets écartés »** (SERP DIY/annuaires, interdit §3 nominatif, scroll disqualifiant, zéro-clic fort, région sans page) ; ne pas re-proposer sans nouvelle donnée | voir brief §5 |

### First-party manquants — à alimenter (Kaelix est son propre client : liste pour Axel et Mickael, jamais sollicitée)

| Sujet concerné | Élément demandé | Demandé le | Reçu le |
|---|---|---|---|
| ligne 2 (/audit-gratuit) | un extrait d'audit réel, anonymisé (ce que reçoit concrètement le prospect sous 72 h) | 2026-10-17 (plan) | |
| lignes 5, 11, 12 (/tarifs, simulateur, guide prix) | **un seul jeu de données sourcées** « ce que coûte un site WordPress sur 3 ans » (hébergement, thème/extensions, maintenance, refonte à 3-4 ans) — sources publiques ou un cas client chiffré (ce que payait Ansquer avant ?) | 2026-10-17 (plan) | |
| ligne 6 (Val-d'Oise) | un client ou un chantier dans le 95 (sinon : présence d'Axel + Ansquer « à 20 minutes », angle assumé plus faible) | 2026-10-17 (plan) | |
| ligne 7 (boutique en ligne) | **un client e-commerce livré** — c'est la cible commerciale prioritaire ; la page se ré-écrit au premier cas (avant/après ventes, qui gère quoi) | 2026-10-17 (plan) | |
| ligne 9 (artisan) | un client artisan (chantiers avant/après, demandes de devis reçues) — à défaut, la ligne se ré-angle « métiers de terrain » ou glisse | 2026-10-17 (plan) | |
| toutes | verbatims des fondateurs (brief §3 « Verbatims disponibles : à alimenter ») — une `ExpertQuote` par contenu, jamais inventée (invariant 11) | 2026-10-17 (plan) | |

---

## 3. Journal des révisions

| Date | Ce qui a changé | Pourquoi | Statut du plan |
|---|---|---|---|
| 2026-10-17 | version initiale — 12 sujets (7 refreshes « à zéro », 5 créations) + 3 en réserve ; 8 nouveaux mots-clés qualifiés par serp-analyst (calculateur, restaurant, refonte seo, agence ou freelance, référencement local prix, refaire site internet, prix boutique, boutique artisan), 10 sujets repris du ciblage §5 du 17/10 sans ré-analyse | premier plan après onboarding (16/10), ciblage (17/10), offre v6 et audit (17/10) ; décisions opérateur : restaurant écarté, e-commerce prioritaire, blog reparti de zéro, zéro nom technique | 🕓 brouillon |
