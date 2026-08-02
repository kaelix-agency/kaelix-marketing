# Repo Marketing — documentation d'utilisation

Le cerveau marketing multi-clients de l'agence, piloté par Claude Code. Ce repo stocke la **connaissance** (stratégie marketing/commerciale, marque, ciblage SEO, NAP, suivi) de chaque client et fournit les **routines** (commands) et **contrats qualité** (skills) pour produire et piloter l'acquisition. Le contenu publié (MDX) vit dans le dépôt de chaque site client — jamais ici.

📖 **Trois documents pour comprendre le repo** :
- Ce README → *comment l'utiliser* (installation, cycle de travail).
- `docs/routines-operationnelles.md` → *le playbook opérationnel* : semaine type, déroulé de chaque routine, checklists.
- `docs/contrat-de-contenu.md` + `docs/interactions-repos.md` → *la frontière technique* : format MDX publié, application du design par les sites, flux de publication entre repos.
- `CLAUDE.md` → *les règles* que Claude applique en session (invariants, architecture).
- `docs/rationnel-des-choix.md` → ***pourquoi*** chaque choix, skill et règle existe. À lire en premier si vous découvrez le repo.

## 1. Installation (une fois)

1. Clone ce repo, ouvre-le dans Claude Code.
2. Copie `.env.example` → `.env` et renseigne les clés API.
   ⚠️ **Vérifie les URLs des serveurs MCP dans `.mcp.json`** auprès de la documentation officielle de chaque outil (elles évoluent) : doc Haloscan, doc Cuik, doc PostHog. Ajuste `url`/`headers` selon leur méthode d'authentification (certains utilisent OAuth au lieu d'un Bearer token).
3. **Serveurs configurés dans `.mcp.json` : Haloscan et Cuik** — les deux outils de référence, communs à tous les clients. **PostHog n'y est pas : il se configure au cas par cas**, uniquement pour les clients dont le `client-brief.md` §8 déclare une instance connectée (ajouter alors son entrée dans `.mcp.json` + la clé dans `.env`). Les commands n'invoquent PostHog que si le brief l'indique.
4. Lance `claude` dans le repo et vérifie que les MCP répondent (`/mcp`).
   ℹ️ Les clés doivent exister **avant** le lancement : un serveur MCP reçoit une copie figée de l'environnement au démarrage. Clés ajoutées en cours de session = redémarrer Claude Code, sinon les serveurs continuent avec une clé vide (erreurs 401/403).
5. Prérequis côté comptes : accès Search Console des sites clients connecté dans Cuik ; projets créés dans Haloscan ; BrightLocal et fiches GBP gérés à part (ponts manuels).
6. **Publication croisée** : `gh` (GitHub CLI) installé et authentifié — de préférence via un **fine-grained PAT restreint** aux seuls repos clients (`Contents: write` + `Pull requests: write`), exposé en `GH_TOKEN`. Détail et séquence type : `docs/interactions-repos.md` §5.

## 2. Onboarder un client

```
/onboard-client mon-client local https://mon-client.fr
```
La commande copie les gabarits, t'interroge (dont le statut **product-market fit** — pas de mission SEO sans PMF), déroule le **ciblage en 3 étapes** (mots-clés des concurrents → existant en positions 4-20 à pousser top 3 → nouveaux mots-clés par ordre de valeur), pose l'**architecture de contenu selon le type** (pour un SaaS : pages business avant le blog, free tools), fait la baseline technique (Cuik), formalise le NAP si local, et produit le `client-brief.md` + un plan des 5 premières actions.

**Le `client-brief.md` est l'actif le plus important du repo** : c'est lui qui donne la voix, les cibles, le ciblage et les données first-party à toutes les productions. Tiens-le à jour.

Enchaîne ensuite sur `/content-plan <client>` : l'onboarding donne les 5 premières actions, le plan éditorial donne les 6 mois suivants (et c'est un livrable présentable au client une fois validé).

## 3. Le cycle de travail (routines)

> Déroulé opérationnel complet (semaine type, checklists de session, cycle mensuel) : **`docs/routines-operationnelles.md`**.

