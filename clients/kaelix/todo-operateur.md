# To-do opérateur — KAELIX (l'agence, cliente d'elle-même)

> Les actions qui attendent **l'opérateur** (pas le système) : validations, accès, arbitrages, envois. Maintenue à **chaque `/weekly-review`** et à **chaque gate**. Convention : `docs/rationnel-des-choix.md` §1.18. Les deux premières lignes étaient parquées en #23/#24 dans la to-do d'Ansquer (onboarding du 16/10) — déplacées ici le 17/10.
>
> **Statuts** : 🕓 à faire · 🔧 en cours · ✅ fait (date) · ⛔ bloqué (motif) · ↪️ reporté (nouvelle échéance)

| # | Action | Origine (revue / rapport / gate / mission) | Échéance | Statut |
|---|---|---|---|---|
| 1 | **Brancher la mesure de kaelix.fr** (ex-#23 Ansquer) : ① propriété kaelix.fr → compte de service GSC · ② ~~projet Haloscan~~ (retiré le 17/10 : Haloscan s'interroge par domaine/mot-clé via l'API, sans projet — même régime qu'Ansquer ; un projet suivi reste optionnel) · ③ PostHog sur web-agency | onboarding kaelix 16/10 | — | ✅ **fait (2026-10-17)** — ① ✅ **fait le 17/10** (`gsc-fetch@kaelix-498715…` en accès total sur `https://kaelix.fr/`, propriété toute récente : **premières données GSC à partir du 18/10**) · ③ **PR web-agency#26 ouverte** (mesure sans cookie, 5 événements dont `contact_rendez_vous`, politique de confidentialité, favicon X-viseur) + clé `NEXT_PUBLIC_POSTHOG_KEY` posée dans Vercel (Production + Preview) · ③ ✅ **fait le 17/10** : GO MERGE → web-agency#26 mergée (`9a47da3`, auteur kaelix-agency), prod déployée, **Pageview kaelix.fr reçu dans PostHog** (Activity, 15h50). Lecture : `posthog-fetch.mjs contacts --site https://kaelix.fr/` |
| 2 | **Créer la fiche Google Business en mode « zone desservie »** (ex-#24 Ansquer, pas d'adresse publiée) : me donner d'abord le **SIRET** + l'arbitrage **horaires** (lun-ven 9-18 ou « sur RDV ») pour compléter `clients/kaelix/nap.md`, puis création de la fiche | onboarding kaelix 16/10 | après #1 | 🕓 à faire |
| 3 | ~~Arbitrer l'écart tarifs 249/199~~ → **tranché par l'offre v6** (17/10) : palier 1 à **199 €**, grille à 5 formules (199/299/199/299/399, 3 mois, liens sur devis) | onboarding kaelix 16/10 (brief §1) | — | ✅ **fait (2026-10-17)** — document d'offre v6 + spec en PR web-agency#27 ; **reste : relire la PR #27, trancher ses 4 arbitrages (rythme de la formule complète, suivi National + fiche, porte B, pastilles), GO MERGE, puis implémentation (`/implement-feature tarification-seo-v3`) et accord explicite pour la migration de prix (`supabase/pending/`)** |
| 4 | **Offre v6 sur le site — gates** : ① relire/merger la spec PR web-agency#27 (4 arbitrages §1.7) · ② GO sur la PR d'implémentation (/tarifs, pages SEO, CGV, propositions) · ③ accord explicite pour la migration modifiante des prix (`supabase/pending/`) + seed Stripe test · ④ dire « v6 en prod » pour que le refresh /tarifs et l'accueil puissent viser « prix site vitrine » et « dès 199 € » | offre v6 17/10 | avant le refresh /tarifs (ciblage §5 prio 1) | ✅ 17/10 — ①②③④ faits : PR #27 et #28 fusionnées, migrations poussées avec accord, Stripe test re-semé, v6 en prod |

## Journal

| Date | Changement |
|---|---|
| 2026-10-17 (5) | Passe E2E v6 verte sur le PC (55 tests, 8 fichiers ; 5 corrections de tests poussées sur main). Reste : Lighthouse /tarifs (CA-10), à faire avec l'audit SEO |
| 2026-10-17 (4) | #4 clos : v6 en production (PR #28), base et Stripe test alignés. Reste côté PC : passe E2E complète + Lighthouse /tarifs (preuves CA-10) |
| 2026-10-17 (3) | Offre v6 : #3 clos (199 € tranché), #4 ajouté (gates de la bascule v6 sur le site : spec PR #27, implémentation, migration de prix, seed Stripe) |
| 2026-10-17 (2) | #1 ✅ : web-agency#26 mergée et en prod, réception PostHog vérifiée sur kaelix.fr (favicon X-viseur servi). Reste pour la mesure kaelix : rien — données contacts dès maintenant, GSC dès le 18/10 |
| 2026-10-17 | Création du fichier (les actions kaelix vivaient dans la to-do d'Ansquer). #1 : GSC ✅ (compte de service ajouté, données dès le 18/10), Haloscan-projet retiré (inutile), PostHog en PR (web-agency#26, clé Vercel posée) ; #3 ajouté (écart tarifs, relevé au brief du 16/10, jamais tracé comme action). Favicon : `icon.svg` était déjà le X-viseur, c'est `favicon.ico` qui montrait l'ancien logo — régénéré dans la PR #26 |
