# Brief de production — Combien de palettes dans un conteneur ? La table 20'/40'/40'HC et ses limites de poids

| | |
|---|---|
| **Client** | `transports-ansquer` |
| **Sujet du plan** | 09/2026 n°2 — cluster A (conteneurs) — persona **P2** (importateur / chargeur du port) |
| **Typologie** | evergreen (table de référence + guide de dimensionnement) |
| **Recherche faite le** | 2026-09-13 (`/research`, 3 `serp-analyst` en parallèle + Haloscan domaine, GO opérateur du 13/09) |
| **Statut** | 🕓 **en attente de GO opérateur** — 🛑 aucun `/write` sans GO |

---

## 1. Verdict

**GO ×3 — un seul article pour 20'/40'/40'HC, et une frontière à trancher sur le « poids ».**

- **Pivot** : « combien de palettes dans un conteneur 40 pieds » **40/mois** · variante **« combien de palettes 100x120 dans un conteneur 40 pieds » 90** · « combien de palette dans un conteneur 20 pieds » 70 · « nombre de palette dans un conteneur » 50 · 20 pieds 30 — **cluster ≈ 230-280/mois** (Haloscan, SERP du 02/08/2026). Difficulté quasi nulle : **KVI 15-16, compétition 0,02**, CPC NA, 0 page service classée. Intention **informationnelle pure** (table de capacité + méthode de calcul).
- **Une seule SERP** : le top 4 est **identique** sur « 20 pieds » et « 40 pieds » (similarité Haloscan 0,60) ; les pages généralistes « 20 ou 40 pieds » dominent, les pages mono-format restent en positions 6-10 → **pas de scission**, le title reste générique et le 100x120/40' (90) prend un H2 dédié.
- **Le top 5 donne le chiffre, jamais les limites.** Aucune page ne source ses valeurs (ISO 668, code CTU, EPAL), aucune ne croise capacité en palettes et **limite de masse** (charge utile ISO vs 44 t routiers), le gerbage est traité en binaire (« interdit » chez Jungheinrich, « double empilage » ailleurs), aucune FAQ malgré des PAA actifs.
- **Intention « poids » = intention distincte** (3e analyste) : « poids maximum conteneur 40 pieds » 170 + « poids conteneur 20 pieds » 390 + « poids maximum conteneur 20 pieds » 110 sont gagnés par des **fiches techniques titrées « 40 pieds »** (CMA CGM, Maersk, vendeurs de conteneurs), jamais par les pages « combien de palettes ». Un article titré « combien de palettes » ne rankera pas dessus. → **Décision de frontière au GO (§6)** : l'article palettes garde une **section courte « ce que la table ne dit pas »** (charge utile vs route, renvoi), et le sujet **« Poids d'un conteneur 20'/40'/40'HC »** entre au plan comme **candidat cluster A** à dater à la révision de 11/2026.
- **Scroll : ⚠️ contrôle empêché** (2026-09-13) — extension Chrome déconnectée sur 2 tentatives (budget §1.21 atteint), scroll-check en navigation réelle non fait. **Signal Haloscan** : features `ai_overview + people_also_ask` sur la requête 20' (2 blocs avant le 1er organique) → **risque zéro-clic sur la réponse en un chiffre** ; l'article gagne par la table détaillée et la méthode, pas par « 11 » ou « 25 ». Fallback : relevé opérateur (google.fr, requête exacte, desktop + mobile) à tracer ici avant ou après le `/write` — le verdict GO ne dépend pas du scroll (SERP présumée organique : 180 000 résultats, CPC NA, aucun annonceur).
- **⚠️ Analyse dégradée sur les PAA** : Haloscan `related_question` en API_ERROR sur les requêtes 40' et 20' ; PAA récupérés via la requête 100x120/40' (même SERP). Les FAQ candidates ci-dessous viennent de cette voie + des « related ». À compléter au `/write` si le relevé opérateur ramène d'autres questions.

## 2. Anti-cannibalisation (3 fronts)