| Quand | Command | Ce que ça fait |
|---|---|---|
| **Après l'onboarding** (puis ~trimestriel) | `/content-plan <client> [horizon-mois]` | plan éditorial pluri-mois : clusters (pilier + satellites), **refreshes de l'existant 4-20 AVANT les créations**, un persona et un mécanisme de capture par sujet, volume calé sur ta **capacité de relecture** → `content-plan.md` (🕓 brouillon, **tu valides**) |
| Avant chaque contenu | `/research <client> <mot-clé>` | SERP, intention, **règle du scroll**, gap, angle first-party, paris émergents → brief de production (analyse déléguée au `serp-analyst`) |
| Production | `/write <client> <mot-clé>` | MDX complet (avec mécanisme de **capture** et **typologie**) + schema + **double PASS `fact-checker` / `contract-checker`**, écrit dans le repo du site (branche/PR), **tu merges** |
| Selon suivi | `/refresh <client> <url> <raison>` | correction ciblée — **refuse les contenus < 90 jours** (Google teste) ; même double PASS que `/write` |
| Régulier (local) | `/gbp-post <client>` | brouillons de posts GBP, **tu publies** |
| À chaque avis (local) | `/review-response <client>` | brouillon de réponse, **tu publies** (gate renforcé) |
| **Hebdomadaire** | `/weekly-review <client>` | collecte (Cuik/Haloscan/PostHog + collages BrightLocal/GBP), diagnostic **hors fenêtre des 90 j**, équilibre du trafic, re-check bimestriel par typologie, plan d'action priorisé |
| **Mensuel** | `/tech-audit <client>` | crawl complet, findings par sévérité, 3 priorités |
| **Mensuel** | `/report <client> <période>` | rapport de mise en valeur (travail + résultats + **santé du trafic**), **tu relis et envoies** |

## 4. Les skills (contrats qualité) et leur raison d'être

| Skill | Rôle | Pourquoi il existe (détail dans docs/rationnel-des-choix.md) |
|---|---|---|
| `article-writer` | contrat de rédaction SEO/GEO | encode la méthodologie pour que la qualité ne dépende pas de la mémoire : information gain, extraction (intro directe, FAQ, passages autonomes), capture, typologie, anti-uniformité |
| `fact-check` | vérification factuelle avant gate | contre-pouvoir des skills de production : un LLM affirme le plausible avec l'assurance du vrai ; on ne demande pas au producteur de s'auto-contrôler |
| `seo-gap-analysis` | méthode d'analyse pré-production | l'intention se lit dans la SERP réelle ; le go/no-go final est l'information gain |
| `geo-schema` | JSON-LD + citabilité IA | le balisage est le canal des résultats enrichis et de l'identification par les IA ; il ne ment jamais sur le contenu visible |
| `local-seo` | NAP, GBP, avis, citations FR | une incohérence NAP érode silencieusement la confiance de Google ; la vélocité d'avis récents bat le total historique |
| `client-report` | rapport mensuel client | relier l'effort au résultat, chiffres réels, prudence d'attribution (les IA renvoient vers la homepage), contenus < 90 j « en test » |

## 5. Les agents (contexte isolé) et leur raison d'être

Trois subagents (`.claude/agents/`), invoqués par les commands. **Pas d'agent orchestrateur** : la session principale et toi orchestrez, rien n'est décidé hors de ta vue. Détail : `docs/rationnel-des-choix.md` §1.13.

| Agent | Rôle | Pourquoi il est isolé |
|---|---|---|
| `fact-checker` | vérification factuelle après rédaction, avant PR | le skill `fact-check` s'exécutait dans la session qui venait d'écrire — le vérificateur portait le biais du rédacteur. En contexte vierge, il ne sait pas ce que la session espérait démontrer : c'est la différence entre **se relire et être relu** |
| `contract-checker` | conformité mécanique au contrat de contenu | tout ce qui est vérifiable par une règle (frontmatter, whitelist de version, maillage, longueurs) doit l'être **avant** le gate — pour que ta relecture porte sur le fond et la voix, les seules choses qu'une machine ne juge pas |
| `serp-analyst` | analyse d'un mot-clé, **une instance par mot-clé, en parallèle** | un plan éditorial qualifie des dizaines de mots-clés ; en séquentiel le contexte sature et les derniers sujets sont moins bien analysés que les premiers — un biais purement mécanique |

**Trois règles à connaître** :
- **La rédaction n'est pas déléguée.** Elle a besoin du contexte complet et simultané (brief, voix, first-party, arbitrages en cours de session). L'isolation aide à vérifier, elle handicape la création.
- **Les vérificateurs n'ont aucun droit d'écriture.** Un contrôle qui peut corriger le texte devient co-auteur. Ils rendent un rapport ; la session applique et les relance. `/write` et `/refresh` exigent un **double PASS** avant d'ouvrir la PR.
- **⚠️ Les contrôles empêchés se voient.** Fichier absent, source hors ligne, outil MCP indisponible, repo du site non cloné → le rapport affiche **« non vérifiable » avec la raison**, jamais un ✅ silencieux. Un rapport muet sur ses angles morts est pire qu'un contrôle absent : tu croirais le point couvert.

## 6. Les règles du jeu (résumé — détail et justifications dans CLAUDE.md et docs/rationnel-des-choix.md)

- **Gate humain partout** : Claude prépare, tu valides et publies. La relecture est la seule phase manuelle — et la limite réelle du volume de production.
- **⛔ Règle des 90 jours** : aucun contenu de moins de 90 jours ne se touche. Google teste ; la position n'est fiable qu'à J90.
- **NAP source de vérité** : coordonnées uniquement depuis `clients/<slug>/nap.md`.
- **Information gain obligatoire** : pas de contenu sans élément first-party.
- **Une page = une intention** ; l'existant en positions 4-20 se pousse top 3 avant de créer.
- **Fact-check systématique** avant toute remise en relecture.
- **Un outil de référence par KPI** : Haloscan (mots-clés/positions), Search Console (clics/impressions).
- **Chaque contenu capture quelque chose** (email, essai, devis, mini-outil).
- **Chiffres réels** dans les rapports ; équilibre du trafic surveillé (SEO ≤ ~60 % du total ; pas de dépendance à 3-4 pages).

