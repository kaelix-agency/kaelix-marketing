---
name: local-seo
description: Règles du SEO local — NAP, pages service×ville, GBP, avis, citations FR. À utiliser pour tout client de type local.
---
# Local SEO — contrat

## NAP source de vérité
- `clients/<slug>/nap.md` est l'unique référence des coordonnées. Tout écart (dans un post, une page, un schema, une citation) est une erreur à corriger, pas une variante acceptable — sauf si listé dans les variantes acceptées.
- Ordre de mise à jour en cas de changement : fiche GBP d'abord, puis Pages Jaunes, puis le reste (118000, Mappy, Yelp France, chambre des métiers, annuaires sectoriels comme Houzz/Travaux.com).

## Pages service×ville
- Une page = un service × une zone réelle d'intervention (issues du brief). Pas de pages générées en série sur des villes non servies.
- Chaque page : contenu réellement local (références de chantiers/quartiers/spécificités locales du first-party), pas un gabarit où seule la ville change — c'est le critère anti-contenu-de-masse.
- Schema `LocalBusiness` + `Service`, NAP exact, zone `areaServed`.

## Fiche GBP
- Fraîcheur : publier régulièrement (posts variés : actu, offre, chantier, conseil). Photos réelles recommandées.
- Les posts n'inventent jamais d'offre ou de prix : tout vient du brief ou de l'opérateur.

## Avis
- Réponse à chaque avis, vite. Brouillon par Claude, **publication par l'opérateur uniquement** (gate renforcé).
- Négatif : empathie, hors-débat public, proposition de contact direct, aucune admission engageante.
- La vélocité d'avis récents pèse plus que le total historique : suggérer des relances de sollicitation quand elle baisse.

## Citations
- Jamais de soumission de masse automatisée. Chaque annuaire = vérification manuelle contre le NAP.
- Doublons de fiches = à fusionner en priorité (signal de méfiance fort).
