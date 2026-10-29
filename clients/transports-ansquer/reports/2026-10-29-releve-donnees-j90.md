# Transports Ansquer — relevé de données pour la revue stratégique J90 (2026-10-29)

**Pourquoi ce fichier** : la revue J90 produite le 29/10 au matin par la tâche planifiée n'avait accès ni à Search Console, ni à Haloscan, ni à PostHog (session cloud sans clés) ; ses chiffres s'arrêtaient au 17/10. Ce relevé a été fait en session interactive le 29/10, avec les trois sources, pour que la revue soit refaite sur des chiffres à jour. **Source unique des chiffres de la revue relancée.** Règle de lecture (invariant 8) : Search Console = clics et affichages ; Haloscan = positions de référence ; PostHog = contacts. Jamais additionnés entre eux.

Fenêtres : Search Console jusqu'au 27/10 (dernier jour consolidé) ; PostHog du 17/10 (mise en service de la mesure) au 28/10 — **12 jours seulement, comptes bruts** (< 50 visites par page : pas de taux interprétable par page).

## 1. Search Console — évolution mensuelle (du 01/08 au 27/10)

| Mois | Clics | Affichages | Position moyenne (pondérée par les affichages) |
|---|---|---|---|
| Août | 23 | 1092 | 24.6 |
| Septembre | 46 | 1835 | 16.7 |
| Octobre (au 27) | 39 | 3069 | 12.1 |

Lecture : affichages ×2,8 entre août et octobre (27 jours seulement en octobre), position moyenne de 24,6 à 12,1. Les clics ne suivent pas encore (39 en octobre au 27, contre 46 en septembre) : le site est vu de plus en plus, cliqué pas davantage — c'est l'écart de clics ci-dessous.

## 2. Search Console — pages, 28 jours (30/09 → 27/10)

```
clics  imprs   CTR%   pos   page
17     505     3.4    9.0   https://transportsansquer.fr/
6      656     0.9    6.1   https://transportsansquer.fr/blog/combien-de-palettes-dans-un-conteneur/
6      1006    0.6    7.3   https://transportsansquer.fr/blog/empotage-depotage-conteneur/
5      106     4.7    7.7   https://transportsansquer.fr/transport/hayon-20m3-paris/
2      25      8.0    8.4   https://transportsansquer.fr/transport/tournee-reguliere/
1      39      2.6    41.1  https://transportsansquer.fr/entreprise/
1      17      5.9    22.7  https://transportsansquer.fr/recrutement/
1      112     0.9    18.4  https://transportsansquer.fr/stockage/externalisation-logistique/
1      135     0.7    35.7  https://transportsansquer.fr/transport/
0      5       0.0    8.0   https://transportsansquer.fr/98ee9-contact/
0      11      0.0    11.5  https://transportsansquer.fr/blog/
0      15      0.0    6.8   https://transportsansquer.fr/blog/tournee-livraison-reguliere/
0      91      0.0    9.6   https://transportsansquer.fr/blog/transport-dedie-messagerie-ou-coursier/
0      74      0.0    14.6  https://transportsansquer.fr/contact/
0      15      0.0    18.6  https://transportsansquer.fr/manutention/
0      58      0.0    9.6   https://transportsansquer.fr/stockage/
0      102     0.0    21.8  https://transportsansquer.fr/stockage/depotage-empotage-conteneurs/
0      78      0.0    10.5  https://transportsansquer.fr/stockage/entrepot-gennevilliers/
```

## 3. Search Console — pages, 90 jours (30/07 → 27/10)

