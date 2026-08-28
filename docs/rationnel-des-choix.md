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

### 1.10 bis Pourquoi les briefs de production `/research` sont persistés dans `research/`
Leçon du 2026-08-24/28 (transports-ansquer) : un `/research` complet du guide empotage/dépotage avait été mené et présenté en session, mais jamais écrit dans le repo — la session suivante n'en a retrouvé aucune trace et l'analyse (2 serp-analyst, gap, angle, plan) a dû être refaite. **Un brief non commité meurt avec la session.** Convention (demande opérateur, 2026-08-28) : **tout brief `/research` est persisté dans `clients/<slug>/research/YYYY-MM-DD-<slug-sujet>.md` et commité AVANT d'être présenté au gate** — la présentation est un résumé du fichier, jamais l'inverse. Un fichier par sujet et par recherche (une re-recherche = un nouveau fichier, l'ancien reste : historique des angles), index README avec statut (🕓 en attente de GO · ✅ GO · ⛔ écarté · 📝 produit). Le brief est l'entrée de `/write` ; les mini-briefs `serp-analyst` bruts y sont annexés (ce sont les données du verdict). Distinct de `audits/` (technique) et de `prompts/` (ordres vers le repo du site).

### 1.11 Pourquoi un plan éditorial pluri-mois (`/content-plan`)
Il manquait un maillon entre l'onboarding (qui produit le ciblage et 5 premières actions) et la production au fil de l'eau (`/research` → `/write`, un sujet à la fois). Décision 2026-08-01, demande opérateur : `clients/<slug>/content-plan.md`, généré par `/content-plan`, horizon 6 mois par défaut.

**Pourquoi il existe** — trois raisons, dans l'ordre d'importance :
- **Cohérence des clusters.** Produire au fil de l'eau fabrique une collection d'articles orphelins : chaque sujet est défendable isolément, mais rien ne se renforce. Un plan force à poser les piliers et leurs satellites AVANT d'écrire, donc à décider où le maillage envoie la puissance. C'est une décision d'architecture — elle se prend une fois, pas à chaque lundi matin.
- **Cadrage du rythme sur la capacité de relecture.** Le throttle (§3, *Qualité > quantité*) reste théorique tant qu'il n'est pas inscrit quelque part. Le plan matérialise `min(cadence contractuelle, capacité de relecture)` en un nombre de lignes par mois : si le contrat vend plus que ce qu'on peut relire, l'écart devient visible **au moment de la signature du plan**, pas trois mois plus tard sur du contenu non relu qui ne performe pas.
- **Livrable commercial.** Une fois validé, le plan est présentable au client — c'est souvent le premier document qui rend la mission tangible pour lui (il voit ce qu'il achète sur 6 mois, et pourquoi les refreshes passent avant les créations). Un rapport mensuel prouve le passé ; le plan vend le futur.

**Pourquoi 6 mois et pas 12.** Au-delà de deux trimestres, un plan devient spéculatif : les SERP bougent, un mot-clé disqualifié par la règle du scroll peut redevenir viable (et l'inverse), l'offre du client évolue, l'ICP se corrige au contact des vrais clients. Planifier 12 mois donnerait une précision fausse sur la seconde moitié. La `/weekly-review` re-priorise en continu et la révision trimestrielle prolonge l'horizon : on préfère un plan court et vivant à un plan long et périmé.

**Pourquoi des statuts par sujet, et pas une re-génération.** Re-générer le plan à chaque révision effacerait ce qui a été décidé — notamment les sujets **reportés** et **abandonnés**, qui portent l'information la plus utile (pourquoi on n'a pas fait ce qu'on avait dit). D'où : le fichier n'est jamais re-généré, aucune ligne ne s'efface, un sujet qui tombe **change de statut avec son motif**. Un plan validé avec le client reste ainsi opposable : on peut montrer l'écart entre le prévu et le réalisé au lieu de le faire disparaître.

**La nuance à ne pas confondre — figé ≠ vivant.** Ce qui est figé dans ce repo, ce sont les **livrables de communication** : un rapport envoyé (§1.10) et un prompt émis (§1.9) sont des preuves de ce qui a été transmis, donc immuables. Le plan éditorial est un **document de pilotage** : sa trace d'audit passe par les **statuts par sujet** (reporté/abandonné conservés, jamais supprimés) et par **git**, pas par l'immutabilité du fichier. *Un sujet abandonné se raye, il ne s'efface pas.* Corollaire : ne jamais « corriger » cette exception en alignant `content-plan.md` sur le régime des `reports/` — ce serait supprimer la seule vue du prévu au profit d'une pile d'instantanés.

**Articulation avec l'existant** : `/onboard-client` produit le ciblage (le plan STOP s'il est absent) → `/content-plan` produit la carte du prévu → `/weekly-review` l'exécute et met à jour les statuts → `/research` part des sujets « prévu » du mois → `tracking.md` enregistre le réalisé. Deux fichiers, deux rôles, aucun recouvrement : **`content-plan.md` = le prévu, `tracking.md` = le réalisé**.

