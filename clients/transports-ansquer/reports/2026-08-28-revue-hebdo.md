# Revue hebdo — Transports Ansquer — 2026-08-28

| | |
|---|---|
| **Client** | `transports-ansquer` (local B2B, port de Gennevilliers) |
| **Date de la revue** | 2026-08-28 (vendredi) — **première revue hebdo du client** |
| **Période des données** | semaine du 24/08 au 28/08/2026 (positions Haloscan : scrapes du 02/08 au 28/08 ; le reste « OLDER_THAN_2_MONTHS » = ancien site) |
| **Sources utilisées** | Haloscan (positions du domaine — **référence unique positions**) ; repo du site (état publié) ; `tracking.md`, `content-plan.md` |
| **Sources empêchées** | ⚠️ **Search Console via Cuik : contrôle empêché, connexion Cuik différée** (décision opérateur 2026-08-28) → aucune donnée clics/impressions/CTR, aucune donnée inventée · ⚠️ **GBP insights / BrightLocal : exports non fournis** (BrightLocal planifié après la mise en conformité GBP) |
| **Statut** | interne — ✅ **validée par l'opérateur le 2026-08-28** (plan S36 approuvé tel quel ; action ③ corrigée : lien d'avis **pas encore envoyé**). Annexe « pulse client » retirée le même jour sur décision doctrinale (la revue est uniquement interne ; communication client = rapport mensuel ; demandes ponctuelles = opérateur en direct, hors système) |

---

## 1. État des contenus

