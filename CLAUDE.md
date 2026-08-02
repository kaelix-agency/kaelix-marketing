# Repo Marketing — cerveau multi-clients de l'agence

Ce dépôt est le **cerveau marketing** de l'agence : il stocke la connaissance de chaque client (stratégie marketing et commerciale, image de marque, ciblage SEO, NAP, suivi) et fournit les commands/skills pour produire et piloter l'acquisition. **Il ne contient jamais le contenu publié** : les articles/pages (MDX) vivent dans le dépôt git du site de chaque client.

> Le POURQUOI de chaque choix, skill et règle est documenté dans `docs/rationnel-des-choix.md`. En cas de doute sur une règle, le consulter avant de la contourner.

## Architecture du projet

```
marketing-repo/
├── CLAUDE.md                  ← ce fichier (règles + architecture)
├── .mcp.json                  ← serveurs MCP (Haloscan, Cuik ; PostHog au cas par cas)
├── README.md                  ← documentation d'utilisation
├── .claude/
│   ├── commands/              ← les routines (slash commands)
│   ├── skills/                ← les contrats qualité (méthodologie)
│   └── agents/                ← les subagents (contexte isolé) : fact-checker, serp-analyst, contract-checker
├── clients/
│   ├── _template/             ← gabarits à copier pour chaque nouveau client
│   │   ├── client-brief.md    ← stratégie marketing/commerciale + marque + ciblage SEO
│   │   ├── nap.md             ← NAP source de vérité (clients locaux uniquement)
│   │   ├── tracking.md        ← suivi des contenus (typologie, checkpoints, re-checks)
│   │   ├── content-plan.md    ← plan éditorial pluri-mois (clusters + sujets datés)
│   │   ├── prompts/README.md  ← index des prompts
│   │   ├── reports/README.md  ← index des livrables de suivi
│   │   └── audits/README.md   ← index des audits techniques
│   └── <slug-client>/         ← un dossier par client (mêmes fichiers, remplis)
│       ├── icp.md             ← profil d'ENTREPRISE cible (skill `icp`) — source de vérité, non dupliquée dans le brief
│       ├── personas.md        ← les PERSONNES dans ces entreprises (skill `personas`) — idem
│       ├── content-plan.md    ← carte du PRÉVU : clusters, sujets par mois, statuts. **Document vivant** (≠ figé) : jamais re-généré, aucune ligne effacée — un sujet abandonné change de statut
│       ├── prompts/           ← prompts d'exécution pour le repo du site : 1 fichier daté par prompt (`YYYY-MM-DD-<slug>.md`) + index README ; jamais d'append à un prompt existant
│       ├── reports/           ← livrables de suivi historisés : revues hebdo (`YYYY-MM-DD-revue-hebdo.md`, internes) + rapports mensuels client (`YYYY-MM-rapport-client.md`, statut brouillon→validé→envoyé ; figé après envoi) + index README
│       └── audits/            ← rapports `/tech-audit` datés (`YYYY-MM-DD-tech-audit.md`) + index README
└── docs/
    ├── methodologie-seo.md    ← méthodologie de référence (6 phases)
    ├── routines-operationnelles.md ← playbook : semaine type, déroulés, checklists
    ├── contrat-de-contenu.md  ← standard MDX : frontmatter, whitelist composants, conventions
    ├── interactions-repos.md  ← comment ce repo publie vers les repos des sites clients
    ├── rationnel-des-choix.md ← le POURQUOI de chaque décision du repo
    └── notes-podcast-seo.md   ← retour d'expérience praticien intégré au process
```

## Invariants (à respecter dans toute session)

