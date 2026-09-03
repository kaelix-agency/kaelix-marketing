---
description: Onboarder un nouveau client — stratégie, ciblage, baseline, fichiers de connaissance
argument-hint: <slug-client> <type: saas|local|ecommerce> <domaine>
---
Onboarding du client `$ARGUMENTS`.

1. Crée `clients/<slug>/` en copiant les gabarits de `clients/_template/` : `client-brief.md`, `tracking.md` (+ `nap.md` seulement si type local/ecommerce avec point de vente). Les dossiers `prompts/`, `reports/` et `audits/` se créent au premier livrable de chaque type (avec leur README d'index) ; `content-plan.md` est produit par `/content-plan`, pas ici.
2. Interroge-moi pour remplir le brief : activité, offre, cibles, zone (si local), concurrents, ton souhaité, données first-party disponibles, dépôt git du site, canaux actifs, analytics (PostHog ? autre ?), et **niveau de product-market fit** (voir garde-fou en fin de commande).
3. **Ciblage SEO (Haloscan MCP) — méthode en 3 étapes ordonnées, ne pas inverser** :
   - **Étape A — Concurrents d'abord** : pour chaque concurrent, quels mots-clés leur apportent RÉELLEMENT du trafic aujourd'hui. C'est le gisement d'idées validées par le marché.
   - **Étape B — L'existant ensuite** : inventaire des pages du client déjà positionnées entre les **positions 4 et 20** → les pousser vers le top 3 est le levier le plus rentable (hors top 3 = très peu de trafic ; optimiser l'existant augmente le trafic sans rien créer). Ces pages deviennent les premières tâches `refresh`.
   - **Étape C — Nouveaux mots-clés en dernier**, dans cet ordre de priorité : (1) ceux qui rapportent de l'argent (transactionnel/commercial), (2) ceux de la phase de choix (comparaisons, alternatives), (3) l'informationnel longue traîne. Clustering par intention, volumes/difficulté, anti-cannibalisation.
4. **Architecture de contenu selon le type** :
   - **SaaS — les pages business AVANT le blog**, dans cet ordre : accueil + tarifs (requêtes « marque + tarif/pricing ») → pages fonctionnalités (mots-clés à douleur forte) → pages comparaison « marque vs concurrent X » (tous les concurrents) et « alternatives à concurrent X » → pages témoignages/avis (capter ce trafic plutôt que le laisser à Trustpilot) → cas clients → blog en dernier. Le blog sert à équilibrer le trafic et pousser de la puissance vers les pages business. Recommander 1-2 **free tools** alignés sur les mots-clés commerciaux (conversion observée 10-15 % vs 0,5-2 % pour des pages classiques).
   - **Local** : pages service×ville (zones réelles), fiche GBP, avis, citations.
   - **E-commerce** : pages catégories/produits d'abord, puis comparatifs, puis blog.
5. **Baseline technique** : état Search Console si la propriété est accessible (`node scripts/gsc-fetch.mjs query/sitemaps/check404` — le compte de service doit être ajouté à la propriété du client) ; crawl initial ⚠️ à re-outiller (§1.24). Résume les 5 problèmes les plus importants. Vérifier notamment que le contenu est servi en HTML complet (SSG/SSR) — les IA lisent mal le rendu JavaScript client.
6. Si local : m'aider à formaliser le **NAP source de vérité** dans `nap.md` (nom exact, adresse, téléphone, horaires, catégories, variantes acceptées/interdites) et lister les annuaires FR à traiter par priorité (GBP d'abord, puis Pages Jaunes, 118000, Mappy, Yelp France, chambre des métiers, annuaires sectoriels BTP si pertinent).
7. Rédige le `client-brief.md` complet et initialise `tracking.md`.
8. Termine par un plan des 5 premiers contenus/actions, priorisés selon la méthode (l'existant 4-20 passe souvent AVANT la création), **puis propose d'enchaîner sur `/content-plan <slug>`** pour le plan éditorial pluri-mois (clusters, sujets datés sur 6 mois, volume calé sur la capacité de relecture). Les 5 premières actions donnent le point de départ ; le plan éditorial donne la trajectoire — et c'est lui qui devient le livrable présentable au client une fois validé.

**Garde-fou PMF** : si le client n'a pas de product-market fit (pas de ventes régulières, proposition de valeur non validée), le signaler honnêtement : le SEO est une panoplie post-PMF — d'abord vendre, ensuite se référencer. Proposer une mission adaptée plutôt qu'un plan de contenu voué à l'échec.
Ne rien publier à cette étape. Tout livrable = fichiers de ce repo.
