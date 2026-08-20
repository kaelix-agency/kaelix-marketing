# NAP — Transports Ansquer

| | |
|---|---|
| **Statut** | 🟠 téléphone canonique **confirmé** (06, client via opérateur 2026-08-20) ; ⚠️ **adresse canonique À ARBITRER** (écart 49/51, voir §1) ; fiche GBP relevée le 2026-08-20, mise en conformité **à finir manuellement** (blocage outil) |
| **Validé le** | — |
| **Dernière vérification de cohérence** | 2026-08-02 (site = `src/lib/company.ts` du repo, cohérent avec ce fichier) |

---

## 1. NAP canonique

| Champ | Valeur canonique |
|---|---|
| **Nom (N)** | Transports Ansquer |
| **Adresse (A)** | ⚠️ **à arbitrer — « 49 » ou « 51 » route principale du port** (voir encadré ci-dessous ; ce fichier disait « 51 » jusqu'au 2026-08-20) |
| Complément d'adresse | Bâtiment G1, quai 8 |
| Code postal | 92230 |
| Ville | Gennevilliers |
| Pays | France |
| **Téléphone (P)** | 06 03 87 31 66 — **canonique confirmé (client via opérateur, 2026-08-20) : le 06, partout** |
| Téléphone format international | +33 6 03 87 31 66 |
| Email public | contact@transportsansquer.fr |
| Site web (URL canonique) | https://transportsansquer.fr/ (sans www, avec slash final — convention `trailingSlash: true` du site) |
| SIRET | **90069725100016** (SIREN 900 697 251 — cohérent avec la création 2021 ; reçu le 2026-08-06) |

### ⚠️ Adresse — écart « 49 / 51 » constaté le 2026-08-20 (mission GBP)

> **Adresse canonique : à arbitrer — alignement site/annuaires à planifier** une fois l'arbitrage rendu. En attendant, **aucune propagation d'adresse** (citations en pause sur ce champ).

- **Le client déclare** (via opérateur, 2026-08-20) : **49 route principale du port**.
- **Fiche GBP** : valeur affichée **non relevée** (blocage technique des captures Chrome le 2026-08-20) — à relever manuellement. Décision opérateur : la fiche **n'est PAS modifiée sur l'adresse, quelle que soit sa valeur** (zéro risque de re-vérification Google).
- **Ce fichier disait « 51 »** — origine : onboarding du 2026-08-02 depuis le site (`src/lib/company.ts`), qui affiche « 51 » (JSON-LD LocalBusiness + page /contact/, vérifié dans le code le 2026-08-20).
- **Mappy et annuaire-entreprises (data.gouv)** : « 49 » ; la ligne INSEE exacte est « 49-51 / BATIMENT G1, 49 ROUTE PRINCIPALE DU PORT 92230 ».
- **Societe.com** : siège légal **7 rue du Beauregard, 95590 Presles** — siège légal ≠ site d'exploitation, à documenter ; ne jamais utiliser comme adresse NAP.

## 2. Horaires

**Horaires réels confirmés par le client (entretien + reconfirmation du 2026-08-06)** : lundi-vendredi 7h30-12h30 / 13h30-16h00 ; **fermé samedi-dimanche SAUF demande exceptionnelle**.

✅ **Écart schema résolu le 2026-08-06** (PR #2 mergée et déployée) : le JSON-LD LocalBusiness du site sert désormais lun-ven 07:30-12:30 + 13:30-16:00, week-end sans spécification — vérifié sur transportsansquer.fr après déploiement. Les horaires ci-dessous sont **la source appliquée au site** (`src/lib/company.ts`, export `openingHours`). Restent à aligner : les horaires GBP, dès l'accès à la fiche.

⚠️ **Relevé GBP du 2026-08-20** : la fiche affiche lun-jeu 07:30–16:30, ven 07:30–16:00, sam-dim fermé — **coupure méridienne absente, lun-jeu finit à 16:30 au lieu de 16:00**. Aucun « 24h/24 » nulle part (propre). Correction validée à l'oral mais **non appliquée** (blocage outil) → à faire manuellement.

| Jour | Horaires |
|---|---|
| Lundi | 7h30-12h30, 13h30-16h00 |
| Mardi | 7h30-12h30, 13h30-16h00 |
| Mercredi | 7h30-12h30, 13h30-16h00 |
| Jeudi | 7h30-12h30, 13h30-16h00 |
| Vendredi | 7h30-12h30, 13h30-16h00 |
| Samedi | fermé — intervention exceptionnelle possible sur demande |
| Dimanche | fermé — intervention exceptionnelle possible sur demande |

- **Formulation publique du week-end** : « interventions exceptionnelles le week-end sur demande » — jamais présentée comme une astreinte ni un service permanent (interdit client du 28/07/2026). Côté schema : le week-end reste SANS `openingHoursSpecification` (fermé) ; la mention vit dans le texte, pas dans les horaires structurés.
- **Fermetures exceptionnelles** : à renseigner.

## 3. Catégories GBP

⚠️ Propositions à valider — relever d'abord les libellés EXACTS actuels de la fiche.

**Relevé du 2026-08-20** : catégorie principale actuelle = « **Service logistique** ». Cible actée (opérateur 2026-08-20) : principale « Société de transport routier », « Service logistique » rétrogradée en secondaire + entreposage/stockage — **à appliquer manuellement** (blocage outil).

- **Catégorie principale (proposition)** : « Société de transport routier » — choisie pour le service qui rapporte (transport), pas pour la plus large.
- **Catégories secondaires (propositions)** :
  1. « Entreprise de logistique »
  2. « Entrepôt » / « Service de stockage » (selon libellés disponibles)
- **Attributs GBP renseignés** : à relever sur la fiche (devis, paiements…).
- **Zone de service déclarée dans GBP** : à aligner sur `client-brief.md` §9 (Gennevilliers, Paris, Île-de-France).

## 4. Variantes

### ✅ Variantes acceptées

| Variante | Où elle est acceptée | Pourquoi |
|---|---|---|
| `0603873166` (téléphone sans espaces) | annuaires à champ contraint | format imposé par le formulaire |
| `+33603873166` | schema.org / liens `tel:` | format machine (`phoneHref` du site) |
| « 51 route principale du port, Bâtiment G1, quai 8 » (complément dans le champ adresse) | annuaires sans champ complément | seule façon de publier le complément |

### ⛔ Variantes interdites

| Variante fautive | Où elle a été vue | Statut de correction |
|---|---|---|
| « Ansquer Transports » (inversion) | nulle part encore — interdit préventif | — |
| toute adresse sans « Bâtiment G1, quai 8 » quand le champ complément existe | — | — |
| à compléter lors de l'audit de citations (recherche des fiches existantes) | | |

## 5. Citations — annuaires FR par priorité

**Statuts** : `à faire` · `soumis` · `vérifié` · `⚠️ écart détecté`

### Priorité 1 — incontournables

| Annuaire | URL de la fiche | Statut | Dernière vérif. | Écart constaté |
|---|---|---|---|---|
| Google Business Profile | à renseigner (fiche existante — 1 avis) | ⚠️ écart détecté | 2026-08-20 | tél **01 41 21 07 69** (≠ canonique 06) ; horaires sans coupure méridienne ; catégorie « Service logistique » ; description vide ; adresse non relevée (blocage outil) — corrections manuelles à faire, **sauf adresse (ne pas toucher)** |
| Pages Jaunes | | à faire | | |

### Priorité 2 — socle national

| Annuaire | URL de la fiche | Statut | Dernière vérif. | Écart constaté |
|---|---|---|---|---|
| 118000 | | à faire | | |
| Mappy | fiche existante (vue en SERP le 2026-08-20) | ⚠️ écart détecté | 2026-08-20 | affiche « 49 rte Principale du Port » (vs « 51 » du site) — en pause jusqu'à l'arbitrage adresse (§1) |
| Yelp France | | à faire | | |
| Apple Plans | | à faire | | |
| Bing Places | | à faire | | |

### Priorité 3 — institutionnels & sectoriels

| Annuaire | URL de la fiche | Statut | Dernière vérif. | Écart constaté |
|---|---|---|---|---|
| CCI Hauts-de-Seine | | à faire | | |
| HAROPA Port / annuaire des entreprises du port de Gennevilliers | | à faire — fort signal local, cohérent avec l'implantation | | |
| Annuaires transport/logistique FR (ex. FNTR, b2b transport) | | à identifier | | |

### Doublons de fiches à fusionner

| Plateforme | URL du doublon | Statut |
|---|---|---|
| aucun connu — à vérifier lors de l'audit de citations | | |

---

## Journal des modifications du NAP

| Date | Ce qui a changé | Propagation (GBP → PJ → reste) | Terminé le |
|---|---|---|---|
| 2026-08-02 | Création du fichier — NAP canonique posé depuis les données opérateur + `src/lib/company.ts` du site (cohérents entre eux) | n/a (pas de changement de coordonnées) | 2026-08-02 |
| 2026-08-06 | Horaires réels reçus (entretien client) : 7h30-12h30 / 13h30-16h00, lun-ven supposé. Écart 24/7 du schema site documenté → chantier site en brouillon | schema site (chantier à émettre) → GBP (dès accès) → annuaires (aucune citation soumise encore) | |
| 2026-08-06 (2) | Reconfirmation client : sam-dim fermés sauf demande exceptionnelle (formulation publique cadrée, jamais « astreinte ») + **SIRET 90069725100016** reçu. Chantier schema passé « prêt à émettre » | schema site (émission imminente) → GBP (dès accès) → annuaires | |
| 2026-08-06 (3) | **Écart schema 24/7 résolu** : PR #2 du repo site mergée (`dbf5e14`) et déployée, JSON-LD + mention /contact/ vérifiés en ligne. Horaires canoniques de ce fichier = source appliquée au site | schema site ✅ → GBP (dès accès) → annuaires | 2026-08-06 |
| 2026-08-20 | **Mission GBP (via Chrome, compte KAELIX gestionnaire — accès effectif constaté)** : relevés fiche (nom ✅ « Transports Ansquer » ; tél ⚠️ 01 41 21 07 69 ; horaires ⚠️ sans coupure ; catégorie « Service logistique » ; description vide). **Aucune modification appliquée** (blocage captures Chrome) → exécution manuelle listée. Décisions opérateur : tél canonique = 06 partout ; **adresse fiche GBP : ne jamais modifier** (éviter re-vérification) ; adresse canonique **à arbitrer** (client déclare 49 ; site affiche 51 ; annuaires 49) — encadré §1. Relevé code site : tél 06 partout ✅, adresse « 51 » (`company.ts`) | GBP (manuel, sauf adresse) → annuaires en pause (arbitrage adresse) | |
