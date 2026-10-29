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
| [`2026-08-rapport-client.md`](./2026-08-rapport-client.md) · [PDF](./2026-08-rapport-client.pdf) | rapport client | 2026-08 | 📤 **émis le 03/09** (v2 corrigée pré-émission : ligne sitemap) — **figé** |
| [`2026-09-02-revue-hebdo.md`](./2026-09-02-revue-hebdo.md) | revue hebdo (manuelle — Planificateur non posé) | S36, 29/08-02/09 | interne — 🕓 brouillon |
| [`2026-09-07-revue-hebdo.md`](./2026-09-07-revue-hebdo.md) | revue hebdo (**1re produite par le Planificateur** — GSC réelle 7 j / 28 j ; Haloscan 403 et fiche GBP empêchés) | S37, 31/08-06/09 | interne — ✅ validée le 14/09 (issue #4 fermée) |
| [`2026-09-14-revue-hebdo.md`](./2026-09-14-revue-hebdo.md) | revue hebdo (Planificateur — GSC 7 j / 28 j : meilleure semaine, homepage pos. 7,3 ; art. empotage inconnu à J+17 ; Haloscan timeout MCP et fiche GBP empêchés) | S38, 07/09-13/09 | interne — ✅ validée le 14/09 (issue #5 fermée) |
| [`2026-09-21-revue-hebdo.md`](./2026-09-21-revue-hebdo.md) | revue hebdo (Planificateur — **Haloscan lu en headless pour la 1re fois** ; art. palettes indexé en 3 j, 19 imprs pos. 7,6 ; guide empotage et comparatif « découverts, jamais crawlés » ; fiche GBP empêchée) | S39, 14/09-20/09 | interne — 🕓 brouillon (issue #6 encore ouverte au 05/10) |
| — | revue hebdo **S40 du 28/09 : non produite** (session du Planificateur lancée à 11:15, interrompue sans livrable — couverte par la revue du 05/10) | S40, 21/09-27/09 | — |
| [`2026-10-05-revue-hebdo.md`](./2026-10-05-revue-hebdo.md) | revue hebdo (Planificateur — couvre 2 semaines ; **art. palettes 397 imprs pos. 6,6 + 1er clic du blog** ; GSC 28 j 43 clics / 1 869 imprs ; comparatif retombé « inconnu de Google » ; rapport de septembre non généré ; fiche GBP empêchée ; contrôle citations mensuel) | S41, 28/09-04/10 | interne — 🕓 brouillon (issue #7 ouverte au 12/10) |
| [`2026-10-12-revue-hebdo.md`](./2026-10-12-revue-hebdo.md) | revue hebdo (Planificateur, à l'heure — GSC 28 j 40 clics / 2 109 imprs ; **art. palettes 575 imprs pos. 6,5** ; « transporteur gennevilliers » 7,2 sur 7 j ; guide/comparatif toujours non crawlés ; 3 semaines sans gate ; **commissionnaire `reporté` 11/2026** ; fiche GBP empêchée) | S42, 05/10-11/10 | interne — 🕓 brouillon |
| [`2026-09-rapport-client.md`](./2026-09-rapport-client.md) · [PDF](./2026-09-rapport-client.pdf) | rapport client | 2026-09 | 📤 **émis le 15/10** (Gmail opérateur, cc Mickael) — **figé** |
| [`2026-10-19-revue-hebdo.md`](./2026-10-19-revue-hebdo.md) | revue hebdo (autonome — **guide empotage et comparatif indexés le 16/10** ; GSC 28 j 39 clics / 2 288 imprs ; homepage pos. 6,1 sur 7 j ; **palettes J30 : 694 imprs pos. 6,3** ; « transporteur gennevilliers » 84 imprs / 0 clic → pack local ; octobre 0/2 acté ; PostHog et fiche GBP empêchés) | S43, 12/10-18/10 | interne — ✅ autonome |
| [`2026-10-29-releve-donnees-j90.md`](./2026-10-29-releve-donnees-j90.md) | relevé de données (session interactive : GSC 90 j et 28 j, écarts de clics, Haloscan 29/10, PostHog 17-28/10) — tient lieu de la revue hebdo du 26/10, non produite | au 27-29/10 | interne — source des chiffres de la revue J90 |
| [`2026-10-revue-strategique-j90.md`](./2026-10-revue-strategique-j90.md) · [PDF](./2026-10-revue-strategique-j90.pdf) | **revue stratégique J90 n° 1** (protocole `docs/revue-strategique-j90.md`) : bilan des positions, écarts CTR, ciblage, verdicts J90, plan nov→janv, enseignements transversaux | J90 du site (août → octobre) | interne — ✅ GO d'Axel le 29/10, plan commité |
| [`2026-10-bilan-j90-client.md`](./2026-10-bilan-j90-client.md) · [PDF](./2026-10-bilan-j90-client.pdf) | **bilan client 90 jours** (support de la visio J90, §1.31) : récap mensuel affichages/clics/contacts, pages et recherches, top 6, actions faites et à venir | août → octobre 2026 | client — ✅ validé le 29/10, non émis |
