# Chantier — navigation principale (navbar)

> **Statut : ✅ exécuté** — PR #4 mergée le 2026-08-24 (ordre opérateur) et déployée.

| | |
|---|---|
| **Client** | `transports-ansquer` |
| **Émis le** | 2026-08-24 |
| **Origine** | retour opérateur en preview de la PR #3 : « navbar trop chargée, il manque un accès facile au blog, je suis un peu perdu en termes de navigation » |
| **Repo cible** | https://github.com/kaelix-agency/transports-ansquer — branche `feat/navbar` depuis `master`, PR dédiée |
| **Exécution** | session marketing du 2026-08-24 (entorse assumée à la frontière des repos, documentée ici : clone local disponible, contexte chaud ; le circuit nominal reste une session dans le repo du site) |

## Diagnostic (lecture de `src/components/site-header.tsx` du 2026-08-24)

1. **Le Blog est invisible en desktop.** Il n'existe que dans `secondaryNav`, servi au menu mobile et au footer. Or le blog est la vitrine SEO en montée en puissance (1er article en PR) : un visiteur desktop n'a aucun chemin direct.
2. **Barre chargée** : logo 2 lignes + 2 méga-menus de pôles + Entreprise + Contact + téléphone + CTA devis, le tout dès 1024 px (gabarit iPad) où l'espace manque.
3. **Incohérences desktop/mobile** : Recrutement et Blog absents de la barre desktop mais présents en mobile ; libellé « Entreprise » (barre) vs « L'entreprise » (mobile/footer).

## Cible

**Barre desktop** : `[logo] Transport ▾ · Stockage ▾ · Blog · Contact · [téléphone] · [CTA Devis]`

- **Blog entre dans la barre**, après les pôles (état actif sur `/blog/*`).
- **Entreprise sort de la barre** : page E-E-A-T consultative, servie par le footer et le menu mobile — pas un chemin de conversion. Recrutement idem (déjà hors barre).
- **Méga-menus des pôles conservés tels quels** : ils reflètent l'arborescence du site et leur accessibilité (survol + focus clavier + bascule tactile + Échap) est soignée — ne pas y toucher.
- **Téléphone + CTA devis conservés** : chemins de conversion n°1 d'un client local B2B.
- **Allègement visuel** : le sous-titre du logo « Port de Gennevilliers » passe en `xl:` et plus (masqué entre 1024 et 1280 px, là où la barre sature) — il reste partout ailleurs.
- **Harmonisation** : « L'entreprise » partout où le lien apparaît (mobile, footer).
- **Menu mobile inchangé** dans sa structure (pôles + liens secondaires + CTA) — il expose déjà tout.

## Hors périmètre

- Aucun changement de routes, de pages, ni du footer (il contient déjà L'entreprise / Blog / Recrutement).
- Aucun nouveau système d'animation, aucune dépendance.
- La PR #3 (article) n'est pas touchée : chantier indépendant, branché sur `master`.

## Critères d'acceptation

- [ ] Blog cliquable dans la barre desktop, état actif correct.
- [ ] Entreprise absente de la barre desktop, toujours accessible footer + mobile sous le libellé « L'entreprise ».
- [ ] Rien ne déborde ni ne passe à la ligne à 1024 px.
- [ ] Accessibilité préservée : Échap, focus, `aria-expanded`, bascule tactile — comportements existants intacts.
- [ ] `npm run build` vert ; e2e `accessibilite` et `blog` verts.
- [ ] Gate opérateur : merge de la PR par l'opérateur uniquement.
