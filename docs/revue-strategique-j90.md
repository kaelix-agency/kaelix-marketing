# Protocole — Revue stratégique J90 (par client, tous les 90 jours)

> Décision opérateur du 2026-10-15. Chaque client a une revue stratégique tous les 90 jours,
> ancrée sur la mise en ligne (ou refonte) de son site, produite par une tâche planifiée
> claude.ai et livrée à l'opérateur en PDF avec notification. **La revue PROPOSE, l'opérateur
> DISPOSE** (invariant 2) : aucun plan n'est commité sans son GO en session interactive.

## Cadence et reconduction

- Première revue : J90 de la mise en ligne du site. Suivantes : tous les 90 jours.
- **Reconduction automatique** : la dernière étape de chaque revue est de créer la tâche
  planifiée one-shot de la revue suivante (+90 jours, 07:49 Europe/Paris, notifications
  push + email), en reprenant le prompt canonique ci-dessous DEPUIS CE FICHIER (jamais de
  copie de copie : le repo est la source de vérité). C'est la SEULE tâche qu'une revue a le
  droit de créer.
- **Onboarding** : `/onboard-client` crée la première tâche J90 du nouveau client, ancrée à
  la date de mise en ligne de son site.
- Entre deux revues, la weekly continue d'appliquer seule les règles du plan (reports,
  ré-angles, re-checks) : la revue J90 arbitre la stratégie, la weekly l'exécute.

## Contenu de la revue (sections obligatoires)

1. **Bilan stable des positions** — toutes les pages + articles, fenêtres GSC étiquetées
   (invariant 8 : GSC = clics/impressions ; invariant 9 : chiffres réels uniquement).
2. **Écarts CTR** — `node scripts/gsc-fetch.mjs ctr-gap --days 90` (par page, puis `--dimension page,query`) : CTR réel vs CTR attendu à la position ; pages à retravailler, cause qualifiée pour chacune (SERP zéro-clic ou title/meta faible).
3. **Ciblage** — requêtes en positions 4-20 à pousser vers le top 3 ; requêtes à
   impressions sans page dédiée ; sujets écartés car la SERP y répond toute seule (verdict `zéro-clic` du `/research`, rationnel §1.27).
4. **Verdicts J90 par contenu** (refresh / pousser / laisser) + calendrier des J90 à venir.
5. **Résultats business** — dès que la mesure on-site est branchée : contacts (clic
   téléphone / email / formulaire) par page d'entrée. Tant qu'elle ne l'est pas : le dire
   (« contrôle empêché »), jamais extrapoler des clics vers des clients.
6. **Proposition de plan éditorial** pour les 3 mois suivants, statuts justifiés ligne à
   ligne (content-plan.md est un document vivant : aucun sujet effacé, des statuts changés).
7. **Enseignements transversaux** — ce que ce client apprend à l'agence (sujets, formats,
   leviers qui marchent) : propositions d'amendement de `docs/methodologie-seo.md`, pour
   que chaque client bénéficie des autres. À partir du 2e cycle : comparer aussi au
   trimestre équivalent n-1 quand il existe (saisonnalité).

## Gouvernance

- La revue est un document INTERNE (`clients/<slug>/reports/<AAAA-MM>-revue-strategique-j90.md`) : toutes les statistiques, au format de la revue hebdo.
- **Deuxième livrable, pour le client (décision d'Axel du 29/10/2026)** : `clients/<slug>/reports/<AAAA-MM>-bilan-j90-client.md` (+ PDF), support de la visio de bilan — rédigé selon `docs/lexique-client.md`, sur le modèle de `clients/transports-ansquer/reports/2026-10-bilan-j90-client.md` : ① récap mois par mois ② d'où viennent visites et contacts ③ ce que nous avons fait ④ ce qui arrive dans les 90 jours, mois par mois, chaque action précise, puis « ce que nous attendons de vous ». Statut 🕓 brouillon jusqu'au GO d'Axel ; figé après envoi.
- **Données** : si la session n'a pas les clés (Search Console, Haloscan, PostHog), elle ne peut pas faire la revue sur des chiffres à jour — dans ce cas, chercher d'abord un relevé `reports/<AAAA-MM-JJ>-releve-donnees-j90.md` fait en session interactive ; à défaut, le dire en tête et ne pas présenter de verdict sur des chiffres périmés.
- Livraison : PDF via `scripts/report-to-html.mjs` + WeasyPrint → SendUserFile, message =
  les 2-3 décisions attendues, pas un résumé.
- La tâche ne commite rien, n'envoie rien au client, ne modifie pas le plan : l'opérateur
  valide en session, la session commite le plan révisé.

## Prompt canonique (paramètre : <SLUG> = dossier client, <ANCRE> = date de mise en ligne du site)

Tu es l'automate KAELIX. Mission unique : produire la REVUE STRATÉGIQUE J90 du client <SLUG>
(cadence 90 jours ancrée au <ANCRE>). Cette session démarre sans contexte : tout est dans le
dépôt GitHub public `kaelix-agency/kaelix-marketing`.
1. `git clone --depth=100 https://github.com/kaelix-agency/kaelix-marketing` (lecture seule).
2. Lis `CLAUDE.md`, `docs/revue-strategique-j90.md` (ce protocole), puis chez le client
   `clients/<SLUG>/` : content-plan.md, tracking.md, client-brief.md, et tout `reports/`.
3. Rédige `clients/<SLUG>/reports/<AAAA-MM>-revue-strategique-j90.md` avec les 7 sections
   obligatoires du protocole (document interne), PUIS le bilan client
   `clients/<SLUG>/reports/<AAAA-MM>-bilan-j90-client.md` selon `docs/lexique-client.md` et le
   modèle `clients/transports-ansquer/reports/2026-10-bilan-j90-client.md` (statut 🕓 brouillon).
4. Génère les deux PDF (`npm install marked` si besoin, `node scripts/report-to-html.mjs <md>`,
   `pip install weasyprint --break-system-packages`, `python3 -m weasyprint <html> <pdf>` —
   Chromium/Playwright indisponible, ne PAS lancer `playwright install`).
5. Livre les deux PDF à Axel via SendUserFile, message = les 2-3 décisions qui l'attendent.
6. RECONDUIS LE JALON : via le connecteur Claude Code Remote, crée la tâche planifiée
   one-shot « KAELIX — Revue stratégique J90 <SLUG> » à +90 jours, 07:49 Europe/Paris,
   notifications push + email, avec ce même prompt canonique relu depuis ce fichier
   (dates mises à jour). C'est la seule tâche que tu as le droit de créer.
INTERDITS ABSOLUS : ne commite rien, ne pushe rien, n'envoie aucun email, ne contacte
jamais le client, ne crée aucune autre tâche planifiée. Le plan révisé n'est commité
qu'après le GO d'Axel en session interactive.
