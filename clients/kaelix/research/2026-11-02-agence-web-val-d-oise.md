# Brief de production — Création de `/agence-web-val-d-oise` : « Agence web dans le Val-d'Oise : votre site codé à la main, par un fondateur du 95 »

| | |
|---|---|
| **Client** | `kaelix` (l'agence, cliente d'elle-même) |
| **Sujet du plan** | 11/2026 **S1** — **ligne 6**, cluster C (zones réelles, local) — persona **P1** (dirigeant-artisan / commerçant du 95), P2 via le tableau « coût sur 3 ans » |
| **Typologie** | evergreen — **page business locale** (page du site, composant TSX du repo web-agency, pas un MDX) |
| **Page cible** | `/agence-web-val-d-oise` (à créer) + **301 `/agence-web-paris` → cette page dans la même PR** (décision d'Axel du 17/10, plan ligne 6) |
| **Recherche faite le** | 2026-11-02 (`/research` en exécution planifiée « Production du mois » : 4 `serp-analyst` en parallèle + KPI Haloscan du jour par API directe) |
| **Statut** | ✅ **`go-11/2026` (GO mensuel d'Axel du 02/11, §1.30) — brief prêt, aucun feu vert à redemander → `/write` enchaîné dans la même exécution** |

> ⚠️ **Conditions de l'analyse (contrôles empêchés, tels quels).** (1) Le MCP Haloscan n'est pas chargé dans la session planifiée → **KPI du jour par `scripts/haloscan-fetch.mjs bulk` (API directe, §1.29)**, crédit vérifié par appel réel (9 868 crédits mots-clés). (2) `haloscan-fetch.mjs scrap` a rendu une SERP vide (`raw: ""`) sur les deux têtes → **SERP Google réelle non observable par outil** ; les 4 mini-briefs ont lu la SERP par procuration (WebSearch, ordre non garanti, 4 hôtes concurrents non résolus par le réseau de la session) et s'appuient pour le top 5 sur le **relevé Haloscan du 17/10** (benefitswebagency pos. 1-2, jeremy-carre pos. 2 sur la variante « val d'oise », DVI 1-33). (3) **Scroll-check : non vérifiable** (pas de navigateur en session planifiée — claude-in-chrome absent) → pack local probable sur une requête géographique, ordre pubs/pack/organique **non relevé** ; reporté au gate. (4) Zéro-clic : verdict du 17/10 (**faible**, 0 AIO) non re-vérifié le 02/11. (5) GSC : clé absente de la session (`GSC_SERVICE_ACCOUNT_B64`) → impressions actuelles de kaelix.fr sur « 95 » **non vérifiables** (sans conséquence : site à 6 pages indexées, étape B du ciblage vide par construction).

---

## 1. Verdict

**GO — CRÉATION de `/agence-web-val-d-oise`, une seule page pour les deux têtes « creation site internet 95 » et « agence web 95 », villes du 95 en sections nommées (jamais en pages).** Les quatre mini-briefs convergent : requête commerciale-locale tenue par des petites agences et des freelances (DVI 1-33 au 17/10) et des annuaires (gralon, 118712, lafabriquedunet, aladom), leader local à 89 visites/mois, KVI 4-5 — la place est prenable pour un site sans autorité, à l'horizon **3-6 mois pour la page 1, top 3 à 6-12 mois** (jouabilité rapportée à l'autorité réelle : `SITE_NOT_FOUND` chez Haloscan, 6 pages indexées au 19/10). Le pack local reste **hors d'atteinte sans adresse publiée** (fiche en « zone desservie », to-do #2 : prérequis parallèle, pas bloquant) : l'organique est l'objectif de la page.

### KPI Haloscan — bulk du **2026-11-02** (API directe)

