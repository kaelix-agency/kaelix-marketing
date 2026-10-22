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

1. ✅ **Brique 1 (22/10/2026)** : `node scripts/audit-collect.mjs <slug> [--site … --nom … --ville … --activite … --concurrent … --requetes 'a|b']` → `prospects/<slug>/prospect.json` (les 4 entrées) + `prospects/<slug>/collecte.json` (une section par pilier, chaque mesure datée et sourcée, « non vérifiable » avec sa raison quand une source manque). Sources : PageSpeed Insights mobile (`PSI_API_KEY`), Places API (New) (`GOOGLE_PLACES_API_KEY`), Haloscan (SERP des 10 recherches via `overview/serp`, volumes via `bulk`), lecture du site par `fetch` (paiement, retours, téléphones, délais, menu, blog). Six critères restent à lire à la main (Shopping, publications de la fiche, tri du catalogue, relance panier, cohérence des délais et des téléphones — listés dans `a_lire_a_la_main`). Clés dans `.env` à la racine. Premier test réel à faire sur le poste (le conteneur n'a pas le réseau).
2. Grille de calcul des 4 scores.
3. Command `/audit-gratuit <slug>` qui enchaîne collecte → scores → rédaction des 3 points → génération → fiche CRM « Audit envoyé ».
4. Audit complet (diapos + page longue) à partir du même JSON enrichi des chiffres client.

---

# Ce que le premier audit réel a appris (Cadres Concept, 21 octobre 2026)

Audit produit entièrement à la main, en une demi-journée, pour une présentation client le lendemain. Les constats ci-dessous corrigent le plan d'automatisation prévu le matin même.

## Les sources de données, à l'épreuve

| Donnée | Source | Verdict |
|---|---|---|
| Vitesse, poids, balises | API PageSpeed Insights | **Clé API obligatoire.** Sans clé, le quota public est épuisé au bout de quelques appels (erreur 429). L'interface web passe sans clé mais prend ~1 minute par page et demande un navigateur. |
| Vitesse chez les vrais visiteurs | PageSpeed, bloc « expérience de vos utilisateurs » | Gratuit et précieux. **Son absence est elle-même une donnée** : quand Google n'a pas assez de visiteurs pour mesurer un site, c'est un indicateur de trafic relatif. C'est devenu l'argument central de la présentation Cadres Concept. |
| Positions Google | Relevé manuel sur la page de résultats | A marché, mais fragile : c'est du grattage, Google finit par bloquer, et les positions obtenues sont approximatives (annonces comprises). **Haloscan reste la source de référence.** |
| Fiches Google | Lecture de la fiche depuis une recherche | A marché pour les trois enseignes. L'API Places n'a pas été testée — la clé n'existe pas encore. |
| Prix, moyens de paiement, retours, cohérence des coordonnées | Lecture du site, de la FAQ et des CGV | **Aucune API ne donne ça.** C'est de la lecture de pages, et c'est ce qui a produit les constats les plus vendeurs : aucun moyen de paiement annoncé avant le panier, deux numéros de téléphone selon la page, deux délais de livraison contradictoires. |
| Trafic estimé des concurrents | — | Non obtenu, et finalement inutile : remplacé par la présence ou l'absence de mesure terrain, qui est gratuite et plus défendable. |

## Deux clés à créer avant d'automatiser

Dans le projet Google Cloud du compte de service Search Console, API et services → Bibliothèque, puis Identifiants :

- **PageSpeed Insights API** → `PSI_API_KEY` dans `.env`
- **Places API (New)** → `GOOGLE_PLACES_API_KEY` dans `.env`

## L'audit complet : structure validée

Huit diapositives, dans cet ordre, chaque fait n'apparaissant qu'une fois :

1. Couverture — le verdict en une phrase, le score et le nombre de critères mesurés
2. Ce qui est solide chez lui — **commencer par les forces**, chiffrées, jamais flatteuses
3. Ce qui bloque chez lui → ce qu'on fait contre (deux colonnes) — uniquement ce qui est vrai sans regarder les concurrents
4. Ce qu'ils ont et pas lui → ce qu'on fait contre — uniquement ce qui se voit en comparant
5. Ce qu'on met en place — organisé par calendrier, jamais problème par problème (sinon on répète les diapos 3 et 4)
6. L'offre — les montants et les conditions seulement, pas le contenu
7. Le bilan du 4e mois — le tableau de décision option par option, colonne « on garde ? » vide
8. La suite — trois étapes datées, coordonnées

Règles de rédaction tirées de la relecture client : pas de vocabulaire technique (ni Core Web Vitals, ni premier octet, ni scripts, ni Merchant Center), un fait par diapositive, et une note d'orateur sous chacune qui rappelle ce qu'il ne faut pas redire ensuite.

## Ce qui reste à construire

1. `scripts/audit-collect.mjs` — PageSpeed (clé), Haloscan (MCP), Places (clé), lecture du site pour les critères de cohérence → `prospects/<slug>/collecte.json`
2. `scripts/audit-score.mjs` — application de `docs/grille-audit-gratuit.md`, après arbitrage du calibrage
3. `scripts/audit-deck.mjs` — génération des 8 diapositives depuis le même JSON que la page teaser
4. Command `/audit-gratuit <slug>` qui enchaîne le tout, avec gate avant envoi
