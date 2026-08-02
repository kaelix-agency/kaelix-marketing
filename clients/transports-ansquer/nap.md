# NAP — Transports Ansquer

| | |
|---|---|
| **Statut** | 🕓 à formaliser (socle posé le 2026-08-02 ; SIRET, horaires et catégories GBP à valider par le client) |
| **Validé le** | — |
| **Dernière vérification de cohérence** | 2026-08-02 (site = `src/lib/company.ts` du repo, cohérent avec ce fichier) |

---

## 1. NAP canonique

| Champ | Valeur canonique |
|---|---|
| **Nom (N)** | Transports Ansquer |
| **Adresse (A)** | 51 route principale du port |
| Complément d'adresse | Bâtiment G1, quai 8 |
| Code postal | 92230 |
| Ville | Gennevilliers |
| Pays | France |
| **Téléphone (P)** | 06 03 87 31 66 |
| Téléphone format international | +33 6 03 87 31 66 |
| Email public | contact@transportsansquer.fr |
| Site web (URL canonique) | https://transportsansquer.fr/ (sans www, avec slash final — convention `trailingSlash: true` du site) |
| SIRET | à renseigner (demandé par plusieurs annuaires) |

## 2. Horaires

⚠️ **À valider par le client.** Le schema LocalBusiness du site a historiquement déclaré du 24/7, mais le client a explicitement refusé toute promesse d'astreinte « 24 h/24 — 7 j/7 » affichée (retour du 28/07/2026). Les horaires GBP, le schema et ce fichier doivent être alignés sur les horaires réels une fois connus.

| Jour | Horaires |
|---|---|
| Lundi | à renseigner |
| Mardi | à renseigner |
| Mercredi | à renseigner |
| Jeudi | à renseigner |
| Vendredi | à renseigner |
| Samedi | à renseigner |
| Dimanche | fermé (à confirmer) |

- **Fermetures exceptionnelles** : à renseigner.

## 3. Catégories GBP

⚠️ Propositions à valider — relever d'abord les libellés EXACTS actuels de la fiche.

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
| Google Business Profile | à renseigner (fiche existante — 1 avis) | à vérifier contre ce NAP | | |
| Pages Jaunes | | à faire | | |

### Priorité 2 — socle national

| Annuaire | URL de la fiche | Statut | Dernière vérif. | Écart constaté |
|---|---|---|---|---|
| 118000 | | à faire | | |
| Mappy | | à faire | | |
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
