# Prompt d'exécution — horaires réels dans le schema LocalBusiness

| | |
|---|---|
| **Statut** | 📤 émis le 2026-08-06 — PR #2 ouverte, en attente du gate opérateur |
| **Repo cible** | `D:\Users\Axel\KAELIX\transports-ansquer` (github.com/kaelix-agency/transports-ansquer) |
| **Type** | correctif (cohérence NAP — critère de référencement local) |
| **Créé le** | 2026-08-06 |
| **Références** | `clients/transports-ansquer/nap.md` §2 (source de vérité des horaires) |

> Contexte : l'entretien client du 2026-08-06 (reconfirmé le même jour) a donné les
> horaires réels : lun-ven 7h30-12h30 / 13h30-16h00, fermé le week-end sauf demande
> exceptionnelle. Or le JSON-LD LocalBusiness du site déclare une ouverture 24/7
> (`src/app/layout.tsx`, `openingHoursSpecification` opens 00:00 / closes 23:59) —
> contradictoire avec les horaires réels ET avec le refus client de toute promesse
> d'astreinte 24/7 (28/07/2026, déjà respecté dans les textes visibles).

---

## Prompt à émettre

Aligne le site sur les horaires réels du dépôt (source de vérité : `nap.md` du repo
marketing, valeurs du 2026-08-06 reproduites ici).

### 1. Schema LocalBusiness (`src/app/layout.tsx`)

Remplace l'`openingHoursSpecification` 24/7 par :

- lundi à vendredi, deux plages : **07:30-12:30** et **13:30-16:00** ;
- samedi et dimanche : **aucune spécification** (fermé). L'ouverture exceptionnelle
  sur demande ne se déclare PAS dans les horaires structurés — un moteur qui lit
  « ouvert le samedi » afficherait une information fausse 51 semaines sur 52.

Ajoute un commentaire dans le code : provenance `nap.md` (repo marketing), date
2026-08-06.

### 2. Mention visible « week-end sur demande »

Ajoute, à l'endroit du site où les coordonnées/modalités de contact sont détaillées
(page `/contact/` a priori — à toi de juger le meilleur emplacement dans le gabarit
existant), une mention sobre du type : « Dépôt ouvert du lundi au vendredi,
7 h 30-12 h 30 et 13 h 30-16 h. Intervention exceptionnelle le week-end sur
demande. »

⛔ Contraintes de formulation : jamais « astreinte », jamais « 24 h/24 », jamais
« 7 j/7 », jamais une promesse de disponibilité permanente (interdit client du
28/07/2026, cf. `src/lib/company.ts`). « Sur demande » et « exceptionnelle » doivent
rester dans la phrase. Pas de tirets cadratins (convention du repo).

### 3. Garde-fous

- Vérifie qu'aucune autre déclaration 24/7 ne subsiste (grep `openingHours`,
  `00:00`, `23:59`).
- Les mentions « réponse sous 24 heures » des textes visibles sont une promesse de
  délai de réponse, PAS des horaires : ne pas y toucher.
- Si les horaires sont ajoutés à `src/lib/company.ts` (source unique côté site,
  recommandé), le schema et la mention visible doivent tous deux les consommer.
- Ne toucher à rien d'autre du schema (`LocalBusiness` global inchangé par ailleurs).

### 4. Livraison

Branche `fix/horaires-schema`, commits atomiques, **PR vers `master`**, build + e2e
verts (85 tests existants — rien ne doit régresser). **Ne pas merger** : gate
opérateur, comme toujours.

---

## Suivi

| Étape | Date | Note |
|---|---|---|
| Brouillon rédigé | 2026-08-06 | déclenché par l'entretien client (horaires réels reçus) |
| Prêt à émettre | 2026-08-06 | sam-dim confirmés fermés sauf exceptionnel + formulation week-end cadrée (reconfirmation client) |
| Émis (session repo site) | 2026-08-06 | GO opérateur ; branche `fix/horaires-schema` depuis `master` à jour (`d44f449`) |
| PR ouverte | 2026-08-06 | [PR #2](https://github.com/kaelix-agency/transports-ansquer/pull/2), commit `8f17ba6` — horaires centralisés dans `company.ts`, schema 2 plages lun-ven, mention week-end page contact ; build vert, 85/85 e2e ; preview Vercel auto : transports-ansquer-mvko920vx |
| Mergée / déployée | | MAJ `nap.md` (écart schema résolu) |
