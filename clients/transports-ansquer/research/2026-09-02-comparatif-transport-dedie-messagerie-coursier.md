# Brief de production — Comparatif transport dédié / messagerie / coursier ponctuel

| | |
|---|---|
| **Client** | `transports-ansquer` |
| **Sujet du plan** | 09/2026 n°1 — cluster F ⭐ (tournées régulières) — persona **P1** (responsable logistique PME-ETI IdF) |
| **Typologie** | evergreen (comparatif décisionnel) |
| **Recherche faite le** | 2026-09-02 (`/research`, 2 `serp-analyst` en parallèle + Haloscan domaine) |
| **Statut** | 🕓 **en attente de GO opérateur** — 🛑 aucun `/write` sans GO |

---

## 1. Verdict

**GO ×2 — la place du comparatif à 3 modèles est vide.**

- **Pivot « transport dédié »** : **70/mois** (Haloscan, scrape 11/07 — en baisse vs 110 du relevé du 02/08 ; CPC 5,96 €, compét. 0,5). Intention **mixte info-commerciale B2B** : le n°1 est un **blog comparatif** (Chronofresh, dédié vs mutualisé) devant des pages prestataires (600-900 mots). ⚠️ Le terme n'est **pas capté par l'urgence** : l'exclusivité du véhicule domine, l'urgence n'est qu'un sous-cas.
- **Traîne comparative** : **réellement vierge** (toutes variantes non scorées Haloscan — KEYWORD_UNKNOWN). La SERP observée est occupée par des binaires « affrètement vs messagerie » (Sigma, Solupal, Granger… 1 500-2 000 mots), **sans tableau, sans chiffre, sans seuil**.
- **Signal clé** : groupe-blondel.com tient l'angle « dédié pour tournées récurrentes »… en **position 23**. L'angle existe, personne ne le tient dans le top 10.
- **Scroll : ⚠️ non vérifiable par outil** (×2 instances) ; indices : CPC 5,96 € → pubs probables sur le pivot ; PAA présents ; pas de pack/shopping attendu. Conséquence : viser le **featured snippet / AI Overview** (définitions courtes + tableau).

## 2. Anti-cannibalisation (3 fronts)

| Front | Résultat |
|---|---|
| Haloscan domaine | **zéro position** du site sur dédié/messagerie/coursier → aucun conflit |
| `tracking.md` | article 1 (`/blog/tournee-livraison-reguliere/`) = le **comment** — frontière tenue par construction (ce comparatif = le **choix**) |
| `content-plan.md` | frontières du cluster F déjà tranchées : les **€** → sujet 10/2026 (renvoi en commentaire MDX) ; transactionnel → `/transport/tournee-reguliere/` ; hub `/transport/` (12/2026) sans « transport dédié » en title/H1 ; guide affrètement (reporté) limitera sa section comparative à un paragraphe-renvoi vers CET article |

⚠️ Confirmation des analystes : la traîne comparative est une **secondaire du même article**, jamais un contenu séparé.

## 3. Content gap

Le top 5 (pivot et traîne confondus) : comparatifs **binaires** (dédié vs mutualisé ; affrètement vs messagerie), définitionnels, sans données. Ce qui manque — notre article :
1. **Les 3 modèles côte à côte** (dédié / messagerie / coursier ponctuel) avec critères concrets.
2. **Un seuil de bascule** en fréquence — personne n'en donne ; le first-party Ansquer (hebdo = régulier, mensuel = ponctuel, logique tarif négocié à l'année) est un différenciateur direct.
3. **L'angle livraisons récurrentes PME** (tout le monde traite le dédié en one-shot express).
4. **Un tableau récapitulatif** (aucun dans les SERPs) → opportunité snippet/AIO.

## 4. Information gain — stock first-party (zéro sollicitation : suffisant, rien à collecter)

