---
name: client-report
description: Format et règles du rapport mensuel client (mise en valeur du travail de l'agence).
---
# Client Report — contrat

## Pourquoi ce skill existe
Le client ne « voit » pas le SEO : sans rapport qui relie l'effort au résultat, le travail est invisible et le contrat fragile. Le rapport est aussi une publication externe : il engage la crédibilité de l'agence, d'où le gate obligatoire et l'interdiction d'embellir.

## Structure du rapport
1. **L'essentiel en 3 points** (lisible en 20 secondes par un non-technicien).
2. **Ce que nous avons fait** : contenus publiés (titres + liens), refreshes, posts GBP, réponses d'avis, corrections techniques/citations. Source : tracking.md + git.
3. **Ce que ça a produit** : deltas chiffrés — impressions, clics, positions (mots-clés cibles avant/après), et selon client : geo-grid/appels/itinéraires (local) ou conversions (SaaS). Toujours la période vs période précédente.
4. **Santé du trafic** : indicateur de concentration — part du trafic SEO portée par les 3-4 premières pages (fragile au-delà de ~60-70 %), et part du SEO dans le trafic total (dépendance au-delà de ~60 %). *Pourquoi : une source ou une poignée de pages dominantes = un point de défaillance unique ; le signaler AVANT l'accident est le rôle du conseil.*
5. **Le mois prochain** : 3-5 actions planifiées.

## Règles
- **Chiffres réels uniquement.** La mise en valeur vient de la complétude et du cadrage (relier effort → résultat), jamais de l'embellissement. Si un chiffre baisse : le dire, expliquer pourquoi, dire ce qu'on fait.
- **Prudence sur l'attribution** : les moteurs IA renvoient massivement vers la page d'accueil, pas vers l'article qui a construit l'autorité — l'attribution « blog » sous-estime donc structurellement le travail de contenu. L'expliquer au client plutôt que laisser croire que le blog « ne convertit pas ». Attribution par défaut : première visite (« qui vous a fait découvrir »).
- **Contenus < 90 jours** : les présenter comme « en période de test Google » (position non stabilisée), jamais comme des échecs ou des succès.
- Vocabulaire client, pas jargon SEO (dire « votre position moyenne sur "plombier Rouen" est passée de 8 à 3 », pas « le ranking du keyword a uplift »).
- Un rapport = une période figée ; ne pas recalculer a posteriori.
- Le rapport est un brouillon jusqu'à validation de l'opérateur (gate) : ne jamais le présenter comme envoyé.

## Historisation (convention 2026-07-15, demande opérateur)
- Tous les livrables de suivi vivent dans **`clients/<slug>/reports/`** : rapports mensuels client (`YYYY-MM-rapport-client.md`) et revues hebdo (`YYYY-MM-DD-revue-hebdo.md`). Un `README.md` d'index par client (fichier, type, période, statut) — gabarit dans `clients/_template/reports/`.
- **Cycle de statut du rapport client** (bandeau en tête de fichier + colonne d'index) : 🕓 brouillon → ✅ validé (gate opérateur) → 📤 envoyé le JJ/MM. **Après « envoyé », le fichier est figé** — même logique de trace d'audit que les prompts : une correction post-envoi = un nouveau fichier daté, jamais une réécriture.
- La revue hebdo est un document **interne** (pas de cycle d'envoi) : statut « interne », jamais transmise telle quelle au client — c'est le rapport mensuel qui porte la communication client.
- Le rapport cite sa période ET la date de génération ; les chiffres proviennent des outils de référence du repo (Haloscan = positions, GSC = clics/impressions — jamais mélangés).
