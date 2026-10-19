# Tracking — KAELIX

| | |
|---|---|
| **Client** | `kaelix` |
| **Ouvert le** | 2026-10-16 |
| **Dernier relevé global** | **2026-10-19** (première revue hebdo — GSC sans donnée, propriété du 17/10 ; Haloscan `NO_RESULT` ; PostHog ⚠️ empêché par les permissions de la session) |

---

## 1. Journal des contenus

| Date publi. | Type | Mot-clé | URL | Typologie | Persona | Statut | J30 | J60 | J90 | Dernier relevé | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |

> Existant au 16/10 (avant mission — dates de publication inconnues, à relever dans le repo web-agency pour poser les fenêtres 90 j) : accueil, /tarifs, 3 pages services, /realisations (×3 études de cas), /a-propos, /audit-gratuit, /contact, /blog.
>
> **Dates relevées (git web-agency, audit du 17/10)** : la plupart des routes créées le **25/04/2026** (accueil, /tarifs, /a-propos, /audit-gratuit, /contact, /blog, /realisations, /agence-web-tpe-pme, /developpement-site-sur-mesure, /alternative-wordpress-performance, /site-vitrine-artisan, /site-web-restaurant, /process, /garanties) ; `/services/site-vitrine` et `/services/seo-performance` **16/09** ; `/services/application-web` 17/09 ; 8 pages villes `/agence-web/[ville]` **07/09** ; `/services/boutique-en-ligne` **12/10** ; articles blog **10, 15, 20/02/2026**. `/tarifs`, `/services/seo-performance`, `/cgv`, `/politique-confidentialite` refondus le **17/10** (v6). Le contenu pré-mission n'entre pas dans la règle des 90 j ; état d'indexation au 17/10 : **seul l'accueil est indexé** (voir [`audits/2026-10-17-tech-audit.md`](./audits/2026-10-17-tech-audit.md)). **État au 19/10** (inspect après les 10 demandes du 17/10) : **6 indexées** en version v6 + PR #30 (`/`, /tarifs, /agence-web-montpellier, /audit-gratuit, /realisations, /a-propos — crawl 17/10 17 h 34-17 h 40) ; /services/site-vitrine et /services « découvertes, non crawlées » ; /services/seo-performance et /services/boutique-en-ligne « inconnues » ; /blog noindex volontaire.

## 2. Historique des revues hebdo

| Date | Fichier | Résumé condensé |
|---|---|---|
| 2026-10-19 (S43) | [`reports/2026-10-19-revue-hebdo.md`](./reports/2026-10-19-revue-hebdo.md) | **Première revue.** GSC : 0 ligne sur 7 j et 28 j (propriété du 17/10 — première lecture le 26/10, baseline 28 j vers le 15/11). Indexation : **6/10 demandes abouties en < 1 h** le 17/10 ; 4 pages services encore dehors, aucune re-demande. Sitemap lu par Google le 10/10 (compteur 36/0 périmé ; 26 URLs en ligne), check404 propre. Haloscan `NO_RESULT`. **PR web-agency#31 (3 × 301 du gate) ouverte, non mergée** ; **PR #25 (boutique sans engagement, pré-v6) en conflit à trancher**. Plan validé, novembre 2 `prévu`, aucune dérive. ⚠️ PostHog + Lighthouse mobile ×3 empêchés (permissions de la session). Plan : ① GO MERGE #31 · ② sort de #25 · ③ `/research` accueil · ④ rattraper PostHog/Lighthouse · ⑤ fiche GBP (SIRET + horaires) |
