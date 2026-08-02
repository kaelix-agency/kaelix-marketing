# Prompts d'exécution — Transports Ansquer

Prompts destinés au **repo du site du client** : ils déclenchent des PR côté site, puis servent de trace — qu'a-t-on demandé, quand, et qu'est-ce qui a été déployé. Le dossier accueille aussi les **livrables de communication client** (drafts de messages), qui suivent les mêmes règles de trace.

## Règles

- **Un prompt = un fichier** nommé `AAAA-MM-JJ-<slug>.md`. Jamais d'append à un prompt existant : un fichier unique en mode append devient illisible dès le troisième lot et mélange l'exécuté avec l'en-attente.
- **Un prompt émis ne se réécrit pas.** Un nouveau constat = un nouveau fichier daté. C'est une trace d'audit, au même titre que `tracking.md`.
- Chaque fichier porte un **bandeau Statut** en tête, mis à jour au fil de l'eau — et la ligne correspondante de l'index ci-dessous suit.

**Statuts** : 🕓 `brouillon` · 📤 `émis` (transmis / PR ouverte) · ✅ `exécuté` (mergé et déployé) · ⛔ `abandonné`

## Index

| Fichier | Type | Période / objet | Statut |
|---|---|---|---|
| [`2026-08-02-questions-onboarding-client.md`](./2026-08-02-questions-onboarding-client.md) | communication client | questions en attente de l'onboarding (first-party, NAP, GBP, photos) | 🕓 brouillon |
