# Interactions entre le repo marketing et les repos clients

Ce document explique **comment les deux mondes communiquent** : le repo marketing (cerveau, isolé) et les repos des sites clients (contenu publié, un par client). À lire avec `contrat-de-contenu.md` (le standard échangé à la frontière).

## 1. La topologie

```
                    ┌──────────────────────────┐
                    │      REPO MARKETING      │
                    │  (cerveau, isolé, privé) │
                    │  briefs · NAP · tracking │
                    │  commands · skills · MCP │
                    └────────────┬─────────────┘
                                 │ produit des PR de contenu
              ┌──────────────────┼──────────────────┐
              ▼                  ▼                  ▼
      ┌───────────────┐  ┌───────────────┐  ┌───────────────┐
      │ repo site A   │  │ repo site B   │  │ repo site C   │
      │ (SaaS)        │  │ (artisan)     │  │ (…)           │
      │ content/blog/ │  │ content/blog/ │  │               │
      │               │  │ content/zones/│  │               │
      └───────────────┘  └───────────────┘  └───────────────┘
        design du site     design du site     design du site
        rend le MDX        rend le MDX        rend le MDX
```

- **Sens unique** : le repo marketing ÉCRIT vers les repos clients (PR de contenu). Les repos clients ne connaissent pas le repo marketing et n'y écrivent jamais.
- **Isolation** : un client qui récupère son repo obtient son site + son contenu, rien de l'agence (ni briefs, ni stratégie, ni autres clients).
- **Ce qui traverse la frontière** : uniquement des fichiers MDX conformes au contrat de contenu (+ images). Jamais de configuration, de style, ni de connaissance.

## 2. Le flux de publication, pas à pas

1. **Session dans le repo marketing** : `/write <client> <mot-clé>` — Claude lit le brief, rédige le MDX conforme au contrat (frontmatter §3, whitelist §4), passe le fact-check.
2. **Écriture croisée** : Claude Code clone/ouvre le repo du site client (URL et chemin contenu dans le `client-brief.md`), crée la branche `content/<slug>`, dépose `content/blog/<slug>.mdx` (+ images éventuelles dans `public/blog/<slug>/`), commit, ouvre la PR.
   - En pratique : soit les deux repos sont clonés côte à côte sur la machine (`~/dev/marketing-repo`, `~/dev/sites/<client>`), soit Claude Code clone à la volée dans un dossier de travail. Le brief documente le chemin local convenu.
