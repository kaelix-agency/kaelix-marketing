# Pro-Stage — relevé direct des positions Google (2026-10-27, 22 h 30)

Protocole : google.fr, `hl=fr&gl=fr`, **ordinateur**, Chrome d'Axel (compte connecté → personnalisation possible), lecture de l'ordre des blocs sur la page 1 (~10 résultats web). **Téléphone : non vérifiable** (pas de navigateur mobile dans la session). Haloscan ne connaît que 2 des 10 recherches (niche) : le relevé direct fait foi sur les positions.

| Recherche | Pro-Stage — web (page 1) | Ce qui précède le 1er organique | 1er organique | Pack Maps |
|---|---|---|---|---|
| stage motocross somme | **5ᵉ** | 2 annonces (Adrenactive, Sport Découverte) + Aperçu IA | Adrenactive | — |
| stage moto cross picardie (30/mois) | **2ᵉ** (Haloscan 11/10 : 2ᵉ, concordant) | 2 annonces + Aperçu IA | Sport Découverte | — |
| école de pilotage motocross (170/mois) | absent | Aperçu IA + pack (MX School 17) | FFM | MX School 17 |
| initiation motocross amiens | absent | 2 annonces + Aperçu IA | Sport Découverte | MX Arena Amiens |
| stage motocross hauts-de-france | **3ᵉ** (et 9ᵉ) | Aperçu IA (échec de génération) | Sport Découverte | — |
| formation dejeps motocross | **5ᵉ** | rien (pas d'Aperçu IA) | Onisep, FFM, sports.gouv.fr, CREPS | — |
| cqp initiateur guide moto | 8ᵉ | Aperçu IA | Pascal Finot Formation | — |
| brevet fédéral moniteur motocross | **2ᵉ** (et 5ᵉ, 6ᵉ) | rien | FFM | — |
| stage motocross enfant somme | absent | 2 annonces | Adrenactive, Sport Découverte ×4 | — |
| stage motocross assevillers | **1ᵉʳ** (et 3ᵉ) | 3 annonces (Adrenactive, Sport Découverte, Manawa) + Aperçu IA | Pro-Stage | — |
| *(marque)* pro stage motocross | 1ᵉʳ ; 2ᵉ = Manawa « Réservez avec Pro Stage MX » | — | prostage.fr | fiche en panneau |

**Synthèse** : page 1 sur **7 recherches sur 10**, top 3 sur **4** (1ᵉʳ Assevillers, 2ᵉ Picardie et brevet fédéral, 3ᵉ Hauts-de-France) ; absent sur les trois recherches « grand public » (école de pilotage, Amiens, enfant Somme). Sur toutes les recherches de stage, **deux à trois annonces (Adrenactive, Sport Découverte, Manawa) et un Aperçu IA précèdent le premier organique** : ces revendeurs vendent les stages de Pro-Stage… avant Pro-Stage, y compris sur sa propre ville et sur sa marque. Sur les formations d'encadrants (DEJEPS, CQP, BFM), Pro-Stage est en page 1 derrière les institutions (FFM, Onisep, CREPS) et un concurrent direct, Pascal Finot Formation.

**Fiche Google (panneau, ordinateur)** : « Pro Stage » (sans tiret), catégorie **« Club de sport »**, 4,7 / 38 avis, adresse 1 La Ruelle 80200 Assevillers, téléphone 06 15 46 14 27 (= site), **site web = prostagemx.fr** (second domaine, même site), horaires présents. Publications : non lues (critère 19 non vérifiable).

**Constats hors grille, à mettre en tête de l'audit** :
1. **Le site est piraté** : l'accueil contient un paragraphe sur les casinos en ligne avec un lien vers `casinofrance10.fr`, un article « Locowin » daté 2022/05 dans « Non classé », et toutes les URL du menu sont de la forme `/se-former/formation/de/dejeps-2-2-2-2-3-2-2-6-2-2/` (injection de contenu, WordPress non maintenu). C'est le premier point : avant toute vitesse ou position, un site qui parle de casino à un parent qui cherche un stage pour son enfant.
2. **Pare-feu de l'hébergeur** (o2switch Tiger Protect) : la page renvoie un « test de sécurité » (503) à tout accès sans JavaScript ; les robots qui ne l'exécutent pas (lecture du script de collecte, certains outils, sitemap.xml en 503) ne voient pas le site. PageSpeed est passé (52/100, 6,3 s, **14 Mo** de page).
3. Deux domaines (prostage.fr, prostagemx.fr) servent le même site ; la fiche Google pointe vers le second.
4. Quatre numéros de téléphone par responsable sur la page contact (cohérent, par rôle) ; aucun lien `tel:` cliquable, aucun formulaire sur l'accueil (lien « Contactez-nous »), e-mail RGPD en gmail.