```
clics  imprs   CTR%   pos   page
71     1616    4.4    11.4  https://transportsansquer.fr/
8      188     4.3    7.3   https://transportsansquer.fr/transport/hayon-20m3-paris/
6      939     0.6    6.3   https://transportsansquer.fr/blog/combien-de-palettes-dans-un-conteneur/
6      1006    0.6    7.3   https://transportsansquer.fr/blog/empotage-depotage-conteneur/
3      174     1.7    12.7  https://transportsansquer.fr/stockage/
2      38      5.3    25.9  https://transportsansquer.fr/recrutement/
2      285     0.7    13.2  https://transportsansquer.fr/stockage/entrepot-gennevilliers/
2      57      3.5    24.2  https://transportsansquer.fr/stockage/groupage-degroupage/
2      54      3.7    10.2  https://transportsansquer.fr/transport/tournee-reguliere/
2      194     1.0    20.2  https://transportsansquer.fr/transport/transport-pl-ile-de-france/
1      73      1.4    29.6  https://transportsansquer.fr/entreprise/
1      54      1.9    10.6  https://transportsansquer.fr/le-stockage-et-le-transport-durgence/
1      267     0.4    25.2  https://transportsansquer.fr/stockage/depotage-empotage-conteneurs/
1      231     0.4    22.8  https://transportsansquer.fr/stockage/externalisation-logistique/
1      307     0.3    34.1  https://transportsansquer.fr/transport/
0      20      0.0    8.0   https://transportsansquer.fr/98ee9-contact/
0      22      0.0    15.4  https://transportsansquer.fr/blog/
0      53      0.0    8.9   https://transportsansquer.fr/blog/tournee-livraison-reguliere/
0      91      0.0    9.6   https://transportsansquer.fr/blog/transport-dedie-messagerie-ou-coursier/
0      173     0.0    16.0  https://transportsansquer.fr/contact/
0      115     0.0    69.0  https://transportsansquer.fr/lexternalisation-de-votre-logistique/
0      73      0.0    19.2  https://transportsansquer.fr/manutention/
0      4       0.0    9.3   https://transportsansquer.fr/mention-legal/
```

## 4. Écarts de clics sur 90 jours (page × recherche, position ≤ 20, ≥ 20 affichages)

```
imprs  clics  CTR%   att.%  pos   manque  page | query
94     0      0.0    6.1    4.0   6       https://transportsansquer.fr/stockage/entrepot-gennevilliers/ | crossdocking île de france
203    0      0.0    2.0    9.0   4       https://transportsansquer.fr/ | transporteur gennevilliers
76     0      0.0    2.2    8.5   2       https://transportsansquer.fr/blog/empotage-depotage-conteneur/ | empotage
35     0      0.0    3.2    6.6   1       https://transportsansquer.fr/contact/ | transport ansquer
59     0      0.0    1.5    12.1  1       https://transportsansquer.fr/stockage/entrepot-gennevilliers/ | cross docking île de france
30     0      0.0    2.4    8.1   1       https://transportsansquer.fr/blog/empotage-depotage-conteneur/ | dépotage conteneur
20     0      0.0    2.8    7.3   1       https://transportsansquer.fr/blog/empotage-depotage-conteneur/ | depotage
28     0      0.0    1.9    9.7   1       https://transportsansquer.fr/transport/ | transport ansquer
44     0      0.0    1.1    14.4  0       https://transportsansquer.fr/blog/empotage-depotage-conteneur/ | empotage conteneur
52     0      0.0    0.8    17.9  0       https://transportsansquer.fr/stockage/externalisation-logistique/ | entrepôt de stockage externalisé
20     0      0.0    1.7    10.8  0       https://transportsansquer.fr/blog/empotage-depotage-conteneur/ | empotage d'un conteneur
27     0      0.0    1.2    13.9  0       https://transportsansquer.fr/transport/recyclage-tri/ | transport déchets recyclables
27     0      0.0    1.0    15.6  0       https://transportsansquer.fr/blog/empotage-depotage-conteneur/ | dépotage
23     0      0.0    0.7    18.3  0       https://transportsansquer.fr/blog/empotage-depotage-conteneur/ | empotage container
49     1      2.0    1.9    9.5   0       https://transportsansquer.fr/ | transport gennevilliers
41     11     26.8   21.8   1.0   0       https://transportsansquer.fr/ | transport ansquer
```

