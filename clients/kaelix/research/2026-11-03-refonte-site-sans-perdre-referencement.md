# Brief de production — Article de blog « Refaire son site sans perdre son référencement : la checklist TPE en 7 points, et ce qu'exiger de votre prestataire »

| | |
|---|---|
| **Client** | `kaelix` (l'agence, cliente d'elle-même) |
| **Sujet du plan** | 11/2026 **S2** — **ligne 13**, cluster E (refonte) — persona **P3** (repreneur / créateur déjà lancé, non technicien), P1 en lecture préventive |
| **Typologie** | **guide** (re-check bimestriel : à compléter) — **article de blog** (`apps/kaelix/src/content/blog/<slug>.mdx`, premier article du blog relancé le 17/10) |
| **URL cible** | `/blog/refonte-site-sans-perdre-referencement` (à créer) |
| **Recherche faite le** | 2026-11-03 (`/research` en exécution planifiée « Production du mois » : 3 `serp-analyst` en parallèle + KPI Haloscan du jour par API directe) |
| **Statut** | ✅ **`go-11/2026` (GO mensuel d'Axel du 02/11, §1.30) — brief prêt, aucun feu vert à redemander → `/write` enchaîné dans la même exécution** |

> **Semaine du sujet** : la ligne 13 porte `11/2026 S2`. Règle de `research.md` : S1 = la semaine (lundi-dimanche) qui contient le 1er du mois ; le 1er novembre 2026 est un dimanche → S1 = 26/10-01/11, **S2 = 02/11-08/11**. Le 03/11 est dans la semaine du sujet : il se lance. (Lignes 10 = S3 à partir du 09/11 et 14 = S4 à partir du 16/11 : « en attente de leur semaine ».)

> ⚠️ **Conditions de l'analyse (contrôles empêchés, tels quels).** (1) Le MCP Haloscan n'est pas chargé dans la session planifiée → **KPI du jour par `scripts/haloscan-fetch.mjs bulk` (API directe, §1.29)**, crédit vérifié par appel réel le 03/11 (9 866 crédits mots-clés). (2) `haloscan-fetch.mjs scrap "refonte seo"` a rendu une SERP vide (`raw: ""`) → **SERP Google réelle non observable par outil** ; les 3 mini-briefs ont lu la SERP par procuration (WebSearch, ordre non garanti ; google.fr, lafabriquedunet.fr, blogdumoderateur.com, kolonell.com non résolus par le réseau de la session) et sont tous marqués `⚠️ analyse dégradée`. (3) **Scroll-check : non vérifiable** (pas de navigateur en session planifiée) — à dérouler sur le poste si Axel le souhaite ; sur une requête informationnelle sans pack local, un bloc d'étapes en tête (AIO/featured snippet) est probable, il relève le verdict zéro-clic, pas le format. (4) **Zéro-clic : non vérifiable par outil aujourd'hui** (le 17/10 : partiel) ; l'angle qui force le clic est retenu quoi qu'il en soit (voir §1). (5) `domain kaelix.fr` : `SITE_NOT_FOUND` (aucune position connue → rien à cannibaliser côté Haloscan). (6) GSC : clé absente de la session (`GSC_SERVICE_ACCOUNT_B64` non posée) → étape B et inspection non vérifiables.

---

## 1. Verdict

**GO — CRÉATION d'un article de blog sur « refonte seo », au format checklist pour un dirigeant non technicien, title ancré sur « refonte » + « référencement » (jamais « refaire » en title), H1 = la formulation validée au plan.** Les trois mini-briefs convergent : SERP 100 % guides et checklists « conserver son référencement » écrits **pour des gens du métier** (médias : Blog du Modérateur, La Fabrique du Net, Siècle Digital ; agences et freelances comparables : pilot-in pos. 1 au 17/10, digitiz, lucasfonseque.fr, agence-scroll) ; **aucun ne parle à un dirigeant de TPE** qui fait faire la refonte — le mismatch de lecteur est l'angle. Jouabilité : 6-12 mois pour la tête (kaelix.fr sans autorité, blog vide), **portes à 3 mois** : « checklist refonte seo » (10, KVI 1) et « refonte site internet seo » (10, KVI 1) → « checklist » dans le title/H1.

### KPI Haloscan — bulk du **2026-11-03** (API directe)

| Mot-clé | Volume | KVI | CPC | Rôle |
|---|---|---|---|---|
| **refonte seo** | 320 | 14 (était 7 le 17/10 — dérive +7, à surveiller) | 1,34 € | **tête** : title (« Refonte de site et référencement »), H1, premier paragraphe |
| refonte site internet seo | 10 | 1 | NA | porte 3 mois — corps, H2 « avant la mise en ligne » |
| checklist refonte seo | 10 | 1 | NA | porte 3 mois — « checklist » en title et H1 |
| refonte de site et référencement | 10 | 29 | 7,68 € | variante de la tête (title) |
| refonte de site web et référencement | 10 | 11 | 4,42 € | corps |
| référencement nouveau site | 10 | 23 | NA | H2 « les 90 jours d'après » |
| nom de domaine seo | 10 | 10 | 5,52 € | H2 « nom de domaine » (une section, pas une page) |
| seo changement de site · checklist seo refonte site | NA | 23 · 15 | — | corps |
| changer de prestataire site internet | NA | 1 | — | **section « vous changez de prestataire »** — `pari-émergent` (volume nul, intention ultra-qualifiée : dirigeant mécontent prêt à partir = prospect P3 direct) ; « changer d'agence web » inconnu de Haloscan |
| refonte site internet · refaire site internet · refonte site web | 400 · 600 · 300 | 10 · 17 · 16 | 13,21 · 13,39 · 29,41 € | **réservés à la page ligne 10** (S3) — ni en title, ni en H1, ni en H2 de l'article |
| refonte site web prix | 50 | 1 | 4,44 € | page ligne 10 (aucun prix dans l'article) |

- **Intention** : informationnelle (« refaire sans perdre ») avec une composante commerciale (profils Malt / Codeur / ComeUp dans les résultats ; CPC faible 1,34 € contre 13 € sur « refonte site internet »). Le lecteur a déjà décidé de refaire : il cherche à ne pas se faire avoir.
- **Format dominant** : guides longs / checklists (14 points LFDN, « 62 conseils et 31 erreurs », « guide complet 2026 »), profondeur non mesurée (hôtes non résolus). Format retenu : **checklist en 7 points + 2 sections de service** (prestataire, changement de prestataire), **1 500-1 900 mots**, chaque point = une question à poser + la preuve à demander.
- **Zéro-clic** : non vérifiable aujourd'hui (partiel au 17/10). Ce qu'un bloc de réponse court ne donnera jamais : **le plan de redirections en langage courant** (tableau ancienne adresse → nouvelle, avec un exemple réel), **ce qu'exiger contractuellement** du prestataire, **quoi faire quand on change d'agence ou de domaine**, et **quand s'inquiéter vs attendre** (90 jours). C'est l'angle qui force le clic.
- **Pari-émergent** : non pour la tête (requête établie) ; **oui** pour la section « changer de prestataire » (flag `pari-émergent` dans `tracking.md` sur la section, pas sur l'article).
- **Questions Haloscan** : bruitées (définitions SEO, Search Console). Questions implicites des titres de la SERP : combien de temps on perd, faut-il changer les adresses, que vérifier après mise en ligne → FAQ.

## 2. Anti-cannibalisation (3 fronts)

| Front | Contrôle | Résultat |
|---|---|---|
| **Haloscan** (positions du domaine) | `domain kaelix.fr` le 03/11 : `SITE_NOT_FOUND` | aucune position connue → rien à cannibaliser |
| **`tracking.md`** (publié) | `/` (famille TPE/PME), `/audit-gratuit`, PR #81 Val-d'Oise | intentions disjointes ; l'article maille vers `/audit-gratuit` (capture) |
| **`content-plan.md`** (15 lignes) | ligne **10** (page `/refonte-site-internet`, S3) : SERP « refonte site internet » = guides complets étapes/prix + agences (codeur, graphiste.com, anthedesign, seranking, LFDN `/reussir-la-refonte…`) ; SERP « refonte seo » = checklists de conservation du référencement (BDM, LFDN `/comment-conserver-ses-positions…`, digitiz, lucasfonseque) → **0 URL commune observée** (3 domaines communs sur des URL distinctes) ; disjonction du 17/10 **confirmée** (relevé sur moteur tiers). Ligne **8** (page pivot : propriété du code, coût de sortie) et ligne **14** (freelance / agence) partagent l'argument « le code vous appartient » : ici la **procédure** de sortie, là-bas le **choix** | **aucun conflit si la partition est tenue** (ci-dessous) |

**Partition ligne 10 (page) / ligne 13 (article)** — réglée maintenant, pas à la production :

| Sous-intention | Page refonte (ligne 10, S3) | Article (ligne 13, S2) |
|---|---|---|
| signes qu'il faut refaire, réparer vs refaire, WordPress lent / cassé | **page** | — (un lien) |
| prix et délai d'une refonte TPE, abonnement vs devis | **page** (absorbe « refonte site web prix ») | — (**aucun prix** dans l'article) |
| inventaire des pages qui rankent, plan de redirections, conservation des adresses et contenus | — (un paragraphe « vous ne perdrez pas vos positions » + lien vers l'article) | **article** |
| perte de trafic après refonte : causes, durée, suivi, quand s'inquiéter | — | **article** |
| ce qu'exiger du prestataire (recette, liste d'adresses, 90 jours, accès) | — | **article** |
| changer de prestataire : qui détient le domaine, le code, la Search Console, la fiche Google ; bascule sans coupure | paragraphe « vous pouvez partir » + lien | **article** (section dédiée, pari-émergent) |
| garder son nom de domaine | décision et transfert (page) | conséquence SEO d'un changement de domaine (article) — une phrase chacun, croisée par lien |

**Garde-fous de titre** : « refaire site internet » (600) est absorbé par la ligne 10 et Google réécrit « refaire » en « refonte » → **title de l'article ancré sur « refonte … référencement »** ; le H1 garde la formulation validée au plan (« Refaire son site sans perdre son référencement… ») parce que c'est elle qui porte l'angle et que « sans perdre son référencement » lève l'ambiguïté — ⚠️ point porté au gate (§6). Aucun H2 de l'article ne commence par « Refonte de site internet ».

Rappel du gisement 4-20 : vide par construction (GSC 28 j du 02/11 : 19 affichages, tous sur l'accueil et le nom). Création conforme à la règle d'or (les refreshes de novembre, lignes 1-2, sont publiés).

## 3. Content gap

Ce que le top 5 (reconstitué, ordre non garanti) couvre : les étapes techniques d'une migration (crawl, redirections 301, balises, sitemap, Search Console), écrites pour celui qui fait la refonte ; des listes de 14 à 62 points.

Ce que **personne** ne donne au dirigeant qui **fait faire** :

- **Ce qu'est un plan de redirections**, en langage courant (un tableau à deux colonnes, ancienne adresse → nouvelle), **comment l'exiger et le vérifier sans outil** (cliquer sur les anciennes adresses).
- **Le changement de prestataire** comme étape à part entière : qui est titulaire du nom de domaine, à qui appartient le code, qui est propriétaire de la Search Console, d'Analytics et de la fiche Google — l'historique part avec le compte de l'agence si on ne se fait pas ajouter propriétaire avant.
- **Quoi mettre dans le devis** (liste des adresses à rediriger, recette avant mise en ligne, surveillance 90 jours, remise des accès) et **quand s'inquiéter vs attendre** (règle des 90 jours — personne ne la dit au client).
- **Un cas réel chiffré** : aucune page concurrente ne montre une refonte avec les affichages et les clics avant / après.

## 4. Information gain — stock first-party (zéro sollicitation ; tout ce qui suit est dans le stock, rien à demander)

| Élément | Statut de véracité | Emploi prévu |
|---|---|---|
| **Refonte Ansquer** : ancien site remplacé, nouveau site mis en ligne **fin juillet 2026**, 16 pages indexables, **redirections permanentes en un seul saut** constatées au crawl du 02/08/2026 (brief Ansquer §1) ; exemple réel de correspondance : `/lexternalisation-de-votre-logistique/` → `/stockage/externalisation-logistique/` (brief Ansquer §5, étape B) | ✅ interne (brief + crawl), publiable — client référencé publiquement (étude de cas) ; ⛔ ne pas nommer la techno de l'ancien site (lexique : zéro nom technique) | **micro-scène du point 2** (le tableau de redirections, avec cette ligne réelle) |
| **Ansquer, résultats** : affichages Google **668 → 1 869 (×2,8)** et clics **20 → 43 (×2,2)** d'août à septembre 2026 (Search Console, fenêtres de 28 j, « site et référencement local ensemble, d'un mois sur l'autre » — ⛔ **jamais « un mois après le site »** : août est déjà le nouveau site) ; **100/100/100** (référencement, bonnes pratiques, accessibilité), **11 → 1 feuille de style**, 12 → 9 scripts ; livraison en 3 à 5 semaines (`portfolio.ts`, étude de cas publiée) | ✅ publié (accueil, étude de cas) — mot pour mot | point 5 (vitesse) et point 7 (90 jours) ; lien `/realisations/transports-ansquer` |
| **Méthode maison de suivi J30 / J60 / J90** : « Google met environ trois mois à juger une nouvelle page : on n'y touche pas avant » ; observation à 30 et 60 jours, verdict à 90 (invariant 6 du système, lexique client) — le « système d'exploitation marketing » de l'agence est un first-party publiable (brief §7) | ✅ interne, publiable | **point 7** « les 90 jours d'après » + FAQ « quand s'inquiéter » |
| **CGV Kaelix** art. 5-6 : le code source est **cédé en pleine propriété**, remis à la résiliation avec les accès, résiliation du site vitrine à tout moment sans pénalité ; « nom de domaine et hébergement compris » (page site-vitrine) ; FAQ de l'accueil : « si vous souhaitez changer de prestataire, nous vous transmettons l'intégralité du code et les accès » | ✅ publié (CGV, /tarifs, /services/site-vitrine, accueil) | section « changer de prestataire » : ce qu'un contrat propre prévoit — **sans affirmer** que le domaine ou la Search Console sont au nom du client chez Kaelix (non dit dans le stock) : on **conseille** de l'exiger |
| Reprise d'une boutique existante : « redirige chaque ancienne adresse vers la nouvelle » (`shop-guide.ts`) | ✅ publié | une phrase (le même principe pour un site vitrine) |
| Verbatim d'Axel validé le 20/10 (« On ne vend pas un site… ») | ✅ mais déjà sur l'accueil → **ne pas dupliquer** | **aucune citation** ; pas d'`ExpertQuote` possible de toute façon (site sans composants, §5) |
| Faits publics vérifiables (hors stock, sourcés dans l'article) : Google documente la « migration de site avec changement d'URL » (redirections permanentes, à garder au moins un an) ; le titulaire d'un `.fr` est inscrit au registre de l'Afnic ; les photos et textes commandés restent soumis au droit d'auteur du prestataire sauf cession écrite | ✅ à sourcer par lien (Google Search Central, Afnic) — **contrôlés par le `fact-checker`** ; ⛔ aucun chiffre de durée de perte de trafic, aucun pourcentage « x % des refontes perdent… » (aucune source en stock) | points 2, 3, section prestataire |

Information gain **acquis** : cas réel chiffré (Ansquer), exemple réel de redirection, méthode des 90 jours, contrat « le code vous appartient ». **Aucun manque** : pas de ré-angle nécessaire.

## 5. Brief éditorial

**Angle** : *Vous ne ferez pas la refonte vous-même — mais sept choses dépendent de vous : les demander, les vérifier, les exiger dans le devis. Chaque point = la question à poser à votre prestataire + la preuve à lui demander.* Prise de position assumée : **une refonte qui perd des positions est une refonte mal cadrée, pas une fatalité** ; et **le site, le domaine et les comptes Google doivent être à votre nom** avant de changer de prestataire.

**Format cible** : checklist en **7 points** (H2 numérotés) + section « Vous changez de prestataire ? 5 vérifications avant de partir » + section « Ce qu'exiger dans le devis » + FAQ (5). **1 500-1 900 mots**, un **tableau titré** (redirections), une liste « à retenir » en Markdown par grande section, phrases courtes et interpellations (rythme de la skill).

**Auteur / incarnation** : **Axel** (co-fondateur — marketing, SEO) ; Mickael cité pour la partie technique (redirections, vitesse).

### Title / meta / H1 / slug

| Élément | Proposition | Pourquoi |
|---|---|---|
| **Title** (≤ 60 hors suffixe `| Kaelix`) | **« Refonte de site et référencement : la checklist en 7 points »** (59) | tête « refonte … référencement » + porte « checklist » ; **sans « refaire »** (réservé à la ligne 10) |
| **Meta** (≤ 160) | « Refaire son site sans perdre ses positions Google : 7 vérifications, les preuves à exiger de votre prestataire, et quand s'inquiéter après la mise en ligne. » (≈ 158) | promesse + angle prestataire + 90 jours |
| **H1** | « Refaire son site sans perdre son référencement : la checklist TPE en 7 points, et ce qu'exiger de votre prestataire » | formulation validée au plan (ligne 13) ; ≠ title |
| **Slug** | `refonte-site-sans-perdre-referencement` | court, stable, « refonte » + intention |
| **Catégorie du blog** | `seo` (« Conseils SEO ») | la seule catégorie du site qui porte le référencement |

### Plan H2/H3

0. **Intro réponse-directe** (~100 mots) : on peut refaire un site sans perdre ses positions si l'on garde ses adresses (ou les redirige une par une), ses contenus qui marchent, son nom de domaine, et si l'on surveille 90 jours ; ce que vous devez demander à votre prestataire, point par point. Puis la **capture** en une phrase (audit gratuit : « on vous dit ce que votre site actuel a à perdre avant que vous le refassiez »).
1. H2 **« 1. La liste des pages qui vous rapportent des clients »** — la Search Console en mots simples (quelles pages sont vues et cliquées), demander cette liste au prestataire **avant** la maquette ; preuve : un tableau des adresses actuelles avec affichages et clics.
2. H2 **« 2. Le plan de redirections, ancienne adresse → nouvelle »** — H3 **« À quoi ressemble un plan de redirections »** : **tableau titré** à deux colonnes, avec la ligne réelle Ansquer (`/lexternalisation-de-votre-logistique/` → `/stockage/externalisation-logistique/`) ; une redirection « en un seul saut », « permanente » ; comment vérifier sans outil (cliquer sur les anciennes adresses après la mise en ligne) ; micro-scène Ansquer (fin juillet 2026, 16 pages, redirections constatées au contrôle du 2 août) ; lien Google Search Central (migration avec changement d'URL).
3. H2 **« 3. Le nom de domaine : le même, et à votre nom »** — garder le domaine ; si on en change, c'est une migration à part (une phrase, lien vers la page refonte quand elle existera — pas de lien tant qu'elle n'existe pas) ; titulaire = vous (Afnic pour un `.fr`) ; e-mails liés au domaine.
4. H2 **« 4. Les textes qui marchent restent »** — ne pas « repartir de zéro » : garder titres, pages et paragraphes qui apportent des visites, les améliorer plutôt que les remplacer ; une page = une intention (deux pages sur le même sujet se font concurrence).
5. H2 **« 5. Un site plus rapide, pas seulement plus beau »** — la vitesse mobile comme critère ; preuve Ansquer (100/100/100, 11 → 1 feuille de style) ; demander la mesure de l'outil de Google avant / après ; sans nom technique.
6. H2 **« 6. La recette avant la mise en ligne »** — checklist courte : redirections testées, plan du site mis à jour, Search Console et fiche Google **à votre nom**, formulaire de contact testé, mesure des contacts en place ; « refonte site internet seo » en corps.
7. H2 **« 7. Les 90 jours d'après »** — Google re-teste tout ; observation à 30 et 60 jours, verdict à 90 (méthode maison) ; quand s'inquiéter (adresses en erreur, pages disparues de Google) vs attendre (positions qui bougent) ; preuve Ansquer ×2,8 / ×2,2 d'un mois sur l'autre **avec la précaution** « site et référencement ensemble » ; lien étude de cas.
8. H2 **« Vous changez de prestataire ? 5 vérifications avant de partir »** — ① titulaire du domaine ② propriété du code et du design (cession écrite) ③ textes, photos, base clients, e-mails ④ Search Console, Analytics, fiche Google : se faire ajouter propriétaire **avant** ⑤ bascule sans coupure (ancien hébergement gardé jusqu'au contrôle). Ce qu'un contrat propre prévoit (CGV Kaelix : code cédé en pleine propriété, remis avec les accès, résiliation libre du site vitrine) — formulé comme **notre pratique**, sans généraliser.
9. H2 **« Ce qu'exiger dans le devis »** — ledger 6 lignes : liste des adresses actuelles avec leurs visites · plan de redirections joint · recette avant mise en ligne · Search Console, Analytics, fiche Google à votre nom · 90 jours de suivi · remise du code et des accès. Lien `/services/site-vitrine` (« ce qu'une agence vous livre ») et `/contact`.
10. H2 **« Vos questions »** — 5 FAQ (ci-dessous), rendues en H3 + réponse (Markdown pur) et servies en `FAQPage` (frontmatter `faq`, voir composants).
11. **Clôture** : audit gratuit (capture) + réservation (la bande `CtaSection` du site suit l'article ; dans le MDX, une phrase avec les deux liens).

### Mots-clés

- **Tête** : refonte seo (title « Refonte de site et référencement », H1 « sans perdre son référencement », intro).
- **Secondaires** : checklist refonte seo · refonte site internet seo · refonte de site et référencement · référencement nouveau site · nom de domaine seo · seo changement de site · changer de prestataire site internet (section).
- **À ne pas viser** : refonte site internet / refaire site internet / refonte site web / refonte site web prix (ligne 10) · tout prix · « audit seo gratuit » (écarté 17/10) · noms d'outils et de technos (lexique public : zéro nom technique ; « Search Console » et « l'outil de mesure de Google » sont admis comme services Google, pas comme technos — ⚠️ à trancher au gate si Axel préfère « votre compte Google de suivi des recherches »).

### FAQ (5 — chaque réponse sourçable dans le stock)

1. **Combien de temps un site peut-il perdre des visites après une refonte, et quand s'inquiéter ?** → Google re-teste tout, les positions bougent pendant plusieurs semaines ; on observe à 30 et 60 jours, on juge à 90 ; on s'inquiète tout de suite si des anciennes adresses répondent en erreur ou si des pages disparaissent de Google — pas si une position oscille.
2. **Faut-il garder les mêmes adresses de pages ?** → Oui quand c'est possible ; sinon chaque ancienne adresse est redirigée de façon permanente vers la nouvelle, en un seul saut, et la liste est vérifiée avant la mise en ligne.
3. **Vais-je perdre mon référencement en changeant de prestataire ?** → Non si le domaine reste le même et à votre nom, si le plan de redirections est fait, et si vous gardez la propriété de la Search Console et de la fiche Google. Ce qui fait perdre des positions, c'est la bascule faite sans ces trois choses.
4. **Mon nom de domaine est au nom de l'agence : est-il à moi ?** → Le titulaire inscrit au registre est le propriétaire ; demandez à être inscrit titulaire avant toute bascule ; pour un `.fr`, le registre est tenu par l'Afnic.
5. **Que demander à l'agence avant la mise en ligne du nouveau site ?** → la liste des pages actuelles avec leurs visites, le plan de redirections, une recette (adresses testées, formulaire testé), les accès à votre nom, et un suivi de 90 jours.

### Composants, frontmatter, données structurées — ⚠️ version du contrat auditée le 03/11

- **Constat** (champ « à auditer avant le premier `/write` » du brief §2, levé aujourd'hui) : le blog de kaelix.fr est rendu par `next-mdx-remote` avec **les seuls éléments Markdown standard** (titres, paragraphes, listes, blockquote, table, liens, code) : **aucun composant du contrat** (ni `Callout`, ni `CTA`, ni `FAQ`, ni v2). **Frontmatter propre au site** (`apps/kaelix/src/lib/blog.ts`) : `title`, `excerpt`, `date`, `updatedAt`, `category`, `author`, `image` — pas de `faq`, pas de `typology`, pas de `keywords` ; JSON-LD `Article` + `BreadcrumbList` générés par la route, **pas de `FAQPage`** ; title = H1 (même champ). → **Version supportée : « Markdown pur, sans composant » (en deçà de la v1)** — à inscrire au brief §2. Conséquences pour cet article :
  - **Corps en Markdown pur** : capture = phrase + lien (`/audit-gratuit`), « à retenir » = liste, tableau titré par un H3, FAQ = H2 + H3 par question. Aucun `<Callout>`, aucun `<CTA>`, aucun `<FAQ />` (le build ne les connaît pas).
  - **Évolution minimale du site dans la même PR** (comme la Val-d'Oise a porté sa 308) : `faq` (liste `q`/`a`) lu dans le frontmatter et servi en `FAQPage` par la route (fonction `faqSchema` déjà présente dans `structured-data.ts`), et `seoTitle` optionnel pour que le title (≤ 60) diffère du H1 ; `typology` et `keywords` posés dans le frontmatter (ignorés par le site, lus par le suivi). Tout le reste du pipeline reste tel quel. **Pas d'implémentation de la v1/v2** ici : c'est une change dédiée si le blog en a besoin (contrat §4.5 : un composant s'ajoute à tous les sites actifs).
  - **Le premier article rend `/blog` indexable et l'inscrit au sitemap** (code existant : `noIndex: getAllPosts().length === 0`, sitemap `posts.length > 0`) → la spec E2E `audit-seo-17-10` (CA-1 sitemap, CA-2 blog vide) doit être mise à jour dans la PR, et une spec propre à l'article écrite rouge puis verte.
- **Schema** : `Article` (headline = H1, author Person « Axel », publisher Organization, dates) + `BreadcrumbList` (existant) + **`FAQPage`** (5 paires, mot pour mot). Pas de `LocalBusiness` (article national).
- **Visuels** : **aucun visuel first-party** en stock pour ce sujet (pas de capture du plan de redirections d'Ansquer publiable sans retouche, pas de schéma validé) → article **sans image**, sous 2 000 mots (seuil de refus de la skill), le tableau de redirections tenant lieu d'élément riche. ⛔ Pas de photo de stock. ⚠️ porté au gate : un schéma « ancienne adresse → nouvelle » pourra s'ajouter au refresh bimestriel.

### Capture & maillage

- **Capture** (invariant 10) : **audit gratuit** (`/audit-gratuit`, « lu par un fondateur, sous 72 h ouvrées ») en intro et en clôture — c'est le mécanisme de la ligne 13 (« audit gratuit ou checklist PDF » : pas de PDF en stock, l'audit prime) ; réservation via `/contact` en clôture. KPI de l'article à la weekly : contacts PostHog `contact_formulaire` audit avec `$referrer` l'article + impressions GSC sur « refonte ».
- **Entrant** : `/blog` (liste, automatique), page refonte (ligne 10, S3 : paragraphe + lien), page pivot (ligne 8), `/services/site-vitrine` (à son refresh de décembre, ligne 4 : une phrase « vous refaites un site existant ? »).
- **Sortant** (cibles existantes sur `main`) : `/audit-gratuit`, `/realisations/transports-ansquer`, `/services/site-vitrine`, `/contact`, `/tarifs` (FAQ « le code m'appartient-il ? »), `/alternative-wordpress-performance` (page pivot actuelle) · **pas de lien** vers `/agence-web-val-d-oise` (PR #81 non fusionnée) ni vers `/refonte-site-internet` (n'existe pas) — à ajouter au refresh. Externes : Google Search Central (migration avec changement d'URL), Afnic (titulaire d'un `.fr`).

### Garde-fous

- ⛔ **Aucun prix** dans l'article (ligne 10 et /tarifs portent les prix) ; aucune fourchette « une refonte coûte… ».
- ⛔ **Aucun chiffre non sourcé** : pas de « x % des refontes perdent du trafic », pas de durée moyenne de perte ; les seuls chiffres sont Ansquer (mot pour mot, avec la précaution « site et référencement ensemble ») et « 90 jours » (méthode maison, présentée comme telle).
- ⛔ **Zéro nom technique** (lexique public) : pas de WordPress, 301, HTTP, DNS, code EPP, crawl, sitemap XML nommés comme tels — dire « redirection permanente », « plan du site », « transfert du nom de domaine », « adresse de page ». « Search Console » = service Google, admis par le lexique client en petite légende… ⚠️ **à trancher au gate** : l'article le nomme (le lecteur doit savoir quoi demander), formulé « la Search Console, l'outil gratuit de Google qui montre ce que votre site reçoit comme visites ».
- ⛔ **Pas de dénigrement nominatif** de prestataires ou d'agences ; les pratiques douteuses se décrivent par catégorie (« une agence qui garde le domaine à son nom »).
- ⛔ **Aucune garantie de position** ; aucune affirmation sur ce que Kaelix fait du domaine / de la Search Console de ses clients au-delà du stock (code cédé, accès remis, domaine compris).
- **Title sans « refaire », sans « refonte site internet » ; aucun H2 commençant par « Refonte de site internet »** (partition ligne 10).
- **Règle des 90 j** : article neuf → J30 ≈ 03/12 (observation), J60 ≈ 02/01, **J90 ≈ 01/02/2027** (verdict position « refonte seo » + contacts audit).
- **Double PASS** `fact-checker` (faits Ansquer, CGV, Google / Afnic, lexique, absence de chiffre inventé) puis `contract-checker` (title/meta/H1, FAQ = FAQPage, maillage vers des cibles existantes, absence de style et de composant hors version, capture).

## 6. Points portés au gate (PR, questions fermées — le plan validé tient lieu de GO)

1. **H1** : on garde la formulation du plan (« Refaire son site sans perdre son référencement… »), le title seul portant « refonte » — ou on ancre aussi le H1 sur « Refonte … » pour écarter tout chevauchement avec la page refonte (S3) ?
2. **« Search Console »** nommée dans l'article (le lecteur doit savoir quoi demander) — on garde, ou on dit « l'outil gratuit de suivi de Google » partout ?
3. **Article sans image** (aucun visuel first-party) — on publie tel quel, ou on attend un schéma « ancienne adresse → nouvelle » ?
4. **Premier article = `/blog` indexable** et dans le sitemap : voulu maintenant (le plan prévoit 4 articles d'ici janvier) ?
5. Scroll-check à faire sur le poste (« refonte seo », téléphone et ordinateur) : un bloc d'étapes en tête de page ne change pas l'article, il confirme l'angle « ce que la liste courte ne donne pas ».

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-11-03)

> Les trois instances ont tourné **sans MCP Haloscan** (KPI bulk du 03/11 fournis dans le prompt) et **sans SERP Google** (WebSearch seulement, ordre non garanti ; google.fr, lafabriquedunet.fr, blogdumoderateur.com, kolonell.com non résolus par le réseau de la session).

### A. « refonte seo »

```
⚠️ analyse dégradée : budget d'exécution atteint (2 échecs WebFetch — www.lafabriquedunet.fr et www.blogdumoderateur.com ne résolvent pas) ; SERP reconstituée depuis WebSearch (moteur tiers, pas google.fr), top 5 lu sur titres/extraits seulement. MCP Haloscan non appelé : KPI bulk 03/11 utilisés tels quels.
VERDICT : GO
Motif : SERP 100 % guides/checklists « conserver son référencement » = format exact de l'article ; aucun acteur n'y parle à un dirigeant non technicien ; KVI 14 au 03/11 (7 au 17/10 — dérive +7, à surveiller) avec deux portes KVI 1.
Volume : 320/mois · Difficulté : KVI 14 · CPC 1,34 € · Intention : informationnelle (« refaire sans perdre »), composante commerciale (profils Malt/Codeur/ComeUp)
Jouabilité : 6-12 mois — kaelix.fr SITE_NOT_FOUND, 6 pages indexées, blog vide ; SERP mixte médias (BDM, LFDN, Siècle Digital) + agences/freelances comparables (pilot-in, digitiz, lucasfonseque.fr, agence-scroll). Portes 3 mois : « checklist refonte seo » 10/KVI 1 et « refonte site internet seo » 10/KVI 1 → title/H1 (« checklist »)
Scroll : ⚠️ non vérifiable par outil · Zéro-clic : ⚠️ non vérifiable par outil (SERP non lue) — un bloc d'étapes ne donnera pas : quoi exiger contractuellement, quoi faire quand on change d'agence ou de domaine, à quoi ressemble un plan de redirections en langage courant
Format dominant : guides longs / checklists (14 points LFDN, « guide complet 2026 », « 62 conseils et 31 erreurs »), écrits pour des pros du SEO ; 7 points TPE = match de format, mismatch de lecteur assumé = l'angle
Top 5 (ordre non garanti) : blogdumoderateur.com checklist SEO · lafabriquedunet.fr guide 2026 conserver ses positions (14 points) · digitiz.fr bonnes pratiques · lucasfonseque.fr guide 2026 préserver le SEO (freelance) · agence-scroll.com erreurs à éviter ; pilot-in.com (pos. 1 au 17/10) non remonté, position non vérifiée
PAA : ⚠️ non vérifiable par outil — questions implicites : combien de temps on perd, faut-il changer les URL, que vérifier après mise en ligne
Gap : personne n'explique à un dirigeant ce qu'est un plan de redirections ni comment l'exiger et le vérifier sans outil ; changement de prestataire / de domaine absent ou noyé ; aucun ne dit quoi mettre dans le devis ni quand s'inquiéter vs attendre
Cannibalisation : aucune avec le publié ; ligne 10 : SERP disjointes, aucune URL commune observée (seul domaine commun lafabriquedunet.fr, URL différentes) — relevé sur moteur tiers
Angle recommandé : le titre du plan ; chaque point = une question à poser au prestataire + la preuve à demander ; first-party Ansquer (100/100/100, ×2,8 avec la précaution), méthode J30/J60/J90. Auteur Axel, relecture Mickael
Persona : P3, P1 secondaire · Secondaires : refonte site internet seo, checklist refonte seo, refonte de site web et référencement, référencement nouveau site, nom de domaine seo
FAQ candidates : combien de temps on perd et quand s'inquiéter · garder les mêmes adresses et le même domaine ? · que demander à l'agence avant la mise en ligne (et si on change d'agence)
```

### B. « refonte site internet » (anti-cannibalisation ligne 10)

```
⚠️ analyse dégradée : www.google.fr ne résout pas ×2 ; MCP Haloscan absent → KPI du 03/11. Classement, PAA, AIO et scroll non vérifiables par outil.
VERDICT : GO (page ligne 10) — et GO article ligne 13 sur « refonte seo », à condition de la partition
Motif : aucune URL commune entre les deux ensembles (3 domaines communs sur des URL distinctes) ; formats et sous-intentions différents → disjonction du 17/10 confirmée, avec un risque interne de titre à corriger.
Volume : 400 · KVI 10 (17 au 17/10) · CPC 13,21 € · Intention : informationnelle dominante (guides « complet », « étapes ») à composante commerciale. refaire site internet 600 / KVI 17 : même ensemble de résultats → absorption confirmée.
Jouabilité : 6-12 mois ; annexes plus jouables pour la page : refonte site web prix (50, KVI 1), refonte site wordpress (90, KVI 7)
Scroll : ⚠️ non vérifiable par outil · Zéro-clic : ⚠️ non vérifiable (17/10 : partiel, AIO = définition/étapes)
Ensemble « refonte site internet » : codeur.com/blog guide complet 2026 · graphiste.com/blog guide complet · lafabriquedunet refonte étape par étape · seranking.com/fr réussir sa refonte · leblogdudirigeant rénover son site
Ensemble « refonte seo » : blogdumoderateur checklist · lafabriquedunet conserver ses positions (URL ≠) · digitiz · lucasfonseque · incremys, agence-scroll. Recoupement d'URL : 0.
Gap : aucun contenu ne tranche « réparer ou refaire » avec un critère ; aucun prix TPE en abonnement ; aucun ne traite le changement de prestataire comme une étape
⚠️ Risque interne : le titre de la ligne 13 commence par « Refaire son site… » alors que « refaire site internet » est absorbé par la ligne 10 et que Google réécrit « refaire » en « refonte » → title/H1 de l'article à ancrer sur « refonte » + « référencement », « refaire » toléré dans le corps.
Partition — PAGE : signes, réparer vs refaire, WordPress, prix/délai, changer de prestataire (pourquoi, comment partir), un paragraphe « vous ne perdrez pas vos positions » + lien. ARTICLE : inventaire des pages qui rankent, plan de redirections, conservation URL/contenus, perte de trafic (causes, durée, suivi), ce qu'exiger du prestataire ; aucun prix, aucune section « faut-il refaire ». Nom de domaine : décision et transfert → page ; conséquence SEO d'un changement → article (une phrase chacun, croisée par lien).
FAQ candidates (page) : combien coûte une refonte TPE · réparer ou refaire · changer de prestataire en gardant son domaine
```

### C. « changer de prestataire / d'agence web sans perdre son site » (longue traîne, section)

```
⚠️ analyse dégradée : www.google.fr et kolonell.com ne résolvent pas ; MCP Haloscan absent → KPI du prompt. SERP lue par WebSearch seulement (6 requêtes) : ordre, PAA, AIO non observés.
VERDICT : GO en SECTION de l'article ligne 13 (jamais une page dédiée) · PARI-ÉMERGENT
Motif : volumes nuls/NA mais intention ultra-qualifiée (dirigeant mécontent, prêt à changer = prospect P3 direct) ; SERP tenue par des forums et une seule agence, zéro géant.
Volume : NA (« changer de prestataire site internet » KVI 1) · « changer d'agence web » inconnu · Intention : informationnelle à bascule commerciale
Jouabilité : 3 mois (KVI 1, forums OVH/Codeur + blog d'une agence régionale)
Scroll : ⚠️ non vérifiable par outil · Zéro-clic : ⚠️ non vérifiable — les résultats visibles ne donnent pas : qui détient la Search Console / la fiche Google, le plan de redirections à la bascule, le sort des textes/photos, ce qu'un contrat d'abonnement doit garantir à la sortie
Format dominant : fils de forum (OVH community, Codeur) + articles de blog d'agence 2026 (un article par sous-question : code, domaine, hébergement, clause) + guides de registrars (transfert, 5-7 j, verrou 60 j) ; aucun service-public, Afnic cité en forum
Top 5 : kolonell.com « changer d'agence web : récupérer site, code, domaine » (+ réversibilité, clause propriété du code ; montants cités non repris) · community.ovhcloud.com « récupérer notre nom de domaine que le presta détient » / « agence en faillite » · lafabriquedunet.fr « arnaques et pratiques douteuses des agences web » · codeur.com annonces « je veux récupérer mon site » · docs OVH / Hostinger / Infomaniak transfert
Gap : (1) personne ne parle de la Search Console, d'Analytics ni de la fiche Google : l'historique part avec le compte de l'agence · (2) aucun lien entre « changer de prestataire » et « ne pas perdre ses positions » · (3) contenus (textes, photos, base clients, e-mails) absents ; juridique traité par une seule agence, sans source primaire
Cannibalisation : ligne 10 prévoit « paragraphe + lien » vers cette section → OK ; lignes 8 et 14 partagent « propriété du code » → ici la PROCÉDURE, là-bas le CHOIX
Les 5 questions prioritaires : ① titulaire du nom de domaine (registre, compte, transfert ; .fr → Afnic ; cas agence fermée) ② le code et le design m'appartiennent-ils (droit d'auteur = l'agence sauf cession écrite) ③ récupérer textes, photos, base clients, e-mails ④ propriétaire de la Search Console, d'Analytics et de la fiche Google : se faire ajouter AVANT de partir ⑤ basculer sans perdre une position (redirections adresse par adresse, sans coupure, ancien hébergement gardé jusqu'au contrôle) — + préavis et reconduction du contrat
FAQ candidates : mon nom de domaine est au nom de l'agence, est-il à moi ? · l'agence refuse de me donner le code, que puis-je récupérer ? · vais-je perdre mon référencement en changeant de prestataire ?
```
