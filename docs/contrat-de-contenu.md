# Contrat de contenu — la frontière entre le repo marketing et les sites clients

> **Version courante du contrat : v2** (2026-08-01). Chaque site déclare la version qu'il supporte dans son `client-brief.md` — un article ne peut utiliser que les composants de la version supportée par SON site. Voir §4.

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
image:               # image de couverture, optionnelle — objet {src, alt}
  src: ""            #   chemin public/ absolu
  alt: ""            #   texte alternatif OBLIGATOIRE si image présente (contrat d'accessibilité)
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
- `image` : objet `{src, alt}` — une image sans texte alternatif ne passe pas la validation (évolution du 2026-08-05, issue de l'implémentation transports-ansquer ; voir `rationnel-des-choix.md`).
- `faq` : obligatoire pour les articles et pages locales (c'est le format d'extraction des moteurs IA).
- `geo` : obligatoire pour `content/zones/`, interdit ailleurs. Les valeurs proviennent exclusivement du `nap.md` du client.
- Le site génère le JSON-LD (Article/BlogPosting, FAQPage, LocalBusiness/Service, BreadcrumbList) **à partir du frontmatter** — le contenu n'écrit jamais de `<script>` schema à la main.

## 4. Whitelist de composants — versions du contrat

Le corps de l'article ne peut invoquer QUE les composants de la whitelist, **dans la version supportée par le site cible**. Chaque template les implémente dans son design ; l'article les invoque sans connaître leur apparence.

### 4.1 Versions

| Version | Composants | Date |
|---|---|---|
| **v1** | `<Callout type="info\|astuce\|attention">`, `<CTA>`, `<FAQ />` | contrat initial |
| **v2** | v1 **+** `<StatGrid>`, `<ExpertQuote>`, `<Testimonial>`, `<ErrorTip>` **+** `type="retenir"` sur `<Callout>` | 2026-08-01 |

**Règles de version** :
- La version supportée est déclarée dans le `client-brief.md` de chaque client (§2 Repo du site). **C'est elle qui fait foi**, pas la version courante du contrat.
- **Une version est tout ou rien** : un site est `v1` tant qu'il n'a pas implémenté **l'intégralité** de la v2. Pas de v1.5, pas de « v2 sauf Testimonial » — sinon « la version supportée » ne veut plus rien dire et le rédacteur ne sait plus sur quoi compter.
- **Tout nouveau site onboardé vise v2 directement.** Les sites existants basculent quand leur template a implémenté les 5 ajouts.
- Sur un site v1, les composants v2 sont **indisponibles** : on compense en Markdown pur (blockquote pour une citation, liste pour un « à retenir », table pour un comparatif). On n'utilise jamais un composant non supporté « en attendant ».

### 4.2 Composants v1

| Composant | Usage | Props |
|---|---|---|
| `<Callout type="info\|astuce\|attention">` | encart d'information, avertissement, conseil | `type`, children (Markdown) |
| `<CTA type="devis\|essai\|contact\|newsletter">` | mécanisme de capture (obligatoire : ≥1 par contenu) | `type`, `label?` |
| `<FAQ />` | rend la section FAQ depuis le frontmatter | aucune |

⚠️ **Disponibilité des types de CTA** (règle du 2026-08-05) : les 4 types appartiennent au contrat, mais un type sans parcours réellement câblé sur le site cible (pas de page d'essai, pas de newsletter…) est une **erreur de build**, jamais un bouton mort ni un lien de repli silencieux. Le fail-closed couvre les parcours, pas seulement la syntaxe. Le rédacteur vérifie les types disponibles dans le `client-brief.md` §2 du client avant d'employer un CTA.

### 4.3 Composants v2

#### `<Callout type="retenir">` — extension de la v1

Résumé de section. **2 à 4 puces maximum**, chacune auto-suffisante. Recommandé en fin de chaque grande section : c'est un format d'extraction privilégié par les moteurs IA, qui citent des passages, pas des pages.

⚠️ **Fail-closed obligatoire.** `retenir` est le seul ajout v2 qui n'est pas un nouveau composant mais une **nouvelle valeur de prop** — un site v1 ne fera donc pas naturellement échouer le build en le rencontrant. **Tout template, v1 comme v2, doit traiter un `type` de Callout inconnu comme une erreur de build**, jamais comme un rendu par défaut silencieux. Tant qu'un template ne l'implémente pas, ce contrôle retombe entièrement sur le fact-check et le gate humain — le signaler dans la PR.

#### `<StatGrid stats={[{value, label, source, sourceUrl}]}>`

Grille de **2 à 4 statistiques**. Met en scène des chiffres qui, noyés en prose, ne seraient ni vus ni extraits.

- **Chaque stat porte sa source et son lien.** Aucune exception : une stat sans source ne passe pas le fact-check et ne doit pas être écrite (invariant 7 de `CLAUDE.md`).
- Les données first-party du client se citent `source: "donnée interne <client>, <année>"` — `sourceUrl` peut alors être omis, mais la donnée doit être tracée au `client-brief.md` §7.
- Seule prop du contrat exigeant une expression JS. C'est assumé : aplatir ces stats en enfants Markdown détruirait la structure qui rend `source` contrôlable automatiquement.

#### `<ExpertQuote author role quote photo? >`

Citation du **porte-parole expert du client**, déclaré dans son `client-brief.md` §3. C'est un levier E-E-A-T direct : une opinion attribuée à un humain identifiable vaut mieux qu'une affirmation anonyme.

- ⛔ **RÈGLE DE VÉRACITÉ — NON NÉGOCIABLE.** Une ExpertQuote n'est **jamais inventée**. Deux origines légitimes, aucune autre :
  1. **reprise du first-party** du brief (verbatim, entretien, prise de position déjà exprimée) — tracer la source dans la PR ;
  2. **rédigée comme PROPOSITION**, explicitement signalée comme telle dans le corps de la PR et **validée par le client avant merge**. Le gate humain porte cette validation.
- Une proposition non validée ne se merge pas. Elle ne se présente jamais comme une citation acquise — ni dans l'article, ni dans la PR, ni dans un rapport.
- `photo` est **optionnelle** et la source canonique reste le **registre auteur du site** : si le template connaît déjà le porte-parole, il résout la photo lui-même et ignore la prop. Le contenu transporte l'identité (`author`, `role`), pas un fichier.

#### `<Testimonial author source rating? quote>`

Avis client **réel**, aux moments de décision du lecteur.

- ⛔ **Avis réel uniquement**, copié depuis une source vérifiable (fiche Google, plateforme d'avis) référencée dans le `client-brief.md`. `source` est **obligatoire**.
- **Jamais généré. Jamais reformulé au point de trahir l'original** — on peut couper (avec `…`), jamais réécrire le propos.
- `rating` optionnel (note sur 5) — uniquement si la source en porte une.

#### `<ErrorTip error good>`

Paire « **L'erreur** → **Le bon réflexe** ». Format idéal pour le vécu terrain (artisan, praticien) : c'est de l'**information gain** au sens strict — une erreur observée sur des chantiers réels n'est pas réplicable par un concurrent équipé du même LLM.

- `error` : ce que font les gens · `good` : ce qu'il faut faire. Les deux courts et concrets.
- Doit venir d'un first-party du brief, pas d'une erreur générique déduite du sujet.

### 4.4 Tout le reste

**Markdown pur** (tables en syntaxe `|---|`, listes, blockquotes, code). Les composants transportent du **sens structuré**, jamais de l'apparence — si un besoin ressemble à de la mise en forme, il relève du template, pas de la whitelist.

### 4.5 Évolution du contrat

Ajouter un composant = (1) l'implémenter dans **TOUS** les templates de sites actifs, (2) l'ajouter ici avec sa version, (3) mettre à jour la skill `article-writer`, (4) mettre à jour la checklist `fact-check` si le composant porte des affirmations vérifiables. Un article qui utilise un composant hors whitelist casse le build du site — c'est le comportement voulu.

Le coût est délibéré : chaque composant ajouté est une **obligation d'implémentation pour tous les sites**. On n'étend le contrat que sur un besoin récurrent et démontré, jamais sur une envie ponctuelle.

## 5. Images

- Chemin : `public/blog/<slug>/nom-descriptif.webp` (WebP/AVIF privilégiés).
- `alt` obligatoire et descriptif (accessibilité + SEO + contexte IA).
- Le rendu (`next/image`, lazy-loading, dimensions) est l'affaire du site via le mapping `img` — le contenu ne s'en occupe pas.
- **Attentes de rendu côté site** (standard posé aux retours de gate des 2026-08-20/24, premier article) : le texte garde une **mesure de lecture** (~65-75 caractères — la « pleine largeur » du texte dégrade la lisibilité et se refuse), en **colonne centrée** (pas de colonne collée à gauche avec un vide latéral) ; les **figures, tables et grilles de chiffres débordent symétriquement de la colonne** (hiérarchie visuelle), les figures avec légende ; la **FAQ est dépliable** (`details/summary` natif : accessible, sans JavaScript, contenu replié indexable — le JSON-LD FAQPage reste inchangé) ; le site **anime sobrement** (révélation au scroll, cascade sur les grilles de chiffres, `prefers-reduced-motion` toujours respecté, contenu visible sans JavaScript). Tout site qui implémente le contrat implémente ces attentes.

## 6. Responsabilités de part et d'autre de la frontière

| | Repo marketing (ce repo) | Repo du site client |
|---|---|---|
| Produit | MDX sémantique + frontmatter valide | rendu HTML, design, performance |
| Tables, titres, listes | syntaxe Markdown | styles typographiques (prose) + mapping composants |
| Blocs riches | invoque la whitelist **de la version supportée par le site** | implémente la whitelist **de sa version déclarée** (v1 ou v2) dans son design system |
| Composants v2 (`StatGrid`, `ExpertQuote`, `Testimonial`, `ErrorTip`, `Callout type="retenir"`) | fournit les données structurées (valeurs, sources, auteurs) | rend la grille, la citation, l'avis, la paire erreur/réflexe ; résout la photo du porte-parole depuis son registre auteur ; **échoue au build sur un `type` de Callout inconnu** |
| Affichage de l'article (sommaire, temps de lecture, date de MàJ, bloc auteur, articles reliés) | — (fournit `dateModified`, `cluster`, `author` au frontmatter) | génère et affiche (cf. `interactions-repos.md` §4) |
| Schema JSON-LD | fournit les données (frontmatter) | génère et injecte les scripts |
| Validation | fact-check + gate humain | schéma de frontmatter (build) + CI |
| Core Web Vitals, sitemap, OG, canonical | — (hors périmètre) | template Next.js |
| Publication | branche + PR | merge (gate), déploiement, indexation |
