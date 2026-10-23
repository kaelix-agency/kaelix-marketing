---
description: Audit gratuit d'un prospect — collecte → notation → rédaction des 3 points → teaser super light → deck → gate avant envoi
argument-hint: <slug-prospect> [--site <url> --nom "…" --ville "…" --activite "…" --type local|ecommerce|saas --concurrent <site> --requetes "a|b|…"]
---
Audit gratuit pour `$ARGUMENTS`. Objectif unique du livrable envoyé : **obtenir le rendez-vous de 30 min**. Doctrine (`prospects/README.md`) : le prospect reçoit la version **super light** (score + verdict + 3 points « vu → ce que ça coûte »), tout le développement (piliers, solutions, plan, offre) se fait **au rendez-vous**, avec le deck. Rien ne part sans gate.

**Prérequis** : `.env` avec `PSI_API_KEY`, `GOOGLE_PLACES_API_KEY`, la clé Haloscan ; réseau (le conteneur ne l'a pas → les scripts tournent sur le poste, ou je donne la commande à coller). Un dossier `prospects/<slug>/` existant avec un `audit.json` déjà envoyé **ne se régénère pas** (on ne revient pas sur un audit envoyé) : dans ce cas, dis-le et arrête-toi.

## 1. Collecte (brique 1)

`node scripts/audit-collect.mjs <slug> [options]` → `prospect.json` + `collecte.json`. Au premier passage, les 4 entrées (site, activité, ville, type) sont obligatoires ; 1 à 2 concurrents facultatifs (sinon : les 2 premiers sur la requête principale). Les 10 recherches : proposées depuis l'activité (Haloscan `match`/`related` sur un **mot-clé court**, jamais la phrase d'activité), validées par moi en une question à choix si elles ne vont pas de soi.

**Positions — règle du 23/10/2026 (leçon Cadres Concept)** : la SERP Haloscan ne suffit pas. Avant de rédiger, **relevé direct des 10 recherches** sur google.fr en navigation privée, **ordinateur et téléphone** (claude-in-chrome si disponible dans la session ; sinon je le fais et je colle le tableau), consigné dans `prospects/<slug>/<date>-releve-serp.md` (tableau recherche × position du prospect / des concurrents / 1er organique / ce qui précède le premier organique : Shopping, Aperçu IA, annonces). Les deux sources se confrontent ; en cas d'écart, **le relevé direct fait foi sur les positions, Haloscan sur les volumes**. Un relevé impossible = « non vérifiable » dans le point concerné, jamais une position affirmée.

## 2. Lectures à la main

`collecte.json → a_lire_a_la_main` liste les critères qu'aucune API ne donne (Shopping, publications de la fiche, tri du catalogue, relance panier, cohérence des délais et des téléphones). Je les lis **sur téléphone** (navigateur de la session ou moi) et je les pose dans `prospects/<slug>/lecture-manuelle.json` (modèle : `prospects/lecture-manuelle.exemple.json`). Un critère non lu reste absent du fichier : il sortira de la moyenne, il ne se devine pas.

## 3. Notation (brique 2)

`node scripts/audit-score.mjs <slug>` → `scores.json` (26 critères, preuve par critère, non vérifiable hors moyenne). Je lis le tableau : les critères à 0 et 50 sont la matière des 3 points. Grille sévère, gardée telle quelle (22/10) : on ne « remonte » jamais une note à la main.

## 4. Rédaction de `audit.json` — en session principale