| Mot-clé | Volume | KVI | CPC | Rôle sur la page |
|---|---|---|---|---|
| **creation site internet 95** | 200 | 4 | 1,60 € | **tête** (title, premier paragraphe, H2 « création de site internet ») |
| **agence web 95** | 100 | 5 | 1,45 € | **tête** (title, H1 « agence web dans le Val-d'Oise ») — même URL leader sur les deux têtes au 17/10 → **une page** |
| création site internet 95 (accentué, entrée distincte) | 15 | 1 | 8,97 € | absorbé par la tête |
| création site internet val d oise | 5 | 4 | 24,19 € | co-cible sémantique : « Val-d'Oise » écrit en toutes lettres dans title/H1/meta ; forme avec apostrophe inconnue de Haloscan |
| agence web val d oise | 5 | 1 | 6,73 € | idem |
| agence web cergy | 40 | 1 | 2,64 € | **section « Cergy-Pontoise »** (SERP d'annuaires + homepages d'agences de Cergy, aucune page de fond) |
| création site internet cergy | 30 | 14 | 6,54 € | citée dans la section Cergy, **pas visée** (seule variante ville tendue : codeur, aladom, 118712) |
| agence web pontoise | 20 | 1 | NA | section « Cergy-Pontoise » |
| agence web argenteuil | 20 | 1 | NA | **section « Argenteuil »** — aucune agence web identifiée dans les résultats remontés → la section la plus prenable ; Argenteuil = commune la plus peuplée du 95 |
| agence web sarcelles | NA | 1 | NA | mention dans la section « est du Val-d'Oise », sans promesse |
| referencement val d oise | NA (82 au 17/10) | 1 (12 au 17/10) | NA | **une phrase + lien vers `/services/seo-performance`**, jamais H1 (réservé à une déclinaison locale de la page SEO, brief §5 « après la page 95 ») |
| agence web ile de france | 90 | 19 | 8,17 € | **écarté le 17/10**, ne pas ressusciter : « Île-de-France » **hors du title/H1** de cette page (l'accueil porte déjà « Île-de-France » en meta) |
| création site internet ile de france | 40 | 10 | 2,57 € | idem, hors title |
| agence web 92 · création site internet 92 | 20 · NA | 15 · 1 | — | hors sujet (Hauts-de-Seine) — Ansquer est à Gennevilliers (92) : on le cite comme **référence francilienne voisine**, pas comme cible 92 |

- **Intention** : commerciale-locale, « faire faire » son site dans le 95 (acteurs observés : agences locales à 1-3 personnes à Cergy, Jouy-le-Moutier, Sarcelles, Ermont ; freelances ; annuaires ; **aucune plateforme DIY** — contrairement aux têtes nationales).
- **Format dominant** : page service localisée courte (villes citées, portfolio, bouton devis) et fiches d'annuaire. Prix et « sans abonnement » affichés : ⚠️ **non vérifiables aujourd'hui** (sites concurrents hors réseau) — la note du plan (17/10 : « la SERP du 95 vend du “sans abonnement” ») reste la seule donnée → la page **justifie le modèle à 80 € HT/mois** sans chiffrer les concurrents (aucun coût WordPress sourcé en stock : first-party « à alimenter » lignes 5/11/12, non reçu).
- **Related Haloscan** (bruité) : la famille « aide / subvention création site internet » (aide création site internet 30, chèque numérique, aide 500 €) remonte en voisine de la tête. **Pas de section** « aides » : aucune aide en vigueur vérifiée dans le stock first-party → un chiffre non sourcé est interdit ; à revoir si une source officielle est relevée (gate).
- **Questions Haloscan** : « Où faire mon site internet ? », « Qui peut m'aider à créer un site internet ? », « Pourquoi refaire son site internet ? » → FAQ « Faut-il une agence du 95 ? » et pont vers la future page refonte (ligne 10, S3).
- **Pas de pari-émergent** : requêtes établies, volume réel.

## 2. Anti-cannibalisation (3 fronts)

| Front | Contrôle | Résultat |
|---|---|---|
| **Haloscan** (positions du domaine) | `domain kaelix.fr` le 02/11 : `SITE_NOT_FOUND` (metrics, best_keywords, positions_breakdown) | aucune position connue → rien à cannibaliser |
| **`tracking.md`** (publié) | 2 lignes : `/` (famille TPE/PME, 22/10) et `/audit-gratuit` (22/10) | intentions disjointes. Garde-fou : **« TPE/PME » hors du title** de la page 95 |
| **`content-plan.md`** (15 lignes) | chaque ligne confrontée | **aucun conflit** : ligne 3 Montpellier = zone disjointe ; ligne 15 (`/services/seo-performance`) garde « referencement val d'oise » pour plus tard → ici une phrase + lien ; ligne 10 (refonte) → une phrase + lien quand la page existera (S3). **`/agence-web-paris` → 301** dans la même PR (page gabarit Paris, jamais indexée au 19/10 selon l'inspection GSC du 17/10 : 6 indexées sur 10 demandées, Paris hors liste) ; « agence web ile de france » reste écarté |
| **Pages-villes** | règle §9 et §5 (décision 1 : une page par zone) | **jamais de `/agence-web-cergy`** etc. : Cergy-Pontoise, Argenteuil-Bezons, vallée de Montmorency, est du 95 = **sections** de cette page |

Rappel du gisement 4-20 : vide par construction. Création conforme à la règle d'or (les refreshes de novembre, lignes 1-2, sont déjà publiés).

## 3. Content gap

Ce que le top 5 (relevé 17/10, acteurs identifiés le 02/11) couvre : une page « agence web 95 / Val-d'Oise » monothématique orientée devis, un portfolio, des villes citées, des fiches d'annuaire (nom, téléphone, note).

Ce que **personne** ne donne :

- **Un prix mensuel tout compris et ce qu'il couvre** (conception, hébergement, maintenance, interlocuteur) — tout est « devis gratuit » ou « forfait unique ».
- **Le coût réel sur 3 ans** d'un site « sans abonnement » (hébergement, mises à jour, extensions, refonte à la charge du client) face à l'abonnement — l'argument qui répond frontalement au « sans abonnement » de la SERP.
- **La propriété du code à la sortie** et la **performance native** (tous WordPress/Prestashop quand la techno est dite — ici sans nommer, lexique public : zéro nom technique).
- **Qui on rencontre, où, quand** : un fondateur sur place dans le 95, un rendez-vous de 30 minutes, livraison en 3 à 5 semaines — aucune page concurrente ne répond à « comment ça se passe ».
- **Un vrai contenu local par bassin** (les villes des concurrents sont des listes) : type de commerces, exemple de besoin, déplacement.

## 4. Information gain — stock first-party (zéro sollicitation ; manque de la ligne 6 non levé → angle plus faible **assumé**, dit ici en tête)

| Élément | Statut de véracité | Emploi prévu |
|---|---|---|
| **Axel, co-fondateur, vit et travaille dans le Val-d'Oise** (brief §9 « Axel sur place (Val-d'Oise) » ; /a-propos : « un en région parisienne ») — **sans commune nommée** (aucune adresse publiée, NAP) | ✅ interne, publiable sous cette forme exacte : « un fondateur du 95 », « dans le Val-d'Oise » — ⛔ jamais une ville de résidence, jamais une adresse | héros, H2 « Un fondateur dans le Val-d'Oise », FAQ « vous déplacez-vous ? » |
| **Transports Ansquer — port de Gennevilliers (92)**, client francilien de référence publiée : impressions **668 → 1 869 (×2,8)** et clics **20 → 43 (×2,2)** d'août à septembre 2026 (GSC, fenêtres de 28 j, site + référencement local — **jamais « un mois après le site »**) ; 100/100/100 SEO, bonnes pratiques, accessibilité ; 11 → 1 feuille de style (`portfolio.ts`, étude de cas) | ✅ publié (accueil, étude de cas) | preuve locale : « notre client francilien est au port de Gennevilliers, de l'autre côté de la Seine, face à Argenteuil » — ⛔ **pas de « à 20 minutes »** (distance non sourcée) ; les chiffres en bloc avec lien vers l'étude de cas |
| **Pas de client ni de chantier dans le 95** (first-party « à alimenter » du 17/10, non reçu) | ⚠️ manque constaté → **ré-angle assumé** : la preuve de proximité est la présence d'Axel + Ansquer en voisin ; aucune référence 95 inventée, aucun « nous avons accompagné des commerces de Cergy » | dit dans la PR ; la page se ré-écrira au premier client du 95 (comme la ligne 7 au premier e-commerce) |
| Offre : site vitrine **80 € HT/mois sans frais de création**, résiliation libre, code remis ; boutique 150 € HT/mois sans engagement ; SEO **dès 199 € HT/mois** (Local, fiche Google comprise) ; **livraison en 3 à 5 semaines** ; mesure de performance **« 90 et plus »** (`lighthouseMobile`) | ✅ grille v7 publiée, CGV | tableau « sur 3 ans » (nos propres montants seulement : 80 € × 36 mois = 2 880 € HT, tout compris — arithmétique, pas une statistique), liste des inclus, délai |
| Deux cousins fondateurs, un seul interlocuteur ; « Faites votre métier, on s'occupe du reste » | ✅ publié | H2 « Qui vous répond » |
| Verbatim d'Axel validé le 20/10 (« On ne vend pas un site… ») | ✅ mais déjà sur l'accueil → **ne pas dupliquer** | **aucune citation** sur cette page (pas d'`ExpertQuote` nouvelle : une proposition non validée bloquerait le merge et Axel relit sur aperçu) |
| Géographie du 95 (faits publics vérifiables) : préfecture à **Cergy** (agglomération de Cergy-Pontoise) ; **Argenteuil** commune la plus peuplée ; l'aéroport Paris-Charles-de-Gaulle en partie sur **Roissy-en-France** ; bassins : Cergy-Pontoise, Argenteuil-Bezons, vallée de Montmorency (Ermont, Franconville, Taverny, Eaubonne, Enghien-les-Bains), est du département (Sarcelles, Garges-lès-Gonesse, Gonesse, Goussainville) | ✅ faits publics — **contrôlés par le `fact-checker`** ; ⛔ aucune population chiffrée (pas de source INSEE en stock) | sections par bassin, `areaServed` |

Information gain **acquis sur l'offre et la méthode** (prix tout compris, coût 3 ans, code remis, fondateur sur place, délai), **faible sur la preuve locale** (pas de cas 95) — assumé, conforme au plan.

## 5. Brief éditorial

**Angle** : *Une agence web dont un fondateur vit dans le Val-d'Oise, un site codé à la main livré en 3 à 5 semaines, 80 € HT/mois tout compris — et pourquoi c'est moins cher sur 3 ans qu'un site « sans abonnement ».* Contre-pied de la SERP (devis, forfait unique, annuaires) : le prix dit, le coût réel expliqué, la personne nommée.

**Format cible** : page locale de **900-1 200 mots visibles**, plus longue que les pages concurrentes (courtes) parce qu'elle porte 4 bassins + le coût 3 ans + 6 FAQ, mais sans section de remplissage. Structure propre (pas le gabarit `LocalPageLayout` de Montpellier : le 95 est un département, pas une ville — « habitants à Val-d'Oise » et « Agence web à Val-d'Oise » seraient faux en français ; la page Montpellier garde son gabarit jusqu'à son refresh de décembre).