### 1.12 Pourquoi le contrat de contenu passe en v2
Décision 2026-08-01, demande opérateur, après analyse de 4 articles de référence de **mama-seo.fr** — le site de la consultante dont `notes-podcast-seo.md` encode déjà la méthode. Autrement dit : on a benchmarké la mise en œuvre concrète d'une méthode qu'on avait jusqu'ici sous forme de principes. L'écart observé n'était pas méthodologique mais **matériel** : nos articles conformes à la v1 sont justes et vides ; les leurs sont denses (un élément riche par section) et incarnés (un expert nommé, des avis réels, des chiffres mis en scène).

**Ce qui a été retenu, et pourquoi.**
- **Composants v2** (`StatGrid`, `ExpertQuote`, `Testimonial`, `ErrorTip`, `Callout type="retenir"`) : chacun transporte du **sens structuré** que le Markdown ne sait pas porter — une stat sans son couple source/lien n'est pas contrôlable automatiquement, une citation sans `author`/`role` n'est pas un signal E-E-A-T, une paire erreur/réflexe perd sa symétrie en liste à puces. C'est le critère d'admission : un composant existe parce que la structure est vérifiable ou exploitable, jamais parce que « ça rend mieux ».
- **Patterns rédactionnels** (tableaux titrés, prises de position, stats mises en scène, densité, sujets en phase de décision) : ils vivent dans `article-writer`, pas dans le contrat — ce sont des exigences d'écriture, pas des composants. Les mettre dans la whitelist aurait été confondre le fond et le véhicule.
- **Exigences template** (sommaire, temps de lecture, date de MàJ, bloc auteur, articles reliés) : elles vivent dans `interactions-repos.md` §4, côté SITE. Toutes se déduisent du frontmatter ou de la structure — aucune ne redescend dans le contenu, sinon on rouvrirait la porte à l'apparence dans le MDX (§1.6).

**Ce qui a été différé, et pourquoi.**
- **Timeline comparative** : élégante, mais vue une fois. On n'étend le contrat que sur un besoin **récurrent** — à reconsidérer en v2.1 si le besoin revient sur plusieurs clients.
- **Quiz interactif** : c'est un **free tool**, donc un projet par client (avec sa propre conversion à mesurer), pas un composant d'article. Le mettre dans la whitelist obligerait tous les templates à implémenter un moteur de quiz pour un usage rare.

**Ce qui a été écarté, et pourquoi.**
- **Codes promo / liens d'affiliation** : ils relèvent du modèle économique d'une **consultante solo** qui monétise son audience. Nos clients vendent leur propre offre ; un lien d'affiliation dans leur contenu détournerait leur trafic et brouillerait leur intention commerciale.
- **Tutoiement systématique** : c'est la voix d'**une** marque, pas une bonne pratique. La voix est une décision par client, déclarée dans son `client-brief.md` §3. Importer le tutoiement comme règle transverse produirait des artisans qui parlent comme une consultante parisienne.

**La règle de véracité — extension de l'invariant fact-check.** `ExpertQuote` et `Testimonial` sont les deux composants qui font **parler un humain réel**. C'est précisément là qu'un LLM est le plus dangereux : il produit une citation plausible sans effort, et une fausse citation attribuée à un client nommé n'est pas une erreur factuelle ordinaire — c'est un faux, publié sous la signature du client. D'où : une ExpertQuote vient du first-party OU est une **proposition explicitement signalée dans la PR et validée par le client avant merge** ; un Testimonial est un avis **réel, sourcé, jamais reformulé au point de trahir l'original**. Non négociable : c'est la même logique que « jamais de verbatim inventé » (§`icp`/`personas`) et « jamais de stat sans source », appliquée à un support plus exposé.

**Le coût est assumé.** Chaque composant de la whitelist est une **obligation d'implémentation pour TOUS les templates de sites actifs** (§1.6). La v2 en ajoute cinq d'un coup : les sites existants ne basculent pas instantanément. D'où la règle **tout ou rien** — un site reste v1 tant qu'il n'a pas implémenté l'intégralité de la v2 (pas de v1.5 : une version partielle rendrait « la version supportée » inexploitable par le rédacteur) — et la compensation en Markdown pur sur les sites v1. Corollaire mécanique : `Callout type="retenir"` étant une valeur de prop et non un composant, il **n'échoue pas naturellement au build** sur un site v1 ; le contrat impose donc aux templates d'échouer sur un `type` inconnu (fail-closed). Sans ça, le seul ajout v2 qui traverserait silencieusement la frontière serait aussi celui qu'on recommande le plus souvent.

