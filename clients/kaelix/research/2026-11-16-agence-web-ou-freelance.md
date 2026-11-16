# Brief de production — Article de blog « Agence web ou freelance : la mauvaise question »

| | |
|---|---|
| **Client** | `kaelix` (l'agence, cliente d'elle-même) |
| **Sujet du plan** | 11/2026 **S4** (semaine du 16/11) — **ligne 14**, cluster D (comparaison & choix) — persona **P2** (le gérant qui compare avant de signer) |
| **Statut du plan à l'entrée** | `go-11/2026` (GO mensuel d'Axel du 02/11, rythme 1 contenu / semaine, §1.30) — **aucun gate de brief** : le plan validé en tient lieu, `/write` enchaîné dans la même exécution |
| **Type** | création — article de blog, catégorie `comparatifs` |
| **Date du brief** | 2026-11-16 (exécution planifiée « Production du mois ») |
| **Auteur du contenu** | Axel (co-fondateur — marketing, SEO ; c'est lui qui répond aux dirigeants qui comparent) |

---

## 1. Verdict

**GO création** d'un article `/blog/agence-web-ou-freelance` pour « agence web ou freelance » — **satellite d'autorité** du cluster D : trafic attendu faible à 6 mois (famille côté client ≈ 10-45 recherches/mois au relevé du jour), valeur = la phase de choix du persona P2, le maillage vers la future page pivot (ligne 8) et vers `/tarifs`, et la **3e catégorie** (agence à abonnement) qu'aucun résultat de la SERP ne pose.

**Le chiffre du plan a bougé** : le plan (17/10) disait « famille ~60, KVI 13 » ; le bulk du 16/11 donne « agence web ou freelance » **5 / KVI 9**, les variantes connues à 20 / KVI 1 mais **ambiguës** (côté prestataire). Le GO d'Axel porte sur le sujet (ligne 14), pas sur un volume : on produit, en le disant.

### KPI Haloscan — bulk du **2026-11-16** (API directe `scripts/haloscan-fetch.mjs`, MCP non chargé)

| Mot-clé | Volume | KVI | CPC | Rôle |
|---|---|---|---|---|
| **agence web ou freelance** | **5** | **9** | — | **tête** (title, H1, intro) — seule forme connue de Haloscan **100 % côté client** |
| agence web vs freelance | NA | 4 | — | secondaire (corps) |
| agence web ou freelance développement | NA | 13 | — | secondaire (corps) |
| faire appel agence web ou freelance | NA | 13 | — | secondaire (corps) |
| freelance ou agence | 20 | 1 | — | ⚠️ **ambigu** : match Haloscan « Est-il préférable d'être freelance ou agence ? » = côté **prestataire** ; SERP ≈ 70 % client / 30 % prestataire et multi-métier (communication, SEO, IA) → **jamais en title/H1**, corps seulement |
| agence ou freelance | NA | 24 | — | idem, corps seulement |
| agence web freelance | 20 | 1 | 1,59 | ⚠️ SERP d'**annuaires et de profils** (des indépendants qui s'étiquettent « agence ») → **une mention** dans la section freelance, aucun H2 |
| freelance site internet | 5 | 17 | 7,26 | NO-GO (Google lit « sites pour trouver des missions freelance ») — apparition naturelle en prose au plus |
| agence web abonnement | NA | 1 | — | la 3e catégorie — à poser en corps, c'est l'angle propre |
| freelance ou agence web · développeur freelance ou agence · créer son site freelance ou agence | NA | NA | — | inconnus de Haloscan |

Related / questions Haloscan : rien d'utile (plateformes de freelances, « trouver des missions » = côté prestataire). `scrap` SERP : **vide** (SERP Google non observable par outil) — SERP reconstituée par WebSearch dans les trois mini-briefs (annexe), ordre indicatif.

**Zéro-clic** : ⚠️ **non vérifiable par outil** aujourd'hui (verdict du plan au 17/10 : partiel). Une réponse courte « freelance = moins cher et plus simple, agence = plus de compétences et de continuité » est probable ; **ce qu'elle ne donne pas** = l'angle qui force le clic : la 3e catégorie (agence à abonnement : conception, hébergement, maintenance dans un mensuel), **qui fait vivre le site après la livraison**, à qui appartiennent le code, le domaine et l'hébergement, le coût de sortie, et la grille de questions à poser au devis.

**Scroll-check** : ⚠️ **non vérifiable** — pas de navigateur dans la session (claude-in-chrome indisponible) ; attendu : pas de shopping ni de pack local, AIO probable. À dérouler sur le poste (« agence web ou freelance », téléphone et ordinateur) — ne change pas l'angle, il le confirme.

