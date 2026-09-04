# To-do opérateur — Transports Ansquer

> Les actions qui attendent **l'opérateur** (pas le système). Maintenue à chaque `/weekly-review` et à chaque gate. ⛔ Invariant 14 (2026-09-02) : **aucune action « demander au client »** — le seul canal de demande est la ligne avis permanente du rapport mensuel. Convention : `docs/rationnel-des-choix.md` §1.18 et §1.20.
>
> **Statuts** : 🕓 à faire · 🔧 en cours · ✅ fait (date) · ⛔ bloqué (motif) · ↪️ reporté (nouvelle échéance)

| # | Action | Origine | Échéance | Statut |
|---|---|---|---|---|
| 2 | **Checklist GBP, champs manuels restants** (`nap.md` : tél 06 partout, horaires avec coupure, catégorie « Société de transport routier », description ; ⛔ adresse : ne pas toucher — elle est la référence) | mission GBP 20/08 + gate rapport 08 | **cette semaine** — conditionne la ligne « fiche Google » du rapport d'août | 🕓 à faire |
| 4 | ~~Envoyer le rapport d'août~~ | gate 02/09 | — | ✅ **fait** : 📤 émis le 03/09 (PDF v2), fichier figé |
| 5 | ~~Planificateur Windows~~ | décision 28/08 | — | ✅ **fait (2026-09-02)** : chantier exécuté — `scripts/run-scheduled.ps1`, tâches « KAELIX - Weekly » (lundi 07:30, 1er run 07/09) et « KAELIX - Report mensuel » (le 1er, 08:00), diagnostic test 7/7 PASS. Nouveau rôle opérateur : lire l'issue GitHub → valider → fermer |
| 6 | ~~Setup GSC directe~~ | chantier GSC 03/09 | — | ✅ **fait (2026-09-03)** : compte de service créé (gates opérateur ×3), clé sécurisée hors repo, accès « Complet », test réel OK — **la weekly du 07/09 aura des métriques GSC réelles** |
| 8 | **Demander l'indexation des articles 2 et 3** : ⚠️ tenté par la session le 03/09, **échec dans le budget** (la barre d'inspection GSC ignore l'Entrée simulée ; le deep-link `/inspect` renvoie 404). **Reste 2 clics opérateur** : Search Console → barre du haut « Inspecter n'importe quelle URL » → coller `https://transportsansquer.fr/blog/empotage-depotage-conteneur/` → « Demander une indexation » ; idem pour `https://transportsansquer.fr/blog/transport-dedie-messagerie-ou-coursier/`. (Sinon : le sitemap soumis fera le travail, juste plus lentement) | test GSC 03/09, tenté 03/09 | cette semaine | ⛔ bloqué automatisation → opérateur |
| 9 | ~~Sort de l'ancien sitemap~~ | test GSC 03/09 | — | ✅ **fait (2026-09-03)** : `page-sitemap.xml` retiré de GSC (HTTP 204) ; il ne reste que `sitemap.xml` (24 URLs, 0 erreur, relu par Google le 03/09) |
| 2b | **Checklist GBP — exécution manuelle** (⚠️ 2e tentative d'automatisation le 03/09 : l'éditeur s'ouvre dans une iframe illisible par l'extension + captures gelées — même mur que le 20/08, **rien n'a été modifié**). Valeurs exactes à appliquer : ① tél **06 03 87 31 66** (remplace le 01 41 21 07 69) · ② horaires lun-ven **07:30-12:30 et 13:30-16:00** (2 plages, coupure méridienne), sam-dim fermés · ③ catégorie principale **« Société de transport routier »**, secondaires « Service logistique » + « Entrepôt »/« Service de stockage » (libellés disponibles) · ④ zone desservie : **92, 94, 78, 95 + Paris** · ⑤ site web `https://transportsansquer.fr/` (vérifier) · ⑥ description : ✅ **validée le 03/09** → texte de référence dans `nap.md` §2 bis, à coller tel quel · ⑦ ⛔ **adresse : NE PAS TOUCHER** · ⑧ lien avis : ✅ déjà relevé (`g.page/r/CSTJAaXNYqRfEBM/review`) | mission GBP 20/08, retentée 03/09 | cette semaine | ⛔ bloqué automatisation → opérateur |
| 7 | ~~GO reco palettes + GO /research comparatif~~ | reprise 02/09 | — | ✅ fait (2026-09-02) : ré-angle palettes validé ; `/research` comparatif lancé |
| 10 | **Citations — LOT 1 (priorité 1)** : ① créer la fiche **Pages Jaunes** + corriger **Mappy** (un seul compte **Solocal**, bloc A de `citations.md`) · ② créer la fiche **118000** (bloc B) · ③ vérifier dans l'éditeur GBP que catégorie/description/zone de #2b sont bien finalisées (la fiche publique affiche déjà 51 + tél 06 + 16:00 — bravo, il ne reste que ça) | campagne citations 04/09 | semaine du 07/09 | 🕓 à faire — ⚠️ **email de validation Solocal reçu le 04/09** sur kaelix-agency@hotmail.com : très probablement le **seul message non lu du dossier Courrier indésirable** (purge auto sous 30 j !) — à ouvrir et valider à la main (la session n'a pas pu lire la liste Outlook : interface virtualisée illisible + captures gelées) |
| 11 | **Citations — LOT 2 (cartes)** : ① **Apple Business Connect** (businessconnect.apple.com, bloc C) · ② **Bing Places** (bingplaces.com → « importer depuis Google Business Profile », bloc D) · ③ contact **HAROPA** (02 79 18 05 00) : référencement des implantés du port | campagne citations 04/09 | semaine du 14/09 | 🕓 à faire (après lot 1) |
| 12 | **Avis #1 (test du circuit)** : lire l'**issue GitHub #3** sur mobile → valider le brouillon (ou commenter pour retouche) → me dire « publie » (tentative Chrome, sinon texte à coller) → l'issue se ferme au 📤 | circuit avis 04/09 | dès réception de la notif | 🕓 à faire |

## Actions retirées / closes

| # | Action | Sort |
|---|---|---|
| 1 | WhatsApp Martin (exemples de quai + lien d'avis) | ⛔ **retirée le 2026-09-02 — doctrine zéro sollicitation (invariant 14)** : le vécu de quai ne se demande plus (ré-angle ou glissement) ; les avis passent par la ligne permanente du rapport |
| 3 | Arbitrage adresse 49/51 | ✅ **fait le 2026-09-02** : décision opérateur « aligner sur la fiche GBP » exécutée — relevé fiche = **51** (« Quai 8, 51 Rte Principale du Port Bât G1 ») ; `nap.md` à jour ; site déjà à 51 → aucune PR ; annuaires à aligner à la campagne citations |

## Journal

| Date | Changement |
|---|---|
| 2026-08-28 | Création (gate mise en page du rapport) : 5 actions initialisées + Cuik différé reporté sans date |
| 2026-09-02 | Doctrine zéro sollicitation : #1 retirée ; #3 close (arbitrage 51 exécuté, relevé fiche via Chrome) ; #4 allégée (points levés par la session) ; #7 ajoutée (GO palettes + GO /research comparatif) |
| 2026-09-03 | Chantier GSC directe execute : #6 fait, #8 (indexation bouton GSC art. 2-3) et #9 (sort ancien sitemap) ajoutees |
| 2026-09-03 (2) | GO to-do : #9 fait (ancien sitemap retire) ; #8 tente-echoue (2 essais, barre inspection + deep-link) -> 2 clics operateur ; #2b : 2e tentative GBP bloquee (iframe + captures gelees), valeurs exactes listees, rien modifie |
