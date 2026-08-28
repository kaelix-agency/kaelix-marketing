---
description: Revue de performance hebdomadaire (phase 5) — diagnostic + plan d'action priorisé
argument-hint: <slug-client>
---
Revue hebdo pour `$ARGUMENTS`.

1. Lis `clients/<slug>/client-brief.md`, `tracking.md` (le réalisé) et `content-plan.md` s'il existe (le prévu) — les sujets au statut **« prévu »** du mois en cours sont la matière première du plan d'action de l'étape 7. Si aucun plan éditorial n'existe encore, le signaler : la weekly exécute un plan, elle n'en tient pas lieu.
2. **Collecte** :
   - Cuik MCP → données Search Console : impressions, clics, CTR, position par URL/requête (7 et 28 derniers jours).
   - Haloscan MCP → positions des mots-clés suivis, cannibalisations détectées.
   - Si le brief indique PostHog → PostHog MCP : sessions, conversions attribuées au contenu.
   - Si client local → demande-moi de coller le geo-grid/avis BrightLocal et les insights GBP avant de conclure.
3. **⛔ Règle des 90 jours (garde-fou prioritaire)** : pour tout contenu publié il y a **moins de 90 jours**, la volatilité des positions est NORMALE (Google teste : il monte/descend la page et observe le comportement des utilisateurs). Aucun refresh ni action corrective sur ces contenus, quelles que soient les courbes. Deux seules exceptions : erreur factuelle avérée, ou problème technique bloquant (signalé par Cuik). J30 et J60 = observation seule ; le verdict et l'action se prennent à J90.
4. **Diagnostic** (règles, uniquement sur les contenus ≥ 90 jours) :
   - fortes impressions + faible CTR → refresh title/meta ;
   - bloqué positions 4-20 → **gisement prioritaire** : approfondir/mailler pour viser le top 3 (hors top 3, très peu de trafic) ;
   - cannibalisation → fusion ;
   - chute brutale → vérifier technique (Cuik) ;
   - contenu en érosion selon sa typologie → voir re-check ci-dessous.
5. **Re-check bimestriel par typologie** : ~1 semaine sur 8, passe en revue les contenus publiés selon leur colonne `typologie` dans tracking.md — `actu` : l'actualité a-t-elle évolué ? `guide` : informations manquantes à compléter (nouveaux outils/pratiques sortis) ? `evergreen` : rien sauf érosion. ~80 % de l'article reste identique ; on complète, on ne réécrit pas.
6. **Équilibre du trafic** : signale si 3-4 pages concentrent >60-70 % du trafic SEO (fragilité — une page qui tombe = trafic mort) ou si le SEO dépasse ~60 % du trafic total du client (dépendance à une source unique).
7. **Livrable** : tableau des contenus avec verdict (on_track / à agir / <90j-observation), puis **plan d'action priorisé de la semaine** (max 5 actions, chacune mappée sur une command : /refresh, /write, /gbp-post…).
8. **Historisation** : sauvegarde le livrable intégral dans `clients/<slug>/reports/YYYY-MM-DD-revue-hebdo.md` avec un bandeau d'en-tête (client, date, période des données, sources utilisées, statut « interne »), et ajoute la ligne dans l'index `clients/<slug>/reports/README.md` (à la première revue : créer le dossier en copiant `clients/_template/reports/README.md`). **Une revue générée ne se réécrit plus** (trace d'audit) — la semaine suivante = un nouveau fichier.
9. Mets à jour la colonne "dernier relevé" de `tracking.md` et les checkpoints J30/J60/J90. La ligne « Historique des revues hebdo » de tracking.md reste le résumé condensé ; elle référence le fichier de la revue.
10. **Mets à jour les statuts des sujets de `content-plan.md`** : `prévu` → `en production` → `publié`, ou `reporté` / `abandonné` **avec le motif** quand la semaine réordonne le programme. ⚠️ Le plan est un document vivant : on ne le re-génère jamais et **aucune ligne ne s'efface** — un sujet qui tombe change de statut, il ne disparaît pas (c'est la trace de l'écart entre le prévu et le réalisé). Si le plan dérive structurellement (plus d'un mois de retard, ou cadence tenable dépassée), le signaler : c'est le signal d'une révision via `/content-plan`, pas d'un rattrapage au forceps.

11. **To-do opérateur** : mets à jour `clients/<slug>/todo-operateur.md` (gabarit `clients/_template/todo-operateur.md`) — ajoute les actions du plan de la semaine qui reviennent à **l'opérateur** (contact client, validation, accès, arbitrage, envoi) avec origine « revue AAAA-MM-JJ » et échéance, mets à jour les statuts des actions existantes, clôture (✅ + date) ce qui a été fait. Une action qui conditionne une production porte la date-limite J-7 du sujet concerné. Ligne au journal du fichier.

> ⛔ **Périmètre** (décision opérateur 2026-08-28, `docs/rationnel-des-choix.md` §1.16) : la revue hebdo est **uniquement interne** — pilotage opérateur + repo. Elle ne produit **aucun message à destination du client**. La communication client, c'est le rapport mensuel (`/report`, PDF prêt à l'envoi) ; les demandes ponctuelles (first-party, avis) sont portées par l'opérateur en direct, hors système — la revue les liste en actions avec le canal « WhatsApp opérateur », elle ne les rédige pas.
