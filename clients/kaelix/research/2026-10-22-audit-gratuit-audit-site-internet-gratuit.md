# Brief de production — Refresh de `/audit-gratuit` : « Un fondateur lit votre site, rapport sous 72 h, voici à quoi il ressemble »

| | |
|---|---|
| **Client** | `kaelix` (l'agence, cliente d'elle-même) |
| **Sujet du plan** | 11/2026 n°2 — **ligne 2**, cluster G (free tools, capture transversale) — persona **P3** (repreneur / dirigeant dont le site existant déçoit), P1 secondaire |
| **Typologie** | evergreen — **page business de capture** (formulaire), pas un article |
| **Page cible** | `/audit-gratuit` (existante, créée le 25/04/2026 — libre de la règle des 90 j ; indexée le 17/10) |
| **Recherche faite le** | 2026-10-22 (`/research`, 5 `serp-analyst` en parallèle + scroll-check chrome ×2 en session principale + KPI Haloscan par API directe) |
| **Statut** | 🕓 **en attente de GO opérateur** — 🛑 aucun `/refresh` sans GO |

> ⚠️ **Conditions de l'analyse.** Le serveur MCP Haloscan n'a pas chargé (timeout, comme le 20/10) : les 5 `serp-analyst` ont tourné **sans KPI du jour** (relevé du 17/10) et ont lu les SERP **par procuration** (WebSearch, Bing, DuckDuckGo — Google renvoie un mur de consentement). Deux compléments en session principale corrigent le tir : (1) **KPI datés du 22/10 par `scripts/haloscan-fetch.mjs bulk`** (API directe, §1.29 — le champ `kvi` du bulk est bien celui du MCP, contrôle du 22/10 sur 7 mots-clés) ; (2) **deux SERP Google réelles relevées en Chrome** (annexe G). Le verdict ci-dessous repose sur ces deux relevés directs ; les mini-briefs servent pour l'intention, le format et le gap.

---

## 1. Verdict

**GO — REFRESH en RÉ-ANGLE de `/audit-gratuit`, page de capture à trafic organique résiduel assumé.** La SERP de la tête est une SERP d'outils instantanés où l'organique passe après 4 publicités et une AI Overview ; aucune page d'agence à audit humain n'y figure dans le top 10. On ne vise pas le trafic, on vise la **conversion de ceux qui arrivent** (depuis l'accueil, le pied de page, les pages refonte/artisan/site-vitrine, les liens privés des teasers envoyés aux prospects) et la **crédibilité** de l'offre. C'est la lecture du plan (cluster G : « la valeur est la capture et le maillage, pas le trafic »), confirmée.

### KPI Haloscan — bulk du **2026-10-22** (API directe)

| Mot-clé | Volume | KVI | CPC | Rôle sur la page |
|---|---|---|---|---|
| **audit site internet gratuit** | 200 | 33 | 7,31 € | **tête** (title, H1) — SERP d'outils, scroll disqualifiant (annexe G) : tête sémantique, pas objectif de trafic |
| audit site web gratuit | 200 | 33 | 4,11 € | secondaire lexical (une occurrence H2/FAQ) — même famille, même SERP d'outils |
| analyse site internet gratuit | 170 | 33 | 3,49 € | secondaire faible (une phrase « pas une analyse automatique ») — tire vers la web analytics |
| audit gratuit site internet | 19 | 18 | 6,31 € | variante d'ordre des mots — **couverte par le title proposé** |
| diagnostic site internet | 20 | 29 | 6,16 € | secondaire (H2 « diagnostic humain ») — SERP relevée en Chrome : même profil outils + AIO (annexe G) |
| diagnostic site internet gratuit | NA | NA | — | inconnu de Haloscan — vocabulaire du corps, jamais du title |
| audit site internet (sans gratuit) | 5 | 23 | 15,56 € | secondaire — intention mixte guides/agences, les agences y classent **avec leur page « audit gratuit »** |
| audit site vitrine | NA | 7 | — | longue traîne métier — une FAQ (« site vitrine, boutique : même audit ? ») |
| audit seo gratuit | 600 | **1** (17/10 : 10) | 3,81 € | **écarté** le 17/10 (SERP 100 % outils) — le KVI tombé à 1 ne change rien : la difficulté décrit la concurrence organique, pas la part de clics qui reste (§1.28) ; « SEO » reste **hors du title** |

- **Intention observée (Google FR réel, 22/10)** : « trouver quelque chose qui analyse mon site », outil d'abord. Top 10 réel de la tête : SEOptimer, Semrush ×2, Alyze, Get Ranking, Cocolyze, Ubersuggest, SEO Tester Online (outils instantanés), HubSpot (listicle d'outils), BDC.ca (rapport automatique). **0 agence à audit humain** dans l'organique ; les agences sont **dans les pubs** (Agence IDEO « score en 90 s + analyse humaine », Rémi Pradère « 3 réponses sous 48 h », Solocal). Le marché de l'audit humain gratuit s'achète en Ads, il ne se gagne pas en organique sur cette requête.
- **Scroll (annexe G) : disqualifiant sur les deux requêtes relevées** — 4 publicités, puis 1 organique (outil), puis l'AI Overview (liste d'outils), puis 4 PAA, puis le reste. Le trafic organique est résiduel quel que soit le classement. **Assumé** : la page n'a pas d'objectif de position, elle a un objectif de conversion.
- **Zéro-clic : fort.** L'AI Overview répond directement (« plusieurs outils gratuits permettent… SEOptimer, Semrush, Alyze, Get-Ranking »). Ce qu'elle **ne donne pas**, et qui est l'angle qui force le clic : **qui lit le résultat, ce qu'un outil ne voit pas, à quoi ressemble le livrable, par quoi commencer, ce que ça coûte ensuite.**
- **Jouabilité : hors d'atteinte sur la tête** (KVI 33, géants et outils, site à 6 pages indexées, 1 impression GSC / 7 j, 0 lien). Au mieux **6-12 mois** sur « audit gratuit site internet » (19, KVI 18) et la longue traîne métier. Pas de requête annexe qui vaille une page : la famille entière est une SERP d'outils. **L'autorité se construira par les pages business (accueil, services, locales) qui maillent vers celle-ci**, pas l'inverse.
- **Pas de pari-émergent.**

