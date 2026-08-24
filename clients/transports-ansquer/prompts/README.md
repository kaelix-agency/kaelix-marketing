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
| [`2026-08-02-chantier-pipeline-mdx-v2.md`](./2026-08-02-chantier-pipeline-mdx-v2.md) | technique | pipeline MDX + whitelist v2 + 5 exigences d'affichage + bascule noindex (prérequis publication 08/2026) | 🕓 brouillon |
| [`2026-08-06-chantier-horaires-schema-site.md`](./2026-08-06-chantier-horaires-schema-site.md) | technique | horaires réels dans le schema LocalBusiness + page contact (écart 24/7) — PR #2 site | ✅ exécuté |
| [`2026-08-24-chantier-navbar.md`](./2026-08-24-chantier-navbar.md) | technique | navbar : Blog dans la barre desktop, Entreprise → footer/mobile, allègement 1024 px, harmonisation libellés | ✅ exécuté |
