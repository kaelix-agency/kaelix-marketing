# Cadres Concept — relevé direct des positions Google (2026-10-23, 10 h 30)

Protocole : google.fr, `hl=fr&gl=fr`, **ordinateur**, Chrome d'Axel (compte Google connecté → personnalisation possible : le site a été visité ces jours-ci), lecture de l'ordre des blocs « Résultats Web » (hors comparateur Shopping, hors Aperçu IA, hors sponsorisés). Les 10 recherches de `prospect.json`. Contre-source : SERP Haloscan du 11/10 (ordinateur, non personnalisée), colonne de droite.

| Recherche | Cadres Concept | Eurodécor | Kunstloft | 1ᵉʳ organique | Haloscan 11/10 (CC) |
|---|---|---|---|---|---|
| tableau métal mural | **3ᵉ** (+ cité 2× dans l'Aperçu IA) | hors top 8 | 2ᵉ | Amazon | inconnue |
| tableau métal déco murale | **1ᵉʳ** | 4ᵉ | 5ᵉ | Cadres Concept | inconnue |
| tableau métal animaux | **2ᵉ** | — | — | JD Boutique | inconnue |
| horloge murale industrielle engrenages | absent | absent | absent | Amazon | inconnue |
| tableau métal industriel | absent | absent | 2ᵉ | Amazon | absent |
| tableau métal déco | **2ᵉ** | 3ᵉ | 4ᵉ | Amazon | 2ᵉ |
| tableau métal | **3ᵉ** (+ cité dans l'Aperçu IA) | 1ᵉʳ | 2ᵉ | Eurodécor | 2ᵉ |
| tableau métal et bois | **1ᵉʳ** | 3ᵉ | — | Cadres Concept | 1ᵉʳ |
| horloge industrielle | absent | absent | absent | Murs du temps | absent |
| horloge industrielle bois et métal | absent | absent | absent | Murs du temps | absent |

**Synthèse** : top 3 sur **6 recherches sur 10** (dont deux 1ᵉʳ), absent sur **4** (les trois « horloge » et « tableau métal industriel »). Deux sources indépendantes (relevé du jour, Haloscan du 11/10) concordent sur les têtes génériques : le biais de personnalisation ne suffit pas à expliquer deux 1ᵉʳ.

**Ce qui est vrai dans l'audit du 21/10** : l'absence totale sur les horloges (une famille de produits entière), la vitesse (10,4 s de LCP confirmés le 22/10), la fiche au mauvais nom.

**Ce qui est faux** : « présent sur 8 recherches sur 10, mais entre la 13ᵉ et la 23ᵉ place » et « jamais dans les 3 premiers ». Sur les têtes génériques, Cadres Concept est **dans le top 3, souvent devant Eurodécor**. Le vrai problème de visibilité n'est pas la position : c'est que, sur ces recherches, l'organique arrive **après un comparateur Shopping (où il n'est pas) et un Aperçu IA** — et que la 2ᵉ famille de produits (horloges) n'existe pas pour Google.

**Conséquences proposées** (gate Axel) :
1. Teaser Cadres Concept (`audit.json`, point 2 et graphique « présence ») : reformuler — « Vous êtes dans les 3 premiers sur 6 recherches sur 10, souvent devant Eurodécor. Mais sur ces recherches, le client voit d'abord Google Shopping, où vous n'êtes pas, puis un résumé par IA ; et sur les horloges, vous n'existez pas. » Plan : Shopping + page horloges + contenus (inchangé sur le fond, l'argument est plus juste et plus vendeur).
2. `/audit-gratuit` sur kaelix.fr (extrait anonymisé) : même correction du point 2 et du verdict — **exception « erreur factuelle avérée » de la règle des 90 jours**, PR courte.
3. Dire la correction au client au prochain contact (il a vu le teaser) : « on a re-vérifié, vous êtes mieux placé qu'on ne l'a dit, le vrai sujet c'est Shopping et les horloges ».
4. Méthode : un relevé manuel de positions se fait désormais **sur ordinateur et téléphone, navigation privée**, et se confronte à Haloscan avant d'entrer dans un audit (leçon à écrire dans `prospects/README.md`).