**Pari-émergent** : non (sujet mature) ; mais la **section « agence à abonnement »** est l'élément émergent à assumer comme angle propre.

## 2. Anti-cannibalisation (3 fronts)

| Front | Constat | Décision |
|---|---|---|
| **Haloscan** (positions) | kaelix.fr `NO_RESULT` — aucune position connue | rien à protéger |
| **`tracking.md`** (publié) | rien de publié sur l'intention « choisir un prestataire » ; `/alternative-wordpress-performance` (page d'avril, pivot actuelle) parle de l'alternative à un outil, pas du choix freelance / agence | pas de conflit ; **pas de lien** vers la pivot actuelle (son angle est périmé, réécriture en 12/2026 S4) |
| **`content-plan.md`** (planifié) | ⚠️ **collision de title avec la ligne 8** (page pivot 12/2026 S4 : « Site en self-service, **freelance ou agence** : le vrai coût sur 3 ans ») ; le plan disait que la pivot « absorbait » le sujet freelance « en attendant son satellite » — l'ordre s'est inversé, le satellite sort le premier | **Partition posée ici** : l'article = **comment choisir** (3 catégories expliquées, continuité, propriété, questions à poser au devis), **zéro fourchette de prix, zéro tableau « coût 3 ans »** dans le title, le H1 et le corps ; la pivot = **le comparatif chiffré 4 catégories sur notre offre**, tête « site internet abonnement ». **À inscrire au `/research` de la ligne 8** : title sans « freelance ou agence » (ex. « Self-service, agence ou abonnement : le vrai coût sur 3 ans »), colonne freelance raccourcie + lien vers cet article |
| | lignes 4 (`/services/site-vitrine`, comparatif par catégories, 12/2026 S2) et 5 (`/tarifs`, tableau catégories + prix, 01/2027) | intention commerciale et prix : **pas de collision** tant que l'article reste informationnel, sans prix |
| | ligne 13 (article #82 : « changer de prestataire », procédure) | ici le **choix**, là-bas la **procédure** de bascule → 1 lien vers l'article #82 **si et seulement s'il est fusionné au moment de la fusion** (sinon ajout au re-check bimestriel) — règle du lien conditionnel de #83 |

## 3. Content gap (top 5 reconstitué — annexe A et B)

Les résultats (petites agences, freelances, médias) répondent tous « ça dépend du projet » avec une liste avantages / inconvénients et des fourchettes de vendeurs non sourcées ; cible implicite : le projet B2B à plusieurs dizaines de milliers d'euros. Ce que personne ne tient :

1. **La 3e catégorie** — l'agence à abonnement (conception + hébergement + maintenance dans un mensuel) n'existe nulle part ; le débat reste binaire.
2. **Qui fait vivre le site pendant 3 ans** — la continuité n'est traitée que comme « risque freelance » (maladie, arrêt), jamais comme la question centrale (mises à jour, sécurité, modifications, référencement : qui, à quel délai, dans quel contrat).
3. **Propriété et réversibilité** — code, nom de domaine, hébergement, coût de sortie : une phrase au mieux.
4. **Une règle de décision** — aucune grille de questions à poser au devis ; rien pour la TPE.
5. **L'étiquette « agence web freelance »** — sur les annuaires, c'est le plus souvent une seule personne ; aucun résultat ne le dit au dirigeant qui croit acheter une équipe.

## 4. Information gain — stock first-party (zéro sollicitation ; tout est dans le stock)

| Élément | Source | Usage dans l'article | Véracité |
|---|---|---|---|
| **Deux fondateurs, deux rôles** : Axel (interlocuteur unique, marketing / référencement / rédaction, région parisienne) et Mickael (développeur indépendant depuis dix ans, Montpellier, écrit le site « page par page, sans modèle ») — « Deux cousins, un seul interlocuteur pour votre site » | `/a-propos`, `founders.ts` (site en production) | section « Ce que nous avons choisi » : **la réactivité d'un indépendant et la continuité d'une structure** = la prise de position de l'article (formulée en prose, **aucune citation attribuée** : la formule du plan n'est pas un verbatim validé) | ✅ publié |
| Mickael : indépendant depuis dix ans, passé par les salles de marché | `founders.ts` | une phrase (le développeur de l'agence **est** un indépendant : on ne dénigre pas les freelances, on en est) | ✅ publié |
| **Le code source est cédé en pleine propriété** ; la remise effective du code et l'accès à l'hébergement pour un transfert vers un autre prestataire sont une **prestation à prix fixe, annoncé dès aujourd'hui** ; nom de domaine et données remis sans frais à la résiliation ; résiliation du site vitrine à tout moment | CGV art. 5 et 6 (version du 11/11/2026), FAQ `/tarifs` « Le code m'appartient-il ? » | section propriété : **notre pratique**, décrite sans montant (le montant est sur `/tarifs` et dans les CGV — lien) ; ne jamais écrire « sans frais » ni « sans réserve » pour la remise du code (copy réécrite le 11/11) | ✅ publié |
| **Ansquer** : « site et référencement local travaillés ensemble », affichages dans Google 668 → 1 869 et clics 20 → 43 **d'août à septembre 2026** (Search Console, fenêtres de 28 jours) ; onze feuilles de style → une seule ; 100 sur 100 en référencement, bonnes pratiques et accessibilité (outil de mesure de Google, mode mobile, 7 septembre 2026) | `portfolio.ts`, étude de cas `/realisations/transports-ansquer`, formulation déjà validée dans #82 | section continuité : ce que « faire vivre » veut dire concrètement (site en ligne fin juillet, puis quatre contenus de référencement local du 24/08 au 14/09) — **mot pour mot**, jamais « un mois après le site » | ✅ publié |
| Livraison d'un site vitrine en **3 à 5 semaines** ; modifications comprises **sous 72 h ouvrées** | FAQ accueil, FAQ `/tarifs` | critère « délai de reprise » : nos engagements, cités comme les nôtres | ✅ publié |
| Le système d'exploitation marketing de l'agence (« on s'applique ce qu'on vend ») | brief §7 | une phrase possible dans la section « ce que nous avons choisi » | ✅ (prise de position) |
| ⛔ Temps interne par pack, grille interne | brief §7 | **jamais** | interne |

**Manque non levé (dit en tête, invariant 14)** : aucun client de kaelix.fr n'a quitté un freelance ou une agence pour nous avec un récit publiable → **aucune micro-scène « avant nous »** ; l'article s'appuie sur nos engagements et sur Ansquer (continuité), pas sur un cas de bascule. Pas de ré-angle nécessaire : le first-party couvre l'angle (deux fondateurs, CGV, Ansquer).

## 5. Brief éditorial

**Angle** : *La question « agence web ou freelance ? » est mal posée : elle compare qui va **faire** le site. La bonne question est **qui va le faire vivre** pendant trois ans — et à qui appartient ce qu'on vous livre.* Trois catégories (freelance / agence classique / agence à abonnement), quatre questions à poser avant de signer, et ce que nous avons choisi (un indépendant qui code, une structure qui répond). **Prise de position assumée** : un site livré puis abandonné coûte plus cher qu'un site suivi, quel que soit son prix de départ ; et le code, le domaine et l'hébergement doivent être à votre nom, ou cédés par écrit.

**Format cible** : article comparatif de **1 500-1 900 mots** (sous 2 000 : article **sans image**, aucun visuel first-party en stock — ⚠️ gate), **un tableau titré** (les 3 catégories × 5 critères, **sans prix**), listes « à retenir » en Markdown, phrases courtes et interpellations ; FAQ 5. **Pas de dénigrement** : les freelances et les agences classiques sont décrits par ce qu'ils font bien ; les plateformes et annuaires ne sont **jamais nommés**.

### Title / meta / H1 / slug

| Élément | Proposition | Pourquoi |
|---|---|---|
| **Title** (≤ 60 hors suffixe `| Kaelix`) | **« Agence web ou freelance : la mauvaise question à se poser »** (56) | tête mot pour mot + l'angle ; sans « freelance ou agence » (forme ambiguë), sans « coût 3 ans » (pivot ligne 8) |
| **Meta** (≤ 160) | « Freelance, agence classique ou agence à abonnement pour votre site ? Le vrai critère n'est pas qui le fait, mais qui le fait vivre. 4 questions à poser avant de signer. » (≈ 159) | 3 catégories + angle + promesse concrète |
| **H1** | « Agence web ou freelance pour votre site internet : la mauvaise question » | formulation du plan (ligne 14) ancrée sur le métier (« site internet » : la forme courte est multi-métier) ; ≠ title |
| **Slug** | `agence-web-ou-freelance` | court, stable, la tête |
| **Catégorie du blog** | `comparatifs` (« Comparatifs ») | la catégorie du cluster D |

### Plan H2/H3

0. **Intro réponse-directe** (~100 mots) : agence ou freelance, les deux livrent de bons sites ; la différence qui vous coûtera ou non de l'argent se joue **après** la livraison : qui met à jour, qui sécurise, qui répond quand il faut changer une page, et à qui appartiennent le code et le domaine. Il existe une troisième catégorie que les comparatifs oublient, l'agence à abonnement. Puis **capture** en une phrase : réservation d'un créneau avec Axel (`/contact`) — « quinze minutes pour poser vos questions, sans engagement ».
1. H2 **« Pourquoi « agence ou freelance » est la mauvaise question »** — ce que comparent les comparatifs (prix de départ, taille d'équipe, délai) ; ce qu'ils oublient (les trois ans qui suivent) ; une phrase : les deux font d'excellents sites — le problème n'est pas la compétence. Adresse directe au lecteur.
2. H2 **« Les trois catégories de prestataires, sans caricature »** — H3 **« Le freelance »** (une personne, réactivité, relation directe ; mention : sur les annuaires, beaucoup d'« agences web freelance » sont une seule personne — ce n'est pas un défaut, c'est une information à avoir avant de signer) · H3 **« L'agence classique »** (équipe, devis unique à la création, puis contrat de maintenance ou prestations à l'acte) · H3 **« L'agence à abonnement »** (conception, hébergement, maintenance et modifications dans un mensuel ; pas de frais de création ; c'est notre modèle, on le dit). **Tableau titré** H3 **« Les trois catégories face aux cinq questions qui comptent »** : lignes = qui fait vivre le site · délai pour une modification · propriété du code et du domaine · que se passe-t-il si le prestataire s'arrête · forme du paiement — **aucun montant**.
3. H2 **« La bonne question : qui fait vivre votre site pendant trois ans ? »** — ce que « faire vivre » veut dire (mises à jour de sécurité, textes et horaires, nouvelles pages, référencement) ; micro-scène **Ansquer** mot pour mot (site en ligne fin juillet, quatre contenus de référencement local du 24/08 au 14/09, affichages 668 → 1 869 et clics 20 → 43 d'août à septembre 2026, « site et référencement local travaillés ensemble ») + lien étude de cas ; un site livré puis plus touché ne produit pas ça. Liste « à retenir ».
4. H2 **« À qui appartiennent le code, le nom de domaine et l'hébergement ? »** — la question à poser par écrit, quelle que soit la catégorie ; titulaire du domaine = vous ; code cédé par écrit (droit d'auteur : sans cession écrite, le code reste à son auteur — formulé prudemment, « en règle générale », sans citer d'article de loi non vérifié) ; hébergement : qui a les accès ; **notre pratique** (CGV : code cédé en pleine propriété ; migration vers un autre prestataire = prestation à prix fixe annoncé, lien `/tarifs` et `/cgv`) ; lien conditionnel vers l'article #82 (la procédure de bascule) **s'il est fusionné**.
5. H2 **« Le prix de départ ne dit pas le coût »** — sans aucun chiffre : ce qui s'ajoute au devis d'un freelance ou d'une agence classique sur trois ans (hébergement, maintenance, modifications, refonte), ce que l'abonnement contient et ce qu'il ne contient pas ; **renvoi** : « les montants sont sur notre page tarifs » (`/tarifs`) — le simulateur (ligne 11) n'existe pas encore : **pas de lien**, ajout au re-check bimestriel.
6. H2 **« Quatre questions à poser avant de signer »** — liste numérotée : ① qui s'occupe du site après la mise en ligne, et à quel délai ? ② à qui appartiennent le code, le domaine et l'hébergement — et est-ce écrit ? ③ que se passe-t-il si vous vous arrêtez (maladie, fermeture, désaccord) : comment je récupère mon site ? ④ que comprend le prix, et qu'est-ce qui sera facturé en plus dans l'année ? Pour chaque question : la réponse qui rassure / celle qui doit alerter — par catégorie, sans nom.
7. H2 **« Ce que nous avons choisi : un indépendant qui code, une structure qui répond »** — Kaelix, c'est deux cousins : Mickael, développeur indépendant depuis dix ans, écrit le site page par page ; Axel est l'interlocuteur du premier appel au suivi mensuel — **la réactivité d'un freelance, la continuité d'une structure** (en prose, prise de position, pas de guillemets attribués) ; nos engagements cités comme les nôtres (3 à 5 semaines, modifications sous 72 h ouvrées, code cédé) ; « on s'applique ce qu'on vend » (une phrase). Lien `/a-propos`, `/services/site-vitrine`.
8. H2 **« Vos questions »** — 5 FAQ (ci-dessous) en H3 + réponse, servies en `FAQPage` (frontmatter `faq`).
9. **Clôture** : réservation (`/contact`) + audit gratuit (`/audit-gratuit`, « vous avez déjà un site : un fondateur le lit et vous dit ce qu'il vaut, sous 72 h ouvrées »).

### Mots-clés

- **Tête** : agence web ou freelance (title, H1, intro, 1 H2).
- **Secondaires (corps)** : agence web vs freelance · faire appel à une agence web ou à un freelance · freelance ou agence · agence ou freelance · agence web freelance (une mention, section freelance) · agence web abonnement · choisir un prestataire pour son site internet · développeur freelance.
- **À ne pas viser** : freelance site internet (hors intention) · site internet abonnement (tête de la pivot, ligne 8) · prix site vitrine / combien coûte un site (lignes 5 et 12) · refonte (lignes 10 et 13) · toute marque de plateforme ou d'annuaire, tout nom d'outil ou de techno (lexique public).

### FAQ (5 — chaque réponse sourçable dans le stock)

1. **Un freelance est-il toujours moins cher qu'une agence web ?** → Au devis de départ, souvent ; sur trois ans, cela dépend de ce qui est compris (hébergement, maintenance, modifications) et de ce qui sera facturé en plus. Comparez le coût total, pas le premier chiffre ; nos montants sont sur la page tarifs.
2. **Que devient mon site si mon freelance arrête, ou si l'agence ferme ?** → Il continue de s'afficher tant que l'hébergement et le nom de domaine sont payés, mais plus personne ne le met à jour ni ne le sécurise. La réponse se prépare avant : code, domaine et accès à l'hébergement à votre nom ou cédés par écrit, et un contrat qui dit comment vous récupérez votre site.
3. **À qui appartiennent le code, le nom de domaine et l'hébergement de mon site ?** → À celui que le contrat désigne. Le domaine est à son titulaire inscrit au registre ; le code, sans cession écrite, reste en règle générale à son auteur ; l'hébergement, à qui tient le compte. Faites écrire les trois. Chez Kaelix, le code est cédé en pleine propriété et sa remise pour un transfert est une prestation à prix fixe annoncé.
4. **Une « agence web freelance », c'est une agence ou un indépendant ?** → Le plus souvent une seule personne qui travaille sous un nom d'agence, parfois avec des partenaires ponctuels. Ce n'est pas un défaut ; c'est une information à demander avant de signer, parce qu'elle change la réponse à « qui s'occupe du site si vous êtes absent ? ».
5. **Comment comparer deux devis qui n'ont pas le même prix ?** → Mettez-les sur la même durée (trois ans), ajoutez ce que chacun ne comprend pas (hébergement, maintenance, modifications, refonte), et posez les quatre questions de cet article aux deux. Le devis le plus clair sur l'après est en général le moins cher à l'arrivée.

### Composants, frontmatter, données structurées — version du contrat

- **Version supportée** (auditée le 03/11, inchangée) : **Markdown pur, sans composant** (`next-mdx-remote`, éléments standard) ; aucun `Callout`, `CTA`, `FAQ`, aucun composant v2. Corps : capture = phrase + lien, « à retenir » = liste, tableau titré par un H3, FAQ = H2 + H3 par question.
- **Pipeline du blog** : `seoTitle`, `faq` → `FAQPage`, tables GFM (`remark-gfm`) — introduits par la PR #82, **non fusionnée au 16/11** → **repris à l'identique dans la PR de cet article** (mêmes modifications de `blog.ts`, `types/blog.ts`, route `[slug]`, `blog-content.tsx`, `package.json`, spec `audit-seo-17-10`) : les deux PR se fusionnent dans n'importe quel ordre, les hunks sont identiques. Le premier article fusionné rend `/blog` indexable et l'inscrit au sitemap (code existant sur `main`).
- **Frontmatter** : `title` (H1), `seoTitle`, `excerpt`, `date` 2026-11-16, `category: comparatifs`, `author: Axel`, `typology: guide`, `keywords`, `faq` (5 paires mot pour mot).
- **Schema** : `Article` (headline = H1, author Person « Axel », publisher Organization, dates) + `BreadcrumbList` (existant) + **`FAQPage`** (5 paires). Pas de `LocalBusiness`.
- **Visuels** : **aucun visuel first-party** pour ce sujet → article **sans image**, sous 2 000 mots, le tableau des trois catégories tenant lieu d'élément riche. ⛔ Pas de photo de stock. ⚠️ gate.

### Capture & maillage

- **Capture** (invariant 10) : **réservation** (`/contact`, « Parler à un fondateur », l'action principale du site) en intro et en clôture ; **audit gratuit** (`/audit-gratuit`) en clôture pour ceux qui ont déjà un site. Le simulateur (ligne 11, 01/2027) n'existe pas : **pas de lien**, à ajouter au re-check bimestriel. KPI : contacts PostHog `contact_rendez_vous` et `contact_formulaire` référés par l'article + impressions GSC sur « freelance ».
- **Entrant** : `/blog` (automatique) ; page pivot (ligne 8, 12/2026 S4 : lien depuis la colonne freelance — à inscrire à son `/research`) ; `/services/site-vitrine` (refresh 12/2026 S2, ligne 4 : une phrase « vous hésitez entre freelance et agence ? »).
- **Sortant** (cibles existantes sur `main`) : `/contact`, `/audit-gratuit`, `/tarifs` (FAQ « Le code m'appartient-il ? »), `/cgv#propriete`, `/a-propos`, `/services/site-vitrine`, `/realisations/transports-ansquer`. **Conditionnel** : `/blog/refonte-site-sans-perdre-referencement` (#82) — rendu seulement si l'article existe au build (règle #83) ; **pas de lien** vers `/alternative-wordpress-performance` (angle périmé, réécriture en décembre), ni vers `/agence-web-val-d-oise` (#81 non fusionnée), ni vers `/refonte-site-internet` (#83 non fusionnée). Externe : **aucun lien externe obligatoire** — aucune source primaire lue dans la session (hors réseau de la session pour les sites de la SERP) ; si un lien externe est posé, uniquement vers une page officielle (registre `.fr` de l'Afnic pour le titulaire du domaine).

### Garde-fous

- ⛔ **Aucun prix, aucune fourchette, aucun « coût sur 3 ans » chiffré** (partition ligne 8 / `/tarifs`) ; pas de « x fois moins cher ».
- ⛔ **Aucun chiffre non sourcé** : pas de « x % des freelances arrêtent », pas de TJM, pas de « durée moyenne » ; les seuls chiffres : Ansquer (mot pour mot), « dix ans » (Mickael, publié), « 3 à 5 semaines », « 72 h ouvrées », « trois ans » (horizon de raisonnement, présenté comme tel).
- ⛔ **Zéro nom technique** (lexique public) ; **aucune marque** de plateforme, d'annuaire, d'outil ou de concurrent ; « agence à abonnement », « plateforme de freelances », « annuaire » en catégories.
- ⛔ **Pas de dénigrement** des freelances (notre développeur en est un) ni des agences classiques ; chaque catégorie est décrite par ce qu'elle fait bien, puis par la question à lui poser.
- ⛔ **Aucune garantie** de position ni de résultat ; Ansquer avec la précaution « site et référencement local travaillés ensemble », jamais « un mois après le site ».
- ⛔ **Propriété du code** : « cédé en pleine propriété » ✅ ; **jamais** « remis sans frais » ni « sans réserve » (CGV du 11/11 : la remise du code pour un transfert est une prestation à prix fixe) ; le droit d'auteur formulé prudemment (« en règle générale, sans cession écrite, le code reste à son auteur »), sans article de loi.
- ⛔ **Aucune citation attribuée** (pas de « — Axel ») : la prise de position est en prose ; le seul verbatim validé du brief (accueil, 20/10) n'est pas repris ici.
- **Title sans « freelance ou agence », sans « coût 3 ans » ; aucun H2 commençant par « Site en self-service »** (partition ligne 8).
- **Règle des 90 j** : article neuf → J30 ≈ 16/12 (observation), J60 ≈ 15/01, **J90 ≈ 14/02/2027** (verdict position « agence web ou freelance » + contacts référés).
- **Double PASS** `fact-checker` (Ansquer, CGV art. 5-6, founders, lexique, absence de chiffre inventé, formulation du droit d'auteur) puis `contract-checker` (title/meta/H1, FAQ = FAQPage, maillage vers des cibles existantes, absence de style et de composant hors version, capture).

## 6. Points portés au gate (PR, questions fermées — le plan validé tient lieu de GO)

1. **Title** « Agence web ou freelance : la mauvaise question à se poser » et **H1** « Agence web ou freelance pour votre site internet : la mauvaise question » (formulation du plan ancrée sur le métier) : on garde, ou le H1 reprend le plan mot pour mot (« Agence web ou freelance : la mauvaise question ») ?
2. **Partition avec la page pivot de décembre (ligne 8)** : on acte que le title de la pivot abandonne « freelance ou agence » (ex. « Self-service, agence ou abonnement : le vrai coût sur 3 ans ») — oui / non ?
3. **Article sans image** (aucun visuel first-party ; sous 2 000 mots) : on publie tel quel, ou on attend un schéma « qui fait vivre le site » pour le re-check ?
4. **Renvoi vers `/tarifs`** au lieu du simulateur (ligne 11 prévue 01/2027) pour tout ce qui touche au prix : d'accord ?
5. **Pipeline du blog repris de #82** (mêmes hunks) : fusion dans n'importe quel ordre ; si #82 est fusionnée d'abord, la PR se rebase sans conflit — d'accord pour ne pas attendre #82 ?
6. Scroll-check et zéro-clic à faire sur le poste (« agence web ou freelance », téléphone et ordinateur) : un bloc de réponse en tête de page ne change pas l'article, il confirme l'angle « ce que la réponse courte ne donne pas ».

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-11-16)

> Trois instances en parallèle, une par mot-clé. **Toutes dégradées** : MCP Haloscan absent (KPI du bulk API du 16/11 fournis dans le prompt), `scrap` SERP vide → SERP reconstituée par WebSearch (ordre indicatif, pages non lues à la source : copeps.fr, fenxi.fr, kolonell.com hors réseau de la session), **scroll et zéro-clic non vérifiables par outil**.

### A. « agence web ou freelance » (tête)

```
VERDICT : GO (satellite blog cluster D, ligne 14 go-11/2026) — trafic attendu faible, valeur = autorité thématique + maillage vers pivot/simulateur
Motif : SERP 100 % blogs d'agences/freelances et médias, aucun DIY ni annuaire, ≈ 75 % des résultats parlent au CLIENT qui choisit ; le gap « 3e catégorie » est frontal et personne ne le tient.
Volume : 5/mois (KVI 9 au 16/11 ; famille côté client ≈ 10-30) · Intention : informationnelle-commerciale, côté client. ⚠️ « freelance ou agence » (20, KVI 1) et « agence web freelance » (20, KVI 1) = côté prestataire / emploi → jamais en title, corps seulement. Le « ~60 / KVI 13 » du plan (17/10) n'est plus le chiffre du jour.
Jouabilité : 6-12 mois — kaelix.fr autorité nulle (Haloscan NO_RESULT, 6 pages indexées, 19 impr./28 j) ; petites agences battables à 3-6 mois, médias hors de portée. Pas de requête annexe plus jouable : la famille est déjà la longue traîne.
Scroll : ⚠️ scroll non vérifiable par outil. Zéro-clic : ⚠️ non vérifiable par outil (probable AIO/snippet « freelance = simple et moins cher, agence = complexe »). Ce qu'une telle réponse ne donne pas : la 3e catégorie, la propriété du code, le coût de sortie, qui fait vivre le site après livraison.
Format dominant top 5 : article de blog comparatif avantages/inconvénients, listes + « 3 critères » (budget, délai, risque), ~1 000-2 500 mots, tableau occasionnel ; un acteur publie des pages programmatiques ville × type « 2026 » chiffrées.
Top 5 (ordre non observable, par récurrence) : agence (Rouen) « plutôt freelance ou agence web » · média « Agence, freelance ou logiciel ? » (TJM) · blog « que choisir » (3 critères) · agence (comparatif agence vs freelance vs ESN 2026 + variantes par ville, « coût 3 ans » cité comme argument pro-agence sans détail TPE) · média (Q/R ancienne, pro-freelance).
Gap : ① débat binaire : la catégorie « agence à abonnement » n'existe nulle part ; ② propriété du code / réversibilité / coût de sortie : absents ; ③ la continuité n'est traitée que comme « risque freelance », jamais comme « qui fait vivre le site pendant 3 ans et à quel prix » ; ④ tout vise le projet B2B à 10-30 k€ ; rien pour la TPE.
PAA (déduites des résumés) : quelle différence entre agence et freelance ? · pourquoi choisir un freelance ? · un freelance est-il moins cher ? · freelance ou agence pour un petit site ?
Cannibalisation : ⚠️ risque réel avec la ligne 8 (pivot déc. S4) → partition : l'article = « comment choisir », AUCUNE fourchette ni « coût 3 ans » ; la pivot = comparatif chiffré 4 catégories ; le /research de la ligne 8 devra raccourcir sa colonne freelance et lier l'article. /tarifs : aucun conflit si zéro prix. Publié : aucun.
Pari-émergent : non (sujet mature) — la section « agence à abonnement » est l'élément émergent à assumer.
Titles (≤ 60) : « Agence web ou freelance : la mauvaise question » (46) · « … : 3 critères avant de choisir » (53) · « … : qui fera vivre votre site ? » (53)
```

### B. « freelance ou agence web » / « freelance ou agence » (variantes)

```
VERDICT : GO sur la forme « web » portée par la ligne 14 ; forme courte à EXCLURE du title/H1
Intention (SERP observée) : forme « web » ~100 % client ; forme courte « freelance ou agence » ≈ 70 % client / 30 % prestataire (micro-agence, « de freelance à solopreneur », « concepteur-rédacteur en agence ou en freelance ») et multi-métier (communication, SEO, community management, IA) → la garder en secondaire sémantique ; porter « agence web ou freelance » en title, « site » ou « site internet » en H1 pour ancrer le métier.
Jouabilité : 6-12 mois ; SERP de petits domaines mais aussi médias-annuaires sur la forme courte.
Scroll : ⚠️ non vérifiable par outil. Attendu : pas de shopping ni pack local ; AIO probable (question comparative « ça dépend »). Zéro-clic : ⚠️ non vérifiable (verdict du 17/10 : partiel).
Format dominant : article de blog comparatif 1 200-2 500 mots, tableau avantages/inconvénients, verdict « selon le projet », fourchettes de vendeurs non sourcées.
Gap : (1) « ça dépend du projet » partout, aucune règle de décision ni grille de questions pour le devis ; (2) continuité/propriété en une phrase ; (3) binaire : aucun ne pose l'agence à abonnement comme 3e catégorie.
Cannibalisation : ⚠️ collision de title avec la ligne 8 → partition : l'article porte « agence web ou freelance » + les critères de choix, zéro fourchette ni tableau coût 3 ans ; le pivot garde « site internet abonnement » et devrait éviter « freelance ou agence » dans son title (ex. « Self-service, agence ou abonnement : le vrai coût sur 3 ans »). /tarifs et /services/site-vitrine : intention distincte.
Angle recommandé : « la mauvaise question » — la bonne = qui fait vivre le site après la livraison ; règle de décision en 4 questions ; 3 catégories sans prix ; preuve : deux fondateurs, Ansquer.
FAQ candidates : Un freelance est-il toujours moins cher ? · Que se passe-t-il si mon freelance arrête (ou si l'agence ferme) ? · À qui appartiennent le code, le domaine et l'hébergement ?
```

### C. « agence web freelance » / « freelance site internet » (cousines)

```
VERDICT : NO-GO comme cibles — couverture en simple mention dans l'article, pas de H2 dédié
Motif : « agence web freelance » = SERP d'annuaires/profils (des freelances qui s'auto-étiquettent « agence »), ≈ 70 % navigationnel/annuaire + 30 % comparaison résiduelle ; « freelance site internet » = Google lit « sites pour trouver des missions freelance », intention hors cible (le CPC 7,26 vient des plateformes).
Jouabilité : hors d'atteinte sur l'intention annuaire (plateformes géantes) ; 2 slots « comparatif » prenables en 6-12 mois mais ≈ 5 clics/mois : la requête qui construit l'autorité est déjà « agence web ou freelance ».
Scroll : ⚠️ non vérifiable (attendu : pubs de plateformes). Zéro-clic : ⚠️ non vérifiable.
Gap : aucun résultat n'explique que « agence web freelance » désigne le plus souvent un indépendant avec un nom d'agence ; aucun ne traite la continuité ni la propriété du code.
Cannibalisation : aucune page ne vise ces requêtes ; famille attribuée à la ligne 14 (cohérent avec l'écartement déjà acté dans content-plan.md : « agence web freelance — SERP mixte, ne pas viser »). Garde-fous : la pivot garde la colonne freelance, /tarifs et /services/site-vitrine gardent leur ligne freelance ; la ligne 14 ne reprend aucune fourchette → pas de collision.
Angle : une phrase dans la section freelance (« sur les annuaires, beaucoup d'agences web freelance sont une seule personne : ce n'est pas un défaut, c'est une information à avoir avant de signer »). « freelance site internet » : prose naturelle seulement.
FAQ : « Une agence web freelance, c'est une agence ou un indépendant ? » (retenue).
```