## 2. Anti-cannibalisation (3 fronts)

| Front | Contrôle | Résultat |
|---|---|---|
| **Haloscan** (positions du domaine) | API directe disponible, mais sans objet : `SITE_NOT_FOUND` les 17 et 19/10, aucune position connue | rien à cannibaliser |
| **`tracking.md`** (publié) | lu — une ligne : accueil publié le 22/10 (famille TPE/PME) | intentions disjointes |
| **`content-plan.md`** (15 lignes) | lu, chaque ligne confrontée | **aucun conflit** : la ligne 2 est ce contenu ; ligne 15 (`/services/seo-performance`, « agence seo pme ») = achat d'un service, intention distincte → garde-fous croisés : **« audit SEO » hors du title de `/audit-gratuit`** (SERP d'outils écartée) et **« audit » hors du title de la page SEO** ; lignes 5/11/12 (prix) : la FAQ « ce que ça coûte ensuite » renvoie vers `/tarifs` sans chiffrer ; ligne 10 (refonte) : le pont « corriger ou refaire ? » renvoie vers la future page refonte — **une phrase et un lien, pas une section** |
| **Un guide « comment auditer son site soi-même »** | évoqué par deux mini-briefs | **pas à planifier** : DIY, zéro-clic fort, hors persona P3 qui veut faire faire |

Rappel du gisement 4-20 : vide par construction (baseline GSC attendue mi-novembre). Refresh « à zéro », conforme à la règle d'or.

## 3. Content gap

Ce que le top 10 réel couvre : un **score instantané** sur 100 (SEOptimer, Semrush, Get Ranking, Cocolyze), des **listes d'outils** (HubSpot, AIO), un **rapport automatique** par e-mail (BDC.ca / France Num), des **checklists DIY** (guides). Côté pubs : « score en 90 s », « 3 réponses sous 48 h ».

Ce que **personne** ne donne, sur les cinq mini-briefs et les deux SERP réelles :

- **À quoi ressemble l'audit livré.** Tout est promesse (« rapport », « plan d'action ») ; aucune page ne montre un extrait réel. C'est le trou le plus net, et le first-party existe (annexe §4).
- **Ce qu'un outil ne voit pas** : la pertinence du contenu pour la cible, les incohérences entre pages (deux téléphones, deux délais de livraison), les moyens de paiement absents avant le panier, la fiche Google au mauvais nom. Les constats les plus vendeurs de l'audit Cadres Concept sont précisément ceux qu'**aucune API ne donne** (`prospects/README.md`).
- **La lecture pour un dirigeant** : par quoi commencer, ce que ça coûte en clients perdus, ce que ça coûte à corriger — sans jargon. Les outils rendent 140 erreurs ; personne ne les trie.
- **L'honnêteté du périmètre** : contrepartie (démarchage ? données ?), délai humain, ce que l'audit gratuit **ne** couvre **pas**. Seule Afalence (pub) assume un délai (48 h).

## 4. Information gain — stock first-party (zéro sollicitation : suffisant, rien à collecter)

