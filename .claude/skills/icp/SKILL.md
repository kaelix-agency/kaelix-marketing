---
name: icp
description: Définir et maintenir l'ICP (Ideal Customer Profile) d'un client — le profil d'ENTREPRISE cible (secteur, taille, CA, organisation commerciale, stack, signaux de maturité) qui pilote tout le ciblage. À utiliser dans /onboard-client, avant tout ciblage SEO (quels mots-clés valent la peine), avant toute campagne ads, avant toute liste de comptes outbound, et dès que l'opérateur parle d'ICP, de cible, de segment, de « qui vise-t-on » ou demande si un mot-clé/canal/compte « vaut le coup ». Ne pas confondre avec `personas` (les personnes DANS ces entreprises).
---
# ICP — contrat de définition du profil d'entreprise cible

## Pourquoi ce skill existe
L'ICP est le filtre de rentabilité de tout l'entonnoir. Sans ICP explicite, le ciblage se fait à l'intuition : on vise des mots-clés à gros volume cherchés par des non-acheteurs, on dépense des ads sur des segments non solvables, on prospecte des comptes qui ne signeront jamais. L'ICP décrit **l'entreprise** idéale (le skill `personas` décrit les **personnes** dedans) : c'est lui qui décide quels mots-clés valent la peine, quels comptes entrent dans une liste outbound, quelles pages comparatives créer. Un ICP flou coûte silencieusement — chaque euro de contenu, d'ads ou d'outbound dépensé hors ICP est perdu sans qu'aucun rapport ne le montre.

## Méthode
1. **Partir des preuves, pas de l'ambition.** Dans l'ordre de fiabilité : les meilleurs clients existants (cycle court, panier élevé, rétention, faible support) → les données bêta/pipeline → les documents stratégiques du client (hypothèses fondateurs) → les clients des concurrents directs (avis publics, cas clients). Pré-PMF, tout est hypothèse : le dire dans le fichier.
2. **Critères firmographiques observables** : secteur (codes NAF si utile), taille (effectif), chiffre d'affaires, géographie, organisation commerciale (qui prospecte, combien de commerciaux), stack/outillage actuel.
3. **Signaux de maturité et d'intention** : ce qui montre que l'entreprise est prête à acheter maintenant (elle prospecte déjà, recrute des commerciaux, utilise un outil concurrent, vient de lever, publie tel événement…). Règle d'opérationnalité : **un critère qu'on ne peut pas observer ou filtrer dans une source disponible n'est pas un critère** — le reformuler en proxy observable (ex. « culture data » → « utilise déjà un CRM », visible via offres d'emploi ou stack).
4. **Tiering** : ICP cœur (le client qu'on veut dupliquer) / ICP élargi (acceptable, moins prioritaire) / **anti-ICP** (disqualifiants explicites : les comptes qui coûtent plus qu'ils ne rapportent, ou qu'un concurrent sert mieux). L'anti-ICP est aussi important que l'ICP : c'est lui qui évite les mots-clés pièges et les deals toxiques.
5. **Statut et validation** : chaque critère porte sa source et son statut (hypothèse / validé). Re-valider aux jalons : fin de bêta, 10 clients, 100 clients — les meilleurs clients réels corrigent toujours l'ICP théorique.

## Ce que l'ICP pilote (règles d'application)
- **SEO** : un mot-clé ne vaut la peine que si ceux qui le cherchent appartiennent à l'ICP. Croiser chaque cluster avec le tier qu'il touche ; écarter explicitement les mots-clés à volume dont l'intention est hors ICP (étudiants, particuliers, grands comptes hors cible…).
- **Ads** : ciblages ET exclusions dérivent des critères et de l'anti-ICP.
- **Outbound** : les signaux observables deviennent les filtres de constitution de listes et le scoring des comptes.
- **Contenu comparatif** : on ne crée que les pages « vs / alternative » des outils que l'ICP considère réellement.

## Livrable
`clients/<slug>/icp.md`, structure imposée :
1. **En-tête** : statut (hypothèse/validé), date, sources.
2. **L'ICP en une phrase** par tier (formulation opérationnelle, ex. : « PME B2B françaises, 20-200 salariés, équipe commerciale de 3+ personnes, qui prospectent déjà mais sans exploiter les signaux d'événements »).
3. **Tableau des critères** : critère / valeur cible / signal observable (comment on le détecte) / source / statut.
4. **Signaux de maturité/intention** (pour scoring outbound et déclencheurs).
5. **Anti-ICP** (disqualifiants).
6. **Application par canal** (SEO, ads, outbound, comparatifs — décisions concrètes).
7. **Journal de validation** (date, jalon, ce qui a changé).

Le `client-brief.md` pointe vers ce fichier (source de vérité unique — ne pas dupliquer les critères dans le brief). **Gate humain** : l'ICP est validé par l'opérateur avant de piloter une dépense (ads, outbound) ; en hypothèse, il pilote le gratuit (SEO, contenu) avec mention du statut.