### 1.13 Pourquoi trois subagents (et pas plus)
Décision 2026-08-01, demande opérateur. Le repo fonctionne en commands + skills dans la session principale ; trois tâches seulement justifient un **contexte séparé** (`.claude/agents/`). Le critère d'admission n'est pas « ça pourrait être délégué » mais « **l'isolation ou le parallélisme change la nature du résultat** ». Trois raisons distinctes, une par agent :

- **`fact-checker` — l'isolation rend le contre-pouvoir structurel.** Le skill `fact-check` existait déjà, mais il s'exécutait dans la session qui venait de rédiger : le vérificateur portait le biais du rédacteur. Il connaissait l'angle, il savait quel chiffre « arrangeait » la démonstration, il avait un attachement aux formulations qu'il venait de produire. En subagent, le contexte est **vierge** : l'agent ne sait pas ce que la session espérait, il ne voit que des affirmations et des sources. C'est la différence entre se relire et être relu.
- **`serp-analyst` — la parallélisation rend `/content-plan` possible.** Un plan éditorial de 6 mois qualifie des dizaines de mots-clés. En séquentiel dans la session principale, le contexte sature avant la fin du plan, et les derniers sujets sont analysés moins bien que les premiers — un biais silencieux et purement mécanique. Une instance par mot-clé, invoquées par lots, supprime la dégradation. D'où l'exigence de **compacité (≤30 lignes)** inscrite dans son prompt : chaque ligne superflue est multipliée par le nombre de sujets.
- **`contract-checker` — le mécanique élargit le goulot d'étranglement réel.** La limite du process n'est pas la génération mais la **relecture humaine** (§3, *Qualité > quantité*). Tout critère vérifiable par une règle — frontmatter, whitelist de version, longueur de title, existence des cibles de maillage — consommé par l'opérateur est du temps volé au fond et à la voix, les deux seules choses qu'une machine ne sait pas juger. Chaque contrôle automatisé rend du temps humain à ce qui compte.

**Pourquoi la rédaction n'est PAS un agent.** C'est la tentation évidente, et c'est une erreur. Écrire demande le contexte **complet et simultané** : le brief, la voix de la marque, les interdits, les données first-party disponibles, les personas, l'historique de ce qui a déjà été publié. Un subagent devrait tout recharger — donc consommer autant de contexte que la session principale, sans le bénéfice de la continuité (les échanges qui ont affiné l'angle, les arbitrages de l'opérateur en cours de route). L'isolation est un atout pour **vérifier**, un handicap pour **créer**.

**Pourquoi pas d'agent orchestrateur.** La session principale et l'opérateur orchestrent. Un orchestrateur ajouterait une couche qui décide sans que l'humain voie ses arbitrages — exactement l'inverse du gate (§1.3). Les commands disent qui déléguer et quand ; rien n'est masqué.

**Pourquoi `fact-checker` et `contract-checker` n'ont aucun droit d'écriture.** Un vérificateur qui peut modifier le texte cesse d'être un contrôle : il devient co-auteur, et plus personne ne contrôle ses propres corrections. Ils rendent un rapport ; la session principale applique, puis les relance. La relance est différenciée par domaine (correction factuelle → `fact-checker`, correction structurelle → `contract-checker`) pour que la boucle converge au lieu de tout rejouer à chaque itération.

**La règle des contrôles empêchés — commune aux trois.** Un contrôle qu'un agent n'a pas pu exécuter (fichier absent, source hors ligne, outil MCP indisponible, repo du site non cloné) s'affiche **⚠️ non vérifiable, avec sa raison**. Jamais un ✅, jamais une omission. C'est la règle la plus importante des trois fichiers : un rapport silencieux sur ses angles morts fait croire au gate humain qu'un point est couvert, ce qui est **pire que pas de contrôle du tout** — le contrôle absent, on le sait ; le contrôle qu'on croit fait, non. Corollaire côté `serp-analyst` : si un outil Haloscan attendu devient inaccessible (renommage côté serveur MCP), le mini-brief le signale au lieu de continuer comme si de rien n'était — la dérive devient visible au premier usage.