Lecture : le plus gros manque est **« crossdocking île de france » → /stockage/entrepot-gennevilliers/** (94 affichages en position 4, 0 clic), devant **« transporteur gennevilliers » → accueil** (203 affichages en position 9, 0 clic — la carte Google prend les clics, cf. fiche Google #2b). Les recherches « empotage / dépotage » sont sous la règle des 90 jours (article indexé le 16/10 : pas de retouche avant le 14/01/2027).

## 5. Search Console — recherches, 90 jours (extrait ; Google masque une partie des recherches rares)

```
clics  imprs   CTR%   pos   query
11     41      26.8   1.0   transport ansquer
1      1       100.0  4.0   société logistique
1      51      2.0    9.8   transport gennevilliers
0      2       0.0    9.0   "transport dédié"
0      65      0.0    41.3  affretement routier europeen
0      2       0.0    1.0   an transport
0      18      0.0    5.5   ansquer
0      2       0.0    58.5  calcul tournée livraison
0      1       0.0    4.0   chargement a quai
0      3       0.0    54.0  co-packing externalisé fonctionnement
0      1       0.0    1.0   combien de palette dans un container 40 pieds
0      2       0.0    8.0   combien de palette dans un conteneur 40 pieds
0      4       0.0    7.5   combien de palettes 100x120 dans un conteneur 20 pieds
0      1       0.0    8.0   combien de palettes 100x120 dans un conteneur 40 pieds
0      5       0.0    6.6   combien de palettes 80x120 dans un conteneur 40 pieds
0      2       0.0    22.5  combien de palettes dans un 20 pieds
0      3       0.0    20.0  combien de palettes dans un 40 pieds
0      4       0.0    6.0   combien de palettes dans un conteneur 40 pieds
0      3       0.0    7.7   combien de palettes europe dans un container 40 pieds
0      7       0.0    17.0  combien de palettes peut-on charger dans un conteneur high cube de 40 pieds
0      1       0.0    77.0  comment externaliser sa logistique
0      91      0.0    40.4  commissionnaire de transport international
0      1       0.0    47.0  contrat prestataire transport collectif
0      1       0.0    33.0  contrôle logistique externalisée
0      24      0.0    40.6  courier services gennevilliers
0      165     0.0    21.8  course urgente
0      1       0.0    46.0  cross docking
0      5       0.0    19.4  cross docking ile et vilaine
```

## 6. Haloscan — positions de référence (relevé du 29/10)

```
mot-clé                                          pos.  volume   KVI   trafic  url
gennevilliers transport                          6     170      9     6       https://transportsansquer.fr/
transporteur gennevilliers                       6     110      7     4       https://transportsansquer.fr
transport gennevilliers                          9     170      9     4       https://transportsansquer.fr/
schenker gennevilliers                           19    390      28    2       https://transportsansquer.fr/stockage/
schenker gennevilliers                           23    390      28    1       https://transportsansquer.fr/
entreprise de transport gennevilliers            10    40       10    1       https://transportsansquer.fr/
schenker gennevilliers                           28    390      28    1       https://transportsansquer.fr/manutention/
xpo gennevilliers                                19    140      36    1       https://transportsansquer.fr/
dépotage                                         18    100      17    1       https://transportsansquer.fr/blog/empotage-depotage-conteneur/
transporteur pl                                  10    20       7     1       https://transportsansquer.fr/transport/transport-pl-ile-de-france/
externaliser logistique                          36    720      25    1       https://transportsansquer.fr/stockage/externalisation-logistique/
svp transport gennevilliers                      18    70       35    1       https://transportsansquer.fr/
transport routier gennevilliers                  14    20       12    1       https://transportsansquer.fr/
but gennevilliers entrepôt                       32    170      35    1       https://transportsansquer.fr/stockage/
transport poids lourd ile de france              15    10       5     1       https://transportsansquer.fr/transport/transport-pl-ile-de-france/
depotage douane                                  16    10       12    1       https://transportsansquer.fr/blog/empotage-depotage-conteneur/
plan d'empotage                                  16    10       1     1       https://transportsansquer.fr/blog/empotage-depotage-conteneur/
crossdocking                                     32    100      34    1       https://transportsansquer.fr/stockage/entrepot-gennevilliers/
commissionnaire de transport international       22    20       25    1       https://transportsansquer.fr/transport/transport-international/
ovh groupe sas                                   36    100      30    1       https://transportsansquer.fr/mention-legal/
dépotage conteneur                               39    90       1     1       https://transportsansquer.fr/stockage/depotage-empotage-conteneurs/
dépotage industriel                              16    5        1     1       https://transportsansquer.fr/blog/empotage-depotage-conteneur/
dépotage douane                                  22    10       1     1       https://transportsansquer.fr/blog/empotage-depotage-conteneur/
entreprise de transport gennevilliers            36    40       10    1       https://transportsansquer.fr/contact/
logistica gennevilliers                          27    10       1     1       https://transportsansquer.fr/
port de gennevilliers entreprises                38    40       13    1       https://transportsansquer.fr/
logistique gennevilliers                         37    30       1     1       https://transportsansquer.fr/
transport routier gennevilliers                  41    20       12    1       https://transportsansquer.fr/contact/
transport de marchandise ile de france           37    10       1     1       https://transportsansquer.fr/transport/transport-pl-ile-de-france/
affretement routier europeen                     42    20       21    1       https://transportsansquer.fr/transport/affretement-europe/
course urgente                                   43    20       18    1       https://transportsansquer.fr/transport/course-urgente/
commissionnaire de transport ile de france       55    40       9     1       https://transportsansquer.fr/transport/
transport poids lourd ile de france              52    10       5     1       https://transportsansquer.fr/transport/
transport et valorisation paris                  14    NA       19    NA      https://transportsansquer.fr/transport/
transport de matériel lourd                      35    NA       1     NA      https://transportsansquer.fr/transport/transport-pl-ile-de-france/
tournée régulière transport                      13    NA       1     NA      https://transportsansquer.fr/transport/tournee-reguliere/
stockage gennevilliers                           24    NA       19    NA      https://transportsansquer.fr/stockage/
stockage marchandise entreprise chennevières-sur-marne 49    NA       18    NA      https://transportsansquer.fr/stockage/
```

Lecture : sur la grappe locale, **« gennevilliers transport » 6ᵉ (170/mois), « transporteur gennevilliers » 6ᵉ (110/mois), « transport gennevilliers » 9ᵉ (170/mois)**, « entreprise de transport gennevilliers » 10ᵉ — toutes en page 1, aucune dans les 3 premières. « course urgente » 43ᵉ.

## 7. PostHog — contacts (17/10 → 28/10, 12 jours, première période mesurée)

```
                               période   précéd.     évol.
visites (onglets)                   93         0 (nouveau)
pages vues                         120         0 (nouveau)
clics téléphone                      3         0 (nouveau)
clics e-mail                         6         0 (nouveau)
formulaires envoyés                  1         0 (nouveau)
contacts (total)                    10         0 (nouveau)
visites avec ≥1 contact             10         0 (nouveau)
taux de contact (visites)       10.8 %         —
ℹ️ une « visite » = un onglet ouvert (identifiant de session, sans cookie) — non comparable aux « utilisateurs » GA4 ni aux clics GSC.
```

```
  vues  visites  tél  mail  form  v.contact    taux  page
    14       14    0     6     0          6  42.9 %  /recrutement/
    58       48    2     0     0          2   4.2 %  /
     4        4    0     0     1          1  25.0 %  /devis/
     3        3    1     0     0          1  33.3 %  /stockage/depotage-empotage-conteneurs/
     7        7    0     0     0          0   0.0 %  /blog/empotage-depotage-conteneur/
     6        6    0     0     0          0   0.0 %  /blog/combien-de-palettes-dans-un-conteneur/
     5        5    0     0     0          0   0.0 %  /contact/
     4        3    0     0     0          0   0.0 %  /transport/
     3        2    0     0     0          0   0.0 %  /transport/hayon-20m3-paris/
     3        2    0     0     0          0   0.0 %  /transport/tournee-reguliere/
     2        2    0     0     0          0   0.0 %  /stockage/
     2        2    0     0     0          0   0.0 %  /mentions-legales/
     2        2    0     0     0          0   0.0 %  /blog/
     2        1    0     0     0          0   0.0 %  /transport/course-urgente/
     2        2    0     0     0          0   0.0 %  /stockage/entrepot-gennevilliers/
ℹ️ un clic tél/mail est compté sur la page où il a lieu (CallBar, pied de page…) — pas sur la page d'arrivée de la visite.
```

⚠️ **À lire avant de compter** : les **6 clics e-mail viennent tous de /recrutement/** — ce sont très probablement des candidatures, pas des clients. Contacts à visée commerciale sur la période : **3 clics téléphone** (2 sur l'accueil, 1 sur la page dépotage/empotage) **et 1 formulaire de devis**, soit 4 en 12 jours. Pas d'attribution par source (PostHog ne garde pas le référent) : impossible de dire combien viennent de Google.

## 8. Manques connus de ce relevé

- La revue hebdo du 26/10 n'a pas été produite (tâche du lundi non lancée) ; ce relevé en tient lieu pour la revue J90.
- Fiche Google : relevé des avis non fait (dernier relevé valide le 04/09) — non vérifiable depuis une session sans navigateur.
- Positions sur téléphone : non relevées (Haloscan = ordinateur).
