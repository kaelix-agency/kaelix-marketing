# Prompt d'exécution — chantier pipeline MDX + contrat de contenu v2

| | |
|---|---|
| **Statut** | 📤 émis le 2026-08-05 — session Claude Code sur le repo du site |
| **Repo cible** | `D:\Users\Axel\KAELIX\transports-ansquer` (github.com/kaelix-agency/transports-ansquer) |
| **Type** | technique (prérequis bloquant de la première publication du plan éditorial — 08/2026) |
| **Créé le** | 2026-08-02 |
| **Références** | `docs/contrat-de-contenu.md` (repo marketing, v2 du 2026-08-01) · `docs/interactions-repos.md` §4 |

> Émettre = coller le prompt ci-dessous dans une session Claude Code ouverte sur le repo du site. La PR résultante est relue et mergée par l'opérateur (gate humain) — jamais par l'agent.

---

## Prompt à émettre

Implémente le **contrat de contenu v2** de l'agence dans ce site Next.js (App Router, SSG strict, `trailingSlash: true`). Objectif : que le site sache publier des articles MDX déposés dans `content/blog/`, avec validation au build, sans rien casser de l'existant (16 pages service, score SEO 9,3/10 — le blog actuel est un registre TS vide dans `src/lib/blog`, à remplacer).

**Contraintes générales, non négociables :**
- 100 % SSG conservé, zéro JavaScript client ajouté (les composants sont des Server Components purs).
- Le design appartient au site : les composants s'implémentent dans le design system existant (Tailwind, tokens/typo actuels), le MDX reste sémantique pur.
- Convention éditoriale du repo : pas de tirets cadratins dans les textes rendus.
- Ne touche à aucune page de service ni au layout global au-delà du strict nécessaire.

### 1. Pipeline MDX avec validation fail-closed

- Installe un pipeline type **Velite** (ou Contentlayer2 si mieux adapté à la config) qui lit `content/blog/*.mdx`.
- **Schéma de frontmatter strict** (Zod) conforme au contrat : `title`, `description`, `slug` (= nom du fichier, kebab-case), `datePublished`, `dateModified`, `author`, `typology` (`actu|guide|evergreen`) **obligatoires** ; `keywords[]`, `cluster`, `image`, `draft` ; `faq[]` (paires `q`/`a`, 3-6) **obligatoire pour les articles** ; champ `geo` **interdit** dans `content/blog/` (réservé à un futur `content/zones/`).
- **Fail-closed partout** : frontmatter invalide → build rouge ; champ inconnu → build rouge (schéma strict) ; slug ≠ nom de fichier → build rouge.
- Migre les routes `src/app/blog/page.tsx` et `src/app/blog/[slug]/page.tsx` vers cette source ; supprime le registre `src/lib/blog` (ou réduis-le à un adaptateur du pipeline).

### 2. Whitelist v2 complète — les composants MDX

Implémente dans `src/components/mdx/` et expose via le mapping MDX **uniquement** :

| Composant | Comportement attendu |
|---|---|
| `<Callout type="info\|astuce\|attention\|retenir">` | encart stylé par type ; `retenir` = résumé de section (2-4 puces). **⚠️ Fail-closed : un `type` inconnu jette une erreur au build (throw), jamais de rendu par défaut silencieux** |
| `<CTA type="devis\|essai\|contact\|newsletter">` | bande d'appel à l'action dans le design du site ; `devis` → `/devis/`, `contact` → `/contact/` ; `label` optionnel |
| `<FAQ />` | rend la section FAQ depuis le frontmatter de l'article courant (pas de duplication de contenu) |
| `<StatGrid stats={[{value, label, source, sourceUrl?}]}>` | grille 2-4 stats ; **la source s'affiche** (texte + lien si `sourceUrl`) ; stats sans `source` → erreur de build |
| `<ExpertQuote author role quote photo?>` | citation attribuée ; la photo se résout depuis le registre auteur du site si connu, la prop est un fallback. NB : ce client n'a **pas de porte-parole autorisé** à ce jour — le composant doit exister (v2 = tout ou rien) mais aucun contenu ne l'utilisera avant autorisation |
| `<Testimonial author source rating? quote>` | avis client avec source affichée obligatoire ; `rating` sur 5 optionnel |
| `<ErrorTip error good>` | paire « L'erreur → Le bon réflexe », deux blocs contrastés |

