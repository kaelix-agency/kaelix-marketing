# Brief de production — Commissionnaire de transport ou transporteur : qui mandater ? (responsabilités, assurance, recours, côté chargeur)

| | |
|---|---|
| **Client** | `transports-ansquer` |
| **Sujet du plan** | 10/2026 → **11/2026** (créneau ferme, revue J90 du 29/10) — cluster B (affrètement & commission) — persona **P2** (importateur / chargeur dont les conteneurs passent par le port) |
| **Typologie** | evergreen (comparatif de choix + tableau de responsabilités) |
| **Recherche faite le** | 2026-10-30 (tâche planifiée « Production du mois » ; 3 `serp-analyst` en parallèle, KPI Haloscan pré-chargés par API directe le 30/10, MCP Haloscan absent) |
| **Statut** | ✅ `go-11/2026` (GO d'Axel, revue J90 du 29/10, §1.30) → **brief prêt (2026-10-30)** — la PR est le gate |

---

## 1. Verdict

**GO — article de CHOIX côté chargeur, title/H1 sur la requête « commissionnaire ou transporteur : qui mandater ? » ; la tête « commissionnaire de transport » vit en corps, les requêtes commerciales restent aux pages de service.**

- **Pivot assumé (pari-émergent)** : « différence transporteur commissionnaire » volume **NA, KVI 1** (30/10) ; « commissionnaire de transport ou transporteur » NA, KVI 21 ; « rôle du commissionnaire de transport » 10. Intention de choix ultra-qualifiée (PAA « Quelle est la différence entre un commissionnaire et un transporteur ? », « Pourquoi faire appel à un commissionnaire plutôt qu'à un transporteur ? »). Jouabilité : **3 mois** sur la requête de choix, 6-12 mois sur la variante KVI 21.
- **La tête « commissionnaire de transport » (200/mois, KVI 29 ; « commissionnaire transport » 200, KVI 21) : NO-GO en title/H1.** SERP institutionnelle et métier (ecologie.gouv, Bpifrance, Wikipédia, Aftral, Hellowork, Indeed, INPI), **AI Overview présent** (scrape 17/10) ; aucun résultat « côté chargeur » dans le top 15. Elle se place en **H2 définition courte** et en entité du corps.
- **Signal GSC qui a déclenché le sujet** : « commissionnaire de transport international » 91 impressions pos. 40,4 sur 90 j — **ce n'est pas la cible de l'article** : `/transport/transport-international/` le porte déjà (Haloscan pos. 22). Verdict analyste 3 : **refresh léger de la page service** à dater (12/2026 ou 02/2027, à inscrire au plan), l'article maille vers elle avec l'ancre exacte. Idem « commissionnaire de transport Île-de-France » (40, KVI 9) : territoire du pilier B `/transport/affretement-europe/` (mot-clé déclaré au plan), jamais de l'article.
- **Zéro-clic : fort sur la tête** (définition en 3 lignes dans l'AIO), **⚠️ non vérifiable par outil sur la requête de choix** (scrape du 02/08 sans AIO ; la tête en porte un depuis). **Angle qui force le clic** : ce que la réponse courte ne donne pas — qui porte la présomption de responsabilité, qui répond du sous-traitant, quelle limite d'indemnité, contre qui agir et en combien de temps, quelle assurance vérifier, et **le cas du prestataire à double statut** (transporteur + commissionnaire), que personne ne traite : c'est le first-party Ansquer.
- **Scroll** : ⚠️ **non vérifiable** (aucun navigateur). Signaux : tête = AIO + 9 PAA + CPC 3,57 € → premier organique probablement bas ; requête de choix = requête info sans pub probable.
- **⚠️ Analyse dégradée** (3 analystes) : aucune page du top 5 lue (hôtes hors réseau : mkdmy, maghrebsolutions, hkcourses, oct-occitanie, ecologie.gouv, qualitairsea, upply, victorisavocat, docshipper). Angles déduits des titles. **Légifrance et ecologie.gouv.fr sont inaccessibles depuis la session** : les références juridiques ci-dessous viennent de WebSearch (doctrine, cabinets, Bpifrance) — le `fact-checker` les marquera « non vérifiable sur source primaire » si le réseau ne change pas ; **l'article écrit le droit au niveau des principes établis, sans montant chiffré non recoupé par au moins deux sources**.

## 2. Anti-cannibalisation (3 fronts)

| Front | Résultat |
|---|---|
| Haloscan domaine | `/transport/transport-international/` pos. 22 « commissionnaire de transport international » ; `/transport/` pos. 55 « commissionnaire de transport ile de france » ; `/transport/affretement-europe/` pos. 42 « affretement routier europeen ». Aucune page sur « différence / ou transporteur ». ✅ |
| `tracking.md` | le guide empotage (28/08) a une section « Qui est responsable de quoi ? » (tableau conteneur) qui **définit déjà le commissionnaire en 2 phrases** → l'article renvoie vers ce tableau pour le cas conteneur, ne le recopie pas ; aucun autre article du cluster B. |
| `content-plan.md` | **Frontières** : (1) title/H1 **sans « international » ni « Île-de-France »** (pages service) ; (2) la page service `/transport/affretement-europe/` a déjà un bloc « Commissionnaire n'est pas un synonyme de transporteur » (2 cartes + 3 garanties) : l'article **approfondit** (responsabilité, plafonds, recours, décision) et **maille** vers elle, il ne la paraphrase pas ; (3) le guide « L'affrètement transport » (reporté, réexamen 01/2027) renverra ici pour la définition du commissionnaire au lieu de la redévelopper ; sa section « vs messagerie vs dédié » reste un paragraphe-renvoi vers le comparatif F ; (4) « transitaire vs commissionnaire » = **une FAQ** ici, pas un H2 (intention internationale, territoire futur de la page international) ; (5) refresh à inscrire au plan : page international (title/meta + bloc registre + 1 FAQ) |

## 3. Content gap (titles du top 15 + WebSearch ; pages non lues)

Top 5 « différence transporteur commissionnaire » (02/08) : capacitetransport-mkdmy.fr (blog de formation, côté candidat) · maghrebsolutions.fr (générique) · ecologie.gouv.fr (fiche réglementaire) · hkcourses.fr (formation capacité) · bpifrance-creation.fr (créateur d'entreprise). Seul le n° 8 (oct-occitanie « commissionnaire, affréteur, transporteur : comment choisir ») est côté chargeur ; n° 6/7/9 = transitaire. Ce qui manque :
1. **Le point de vue du chargeur qui mandate** : la SERP parle aux futurs transporteurs/commissionnaires (capacité, examen, salaire).
2. **La chaîne de responsabilité expliquée pour décider** : transporteur garant de la perte et des avaries de sa propre prestation (présomption, code de commerce) ; commissionnaire garant de l'arrivée des marchandises et des faits de ses substitués ; conséquence pratique : un seul interlocuteur ou plusieurs quand ça casse.
3. **Plafonds et assurance** : les deux régimes indemnisent au poids, pas à la valeur (contrats types) ; la déclaration de valeur et l'assurance ad valorem ; qui souscrit quoi ; ce qu'il faut demander avant de confier.
4. **Recours et délais** : réserves à la livraison (protestation motivée sous 3 jours, code de commerce), action dans l'année de la livraison (prescription annale) — jamais chiffrés côté chargeur dans la SERP.
5. **L'arbre de décision « qui mandater selon le flux »** et **le double statut** : un prestataire qui exécute avec ses propres véhicules en IdF ET organise en commissionnaire au-delà ; ce que ça change (un seul contrat, un seul responsable) ; comment vérifier son inscription au registre (liste publique, DRIEAT en IdF).

## 4. Information gain — stock first-party (zéro sollicitation, suffisant)

| Élément (brief §7) | Usage |
|---|---|
| **Double statut : transporteur + commissionnaire inscrit au registre national** (statut publiable, ⛔ **jamais de numéro**, point fermé le 24/08) | le cœur de l'angle : H2 « Et quand le même prestataire est les deux ? » + conclusion ; formulation exacte « inscrit au registre des commissionnaires de transport » |
| Navette commissionnaire : **tournée type du mardi** (collecte Paris → Issy → Clamart → Nanterre, boucle IdF), déjà racontée dans l'article tournée | **réemploi léger en 1 phrase + lien**, comme exemple de ce qui reste du transport exécuté en propre (pas de la commission) — anti-doublon |
| Implantation dans le port de Gennevilliers, bât. G1 quai 8 ; entrepôt 300 m², quai PL + quai VL | micro-scène « un conteneur import » : la commission organise le pré/post-acheminement, le dépotage se fait à quai (renvoi pilier A + guide) |
| Pages service existantes : affrètement Europe (« nous organisons et nous en répondons juridiquement »), international (« trois étapes, une seule responsabilité ») | maillage sortant avec ancres exactes ; **pas de nouvelle promesse** |
| ⛔ pas d'`ExpertQuote` (aucune autorisation de citation), pas de `Testimonial` (1 avis GBP, source non exploitable ici), pas de tarif, pas de nombre de véhicules, « 23 ans » = jamais l'entreprise | composants v2 limités à StatGrid (si stats sourcées), ErrorTip (uniquement si vécu first-party : aucun en stock → **ErrorTip générique flagué ou Callout attention**), Callout retenir, CTA, FAQ |

## 5. Brief éditorial

- **Title (48 c.)** : « Commissionnaire ou transporteur : qui mandater ? »
- **Meta (148 c.)** : « Transporteur ou commissionnaire de transport : responsabilités, assurance, recours en cas de litige. Le guide du chargeur pour choisir qui mandater. »
- **H1** : « Commissionnaire de transport ou transporteur : à qui confier vos marchandises, et qui répond quand ça casse ? »
- **Slug** : `/blog/commissionnaire-ou-transporteur/`
- **Longueur** : **1 600-2 000 mots** (plus dense que les blogs de la SERP par le tableau de responsabilités et l'arbre de décision ; plus court que le guide empotage)
- **Angle** : le guide du chargeur qui mandate — pas une fiche métier.

### Plan H2/H3
1. **Intro réponse-directe** (~100 mots) : le transporteur déplace votre marchandise et répond de sa prestation ; le commissionnaire organise l'acheminement, choisit les intervenants et répond du tout, en son nom. Le choix dépend du flux, pas du prestataire.
2. **Deux métiers, deux contrats** : H3 « Le transporteur : il exécute » (contrat de transport, lettre de voiture, garant de la perte et des avaries hors force majeure — code de commerce L.133-1) · H3 « Le commissionnaire de transport : il organise et répond du tout » (définition du code des transports L.1411-1 ; garant de l'arrivée et des avaries, L.132-4 et L.132-5 ; garant des faits de ses substitués, L.132-6 ; inscription au registre, DRIEAT en IdF) · H3 « Ni transitaire, ni affréteur, ni courtier » (1 paragraphe de lexique : le transitaire mandataire exécute des instructions sans garantir le résultat ; l'affréteur est un commissionnaire spécialisé dans l'affrètement routier). `Callout retenir`.
3. **Le tableau qui tranche : qui répond de quoi** (H3 titré + table Markdown, 3 colonnes transporteur / commissionnaire / « les deux à la fois ») sur 6 lignes : obligation · responsabilité en cas de perte ou avarie · sous-traitance · plafond d'indemnisation (principe : au poids, pas à la valeur — sans montant) · assurance · recours et délais. **Schéma first-party n° 1 : la chaîne de responsabilité** (chargeur → transporteur A / B / C en direct = 3 recours ; chargeur → commissionnaire → substitués = 1 recours), couleurs DS, aucune donnée chiffrée.
4. **Plafonds et assurance : ce qu'on ne lit jamais avant le sinistre** : les contrats types indemnisent au kilo ; la déclaration de valeur / d'intérêt spécial ; l'assurance ad valorem du chargeur ; la responsabilité civile du commissionnaire ne couvre que sa responsabilité (limitée) ; ce qu'il faut demander avant de confier (attestation d'assurance, inscription au registre, conditions générales). ⚠️ **Montants (33 €/kg et 1 000 €/colis < 3 t ; 20 €/kg et 3 200 €/t ≥ 3 t pour le contrat type général ; 20 €/kg pour le contrat type commission)** : recoupés par 2 sources secondaires le 30/10 mais **non lus sur Légifrance** → **à écrire en ordre de grandeur prudent ou à retirer si le fact-checker ne peut pas les sourcer** ; dans tous les cas pas en StatGrid. `Callout attention` : « un plafond au poids ne couvre pas une palette de valeur ».
5. **Réserves, délais, contre qui agir** : réserves écrites à la livraison (protestation motivée dans les 3 jours hors fériés, L.133-3) ; action dans l'année (L.133-6) ; en commission : un seul interlocuteur à saisir, le commissionnaire se retourne contre ses substitués. **`ErrorTip` générique flagué** (« signer le bon sans réserve » / « réserves écrites, précises, sur le document de transport ») — à arbitrer au gate (le vécu first-party n'existe pas : le présenter en `Callout attention` si l'opérateur préfère).
6. **Qui mandater selon votre flux** : H3 arbre de décision (schéma first-party n° 2, conceptuel sans chiffre) : un trajet, un véhicule, IdF → transporteur ; plusieurs maillons, plusieurs modes, douane, conteneur → commissionnaire ; flux récurrent IdF → [tournée régulière](/transport/tournee-reguliere/) ; lot partiel/complet Europe → [affrètement](/transport/affretement-europe/) ; hors Europe → [transport international](/transport/transport-international/) ancre « commissionnaire de transport international ».
7. **Et quand le même prestataire est les deux ?** : le first-party — Ansquer exécute en propre en IdF (fourgons, tournées, exemple : la tournée du mardi, 1 phrase + lien) et organise en commissionnaire au-delà ; la qualité en laquelle il agit se lit sur le document de transport et le devis ; conséquence : un seul contrat, un seul responsable ; micro-scène conteneur import → dépotage à quai (renvoi pilier A). « Inscrit au registre des commissionnaires de transport » (⛔ sans numéro).
8. **FAQ (5)** : Quelle est la différence entre un commissionnaire de transport et un transporteur ? · Qui est responsable en cas de perte ou d'avarie, le commissionnaire ou le transporteur ? · Quelle est la différence entre un transitaire et un commissionnaire de transport ? · Comment vérifier qu'un commissionnaire est inscrit au registre ? · Pourquoi faire appel à un commissionnaire plutôt qu'à un transporteur ?
9. **CTA devis** → `/devis/` (« Décrire un flux à organiser »).

### Mots-clés
- Principal : commissionnaire ou transporteur / différence transporteur commissionnaire (title, H1, meta) · en H2 : commissionnaire de transport (définition), responsabilité du commissionnaire de transport, contrat type commission de transport (mention) · corps : commissionnaire transport, rôle du commissionnaire, obligations du commissionnaire, transitaire, affréteur, lettre de voiture, registre des commissionnaires.
- ⛔ hors title/H1/H2 : « commissionnaire de transport international » (page service, ancre de lien seulement), « commissionnaire de transport Île-de-France » / « Paris » (pilier B), « formation / salaire / capacité / devenir commissionnaire » (intention métier, écartée).

### Composants v2 & visuels
- Table Markdown titrée (le cœur) ; `Callout retenir` ×3 ; `Callout attention` ×1-2 ; `ErrorTip` ×1 générique **flagué** ; `StatGrid` : **aucune** sauf si 2-3 stats sourçables sur source primaire (improbable : réseau) ; pas d'`ExpertQuote` ni `Testimonial`.
- Visuels (≥1/~800 mots → 2 + cover) : schéma « chaîne de responsabilité » + schéma « arbre de décision » (couleurs DS, QA visuelle rendue en PNG) + cover stock Unsplash (politique §3 ; ⚠️ le téléchargement Unsplash peut être empêché par le réseau → réutiliser une image stock déjà présente dans `public/images/` du site avec son crédit, sinon pas de cover et le signaler).

### Capture & maillage
- CTA devis ×1-2 → `/devis/`.
- Sortants (5 max) : `/transport/affretement-europe/` · `/transport/transport-international/` (ancre « commissionnaire de transport international ») · `/blog/empotage-depotage-conteneur/` (tableau de responsabilités conteneur) · `/transport/tournee-reguliere/` ou `/blog/tournee-livraison-reguliere/` (exemple exécuté en propre) · `/stockage/depotage-empotage-conteneurs/`. Entrants à câbler plus tard : bloc statut de la page affrètement (refresh pilier B 02/2027), page international (refresh), futur guide affrètement.

### Garde-fous
Zéro tarif ; zéro nombre de véhicules ; pas de 24/7 ; « 23 ans » = jamais l'entreprise ; registre **sans numéro** ; anonymisation ; pas de tiret cadratin ; **droit écrit au niveau des principes**, chaque article de loi cité avec son code ; **liens externes (1-3) sur des URL confirmées** : fiche « Commissionnaires de transport routier » du ministère (ecologie.gouv.fr), fiche Bpifrance Création « Commissionnaire de transport, réglementation », page DRIEAT Île-de-France « conditions d'accès à la profession ». Les montants de plafonds : prudence (§5.4).

## 6. Décisions tracées (GO mensuel : pas de nouvelle demande)
1. Title/H1 sur la requête de choix (pas la tête) — appliqué.
2. Requêtes « international » et « IdF » laissées aux pages service ; **refresh léger de `/transport/transport-international/` à inscrire au plan** (proposé 12/2026 en réserve ou 02/2027) — à acter à la weekly.
3. ErrorTip générique : flagué dans la PR pour arbitrage.
4. Montants de plafonds : selon le verdict du fact-checker (ordre de grandeur ou retrait).

## 7. Scroll-check (session principale)

| Date | Requête | Desktop / mobile | Constat | Impact |
|---|---|---|---|---|
| 2026-10-30 | différence transporteur commissionnaire | — | ⚠️ **contrôle empêché** : aucun navigateur dans la session planifiée | aucun sur le verdict (requête info à KVI 1, pas de pub probable) ; relevé opérateur bienvenu |

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-10-30)

### A. « commissionnaire de transport » (tête)
```
⚠️ analyse dégradée : WebFetch ×3 en échec réseau (ecologie.gouv, qualitairsea, upply) ; KPI pré-chargés du 30/10, SERP Haloscan du 17/10.
VERDICT : NO-GO en title/H1 → GO en corps ; pivot title/H1 sur la requête de choix.
Volume 200 (+200 « commissionnaire transport », 92 « définition ») · KVI 29 · intention mêlée : définition/rôle + réglementaire « devenir/créer » + métier/salaire ; zéro commercial.
Jouabilité : hors d'atteinte en tête ; annexes : « différence transporteur commissionnaire » (title/H1) ; « commissionnaire de transport international » (page service pos. 22 → refresh page) ; « registre commissionnaire de transport » 40 KVI 13 (intention devenir : H2 courte).
Scroll : ⚠️ non vérifiable ; AIO + 9 PAA + CPC 3,57 €. Zéro-clic : fort (déduit) — angle qui force le clic : qui est responsable, qui indemnise, à quel plafond, réserves et recours, ad valorem, quand mandater l'un ou l'autre.
Top 5 : ecologie.gouv · bpifrance-creation · qualitairsea · wikipedia · aftral.
Gap côté chargeur : garantie des substitués vs prestation propre ; plafonds / déclaration de valeur / réserves / prescription 1 an ; arbre « qui mandater » ; double statut (la lettre de voiture dit en quelle qualité l'acteur agit).
Références à FAIRE VÉRIFIER : L.1411-1 C. transports ; L.132-4 à L.132-9 C. com. ; L.133-6 C. com. ; décret 90-200 (registre) ; décret 2013-293 (contrat type commission, D.1432-3).
Cannibalisation : title/H1 sans « international » ni « IdF » ; guide affrètement futur renverra ici. Maillage → 2 pages service + /devis/.
FAQ : transitaire vs commissionnaire · obligations du commissionnaire (avarie) · pourquoi un commissionnaire plutôt qu'un transporteur.
```

### B. « différence transporteur commissionnaire » (requête de choix)
```
⚠️ analyse dégradée : WebFetch ENOTFOUND ×4 (mkdmy, maghrebsolutions, hkcourses, oct-occitanie) ; KPI pré-chargés.
VERDICT : GO (pari-émergent : volume NA, intention de choix ultra-qualifiée, KVI 1). SERP de petits domaines tournée vers les candidats au métier ; angle chargeur vacant.
Volume NA · KVI 1 (variante « ou transporteur » KVI 21) · intention info-comparative. Jouabilité : 3 mois (KVI 1) / 6-12 mois (KVI 21).
Scroll : ⚠️ non vérifiable ; pas d'AIO le 02/08, 6 PAA héritées, pas de pub probable. Zéro-clic : ⚠️ non vérifiable (la tête porte un AIO depuis) — la réponse courte ne donne pas la présomption de responsabilité, la garantie des substitués, la limite d'indemnité, contre qui agir et en combien de temps, l'assurance à vérifier.
Top 5 : mkdmy (candidat capacité) · maghrebsolutions (générique) · ecologie.gouv · hkcourses (formation) · bpifrance ; n° 8 oct-occitanie seul côté chargeur ; 6/7/9 transitaire.
Gap : persona SERP = futur transporteur ; chaîne de responsabilité côté chargeur absente ; double statut traité par personne.
Références à vérifier : L.132-3 à L.132-9 C. com. ; L.1432-2 et s. C. transports + contrat type commission (décret 2013-293) ; registre L.1422-1 et R.1422-1 et s. ; L.133-6 ; contrat type général (limitation transporteur).
Cannibalisation : aucune ; frontières lot tenues (tête, international/IdF → pages service ; guide affrètement → paragraphe-renvoi).
Angle : tableau 3 colonnes (transporteur / commissionnaire / double statut) × 6 lignes + arbre de décision + conclusion double statut Ansquer, CTA devis.
FAQ (5) : différence commissionnaire/transporteur · qui est responsable en cas de perte ou d'avarie · transitaire vs commissionnaire · pourquoi un commissionnaire · obligations (registre, assurance, contrat type).
Title (48 c.) : Commissionnaire ou transporteur : qui mandater ? · Meta (148 c.) : Transporteur ou commissionnaire de transport : responsabilités, assurance, recours en cas de litige. Le guide du chargeur pour choisir qui mandater.
```

### C. « commissionnaire de transport international » + « … ile de france »
```
⚠️ analyse dégradée : WebFetch ×3 ENOTFOUND (victorisavocat, docshipper, optivia) ; SERP = scrapes Haloscan 14/10 et 04/09.
VERDICT : REFRESH ×2 (pages service) — aucune des deux n'est une cible de l'article.
International : 20 · KVI 25 · CPC 3,20 · intention info-réglementaire (guides juridiques, registre PDF gouv, annuaires) ; IdF : 40 · KVI 9 · CPC 1,01 · navigationnelle-annuaire + commerciale-locale (evertrans, optivia dvi 5, hapia, mauffrey).
Jouabilité : international hors top 3, 6-12 mois pour le top 10 (site pos. 22, 91 imprs) ; IdF 6-12 mois (site pos. 55 sur /transport/). Scroll : ⚠️ non vérifiable ; pack local probable sur IdF.
Zéro-clic : international partiel (PAA définitionnelles) ; IdF faible (SERP annuaire).
Gap : point de vue du chargeur francilien qui importe par le port ; comment vérifier l'inscription d'un prestataire au registre (le registre est en PDF brut).
Cannibalisation : si l'article prend « international » en secondaire → conflit avec /transport/transport-international/ ; « IdF » = hub /transport/ + pilier B → trancher UNE page porteuse du statut (reco : pilier B).
Reco : (a) article : section cas d'usage international qui maille vers la page international avec l'ancre exacte, FAQ « vérifier l'inscription au registre » ; (b) refresh léger post-J90 de /transport/transport-international/ (title/meta + bloc registre + 1 FAQ) à dater 12/2026 ou 02/2027 ; (c) refresh pilier B 02/2027 : « commissionnaire de transport Île-de-France ».
FAQ : vérifier l'inscription au registre · différence commissionnaire/transporteur · obligations du commissionnaire.
```

### D. Haloscan domaine (session principale, 30/10)
`positions transportsansquer.fr` filtré : « commissionnaire de transport international » pos. 22 (page international, vol. 20, KVI 25) · « commissionnaire de transport ile de france » pos. 55 (/transport/, vol. 40, KVI 9) · « affretement routier europeen » pos. 42 (page affrètement). Aucune position sur « différence », « transporteur ou commissionnaire », « transitaire ».

### E. Sources juridiques recoupées par WebSearch (30/10 ; Légifrance inaccessible depuis la session)
- Code de commerce L.132-4 (commissionnaire garant de l'arrivée des marchandises dans le délai) et L.132-5 (garant des avaries ou pertes, sauf stipulation contraire dans la lettre de voiture ou force majeure) ; L.132-6 (garant des faits du commissionnaire intermédiaire) — cms.law, lemondedudroit.fr, dalloz-actualite (Com. 29 mars 2023, n° 21-10.017 : le commissionnaire ne répond de son fait personnel que s'il est à l'origine du dommage).
- Code de commerce L.133-1 (le voiturier est garant de la perte des objets à transporter, hors force majeure) ; L.133-3 (protestation motivée dans les 3 jours, non compris les jours fériés) ; L.133-6 (prescription d'un an à compter de la livraison) — baumann-avocats, howdengroup, eurojuris.
- Code des transports L.1411-1 (définition du commissionnaire) — doctrine.fr ; registre : 3 conditions cumulatives (capacité professionnelle, honorabilité, capacité financière), R.1422-2, instruction DREAL / DRIEAT en Île-de-France, téléservice demarche.numerique.gouv.fr — Bpifrance Création, DREAL PACA.
- Contrat type de commission de transport : décret n° 2013-293 du 5 avril 2013 ; limitation à la responsabilité du substitué, 20 €/kg (cms.law, lefebvre-dalloz, Com. 15 avril 2026 n° 24-20.106 rapporté) — ⚠️ texte non lu.
- Contrat type général (décret n° 2017-461 du 31 mars 2017) : < 3 t : 33 €/kg dans la limite de 1 000 €/colis ; ≥ 3 t : 20 €/kg dans la limite de 3 200 €/t — lemondedudroit, consultation.avocat.fr — ⚠️ texte non lu.