| Front | Résultat |
|---|---|
| Haloscan domaine | le site n'a **aucune position** sur « palette(s) » ni « pieds » ; ses seules positions conteneur sont locales (« transport container gennevilliers » pos. 1 homepage, « dépotage conteneur » pos. 39 pilier) → aucun conflit |
| `tracking.md` | guide `/blog/empotage-depotage-conteneur/` (28/08) = le **process** ; sa section « plan de chargement » s'arrête à 2-3 phrases + **commentaire MDX de renvoi** vers cet article (lien provisoire vers le pilier) → **exception 90 j déjà prévue au tracking** : câbler ce renvoi à la publication |
| `content-plan.md` | frontière cluster A actée : cet article = **seul détenteur** de la table 20'/40'/40'HC ; pilier `/stockage/depotage-empotage-conteneurs/` = local + devis ; refresh pilier 12/2026 renverra ici. **Amendement proposé (§6)** : « seul détenteur de la table » = capacité en unités + disposition + gerbage + charge au sol ; le **poids** (tare / charge utile / masse brute / route / VGM) devient un sujet candidat distinct — sinon la page poids future cannibaliserait la section poids de cet article |

## 3. Content gap

Top 5 (identique 20'/40') : mouvbox-france.com (guide EPAL seule, plans visuels, ~2 000 mots, ni gerbage ni CTU) · goliat.fr (2017, tous formats, texte sans tableau) · aquitaine-containers.fr (2 tableaux 20'/40'/40'HC, poids max, double empilage — la référence actuelle) · sealogis.com (outil plan de chargement) · jungheinrich-profishop.fr (le plus complet : tables EUR1/EUR3/CP, CTU cité, FAQ 4 Q, mais gerbage « interdit »). Ce qui manque — notre article :
1. **Une table sourcée** (ISO 668 pour les cotes intérieures, EPAL pour la palette, code CTU pour la répartition) : personne ne cite une norme.
2. **Le pourquoi des chiffres** : pourquoi 11 et pas 12 en 20', 24-25 et pas 23 en 40' (cotes intérieures, disposition longitudinale / transversale / quinconce, palettes mixtes 80×120 + 100×120) — jamais expliqué avec les cotes.
3. **40'HC = même surface, seule la hauteur change** (2,69 m utiles vs 2,39 m) : le gerbage est la seule différence — jamais posé clairement.
4. **Le gerbage en conditions**, pas en binaire : charge admissible de la palette du dessous (EPAL : 4 000 kg statique), hauteur utile, répartition des masses CTU.
5. **La limite de masse** : un 40' de palettes à 1 000 kg sature en tonnes avant de saturer en place ; personne ne relie la charge utile ISO à ce que la route française accepte à la sortie du port (R312-4 : 44 t PTRA en intermodal, 5 essieux et plus) → **section courte + renvoi** (frontière §6).
6. **Une FAQ** (aucune dans le top 5 sauf Jungheinrich).

## 4. Information gain — stock first-party (zéro sollicitation : suffisant, rien à collecter)

| Élément (brief §7) | Usage |
|---|---|
| **Durée de dépotage d'un 40'** : 2 voitures = moins d'1 h ; vrac colis 40×40 = 3-4 h | H2 « la table sur le quai » : le nombre de palettes théorique ≠ le temps de traitement — la palettisation à faire ou non change tout (renvoi guide pour le process) |
| **Différenciateur : gonfler les effectifs** (intérim, décalage de planning) pour traiter vite les missions lourdes | même H2, en une phrase : ce qui se passe quand la boîte arrive plus chargée qu'annoncé |
| **Anecdote de quai anonymisée** : import Chine, ~9 000 colis en vrac + palettes, appel à 20h53, 3-4 h | ⚠️ **déjà racontée dans le guide (section micro-scène)** → ici **réemploi léger en 1 phrase + lien**, jamais re-narrée (anti-doublon) |
| Entrepôt 300 m², quai PL + quai VL, chariot + gerbeur ; implantation bât. G1 quai 8 dans le port | H2 « trop lourd pour la route » : dépotage à quai puis livraison fractionnée = l'angle natif Ansquer ; maillage pilier |
| ⛔ grille tarifaire dépotage : refus définitif | rien de chiffré en € ; le devis est le CTA |

Aucune donnée first-party de gerbage/calage (collecte close le 02/09, invariant 14) : la table vit sur les **sources publiques** listées §5 — c'est l'angle validé au gate du 02/09.

## 5. Brief éditorial

- **Title (~52 c.)** : « Combien de palettes dans un conteneur ? 20', 40', 40'HC »
- **Meta (~150 c.)** : « Nombre de palettes 80×120 et 100×120 dans un conteneur 20, 40 et 40 pieds HC, au sol et gerbées, avec les cotes ISO, le calcul et les limites de poids. »
- **Slug** : `/blog/combien-de-palettes-dans-un-conteneur/`
- **Longueur** : **1 800-2 200 mots** (aligné sur les guides du top 5, densité supérieure par les tables sourcées et la FAQ)
- **Angle** : LA table de référence fr, sourcée, puis « ce que la table ne dit pas » (disposition, gerbage en conditions, masse) et ce que ça change sur le quai.

### Plan H2/H3
1. **La réponse courte** — 3 phrases chiffrées (cible snippet ; assumer l'AI Overview) : 20' ≈ 11 EPAL / 9-10 × 100×120 au sol ; 40' ≈ 24-25 EPAL / 20-21 × 100×120 ; 40'HC = pareil au sol, gerbage en plus. `Callout retenir`.
2. **La table de référence** (H3 titré, tableau Markdown) : conteneur × cotes intérieures (L × l × h, volume) × palette (80×120 / 100×120) × au sol / gerbé (hauteur utile). **`StatGrid` ×3-4 avec source** : cotes ISO 668 (série 1CC / 1AA / 1AAA), palette EPAL 1 200 × 800 mm, charge dynamique 1 500 kg / statique 4 000 kg (EPAL France). ⚠️ chaque valeur sourcée, aucune reprise des blogs concurrents (la SERP diverge : 23 à 25 EPAL en 40').
3. **Pourquoi 11 et pas 12 : la disposition** — largeur intérieure ~2,35 m, longitudinal / transversal / quinconce, palettes mixtes, perte réelle vs calcul de surface. **Schéma first-party n°1 : plan au sol 20' et 40'** (couleurs design system, aucune donnée inventée : cotes ISO + EPAL). `ErrorTip` : diviser la surface du conteneur par celle de la palette.
4. **40'HC : la hauteur, donc le gerbage** — hauteur utile ~2,69 m vs ~2,39 m ; conditions du gerbage (charge admissible de la palette du dessous, stabilité, filmage, répartition CTU) ; ce que « gerbé » veut dire en nombre. `ErrorTip` : « le gerbage est interdit » / « on double toujours » — les deux sont faux, c'est conditionnel. (générique, flagué pour le fact-checker : sources EPAL + code CTU).
5. **Ce que la table ne dit pas : la masse** — **section COURTE** (150-250 mots) : 24 palettes × 1 000 kg = 24 t + tare ≈ la charge utile ISO, mais la route française plafonne l'ensemble à **44 t** en intermodal conteneur (R312-4) et le châssis + tracteur pèsent ; une boîte trop lourde pour la route se dépote à quai et se livre fractionnée. `Callout attention`. {/* RENVOI poids : lien vers le futur article « Poids d'un conteneur 20'/40'/40'HC » à sa publication (candidat cluster A, révision 11/2026) — d'ici là, aucun lien, pas de table tare/charge utile ici */}
6. **La table sur le quai : ce qui change vraiment le temps** — first-party : 2 voitures < 1 h vs vrac 3-4 h ; la palettisation à faire ou non ; renfort d'effectifs ; renvoi guide empotage/dépotage pour le process (réserves, scellé, CTU) et pilier pour le dépotage à Gennevilliers. 1 phrase + lien pour l'anecdote 9 000 colis (déjà dans le guide).
7. **FAQ** (5) : Comment calculer le nombre de palettes dans un conteneur ? · Combien de palettes 80×120 dans un conteneur 20 pieds ? · Combien de palettes 100×120 dans un 40 pieds ? · Combien de palettes gerbées dans un 40'HC ? · Un conteneur 40 pieds, combien de tonnes ? (réponse courte + renvoi section 5, sans table tare/payload).
8. **CTA devis** → `/stockage/depotage-empotage-conteneurs/`.

### Mots-clés
- Principal : combien de palettes dans un conteneur (générique, title) · Secondaires en H2/H3 : combien de palettes 100x120 dans un conteneur 40 pieds (90), combien de palette dans un conteneur 20 pieds (70), nombre de palette dans un conteneur (50), combien de palettes dans un conteneur 40 pieds (40), plan de chargement palette europe (70) · En corps : volume container 40 pieds (110), chargement conteneur 40 pieds (90), pallet wide (30)
- ⛔ non visés en title/H1/H2 : « poids conteneur 40 pieds » (320) et « poids maximum conteneur 20/40 pieds » (110/170) — intention distincte, sujet candidat ; « empotage / dépotage conteneur » (guide) ; « dépotage conteneur gennevilliers » (pilier)

### Composants v2 & visuels
- Tableau Markdown titré (le cœur) ; `StatGrid` ×1 (3-4 stats sourcées ISO 668 / EPAL / R312-4) ; `Callout retenir` ×2-3 + `Callout attention` ×1 ; `ErrorTip` ×2 (surface ÷ surface ; gerbage binaire) ; pas d'ExpertQuote/Testimonial (brief : pas de porte-parole).
- Visuels (≥1/~800 mots → 2-3) : **plan au sol 20' et 40'** (schéma first-party, cotes publiques) + cover stock Unsplash ; schéma « gerbé / non gerbé en 40' vs 40'HC » en option.

### Capture & maillage
- CTA devis ×2 → `/stockage/depotage-empotage-conteneurs/` (objectif cluster A : pousser le pilier local + conversion).
- Sortants (5 max) : `/stockage/depotage-empotage-conteneurs/` · `/blog/empotage-depotage-conteneur/` · `/stockage/` · `/transport/affretement-europe/` (import) · `/transport/hayon-20m3-paris/` (livraison fractionnée après dépotage). Entrants : **câbler le renvoi commenté du guide** (exception 90 j prévue), refresh pilier 12/2026, futur article poids.

### Garde-fous
Zéro tarif ; zéro nombre de véhicules ; pas de 24/7 ; anonymisation (anecdote en 1 phrase) ; pas de cadratin ; « 23 ans » = jamais l'entreprise. **Sources externes à citer (3-4, sobres)** : ISO 668:2020 (cotes, séries 1CC/1AA/1AAA ; masse brute max à faire confirmer par le fact-checker — 30 480 kg historique, 32 500 kg sur les boîtes récentes, ne pas trancher sans source primaire) · EPAL France (palette EPAL 1 : 1 200 × 800 × 144 mm, 1 500 kg dynamique, 4 000 kg statique) · Légifrance, code de la route **R312-4** (44 t PTRA, plus de 4 essieux, transport intermodal de conteneurs ISO ≤ 13,72 m) + FAQ 44 tonnes du ministère · code CTU 2014 (OMI/OIT/CEE-ONU) pour la répartition des masses. Les chiffres de palettes par conteneur se **déduisent des cotes** (montrés dans le schéma), pas recopiés des blogs.

## 6. Décisions attendues au GO `/write`
1. **GO/NO-GO** sur l'angle et le plan.
2. **Frontière poids** : valider l'amendement du plan — cet article = capacité + disposition + gerbage + charge au sol, avec une section masse **courte et sans table tare/charge utile** ; « Poids d'un conteneur 20'/40'/40'HC » (cluster ≈ 170 + 390 + 110/mois, KVI 12) entre au plan comme **candidat cluster A**, à dater à la révision de 11/2026. Alternative : tout garder ici (article plus long, title inchangé) en acceptant de ne pas ranker sur « poids » — non recommandé.
3. **Scroll-check** : accepter le verdict sans relevé réel (SERP présumée organique) ou faire le relevé opérateur avant le `/write` (2 requêtes, desktop + mobile).
4. Schéma 2 (gerbé / non gerbé) : produire ou s'en tenir au plan au sol + cover.

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-09-13)

### A. « combien de palettes dans un conteneur 40 pieds »

```
⚠️ analyse dégradée : Haloscan related_question en API_ERROR + related/questions sans résultat (KEYWORD_UNKNOWN) → PAA non relevés par outil ; KPI/SERP Haloscan OK (SERP datée 02/08/2026).
VERDICT : GO (pivot title sur la variante « 100x120 » à 90, cluster ~230). Intention informationnelle pure, KVI 15, compétition 0,02, SERP sans acteur dominant ; le top 5 donne le chiffre mais pas les limites.
Volume : 40/mois · variante 100x120/40' 90 · KVI 14,8 / 15,4.
Scroll : ⚠️ non vérifiable par outil. Signal indirect : 180 000 résultats, CPC NA, aucun annonceur probable → SERP présumée organique.
Format dominant : article-guide 2 000-4 000 mots avec tables 20'/40' + plans de chargement ; 1 outil (Sealogis) ; 1 fiche produit hors-sujet.
Top 5 : mouvbox-france.com · goliat.fr (2017) · aquitaine-containers.fr · jungheinrich-profishop.fr (le plus complet, gerbage « interdit ») · hautsdefrance-container.fr (fiche 40' dry/HC, mismatch).
Gap : limite de poids réelle (charge utile ISO vs 44 t route vs VGM) ; gerbage binaire ; palettes mixtes et positionnement ; théorique vs chargeable au quai.
Cannibalisation : aucune (guide = process ; pilier = local + devis ; frontière actée).
Secondaires : 100x120/40' (90), poids conteneur 40 pieds (320), chargement conteneur 40 pieds (90), 20 pieds (30), nombre de palette dans un conteneur (50) ; corps : plan de chargement palette europe (70), pallet wide (30), volume container 40 pieds (110).
FAQ : 80×120 dans un 40'HC au sol et gerbées ? · 26 t dans un 40' en France ? · 100×120 ou 80×120 pour un 40' ?
Risque fact-check : la SERP diverge (23 à 25 EPAL au sol en 40') → table sourcée sur ISO 668 / CTU / EPAL, pas sur les blogs.
```

### B. « combien de palettes dans un conteneur 20 pieds »

```
VERDICT : GO — article unique 20'/40'/40'HC confirmé, pas de scission (top 4 identique 20'/40', similarité Haloscan 0,60 ; mono-format en pos. 6-10).
Volume : 30 (20 pieds) · « combien de palette dans un conteneur 20 pieds » 70 · 40 pieds 40 · 100x120/40' 90 · cluster ~230-280 · KVI 16 · compétition 0,02 · 0 page service classée.
Scroll : ⚠️ non vérifiable par outil. Features Haloscan : ai_overview + people_also_ask (2 blocs avant le 1er organique) → risque zéro-clic, gagner par la table détaillée.
Format dominant : guide 2 000-3 000 mots, H2 par palette puis par conteneur, 1-2 tableaux ; aucune FAQ, aucune source.
Top 5 : mouvbox (EPAL seule, pas de 100x120 ni poids max) · goliat (2017, texte sans tableau) · aquitaine-containers (2 tableaux, poids max, double empilage — référence actuelle) · sealogis (outil) · jungheinrich-profishop (title non remonté).
Gap : aucune source ; personne ne croise capacité et limite de poids routier FR ; pourquoi 11 et pas 12 / 25 vs 23-24 jamais expliqué avec les cotes ; 40'HC = même surface, seul le gerbage change ; pallet wide absent ; pas de FAQ.
Cannibalisation : aucune ; câbler le renvoi du guide à la publication (exception 90 j prévue).
Secondaires : 100x120/40' (90), 20 pieds (70), plan de chargement palette europe (70), nombre de palette dans un conteneur (50), 40 pieds (40) — « poids conteneur 40 pieds » (320) en corps seulement.
FAQ : comment calculer ? · un 40 pieds, combien de tonnes ? (10) · combien de 80x120 dans un 20 pieds ? (10)
⚠️ related_question en erreur sur la requête 20' (PAA via 100x120/40') ; keywords_questions vide.
```

### C. « poids maximum conteneur 40 pieds » (+ variantes)

```
VERDICT : GO — intention DISTINCTE → page dédiée à dater (révision 11/2026) ; dans l'article palettes, une SECTION COURTE seulement (table + renvoi).
Motif : domaines partagés (goliat, mouvbox, HdF Container, inbox, cubner) mais jamais les mêmes URL ; « poids » gagné par des fiches techniques 40' ; cluster poids ≈ 3× le cluster palettes.
Volume : 170 · poids maximum conteneur 20 pieds 110 · poids d'un conteneur 40 pieds 70 · charge utile conteneur 40 pieds 20 · poids conteneur 20 pieds 390 à part · KVI 11,8 · CPC 11,49 € (valeur achat conteneur) · intention lookup de spec → forte exposition AI Overview.
Scroll : ⚠️ non vérifiable par outil (voisines « prix container 20 pieds » avec ai_overview + PAA).
Top 5 (SERP 17/08/2026) : cma-cgm.fr (table specs) · goliat.fr (seule page qui chevauche les deux intentions : pos. 2 ici, pos. 21 sur palettes) · mouvbox (guide d'achat 40') · maersk.com FAQ (3 tables payload, « varie selon le pays » sans chiffrer) · hautsdefrance-container.fr.
Gap : personne ne relie payload ISO (30 480 kg brut 40' ; 32 500 kg depuis 2002 selon esalco) à la limite routière FR (44 t PTRA porte-conteneur, essieux) ; conséquence opérationnelle (dépotage à quai, livraison fractionnée) ; VGM/SOLAS absent du top 5 FR.
Cannibalisation : ⚠️ conflit de doctrine avec « seul détenteur de la table (poids inclus) » → amender : palettes = unités + charge au sol/gerbage ; page poids = tare/charge utile/brut + route + VGM.
Angle recommandé (futur) : « Poids d'un conteneur 20', 40', 40'HC : tare, charge utile, masse brute ISO et ce que la route accepte vraiment à la sortie du port ».
Secondaires : poids conteneur 20 pieds (390), poids maximum conteneur 20 pieds (110), poids d'un conteneur 40 pieds (70), fiche technique container 40 pieds (90), charge utile conteneur 40 pieds (20).
FAQ : quel poids peut supporter un conteneur ? · poids d'un conteneur vide ? · un 40' chargé au maximum peut-il rouler en France ?
```

### D. Haloscan domaine (session principale, 2026-09-13)

Filtre `palette|conteneur|container|pieds` sur transportsansquer.fr : 3 mots-clés seulement, tous locaux ou pilier — « transport container gennevilliers » pos. 1 (homepage) / 19 (ancienne `/manutention/`), « transporteur conteneur gennevilliers » pos. 2, « dépotage conteneur » pos. 39 (pilier, scrape 29/08). **Aucune position sur « palette(s) », « 20/40 pieds », « poids ».**

### E. Scroll-check chrome (session principale)

| Date | Requête | Desktop / mobile | Constat | Impact |
|---|---|---|---|---|
| 2026-09-13 | — | — | ⚠️ **contrôle empêché** : extension Claude in Chrome déconnectée sur 2 tentatives (budget §1.21 atteint) | verdict GO maintenu sur signal Haloscan (SERP présumée organique ; AI Overview + PAA probables sur 20') ; relevé opérateur à tracer ici |