### 1.14 Deux évolutions du contrat v2 issues de la première implémentation
Source : implémentation transports-ansquer validée au gate opérateur, 2026-08-05 (PR #1 du repo du site). La première mise en œuvre réelle du contrat a fait remonter deux imprécisions ; plutôt que des exceptions locales, elles deviennent des règles du contrat (`docs/contrat-de-contenu.md` §3 et §4.2) :

- **`image` = objet `{src, alt}`, alt obligatoire.** Le contrat disait `image: ""` sans préciser ; or une couverture sans texte alternatif fait échouer l'accessibilité du site qui la rend (et l'ancien registre du site imposait déjà `imageAlt`). L'alternative textuelle est une donnée ÉDITORIALE, pas un détail de rendu : elle appartient au contenu, donc au frontmatter.
- **Un type de CTA sans parcours câblé sur le site cible = build rouge.** Le fail-closed ne couvre pas que la syntaxe (type dans l'énumération) mais les parcours : un `<CTA type="essai">` sur un site sans page d'essai produirait un bouton mort, pire qu'une erreur. Les 4 types restent au contrat ; leur disponibilité par site se déclare dans le `client-brief.md` §2.

### 1.15 Pourquoi le rythme visuel est une règle d'`article-writer`
Source : retour de gate opérateur du 2026-08-20 sur le premier article produit (transports-ansquer, PR #3). L'article était structurellement irréprochable (extraction, composants, maillage) mais se lisait comme un document : paragraphes de longueur uniforme, aucune image figurative, zéro adresse au lecteur. Le gate a demandé de le « rendre vivant » — et la correction est devenue règle (`article-writer`, section « Rythme visuel et vie du texte ») plutôt que retouche locale : ≥1 visuel par ~800 mots, hiérarchie schéma first-party > graphique conceptuel > photo (un schéma d'un processus réel du client est un information gain visuel, non réplicable, quand une photo stock est réplicable par tous), variation des longueurs, adresse directe, micro-scènes. Deux garde-fous fondent la hiérarchie : un graphique conceptuel n'invente **jamais** de données, et un schéma affirme des faits donc **passe au fact-check comme le texte**.

Second retour de gate (2026-08-24, preview du même article) — trois compléments : (1) **QA visuelle obligatoire** — un SVG livré sans avoir été rendu et regardé a laissé passer un débordement de texte que ni le fact-checker ni le contract-checker ne contrôlent ; la règle est désormais dans `article-writer`. (2) **Mesure de texte conservée, figures élargies** — la demande « article en pleine largeur » se traite par la hiérarchie (texte à ~68 caractères de mesure, lisibilité ; figures plus larges), pas en élargissant la prose. (3) **Animations = système du site** — révélation au scroll sobre en réutilisant l'existant du template (no-JS safe, reduced-motion), jamais un second système, jamais du style dans le contenu. Ces attentes de rendu sont généralisées à tous les sites au contrat (`contrat-de-contenu.md` §5).

---

## 2. Rationnel des skills

Chaque skill est un **contrat qualité** : il encode la méthodologie pour que la qualité ne dépende pas de la mémoire de l'opérateur ni de l'humeur du modèle.

### `article-writer` — pourquoi ces exigences
- **Exemple de référence few-shot** (`exemple-reference.mdx`, ajouté le 2026-08-24) : l'analyse comparative des contenus de référence avait identifié une régression connue des systèmes de rédaction — sans exemple calibré maison, chaque article re-négocie le niveau d'exigence depuis les règles abstraites, et le niveau dérive. Le premier article publié (transports-ansquer, double PASS + 2 retours de gate intégrés) ferme cette régression : il incarne les règles en un artefact imitable. Le garde-fou est dans son en-tête et dans le skill : **on imite le niveau, jamais le sujet ni le moule** — sinon l'exemple recrée l'uniformité que la variation anti-uniformité combat.
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
- Benchmark de mise en œuvre (4 articles de référence de mama-seo.fr, analysés le 2026-08-01) → contrat de contenu v2, patterns de densité/incarnation d'`article-writer`, exigences d'affichage des templates : justifié en §1.12, spécifié dans `docs/contrat-de-contenu.md` §4 et `docs/interactions-repos.md` §4.
- Toute nouvelle règle intégrée au repo doit : (1) être ajoutée à la command/skill concernée, (2) être justifiée ici, (3) citer sa source dans docs/.

---

## 5. Trajectoire : de ce repo à l'orchestrateur
Ce repo est volontairement la **version manuelle** d'un futur orchestrateur automatisé : les briefs = les futures tables de stratégie ; le tracking = les futurs checkpoints automatiques ; les commands = les futurs workflows ; le gate = la future étape de validation ; les skills = les futurs contrats de génération. Signal de bascule : quand la répétition manuelle des routines (relevés, collages BrightLocal/GBP, re-checks) coûte plus de temps qu'elle n'en économise — typiquement au-delà d'une dizaine de clients ou de plusieurs dizaines de contenus actifs. Jusque-là, le manuel structuré bat l'automatisation : moins d'infra, plus de contrôle, et chaque routine affinée ici devient une spécification fiable pour l'automatisation future.
