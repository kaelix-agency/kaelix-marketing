# Prospects — audits gratuits

Un dossier par prospect (`prospects/<slug>/`), **avant** qu'il devienne un client (`clients/<slug>/` est créé par `/onboard-client` à la signature).

| Fichier | Rôle |
|---|---|
| `audit.json` | Les données de l'audit gratuit (teaser). Source unique : tout ce qui s'affiche vient de là. |
| `audit-teaser.html` | La page envoyée au prospect sous 72 h ouvrées, générée par `node scripts/audit-teaser.mjs <slug> --light` (version super light depuis le 23/10/2026). Autoporteuse, `noindex`, à publier en lien privé. Un teaser envoyé ne se régénère pas. |
| `audit-complet.html` | La page longue (points avec « ce qu'on ferait », graphiques, piliers, plan), `node scripts/audit-teaser.mjs <slug>` sans option — pour l'après-rendez-vous, jamais envoyée avant. |
| `deck/` | Les 8 diapositives du rendez-vous (`scripts/audit-deck.mjs`). |

## Principe du teaser (décisions du 2026-10-21, précisées le 2026-10-23)

**Décision d'Axel du 23/10/2026 : l'audit envoyé au prospect est une version « super light »** — elle montre **plusieurs problèmes** (le score et les 3 points qui coûtent le plus, chacun en une phrase : vu → ce que ça coûte), **sans développer** ni les solutions ni le détail des piliers. Tout le développement (diapos, piliers, plan chiffré) se fait **au rendez-vous**. Le teaser crée le besoin de l'appel, il ne le remplace pas.

**Leçon du 23/10/2026 (positions)** : un relevé manuel de positions se fait **sur ordinateur et sur téléphone, en navigation privée**, et se **confronte à Haloscan** avant d'entrer dans un audit — l'audit Cadres Concept du 21/10 annonçait « jamais dans le top 3 » là où deux sources placent la boutique dans le top 3 sur 6 recherches sur 10 (`prospects/cadres-concept/2026-10-23-releve-serp-chrome.md`). L'audit du client n'est pas corrigé (décision d'Axel : on ne revient pas vers un client signé) ; l'extrait public de kaelix.fr l'est.


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
2. ✅ **Brique 2 (22/10/2026)** : `node scripts/audit-score.mjs <slug> [--write-audit]` → `prospects/<slug>/scores.json` : les 26 critères de `docs/grille-audit-gratuit.md` notés 100 / 50 / 0 depuis `collecte.json`, chaque note avec sa preuve ; un critère non mesuré est « non vérifiable » et **retiré de la moyenne** (jamais compté 0) ; score d'un pilier = moyenne des critères vérifiés, global = 30/30/20/20. Les critères lus à la main (10, 19, 20, 25, et au besoin 11, 14, 17, 21) se posent dans `prospects/<slug>/lecture-manuelle.json` (modèle : `prospects/lecture-manuelle.exemple.json`). `--write-audit` reporte les scores dans `audit.json` (`audit.score`, `piliers[].score`, `audit.notation`). Calibrage « sévère » gardé (décision du 22/10). Premier passage sur Cadres Concept : **50/100 avec 19/26 critères vérifiés** (51 à la main le 21/10 — pas comparable, et pilier 4 à 40 contre 70 à la main).
3. ✅ **Brique 3 (23/10/2026)** : `node scripts/audit-deck.mjs <slug> [--force]` → `prospects/<slug>/deck/` (8 diapositives + `deck.json`, format de l'artifact Slides, même gabarit que le deck Cadres Concept du 22/10). Premier passage : le script **écrit `deck-content.json`** pré-rempli depuis `audit.json` (verdict, score, périmètre, points → frictions et écart, plan → prestations, offre standard 150 / 220 / 199 → 569, tableau du bilan, étapes de la suite) avec des « [À RÉDIGER] » là où il faut une phrase humaine (forces, lignes du parcours, écarts, titre de la suite, notes d'orateur) ; second passage : le deck. La rédaction reste en session principale, jamais dans le script ; un « [À RÉDIGER] » restant est signalé. Vérifié par rendu : même structure que le modèle.
4. ✅ **Brique 4 (23/10/2026)** : command `/audit-gratuit <slug> [options]` (`.claude/commands/audit-gratuit.md`) qui enchaîne collecte → relevé direct des positions (ordinateur + téléphone, navigation privée, confronté à Haloscan) → lectures à la main → notation → rédaction d'`audit.json` en session → `fact-checker` → teaser **super light** (`audit-teaser.mjs --light` : sans « ce qu'on ferait », sans graphiques, sans piliers, sans plan) → `deck-content.json` rédigé → deck → **gate avant envoi** (l'envoi reste un geste de l'opérateur) → fiche CRM « Audit envoyé ». Un audit déjà envoyé ne se régénère pas.
5. Audit complet (diapos + page longue) à partir du même JSON enrichi des chiffres client.

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
