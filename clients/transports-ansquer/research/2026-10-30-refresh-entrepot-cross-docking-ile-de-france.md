# Brief de production — Refresh `/stockage/entrepot-gennevilliers/` : cross-docking Île-de-France (title/meta + FAQ + schéma du flux quai PL → quai VL)

| | |
|---|---|
| **Client** | `transports-ansquer` |
| **Sujet du plan** | 11/2026 — **refresh** (nouvelle ligne de la revue J90 du 29/10) — cluster C — persona **P1** (responsable logistique PME francilienne) |
| **Type de refresh** | `ctr` + `position` léger : title/meta/accroche réécrits, section FAQ ajoutée (FAQPage), schéma first-party du flux ; le corps existant est conservé |
| **Page** | https://transportsansquer.fr/stockage/entrepot-gennevilliers/ (page de service TSX dans `src/app/`, pas un MDX — brief client §2) |
| **Recherche faite le** | 2026-10-30 (tâche planifiée « Production du mois » ; 3 `serp-analyst` en parallèle, KPI Haloscan pré-chargés par API directe le 30/10, MCP Haloscan absent de la session) |
| **Statut** | ✅ `go-11/2026` (GO d'Axel, revue J90 du 29/10, §1.30) → **brief prêt (2026-10-30)** — la PR est le gate |

---

## 1. Verdict

**REFRESH mono-intention « cross-docking Île-de-France », rien d'autre en title/H1/meta.**

- **Le signal** (Search Console 90 j, relevé du 29/10) : « crossdocking île de france » **94 impressions, 0 clic, position 4,0** ; « cross docking île de france » 59 impressions, 0 clic, position 12,1. Page : 285 impressions, 2 clics, position 13,2. C'est le plus gros écart de clics du site (`ctr-gap` : ~6 clics manquants sur 90 j à position 4). Page sortie de ses 90 jours (site relancé fin juillet).
- **La cause qualifiée** (revue J90 §2) : le title en ligne, « Stockage et cross-docking à Gennevilliers, 300 m² », ne dit ni « Île-de-France » ni ce que le cross-dock apporte (quai PL + quai VL, pas de mise en stock, livraison IdF). La meta parle « solutions courte et longue durée » : promesse de stockage, pas de passage à quai.
- **Garde-fou 90 jours** : site en ligne fin juillet 2026 → J90 fin octobre (tracking §« fenêtre de test ») ; la revue J90 du 29/10 a rendu son verdict (« refresh orienté clic, 11/2026 »). ✅ Refresh autorisé, PR relue à la weekly du 2/11.
- **Haloscan** (30/10) : la requête régionale est **inconnue de l'index** (KEYWORD_UNKNOWN, volume NA) ; proxys : « cross docking » 100/mois KVI 7, « crossdocking » 100 KVI 34, « cross dock » 171 KVI 20, « cross docking logistique » 60 KVI 25, « plateforme cross-docking » 30, « cross docking paris » 10. La page tient la **pos. 32 sur « crossdocking »** (Haloscan 29/10). Jouabilité : **3 mois** sur la régionale (déjà pos. 4 GSC).
- **Zéro-clic** : ⚠️ **non vérifiable par outil** sur la régionale ; sur la générique « cross docking », **AI Overview présent** (scrape Haloscan 26/10, liens viaposte + Wikipédia) et 9 PAA définitionnelles → la définition se lit sans clic. **Angle qui force le clic** : ce que l'AIO ne donne pas — un prestataire joignable, le flux concret quai PL → tri → quai VL, les gabarits de sortie (9 / 14 / 20 m³ hayon), les secteurs desservis, le devis.
- **Scroll** : ⚠️ **non vérifiable** (aucun navigateur dans la session planifiée ; claude-in-chrome indisponible). Signaux indirects : CPC 4,42 € sur la générique → 1-2 annonces probables ; pack local possible (requête régionale). Fallback opérateur : google.fr, « cross docking ile de france », desktop + mobile, à tracer en §7 si fait.
- **⚠️ Analyse dégradée** (3 analystes) : les pages du top 5 n'ont pas pu être lues (hôtes hors réseau de la session : xpo, lemoniteur, frenchlog, transportsansquer.fr lui-même) ; format et profondeur déduits des titles/URL Haloscan et de WebSearch. Le verdict ne dépend pas de cette lecture (le signal est GSC, pas SERP).

## 2. Anti-cannibalisation (3 fronts)

| Front | Résultat |
|---|---|
| Haloscan domaine | « crossdocking » pos. 32 = cette page, seule ; « stockage gennevilliers » pos. 24 et « prestataire stockage gennevilliers » pos. 14 = hub `/stockage/` ; « externaliser logistique » pos. 36 = pilier C. Aucune autre page ne porte « cross ». ✅ |
| `tracking.md` | aucun article blog sur le cross-dock ; le guide empotage (28/08) cite « stockage tampon sur place » avec lien vers cette page (maillage entrant existant). ✅ |
| `content-plan.md` | **Frontières à tenir** : (1) la page entrepôt = **seule détentrice de « cross-docking »** (régional en title, générique en FAQ/lexique) ; (2) hub `/stockage/` garde « stockage / entrepôt / prestataire stockage Gennevilliers » → **ne pas mettre « stockage Île-de-France » ni « entrepôt logistique IdF » en title/H2** de la page entrepôt (verdict analyste 3 : SERP immobilières/self-storage, hors intention, et territoire du hub) ; (3) pilier A `/stockage/depotage-empotage-conteneurs/` = conteneurs (dépotage ≠ cross-dock : une phrase de renvoi) ; (4) `/stockage/groupage-degroupage/` ≠ « éclatement » cross-dock → renvoi, pas de doublon ; (5) sujet « Prestataire logistique IdF » (reporté, réexamen 01/2027) : le mot « prestataire logistique » reste en corps, jamais en balise, pour ne pas condamner ce sujet ; (6) « cross docking » générique : **jamais en title/H1** (SERP XPO/Mecalux/Wikipédia sous AIO, hors d'atteinte), vit en FAQ + variantes lexicales du corps (« crossdocking », « cross dock », « passage à quai ») |

## 3. Content gap (déduit des SERP Haloscan générique + WebSearch régionale)

Top 5 générique (26/10) : europe.xpo.com (page service 3PL) · dometrans.com (page service) · lemoniteur.fr (article « règles pour optimiser ») · frenchlog.com (guide définition/avantages) · icdint.fr (glossaire). Régionale : mélange de pages immobilières (Prologis « seule plateforme cross-dock d'IdF », Goodman Gennevilliers, listings), de définitions et de rares pages service locales (type soluroad/Lyon). Ce qui manque, que la page peut porter :
1. **Le flux physique montré** : réception sur quai PL → tri/éclatement sur 300 m² → rechargement sur quai VL → livraison IdF en fourgons 9 / 14 / 20 m³ hayon (PAA « Comment fonctionne le cross-docking ? » restent abstraites partout).
2. **Ce qui n'est PAS du cross-dock** et la bascule vers le stockage tampon / le débord (frontière avec les deux autres formules déjà sur la page).
3. **Un prestataire joignable en IdF** avec ses secteurs (first-party : 92, 94, 78, 95 + Paris) ; les pages du top sont nationales ou immobilières.
4. **Alloti / non alloti** (related Haloscan « cross docking éclatement ») : une réponse courte côté prestataire.
5. **Une FAQ** (aucune page du top n'en a, PAA actifs).

## 4. Information gain — stock first-party (zéro sollicitation, suffisant)

| Élément (brief §7) | Usage dans le refresh |
|---|---|
| Entrepôt **300 m²**, **1 quai PL + 1 quai VL**, chariot + gerbeur, bât. G1 quai 8 **dans** le port de Gennevilliers | le schéma du flux (information gain visuel) + H2 « Pourquoi deux quais » |
| Flotte VL 20 m³ hayon / 14 m³ / 9 m³ avec usages types (⛔ sans nombre de véhicules) | FAQ « quels véhicules repartent du quai VL » |
| Secteurs de tournée confirmés **94, 78, 95, 92** + Paris (brief §7 cluster F) | FAQ « quels secteurs d'Île-de-France sont desservis » |
| Dépotage à quai → livraison fractionnée (pilier A, guide) | une phrase de renvoi « conteneur ≠ cross-dock » |
| ⛔ aucun délai first-party (« jour même » non confirmé en entretien) | **aucune promesse de délai chiffrée** ; formulation « sans mise en stock », « reparte par l'autre quai » ; la page actuelle dit déjà « souvent le jour même » dans la carte Cross-docking : **à conserver tel quel** (texte client en ligne depuis juillet, validé au rebuild) mais ne pas le durcir |
| ⛔ aucun tarif | le devis est le CTA |

## 5. Brief éditorial (refresh)

- **Title (≤ 60 c.)** : « Cross-docking Île-de-France : quai PL → VL à Gennevilliers » (58 c.) — variante sans flèche si le rendu SERP l'exige : « Cross-docking Île-de-France, quai PL et VL à Gennevilliers » (60 c.)
- **Meta (140-155 c.)** : « Cross-docking au port de Gennevilliers : déchargement PL, tri, rechargement en fourgons 9 à 20 m³ sans mise en stock, livraison dans toute l'Île-de-France. » (149 c.)
- **H1** (title de la fiche service, ≠ title tag) : « Cross-docking et stockage au port de Gennevilliers, pour toute l'Île-de-France »
- **Accroche (`lead`)** : réponse directe en ~2 phrases : un PL décharge sur notre quai, la marchandise est triée, elle repart par le quai VL vers l'Île-de-France ; 300 m² pour le tampon et le débord quand il faut.
- **Corps existant conservé** : les trois formules (stockage faible rotation / cross-docking / débord) et la section « Pourquoi le port de Gennevilliers change le calcul » restent ; le cross-docking passe **en première carte**.
- **Ajouts** : (a) **schéma first-party** `public/images/` ou `public/stockage/entrepot-gennevilliers/flux-cross-docking.svg` : quai PL → tri 300 m² → quai VL → IdF (92/94/78/95/Paris), couleurs du design system, aucune donnée inventée, QA visuelle rendue en PNG ; (b) **section FAQ** (5-6 Q/R, `details/summary`, JSON-LD **FAQPage** ajouté au script de la page) ; (c) lien interne nouveau vers `/transport/tournee-reguliere/` (le cross-dock alimente une tournée) et vers `/stockage/groupage-degroupage/` (éclatement).
- **FAQ retenue (6)** : Qu'est-ce que le cross-docking ? · Comment fonctionne le cross-docking sur votre plateforme de Gennevilliers ? · Cross-docking ou stockage tampon : quand choisir ? · Cross-docking, dépotage de conteneur, groupage : quelle différence ? · Quels véhicules repartent du quai VL ? · Quels secteurs d'Île-de-France sont desservis depuis le port de Gennevilliers ?
- **Mots-clés** : principal « cross-docking Île-de-France » (title, H1, meta, FAQ) · secondaires en corps : crossdocking, cross dock, passage à quai, plateforme cross-docking Gennevilliers, quai PL / quai VL, redistribution Île-de-France, cross-docking alloti / éclatement · ⛔ hors balises : « stockage Île-de-France », « entrepôt logistique Île-de-France », « prestataire logistique Île-de-France », « cross docking » seul.
- **Capture** : bandeau devis existant réécrit sur l'intention (« Un poids lourd à décharger et à redistribuer en Île-de-France ? ») + téléphone (barre d'appel du site).
- **Garde-fous** : zéro tarif, zéro nombre de véhicules, pas de 24 h/24, pas de délai chiffré nouveau, pas de tiret cadratin, NAP = `nap.md` (la page ne porte pas de coordonnées : rien à changer), JSON-LD `Service` existant conservé + FAQPage.
- **Sources externes** : aucune nécessaire (page de service) ; si une définition est citée, renvoyer vers une source stable (glossaire métier) — pas de chiffre externe.

## 6. Mesure du refresh
`dateModified` n'existe pas sur une page de service ; tracer la date du refresh dans `tracking.md` (§ refreshes). Lecture : `ctr-gap` à J+30 / J+60 et verdict J90 (≈ fin janvier 2027) sur « crossdocking île de france » × page.

## 7. Scroll-check (session principale)

| Date | Requête | Desktop / mobile | Constat | Impact |
|---|---|---|---|---|
| 2026-10-30 | cross docking ile de france | — | ⚠️ **contrôle empêché** : aucun navigateur dans la session planifiée | aucun sur le verdict (signal GSC) ; relevé opérateur bienvenu |

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-10-30)

### A. « cross docking ile de france »
```
⚠️ analyse dégradée : MCP Haloscan absent (KPI pré-chargés du 30/10) · WebFetch transportsansquer.fr refusé (hôte hors réseau) · WebSearch ≠ SERP Google → top 5 non lisible par outil.
VERDICT : REFRESH /stockage/entrepot-gennevilliers/ — pos. 4 GSC (94 imprs/0 clic) et 12 (59/0) sur 90 j ; title en ligne sans « Île-de-France », sans promesse de flux.
Volume : NA (KEYWORD_UNKNOWN) ; proxys cross docking 100 KVI 7, crossdocking 100 KVI 34, cross docking paris 10 · Intention : commerciale-locale, mêlée d'immobilier (Prologis, Goodman, listings) et de définitions.
Jouabilité : 3 mois (site déjà classé). Scroll : ⚠️ non vérifiable ; AIO sur la générique, CPC 4,42 € → 1-2 pubs probables, pack local possible.
Zéro-clic : ⚠️ non vérifiable ; 0 clic à pos. 4 = SERP qui répond ou clics captés par l'immobilier. La réponse affichée ne donne pas : prestataire joignable, flux PL→VL, gabarits, devis.
Gap : flux pour une PME (PL → tri → fourgons 9/14/20 m³ → IdF) ; ce qui n'est pas du cross-dock ; « qui fait quoi pour moi demain matin ».
Cannibalisation : aucune directe ; hub /stockage/ garde stockage/prestataire Gennevilliers ; pilier dépotage = conteneurs ; « plateforme/entrepôt logistique IdF » → pas de page ; « cross docking » générique jamais en title.
Title (58 c.) : Cross-docking Île-de-France : quai PL → VL à Gennevilliers · Meta (149 c.) : Cross-docking au port de Gennevilliers : déchargement PL, tri, rechargement en fourgons 9 à 20 m³ sans stockage, livraison dans toute l'Île-de-France. (⛔ « jour même » non confirmé first-party)
FAQ : cross-docking vs stockage tampon · véhicules du quai VL · réserver un créneau PL.
```

### B. « cross docking » (générique)
```
⚠️ analyse dégradée : 3 WebFetch ENOTFOUND (xpo, lemoniteur, frenchlog) ; KPI pré-chargés.
VERDICT : NO-GO en cible et en secondaire title/H1 — FAQ + lexique du corps seulement. SERP encyclopédique sous AI Overview, 3PL nationaux et glossaires.
Volume 100 (crossdocking 100, cross dock 171, logistique 60) · KVI 7 (crossdocking 34) · intention info + frange commerciale nationale. Jouabilité : hors d'atteinte (pos. 32 actuelle).
Zéro-clic : fort (définition/vocation/fonctionnement servis par AIO + Wikipédia). Ce que la réponse ne donne pas : qui, où, quels quais, alloti ou non, différence cross-dock / dépotage / stockage côté prestataire IdF.
Top 5 : xpo (service) · dometrans (service) · lemoniteur (article) · frenchlog (guide) · icdint (glossaire).
Gap : aucun schéma quai PL → tri → quai VL ; personne ne tranche cross-dock vs transbordement vs dépotage vs groupage côté PME ; zéro angle IdF/port.
FAQ : Qu'est-ce que le cross-docking ? · Comment fonctionne-t-il sur votre plateforme ? · Alloti ou non alloti ? · Cross-docking, transbordement, dépotage : différence ? · Cross-docking ou stockage ? · Transport entre deux quais (PAA).
```

### C. cluster « plateforme / stockage / entrepôt / prestataire logistique Île-de-France »
```
⚠️ analyse dégradée : 2 WebFetch en échec ; SERP via WebSearch, pas Google.
VERDICT : NO-GO en secondaire title/meta/H2 pour les 4 requêtes ; 1 mention en corps tolérée.
KPI 30/10 : plateforme 40 KVI 18 · stockage 30 KVI 17 CPC 13,74 conc. 0,82 · entrepôt 8 KVI 21 · prestataire 10 CPC 18,50.
Intention : plateforme = institutionnel (Région, HAROPA, Sogaris) · stockage = self-storage/immobilier · entrepôt = immobilier · prestataire = commerciale B2B (seule SERP de pairs : waresito, leroylogistique, bernardi, stockage.fr au port de Gennevilliers, mdclog).
Cannibalisation : stockage IdF/Gennevilliers = hub /stockage/ ; entrepôt logistique IdF recoupe le pilier externalisation ; prestataire logistique IdF = sujet C reporté → corps seulement.
Gap : personne ne décrit le flux cross-dock d'un petit entrepôt urbain ni ce qu'un 300 m² au port fait mieux qu'un 90 000 m² en grande couronne ; aucune page ne cadre les secteurs IdF desservis.
FAQ : secteurs desservis (92/94/78/95 + Paris) · pourquoi le port plutôt que la grande couronne · PL et fourgon le même jour (quai PL + quai VL). ⚠️ pas de FAQ délai (aucun délai first-party).
Variante GO future pour le hub /stockage/ : « stockage palette ile de france » (à scorer à la révision).
```
