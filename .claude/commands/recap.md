---
description: Récap de reprise de session — état des clients, gates en attente, actions du jour
argument-hint: [slug-client, défaut = tous]
---
Récap de reprise pour `$ARGUMENTS` (défaut : tous les clients).

1. **Lis l'état persisté** : la mémoire de session (état + pièges connus), puis pour chaque client : `todo-operateur.md` (ce qui attend l'opérateur), `content-plan.md` (statuts du mois en cours), `tracking.md` (fenêtres 90 j, checkpoints J30/J60/J90 dus cette semaine), l'index `reports/` (dernière weekly, statut du rapport mensuel) et `research/` (briefs en attente de GO).
2. **Vérifie le système** : `git status` + retard vs `origin` (les deux repos) ; la dernière tâche planifiée a-t-elle tourné (`logs/`, issue GitHub correspondante) ? issues GitHub ouvertes (gates en attente : avis, weeklies à valider).
3. **Pouls données (léger)** : `node scripts/gsc-fetch.mjs query --days 7` — deux lignes de tendance, pas d'analyse (la weekly fait l'analyse).
4. **Rends le récap compact** : ① ce qui a changé depuis la dernière session (commits, tâches auto, gates fermés) · ② ce qui attend MON action (issues + todo-operateur, avec échéances) · ③ ce que la session propose de faire MAINTENANT, dans l'ordre, chaque item mappé sur sa command (`/research`, `/write`, `/weekly-review`…) · ④ alertes (échéance J-7 d'un sujet, fenêtre 90 j qui se ferme, tâche planifiée en échec).
5. ⛔ Ne lance aucune production depuis le récap : il propose, l'opérateur donne les GO.