| Élément | Statut de véracité | Emploi prévu |
|---|---|---|
| **Grille d'audit maison** — 4 piliers (Site & vitesse 30 % · Visibilité Google 30 % · Fiche Google 20 % · Parcours d'achat/contact 20 %), 26 critères notés 100/50/0 (`docs/grille-audit-gratuit.md`, 21/10) | ✅ méthode interne, publiable **au niveau des piliers et des exemples de critères** (pas la grille complète ni la pondération : doctrine du teaser, « le détail des piliers est réservé à l'audit complet ») | H2 « ce qu'un fondateur regarde » — 4 piliers, 2-3 critères parlants par pilier (vitesse mobile mesurée, nom de la fiche, moyens de paiement annoncés, cohérence des coordonnées) |
| **Teaser Cadres Concept** (premier audit réel, 21/10 : score 51/100, image principale à 9,8 s contre 3,0 s chez le concurrent, présent sur 8 recherches sur 10 mais 13e-23e, fiche Google au mauvais nom et mauvaise catégorie, plan en 3 étapes) — `prospects/cadres-concept/audit.json` + `audit-teaser.html` | ⚠️ **prospect, pas client, non référencé publiquement → anonymisation obligatoire (brief §3)** : « une boutique en ligne de décoration, dans le Sud », aucune marque, aucune ville, aucun nom de concurrent, aucun produit identifiable (« tableaux en métal » → « objets de décoration »), chiffres conservés (score, 9,8 s / 3,0 s, 8/10 recherches en page 2). ⚠️ **Décision au GO** : le prospect est en discussion commerciale active — publier l'extrait avant sa réponse, même anonymisé, ou attendre la signature / le refus ? À défaut, l'audit **kaelix.fr du 17/10** (`audits/2026-10-17-tech-audit.md`, publiable sans réserve : « on s'applique ce qu'on vend ») joue le même rôle d'extrait | H2 « voici à quoi ressemble l'audit que vous recevez » — extrait : verdict en une phrase, score, les 3 points (vu → ce que ça coûte → ce qu'on ferait), plan en 3 étapes ; figure = capture du teaser anonymisé |
| **Processus réel** : audit produit à la main en une demi-journée, lu par Axel, présenté en visio ; 72 h ouvrées | ✅ interne, publiable | H2 « ce qui se passe après l'envoi » (existant, resserré) |
| **Ce que l'audit gratuit ne couvre pas** (`prospects/README.md`) : pas de trafic estimé des concurrents (remplacé par la présence/absence de mesure terrain Google), pas de données client, pas de prix dans le teaser | ✅ interne, publiable | H2 « ce que l'audit ne fait pas » — honnêteté = différenciant face aux pubs |
| **Verbatim d'Axel** validé le 20/10 (« On ne vend pas un site, on en prend la charge… ») | ✅ mais **déjà publié sur l'accueil** → ne pas dupliquer | une **nouvelle** `ExpertQuote` en **proposition signalée** dans la PR (invariant 11), thème « ce qu'un outil ne voit pas » — ou aucune citation |
| Cas Ansquer (×2,8 impressions) et Lighthouse 100/100/100 | ✅ publiés | **pas ici** (déjà sur l'accueil et l'étude de cas ; la page audit parle du site du prospect, pas du nôtre) — au plus un lien |

Information gain **acquis** : grille maison + extrait réel + processus + périmètre honnête. Rien à demander.

## 5. Brief éditorial

**Angle** : *Pas un score automatique. Un fondateur lit votre site, vous recevez le rapport sous 72 h — et voici à quoi il ressemble.* Contre-pied frontal de la SERP (outils instantanés, 140 erreurs sans tri) et des pubs (« 90 secondes »). La preuve, c'est l'extrait.

**Format cible** : page de capture courte, **formulaire allégé dans le premier écran**, puis la preuve, puis la méthode, puis l'honnêteté, puis la FAQ. ~600-800 mots visibles (aujourd'hui ≈ 350 hors formulaire). Pas de longueur pour la longueur : la SERP ne la récompense pas et le persona veut agir.

**Auteur affiché** : Axel (c'est lui qui lit les audits — « un fondateur analyse votre site » devient nominatif).

### Title / meta / H1 (propositions — l'opérateur tranche au GO)

| Élément | Aujourd'hui (22/10) | Proposition | Pourquoi |
|---|---|---|---|
| **Title** (≤ 60) | « Demandez un audit gratuit de votre site web \| Kaelix » (51) | **A** « Audit gratuit de votre site internet, lu par un fondateur \| Kaelix » (≈ 61 — ou sans « Kaelix », 52) · **B** « Audit gratuit de site internet : rapport sous 72 h \| Kaelix » (54) | A porte « audit gratuit … site internet » (19/18) et la tête sémantique, et dit le différenciant ; B porte le délai. « site web » reste pour un H2 ; « SEO » absent (écarté) |
| **Meta** (≤ 155) | « Recevez sous 72 h un audit gratuit de votre site : vitesse, référencement, sécurité et lisibilité… Sans engagement. » | « Pas un score automatique : un fondateur de KAELIX lit votre site et vous envoie sous 72 h ouvrées un audit en 4 piliers, avec les 3 points à corriger d'abord. Gratuit, sans démarchage. » (≈ 190 → à couper à 155 : retirer « de KAELIX » et « ouvrées ») | contre-pied explicite de l'AIO ; « sans démarchage » = la contrepartie que personne n'assume |
| **H1** | « Recevez un audit gratuit de votre site » | « Audit gratuit de votre site internet : un fondateur le lit, vous recevez le rapport sous 72 h » | tête + différenciant + délai |

### Plan H2/H3 (ajouts en **gras**)

1. **Héros** — H1 + sous-titre « Ni robot, ni commercial : Axel ou Mickael regarde votre site comme un client, et vous dit par quoi commencer. » + **formulaire allégé en premier écran : URL du site + e-mail** (décision au GO : prénom en option ou non). Bouton « Recevoir mon audit gratuit ». Mention courte sous le bouton : « Gratuit. Sans démarchage. Rapport sous 72 h ouvrées. » Lien secondaire : réserver 30 min.
2. H2 **« Voici à quoi ressemble l'audit que vous recevez »** *(nouvelle — la section qui force le clic et la conversion)* — extrait anonymisé : le verdict en une phrase (« Vos produits sont sur Google. En page 2, là où personne ne va. »), le score, les 3 points en trois colonnes (ce qu'on a vu → ce que ça vous coûte → ce qu'on ferait), le plan en 3 étapes. Figure : capture du teaser anonymisé. Une phrase de contexte : « Boutique en ligne de décoration, audit du 21 octobre 2026, données du site et de Google uniquement. »
3. H2 **« Pas un outil instantané : ce qu'un fondateur regarde »** *(nouvelle)* — les 4 piliers avec 2-3 exemples de critères chacun, dont ceux qu'**aucun outil ne voit** (deux numéros de téléphone selon la page, moyens de paiement annoncés seulement au panier, fiche Google au mauvais nom). Une phrase sur la méthode : mesure Google de la vitesse mobile, 10 recherches testées, fiche lue, parcours fait à la main sur téléphone.
4. H2 « Ce qui se passe après l'envoi » (existant, resserré) — 01 un fondateur lit votre site · 02 rapport sous 72 h ouvrées, en français de dirigeant · 03 un appel de 30 min **si vous le souhaitez** (pas de relance). Retire « pas de bot ni de commercial » redondant avec le héros.
5. H2 **« Ce que l'audit gratuit ne fait pas »** *(nouvelle, courte)* — pas de garantie de position (interdit §3, et différenciant), pas d'estimation du trafic des concurrents, pas de données de votre caisse ou de vos ventes : le détail des 4 piliers et un devis viennent **après l'appel**, si vous le demandez. Aucun prix sur la page (ligne 5 et doctrine du teaser) ; un lien « nos tarifs ».
6. H2 **« Diagnostic, audit, outil en ligne : quelle différence ? »** *(nouvelle, 100-120 mots)* — répond aux PAA (« quel est le meilleur outil gratuit », « comment réaliser un audit de mon site ») et capte la sous-intention « diagnostic » : l'outil mesure, le diagnostic lit, l'audit complet chiffre. Place « site web », « analyse », « diagnostic » une fois chacun.
7. H2 « Questions fréquentes » — 6 paires max (ci-dessous).
8. CTA final — rappel du formulaire (ancre) + réserver 30 min.

### Mots-clés

- **Tête** : audit site internet gratuit (title/H1 via « audit gratuit de votre site internet » ; couvre aussi « audit gratuit site internet » 19/18).
- **Secondaires** (corps, H2, FAQ) : audit site web gratuit · diagnostic site internet · audit site internet · analyse site internet gratuit (une occurrence) · audit site vitrine · audit humain · rapport sous 72 h.
- **À ne pas viser** : audit seo gratuit (écarté, « SEO » hors du title) · « analyse » en tête (web analytics) · toute requête « comment auditer » (guide DIY, pas cette page) · les prix (lignes 5/11/12).

### FAQ (6 max — chaque réponse sourçable)

1. Un audit automatique en 30 secondes, ça ne suffit pas ? → ce que l'outil mesure, ce qu'il ne voit pas (exemples de la grille), ce que la lecture ajoute.
2. Que contient exactement l'audit que je reçois sous 72 h ? → verdict, score, 3 points priorisés, plan en 3 étapes, périmètre (pages, recherches, fiche).
3. Quelle est la contrepartie ? Y a-t-il du démarchage ? → aucune ; un appel seulement si vous le demandez ; données gardées trois ans, jamais cédées (politique de confidentialité).
4. Site vitrine, boutique en ligne, site d'artisan : même audit ? → oui, les 4 piliers s'adaptent (parcours d'achat pour la boutique, parcours de contact pour la vitrine) — lien « sites pour artisans », « boutique en ligne ».
5. Et après l'audit : corriger ou refaire ? → la réponse dépend des 3 points ; un paragraphe, lien vers la future page refonte (ligne 10) quand elle existera, `/tarifs` en attendant.
6. Vous garantissez un résultat sur Google ? → non, personne ne peut (interdit §3) ; ce qu'on mesure et montre à la place (Ansquer, un lien).

### Composants & données structurées

- ⚠️ **Page TSX** (route du repo web-agency), pas MDX : le contrat s'applique **sur le fond** (véracité, lexique v6 — aucun montant sur cette page, zéro nom technique, FAQ en `FAQPage` générée par le site, `Organization` unique sans adresse). Le formulaire est un composant du site (server action) : le refresh **réduit les champs** (URL + e-mail, prénom en option), adapte la mention de confidentialité (moins de données collectées) et conserve l'événement PostHog `contact_formulaire` (`formulaire: audit`).
- **Schema** : `Organization` déjà présent ; **ajouter `FAQPage`** (6 paires) ; pas de `LocalBusiness` ; pas de `Service` avec prix.
- **Visuels** : une figure = capture du teaser anonymisé (générée depuis `audit-teaser.mjs` sur un `audit.json` anonymisé — à produire au `/refresh`, pas une capture du fichier Cadres Concept réel).

### Capture & maillage

- **Capture** (invariant 10) : **formulaire allégé URL + e-mail** = action principale (`contact_formulaire` audit) ; réservation 30 min = secondaire (`contact_rendez_vous`). Lecture PostHog à la weekly : c'est **le** KPI de cette page, pas les clics GSC.
- **Entrant** (le vrai levier) : accueil (CTA « ou demandez un audit gratuit de votre site », déjà en place depuis le 22/10), pied de page (déjà), `/services/site-vitrine` (ligne 4, décembre), `/site-vitrine-artisan` (ligne 9), future page refonte (ligne 10 : « l'audit gratuit est la capture naturelle du cluster »), **liens privés des teasers envoyés aux prospects** (hors SEO, mais c'est le trafic réel de la page).
- **Sortant** : `/tarifs` (FAQ 5, sans chiffre), `/realisations/transports-ansquer` (FAQ 6), `/services/boutique-en-ligne` et `/site-vitrine-artisan` (FAQ 4), `/politique-confidentialite`, `/a-propos` (qui lit).

### Garde-fous

- ⛔ **Anonymisation de l'extrait** (brief §3) : aucun nom, ville, concurrent, produit identifiable ; chiffres conservés. Le `fact-checker` contrôle que l'extrait publié correspond au JSON anonymisé, pas au réel.
- ⛔ **Aucune garantie de position**, aucun « score SEO », aucun montant (les prix vivent sur `/tarifs`).
- ⛔ **Promesse tenable** : « 72 h ouvrées » est déjà publié ; la grille à 26 critères n'est **pas encore automatisée** (to-do #16-#18) — la page décrit ce qui est fait **aujourd'hui à la main** (vrai), pas la chaîne future. Pas de « 26 critères » en chiffre si la grille n'est pas calibrée (to-do #17) : dire « quatre piliers ».
- **« Sans démarchage »** : la promesse existe déjà ; le formulaire allégé la rend crédible (le téléphone obligatoire « pour vous présenter le rapport de vive voix » la contredisait).
- **Lexique** : « site internet » dans title/H1, « site web » une fois ; « diagnostic » en H2 seulement ; pas de « SEO » dans le title.
- **Règle des 90 j** : page du 25/04 → libre. Après publication : J30 ≈ fin décembre (observation), **J90 ≈ fin février 2027** — verdict sur **contacts PostHog + maillage**, pas sur les clics.
- **Double PASS** `fact-checker` (chiffres de l'extrait, grille, 72 h, mentions) puis `contract-checker` (title/meta/H1, FAQ, maillage vers cibles existantes, lexique ; whitelist MDX « non vérifiable », sans objet).

## 6. Décisions attendues au GO `/refresh`

1. **GO / NO-GO** sur le ré-angle « page de capture, trafic organique résiduel assumé » — c'est une acceptation explicite que la ligne 2 ne rapportera pas de clics GSC mesurables.
2. **Extrait** : teaser **Cadres Concept anonymisé** (choix exprimé le 22/10 — ⚠️ prospect en discussion : publier maintenant, ou après sa réponse ?) ou **audit kaelix.fr du 17/10** (publiable sans réserve, « on s'applique ce qu'on vend »).
3. **Formulaire** : URL + e-mail strictement, ou URL + e-mail + prénom (optionnel). Le téléphone disparaît du formulaire (il revient à la prise de rendez-vous).
4. **Title** : A (« lu par un fondateur ») ou B (« rapport sous 72 h »).
5. **Grille publique** : 4 piliers et quelques critères en exemple (recommandé), ou liste complète des 26 critères (déconseillé : doctrine du teaser, calibrage non tranché #17).
6. **`ExpertQuote`** : nouvelle citation en proposition signalée (thème « ce qu'un outil ne voit pas »), ou aucune.

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-10-22)

> Les cinq instances ont tourné **sans Haloscan** (MCP en timeout) et **sans SERP Google** (mur de consentement) : leurs KPI reprennent le relevé du 17/10 et leurs « top 5 » viennent de WebSearch/Bing, **ordre non Google**. Les KPI du jour (§1) et les deux SERP réelles (annexe G) ont été relevés ensuite en session principale et priment.

### A. « audit site internet gratuit »

```
⚠️ analyse dégradée : outil Haloscan inaccessible (absent de la session) + budget d'exécution atteint (Google → page consentement, DuckDuckGo → anti-bot) — SERP Google non observée, indicateur = résultats WebSearch (10 liens) uniquement
VERDICT : REFRESH (sous réserve) — tête de title/H1 acceptable, à confirmer par le scroll-check chrome
Motif : l'indicateur montre une SERP outils + guides, 0 agence à audit humain dans l'échantillon → même risque de mismatch que « audit seo gratuit », mais « site internet » est moins « SEO-outil » que « seo » ; la page vaut par la capture, pas le trafic (cluster G)
Volume : 200/mois · Difficulté : KVI 33 · Intention : commerciale-outil — relevé Haloscan 17/10, non re-vérifié
Jouabilité : hors d'atteinte en trafic (KVI > 20, SERP Semrush / Link-Assistant / Codeur, site inconnu de Haloscan, 6 pages indexées, 0 lien) — assumé par le plan (valeur = capture + maillage)
Scroll : ⚠️ non vérifiable par outil → scroll-check chrome (point critique : ratio outils / agences / guides du top 10 réel)
Zéro-clic : partiel (relevé 17/10) — ce que la réponse ne donne pas : une lecture humaine du site du demandeur et un livrable concret
Format dominant (indicateur) : pages outil instantané (Semrush site audit, Link-Assistant, Auditsu) + guides-listes (Codeur, munci) ; ratio ≈ 3 outils / 2 guides / 1 annuaire / 0 agence
Gap : aucun résultat ne montre à quoi ressemble un audit livré ; rien pour le dirigeant sans compétences (que faire des 140 erreurs ?) ; aucune transparence sur la contrepartie ni le délai humain
Cannibalisation : aucune — /audit-gratuit seule page « audit » ; /services/seo-performance = service payant
Angle recommandé : « Audit gratuit de votre site internet : un fondateur le lit, vous recevez le rapport sous 72 h » + extrait d'audit réel ; formulaire URL + e-mail
Persona : P3 · Secondaires : audit site web gratuit, analyse site internet gratuit, diagnostic site internet gratuit, audit site internet, audit gratuit site vitrine
FAQ : « Que contient l'audit et sous quel délai ? » · « Quelle contrepartie ? du démarchage ? » · « Quelle différence avec un outil instantané ? »
```

### B. « audit site web gratuit »

```
⚠️ analyse dégradée : Haloscan inaccessible · budget atteint (Google consentement, Bing réécrit, DuckDuckGo captcha) — deux WebSearch indicatifs
VERDICT : GO en SECONDAIRE LEXICAL de la ligne 2 (jamais de page dédiée) — identité de SERP avec la tête ⚠️ non vérifiée
Volume/KVI : non vérifiables · Intention : commerciale-outil, « lancer un scan gratuit »
Jouabilité : hors d'atteinte en tête — la capture se joue sur le title/H1 de la ligne 2 si « site web » apparaît une fois en H2/FAQ
Format (indicatif, 10 résultats) : ~6 outils instantanés (Semrush, SE Ranking, Sitechecker, WebSite Auditor, h1site, outil RGPD) · ~3 guides-listes · 1-2 audit humain (EN) ; aucune agence FR à audit humain visible
Gap : score sans lecture humaine ni priorisation TPE ; aucun extrait de livrable ; personne ne dit ce que l'audit gratuit NE couvre pas
Cannibalisation : aucune (page cible elle-même)
Angle : inchangé (ligne 2) ; « site web » une fois en H2/FAQ, jamais en title
FAQ : « Un audit automatique en 30 s vaut-il un audit humain ? » · « Que contient l'audit reçu sous 72 h ? » · « Audit de site web ou audit SEO ? »
```

### C. « analyse site internet gratuit »

```
⚠️ analyse dégradée : Haloscan inaccessible
VERDICT : NO-GO en tête — secondaire lexical faible (1 occurrence corps/FAQ)
Motif : SERP observée = 100 % listicles d'outils instantanés ; « analyse » tire vers la web analytics (Matomo, Clarity, Hotjar) → hors intention « audit humain »
Volume/KVI : non vérifiables · Intention : informationnelle-outil
Jouabilité : hors d'atteinte (HubSpot, Leptidigital, La Fabrique du Net, Thunderbit)
Zéro-clic : fort (déduit) — l'AIO/les snippets nomment des outils et des scores /100
Ratio top 10 observé : outils/listicles ≈ 8/10 · agences 0/10 · guides 2/10
Gap : aucun top 5 ne dit ce qu'un outil ne voit pas ; aucun livrable/délai humain décrit (lafabriquedunet : audit agence 3 500-6 000 € HT, 3-5 jours → « gratuit sous 72 h » est un angle contrasté crédible) ; aucun « que faire après le score »
Angle : ne pas porter « analyse » ; une phrase « pas une analyse automatique : un audit lu par un fondateur, livré sous 72 h »
FAQ : « Analyse automatique ou audit humain ? » · « Que voit un audit que les outils ne voient pas ? » · « Que recevez-vous sous 72 h ? »
```

### D. « diagnostic site internet gratuit »

```
⚠️ analyse dégradée : Haloscan inaccessible — WebSearch (3 requêtes), pas une SERP Google
VERDICT : REFRESH — en SECONDAIRE uniquement (jamais tête)
Motif : requête polysémique très bruitée (médical, immobilier, PC) et volume inconnu ; « diagnostic » tire vers la prestation humaine, mais sans volume prouvé ne porte pas un title
Intention (part « site web ») : commerciale — prestation d'agence/freelance « diagnostic offert / pré-audit », plus qu'outil
Format (part « site web ») : pages de vente « diagnostic offert » de freelances et agences (courtes, formulaire + liste de ce qui est regardé) + listicles + outils ; ratio ≈ 4 agences / 3 outils / 3 guides — plus de place aux humains que « audit seo gratuit »
Bruit hors sujet : diagnostic médical/COVID, immobilier, PC, « diagnostic numérique d'activité » — une moitié des résultats bruts
Gap : personne ne montre ce que le prospect reçoit ; aucune page ne distingue « diagnostic rapide 72 h » vs « audit complet » ; zéro traduction en langage TPE
Cannibalisation : aucune — interdit de créer une page « diagnostic » à côté
Angle : garder « audit » en title/H1 ; « diagnostic » en H2 (« Un diagnostic humain sous 72 h, pas un score automatique ») et dans la meta
Secondaires : diagnostic site web gratuit, diagnostic seo gratuit, bilan de santé site internet, pré-audit site internet
FAQ : « Diagnostic ou audit : quelle différence ? » · « Que contient le diagnostic reçu sous 72 h ? » · « Pourquoi un diagnostic humain plutôt qu'un outil ? »
```

### E. « audit site internet » (sans gratuit)

```
⚠️ analyse dégradée : Haloscan inaccessible · budget atteint (Google consentement, DuckDuckGo captcha) — ≈14 URL FR via 2 WebSearch, pas un top 10 ordonné
VERDICT : NO-GO en tête → secondaire de la ligne 2, couvert par le title « Audit gratuit de votre site internet »
Motif : intention mixte informationnelle-commerciale ; les agences qui classent le font toutes avec leur page « audit gratuit » (meosis, pic.digital, websentinel, afalence) → la variante « gratuit » porte déjà le mieux le title
Ratio observé : guides/méthode ~6 (lafabriquedunet, codeur, francenum, mailchimp, wikipedia) · agences audit gratuit ~5 · outils ~2-3 — pas 100 % outils, mais les guides dominent
Jouabilité : hors d'atteinte en tête (gouv.fr, wikipedia, semrush, mailchimp) ; 6-12 mois au mieux sur la tête gratuite
Zéro-clic : non vérifiable — contenu définitionnel abondant → AIO/snippet probable
Gap : aucune page n'assume un délai humain comme différenciant (afalence seule : 48 h) ; aucune ne montre un extrait réel ; aucune ne parle de l'après (« réparer ou refaire ? », pont vers la page refonte)
Cannibalisation : aucune ; pas de collision frontale avec ligne 15 — garde-fou : « audit SEO » hors du title de /audit-gratuit, « audit » hors du title de la page SEO ; un guide « comment auditer » = autre contenu, pas à planifier
Angle : aucun propre ; nourrit le title/H1 de la ligne 2 et un H2 « audit de site internet : ce qu'on regarde »
FAQ : « Qu'est-ce qu'un audit de site internet ? » · « Automatique ou humain ? » · « Que faire après : corriger ou refaire ? »
```

### F. KPI Haloscan par API directe (session principale, 22/10)

`node scripts/haloscan-fetch.mjs bulk …` — tableau du §1. Contrôle de continuité script/MCC fait le même jour sur 7 mots-clés du brief §5 : le champ `kvi` du bulk est celui du MCP ; deux valeurs ont bougé depuis le 17/10 (« audit seo gratuit » 10 → 1, « site internet pme » 17 → 1 : recalcul Haloscan sur des SERP chargées en features). Le bloc `overview --data metrics` ne porte **pas** de KVI (`keyword_visibility_index` est une autre métrique).

### G. Scroll-check chrome (session principale, 2026-10-22, Browser 1, desktop)

Protocole §1.21 : google.fr, requête exacte, `hl=fr&gl=fr`, budget 2 requêtes. Relevé sur le **texte rendu** (`get_page_text`, ordre du DOM — les captures d'écran étaient en timeout le 20/10, non retentées) ; **desktop uniquement**.

| Requête | Avant le 1er organique | 1er organique | AI Overview | PAA | Agences à audit humain dans le top 10 organique | Constat |
|---|---|---|---|---|---|---|
| « audit site internet gratuit » (200 · 33) | **4 pubs** : Solocal « audit digital », Contentful, Agence IDEO « score SEO en 90 s, analyse humaine », Semrush « audit de site gratuit » | SEOptimer (outil) | **oui**, juste après le 1er organique : « plusieurs outils en ligne gratuits… SEOptimer, Semrush, Alyze, Get-Ranking » | 4 (meilleur outil gratuit · comment réaliser un audit · prix d'un audit SEO · tester la performance) | **0** — top 10 : SEOptimer, Semrush ×2, Alyze, Get Ranking, Cocolyze, Ubersuggest, HubSpot (listicle), BDC.ca, SEO Tester Online ; 2e bloc de pubs en milieu de page (Solocal, Rémi Pradère « audit SEO offert, 48 h ») | ⛔ **scroll disqualifiant** + zéro-clic fort → trafic organique résiduel |
| « diagnostic site internet » (20 · 29) | **4 pubs** : Eye-Able (RGAA), Matomo, Solocal, Semrush | France Num « Évaluer son site Internet » (rapport automatique gratuit) | **oui**, après le 1er organique : définition + liste d'outils (SEOptimer, Semrush, IONOS, France Num/BDC, HubSpot) + « principaux éléments analysés » | 4 (meilleur analyseur gratuit · outil le plus efficace · vérifier l'état d'un site · vérifier si un site est fiable) | **1** — Anfama Consulting « Diagnostic de site internet gratuit en 3 minutes : 12 questions, corriger / refondre / refaire, verdict immédiat » (12/10/2026) ; reste : SEOptimer, IONOS, Quadran, Contentsquare, BDC.ca, HubSpot, Semrush ; 2e bloc de pubs (Centreon, Agence IDEO « diagnostic SEO sur-mesure ») | ⛔ **scroll disqualifiant** + zéro-clic fort ; la sous-intention « humaine » existe (Anfama, pubs IDEO) mais se joue en Ads ou en quiz instantané |

**Impact sur le verdict** : les deux SERP relevées sont des SERP d'outils où l'organique passe après 4 pubs et une AI Overview. Aucune variante de la famille n'échappe à ce profil (les mini-briefs B-E le confirment par procuration). → **ré-angle en page de capture**, trafic organique résiduel assumé, KPI = contacts PostHog et maillage entrant.

### H. Autres relevés

- Page en ligne lue le 22/10 (curl) : title « Demandez un audit gratuit de votre site web | Kaelix », H1 « Recevez un audit gratuit de votre site », section « Ce qui se passe après l'envoi » (72 h ouvrées · un fondateur · sans démarchage), panneau de réservation, formulaire **8 champs** (prénom*, nom*, e-mail*, téléphone* « pour vous présenter le rapport de vive voix », URL*, secteur*, objectif*, taille), mention de confidentialité (3 ans). JSON-LD : `Organization`, `BreadcrumbList`, `ContactPoint` ; pas de `FAQPage`.
- Chantier audit gratuit (21/10, autre session) : `docs/grille-audit-gratuit.md` (4 piliers, 26 critères, calibrage non tranché — to-do #17), `prospects/README.md` (doctrine du teaser : objectif unique = RDV, pas de prix, 3 points → 3 marches de l'offre), `scripts/audit-teaser.mjs`, `prospects/cadres-concept/` (audit réel du 21/10, score 51, deck 8 diapositives), `prospects/atelier-lune-et-or/` (exemple).
