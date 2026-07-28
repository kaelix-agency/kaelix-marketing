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

## Règles de traitement
- Vérifiable et vrai → conserver, s'assurer que la source est citée ou citable.
- Invérifiable → retirer ou réécrire sans l'affirmation. Un contenu plus court et sûr bat un contenu riche et douteux.
- Douteux → signaler explicitement à l'opérateur dans la remise (liste « points à confirmer »), ne jamais laisser passer silencieusement.

## Livrable
Un court rapport de vérification joint à la remise : nombre d'affirmations contrôlées, corrections faites, points restant à confirmer par l'opérateur. Si zéro correction : le dire aussi (la passe a eu lieu).
