# Revue hebdo — Transports Ansquer — 2026-09-02

| | |
|---|---|
| **Client** | `transports-ansquer` |
| **Date de la revue** | 2026-09-02 (mardi) — **produite en manuel** : le Planificateur Windows n'est pas posé (chantier jamais exécuté — aucune tâche, aucun script `run-scheduled.ps1`, aucun `logs/`), la revue du lundi 31/08 n'a donc pas tourné |
| **Période** | S36, du 29/08 au 02/09/2026 |
| **Sources** | repo marketing + repo site (git), fiche GBP (relevé Chrome du 02/09), Haloscan (relevés du 28/08, non re-scrapés) |
| **Sources empêchées** | ⚠️ Search Console via Cuik : **différé** (décision opérateur) → aucune métrique ; ⚠️ GBP insights/BrightLocal : non fournis |
| **Statut** | interne — 🕓 brouillon |

---

## 1. Constats

- **Aucune activité de production du 29/08 au 01/09** (aucun commit sur les 2 repos après le 28/08 16:11) : les « réalisations 29-31/08 » du rapport d'août sont **néant** — point levé au bandeau du rapport.
- **Contenus** : art. 1 (tournée) J+9, art. 2 (empotage) J+5 — fenêtre 90 j, observation seule. Positions non re-relevées cette semaine (relevé Haloscan du 28/08 : 1er signal art. 1 pos. 35).
- **Décisions du 02/09 exécutées** : doctrine **zéro sollicitation** (invariant 14) répercutée partout ; **adresse arbitrée = 51** (relevé fiche : « Quai 8, 51 Rte Principale du Port Bât G1 ») — site déjà conforme, aucune PR ; **lien d'avis relevé** (`g.page/r/CSTJAaXNYqRfEBM/review`) → ligne permanente du rapport.
- **Rapport d'août** : tous les points « à confirmer » levés ou reformulés prudemment → **prêt pour validation opérateur** (to-do #4).

## 2. Règle des 90 jours

Tout le site + 2 articles en fenêtre de test. Aucune action. Exception programmée inchangée (lien renvoi palettes à la sortie de l'article 09).

## 3-6. Diagnostic / re-check / équilibre / métriques

Sans objet ou empêchés (aucun contenu ≥ 90 j ; re-check non dû ; GSC différée — aucune donnée, rien d'inventé).

## 7. Plan d'action S36 (02-04/09)

| # | Action | Command | Priorité | Note |
|---|---|---|---|---|
| ① | GO opérateur sur la **reco palettes** (ré-angle vs glissement) — J-7 ≈ 07/09 | gate | P1 | doctrine : plus aucune collecte possible → trancher, pas attendre |
| ② | `/research` du **comparatif P1 ⭐** « transport dédié / messagerie / coursier » | `/research` | P1 | first-party complet au stock ; sur GO opérateur |
| ③ | Validation + émission du **rapport d'août** (✅ → PDF → 📤) | gate + `npm run report:pdf` | P1 | plus aucun point client bloquant |
| ④ | Checklist GBP champs manuels (hors adresse) | manuel (to-do #2) | P2 | dernière ligne avant « fiche à jour » |
| ⑤ | Planificateur Windows (weekly lundi + report le 1er) | manuel (to-do #5) | P2 | au go opérateur — 2 échéances déjà manquées (31/08, 01/09) |

## 8. Plan éditorial

Août : 2/2 publiés. Septembre : comparatif P1 ⭐ prêt (stock complet) ; palettes P2 en attente du GO ré-angle/glissement (le first-party manquant ne sera **jamais** collecté — doctrine) ; pas de dérive structurelle.

## To-do opérateur

Mise à jour du 02/09 : #1 retirée (doctrine), #3 close (adresse 51), #4 allégée, #7 ajoutée — détail `todo-operateur.md`.
