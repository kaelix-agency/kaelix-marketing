# Lexique client — ce qu'on écrit à un client, et ce qu'on n'écrit jamais

Décision d'Axel du 29/10/2026, après la relecture de la première revue J90 d'Ansquer : **les documents destinés aux clients (rapport mensuel, bilan 90 jours, audit, deck) parlent la langue du dirigeant, pas celle du référenceur.** Peu de chiffres, aucun mot anglais, aucun jargon, et des actions précises : quelle page, ce qu'on y fait, pour quel résultat, et quand. Les statistiques détaillées restent dans les documents internes (revue hebdo, revue stratégique J90, relevés).

Modèle de référence : `clients/transports-ansquer/reports/2026-10-bilan-j90-client.md` (émis le 29/10/2026, validé par Axel).

## Correspondances

| Interne (jamais dans un document client) | Ce qu'on écrit au client |
|---|---|
| refresh, rework | reprise de la page, page retravaillée, titre réécrit |
| impressions | affichages sur Google |
| CTR, taux de clic | sur 100 personnes qui voient votre site dans Google, combien cliquent — ou simplement « vu mais peu cliqué » |
| position moyenne | place moyenne dans les résultats Google (« en moyenne 6e ») |
| SERP | la page de résultats de Google |
| pack local, local pack, map pack | la carte Google (les entreprises affichées sur la carte) |
| GBP, Google Business Profile | votre fiche Google |
| title, meta description, snippet | le titre et le texte qui s'affichent dans Google |
| maillage interne | liens entre vos propres pages |
| indexé, indexation | pris en compte par Google |
| J90, règle des 90 jours | Google met environ trois mois à juger une nouvelle page : on n'y touche pas avant |
| cannibalisation | deux de vos pages qui se font concurrence sur la même recherche |
| backlinks, netlinking | liens depuis d'autres sites |
| citations NAP | vos coordonnées identiques sur les annuaires |
| AI Overview, zéro-clic | Google affiche lui-même une partie de la réponse, donc moins de clics |
| mot-clé, keyword, requête | ce que les gens tapent, la recherche |
| volume | nombre de recherches par mois |
| first-party | (jamais) — « votre savoir-faire », « vos chiffres » |
| KPI, conversion, lead | contact, appel, demande de devis |
| Search Console, Haloscan, PostHog | seulement en petite légende de source, jamais dans une phrase |
| gate, GO, PR, merge, brief, cluster | (jamais côté client) |

Les **mots du métier du client** restent tels quels (« cross-docking », « empotage », « commissionnaire » pour un transporteur) : ce sont ses mots, pas les nôtres.

## Règles d'écriture d'un document client

1. **En une phrase** en tête : ce qui s'est passé et l'enjeu de la suite.
2. **Les chiffres utiles seulement** : affichages, clics, contacts, places sur Google — par mois, dans un tableau simple ; une légende de source en petit.
3. **Les actions faites** en phrases concrètes (« correction des horaires transmis à Google »), pas en noms de tâches.
4. **Les actions à venir, mois par mois** : pour chacune, la page concernée, ce qu'on constate en mots simples, ce qu'on fait, le résultat visé. Jamais de promesse de place.
5. **« Ce que nous attendons de vous »** : rien, sauf la ligne avis (invariant 14).
6. Relire en se demandant : Martin Ansquer comprendrait-il chaque phrase sans nous appeler ?

Contrôle : le `fact-checker` signale tout terme de la colonne de gauche trouvé dans la partie client d'un document (sous `<!-- CLIENT -->`).
