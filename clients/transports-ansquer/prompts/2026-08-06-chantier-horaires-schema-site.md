# Prompt d'exécution — horaires réels dans le schema LocalBusiness

| | |
|---|---|
| **Statut** | 🕓 brouillon — relecture opérateur avant émission vers le repo du site |
| **Repo cible** | `D:\Users\Axel\KAELIX\transports-ansquer` (github.com/kaelix-agency/transports-ansquer) |
| **Type** | correctif (cohérence NAP — critère de référencement local) |
| **Créé le** | 2026-08-06 |
| **Références** | `clients/transports-ansquer/nap.md` §2 (source de vérité des horaires) |

> Contexte : l'entretien client du 2026-08-06 a donné les horaires réels du dépôt
> (7h30-12h30 / 13h30-16h00). Or le JSON-LD LocalBusiness du site déclare encore
> une ouverture 24/7 (`src/app/layout.tsx`, `openingHoursSpecification`
> opens 00:00 / closes 23:59) — contradictoire avec les horaires réels ET avec le
> refus client de toute promesse d'astreinte 24/7 (28/07/2026, déjà respecté dans
> les textes visibles). L'écart ne vit que dans le schema.

---

## Prompt à émettre

Dans le JSON-LD `LocalBusiness` du layout (`src/app/layout.tsx`), remplace
l'`openingHoursSpecification` 24/7 par les horaires réels du dépôt :

- lundi à vendredi, deux plages : 07:30-12:30 et 13:30-16:00 ;
- samedi et dimanche : pas de spécification (fermé).

Contraintes :
- Source de vérité : `nap.md` du repo marketing (les valeurs ci-dessus en sont la copie du 2026-08-06). Ajouter un commentaire dans le code pointant cette provenance et la date.
- Ne toucher à rien d'autre du schema (`LocalBusiness` global inchangé par ailleurs).
- Vérifier qu'aucune autre déclaration d'horaires 24/7 ne subsiste (grep `openingHours`, `00:00`, `23:59`).
- Les mentions « réponse sous 24 heures » des textes visibles sont une promesse de délai de réponse, PAS des horaires : ne pas y toucher.
- Livraison : branche `fix/horaires-schema`, PR vers `master`, build + e2e verts. Ne pas merger (gate opérateur).

---

## Suivi

| Étape | Date | Note |
|---|---|---|
| Brouillon rédigé | 2026-08-06 | déclenché par l'entretien client (horaires réels reçus) |
| Émis (session repo site) | | ⚠️ avant émission : confirmer samedi/dimanche fermés auprès du client (relance en cours) |
| PR ouverte | | |
| Mergée / déployée | | MAJ `nap.md` (écart schema résolu) |
