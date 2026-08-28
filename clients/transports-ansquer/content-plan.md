# Plan éditorial — Transports Ansquer

| | |
|---|---|
| **Client** | `transports-ansquer` |
| **Horizon** | 6 mois — de 08/2026 à 01/2027 |
| **Généré le** | 2026-08-02 |
| **Statut** | 🕓 brouillon |
| **Validé le** | — |
| **Prochaine révision** | 2026-11 (trimestrielle — coïncide avec le verdict J90 du site) |
| **Cadence contractuelle** | non contractualisée — la capacité opérateur fait foi |
| **Capacité de relecture opérateur** | 2-3 contenus / mois (déclarée le 2026-08-02) |
| **Volume retenu** | **2 contenus / mois** (3ᵉ slot = réserve, jamais planifié d'office) |

---

## ⚠️ Règle d'or de ce plan

> **Les refreshes de l'existant en positions 4-20 se planifient AVANT toute création.**
>
> Pousser vers le top 3 une page déjà positionnée est le levier le plus rentable du SEO : hors top 3, le trafic est très faible, et l'optimisation de l'existant augmente le trafic **sans rien créer**.

> **Second garde-fou — le throttle.** Le volume mensuel se cale sur la **capacité de relecture**, jamais sur la capacité de génération.

**⚠️ Exception documentée de ce plan** : le site entier (rebuild) est en fenêtre de test 90 jours jusqu'à ~fin octobre 2026 (`tracking.md`). Les refreshes de l'existant, prioritaires en valeur, sont donc **datés à partir de novembre 2026** ; les créations blog occupent août-octobre (le blog est vide : rien n'y est en re-test — lecture validée par l'opérateur le 2026-08-02). **Prérequis bloquant aux créations** : chantier pipeline MDX + composants v2 côté repo du site (cf. brief §2).

**⭐ Priorité business (retour client via opérateur, gate du 2026-08-02)** : développer en priorité les **tournées VL régulières en IdF** — persona P1. Cette priorité **prime sur les volumes Haloscan** : les paris émergents du cluster F sont assumés et justifiés par elle. Le calendrier alterne chaque mois 1 contenu P1 + 1 contenu P2 (le quick-win conteneurs, difficulté nulle, reste pertinent).

**⛔ Règle de dégradation first-party (gate du 2026-08-02)** : si le first-party d'un sujet ⭐ n'est pas reçu à **J-7 de sa production**, le sujet **glisse d'un mois** (statut `reporté`, motif tracé au tableau et au journal) et son slot est pris par le sujet suivant du calendrier. On ne publie jamais un pari émergent vidé de son information gain — un contenu générique sur un mot-clé à volume nul cumule les deux raisons de ne pas exister.

---

## 1. Clusters

### Cluster A — Conteneurs (dépotage / empotage)

| | |
|---|---|
| **Page pilier** | `/stockage/depotage-empotage-conteneurs/` |
| **Statut du pilier** | existante (refresh épaississement à J90) |
| **Objectif SEO** | **Doctrine actée au gate du 2026-08-28** : le **guide blog** (08/2026) vise les requêtes **nationales** « empotage conteneur » (210) + « dépotage conteneur » (110/70, Haloscan 28/08 — la SERP récompense le format guide, pas la page service) ; le **pilier** vise le **local + la conversion** : « dépotage conteneur gennevilliers / île-de-france », « transport container gennevilliers » (brief §5B) + devis. Maillage guide → pilier obligatoire, pilier → guide au refresh 12/2026. Traîne « combien de palettes » (~230/mois cumulés) → article 09/2026 |
| **Mot-clé pilier** | dépotage / empotage conteneur (Gennevilliers) |
| **Persona dominant** | P2 — importateur/chargeur du port |

**Répartition d'intention tranchée (anti-cannibalisation interne au cluster)** : guide 08 = *process* (étapes, responsabilités, code CTU, coûts du service) — sa section dimensionnement se limite à 2-3 phrases + renvoi vers l'article palettes · article palettes 09 = **seul détenteur** de la table 20'/40'/40'HC (dimensionnement, poids, gerbage, calage) — et renvoie au guide pour le process. Maillage croisé obligatoire dans les deux sens.

**Sujets rattachés** :
- [x] Guide fusionné empotage + dépotage (08/2026) — ✅ publié 2026-08-28
- [ ] Combien de palettes dans un conteneur (09/2026 — décalé par l'alternance P1/P2)
- [ ] Refresh épaississement du pilier (12/2026)

### Cluster B — Affrètement & commission de transport

| | |
|---|---|
| **Page pilier** | `/transport/affretement-europe/` |
| **Statut du pilier** | existante |
| **Objectif SEO** | exister sur la traîne informationnelle du cluster (2 200 + 355 + 218/mois) et pousser la page commerciale via maillage |
| **Mot-clé pilier** | affrètement Europe / commissionnaire |
| **Persona dominant** | P1 (guide affrètement) et P2 (commissionnaire) |

**Sujets rattachés** :
- [ ] « Commissionnaire vs transporteur : qui mandater ? » (10/2026)
- [ ] Guide « L'affrètement transport » — **reporté** (rééquilibrage priorité tournées VL ; à re-dater à la révision de 11/2026)

### Cluster C — Externalisation & stockage

| | |
|---|---|
| **Page pilier** | `/stockage/externalisation-logistique/` |
| **Statut du pilier** | existante (refresh à J90) — cible la tête commerciale « externalisation logistique » (260/mois, CPC 34 €) |
| **Objectif SEO** | satellite PME qui capte l'informationnel sans toucher la tête ; refresh du pilier en janvier |
| **Mot-clé pilier** | externalisation logistique |
| **Persona dominant** | P1 — responsable logistique PME |

**Sujets rattachés** :
- [ ] « Externaliser sa logistique en PME » (01/2027) — ⚠️ à requalifier en `/research`, **en intégrant l'angle tournées régulières** (décision gate 2026-08-02)
- [ ] Refresh du pilier (01/2027)

### Cluster D — Local Gennevilliers (grappe homepage)

| | |
|---|---|
| **Page pilier** | `/` (homepage) |
| **Statut du pilier** | existante — pos. 4/6/9 sur la grappe « transporteur/transport gennevilliers » (données pré-rebuild) |
| **Objectif SEO** | passer la grappe locale au top 3 après J90 ; appuyé par GBP + citations (hors plan éditorial, cf. brief §6) |
| **Mot-clé pilier** | transporteur gennevilliers (140/mois) |
| **Persona dominant** | P1 |

**Sujets rattachés** :
- [ ] Refresh homepage grappe locale (11/2026)

### Cluster E — Urgence (course, express)

| | |
|---|---|
| **Page pilier** | `/transport/course-urgente/` |
| **Statut du pilier** | existante — portera SEULE tout le cluster (décision anti-cannibalisation du 2026-08-02) |
| **Objectif SEO** | élargir la page en hub « transport express & course urgente IdF » à J90 ; capter « course urgente » (40) + « coursier urgent » (70) + « transport express ile de france » (50) en une page |
| **Mot-clé pilier** | course urgente / transport express île-de-france |
| **Persona dominant** | P3 — dirigeant/office manager à besoin ponctuel |

**Sujets rattachés** :
- [ ] Refresh-élargissement hub urgence (11/2026)

### Cluster F — Tournées régulières VL ⭐ PRIORITAIRE

| | |
|---|---|
| **Page pilier** | `/transport/tournee-reguliere/` |
| **Statut du pilier** | existante — détient l'intention transactionnelle « tournée régulière sur mesure IdF » |
| **Objectif SEO** | construire l'autorité éditoriale sur le créneau prioritaire business : 3 satellites (mise en place / choix du modèle / prix) qui se maillent entre eux et poussent la page service. Volumes faibles/nuls assumés (paris émergents justifiés par la priorité business) ; « transport dédié » (110/mois, CPC 7,37 €) est le seul mot-clé scoré du champ. |
| **Mot-clé pilier** | tournée régulière (transactionnel, porté par la page service) |
| **Persona dominant** | P1 ⭐ |

**Répartition d'intention tranchée (anti-cannibalisation interne au cluster)** : pilier satellite 08 = *quoi/comment* (mise en place, cadence, contrat) · comparatif 09 = *choix du modèle* (dédié vs messagerie vs coursier) · article 10 = *les € du modèle* (prix/tournée, /mois, vs chauffeur salarié). Frontières externes : le refresh hub `/transport/` (12/2026) garde une section critères courte sans viser « transport dédié » en title/H1 ; le futur guide affrètement limitera sa section « vs messagerie vs dédié » à un paragraphe-renvoi vers le comparatif ; « externalisation logistique PME » (01/2027) = coûts stockage/logistique globale, jamais le coût transport/tournée.

**Capture — option lead magnet (décision à la production)** : sur les 3 sujets du cluster, en plus du CTA devis, envisager un **« modèle de cahier des charges de tournée régulière » en téléchargement contre email**. Un seul asset servi par les trois articles ; trancher au moment du `/write` du premier sujet.

**Sujets rattachés** :
- [x] « Mettre en place une tournée de livraison régulière » (08/2026) — pari-émergent — ✅ publié 2026-08-24
- [ ] « Transport dédié, messagerie ou coursier ponctuel » (09/2026)
- [ ] « Combien coûte une tournée régulière externalisée » (10/2026) — pari-émergent

---

## 2. Tableau des sujets

| Mois | Type | Sujet (titre provisoire) | Mot-clé principal | Intention | Persona | Typologie | Cluster | Capture | First-party à mobiliser | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| 08/2026 | création | Mettre en place une tournée de livraison régulière pour sa PME : fonctionnement, cadence, contrat (IdF) | tournée régulière transport (~0 — **pari-émergent**, priorité business ; « transport régulier » 20) | commerciale-info | P1 ⭐ | guide | F | devis vers `/transport/tournee-reguliere/` | flotte 9/14/20 m³ et usages types ; ✅ reçu 2026-08-06 : cadence quotidienne, 3 camions/secteurs, 6-7 points, engagement souple (brief §7 ; ⚠️ 2 points à reconfirmer) | ✅ **publié** le 2026-08-24 (PR #3 mergée au gate opérateur ; datePublished calée au merge ; retouche « vivant » du 20-24/08 : 2 schémas SVG, cover, FAQ dépliable, double PASS re-validé) |
| 08/2026 | création | Empotage et dépotage de conteneur : guide complet du chargeur (étapes, coûts, responsabilités, code CTU) — sans « Gennevilliers » dans le title | empotage conteneur (140) + depotage conteneur (70) — fusion, SERPs recouvrantes | info-commerciale | P2 | guide | A | devis `/devis/` | implantation dans le port (G1, quai 8) ; 🟡 partiel 2026-08-06 : durée « dépend du contenu » + anecdote renfort main-d'œuvre (⚠️ chiffres à reconfirmer) ; grille ⛔ refusée ; photos : stock (décision 2026-08-24) | ✅ **publié** le 2026-08-28 (PR #5 mergée `128399d` au gate opérateur sur preview ; brief `research/2026-08-28-guide-empotage-depotage-conteneur.md` ; double PASS + re-contrôles ; 2 schémas SVG first-party + cover stock ; fenêtre 90 j → J90 ~2026-11-26, `tracking.md`) |
| 09/2026 | création | Transport dédié, messagerie ou coursier ponctuel : que choisir pour vos livraisons récurrentes ? | transport dédié (110, CPC 7,37 €) ; traîne comparative vierge | info-choix | P1 ⭐ | evergreen | F | devis tournée régulière | ✅ reçu 2026-08-06 : seuil hebdo (mensuel = ponctuel), logique tarif négocié à l'année ; coût/livraison chiffré ⛔ refusé | prévu — first-party OK pour production |
| 09/2026 | création | Combien de palettes dans un conteneur ? La table 20'/40'/40'HC validée sur le quai (poids, gerbage, calage — pourquoi 23 et pas 25) | combien de palettes 100x120 dans un conteneur 40 pieds (90 ; cluster ~230) | info | P2 | evergreen | A | devis + maillage fort vers pilier A | ⚠️ à alimenter par le client : cas réels d'empotage (la théorie vs le quai) | prévu |
| 10/2026 | création | Combien coûte une tournée de livraison régulière externalisée ? (au km, à la tournée, au mois) | combien coûte une tournée régulière externalisée (~0 — **pari-émergent** ; voisin « tarif livraison au km » 142) | commerciale-décision | P1 ⭐ | guide | F | devis | ⛔ grille tarifaire **refusée** par le client (2026-08-06) ; utilisables : facteurs de coût, seuil hebdo, logique tarif négocié à l'année | **⚠️ à requalifier en `/research`** — motif : refus client de toute fourchette publiée → ré-angler « méthode/facteurs de coût d'une tournée » (jamais les prix Ansquer) ; l'intention « combien coûte » sans chiffre est-elle servable ? Décision **maintien ré-anglé ou remplacement** à la révision de 11/2026 |
| 10/2026 | création | Commissionnaire de transport vs transporteur : qui mandater ? (responsabilités, assurance, recours — côté chargeur) | commissionnaire de transport (218) / différence transporteur commissionnaire (traîne vierge) | info-choix | P2 | evergreen | B | devis | preuve d'inscription au registre national (⚠️ demander la référence exacte au client) | prévu |
| 09/2026 | création | L'affrètement transport : définition, fonctionnement, quand y recourir | affretement (2 200) / angle affretement transport (355) | info | P1 | guide | B | devis vers `/transport/affretement-europe/` | double statut transporteur + commissionnaire inscrit au registre | **reporté** — rééquilibrage priorité tournées VL (gate 2026-08-02) ; à re-dater à la révision de 11/2026 ; sa section « vs messagerie vs dédié » deviendra un paragraphe-renvoi vers le comparatif F |
| 11/2026 | refresh | Homepage — pousser la grappe locale au top 3 (post-J90, selon relevés weekly-review d'octobre) | transporteur gennevilliers (4→top 3) + transport gennevilliers (9→top 3) | locale | P1 | — | D | appel + devis | photos : stock Unsplash (décision définitive 2026-08-24, aucun shooting) | prévu |
| 11/2026 | refresh | `/transport/course-urgente/` — élargir en hub urgence : + coursier urgent, + transport express IdF, gap prix indicatifs/délais par département | course urgente + coursier urgent + transport express ile de france (~160 cumulés) | transactionnelle | P3 | — | E | téléphone + devis | ⚠️ à alimenter : délais réels constatés par zone, exemples de courses | prévu |
| 12/2026 | refresh | Hub `/transport/` — critères de choix intégrés en section COURTE (frontière : renvoi vers le comparatif F, ne jamais viser « transport dédié » en title/H1), ZFE/accès Paris, atout multimodal | transporteur ile de france (100) | commerciale | P1 | — | B/D | devis | atout port multimodal ; contraintes ZFE vécues (à alimenter) | prévu |
| 12/2026 | refresh | Pilier A `/stockage/depotage-empotage-conteneurs/` — épaississement (293→700+ mots) avec les données terrain collectées via les 2 articles conteneurs (jamais de contenu recopié) | depotage empotage conteneurs gennevilliers | transactionnelle-locale | P2 | — | A | devis | données terrain collectées d'ici là | prévu |
| 01/2027 | création | Externaliser sa logistique quand on est une PME : coûts, seuils de bascule, méthode (déplacé de 10/2026 par l'alternance P1/P2) | externalisation logistique pme (~0 affiché ; « externaliser logistique » 720 en corps) | info | P1 | guide | C | devis/contact | ⚠️ à alimenter par le client : coût au m²/palette, seuil de bascule, cas client anonymisé — **⚠️ analyse dégradée : requalifier via `/research` avant production, en intégrant l'angle tournées régulières (gate 2026-08-02) ; frontière : coûts stockage/logistique globale, jamais le coût transport/tournée (→ sujet F de 10/2026)** | prévu |
| 01/2027 | refresh | Pilier C `/stockage/externalisation-logistique/` — enrichissement avec les données du satellite PME | externalisation logistique (260, CPC 34 €) | commerciale | P1 | — | C | devis | idem satellite PME | prévu |
| 01/2027 | création | Prestataire logistique en Île-de-France : que couvre la prestation (stockage, cross-dock, préparation) — pari émergent | prestataire logistique ile de france (10, CPC 18,50 €) | commerciale | P1 | evergreen | C | devis | entrepôt 300 m², 2 quais | **reporté** — rééquilibrage priorité tournées VL (gate 2026-08-02) ; réexamen à la révision de 11/2026 |

### Sujets écartés

| Mot-clé / sujet | Motif d'écartement | Réexaminable ? |
|---|---|---|
| port de gennevilliers (491) | SERP navigationnelle/encyclopédique (HAROPA, Wikipédia, annuaires) — aucun prestataire B2B classé, mismatch d'intention | non en article dédié ; le différenciateur « implantés dans le port » se recycle en information gain des contenus conteneurs |
| course urgente (40) — en création | SERP 100 % transactionnelle = intention de la page `/transport/course-urgente/` existante ; un satellite cannibaliserait | non — mot-clé porté par la page de service (refresh 11/2026) |
| coursier urgent (70) — en création | même SERP/intention que course urgente + territoire coursier 2-roues décalé du positionnement fourgon | non — mot-clé secondaire du refresh 11/2026 |
| transport express ile de france (50) — en création | même cluster d'intention urgence ; une seule page doit le porter | non — absorbé dans le refresh-élargissement 11/2026 |
| transporteur ile de france (100) — en création | la SERP récompense les pages prestataire, pas les guides ; intention déjà couverte par le hub `/transport/` | non — traité en refresh du hub (12/2026) |
| entrepot logistique ile de france (75) | SERP immobilière (JLL, CBRE — location/vente de murs), hors offre de prestation | oui, via variantes prestation : « stockage palette ile de france », « prestataire stockage gennevilliers » (non scorées Haloscan — retester à la révision de novembre) |

### Couverture first-party — état par sujet

> Sources : questions d'onboarding (`prompts/2026-08-02-questions-onboarding-client.md`) posées à l'**entretien client du 2026-08-06** (blocs 1-3 traités, blocs 4-5 non abordés). Détail des données et garde-fous : `client-brief.md` §7. Les ⚠️ renvoient aux passages illisibles de la transcription, à reconfirmer avant publication.

| Sujet concerné | Élément demandé | Demandé le | **Statut** | Reçu le |
|---|---|---|---|---|
| Tournée régulière — mise en place (08) ⭐ | cadences réelles pratiquées, modèle d'engagement/préavis, exemple de tournée type (anonymisé) | 2026-08-02 | ✅ **reçu** : quotidien 3 camions/secteurs **94/78/95/92 confirmés**, 6-7 points, engagement souple, tournée type du mardi (boucle Paris → Issy → Clamart → Nanterre, anonymisée) ; seul reste ⚠️ mineur : rotations 14 m³ | 2026-08-06 |
| Guide empotage/dépotage (08) | durée moyenne d'un dépotage 40', grille tarifaire indicative, photos terrain | 2026-08-02 | ✅ **reçu sur le fond** : durée confirmée (2 voitures <1 h ; vrac colis 40×40 jusqu'à 3-4 h) + différenciateur « gonfler les effectifs » (intérim, décalage planning) ; grille ⛔ **refusée définitivement** ; photos : n'existent pas (📸 mini-shooting à organiser) | 2026-08-06 |
| Comparatif transport dédié (09) ⭐ | seuils de bascule constatés chez les clients (fréquence, nb de points, coût/livraison) | 2026-08-02 | ✅ **reçu** : seuil clair (hebdo = régulier, mensuel = ponctuel, logique tarif à l'année) ; coût/livraison chiffré ⛔ refusé définitivement (tarifs) — non bloquant pour l'angle | 2026-08-06 |
| Palettes conteneur (09) | 2-3 cas réels où la théorie du plan de chargement n'a pas tenu (poids, gerbage, calage) | 2026-08-02 | 🟡 **partiellement reçu** : 1 cas (conteneur vrac → renfort d'effectifs anticipé, chiffré 3-4 h) ; rien sur gerbage/calage — à collecter au fil de l'eau | 2026-08-06 |
| Coût tournée externalisée (10) ⭐ | grille tarifaire indicative par gabarit 9/14/20 m³ (au km / à la tournée / au mois), éléments du comparatif vs chauffeur salarié | 2026-08-02 | ⛔ **refusé — DÉFINITIF** (aucun élément tarifaire sur le site, reconfirmé 2026-08-06) → sujet à requalifier, voir tableau des sujets | 2026-08-06 |
| Commissionnaire vs transporteur (10) | référence exacte de l'inscription au registre des commissionnaires | 2026-08-02 | ⛔ **clos (2026-08-24)** : certificat DRIEAT **abandonné définitivement** — statut « inscrit au registre » utilisable, jamais de numéro. Non bloquant pour le sujet 10/2026 (l'angle responsabilités/assurance/recours n'exige pas le numéro) | 2026-08-24 |
| Refresh homepage (11) | photos réelles flotte/quais/entrepôt | 2026-08-02 | ⛔ **clos (2026-08-24)** : décision définitive **sans shooting** — le refresh utilisera du stock Unsplash (politique visuelle brief §3) ; la fiche GBP reste sans stock (logo seul) | 2026-08-24 |
| Refresh hub urgence (11) | délais réels constatés par zone/département | 2026-08-02 | 🕓 **en attente** | |
| Externalisation PME (01/2027) | coût au m²/palette pratiqué, seuil de bascule constaté, cas client anonymisé | 2026-08-02 | 🕓 **en attente** (coût stockage non abordé ; ⚠️ le refus tarifaire définitif pourrait s'y étendre — à clarifier avant production) | |

---

## 3. Journal des révisions

| Date | Ce qui a changé | Pourquoi | Statut du plan |
|---|---|---|---|
| 2026-08-02 | Version initiale — 12 mots-clés qualifiés par serp-analyst (12 instances parallèles), 5 créations GO, 5 refreshes datés post-J90 (fenêtre de test du rebuild), 6 écartés | création du plan (onboarding) | 🕓 brouillon |
| 2026-08-02 | Rééquilibrage au gate opérateur : priorité business tournées VL/P1 ⭐ (prime sur les volumes). Nouveau cluster F (3 sujets qualifiés serp-analyst : pilier satellite GO pari-émergent, comparatif GO pivot « transport dédié » 110, prix GO pari-émergent). Alternance P1+P2 mensuelle : palettes 08→09, commissionnaire 09→10, externalisation PME 10→01/2027 (angle tournées ajouté à sa requalification). Guide affrètement et prestataire logistique IdF → reportés (révision 11/2026). Refreshes post-J90, cadence 2/mois et écartés inchangés. Personas mis à jour (P1 ⭐ + VL ; P3 hors blog) | retour client via opérateur (gate) | 🕓 brouillon |
| 2026-08-06 | First-party de l'entretien client intégré : table de couverture passée en statuts (2 reçus, 3 partiels, 1 refusé, 4 en attente). **Article 10/2026 « coût tournée » → à requalifier en `/research`** (refus client de toute fourchette publiée ; ré-angle méthode/facteurs ; maintien ou remplacement tranché à la révision de 11/2026). Les 2 sujets d'août ont leur first-party — la règle de dégradation J-7 ne les menace plus, sous réserve des ⚠️ de transcription à reconfirmer | entretien client (blocs 1-3 ; blocs 4-5 restent à couvrir) | 🕓 brouillon |
| 2026-08-06 (2) | Reconfirmations client : les ⚠️ de transcription sont levés (secteurs 92, dépotage 3-4 h, tournée du mardi en boucle IdF) → couverture : 3 reçus, 2 partiels, 1 refusé définitif, 2 en attente, 1 indisponible (photos : aucune n'existe → 📸 action mini-shooting, impacte refresh homepage 11/2026 et GBP). Concurrents business reçus (VBC-Paris, SR Transport, NEOLYS → étape A à relancer). Règle registre commissionnaires : statut publiable, numéro non (certificat DRIEAT manquant) | échange opérateur de reconfirmation | 🕓 brouillon |
| 2026-08-06 (3) | Sujet 08/2026 « tournée régulière » produit : `/research` (3 serp-analyst en parallèle — pari confirmé, gap « externalisation » vacant, « tournée de livraison » NO-GO en cible, « transport régulier » secondaire qualifié ; ⚠️ règle du scroll non vérifiable par outil) puis `/write` : double PASS fact-checker (1 🔴 corrigé : formulation véhicules/secteurs) + contract-checker, **PR #3 du repo site ouverte**, build Vercel vert. Arbitrages gate : « secteurs attitrés » sans nombre de véhicules ; pas de lead magnet (CTA devis seul, chantier capture côté site avant les sujets 09-10) | production du 1er contenu du plan | 🕓 brouillon |
| 2026-08-24 | **Sujet 08/2026 « tournée régulière » PUBLIÉ** : retouche « rendre vivant » (retour de gate du 20/08) — 2 schémas SVG first-party, cover, passe de style, FAQ dépliable et layout centré côté site — puis **PR #3 ET PR #4 (navbar) mergées sur ordre opérateur**, datePublished calée au 2026-08-24. Fenêtre 90 j de l'article ouverte (J90 ~2026-11-22, `tracking.md`). Blog basculé noindex→index. Sujet 2 d'août (guide empotage) **non produit** — glissement à acter (capacité opérateur, motif interruption — pas first-party) | publication du 1er contenu + retours de gate | 🕓 brouillon |
| 2026-08-28 | `/research` du guide empotage/dépotage **refait** (le brief de la session précédente n'avait pas été persisté) et **persisté** dans `research/` (nouveau dossier, index README — convention à généraliser au template si validée). Verdict GO ×2, fusion confirmée ; volumes Haloscan à jour (empotage 210, dépotage 110/70 — brief §5C à rafraîchir en 11/2026). ⚠️ Arbitrage à acter au GO : l'objectif « top 3 empotage/dépotage conteneur » du cluster A passe du pilier (local) au guide (national). Sujet produit fin août ou début septembre selon GO (slot 08 tenu par le brief, production glissée) | leçon du brief perdu + phase 0 du 2e sujet | 🕓 brouillon |
| 2026-08-28 (2) | **GO opérateur** sur le guide empotage/dépotage (angle et plan validés ; doctrine cluster A actée ; anecdote chiffrée reconfirmée ; 2 schémas ; convention `research/` généralisée) puis **`/write` exécuté** : article ~2 100 mots, 2 SVG first-party (QA visuelle faite), cover Unsplash ; double PASS avec relances différenciées ; **PR #5 ouverte, non mergée** (gate). ⚠️ portés à la PR : 2 ErrorTip génériques (CTU / pratique de quai, aucun cas terrain calage collecté), PDF INRS non lu par l'outil, scroll SERP non vérifiable | production du 2e sujet du plan | 🕓 brouillon |
| 2026-08-28 (3) | **Guide empotage/dépotage PUBLIÉ** : gate validé sur preview (ErrorTip génériques **conservés**, décision opérateur : utilité lecteur, à renforcer en first-party au refresh post-J90 si vécu de quai livré), PR #5 mergée `128399d`, prod READY, sitemap 23 URLs, `datePublished` 2026-08-28. Les **2 sujets d'août sont publiés** (le glissement envisagé le 24/08 n'a pas été nécessaire). ⚠️ Indexation GSC à demander manuellement : propriété non connectée à Cuik (connexion OAuth toujours en attente, brief §8). Fenêtre 90 j → J90 ~2026-11-26 | publication du 2e contenu | 🕓 brouillon |
