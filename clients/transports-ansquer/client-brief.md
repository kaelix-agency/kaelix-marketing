# Brief client — Transports Ansquer

| | |
|---|---|
| **Slug** | `transports-ansquer` |
| **Créé le** | 2026-08-02 |
| **Dernière mise à jour** | 2026-08-02 |

---

## 1. Identité

- **Activité** : transporteur routier et prestataire logistique implanté sur le port de Gennevilliers — transport de marchandises en véhicules légers, stockage/manutention et affrètement pour les entreprises d'Île-de-France.
- **Offre** : transport et livraison IdF (fourgons 20 m³ hayon / 14 m³ / 9 m³), course urgente, tournées régulières, transport PL, affrètement France/Europe, transport international (commissionnaire inscrit au registre), dépotage/empotage de conteneurs, stockage et cross-docking (entrepôt 300 m², quais PL + VL), groupage/dégroupage, préparation de commandes, externalisation logistique, collecte/valorisation de déchets, débarras de locaux. Pas de tarifs publiés — tout passe par le devis.
- **Type** : `local` (B2B — SEO local + requêtes métier IdF)
- **Statut product-market fit** : `PMF validé` (confirmé opérateur, 2026-08-02)
- **Canaux actifs** : SEO (site rebuild en ligne), fiche Google Business Profile. Autres canaux : aucun connu à ce jour.
- **Concurrents** : business à confirmer avec le client. Vus en SERP locale : **leaderfret.com** (plateforme logistique à Gennevilliers, positionné sur `logistique gennevilliers` et `entreprise logistique gennevilliers`) ; eliterail-fr.fr et balticassist.fr apparaissent dans les co-occurrences Haloscan mais sont hors cœur de métier. Gros acteurs présents physiquement sur le port (XPO, DB Schenker) : requêtes de marque captées historiquement par l'ancienne page stockage.
- **Contact opérationnel** : à renseigner (qui répond côté client pour un chiffre interne ou une validation).
- **YMYL** : non

## 2. Repo du site

| Champ | Valeur |
|---|---|
| URL du repo | https://github.com/kaelix-agency/transports-ansquer |
| Forge | `github` (`gh`) |
| Chemin local convenu | `D:\Users\Axel\KAELIX\transports-ansquer` |
| Chemin des articles | ⚠️ **pipeline MDX à implémenter** — le blog tourne aujourd'hui sur un registre TypeScript (`src/lib/blog`, articles en TSX). Cible : `content/blog/` conforme au contrat. Prérequis à la première publication `/write`. |
| Chemin des pages locales | n/a pour l'instant (pages service portées par `src/app/`) |
| **Version du contrat de contenu supportée** | `v2` — décision opérateur (2026-08-02). Composants v2 **non encore implémentés** dans le template : implémentation native + exigences d'affichage à planifier AVANT la première publication. |
| Branche par défaut | `main` |
| Rendu | `SSG` — 100 % pré-rendu statique (vérifié aux audits des 21-22/07/2026), HTML complet servi aux IA |

- **État du site** : rebuild Next.js **en ligne sur transportsansquer.fr** (constaté au crawl du 02/08/2026 — architecture `/transport/*` + `/stockage/*`, 16 pages indexables, ancien WordPress remplacé, redirections 308 en un saut). Audits internes des 21-22/07/2026 : score 9,3/10, aucun bloquant technique. Les audits décrivaient l'architecture `/services/*`, restructurée depuis en deux hubs.
- ⛔ **Règle des 90 jours** : mise en ligne fin juillet 2026 (date exacte à confirmer) → tout le site est en fenêtre de test jusqu'à ~fin octobre 2026. Aucun refresh des pages de service avant J90, sauf erreur factuelle ou blocage technique.

## 3. Marque & voix

