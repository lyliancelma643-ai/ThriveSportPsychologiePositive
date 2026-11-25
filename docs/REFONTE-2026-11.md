# Refonte du site THRIVE — novembre 2026 (brief de travail)

Base de code : branche `claude/clever-maxwell-8gqs6c` (gamme V3, 15 oct.) + pages légales de
`claude/jolly-rubin-1o67s1`. Document de référence : `docs/AUDIT-SITE-THRIVE-COMPLET-2026-11-03.md`
(plan, conformité), mis à jour par les décisions prises jusqu'au 18 nov. 2026 (ci-dessous).

## Ce qui a changé depuis l'audit du 3 nov.
- **Focus 60/30/10** : 60 % app THRIVE Maison. Le site met l'app en premier, le présentiel ensuite.
- **THRIVE Maison** : freemium. Gratuit = 1 activité/semaine sur 13 semaines ; premium = 14,99 $/mois
  ou 99 $/an, 1 mois offert. Tout gratuit jusqu'au 31 déc. 2026. App en bêta (accès sur demande).
- **Groupe** : 4 enfants max, 600 $ (offre fondatrice jusqu'au 31 mars 2027) puis 650 $.
- **Individuel** 1 500 $ · **Complet** 2 000 $ (ouvert aux places fondatrices).
- Entreprise : **THRIVE Sport Positive inc.** (statuts déposés le 16 nov.).

## Sources uniques
- **Prix, faits chiffrés, réglages** : `src/data/offre.js`. Rien d'écrit en dur ailleurs.
- **Textes** : `src/content/textes.js` (français). Les pages importent leurs textes de là.
  Si un texte manque, ajoutez-le dans ce fichier en respectant ses règles d'écriture.
- L'anglais est caché (`AFFICHER_ANGLAIS`). i18next reste installé mais forcé en `fr`.

## Plan du site
| URL | Page | Fichier |
|---|---|---|
| `/` | Accueil | `src/pages/Home.jsx` |
| `/maison` | THRIVE Maison (l'app) | `src/pages/Maison.jsx` |
| `/programmes` | Les 4 offres et leurs prix | `src/pages/Programmes.jsx` |
| `/programmes/groupe` | THRIVE Groupe | `src/pages/ProgrammeGroupe.jsx` → gabarit `src/components/programme/ProgrammePage.jsx` |
| `/programmes/individuel` | THRIVE Individuel + bloc Complet (`#complet`) | `src/pages/ProgrammeIndividuel.jsx` → même gabarit |
| `/methode` | La méthode (version courte) | `src/pages/Method.jsx` |
| `/a-propos` | À propos | `src/pages/About.jsx` |
| `/partenaires` | Partenaires (canal à 70 %) | `src/pages/Partenaires.jsx` |
| `/appel` | Réserver l'appel de 15 min | `src/pages/Appel.jsx` |
| `/confidentialite`, `/conditions` | Légal | `src/pages/legal/*` |

**Redirections 301 (vercel.json, bloc `redirects`, AVANT les `rewrites`)** :
`/prix`→`/programmes` · `/liste-attente`→`/appel` (QR code imprimé !) · `/booking`→`/appel` ·
`/evaluation`→`/appel` · `/sport`→`/` · `/zones`→`/` · `/programmes/aller-vers-les-autres`→`/programmes/groupe` ·
`/programmes/oser-essayer`→`/programmes/individuel` · `/programmes/le-moment-qui-compte`→`/maison` ·
`/programmes/maison`→`/maison` · `/pack/:slug*`→`/programmes`. Les query strings (`?source=qr`) doivent
survivre à la redirection (comportement par défaut de Vercel).

## Menu
Ordinateur : THRIVE Maison · Programmes · La méthode · Partenaires · À propos · bouton plein
« Réserver l'appel » (→ `/appel`) · lien discret « Connexion » (→ `APP_LOGIN_URL`).
Mobile : même liste + **barre fixe en bas d'écran** avec 2 boutons : « Essayer l'app » (→ `/maison#acces`)
et « Réserver l'appel » (→ `/appel`). La barre est masquée sur `/appel`.
Plus de téléphone ni de sélecteur de langue dans le menu (ils restent dans le pied de page / cachés).

## Design : on garde la forme
- Palette actuelle : marine `#1B263B`, or `#C5A059`, sauge `#8F9779`, fonds blancs et `#f8f9fa`.
  Pour du **texte** or sur fond blanc, utiliser `#8A6A2F` (contraste AA) ; `#C5A059` reste pour les
  fonds, bordures, soulignés et icônes.
- Polices : titres `font-serif` (TAN Vivre Libre), texte `font-sans`. Coins `rounded-[2rem]`,
  ombres douces, boutons pilules `rounded-full`, composant `Waves` en fond du hero.
- Visuels disponibles : `src/assets/app/*.webp` (écrans de l'app, style Lin), `src/assets/app/app-trois-ecrans.webp`
  (3 téléphones sur fond bleu nuit), `src/assets/cabri/*.webp` (mascotte Cabri, fond transparent),
  photos existantes `src/assets/*.jpg`. Toujours `loading="lazy"` sauf l'image du hero, `alt` en français.
- Mobile d'abord (390 px), puis 1440 px. Une seule colonne lisible sur mobile.

## Règles de contenu (non négociables)
- On parle au **parent**, vouvoiement. Aucune publicité adressée aux moins de 13 ans.
- Interdits (sauf phrase de démarcation « THRIVE n'est pas une thérapie ») : thérapie, traitement, soigner,
  guérir, diagnostic, garanti, prouvé, validé scientifiquement. Ni « pack », ni « + tx », ni « 97 $ ».
- Aucun compteur de places, aucun « X familles inscrites », aucun témoignage, aucune note, aucun logo client.
- Ne jamais afficher « Centre Saint-Denis » ni « Rivard » : le lieu = `ENTREPRISE.lieu`.
- Aucune donnée sur l'enfant dans les formulaires du site (Loi 25).

## Formulaires → Supabase `public.waitlist` (projet THRIVE-CA-APP, insert `anon` autorisé)
Colonnes utilisables : `first_name` (requis), `email` (requis), `phone` (requis, NOT NULL — chaîne
vide permise pour le formulaire bêta de Maison), `source` (via `readSource`), `pack`
(NULL ou `OSER_ESSAYER` | `ALLER_VERS_LES_AUTRES` seulement — contrainte CHECK), `call_preference`
(NULL ou `matin|midi|apres-midi|soir|fin-de-semaine|peu-importe`), `notes` (texte libre : y mettre
`type=appel|maison-beta|partenaire`, l'intérêt, le code partenaire `?code=`, les UTM),
`consent` = `true` (requis par la policy), `status` = défaut. Ne PAS envoyer `child_*`, `age_group`.
Code partenaire et UTM : lus à l'arrivée sur n'importe quelle page, gardés dans `sessionStorage`.

## Mesure
Retirer Google Analytics (`gtag`, `/analytics.js`) : chargé sans consentement (Loi 25). Le remplacer par
`@vercel/analytics` (sans témoins) — à activer ensuite dans le tableau de bord Vercel.
