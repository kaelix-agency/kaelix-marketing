---
name: geo-schema
description: Génération des données structurées JSON-LD et des éléments GEO (citabilité IA) pour tout contenu publié.
---
# GEO & Schema — contrat

## Types JSON-LD par contenu
- Article/blog : `Article` ou `BlogPosting` (headline, author→Person, publisher→Organization, datePublished, dateModified, image) + `FAQPage` si FAQ présente + `BreadcrumbList`.
- Page locale : ajouter `LocalBusiness` (ou sous-type pertinent, ex. Plumber, Electrician) + `Service` + zone (`areaServed`). **Toutes les valeurs NAP proviennent exclusivement de `nap.md`.**
- Tutoriel : `HowTo`.
- E-commerce : `Product`, `Offer`, `AggregateRating` si avis réels.

## Règles
- JSON-LD uniquement (pas de Microdata), un bloc par type, valeurs cohérentes avec le contenu visible (jamais de schema mentant sur la page).
- `dateModified` mis à jour à chaque refresh.
- FAQPage : reprendre mot pour mot les Q/R visibles dans la page.
- Vérifier mentalement la validité (structure, champs requis) ; recommander le test Rich Results après publication.

## Citabilité IA (GEO)
- Réponse directe dans les 100 premiers mots.
- Passages auto-suffisants, densité d'entités nommées élevée.
- Q/R FAQPage = format d'extraction privilégié des moteurs IA.
- La fraîcheur (dateModified) et l'identité (Organization/Person) augmentent la probabilité de citation.
