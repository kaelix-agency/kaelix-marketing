# Prospects — audits gratuits

Un dossier par prospect (`prospects/<slug>/`), **avant** qu'il devienne un client (`clients/<slug>/` est créé par `/onboard-client` à la signature).

| Fichier | Rôle |
|---|---|
| `audit.json` | Les données de l'audit gratuit (teaser). Source unique : tout ce qui s'affiche vient de là. |
| `audit-teaser.html` | La page envoyée au prospect sous 72 h ouvrées, générée par `node scripts/audit-teaser.mjs <slug>`. Autoporteuse, `noindex`, à publier en lien privé. |

## Principe du teaser (décisions du 2026-10-21)

- **Objectif unique : obtenir le rendez-vous de 30 min.** Score + 3 points qui coûtent le plus + plan en 3 étapes + bouton RDV. Le détail des piliers et les prix sont réservés à l'audit complet (après l'appel).
- **Aucune donnée fournie par le prospect** n'est nécessaire : le teaser se produit à partir de 4 entrées (site, activité, ville, 2 concurrents facultatifs). Les chiffres client (panier moyen, commandes, paniers abandonnés) ne servent qu'à l'audit complet.
- Chaque constat est traduit en conséquence business (« vous perdez des appels »), jamais en jargon.
- Les 3 points pointent chacun, sans le dire, vers une marche de l'offre (site → Local + fiche Google → National).

## Schéma de `audit.json`

- `prospect` : `slug`, `nom`, `prenom_contact`, `site`, `ville`, `activite`, `type` (`local` | `ecommerce` | `saas`).
- `audit` : `date` (AAAA-MM-JJ), `auteur`, `score` (0-100), `verdict_titre` (une phrase), `verdict_texte` (3 phrases max), `perimetre` {`pages`, `recherches`, `concurrents`}.
- `concurrents` : 2 entrées `{nom, site}` — proposés par le prospect, sinon les 2 premiers sur la requête principale.
- `points` : 3 entrées `{titre, vu, coute, action}` — `vu` = ce qu'on a mesuré, `coute` = l'impact en une phrase forte, `action` = ce qu'on ferait (commence en minuscule, suit « Ce qu'on ferait : »).
- `graphiques` : `visites` {client, concurrents[], conclusion} (nombres, **estimation d'outil** — mention obligatoire dans `methode`), `vitesse` (secondes, mesure mobile), `avis` {client:{nb,note}, concurrents:[{nb,note}]}. Un graphique absent n'est pas affiché. `conclusion` accepte `<b>`.
- `piliers` : 4 entrées `{nom, score, constats}` dans l'ordre Site & vitesse / Visibilité Google / Fiche Google / Achat & contact. Couleur automatique : rouge < 40, orange < 60, vert ≥ 60.
- `plan` : 3 étapes `{periode, titre, texte}`, sans prix.
- `cta` : `rdv_url` (agenda Google, créneau 30 min Meet), `telephone`, `texte`.
- `methode` : une à deux phrases sur les mesures (date, outils, estimations).

## À venir

1. Scripts de collecte qui remplissent `audit.json` : PageSpeed Insights (vitesse, poids, https), Haloscan (10 requêtes, volumes, positions, trafic estimé), API Google Places (fiches), `crawl-site.mjs` (titres, mobile).
2. Grille de calcul des 4 scores.
3. Command `/audit-gratuit <slug>` qui enchaîne collecte → scores → rédaction des 3 points → génération → fiche CRM « Audit envoyé ».
4. Audit complet (diapos + page longue) à partir du même JSON enrichi des chiffres client.
