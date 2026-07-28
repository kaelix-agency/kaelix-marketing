---
description: Produire un contenu (phases 1-3) — rédaction MDX + schema + publication gatée
argument-hint: <slug-client> <mot-clé> [--brief <fichier>]
---
Production pour `$ARGUMENTS`. Utilise les skills `article-writer` et `geo-schema` (+ `local-seo` si page locale), puis `fact-check` avant remise.

1. Lis `clients/<slug>/client-brief.md` (+ `nap.md` si local). Si aucun brief de production n'est fourni, exécute d'abord la logique de `/research`.
2. Rédige le contenu en MDX en respectant intégralement le contrat de la skill `article-writer` : title ~55c, meta ~155c, slug court, intro réponse-directe (~100 premiers mots), structure H2/H3, E-E-A-T, passages auto-suffisants, FAQ (3-6 Q/R), maillage interne (ancres descriptives vers les pages existantes du site), lien(s) externe(s) autoritaire(s), **au moins un élément first-party**, et un **mécanisme de capture** (email, essai gratuit, devis, mini-outil/quiz…) — chaque contenu doit capturer quelque chose, pas seulement informer.
3. Génère le frontmatter complet (avec la `typologie` : actu / guide / evergreen — elle pilote le re-check bimestriel) + le JSON-LD (skill `geo-schema`) : Article/BlogPosting + FAQPage (+ LocalBusiness/Service si page locale, à partir du NAP exclusivement).
4. **Passe de vérification (skill `fact-check`)** : contrôle chaque statistique, date, affirmation vérifiable et citation contre des sources fiables. Corrige ou retire ce qui n'est pas sourçable. Aucun contenu ne part en relecture avec un chiffre invérifiable.
5. Écris le fichier dans le **dépôt du site du client** (chemin local convenu dans le brief), sur la branche `content/<slug>`, commit, push, puis ouvre la PR avec `gh pr create` (ou l'outil de la forge indiqué dans le brief) — corps de PR : résumé + rapport fact-check + checklist post-publication. Vérifie les checks (`gh pr checks`) : la validation du frontmatter doit passer. **Ne merge jamais toi-même : je valide (gate).**
6. Après ma validation : rappelle-moi la checklist post-publication — merge, déploiement, présence dans le sitemap, soumission à l'indexation dans la Search Console, et **ne pas toucher le contenu pendant 90 jours** (Google teste ; la position moyenne n'est fiable qu'à J90).
7. Ajoute la ligne dans `clients/<slug>/tracking.md` (date, mot-clé, URL, format, typologie, statut).