## 7. Structure d'un dossier client

```
clients/<slug>/
├── client-brief.md   ← stratégie marketing/commerciale + marque + ciblage 3 étapes + architecture pages + first-party
├── icp.md            ← profil d'ENTREPRISE cible (skill icp) — le brief pointe dessus, ne le duplique pas
├── personas.md       ← les PERSONNES dans ces entreprises (skill personas) — idem
├── nap.md            ← coordonnées canoniques (clients locaux)
├── content-plan.md   ← plan éditorial pluri-mois : la carte du PRÉVU (document vivant, statuts par sujet)
├── tracking.md       ← journal du RÉALISÉ (typologie, persona), checkpoints 30/60/90j, re-checks bimestriels, paris émergents
├── prompts/          ← prompts d'exécution vers le repo du site, 1 fichier daté + index
├── audits/           ← rapports /tech-audit datés + index
└── reports/          ← revues hebdo (internes) + rapports mensuels /report + index
```

Les gabarits vides de tous ces fichiers vivent dans `clients/_template/` — `/onboard-client` les copie.

## 8. MCP vs ponts manuels

| Source | Accès | Utilisé par |
|---|---|---|
| Haloscan | MCP | research, onboard, weekly-review, report — **référence unique mots-clés/positions** |
| Cuik (inclut données GSC) | MCP | onboard, tech-audit, weekly-review, report, refresh |
| PostHog | MCP (si client équipé) | weekly-review, report |
| BrightLocal (geo-grid, citations, avis) | **manuel** — tu colles l'export dans la session | weekly-review, report, nap.md |
| Fiche GBP (posts, avis, insights) | **manuel** — tu publies/colles | gbp-post, review-response, report |

## 9. Bonnes pratiques

> Version détaillée et organisée par moment de la semaine : `docs/routines-operationnelles.md` §6.

- Une session Claude Code = un client (charge son brief en premier).
- Committe ce repo après chaque session : git est ta trace d'audit (qui a produit quoi, quand — utile aussi pour la conformité).
- Les checkpoints 30/60/90 j de `tracking.md` sont ta boucle de suivi : J30/J60 en observation, verdict à J90.
- Le re-check bimestriel (typologie actu/guide/evergreen) maintient le parc de contenus sans tout réécrire (~80 % reste identique).
- Quand une routine devient pénible à répéter (beaucoup de clients/contenus), c'est le signal pour automatiser — ce repo est alors la spec de l'orchestrateur à construire (voir docs/rationnel-des-choix.md §5).

## 10. Faire évoluer le repo

Toute nouvelle règle suit le circuit : (1) l'intégrer à la command/skill concernée, (2) la justifier dans `docs/rationnel-des-choix.md`, (3) tracer sa source dans `docs/` (ex. `notes-podcast-seo.md`). Un repo dont on ne sait plus POURQUOI les règles existent finit contourné.

## 11. Comment ce repo publie vers les sites clients (résumé)

Ce repo est **isolé** des repos de sites. La publication traverse la frontière ainsi :

1. `/write` produit un **MDX sémantique pur** (frontmatter typé + Markdown + composants de la whitelist) — jamais de style : le design appartient au site. La whitelist dépend de la **version du contrat supportée par le site**, déclarée dans son `client-brief.md` : **v1** = `Callout`/`CTA`/`FAQ` · **v2** = + `StatGrid`/`ExpertQuote`/`Testimonial`/`ErrorTip` + `Callout type="retenir"` (contrat courant, visé par tout nouveau site).
2. Claude Code dépose le fichier dans le repo du site client (`content/blog/` ou `content/zones/`, chemin dans le `client-brief.md`), branche `content/<slug>`, PR.
3. Le **build du site valide le frontmatter** (schéma typé) : invalide = PR rouge (gate mécanique).
4. **Tu merges** (gate humain) → le site rend l'article dans SON design : conteneur typographique (`prose`) pour les éléments Markdown (dont les **tables**), mapping MDX vers ses composants pour les blocs riches.
5. Le suivi revient par les MCP (Cuik/GSC, Haloscan) — le repo marketing observe les effets sans lire les sites.

Un nouveau site rejoint le standard en implémentant une fois le contrat (pipeline MDX + schéma + whitelist + JSON-LD) : voir `docs/interactions-repos.md` §4.

## 12. Ajouter un canal plus tard

Le repo est extensible : un nouveau canal (LinkedIn, Meta…) = une nouvelle command + éventuellement une skill, et une section « canaux actifs » dans le brief du client. Le cœur (briefs, tracking, gate) ne change pas.