Tout composant hors whitelist invoqué dans un MDX → build rouge (comportement voulu, ne pas le « tolérer »).

### 3. Layout d'article — les 5 exigences d'affichage

Côté template, jamais dans le contenu :
1. **Sommaire cliquable** généré depuis les H2 (ancres stables, slugifiées).
2. **Temps de lecture** calculé depuis le corps.
3. **Date de dernière mise à jour** visible (`dateModified`).
4. **Bloc auteur sous le H1** — registre auteur du site : pour ce client, l'auteur est l'**organisation** « Transports Ansquer » (pas de signature individuelle tant qu'aucun porte-parole n'est déclaré).
5. **Bloc « articles reliés »** en fin d'article, depuis le champ `cluster` (les articles du même cluster, sinon les plus récents).

Conteneur typographique : étendre la typo existante du site (prose ou équivalent maison) pour que tables/listes/blockquotes Markdown héritent du design sans style dans le contenu.

### 4. JSON-LD généré par le site

Depuis le frontmatter uniquement (le contenu n'écrit jamais de `<script>` schema) :
- `BlogPosting` (headline, description, dates, author = Organization, image, mainEntityOfPage) — aligne-toi sur l'existant (`src/app/blog/[slug]/page.tsx` en a déjà un : conserve/adapte).
- `FAQPage` depuis `faq[]`.
- `BreadcrumbList` Accueil › Blog › article (slash finaux, même convention que les pages service).
- Le `LocalBusiness` global existant ne bouge pas.

### 5. Indexation — bascule noindex → index

Aujourd'hui `/blog/` est en noindex et exclu du sitemap. Mécanique attendue :
- un article `draft: true` n'est **ni généré en page publique, ni dans le sitemap** ;
- tant qu'il n'existe **aucun** article publié (`draft: false`), le hub `/blog/` reste `noindex` et hors sitemap (état actuel) ;
- dès le **premier article publié** : le hub passe `index, follow`, les articles sont `index, follow`, et le sitemap inclut hub + articles automatiquement. Aucune intervention manuelle le jour J.

### 6. Article d'exemple DRAFT + tests de contrat

- Crée `content/blog/exemple-contrat-v2.mdx` avec `draft: true`, exerçant **tous** les composants de la whitelist (données factices explicitement marquées « EXEMPLE ») + FAQ + image de couverture. Il sert de QA visuelle en dev et de test d'intégration permanent ; vérifie qu'il n'apparaît ni en prod, ni dans le sitemap.
- **Tests « build rouge »** (dans la CI existante, type e2e/unit du repo) :
  1. fixture frontmatter invalide (title manquant, typology hors enum) → le build/la validation échoue ;
  2. `<Callout type="warning">` (type inconnu) → échec ;
  3. composant hors whitelist → échec ;
  4. `StatGrid` avec une stat sans `source` → échec.
  Les fixtures vivent hors de `content/` (ex. `tests/fixtures/`) pour ne jamais polluer le contenu réel.

### 7. Livraison

- Branche `feat/contrat-contenu-v2`, commits atomiques, **PR vers `master`** (branche de prod du repo site, alignée sur le déploiement Vercel du 2026-08-01 par fast-forward le 2026-08-05) avec : résumé, capture de l'article d'exemple rendu, résultat des 4 tests build-rouge, et la liste des points de design à valider (rendu des 7 composants).
- `gh pr checks --watch` : tous les checks verts (build, e2e migration WordPress existants inclus — rien ne doit régresser).
- **Ne merge pas** : le merge est le gate humain de l'opérateur.

Critères d'acceptation : `npm run build` vert avec l'article exemple en draft · les 4 tests rouges échouent pour la bonne raison · posture noindex inchangée en prod tant qu'aucun article publié · aucune régression sur les 16 pages existantes (metadata, JSON-LD, sitemap 21 URLs).

---

## Suivi

| Étape | Date | Note |
|---|---|---|
| Brouillon rédigé | 2026-08-02 | calé sur contrat v2 + interactions-repos §4 |
| Émis (session repo site) | 2026-08-05 | cible corrigée `main` → `master` ; master préalablement fast-forwardé sur `refonte-3-poles` (état prod) et poussé |
| PR ouverte | | |
| Mergée / déployée | | passe le fichier en ✅ exécuté + MAJ `client-brief.md` §2 (chemin des articles → `content/blog/`) |
