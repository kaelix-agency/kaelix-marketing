# Rationnel des choix — pourquoi ce repo est construit ainsi

Ce document explique le **pourquoi** derrière chaque choix d'architecture, chaque skill, chaque règle. À lire à l'arrivée sur le repo, et à mettre à jour quand une décision change. Les commands disent *quoi faire* ; ce document dit *pourquoi c'est comme ça*.

---

## 1. Choix d'architecture

### 1.1 Pourquoi un repo « cerveau » séparé des sites clients
Le contenu publié (MDX) vit dans le dépôt git de chaque site client ; ce repo ne stocke que la connaissance (briefs, NAP, tracking) et l'outillage (commands, skills). Trois raisons :
- **Offboarding propre** : un client qui part récupère son site sans exposer l'outillage de l'agence ni les autres clients.
- **Confidentialité** : chaque site client peut être partagé (freelance, client) sans donner accès au cerveau multi-clients.
- **Git = audit gratuit** : l'historique de ce repo trace qui a produit quoi, quand, avec quel brief — utile pour la qualité et la conformité (traçabilité du contenu généré par IA).

### 1.2 Pourquoi des fichiers Markdown et pas une base de données
À l'échelle de quelques clients, un `client-brief.md` lu en entier par Claude en début de session bat une base : zéro schéma à maintenir, versionné par git, éditable partout, et le LLM consomme nativement du texte. Une base ne devient supérieure que lorsqu'il faut REQUÊTER la connaissance (croiser des dizaines de clients, déclencher des actions automatiques). Ce jour-là, ce repo est la spécification de l'orchestrateur à construire — voir §5.

