# Demande d'accès API Google Business Profile — dossier KAELIX

> Préparé le 2026-10-15 (migration cloud, étape 3). Objectif : publier les réponses aux avis
> après GO opérateur et relever automatiquement les avis/notes pour les rapports mensuels —
> l'interface GBP est inaccessible aux outils (iframes/fenêtres hors de portée, 4 tentatives
> août-septembre), l'API est la seule voie d'automatisation propre.
> Source officielle du processus : https://developers.google.com/my-business/content/prereqs

## 1. État des prérequis (vérifié le 15/10)

| Prérequis Google | État KAELIX |
|---|---|
| Fiche GBP vérifiée et active depuis +60 jours (peut être celle d'un client géré) | ✅ fiche Transports Ansquer, accès gestionnaire repris par le compte KAELIX le 20/08 |
| Site web de l'entreprise renseigné sur la fiche | ✅ transportsansquer.fr |
| Projet Google Cloud | ✅ projet existant (créé le 03/09 pour la Search Console directe) |
| Compte « Organization » GBP (recommandé pour les agences) | 🕓 à créer si absent — via le centre d'aide GBP, 5 min |
| Email demandeur = propriétaire ou gestionnaire de la fiche | ⚠️ utiliser le compte Google KAELIX qui détient l'accès à la fiche Ansquer (PAS un compte perso sans accès) |

## 2. Le geste opérateur (unique) : soumettre le formulaire

1. Google Cloud Console → sélectionner le projet KAELIX (celui de la GSC) → tableau de bord, carte « Project info » → **noter le numéro de projet** (project number, pas l'ID).
2. Ouvrir le **formulaire de contact API GBP** (« Application for Basic API Access ») depuis la page prérequis ci-dessus, **connecté avec le compte Google gestionnaire de la fiche**.
3. Réponses à utiliser :
   - Entreprise : KAELIX — agence web/SEO B2B (kaelix.fr)
   - Cas d'usage : gestion des fiches Business Profile de clients TPE/PME sous mandat ; lecture des avis pour reporting mensuel et publication de réponses aux avis **après validation humaine** ; volumes très faibles (quelques fiches, quelques appels/jour)
   - Numéro de projet : celui relevé en 1
   - Email : le compte gestionnaire de la fiche
4. Envoyer. Google répond par email (délai constaté : quelques jours à quelques semaines).

## 3. Vérifier l'accord

Cloud Console → APIs & Services → Quotas (API Business Profile) : **0 QPM = pas encore approuvé ; 300 QPM = approuvé**.

## 4. Après l'accord (session claude.ai, guidée)

1. Activer les APIs Business Profile sur le projet (page « Basic setup » de la doc).
2. ⚠️ Contrairement à la GSC, l'API GBP ne fonctionne **pas** avec le compte de service : il faut un **OAuth du compte gestionnaire** (écran de consentement + refresh token). Le token se stocke **hors repo**, comme la clé GSC (`C:\Users\Axel\.kaelix\`) — jamais dans le chat ni dans git.
3. Script `scripts/gbp-fetch.mjs` (à créer sur le modèle de `gsc-fetch.mjs`) : `reviews` (relevé pour les rapports, lève la réserve « avis non relevés » du bandeau) et `reply` (publication d'une réponse validée au gate — jamais automatique, invariant 2).
4. Mettre à jour `avis.md`/`/review-response` : le circuit devient détection → brouillon → GO opérateur → **publication par script**.

## 5. En cas de refus

Re-vérifier les prérequis (fiche, site, email gestionnaire) et re-soumettre. Le refus n'est pas définitif.
