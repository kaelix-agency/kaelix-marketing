# Grille de notation de l'audit gratuit

Établie le 21 octobre 2026, après le premier audit réel (Cadres Concept). But : **deux prospects doivent être comparables**. Tant que la grille n'est pas appliquée, les scores sont des jugements à la main et ne se comparent pas entre eux.

## Principe

Quatre piliers, 26 critères. Chaque critère vaut **100 (conforme), 50 (partiel) ou 0 (absent)**, sauf deux critères qui reprennent directement la note de Google sur 100. Le score d'un pilier est la moyenne de ses critères **vérifiés** ; un critère non vérifiable est retiré du calcul et signalé dans l'audit (règle des contrôles empêchés, CLAUDE.md).

Score global = Site 30 % + Google 30 % + Fiche 20 % + Parcours 20 %.

## Pilier 1 — Site & vitesse (30 %)

| # | Critère | 100 | 50 | 0 | Source |
|---|---|---|---|---|---|
| 1 | Note de vitesse mobile | la note Google reprise telle quelle (0-100) | | | PageSpeed Insights, mobile |
| 2 | Affichage de l'image principale | < 2,5 s | < 4 s | ≥ 4 s | PageSpeed, labo |
| 3 | Mesure terrain Google | réussite | | échec | PageSpeed, données des vrais visiteurs |
| 4 | Réponse du serveur | < 0,5 s | < 1,5 s | ≥ 1,5 s | mesure directe, 5 appels, valeur haute retenue |
| 5 | Nombre de fichiers chargés | < 50 | < 100 | ≥ 100 | navigateur, page d'accueil |
| 6 | Site sécurisé (https) | oui | | non | navigateur |
| 7 | Qualité des balises | la note SEO technique de Google (0-100) | | | PageSpeed |

## Pilier 2 — Visibilité Google (30 %)

| # | Critère | 100 | 50 | 0 | Source |
|---|---|---|---|---|---|
| 8 | Recherches dans les 3 premiers | part des 10 recherches testées, en % | | | Haloscan (relevé manuel en secours) |
| 9 | Recherches dans les 50 premiers | part des 10 recherches testées, en % | | | idem |
| 10 | Présence dans l'onglet Shopping | catalogue présent | partiel | absent | recherche Google |
| 11 | Entrées de catalogue | autant ou plus que le meilleur concurrent | entre la moitié et autant | moins de la moitié | menu du site |
| 12 | Contenus publiés (guides, articles) | publication régulière | quelques pages | aucune | site |

## Pilier 3 — Fiche Google (20 %)

| # | Critère | 100 | 50 | 0 |
|---|---|---|---|---|
| 13 | Nom exactement identique à l'enseigne | oui | | non |
| 14 | Catégorie principale adaptée | oui | renseignée mais inadaptée | absente |
| 15 | Horaires présents | oui | | non |
| 16 | Téléphone identique à celui du site | oui | | non |
| 17 | Photos | 20 et plus | 5 à 19 | moins de 5 |
| 18 | Avis | plus que les deux concurrents | entre les deux | moins que les deux |
| 19 | Produits ou publications sur la fiche | réguliers | quelques-uns | aucun |

Source : API Google Places, ou lecture de la fiche depuis une recherche Google.

## Pilier 4 — Parcours d'achat (20 %)

| # | Critère | 100 | 50 | 0 |
|---|---|---|---|---|
| 20 | Tri du catalogue (pièce, format, prix) | au moins deux entrées | une | aucune |
| 21 | Avis affichés sur les fiches produit | oui | sur une page à part | nulle part |
| 22 | Moyens de paiement annoncés avant le panier | oui | mention vague | aucune |
| 23 | Conditions de retour annoncées | oui, visibles | dans les CGV seulement | nulle part |
| 24 | Paiement en plusieurs fois | disponible | | non |
| 25 | Relance des paniers abandonnés | constatée | | non constatée |
| 26 | Cohérence des informations entre les pages | téléphone et délais identiques partout | une incohérence | deux ou plus |

