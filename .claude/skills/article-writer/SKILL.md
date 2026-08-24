---
name: article-writer
description: Contrat qualité pour rédiger un article ou une page SEO (méthodologie phases 1-2). À utiliser pour toute production de contenu long destiné au site d'un client.
---
# Article Writer — contrat de rédaction SEO/GEO

Objectif : produire un contenu qui ranke sur Google ET qui est citable par les moteurs IA. Ce contrat est non négociable ; si une exigence ne peut pas être remplie, le signaler au lieu de dégrader.

## Pourquoi ces règles
Chaque règle ci-dessous répond à un risque documenté : le contenu générique sans apport propre est activement pénalisé par Google (scaled content abuse) et ignoré par les IA ; le contenu non structuré n'est ni extrait en snippet ni cité par les LLM ; le contenu qui ne capture rien produit du trafic sans business (« des touristes »). La qualité prime la quantité — la vraie limite de production n'est pas la capacité de génération mais la capacité de RELECTURE humaine.

## Pré-requis (refuser d'écrire sans)
- Le `client-brief.md` du client est lu (voix, cibles, objectif).
- Un angle avec **information gain** est identifié : au moins un élément first-party (chiffre interne, cas concret, retour terrain, prise de position) doit figurer dans l'article. Sinon → demander l'élément, ne pas produire de générique. *Pourquoi : c'est ce qui rend le contenu non réplicable par un concurrent équipé du même LLM — et c'est le premier critère de citation par les IA.*
- L'intention et le format cible sont connus (issus de la SERP réelle — pas d'article court là où les leaders publient des guides profonds).
- Pas de cannibalisation avec une page existante.

## Structure imposée
1. **H1 unique** portant l'angle (≠ title tag mot pour mot).
2. **Intro réponse-directe** : les ~100 premiers mots répondent à l'intention. *Pourquoi : c'est ce que Google extrait en featured snippet et ce que les moteurs IA citent en priorité.*
3. **H2/H3** couvrant les sous-intentions et les questions PAA ; chaque section auto-suffisante (compréhensible isolément). *Pourquoi : les IA extraient des passages, pas des pages ; un passage dépendant de son contexte est inutilisable.*
4. **FAQ finale** : 3 à 6 Q/R concises (alimente le schema FAQPage).
5. **Mécanisme de capture** : chaque contenu doit capturer quelque chose — email, essai gratuit, demande de devis, mini-outil ou quiz redirigeant vers l'offre. Un simple CTA texte est le minimum ; un mécanisme interactif est mieux. *Pourquoi : un contenu qui ne capture rien fabrique du trafic, pas du business ; et les éléments interactifs augmentent le temps sur page, signal positif de comportement utilisateur.*
6. **CTA** aligné sur l'objectif du brief.

## Méta & on-page
- Title ~50-60 caractères, mot-clé en tête, incitatif au clic.
- Meta description ~150-160 caractères, promesse de valeur.
- Slug court, descriptif, stable.
- Maillage interne : 2-5 liens vers pages existantes du site, ancres descriptives (jamais « cliquez ici »). *Pourquoi : sur un SaaS, le blog existe notamment pour pousser de la puissance vers les pages business.*
- 1-3 liens externes vers sources autoritaires.
- Entités nommées et champ sémantique couverts naturellement ; interdiction du keyword stuffing.
- E-E-A-T : auteur, sources, dates ; prudence accrue si le brief marque le client YMYL.
- Frontmatter complet : title, description, slug, datePublished, dateModified, auteur, mots-clés, **typologie (actu / guide / evergreen)** — elle pilote le re-check bimestriel de l'article (une actu se met à jour, un guide se complète, un evergreen se surveille).

## Variation anti-uniformité
- Adapter format et longueur à la SERP (guide / comparatif / liste / FAQ) — ne pas produire des contenus de structure et de longueur identiques en série. *Pourquoi : l'uniformité de structure sur des dizaines de pages est un signal détectable de production automatisée massive.*

## Densité et incarnation (benchmark 2026)

Un article qui ranke aujourd'hui n'est pas un mur de prose : il est **dense en éléments riches** et **incarné** par des humains identifiables. Ces règles viennent d'un benchmark de contenus de référence (2026-08-01, `docs/rationnel-des-choix.md` §1.12).

- **≥1 élément riche par grande section** : `StatGrid`, tableau comparatif titré, `Callout type="retenir"`, `ErrorTip`… **Un article de 2000+ mots sans aucun élément visuel est refusé.** Un pavé de texte n'est ni scanné par le lecteur ni extrait par les moteurs.
- **≥1 `ExpertQuote` par article** dès que le brief définit un porte-parole. ⛔ Règle de véracité : soit la citation vient du first-party du brief, soit elle est **rédigée comme proposition, signalée comme telle dans la PR et validée par le client avant merge**. Jamais présentée comme une citation acquise.
- **1-2 `Testimonial` aux moments de décision du lecteur**, uniquement si le brief référence une source d'avis réels. Avis authentique et sourcé — jamais généré, jamais reformulé au point de trahir l'original.
- **Stats first-party mises en scène** en `StatGrid`, pas noyées en prose. Un chiffre interne est l'actif le moins réplicable du client : il mérite d'être vu.
- **Prise de position assumée** : quand le sujet s'y prête, l'article défend un avis d'expert argumenté — l'opinion EST un information gain, le consensus recopié n'en est pas un. La position doit être défendable par le client ; à défaut, la signaler au gate plutôt que l'édulcorer.
- **Tableaux comparatifs toujours titrés** : un H3 descriptif au-dessus de la table Markdown (pas une table orpheline au fil du texte). Le H3 est ce qui rend le tableau trouvable et citable.
- **`Callout type="retenir"` en fin de chaque grande section** (recommandé) : 2-4 puces auto-suffisantes. C'est le format que les moteurs IA extraient le plus volontiers.

