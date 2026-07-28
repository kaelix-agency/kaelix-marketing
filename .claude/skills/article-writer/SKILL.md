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

## Pages business SaaS (comparaison, alternatives, fonctionnalités, témoignages)
Quand le contenu est une page business (pas un article) : écrire pour que l'utilisateur **vive sa douleur en temps réel** dans le texte, puis présenter la solution. Comparaisons « marque vs X » : justes et factuelles, sans dénigrer — on aide à choisir. Pages témoignages : capter ce trafic de marque plutôt que le laisser aux plateformes d'avis.

## Format de sortie — contrat de contenu (docs/contrat-de-contenu.md)
Le livrable est un fichier **MDX sémantique pur** conforme au contrat :
- **Frontmatter complet et valide** (schéma §3 du contrat) : title, description, slug, dates, author, typology, keywords, cluster, faq (3-6 paires), geo (pages locales uniquement, depuis nap.md). Le site le valide au build : un frontmatter invalide = PR rouge.
- **Aucun style dans le corps** : pas de classes CSS, de `<div>`, de HTML de mise en page, de couleurs. Le design appartient au site (conteneur typographique + mapping de composants). Une table s'écrit en syntaxe Markdown `|---|` ; elle héritera automatiquement du design du site.
- **Composants : whitelist v1 uniquement** — `<Callout type>`, `<CTA type>` (le mécanisme de capture obligatoire passe par lui), `<FAQ />`. Tout autre composant casse le build du site (comportement voulu). Vérifier dans le client-brief.md la version du contrat supportée par le site.
- **Images** : `public/blog/<slug>/`, WebP/AVIF, alt descriptif obligatoire.
- **Emplacement** : `content/blog/<slug>.mdx` (articles) ou `content/zones/<slug>.mdx` (pages locales), branche `content/<slug>`, PR — jamais de push direct.

## Après rédaction
Passer obligatoirement le skill `fact-check` avant toute remise en relecture.

## Interdits
- Coordonnées/NAP inventés (clients locaux : uniquement `nap.md`).
- Statistiques sans source, citations inventées (le fact-check les retirera de toute façon).
- Contenu qui reconditionne le consensus sans apport propre.