### 1.3 Pourquoi le gate humain partout
Claude prépare, l'opérateur valide et publie. Toujours. Deux fondements :
- **Qualité** : la relecture humaine est la SEULE phase manuelle du process, et elle est non négociable — un contenu non relu ne performe pas (l'IA n'est pas dans la tête de l'expert : méthode, mises à jour récentes, nuances métier lui échappent). La vraie limite de production n'est pas la génération mais la capacité de relecture : une demi-journée/semaine ≈ 2 contenus relus sérieusement.
- **Risque** : réponses d'avis (publiques) et citations/NAP (impact durable sur la cohérence locale) peuvent causer des dégâts irréversibles — gate renforcé.

### 1.4 Pourquoi Haloscan + Cuik (et pas SEMrush/Ahrefs/10 outils)
- **Haloscan** : la base de mots-clés française la plus riche (équivalent SEMrush/Ahrefs spécialisé FR), clustering par intention et détection de cannibalisation natifs, MCP officiel. Nos clients sont sur le marché FR : la qualité de la donnée FR prime.
- **Cuik** : le couteau suisse technique — crawl (équivalent Screaming Frog), vues Search Console et Analytics, analyse de logs, suivi du trafic des bots LLM, MCP regroupant plusieurs outils (dont DataForSEO si un besoin international apparaît).
- Deux outils suffisent à tout faire ; chaque outil supplémentaire ajoute un coût, un login, et des KPI incohérents. Ce choix est corroboré par des praticiens spécialisés FR qui ont réduit leur stack d'une dizaine d'outils à ces deux-là.
- **Règle de l'outil de référence unique** : les outils donnent des volumes/positions différents et non comparables. Haloscan est LA référence mots-clés/positions ; la Search Console est LA vérité clics/impressions. On ne mélange jamais les chiffres de deux outils dans un même suivi.

### 1.5 Pourquoi BrightLocal et GBP restent des « ponts manuels »
Ils n'ont pas de MCP exploitable dans notre setup. Plutôt que de sur-ingénierer, l'opérateur colle les exports (geo-grid, avis, insights) dans la session. À notre échelle, c'est quelques minutes par semaine — l'automatisation viendrait avec l'orchestrateur (§5).

### 1.6 Pourquoi un « contrat de contenu » MDX sémantique pur
Le repo marketing publie vers N sites qui ont chacun leur design. Deux options existaient : embarquer du style dans les articles (rapide, mais chaque article devient lié à un site, illisible ailleurs, et le contenu se met à « posséder » de l'apparence qu'il ne devrait pas), ou publier du **sémantique pur** rendu par le site. On a choisi la seconde : le même article est portable sur tout site implémentant le contrat, le design reste 100 % propriété du template (conteneur typographique + mapping MDX — une table Markdown hérite du style du site sans une ligne de CSS dans l'article), et la validation du frontmatter au build transforme une partie du gate en contrôle mécanique (PR rouge si non conforme). La whitelist de composants (Callout, CTA, FAQ) est volontairement minimale : chaque composant ajouté est une obligation d'implémentation pour TOUS les templates — on n'étend le contrat que lorsque le besoin est récurrent. Détail : `contrat-de-contenu.md` et `interactions-repos.md`.

### 1.7 Pourquoi git + gh (et pas un MCP GitHub ou un push direct)
La publication croisée n'a besoin que de deux opérations : écrire des fichiers (git) et ouvrir des PR (`gh pr create`). Le CLI `gh` couvre cela nativement, Claude Code le manie très bien, et un serveur MCP GitHub n'apporterait ici que du contexte consommé pour des capacités inutilisées (issues, reviews, projets). L'authentification recommandée est un fine-grained PAT restreint aux seuls repos clients avec `Contents: write` + `Pull requests: write` : moindre privilège — une fuite du token n'expose ni le repo marketing ni les autres projets. Enfin, le push direct sur la branche principale est interdit parce que la PR EST le gate : validation mécanique du frontmatter au build + relecture humaine avant merge. Supprimer la PR, c'est supprimer deux garde-fous.

### 1.8 Pourquoi le rendu des sites doit être SSG/SSR
Les moteurs IA lisent mal les pages au rendu JavaScript client. Un contenu servi en HTML complet est indexable ET citable ; un contenu en pur client-side rendering est invisible pour les LLM. C'est une exigence de template côté sites (hors de ce repo), mais elle est vérifiée à l'onboarding (baseline Cuik).

### 1.9 Pourquoi les prompts d'exécution sont historisés un fichier par prompt
Les prompts générés pour les repos clients (`clients/<slug>/prompts/`) sont des livrables datés : ils déclenchent des PR côté site, puis servent de trace — qu'a-t-on demandé, quand, et qu'est-ce qui a été déployé. Un fichier unique en mode append devient illisible dès le troisième lot et mélange l'exécuté avec l'en-attente. Convention (2026-07-11, demande opérateur) : un prompt = un fichier `YYYY-MM-DD-<slug>.md`, un bandeau **Statut** mis à jour au fil de l'eau, un `README.md` d'index par client. Un prompt généré ne se réécrit pas : les nouveaux constats ouvrent un nouveau fichier — même logique de trace d'audit que `tracking.md`.

### 1.10 Pourquoi les revues hebdo et rapports client sont historisés dans `reports/`
Même besoin de trace que les prompts, appliqué aux livrables de suivi (2026-07-15, demande opérateur). Une revue hebdo qui ne vit que dans la conversation est perdue à la session suivante ; un rapport client envoyé puis retouché n'est plus une preuve de ce qui a été communiqué. Convention : `clients/<slug>/reports/` avec un fichier daté par livrable (`YYYY-MM-DD-revue-hebdo.md` interne ; `YYYY-MM-rapport-client.md` avec cycle 🕓 brouillon → ✅ validé → 📤 envoyé) + index README. **Un rapport envoyé est figé** — c'est la trace exacte de ce que le client a reçu ; corriger = nouveau fichier. La ligne hebdo de `tracking.md` reste le résumé condensé (diagnostic + décisions) et pointe vers le fichier ; le fichier porte le détail (tableaux, chiffres, plan). Distinction assumée : la revue hebdo est un document de travail interne, le rapport mensuel est LA communication client — on ne transmet jamais l'un à la place de l'autre.

---

## 2. Rationnel des skills

Chaque skill est un **contrat qualité** : il encode la méthodologie pour que la qualité ne dépende pas de la mémoire de l'opérateur ni de l'humeur du modèle.

### `article-writer` — pourquoi ces exigences
- **Information gain obligatoire (first-party)** : un contenu sans apport propre est réplicable par n'importe quel concurrent équipé du même LLM, pénalisable par Google (scaled content abuse), et jamais cité par les IA. L'élément first-party est le verrou de non-réplicabilité.
- **Intro réponse-directe + passages auto-suffisants + FAQ** : les moteurs (classiques et IA) extraient des passages, pas des pages. On écrit pour l'extraction.
- **Mécanisme de capture par contenu** : un contenu qui n'appelle aucune action fabrique des « touristes ». Chaque contenu capture quelque chose (email, essai, devis, mini-outil) ; les éléments interactifs augmentent en plus le temps sur page — signal comportemental positif.
- **Typologie (actu/guide/evergreen)** : elle pilote la maintenance. Une actu se périme, un guide se complète, un evergreen se surveille. Sans typologie, le re-check est aveugle.
- **Variation anti-uniformité** : des dizaines de contenus de structure identique = empreinte de production automatisée massive, détectable et pénalisable.
- **Pages business SaaS « vivre la douleur »** : sur une page fonctionnalité ou comparaison, l'utilisateur doit se reconnaître dans le problème avant de voir la solution — c'est ce qui convertit.

### `fact-check` — pourquoi un skill séparé
Un LLM affirme le plausible avec l'assurance du vrai. Déléguer la vérification au skill de rédaction, c'est demander au producteur de s'auto-contrôler. Un skill DISTINCT, exécuté après la rédaction et avant le gate, joue le rôle de contre-pouvoir : il contrôle chiffres, dates, citations, noms propres et affirmations YMYL contre des sources vérifiables, et retire ce qui ne l'est pas. L'humain au gate relit alors le fond et la voix — pas la véracité de chaque nombre.

### `seo-gap-analysis` — pourquoi cette méthode
L'intention se lit dans la SERP réelle, pas dans l'intuition ; les concurrents SERP (forums, annuaires, YouTube) ne sont pas les concurrents business ; le format gagnant s'impose (un article court face à des guides profonds est une faille en soi) ; et le go/no-go final est l'information gain — si le client n'a rien d'unique à apporter sur ce sujet, on ne produit pas.

### `geo-schema` — pourquoi le JSON-LD systématique
Le balisage (Article, FAQPage, LocalBusiness…) est le canal par lequel Google construit ses résultats enrichis ET par lequel les IA identifient entités, fraîcheur et structure. Il se génère depuis le frontmatter — coût marginal nul une fois le contrat respecté. Règle absolue : le schema ne ment jamais sur le contenu visible.

### `local-seo` — pourquoi le NAP source de vérité
En SEO local, une seule incohérence de coordonnées (une virgule, un ancien numéro) érode la confiance de Google — silencieusement. D'où : une version canonique unique (`nap.md`) dont TOUT dérive, l'ordre de mise à jour imposé (GBP → Pages Jaunes → le reste), et l'interdiction de la soumission de masse automatisée (les erreurs de formatage en masse font plus de mal que de bien). Les avis : la vélocité récente pèse plus que le total historique — 20 avis des 6 derniers mois battent 60 avis dont le dernier date de 2 ans.

### `client-report` — pourquoi ces règles
Le client ne voit pas le SEO ; le rapport relie l'effort au résultat, sinon le travail est invisible. Chiffres réels uniquement : la crédibilité est l'actif de l'agence. Deux subtilités encodées : l'**attribution sous-estime le blog** (les IA renvoient vers la homepage, pas vers l'article qui a construit l'autorité — l'expliquer au client) ; et les **contenus < 90 jours** se présentent comme « en test », jamais comme succès/échec.

### `icp` / `personas` — pourquoi deux skills séparés
L'un décrit **l'entreprise**, l'autre **les personnes dedans** — et ils pilotent des décisions différentes. L'ICP (secteur, taille, CA, stack, signaux de maturité) est le filtre de rentabilité du **ciblage** : quels mots-clés valent la peine, quelles ads, quels comptes en outbound. Les personas (utilisateur, champion, décideur, valideur budget) pilotent le **contenu** : un post qui parle au Head of Sales (« vos SDR perdent 2 h/jour à qualifier des comptes froids ») n'est pas celui qui parle au SDR. Les fusionner produit des « cibles » floues qui ne pilotent rien. Règles encodées : un critère ICP qu'on ne peut pas observer dans une source disponible n'est pas un critère (il ne filtrera jamais une liste ni un mot-clé) ; **un contenu = un persona**, déclaré avant production (corollaire de « une page = une intention ») ; pré-PMF tout est hypothèse flaguée, et un verbatim inventé ne se publie jamais comme citation (invariant fact-check).

---

## 3. Rationnel des règles transverses

### La règle des 90 jours
Après publication, Google TESTE : il monte et descend la page, observe le comportement des utilisateurs (clics, scroll), compare aux concurrents. La position moyenne n'est fiable qu'à partir de J90. Toucher un contenu pendant cette fenêtre fausse le test et retarde la stabilisation. Conséquences dans le repo : `/refresh` refuse les contenus < 90 j (sauf erreur factuelle ou technique bloquante), `/weekly-review` classe ces contenus en « observation », les checkpoints J30/J60 sont des relevés sans action, le verdict tombe à J90.

### La stratégie de mots-clés en 3 étapes (ordre impératif)
A. **Concurrents** (quels mots-clés leur rapportent du trafic : idées validées par le marché) → B. **Existant 4-20** (pousser vers le top 3 : le levier le plus rentable, zéro création) → C. **Nouveaux mots-clés** (argent → comparaison → longue traîne). Inverser l'ordre, c'est créer du neuf pendant que des gains faciles dorment dans l'existant.

### La règle du scroll
Si le premier résultat organique n'apparaît qu'après 3-5 scrolls (pubs, AI Overviews, packs), le trafic organique du mot-clé est résiduel : on ne le vise pas, quel que soit son volume affiché.

### Les paris émergents (volume nul)
Les outils affichent 0 sur les sujets trop récents. Si le sujet est émergent et l'intention ultra-qualifiée, se positionner AVANT tout le monde est un pari rationnel : 10 visiteurs ultra-qualifiés valent mieux que 1000 touristes. Flagué `pari-émergent` dans le tracking pour l'évaluer avec un horizon long.

### L'architecture SaaS « pages business d'abord »
Accueil + tarifs → fonctionnalités → comparaisons « vs » → alternatives → témoignages → cas clients → blog EN DERNIER. Le trafic d'articles est majoritairement du « touriste » ; le blog sert à équilibrer le trafic et à pousser de la puissance (maillage) vers les pages qui convertissent. Les **free tools** sont le levier de conversion le plus fort observé (10-15 % vs 0,5-2 %).

### L'équilibre du trafic
Deux seuils de fragilité surveillés : SEO > ~60 % du trafic total (dépendance à une source unique — une core update peut tout emporter, cf. les gros éditeurs démontés en 2025) ; et 3-4 pages > ~60-70 % du trafic SEO (une page qui tombe = trafic mort). Le rapport client les signale AVANT l'accident.

### Le garde-fou product-market fit
Zéro SEO avant le PMF : d'abord vendre, ensuite se référencer. Pré-PMF, très peu de trafic suffit à tester l'enthousiasme ; investir en SEO à ce stade brûle du budget pour amener du trafic sur une offre non validée. C'est un critère de qualification des missions de l'agence.

### Qualité > quantité (le throttle)
Il n'y a pas de limite théorique au volume de publication ; la limite réelle est la capacité de RELECTURE humaine. Publier plus que ce qu'on peut relire = publier du non-relu = ne pas performer. Le rythme se calibre sur le temps de relecture disponible, pas sur la capacité de génération.

---

## 4. Sources et traçabilité des décisions
- Méthodologie SEO 6 phases : `docs/methodologie-seo.md`.
- Enseignements du retour d'expérience praticien (règle 90 j, stratégie 3 étapes, architecture SaaS, free tools, fact-check, règle du scroll, re-check bimestriel, équilibre du trafic, PMF) : `docs/notes-podcast-seo.md`.
- Toute nouvelle règle intégrée au repo doit : (1) être ajoutée à la command/skill concernée, (2) être justifiée ici, (3) citer sa source dans docs/.

---

## 5. Trajectoire : de ce repo à l'orchestrateur
Ce repo est volontairement la **version manuelle** d'un futur orchestrateur automatisé : les briefs = les futures tables de stratégie ; le tracking = les futurs checkpoints automatiques ; les commands = les futurs workflows ; le gate = la future étape de validation ; les skills = les futurs contrats de génération. Signal de bascule : quand la répétition manuelle des routines (relevés, collages BrightLocal/GBP, re-checks) coûte plus de temps qu'elle n'en économise — typiquement au-delà d'une dizaine de clients ou de plusieurs dizaines de contenus actifs. Jusque-là, le manuel structuré bat l'automatisation : moins d'infra, plus de contrôle, et chaque routine affinée ici devient une spécification fiable pour l'automatisation future.