## Rythme visuel et vie du texte

Règles issues du retour de gate opérateur du 2026-08-20 sur le premier article (`docs/rationnel-des-choix.md`) : la structure d'extraction (réponse directe, passages auto-suffisants, H2 descriptifs, composants) rend l'article **citable** ; ces règles le rendent **lisible par un humain**. La vivacité s'ajoute à la structure d'extraction, elle ne la remplace jamais.

- **≥1 visuel figuratif par ~800 mots**, en plus des composants (qui sont des blocs de mise en forme, pas des images). **Un article de 2000+ mots sans aucune image est refusé.** Syntaxe : Markdown pur `![alt](src "légende")`, image seule sur sa ligne, fichiers dans `public/blog/<slug>/` — le rendu (figure, légende) est l'affaire du site.
- **Hiérarchie des visuels** : (1) **schéma first-party** (un processus réel du client mis en image : circuit, flux, organisation — c'est de l'information gain visuel) > (2) **graphique conceptuel** (seuils, frises, comparaisons de principe — **jamais de données inventées** : un axe sans chiffre sourcé reste un axe sans chiffre) > (3) **photo** (cover ou ambiance, selon la politique du brief client §3). Un schéma affirme des faits : il passe au fact-check comme le texte.
- **Variation des longueurs de paragraphes** : alterner paragraphes développés et phrases isolées très courtes. Un mur de paragraphes de 4 lignes se scanne mal, même bien structuré.
- **Adresse directe au lecteur** : questions franches (« À partir de quand, concrètement ? »), interpellations (« Et vous, dans tout ça ? ») — au moins quelques-unes par article, jamais en ouverture de l'intro réponse-directe.
- **Micro-scènes concrètes** : faire vivre une situation réelle (« Suivez le fourgon : ») plutôt qu'énoncer un principe abstrait — uniquement à partir du first-party ou de faits établis, jamais de fiction chiffrée.
- **⛔ QA visuelle obligatoire** : tout visuel produit (SVG en tête) est **rendu en image et regardé** avant remise — débordements de texte hors cadre, chevauchements d'étiquettes, lisibilité aux dimensions réelles de la page. Un visuel jamais vu n'est pas livrable ; les métriques calculées ne remplacent pas un œil. *(Leçon du 2026-08-24 : bulle d'annotation débordante détectée par l'opérateur en preview, pas par la chaîne de contrôle.)*
- **Le rendu animé/large est l'affaire du site, pas du contenu** : le template affiche les figures plus larges que la mesure de texte et les anime sobrement au scroll (système de révélation du site, `prefers-reduced-motion` respecté). Le contenu reste du Markdown pur — ne jamais compenser un template statique par du style dans le contenu.

**⚠️ Version du contrat d'abord.** Ces composants n'existent qu'en **v2**. Vérifier dans le `client-brief.md` la version supportée par le site AVANT de rédiger. **Sur un site v1, les composants v2 sont indisponibles** — on compense en Markdown pur : blockquote attribuée pour la citation, liste à puces pour le « à retenir », table titrée pour le comparatif. Les règles de densité et de véracité s'appliquent identiquement ; seul le véhicule change. **Ne jamais utiliser un composant non supporté**, même « en attendant » : le build du site casse, et c'est le comportement voulu.

## Pages business SaaS (comparaison, alternatives, fonctionnalités, témoignages)
Quand le contenu est une page business (pas un article) : écrire pour que l'utilisateur **vive sa douleur en temps réel** dans le texte, puis présenter la solution. Comparaisons « marque vs X » : justes et factuelles, sans dénigrer — on aide à choisir. Pages témoignages : capter ce trafic de marque plutôt que le laisser aux plateformes d'avis.

## Format de sortie — contrat de contenu (docs/contrat-de-contenu.md)
Le livrable est un fichier **MDX sémantique pur** conforme au contrat :
- **Frontmatter complet et valide** (schéma §3 du contrat) : title, description, slug, dates, author, typology, keywords, cluster, faq (3-6 paires), geo (pages locales uniquement, depuis nap.md). Le site le valide au build : un frontmatter invalide = PR rouge.
- **Aucun style dans le corps** : pas de classes CSS, de `<div>`, de HTML de mise en page, de couleurs. Le design appartient au site (conteneur typographique + mapping de composants). Une table s'écrit en syntaxe Markdown `|---|` ; elle héritera automatiquement du design du site.
- **Composants : la whitelist de la version supportée par le site**, jamais plus (contrat §4). **v1** : `<Callout type="info|astuce|attention">`, `<CTA type>` (le mécanisme de capture obligatoire passe par lui), `<FAQ />`. **v2** : v1 + `<StatGrid>`, `<ExpertQuote>`, `<Testimonial>`, `<ErrorTip>` + `<Callout type="retenir">`. Une version est tout ou rien : un site est v1 tant qu'il n'a pas implémenté l'intégralité de la v2. **Vérifier la version dans le `client-brief.md` §2 AVANT de rédiger** — tout composant hors version casse le build du site (comportement voulu).
- **Images** : `public/blog/<slug>/`, WebP/AVIF, alt descriptif obligatoire.
- **Emplacement** : `content/blog/<slug>.mdx` (articles) ou `content/zones/<slug>.mdx` (pages locales), branche `content/<slug>`, PR — jamais de push direct.

## Après rédaction
Passer obligatoirement le skill `fact-check` avant toute remise en relecture.

## Interdits
- Coordonnées/NAP inventés (clients locaux : uniquement `nap.md`).
- Statistiques sans source, citations inventées (le fact-check les retirera de toute façon).
- Contenu qui reconditionne le consensus sans apport propre.
