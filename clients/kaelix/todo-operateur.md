# To-do opérateur — KAELIX (l'agence, cliente d'elle-même)

> Les actions qui attendent **l'opérateur** (pas le système) : validations, accès, arbitrages, envois. Maintenue à **chaque `/weekly-review`** et à **chaque gate**. Convention : `docs/rationnel-des-choix.md` §1.18. Les deux premières lignes étaient parquées en #23/#24 dans la to-do d'Ansquer (onboarding du 16/10) — déplacées ici le 17/10.
>
> **Statuts** : 🕓 à faire · 🔧 en cours · ✅ fait (date) · ⛔ bloqué (motif) · ↪️ reporté (nouvelle échéance)

| # | Action | Origine (revue / rapport / gate / mission) | Échéance | Statut |
|---|---|---|---|---|
| 1 | **Brancher la mesure de kaelix.fr** (ex-#23 Ansquer) : ① propriété kaelix.fr → compte de service GSC · ② ~~projet Haloscan~~ (retiré le 17/10 : Haloscan s'interroge par domaine/mot-clé via l'API, sans projet — même régime qu'Ansquer ; un projet suivi reste optionnel) · ③ PostHog sur web-agency | onboarding kaelix 16/10 | — | 🔧 en cours — ① ✅ **fait le 17/10** (`gsc-fetch@kaelix-498715…` en accès total sur `https://kaelix.fr/`, propriété toute récente : **premières données GSC à partir du 18/10**) · ③ **PR web-agency#26 ouverte** (mesure sans cookie, 5 événements dont `contact_rendez_vous`, politique de confidentialité, favicon X-viseur) + clé `NEXT_PUBLIC_POSTHOG_KEY` posée dans Vercel (Production + Preview) → **reste : GO MERGE #26** puis contrôle de réception (`posthog-fetch.mjs check` → hôte kaelix.fr) |
| 2 | **Créer la fiche Google Business en mode « zone desservie »** (ex-#24 Ansquer, pas d'adresse publiée) : me donner d'abord le **SIRET** + l'arbitrage **horaires** (lun-ven 9-18 ou « sur RDV ») pour compléter `clients/kaelix/nap.md`, puis création de la fiche | onboarding kaelix 16/10 | après #1 | 🕓 à faire |
| 3 | **Arbitrer l'écart tarifs** : site public « SEO dès 249 € » vs grille interne v2 (Starter 199 €) — à trancher **avant** le refresh de l'accueil et de /tarifs (architecture §6, ordre 1) | onboarding kaelix 16/10 (brief §1) | avant `/content-plan kaelix` | 🕓 à faire |

## Journal

| Date | Changement |
|---|---|
| 2026-10-17 | Création du fichier (les actions kaelix vivaient dans la to-do d'Ansquer). #1 : GSC ✅ (compte de service ajouté, données dès le 18/10), Haloscan-projet retiré (inutile), PostHog en PR (web-agency#26, clé Vercel posée) ; #3 ajouté (écart tarifs, relevé au brief du 16/10, jamais tracé comme action). Favicon : `icon.svg` était déjà le X-viseur, c'est `favicon.ico` qui montrait l'ancien logo — régénéré dans la PR #26 |
