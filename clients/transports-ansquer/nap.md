# NAP — Transports Ansquer

| | |
|---|---|
| **Statut** | 🟢 téléphone canonique **confirmé** (06, 2026-08-20) ; ✅ **adresse canonique ARBITRÉE le 2026-09-02** : **51** (alignée sur la fiche GBP, source la plus visible — relevé effectif du 2026-09-02) ; fiche GBP : mise en conformité **à finir manuellement** (blocage captures persistant) |
| **Validé le** | — |
| **Dernière vérification de cohérence** | 2026-08-02 (site = `src/lib/company.ts` du repo, cohérent avec ce fichier) |

---

## 1. NAP canonique

| Champ | Valeur canonique |
|---|---|
| **Nom (N)** | Transports Ansquer |
| **Adresse (A)** | **51 route principale du port** — ✅ arbitré le 2026-09-02 (décision opérateur : alignement sur l'adresse affichée par la fiche GBP, relevée ce jour : « Quai 8, 51 Rte Principale du Port Bât G1, 92230 Gennevilliers ») |
| Complément d'adresse | Bâtiment G1, quai 8 |
| Code postal | 92230 |
| Ville | Gennevilliers |
| Pays | France |
| **Téléphone (P)** | 06 03 87 31 66 — **canonique confirmé (client via opérateur, 2026-08-20) : le 06, partout** |
| Téléphone format international | +33 6 03 87 31 66 |
| Email public | contact@transportsansquer.fr |
| Site web (URL canonique) | https://transportsansquer.fr/ (sans www, avec slash final — convention `trailingSlash: true` du site) |
| SIRET | **90069725100016** (SIREN 900 697 251 — cohérent avec la création 2021 ; reçu le 2026-08-06) |

### ✅ Adresse — écart « 49 / 51 » ARBITRÉ le 2026-09-02

> **Décision opérateur (2026-09-02) : tout s'aligne sur l'adresse affichée par la fiche GBP** (source la plus visible). **Relevé effectif du 2026-09-02** (panneau Google, via Chrome) : « **Quai 8, 51 Rte Principale du Port Bât G1, 92230 Gennevilliers** » → **canonique = 51**. Citations débloquées sur ce champ.

- **Site** (`src/lib/company.ts`, JSON-LD + /contact/) : affiche déjà « 51 » → **aucune correction site nécessaire** (vérifié 2026-08-20).
- **Annuaires à aligner sur 51** lors de la campagne citations : Mappy affiche « 49 » (⚠️ écart, §5) ; la ligne INSEE « 49-51 / BATIMENT G1, 49 ROUTE PRINCIPALE DU PORT » explique la coexistence — le libellé publié reste « 51 route principale du port, Bâtiment G1, quai 8 ».
- Le client avait déclaré « 49 » à l'oral (2026-08-20) — la décision d'alignement sur la fiche prime (tracée au journal) ; la fiche GBP elle-même **ne se modifie jamais sur l'adresse** (zéro risque de re-vérification).
- **Societe.com** : siège légal **7 rue du Beauregard, 95590 Presles** — siège légal ≠ site d'exploitation ; ne jamais utiliser comme adresse NAP.

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

## 2 bis. Description GBP — texte de référence (✅ validé opérateur, 2026-09-03)

> Texte canonique du champ « Description » de la fiche. Rédigé par la session le 2026-09-03 (aucun texte n'existait), **validé au gate avec un amendement** : « Réponse sous 24 heures » (et non « Devis sous 24 heures ») — alignement exact sur la promesse du site, cohérence NAP des engagements. Véracité : 300 m² / 2 quais = first-party tracé (brief §7), 2021 = l'entreprise / 23 ans = le dirigeant, registre **sans numéro**, zéro interdit (pas de flotte, pas de 24/7, pas de tarif, pas de cadratin). À coller tel quel ; toute modification repasse par un gate.

```
Transporteur et prestataire logistique implanté au cœur du port de Gennevilliers, Transports Ansquer accompagne les entreprises d'Île-de-France : livraisons en véhicules légers avec hayon, tournées régulières, courses urgentes, affrètement France et Europe, dépotage et empotage de conteneurs, stockage et préparation de commandes dans un entrepôt de 300 m² à deux quais. Fondée en 2021 par un professionnel comptant 23 ans de métier, l'entreprise est inscrite au registre des commissionnaires de transport. Réponse sous 24 heures.
```

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
| Google Business Profile | fiche existante (1 avis) ; **lien court d'avis relevé le 2026-09-02 : `https://g.page/r/CSTJAaXNYqRfEBM/review`** (= ligne avis permanente du rapport mensuel) | ⚠️ écart détecté | 2026-09-02 | adresse ✅ **relevée : « Quai 8, 51 Rte Principale du Port Bât G1 »** (= canonique, ne pas toucher) ; restent (relevés 20/08) : tél **01 41 21 07 69** (≠ canonique 06) ; horaires sans coupure méridienne ; catégorie « Service logistique » ; description vide — corrections manuelles opérateur |
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
| 2026-09-03 | **Description GBP validée** (gate opérateur, amendement « Réponse sous 24 heures ») → §2 bis, texte de référence à coller tel quel lors de la checklist manuelle (#2b) | GBP (collage manuel opérateur) | |
| 2026-09-02 | **Arbitrage adresse rendu** (décision opérateur : alignement sur la fiche GBP) : relevé effectif du panneau Google via Chrome = « Quai 8, **51** Rte Principale du Port Bât G1 » → canonique = **51**. Site déjà à 51 (aucune PR) ; annuaires à aligner à la campagne citations (Mappy = 49). **Lien court d'avis relevé** : `g.page/r/CSTJAaXNYqRfEBM/review` → intégré à la ligne avis permanente du rapport mensuel (doctrine zéro sollicitation, invariant 14) | citations débloquées sur l'adresse | 2026-09-02 |
| 2026-08-20 | **Mission GBP (via Chrome, compte KAELIX gestionnaire — accès effectif constaté)** : relevés fiche (nom ✅ « Transports Ansquer » ; tél ⚠️ 01 41 21 07 69 ; horaires ⚠️ sans coupure ; catégorie « Service logistique » ; description vide). **Aucune modification appliquée** (blocage captures Chrome) → exécution manuelle listée. Décisions opérateur : tél canonique = 06 partout ; **adresse fiche GBP : ne jamais modifier** (éviter re-vérification) ; adresse canonique **à arbitrer** (client déclare 49 ; site affiche 51 ; annuaires 49) — encadré §1. Relevé code site : tél 06 partout ✅, adresse « 51 » (`company.ts`) | GBP (manuel, sauf adresse) → annuaires en pause (arbitrage adresse) | |
