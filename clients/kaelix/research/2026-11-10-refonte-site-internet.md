# Brief de production — Création de `/refonte-site-internet` : « Refonte de site internet : réparer ou refaire ? »

| | |
|---|---|
| **Client** | `kaelix` (l'agence, cliente d'elle-même) |
| **Sujet du plan** | 11/2026 **S3** — **ligne 10**, cluster E (refonte) — persona **P3** (repreneur / créateur déjà lancé, site existant qui fait défaut), P1 en secondaire |
| **Typologie** | **evergreen** — **page business** du site (route TSX propre `apps/kaelix/src/app/(public)/refonte-site-internet/page.tsx`, copy `apps/kaelix/src/lib/data/refonte-page.ts`, comme la page Val-d'Oise de la PR #81) ; le contrat de contenu s'applique sur le fond (véracité, lexique, FAQ, maillage), pas sur la whitelist MDX (`research/README.md`) |
| **URL cible** | `/refonte-site-internet` (à créer) |
| **Recherche faite le** | 2026-11-10 (`/research` en exécution planifiée « Production du mois » : 4 `serp-analyst` en parallèle + KPI Haloscan du jour par API directe) |
| **Statut** | ✅ **`go-11/2026` (GO mensuel d'Axel du 02/11, §1.30) — brief prêt, aucun feu vert à redemander → `/write` enchaîné dans la même exécution** |

> **Semaine du sujet** : la ligne 10 porte `11/2026 S3`. S1 = 26/10-01/11 (semaine du 1er), S2 = 02/11-08/11, **S3 = 09/11-15/11**. Le 10/11 est dans la semaine du sujet : il se lance. (Ligne 14 = S4 à partir du 16/11 : « en attente de sa semaine ».)

> ⚠️ **Conditions de l'analyse (contrôles empêchés, tels quels).** (1) Le MCP Haloscan n'est pas chargé dans la session planifiée → **KPI du jour par `scripts/haloscan-fetch.mjs bulk` / `questions` / `related` / `match` (API directe, §1.29)**, crédit vérifié par appel réel le 10/11 (9 811 crédits mots-clés). (2) `haloscan-fetch.mjs scrap "refonte site internet"` a rendu une SERP vide (`raw: ""`) → **SERP Google réelle non observable par outil** ; les 4 mini-briefs ont lu la SERP par procuration (WebSearch, ordre non garanti ; google.fr, codeur.com, lafabriquedunet.fr, wpmarmite.com, kaelix.fr non résolus par le réseau de la session) et sont tous marqués `⚠️ analyse dégradée`. (3) **Scroll-check : non vérifiable** (pas de navigateur en session planifiée) — pubs probables en tête (CPC 13 €), AIO signalée le 17/10 ; à dérouler sur le poste si Axel le souhaite. (4) **Zéro-clic : non vérifiable par outil aujourd'hui** (17/10 : partiel — définition / étapes) ; l'angle qui force le clic est retenu quoi qu'il en soit (§1). (5) `domain kaelix.fr` : `SITE_NOT_FOUND` (aucune position connue → rien à cannibaliser côté Haloscan). (6) GSC : clé absente de la session (`GSC_SERVICE_ACCOUNT_B64` / `GSC_KEY_FILE` non posées) → étape B et inspection non vérifiables. (7) Fourchettes de prix du marché relevées dans des résumés de résultats, pages non ouvertes → **non vérifiables, non reprises** (§3, §5).

---

## 1. Verdict

**GO — CRÉATION d'une page-guide `/refonte-site-internet` pour un dirigeant de TPE qui FAIT FAIRE, ancrée sur la décision « réparer ou refaire » puis sur le prix en abonnement.** Les quatre mini-briefs convergent : la SERP « refonte site internet » est faite à 100 % de guides génériques « définition / 4 types / étapes / cahier des charges » publiés par des marketplaces et des médias (codeur.com, graphiste.com, La Fabrique du Net, SE Ranking, Le Blog du Dirigeant) ; **aucun ne donne au non-technicien un critère de décision entre réparer et refaire, aucun ne connaît le modèle « 0 € de frais de création + abonnement », aucun ne montre un avant/après réel** — c'est le gap, et c'est exactement notre stock (Ansquer est une refonte, chiffrée).

Trois conditions au GO (reprises en garde-fous §5) :

1. **Partition ligne 10 / ligne 13 tenue** (brief du 03/11, §2) : aucun H2 sur les redirections, la perte de trafic, la Search Console ni « ce qu'exiger du prestataire » — un seul paragraphe « vous ne perdrez pas vos positions » + lien vers l'article (PR #82) **quand il existe** ; « garder son nom de domaine » = **décision et transfert** ici, conséquence SEO là-bas.
2. **Partition avec la page pivot `/alternative-wordpress-performance`** (réécriture ligne 8, 12/2026 S4) : la page refonte porte le **diagnostic** (« WordPress lent, cassé ou plus maintenu : réparer, refaire sous le même outil, ou changer de socle ? ») ; la pivot garde le **comparatif catégoriel** ; un seul lien de la section vers la pivot, sur le comparatif. À la réécriture de décembre, la pivot cède « Processus de migration » et ses 3 FAQ migration à la page refonte (lien) — **à inscrire au `/research` de la ligne 8**, pas de 301 maintenant.
3. **Porte 3 mois « agence refonte site internet »** (100, KVI 4, CPC 15,34 € — l'intention exacte « faire faire ») portée par une section dédiée « Confier sa refonte à une agence ».

### KPI Haloscan — bulk du **2026-11-10** (API directe)

| Mot-clé | Volume | KVI (10/11) | CPC | Rôle sur la page |
|---|---|---|---|---|
| **refonte site internet** | **400** | **15** (10 au 03/11, 17 au 17/10 — SERP instable, ±7) | 13,21 € | **principal** — title, H1, H2 |
| refaire site internet · refaire un site internet | 600 · 720 | 17 · 18 | 13,39 € | **absorbés** (verdict B : ≈ 8 titres sur 10 « refonte », 5 URL communes dans les 15 premiers) — « refaire » dans le title et un H2 « Quand refaire son site internet ? » |
| refonte site web · refonte de site web · refonte de site internet | 300 · 500 · 170 | 14 · 13 · 13 | 29,41 · 10,47 · 6,32 € | variantes lexicales, en corps |
| prix refonte site internet · refonte site internet prix · refonte site web prix · tarif refonte site internet · refonte site internet tarif | 110 · 70 · 50 · 50 · 50 | 13 · 13 · 20 · 21 · 15 | 6,40 · 6,30 · 4,44 · 2,99 · 2,99 € | **H2 prix** (« Combien coûte une refonte… ») + 2 FAQ |
| agence refonte site internet | 100 | **4** | 15,34 € | **porte 3 mois** — H2 « Confier sa refonte à une agence » |
| refonte site wordpress · prix refonte site web wordpress · site wordpress lent | 90 · 30 · 20 | 10 · 10 · 17 | 18,76 · 0,97 · 10,71 € | **H2 WordPress** (diagnostic) + 1 FAQ ; « site wordpress lent » reste absorbé (écarté comme page le 17/10) |
| pourquoi refaire son site internet · quand refaire son site internet · pourquoi faire une refonte de site internet | 10 · NA · 10 | 1 · 19 · 9 | — | H2 « six signes » + FAQ « quand / tous les combien » |
| refonte site vitrine · devis refonte site web | 30 · 30 | 11 · 1 | 4,60 · 4,83 € | corps (« une refonte est un site vitrine comme un autre ») ; « devis » dans la section prix |
| refonte site internet montpellier · refonte site internet paris | 40 · 40 | 1 · 13 | — | une phrase « à Montpellier et en Île-de-France » dans la section agence (lien Montpellier) — jamais de page locale « refonte » |
| refonte seo | 320 | 14 | 1,34 € | **réservé à l'article ligne 13 (PR #82)** — ni title, ni H2 |
| refonte site e commerce · refonte site prestashop | 90 · 40 | 13 · 1 | 30,48 · 10,85 € | **hors page** (boutique = `/services/boutique-en-ligne`) ; une FAQ « je vends en ligne » renvoie à la boutique |

- **Intention** : informationnelle-décisionnelle (« faut-il, quand, signes ») à bascule commerciale (CPC 13 €, « agence refonte » à côté). Le lecteur sait que son site ne va plus ; il cherche à décider, puis à savoir ce que ça coûte.
- **Format dominant** : guides longs « guide complet 2026 / étape par étape » (profondeur non mesurée, hôtes non résolus). Une page service courte serait un mismatch → **page-guide ≈ 1 500-1 800 mots** (FAQ comprise), grille de décision + tableau prix, structure de page business (sections asymétriques 4/8 comme la page Val-d'Oise), pas un article.
- **Zéro-clic** : non vérifiable aujourd'hui ; partiel au 17/10. Ce que le résumé-réponse donne : définition, types, étapes, « le prix dépend du périmètre ». Ce qu'il ne donne pas, donc **l'angle qui force le clic** : un critère de décision réparer/refaire lisible par un non-technicien, le prix d'une refonte **en abonnement** (0 € de frais de création), le sort du nom de domaine et des e-mails, un avant/après réel.
- **Jouabilité** (§1.28) : tête « refonte site internet » à 6-12 mois (kaelix.fr `SITE_NOT_FOUND`, 7 pages indexées au 02/11, SERP de médias et marketplaces — pas de géant, aucune agence TPE) ; portes 3 mois : « agence refonte site internet » (KVI 4), « pourquoi refaire son site internet » (KVI 1), « refonte site wordpress » (KVI 10), « devis refonte site web » (KVI 1). ⚠️ Le plan écrivait « 800 » : c'est l'addition refonte + refaire, pas le KPI du jour.
- **Persona** : P3 (dirigeant dont le site existant fait défaut : lent, cassé, prestataire disparu, offre qui a changé) ; P1 en lecture secondaire. **Auteur affiché** : Mickael (technique — c'est lui qui pose le diagnostic) ; la section prix et agence parle au nom des deux fondateurs.

## 2. Anti-cannibalisation (3 fronts)

| Front | Constat |
|---|---|
| **Haloscan** | `domain kaelix.fr` → `SITE_NOT_FOUND` : aucune position connue, rien à cannibaliser par ce canal (non vérifiable au-delà) |
| **`tracking.md`** (le publié) | accueil (famille TPE/PME) et `/audit-gratuit` (audit site internet gratuit) : intentions disjointes ; l'audit est la **capture** de cette page, pas sa concurrente. PR #81 (Val-d'Oise) et #82 (article refonte seo) ouvertes : voir ci-dessous |
| **`content-plan.md`** (15 lignes) | **ligne 13** (article « refonte seo », PR #82) : SERP disjointes **re-confirmées le 10/11** (mini-brief A : 0 URL commune observée — codeur / graphiste / LFDN-étapes contre BDM / LFDN-conserver / digitiz) ; partition du 03/11 appliquée telle quelle (table ci-dessous). **Ligne 8** (page pivot, 12/2026 S4) : **conflit réel avec la page actuelle** `/alternative-wordpress-performance` (H2 « Les limites de WordPress », « Pourquoi migrer ? », « Processus de migration », FAQ migration / référencement / contenu) → partition tranchée au §1 (diagnostic ici, comparatif là-bas ; la migration passe ici à la réécriture de décembre). **Ligne 5** (/tarifs, « prix site vitrine ») et **ligne 12** (guide « combien coûte un site internet », coût total) : la section prix ne porte que « combien coûte une **refonte** », jamais « prix site vitrine », « tarifs » ni « combien coûte un site internet » ; un lien vers /tarifs (la grille), le guide recevra son lien à sa publication. **Ligne 4** (/services/site-vitrine, J90 le 15/12) : son bloc « Vous avez déjà un site ? » (4 points, « même prix, même abonnement ») reste tel quel — **page gelée, non touchée** ; la page refonte le cite et renvoie vers la page service pour le détail de la création. **Ligne 14** (agence ou freelance, S4) : partage « le code vous appartient » → ici la **remise du code à la résiliation** (CGV), là-bas le choix du prestataire |

**Partition ligne 10 (page) / ligne 13 (article)** — réglée le 03/11, appliquée ici :

| Sous-intention | Page refonte (cette page) | Article (PR #82) |
|---|---|---|
| signes qu'il faut refaire, réparer vs refaire, WordPress lent / cassé | **page** (H2 « six signes », H2 WordPress) | — |
| prix et délai d'une refonte TPE, abonnement vs devis unique | **page** (H2 prix, tableau) | — (aucun prix) |
| inventaire des pages, plan de redirections, conservation des adresses | un paragraphe « vous ne perdrez pas vos positions » + lien vers l'article **si publié** | **article** |
| perte de trafic après refonte, suivi, 90 jours | — (une phrase : « on surveille les trois premiers mois ») | **article** |
| ce qu'exiger du prestataire | — (remplacé par « ce qu'un devis de refonte doit détailler », côté prix) | **article** |
| changer de prestataire : qui détient domaine, code, comptes | paragraphe « vous pouvez partir » (CGV : code remis) + lien | **article** (section dédiée) |
| garder son nom de domaine | **décision et transfert** (H2 « ce que vous gardez ») | conséquence SEO d'un changement (une phrase) |

**Partition avec la page pivot `/alternative-wordpress-performance`** (jusqu'à sa réécriture, ligne 8) :

| Sous-intention | Page refonte | Pivot actuelle | Pivot réécrite (12/2026, à inscrire au /research ligne 8) |
|---|---|---|---|
| WordPress lent / cassé / plus maintenu : réparer, refaire sous le même outil, changer de socle | **page** (diagnostic, 3 branches en 2 lignes chacune, sans comparatif) | « Les limites de WordPress » (reste) | comparatif catégoriel seul |
| comparatif par catégories (self-service / agence classique / abonnement), coût 3 ans toutes offres | un lien « comparer les trois modèles » | **pivot** | **pivot** |
| processus de migration, FAQ « migration risquée ? / perdre mon référencement ? / recréer mon contenu ? » | H2 « Une refonte chez Kaelix en 3 à 5 semaines » (processus) | pivot (doublon toléré jusqu'en décembre) | **cédé à la page refonte** (lien) |

## 3. Content gap

Ce que couvrent les 3-5 premiers résultats (relevé par procuration, ordre non garanti) : définition de la refonte, ses « 4 types » (graphique, ergonomique, technique, éditoriale), les étapes (objectifs → cahier des charges → budget → prestataire → recette), les erreurs SEO à éviter, « tous les 2-3 ans » affirmé sans justification (lespepitestech, 2021), et des fourchettes de prix contradictoires au devis unique (de « 2 500 € » chez un freelance à « 8 000 € médian » chez un annuaire — **non vérifiées, non reprises**).

Ce qui manque, pour un dirigeant de TPE qui fait faire :

1. **Un critère de décision réparer / refaire** qu'un non-technicien peut vérifier lui-même (les concurrents donnent des symptômes — « obsolète », « UX médiocre » — jamais des signes vérifiables ; seul lucasfonseque.fr ébauche « extension en conflit, version PHP, thème abandonné » sans seuils).
2. **Le modèle abonnement** : toute la SERP raisonne en devis unique ; personne ne sépare le prix de la refonte du coût de vie du site après (hébergement, maintenance, prochaine refonte) — La Fabrique du Net précise elle-même que ses montants « n'incluent pas les coûts récurrents » (résumé WebSearch, non vérifié à la source).
3. **La question du socle** : aucun résultat ne pose « rester sous WordPress ou changer d'outil ? » ; tout « refonte WordPress » suppose WordPress → WordPress.
4. **Le nom de domaine et les e-mails** traités comme une décision (garder, transférer, qui est titulaire) — nulle part.
5. **Un avant/après réel chiffré** d'une refonte — nulle part. Ansquer en est une (§4).

## 4. Information gain — stock first-party (zéro sollicitation ; tout est dans le stock, aucun manque)

| Élément | Source dans le stock | Usage sur la page | Véracité |
|---|---|---|---|
| **Ansquer = une refonte réelle** : ancien site à modèle, 3 extensions à maintenir, 11 feuilles de style, 12 scripts dont une vieille bibliothèque → site codé à la main, 1 feuille de style, 9 scripts, 0 extension ; SEO / bonnes pratiques / accessibilité 100 · 100 · 100, performance mobile 78 (mesure du 7 septembre 2026) ; **affichages ×2,8 et clics ×2,2 d'un mois sur l'autre, site et référencement local ensemble** (GSC, fenêtres 28 j, août → septembre 2026) | `apps/kaelix/src/lib/data/portfolio.ts` (bloc `comparison` + `results`), brief §7 | H2 « Une refonte chez Kaelix » : la preuve, mot pour mot ; lien vers `/realisations/transports-ansquer` | ✅ publié ; ⚠️ **jamais « un mois après le site »**, jamais « plus rapide » (les trois 100 ne mesurent pas la vitesse ; perf mobile = 78) |
| Refonte = site vitrine comme un autre : **80 € HT/mois, sans frais de création**, hébergement, nom de domaine, mises à jour, corrections, interlocuteur compris ; **2 880 € HT sur 3 ans** (80 × 36) ; résiliation libre, **code source remis** | `pricing.ts` (`showcasePlan`), `showcase-guide.ts` (`showcaseExisting`, `showcaseMaintenance`), CGV art. 5-6, page Val-d'Oise (recette du tableau) | H2 prix : tableau 2 colonnes « refonte payée une fois » (postes nommés, **aucun montant**) vs Kaelix (0 / 80 / 2 880) ; FAQ | ✅ grille v7 en prod ; la boutique (150 €, sans engagement) en une phrase |
| **Livraison en 3 à 5 semaines** ; l'ancien site reste en ligne, le nouveau se construit à côté, bascule le jour choisi ; chaque ancienne adresse redirige | `showcase-guide.ts` (`showcaseSteps`, `showcaseExisting`) | H2 « Une refonte chez Kaelix en 3 à 5 semaines » | ✅ publié |
| **Audit gratuit lu par un fondateur, rapport sous 72 h ouvrées**, « ce qu'il faut garder et ce qu'il faut refaire » ; grille à 4 piliers (vitesse, référencement, parcours, ce qui freine) | `/audit-gratuit` (page gelée, PR #36), `docs/grille-audit-gratuit.md` | **capture principale** (hero + fin de la grille des six signes + FAQ) | ✅ publié |
| **Engagement à la livraison : score mobile « 90 et plus »** dans l'outil de mesure de Google ; 100 en accessibilité, bonnes pratiques et SEO | `performance.ts` (`lighthouseMobile`), `/garanties` | section agence (une ligne) | ✅ publié ; à écrire « à la livraison », jamais comme vitesse constatée sur Ansquer (78) |
| **Méthode des 90 jours** (Google teste une page refaite pendant environ trois mois) | méthode maison (ce repo, invariant 6), déjà publiée dans l'article PR #82 | une phrase dans la section agence (« on surveille les trois premiers mois ») | ✅ méthode maison |
| Deux cousins fondateurs, Mickael écrit le site (10 ans de développement), Axel s'occupe de la visibilité | brief §7, `/a-propos` | auteur et section agence | ✅ publié |
| Signaux d'achat de l'ICP : site WordPress cassé, lent ou plus maintenu ; prestataire disparu ; offre qui a changé (reprise, déménagement) | `icp.md` | les six signes sont écrits depuis ces signaux (ce que nous voyons chez nos prospects), formulés comme **notre repère**, pas comme une statistique | ✅ first-party méthode — **aucun chiffre de fréquence** (« tous les 2-3 ans » de la SERP n'est pas repris) |

**Chiffres externes admis** (un seul, sourçable) : l'outil de mesure de Google classe un score de performance de **0 à 49 en « faible » (rouge)** — source officielle Google (documentation PageSpeed Insights / web.dev « scoring ») ; à vérifier par le `fact-checker` ; retiré si non confirmé. Aucun seuil de temps de chargement en secondes (non sourcé → absent). Aucune fourchette de prix du marché (§3).

## 5. Brief éditorial

### Title / meta / H1

| Champ | Valeur | Justification |
|---|---|---|
| **Title** (≤ 60 hors suffixe `| Kaelix`) | **« Refonte de site internet : réparer ou refaire, à quel prix ? »** (60) | tête + « refaire » (absorbe 600/720) + la famille prix (≈ 240/mois) ; **aucun « référencement »** (ligne 13), aucun « WordPress » |
| **Meta** (≤ 160) | « Votre site vieillit ? Six signes pour décider entre réparer et refaire, et le prix d'une refonte pour une TPE : 80 € HT/mois sans frais de création, livrée en 3 à 5 semaines. » (≈ 158) | réponse directe + prix d'entrée + délai ; à compter au `/write` |
| **H1** (≠ title) | **« Refonte de site internet : réparer ou refaire ? Six signes pour décider, et ce que ça coûte »** | la formulation du plan (« réparer ou refaire ? ») + la promesse de la page |
| **Kicker** (hero compact) | « Refonte » | |
| **Lead** (réponse directe, ~90 mots) | On ne refait pas un site parce qu'il a trois ans : on le refait parce qu'il freine l'activité. Un ou deux signes → une réparation suffit souvent ; trois signes, ou un prestataire disparu → on refait. Chez Kaelix, une refonte est un site vitrine comme un autre : 80 € HT par mois, sans frais de création, livré en 3 à 5 semaines, votre nom de domaine et vos adresses conservés. Si vous hésitez, l'audit gratuit tranche en 72 h ouvrées. | |

### Plan H2/H3

1. **Hero** — H1, lead, **bouton audit gratuit** (capture principale de la page, plan colonne Capture) + bouton rendez-vous 30 min (action principale du site) ; pas de téléphone dans le hero (page nationale, pas locale).
2. H2 **« Quand refaire son site internet ? Les six signes qui ne trompent pas »** — six H3 courts, chacun vérifiable par le dirigeant sans outil ou avec l'outil gratuit de Google : ① il s'ouvre lentement sur téléphone (score en rouge dans l'outil de Google) ; ② il s'affiche mal sur téléphone (texte minuscule, boutons impossibles à toucher) ; ③ personne n'a les accès (nom de domaine, hébergement, code) ou le prestataire a disparu ; ④ les mises à jour cassent le site, ou n'ont plus été faites depuis plus d'un an (extensions abandonnées, thème plus maintenu) ; ⑤ il ne dit plus ce que vous faites (offre, zone, équipe ont changé) et n'apporte aucune demande ; ⑥ chaque modification se facture ou attend des semaines. **Repère de lecture** (notre règle, dite comme telle) : un ou deux signes, hors ③ et ④ → réparer ; trois signes, ou ③, ou ④ → refaire. Clôture : « Vous hésitez entre deux cases ? L'audit gratuit… » (lien).
3. H2 **« Réparer : quand cela suffit, et combien de temps ça tient »** — court (≈ 120 mots) : réparer = corriger le contenu, compresser des images, remettre à jour, changer d'hébergement ; ça tient si le socle est sain et maintenu ; ça ne tient pas si la réparation revient tous les trimestres (le cumul des rustines finit par coûter la refonte). Aucun montant.
4. H2 **« Site WordPress lent, cassé ou plus maintenu : réparer, refaire sous le même outil ou changer de socle ? »** — WordPress nommé **comme catégorie** (« site à modèle et à extensions », brief §3 : on compare des catégories ; « WordPress » est déjà nommé sur la pivot et dans le pied de page « Quitter WordPress ») ; trois H3 de 2-3 lignes : **réparer** (quand : extensions à jour disponibles, thème maintenu, hébergement sain) · **refaire sous le même outil** (quand : vous tenez à gérer vous-même, et quelqu'un suivra les mises à jour — ce que ça implique) · **changer de socle pour un site codé à la main** (quand : signes ③ ④ ⑥ ; ce que ça change : plus d'extension à maintenir, c'est nous qui tenons le code). Un seul lien vers la pivot : « comparer les trois modèles ». **Aucun chiffre de temps de chargement ni de score WordPress** (la pivot actuelle en porte, non sourcés — on ne les reprend pas).
5. H2 **« Combien coûte une refonte de site internet pour une TPE : abonnement ou devis unique ? »** — intro (le devis unique est la norme de la SERP ; la question n'est pas le premier chèque, c'est qui porte le site après) ; H3 **tableau** « Ce que vous payez, et ce que vous gérez, sur trois ans » — colonnes « Refonte payée une fois » / « Kaelix, par abonnement » ; lignes : au départ (la refonte, réglée d'avance / 0 € de frais de création) · chaque mois (hébergement et nom de domaine à part / 80 € HT tout compris) · mises à jour et corrections (à votre charge ou à l'acte / comprises) · quand l'activité change (une nouvelle prestation / on modifie le site avec vous) · la prochaine refonte (dans quelques années, un nouveau devis / le site évolue, pas de refonte à repayer) · sur 3 ans (la refonte plus tout ce qui s'ajoute / 2 880 € HT, code remis si vous partez). Note : « nous ne chiffrons que notre offre ». H3 **« Ce qu'un devis de refonte doit détailler »** (liste : reprise des contenus, redirection de chaque ancienne adresse, performance mesurée à la livraison, qui est titulaire du domaine, qui détient le code, ce qui est compris après la mise en ligne) — formulé côté prix, **pas** « ce qu'exiger du prestataire » (article). Boutique : une phrase (150 € HT/mois, sans engagement) + lien. Lien /tarifs (« tous nos tarifs »).
6. H2 **« Ce que vous gardez : votre nom de domaine, vos e-mails, vos positions »** — décision : on garde le domaine (c'est lui que vos clients connaissent) ; transfert vers notre gestion ou maintien chez votre registraire, **vous restez titulaire** ; vos adresses e-mail continuent de fonctionner ; **un paragraphe** « vous ne perdrez pas vos positions : chaque ancienne adresse redirige vers la nouvelle page, les contenus qui rapportent sont repris » + **lien vers l'article (PR #82) rendu seulement si l'article existe dans le blog au build** (évite un lien mort selon l'ordre des fusions) ; une phrase « et si vous partez : le code et les accès vous sont remis » (CGV art. 5-6).
7. H2 **« Confier sa refonte à une agence : comment nous travaillons, en 3 à 5 semaines »** (porte « agence refonte site internet ») — les étapes de `showcaseSteps` ramenées à la refonte : audit gratuit → ce qu'on garde / ce qu'on refait → le nouveau site se construit à côté, l'ancien reste en ligne → bascule le jour choisi, anciennes adresses redirigées → surveillance des trois premiers mois (méthode des 90 jours, une phrase) ; engagement à la livraison (score mobile « 90 et plus », 100 × 3) ; **preuve Ansquer** mot pour mot (3 extensions → 0, 11 → 1 feuilles de style, 100 · 100 · 100, ×2,8 / ×2,2 « site et référencement local ensemble ») + lien étude de cas ; une phrase de zone : « à Montpellier (lien) et en Île-de-France, et à distance partout en France ».
8. H2 **« Vos questions sur la refonte »** — FAQ ×6 (ci-dessous) servies en `FAQPage`, texte visible = JSON-LD mot pour mot.
9. **Bande de clôture** (`CtaSection variant="closing" halo="arc"`).

### Mots-clés

- **Principal** : refonte site internet (title, H1, H2 prix, corps).
- **Secondaires** : refaire (un) site internet (title + H2 « Quand refaire son site internet ? »), refonte site web / refonte de site web (corps), prix refonte site internet / refonte site internet prix / tarif (H2 prix + FAQ), agence refonte site internet (H2 agence), refonte site wordpress + site wordpress lent (H2 WordPress + FAQ), pourquoi / quand refaire son site internet (H2 signes + FAQ), devis refonte (H3 devis), refonte site vitrine (corps).
- **À ne pas viser** : refonte seo / référencement (ligne 13) · prix site vitrine, tarifs, combien coûte un site internet (lignes 5, 12) · alternative à WordPress, migration (pivot) · refonte e-commerce / Prestashop (boutique) · tout nom de concurrent, toute fourchette du marché.

### FAQ (6 — chaque réponse sourçable dans le stock)

1. **Quand faut-il refaire son site internet ?** → les six signes en une phrase, le repère 1-2 / 3, l'audit gratuit (non : pas de calendrier).
2. **Tous les combien refait-on un site internet ?** → pas un calendrier mais des signes ; un site codé pour vous et tenu à jour évolue avec l'activité, il ne se « refait » pas à date fixe (contre le « 2-3 ans » de la SERP, sans le citer).
3. **Combien coûte une refonte de site pour une TPE chez Kaelix ?** → 0 € de frais de création, 80 € HT/mois tout compris (2 880 € HT sur 3 ans), boutique 150 € sans engagement ; aucun devis à part pour un site vitrine ; lien /tarifs.
4. **Un devis unique de refonte, ça comprend quoi, et après la mise en ligne ?** → ce que le devis doit détailler ; ce qui reste à payer après (hébergement, maintenance, corrections, prochaine refonte) — sans montant.
5. **Puis-je garder mon nom de domaine et mes adresses e-mail ?** → oui ; titulaire = vous ; transfert ou maintien ; e-mails inchangés.
6. **Faut-il rester sous WordPress pour refaire son site ?** → non obligatoire ; les trois branches en deux lignes ; audit gratuit pour trancher ; lien pivot.

### Composants & données structurées

- Page TSX : `HeroCompact` (kicker « Refonte », `testId="hero-refonte"`), sections asymétriques 4/8 avec `data-testid` (`refonte-signes`, `refonte-reparer`, `refonte-wordpress`, `refonte-prix` + `refonte-prix-table`, `refonte-domaine`, `refonte-agence`, `refonte-faq`), `FaqList`, `CtaSection` ; aucun style dans la copy (`refonte-page.ts` = données).
- JSON-LD : `organizationSchema()` (nœud rendu sur la page, comme #81), **`Service`** « Refonte de site internet » (`serviceSchema`, `areaServed` France — page nationale, pas de `LocalBusiness`, pas d'adresse ni d'horaires), `BreadcrumbList`, `FAQPage` (6, mot pour mot). Pas de `Product`/`Offer` (le prix vit sur /tarifs ; `seoServiceSchema` n'est pas concerné).
- Montants depuis `@kaelix/domain/pricing` (`showcasePlan.price`, `shopPlan.price`), jamais en dur ; `lighthouseMobile.label` pour l'engagement.

### Capture & maillage

- **Capture** : **audit gratuit** en premier (hero, fin des six signes, FAQ, bande), rendez-vous 30 min en second (hero, bande) — conforme à la colonne Capture du plan (audit gratuit) et à la hiérarchie du site (rendez-vous = action principale).
- **Entrant** : pied de page, colonne Services (« Refonte de site internet », `footerLinks.services`) ; sitemap (`entry("/refonte-site-internet", 0.8)`) ; `/services/site-vitrine` (bloc « Vous avez déjà un site ? ») **à son refresh du 15/12 seulement** (gelée) ; pivot ligne 8 à sa réécriture ; article PR #82 à son prochain refresh (J90). Accueil gelé : non touché.
- **Sortant** (cibles existantes sur `main`) : `/audit-gratuit`, `/realisations/transports-ansquer`, `/services/site-vitrine`, `/services/boutique-en-ligne`, `/tarifs`, `/alternative-wordpress-performance` (un seul lien, sur le comparatif), `/agence-web-montpellier`, `/a-propos`, `/garanties` · **conditionnel** : `/blog/refonte-site-sans-perdre-referencement` (rendu si l'article existe au build) · **pas de lien** vers `/agence-web-val-d-oise` (PR #81 non fusionnée) ni `/agence-web-paris` (en 308 après #81). Externe : la documentation Google du score de performance (seuils), si le `fact-checker` la confirme.

### Garde-fous

- ⛔ **Aucune fourchette de prix du marché, aucun montant concurrent, aucun nom de concurrent** ; nos seuls montants : 0 / 80 / 2 880 / 150 / « dès 199 € HT/mois » (si la formule Local est citée).
- ⛔ **Aucun chiffre non sourcé** : pas de « 3 secondes », pas de « 50 à 70 », pas de « 43 % du web », pas de « tous les 2-3 ans ». Le seul seuil externe (0-49 = faible) est sourcé ou retiré.
- ⛔ **Ansquer** : chiffres mot pour mot de `portfolio.ts` ; « d'un mois sur l'autre, site et référencement local ensemble » ; jamais « un mois après le site », jamais « plus rapide » (perf mobile 78).
- ⛔ **Aucune garantie de position** ; « vous ne perdrez pas vos positions » se formule « on fait ce qu'il faut pour ne pas en perdre : chaque ancienne adresse redirige… » (leçon du fact-check de #82).
- **Lexique public** (`apps/kaelix/CLAUDE.md`) : zéro nom technique (ni version PHP, ni nom d'extension, ni « CMS » — dire « outil », « site à modèle et à extensions ») ; « WordPress » admis comme catégorie, **à trancher au gate s'il reste dans un H2** ; « dès 199 € HT/mois » si le SEO est cité ; jamais « liens », « backlink », « cumulatif ».
- **Partition ligne 13** : aucun H2 sur redirections / perte de trafic / Search Console / « exiger du prestataire » ; « refonte seo » et « référencement » hors title et H2.
- **Partition pivot** : un seul lien vers `/alternative-wordpress-performance`, aucun « processus de migration » en H2 (dit « une refonte chez Kaelix en 3 à 5 semaines »).
- Pages gelées non touchées : accueil, `/audit-gratuit`, `/services/site-vitrine` (J90 15/12), `/agence-web-montpellier` (06/12), pivot (réécriture ligne 8).
- Longueur : 1 500-1 800 mots FAQ comprise ; title ≤ 60, meta ≤ 160, H1 unique ≠ title.
- Tests : spec E2E `e2e/kaelix/refonte-site-internet.spec.ts` (title/meta/H1 ; six signes ; tableau prix aux seuls montants 0/80/2 880 ; FAQPage = FAQ visible ; Service sans LocalBusiness + Organization unique ; sitemap + pied de page ; capture et lexique) **vue rouge sur le build de référence** (page absente) puis verte ; `site-public-sans-agents` étendu à la page.

## 6. Points portés au gate (PR, questions fermées — le plan validé tient lieu de GO)

1. **« WordPress » dans un H2** (« Site WordPress lent, cassé ou plus maintenu… ») : on garde (c'est la requête, et la catégorie est déjà nommée sur le site), ou on le retire des titres pour ne le dire qu'en corps ?
2. **Title à 60 caractères** « Refonte de site internet : réparer ou refaire, à quel prix ? » : on garde (prix dans le title, famille ≈ 240/mois), ou « Refonte de site internet : réparer ou refaire ? » (46) ?
3. **Le lien vers l'article « refonte seo »** n'apparaît que si la PR #82 est fusionnée (rendu conditionnel au build) : d'accord, ou on attend #82 pour fusionner celle-ci ?
4. **Le seuil « 0 à 49 = faible » de l'outil de Google** (signe ①) : on garde avec sa source, ou on dit seulement « en rouge » sans chiffre ?
5. **Hors PR, à inscrire** : au `/research` de la ligne 8 (pivot, décembre), céder « Processus de migration » et les 3 FAQ migration à la page refonte ; au refresh de `/services/site-vitrine` (15/12), un lien « réparer ou refaire ? » depuis le bloc « Vous avez déjà un site ? ».

## Annexe — mini-briefs `serp-analyst` bruts (2026-11-10)

> Les quatre sont marqués `⚠️ analyse dégradée` (MCP Haloscan non chargé → KPI du bulk du 10/11 ; SERP par WebSearch, google.fr / codeur.com / lafabriquedunet.fr / wpmarmite.com / kaelix.fr hors réseau). Reproduits tels quels, condensés aux lignes utiles.

### A. « refonte site internet » (principal)

VERDICT : GO — à trois conditions : (1) partition ligne 13 tenue, (2) la page pivot cède sa section « migration » à la réécriture de décembre, (3) porte 3 mois « agence refonte site internet » en section dédiée. Motif : SERP 100 % guides génériques « étapes / définition / types » (marketplaces et médias) ; personne ne donne au dirigeant de TPE un critère « réparer ou refaire » ni un prix en abonnement.
Volume 400 · KVI 15 au 10/11 (10 au 03/11, 17 au 17/10 — dérive ±7) · CPC 13,21 € · Intention informationnelle dominante à bascule commerciale. ⚠️ le plan dit « 800 » : addition refonte + refaire.
Jouabilité : 6-12 mois pour la tête ; portes 3 mois : agence refonte site internet 100 / KVI 4 / 15,34 €, pourquoi refaire son site internet 10 / KVI 1, refonte site wordpress 90 / KVI 10.
Scroll : ⚠️ non vérifiable par outil ; pubs très probables (CPC 13 €), AIO signalée le 17/10 — estimation. Zéro-clic : ⚠️ non vérifiable (17/10 : partiel) ; le résumé-réponse (définition, 4 types, étapes, « le prix dépend du périmètre ») ne donne pas : critère réparer/refaire, prix TPE, abonnement vs devis unique, sort du nom de domaine, avant/après réel.
Format dominant : guides longs « guide complet 2026 » ; profondeur non mesurée (hôtes non résolus) → page-guide 1 500-2 000 mots.
Top 5 (ordre non garanti) : codeur.com/blog (guide complet 2026 + page prix refonte WordPress) · graphiste.com/blog (4 types) · lafabriquedunet.fr (étape par étape ; URL WordPress « étapes, conseils et prix ») · seranking.com/fr (réussir sa refonte et conserver son SEO) · leblogdudirigeant.com (rénover son site) ; anthedesign.fr en page tag.
Gap : aucun critère réparer/refaire décidable par un non-technicien ; aucun prix en abonnement ; « garder son domaine et ses e-mails » traité nulle part comme décision ; aucun avant/après réel chiffré.
Cannibalisation : ① article refonte seo : SERP disjointes confirmées (0 URL commune) ; ② conflit réel avec `/alternative-wordpress-performance` (H2 limites / migrer / processus de migration, FAQ migration) → fusion : diagnostic ici, comparatif là ; la migration passe ici à la réécriture de décembre ; pas de 301.
Title : « Refonte de site internet : réparer ou refaire ? Prix TPE » (56) — retravaillé en session principale (§5). Secondaires : refaire (un) site internet, refonte site web, prix refonte site internet, agence refonte site internet, refonte site wordpress. FAQ : coût TPE abonnement/devis · refaire ou réparer (quand) · garder domaine et e-mails.

### B. « refaire site internet » (absorption)

VERDICT : NO-GO en page dédiée → ABSORPTION CONFIRMÉE (sous réserve scroll-check) par `/refonte-site-internet`, avec un H2 qui porte l'intention propre à « refaire ». Motif : sur le proxy, 17-18 résultats sur 27 titrent « refonte » contre 5 « refaire » (top 10 ≈ 8/10) ; 5 URL communes avec « refonte site internet » dans les 15 premiers. Le « 10/10 titres refonte » du 17/10 n'est ni confirmé ni infirmé par outil.
Volume 600 (variante « refaire un site internet » 720 / KVI 18) · KVI 17 · CPC 13,39 € · Intention informationnelle-décisionnelle (« faut-il / quand / signes ») avec une tranche « faire faire » plus marquée que sur « refonte ».
Portes jouables : « pourquoi refaire son site internet » (10 / KVI 1), « quand refaire son site internet » (NA / KVI 19) ; « refaire son site internet » (20 / KVI 34) sans ciblage propre.
Scroll / zéro-clic : ⚠️ non vérifiables par outil. Format : guides longs étapes / erreurs / « guide complet 2026 ».
Top 5 (proxy) : agence-scroll (5 erreurs de refonte) · lespepitestech (quand, comment — « 2-3 ans », 2021) · codeur.com (guide complet 2026) · contentsquare (13 étapes) · seranking (conserver le SEO).
Gap : aucun critère de décision réparer/refaire ; fréquence « 2-3 ans » affirmée sans justification ; zéro prix TPE, zéro abonnement.
Title/H1 : conserver « réparer ou refaire » (« refaire » y figure) ; ne pas mettre « refaire son site internet » en title. H2 : « Quand refaire son site internet ? Les six signes qui ne trompent pas » + FAQ « Tous les combien faut-il refaire son site ? » (pas un calendrier, des signes).

### C. « refonte site wordpress » (section)

VERDICT : GO — section confirmée, cadrée « diagnostic » ; le « quitter WordPress » reste sur la page pivot. Motif : SERP mixte tutoriel / marketplaces sans aucun critère objectif réparer-vs-refaire → gap net ; KVI 10 jouable en H2 d'une page KVI 15-17.
Volume 90 · KVI 10 (7 au 17/10) · CPC 18,76 € · Intention commerciale « faire faire », WordPress → WordPress (aucun résultat ne pose la question du socle) ; frange DIY (WP Marmite). Voisins : prix refonte site web wordpress 30 / KVI 10 (même SERP) · site wordpress lent 20 / KVI 17 (absorbé en sous-section, décision du 17/10 maintenue).
Scroll : ⚠️ non vérifiable (CPC 18,76 € = pubs probables). Zéro-clic : ⚠️ non vérifiable ; PAA « Comment faire une refonte de site WordPress ? ».
Top 5 (proxy) : wpmarmite.com (guide DIY) · comeup.com (fiches freelance) · codeur.com (prix refonte WP, sans fourchette) · malt.fr · seahawkmedia.com/fr (auditer avant de refondre).
Gap : critères objectifs réparer/refaire (seul lucasfonseque.fr : extension en conflit, version PHP, thème abandonné — sans seuils) ; personne ne pose « rester sous WordPress ou changer de socle » ; aucun coût 3 ans.
Partition : section refonte = DIAGNOSTIC (signes + verdict réparer / refaire sous le même outil / changer de socle, 2 lignes chacun, sans comparatif) ; pivot = COMPARATIF catégoriel + coût 3 ans ; article = checklist redirections. ⚠️ L'agent situe la réécriture de la pivot en 02/2027 (ancienne frise du plan) : la table du plan dit **12/2026 S4** (ligne 8), qui fait foi.
FAQ : Comment faire une refonte de site WordPress ? · Combien coûte la refonte d'un site WordPress ? · Faut-il rester sous WordPress pour refaire son site ? First-party suggéré : extrait anonymisé d'audit (score avant/après) — **ré-anglé** sur le stock publié (Ansquer, `portfolio.ts`).

### D. famille « prix refonte site internet » (section)

VERDICT : GO — section de `/refonte-site-internet` CONFIRMÉE mais RÉDUITE (H2 + tableau 2 colonnes + 2 FAQ), jamais une page. Motif : ≈ 240/mois cumulés, KVI 13 sur les deux têtes ; la « fourchette » est déjà donnée par les snippets → seul l'angle abonnement/périmètre force le clic.
Volume 110 + 70 + 50 + 10 + NA · KVI 13 / 13 / 20 / 28 / 25 · CPC 6,40 / 6,30 € · Intention informationnelle-commerciale (fourchette avant devis).
Scroll : ⚠️ non vérifiable (pubs probables). Zéro-clic : ⚠️ non vérifiable — indice : les résumés affichent déjà des fourchettes → risque fort à confirmer. Ce que la réponse affichée ne donne pas : le périmètre inclus, ce qui reste à payer après la mise en ligne, l'option abonnement (aucune source ne la cite).
Top 5 (ordre non garanti, montants relevés dans des résumés, pages non ouvertes → **non vérifiables, non repris**) : lafabriquedunet.fr (tarifs des agences de refonte) · codeur.com/blog · kolonell.com (pages programmatiques ville × cible) · lucasfonseque.fr (freelance) · innowise.com/fr (méthode de calcul).
Gap TPE : tout est calibré PME-B2B et devis unique ; personne ne sépare le prix de la refonte du coût de vie du site après ; « réparer plutôt que refaire » n'est qu'une phrase ; aucune preuve avant/après chiffrée.
Partition : page refonte = « prix d'une REFONTE : abonnement vs devis unique, ce qui est compris » (H2 porte « refonte » + « combien coûte », jamais « prix site vitrine », « tarifs », « combien coûte un site internet ») ; /tarifs = la grille ; guide ligne 12 = coût total et fourchettes sourcées s'il y a lieu.
Fourchettes du marché : **NE PAS les citer**, chiffrer notre offre seule (brief §3 ; la seule source quasi statistique n'a pu être ouverte ; les pages commerciales se contredisent ; répéter la fourchette = zéro information gain).
FAQ : Combien coûte une refonte de site pour une TPE chez Kaelix ? · Un devis unique de refonte, ça comprend quoi — et quoi après ? · Faut-il tout refaire ou réparer (→ audit gratuit).
