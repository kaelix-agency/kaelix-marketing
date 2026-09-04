# Citations NAP — Transports Ansquer

| | |
|---|---|
| **Créé le** | 2026-09-04 (audit automatique de l'existant : WebSearch + fetch, budget 2 essais/annuaire) |
| **Canonique** (source : `nap.md`) | **Transports Ansquer** · 51 route principale du port, Bâtiment G1, quai 8, 92230 Gennevilliers · **06 03 87 31 66** · lun-ven 7h30-12h30 / 13h30-16h00 · https://transportsansquer.fr/ |
| **Description de référence** | `nap.md` §2 bis (validée 03/09) — à raccourcir selon la limite de chaque annuaire |
| **Règle** | les soumissions (formulaires, validations email/tél) restent à l'**opérateur** ; la session audite, prépare les blocs et re-vérifie (contrôle mensuel, 1er lundi — `/weekly-review` étape 13) |

## 1. Plan de campagne

**Statuts** : `à faire` · `préparé` (bloc prêt) · `soumis` · `vérifié` · `⚠️ écart` · `⛔ documenté (non corrigeable)`

| Annuaire | URL | Prio | État constaté (audit 04/09) | Écart vs canonique | Action | Statut | Date |
|---|---|---|---|---|---|---|---|
| Google Business Profile | fiche `g/11tc9_y7c9` | réf. | ✅ affiche le canonique : « Quai 8, 51 Rte Principale du Port Bât G1 », **06 03 87 31 66**, site, ferme à 16:00 | catégorie encore « Service logistique » (cible : « Société de transport routier ») ; coupure méridienne à confirmer dans l'éditeur | finir #2b (catégorie, description, zone) | 🔧 quasi conforme | 2026-09-04 |
| **Pages Jaunes** | aucune fiche trouvée | **1** | ❌ absente (seule la catégorie locale existe) | — | **créer** (compte Solocal — gère aussi Mappy) | préparé | 2026-09-04 |
| **118000** | aucune fiche trouvée | **1** | ❌ absente | — | **créer** | préparé | 2026-09-04 |
| **Mappy** | fr.mappy.com/poi/634b9c00f92c2a779d59674f | **1** | ⚠️ fiche existante : « 49 rte Principale du Port », horaires « 7h30-16h30 » sans coupure, **ni tél ni site** | adresse (49→51 + Bât G1 quai 8), horaires, tél, site manquants | **corriger** via « Modifier les infos sur PagesJaunes et Mappy » (Solocal — même compte que PJ) | préparé | 2026-09-04 |
| **Apple Plans** | aucune fiche trouvée (recherche maps.apple.com) | 2 | ❌ absente | — | **créer** via Apple Business Connect (businessconnect.apple.com, compte Apple KAELIX) | préparé | 2026-09-04 |
| **Bing Places** | aucune fiche (SERP Bing sans panneau local, vérifié ×2) | 2 | ❌ absente — l'« import GSC » n'existe pas (Bing importe depuis GBP à la création du compte Bing Places) | — | **créer** via bingplaces.com → option « importer depuis Google Business Profile » (reprend la fiche désormais conforme) | préparé | 2026-09-04 |
| HAROPA / port de Gennevilliers | haropaport.com/fr/annuaire-general | 3 | annuaire = contacts internes HAROPA (26 entrées), **pas un registre des implantés** | — | demande par contact (02 79 18 05 00 / formulaire) : référencement des entreprises implantées — signal local fort | à faire (opérateur, contact direct) | 2026-09-04 |
| CCI Hauts-de-Seine | non trouvée | 3 | ❌ rien | — | vérifier l'annuaire CCI (aef.cci.fr) à l'occasion — faible priorité | à faire | 2026-09-04 |
| Annuaires transport/logistique FR | à identifier (FNTR, b2b-transport…) | 3 | non audités | — | identifier 2-3 annuaires sectoriels sérieux (pas de fermes à liens) | à faire | |
| data.gouv / annuaire-entreprises | annuaire-entreprises.data.gouv.fr | 4 | ligne INSEE : « 49-51 / BATIMENT G1, 49 ROUTE PRINCIPALE DU PORT » (page non fetchable, donnée connue de `nap.md`) | « 49 » en tête de ligne INSEE | ⛔ **documenté, ne pas « corriger »** : la donnée suit Sirene ; une modification = déclaration au guichet unique des formalités (décision client, pas une citation) | ⛔ documenté | 2026-09-04 |
| Pappers / societe.com | fiches entreprise | 4 | siège légal Presles (95) affiché | aucun (siège légal ≠ exploitation, documenté `nap.md`) | ⛔ rien à faire (suivent Sirene) | ⛔ documenté | 2026-09-04 |

## 2. Blocs prêts à coller (canonique exact)

### Bloc A — Pages Jaunes + Mappy (compte Solocal, une seule saisie)
```
Nom : Transports Ansquer
Adresse : 51 route principale du port, Bâtiment G1, quai 8
Code postal / Ville : 92230 Gennevilliers
Téléphone : 06 03 87 31 66
Site web : https://transportsansquer.fr/
Catégorie : Transport routier (ou « Transports routiers de fret de proximité »)
Horaires : lun-ven 07:30-12:30 et 13:30-16:00 ; sam-dim fermés
Description (longue, ~750 c.) : reprendre nap.md §2 bis telle quelle
```

### Bloc B — 118000
```
Identique au bloc A. Si un seul champ adresse : « 51 route principale du port, Bâtiment G1, quai 8, 92230 Gennevilliers ».
Description courte (si limite ~200 c.) : « Transporteur et prestataire logistique au port de Gennevilliers : livraisons VL avec hayon, tournées régulières, courses urgentes, dépotage de conteneurs, stockage 300 m². Réponse sous 24 heures. »
```

### Bloc C — Apple Business Connect
```
Identique au bloc A. Catégorie Apple : « Transport de marchandises » (libellé le plus proche disponible).
Emplacement carte : caler l'épingle sur le bâtiment G1 (cohérente avec la fiche Google, W7P9+7V).
```

### Bloc D — Bing Places
```
Créer le compte puis utiliser « Importer depuis Google Business Profile » : la fiche Google est désormais
quasi conforme, l'import évite toute ressaisie. Vérifier après import : adresse 51 + Bât G1, tél 06, horaires 2 plages.
```

## 3. Journal

| Date | Événement |
|---|---|
| 2026-09-04 | Création + audit initial (PJ ❌, 118000 ❌, Mappy ⚠️ 49/horaires/tél, Apple ❌, Bing ❌ ×2, HAROPA = annuaire interne, data.gouv ⛔ documenté). Constat bonus : **fiche Google publique déjà au canonique** (51 + Bât G1, tél 06, 16:00) — la checklist #2b a avancé côté opérateur ; reste catégorie/description/zone à confirmer dans l'éditeur |
