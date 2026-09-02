# Livrables de suivi — Transports Ansquer

Deux types de livrables cohabitent ici, avec des régimes différents — **ne jamais transmettre l'un à la place de l'autre**.

| Type | Nommage | Destinataire | Régime |
|---|---|---|---|
| **Revue hebdo** (`/weekly-review`) | `AAAA-MM-JJ-revue-hebdo.md` | **interne** | document de travail (pilotage opérateur + repo), jamais transmis au client |
| **Rapport mensuel** (`/report`) | `AAAA-MM-rapport-client.md` + `AAAA-MM-rapport-client.pdf` | **client** | **seul artefact à destination du client** ; cycle de statut ci-dessous, **figé après émission** |

## Règles

- **Une revue générée ne se réécrit plus.** La semaine suivante = un nouveau fichier. (Exception tracée : validation opérateur et décisions doctrinales du jour, notées dans le bandeau.)
- **Cycle du rapport client** : 🕓 `brouillon` (markdown) → ✅ `validé` (gate opérateur, PDF généré par `scripts/generate-report-pdf.mjs`) → 📤 `émis le JJ/MM` (envoi par l'opérateur).
- **Après « émis », le fichier est figé** : c'est la trace exacte de ce que le client a reçu (markdown + PDF). Une correction post-envoi = un **nouveau fichier daté** (`AAAA-MM-correctif-JJMM.md`), jamais une réécriture.
- Une période = un rapport. Les chiffres ne se recalculent pas a posteriori.
- Le résumé condensé de chaque revue hebdo est repris dans `tracking.md` §2, qui pointe vers le fichier ; le détail (tableaux, chiffres, plan) reste ici.
- Les demandes ponctuelles au client (first-party, avis) ne passent par aucun livrable : l'opérateur les porte en direct (WhatsApp), hors système.

## Index

| Fichier | Type | Période | Statut |
|---|---|---|---|
| [`2026-08-28-revue-hebdo.md`](./2026-08-28-revue-hebdo.md) | revue hebdo (1re du client) | semaine du 24/08 au 28/08/2026 | interne — ✅ validée le 28/08 |
| [`2026-08-rapport-client.md`](./2026-08-rapport-client.md) · [PDF](./2026-08-rapport-client.pdf) | rapport client | 2026-08 | ✅ **validé le 02/09** (gate opérateur) — PDF final généré, remis à l'opérateur pour envoi ; passage 📤 à sa confirmation |
| [`2026-09-02-revue-hebdo.md`](./2026-09-02-revue-hebdo.md) | revue hebdo (manuelle — Planificateur non posé) | S36, 29/08-02/09 | interne — 🕓 brouillon |
