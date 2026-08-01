---
name: personas
description: Définir et maintenir les personas d'un client — les PERSONNES dans les entreprises ICP (l'utilisateur, le champion, le décideur, le valideur budgétaire), leurs douleurs, leurs objections et leur langage. Les personas pilotent le contenu — un post LinkedIn qui parle au Head of Sales n'est pas celui qui parle au SDR. À utiliser dans /onboard-client, avant toute production de contenu, post social, séquence email ou page, et dès que l'opérateur parle de persona, d'audience, de « à qui parle ce contenu », ou qu'un même sujet doit être décliné pour plusieurs interlocuteurs. Ne pas confondre avec `icp` (le profil d'ENTREPRISE cible).
---
# Personas — contrat de définition des personnes cibles

## Pourquoi ce skill existe
L'ICP dit **quelles entreprises** viser ; les personas disent **à qui parler dedans** — et un contenu qui parle à tout le monde ne parle à personne. En B2B, l'achat est un comité : l'utilisateur (qui vit la douleur au quotidien), le champion (qui pousse en interne), le décideur (qui choisit), le valideur budgétaire (qui signe) — chacun a des douleurs différentes, donc des messages différents. « Vos SDR perdent 2 h/jour à qualifier des comptes froids » parle au Head of Sales ; « trouve le mobile direct et une vraie raison d'appeler » parle au SDR. Corollaire de l'invariant « une page = une intention » : **un contenu = un persona**, déclaré avant production.

## Méthode
1. **Partir de l'ICP.** Les personas vivent dans les entreprises ICP (`clients/<slug>/icp.md`). S'il n'existe pas, exécuter le skill `icp` d'abord — des personas sans ICP décrivent des gens qu'on ne saura pas trouver.
2. **Cartographier le comité d'achat** par segment ICP : qui utilise, qui pousse, qui décide, qui paie, qui peut bloquer (IT, DPO, DAF…). En TPE, plusieurs rôles fusionnent dans une seule personne (le dirigeant est utilisateur + décideur + payeur) : c'est UN persona, pas trois.
3. **Fiche par persona** :
   - **Intitulés réels** de poste (tels qu'on les trouve sur LinkedIn — c'est ce qui rend le persona ciblable en ads/outbound) ;
   - **Jobs to be done** (ce qu'il « embauche » le produit pour faire) ;
   - **Douleurs** en situations concrètes et chiffrées quand c'est possible (pas « manque d'efficacité » mais « perd 2 h/jour à qualifier des comptes froids ») ;
   - **Objections** (ce qui l'empêche d'acheter) et **critères de succès** (ce qui fait dire « ça marche ») ;
   - **Où il s'informe** (canaux, communautés, médias — ça décide OÙ publier) ;
   - **Langage verbatim** : ses mots pour décrire le problème, mots à utiliser / à éviter.
4. **Discipline de nombre : 2 à 4 personas.** Un persona sans douleur propre ni message propre fusionne avec un autre. Déclarer aussi les **anti-personas** (à qui on ne parle pas, pour ne pas diluer le message).
5. **Verbatim > invention.** Pré-clients, les douleurs sont des hypothèses : les flaguer comme telles. Collecter le réel dès que possible (entretiens bêta, avis publics des concurrents — le review mining donne les verbatims des douleurs non résolues) et remplacer les hypothèses au fil de l'eau. Ne jamais présenter un verbatim inventé comme une citation réelle (invariant fact-check).

## Ce que les personas pilotent (règles d'application)
- **Chaque contenu déclare son persona avant production** — au plan (`content-plan.md`, colonne Persona), puis dans le brief `/research`, puis dans `tracking.md` (**colonne Persona** dédiée : une colonne rend l'invariant vérifiable d'un coup d'œil, une mention en note ne le permet pas). Un contenu « pour tout le monde » se voit refuser le brief.
- **L'angle** : même sujet, angles différents — au décideur on parle coût, risque, ROI d'équipe ; à l'utilisateur on parle temps gagné, irritants quotidiens, réussite personnelle (quota, RDV pris).
- **Le canal** : on publie là où le persona s'informe, pas là où c'est pratique.
- **Les objections** alimentent FAQ, pages de vente et battlecards ; les critères de succès alimentent les preuves à fabriquer (cas clients, métriques).

## Livrable
`clients/<slug>/personas.md`, structure imposée :
1. **En-tête** : statut (hypothèse/validé), date, sources, renvoi vers `icp.md`.
2. **Comité d'achat** par segment ICP (qui joue quel rôle).
3. **Une fiche par persona** (intitulés, JTBD, douleurs, objections, critères de succès, canaux, verbatims).
4. **Anti-personas.**
5. **Matrice contenu** : persona × canal × angle (exemples de messages qui marchent / ne marchent pas).
6. **Journal de validation** (verbatims collectés, hypothèses confirmées/infirmées).

Le `client-brief.md` et le fichier de positionnement pointent vers ce fichier (source de vérité unique des personas — ne pas dupliquer les fiches ailleurs). **Gate humain** : les personas sont validés par l'opérateur ; en hypothèse, chaque usage en contenu le mentionne dans la remise.
