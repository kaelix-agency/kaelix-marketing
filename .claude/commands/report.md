---
description: Rapport mensuel client — mise en valeur du travail + résultats (gate avant envoi)
argument-hint: <slug-client> <période ex: 2026-07>
---
Rapport mensuel pour `$ARGUMENTS`. Utilise la skill `client-report` (structure, règles d'honnêteté, prudence d'attribution).

1. **Travail réalisé** (depuis `tracking.md` + historique git du repo du site) : contenus publiés, refreshes, posts GBP, réponses d'avis, corrections techniques/citations.
2. **Résultats** :
   - Cuik MCP → deltas Search Console sur la période (impressions, clics, positions moyennes, pages en progression).
   - Haloscan MCP → évolution des positions des mots-clés cibles.
   - Si local → me demander le geo-grid/avis BrightLocal + insights GBP (appels, itinéraires, clics).
   - Si PostHog → conversions attribuées au contenu (rappel : attribution première visite ; les IA renvoient vers la homepage, le blog est structurellement sous-attribué — l'expliquer).
3. **Santé du trafic** : concentration (part des 3-4 premières pages dans le trafic SEO ; part du SEO dans le trafic total) + recommandation de diversification si seuils dépassés.
4. **Contenus < 90 jours** : section « en période de test » — ni succès ni échec, position non stabilisée.
5. **Narratif** : rédige le rapport dans la marque de l'agence, structure de la skill : essentiel en 3 points → ce qu'on a fait → ce que ça a produit → santé du trafic → le mois prochain. Chiffres réels, cadrage valorisant, zéro invention. Style lisible par un non-technicien.
6. **Historisation** : sauvegarde dans `clients/<slug>/reports/<période>-rapport-client.md` (ex. `2026-07-rapport-client.md`) avec un bandeau **Statut : 🕓 brouillon** en tête, et ajoute la ligne dans l'index `clients/<slug>/reports/README.md` (à la première fois : créer le dossier en copiant `clients/_template/reports/README.md`).
7. **Gate** : **je relis, j'ajuste, j'envoie moi-même.** Les ajustements pré-envoi se font dans le fichier (statut → ✅ validé). Après envoi, je mets le statut à **📤 envoyé le JJ/MM** : le fichier est alors **figé** (une période = un rapport figé, jamais recalculé) — toute correction post-envoi = un nouveau fichier daté (`<période>-correctif-JJMM.md`), jamais une réécriture.
