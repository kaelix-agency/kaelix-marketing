| | |
|---|---|
| **Client** | Transports Ansquer — revue stratégique J90 (INTERNE) |
| **Période** | 2026-10 · J90 du site (mise en ligne fin juillet 2026) |
| **Généré le** | 2026-10-29, tâche planifiée cloud relancée le même jour par Axel avec données à jour (remplace la version du matin, arrêtée au 17/10 faute de clés) |
| **Statut** | ✅ GO d'Axel le 29/10 en session (après travail du bilan client) — décisions : (1) novembre = accueil + page entrepôt + **article commissionnaire en créneau ferme** (pas en réserve) ; (2) « coût tournée » abandonné, facteurs de coût dans le refresh de la page tournée régulière (12/2026) ; (3) J90 effectif du guide et du comparatif = 14/01/2027. Écart avec la proposition §6 : « Externaliser sa logistique en PME » **maintenu en 01/2027** (choix d'Axel), pilier A reporté 02/2027. Plan commité dans `content-plan.md` |
| **Sources** | `reports/2026-10-29-releve-donnees-j90.md` (source unique des chiffres : Search Console jusqu'au 27/10, Haloscan du 29/10, PostHog du 17 au 28/10) ; `content-plan.md`, `tracking.md`, `client-brief.md`, `todo-operateur.md`, revues hebdo S35→S43 ; lecture des titles/meta en ligne et des redirections le 29/10 (session) |
| **Contrôles empêchés** | Avis de la fiche Google : non relevés depuis le 04/09 (aucun navigateur dans cette session). Positions sur téléphone : non relevées (Haloscan mesure l'ordinateur). Les tableaux par page du relevé n'incluent pas 7 pages de service (course urgente, affrètement Europe, international, collecte, débarras, recyclage, préparation de commandes) : leur bilan s'appuie sur les recherches et Haloscan, sinon c'est indiqué. Revue hebdo du 26/10 non produite |

<!-- CLIENT -->

# Revue stratégique J90 — Transports Ansquer

<p class="subtitle">Document interne KAELIX · 1re revue (site relancé fin juillet 2026) · chiffres arrêtés au 27/10 (Search Console), au 28/10 (PostHog) et au 29/10 (Haloscan)</p>

## En une page

- **Le site est de plus en plus vu, pas plus cliqué.** Affichages Google ×2,8 entre août et octobre (1 092 → 3 069), position moyenne 24,6 → 12,1. Clics : 23 → 46 → 39. Le maillon faible n'est plus d'être trouvé, c'est d'être choisi.
- **Le blog fait 35 % des affichages et 11 % des clics** sur 90 jours (2 089 affichages, 12 clics). Les deux articles conteneurs sont en position 6-7 avec un taux de clic de 0,6 % : Google répond lui-même à une partie des recherches.
- **La grappe locale est en page 1, nulle part dans les 3 premières** (Haloscan 29/10 : 6ᵉ, 6ᵉ, 9ᵉ). Sur « transporteur gennevilliers », 203 affichages en 90 jours et 0 clic : la carte Google prend les clics. Une fiche Google non conforme bride tout refresh de l'accueil.
- **Premiers contacts mesurés : 4 contacts commerciaux en 12 jours** (3 appels, 1 devis), tous sur des pages de service ou l'accueil, aucun sur le blog. Les 6 clics e-mail viennent de la page recrutement : ce sont des candidatures.
- **Le gisement le plus net à travailler tout de suite** : « crossdocking île de france », 94 affichages en position 4 et 0 clic sur `/stockage/entrepot-gennevilliers/`, page sortie de sa période de test.

## 1. Bilan stable des positions

Le site a passé ses 90 jours : les positions ci-dessous sont celles que Google a fini par attribuer, plus des positions de test. Règle de lecture : **Search Console = clics et affichages, Haloscan = positions de référence, jamais additionnés.**

### Évolution mensuelle (Search Console)

| Mois | Clics | Affichages | Taux de clic | Position moyenne |
|---|---|---|---|---|
| Août | 23 | 1 092 | 2,1 % | 24,6 |
| Septembre | 46 | 1 835 | 2,5 % | 16,7 |
| Octobre (au 27) | 39 | 3 069 | 1,3 % | 12,1 |

### Toutes les pages (Search Console 90 jours, 30/07 → 27/10 ; Haloscan au 29/10)

| Page | Clics | Affichages | Position GSC | Meilleure position Haloscan (mot-clé) | Lecture |
|---|---|---|---|---|---|
| `/` accueil | 71 | 1 616 | 11,4 | 6 (gennevilliers transport, 170/mois) · 6 (transporteur gennevilliers, 110) · 9 (transport gennevilliers, 170) | 66 % des clics du site, dont 11 sur la marque (« transport ansquer », position 1) |
| `/transport/` hub | 1 | 307 | 34,1 | 14 (transport et valorisation paris) | hub faible, hors gisement 4-20 sur ses requêtes de tête |
| `/stockage/` hub | 3 | 174 | 12,7 | 19 (schenker gennevilliers, marque tierce) · 24 (stockage gennevilliers) | trafic opportuniste de marques tierces |
| `/transport/hayon-20m3-paris/` | 8 | 188 | 7,3 | — | 2ᵉ page du site en clics, taux 4,3 % : au-dessus de l'attendu |
| `/transport/tournee-reguliere/` ⭐ | 2 | 54 | 10,2 | 13 (tournée régulière transport) | priorité business, dans le gisement 4-20 |
| `/transport/transport-pl-ile-de-france/` | 2 | 194 | 20,2 | 10 (transporteur pl) · 15 (transport poids lourd idf) | bord du gisement |
| `/transport/course-urgente/` | absente de l'extrait page | — | — | 43 (course urgente) | la recherche « course urgente » pèse 165 affichages en position 21,8 sur 90 j |
| `/transport/affretement-europe/` | absente de l'extrait page | — | — | 42 (affretement routier europeen) | « affretement routier europeen » 65 affichages, position 41,3 |
| `/transport/transport-international/` | absente de l'extrait page | — | — | 22 (commissionnaire de transport international) | 91 affichages en position 40,4 sur cette recherche (GSC) |
| `/transport/recyclage-tri/` | absente de l'extrait page | — | — | — | « transport déchets recyclables » 27 affichages, position 13,9 |
| `/transport/collecte-valorisation/`, `/transport/debarras/`, `/stockage/preparation-commandes/` | absentes de l'extrait page | — | — | — | aucun signal dans le relevé |
| `/stockage/entrepot-gennevilliers/` | 2 | 285 | 13,2 | 32 (crossdocking) | **plus gros manque de clics du site** (section 2) |
| `/stockage/groupage-degroupage/` | 2 | 57 | 24,2 | — | — |
| `/stockage/depotage-empotage-conteneurs/` (pilier A) | 1 | 267 | 25,2 | 39 (dépotage conteneur) | recule sur les requêtes nationales depuis l'indexation du guide (doctrine actée : le guide prend le national) ; **1 appel mesuré** |
| `/stockage/externalisation-logistique/` | 1 | 231 | 22,8 | 36 (externaliser logistique, 720/mois) | hors gisement, tête très concurrentielle |
| `/entreprise/` | 1 | 73 | 29,6 | — | — |
| `/contact/` | 0 | 173 | 16,0 | 36 (entreprise de transport gennevilliers) | sort sur la marque (« transport ansquer » 35 affichages, position 6,6) |
| `/recrutement/` | 2 | 38 | 25,9 | — | apporte les 6 clics e-mail PostHog (candidatures) |
| `/blog/` | 0 | 22 | 15,4 | — | — |
| **Article tournée** (24/08) | 0 | 53 | 8,9 | — | 28 j : 15 affichages, position 6,8 |
| **Guide empotage/dépotage** (28/08, indexé le 16/10) | 6 | 1 006 | 7,3 | 16 (plan d'empotage, dépotage douane, dépotage industriel) · 18 (dépotage, 100/mois) | 1 006 affichages en 11 jours d'indexation |
| **Comparatif dédié/messagerie/coursier** (02/09, indexé le 16/10) | 0 | 91 | 9,6 | — | trop tôt pour conclure |
| **Article palettes** (14/09) | 6 | 939 | 6,3 | — (non scrapé) | 28 j : 656 affichages, position 6,1, 6 clics |

**Hygiène d'index** : trois anciennes URL WordPress apparaissent encore dans Google (`/lexternalisation-de-votre-logistique/` 115 affichages en position 69, `/98ee9-contact/` 20, `/mention-legal/` 4). Vérifié le 29/10 : les trois redirigent bien (308) vers leur nouvelle adresse. Rien à faire, sinon le contrôler au prochain `/tech-audit`.

## 2. Écarts de clics (taux de clic réel vs attendu à la position)

Source : relevé §4 (`ctr-gap` 90 jours, page × recherche, position ≤ 20, ≥ 20 affichages). La courbe attendue sert à **classer**, jamais à promettre des clics.

| Page × recherche | Affichages | Clics | Position | Attendu | Manque | Cause qualifiée | Action |
|---|---|---|---|---|---|---|---|
| `/stockage/entrepot-gennevilliers/` × crossdocking île de france | 94 | 0 | 4,0 | 6,1 % | 6 | **title/meta faible sur l'intention** : le title en ligne (« Stockage et cross-docking à Gennevilliers, 300 m² ») et la meta ne disent ni « Île-de-France » ni ce que le cross-dock apporte (délai, quai PL + VL) | refresh title/meta/FAQ **dès novembre** (page sortie de ses 90 jours) |
| `/` × transporteur gennevilliers | 203 | 0 | 9,0 | 2,0 % | 4 | **SERP : la carte Google prend les clics** (le title contient déjà « transporteur … Gennevilliers ») | conformité fiche Google (to-do #2/#2b) **avant** le refresh de l'accueil |
| Guide empotage × empotage / dépotage conteneur / dépotage | 76 + 30 + 20 | 0 | 7,3-8,5 | 2,2-2,8 % | 4 | SERP en partie définitionnelle (le mot seul « empotage » appelle une définition affichée par Google) | ⛔ règle des 90 jours : rien avant le **14/01/2027** (J90 effectif) |
| `/contact/` et `/transport/` × transport ansquer | 35 + 28 | 0 | 6,6 / 9,7 | — | 2 | recherche de marque : l'accueil est 1er avec un taux de clic de 26,8 % ; les deux autres pages sont des doublons de résultat, pas un manque | aucune |
| `/stockage/externalisation-logistique/` × entrepôt de stockage externalisé | 52 | 0 | 17,9 | 0,8 % | 0 | position trop basse pour qu'un title change quelque chose | refresh de fond (plan 01-02/2027) |

**Par page (calcul de la session sur les chiffres 90 jours du relevé, mêmes niveaux de courbe ; ordre de grandeur pour classer)** : article palettes 939 affichages, 0,6 % en position 6,3 pour ~3,3 % attendus, soit environ 25 clics manquants ; guide empotage 1 006 affichages, 0,6 % en position 7,3 pour ~2,8 % attendus, environ 22. Ce sont les deux plus gros écarts du site, et les deux sont des contenus en période de test. La cause est la même : **Google affiche la réponse** (le nombre de palettes, la définition de l'empotage) et l'internaute n'a plus besoin de cliquer. À l'inverse, la page hayon 20 m³ (4,3 % en position 7,3) et l'accueil font mieux que la courbe : **le problème n'est pas l'écriture des titles du site, c'est le type de recherche.**

## 3. Ciblage

### Recherches en positions 4-20 à pousser vers le top 3 (Haloscan 29/10, sauf mention)

| Recherche | Volume/mois | Position | Page | Levier |
|---|---|---|---|---|
| gennevilliers transport | 170 | 6 | `/` | fiche Google conforme + refresh accueil (11/2026) |
| transporteur gennevilliers | 110 | 6 | `/` | idem ; la carte capte les clics |
| transport gennevilliers | 170 | 9 | `/` | idem |
| entreprise de transport gennevilliers | 40 | 10 | `/` | idem |
| crossdocking île de france | (GSC : 94 affichages/90 j) | 4,0 (GSC) | `/stockage/entrepot-gennevilliers/` | title/meta/FAQ orientés Île-de-France (11/2026) |
| tournée régulière transport ⭐ | NA | 13 | `/transport/tournee-reguliere/` | refresh de la page service (12/2026), priorité business |
| transporteur pl / transport poids lourd idf | 20 / 10 | 10 / 15 | `/transport/transport-pl-ile-de-france/` | volumes faibles : maillage depuis le hub au refresh du hub |
| dépotage / plan d'empotage / dépotage douane | 100 / 10 / 10 | 16-18 | guide empotage | J90 effectif 14/01/2027 : observation |
| transport déchets recyclables | (GSC : 27 affichages) | 13,9 (GSC) | `/transport/recyclage-tri/` | trop faible pour un slot ; à reconsidérer à la J90 de janvier |

Écartées volontairement : « schenker gennevilliers » (19), « xpo gennevilliers » (19), « svp transport gennevilliers » (18) sont des marques tierces (brief §5B, trafic opportuniste).

### Recherches à affichages sans page qui les porte vraiment

- **« commissionnaire de transport international »** : 91 affichages en position 40,4 (GSC), Haloscan place `/transport/transport-international/` 22ᵉ. Signal le plus constant depuis septembre (entre 32 et 51 affichages sur 28 jours à chaque weekly, 91 sur 90 jours) : c'est le sujet du cluster B « Commissionnaire vs transporteur », reporté deux fois.
- **« course urgente »** : 165 affichages en position 21,8 ; la page dédiée existe mais est 43ᵉ sur Haloscan. Le refresh « hub urgence » est la réponse, pas une création (décision anti-cannibalisation du 02/08).
- **« affretement routier europeen »** : 65 affichages en position 41,3 ; la page existe (42ᵉ), le guide affrètement reste reporté.
- « courier services gennevilliers » (24, position 40,6) : territoire coursier deux-roues, hors positionnement fourgon, écarté.

### Sujets écartés ou à vérifier parce que la page de résultats répond seule (verdict zéro-clic)

- Les recherches « combien de palettes dans un conteneur … » : réponse affichée par Google. L'article reste utile (affichages, autorité du cluster A) mais **son refresh doit vendre ce que la réponse affichée ne donne pas** : la table complète gerbé/non gerbé, la limite de poids routière, le plan de chargement.
- **Candidat « Poids d'un conteneur »** : même risque (tare, charge utile = un chiffre affiché par Google). Il ne se date pas sans un `/research` qui rend son verdict zéro-clic. Proposé en observation, pas au calendrier.

## 4. Verdicts J90 par contenu

### Pages du site (J90 atteint fin octobre 2026)

| Page | Verdict | Pourquoi |
|---|---|---|
| `/` accueil | **pousser** (refresh 11/2026) | grappe locale 6-9, gisement n°1 en volume ; prérequis : fiche Google conforme |
| `/stockage/entrepot-gennevilliers/` | **refresh orienté clic** (11/2026) | position 4 sans clic sur une recherche commerciale régionale |
| `/transport/tournee-reguliere/` ⭐ | **pousser** (12/2026) | 10-13, priorité business, cible du maillage des 3 articles du cluster F |
| `/stockage/depotage-empotage-conteneurs/` | **pousser, local + conversion** (01/2027) | position 25 sur 90 j, mais 1 appel mesuré en 12 jours : page qui convertit |
| `/transport/course-urgente/` | **refresh hub urgence** (02/2027) | hors gisement 4-20 (21,8 GSC, 43 Haloscan), persona P3 hors priorité |
| `/stockage/externalisation-logistique/` | refresh avec le satellite PME (02/2027) | 22,8 / 36 : travail de fond, pas de title |
| `/transport/` hub | **reporter** (était 12/2026) | position 34 : hors gisement |
| `/transport/hayon-20m3-paris/`, `/transport/transport-pl-ile-de-france/` | **laisser** | hayon au-dessus de la courbe ; PL à faible volume |
| Autres pages de service, `/stockage/`, `/entreprise/`, `/contact/`, `/recrutement/` | **laisser** | pas de signal exploitable |

### Articles

| Article | Publié | J90 | État à date | Verdict proposé |
|---|---|---|---|---|
| Tournée régulière | 24/08 | **22/11/2026** | 53 affichages, position 8,9, 0 clic | verdict au 22/11 ; d'ici là rien. Piste : refresh léger couplé à celui de la page service en décembre |
| Guide empotage/dépotage | 28/08 (indexé 16/10) | **14/01/2027** (effectif) | 1 006 affichages, position 7,3, 6 clics | refresh orienté clic à partir du 14/01 (title/meta/FAQ + angle « durée et organisation réelles du quai ») |
| Comparatif dédié/messagerie/coursier | 02/09 (indexé 16/10) | **14/01/2027** (effectif) | 91 affichages, position 9,6, 0 clic | observation |
| Palettes | 14/09 | **13/12/2026** | 939 affichages, position 6,3, 6 clics | **refresh orienté clic dès le 13/12** (piste 3) |

Les J90 « effectifs » du guide et du comparatif partent de leur indexation du 16/10 (sept semaines bloqués par une entrée de sitemap parasite) et non de leur publication. Les dates de publication donneraient 26/11 et 01/12 : trop tôt, Google ne les teste que depuis deux semaines. **À acter** (décision 3).

## 5. Résultats business (PostHog, 17/10 → 28/10, 12 jours)

La mesure on-site des contacts, piste 4 du 15/10, est **branchée depuis le 17/10** (PR #9 et #10 du site, politique de confidentialité à jour). Premier relevé :

| | Total | dont commercial |
|---|---|---|
| Visites (onglets) | 93 | — |
| Clics téléphone | 3 | 3 (2 sur l'accueil, 1 sur la page dépotage/empotage) |
| Clics e-mail | 6 | **0** (les 6 sur `/recrutement/` : candidatures) |
| Formulaires de devis envoyés | 1 | 1 (`/devis/`) |
| **Contacts** | 10 | **4** |

Ce qu'on peut en dire : **4 contacts commerciaux en 12 jours, tous sur l'accueil ou une page de service.** Les articles du blog ont reçu 13 visites et 0 contact sur la période. Ce qu'on ne peut pas en dire : la source (PostHog ne garde pas le site d'origine, donc impossible de savoir combien viennent de Google), un taux par page (moins de 50 visites partout), une tendance (première période). Aucun clic n'est converti en client dans ce document.

Conséquence pour la mesure : à partir de la prochaine weekly, **compter les contacts de `/recrutement/` à part**. Sinon les candidatures doublent le chiffre des contacts dans les rapports client.

## 6. Proposition de plan éditorial (novembre 2026 → janvier 2027)

Cadre : capacité de relecture 2 contenus/mois (3ᵉ slot = réserve), **GO mensuel groupé** depuis le 28/10 (§1.30, la révision du 29/10 tient lieu de GO de novembre), règle d'or **refreshes 4-20 avant créations**, priorité business tournées ⭐. Les quatre pistes du 15/10 y sont appliquées : (1) chaque sujet est choisi pour l'intention de clic ou de contact, pas pour le volume ; (2) chaque refresh ajoute un composant visuel (schéma maison, table) et sa qualité se juge au J90 suivant et aux contacts ; (3) les refreshes title/meta/FAQ orientés clic démarrent à la sortie des 90 jours de chaque page ; (4) la mesure des contacts est en place, sa lecture se corrige (recrutement à part).

| Mois | Type | Sujet | Statut actuel → proposé | Justification |
|---|---|---|---|---|
| 11/2026 | refresh | **Accueil — grappe locale** (title/meta, section Gennevilliers + port, FAQ locale, appel en premier) | `prévu` → **`go-11/2026`** | 4 recherches en 6-10, 490 recherches/mois cumulées ; **prérequis : fiche Google #2/#2b faite avant la PR**, sinon le refresh ne rendra rien |
| 11/2026 | refresh (nouveau) | **`/stockage/entrepot-gennevilliers/` — cross-docking Île-de-France** (title/meta + FAQ + schéma du flux quai PL → quai VL) | nouvelle ligne → **`go-11/2026`** | plus gros manque de clics du site, position 4, page hors période de test ; refresh léger |
| 11/2026 (réserve) | création | **Commissionnaire de transport vs transporteur : qui mandater ?** | `reporté` → **`go-11/2026` si la réserve est ouverte**, sinon `reporté` 12/2026 | signal présent à chaque weekly depuis septembre (91 affichages sur 90 j, Haloscan 22) ; intention de choix, donc de contact ; aucun first-party à attendre |
| 11/2026 | refresh | Hub urgence `/transport/course-urgente/` | `prévu` 11 → **`reporté` 02/2027** | hors gisement 4-20 (21,8 / 43), persona P3 ; délais réels par zone jamais reçus (invariant 14) |
| 12/2026 | refresh | **Article palettes — orienté clic** (à partir du 13/12 : title/meta qui promettent ce que la réponse affichée ne donne pas, FAQ, calcul selon le poids) | nouvelle ligne → `prévu` (GO de décembre) | ~25 clics manquants sur 90 j, piste 3 ; J90 le 13/12 |
| 12/2026 | refresh | **Page service `/transport/tournee-reguliere/`** + section « ce qui fait le prix d'une tournée » (facteurs, jamais de prix) ; refresh léger de l'article tournée selon son verdict du 22/11 | nouvelle ligne → `prévu` (GO de décembre) | 10-13, priorité ⭐ ; absorbe l'intention du sujet « coût tournée » sans publier de prix |
| 12/2026 | refresh | Hub `/transport/` | `prévu` 12 → **`reporté` 02/2027** | position 34, hors gisement |
| 12/2026 | refresh | Pilier A `/stockage/depotage-empotage-conteneurs/` | `prévu` 12 → **`reporté` 01/2027** | laissé derrière les deux refreshes 4-20 de décembre |
| 10/2026 | création | Combien coûte une tournée régulière externalisée | « à requalifier » → **`abandonné` (en création)** | refus tarifaire définitif : une page « combien coûte » sans chiffre ne sert pas l'intention ; les facteurs de coût passent dans le refresh de la page service (12/2026) |
| 01/2027 | refresh | **Guide empotage/dépotage — orienté clic** (à partir du 14/01) | nouvelle ligne → `prévu` | ~22 clics manquants, 2ᵉ écart du site |
| 01/2027 | refresh | **Pilier A — local + conversion** (épaississement, devis, « dépotage conteneur gennevilliers ») | `reporté` 01/2027 | la page convertit (1 appel en 12 jours) ; le guide porte désormais le national |
| 01/2027 | création | Externaliser sa logistique en PME | `prévu` 01 → **`reporté` 02/2027** | `/research` de requalification pas fait ; first-party coût stockage en attente, et invariant 14 : à ré-angler, pas à demander |
| 01/2027 | refresh | Pilier C externalisation logistique | `prévu` 01 → **`reporté` 02/2027** | suit le satellite PME |
| 01/2027 | création | Prestataire logistique en Île-de-France | `reporté` (inchangé) | le signal cross-dock Île-de-France est porté par la page entrepôt (11/2026) ; réexamen à la revue de janvier |
| — | création | Guide « L'affrètement transport » | `reporté` (inchangé) | tête très informationnelle (2 200/mois), risque zéro-clic élevé ; réexamen à la revue de janvier |
| — | création | Candidat « Poids d'un conteneur » | candidat (inchangé) | datation conditionnée à un verdict zéro-clic du `/research` |

**Charge proposée** : novembre 2 + 1 en réserve, décembre 2, janvier 2. Aucun sujet n'est effacé : chaque changement est un statut avec motif, à reporter au journal du plan au moment du GO.

## 7. Enseignements transversaux (propositions d'amendement de `docs/methodologie-seo.md`)

1. **Les articles informationnels gagnent des affichages, pas des clics.** Ansquer : 35 % des affichages, 11 % des clics, 0 contact sur le blog en 12 jours ; les contacts viennent de l'accueil et des pages de service. *Amendement Phase 0* : pour un client local B2B, chaque sujet blog déclare la page de service qu'il nourrit et l'action qu'il déclenche ; le volume ne suffit jamais à le justifier.
2. **Un taux de clic bas se qualifie avant de se corriger.** Les deux plus gros écarts viennent de réponses affichées par Google, pas de titles mal écrits (hayon et accueil font mieux que la courbe). *Amendement Phase 5, étape 42* : « forte impression / faible CTR → qualifier (zéro-clic, carte locale ou title/meta faible) → l'action dépend de la cause », en renvoyant à §1.27.
3. **En local, la carte Google passe avant la page.** 203 affichages, 0 clic en position 9 sur « transporteur gennevilliers ». *Amendement Phase 4 (local)* : le refresh d'une page qui vise « <métier> <ville> » exige une fiche Google conforme, vérifiée avant la PR.
4. **Une entrée de sitemap parasite a coûté sept semaines d'indexation à deux articles.** *Amendement Phase 3* : contrôle d'indexation à J+7 de chaque publication (inspection Search Console) et vérification des sitemaps déclarés ; un article « découvert, non indexé » à J+14 devient une alerte technique de la weekly.
5. **Les contacts se lisent par type de page.** Les candidatures (recrutement) doublaient le compte. *Amendement Phase 5, étape 41* : séparer contacts commerciaux et contacts recrutement dans toute lecture PostHog, chez tous les clients.
6. **Un GO par sujet bloque la production** (octobre 0/2 sans aucun manque de contenu) : déjà corrigé par le GO mensuel (§1.30). À vérifier au cycle suivant : production de novembre réelle contre plan.

Comparaison avec le trimestre équivalent de l'an dernier : sans objet (premier cycle, ancien site WordPress non mesuré).

## Décisions attendues d'Axel

1. **Composition de novembre** : accueil + page entrepôt (cross-docking Île-de-France) en `go-11/2026`, et ouvrir ou non la réserve pour « Commissionnaire vs transporteur ». Prérequis de l'accueil : la fiche Google #2/#2b, mise de côté depuis le 22/10.
2. **« Coût d'une tournée »** : abandonner la création et intégrer les facteurs de coût, sans aucun prix, au refresh de la page service tournée régulière en décembre.
3. **J90 du guide empotage et du comparatif** : acter le 14/01/2027 (à partir de l'indexation) plutôt que le 26/11 et le 01/12. Cela fixe le refresh orienté clic du guide en janvier.