| Élément (brief §7) | Usage |
|---|---|
| **Seuil de bascule : l'hebdomadaire** (une livraison/semaine = régulier ; 1×/mois = ponctuel) + logique « engagement à l'année = conditions négociées » (⛔ sans chiffre) | LA donnée de l'article : arbre de décision + H2 seuil — c'était sa destination prévue au plan |
| Réalité opérationnelle du dédié récurrent : tournées quotidiennes, 6-7 points, secteurs attitrés 94/78/95/92, contrat-cadre souple | cas d'usage « à quoi ressemble le dédié récurrent » — **réemploi léger, angle choix** (le détail reste dans l'article 1, lien) |
| Gabarits 9/14/20 m³ hayon et usages types | critère de choix « volume/accès » du tableau |
| ⛔ coût/livraison chiffré : refusé définitivement | le tableau reste en **coût relatif** (€ / €€ / €€€), les € du modèle → sujet 10/2026 |

## 5. Brief éditorial

- **Title (~52 c.)** : « Transport dédié, messagerie ou coursier : que choisir ? »
- **Meta (~150 c.)** : « Dédié, messagerie ou coursier ponctuel pour vos livraisons d'entreprise : critères, tableau comparatif et seuil de fréquence pour choisir le bon modèle. »
- **Slug** : `/blog/transport-dedie-messagerie-ou-coursier/`
- **Longueur** : **1 600-2 000 mots** (aligné sur les guides de la SERP, densité supérieure par le tableau et l'arbre)
- **Angle** : le comparatif décisionnel côté **chargeur récurrent** : 3 modèles, critères concrets, et le seul seuil de bascule chiffrable publiquement absent des SERPs — la fréquence.

### Plan H2/H3
1. **Trois modèles, trois logiques** — 3 définitions en 2 phrases chacune (cible snippet/AIO) : dédié (véhicule exclusif, circuit à vous), messagerie (mutualisé, rupture de charge), coursier ponctuel (one-shot).
2. **Le tableau comparatif** (H3 titré) : délai maîtrisé, rupture de charge, volume adapté (colis / palette / m³), engagement, coût relatif (€/€€/€€€ — jamais un tarif), traçabilité, cas d'usage type. `Callout retenir`.
3. **Le critère qui tranche : la fréquence** — seuil hebdo (first-party sourcé « constat d'exploitation »), arbre de décision. **Schéma first-party n°1 : arbre fréquence → modèle** (mensuel → ponctuel/coursier ; hebdo+ → dédié régulier ; volumes partiels irréguliers → messagerie). `ErrorTip` : payer du ponctuel répété chaque semaine.
4. **Ce que chaque modèle fait de vos contraintes** — micro-scènes stock : palette sans quai (hayon), colis urgent du jour (course dédiée one-shot, lien `/transport/course-urgente/`), flux quotidien multi-points (tournée, lien article 1). `ErrorTip` : confier un flux fragile/horaire serré à la messagerie mutualisée (rupture de charge) — générique sourcé, à flaguer.
5. **Et l'affrètement ?** — 1 paragraphe : au-delà du VL / lots complets, renvoi `/transport/affretement-europe/` (le futur guide affrètement renverra ici — symétrie tracée au plan).
6. **Passer au dédié régulier : à quoi ça ressemble** — réemploi léger (quotidien, 6-7 points, contrat souple) + renvoi « comment » vers l'article 1. {/* RENVOI € : lien vers le sujet 10/2026 à sa publication — d'ici là aucun lien, le coût reste en relatif */}
7. **FAQ** (4-5) : différence messagerie/fret · qu'est-ce que la messagerie · à partir de quelle fréquence passer en dédié · le dédié est-il réservé aux gros volumes · messagerie ou coursier pour un colis isolé.
8. **CTA devis** vers `/transport/tournee-reguliere/`.

### Mots-clés
- Principal : transport dédié (70) · Secondaires : transport dédié ou messagerie, transport dédié définition, transport dédié ou mutualisé, différence affrètement messagerie, messagerie définition transport, quand externaliser ses livraisons
- ⛔ non visés : « course urgente »/« coursier urgent » (page service), « tournée régulière » en title (article 1 + page service), tout mot-clé € (sujet 10)

### Composants v2 & visuels
- Tableau comparatif Markdown titré (le cœur) ; `Callout retenir` ×3-4 ; `ErrorTip` ×2 (1 first-party seuil, 1 générique flagué) ; **pas de StatGrid** (éviter le doublon avec l'article 1 ; pas de stats nouvelles au stock) ; pas d'ExpertQuote/Testimonial (brief).
- Visuels (≥1/~800 mots → 2) : **arbre de décision fréquence → modèle** (first-party, couleurs design system) + cover stock Unsplash. Schéma conceptuel « rupture de charge » en option si le rythme l'exige (sans donnée inventée).

### Capture & maillage
- CTA devis ×2 → `/transport/tournee-reguliere/` (aligné objectif cluster F : pousser la page service).
- Sortants (5 max) : `/transport/tournee-reguliere/` · `/blog/tournee-livraison-reguliere/` · `/transport/course-urgente/` · `/transport/hayon-20m3-paris/` · `/transport/affretement-europe/`. Entrants à prévoir : sujet 10/2026, guide affrètement (reporté), refresh hub 12/2026.

### Garde-fous
Zéro tarif (coût relatif uniquement) ; zéro nombre de véhicules ; pas de 24/7 ; anonymisation ; pas de cadratin ; sources externes sobres (1-2 max : définition réglementaire de la messagerie/groupage si utile — au fact-checker de valider).

## 6. Décisions attendues au GO `/write`
1. GO/NO-GO sur l'angle et le plan.
2. Le schéma 2 optionnel (rupture de charge) : produire ou s'en tenir à l'arbre + cover.

---

## Annexe — mini-briefs `serp-analyst` bruts (2026-09-02)

### A. « transport dédié »
```
VERDICT : GO — SERP mixte dont le n°1 est un blog comparatif ; personne ne compare dédié/messagerie/coursier avec des seuils.
Volume : 70/mois (scrape 11/07, en baisse vs 110 du 02/08) · CPC 5,96 € · Compét. 0,5 · Intention mixte info-commerciale B2B (pas capté par l'urgence).
Scroll : ⚠️ non vérifiable par outil.
Top 5 : chronofresh.fr (comparatif dédié vs mutualisé) ; transportexpress.fr (définition) ; transports-tdf.fr, transports-astrin.com, wes.mc (pages prestataires 600-900 mots).
Signal : groupe-blondel.com pos. 23 « transport dédié : la solution pour vos tournées récurrentes » — angle récurrent absent du top 10.
Gap : 3 modèles jamais comparés ; aucun seuil de bascule ; pas de grille de décision chargeur.
Cannibalisation : aucune ; la traîne comparative = secondaire du même article.
FAQ : qu'est-ce que le transport dédié · dédié ou messagerie : différence coût/délai · à partir de quelle fréquence.
```

### B. traîne comparative « transport dédié ou messagerie »
```
VERDICT : GO — traîne réellement vierge (toutes variantes KEYWORD_UNKNOWN Haloscan).
Format dominant : guides blog transporteurs 1 500-2 000 mots, binaires affrètement vs messagerie, AUCUN tableau, aucune donnée.
Top 5 observé : sigma.fr, solupal.fr, transportexpress.fr, prosperitygroup.fr, transportsgranger.com.
Gap : 3 modèles ; seuils en fréquence (first-party hebdo = différenciateur direct) ; angle récurrent PME ; zéro tableau → snippet/AIO à prendre.
Scroll : ⚠️ non vérifiable par outil ; PAA/related présents, pas de pack attendu.
Cannibalisation : aucune (sujet planifié lui-même ; frontières du plan).
FAQ : différence messagerie/fret · messagerie définition · à partir de quelle fréquence.
```

### C. Haloscan domaine (session principale)
`transportsansquer.fr` : aucune position sur dédié/messagerie/coursier (NO_RESULT) → aucun conflit.
