# Brief client — Transports Ansquer

| | |
|---|---|
| **Slug** | `transports-ansquer` |
| **Créé le** | 2026-08-02 |
| **Dernière mise à jour** | 2026-08-20 |

---

## 1. Identité

- **Activité** : transporteur routier et prestataire logistique implanté sur le port de Gennevilliers — transport de marchandises en véhicules légers, stockage/manutention et affrètement pour les entreprises d'Île-de-France.
- **Offre** : transport et livraison IdF (fourgons 20 m³ hayon / 14 m³ / 9 m³), course urgente, tournées régulières, transport PL, affrètement France/Europe, transport international (commissionnaire inscrit au registre), dépotage/empotage de conteneurs, stockage et cross-docking (entrepôt 300 m², quais PL + VL), groupage/dégroupage, préparation de commandes, externalisation logistique, collecte/valorisation de déchets, débarras de locaux. Pas de tarifs publiés — tout passe par le devis.
- **Type** : `local` (B2B — SEO local + requêtes métier IdF)
- **Statut product-market fit** : `PMF validé` (confirmé opérateur, 2026-08-02)
- **Canaux actifs** : SEO (site rebuild en ligne), fiche Google Business Profile. Autres canaux : aucun connu à ce jour.
- **Concurrents** : **business, donnés par le client (2026-08-06) : VBC-Paris, SR Transport, NEOLYS** → analyse Haloscan de leurs domaines à lancer (étape A du §5). Vus en SERP locale : **leaderfret.com** (plateforme logistique à Gennevilliers, positionné sur `logistique gennevilliers` et `entreprise logistique gennevilliers`) ; eliterail-fr.fr et balticassist.fr apparaissent dans les co-occurrences Haloscan mais sont hors cœur de métier. Gros acteurs présents physiquement sur le port (XPO, DB Schenker) : requêtes de marque captées historiquement par l'ancienne page stockage.
- **Contact opérationnel** : **Martin Ansquer**, dirigeant (confirmé le 2026-08-06) ; canal client = WhatsApp (décision 2026-08-02).
- **YMYL** : non

## 2. Repo du site