1. **Ce repo = connaissance ; le repo du client = contenu.** Toute production (article, page locale) est écrite en MDX dans le dépôt du site du client (chemin indiqué dans son `client-brief.md`), jamais ici. Ici on met à jour `tracking.md`.
2. **Gate humain obligatoire.** Aucun contenu n'est publié/mergé sans validation explicite de l'opérateur. Renforcé pour : réponses aux avis (public) et citations/NAP. La relecture humaine est la seule phase manuelle du process et elle est non négociable : un contenu non relu ne performe pas.
3. **NAP source de vérité.** Pour un client local, toute donnée de coordonnées (posts GBP, citations, schema LocalBusiness, pages) dérive de `clients/<slug>/nap.md`. Ne jamais improviser une adresse/un téléphone.
4. **Information gain obligatoire.** Chaque contenu doit contenir au moins un élément first-party du client (listé dans son brief). Si aucun n'est mobilisable : le signaler et demander, ne pas générer un contenu générique.
5. **Une page = une intention.** Vérifier la cannibalisation (Haloscan + `tracking.md`) avant de créer. Les pages existantes en positions 4-20 se poussent vers le top 3 AVANT de créer du neuf.
6. **⛔ Règle des 90 jours.** Un contenu publié il y a moins de 90 jours ne se touche pas (Google teste ; volatilité normale ; position fiable à J90). Exceptions : erreur factuelle avérée, problème technique bloquant. J30/J60 = observation ; verdict à J90.
7. **Vérification factuelle systématique.** Le skill `fact-check` passe sur tout contenu AVANT la remise en relecture : chiffres, dates, citations, noms propres, affirmations YMYL — sourcés ou retirés.
8. **Un seul outil de référence par KPI.** Haloscan = référence mots-clés/positions ; Search Console = vérité clics/impressions. Ne jamais mélanger les chiffres de deux outils (non comparables).
9. **Chiffres réels uniquement.** Les rapports valorisent par le cadrage, jamais en gonflant les données. Prudence d'attribution : les IA renvoient vers la homepage, le blog est structurellement sous-attribué.
10. **Chaque contenu capture quelque chose.** Email, essai, devis, mini-outil — un contenu qui n'appelle aucune action fabrique des touristes.
11. **Contrat de contenu.** Toute production est du **MDX sémantique pur** conforme à `docs/contrat-de-contenu.md` : frontmatter valide (schéma typé, validé au build du site), zéro style/HTML de mise en page dans le corps, composants limités à **la whitelist du contrat, dans la version supportée par le site cible** (déclarée dans son `client-brief.md` — v1 ou v2 ; une version est tout ou rien). Sur un site v1, les composants v2 se compensent en Markdown pur, jamais en composant non supporté. Le design appartient aux sites (conteneur typographique + mapping MDX) — ne jamais « corriger » l'apparence depuis le contenu.
    - **Règle de véracité des composants incarnés** (extension de l'invariant 7) : une `ExpertQuote` n'est jamais inventée — elle vient du first-party du brief, ou elle est rédigée comme **proposition signalée dans la PR et validée par le client avant merge**. Un `Testimonial` est un avis **réel et sourcé**, jamais généré ni reformulé au point de trahir l'original. Chaque stat d'une `StatGrid` porte sa source.
12. **Frontière des repos.** Ce repo écrit vers les repos clients uniquement via des PR de contenu (`content/blog/`, `content/zones/`) ; il ne lit les repos clients que pour le maillage/anti-cannibalisation ; les repos clients ne connaissent jamais ce repo. Détail : `docs/interactions-repos.md`.
13. **Langue.** Contenus clients en français (marché FR), sauf indication contraire du brief.

## Contexte de session

- Toujours commencer par lire le `client-brief.md` du client concerné (+ `nap.md` si local, + `tracking.md` pour l'historique).
- Les outils MCP disponibles : **Haloscan** (mots-clés FR, clustering, cannibalisation, positions), **Cuik** (audit technique, crawl, données GSC, trafic LLM), **PostHog** (conversions — uniquement si le brief du client l'indique).
- Données sans MCP (ponts manuels) : **BrightLocal** (geo-grid, citations, avis) et **fiche GBP** — l'opérateur colle les exports dans la session.

## Routines → commands

> Le déroulé opérationnel de chaque routine (ordre, checklists, cadence) est dans `docs/routines-operationnelles.md`.

| Routine | Command | Cadence |
|---|---|---|
| Onboarding client (stratégie 3 étapes + architecture par type) | `/onboard-client` | à l'arrivée |
| Plan éditorial pluri-mois (clusters, refreshes avant créations, throttle relecture) | `/content-plan` | après onboarding, révision trimestrielle |
| Recherche d'un sujet (SERP, scroll, gap, information gain) | `/research` | avant chaque contenu |
| Production d'un contenu (rédaction + fact-check + gate) | `/write` | à la demande |
| Refresh d'un contenu (garde-fou 90 j) | `/refresh` | selon suivi |
| Post GBP | `/gbp-post` | régulier (local) |
| Réponse à un avis (gate renforcé) | `/review-response` | à chaque avis (local) |
| Suivi de performance (+ re-check bimestriel par typologie) | `/weekly-review` | hebdomadaire |
| Audit technique | `/tech-audit` | mensuel |
| Rapport client (santé du trafic incluse) | `/report` | mensuel |

## Agents

Trois subagents en **contexte isolé** (`.claude/agents/`). La session principale et l'opérateur orchestrent — **pas d'agent orchestrateur**. Le POURQUOI de chacun : `docs/rationnel-des-choix.md` §1.13.

| Agent | Quand l'invoquer | Droits |
|---|---|---|
| `fact-checker` | **systématiquement** après toute rédaction ou refresh, AVANT la PR | lecture + web, **aucune écriture** |
| `contract-checker` | après le `fact-checker`, AVANT la PR | lecture seule, aucun accès web |
| `serp-analyst` | dans `/research` et `/content-plan`, **une instance par mot-clé, en parallèle** | Haloscan + web + lecture |

- **La rédaction reste en session principale** : elle a besoin du contexte complet (brief, voix, first-party, historique). L'isolation est un atout pour vérifier, un handicap pour créer.
- **Les vérificateurs n'écrivent pas.** Un contrôle qui peut modifier le texte devient co-auteur et cesse d'être un contrôle. Ils rendent un rapport ; la session principale corrige et les relance (relance différenciée : correction factuelle → `fact-checker`, correction structurelle → `contract-checker`).
- **Double PASS obligatoire** avant toute PR de contenu (`/write`, `/refresh`).
- **⚠️ Règle des contrôles empêchés** : un contrôle qu'un agent n'a pas pu exécuter (fichier absent, source hors ligne, outil MCP indisponible, repo du site non cloné) s'affiche **« non vérifiable » avec sa raison** — jamais un ✅, jamais une omission. Un rapport muet sur ses angles morts est pire qu'un contrôle absent : le gate humain croit le point couvert.

## Types de clients

- `saas` : SEO standard FR (+ PostHog si connecté). Architecture impérative : pages business AVANT le blog (accueil/tarifs → fonctionnalités → comparaisons → alternatives → témoignages → blog) + free tools.
- `local` (artisan/commerce) : SEO local — pages service×ville, GBP, avis, citations. Schema LocalBusiness/Service.
- `ecommerce` : SEO standard + local si points de vente. Schema Product/Offer.

Le type, les canaux actifs et le statut product-market fit sont déclarés dans le `client-brief.md` (pas de mission SEO sans PMF : d'abord vendre, ensuite se référencer).
