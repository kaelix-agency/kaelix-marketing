# Brief client — <NOM DU CLIENT>

<!--
GABARIT — copié par /onboard-client vers clients/<slug>/client-brief.md
Ce fichier est l'actif le plus important du repo : il donne la voix, les cibles, le ciblage
et les données first-party à TOUTES les productions. Toute session commence par le lire.
Règle : ce brief POINTE vers icp.md et personas.md, il ne duplique jamais leur contenu.
Supprimer les commentaires <!-- --> au fur et à mesure du remplissage.
-->

| | |
|---|---|
| **Slug** | `<slug>` |
| **Créé le** | AAAA-MM-JJ |
| **Dernière mise à jour** | AAAA-MM-JJ |

---

## 1. Identité

<!-- Le socle. Sans le type et le statut PMF, aucune routine ne sait quoi faire. -->

- **Activité** : <!-- ce que fait le client, en une phrase compréhensible par un non-initié -->
- **Offre** : <!-- ce qu'il vend concrètement, avec les prix/paliers si connus -->
- **Type** : `saas` | `local` | `ecommerce` <!-- pilote l'architecture de contenu (§6) et les routines applicables -->
- **Statut product-market fit** : `pré-PMF` | `PMF validé`
  <!-- ⛔ Garde-fou : pas de mission SEO sans PMF. Pré-PMF → d'abord vendre, ensuite se référencer.
       Si pré-PMF, le signaler et proposer une mission adaptée (docs/rationnel-des-choix.md §3). -->
- **Canaux actifs** : <!-- SEO, GBP, LinkedIn, ads, outbound, newsletter… uniquement ceux réellement opérés -->
- **Concurrents** : <!-- concurrents BUSINESS ; les concurrents SERP se découvrent dans /research -->
- **Contact opérationnel** : <!-- qui répond quand il faut un chiffre interne ou un retour terrain -->
- **YMYL** : oui / non <!-- santé, finance, droit → prudence E-E-A-T accrue, fact-check renforcé -->

## 2. Repo du site

<!-- C'est le lien qui permet à /write de publier. Renseigné à l'onboarding du site au contrat
     (docs/interactions-repos.md §4). Sans ces champs, /write ne peut pas ouvrir de PR. -->

| Champ | Valeur |
|---|---|
| URL du repo | <!-- ex. https://github.com/org/site-client --> |
| Forge | `github` (`gh`) / `gitlab` (`glab`) / `gitea` (`tea`) |
| Chemin local convenu | <!-- ex. ~/dev/sites/<slug> — où Claude Code trouve le clone --> |
| Chemin des articles | `content/blog/` <!-- écart à documenter ici si site hérité --> |
| Chemin des pages locales | `content/zones/` <!-- clients locaux uniquement --> |
| Version du contrat de contenu supportée | `v1` <!-- whitelist Callout/CTA/FAQ — cf. docs/contrat-de-contenu.md §4 -->|
| Branche par défaut | `main` |
| Rendu | `SSG` / `SSR` / ⚠️ `CSR` <!-- les IA lisent mal le rendu JS client — vérifié à la baseline Cuik --> |

## 3. Marque & voix

<!-- Ce qui fait qu'un contenu « sonne » comme le client. Être concret : des exemples valent
     mieux que des adjectifs. Ces règles s'appliquent aussi aux posts GBP et réponses aux avis. -->

- **Ton** : <!-- ex. direct, sans jargon, tutoiement / vouvoiement -->
- **Vocabulaire maison** : <!-- les mots que le client emploie pour son métier, ses produits, ses clients -->
- **Interdits** : <!-- mots bannis, promesses à ne jamais faire, sujets sensibles, concurrents à ne pas citer -->
- **Auteur affiché** (frontmatter `author`, E-E-A-T) : <!-- nom + fonction -->
- **Exemples de référence** : <!-- 1-2 contenus existants qui incarnent bien la voix -->

## 4. Cibles

<!-- ⚠️ NE RIEN DUPLIQUER ICI. Source de vérité unique dans les fichiers dédiés, produits par
     les skills `icp` et `personas`. Ce bloc ne contient que les renvois et le statut. -->