Source : parcours fait à la main sur téléphone, plus lecture de la FAQ et des CGV. **Aucune API ne donne ces critères** : c'est de la lecture.

## Variante locale (artisans et commerces, `type: local`) — décision d'Axel du 24 octobre 2026

L'essai à blanc sur un plombier (Dutel Plomberie Services, Castelnau-le-Lez, 24/10/2026) a montré que la grille note **une boutique** : un artisan sortait à 20/100 sur le pilier 4 faute de « conditions de retour » et de « paiement en plusieurs fois », et le pack Maps, là où il se joue, n'était pas compté. Pour un prospect `local`, les critères 10, 11 et 20 à 25 changent de contenu ; **même sévérité, mêmes seuils 100 / 50 / 0, mêmes poids**. Un local se compare à un local, une boutique à une boutique — jamais l'un à l'autre. `scripts/audit-score.mjs` bascule sur `prospect.type`.

| # | Critère (local) | 100 | 50 | 0 | Source |
|---|---|---|---|---|---|
| 10 | Présence de la fiche dans le pack Maps | part des 10 recherches testées, en % | | | relevé direct (ordinateur **et** téléphone, navigation privée) → `lecture-manuelle.json` |
| 11 | Pages service / zone dédiées | une page par service **et** par ville visée | l'un des deux | ni l'un ni l'autre | menu du site, jugé à la main |
| 20 | Téléphone cliquable au premier écran | lien `tel:` en haut de l'accueil | présent mais bas dans la page | aucun | lecture du site (à confirmer sur téléphone) |
| 21 | Avis affichés sur le site | visibles sur l'accueil | | nulle part | lecture du site |
| 22 | Demande de devis ou de contact dès l'accueil | formulaire **et** lien devis/contact | l'un des deux | aucun | lecture du site |
| 23 | Zone d'intervention annoncée | oui (« rayon de 30 km », villes…) | | non | lecture du site |
| 24 | Délai d'intervention ou disponibilité annoncés | oui (« sous 24 h », « 7 j/7 ») | | non | lecture du site |
| 25 | Preuves de confiance (assurance, garanties, certifications) | deux mentions ou plus | une | aucune | lecture du site |

Les critères 8, 9, 12 à 19 et 26 sont inchangés. Calibrage de l'essai : Dutel **58/100** (25/26 vérifiés) — site 55, Google 29, fiche 92, contact 71 : une fiche excellente, un site lent et absent de la page 1, un parcours de contact correct.

## Calibrage — ce que la grille donne sur Cadres Concept

| Pilier | Score de la grille | Score envoyé au client le 21/10 |
|---|---|---|
| Site & vitesse | 33 | 35 |
| Visibilité Google | 26 | 45 |
| Fiche Google | 50 | 65 |
| Parcours d'achat | 19 | 70 |
| **Global** | **32** | **51** |

**La grille est nettement plus sévère que le jugement à la main**, surtout sur le parcours d'achat. Avant de l'appliquer au prochain prospect, trancher : soit on assume des scores autour de 30 pour une boutique qui marche (alarmant, mais comparable), soit on relève les seuils. Dans tous les cas, ne pas mélanger : un audit noté à la main et un audit noté à la grille ne se comparent pas.

**Décision d'Axel du 22 octobre 2026 : la grille sévère est gardée telle quelle.** Les seuils ne bougent pas ; une boutique qui marche peut sortir autour de 30/100 et c'est assumé : la note sert à comparer deux prospects et à prioriser, pas à flatter. Conséquences :
- la brique de notation (`scripts/audit-score.mjs`) applique la grille sans correction ;
- l'audit Cadres Concept du 21/10 (51, noté à la main) reste un audit « pré-grille » : ne pas le comparer aux suivants ;
- dans le teaser et en présentation, l'échelle s'explique en une phrase (« une note de 30 n'est pas un site cassé : c'est un site qui laisse la moitié de ses ventes sur la table ») — à intégrer au gabarit du teaser lors de la brique 3.