**Auteur / incarnation** : Axel (c'est lui qui est sur place et qui répond) ; Mickael cité comme celui qui écrit le site.

### Title / meta / H1

| Élément | Proposition | Pourquoi |
|---|---|---|
| **Title** (≤ 60 hors suffixe) | **« Agence web Val-d'Oise (95) : création de site internet »** (54 ; rendu « … \| Kaelix ») | les deux têtes (« agence web 95 », « creation site internet 95 ») + le toponyme en toutes lettres ; ni « Île-de-France », ni « TPE/PME », ni « Paris » |
| **Meta** (≤ 160) | « Création de site internet dans le Val-d'Oise par une agence web dont un fondateur vit dans le 95 : site codé à la main, 80 € HT/mois sans frais de création, livré en 3 à 5 semaines. » (≈ 178 → couper « livré en 3 à 5 semaines » si nécessaire pour ≤ 160) | la tête, la proximité, le prix et le différenciant |
| **H1** | « Agence web dans le Val-d'Oise : votre site internet codé à la main, par un fondateur du 95 » | la formulation validée au plan (ligne 6) |
| **Kicker** | « Val-d'Oise » | langage du hero du site |

### Plan H2/H3

1. **Héros** — kicker, H1, chapeau réponse-directe (~90 mots : qui, quoi, combien, en combien de temps, où on se voit), **bouton « Réserver 30 min avec un fondateur »** (action principale du site) + **téléphone** en lien `tel:` (mesuré `contact_telephone`).
2. H2 **« Un fondateur dans le Val-d'Oise, un site écrit à la main »** — Axel sur place (rendez-vous dans votre commerce ou atelier, ou en visio), Mickael écrit le site, un seul interlocuteur ; ce que « codé à la main » veut dire pour un commerçant (pas de modèle, pas d'extension à maintenir, un site rapide) — sans nom technique.
3. H2 **« Création de site internet dans le 95 : ce qui est compris pour 80 € HT par mois »** — liste des inclus (conception, hébergement, maintenance, mises à jour, interlocuteur, mesure « 90 et plus »), délai 3 à 5 semaines, résiliation libre et code remis ; une ligne boutique en ligne 150 € sans engagement ; une ligne « être trouvé dans votre zone » → formule Local dès 199 €, fiche Google comprise (lien `/services/seo-performance`) ; lien `/tarifs`.
4. H2 **« Site “sans abonnement” ou 80 € par mois : ce que ça coûte vraiment sur 3 ans »** — **tableau titré** (H3) à deux colonnes : *site payé une fois* (création payée d'avance, puis hébergement, nom de domaine, mises à jour, extensions, corrections, refonte à votre charge — **sans montant** : aucun coût concurrent sourcé) vs *Kaelix par abonnement* (0 € de frais de création, 80 € HT × 36 mois = **2 880 € HT sur 3 ans**, tout compris, site refait si l'activité change). Paragraphe : le vrai sujet n'est pas « abonnement ou pas », c'est qui porte le travail après la mise en ligne. Lien vers la page pivot comparaison existante (`/alternative-wordpress-performance`) **une fois** (son refresh est prévu en décembre).
5. H2 **« Où nous travaillons dans le Val-d'Oise »** — intro (une page par zone réelle, pas une par ville ; Axel se déplace dans tout le département) puis **4 H3 par bassin**, chacun avec un paragraphe propre (communes nommées, tissu d'activité en termes génériques et vérifiables, le besoin type, comment on se voit) :
   - H3 « Cergy-Pontoise » (Cergy, préfecture ; Pontoise ; Saint-Ouen-l'Aumône ; Osny ; Jouy-le-Moutier) — la section la plus développée (agence web cergy 40, pontoise 20).
   - H3 « Argenteuil et Bezons » (Argenteuil, commune la plus peuplée du 95 ; Bezons ; Sannois ; Herblay-sur-Seine) — **la preuve Ansquer** : au port de Gennevilliers, de l'autre côté de la Seine, face à Argenteuil ; chiffres ×2,8 / ×2,2 avec lien étude de cas.
   - H3 « Vallée de Montmorency » (Ermont, Franconville, Taverny, Eaubonne, Enghien-les-Bains, Montmorency).
   - H3 « Est du Val-d'Oise, de Sarcelles à Roissy » (Sarcelles, Garges-lès-Gonesse, Gonesse, Goussainville, Roissy-en-France — plateforme aéroportuaire).
   Liste `areaServed` = AdministrativeArea « Val-d'Oise » + les communes citées (Place).
6. H2 **« Pourquoi Kaelix dans le 95 »** — 5 points (ledger) : écrit pour votre activité ; « 90 et plus » ; référencement pensé dès la conception ; 80 € HT/mois sans frais de création ; résiliation libre, code remis. Lien `/services/site-vitrine` (ancre « création de site vitrine ») et `/site-vitrine-artisan` (« sites pour artisans »).
7. H2 **« Vos questions dans le Val-d'Oise »** — 6 FAQ (ci-dessous), `FAQPage`.
8. **Bande de clôture** (`CtaSection` closing, arc) — rendez-vous + audit gratuit (`/audit-gratuit`).

### Mots-clés

- **Têtes** : agence web 95 (H1 « agence web dans le Val-d'Oise », title) · creation site internet 95 (title, H2 n°3, premier paragraphe « création de site internet dans le Val-d'Oise (95) »).
- **Secondaires** : création site internet val d'oise · agence web val d'oise · agence web cergy · agence web pontoise · agence web argenteuil · site internet val d'oise (corps) · référencement val d'oise (une phrase, lien SEO).
- **À ne pas viser** : agence web ile de france / création site internet ile de france (écartés) · création site internet cergy (tendue, citée seulement) · agence web 92 · tout « pas cher » / « gratuit » (anti-ICP) · « aide / subvention » (aucune source).

### FAQ (6 — chaque réponse sourçable dans le stock)

1. **Vous déplacez-vous partout dans le Val-d'Oise ?** → Oui : Axel est dans le 95 ; premier échange de 30 min au téléphone ou en visio, puis rendez-vous sur place quand le projet le justifie (Cergy-Pontoise, Argenteuil, vallée de Montmorency, est du département) ; le reste se fait à distance.
2. **Pourquoi un abonnement à 80 € par mois plutôt qu'un site payé une fois ?** → ce que couvre l'abonnement, 2 880 € HT sur 3 ans tout compris, ce qui reste à votre charge avec un forfait unique (sans montant), résiliation libre et code remis.
3. **Combien de temps pour un site vitrine dans le 95 ?** → 3 à 5 semaines après le premier échange (méthode de l'accueil), délai publié.
4. **Faut-il une agence de Cergy, d'Argenteuil ou de Sarcelles pour être trouvé dans sa ville ?** → non : ce qui compte est la fiche Google, des pages réglées sur votre zone et un site rapide ; la formule Local (fiche Google comprise, dès 199 € HT/mois) travaille votre commune et les communes voisines ; lien `/services/seo-performance`.
5. **J'ai déjà un site : le refaire ou le réparer ?** → dépend de ce qu'on constate ; commencez par l'audit gratuit (lu par un fondateur, sous 72 h ouvrées) ; lien `/audit-gratuit` (lien vers la page refonte à ajouter en S3 quand elle existera).
6. **Je vends des produits : pouvez-vous faire une boutique en ligne ?** → oui, 150 € HT/mois sans engagement, sans frais de création, on gère la technique ; lien `/services/boutique-en-ligne`.

### Composants & données structurées

- ⚠️ **Page TSX** (route statique `apps/kaelix/src/app/(public)/agence-web-val-d-oise/page.tsx`, copy dans `apps/kaelix/src/lib/data/val-d-oise-page.ts`) : le contrat s'applique **sur le fond** (véracité, lexique public v7 — zéro nom technique, « dès 199 € HT/mois », jamais « liens »/« cumulatif »/« Paris » seul —, FAQ en `FAQPage`, maillage, NAP) ; whitelist MDX « sans objet ». Composants du site : `HeroCompact`, `BookingButton`, `FaqList`, `CtaSection` (closing, arc), `JsonLd`, `SectionHeader`.
- **Schema** : `Service` (« Agence web dans le Val-d'Oise », `provider` → `@id` Organization unique, `areaServed` = AdministrativeArea Val-d'Oise + Places des communes citées) + `BreadcrumbList` + `FAQPage` (6 paires, mot pour mot). ⛔ **Pas de `LocalBusiness`** (aucune adresse publiée, décision du 17/10 ; la skill `local-seo` prévoit LocalBusiness, inapplicable ici — dérogation documentée dans `structured-data.ts`), pas d'horaires, pas de `PostalAddress`, pas de `telephone` hors l'Organization du layout (NAP : 06 35 44 30 10 = `siteConfig.contact.phone`, cohérent avec `nap.md`).
- **Technique dans la même PR** : `citySlugs` → `["montpellier"]` (Paris retirée de `cities.ts`), **301 `/agence-web-paris` → `/agence-web-val-d-oise`** (`next.config.ts`), sitemap (+ la nouvelle URL, − Paris), pied de page (`footerLinks.zones` : « Agence web dans le Val-d'Oise »), lien contextuel de l'accueil (`why-section.tsx`, href seul — ⚠️ page gelée R3 : retouche technique d'un `href` qui sinon passerait par une 301, texte « Île-de-France » inchangé → **à trancher au gate**), E2E mis à jour (`audit-seo-17-10`, `site-public-sans-agents`, `accueil-famille-tpe-pme`) + **nouvelle spec `e2e/kaelix/agence-web-val-d-oise.spec.ts`** vue rouge avant le code (méthode du dépôt).
- **Visuels** : aucun visuel first-party du 95 en stock (pas de chantier) → page sans image hors le halo du site ; ⛔ pas de photo de stock « ville » (interdit par le brief §3 : concret plutôt qu'adjectifs, et une image de Cergy n'apporte aucune information).

### Capture & maillage

- **Capture** (invariant 10) : **réservation 30 min** (`contact_rendez_vous`, héros + clôture) et **téléphone** (`contact_telephone`, héros) ; audit gratuit en secondaire (FAQ 5 + clôture). KPI de la page à la weekly : contacts PostHog + impressions GSC sur « 95 ».
- **Entrant** : pied de page (toutes les pages), accueil (section « pourquoi nous », href), `/a-propos` (« un en région parisienne » — pas de retouche), future page refonte (S3) et article « refaire son site » (S2) : une mention « dans le Val-d'Oise » quand pertinent.
- **Sortant** : `/services/site-vitrine`, `/site-vitrine-artisan`, `/services/seo-performance`, `/services/boutique-en-ligne`, `/tarifs`, `/realisations/transports-ansquer`, `/audit-gratuit`, `/alternative-wordpress-performance`, `/a-propos`.

### Garde-fous

- ⛔ **Aucune commune de résidence d'Axel, aucune adresse, aucun horaire** (NAP : fiche en zone desservie). « Un fondateur du 95 » / « dans le Val-d'Oise », c'est tout.
- ⛔ **Aucun client du 95 inventé**, aucun « nous avons accompagné … à Cergy » : la seule référence francilienne est Ansquer (Gennevilliers, 92), présentée comme voisine, sans « 20 minutes ».
- ⛔ **Aucun montant concurrent** (pas de coût WordPress sourcé) : le tableau 3 ans ne chiffre que Kaelix ; aucune population chiffrée des communes ; **aucune aide/subvention** citée.
- ⛔ **Aucune garantie de position** ; lexique v7 (« dès 199 € HT/mois », « la fiche Google est comprise », jamais 249/299/399/599, jamais « liens », « Paris » seul, aucun nom technique).
- **Title/H1 sans « Île-de-France » ni « TPE/PME »** (anti-chevauchement accueil / requête régionale écartée).
- **Règle des 90 j** : page neuve → J30 ≈ 02/12 (observation), J60 ≈ 01/01, **J90 ≈ 31/01/2027** (verdict position + contacts). L'accueil reste gelé jusqu'au 20/01/2027 : seule la cible d'un lien y change (à trancher).
- **Double PASS** `fact-checker` (faits géographiques, chiffres Ansquer, prix et délais, NAP, lexique) puis `contract-checker` (title/meta/H1, FAQ = FAQPage, maillage vers des cibles existantes, absence de style, NAP ; whitelist MDX sans objet).

## 6. Points portés au gate (PR, questions fermées — le plan validé tient lieu de GO)

1. Mettre à jour maintenant le lien « Île-de-France » de l'accueil (page gelée R3) vers `/agence-web-val-d-oise` — ou le laisser passer par la 301 jusqu'au 20/01/2027 ?
2. Le title retient les deux têtes (« Agence web Val-d'Oise (95) : création de site internet ») — ou la version du plan (« Agence web dans le Val-d'Oise : votre site codé à la main… », H1 seul) ?
3. Scroll-check à faire sur le poste (« creation site internet 95 », « agence web 95 », téléphone et ordinateur) — un pack local qui prend tout l'écran ne change pas la page, il relève l'urgence de la fiche Google (#2).

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-11-02)

> Les quatre instances ont tourné **sans MCP Haloscan** (KPI bulk du 02/11 fournis dans le prompt) et **sans SERP Google** (WebSearch seulement, ordre non garanti ; hôtes concurrents non résolus par le réseau de la session). Le top 5 cité est celui du relevé Haloscan du 17/10.

### A. « creation site internet 95 »

```
⚠️ analyse dégradée : budget d'exécution atteint (WebFetch — 4 hôtes non résolus : bing.com, html.duckduckgo.com, benefitswebagency.com, jeremy-carre.com ; MCP Haloscan absent → KPI bulk du 02/11 utilisés). WebSearch ne rend pas la SERP Google FR : la lecture de la SERP repose sur le relevé Haloscan du 17/10.
VERDICT : GO (création /agence-web-val-d-oise, conforme ligne 6 du plan go-11/2026)
Motif : KVI 4 au 02/11 (5 au 17/10), SERP de petites agences/freelances (DVI 1-33), leader local à 89 visites/mois, 0 AIO relevée le 17/10 — place prenable sous réserve du scroll-check.
Volume : 200/mois (+15 accentué, +100 « agence web 95 ») · KVI 4 · CPC 1,60 € · Intention : commerciale-locale (« faire faire » dans le 95) — classée sur le relevé 17/10, non ré-observée aujourd'hui
Jouabilité : 6-12 mois — kaelix.fr SITE_NOT_FOUND, 6 pages indexées au 19/10 ; requêtes annexes à 3 mois : agence web cergy (40, KVI 1), pontoise (20, KVI 1), argenteuil (20, KVI 1) → sections villes de la même page
Scroll : ⚠️ non vérifiable par outil → scroll-check chrome en session principale (pack local probable)
Zéro-clic : faible (relevé 17/10 : 0 AIO) — à reconfirmer ; ce que la SERP ne donne pas : prix mensuel tout compris, propriété du code, délai, interlocuteur
Format dominant : pages « agence web 95 / Val-d'Oise » d'agences et freelances locaux (page service localisée, villes citées, portfolio, devis) — longueur et prix non vérifiables
Top 5 (17/10) : benefitswebagency.com (pos. 1-2 sur les deux têtes) ; jeremy-carre.com (freelance, pos. 2 variante « val d'oise ») ; annuaires (gralon, 118712, sortlist) ; webtc.fr (Jouy-le-Moutier) et Projet Web (Ermont) via annuaires
Gap : aucun prix mensuel tout compris ni coût total 3 ans ; personne sur « codé à la main vs modèle » ni la propriété du code ; aucune page « un fondateur du 95 joignable » + délai
Cannibalisation : aucune avec Montpellier ni l'accueil ; garde-fous : 301 Paris dans la même PR ; ni « Île-de-France » ni « Paris » dans title/H1 ; « referencement val d'oise » = section
Angle : « Agence web dans le Val-d'Oise : votre site codé à la main par un fondateur du 95 — 80 € HT/mois, sans frais de création » ; tableau coût 3 ans ; villes en sections ; Organization + areaServed
Persona : P1 ; P2 via le tableau
FAQ : coût (forfait unique vs 80 €/mois sur 3 ans) · faut-il une agence du 95 pour Cergy/Pontoise/Argenteuil · que comprend l'abonnement, à qui appartient le code
```

### B. « agence web 95 »

```
⚠️ analyse dégradée : WebFetch bloqué par DNS sur 4 hôtes (google.fr, benefitswebagency.com, webtc.fr, gralon.net) ; MCP Haloscan absent → KPI bulk du 02/11 ; SERP lue via WebSearch, ordre non garanti.
VERDICT : GO — une seule page /agence-web-val-d-oise
Volume : 100 (+200 creation site internet 95) · KVI 5 / 4 au 02/11 (étaient 10 / 5 au 17/10) · Intention : commerciale-locale (agences locales Web TC Jouy-le-Moutier, Web Vision Sarcelles, Audouin Réalisations Cergy, Vizo'y Cergy + annuaires ; aucune plateforme DIY)
Jouabilité : 3-6 mois → page 1 plausible à J90, top 3 à 6 mois
Scroll : ⚠️ non vérifiable par outil · Zéro-clic : faible (17/10, 0 AIO), non re-vérifié
Format dominant : pages d'accueil d'agences locales + fiches annuaire ; prix / « sans abonnement » non vérifiables aujourd'hui
Même page / pages séparées : MÊME PAGE — même URL leader pos. 1 sur « agence web 95 » et pos. 2 sur « creation site internet 95 » (17/10) ; « 95 » et « val d'oise » synonymes (variantes à 5-15). Villes : « agence web cergy » (40, KVI 1) et « agence web argenteuil » (20, KVI 1) tenues par des annuaires sans agence de fond → sections nommées, jamais de pages-villes. « création site internet cergy » (30, KVI 14) : citer, ne pas viser
Gap : aucun prix mensuel ni coût 3 ans ; aucune propriété du code / performance native ; villes tenues par des annuaires, zéro contenu local réel
Cannibalisation : aucune côté publié ; « TPE/PME » et « Île-de-France » hors du title
Angle : title « création site internet Val-d'Oise (95) », H1 « agence web 95 » ; section « pourquoi 80 € HT/mois plutôt qu'un paiement unique » ; 4 sections villes ; Organization + areaServed
FAQ : vous déplacez-vous partout dans le 95 ? · abonnement vs site payé une fois ? · délai dans le 95 ?
```

### C. « création site internet val d'oise » (famille toponymique)

```
⚠️ analyse dégradée : 4 hôtes non résolus (google.com, duckduckgo.com, benefitswebagency.com, jeremy-carre.com) ; MCP Haloscan absent ; WebSearch très bruité (annuaires, Orpi, CCI) — aucune lecture fiable du top 5 réel.
VERDICT : GO — sous la forme « 95 », « Val-d'Oise » en co-cible sémantique
Motif : la forme « 95 » porte tout le volume (200 + 100) ; « val d'oise » quasi nulle (5 + 5) et inconnue avec apostrophe → une seule page, title toponyme + numéro
(1) 95 = Val-d'Oise ? non vérifiable (pas de SERP Google) — indice : benefitswebagency classe sur « 95 » ET « referencement val d'oise ». Title recommandé « Agence web Val-d'Oise (95) : création de site internet … »
(2) Pack local ? non vérifiable — une fiche « zone desservie » rentre rarement dans un pack sur une requête départementale ; prérequis parallèle (#2), pas bloquant
(3) Prix / « sans abonnement » dans le top 5 ? non vérifiable aujourd'hui ; garder la justification « coût total 3 ans »
Gap (17/10) : aucun concurrent 95 ne dit « codé à la main / performance native / 0 € de frais de création » ; aucun ne chiffre le coût 3 ans ; aucun ne parle e-commerce TPE du 95
Cannibalisation : aucune ; « referencement val d'oise » = section, réservé à la déclinaison locale de /services/seo-performance
Angle : « Un fondateur dans le Val-d'Oise, un site codé à la main livré en 3-5 semaines, 80 € HT/mois tout compris — ce que ça coûte vraiment sur 3 ans face au “sans abonnement” » ; preuve Ansquer ; rencontre sur place
```

### D. « agence web cergy » (+ pontoise / argenteuil / création site internet cergy)

```
⚠️ analyse dégradée : MCP Haloscan indisponible ; SERP via WebSearch (ordre non garanti) ; WebFetch lafabriquedunet.fr → ENOTFOUND.
VERDICT : GO — en SECONDAIRE de /agence-web-val-d-oise (section nommée), jamais en page ville
Volume : 40 · KVI 1 · CPC 2,64 € · Intention commerciale-locale (annuaires de prestataires + fiches d'agences, aucun contenu informationnel)
Famille : création site internet cergy 30 / KVI 14 (SERP « marketplace » : codeur, aladom, 118712) ; pontoise 20 / KVI 1 ; argenteuil 20 / KVI 1 (SERP sans agence web identifiable → quasi vide) ; sarcelles NA
Jouabilité : 6 mois pour l'organique ville via la page 95 ; pack local ville hors d'atteinte sans adresse publiée
Scroll : ⚠️ non vérifiable · Zéro-clic : faible (présumé, non vérifiable)
Format dominant : annuaires/listicles (lafabriquedunet « meilleures agences … Cergy », 118712, aladom 59 annonces, codeur.com) + homepages d'agences locales (Audouin Réalisations, Vizo'y, Hello Hansel à Cergy ; ThatMuch, Tatoun à Pontoise). Aucune page département/région vue dans les résultats remontés
(1) Sections H2/H3 « Cergy-Pontoise », « Argenteuil », « Sarcelles / est du 95 » avec un contenu propre à chacune peuvent entrer en page 1 à KVI 1 ; non pour le pack local ville (adresse requise)
(2) Villes à nommer : Cergy (40, préfecture, section la plus développée) ; Pontoise (20, même bassin) ; Argenteuil (20, plus grande ville du 95, gain facile) ; Sarcelles (NA, mention courte) ; Franconville, Herblay, Ermont, Enghien, Roissy : aucun KPI → liste de zone desservie seulement
(3) Pack local : non vérifiable ; probable
Gap : aucun prix mensuel ni coût total ; aucune mention performance/propriété du code ; personne ne parle TPE-commerçant du 95 avec un exemple local ; pas de « comment ça se passe à distance / en RDV »
Cannibalisation : aucune page ville existante ; ne jamais créer /agence-web-cergy
Angle : page 95 structurée en bassins avec un paragraphe spécifique par bassin, le coût total 3 ans, Axel « sur place dans le Val-d'Oise » comme preuve de proximité sans adresse
FAQ : vous déplacez-vous à Cergy / Pontoise ? · pourquoi 80 €/mois plutôt qu'un site payé une fois ? · commerces d'Argenteuil ou de l'est du 95 ?
```