| | Fichier | Statut |
|---|---|---|
| **ICP** (profil d'ENTREPRISE cible) | [`icp.md`](./icp.md) | `hypothèse` / `validé` — le _/_/_ |
| **Personas** (les PERSONNES dedans) | [`personas.md`](./personas.md) | `hypothèse` / `validé` — le _/_/_ |

- **Rappel d'application** : l'ICP décide **quels mots-clés valent la peine** ; les personas décident **à qui parle chaque contenu**. Invariant : *un contenu = un persona*, déclaré avant production et noté dans `tracking.md` (colonne Persona).

## 5. Ciblage SEO — méthode en 3 étapes

<!-- Rempli par /onboard-client. L'ordre A → B → C est impératif (docs/rationnel-des-choix.md §3).
     C'est ce bloc que /content-plan lit pour construire les clusters : s'il est vide, /content-plan STOP. -->

### Étape A — Mots-clés qui rapportent du trafic aux concurrents
<!-- Le gisement d'idées déjà validées par le marché (Haloscan MCP). -->

| Concurrent | Mot-clé | Volume | Difficulté | Position du concurrent | Intérêt pour nous |
|---|---|---|---|---|---|
| | | | | | |

### Étape B — Existant en positions 4-20 <!-- LE gisement prioritaire : pousser vers le top 3 avant toute création -->

| URL | Mot-clé | Position | Volume | Action | Priorité |
|---|---|---|---|---|---|
| | | | | `refresh ctr` / `refresh position` / fusion | |

### Étape C — Nouveaux mots-clés, par ordre de valeur
<!-- Ordre imposé : (1) argent = transactionnel/commercial → (2) phase de choix = comparaisons/alternatives
     → (3) informationnel longue traîne. Vérifier la règle du scroll et la cannibalisation avant d'inscrire. -->

| Priorité | Mot-clé | Intention | Volume | Difficulté | Cluster | Persona visé |
|---|---|---|---|---|---|---|
| 1 — argent | | transactionnel | | | | |
| 2 — choix | | commercial | | | | |
| 3 — traîne | | informationnel | | | | |

## 6. Architecture de contenu

<!-- Découle du type (§1). Garder l'ordre : c'est lui qui évite de construire le blog avant ce qui vend. -->

<!-- SAAS — pages business AVANT le blog :
     accueil + tarifs → fonctionnalités (mots-clés à douleur forte) → comparaisons « marque vs X »
     → « alternatives à X » → témoignages/avis → cas clients → blog EN DERNIER.
     + recommander 1-2 free tools alignés sur les mots-clés commerciaux (conversion 10-15 % vs 0,5-2 %). -->

<!-- LOCAL — pages service×ville sur zones RÉELLEMENT servies + fiche GBP + avis + citations. -->

<!-- ECOMMERCE — catégories/produits d'abord → comparatifs → blog. -->

| Ordre | Page / section | Statut | Mot-clé principal | Commentaire |
|---|---|---|---|---|
| 1 | | à créer / existante / à refresh | | |

- **Free tools envisagés** (SaaS) : <!-- idée + mot-clé commercial visé -->

## 7. Données first-party disponibles

<!-- ⚠️ LISTE VIVANTE — le carburant de l'information gain (invariant 4). À enrichir à CHAQUE échange
     client (chantier livré, chiffre interne, retour terrain). Un brief qui s'appauvrit = des contenus
     qui se généralisent. Si aucun élément n'est mobilisable pour un sujet : le signaler et demander,
     ne JAMAIS produire de générique. -->

| Élément | Type | Utilisable publiquement ? | Déjà utilisé dans | Ajouté le |
|---|---|---|---|---|
| <!-- ex. « 340 chantiers de rénovation livrés depuis 2019 » --> | chiffre interne | oui | | |
| <!-- ex. cas client X, retour terrain, prise de position, méthode maison, données produit --> | | | | |

## 8. Analytics

| Outil | Connecté ? | Détail |
|---|---|---|
| Search Console (via Cuik MCP) | | <!-- propriété exacte, ex. sc-domain:client.fr --> |
| Haloscan | | <!-- projet créé ? --> |
| PostHog | | <!-- si oui, /weekly-review et /report l'interrogent ; sinon ne pas l'invoquer --> |
| GA4 | | |
| BrightLocal (pont manuel) | | <!-- local : geo-grid, citations, avis — collés en session --> |

- **Rappel** : un seul outil de référence par KPI — Haloscan = mots-clés/positions, Search Console = clics/impressions. Jamais mélangés.

## 9. Zone d'intervention <!-- clients locaux uniquement — sinon supprimer cette section -->

<!-- Les zones RÉELLEMENT servies. Ne jamais générer de pages sur des villes non desservies :
     c'est le critère anti-contenu-de-masse du skill local-seo. -->

- **Coordonnées canoniques** : [`nap.md`](./nap.md) — source de vérité unique, rien ne s'improvise.
- **Zones servies** :

| Ville / zone | Distance du siège | Services proposés | Page dédiée | Priorité |
|---|---|---|---|---|
| | | | à créer / existante | |

- **Zones explicitement NON servies** : <!-- évite les demandes hors zone et les pages inutiles -->

---

## Journal des mises à jour

| Date | Ce qui a changé | Par |
|---|---|---|
| | | |