- **Ton** : B2B sobre et concret, vouvoiement. Phrases courtes, vocabulaire métier assumé, zéro superlatif marketing. Pas de tirets cadratins dans les textes (convention du repo du site, commit du 29/07/2026).
- **Vocabulaire maison** : commissionnaire de transport, dépotage/empotage, cross-docking, groupage/dégroupage, hayon, quai PL/VL, affrètement, tournée régulière, « le port » (= port de Gennevilliers).
- **Interdits** (retour client du 28/07/2026, codé dans `src/lib/company.ts`) :
  - ⛔ ne jamais afficher le **nombre de véhicules** (fait paraître la structure trop petite face aux appels d'offres) ;
  - ⛔ ne jamais promettre d'astreinte « **24 h/24 — 7 j/7** ».
- **Auteur affiché** (frontmatter `author`) : « Transports Ansquer » (organisation) — le JSON-LD `BlogPosting` du site signe déjà en Organization. Pas de signature individuelle tant qu'aucun porte-parole n'est désigné.
- **Exemples de référence** : pages `/transport/hayon-20m3-paris/` et `/stockage/externalisation-logistique/` (les plus développées, 520-544 mots).

### Porte-parole expert

| Champ | Valeur |
|---|---|
| Nom | — |
| Rôle / titre | — |
| Photo | — |
| **Autorisation de citation** | ☑ **non** (décision opérateur 2026-08-02 : pas de porte-parole) |
| Verbatims disponibles | aucun |

⛔ **Conséquence : aucune `ExpertQuote` n'est produite pour ce client**, même en proposition, tant que ce bloc n'est pas rempli et autorisé.

### Source d'avis clients

| Plateforme | URL | Nb d'avis | Note moyenne |
|---|---|---|---|
| Fiche Google Business Profile | à renseigner (URL de la fiche) | 1 (constat audit 21/07/2026) | — |

⛔ **Conséquence : `Testimonial` quasi indisponible** tant que la collecte d'avis n'a pas produit. Seule source autorisée : la fiche Google, avis copiés verbatim et sourcés. La collecte d'avis est l'action n°1 du plan (§6).

## 4. Cibles

| | Fichier | Statut |
|---|---|---|
| **ICP** (profil d'ENTREPRISE cible) | `icp.md` | **à produire** (skill `icp`) |
| **Personas** (les PERSONNES dedans) | `personas.md` | **à produire** (skill `personas`) |

- Hypothèse de départ à valider dans ces fichiers : PME/ETI franciliennes avec flux de marchandises réguliers (grossistes, importateurs passant par le port, e-commerçants, entreprises en déménagement/débarras de locaux) ; interlocuteurs : dirigeant de PME, responsable logistique/supply, office manager.
- Invariant : *un contenu = un persona*, déclaré avant production et noté dans `tracking.md`.

## 5. Ciblage SEO — méthode en 3 étapes

> Données Haloscan du 02/08/2026. Empreinte actuelle du domaine très faible : 21 mots-clés connus, ~20 visites/mois estimées, 2 positions top 3. Tout est à construire — c'est cohérent avec un site fraîchement remplacé.

### Étape A — Mots-clés qui rapportent du trafic aux concurrents

| Concurrent | Mot-clé | Volume | Difficulté (KVI) | Position du concurrent | Intérêt pour nous |
|---|---|---|---|---|---|
| leaderfret.com | logistique gennevilliers | 30 | 1 | 5 | fort — page « plateforme logistique Gennevilliers » dédiée chez eux |
| leaderfret.com | entreprise logistique gennevilliers | 50 | 1 | 4 | fort — intention commerciale locale pure |
| leaderfret.com | fret regulier | n/a | 1 | 3 | moyen — équivalent de notre « tournée régulière » |
| leaderfret.com | fret léger | n/a | 4 | 6 | moyen — vocabulaire alternatif VL à couvrir sémantiquement |

- ⚠️ **Étape A incomplète** : Haloscan ne voit que 3 concurrents SERP (empreintes minuscules). À enrichir avec les concurrents business donnés par le client, puis relancer l'analyse sur leurs domaines.

### Étape B — Existant en positions 4-20

> ⛔ Ces positions datent des scrapes de mai-juin 2026, donc de **l'ancien site WordPress**. Le rebuild vient d'être mis en ligne : Google re-teste tout. Fenêtre d'observation jusqu'à ~fin octobre 2026 (90 j) — **aucun refresh avant**, on observe aux relevés hebdo.

| URL | Mot-clé | Position | Volume | Action | Priorité |
|---|---|---|---|---|---|
| `/` | transporteur gennevilliers | 4 | 140 | observation (fenêtre 90 j) puis `refresh position` si <top 3 | 1 |
| `/` | gennevilliers transport | 6 | 170 | observation puis `refresh position` | 1 |
| `/` | transport gennevilliers | 9 | 170 | observation puis `refresh position` | 1 |
| `/lexternalisation-de-votre-logistique/` → `/stockage/externalisation-logistique/` | externalisation transport | 11 | 10 | vérifier que la redirection transmet la position à la nouvelle URL | 2 |
| `/stockage/` | schenker gennevilliers | 19 | 390 | requête de marque tierce — ne pas cibler éditorialement, trafic opportuniste | 3 |
| `/` | xpo gennevilliers | 19 | 140 | idem | 3 |
| `/manutention/` → redirigée | transport container gennevilliers | 19 | n/a | intention à couvrir par `/stockage/depotage-empotage-conteneurs/` | 2 |

### Étape C — Nouveaux mots-clés, par ordre de valeur

| Priorité | Mot-clé | Intention | Volume | Difficulté (KVI) | Cluster | Persona visé |
|---|---|---|---|---|---|---|
| 1 — argent | externalisation logistique | commercial (CPC 34 €) | 260 | 25 | externalisation | à définir (personas.md) |
| 1 — argent | empotage conteneur | transactionnel | 140 | 5 | conteneurs | à définir |
| 1 — argent | depotage conteneur | transactionnel | 70 | 4 | conteneurs | à définir |
| 1 — argent | coursier urgent | transactionnel | 70 | 11 | urgence | à définir |
| 1 — argent | entrepot logistique ile de france | commercial | 75 | 18 | stockage | à définir |
| 1 — argent | transport express ile de france | transactionnel | 50 | 1 | urgence | à définir |
| 2 — choix | affretement transport | commercial | 355 | 19 | affrètement | à définir |
| 2 — choix | transporteur ile de france | commercial-local | 100 | 12 | transport IdF | à définir |
| 3 — traîne | affretement | informationnel (tête de cluster) | 2 200 | 20 | affrètement | à définir |
| 3 — traîne | port de gennevilliers | informationnel-local | 491 | 27 | port | à définir |
| 3 — traîne | transporteur 92 | local | 40 | 1 | transport IdF | à définir |
| 3 — traîne | course urgente | informationnel | 40 | 1 | urgence | à définir |

- Anti-cannibalisation : chaque mot-clé « argent » a déjà sa page de service — les contenus blog visent la traîne et poussent vers ces pages, ils ne les doublonnent pas. Vérification Haloscan + tracking avant chaque création (`/research`).

## 6. Architecture de contenu

Type `local` : pages service (×zone), fiche GBP, avis, citations. **Particularité : les pages business existent déjà toutes** (16 pages, rebuild). Le travail est donc : (1) hors-site local (GBP/avis/citations), (2) montée en puissance éditoriale via le blog, (3) épaississement des pages à J90.

| Ordre | Page / section | Statut | Mot-clé principal | Commentaire |
|---|---|---|---|---|
| 1 | Fiche GBP + collecte d'avis | existante, sous-exploitée | transporteur gennevilliers (pack local) | **levier n°1** — 1 seul avis aujourd'hui |
| 2 | Citations NAP (annuaires FR) | à faire | — | après validation `nap.md` |
| 3 | `/` + hubs `/transport/` `/stockage/` | existantes | transport gennevilliers | fenêtre 90 j — observation |
| 4 | Pages de service (14) | existantes | 1 mot-clé chacune | 280-544 mots ; épaississement 700+ à programmer à J90 |
| 5 | Blog (pipeline MDX v2 à construire) | vide, noindex | traîne des clusters §5C | 1er cluster : conteneurs (dépotage/empotage au port) puis affrètement |

- **Free tools** : n/a (client local). Équivalent capture : formulaire devis `/devis/` (fonctionnel depuis migration Resend du 01/08/2026) — chaque contenu doit appeler une action (devis, appel, email).

## 7. Données first-party disponibles

> Statut opérateur (2026-08-02) : rien de plus que ce qui est déjà codé dans le site. **À collecter auprès du client** — liste de questions en bas de section.

| Élément | Type | Utilisable publiquement ? | Déjà utilisé dans | Ajouté le |
|---|---|---|---|---|
| Flotte VL : 20 m³ hayon / 14 m³ / 9 m³ avec usages types | donnée produit | oui (⛔ sans nombre de véhicules) | pages transport | 2026-08-02 |
| Entrepôt 300 m² sur le port, 1 quai PL + 1 quai VL, chariot + gerbeur | donnée produit | oui | pages stockage | 2026-08-02 |
| Commissionnaire de transport inscrit au registre national | statut réglementaire | oui | affrètement / international | 2026-08-02 |
| Implantation physique DANS le port de Gennevilliers (bât. G1, quai 8) | différenciateur | oui | toutes pages | 2026-08-02 |

**À demander au client (prochain échange)** : année de création et parcours du dirigeant · volumes traités (palettes/mois, tournées/semaine) · délais moyens constatés (ex. course urgente intra-IdF) · 2-3 cas clients anonymisables (problème → solution) · prises de position métier (ex. pourquoi dépoter au port plutôt qu'en périphérie) · zones réellement couvertes et zones refusées · SIRET + horaires réels (pour NAP/GBP).

## 8. Analytics

| Outil | Connecté ? | Détail |
|---|---|---|
| Search Console (via Cuik MCP) | ❌ **non** | seule propriété dispo dans Cuik : yurican.com. **Action : connecter `sc-domain:transportsansquer.fr`** puis soumettre le sitemap (12 URL) et surveiller les 404 post-migration pendant 1 mois |
| Haloscan | ✅ requêtes à la demande | pas de projet suivi dédié pour l'instant |
| PostHog | ❌ | non utilisé — ne pas invoquer |
| GA4 | ❌ | aucun analytics sur le site (choix perf/consentement des audits) |
| BrightLocal (pont manuel) | à mettre en place | geo-grid + suivi citations/avis — exports collés en session |

- **Rappel** : Haloscan = mots-clés/positions ; Search Console = clics/impressions. Jamais mélangés.

## 9. Zone d'intervention

- **Coordonnées canoniques** : [`nap.md`](./nap.md) — source de vérité unique.
- **Zones servies** (d'après les pages du site — à faire valider par le client) :

| Ville / zone | Distance du siège | Services proposés | Page dédiée | Priorité |
|---|---|---|---|---|
| Gennevilliers / port | siège | tous | existantes (ancrage local des pages service) | 1 |
| Paris | ~10 km | course urgente, hayon 20 m³, tournées | existantes (`/transport/course-urgente/`, `/transport/hayon-20m3-paris/`) | 1 |
| Île-de-France | — | transport, tournées, PL, préparation de commandes | existantes | 1 |
| France / Europe | — | affrètement, transport international | existantes | 2 |

- **Zones explicitement NON servies** : à confirmer avec le client (pas de page ville supplémentaire tant que la desserte réelle n'est pas validée — critère anti-contenu-de-masse).

---

## Journal des mises à jour

| Date | Ce qui a changé | Par |
|---|---|---|
| 2026-08-02 | Création du brief (onboarding) : identité, repo, voix + interdits client, ciblage Haloscan A/B/C, architecture, first-party du code du site, décisions opérateur (PMF validé, pas de porte-parole, avis = fiche Google seule, contrat v2) | Claude (session onboarding) |
