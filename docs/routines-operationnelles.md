# Routines opérationnelles — le playbook semaine par semaine

Ce document est le **mode d'emploi opérationnel** du repo : ce que l'opérateur fait concrètement, dans quel ordre, à quelle cadence, avec quelles checklists. Les commands disent quoi exécuter ; ce playbook dit comment organiser le travail autour. À adapter au portefeuille (écrit pour ~2 clients : 1 SaaS + 1 local ; scalable jusqu'à ~8).

---

## 1. La semaine type (vue d'ensemble)

| Moment | Durée indicative | Quoi | Command(s) |
|---|---|---|---|
| **Lundi matin** | 30-45 min / client | Revue de performance + plan de la semaine | `/weekly-review` |
| **Sessions de production** (1-3 / semaine, selon plan) | 45-90 min / contenu | Recherche → rédaction → fact-check → PR | `/research` puis `/write` |
| **Relecture & gate** (après chaque production) | 15-30 min / contenu | Relire, corriger, merger, indexer | (gate humain) |
| **Fil de l'eau (client local)** | 5-15 min / occurrence | Avis à répondre, post GBP à publier | `/review-response`, `/gbp-post` |
| **1er lundi du mois** | 30-60 min / client | Audit technique | `/tech-audit` |
| **Début de mois** | 45-60 min / client | Rapport client + envoi | `/report` |
| **~1 semaine sur 8** | inclus dans la weekly | Re-check bimestriel par typologie | (intégré à `/weekly-review`) |

Règle d'hygiène : **une session Claude Code = un client**. On ouvre la session, on charge son `client-brief.md`, on travaille, on committe le repo, on ferme.

---

## 2. Le lundi matin — la revue hebdo (par client)

C'est la routine pivot : tout le reste de la semaine en découle.

> **Régime de croisière (Planificateur Windows, depuis le 2026-09-02 — rationnel §1.22)** : la revue se **prépare seule** le lundi à 07:30 (`scripts/run-scheduled.ps1 -Mission weekly`, tâche « KAELIX - Weekly ») et le rapport mensuel le 1er à 08:00 (« KAELIX - Report mensuel »). Le lundi type de l'opérateur devient : **① lire l'issue GitHub** « 📋 Weekly S<n> prête à valider » (notification mobile) → **② lire le brouillon commité** dans `reports/`, l'amender si besoin → **③ valider** (les étapes 3-6 ci-dessous restent son gate) → **④ traiter sa `todo-operateur.md`** → **⑤ fermer l'issue**. Les tâches planifiées ne mergent jamais une PR, n'émettent jamais un rapport, ne publient rien — brouillons 🕓 + notification uniquement. Si la tâche n'a pas tourné (PC éteint au-delà du rattrapage, log absent dans `logs/`), la procédure manuelle ci-dessous s'applique telle quelle.

1. Ouvrir Claude Code dans le repo → `/weekly-review <client>` *(en régime de croisière : déjà fait par la tâche planifiée — reprendre à l'étape 3)*.
2. **Client local** : avant de laisser Claude conclure, coller le geo-grid + les nouveaux avis (BrightLocal) et les insights GBP de la semaine.
3. Lire le tableau des verdicts. Rappels :
   - les contenus **< 90 jours** sont « en observation » — la volatilité est normale, on ne touche à rien ;
   - les pages **4-20** sont le gisement prioritaire (avant toute création).
4. Valider (ou amender) le **plan d'action de la semaine** (max 5 actions). C'est ce plan qui définit les sessions de production à venir.
   - Les actions se puisent **en priorité dans les sujets « prévu » du mois** de `content-plan.md` : la weekly exécute le plan éditorial, elle ne réinvente pas un programme chaque lundi.
   - Ce qui glisse, se réordonne ou tombe se répercute dans le plan par un **changement de statut** (`reporté`, `abandonné` avec motif) — jamais par une suppression de ligne.
5. Vérifier que Claude a mis à jour `tracking.md` (dernier relevé + checkpoints J30/J60/J90 dus cette semaine), répercuté les statuts dans `content-plan.md`, et archivé la revue dans `clients/<slug>/reports/YYYY-MM-DD-revue-hebdo.md` (+ index).
6. Committer le repo.

Checklist de sortie : ☐ plan de la semaine validé ☐ tracking à jour ☐ statuts du plan éditorial à jour ☐ revue archivée dans `reports/` ☐ avis en attente traités ou planifiés ☐ commit.

---

## 3. Une session de production (de l'idée à la PR)

Pour chaque contenu du plan de la semaine (issu des sujets « prévu » de `content-plan.md`) :

1. `/research <client> <mot-clé>` → obtenir le **brief de production** (angle, format, typologie, first-party à mobiliser, capture, maillage).
   - Stop si : la règle du scroll disqualifie le mot-clé, la cannibalisation pointe vers un refresh, ou aucun élément first-party n'est mobilisable (→ demander au client avant de produire).
2. `/write <client> <mot-clé>` → rédaction MDX + schema + **passe fact-check** + PR dans le repo du site.
3. **Gate (toi)** : relire le contenu — fond, voix de la marque, points « à confirmer » du rapport fact-check. Corriger ou faire corriger. Puis merger.
4. **Post-publication** (checklist rappelée par la command) : ☐ déploiement OK ☐ URL dans le sitemap ☐ soumission à l'indexation en Search Console ☐ ligne tracking.md complétée (avec typologie) ☐ **ne plus toucher pendant 90 jours**.

Le rythme se calibre sur ta capacité de **relecture**, pas de génération : une demi-journée dispo ≈ 2 contenus relus sérieusement. Publier plus que ce qu'on relit = publier du non-relu = ne pas performer.

---

## 4. Le fil de l'eau — client local

- **Nouvel avis** (vu dans GBP ou BrightLocal) : `/review-response <client>` → coller l'avis → choisir/ajuster le brouillon → **publier soi-même** dans GBP → ligne tracking. SLA cible : < 48 h (la réactivité est un signal).
- **Fraîcheur GBP** : 1-2 posts/semaine. `/gbp-post <client>` → choisir une variante → publier dans GBP → ligne tracking. Varier les types (actu, offre, chantier, conseil) — la command consulte tracking.md pour éviter la répétition.
- **Citations** : rien d'hebdomadaire. À l'onboarding (setup complet depuis `nap.md`), puis correction uniquement quand BrightLocal signale un écart — toujours vérifié manuellement contre le NAP avant toute modification.

---

## 5. Le cycle mensuel (et la révision trimestrielle du plan)

**1er lundi du mois — audit technique** : `/tech-audit <client>` → lire les findings par sévérité → router : contenu (→ tâches `/refresh`/`/write` de la semaine), template/technique (→ à transmettre côté dev du site, hors repo), configuration. Archiver dans `clients/<slug>/audits/`.

**Début de mois — rapport client** : `/report <client> <période>` → le brouillon est archivé d'office dans `clients/<slug>/reports/<période>-rapport-client.md` (statut 🕓) → relire le narratif (chiffres réels, contenus < 90 j présentés « en test », santé du trafic) → ajuster → **envoyer soi-même** → passer le statut à 📤 envoyé le JJ/MM (fichier figé ensuite ; index README à jour).

**~1 semaine sur 8 — re-check bimestriel** (intégré à la weekly) : passer le parc de contenus par typologie — `actu` : l'actualité a-t-elle bougé ? `guide` : quoi compléter ? `evergreen` : érosion seulement. ~80 % du contenu reste identique ; on complète, on ne réécrit pas.

**~1 fois par trimestre — révision du plan éditorial** : `/content-plan <client>` ne se relance pas pour écraser le plan, il sert à **prolonger l'horizon et re-qualifier ce qui reste**. Concrètement : les sujets `publié` sortent du radar, les `reporté` sont soit re-datés soit passés en `abandonné` (avec motif), les mots-clés du trimestre écoulé sont re-vérifiés (une SERP bouge, un mot-clé disqualifié par la règle du scroll peut redevenir viable — et l'inverse), et de nouveaux mois sont ajoutés au bout. À déclencher aussi hors calendrier si le `client-brief.md` change substantiellement (nouvelle offre, nouvel ICP, nouvelle zone). Le plan révisé repasse en 🕓 brouillon jusqu'à ta validation.

---

## 6. Bonnes pratiques transverses

- **Contexte d'abord** : chaque session commence par la lecture du `client-brief.md` (+ `nap.md` si local, + `tracking.md`). Un brief périmé produit des contenus périmés — le mettre à jour dès qu'une info client change.
- **Committer après chaque session** : git est la trace d'audit du travail (qui a produit quoi, quand, sur quel brief).
- **Ne jamais court-circuiter le gate**, même pressé : c'est la seule phase humaine, et celle qui conditionne la performance ET protège la marque (avis, NAP).
- **Un outil de référence par KPI** : positions/mots-clés = Haloscan ; clics/impressions = Search Console. Ne jamais comparer les chiffres de deux outils.
- **Résister aux courbes des 90 premiers jours** : ni euphorie ni panique — Google teste.
- **Alimenter le first-party en continu** : à chaque échange client (chantier livré, chiffre interne, retour terrain), l'ajouter au brief. C'est le carburant de l'information gain ; un brief qui s'appauvrit = des contenus qui se généralisent.
- **Quand une routine devient pénible** (trop de clients, trop de collages manuels) : ne pas la bâcler — c'est le signal d'automatiser. Ce playbook est alors la spec de l'orchestrateur (voir `rationnel-des-choix.md` §5).

---

## 7. Onboarding d'un nouveau client (hors routine)

1. `/onboard-client <slug> <type> <domaine>` — prévoir 1 à 2 h : l'entretien (activité, cibles, first-party, **PMF**), le ciblage 3 étapes, la baseline technique, le NAP si local.
2. Vérifier les accès : Search Console connectée dans Cuik, projet Haloscan créé, BrightLocal + GBP si local, PostHog/GA4 si SaaS.
3. Valider le plan des 5 premières actions (souvent : des refreshes de l'existant 4-20 AVANT de la création).
4. **`/content-plan <slug>`** — prévoir 30-45 min : le plan éditorial des 6 mois. L'onboarding donne le point de départ, le plan donne la trajectoire. Deux choses à préparer avant de lancer la command : la **cadence contractuelle** (combien de contenus/mois sont vendus) et ta **capacité réelle de relecture** — c'est la seconde qui plafonne le volume. Relire le brouillon, ajuster, passer en ✅ validé : le plan validé est présentable au client (c'est souvent le premier livrable qui rend la mission tangible pour lui).
5. Client local : dérouler le setup citations depuis `nap.md` (GBP → Pages Jaunes → le reste), chaque annuaire vérifié à la main.
6. Premier `/weekly-review` la semaine suivante : la boucle est lancée — elle exécute le plan et en met les statuts à jour.
