# Brief de production — Guide empotage + dépotage de conteneur

| | |
|---|---|
| **Client** | `transports-ansquer` |
| **Sujet du plan** | 08/2026 n°2 — cluster A (conteneurs) — persona **P2** (importateur/chargeur du port) |
| **Typologie** | guide (evergreen) |
| **Recherche faite le** | 2026-08-28 (`/research`, 2 `serp-analyst` en parallèle + Haloscan domaine) |
| **Statut** | 📝 **produit et publié le 2026-08-28** (PR #5 mergée `128399d`, gate validé sur preview ; ErrorTip génériques conservés sur décision opérateur ; suivi : `tracking.md`). Arbitrages du gate : angle/plan validés ; doctrine cluster A actée (guide national / pilier local) ; anecdote : chiffres ~9 000 colis et 20h53 reconfirmés (brief §7) ; 2 schémas retenus (durées : points confirmés seulement, palettisé en qualitatif) |
| **Re-recherche** | oui : le brief de la session du ~24-27/08 n'avait pas été persisté (perdu) |

---

## 1. Verdict

**GO — fusion confirmée : UN guide, deux moitiés distinctes.**

| Donnée (Haloscan, 2026-08-28) | empotage conteneur | dépotage conteneur |
|---|---|---|
| Volume | **210**/mois (+ « empotage » seul 320, « empoter conteneur » 140) | **110** (sans accent) + **70** (avec accent) + « depotage container » 110 |
| Difficulté | quasi nulle (compétition 0,01 ; CPC 1,39 €) | quasi nulle (compétition 0,01-0,02 ; CPC NA) |
| Intention (SERP observée) | info dominante (définition/process) + couche prestataires en pos. 2-4 | info-commerciale (guides-process de prestataires + INRS ; pages service locales à partir de pos. 6-9) |
| Features SERP | AI Overview, PAA, related | AI Overview (graphie sans accent), PAA, related |

- ⚠️ Les volumes ont **bougé** depuis le ciblage du brief client (02/08 : 140 / 70). Valeurs à jour ci-dessus ; cumul du cluster ~ **390-500/mois** selon graphies. Le brief client §5C est à rafraîchir à la révision de 11/2026 (pas maintenant : on ne touche pas au ciblage pour un delta de volume).
- **Recouvrement des deux SERPs** : similarité Haloscan 0,42 ; DocShipper (guide fusionné) est top 5 **des deux** requêtes ; ~15 URLs communes en top 50. → La fusion est récompensée par Google, **à condition** d'un H2 dédié à chaque opération (pas un texte symétrique) : empotage = plan / arrimage / calage / CTU / certificat ; dépotage = sécurité à l'ouverture / tri / contrôle / durée.
- **Règle du scroll : ⚠️ non vérifiable par outil** (Haloscan ne remonte pas la position du 1er organique). Signaux indirects : CPC bas + compétition 0,01 → peu de pubs ; mais **AI Overview présent sur les deux** → une part du trafic « définition » sera absorbée par l'AIO. Conséquence rédactionnelle : viser le **featured snippet / citation AIO** avec une définition en 2 phrases sous le H1 pour chaque opération, et miser sur ce que l'AIO ne donne pas (durées réelles, matrice de responsabilités, coordination) pour justifier le clic.
- Pas de `pari-émergent` : volumes réels, sujet établi.

## 2. Anti-cannibalisation (3 fronts)

| Front | Résultat |
|---|---|
| Haloscan (domaine) | aucune page du site classée sur empotage/dépotage ; seule position conteneur : `transporteur conteneur gennevilliers` pos. 2 (homepage, scrape ancien) → pas de conflit |
| `tracking.md` (publié) | 1 seul article publié (tournée régulière, cluster F) → aucun conflit |
| `content-plan.md` (prévu) | **1 arbitrage à acter** (ci-dessous) + frontière palettes 09/2026 confirmée |

**⚠️ Arbitrage à acter au GO — objectif du pilier.** Le cluster A assigne « top 3 sur depotage conteneur + empotage conteneur » au **pilier** `/stockage/depotage-empotage-conteneurs/` (transactionnel-local, 293 mots). Or les deux SERPs récompensent le **format guide** : c'est le guide qui prendra la requête nationale, pas la page service. Proposition (sans conflit une fois actée) :
- **guide blog** = requêtes nationales « empotage conteneur » / « dépotage conteneur » (+ définitions, CTU, durées) ;
- **pilier** = requêtes locales « dépotage conteneur gennevilliers / île-de-france », « transport container gennevilliers » (brief §5B) + conversion devis ;
- maillage guide → pilier obligatoire (CTA + lien contextuel), pilier → guide au refresh de 12/2026.
→ À répercuter dans `content-plan.md` (objectif SEO du cluster A) **au GO**, pas avant.

**Frontière avec l'article palettes (09/2026) — STRICTE** : le guide ne porte **aucune** table 20'/40'/40'HC, aucun nombre de palettes par conteneur, aucun poids max. Section « Dimensionner le chargement » = **2-3 phrases** + renvoi. Emplacement du renvoi : dans le H2 empotage, sous-section « Plan de chargement », à marquer par un **commentaire MDX** `{/* RENVOI palettes 09/2026 : lien vers /blog/<slug-palettes>/ à poser à sa publication ; d'ici là, lien vers le pilier */}` — le lien pointe vers le pilier tant que l'article palettes n'existe pas (jamais de lien vers une URL absente : `contract-checker`).

**Frontière avec « prix »** : « prix dépotage conteneur » (10/mois) et l'angle tarifaire de Morin/DocShipper sont **laissés aux autres** (refus tarifaire définitif). Le guide traite les **facteurs de durée** (qui font le coût) sans jamais un chiffre en euros.

## 3. Content gap (top 5 des deux SERPs)

Ce que couvre le top 5 : définition lexique (Eurofiscalis) ; process en 4-5 étapes (DSV, Liotier, Morin) ; arrimage/calage/CTU côté empotage (emballage-13, safe-formation, DocShipper) ; sécurité fumigation (INRS, PDF) ; un guide long fusionné (DocShipper ~2 200 mots : CTU, FCL/LCL, VGM, durées génériques, tarifs, FAQ).

Ce qui manque **sur le fond** (= notre terrain) :
1. **Durées réelles segmentées** — seul Morin donne « 2-3 h » ; personne ne distingue véhicules / palettes / vrac colis, ni ne relie la durée à ce qui la fait varier.
2. **Qui fait quoi, qui signe quoi, qui paie** — chaîne chargeur → commissionnaire → transporteur → terminal ; certificat d'empotage, scellé, VGM (SOLAS), PV de réserves à l'ouverture, surestaries/détention. DocShipper effleure (FCL/LCL), personne ne fait la **matrice**.
3. **Coordination et main-d'œuvre** — durée de l'opération ↔ immobilisation du conteneur ↔ créneau de quai ↔ effectifs : zéro couverture. C'est exactement le first-party Ansquer.
4. **Sécurité à l'ouverture** intégrée à un guide prestataire (aucun ne le fait ; INRS reste un PDF isolé) → section courte **sourcée INRS**.

## 4. Information gain — first-party mobilisé (brief client §7, cluster A)

| Élément | Usage dans le guide | Statut de véracité |
|---|---|---|
| Durées réelles selon contenu : **2 voitures = < 1 h ; vrac colis 40×40 = 3-4 h pour un 40'** | `StatGrid` « ce qui fait la durée » + H2 durées | ✅ confirmé 2026-08-06 — source à tracer sur chaque stat : « relevés d'exploitation Transports Ansquer, port de Gennevilliers » |
| **Gonfler les effectifs** (intérim, décalage de planning) pour traiter vite une mission lourde | H2 coordination — le différenciateur | ✅ confirmé 2026-08-06 |
| Anecdote du conteneur import de Chine (très chargé, colis en vrac + palettes → renfort anticipé) | encart narratif dans le H2 coordination, **anonymisé** (« un importateur francilien ») | ✅ sur le fond ; ⚠️ **les chiffres « ~9 000 colis » et « appels à 20h53 » ne sont pas dans le brief §7** (qui dit « sans chiffre non confirmé ») → à **reconfirmer avec le client avant le `/write`**, sinon formulation sans chiffre (« plusieurs milliers de colis », « prévenus la veille au soir ») |
| Implantation **dans** le port (bât. G1, quai 8), quai PL + quai VL, 300 m² | H2 coordination : « pourquoi le lieu du dépotage compte » (pas de transfert intermédiaire, marchandise repart par l'autre quai) | ✅ socle produit |
| Erreurs de quai vues côté Ansquer (calage, répartition des masses) | `ErrorTip` ×2-3 | ⚠️ **formulation générique sourcée CTU** tant qu'aucun cas terrain calage/gerbage n'est reçu (content-plan : « rien sur gerbage/calage — à collecter ») — ne pas inventer un cas Ansquer |

Aucune donnée manquante **bloquante** : le sujet est productible. Un ⚠️ non bloquant (chiffres de l'anecdote).

## 5. Brief éditorial

- **Title (≤ 60 car., sans « Gennevilliers »)** : « Empotage et dépotage de conteneur : le guide du chargeur »
- **H1** : Empotage et dépotage de conteneur : étapes, durées, responsabilités
- **Meta** : « Comment se déroulent l'empotage et le dépotage d'un conteneur, combien de temps ça prend vraiment, qui est responsable de quoi (code CTU, VGM, réserves) et comment organiser le quai. » (à ajuster ≤ 155 car.)
- **Slug** : `/blog/empotage-depotage-conteneur/`
- **Longueur cible** : **1 800-2 200 mots** (DocShipper, seul guide complet, ~2 200 ; le reste de la SERP fait 300-1 200 — on vise la profondeur du leader sans le gonfler, l'information gain fait la différence, pas le volume).
- **Angle** : le guide **du chargeur** (pas du terminal, pas du transitaire) : ce qui se passe entre l'ouverture et la fermeture des portes, ce que ça prend comme temps, qui porte quoi, et comment ne pas laisser un conteneur immobilisé parce que le quai n'était pas prêt.
- **Voix** : B2B sobre, vouvoiement, phrases courtes, vocabulaire maison (empotage/dépotage, quai PL/VL, commissionnaire, « le port »). ⛔ Pas de tiret cadratin. Rythme visuel : cf. règle `article-writer` (issue du gate du 1er article).

### Plan H2/H3

1. **Empotage, dépotage : de quoi parle-t-on** — 2 définitions en 2 phrases chacune (cible snippet/AIO) ; FCL vs LCL en 3 lignes ; qui charge le conteneur selon l'incoterm/le mode (P2 : « qui charge ? » est une PAA).
2. **L'empotage étape par étape** (moitié 1)
   - Préparer : documents, VGM (SOLAS), état du conteneur (inspection avant chargement)
   - Plan de chargement et répartition des masses — **2-3 phrases + renvoi** `{/* RENVOI palettes 09/2026 */}` (dimensionnement = article palettes)
   - Calage et arrimage selon le **code CTU** (ce que le code impose au chargeur) — `ErrorTip` calage / masses
   - Fermer : certificat d'empotage, scellé, photos avant fermeture (pratique Ansquer déjà décrite sur le pilier)
3. **Le dépotage étape par étape** (moitié 2)
   - À l'arrivée : vérifier scellé, réserves, PV à l'ouverture
   - Sécurité à l'ouverture : fumigation, gaz, ventilation — section courte **sourcée INRS**
   - Vider, contrôler, palettiser/filmer, relever les écarts
   - Après : stockage tampon ou redistribution (maillage stockage + hayon)
4. **Combien de temps ça prend vraiment** — `StatGrid` first-party (< 1 h véhicules · 3-4 h vrac colis 40×40 · sources tracées) ; les **facteurs** : nature du chargement (palettisé / vrac / véhicules), palettisation à faire ou non, effectifs, quai adapté, contrôles. ⛔ zéro euro. **Schéma first-party n°1** ici ou en §5 : « durée de dépotage selon le contenu » (barre/échelle, couleurs design system).
5. **Organiser le quai : coordination et main-d'œuvre** — le différenciateur : renfort d'effectifs (intérim, décalage planning), anecdote import Chine anonymisée, pourquoi être **dans** le port change la chaîne (pas de transfert, entrée quai PL / sortie quai VL). **Schéma first-party n°2 (candidat principal)** : process de dépotage du quai PL au quai VL (flux en 5 blocs).
6. **Qui est responsable de quoi** — matrice chargeur / commissionnaire / transporteur / terminal : empotage conforme CTU, VGM, scellé, réserves, surestaries/détention. Formulation « inscrit au registre des commissionnaires » autorisée, ⛔ jamais de numéro. Rester généraliste et sourcé (CTU, SOLAS, Code des transports) : pas de conseil juridique.
7. **FAQ** (4-5, dépliable côté site) — voir §7.
8. **CTA** : devis vers le pilier.

### Mots-clés à couvrir

- Principaux : empotage conteneur · dépotage conteneur (les 2 graphies, sans forcer) · depotage container
- Secondaires : empoter un conteneur · plan d'empotage · code CTU empotage · certificat d'empotage · dépotage définition (210, snippet) · comment dépoter un conteneur · VGM · surestaries
- ⛔ Non visés : prix dépotage conteneur (refus tarifaire) · « combien de palettes… » (article 09) · toute variante « gennevilliers » en title/H1 (pilier)

### FAQ candidates (PAA Haloscan + gap)

1. Combien de temps dure le dépotage d'un conteneur 40' ? (réponse first-party : dépend du contenu, < 1 h à 3-4 h)
2. Qui est responsable de l'empotage du conteneur, FCL vs LCL ?
3. Qui paie le dépotage et les surestaries ?
4. Comment dépoter un conteneur en sécurité (fumigation, scellé) ?
5. Peut-on décharger un conteneur sans quai ? (PAA — réponse : hayon / manutention à plat, renvoi hayon 20 m³)

### Composants (contrat v2)

- `StatGrid` ×1 : 3-4 stats de durée, **chaque stat sourcée** (relevés d'exploitation Ansquer, port de Gennevilliers, 2026)
- `ErrorTip` ×2-3 : calage insuffisant · masses mal réparties (CTU) · ouvrir sans vérifier le scellé / sans PV de réserves
- `FAQ` dépliable
- ⛔ pas d'`ExpertQuote` (aucune autorisation porte-parole), ⛔ pas de `Testimonial` (aucun avis sourcé)

### Visuels (≥ 1 par ~800 mots → 2-3 pour 2 000 mots)

1. **Schéma first-party — process de dépotage du quai PL au quai VL** (flux : conteneur → quai PL → contrôle/tri → palettisation → stockage tampon ou quai VL → livraison) — candidat principal, SVG aux couleurs du design system, `public/blog/empotage-depotage-conteneur/`
2. **Schéma first-party — durée selon le contenu** (véhicules < 1 h / palettisé / vrac colis 3-4 h) — l'information gain visuel
3. Cover stock Unsplash (politique visuelle définitive) — ⛔ aucun visuel ne montre un comptage de flotte, un tarif, un cadratin

### Maillage interne

- Sortant : pilier `/stockage/depotage-empotage-conteneurs/` (CTA + contextuel ×2) · `/stockage/entrepot-gennevilliers/` (stockage tampon) · `/transport/hayon-20m3-paris/` (livraison après dépotage, FAQ sans quai) · `/stockage/groupage-degroupage/` (LCL) · `/transport/affretement-europe/` ou international (commissionnaire, 1 lien) · article palettes 09/2026 **à sa publication** (renvoi marqué en commentaire MDX, lien vers le pilier d'ici là)
- Entrant à prévoir : refresh du pilier 12/2026 → guide ; article palettes 09/2026 → guide (section process) ; guide commissionnaire 10/2026 → matrice de responsabilités

### Capture et CTA

- **Mécanisme** : devis `/devis/` **vers le pilier dépotage/empotage** (CTA fin d'article + CTA intermédiaire après le H2 durées : « Un conteneur à traiter ? Nombre d'EVP, nature de la marchandise, date d'arrivée : réponse sous 24 h » — reprend la promesse déjà en ligne sur le pilier)
- Pas de lead magnet (décision du 1er article : CTA devis seul tant que le chantier capture côté site n'est pas fait)

### Schema / GEO

- `BlogPosting` (Organization) + `FAQPage` via le pipeline du site ; définitions citables en tête de §1 (AIO présent sur les deux SERPs)

## 6. Garde-fous à passer au `fact-checker` / `contract-checker`

- ⛔ aucun tarif, aucune fourchette, aucun « à partir de »
- ⛔ aucun numéro de registre ; « 23 ans » = le dirigeant (formulation impersonnelle), 2021 = l'entreprise
- ⛔ aucun nom de client ; anecdote anonymisée ; chiffres de l'anecdote **uniquement si reconfirmés**
- ⛔ aucune table de palettes / capacité par conteneur (article 09)
- ⛔ aucun nombre de véhicules, aucune promesse 24/7
- Sources externes à citer : code CTU (OMI/OIT/CEE-ONU), SOLAS VGM, INRS (dépotage et fumigation) — à vérifier par le `fact-checker` (versions, intitulés exacts)
- Liens internes : uniquement vers des URLs existantes du site (article palettes = commentaire, pas de lien)

## 7. Décisions attendues au GO

1. **GO / NO-GO** sur l'angle et le plan.
2. **Arbitrage pilier** : réaffecter l'objectif national au guide, le local au pilier (→ mise à jour `content-plan.md` cluster A au GO).
3. **Chiffres de l'anecdote** (~9 000 colis, 20h53) : reconfirmés par le client, ou version sans chiffre.
4. Confirmer le **2e schéma** (durée selon contenu) ou s'en tenir au schéma de process + cover.

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-08-28)

### A. « dépotage conteneur »

```
MOT-CLÉ : dépotage conteneur (Haloscan score les deux graphies : « depotage conteneur » 110, « dépotage conteneur » 70, + « depotage container » 110 — SERPs quasi identiques, à cumuler)
VERDICT : GO (fusion confirmée avec « empotage conteneur » 210)
Motif : SERP à difficulté quasi nulle (KVI 15,8 / concurrence 0,01, CPC NA) où le format gagnant est le guide-process signé par un prestataire — exactement le sujet 08/2026.

Volume : 110 + 70 (+110 container) /mois · Difficulté : quasi nulle · Intention : info-commerciale (guides de prestataires + INRS ; pages service locales seulement à partir de la pos. 6-9)
Scroll : ⚠️ non vérifiable par outil (Haloscan ne renvoie pas les features de cette SERP) ; aucun signal pub (CPC NA, compétition 0,01) ; PAA probable → présumé OK
Format dominant top 5 : guide-process en étapes (4-5 étapes), 600-1 200 mots, souvent rédigé par un transporteur ; 1 PDF INRS sécurité

Top 5 (graphie sans accent, SERP 08/2026) : tsp-liotier — processus/types ; dsv.com — 5 étapes port→entrepôt ; inrs.fr (PDF) — 4 étapes sécurité/fumigation ; hexatrans — « aucun retard », service ; transports-morin — tarif + 5 étapes (cite 2-3 h de manutention)

Recouvrement empotage/dépotage : partiel (~35 % d'URLs communes : docshipper pos. 5 des deux, tca.be, ecotra, achille, matram, mehez). Top 5 « empotage » dominé par arrimage/calage/plan de chargement/code CTU ; top 5 « dépotage » = étapes + sécurité + prix. Fusion viable à condition de deux moitiés bien distinctes.

Gap :
- Durées réelles : seul Morin donne « 2-3 h » ; personne ne segmente palettes vs vrac colis vs véhicules
- Qui fait quoi / qui paie : responsabilités chargeur-transitaire-transporteur, surestaries/détention, plomb douane, PV de réserves — absent du top 5 (lexbase pos. 18 seulement)
- Organisation de la main-d'œuvre (renfort d'effectifs, coordination créneau de quai) : zéro couverture
Cannibalisation : conflit d'objectif avec le pilier /stockage/depotage-empotage-conteneurs/ — le content-plan assigne « top 3 depotage conteneur » au pilier, or la SERP récompense le format guide → réaffecter : guide = national ; pilier = local + devis. Aucun conflit avec l'article palettes (09) tant que le guide ne porte pas la table.
Angle recommandé : « Empotage et dépotage de conteneur : le guide du chargeur — étapes, durées réelles, qui fait quoi, code CTU, coûts ». Différenciateur : durées segmentées + anecdote renfort d'effectifs.
Persona pressenti : P2
Secondaires : depotage container, dépotage définition (210, snippet à viser), prix dépotage conteneur (10), comment dépoter un conteneur, code CTU empotage
FAQ candidates : Combien de temps dure le dépotage d'un conteneur 40' ? · Qui paie le dépotage et les surestaries ? · Comment décharger un conteneur sans quai ?
```

### B. « empotage conteneur »

```
MOT-CLÉ : empotage conteneur (fusion avec « dépotage conteneur »)
VERDICT : GO — fusion confirmée
Motif : SERP mixte définition/guide + prestataires, difficulté quasi nulle (compétition 0,01) ; un guide fusionné (DocShipper) est déjà top 5 sur LES DEUX requêtes.

Volume : 210/mois (« empotage » seul 320, « empoter conteneur » 140) · Difficulté : quasi nulle (compétition 0,01, CPC 1,39 €) · Intention : informationnelle dominante avec couche commerciale (prestataires en 2-4)
Scroll : ⚠️ non vérifiable par outil ; CPC bas et compétition 0,01 → peu de pubs attendues. Viser le featured snippet (définition en 2 phrases sous le H1).
Format dominant top 5 : lexique court (Eurofiscalis) + pages prestataires courtes (~300-600 mots) + 1 guide long (DocShipper ~2 200 mots). Place vacante pour un guide chargeur plus structuré.

Top 5 empotage : eurofiscalis.com — définition ; emballage-13.com — prestataire empotage/arrimage ; tca.be — terminal (BE) ; reseau-ebene.fr — prestataire arrimage ; docshipper.fr — guide fusionné (CTU, resp. FCL/LCL, VGM, durées, tarifs). #6 container-z, #7 safe-formation « empoter selon le code CTU ».
Top 5 dépotage : dsv.com — 4 étapes ; eurofiscalis — définition ; transports-morin — « combien ça coûte » (2-3 h) ; inrs.fr — sécurité fumigation ; docshipper — même guide.
Recouvrement : similarité Haloscan 0,42 ; 1 URL commune en top 5, ~15 en top 50. Fusion justifiée avec un H2 dédié à chacune.

Gap :
- Code CTU et responsabilités : PARTIELLEMENT couverts (DocShipper, safe-formation). Le gap est l'opérationnel : qui signe quoi (certificat d'empotage, scellé, VGM), qui paie en cas de litige, chaîne chargeur → commissionnaire → transporteur.
- Coordination et temps : personne ne relie durée ↔ immobilisation (surestaries/détention, créneau quai, effectifs). First-party Ansquer = information gain unique.
- Sécurité à l'ouverture (fumigation, INRS) intégrée par aucun guide prestataire.
Cannibalisation : pilier transactionnel-local → guide national sans ville, CTA vers le pilier ; article palettes 09 garde la table. « prix dépotage conteneur » (10/mois) laissé aux autres.
Angle recommandé : « Empotage et dépotage de conteneur : le guide du chargeur » — process des deux opérations, matrice de responsabilités (CTU, SOLAS-VGM), durées réelles et impact surestaries, checklist de coordination.
Persona pressenti : P2 (PAA « qui charge le conteneur ? », « comment dépoter »)
Secondaires : dépotage conteneur, empoter conteneur, plan d'empotage conteneur, code CTU empotage, certificat d'empotage
FAQ candidates : Qui est responsable de l'empotage (FCL vs LCL) ? · Combien de temps dure le dépotage d'un 40' ? · Comment dépoter en sécurité (fumigation, scellé douane) ?
```

### C. Haloscan domaine (session principale)

`transportsansquer.fr` : 25 mots-clés connus, 1 seul contenant « conteneur » (`transporteur conteneur gennevilliers`, pos. 2, homepage, scrape > 2 mois). Aucune URL classée sur empotage/dépotage. `code ctu` : non scoré Haloscan.
