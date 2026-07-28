---
description: Rafraîchir un contenu existant sous-performant (phase 5 → action)
argument-hint: <slug-client> <url> <raison: ctr|position|technique|date>
---
Refresh pour `$ARGUMENTS`.

0. **Garde-fou 90 jours** : vérifie dans `tracking.md` la date de publication. Si le contenu a **moins de 90 jours**, refuse le refresh (sauf raison `technique` bloquante ou erreur factuelle avérée) et explique : Google est en phase de test, la position n'est pas stabilisée, toucher le contenu maintenant fausse le test et retarde la stabilisation.
1. Lis le brief client et la ligne correspondante de `tracking.md`.
2. Diagnostic selon la raison :
   - `ctr` (fortes impressions / faible CTR) → retravailler title + meta description + accroche d'intro uniquement. Ne pas réécrire le corps.
   - `position` (bloqué positions 4-20) → approfondir le contenu (sections manquantes vs SERP via Haloscan MCP), renforcer le maillage interne entrant, enrichir les entités. C'est le levier le plus rentable du SEO : pousser l'existant vers le top 3.
   - `technique` → corriger les findings signalés (Cuik MCP).
   - `date` → actualiser chiffres/exemples selon la typologie (actu : mettre à jour l'actualité ; guide : compléter les manques — ~80 % du contenu reste identique), mettre à jour dateModified.
3. Passer le skill `fact-check` sur les parties modifiées.
4. Applique les modifications dans le dépôt du site (branche + PR), gate identique à `/write`.
5. Mets à jour `tracking.md` (date de refresh, raison, nature des changements).
