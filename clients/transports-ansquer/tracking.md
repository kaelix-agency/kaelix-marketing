# Tracking — Transports Ansquer

| | |
|---|---|
| **Client** | `transports-ansquer` |
| **Ouvert le** | 2026-08-02 |
| **Dernier relevé global** | 2026-08-28 — 1re revue hebdo (Haloscan seul ; GSC/Cuik différé) |

---

## 1. Journal des contenus

| Date publi. | Type | Mot-clé | URL | Typologie | Persona | Statut | J30 | J60 | J90 | Dernier relevé | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-24 | création | tournée de livraison régulière (pari émergent, cluster F ⭐) | `/blog/tournee-livraison-reguliere/` | guide | P1 | ✅ publié (PR #3 mergée, gate opérateur) | ~2026-09-23 | ~2026-10-23 | ~2026-11-22 | | 1er article du site ; double PASS + re-passe visuels ; 2 schémas SVG first-party + cover stock ; bascule blog noindex→index à ce merge ; GSC : soumission dès la connexion |
| 2026-08-28 | création | empotage conteneur (210) + dépotage conteneur (110/70), cluster A — guide national | `/blog/empotage-depotage-conteneur/` | guide | P2 | ✅ publié (PR #5 mergée `128399d`, gate opérateur sur preview) | ~2026-09-27 | ~2026-10-27 | ~2026-11-26 | | 2e article ; double PASS + re-contrôles ; 2 schémas SVG first-party + cover stock ; sitemap 23 URLs ✅ ; ErrorTip ×2 génériques conservés (décision gate : utilité lecteur, à renforcer en first-party au refresh post-J90 si vécu de quai livré) ; renvoi palettes (commentaire MDX) à câbler à la sortie de l'article 09/2026 ; ⚠️ indexation GSC à demander manuellement (propriété non connectée à Cuik) |
| 2026-09-02 | création | transport dédié (70 ; traîne comparative vierge), cluster F ⭐ | `/blog/transport-dedie-messagerie-ou-coursier/` | evergreen | P1 | ✅ publié (PR #6 mergée `16c8e45`, gate opérateur — 3 ⚠️ assumés) | ~2026-10-02 | ~2026-11-01 | ~2026-12-01 | | 3e article ; scroll-check chrome ✅ ×2 (1er usage du protocole §1.21) ; double PASS ; tableau 3 modèles + arbre de décision (seuil hebdo first-party) ; pas de StatGrid (anti-duplication) ; lien réservé de l'article tournée câblé (dateModified 02/09) ; renvoi € (sujet 10) en commentaire MDX ; ⚠️ indexation GSC manuelle |

### Contenus en fenêtre de test (< 90 jours) <!-- ⛔ ne rien toucher -->

> ⚠️ Cas particulier d'onboarding : le **site entier** (rebuild Next.js, 16 pages indexables) a été mis en ligne fin juillet 2026 en remplacement du WordPress. Date exacte de mise en ligne à confirmer pour caler J90 — en attendant, l'ensemble des pages est traité comme en fenêtre de test.

| Date publi. | URL | J90 prévu le | Observation en cours |
|---|---|---|---|
| ~fin 07/2026 (à confirmer) | tout le site (16 pages — `/`, hubs `/transport/` et `/stockage/`, 14 pages de service) | ~fin 10/2026 | Google re-teste tout après migration ; volatilité normale ; aucune action corrective avant J90 hors erreur factuelle/technique |
| 2026-08-24 | `/blog/tournee-livraison-reguliere/` (1er article) | 2026-11-22 | ⛔ aucune retouche avant J90 (J30/J60 = observation) ; exceptions habituelles erreur factuelle/technique |
| 2026-08-28 | `/blog/empotage-depotage-conteneur/` (2e article) | 2026-11-26 | ⛔ aucune retouche avant J90 ; exception prévue : remplacement du lien du renvoi palettes (commentaire MDX) à la publication de l'article palettes (correction de maillage, pas de refonte) |
| 2026-09-02 | `/blog/transport-dedie-messagerie-ou-coursier/` (3e article) | 2026-12-01 | ⛔ aucune retouche avant J90 ; exception prévue : câblage du renvoi € à la publication du sujet 10/2026. NB : l'article tournée a reçu sa retouche de maillage prévue le 02/09 (lien comparatif) — son J90 reste ~22/11 |

## 2. Historique des revues hebdo

| Semaine | Fichier | Diagnostic en une ligne | Décisions prises |
|---|---|---|---|
| S35 (24-28/08/2026) | [`reports/2026-08-28-revue-hebdo.md`](./reports/2026-08-28-revue-hebdo.md) — ✅ validée 28/08 | Août tenu 2/2 ; tout en fenêtre 90 j (site ~J+30, art. 1 J+4 avec 1er signal Haloscan pos. 35 sur « organiser sa tournée livraison », art. 2 J+0) ; ⚠️ GSC/Cuik différé, GBP/BrightLocal non fournis → métriques non mesurables | S36 approuvé : ① `/research` comparatif P1 ⭐ · ② question gerbage/calage à Martin par **WhatsApp opérateur** (règle J-7 palettes) · ③ lien d'avis **pas encore envoyé** → récupérer + transmettre · ④ points ouverts GBP/adresse/Cuik · ⑤ indexation manuelle GSC des 2 articles. Doctrine : revue = interne seulement, communication client = rapport mensuel (PDF) |
| S36 (29/08-02/09/2026) | [`reports/2026-09-02-revue-hebdo.md`](./reports/2026-09-02-revue-hebdo.md) — 🕓 brouillon (produite en manuel : Planificateur non posé, lundi 31/08 manqué) | Aucune production 29/08-01/09 ; fenêtre 90 j partout ; doctrine **zéro sollicitation** (invariant 14) exécutée ; **adresse arbitrée = 51** (relevé fiche GBP) ; lien d'avis relevé → ligne permanente du rapport ; rapport d'août prêt pour validation | S36 : ① GO reco palettes (J-7 ~07/09) · ② `/research` comparatif sur GO · ③ valider + émettre rapport d'août · ④ checklist GBP · ⑤ Planificateur |

## 3. Paris émergents

| Mot-clé | Repéré le | Hypothèse (pourquoi ce pari) | Contenu publié | Volume à date | Verdict |
|---|---|---|---|---|---|
| tournée régulière transport (+ champ « transport régulier PME ») | 2026-08-02 | priorité business client (tournées VL IdF) ; terme de marché établi chez les concurrents (TopChrono, Cap Express) mais volumes Haloscan NA ; format guide vacant dans la SERP | ✅ `/blog/tournee-livraison-reguliere/` (2026-08-24) | ~0 (NA) ; 1er signal Haloscan 28/08 : pos. 35 sur « organiser sa tournée livraison » (10) | en cours (verdict J90 ~22/11) |
| combien coûte une tournée régulière externalisée | 2026-08-02 | requête de phase de décision ultra-qualifiée ; le voisin « tarif livraison au km » (142/mois) prouve la demande prix ; personne ne chiffre une tournée régulière (tout est au km one-shot, tout PL) | — (prévu 10/2026, cluster F) | ~0 (NA) | en cours |

## 4. Re-checks bimestriels

| Date du re-check | Typologie passée en revue | Contenus revus | Actions déclenchées |
|---|---|---|---|
| | | | |
