# Brief client — KAELIX (l'agence, cliente d'elle-même)

| | |
|---|---|
| **Slug** | `kaelix` |
| **Créé le** | 2026-10-16 |
| **Dernière mise à jour** | 2026-10-16 |

---

## 1. Identité

- **Activité** : agence web et SEO qui conçoit, héberge et fait vivre les sites des TPE/PME — « Faites votre métier, on s'occupe du reste ».
- **Offre** : site vitrine sur mesure codé à la main à partir de 80 € HT/mois sans frais de démarrage (conception, hébergement, maintenance, interlocuteur dédié) ; SEO en option dès 249 € HT/mois affiché public (grille interne v2 d'avril 2026 : Starter 199 € / Local 299 € / Croissance 499 € / e-commerce 1 200 €+ ; +30 % pour un site non-Kaelix) ; boutique en ligne 150 € HT/mois (engagement 12 mois) ; développement sur devis. ⚠️ Écart site public (« dès 249 € ») vs grille interne (Starter 199 €) relevé le 16/10 — à arbitrer avant toute page tarifs retravaillée.
- **Type** : `local` — **hybride décidé à l'entretien du 16/10** : requêtes nationales (création de site, SEO TPE/PME) + pages locales sur les zones réelles (Île-de-France entière + Montpellier). Architecture de contenu empruntée au modèle SaaS (pages business avant le blog, §6) ; routines locales (GBP, avis, citations) applicables dès que la fiche existe.
- **Statut product-market fit** : `PMF validé` — entretien du 16/10 : plusieurs clients payants réguliers (dont Transports Ansquer en SEO ; Portaya, UCPLE et autres au web).
- **Canaux actifs** : bouche-à-oreille / réseau uniquement. Le SEO de kaelix.fr est l'objet de cette mission ; LinkedIn et prospection : inactifs à ce jour.
- **Concurrents** (entretien 16/10) : ① agences web locales sous WordPress (le 500-1 000 €/mois de la grille) ; ② plateformes self-service (Wix, SiteW, Solocal, Simplebo) ; ③ freelances/indépendants. Angle différenciant : sites codés from scratch nativement optimisés (Lighthouse 95+, pas de dette technique) qui rendent le SEO moins cher — « Crafted Code, Proven Performance ».
- **Contact opérationnel** : Axel (co-fondateur, marketing/SEO — l'opérateur de ce repo).
- **YMYL** : non.

## 2. Repo du site

| Champ | Valeur |
|---|---|
| URL du repo | https://github.com/kaelix-agency/web-agency (confirmé entretien 16/10) |
| Forge | `github` (`gh`) |
| Chemin local convenu | à convenir à la première session de production |
| Chemin des articles | ⚠️ à auditer (un blog existe sur kaelix.fr — pipeline et chemin à relever dans le repo avant tout `/write`) |
| Chemin des pages locales | ⚠️ à auditer (idem) |
| **Version du contrat de contenu supportée** | ⚠️ **à auditer avant le premier `/write`** — champ critique, tout ou rien (v1/v2) |
| Branche par défaut | à vérifier |
| Rendu | SSR/SSG constaté de l'extérieur le 16/10 (contenu complet servi en HTML) — à confirmer dans le repo |

## 3. Marque & voix

- **Ton** : direct, chaleureux, sans jargon ; vouvoiement ; concret (chiffres réels, avant/après) plutôt qu'adjectifs. Slogan : « Faites votre métier, on s'occupe du reste. »
- **Vocabulaire maison** : site « codé à la main », « from scratch », « sans modèle », « le code vous appartient », un seul interlocuteur, « Crafted Code, Proven Performance ».
- **Interdits** : aucune garantie de position Google ; pas de dénigrement nominatif d'un concurrent (on compare des catégories — « agence WordPress classique », « plateforme en self-service » — pas des noms) ; pas de jargon SEO non expliqué ; aucun chiffre client sans source vérifiable ; anonymisation des clients non référencés publiquement (les 3 références du site sont publiables).
- **Auteur affiché** (E-E-A-T) : **Axel** (co-fondateur — marketing, SEO, rédaction) pour la stratégie/SEO/acquisition ; **Mickael** (co-fondateur — développement, 10 ans, ex-salles de marché) pour la technique/performance. Attribution par sujet, décidée au brief de chaque contenu.
- **Exemples de référence** : la page d'accueil kaelix.fr (avant/après Ansquer chiffré) ; l'étude de cas /realisations/transports-ansquer.

### Porte-parole expert

| Champ | Valeur |
|---|---|
| Nom | Axel (marketing/SEO) et Mickael (technique) |
| Rôle / titre | « Axel, co-fondateur de KAELIX » / « Mickael, co-fondateur et développeur de KAELIX » |
| Photo | à relever dans le repo du site (section fondateurs de l'accueil) |
| **Autorisation de citation** | ✅ oui pour les deux (entretien 16/10) — attribution selon le sujet |
| Verbatims disponibles | §7 — à alimenter (les prises de position du site sont reprises telles quelles) |

### Source d'avis clients

| Plateforme | URL | Nb d'avis | Note moyenne |
|---|---|---|---|
| ⚠️ aucune fiche Google KAELIX à ce jour | — | — | — |

→ Action onboarding : créer la fiche Google Business « zone desservie » (sans adresse publique) — voir §9 et to-do.

## 4. Cibles

| | Fichier | Statut |
|---|---|---|
| **ICP** (profil d'ENTREPRISE cible) | [`icp.md`](./icp.md) | `hypothèse` — v1 du 16/10, à retravailler via le skill `icp` |
| **Personas** (les PERSONNES dedans) | [`personas.md`](./personas.md) | `hypothèse` — v1 du 16/10, à retravailler via le skill `personas` |

- **Rappel d'application** : l'ICP décide quels mots-clés valent la peine ; les personas décident à qui parle chaque contenu. Un contenu = un persona.

## 5. Ciblage SEO — méthode en 3 étapes

> ⚠️ **Contrôle empêché le 16/10** : Haloscan et la Search Console ne sont pas interrogeables depuis le cloud (clés sur le poste opérateur). Les trois tableaux sont à remplir à la **première session PC** (ou première weekly `kaelix`) — prérequis : ajouter la propriété kaelix.fr au compte de service GSC et créer le projet Haloscan. `/content-plan kaelix` est **bloqué** tant que ce bloc est vide (règle de la commande).

### Étape A — Mots-clés qui rapportent du trafic aux concurrents

| Concurrent | Mot-clé | Volume | Difficulté | Position du concurrent | Intérêt pour nous |
|---|---|---|---|---|---|
| à remplir (Haloscan) | | | | | |

### Étape B — Existant en positions 4-20

| URL | Mot-clé | Position | Volume | Action | Priorité |
|---|---|---|---|---|---|
| à remplir (GSC kaelix.fr) | | | | | |

### Étape C — Nouveaux mots-clés, par ordre de valeur

| Priorité | Mot-clé | Intention | Volume | Difficulté | Cluster | Persona visé |
|---|---|---|---|---|---|---|
| à remplir après A et B | | | | | | |

## 6. Architecture de contenu

Ordre imposé (modèle SaaS adapté à l'agence — les pages business avant le blog) :

| Ordre | Page / section | Statut | Mot-clé principal | Commentaire |
|---|---|---|---|---|
| 1 | Accueil + /tarifs | existantes, à refresh SEO | création site internet TPE/PME (hyp.) | refresh après ciblage §5 |
| 2 | /services/site-vitrine, /services/seo-performance, /services/boutique-en-ligne | existantes, à refresh | par service | idem |
| 3 | Pages comparaison/alternatives | à créer | « agence web vs Wix/Solocal », « alternative Simplebo »… | le gisement commercial type SaaS — capter la phase de choix |
| 4 | /realisations (+ études de cas) | existantes | preuve | enrichir au fil des clients |
| 5 | Pages locales métier×ville | à créer | « création site internet Montpellier », « agence web <ville IdF> »… | zones réelles uniquement (§9) |
| 6 | /blog | existant | longue traîne | EN DERNIER — équilibre et maillage vers les pages business |

- **Free tools envisagés** : ① `/audit-gratuit` **existe déjà** — à positionner SEO (mot-clé commercial « audit site internet gratuit ») ; ② idée à l'étude : calculateur « coût réel de votre site (WordPress/plateforme vs abonnement) ».

## 7. Données first-party disponibles

| Élément | Type | Utilisable publiquement ? | Déjà utilisé dans | Ajouté le |
|---|---|---|---|---|
| Cas Ansquer : impressions ×2,8 et clics ×2,2 en 1 mois (sept. 2026, GSC, fenêtres 28 j) | chiffre client sourcé | oui (référence publiée sur le site) | accueil kaelix.fr | 2026-10-16 |
| Refonte Ansquer : Lighthouse 100/100/100 (SEO, bonnes pratiques, accessibilité), perf mobile 78, 11→1 CSS, 12→9 scripts, zéro jQuery | chiffre technique | oui (affiché sur le site) | accueil kaelix.fr | 2026-10-16 |
| Livraison d'un site vitrine en 3 à 5 semaines | méthode | oui | accueil | 2026-10-16 |
| Deux cousins fondateurs : Axel (marketing, ex e-commerce, région parisienne) + Mickael (dev 10 ans, ex-salles de marché, Montpellier) | histoire | oui | /a-propos | 2026-10-16 |
| Le système d'exploitation marketing de l'agence (ce repo : weekly automatisées, rapports mensuels, gates humains) | méthode maison | oui — angle différenciant fort « on applique à nos clients ce qu'on s'applique » | — | 2026-10-16 |
| Temps interne par pack (Starter 4-5 h/mois, Local 7-8 h/mois) | chiffre interne | ⚠️ non (grille interne) | — | 2026-10-16 |
| Positionnement prix : le trou de marché 150-500 €/mois (grille v2 §1) | prise de position | oui (reformulée) | grille interne | 2026-10-16 |

## 8. Analytics

| Outil | Connecté ? | Détail |
|---|---|---|
| Search Console (API directe) | 🔧 en cours (16/10) | compte de service : `gsc-fetch@kaelix-498715.iam.gserviceaccount.com` (relevé sur la propriété Ansquer) — à ajouter en accès Complet sur la propriété kaelix.fr, puis `scripts/gsc-fetch.mjs` opérationnel |
| Haloscan | ⚠️ à faire | projet kaelix.fr à créer (session PC) |
| PostHog | ⚠️ à faire | décision 16/10 : même setup sans cookie qu'Ansquer (PR #9), à poser sur web-agency |
| GA4 | non | — |
| BrightLocal (pont manuel) | non | — |

## 9. Zone d'intervention

- **Coordonnées canoniques** : [`nap.md`](./nap.md) — ⚠️ particularité : pas d'adresse publique (agence sans local ouvert au public) → fiche Google en mode « zone desservie », adresse masquée.
- **Zones servies** (entretien 16/10) :

| Ville / zone | Distance du siège | Services proposés | Page dédiée | Priorité |
|---|---|---|---|---|
| Montpellier et agglomération | Mickael sur place | tout | à créer | 1 — marché moins saturé, présence physique |
| Île-de-France (ensemble) | Axel sur place (Val-d'Oise) | tout | à créer par ville à fort volume après ciblage §5 | 2 |
| Reste de la France (à distance) | — | tout (visio) | pas de page dédiée | — |

- **Zones explicitement NON servies** : aucune (travail à distance possible) — mais **aucune page locale** hors IdF/Montpellier (critère anti-contenu-de-masse).

---

## Journal des mises à jour

| Date | Ce qui a changé | Par |
|---|---|---|
| 2026-10-16 | Création — onboarding en session claude.ai (entretien Axel : type hybride, PMF validé, concurrents, zones, porte-parole, PostHog) + grille tarifaire v2 + lecture kaelix.fr. Ciblage §5 : contrôle empêché (Haloscan/GSC sur PC), à remplir avant `/content-plan` | session 16/10 |
