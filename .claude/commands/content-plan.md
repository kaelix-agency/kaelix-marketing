---
description: Plan éditorial pluri-mois — clusters, refreshes avant créations, calé sur la capacité de relecture
argument-hint: <slug-client> [horizon-mois: 6]
---
Plan éditorial pour `$ARGUMENTS` (horizon par défaut : **6 mois**). Utilise les skills `seo-gap-analysis` (intention, SERP, cluster), `personas` (déclaration du persona par sujet) et `local-seo` si le client est local.

1. **Contexte** : lis `clients/<slug>/client-brief.md`, `icp.md` et `personas.md` s'ils existent, `nap.md` si local, et `tracking.md` (le réalisé). **⛔ STOP si le ciblage SEO 3 étapes du brief (§5) est vide ou partiel** : sans les mots-clés des concurrents, l'inventaire de l'existant 4-20 et les nouveaux mots-clés priorisés, un plan serait de l'invention. Demande de compléter `/onboard-client` d'abord, et ne produis rien.

2. **Clusters** : construis les clusters depuis le ciblage — une **page pilier** (existante ou à créer) + ses satellites qui pointent vers elle. Respecte l'**architecture par type** du brief :
   - **SaaS** : les pages business AVANT le blog (accueil/tarifs → fonctionnalités → comparaisons « vs » → alternatives → témoignages → cas clients → blog en dernier), + les free tools envisagés ;
   - **Local** : pages service×ville sur les **zones réellement servies** (jamais de série de villes non desservies) ;
   - **E-commerce** : catégories/produits d'abord, puis comparatifs, puis blog.
   Un cluster sans pilier identifié est un signal d'alerte : les satellites n'auront rien vers quoi pousser leur puissance.

3. **Ordre de planification — non négociable** :
   - d'abord les **REFRESHES** de l'existant en **positions 4-20** (les pousser vers le top 3 est le levier le plus rentable : hors top 3, très peu de trafic, et on augmente le trafic sans rien créer) ;
   - ensuite les **CRÉATIONS**, par ordre de valeur : (1) argent (transactionnel/commercial) → (2) phase de choix (comparaisons, alternatives) → (3) informationnel longue traîne.

4. **Qualification de CHAQUE sujet** (aucun sujet n'entre au plan sans les huit) :
   - **mot-clé + intention** via Haloscan MCP (intention lue dans la SERP réelle, pas à l'intuition) ;
   - **règle du scroll** : si le premier résultat organique n'arrive qu'après 3 à 5 scrolls (pubs, AI Overviews, packs), le trafic organique est résiduel → **disqualifier** le mot-clé et proposer une variante à SERP plus organique. Consigner le sujet écarté avec son motif ;
   - **anti-cannibalisation** sur trois fronts : Haloscan, `tracking.md` (le publié) **et les sujets déjà inscrits au plan** — deux lignes du plan ne visent jamais la même intention. Conflit → refresh/fusion plutôt que création ;
   - **persona déclaré** — un seul, tiré de `personas.md` (invariant : un contenu = un persona). Un sujet « pour tout le monde » ne rentre pas au plan ;
   - **typologie** (actu / guide / evergreen) — elle pilotera le re-check bimestriel ;
   - **mécanisme de capture** (newsletter, essai, devis, contact, mini-outil/quiz) : un contenu qui ne capture rien fabrique des touristes ;
   - **first-party à mobiliser**, pris dans le §7 du brief. **Si aucun n'est mobilisable : flaguer « à alimenter par le client »** et l'inscrire dans la liste des first-party manquants — ne rien inventer, ne pas substituer un angle générique ;
   - **cluster de rattachement** ; un sujet hors cluster doit se justifier.
   - Un mot-clé à **volume nul** n'est pas un no-go automatique : si le sujet est émergent et l'intention ultra-qualifiée, c'est un `pari-émergent` légitime — le flaguer comme tel (horizon d'évaluation long).

5. **Calage du volume mensuel** : le volume retenu = **min(cadence contractuelle, capacité de relecture de l'opérateur)**. Demande-moi les deux si le brief ne les porte pas. **Le throttle prime** : on ne planifie jamais plus que ce qu'on peut relire — publier du non-relu, c'est publier ce qui ne performera pas (repère : une demi-journée de relecture/semaine ≈ 2 contenus). Si la cadence contractuelle dépasse la capacité de relecture, dis-le explicitement plutôt que de remplir le calendrier.

6. **Écriture** : écris `clients/<slug>/content-plan.md` en copiant `clients/_template/content-plan.md`, rempli, **statut 🕓 brouillon**. Renseigne l'en-tête (horizon, cadence, capacité, volume retenu), les clusters, le tableau des sujets, les sujets écartés avec leur motif, et les first-party manquants à demander au client.

7. **Gate humain** : je relis, j'ajuste, je passe le statut à ✅ validé. **Seul un plan validé est présentable au client** — ne jamais présenter un brouillon comme un plan arrêté.

8. **Articulation avec la suite** — à rappeler en fin d'exécution :
   - `/weekly-review` **pilote l'exécution** du plan : elle peut reporter ou re-prioriser des sujets et met à jour leurs statuts ;
   - `/research` part des sujets au statut **« prévu »** du mois en cours ;
   - `tracking.md` reste le **journal du réalisé**, `content-plan.md` la **carte du prévu** — les deux ne se remplacent pas ;
   - révision du plan **~1 fois par trimestre** (ou si le brief change substantiellement).

**Document vivant** : `content-plan.md` ne se re-génère jamais et aucune ligne ne s'efface. Un sujet abandonné ou reporté **garde sa ligne** et change de statut, avec son motif — la trace d'audit passe par les statuts et par git, pas par l'immutabilité du fichier (contrairement aux rapports envoyés et aux prompts émis, qui sont figés). Voir `docs/rationnel-des-choix.md` §1.11.
Ne rien publier à cette étape. Tout livrable = fichiers de ce repo.
