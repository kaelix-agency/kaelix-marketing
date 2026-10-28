# Tâches planifiées (claude.ai) — textes de référence

Les tâches planifiées de l'agence tournent dans le cloud claude.ai (environnement de ce repo). Leur texte **vit ici** : c'est la version à coller dans l'appli Claude (Tâches planifiées → Nouvelle tâche) quand une tâche doit être créée ou refaite. Une tâche que la session ne peut pas créer elle-même (garde-fou « tâche planifiée qui écrit ») se crée à la main depuis ce dossier.

| Tâche | Cadence (Paris) | Fichier | Créée |
|---|---|---|---|
| Résumé matinal (Axel) | lun-ven ~8 h | (tâche personnelle d'Axel) | ✅ |
| Demandes d'audit gratuit | lun-ven 7 h 13 et 13 h 13 | — (créée depuis la session le 25/10) | ✅ |
| Production du mois | lun-ven 9 h 17, Opus, environnement cloud Default (dépôts kaelix-marketing, web-agency, transports-ansquer ; aucun connecteur ; clés en variables d'environnement ; réseau limité à Haloscan et aux API Google) | `production-du-mois.md` | ✅ créée par Axel le 28/10, test OK (« Aucun sujet à avancer », 3 clés vues) |
| Avis à valider | lun-ven 7 h 05 | `avis-a-valider.md` | ⏸ en attente : la lecture de Maps n'est pas autorisée dans l'environnement Default (réseau limité) — attendre l'API Google Business (to-do Ansquer #21) |
| Rapport mensuel (Ansquer) | le 1ᵉʳ, 7 h 49 | (existante) | ✅ section ③ « plan du mois » + liste « GO de <mois> à valider » ajoutées par Axel le 28/10 — le GO se donne ensuite dans la discussion KAELIX, qui passe les sujets en `go-MM/AAAA` |

**Clés des tâches cloud** : variables d'environnement de l'environnement cloud « Default » (HALOSCAN_API_KEY, PSI_API_KEY, GOOGLE_PLACES_API_KEY), saisies par Axel le 28/10 ; jamais dans git. Search Console en cloud : variable `GSC_SERVICE_ACCOUNT_B64` lue par `gsc-fetch.mjs` (pas encore posée — la demande d'indexation reste « non vérifiable » en tâche planifiée).
