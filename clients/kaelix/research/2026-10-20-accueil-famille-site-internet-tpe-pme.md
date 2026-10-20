# Brief de production — Refresh de l'accueil kaelix.fr : la famille « site internet TPE/PME »

| | |
|---|---|
| **Client** | `kaelix` (l'agence, cliente d'elle-même) |
| **Sujet du plan** | 11/2026 n°1 — **ligne 1**, cluster A (positionnement & prix) — persona **P2** (gérant qui compare avant de signer), P1 secondaire |
| **Typologie** | evergreen — **page d'accueil** (page business, pas un article) |
| **Page cible** | `/` (existante, créée le 25/04/2026 — libre de la règle des 90 j ; indexée en version v6 le 17/10) |
| **Recherche faite le** | 2026-10-20 (`/research`, 6 `serp-analyst` en parallèle + scroll-check chrome en session principale) |
| **Statut** | 🕓 **en attente de GO opérateur** — 🛑 aucun `/refresh` sans GO. *Mis à jour le 20/10 au rebase : PR #31 mergée le 19/10 et boutique « sans engagement » tranchée (PR #32) — décisions 3 et 4 levées, 4 restent.* |

> ⚠️ **Analyse dégradée — à lire avant le verdict.** Le serveur MCP **Haloscan n'a pas pu se connecter** dans cette session (timeout). Tous les KPI mots-clés ci-dessous sont le **relevé Haloscan du 17/10/2026** (brief §5), jamais un chiffre d'un autre outil (invariant 8). Les deux variantes nouvelles (« agence web pme », « site internet petite entreprise ») n'ont **ni volume ni KVI** : leur verdict repose sur la lecture de la SERP seule. Les SERP des 6 mini-briefs ont été lues par proxy (WebSearch), **pas dans l'ordre Google** ; seules les deux têtes ont été relevées en navigation réelle (annexe G). À re-qualifier au retour de Haloscan si l'opérateur veut un chiffre sur les deux variantes — ce n'est pas bloquant pour le GO : aucune ne change la tête.

---

## 1. Verdict

**GO — REFRESH de l'accueil sur la famille « site internet TPE/PME »**, exactement comme le plan l'a inscrit le 17/10. Les six analyses convergent sans exception :

