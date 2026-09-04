---
description: Rédiger un brouillon de réponse à un avis client (gate renforcé — réponse publique, JAMAIS de publication automatique)
argument-hint: <slug-client> [référence de l'avis]
---
Brouillon de réponse d'avis pour `$ARGUMENTS`. Une réponse d'avis est la **voix publique du client** : gate renforcé (invariant 2), **aucune publication sans validation explicite de l'opérateur** — jamais, même si tout semble évident.

1. **Lis** `clients/<slug>/client-brief.md` §3 (ton, vouvoiement, interdits) et `clients/<slug>/avis.md` (registre : l'avis à traiter, verbatim).
2. **Rédige le brouillon** — règles de la marque :
   - **Remercier + personnaliser en reprenant UN élément concret de l'avis** (un fait que l'auteur a réellement écrit — jamais inventé, jamais paraphrasé au point de trahir). C'est ce qui distingue une réponse d'une formule.
   - **Jamais de formule-type creuse** (« Merci pour votre confiance, à bientôt ! ») : chaque réponse est écrite pour cet avis-là.
   - Ton du brief : vouvoiement, sobre, concret, pas de superlatif, pas de cadratin ; les interdits client s'appliquent (pas de promesse 24/7, pas de tarif, etc.).
   - **Avis négatif (≤3 étoiles)** : réponse **courte et digne** — reconnaître sans se justifier longuement, jamais de débat public, jamais de mise en cause du client, et **proposer un contact direct** (téléphone/email du `nap.md`) pour traiter le fond hors ligne.
   - Pas de mots-clés SEO plaqués, pas de lien : une réponse d'avis parle à un humain.
3. **Trace** : ajoute l'avis (verbatim, auteur, note, date) et le brouillon dans `clients/<slug>/avis.md` (statut 🕓 réponse à valider).
4. **Notifie** : crée l'issue GitHub sur le repo marketing (canal de notification standard) —
   - Titre : `⭐ Nouvel avis <note>/5 — <prénom> — réponse à valider — <slug>` ; préfixe **🔴 URGENT** si ≤3 étoiles (réactivité double sur le négatif).
   - Corps : l'avis complet (auteur, note, texte, date) + le brouillon + la consigne « **Valider = publier puis fermer l'issue · commenter = demander une retouche** ».
5. **Publication (après le gate opérateur uniquement)** : tentative via claude-in-chrome (fiche GBP → répondre à l'avis), **budget strict 2 échecs ou 5 min** ; sinon remettre le texte final à l'opérateur pour collage manuel. Dans tous les cas : statut **📤 répondu le JJ/MM** tracé dans `avis.md` + issue fermée.