| Champ | Valeur |
|---|---|
| URL du repo | https://github.com/kaelix-agency/transports-ansquer |
| Forge | `github` (`gh`) |
| Chemin local convenu | `D:\Users\Axel\KAELIX\transports-ansquer` |
| Chemin des articles | ✅ **`content/blog/`** — pipeline MDX v2 opérationnel depuis le 2026-08-05 (PR #1 mergée et déployée). Frontmatter Zod strict, whitelist v2 complète, fail-closed au build. Modèle à dupliquer : `content/blog/exemple-contrat-v2.mdx` (brouillon permanent). |
| Chemin des pages locales | n/a pour l'instant (pages service portées par `src/app/`) ; le champ `geo` est réservé à un futur `content/zones/` (interdit dans `content/blog/`) |
| **Version du contrat de contenu supportée** | `v2` — **implémentée et effective sur le site** (2026-08-05). Les 7 composants rendus dans le design du site ; 2 écarts d'implémentation validés au gate, répercutés dans `docs/contrat-de-contenu.md` : `image` = objet `{src, alt}` ; CTA sans parcours sur le site (`essai`, `newsletter`) = build rouge. |
| Branche par défaut | `master` (corrigé 2026-08-05 — le repo n'a jamais eu de `main`) ; `master` = branche de référence prod, PR de chantier vers `master` |
| Rendu | `SSG` — 100 % pré-rendu statique (vérifié aux audits des 21-22/07/2026), HTML complet servi aux IA |

- **État du site** : rebuild Next.js **en ligne sur transportsansquer.fr** (constaté au crawl du 02/08/2026 — architecture `/transport/*` + `/stockage/*`, 16 pages indexables, ancien WordPress remplacé, redirections 308 en un saut). Audits internes des 21-22/07/2026 : score 9,3/10, aucun bloquant technique. Les audits décrivaient l'architecture `/services/*`, restructurée depuis en deux hubs.
- ⛔ **Règle des 90 jours** : mise en ligne fin juillet 2026 (date exacte à confirmer) → tout le site est en fenêtre de test jusqu'à ~fin octobre 2026. Aucun refresh des pages de service avant J90, sauf erreur factuelle ou blocage technique.

## 3. Marque & voix

- **Ton** : B2B sobre et concret, vouvoiement. Phrases courtes, vocabulaire métier assumé, zéro superlatif marketing. Pas de tirets cadratins dans les textes (convention du repo du site, commit du 29/07/2026).
- **Vocabulaire maison** : commissionnaire de transport, dépotage/empotage, cross-docking, groupage/dégroupage, hayon, quai PL/VL, affrètement, tournée régulière, « le port » (= port de Gennevilliers).
- **Interdits** (retour client du 28/07/2026, codé dans `src/lib/company.ts` ; complétés à l'entretien du 2026-08-06) :
  - ⛔ ne jamais afficher le **nombre de véhicules** (fait paraître la structure trop petite face aux appels d'offres) ;
  - ⛔ ne jamais promettre d'astreinte « **24 h/24 — 7 j/7** » ;
  - ⛔ ne jamais publier de **fourchette tarifaire** (refus client explicite, entretien 2026-08-06) ;
  - ⛔ ne jamais attribuer les « **23 ans** » à l'entreprise (créée en **2021**) — c'est l'expérience du dirigeant (§7, garde-fous) ;
  - ⛔ ne jamais citer un **nom de client** sans autorisation écrite — anonymisation par défaut (§7).
- **Auteur affiché** (frontmatter `author`) : « Transports Ansquer » (organisation) — le JSON-LD `BlogPosting` du site signe déjà en Organization. Pas de signature individuelle tant qu'aucun porte-parole n'est désigné.
- **Exemples de référence** : pages `/transport/hayon-20m3-paris/` et `/stockage/externalisation-logistique/` (les plus développées, 520-544 mots).

### Porte-parole expert

| Champ | Valeur |
|---|---|
| Nom | Martin Ansquer (**pressenti** — échange du 2026-08-06) |
| Rôle / titre | dirigeant ; 23 ans de métier — déménageur → chauffeur → responsable → directeur d'agence chez Keiffer |
| Photo | aucune (aucune photo de qualité n'existe à ce jour, cf. §7 action shooting) |
| **Autorisation de citation** | ☑ **non** — toujours PAS d'autorisation formelle (rappel du 2026-08-06) |
| Verbatims disponibles | aucun |

⛔ **Conséquence : aucune `ExpertQuote` n'est produite pour ce client**, même en proposition, tant que l'autorisation n'est pas actée ici. Le parcours ci-dessus reste **interne** : pas de mention nominative publiée avant cette autorisation.

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

- ✅ **Concurrents business reçus (2026-08-06) : VBC-Paris, SR Transport, NEOLYS.** Prochaine action étape A : identifier leurs domaines exacts et relancer l'analyse Haloscan dessus (mots-clés qui leur rapportent, pages gagnantes).

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
| 1 | Fiche GBP + collecte d'avis | existante, sous-exploitée — ✅ **accès effectif** (constaté 2026-08-20 : compte Google KAELIX gestionnaire de la fiche) ; mise en conformité **en cours, à finir manuellement** (relevés + décisions : `nap.md`) | transporteur gennevilliers (pack local) | **levier n°1** — 1 seul avis aujourd'hui ; 📸 photos GBP dépendantes du mini-shooting (§7) ; ⛔ adresse de la fiche : ne jamais modifier (décision 2026-08-20, éviter re-vérification) |
| 2 | Citations NAP (annuaires FR) | à faire | — | après validation `nap.md` |
| 3 | `/` + hubs `/transport/` `/stockage/` | existantes | transport gennevilliers | fenêtre 90 j — observation |
| 4 | Pages de service (14) | existantes | 1 mot-clé chacune | 280-544 mots ; épaississement 700+ à programmer à J90 |
| 5 | Blog (pipeline MDX v2 ✅ opérationnel depuis le 2026-08-05) | vide, noindex (bascule index automatique au 1er article publié) | traîne des clusters §5C | 1er cluster : conteneurs (dépotage/empotage au port) puis affrètement |

- **Free tools** : n/a (client local). Équivalent capture : formulaire devis `/devis/` (fonctionnel depuis migration Resend du 01/08/2026) — chaque contenu doit appeler une action (devis, appel, email).

## 7. Données first-party disponibles

> Collecte n°1 : **entretien client du 2026-08-06** (transcription brute archivée côté opérateur), complétée le **même jour par l'échange opérateur de reconfirmation** qui a levé l'essentiel des ⚠️. Il ne reste qu'un ⚠️ mineur (rotations 14 m³). Couverture ligne par ligne des besoins du plan : `content-plan.md`, table « First-party ».

### Garde-fous de véracité (entretien 2026-08-06)

- ⛔ **« 23 ans » = expérience du DIRIGEANT. L'entreprise a été créée en 2021.** Ne jamais confondre : pas de « 23 ans d'existence », pas de « depuis 23 ans, nous… ». Formulation autorisée : « fondée en 2021 par un professionnel qui a 23 ans de métier ».
- ⛔ **Refus client DÉFINITIF de tout élément tarifaire sur le site** (entretien 2026-08-06, confirmé et renforcé à l'échange du même jour). Les contenus « prix/coût » traitent la méthode et les facteurs de coût, jamais les prix Ansquer. Conséquence tracée au plan : article 10/2026 à requalifier.
- ⛔ **Noms de clients : anonymisation par défaut.** Palimex (et d'autres) cités en entretien — ne jamais publier un nom sans autorisation écrite. Formes autorisées : « un industriel francilien », « un client du port », « une collectivité du 95 ».

### Socle produit (depuis le code du site, 2026-08-02)

| Élément | Type | Utilisable publiquement ? | Déjà utilisé dans | Ajouté le |
|---|---|---|---|---|
| Flotte VL : 20 m³ hayon / 14 m³ / 9 m³ avec usages types | donnée produit | oui (⛔ sans nombre de véhicules) | pages transport | 2026-08-02 |
| Entrepôt 300 m² sur le port, 1 quai PL + 1 quai VL, chariot + gerbeur | donnée produit | oui | pages stockage | 2026-08-02 |
| Commissionnaire de transport inscrit au registre national | statut réglementaire | oui | affrètement / international | 2026-08-02 |
| Implantation physique DANS le port de Gennevilliers (bât. G1, quai 8) | différenciateur | oui | toutes pages | 2026-08-02 |

### Cluster F ⭐ — Tournées régulières (sujets 08, 09, 10/2026)

| Élément | Donnée (entretien 2026-08-06) | Publiable ? |
|---|---|---|
| Cadence et organisation réelles | tournées **quotidiennes** en IdF, 52 semaines/an ; **3 camions, un secteur attitré chacun** ; **6 à 7 points de livraison par tournée**, retour au dépôt | oui |
| Rotations types par gabarit | 20 m³ : ~3 cycles charge/décharge par tournée ; 14 m³ : ~3 décharges pour 2-3 clients groupés ⚠️ (seul point encore confus — à reformuler avec le client à l'occasion) | après reconfirmation |
| Secteurs de tournée | **94, 78, 95, 92 — confirmés** (échange du 2026-08-06 ; le « 82 » de la transcription était bien 92) | oui |
| Engagement / préavis | pas de durée ferme imposée ; contrat-cadre plus ou moins formalisé ; souplesse assumée (une interruption de quelques semaines n'est pas un problème ; l'arrêt est de toute façon encadré par la loi) | oui (sans détail juridique) |
| **Seuil de bascule ponctuel → régulier** | l'hebdomadaire est le seuil : « une tournée ou un transport toutes les semaines » justifie le régulier ; **une fois par mois = encore du ponctuel**. Logique : engagement à l'année = tarifs négociés, moins chers que le ponctuel (⛔ sans chiffres) | oui — c'est LA donnée du comparatif 09/2026 |
| Exemple de navette commissionnaire | **tournée type du mardi confirmée (2026-08-06)** : collecte Paris → déchargement à Issy-les-Moulineaux → rechargement Clamart et alentours → déchargement Nanterre — boucle francilienne multi-points (la lecture « livraison en province » de la transcription était fausse) | oui, anonymisé |
| Cas client transport exceptionnel | client industriel (⛔ Palimex — anonymiser) : transports exceptionnels ponctuels en plus du régulier | oui, anonymisé |

### Cluster A — Conteneurs (sujets 08, 09/2026)

| Élément | Donnée (entretien 2026-08-06) | Publiable ? |
|---|---|---|
| Durée de dépotage d'un 40' | **confirmée (2026-08-06)** : entièrement dépendante du chargement — 2 voitures = moins d'1 h ; **en vrac avec colis 40×40, jusqu'à 3-4 heures pour un conteneur entier** | oui |
| **Différenciateur opérationnel (first-party clé)** | **la force d'Ansquer : gonfler les effectifs par différents leviers (intérim, décalage de planning) pour traiter vite les missions lourdes** — c'est l'information gain des contenus conteneurs et manutention | oui |
| Anecdote de quai | conteneur import (Chine) annoncé très chargé (colis en vrac + palettes) → renfort de main-d'œuvre anticipé, illustration du différenciateur ci-dessus | oui, sans chiffre non confirmé |
| Grille tarifaire indicative dépotage | **refusée — refus tarifaire DÉFINITIF** (2026-08-06) | non |

### Entreprise / E-E-A-T (bloc auteur, page entreprise, refresh 11/2026)

| Élément | Donnée (entretien 2026-08-06) | Publiable ? |
|---|---|---|
| Année de création | **2021** (cohérente avec le SIREN 900 697 251) | oui |
| Parcours du dirigeant | **confirmé (2026-08-06)** : Martin Ansquer, 23 ans de métier — déménageur → chauffeur → responsable → **directeur d'agence chez Keiffer** | ⛔ interne : pas de mention nominative publiée tant que l'autorisation porte-parole n'est pas actée (§3) ; formulation impersonnelle autorisée (« fondée en 2021 par un professionnel qui a 23 ans de métier ») |
| Contact/dirigeant | **Martin Ansquer** (§1 Contact opérationnel) | interne |
| SIRET | **90069725100016** reçu le 2026-08-06 → reporté dans `nap.md` | oui (annuaires/mentions) |
| Horaires réels du dépôt | **lun-ven 7h30-12h30 / 13h30-16h00 ; fermé sam-dim SAUF demande exceptionnelle** (confirmé 2026-08-06) → `nap.md` à jour ; ✅ **schema du site corrigé et déployé le 2026-08-06** (PR #2, mention week-end sur /contact/ sans promesse d'astreinte) | oui — appliqué sur le site |
| Photos | **aucune photo réelle de qualité n'existe** → 📸 **ACTION : organiser un mini-shooting avec le client (smartphone suffisant : flotte, quais, entrepôt, équipe)** — impacte le refresh homepage 11/2026 et la fiche GBP | — |
| Registre des commissionnaires | statut « inscrit au registre » confirmé de longue date ; **référence exacte PAS en main** (certificat DRIEAT à retrouver par le client). ⛔ Règle : les contenus peuvent écrire « inscrit au registre des commissionnaires », **aucun numéro** tant que la pièce n'est pas fournie | oui (statut), non (numéro) |

## 8. Analytics

| Outil | Connecté ? | Détail |
|---|---|---|
| Search Console (via Cuik MCP) | 🕓 **en cours** (décision 2026-08-02) | propriété **Domaine** `transportsansquer.fr` sur le compte Google KAELIX, vérification TXT dans la zone DNS **OVH** ; puis soumission du sitemap (20 URLs, recompté au 05/08 — la valeur « 21 » notée au 01/08 était erronée) + surveillance 404 pendant 1 mois ; puis connexion OAuth à Cuik (vérifier avec `list_gsc_domains`) |
| Haloscan | ✅ requêtes à la demande | pas de projet suivi dédié pour l'instant (optionnel, côté interface Haloscan) |
| PostHog | ❌ | non utilisé — ne pas invoquer |
| GA4 / autre analytics | ❌ **décision : GSC seule** (2026-08-02) | site volontairement sans analytics ni cookies ; les conversions se comptent côté formulaire (emails Resend reçus). Réévaluation quand le trafic le justifiera |
| BrightLocal (pont manuel) | 🕓 planifié **après l'accès GBP** (décision 2026-08-02) | baseline geo-grid au moment de l'activation ; exports collés en session |

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
| 2026-08-02 | Configs tranchées (opérateur) : GSC = compte KAELIX + TXT DNS OVH (propriété domaine) ; analytics = GSC seule ; BrightLocal = après accès GBP ; canal client = WhatsApp. Posture live vérifiée : robots.txt OK, sitemap 21 URLs | Claude (session config) |
| 2026-08-05 | Chantier pipeline MDX v2 exécuté et déployé : `master` = branche de prod (fast-forward + connexion Vercel↔GitHub, Production Branch master), PR #1 mergée (`d44f449`), articles en `content/blog/`, contrat v2 effectif. Corrections factuelles : branche par défaut `master` (pas `main`), sitemap 20 URLs (pas 21). Vérifs post-deploy : 16 pages OK, blog noindex, draft 404 | Claude (session chantier MDX v2) |
| 2026-08-06 | First-party de l'entretien client intégré au §7, restructuré par sujet du plan (clusters F, A, entreprise). 3 nouveaux interdits (§3) : pas de fourchette tarifaire, 23 ans = dirigeant / entreprise 2021, anonymisation des clients. Contact : dirigeant « Martin » (à confirmer). Horaires réels → nap.md ; article 10/2026 → à requalifier (refus tarifs) ; relance client préparée (blocs 4-5 + ⚠️ de transcription) | Claude (session first-party) |
| 2026-08-06 (2) | Reconfirmations client : secteurs 94/78/95/92, dépotage vrac 3-4 h + différenciateur « gonfler les effectifs », tournée type du mardi (boucle IdF), horaires sam-dim fermés sauf exceptionnel, parcours Martin Ansquer (ex-Keiffer) SANS autorisation de citation. Nouveaux : concurrents VBC-Paris/SR Transport/NEOLYS, SIRET → nap.md, règle registre commissionnaires (statut oui, numéro non tant que certificat DRIEAT absent), GBP accès promis, 📸 action mini-shooting (aucune photo n'existe), refus tarifaire DÉFINITIF | Claude (session first-party, échange 2) |
| 2026-08-06 (3) | Chantier horaires/schema exécuté : PR #2 du repo site mergée (`dbf5e14`, gate opérateur) et déployée automatiquement. Le site sert les horaires réels (JSON-LD lun-ven 2 plages, mention week-end sur /contact/) — l'écart 24/7 est résolu, vérifié en ligne | Claude (session chantier horaires) |
| 2026-08-20 | **Mission GBP** : accès fiche effectif (compte KAELIX gestionnaire — le point « accès promis » est levé). Relevés : tél fiche **01 41 21 07 69** (écart vs canonique) ; horaires sans coupure méridienne ; catégorie « Service logistique » ; description vide ; nom ✅. **Aucune modification appliquée** (blocage captures Chrome) → checklist manuelle émise. **Décisions client/opérateur** : téléphone canonique = **06 03 87 31 66 partout** ; **adresse fiche GBP intouchable** (zéro risque de re-vérification) ; client déclare « 49 route principale du port » ; **adresse canonique à arbitrer** (site : 51 ; annuaires : 49 ; siège légal Presles 95 ≠ exploitation) — détail `nap.md` §1. Relevé code site : tél 06 partout ✅ (aucun 01), adresse « 51 » dans `company.ts` (JSON-LD + /contact/) — correction site en attente d'arbitrage | Claude (mission GBP) |
