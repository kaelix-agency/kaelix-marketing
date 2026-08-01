# Livrables de suivi — <NOM DU CLIENT>

<!--
GABARIT — copié vers clients/<slug>/reports/README.md à la première revue ou au premier rapport.
Convention 2026-07-15 (docs/rationnel-des-choix.md §1.10, skill client-report).
-->

Deux types de livrables cohabitent ici, avec des régimes différents — **ne jamais transmettre l'un à la place de l'autre**.

| Type | Nommage | Destinataire | Régime |
|---|---|---|---|
| **Revue hebdo** (`/weekly-review`) | `AAAA-MM-JJ-revue-hebdo.md` | **interne** | document de travail, jamais transmis au client |
| **Rapport mensuel** (`/report`) | `AAAA-MM-rapport-client.md` | **client** | cycle de statut ci-dessous, **figé après envoi** |

## Règles

- **Une revue générée ne se réécrit plus.** La semaine suivante = un nouveau fichier.
- **Cycle du rapport client** : 🕓 `brouillon` → ✅ `validé` (gate opérateur) → 📤 `envoyé le JJ/MM`.
- **Après « envoyé », le fichier est figé** : c'est la trace exacte de ce que le client a reçu. Une correction post-envoi = un **nouveau fichier daté** (`AAAA-MM-correctif-JJMM.md`), jamais une réécriture.
- Une période = un rapport. Les chiffres ne se recalculent pas a posteriori.
- Le résumé condensé de chaque revue hebdo est repris dans `tracking.md` §2, qui pointe vers le fichier ; le détail (tableaux, chiffres, plan) reste ici.

## Index

| Fichier | Type | Période | Statut |
|---|---|---|---|
| <!-- [`2026-08-03-revue-hebdo.md`](./2026-08-03-revue-hebdo.md) --> | revue hebdo | <!-- semaine du 27/07 au 02/08 --> | interne |
| <!-- [`2026-07-rapport-client.md`](./2026-07-rapport-client.md) --> | rapport client | <!-- 2026-07 --> | <!-- 📤 envoyé le 04/08 --> |
