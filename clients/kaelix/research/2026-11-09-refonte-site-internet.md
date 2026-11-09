# Brief de production — Page « Refonte de site internet : réparer ou refaire ? »

| | |
|---|---|
| **Client** | `kaelix` (l'agence, cliente d'elle-même) |
| **Sujet du plan** | 11/2026 **S3** — **ligne 10**, cluster E (refonte) — persona **P3** (repreneur / dirigeant dont le site ne rapporte plus), P1 en lecture préventive |
| **Typologie** | **guide** (page du site, pas un article) — page TSX `apps/kaelix/src/app/(public)/refonte-site-internet/page.tsx`, copy `apps/kaelix/src/lib/data/refonte-page.ts` (modèle : la page Val-d'Oise de la PR web-agency#81) |
| **URL cible** | `/refonte-site-internet` (à créer) |
| **Recherche faite le** | 2026-11-09 (`/research` en exécution planifiée « Production du mois » : 4 `serp-analyst` en parallèle + KPI Haloscan du jour par API directe) |
| **Statut** | ✅ **`go-11/2026` (GO mensuel d'Axel du 02/11, §1.30) — brief prêt, aucun feu vert à redemander → `/write` enchaîné dans la même exécution** |

> **Semaine du sujet** : la ligne 10 porte `11/2026 S3`. S1 = 26/10-01/11 (le 1er novembre est un dimanche), S2 = 02/11-08/11, **S3 = 09/11-15/11**. Le 09/11 est le lundi de la semaine du sujet : il se lance. (Ligne 14 = S4 à partir du 16/11 : « en attente de sa semaine ».)

---

## 1. Verdict

**GO création** d'une seule page `/refonte-site-internet` pour la tête **« refonte site internet »** (400, KVI 16), qui **absorbe** « refaire site internet » (600, KVI 17) et « refaire un site internet » (720, KVI 18) — même SERP (6 URL communes sur ~15 observées, titres 100 % « refonte »), donc une seule intention et une seule page. Les portes « refonte site wordpress » (90, KVI 10) et « prix refonte site internet » (110, KVI 13) se jouent **en sections** (H2 dédiés), jamais en pages à part. Famille cumulée ≈ 2 700 recherches/mois à KVI 13-18.

**Format cible aligné SERP** : la SERP est tenue par des guides longs de blogs (plateformes de freelances, médias dirigeants, blog d'agence) qui partent tous du principe que la refonte est décidée. **Aucun résultat ne tranche « réparer ou refaire »**, aucun ne chiffre une refonte de TPE en abonnement, aucun ne traite le changement de prestataire comme une étape. C'est le gap, et c'est l'angle validé au plan.

**Jouabilité** : 6-12 mois sur la tête (kaelix.fr toujours inconnu de l'index Haloscan ; GSC 28 j = quelques dizaines d'affichages, tous sur l'accueil et le nom) ; les portes à KVI 10-13 se prennent plus tôt depuis la même page.

### KPI Haloscan — bulk du **2026-11-09** (API directe, seul outil de référence ; crédit vérifié : 9 813 crédits mots-clés)

| Mot-clé | Volume | KVI | CPC | Rôle |
|---|---|---|---|---|
| **refonte site internet** | **400** | 16 | 13,21 € | **tête** (title, H1) — ⚠️ le plan du 17/10 affichait 800 / KVI 17 : re-scrape Haloscan, les chiffres du jour font foi |
| refaire un site internet | 720 | 18 | 13,39 € | absorbé (même SERP) — « refaire » dans le title et un H2 |
| refaire site internet | 600 | 17 | 13,39 € | absorbé (même SERP) |
| refonte de site web | 500 | 13 | 10,47 € | variante, corps |
| refonte site web | 300 | 18 | 29,41 € | variante, corps |
| refonte de site internet | 170 | 13 | 6,32 € | variante, corps |
| prix refonte site internet · refonte site internet prix · refonte site web prix | 110 · 70 · 50 | 13 · 13 · 20 | 6,30-6,40 € | **section prix** (H2) |
| refonte site wordpress | 90 | 10 | 18,76 € | **section WordPress** (H2) |
| agence refonte site internet | 100 | 24 | 15,34 € | corps (une occurrence) |
| site wordpress lent | 20 | 17 | 10,71 € | écarté le 17/10 comme page (zéro-clic fort, tutoriels DIY) → absorbé dans la section WordPress |
| pourquoi faire une refonte de site internet | 10 | 9 | — | FAQ |
| refaire un site internet prix | 10 | 28 | — | FAQ prix |
| refonte site internet étapes | 10 | 26 | — | section « comment ça se passe » |

Questions Haloscan (`questions`) : « Pourquoi la refonte d'un site web ? », « pourquoi refaire son site internet », « comment moderniser un site internet », « Comment faire une refonte de site WordPress ? », « refaire un site internet prix » — les questions comptables (« comptabiliser les frais de site internet ») sont **hors sujet** (hors expertise, YMYL financier léger : on ne les traite pas).

### Contrôles empêchés (à reporter tels quels dans la PR)

- **SERP Google réelle non observable** : `haloscan-fetch scrap` vide ; google.fr, codeur.com, lafabriquedunet.fr, graphiste.com, wpmarmite hors réseau de la session → les **4 `serp-analyst` sont en `⚠️ analyse dégradée`** (SERP relevée sur moteur tiers, ordre indicatif, aucune page du top ouverte). Le top 5 ci-dessous est un relevé de titres/URL, pas une lecture des pages.
- **Scroll-check** : pas de navigateur en session planifiée → `⚠️ contrôle empêché` (fallback opérateur : google.fr, « refonte site internet », téléphone et ordinateur ; CPC 13 € = pubs probables en tête de page, hypothèse non vérifiée).
- **Zéro-clic** : non re-vérifié (relevé du 17/10 : **partiel**, AIO = définition/étapes). Ce que la réponse courte ne donne pas, et que la page donne : la décision réparer vs refaire avec ses critères, le prix TPE en abonnement vs devis unique, le départ d'un prestataire en gardant domaine et positions.
- **Fourchettes de prix du marché** : lues dans des extraits de moteur tiers, **jamais à la source** → **aucun chiffre de marché dans la page** (règle : jamais de chiffre non sourcé). La page ne chiffre que notre offre.
- **GSC** : clé de compte de service absente de la session.

### Top 5 observé (moteur tiers, 09/11 — ordre non garanti)

codeur.com/blog — « Refondre votre site internet : guide complet 2026 » (plateforme de freelances) · graphiste.com/blog — guide complet, 4 types de refonte · lafabriquedunet.fr — refonte étape par étape (+ variante WordPress étapes/prix) · seranking.com/fr — réussir sa refonte et conserver le SEO · leblogdudirigeant.com — rénover son site · (anthedesign.fr/tag — page tag d'agence, lespepitestech.com — « quand, comment ? », digitiz.fr — « 6 étapes »). Sur « refonte site wordpress » : ~50 % d'offres de freelances/marketplaces (ComeUp, Malt, Fiverr, projet Codeur), une page prix Codeur, deux guides étapes (WPMarmite, Seahawk) — **tout le monde refait sous WordPress, personne ne pose « réparer ou refaire »**. Sur « prix refonte » : pages prix dédiées de gros acteurs, raisonnant PME/B2B, aucune ne parle TPE ni abonnement.

## 2. Anti-cannibalisation (3 fronts)

| Front | Relevé | Verdict |
|---|---|---|
| **Haloscan** (positions kaelix.fr) | domaine inconnu de l'index (`SITE_NOT_FOUND` au 17/10, inchangé) | sans objet |
| **`tracking.md`** (le publié) | accueil (22/10), `/audit-gratuit` (22/10) ; PR #81 (Val-d'Oise) et #82 (article refonte seo) ouvertes | aucune page publiée ne vise « refonte » |
| **Site existant** (pages hors plan) | **`/alternative-wordpress-performance`** (25/04/2026, libre) : « Alternative à WordPress : Performance et Modernité » — limites de WordPress, migration en 5 étapes, comparatif, FAQ « vais-je perdre mon référencement en migrant ? » ; réécrite en **page pivot comparaison (ligne 8, 12/2026 S4)** avec slug à trancher sans « wordpress ». **`/services/site-vitrine#deja-un-site`** (section « Vous avez déjà un site ? », 4 points : audit, ancien site en ligne, référencement préservé, même prix) — page gelée jusqu'au 15/12. Redirection historique **`/services/refonte-site` → `/services/site-vitrine#deja-un-site`** (next.config.ts) | **frottement réel avec `/alternative-wordpress-performance`** sur la sous-intention « quitter WordPress » → partition : la page refonte traite **« mon site WordPress est lent / cassé / plus maintenu : réparer ou refaire ? »** (diagnostic, décision), la page WordPress garde **« alternative / migration »** jusqu'à sa réécriture en pivot (ligne 8), où la section WordPress disparaît (le `/research` de la ligne 8 le reprend). La section `#deja-un-site` reste la **version courte** de la page refonte (4 points) : la page refonte **ne la reprend pas**, elle développe la décision ; on **ne touche pas** `/services/site-vitrine` (90 j) ; **`/services/refonte-site` est redirigée vers la nouvelle page** dans la même PR (ancienne URL « refonte » = intention de la page). |
| **`content-plan.md`** | ligne **13** (article `/blog/refonte-site-sans-perdre-referencement`, PR #82) : SERP « refonte seo » disjointe (0 URL commune, re-confirmé le 09/11 : les mêmes domaines y classent d'autres URL) → **partition du 03/11 tenue** (ci-dessous) ; ligne **8** (pivot) : propriété du code et coût de sortie = le **choix** du modèle ; ici = la **décision** de refaire ; ligne **5** (`/tarifs`, « prix site vitrine », 01/2027) et ligne **12** (guide « combien coûte un site », 12/2026) : la section prix de la page refonte ne porte **ni « prix site vitrine », ni « tarif site internet », ni « combien coûte un site »** en H2, ne reproduit pas la grille (un seul montant : 80 € HT/mois = 2 880 € HT sur 3 ans, déjà publié sur Val-d'Oise) et renvoie vers `/tarifs` pour la grille ; ligne **14** (agence ou freelance) : « continuité, propriété du code » = le choix du prestataire — ici, le départ d'un prestataire | **aucun conflit si les partitions sont tenues** |

**Partition ligne 10 (cette page) / ligne 13 (article, PR #82)** — rappel du 03/11 :

| Sous-intention | Page refonte (ici) | Article |
|---|---|---|
| signes qu'il faut refaire, réparer vs refaire, WordPress lent / cassé / plus maintenu | **ici** | — (un lien) |
| prix et délai d'une refonte TPE, abonnement vs devis unique | **ici** | aucun prix |
| inventaire des pages qui rankent, plan de redirections, conservation des adresses | un paragraphe « vous ne perdrez pas vos positions » + lien | **article** |
| perte de trafic après refonte, suivi 90 j, ce qu'exiger du prestataire (recette, liste d'adresses, accès) | — | **article** |
| changer de prestataire (domaine, code, comptes Google), bascule sans coupure | paragraphe « vous pouvez partir » + lien | **article** (section dédiée) |
| garder son nom de domaine | **décision** (ici : on garde le domaine, point) | conséquence SEO d'un changement |

**Garde-fous de titre** : « refaire » **est** dans le title de la page (il absorbe 600 + 720) ; l'article n'en a pas dans son title (décision du 03/11). Aucun H2 de la page ne commence par « Refaire son site sans perdre… ». La page ne décrit **aucune procédure de redirection** (une phrase + lien).

## 3. Content gap

Ce que couvrent les leaders : définition de la refonte, étapes (audit, cahier des charges, maquettes, développement, migration, mise en ligne), prix par type (graphique / technique / complète), conseils SEO génériques. Ce qui leur manque, et que la page apporte :

1. **La décision** « réparer ou refaire » avec des critères lisibles par un dirigeant (six signes, et pour chacun : ce que réparer coûte en pratique, quand ça ne suffit plus).
2. **Le diagnostic WordPress** (lent, cassé après une mise à jour, plus maintenu) traité comme un symptôme d'une décision, pas comme un tutoriel.
3. **Le coût réel sur la durée** : réparer à l'acte / refaire sur devis unique / refaire par abonnement — ce que chaque modèle **exclut** (hébergement, entretien, prochaine refonte), sur notre seule offre chiffrée.
4. **Un avant/après réel et sourcé** d'une refonte de TPE (Transports Ansquer).
5. **Le départ d'un prestataire** nommé comme étape (domaine, code, comptes Google) — en lien vers l'article.

## 4. Information gain — stock first-party (zéro sollicitation ; tout est dans le stock)

| Élément | Source | Usage dans la page |
|---|---|---|
| **Ansquer = une refonte** : 11 → 1 feuilles de style, 12 → 9 scripts (« sans aucune bibliothèque de script »), 3 extensions à maintenir → 0, deux polices externes → aucune requête externe ; SEO / bonnes pratiques / accessibilité **100 · 100 · 100**, performance mobile **78** (outil de Google, mobile, 7 septembre 2026) ; **affichages ×2,8 et clics ×2,2 d'août à septembre 2026 (GSC, 28 j), site et référencement local ensemble** — ⚠️ jamais « un mois après le site » ; ⚠️ **ne pas dire qu'Ansquer était sous WordPress** (le site publie « modèle du commerce, thème prêt à l'emploi », pas le nom) | `portfolio.ts` (bloc Résultats + comparaison), brief §7 | section « Ce que donne une refonte » + lien étude de cas |
| Livraison **3 à 5 semaines** ; **votre site actuel reste en ligne, bascule en quelques minutes le jour choisi** ; **chaque ancienne adresse redirige vers la nouvelle page** ; **la refonte est un site vitrine comme un autre : 80 € HT/mois, sans frais de création** | `showcase-guide.ts` (section « Vous avez déjà un site ? »), brief §1 | sections prix et déroulé |
| **Audit gratuit lu par un fondateur, rapport sous 72 h ouvrées** | `/audit-gratuit` (publié 22/10) | capture |
| **Le code vous est cédé en pleine propriété ; résiliation libre, code et accès remis** | CGV art. 5 et 6 ; FAQ `/tarifs` « Le code m'appartient-il ? » | paragraphe « vous pouvez partir », tableau prix |
| Score PageSpeed engagé à **90 et plus** sur téléphone dès la mise en ligne | `performance.ts` (`lighthouseMobile`), `/garanties` | tableau prix (colonne abonnement) |
| **Deux cousins fondateurs** : Axel (interlocuteur unique) et Mickael (écrit le site) | `founders.ts` | déroulé, ton |
| Montant sur 3 ans : **2 880 € HT** (80 × 36) | déjà publié (PR #81) | tableau prix |

**Prise de position assumée** (information gain d'opinion, défendable par Kaelix) : *un site qu'on répare tous les trois mois est un site qu'on paie deux fois* — réparer vaut quand le problème est **un** et **localisé** ; dès que les symptômes se cumulent (lent **et** plus maintenu **et** sans demandes), refaire coûte moins cher que l'addition des réparations, parce qu'on repart sur un code tenu. Aucune garantie de position, aucun chiffre de marché.

## 5. Brief éditorial

### Title / meta / H1 / slug

| | Valeur | Note |
|---|---|---|
| **Title** (≤ 60 hors suffixe `| Kaelix`) | **« Refonte de site internet : réparer ou refaire ? »** (46) | tête + question = angle ; « refaire » absorbe 600 + 720 ; aucun concurrent ne porte « réparer » |
| **Meta** (≤ 160) | « Six signes qu'il faut refaire votre site plutôt que le réparer, ce que coûte une refonte pour une TPE (devis unique ou 80 € HT/mois), et comment la faire sans perdre votre nom de domaine. » (à compter ≤ 160 à la rédaction) | promesse : décision + prix + domaine |
| **H1** | **« Refonte de site internet : faut-il réparer votre site, ou le refaire ? »** | ≠ title mot pour mot, porte la tête et la question |
| **Kicker** | « Refonte » | hero compact |
| **Slug** | `/refonte-site-internet` | URL du plan |

### Plan H2/H3

0. **Hero** : kicker, H1, **lead = réponse directe** (~90 mots) : on refait quand les problèmes se cumulent, on répare quand il n'y en a qu'un ; une refonte Kaelix = 3 à 5 semaines, 80 € HT/mois sans frais de création, votre site actuel reste en ligne jusqu'à la bascule, vous gardez votre nom de domaine. Boutons : **audit gratuit** (capture principale du plan) + réservation 30 min.
1. H2 **« Six signes qu'il faut refaire votre site, et non le réparer »** — liste de 6 items, chacun : le signe tel que le dirigeant le vit → pourquoi réparer ne tient pas. (1) lent sur téléphone, même après « optimisation » ; (2) cassé après une mise à jour, et ça recommence ; (3) plus personne pour le maintenir (prestataire parti, thème ou extensions abandonnés) ; (4) illisible sur téléphone (pas pensé mobile) ; (5) aucune demande : il décrit, il ne fait pas agir ; (6) votre activité a changé, le site non (prestations, zone, équipe). À retenir en 3 puces.
2. H2 **« Réparer ou refaire : la règle de décision »** — H3 titré **« Un problème isolé se répare, une addition de problèmes se refait »** + **tableau titré** : symptôme / réparer suffit si… / refaire s'impose si… (4-5 lignes) ; la prise de position (§4).
3. H2 **« Votre site WordPress est lent, cassé ou plus maintenu : réparer ou refaire ? »** — ⚠️ **arbitrage** : le plan (validé au GO du 02/11) nomme « WordPress » ; la règle « zéro nom technique » du 17/10 vise la pile de l'agence (Next.js, React, Vercel… — c'est la liste du garde E2E) et le site porte déjà « Alternative à WordPress » et « Quitter WordPress » en pied de page → **« WordPress » admis dans cette section seule, comme nom d'un outil du marché, ton neutre** (« un site WordPress bien entretenu fonctionne »), jamais en dénigrement ; **point porté au gate** (option de repli : H2 « Site lent, cassé ou plus maintenu », « WordPress » une fois dans le corps). Contenu : trois symptômes → ce que réparer veut dire concrètement (hébergement, cache, extensions, thème : à refaire à chaque mise à jour) → les trois cas où réparer ne suffit plus (prestataire parti, mises à jour qui cassent, dette accumulée) → « refaire sans perdre domaine ni positions » (une phrase + lien article). ⛔ Pas d'affirmation chiffrée sur WordPress (ni « 43 % du web », ni « 90 % des sites piratés » : non sourçables ici).
4. H2 **« Combien coûte une refonte de site pour une TPE : devis unique ou abonnement ? »** — H3 **« Ce que vous payez, et ce qui reste à votre charge, sur trois ans »** + **tableau titré** à 3 colonnes (réparer à l'acte / refaire sur devis unique / refaire par abonnement Kaelix), lignes : au départ, chaque mois, mises à jour et corrections, quand l'activité change, dans trois ans, si vous partez — **seuls montants : 0 € de frais de création, 80 € HT/mois, 2 880 € HT sur 3 ans** ; colonnes « réparer » et « devis unique » décrites **sans montant** (« selon le prestataire », « à chiffrer ») ; note « nous ne chiffrons que notre offre » ; lien `/tarifs` pour la grille, `/services/site-vitrine` pour le détail de ce qui est compris. ⛔ aucun « prix site vitrine », « tarif site internet », « combien coûte un site » en H2/ancre.
5. H2 **« Ce que donne une refonte faite pour durer : Transports Ansquer »** — avant/après en **liste chiffrée** (11 → 1 feuilles de style, 12 → 9 scripts, 3 extensions → 0, 100 · 100 · 100, affichages ×2,8 et clics ×2,2 d'un mois sur l'autre, site et référencement ensemble) + lien étude de cas ; formulation fact-checkée du 20/10.
6. H2 **« Comment se passe une refonte avec Kaelix, en 3 à 5 semaines »** — liste ordonnée : (1) audit gratuit sous 72 h ouvrées (ce qu'on garde, ce qu'on refait) ; (2) le nouveau site se construit à côté, l'ancien reste en ligne ; (3) vous relisez tout avant la mise en ligne ; (4) bascule le jour choisi, chaque ancienne adresse redirige vers la nouvelle page ; (5) les 90 jours qui suivent, on observe avant de toucher. Puis deux paragraphes : **« Vous ne perdrez pas vos positions »** (une phrase + lien vers l'article `/blog/refonte-site-sans-perdre-referencement`, section redirections) ; **« Vous changez de prestataire ? Gardez votre nom de domaine »** (le domaine est à votre nom, le code d'un site Kaelix vous est cédé — CGV ; lien vers la section « changer de prestataire » de l'article).
7. H2 **« Vos questions sur la refonte »** — FAQ ×6 (ci-dessous) en `FAQPage`. Lien audit gratuit en marge.
8. **Clôture** `CtaSection variant="closing" halo="arc"`.

Longueur visible : **1 300-1 700 mots FAQ comprise** (format page, pas guide de 3 000 mots : la SERP est longue mais l'intention commerciale et le persona pressé commandent une page scannable, dense en listes et tableaux — variation anti-uniformité vs l'article #82).

### Mots-clés

- **Principal** : refonte site internet (title, H1, lead, un H2).
- **Absorbés** : refaire site internet / refaire un site internet (title « refaire », H2 1, corps) ; refonte de site web, refonte site web, refonte de site internet (corps, naturel).
- **Portes en H2** : refonte site wordpress (H2 3), prix refonte site internet (H2 4).
- **FAQ** : pourquoi faire une refonte de site internet, refaire un site internet prix, refonte site internet étapes.
- **À ne pas viser** : refonte seo / checklist (article #82) · prix site vitrine, tarif site internet, combien coûte un site (lignes 5, 12) · site internet abonnement, alternative (ligne 8) · agence web ou freelance (ligne 14) · cahier des charges (hors persona) · comptabilisation (hors sujet).

### FAQ (6 — chaque réponse sourçable dans le stock)

1. **Faut-il refaire son site ou le réparer ?** → un problème isolé se répare ; plusieurs symptômes qui se cumulent (lent, plus maintenu, aucune demande) → refaire ; l'audit gratuit tranche sur votre cas.
2. **Pourquoi faire une refonte de site internet si le site fonctionne encore ?** → il « fonctionne » mais ne fait pas son travail (demandes, téléphone, mobile) ; activité qui a changé.
3. **Combien coûte une refonte de site pour une TPE ?** → chez Kaelix, une refonte est un site vitrine comme un autre : 80 € HT/mois, sans frais de création, hébergement et entretien compris (2 880 € HT sur trois ans) ; les devis uniques varient d'un prestataire à l'autre, et n'incluent pas ce qui suit la mise en ligne → `/tarifs`.
4. **Combien de temps dure une refonte ?** → 3 à 5 semaines après le premier échange ; l'ancien site reste en ligne jusqu'à la bascule.
5. **Peut-on refaire son site sans perdre son référencement ?** → réponse courte (chaque ancienne adresse redirigée, contenus qui rapportent repris, 90 jours d'observation) + lien article.
6. **Peut-on refaire un site WordPress sans changer de nom de domaine ?** → oui : le nom de domaine est à vous, il reste ; seul le site derrière change ; si le domaine est au nom de l'ancien prestataire, c'est la première chose à régler (lien article, section prestataire).

⛔ Aucune promesse de position (« première page », « top 3 », « garanti »), aucun montant hors 0 / 80 / 2 880, aucun nom de concurrent.

### Composants, données structurées, version du site

- **Page TSX** (pas de MDX : le site n'a pas de dossier de pages de contenu, brief §2) sur le modèle de `agence-web-val-d-oise/page.tsx` : `HeroCompact`, sections 4/8, `SectionHeader`, tableaux HTML titrés par H3, `FaqList`, `CtaSection`. Copy dans `apps/kaelix/src/lib/data/refonte-page.ts` (`as const`, montants lus dans `showcasePlan.price` et `lighthouseMobile.label`, jamais en dur).
- **JSON-LD** : `Organization` (nœud unique du site, rendu sur la page), **`Service`** « Refonte de site internet » (`serviceSchema`, `areaServed` France — pas de LocalBusiness, aucune adresse), `BreadcrumbList`, **`FAQPage`** (6 Q/R mot pour mot). Pas d'`Article` (page de service, pas un article daté).
- **Sitemap** : entrée `/refonte-site-internet` (priorité 0,8, à côté du pilier) ; **pied de page** : colonne Services, « Refonte de site » ; **redirection** `/services/refonte-site` → `/refonte-site-internet` (remplace la cible `#deja-un-site`) ; garde E2E `site-public-sans-agents` : la page ajoutée à `PAGES`.
- **Spec E2E** `e2e/kaelix/refonte-site-internet.spec.ts` (title/meta/H1, six signes, tableau prix aux seuls montants 0/80/2 880, FAQPage = FAQ visible, Service sans LocalBusiness, redirection + sitemap + pied de page, capture + maillage + lexique) **vue rouge sur le build de référence, puis verte**.

### Capture & maillage

- **Capture** : audit gratuit (bouton du hero + rappel en marge de la FAQ + lien dans le déroulé), réservation 30 min en second (`BookingButton`), `/contact` dans la FAQ prix.
- **Sortant** (ancres descriptives) : `/audit-gratuit`, `/realisations/transports-ansquer`, `/services/site-vitrine` (ce qui est compris), `/tarifs` (la grille), `/blog/refonte-site-sans-perdre-referencement` ×2 (positions ; changer de prestataire — ⚠️ cible en PR #82, non fusionnée : **ordre de fusion #82 avant cette PR**, sinon le lien répond 404 jusqu'à la fusion de #82), `/a-propos` (deux cousins), `/services/seo-performance` (une phrase : le SEO démarre dès la mise en ligne), `/alternative-wordpress-performance` (une phrase : « vous quittez WordPress pour de bon ? ») — 2-5 liens business minimum : ✅.
- **Entrant** : pied de page (colonne Services) ; `/services/refonte-site` (redirection) ; article #82 à son tour (« lien vers la page refonte quand elle existera » : une phrase à ajouter dans l'article **après** fusion des deux, hors de cette PR) ; `/services/site-vitrine#deja-un-site` et Val-d'Oise FAQ « refaire ou réparer ? » (PR #81) : à leur prochain refresh, pas maintenant (90 j / PR ouverte).

### Garde-fous

- ⛔ **Aucun chiffre de marché** (fourchettes freelance/agence non lues à la source) ; seuls 0 € / 80 € HT/mois / 2 880 € HT.
- ⛔ Aucune statistique sur WordPress ; « WordPress » dans le H2 de la section 3 et son corps **seulement** ; ton neutre ; aucun nom de concurrent, de thème ou d'extension.
- ⛔ Aucun nom technique de notre pile (Next.js, React, Tailwind, Vercel, TypeScript, Supabase) ; « l'outil de mesure de Google » ou « PageSpeed » (déjà publié sur Montpellier et Val-d'Oise — ⚠️ gate #81 en cours sur ce mot : garder « PageSpeed » cohérent avec le site, et s'aligner sur la décision d'Axel) ; « Search Console » non nommée (pas nécessaire ici).
- ⛔ Ansquer : jamais « un mois après le site », jamais « sous WordPress ».
- ⛔ Aucune promesse de position, aucune garantie ; « engagé à 90 et plus » se dit comme sur `/garanties`.
- Lexique public v7 : « dès 199 € HT/mois » si le SEO est cité ; jamais 249/299/399/599, « liens », « cumulatif ».
- Vouvoiement, direct, concret ; adresse directe au lecteur dans les sections 1-2 (« Lequel de ces six signes reconnaissez-vous ? »).

## 6. Points portés au gate (PR, questions fermées — le plan validé tient lieu de GO)

1. **« WordPress » nommé** dans un H2 (section 3) et son corps, comme nom d'un outil du marché : on garde (porte « refonte site wordpress », 90/mois, KVI 10), ou on passe au H2 sans le mot ?
2. **Ordre de fusion** : la page lie deux fois l'article de la PR #82 → fusionner **#82 avant** cette PR (sinon 404 temporaire sur ce lien) ; puis une phrase de l'article renvoie vers la page (hors de cette PR).
3. **Redirection** `/services/refonte-site` : vers la nouvelle page (proposé ici) plutôt que vers `/services/site-vitrine#deja-un-site` ?
4. **Longueur** ≈ 1 500 mots FAQ comprise : telle quelle ?

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-11-09)

> Les 4 analyses sont `⚠️ dégradées` (google.fr et les sites du top hors réseau de la session ; SERP sur moteur tiers ; MCP Haloscan absent → KPI du bulk API du 09/11 fournis).

### A. « refonte site internet »

VERDICT : GO (création page). Famille ≈ 2 700/mois à KVI 13-18 ; top organique = guides de blogs (plateformes freelance, médias), aucune page d'agence TPE ne tranche « réparer ou refaire » ni ne chiffre l'abonnement ; partition #82 tenue. Intention informationnelle-commerciale (7 guides/blogs sur 8 organiques FR, 1 page tag d'agence, 1 agence .ca). Jouabilité 6-12 mois ; annexes jouables à 3-6 mois : refonte site wordpress (90, KVI 10), refonte de site internet (170, KVI 13), prix refonte site internet (110, KVI 13), pourquoi faire une refonte (10, KVI 9). Scroll ⚠️ non vérifiable. Zéro-clic ⚠️ non vérifiable (17/10 : partiel). Gap : réparer ou refaire absent ; prix = fourchettes génériques sans abonnement ni coût 3 ans ; WordPress en étapes de migration, pas en diagnostic ; propriété domaine/code absente. Cannibalisation : aucune avec le publié ; partition #82 ; ligne 8 : ne pas y traiter « WordPress lent », slug sans « wordpress » au /research. Title recommandé : « Refonte de site internet : réparer ou refaire ? » (46).

### B. « refaire site internet » (+ « refaire un site internet »)

VERDICT : GO — absorption OUI, aucune page distincte. Même SERP que « refonte site internet » : 6 URL communes sur ~15 (codeur.com/blog/refonte-site-internet, graphiste.com/blog/?p=32810, lespepitestech.com …quand-comment, seranking.com/fr/blog/refonte-site-internet, anthedesign.fr/tag/refonte-site-internet, munci.org/?p=5768), titres 100 % « refonte ». « refaire site internet » ∩ « refaire un site internet » quasi identiques. Disjonction « refonte seo » : 0 URL commune (les mêmes domaines y classent d'autres URL « conserver son SEO »). Gap : critères de décision, prix TPE en abonnement, avant/après chiffré réel. Angle : garder « refaire » dans title/H1 ; aucun concurrent ne porte « réparer » → différenciation. Réécriture google.fr « refaire » → « refonte » : ⚠️ non vérifiable.

### C. « refonte site wordpress » (+ « site wordpress lent »)

VERDICT : GO — en SECTION, pas de page à part. SERP = « refaire SOUS WordPress » (freelances/marketplaces ~50 %, 1 page prix Codeur, 2 guides étapes WPMarmite/Seahawk, 1 étude de cas agence) ; personne ne pose « réparer ou refaire », personne ne traite « quitter ». 0 URL commune avec « refonte site internet » (1 domaine commun codeur.com, URL différentes) ; l'article WordPress de La Fabrique du Net remonte dans la SERP générique → variante proche du générique = section suffisante. Intention commerciale-transactionnelle (prestation + prix), CPC 18,76 € (pubs probables, non vérifié). ⚠️ Arbitrage « zéro nom technique » vs ligne 10 « WordPress » à rendre en session (fait : §5, point 1 du gate). First-party : Ansquer sans affirmer qu'il était sous WordPress.

### D. « refonte site internet prix » (+ « prix refonte site internet », « refonte site web prix »)

VERDICT : GO — en SECTION, jamais en page dédiée. Famille 230/mois cumulés, KVI 13 (20 sur « site web »). SERP = pages prix dédiées (codeur.com/pages/prix-refonte-site-web, lafabriquedunet …/agences-refonte-de-site-web/tarifs, kolonell.com pages « prix refonte + ville + 2026 », lucasfonseque.fr, innowise hors marché FR) raisonnant PME/B2B ; aucune ne parle TPE ni abonnement. Fourchettes **lues dans des extraits, pas à la source → non reprises**. Zéro-clic : traité comme FORT par précaution (métas = fourchettes) ; ce que la réponse courte ne donne pas : prix TPE, abonnement, coût 3 ans, propriété du code, réparer ou refaire. Recouvrement « prix site vitrine » (/tarifs) : 0 URL commune, risque lexical seulement → H2/ancres sans « prix site vitrine », « tarif site internet », « combien coûte un site » ; grille non reproduite ; lien /tarifs.
