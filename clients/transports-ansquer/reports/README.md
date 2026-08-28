# Livrables de suivi — Transports Ansquer

Deux types de livrables cohabitent ici, avec des régimes différents — **ne jamais transmettre l'un à la place de l'autre**.

| Type | Nommage | Destinataire | Régime |
|---|---|---|---|
| **Revue hebdo** (`/weekly-review`) | `AAAA-MM-JJ-revue-hebdo.md` | **interne** | document de travail, jamais transmis au client ; contient en annexe le **pulse client** de la semaine (3-4 lignes WhatsApp, statut brouillon → validé → envoyé) |
| **Rapport mensuel** (`/report`) | `AAAA-MM-rapport-client.md` | **client** | cycle de statut ci-dessous, **figé après envoi** |

## Règles

- **Une revue générée ne se réécrit plus.** La semaine suivante = un nouveau fichier.
- **Cycle du rapport client** : 🕓 `brouillon` → ✅ `validé` (gate opérateur) → 📤 `envoyé le JJ/MM`.
- **Après « envoyé », le fichier est figé** : c'est la trace exacte de ce que le client a reçu. Une correction post-envoi = un **nouveau fichier daté** (`AAAA-MM-correctif-JJMM.md`), jamais une réécriture.
- Une période = un rapport. Les chiffres ne se recalculent pas a posteriori.
- Le résumé condensé de chaque revue hebdo est repris dans `tracking.md` §2, qui pointe vers le fichier ; le détail (tableaux, chiffres, plan) reste ici.
- **Pulse client** (décision opérateur 2026-08-28) : sous-produit de chaque revue hebdo, 3-4 lignes en langage client, zéro jargon, envoyé par WhatsApp après validation opérateur. Le pulse n'est pas un rapport : aucun chiffre non consolidé, aucune promesse.

## Index

| Fichier | Type | Période | Statut |
|---|---|---|---|
| [`2026-08-28-revue-hebdo.md`](./2026-08-28-revue-hebdo.md) | revue hebdo (1re du client) + pulse | semaine du 24/08 au 28/08/2026 | interne — 🕓 brouillon (validation opérateur en attente) ; pulse 🕓 brouillon |