3. **Validation mécanique (repo du site)** : le build du site valide le frontmatter contre son schéma typé. Frontmatter invalide ou composant hors whitelist → build rouge → PR bloquée. Première ligne de défense, automatique.
4. **Gate humain (toi)** : relecture de la PR — fond, voix, points « à confirmer » du fact-check, preview du rendu (le design du site s'applique ici). Merge.
5. **Post-publication** : déploiement du site, vérif sitemap, soumission à l'indexation (Search Console).
6. **Boucle retour dans le repo marketing** : ligne dans `tracking.md` (URL, date, typologie…). La performance reviendra ensuite par les MCP (gsc-fetch.mjs/GSC, Haloscan) — le repo marketing observe les EFFETS sans jamais lire les repos clients.

## 3. Qui doit connaître quoi

| Information | Vit dans | Le repo d'en face la connaît ? |
|---|---|---|
| Stratégie, briefs, NAP, tracking | repo marketing | ❌ jamais |
| Design, composants, templates | repo du site | ❌ le contenu l'ignore (contrat) |
| URL du repo site + chemin contenu + version du contrat | `client-brief.md` | — c'est le lien |
| Contrat de contenu (standard) | `docs/contrat-de-contenu.md` (référence) | ✅ implémenté par chaque site |
| Contenu publié (MDX) | repo du site | ✅ produit par le repo marketing |

## 4. Onboarding d'un site au contrat

Quand un nouveau client arrive (ou qu'un site existant rejoint le standard), côté SITE il faut une fois :

**Socle (toutes versions)**
1. Le pipeline MDX (Velite/Contentlayer ou équivalent) + le **schéma de frontmatter** (validation au build).
2. Le **layout d'article** : conteneur typographique (`prose` ou équivalent) + mapping des éléments (`table`, `img`, `a`, `h2`…).
3. L'implémentation de la **whitelist selon la version déclarée** : **v1** = `<Callout>` (`info|astuce|attention`), `<CTA>`, `<FAQ>` · **v2** = v1 + `<StatGrid>`, `<ExpertQuote>`, `<Testimonial>`, `<ErrorTip>` + `<Callout type="retenir">`. Une version est **tout ou rien** ; tout nouveau site vise **v2**. Dans les deux cas : **échouer au build sur un `type` de Callout inconnu** (fail-closed — sans ça, un article v2 déployé sur un site v1 passerait silencieusement).
4. La **génération JSON-LD** depuis le frontmatter (Article, FAQPage, LocalBusiness si zones, Breadcrumb).
5. Sitemap automatique incluant `content/`.

**Exigences d'affichage de l'article** — côté template, **jamais dans le contenu** (le MDX reste sémantique pur ; ces éléments se déduisent du frontmatter et de la structure) :

| Exigence | Source | Pourquoi |
|---|---|---|
| **Sommaire cliquable** généré depuis les H2 (ancres) | structure de l'article | navigation sur les formats longs ; les ancres deviennent des cibles citables |
| **Temps de lecture** calculé et affiché | corps de l'article | fixe l'attente du lecteur avant qu'il ne rebondisse |
| **Date de dernière mise à jour** visible | `dateModified` | signal de fraîcheur pour le lecteur ET pour les moteurs |
| **Bloc auteur sous le H1** (nom, rôle, photo) | `author` + registre auteur du site | E-E-A-T : un contenu attribué à un humain identifiable ; c'est aussi ce registre qui résout la photo d'`<ExpertQuote>` |
| **Bloc « articles reliés »** en fin | champ `cluster` du frontmatter | matérialise le cluster ; c'est le maillage qui pousse la puissance vers les pages business |

Puis côté REPO MARKETING : renseigner dans le `client-brief.md` l'URL du repo, le chemin contenu, **la version du contrat supportée (v1 ou v2)**, le porte-parole expert et la source d'avis clients. À partir de là, `/write` publie chez ce client sans autre configuration.

## 5. Outillage : git + gh (GitHub CLI)

La publication croisée repose sur deux outils, avec une répartition nette :
- **`git`** : tout le travail de fichiers — clone, branche `content/<slug>`, commit, push.
- **`gh`** : tout ce que git ne sait pas faire — l'interaction avec GitHub : créer la PR (`gh pr create`), vérifier les checks (`gh pr checks`), lister les PR ouvertes. Sans `gh`, il faudrait appeler l'API REST à la main. Pas besoin d'un serveur MCP GitHub pour ce flux : le CLI couvre « écrire du contenu + ouvrir des PR » plus simplement et sans consommer de contexte.

### Prérequis (une fois, sur la machine de l'opérateur)
1. `gh` installé (https://cli.github.com) et authentifié.
2. **Authentification recommandée : fine-grained PAT restreint** plutôt que l'OAuth complet de `gh auth login` :
   - périmètre : UNIQUEMENT les repos des sites clients (pas le repo marketing, pas les autres projets) ;
   - permissions : `Contents: write` + `Pull requests: write`, rien d'autre ;
   - exposé en `GH_TOKEN` dans l'environnement (jamais commité).
   Moindre privilège : un token qui fuite ne donne accès ni au cerveau ni au reste.
3. Multi-comptes/orgs : `gh auth switch` gère plusieurs identités ; un PAT par périmètre est le plus propre.

### La séquence type exécutée par Claude Code (dans /write)
```bash
cd <chemin local convenu du repo du site>        # depuis le client-brief.md
git checkout -b content/<slug>
# … dépôt du fichier content/blog/<slug>.mdx (+ images public/blog/<slug>/) …
git add … && git commit -m "content: <titre court> (<slug>)"
git push -u origin content/<slug>
gh pr create --title "Contenu : <titre>" --body "<résumé + rapport fact-check + checklist post-publication>"
gh pr checks --watch    # la validation du frontmatter (build) doit passer
```
La PR n'est **jamais mergée par Claude Code** : le merge est le gate humain. Le corps de la PR inclut le mini-rapport fact-check et les points « à confirmer » pour faciliter la relecture.

### Si un client n'est pas sur GitHub
Le contrat de contenu ne change pas — seul l'outil de PR change : GitLab → `glab` (`glab mr create`), Gitea → `tea`. Noter la forge et l'outil dans le `client-brief.md` du client (champ « Forge »).

### Pourquoi pas un push direct sur la branche principale ?
Techniquement plus simple, mais la PR **est** le gate : elle porte la validation mécanique (build/schéma de frontmatter) ET la relecture humaine avant merge. Pousser en direct supprimerait ces deux garde-fous — interdit.

## 6. Cas particuliers et règles de conflit

- **Site hérité** (structure différente, pas de MDX) : le brief documente l'écart ; la publication peut être manuelle (copier le contenu rendu) le temps de la migration au standard. Le contrat reste l'objectif.
- **Un composant manque sur un site** (article utilisant `<Quiz>` non implémenté) : comportement voulu = build rouge. Solutions : retirer le composant de l'article, ou l'implémenter côté site et incrémenter sa version de contrat dans le brief.
- **Jamais de style dans le contenu** même « pour dépanner » : un besoin d'apparence = une évolution du template du site ou de la whitelist, pas un hack dans l'article.
- **Le repo marketing ne lit pas les repos clients** pour son intelligence : la performance vient des MCP (GSC via gsc-fetch.mjs, Haloscan), pas du code des sites. Seule exception : lister les contenus existants (`content/`) pour le maillage interne et l'anti-cannibalisation au moment de produire.
