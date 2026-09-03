# To-do opérateur — Transports Ansquer

> Les actions qui attendent **l'opérateur** (pas le système). Maintenue à chaque `/weekly-review` et à chaque gate. ⛔ Invariant 14 (2026-09-02) : **aucune action « demander au client »** — le seul canal de demande est la ligne avis permanente du rapport mensuel. Convention : `docs/rationnel-des-choix.md` §1.18 et §1.20.
>
> **Statuts** : 🕓 à faire · 🔧 en cours · ✅ fait (date) · ⛔ bloqué (motif) · ↪️ reporté (nouvelle échéance)

| # | Action | Origine | Échéance | Statut |
|---|---|---|---|---|
| 2 | **Checklist GBP, champs manuels restants** (`nap.md` : tél 06 partout, horaires avec coupure, catégorie « Société de transport routier », description ; ⛔ adresse : ne pas toucher — elle est la référence) | mission GBP 20/08 + gate rapport 08 | **cette semaine** — conditionne la ligne « fiche Google » du rapport d'août | 🕓 à faire |
| 4 | **Envoyer le rapport d'août à Martin** (✅ validé le 02/09, PDF final remis) puis dire « envoyé » → passage 📤 avec date | gate 02/09 | **cette semaine** | 🔧 en cours (envoi opérateur) |
| 5 | ~~Planificateur Windows~~ | décision 28/08 | — | ✅ **fait (2026-09-02)** : chantier exécuté — `scripts/run-scheduled.ps1`, tâches « KAELIX - Weekly » (lundi 07:30, 1er run 07/09) et « KAELIX - Report mensuel » (le 1er, 08:00), diagnostic test 7/7 PASS. Nouveau rôle opérateur : lire l'issue GitHub → valider → fermer |
| 6 | ~~Connexion Cuik ↔ GSC~~ → **REMPLACÉ le 2026-09-03** (identifiants Cuik perdus, décision : API directe, §1.24) par : **setup GCP** (guide fourni par la session : projet `kaelix-gsc`, API Search Console activée, compte de service + clé JSON posée en `C:\Users\Axel\.kaelix\gsc-service-account.json`, email du compte ajouté « Complet » sur la propriété) → puis la session fait le test réel + l'inspection des 3 articles | chantier GSC directe 03/09 | **cette semaine** — conditionne les métriques de la weekly du 07/09 | 🕓 à faire (opérateur : setup navigateur) |
| 7 | ~~GO reco palettes + GO /research comparatif~~ | reprise 02/09 | — | ✅ fait (2026-09-02) : ré-angle palettes validé ; `/research` comparatif lancé |

## Actions retirées / closes

| # | Action | Sort |
|---|---|---|
| 1 | WhatsApp Martin (exemples de quai + lien d'avis) | ⛔ **retirée le 2026-09-02 — doctrine zéro sollicitation (invariant 14)** : le vécu de quai ne se demande plus (ré-angle ou glissement) ; les avis passent par la ligne permanente du rapport |
| 3 | Arbitrage adresse 49/51 | ✅ **fait le 2026-09-02** : décision opérateur « aligner sur la fiche GBP » exécutée — relevé fiche = **51** (« Quai 8, 51 Rte Principale du Port Bât G1 ») ; `nap.md` à jour ; site déjà à 51 → aucune PR ; annuaires à aligner à la campagne citations |

## Journal

| Date | Changement |
|---|---|
| 2026-08-28 | Création (gate mise en page du rapport) : 5 actions initialisées + Cuik différé reporté sans date |
| 2026-09-02 | Doctrine zéro sollicitation : #1 retirée ; #3 close (arbitrage 51 exécuté, relevé fiche via Chrome) ; #4 allégée (points levés par la session) ; #7 ajoutée (GO palettes + GO /research comparatif) |
