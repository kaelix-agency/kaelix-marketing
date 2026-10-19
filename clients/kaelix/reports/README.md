# Livrables de suivi — KAELIX (l'agence, cliente d'elle-même)

<!--
Copié du gabarit clients/_template/reports/README.md à la première revue hebdo (2026-10-19).
Convention 2026-07-15 (docs/rationnel-des-choix.md §1.10, skill client-report).
-->

Deux types de livrables cohabitent ici, avec des régimes différents — **ne jamais transmettre l'un à la place de l'autre**.

| Type | Nommage | Destinataire | Régime |
|---|---|---|---|
| **Revue hebdo** (`/weekly-review`) | `AAAA-MM-JJ-revue-hebdo.md` | **interne** | document de travail, jamais transmis au client |
| **Rapport mensuel** (`/report`) | `AAAA-MM-rapport-client.md` | **client** | cycle de statut ci-dessous, **figé après envoi** |

> Particularité kaelix : le « client » est l'agence elle-même. Le rapport mensuel reste produit (c'est la preuve publique « on s'applique ce qu'on vend »), mais son émission est un simple classement, pas un envoi.

## Règles

- **Une revue générée ne se réécrit plus.** La semaine suivante = un nouveau fichier.
- **Cycle du rapport client** : 🕓 `brouillon` → ✅ `validé` (gate opérateur) → 📤 `envoyé le JJ/MM`.
- **Après « envoyé », le fichier est figé** : c'est la trace exacte de ce que le client a reçu. Une correction post-envoi = un **nouveau fichier daté** (`AAAA-MM-correctif-JJMM.md`), jamais une réécriture.
- Une période = un rapport. Les chiffres ne se recalculent pas a posteriori.
- Le résumé condensé de chaque revue hebdo est repris dans `tracking.md` §2, qui pointe vers le fichier ; le détail (tableaux, chiffres, plan) reste ici.

## Index

| Fichier | Type | Période | Statut |
|---|---|---|---|
| [`2026-10-19-revue-hebdo.md`](./2026-10-19-revue-hebdo.md) | revue hebdo (première) | semaine du 12/10 au 18/10 — GSC 7 j 11/10-17/10, 28 j 20/09-17/10 (vides) | interne |
