# Brief de production — Refresh de l'accueil `/` : grappe locale « transporteur / transport Gennevilliers »

| | |
|---|---|
| **Client** | `transports-ansquer` (local, B2B) |
| **Date** | 2026-11-04 (session planifiée « Production du mois ») |
| **Sujet du plan** | cluster D « Local Gennevilliers », ligne 11/2026 « Refresh homepage grappe locale » — **`go-11/2026`** (revue J90 du 29/10, GO d'Axel) |
| **Type** | **refresh `position`** (pages en 4-20 avant créations ; J90 du site passé fin octobre) |
| **Page** | https://transportsansquer.fr/ (`src/app/page.tsx`, title/description hérités de `src/app/layout.tsx`, JSON-LD LocalBusiness dans le layout) |
| **Persona** | P1 (dirigeant / responsable logistique de PME francilienne à flux réguliers) |
| **Typologie** | evergreen |
| **Capture** | appel (`tel:`, en premier) + devis `/devis/` |
| **Statut** | 🔎 **brief prêt** — ⛔ **la rédaction et la PR attendent la fiche Google conforme** (to-do opérateur #2/#2b ; prérequis posé au plan et à la revue J90) |

> ⚠️ **En tête, comme l'exige le process** : SERP Google **non observable** dans cette session (Haloscan `scrap` vide, WebSearch = moteur tiers) → les 3 analyses `serp-analyst` sont **dégradées** ; scroll-check **non vérifiable** (pas de navigateur) ; GSC **non vérifiable** (clé de compte de service absente du conteneur) → les chiffres de clics/impressions sont ceux de la revue J90 du 29/10. Aucun chiffre n'a été inventé.

---

## 0. Prérequis (bloquant pour la PR, pas pour le brief)

**Relevé de la fiche Google du 04/11/2026 par l'API Places (lecture, pas d'écriture)** — `nationalPhoneNumber`, `regularOpeningHours`, `primaryType`, `formattedAddress` :

| Champ | Fiche au 04/11 | Attendu (`nap.md`) | Conforme ? |
|---|---|---|---|
| Téléphone | 06 03 87 31 66 | 06 03 87 31 66 | ✅ (était 01 41 21 07 69 au 20/08) |
| Adresse | Quai 8, 51 Rte Principale du Port Bât G1, 92230 Gennevilliers | 51 route principale du port, bât. G1 quai 8 | ✅ (ne pas toucher) |
| Site | https://transportsansquer.fr/ | idem | ✅ |
| Horaires | lun-jeu 07:30–16:30, ven 07:30–16:00, sam-dim fermé | lun-ven 07:30–12:30 et 13:30–16:00 | ❌ coupure absente, 16:30 lun-jeu |
| Catégorie principale | « Services » (`primaryType: service`) | « Société de transport routier » | ❌ |
| Avis | 1 avis, note 4 | — | (collecte d'avis = action n°1 du brief §6) |

Conséquence : **le prérequis n'est pas rempli** (2 champs sur 4 restent faux). Sur « transporteur gennevilliers », 203 affichages / 0 clic en 90 jours (revue J90) : la carte prend les clics, et une fiche classée « Services » ne joue pas dans le pack « transporteur ». **Règle pour la prochaine exécution** : ne lancer `/write` (ou `/refresh position`) sur ce brief qu'une fois la ligne #2 de `todo-operateur.md` passée ✅ (relevé API Places à refaire en ouverture : horaires à deux plages + catégorie transport). La to-do et le tableau de bord (`a2b`) portent le relevé du jour.

## 1. Mots-clés — relevé Haloscan API du 2026-11-04 (référence unique)

| Mot-clé | Volume | KVI | CPC | Position du site (scrape Haloscan 04/11) | Rôle |
|---|---|---|---|---|---|
| **transporteur gennevilliers** | 110 | 7 | 0,54 € | **6** (`/`) | **principal** — intention commerciale-locale pure |
| transport gennevilliers | 170 | 12 | — | **23 (`/contact/`)** | secondaire — intention mixte (marques tierces, intérim, transports en commun) ; part « trouver un transporteur » minoritaire |
| entreprise de transport gennevilliers | 40 | 10 | — | 10 (`/`) | secondaire |
| société de transport gennevilliers | NA | 25 | — | 12 (`/`) | secondaire |
| transport routier gennevilliers | 20 | 12 | — | 14 (`/`) | secondaire |
| transporteur 92 | 40 | 1 | — | non classé | secondaire (section zone, meta) — jamais en title/H1 (requête ambiguë : bus 92, micro-sociétés « 92 ») |
| transporteur ile de france | 100 | 17 | 2,83 € | — | **hors accueil** → hub `/transport/` (refresh reporté 02/2027) |
| gennevilliers transport | (variante de « transport gennevilliers ») | | | 6 (`/`, Haloscan 29/10) | couvert par le secondaire |

GSC, revue J90 du 29/10 (90 j, non ré-actualisable aujourd'hui) : `/` 71 clics / 1 616 impressions, position 11,4 ; « transporteur gennevilliers » 203 impressions / 0 clic, pos. 9,0 ; 66 % des clics du site passent par l'accueil, dont 11 sur la marque. Haloscan 29/10 : grappe en 6 / 6 / 9 / 10.

`related` et `questions` Haloscan : **bruit** (Granger/Grainger, licence et capacité de transport, formation affréteur) → aucune PAA locale à viser ; la FAQ se construit sur les questions réelles d'un chargeur (zones, gabarit, port), pas sur les PAA.

## 2. Analyses `serp-analyst` (3 instances, toutes **⚠️ dégradées** : SERP reconstituée via moteur tiers, hôtes concurrents et transportsansquer.fr non lisibles)

**« transporteur gennevilliers »** — verdict REFRESH `/`, pos. 6 → top 3. Intention commerciale-locale B2B. Top 5 reconstitué : annuaires (PagesJaunes « transport routier Gennevilliers », 118712 « entreprise de transport Gennevilliers », Cylex « commissionnaires »), page agence Geodis (hub express du port), fiches du pack local (Kieffer, Hoddé, Central Express). **Aucune page de transporteur indépendant riche** : listes NAP + avis agrégés, zéro éditorial. Zéro-clic **partiel** : le pack répond « qui / où / téléphone », pas « quoi confier, depuis où, pour quelles zones, à quel gabarit » → c'est l'angle qui force le clic. Jouabilité 3 mois (grappe déjà acquise, KVI 7-12).

**« transport gennevilliers »** — à garder **secondaire**, jamais principal : requête mixte (adecco transport gennevilliers 436 = intérim ; mtt / svp / vir / faiveley = marques tierces ; Rome2Rio, Omio = transit), part « trouver un transporteur » estimée ≤ 1/4 (non mesurable sans SERP FR). **Conflit interne confirmé** : `/contact/` sort en 23 (title « Contact Transports Ansquer, Gennevilliers 92230 », meta avec l'adresse complète) alors que l'accueil dit « transporteur » sans l'expression « transport à Gennevilliers ». Remède : porter l'expression sur `/` (intro + section + FAQ), recentrer le title de `/contact/` sur « Contact » (garder l'adresse : NAP), ne pas créer de page.

**« transporteur 92 »** — secondaire de l'accueil, **aucune page distincte** (40 / KVI 1, SERP d'annuaires et de micro-sociétés, requête ambiguë). Recommandation : un H2 « dans les Hauts-de-Seine (92) » avec la desserte first-party (secteurs 92/94/78/95, Paris en hayon), « Hauts-de-Seine (92) » dans la meta, « Île-de-France » laissé au hub.

**Règle du scroll** : ⚠️ non vérifiable par outil (pas de navigateur en session planifiée). Attendu d'après Haloscan (`local_listings, map`) et le CPC bas : pack local en tête, pubs rares, premier organique après 1-2 scrolls → non disqualifiant. **Fallback opérateur** : relevé Chrome (« transporteur gennevilliers », mobile) à faire en session interactive, 2 requêtes max, et à tracer ici.

**Zéro-clic (§1.27)** : partiel. Le pack local absorbe les clics d'information (adresse, téléphone), d'où 203 imprs / 0 clic. L'accueil ne regagne des clics que (a) par la fiche conforme (pack) et (b) par un extrait qui vend ce que la carte ne donne pas : périmètre VL / PL / affrètement / stockage, implantation dans le port, zones, devis sous 24 h.

## 3. Anti-cannibalisation (trois fronts)

- **Haloscan** : la grappe locale est portée par `/` sur 4 requêtes ; seule « transport gennevilliers » fuit vers `/contact/` (23). `/stockage/` sort sur « logistique gennevilliers » (14) et « stockage gennevilliers » (24) : intentions différentes (logistique / stockage), pas de conflit avec « transporteur ».
- **`tracking.md`** : aucun contenu publié ne vise « transporteur / transport Gennevilliers » ; les 4 articles du blog ne lient pas l'accueil avec une ancre locale (grep : aucun `](/)`) → gisement de maillage entrant.
- **`content-plan.md`** : un seul sujet local Gennevilliers (celui-ci). Le refresh de `/stockage/entrepot-gennevilliers/` (publié 02/11) vise « cross-docking Île-de-France » : disjoint. Le hub `/transport/` (refresh 02/2027) garde « transporteur ile de france » : **ne pas** mettre « Île-de-France » en title de l'accueil, ne pas mettre « Gennevilliers » en title du hub.
- **Décision** : refresh de `/` + **retouche de title de `/contact/`** dans la même PR (« Contact » recentré, adresse et téléphone inchangés) ; aucune page neuve.

## 4. Content gap (ce que le top 5 ne dit pas)

1. Une offre **VL depuis le port** (9 / 14 / 20 m³ hayon) avec les **zones de tournée** réellement desservies (92, 94, 78, 95) et Paris en hayon.
2. **« Quoi confier à qui »** localement : livraison IdF vs dépotage sur quai vs affrètement PL / Europe vs stockage et cross-docking.
3. **Signal E-E-A-T local** : implantation physique dans le port (bât. G1, quai 8), entrepôt 300 m² à deux quais, entreprise fondée en 2021 par un professionnel comptant 23 ans de métier, inscrite au registre des commissionnaires (**sans numéro**).
4. Lever l'ambiguïté « transport Gennevilliers » (transit, intérim) dès l'intro : **transport de marchandises**.

## 5. Information gain — first-party mobilisé (brief §7, tout déjà reçu ; **aucune sollicitation client**, invariant 14)

| Élément | Source | Usage dans le refresh |
|---|---|---|
| Implantation dans le port : 51 route principale du port, bât. G1, quai 8 | `nap.md` | section « Implantés dans le port de Gennevilliers » + FAQ accès (renvoi `/contact/` pour le plan) |
| Entrepôt 300 m², 1 quai PL + 1 quai VL, chariot + gerbeur | socle produit | déjà sur la page (bloc moyens) : à relier à « on dépote et on redistribue depuis le port » |
| Secteurs de tournée **92 / 94 / 78 / 95**, tournées quotidiennes, 6-7 points, retour au dépôt | entretien 06/08 | section « Zones desservies » + **schéma SVG maison** des 4 départements autour du port (couleurs `globals.css`, aucun effectif, aucun tarif) |
| Boucle type du mardi : Paris → Issy-les-Moulineaux → Clamart et alentours → Nanterre (anonymisée) | entretien 06/08 | exemple concret du H2 « dans les Hauts-de-Seine » (sans nom de client) |
| Fondée en 2021 par un professionnel comptant 23 ans de métier | §7 garde-fous | une phrase E-E-A-T, formulation impersonnelle (pas de nom : porte-parole non autorisé) |
| Inscrit au registre des commissionnaires de transport | socle | une mention, jamais de numéro |
| Réponse sous 24 heures | promesse du site / description GBP validée | CTA et FAQ |
| Avis Google | fiche : 1 avis, note 4 | ⛔ pas de `Testimonial` ni d'extrait d'avis tant que l'avis n'est pas copié verbatim et sourcé (brief §3) ; **rien** dans cette version |

⛔ Interdits à respecter dans le texte comme dans le schéma : nombre de véhicules, « 24 h/24 – 7 j/7 », fourchette tarifaire, « 23 ans » attribués à l'entreprise, nom de client, tiret cadratin.

## 6. Angle et format

**Angle** : « Transporteur à Gennevilliers, implanté dans le port : transport de marchandises en Île-de-France, stockage et dépotage sur quai » — la seule page de la SERP qui dit **ce qu'on fait, pour qui, d'où, et vers quelles zones**, avec un devis sous 24 h. L'accueil reste une page de marque : on **ajoute** un étage local, on ne la transforme pas en page-ville.

**Refresh `position`, ~80 % de la page inchangés** : la boucle (01), les pôles (02), la flotte (03) et le bandeau port restent. Ce qui change :

| Élément | Aujourd'hui | Proposé |
|---|---|---|
| **Title** (layout, 58 c.) | « Transports Ansquer, transporteur au port de Gennevilliers » | « Transporteur à Gennevilliers (92) \| Transports Ansquer » (≈ 52 c.) — « transporteur » + « Gennevilliers » en tête, « 92 » pour la traîne |
| **Meta** (layout, 156 c.) | « Transporteur et commissionnaire au port de Gennevilliers : transport, stockage et manutention en Île-de-France, affrètement Europe et international. » | « Transport de marchandises à Gennevilliers et en Île-de-France : fourgons à hayon, entrepôt de 300 m² à deux quais dans le port, affrètement Europe. Réponse sous 24 h. » (≈ 157 c., à ajuster ≤ 160) |
| **H1** | « Transport, stockage, manutention. » | « Transporteur à Gennevilliers : transport, stockage et manutention dans le port » (H1 ≠ title) |
| **Intro du hero** | « Transporteur et commissionnaire au port de Gennevilliers… » | garder, en ouvrant par « Transport de marchandises à Gennevilliers et en Île-de-France : … » (lève l'ambiguïté transit / intérim) |
| **CTA du hero** | devis puis téléphone | **téléphone en premier** (décision J90 : « appel en premier » ; 3 clics tél sur 3 contacts mesurés), devis en second |
| **Nouvelle section 04 « Implantés dans le port de Gennevilliers »** | — | 2 colonnes : (a) l'implantation (bât. G1, quai 8, 300 m², quai PL + quai VL, « un conteneur arrivé au port se dépote à quai et repart en fourgon ») ; (b) « Transporteur dans les Hauts-de-Seine (92) et en Île-de-France » : secteurs 92 / 94 / 78 / 95 en tournées quotidiennes, Paris en 20 m³ hayon, la boucle du mardi en exemple anonymisé ; **schéma SVG maison** `public/images/zones-tournees-port-gennevilliers.svg` (port au centre, 4 départements + Paris, alt complet). Communes citées seulement comme communes desservies (Nanterre, Issy, Clamart viennent de la boucle réelle ; Asnières, Colombes, Clichy, Levallois : pas de preuve → ne pas citer comme références) |
| **Bloc « Ce que vous pouvez nous confier »** | (les pôles existent) | 4 liens contextualisés : hayon 20 m³ Paris, tournée régulière, dépotage / empotage, entrepôt cross-docking (ancres descriptives) — peut vivre dans la section 04 plutôt qu'en section à part |
| **FAQ 05 (5 questions) + JSON-LD `FAQPage`** | aucune FAQ sur l'accueil | voir §7 ; même mécanique `ServiceFaq` (`<details>`), même liste pour l'affichage et le JSON-LD |
| **JSON-LD LocalBusiness** (layout) | `areaServed` = « Île-de-France » | `areaServed` = liste : Gennevilliers (Place), Hauts-de-Seine, Val-de-Marne, Yvelines, Val-d'Oise (AdministrativeArea), Paris (Place) — **uniquement les secteurs confirmés** ; `description` = texte GBP validé §2 bis `nap.md` (cohérence NAP) ; horaires inchangés |
| **`/contact/`** | title « Contact Transports Ansquer, Gennevilliers 92230 » | « Contact \| Transports Ansquer » (ou « Nous trouver dans le port de Gennevilliers ») ; meta et NAP inchangés ; lien « transporteur à Gennevilliers » vers `/` dans le corps |
| **Maillage entrant** | aucune ancre locale vers `/` | ancre « transporteur à Gennevilliers » depuis `/entreprise/` et depuis le pied de page (bloc NAP) ; les 4 articles du blog sont en fenêtre 90 j : **ne pas les toucher** (règle 6), à faire à leur J90 |

Longueur visée : + 350 à 450 mots (section 04 + FAQ), soit ≈ 900-1 000 mots visibles. Ton B2B sobre, vouvoiement, phrases courtes, pas de cadratin.

## 7. FAQ (5, réponses sur le first-party, sans chiffre inventé)

1. **Quelles zones livrez-vous depuis Gennevilliers ?** → Paris et la petite couronne en premier, tournées quotidiennes dans les Hauts-de-Seine, le Val-de-Marne, les Yvelines et le Val-d'Oise ; au-delà, affrètement France et Europe en commissionnaire.
2. **Transporteur à Gennevilliers : fourgon ou poids lourd, comment choisir ?** → 20 m³ hayon pour livrer sans quai, 14 m³ tournées multi-points, 9 m³ urgence ; PL organisé en commissionnaire ; renvoi `/transport/transport-pl-ile-de-france/`.
3. **Un conteneur arrive au port de Gennevilliers : pouvez-vous le dépoter et livrer en Île-de-France dans la foulée ?** → oui, quai PL → tri sur 300 m² → quai VL (cross-docking) ; renvoi `/stockage/depotage-empotage-conteneurs/` et `/stockage/entrepot-gennevilliers/`.
4. **Où se trouve votre dépôt dans le port et quels sont ses horaires ?** → 51 route principale du port, bât. G1, quai 8 ; lun-ven 7 h 30-12 h 30 et 13 h 30-16 h ; week-end sur demande exceptionnelle (jamais « astreinte ») ; renvoi `/contact/`.
5. **Comment obtenir un devis pour un transport ponctuel ou une tournée régulière ?** → formulaire `/devis/` ou appel, réponse sous 24 h ; l'hebdomadaire justifie le régulier (seuil first-party) ; renvoi `/transport/tournee-reguliere/`.

## 8. Vérifications prévues au `/write` (double PASS)

- `fact-checker` : NAP contre `nap.md` ; secteurs 92/94/78/95 et boucle du mardi contre le brief §7 ; « 2021 / 23 ans » (formulation impersonnelle) ; registre sans numéro ; aucun effectif, aucun tarif, aucun 24/7 ; horaires ; communes citées = uniquement celles de la boucle ou des départements.
- `contract-checker` : page TSX (pas de MDX) → title/meta/H1, FAQ visible = JSON-LD, LocalBusiness aligné NAP, maillage vers des routes existantes, capture, pas de cadratin ; E2E du site : `parcours-visiteur.spec.ts` (accueil : pôle, téléphone, sections révélées, liens internes) et `smoke.spec.ts` à rejouer ; spec nouvelle « accueil-grappe-locale » (title, H1, section port, FAQPage, areaServed) vue rouge puis verte.
- Non-régression : Lighthouse desktop + mobile sur `/` (le hero reste le LCP ; le SVG en `lazy`).

## 9. Questions fermées pour le gate (à reporter dans la PR)

1. Le title perd « Transports Ansquer » en tête au profit de « Transporteur à Gennevilliers (92) » : d'accord ? (la marque reste en fin de title et en H1 du hero via le logo)
2. Téléphone avant devis dans le hero : d'accord ? (décision J90 « appel en premier »)
3. Citer Nanterre, Issy-les-Moulineaux et Clamart comme exemples de boucle (anonymisée) sur l'accueil : d'accord ?
4. `/contact/` perd « Gennevilliers 92230 » de son title (adresse conservée dans la page et la meta) : d'accord ?

## 10. Contrôles empêchés (tels quels)

| Contrôle | État | Raison |
|---|---|---|
| SERP Google réelle (3 mots-clés) | ⚠️ non vérifiable | Haloscan `scrap` vide ; WebSearch = moteur tiers ; transportsansquer.fr, 118712.fr hors réseau des subagents |
| Scroll-check (desktop / mobile) | ⚠️ non vérifiable | pas de navigateur en session planifiée ; fallback opérateur (2 requêtes) |
| Zéro-clic re-vérifié | ⚠️ non vérifiable | idem ; verdict partiel déduit de GSC 29/10 + `local_listings` Haloscan |
| GSC 28 j / 90 j du jour | ⚠️ non vérifiable | clé de compte de service absente du conteneur (`GSC_SERVICE_ACCOUNT_B64` non définie) |
| Fiche Google : zone desservie, description, catégories secondaires | ⚠️ non vérifiable | l'API Places n'expose ni la zone ni la description ; seuls téléphone, horaires, adresse, type principal, avis ont été relevés |
| Haloscan KPI, positions du domaine, match, related, questions | ✅ relevés le 04/11 | API directe (`haloscan-fetch.mjs`) |
| Code du site (`page.tsx`, `layout.tsx`, `company.ts`, `/contact/`) | ✅ lu | dépôt cloné dans la session |

---

*Brief persisté avant toute présentation (CLAUDE.md, arborescence `research/`). Prochaine étape : `/write` dès que la to-do #2 est ✅ ; d'ici là, le sujet reste `brief prêt`.*