Je crée `prospects/<slug>/audit.json` (schéma dans `prospects/README.md`) depuis `prospect.json`, `collecte.json`, `scores.json`, le relevé SERP et la lecture manuelle :
- `verdict_titre` : une phrase, le fait qui coûte le plus, dans les mots du client. `verdict_texte` : 3 phrases max, **commence par ce qui est solide chez lui** (chiffré), puis « trois points vous empêchent de… ».
- `points` : 3, un par pilier faible, dans l'ordre d'impact. `vu` = la mesure (chiffre, date, comparaison concurrent), `coute` = la conséquence business en une phrase, `action` = ce qu'on ferait (ne s'affiche pas dans le teaser light, sert au deck et à la page complète). Chaque point pointe sans le dire vers une formule (site → Local → National / Shopping).
- `plan` 3 étapes sans prix, `piliers` 4 constats, `graphiques` seulement ce qui est mesuré (jamais de trafic estimé), `concurrents`, `cta` (`rdv_url` = `siteConfig.bookingUrl` de kaelix.fr, téléphone d'Axel), `methode` (date, outils, appareil du relevé, mention « sans aucun chiffre du commerçant »).
- Puis `node scripts/audit-score.mjs <slug> --write-audit` pour reporter les scores (le score affiché est **toujours** celui de la grille, jamais arrondi à la main).

**Règles de véracité** : aucune affirmation sur les ventes ou le fonctionnement du prospect qu'on n'a pas mesurée (« ne vend qu'en salon », « peu de trafic ») ; une position dite « jamais dans le top 3 » doit venir du relevé direct ; aucun vocabulaire technique (Core Web Vitals, LCP, scripts, Merchant Center, balises) — on dit « votre image principale met 9,8 s », « l'onglet Shopping de Google » ; aucun prix dans le teaser.

**Vérification — délègue au subagent `fact-checker`** (chemin de `audit.json` + chemin de `prospects/<slug>/`) : chaque chiffre contre `collecte.json` / `scores.json` / le relevé SERP, chaque nom propre, chaque affirmation sur le prospect. Les 🔴 bloquent ; un chiffre sans source dans le dossier **se retire**. Les ⚠️ non vérifiables remontent au gate tels quels.

## 5. Teaser super light + deck (brique 3)

- `node scripts/audit-teaser.mjs <slug> --light` → `audit-teaser.html` (score, verdict, 3 points vu → coûte, CTA ; sans action, sans graphiques, sans piliers, sans plan). C'est **le seul fichier envoyé** au prospect.
- `node scripts/audit-deck.mjs <slug>` → `deck-content.json` pré-rempli ; je rédige les « [À RÉDIGER] » (forces chiffrées en premier, frictions = le site seul, écart = seulement ce que montre la comparaison, notes d'orateur, suite datée) ; je relance `node scripts/audit-deck.mjs <slug>` → `deck/` 8 diapositives. Sans « [À RÉDIGER] » restant. Le deck sert **au rendez-vous**, il ne part pas avec le teaser.
- Facultatif, pour l'après-rendez-vous : `node scripts/audit-teaser.mjs <slug>` (sans `--light`) → `audit-complet.html`, la page longue.

## 6. Gate avant envoi

Je commite `prospects/<slug>/` (sans jamais toucher un `audit-teaser.html` déjà envoyé d'un autre prospect), je pousse, puis je présente : le verdict, les 3 points (vu → coûte), le score et le nombre de critères vérifiés, le rapport du `fact-checker` avec ses ⚠️, les angles morts (critères non vérifiables et pourquoi), le rendu du teaser (capture) et une diapo du deck. Ligne dans le tableau de bord (`type: "gate"`, client « Prospects », titre « Audit <nom> à valider avant envoi »). **Je n'envoie rien** : l'envoi (mail au prospect, lien privé) est un geste de l'opérateur.

## 7. Après le GO

- Fiche CRM KAELIX (`prospects`) : statut « Audit envoyé », date, score, lien du teaser, prochaine relance (J+3 si pas de réponse, une seule) ; livrable « rendez-vous à obtenir ».
- Tableau de bord : le gate passe `done`, une action `mobile` « Envoyer l'audit <nom> » à Axel si ce n'est pas déjà fait dans la foulée.
- Si signature : `/onboard-client <slug>` crée `clients/<slug>/` ; `prospects/<slug>/` reste l'historique (audit, relevé SERP, fiche d'entretien = first-party de l'onboarding).