| Contenu | URL | Publié | Âge | Typologie / persona | Positions Haloscan (28/08) | Verdict |
|---|---|---|---|---|---|---|
| Tournée de livraison régulière (cluster F ⭐, pari émergent) | `/blog/tournee-livraison-reguliere/` | 2026-08-24 | **J+4** | guide / P1 | **1er signal** : `organiser sa tournée livraison` pos. **35** (vol. 10, AI Overview sur la SERP) — scrape 28/08, page vue pour la 1re fois le 28/08 | **< 90 j — observation** (J30 ~23/09, J60 ~23/10, J90 ~22/11) |
| Empotage et dépotage de conteneur (cluster A) | `/blog/empotage-depotage-conteneur/` | 2026-08-28 | **J+0** | guide / P2 | aucune position (normal : publié aujourd'hui) — baseline = 0 | **< 90 j — observation** (J30 ~27/09, J60 ~27/10, J90 ~26/11) |
| Site entier (rebuild, 16 pages + hubs) | `/`, `/transport/*`, `/stockage/*` | ~fin 07/2026 | ~J+30 | pages service | grappe locale : `transport container gennevilliers` pos. 1 (ancien scrape), `transporteur conteneur gennevilliers` pos. 2 (ancien), `prestataire stockage gennevilliers` pos. 3 (`/stockage/`, 02/08), `gennevilliers transport` pos. 6 (ancien), **`transporteur gennevilliers` pos. 8** (04/08 — était 4 pré-rebuild), `transport gennevilliers` pos. 9 (ancien) ; `/entreprise/` apparaît sur `port gennevilliers` pos. 45 (19/08) | **< 90 j — observation** (fenêtre de test du rebuild jusqu'à ~fin 10/2026) |

Lecture : 25 mots-clés connus du domaine, 8 pages. Le recul de `transporteur gennevilliers` (4 → 8) est un **relevé, pas un diagnostic** : scrape unique post-migration, dans la fenêtre de test → aucune action, à suivre aux relevés hebdo (verdict au J90 du site). Les requêtes de marque tierce (Schenker, XPO, OVH) restent du trafic opportuniste, non ciblé.

**Ce que la semaine a produit** : **août tenu 2/2** — les deux sujets du plan sont publiés (24/08 et 28/08), avec double PASS, schémas first-party et gates opérateur sur preview. Sitemap 23 URLs. Blog en index.

## 2. Règle des 90 jours

Tout ce qui est en ligne est en fenêtre de test (site ~J+30, article 1 J+4, article 2 J+0). **Aucune action corrective, aucun refresh.** Seule exception programmée : à la publication de l'article palettes (09/2026), remplacer le lien du renvoi dans le guide empotage/dépotage (correction de maillage prévue au commentaire MDX, pas une refonte).

## 3. Diagnostic (contenus ≥ 90 j)

Aucun contenu éligible. Section vide par construction.

## 4. Re-check bimestriel par typologie

Non dû (première revue ; 2 guides de moins d'une semaine). Premier re-check à programmer ~semaine 43 (fin octobre), en même temps que le J60 des articles.

## 5. Équilibre du trafic

⚠️ **Non évaluable** : sans Search Console, ni la concentration du trafic SEO par page ni la part du SEO dans le trafic total ne peuvent être mesurées. Point à lever à la connexion Cuik.

## 6. Métriques Search Console

> ⚠️ **Contrôle empêché : connexion Cuik en attente** (décision opérateur : différé). Impressions, clics, CTR, positions GSC : aucune donnée. La propriété `transportsansquer.fr` est vérifiée côté Google ; le MCP Cuik n'expose aucun outil de connexion (constat du 2026-08-28) — la connexion se fait dans l'interface app.cuik.io par l'opérateur. Conséquence : indexation des 2 articles **à demander manuellement** dans la Search Console (inspection d'URL), baseline GSC à relever dès la connexion.

## 7. Plan d'action de la semaine (S36 : 31/08 → 04/09)

| # | Action | Command | Priorité | Prérequis / note |
|---|---|---|---|---|
| ① | **Recherche du comparatif P1 ⭐ de septembre** « Transport dédié, messagerie ou coursier ponctuel » (cluster F, pivot « transport dédié » 110) | `/research` | P1 | first-party **complet** (seuil hebdo, logique tarif à l'année ; coût/livraison refusé, non bloquant). Frontière : choix du modèle uniquement. Brief à persister dans `research/` avant présentation |
| ② | **Combler le trou first-party de l'article palettes** (09/2026, P2) : 2-3 cas réels où le plan de chargement n'a pas tenu (gerbage, calage, poids) | **WhatsApp opérateur → Martin** (hors système), réponses → `client-brief.md` §7 | P1 | règle J-7 : sans vécu de quai avant la production, le sujet **glisse** d'un mois |
| ③ | **Collecte d'avis** — statut réel constaté le 28/08 : le lien court « Demander des avis » (étape 8 de la checklist GBP) **n'a pas encore été envoyé** → à récupérer sur la fiche et à transmettre à Martin | manuel (GBP + WhatsApp opérateur) | P1 | 1 seul avis à ce jour ; levier n°1 du plan |
| ④ | **Points ouverts** : checklist GBP manuelle (8 champs), arbitrage adresse 49/51 (`nap.md` §1), Cuik ↔ GSC (différé, étapes manuelles listées le 28/08) | manuel | P2 | aucun ne bloque la production de septembre ; l'adresse bloque les citations NAP (étape 2 de l'architecture) |
| ⑤ | **Indexation manuelle** des 2 articles dans la Search Console (inspection d'URL → demander l'indexation) | manuel (GSC) | P2 | remplace la soumission par outil tant que Cuik n'est pas connecté |

Pas de `/refresh`, pas de `/gbp-post` cette semaine (fiche GBP en cours de mise en conformité ; les posts attendent la checklist).

Prochaine échéance de communication client : **rapport mensuel d'août** (`/report`, PDF prêt à l'envoi), à finaliser début septembre.

## 8. Plan éditorial — écarts prévu / réalisé

- 08/2026 : 2 prévus, **2 publiés** (le glissement envisagé le 24/08 n'a pas été nécessaire). Aucun changement de statut à faire cette semaine.
- 09/2026 : 2 prévus (comparatif P1 ⭐ prêt ; palettes P2 en attente de first-party). Pas de dérive structurelle.
- Cadence 2/mois tenue ; capacité de relecture respectée (2 gates en 5 jours, c'est le haut de la fourchette : ne pas planifier de 3e slot).

---

## Note de validation (2026-08-28)

Revue validée telle quelle par l'opérateur. L'annexe « pulse client » initialement produite a été **retirée** : décision doctrinale du même jour — la revue hebdo est un document strictement interne (pilotage opérateur + repo) ; **le rapport mensuel est le seul artefact à destination du client** ; les demandes ponctuelles (first-party, avis) passent par l'opérateur en direct, hors système (`docs/rationnel-des-choix.md` §1.16).
