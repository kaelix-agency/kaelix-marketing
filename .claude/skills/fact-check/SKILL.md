---
name: fact-check
description: Passe de vérification factuelle obligatoire avant toute remise de contenu en relecture. Contre-checke le travail des autres skills sur des sources vérifiables.
---
# Fact-Check — contrat de vérification

## Pourquoi ce skill existe
Un LLM produit avec la même assurance le vrai et le plausible. Un seul chiffre faux dans un article détruit la crédibilité du client (et la nôtre), dégrade l'E-E-A-T, et expose à des corrections publiques. Ce skill est le contre-pouvoir des skills de production : il les « empêche de faire des bêtises ». Il s'exécute APRÈS la rédaction et AVANT la remise au gate humain — l'humain relit le fond et la voix, pas la véracité de chaque chiffre.

## Ce qui doit être vérifié (checklist)
1. **Toute statistique ou chiffre** : source identifiable, datée, consultable. Sinon → retirer ou reformuler en ordre de grandeur explicitement prudent.
2. **Toute affirmation datée** (« depuis 2025… », « la dernière version… ») : encore vraie aujourd'hui ? Les faits périment.
3. **Toute citation ou attribution** : la personne a réellement dit/écrit cela ? Jamais de citation reconstruite.
4. **Tout nom propre** (produit, outil, entreprise, loi, norme) : orthographe exacte, existence réelle, description conforme.
5. **Toute affirmation légale/fiscale/médicale** (YMYL) : source primaire (texte officiel, organisme) ou suppression. Pas de « on dit que ».
6. **Les données first-party du client** : conformes à ce que dit le brief (ne pas embellir un chiffre client).
7. **Cohérence interne** : le contenu ne se contredit pas (un chiffre cité deux fois avec deux valeurs).
8. **Composants v2 — les blocs qui font parler des humains ou affichent des chiffres** (contrat `docs/contrat-de-contenu.md` §4.3). C'est là qu'une invention est la plus coûteuse : une fausse citation attribuée à une personne nommée n'est pas une erreur factuelle ordinaire, c'est un faux publié sous la signature du client.
   - **`StatGrid`** : CHAQUE stat porte sa `source` (et son `sourceUrl` quand elle est publique). Une stat first-party se libelle « donnée interne <client>, <année> » et doit être **tracée au `client-brief.md` §7** — pas d'embellissement d'un chiffre client. Une stat non sourçable se retire de la grille, elle ne « passe » pas en prose.
   - **`Testimonial`** : la citation existe **réellement** à la source indiquée (fiche Google, plateforme d'avis référencée dans le brief) et correspond à ce qui y est écrit. Coupes autorisées (`…`), reformulation qui change le propos : non. Source invérifiable → **retirer le composant**, jamais « à confirmer ».
   - **`ExpertQuote`** : soit elle est **tracée à un first-party** du brief (dire lequel), soit elle est **flaguée « proposition à valider par le client »** dans le rapport et dans la PR. Vérifier aussi que le brief autorise la citation du porte-parole. Une citation ni tracée ni flaguée est une invention : la retirer.
   - **`ErrorTip`** : l'erreur décrite vient du vécu terrain du client (first-party), pas d'une déduction générique sur le sujet.
   - **Version du contrat** : aucun composant utilisé ne dépasse la version supportée par le site (brief §2). ⚠️ `Callout type="retenir"` sur un site v1 est le cas à contrôler à la main — c'est une valeur de prop, donc le build du site peut ne pas l'attraper.

## Règles de traitement
- Vérifiable et vrai → conserver, s'assurer que la source est citée ou citable.
- Invérifiable → retirer ou réécrire sans l'affirmation. Un contenu plus court et sûr bat un contenu riche et douteux.
- Douteux → signaler explicitement à l'opérateur dans la remise (liste « points à confirmer »), ne jamais laisser passer silencieusement.

## Livrable
Un court rapport de vérification joint à la remise : nombre d'affirmations contrôlées, corrections faites, points restant à confirmer par l'opérateur. Si zéro correction : le dire aussi (la passe a eu lieu).

Le rapport porte en outre une section **« ⚠️ Citations à valider »** listant chaque `ExpertQuote` proposée (texte exact + attribution) : elle est reprise telle quelle dans le corps de la PR par `/write` et **bloque le merge** tant que le client n'a pas validé.
