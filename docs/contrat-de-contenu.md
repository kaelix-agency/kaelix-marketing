# Contrat de contenu — la frontière entre le repo marketing et les sites clients

Ce document définit le **standard unique** que tout contenu produit par ce repo respecte, et que tout site client implémente. C'est le contrat qui permet à un même article MDX d'être publié sur n'importe quel site de l'agence en héritant automatiquement de SON design.

## 1. Le principe : contenu sémantique pur, design côté site

**Le repo marketing publie du sens ; le site client possède 100 % de l'apparence.**

- Un article est un fichier **MDX** : Markdown sémantique (titres, paragraphes, tables, listes) + frontmatter YAML + composants de la whitelist (§4). 
- Il ne contient **jamais** : classes CSS, `<div>`, styles inline, couleurs, tailles de police, HTML de mise en page.
- Le design s'applique dans le **pipeline du site** à deux niveaux :
  1. **Styles typographiques globaux** : le layout d'article du site enveloppe le corps dans un conteneur stylé (ex. classes `prose` de @tailwindcss/typography, ou CSS maison). Tout élément HTML issu du Markdown en hérite — c'est ainsi qu'une table Markdown reçoit bordures, zébrage et padding du site sans qu'on lui applique quoi que ce soit.
  2. **Mapping de composants MDX** : le renderer du site peut mapper chaque élément vers un composant de son design system (`table` → `<StyledTable>`, `a` → `<SmartLink>`, `img` → `next/image`). Le contenu reste ignorant du design ; le design reste propriétaire du site.

**Conséquence** : le même fichier rendu sur deux sites a deux apparences — c'est voulu. Ne JAMAIS « corriger » l'apparence depuis le contenu.

## 2. Règle d'architecture des repos clients

| Élément | Convention |
|---|---|
| Articles de blog | `content/blog/<slug>.mdx` |
| Pages locales (service×ville) | `content/zones/<slug>.mdx` |
| Images d'un contenu | `public/blog/<slug>/` (ou `public/zones/<slug>/`) |
| Slug | kebab-case, court, stable (= slug du frontmatter = nom du fichier) |
| Branche de publication | `content/<slug>` → PR vers la branche par défaut |

Le chemin exact du dossier contenu de chaque client est confirmé dans son `client-brief.md` (section Identité). En cas d'écart avec le standard (site hérité), le brief fait foi.

## 3. Frontmatter — schéma contractuel

Chaque fichier MDX commence par ce frontmatter. Côté site, il est **validé par un schéma typé** (Zod via Velite/Contentlayer ou équivalent) : un frontmatter invalide fait échouer le build → la PR est rouge → le gate devient en partie mécanique.

```yaml
---
title: ""            # ~50-60 caractères, mot-clé en tête
description: ""      # ~150-160 caractères (meta description)
slug: ""             # kebab-case, = nom du fichier
datePublished: 2026-01-01
dateModified: 2026-01-01
author: ""           # nom de l'auteur affiché (E-E-A-T)
typology: guide      # actu | guide | evergreen — pilote le re-check bimestriel
keywords: []         # mot-clé principal en premier
cluster: ""          # pillar de rattachement (cohérence maillage)
image: ""            # image de couverture (chemin public/), optionnel
faq:                 # 3-6 paires — rend la section FAQ ET génère le JSON-LD FAQPage
  - q: ""
    a: ""
geo:                 # UNIQUEMENT pages locales — valeurs issues de nap.md
  areaServed: ""     # ville/zone
  serviceType: ""    # service rendu
draft: false
---
```

Règles :
- `title`/`description`/`slug`/`dates`/`author`/`typology` : **obligatoires**.
- `faq` : obligatoire pour les articles et pages locales (c'est le format d'extraction des moteurs IA).
- `geo` : obligatoire pour `content/zones/`, interdit ailleurs. Les valeurs proviennent exclusivement du `nap.md` du client.
- Le site génère le JSON-LD (Article/BlogPosting, FAQPage, LocalBusiness/Service, BreadcrumbList) **à partir du frontmatter** — le contenu n'écrit jamais de `<script>` schema à la main.

## 4. Whitelist de composants (contrat v1)

Le corps de l'article ne peut invoquer QUE ces composants. Chaque template de site les implémente dans son design ; l'article les invoque sans connaître leur apparence.

| Composant | Usage | Props |
|---|---|---|
| `<Callout type="info\|astuce\|attention">` | encart « à retenir », avertissement, conseil | `type`, children (Markdown) |
| `<CTA type="devis\|essai\|contact\|newsletter">` | mécanisme de capture (obligatoire : ≥1 par contenu) | `type`, `label?` |
| `<FAQ />` | rend la section FAQ depuis le frontmatter | aucune |

Tout le reste : **Markdown pur** (tables en syntaxe `|---|`, listes, blockquotes, code). 

Évolution du contrat : ajouter un composant = (1) l'implémenter dans TOUS les templates de sites actifs, (2) l'ajouter ici avec sa version, (3) mettre à jour la skill `article-writer`. Un article qui utilise un composant hors whitelist casse le build du site — c'est le comportement voulu. Version du contrat supportée par chaque client : notée dans son `client-brief.md`.

## 5. Images

- Chemin : `public/blog/<slug>/nom-descriptif.webp` (WebP/AVIF privilégiés).
- `alt` obligatoire et descriptif (accessibilité + SEO + contexte IA).
- Le rendu (`next/image`, lazy-loading, dimensions) est l'affaire du site via le mapping `img` — le contenu ne s'en occupe pas.

## 6. Responsabilités de part et d'autre de la frontière

| | Repo marketing (ce repo) | Repo du site client |
|---|---|---|
| Produit | MDX sémantique + frontmatter valide | rendu HTML, design, performance |
| Tables, titres, listes | syntaxe Markdown | styles typographiques (prose) + mapping composants |
| Blocs riches | invoque la whitelist | implémente la whitelist dans son design system |
| Schema JSON-LD | fournit les données (frontmatter) | génère et injecte les scripts |
| Validation | fact-check + gate humain | schéma de frontmatter (build) + CI |
| Core Web Vitals, sitemap, OG, canonical | — (hors périmètre) | template Next.js |
| Publication | branche + PR | merge (gate), déploiement, indexation |
