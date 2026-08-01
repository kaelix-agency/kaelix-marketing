# Prompts d'exécution — <NOM DU CLIENT>

<!--
GABARIT — copié vers clients/<slug>/prompts/README.md à la création du premier prompt.
Convention 2026-07-11 (docs/rationnel-des-choix.md §1.9).
-->

Prompts destinés au **repo du site du client** : ils déclenchent des PR côté site, puis servent de trace — qu'a-t-on demandé, quand, et qu'est-ce qui a été déployé.

## Règles

- **Un prompt = un fichier** nommé `AAAA-MM-JJ-<slug>.md`. Jamais d'append à un prompt existant : un fichier unique en mode append devient illisible dès le troisième lot et mélange l'exécuté avec l'en-attente.
- **Un prompt émis ne se réécrit pas.** Un nouveau constat = un nouveau fichier daté. C'est une trace d'audit, au même titre que `tracking.md`.
- Chaque fichier porte un **bandeau Statut** en tête, mis à jour au fil de l'eau — et la ligne correspondante de l'index ci-dessous suit.

**Statuts** : 🕓 `brouillon` · 📤 `émis` (transmis / PR ouverte) · ✅ `exécuté` (mergé et déployé) · ⛔ `abandonné`

## Index

| Fichier | Type | Période / objet | Statut |
|---|---|---|---|
| <!-- [`2026-08-01-refresh-pages-services.md`](./2026-08-01-refresh-pages-services.md) --> | <!-- contenu / technique / correctif --> | | |
