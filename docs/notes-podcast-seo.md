# Notes podcast — consultante SEO (marché FR) : ce qu'on intègre à notre process

Curation de la transcription. Organisé en : ce qui **valide** nos choix, ce qui **enrichit** concrètement le repo (avec le fichier à modifier), ce qui est **à tester**, et le bruit écarté. Source : podcast avec une consultante SEO indépendante, 10 ans de métier, spécialisée France, clients SaaS B2B et e-commerce.

---

## 1. Ce qui VALIDE nos choix (rien à changer, confiance renforcée)

- **Stack outils** : elle est passée d'une dizaine d'outils SEO à **deux : Haloscan + Cuik** — précisément notre stack. Haloscan pour la donnée FR (« la plus grande base de données FR », équivalent SEMrush/Ahrefs spécialisé France) ; Cuik comme couteau suisse (équivalent Screaming Frog + vues GSC/GA + MCP regroupant 6+ outils, dont DataForSEO pour l'international si besoin un jour). « Rien qu'avec ces deux outils, je peux absolument tout faire. »
- **Process skills + gate humain** : elle a « des skills pour tout » (création, optimisation, monitoring, audit) et **la relecture humaine est la seule phase manuelle** — obligatoire : « tu es obligé de relire et de vérifier, sinon tes articles ne performeront pas ». C'est exactement notre architecture commands/skills + gate.
- **Qualité > quantité** : sa devise. Le volume de publication n'a pas de limite théorique, la vraie limite est **ta capacité de relecture** (ex. une demi-journée/semaine → 2 articles relus). Confirme notre throttle « humainement crédible ».
- **Stack site** : elle migre systématiquement ses clients hors WordPress vers **Next.js + Tailwind, site refait de A à Z** (sauf e-commerce, enjeux différents). Un site techniquement irréprochable est le facteur n°1. Valide le positionnement sites custom de l'agence.
- **SEO ⊇ GEO** : « toujours faire du bon SEO, vous ferez du bon GEO ». Confirme notre approche (fondamentaux + structuration d'extraction) plutôt qu'une discipline GEO séparée.
- **Le cas HubSpot (leçon anti-scaled-content)** : démonté par une core update (janv. 2025) pour s'être trop élargi hors de sa niche + pages auto-générées à faible valeur. « Le contenu de merde a été puni. » Confirme nos invariants information gain + niche.

---

## 2. Ce qui ENRICHIT le process (modifications concrètes du repo)

### 2.1 La règle des 90 jours — à intégrer dans `/weekly-review` et `tracking.md`
« Quand on écrit un contenu, il faut le laisser dormir **90 jours** et ne pas le toucher. » Avant 90 j, Google teste : il monte/descend la page, observe le comportement des utilisateurs (clics, scroll), compare aux concurrents. La **position moyenne n'est fiable qu'à partir de J90**.
**Application** : dans `/weekly-review`, ne déclencher AUCUN refresh sur un contenu de moins de 90 jours (exceptions : erreur factuelle, problème technique). Nos checkpoints J30/J60 deviennent de l'observation seule ; le verdict et l'action se prennent à J90. La volatilité pré-90j est normale, pas un signal.

### 2.2 Stratégie de mots-clés en 3 étapes ordonnées — à intégrer dans `/onboard-client`
Son ordre de construction :
1. **Concurrents d'abord** : quels mots-clés leur apportent réellement du trafic aujourd'hui (visible dans Haloscan).
2. **L'existant ensuite** : les pages du client déjà en **positions 4-20** → les pousser vers le top 3. « Réoptimiser l'existant augmente le trafic considérablement sans rien créer. » Hors top 3, très peu de trafic.
3. **Nouveaux mots-clés en dernier**, dans cet ordre de priorité : ceux qui rapportent de l'argent → ceux de la phase de choix (comparaisons) → l'informationnel longue traîne.
**Application** : `/onboard-client` étape 3 suit cet ordre ; l'existant 4-20 devient un gisement prioritaire de tâches `refresh` avant toute création.

### 2.3 Architecture de contenu SaaS : les pages business AVANT les articles — à intégrer au brief du client SaaS
Son ordre pour un SaaS : **accueil + tarifs** (les plus importantes : requêtes « marque + tarif/pricing ») → **pages fonctionnalités** (mots-clés à douleur forte) → **pages comparaison** « ma marque vs concurrent X » (tous les concurrents) et « alternatives à concurrent X » → **pages témoignages/avis** (capter ce trafic plutôt que le laisser à Trustpilot) → **cas clients** → **articles de blog en dernier**.
Les articles servent à : équilibrer le trafic du site, apporter du volume, et pousser de la puissance (maillage) vers les pages business. « Sur les articles de blog, vous avez des touristes. »
Style des pages : « je parle à l'utilisateur pour qu'il **vive la douleur** en temps réel », puis on propose la solution.
**Application** : le plan de contenu du client SaaS commence par l'inventaire/refonte des pages business, pas par le blog. Ajouter les types de page (comparaison, alternatives, témoignages) dans le ciblage du `client-brief.md`.

### 2.4 Outils gratuits & contenu pensé conversion — à intégrer dans `article-writer` et le brief SaaS
- **Free tools** : taux de conversion observés **10-15 %** contre 0,5-2 % pour des pages classiques. Trafic qualifié ET récurrent (l'utilisateur revient), qui bascule ensuite en essai/payant. Résultats revendiqués : SaaS passés à +30 k€ MRR, ~x10 sur sa prestation en ~6 mois.
- **Chaque contenu doit capturer quelque chose** (email, essai gratuit…) : rappel de l'outil en latéral, blocs CTA, mini-quiz dans les articles qui redirigent vers l'offre (avec emailing derrière). « Un contenu doit servir à quelque chose. »
**Application** : proposer au client SaaS 1-2 free tools alignés sur ses mots-clés commerciaux ; ajouter dans la skill `article-writer` l'exigence d'un mécanisme de capture par contenu (déjà un CTA — renforcer en « capture »).

### 2.5 La règle du scroll — à intégrer dans `/research`
Avant de viser un mot-clé : le taper sur Google. **Si le premier résultat organique n'apparaît qu'après 3-5 scrolls** (pubs, AI Overviews, packs…), ne pas se positionner : le trafic organique y est résiduel.
**Application** : check systématique dans `/research` (l'analyse SERP de Haloscan permet de l'estimer ; sinon vérification manuelle).

### 2.6 Mots-clés d'avenir à volume nul — à intégrer dans `/research`
Les outils affichent parfois 0 volume sur des mots-clés émergents (son exemple : « MCP SEO »). S'y positionner **avant tout le monde** si on sait que le sujet va exploser : requêtes ultra-qualifiées. « Je préfère 10 visiteurs et 10 clients que 1000 visiteurs et 1 client. »
**Application** : dans `/research`, un volume nul n'est pas un no-go si (a) le sujet est émergent et (b) l'intention est ultra-qualifiée. À flaguer comme pari long terme dans `tracking.md`.

### 2.7 Re-check périodique par typologie d'article — à intégrer dans `tracking.md` / cadence
Chez elle, **tous les 2 mois**, chaque article existant est re-vérifié selon sa typologie : article d'actualité → l'actu a-t-elle évolué ? ; guide → compléter les informations manquantes (ex. nouveaux outils sortis). ~80 % de l'article reste identique.
**Application** : ajouter une colonne « typologie » (actu / guide / evergreen) dans `tracking.md` et une passe de re-check bimestrielle dans la routine (peut s'adosser au `/weekly-review` une semaine sur huit).

### 2.8 Un skill de vérification factuelle — nouveau skill à créer
Elle a un **skill de vérif dédié** « qui se base uniquement sur des sources vérifiables et contre-checke les autres skills, pour les empêcher de faire des bêtises ».
**Application** : créer `.claude/skills/fact-check/SKILL.md` : toute statistique/affirmation datée doit être sourcée et vérifiable ; passe de contrôle avant `pending_review`. Complète notre E-E-A-T.

### 2.9 Un seul outil de référence pour les KPI — règle à ajouter dans CLAUDE.md
Les outils donnent des volumes/positions différents : **choisir UN outil de référence** (pour nous : Haloscan) et s'y tenir pour la cohérence des KPI dans le temps. GSC reste la vérité pour clics/impressions.

### 2.10 Équilibre du trafic — à intégrer dans le conseil client / `/report`
- **Le SEO ne doit pas dépasser ~50-60 % du trafic total** : dépendre d'une seule source rend fragile (cf. HubSpot).
- **Ne pas dépendre de 3-4 pages pour 80 % du trafic SEO** : une page qui tombe = trafic mort. Répartir.
- Bénéfice croisé : un bon SEO **baisse le coût par clic** des Google Ads (quality score) — argument utile en rapport client.
**Application** : indicateur de concentration du trafic dans `/report` (top pages % du total) + recommandation de diversification quand c'est trop concentré.

### 2.11 Qualification commerciale : pas de SEO avant le product-market fit
« Zéro SEO tant qu'il n'y a pas de PMF. D'abord faire des ventes, ensuite se référencer. » Le SEO est une panoplie post-PMF ; pré-PMF, très peu de trafic suffit à tester l'enthousiasme.
**Application** : critère de qualification des prospects de l'agence — un client sans PMF n'est pas un bon client SEO (ou alors la mission est autre).

### 2.12 Rendu lisible par les IA — vigilance template
« Pas de site en JavaScript [dynamique] : les IA n'arrivent pas à le lire. » Les LLM scrapent mal les pages au rendu client.
**Application** : nos sites Next.js doivent servir le contenu en **SSG/SSR** (HTML complet), jamais en pur client-side rendering pour les pages de contenu. Point de checklist template (hors repo marketing, côté sites).

---

## 3. À TESTER (signal incertain, ne pas intégrer comme règle)

- **llms.txt** : avis mitigés dans l'épisode. Idée intéressante : les meilleurs llms.txt seraient rédigés comme du **contexte adressé à l'IA** (« ce site démontre X, nous sommes la référence sur Y ») plutôt qu'un simple sommaire. Idée de test proposée : insérer un mot inventé unique dans le llms.txt, attendre ~30 j, demander aux LLM ce qu'il signifie → preuve de crawl. Coût quasi nul, gain incertain ; à tester sur notre propre site d'abord. ⚠️ Éviter les offres « réseaux de llms.txt » (SEO gris).
- **Occuper plusieurs positions sur une même SERP** (article + vidéo YouTube + thread Reddit + ad) et le pattern de recherche « mot-clé + reddit » : réel mais coûteux et volatil (Reddit dépondéré récemment). Pas prioritaire pour nos 2 clients ; à garder en tête pour le SaaS quand les fondations seront posées.
- **MCP « GTM Editor »** (piloter Google Tag Manager, plan de taggage complet, couplage Stripe) : pertinent pour fiabiliser le tracking du client SaaS. À évaluer avant d'ajouter un MCP de plus.
- **Analyse de logs serveur** : injecter ~14 jours de logs dans Cuik → vision du trafic par bot LLM (GPT, Claude…). On a déjà le trafic LLM via Cuik dans le process ; les logs bruts sont l'étape au-dessus si on veut le détail.
- **Attribution** : elle attribue à la **première visite** (« qui t'a fait découvrir »). Constat partagé dans l'épisode : les LLM renvoient vers la homepage (pas vers l'article qui a construit l'autorité), donc l'attribution « blog » baisse mécaniquement — prudence dans nos rapports : un blog peut travailler sans que l'attribution le montre.

---

## 4. Bruit écarté (rien d'actionnable pour le process)

Long segment branding maximalisme/mascottes/kawaii et pocket computers (intéressant culturellement, hors périmètre SEO opérationnel) ; actualités modèles et régulation ; anecdotes personnelles ; débat black hat (l'invitée est explicitement white hat et n'a rien livré d'opérationnel) ; growth hacking Reddit payant (~3 000 €/mois, arrêté par les intéressés eux-mêmes).
