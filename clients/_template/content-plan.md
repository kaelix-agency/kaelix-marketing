# Plan éditorial — <NOM DU CLIENT>

<!--
GABARIT — copié par /content-plan vers clients/<slug>/content-plan.md
La CARTE DU PRÉVU sur plusieurs mois (tracking.md est le journal du RÉALISÉ).
⚠️ DOCUMENT VIVANT — c'est l'exception au régime « fichier figé » des reports/ et prompts/.
Les statuts par sujet bougent au fil des semaines (/weekly-review re-priorise) ; le fichier
n'est JAMAIS re-généré et une ligne ne s'efface JAMAIS. Un sujet abandonné se raye par son
statut, il ne disparaît pas — sa trace d'audit passe par le statut et par git.
Justification : docs/rationnel-des-choix.md §1.11.
-->

| | |
|---|---|
| **Client** | `<slug>` |
| **Horizon** | 6 mois — de MM/AAAA à MM/AAAA <!-- défaut 6 mois ; au-delà, le plan devient spéculatif --> |
| **Généré le** | AAAA-MM-JJ |
| **Statut** | 🕓 brouillon <!-- → ✅ validé après relecture opérateur. Seul un plan ✅ est présentable au client. --> |
| **Validé le** | — |
| **Prochaine révision** | AAAA-MM-JJ <!-- ~1 fois par trimestre --> |
| **Cadence contractuelle** | X contenus / mois |
| **Capacité de relecture opérateur** | X contenus / mois <!-- LA vraie limite, cf. règle d'or ci-dessous --> |
| **Volume retenu** | **X contenus / mois** <!-- = min(cadence, capacité de relecture) --> |

---

## ⚠️ Règle d'or de ce plan

> **Les refreshes de l'existant en positions 4-20 se planifient AVANT toute création.**
>
> Pousser vers le top 3 une page déjà positionnée est le levier le plus rentable du SEO : hors top 3, le trafic est très faible, et l'optimisation de l'existant augmente le trafic **sans rien créer**. Créer du neuf pendant que des gains faciles dorment dans l'existant, c'est inverser l'ordre de valeur.

> **Second garde-fou — le throttle.** Le volume mensuel se cale sur la **capacité de relecture**, jamais sur la capacité de génération. Publier plus que ce qu'on peut relire = publier du non-relu = ne pas performer. Repère : une demi-journée de relecture par semaine ≈ 2 contenus relus sérieusement.

---

## 1. Clusters

<!-- Un cluster = une page pilier + ses satellites qui pointent vers elle. C'est ce qui donne
     sa cohérence au plan : sans clusters, on produit une collection d'articles orphelins.
     Construits depuis le ciblage 3 étapes du client-brief.md §5, en respectant l'architecture
     par type du §6 (SaaS : pages business avant blog · local : service×ville · ecommerce : catégories). -->

### Cluster A — <nom du cluster>

| | |
|---|---|
| **Page pilier** | <!-- URL si existante, ou « à créer » --> |
| **Statut du pilier** | existante / à créer / à refresh |
| **Objectif SEO** | <!-- le résultat visé, concret : « passer /page de la position 8 au top 3 sur <mot-clé> » --> |
| **Mot-clé pilier** | |
| **Persona dominant** | |

**Sujets rattachés** : <!-- renvoient aux lignes du tableau §2 -->
- [ ]
- [ ]

### Cluster B — <nom du cluster>

<!-- Dupliquer le bloc ci-dessus pour chaque cluster. Un cluster sans pilier identifié est
     un signal d'alerte : les satellites n'auront rien vers quoi pousser leur puissance. -->

---

## 2. Tableau des sujets

<!-- COLONNES :
  Mois          MM/AAAA de production prévu
  Type          création · refresh   (⚠️ les refreshes se placent EN PREMIER dans le calendrier)
  Sujet         titre provisoire — sera affiné par /research
  Mot-clé       mot-clé principal (validé Haloscan : volume, difficulté, règle du scroll)
  Intention     info · commerciale · transactionnelle · navigationnelle · locale (lue dans la SERP réelle)
  Persona       UN seul, déclaré ici (invariant : un contenu = un persona)
  Typologie     actu · guide · evergreen — pilote le futur re-check bimestriel
  Cluster       rattachement (§1) — un sujet hors cluster doit se justifier
  Capture       le mécanisme obligatoire : newsletter · essai · devis · contact · mini-outil/quiz
  First-party   l'élément du client-brief.md §7 à mobiliser.
                ⛔ Si aucun n'est mobilisable → « à alimenter par le client » : on NE REMPLACE PAS
                par un générique, on demande l'élément avant de produire.
  Statut        prévu · en production · publié · reporté · abandonné
                Une ligne ne s'efface pas. Reporté/abandonné restent visibles avec leur motif.
-->

| Mois | Type | Sujet (titre provisoire) | Mot-clé principal | Intention | Persona | Typologie | Cluster | Capture | First-party à mobiliser | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| MM/AAAA | refresh | | | | | | | | | prévu |
| MM/AAAA | création | | | | | | | | | prévu |

### Sujets écartés

<!-- Ce qu'on a examiné et NON retenu, avec le motif. Aussi utile que le plan lui-même :
     évite de re-proposer six mois plus tard un mot-clé déjà disqualifié.
     Motifs typiques : règle du scroll (premier résultat organique après 3-5 scrolls),
     cannibalisation avec une page existante, intention hors ICP, aucun first-party mobilisable. -->

| Mot-clé / sujet | Motif d'écartement | Réexaminable ? |
|---|---|---|
| | | |

### First-party manquants — à demander au client

<!-- La liste d'appoint : ce qu'il faut obtenir pour débloquer les sujets flagués
     « à alimenter par le client » dans le tableau ci-dessus. -->

| Sujet concerné | Élément demandé | Demandé le | Reçu le |
|---|---|---|---|
| | | | |

---

## 3. Journal des révisions

<!-- Le plan bouge : /weekly-review re-priorise, reporte, ajoute. Tracer ici les inflexions
     de fond (pas chaque changement de statut, que git enregistre déjà). -->

| Date | Ce qui a changé | Pourquoi | Statut du plan |
|---|---|---|---|
| AAAA-MM-JJ | version initiale | — | 🕓 brouillon |