| Mot-clé | Volume · KVI (Haloscan 17/10) | Verdict serp-analyst | Rôle sur l'accueil |
|---|---|---|---|
| **site internet pme** | 50 · 17 | REFRESH, co-tête via la formulation famille | **title + H1** (dans « TPE/PME »), H2 dédié |
| **creation site internet pme** | 36 · 3 | REFRESH, secondaire | title (« Création de site internet… »), sous-titre « sans frais de création » |
| **site internet tpe** | 10 · 6 | GO secondaire (polysémie TPE) | couvert par « TPE/PME » accolés, jamais isolé |
| **création site internet tpe** | 10 · — | GO secondaire | title/H2 « Comment on crée votre site en 3 à 5 semaines » |
| agence web pme | non vérifiable | **NO-GO comme tête** (SERP d'annuaires et top-listes, comme « agence web ») | entité : meta, intro « KAELIX, agence web pour TPE et PME », schema `Organization` |
| site internet petite entreprise | non vérifiable | **NO-GO comme tête** (SERP DIY/hébergeurs, profil « création site internet » écarté) | variante sémantique : chapeau, meta, un H2 |

- **Intention observée (Google FR réel, 20/10)** : commerciale mixte. Sur « site internet pme », la SERP mêle hébergeurs/builders (OVHcloud, Jimdo, SiteW, One.com), formation CMA, guide France Num **et quatre pages d'agences de taille comparable** (Odyssée « interlocuteur unique, livré en 4 à 8 semaines », Btg Communication « à partir de 2 000 € », Gradly « 990 € tout compris », Mon Petit Site Web). Une page d'accueil d'agence **est** un format présent dans la SERP — pas de mismatch.
- **Scroll (relevé chrome, annexe G)** : **OK sur les deux têtes** — le premier organique est en tête de page, aucune pub au-dessus, aucune AI Overview détectée, PAA après le 2e organique. Le trafic organique n'y est pas résiduel.
- **Zéro-clic : partiel** (Haloscan 17/10, confirmé par la lecture du 20/10 : 4 PAA à profil « coût / comment / gratuit / qui est PME », pas de featured snippet, pas d'AIO). L'angle qui force le clic est net : **aucun résultat ne donne un prix mensuel tout compris, qui possède le code, le délai réel, ni une preuve chiffrée avant/après** — c'est exactement le stock first-party de l'accueil.
- **Jouabilité : 6-12 mois** (horizon J90 → J180). Autorité nulle au 20/10 (Haloscan `SITE_NOT_FOUND`, 6 pages indexées, **1 impression GSC sur 7 j**, 0 lien connu) face à des agences de taille comparable (DVI estimés 1-30) et quelques géants (OVH, Jimdo). La famille TPE/PME est **déjà la requête annexe jouable** de « création site internet » (400, écarté) : pas de nouvelle annexe à chercher. L'entrée se fera par les variantes à KVI 3-6 (« creation site internet pme », « site internet tpe ») avant la tête à KVI 17.
- **Pas de pari-émergent** : sujet mature, volumes connus.

## 2. Anti-cannibalisation (3 fronts)

| Front | Contrôle | Résultat |
|---|---|---|
| **Haloscan** (positions du domaine) | ⚠️ **non vérifiable** cette session (MCP indisponible) — et sans objet : `SITE_NOT_FOUND` le 17/10 et le 19/10 | aucune position connue, rien à cannibaliser |
| **`tracking.md`** (publié par la mission) | lu | vide — aucun contenu publié |
| **`content-plan.md`** (15 lignes) | lu, chaque ligne confrontée | **aucun conflit** : la ligne 1 est ce contenu ; ligne 4 (`/services/site-vitrine`, « création site vitrine ») = intention « site vitrine », pas « PME » → garde-fou : **« PME/TPE » reste hors du title de la ligne 4**, et **« création » reste hors du H1 de l'accueil** (title/H2 seulement) pour ne pas brouiller les deux pages ; ligne 15 (« agence seo pme ») = intention SEO, distincte ; lignes 3 et 6 (« agence web montpellier / 95 ») = intentions locales, SERP distinctes |
| **Existant hors plan** | lu (audit 17/10 A3, revue 19/10, to-do au 20/10) | `/agence-web-tpe-pme` visait la même famille → **301 vers `/` en prod depuis le 19/10** (PR web-agency#31 mergée `b248aef`, E2E vertes le 20/10 — to-do #9 clos). Une seule page vivante sur la famille : rien à lever avant le refresh |

Rappel du gisement 4-20 : vide par construction (étape B du brief §5 attend la baseline GSC de mi-novembre). Le refresh de l'accueil est un refresh « à zéro », conforme à la règle d'or du plan.

## 3. Content gap

Ce que le top 10 réel (20/10) couvre : « faut-il un site » (France Num, One.com, stats Sortlist), « comment le créer en N étapes » (Najumi, ADTG, SendPulse, Jimdo), « on vous le fait à prix fixe » (Odyssée 4-8 semaines, Btg ≥ 2 000 €, Gradly 990 €, oneki 29,90 €/mois sur la variante TPE), formation CMA.

Ce que **personne** n'y donne — le gap de fond, identique dans les 6 mini-briefs :

- **Le coût total sur 3 ans et le modèle économique** : tout est prix unitaire (990-2 800 €) ou abonnement low-cost ; aucune page ne pose « abonnement sans frais de création **et** code qui vous appartient ». La SERP vend soit « sans abonnement = propriétaire », soit « abonnement pas cher = locataire » — jamais les deux.
- **Une preuve chiffrée avant/après d'une vraie TPE** : les agences affirment (« boostez votre activité »), aucune ne montre un relevé Search Console ni un Lighthouse. Le cas Ansquer est inédit sur cette SERP.
- **L'après-livraison** : qui s'occupe de quoi (hébergement, mises à jour, interlocuteur), en combien de temps on a son site, et **le temps du dirigeant** (faire soi-même vs déléguer) — la SERP formation/DIY ne le traite jamais. C'est littéralement « Faites votre métier, on s'occupe du reste ».

## 4. Information gain — stock first-party (zéro sollicitation : suffisant, rien à collecter)

| Élément (brief §7) | Statut de véracité | Emploi prévu |
|---|---|---|
| **Ansquer : impressions ×2,8, clics ×2,2 en 1 mois** (GSC, fenêtres 28 j, sept. 2026) | ✅ publié sur le site, sourcé | **premier écran** (preuve avant le discours) + `StatGrid`-équivalent dans la section preuve |
| **Lighthouse 100/100/100 (SEO, bonnes pratiques, accessibilité), perf mobile 78 ; 11→1 CSS, 12→9 scripts, zéro jQuery** | ✅ publié (comparateur avant/après déjà en page) | section preuve conservée, resserrée ; ⚠️ le 78 mobile s'affiche tel quel (chiffres réels, invariant 9) |
| **Livraison 3 à 5 semaines** | ✅ publié | H2 « processus » (répond à l'intention « création… étapes » sans dériver vers le DIY) ; contraste avec les « 4 à 8 semaines » de la SERP |
| **Deux cousins fondateurs, Axel (IdF) / Mickael (Montpellier)** | ✅ publié | section fondateurs (E-E-A-T, « pas de commercial entre vous et ceux qui font le travail ») |
| **Système d'exploitation marketing de l'agence** (weekly, rapports, gates) | ✅ oui, reformulé | une phrase + lien vers /services/seo-performance : « on applique à nos clients ce qu'on s'applique » |
| **Trou de marché 150-500 €/mois** | ✅ oui, reformulé (jamais la grille interne) | H2 « ce que ça coûte vraiment » : positionnement entre plateforme et agence classique, **sans nommer** |
| Temps interne par pack | ⛔ non publiable | — |
| **Verbatims fondateurs** (`ExpertQuote`) | ⚠️ **à alimenter** — aucun verbatim en stock (plan §2) | **Décision au GO** : soit Axel/Mickael fournissent une citation réelle, soit la PR porte une **proposition signalée** validée avant merge (invariant 11), soit pas de citation — jamais inventée |

Information gain **acquis** : l'accueil mobilise au moins quatre éléments first-party dont deux chiffrés et sourcés. Rien à demander.

## 5. Brief éditorial

**Angle** : *le site internet de votre TPE/PME, codé à la main, en abonnement sans frais de création — et il vous appartient.* Contre-pied frontal de la SERP (prix unitaire **ou** location) ; la preuve Ansquer avant le discours ; « faites votre métier, on s'occupe du reste » comme réponse au gap « après-livraison ».

**Format cible** : page d'accueil commerciale, structure actuelle **conservée** (héros → engagements → fondateurs → preuve → réalisations → prestations → méthode → FAQ → CTA) — le refresh **ré-angle les textes, le title, la meta, le H1 et les H2, et ajoute une section**, il ne refait pas la page. Longueur : ~900-1 200 mots visibles (aujourd'hui ≈ 1 000) — pas d'inflation, la SERP ne récompense pas la longueur sur une page business.

**Auteur affiché** : Axel (positionnement, acquisition) — attribution E-E-A-T ; Mickael cité pour la technique.

### Title / meta / H1 (propositions — l'opérateur tranche au GO)

| Élément | Aujourd'hui (20/10) | Proposition | Pourquoi |
|---|---|---|---|
| **Title** (≤ 60 car.) | « Agence web sur mesure : sites codés à la main \| Kaelix » (ne porte ni TPE, ni PME, ni « site internet ») | « Création de site internet pour TPE et PME, codé à la main \| Kaelix » (≈ 62 — variante courte : « Site internet pour TPE et PME, codé à la main \| Kaelix », 52) | porte **« création site internet … pme/tpe »** (KVI 3) et « site internet pme » (50) ; « codé à la main » = différenciation maison |
| **Meta** (≤ 155 car.) | « Agence web à Montpellier et Paris : sites codés à la main, rapides et sur mesure, dès 80 € HT/mois sans frais de création… » | « KAELIX, agence web pour TPE et PME : votre site internet codé à la main, hébergé et entretenu, dès 80 € HT/mois sans frais de création. Montpellier et Île-de-France. » | place l'entité « agence web … PME » (NO-GO en tête, OK en meta), **remplace « Paris » par « Île-de-France »** (cohérence avec la décision Val-d'Oise et le pied de page) |
| **H1** | « Faites votre métier, on s'occupe du reste. » (slogan seul, aucun mot-clé) | « Le site internet de votre TPE/PME, codé à la main, dès 80 € HT/mois » — slogan conservé **juste au-dessus ou en dessous**, en surtitre/sous-titre | la famille entre dans le H1 (c'est le point du refresh) ; le slogan reste le premier mot lu |

### Plan H2/H3 (ordre des sections, ajouts en **gras**)

1. **Héros** — H1 famille + sous-titre « Conçu pour votre activité, hébergé et entretenu par nous. Sans frais de création, résiliable à tout moment. » + 2 CTA (réserver 30 min · voir les tarifs). **Preuve en un chiffre sous le héros** : « Transports Ansquer : impressions ×2,8, clics ×2,2 en un mois » (lien étude de cas).
2. H2 **« Pourquoi une TPE ou une PME n'a pas besoin de faire son site elle-même »** *(nouvelle section, 120-150 mots)* — répond au gap formation/DIY et à la PAA « où créer un site gratuit » : le temps du dirigeant, la maintenance qui ne s'arrête jamais, le site qui vieillit avec ses mises à jour. Aucun nom de plateforme, aucun nom technique.
3. H2 « Nos engagements à la livraison » (existant, 3 points) — reformulé : « s'affiche en un clin d'œil » → « rapide sur tous les téléphones », « code 100 % à vous », « rien à mettre à jour vous-même ».
4. H2 « Pas de commercial entre vous et ceux qui font le travail » (fondateurs — existant).
5. H2 « Un vrai site, avant et après » (preuve Ansquer — existant, comparateur conservé ; une phrase d'intro sur ce que mesurent les chiffres).
6. H2 **« Ce que ça coûte vraiment »** *(nouvelle section courte, 100-130 mots)* — trois modèles par **catégories** (plateforme en self-service / agence classique au devis / abonnement KAELIX), ce qui est inclus, qui possède le code, et le renvoi vers /tarifs pour le détail. **Aucun montant hors « dès 80 € HT/mois » et « dès 199 € HT/mois »** (règle v6). Pas de nom (Wix, Solocal…), pas de « sur 3 ans » chiffré ici : c'est le travail de /tarifs (ligne 5) et de la page pivot (ligne 8) — ici on pose la catégorie, pas le tableau.
7. H2 « Des sites en production, pas des maquettes » (réalisations — existant).
8. H2 « Ce que vous obtenez » (prestations — existant ; ⚠️ voir garde-fou boutique).
9. H2 **« Comment on crée votre site en 3 à 5 semaines »** (méthode — existant, retitré pour porter « création » + le délai ; les 5 étapes restent).
10. H2 « Questions fréquentes » — FAQ existante (5) **réécrite et complétée** (voir ci-dessous), 6 paires max.
11. CTA final (existant).

### Mots-clés

- **Famille principale** (title/H1/H2) : site internet pme · creation site internet pme · site internet tpe · création site internet tpe → portés par « site internet … TPE/PME » et « création de site internet pour TPE et PME ».
- **Secondaires** (corps, meta, H2) : site internet petite entreprise · site internet pour tpe · site web tpe pme · agence web pme · agence web tpe · sans frais de création · site vitrine tpe.
- **À ne pas viser ici** : « création site internet » seul (écarté), « agence web » seul (écarté), « création site vitrine » (ligne 4), « prix site vitrine » (ligne 5), toute requête locale (lignes 3 et 6).

### FAQ (candidates — 6 max, chaque réponse sourçable)

1. Combien coûte un site internet pour une TPE ou une PME ? → « dès 80 € HT/mois, sans frais de création » + ce qui est inclus + lien /tarifs (répond à la PAA n°1, sans fourchette inventée).
2. En combien de temps une PME a-t-elle son site en ligne ? → 3 à 5 semaines (first-party).
3. Avec un site par abonnement, le site m'appartient-il ? → code 100 % à vous, transmission à la résiliation (FAQ existante « Et si je veux changer d'agence ? », fusionnée).
4. Faut-il créer son site soi-même ou le faire faire quand on est une TPE ? → temps du dirigeant, maintenance, résultat (sans nommer de plateforme).
5. Que comprend l'abonnement site vitrine ? (existante).
6. Proposez-vous un accompagnement SEO ? (existante — « dès 199 € HT/mois », cinq formules, Local ou National).

### Composants & données structurées

- ⚠️ **L'accueil n'est pas une page MDX** : c'est un composant de route du repo web-agency (TSX). Le contrat de contenu (whitelist v1/v2) ne s'applique pas tel quel ; **les règles de fond s'appliquent** : véracité des chiffres (fact-checker), lexique v6 (jamais 249/399/599 hors /tarifs, jamais « cumulatif », « liens », « Souscrire en ligne »), zéro nom technique, FAQ en `FAQPage` générée par le site, `Organization` unique.
- **Schema** (audit A6, à corriger dans la même PR) : une seule `Organization` (`@id`), téléphone et e-mail du `nap.md`, **sans adresse postale** (l'accueil déclare aujourd'hui « Montpellier » en adresse), `areaServed` Montpellier + Île-de-France. Aucun `LocalBusiness`.
- **Visuels** : comparateur avant/après existant conservé ; pas de nouveau visuel requis.

### Capture & maillage

- **Capture** (invariant 10) : réservation 30 min (`contact_rendez_vous`, action principale, inchangée) ; **CTA secondaire « demander un audit gratuit »** conservé (→ /audit-gratuit, ligne 2 du même mois — les deux refreshes de novembre se renvoient l'un à l'autre).
- **Maillage sortant** (contextuel, en plus du pied de page) : /tarifs (section coût), /services/site-vitrine (prestations), /services/seo-performance (phrase « on s'applique ce qu'on vend »), /realisations/transports-ansquer (preuve), /audit-gratuit (CTA), **/agence-web-montpellier et /agence-web-paris** (zones — l'audit C2 demandait des liens contextuels depuis l'accueil ; Paris devient Val-d'Oise en décembre : lien à mettre à jour dans la PR de la ligne 6).
- **Maillage entrant** : 301 `/agence-web-tpe-pme` → `/` (en prod depuis le 19/10, PR #31).

### Garde-fous

- ⛔ **Lexique v6** : seuls montants « dès 80 € HT/mois », « 150 € HT/mois », « dès 199 € HT/mois ». Aucune garantie de position. Aucun nom de concurrent ni de technologie.
- ✅ **Boutique en ligne : « 150 € HT/mois, sans engagement »** — décision opérateur du 19/10 (to-do #10 : PR #25 fermée, refaite en PR web-agency#32 mergée le 20/10, migration poussée). L'accueil en ligne est déjà conforme ; brief §1 et plan ligne 7 alignés le 20/10. Le refresh garde cette formulation.
- ⚠️ **« Paris »** dans la meta et le pied de page → « Île-de-France » (décision du 17/10 : la page Paris devient Val-d'Oise).
- **Règle des 90 j** : la page date du 25/04 → libre. Après publication : J30 ≈ fin décembre (observation), **J90 ≈ fin février 2027** (verdict).
- **Double PASS** `fact-checker` puis `contract-checker` avant la PR (le contract-checker contrôle ce qui s'applique : title/meta/H1, FAQ, maillage vers des cibles existantes, NAP, lexique — et marque « non vérifiable » la whitelist MDX, sans objet).

## 6. Décisions attendues au GO `/refresh`

1. **GO / NO-GO** sur l'angle et le H1 famille (le slogan passe en surtitre ou sous-titre).
2. **Title** : variante longue « Création de site internet pour TPE et PME, codé à la main | Kaelix » (porte « création », ≈ 62 car.) ou courte « Site internet pour TPE et PME, codé à la main | Kaelix » (52).
3. ~~Boutique~~ — **déjà tranché le 19/10** : « sans engagement » (to-do #10, PR #32 en prod).
4. ~~Ordre des PR~~ — **sans objet** : la PR #31 est en prod depuis le 19/10 (to-do #9 clos).
5. **`ExpertQuote`** : verbatim réel d'Axel ou Mickael fourni au `/refresh`, proposition signalée dans la PR, ou aucune citation.
6. **Re-qualification Haloscan** des deux variantes sans chiffre (« agence web pme », « site internet petite entreprise ») : utile mais non bloquante — aucune ne change la tête.

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-10-20, Haloscan inaccessible)

> Les mini-briefs ci-dessous citent la PR web-agency#31 comme « non mergée » : c'était l'état du repo marketing au moment de l'analyse (revue du 19/10). Elle est en prod depuis le 19/10 (constat au rebase du 20/10). Textes bruts conservés tels quels.

### A. « site internet pme »

```
⚠️ analyse dégradée : outil Haloscan inaccessible (KPI = relevé Haloscan 17/10, brief §5) · budget d'exécution atteint (Google → page consent, DuckDuckGo → anti-bot) : SERP approximée via WebSearch, pas l'ordre Google réel.
MOT-CLÉ : site internet pme
VERDICT : REFRESH (accueil `/`, ligne 1 du plan) — rôle : co-tête via la formulation famille (« site internet … TPE/PME »), pas tête seule
Motif : plus gros volume de la famille mais KVI le plus élevé (17 vs TPE 6, création PME 3) et SERP mixte (stats/études + agences) ; la formule « Le site internet de votre TPE/PME » le couvre lexicalement sans lui sacrifier le H1.
Volume : 50/mois (Haloscan 17/10) · Difficulté : KVI 17 (Haloscan 17/10) · famille ~185 · Intention : commerciale mixte
Jouabilité : 6-12 mois — autorité nulle ; agences visibles de taille comparable (beaucoup.studio, perfekto, dilo, komone, dity, oceandigital) ; les variantes TPE (KVI 6) et « création site internet pme » (KVI 3) portent l'entrée, celle-ci suit
Scroll : ⚠️ scroll non vérifiable par outil → scroll-check chrome en session principale
Zéro-clic : ⚠️ non vérifiable par outil ; relevé 17/10 : partiel — ce que les stats/AIO ne donnent pas : un prix mensuel, un délai, une preuve chiffrée
Format dominant (approximé) : pages service d'agence « création de site pour PME/TPE » (prix fixe 2 800 € HT ou 4 999 € / 449 €/mois, délai 72 h à 1 mois) + articles chiffrés « 3 PME sur 4 ont un site » ; aucune page d'abonnement sans frais de création
Gap : aucun acteur ne vend « abonnement sans frais de création + code qui vous appartient » ; aucune preuve chiffrée avant/après ; les pages stats répondent « faut-il un site » sans dire combien, en quel délai, qui s'occupe de quoi ensuite
Cannibalisation : ligne 1 = ce contenu ; ligne 15 distincte (SEO) ; `/agence-web-tpe-pme` → 301 en PR #31 non mergée : à merger avec le refresh
Angle recommandé : H1 famille « Le site internet de votre TPE/PME, codé à la main, dès 80 € HT/mois sans frais de création » ; premier écran = preuve Ansquer + délai 3-5 semaines
Persona : P2 (P1 secondaire)
Secondaires : creation site internet pme, site internet tpe, création site internet tpe, site internet petite entreprise, agence web pme
FAQ : Combien coûte un site internet pour une PME par mois ? · En combien de temps ? · Le site appartient-il à la PME ou à l'agence ?
```

### B. « creation site internet pme »

```
⚠️ analyse dégradée : outil Haloscan inaccessible · budget d'exécution atteint (Bing mal parsé, DuckDuckGo captcha) — SERP lue par proxy WebSearch.
MOT-CLÉ : creation site internet pme
VERDICT : REFRESH (accueil, ligne 1) — rôle : SECONDAIRE, pas tête de title/H1
Motif : volume inférieur à « site internet pme » (36 vs 50), variante « création » exposée à l'AIO (ZC partiel 17/10) et SERP plus informationnelle ; « création » se capte en H1/meta sans porter le title.
Volume : 36/mois (Haloscan 17/10) · KVI 3 · Intention : commerciale mixte (guides BDM/Companeo + OVHcloud + formation CMA ; aucune agence TPE relevée)
Jouabilité : 6-12 mois — KVI 3 mais domaines relevés de taille moyenne à forte
Scroll : ⚠️ non vérifiable par outil → chrome
Zéro-clic : ⚠️ non vérifiable ; valeur 17/10 : partiel — l'AIO ne donne pas : prix mensuel tout compris, propriété du code, délai réel, preuve avant/après
Format dominant (proxy) : guides longs « étapes » + pages fournisseur généralistes ; aucune page d'agence orientée offre
Top 5 (proxy) : blogdumoderateur — processus TPE/PME · companeo — FAQ perso vs pro · ovhcloud — créer un site de PME · CMA/intercariforef — formation · agence-scroll — blog
Gap : aucun coût total 3 ans ni abonnement sans frais de création (études : 4 000-6 000 € en une fois) ; rien sur la propriété du code ; aucune preuve chiffrée
Cannibalisation : aucune ; ne PAS laisser /services/site-vitrine (ligne 4) porter « PME » en title
Angle : title porté par « site internet TPE/PME » ; « création » absorbé en H1 ou sous-titre (« création, hébergement, maintenance : dès 80 € HT/mois, sans frais de création »)
Persona : P2, P1 secondaire
Secondaires : site internet pme, création site internet tpe, site internet pour petite entreprise, créer un site internet pour sa pme, agence web pme
FAQ : Combien coûte la création d'un site internet pour une PME ? · Combien de temps ? · Le site et le code m'appartiennent-ils ?
```

### C. « site internet tpe »

```
⚠️ analyse dégradée : outil Haloscan inaccessible ; SERP Google non lisible par outil (Bing a ignoré « tpe », DuckDuckGo captcha).
MOT-CLÉ : site internet tpe
VERDICT : GO — secondaire de l'accueil, jamais tête de title/H1
Motif : 10/mois, requête polysémique (très petite entreprise / Travaux Personnels Encadrés — futura-sciences dans les résultats / terminal de paiement) et SERP de formations/guides ; le sigle se couvre par « TPE/PME » dans le title.
Volume : 10/mois (Haloscan 17/10) · KVI 6 · Intention : informationnelle-mixte (formations CMA, baromètre France Num, guides, 1 comparateur de devis) — pas de page d'agence visible
Jouabilité : 6-12 mois — KVI 6 jouable, mismatch de format (accueil commerciale vs SERP info/formation) plafonne le gain
Scroll : ⚠️ non vérifiable par outil → chrome
Zéro-clic : ⚠️ non vérifiable ; indice : baromètre France Num (66 % des TPE/PME ont un site) = matériau à snippet
Format dominant : guides 1 500-2 500 mots, listicles DIY, fiches de formation ; aucune page service d'agence relevée
Gap : coût total 3 ans et propriété du code ; avant/après réel d'une TPE ; le temps du dirigeant (faire soi-même vs déléguer) jamais traité
Cannibalisation : `/agence-web-tpe-pme` → 301 (PR #31 non mergée) ; aucune autre ligne du plan ne porte « TPE »
Angle : « TPE/PME » accolés dans title/H1 ; un H2 « Pourquoi une TPE n'a pas besoin de faire son site elle-même » répond au gap formation/DIY
Persona : P2, P1 secondaire
Secondaires : site internet pour tpe, site internet petite entreprise, site web tpe pme, création site internet tpe, site vitrine tpe
FAQ : Combien coûte un site internet pour une TPE sur 3 ans ? · Faut-il créer son site soi-même ou le faire faire ? · En combien de temps ?
```

### D. « création site internet tpe »

```
⚠️ analyse dégradée : outil Haloscan inaccessible (KPI du brief §5) ; SERP via WebSearch, pas Google FR réel.
MOT-CLÉ : création site internet tpe
VERDICT : GO — comme SECONDAIRE de l'accueil, pas tête
Motif : 10/mois, SERP mélangeant guide d'étapes, listicle de builders DIY et formations CMS — l'intention « faire faire » n'y domine pas.
Volume : 10/mois (Haloscan 17/10) · KVI non consigné (famille 3-17) · Intention : mixte
Jouabilité : 6-12 mois — les pages « TPE/PME » qui se classent sur la famille sont de petites agences comparables (oneki, komweb, dity, netsulting, sitedigitalpro, iagence) → prenable à J90-J180 via l'accueil
Scroll : ⚠️ non vérifiable par outil → chrome
Zéro-clic : ⚠️ non vérifiable ; rappel 17/10 : partiel — une AIO « étapes » ne donne pas : coût total 3 ans, propriété du code, délai réel, preuve avant/après
Format dominant : mixte — guide BDM, listicle Codeur (sponsorisé), formations CMS, pages service d'agences « site web TPE/PME » (600-1 200 mots, grille de prix, FAQ)
Top observé : blogdumoderateur · codeur.com · certifpro/intercariforef/CMA · oneki.fr (29,90 €/mois, création offerte, sans engagement — concurrent frontal du 80 €) · dity.fr / netsulting.fr / komweb.fr (paiement unique 490-2 800 €, « vous restez propriétaire »)
Gap : personne ne vend « abonnement ET code qui vous appartient » ; zéro preuve de performance ; le délai réel et « qui fait quoi » après livraison ignorés
Cannibalisation : ligne 1 ✔ ; `/agence-web-tpe-pme` à lever AVANT le refresh ; collision partielle avec ligne 4 → « création » hors du H1 de l'accueil, réservé au title/H2
Angle : H1 nominal « Le site internet de votre TPE/PME, codé à la main, dès 80 € HT/mois » ; « création » en title et H2 « Comment on crée votre site en 3 à 5 semaines »
Persona : P2 ; P1 secondaire
Secondaires : site internet tpe, création site internet pme, site internet pme, site internet petite entreprise, agence web pme
FAQ : Combien coûte la création d'un site pour une TPE sur 3 ans ? · Avec un abonnement, le site m'appartient-il ? · Combien de temps ?
Sources : blogdumoderateur.com/creation-site-internet-tpe-pme/ · codeur.com/blog/createurs-sites-web-tpe/ · oneki.fr/creation-site-internet · dity.fr/prestations/creation-de-site-web-tpe-pme/ · netsulting.fr/…/site-web-tpe-pme/ · sitedigitalpro.com/vrai-cout-site-tpe/
```

### E. « agence web pme » (variante nouvelle)

```
⚠️ analyse dégradée : outil Haloscan inaccessible · budget d'exécution atteint (Google = mur de consentement, Bing hors sujet) → SERP reconstituée depuis WebSearch seul.
MOT-CLÉ : agence web pme
VERDICT : NO-GO comme tête de title/H1 — à garder en SECONDAIRE (entité) sur l'accueil
Motif : SERP du même type que « agence web » seul (annuaires lafabriquedunet ×2 + Semrush Agencies, top-liste tool-advisor, presse) ; les pages d'agence « pour PME » qui émergent sont des fiches d'annuaire. Aucune donnée Haloscan pour justifier de déplacer la tête validée le 17/10.
Volume : non vérifiable · KVI : non vérifiable · Intention : commerciale « trouver un prestataire » (comparaison via annuaires)
Jouabilité : hors d'atteinte en tête face à annuaires/top-listes — requête annexe = la famille déjà retenue
Scroll : ⚠️ non vérifiable par outil → chrome (même séance que « site internet pme »)
Zéro-clic : ⚠️ non vérifiable — probable partiel (une liste d'agences répond « qui ? » sans clic) ; aucun résultat ne donne prix mensuel, délai, preuve chiffrée
Format dominant : fiches annuaire courtes + top-liste longue + 1 article « agence web en abonnement pour PME » (lessentieldeleco) — mismatch frontal avec une page d'accueil
Top 5 : lafabriquedunet (Sigmatic, CibleWeb) · tool-advisor.fr · fr.semrush.com/agencies · lessentieldeleco.fr · lejournaldesentreprises.com (Axecibles)
Gap : aucun prix ni modèle économique lisible ; l'angle « abonnement » n'est incarné par aucune agence → confirme la page pivot (ligne 8) ; aucune preuve client chiffrée
Cannibalisation : aucune avec lignes 3, 6 (locales) ni 15 (SEO) ; `/agence-web-tpe-pme` → 301 vers `/` : l'accueil est l'unique destination
Angle : tête sur « site internet TPE/PME » ; « agence web » comme ENTITÉ (meta, intro « KAELIX, agence web pour TPE et PME », schema Organization)
Persona : P2
Secondaires : agence web pme, agence web tpe, agence web tpe pme, agence site internet pme, agence web abonnement
FAQ : Pourquoi une agence web plutôt qu'une plateforme en self-service ? · Combien coûte une agence web pour une PME, par mois ? · Que comprend l'abonnement ?
À re-qualifier dès retour de Haloscan : si KVI ≤ 10 ET top 5 Google réel = pages d'agences, repasser en secondaire fort, jamais en tête.
```

### F. « site internet petite entreprise » (variante nouvelle)

```
⚠️ analyse dégradée : outil Haloscan inaccessible (aucun chiffre pour ce mot-clé)
MOT-CLÉ : site internet petite entreprise
VERDICT : NO-GO comme tête de title/H1 — variante sémantique dans le corps/meta de l'accueil uniquement
Motif : la SERP nue tombe dans le profil « création site internet » (DIY/hébergeurs/guides « comment créer »), pas dans une SERP d'agences ; les prestataires n'apparaissent qu'en ajoutant « agence » ou « devis ».
Volume : non vérifiable · KVI : non vérifiable · Intention : informationnelle (« pourquoi/comment créer », exemples) avec frange hébergement — pas « faire faire »
Jouabilité : hors d'atteinte en l'état — SERP de géants hébergeurs (Hostinger, Bluehost, OVHcloud) et médias ; annexe : rester sur la famille « site internet pme / tpe » ; « agence web petite entreprise » / « création site internet petite entreprise » à chiffrer chez Haloscan (probablement KEYWORD_UNKNOWN)
Scroll : ⚠️ non vérifiable (mur de consentement) → chrome
Zéro-clic : ⚠️ non vérifiable — profil « comment créer » = PAA probables
Format dominant : guides longs + listicles d'exemples (Hostinger « 20 exemples ») + pages hébergement (OVHcloud) + média (Paperjam) + petite-entreprise.net ; zéro page d'agence TPE visible
Gap : aucun « faire faire » à prix mensuel, aucune propriété du code, aucun coût 3 ans, aucun avant/après réel — mais ce gap se joue mieux sur « site internet pme/tpe »
Cannibalisation : aucune page dédiée à créer — une page « petite entreprise » séparée cannibaliserait l'accueil et /agence-web-tpe-pme (301 → /)
Recommandation : title/H1 restent « TPE/PME » ; « petite entreprise » dans le chapeau, la meta et un H2 pour capter la formulation naturelle des dirigeants P1 ; ne pas re-proposer comme tête sans nouvelle donnée
```

### G. Scroll-check chrome (session principale, 2026-10-20, Browser 1, desktop)

Protocole §1.21 : google.fr en navigation réelle, requête exacte, `hl=fr&gl=fr`, budget 2 requêtes. ⚠️ **Capture d'écran impossible** (renderer en timeout ×2) → relevé sur le **texte rendu de la page** (`get_page_text`), qui respecte l'ordre du DOM ; version **desktop uniquement** (mobile non relevé). AIO : aucune n'apparaît dans le texte rendu — soit absente, soit non capturée par le texte ; le verdict « zéro-clic partiel » du 17/10 n'est pas contredit.

| Requête | Avant le 1er organique | PAA | Pubs | Pack local / shopping / vidéos | 1er organique | Constat |
|---|---|---|---|---|---|---|
| « site internet pme » | **rien** | 4 questions, **après le 2e organique** (coût d'un site pro · 10 meilleurs sites · créer un site gratuit · qui est PME) | 2 sponsorisés **en bas de page** (Galadrim, Mon Agence du Web) | aucun | OVHcloud « Créer un site de PME », puis Jimdo | ✅ **scroll OK** — organique en tête |
| « creation site internet pme » | **rien** | 4 questions, **après le 2e organique** (tarif site pro · comment créer · qui peut créer · meilleure plateforme) | 2 sponsorisés après le 3e organique (Galadrim, Afalence) + bloc « produits et services associés » | aucun | France Num « Créer un site internet pour développer l'activité… », puis OVHcloud | ✅ **scroll OK** — organique en tête |

Top 10 réel « site internet pme » (20/10, desktop) : OVHcloud · Jimdo · CMA Pays de la Loire (formation) · Btg Communication (guide + tarifs « à partir de 2 000 € », délai 4-8 semaines) · **Odyssée** (agence, « interlocuteur unique, devis sous 24 h, livré en 4 à 8 semaines ») · France Num · SiteW · One.com · **Gradly Concept** (990 € tout compris). Top 10 réel « creation site internet pme » : France Num · OVHcloud · Najumi (guide, 07/2026) · CMA IdF (formation) · Jimdo · SendPulse · **Mon Petit Site Web** (atelier PME/TPE) · ADTG Studio (7 étapes, 09/2026) · **Odyssée**.

**Impact sur le verdict** : aucune disqualification ; les deux têtes ont une SERP à organique dominant où des agences de taille comparable se classent en page 1. Confirme le GO et la jouabilité « 6-12 mois ».

### H. Autres relevés de la session

- **GSC** (`gsc-fetch.mjs query`, 7 j 12→18/10) : 1 clic, 1 impression, position 1 sur `/` — propriété du 17/10, aucune lecture possible ; étape B du brief §5 toujours vide.
- **Page en ligne lue le 20/10** (curl) : title « Agence web sur mesure : sites codés à la main | Kaelix » ; meta « Agence web à Montpellier et Paris… » ; H1 « Faites votre métier, on s'occupe du reste. » ; ≈ 1 000 mots ; FAQ 5 paires ; prestation boutique affichée « 150 € HT / mois, sans engagement » (conforme à la décision du 19/10).
