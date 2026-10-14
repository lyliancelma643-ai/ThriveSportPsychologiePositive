# AUDIT DU SITE — ÉTAT ACTUEL (au mot près)

**Date de l'audit :** 14 octobre 2026
**Dépôt :** `lyliancelma643-ai/ThriveSportPsychologiePositive`
**Branche auditée :** `claude/clever-maxwell-8gqs6c` — **identique à `origin/main`** (commit `1e7e79c`, 23 sept. 2026).
Rien n'est en attente : `git status` est propre, local = distant. **Ce que décrit ce fichier est donc exactement ce qui est déployé.**

**Dernier commit :** `1e7e79c feat(liste-attente): le programme choisi est présélectionné et enregistré`

> Mode d'emploi : chaque texte est donné **tel qu'il s'affiche**, avec **l'endroit exact où le changer**
> (fichier + clé de traduction, ou fichier + ligne quand le texte est écrit en dur dans le code).
> Pour modifier un texte à clé : `src/locales/fr/translation.json` (français) et
> `src/locales/en/translation.json` (anglais). Pour un texte « en dur » : le fichier `.jsx` indiqué.

---

## SOMMAIRE

1. Fiche technique (stack, routes, SEO, 404)
2. **Coordonnées et chiffres — les valeurs à vérifier en priorité**
3. Éléments présents sur toutes les pages (navbar, footer, contact, `<head>`)
4. Page d'accueil `/`
5. Page Le Sport `/sport`
6. Page La Méthode `/methode`
7. Page Prix `/prix`
8. Fiche produit `/programmes/oser-essayer`
9. Fiche produit `/programmes/aller-vers-les-autres`
10. Fiche produit `/programmes/le-moment-qui-compte`
11. Page À propos `/a-propos`
12. Page Zones `/zones`
13. Landing liste d'attente `/liste-attente`
14. Tunnel de réservation `/booking`
15. **Textes présents mais jamais affichés**
16. **Anomalies et incohérences à corriger**
17. État de la version anglaise
18. Fichiers inutiles dans le dépôt
19. **Où modifier quoi — aide-mémoire**

---

## 1. FICHE TECHNIQUE

| Élément | Valeur actuelle |
|---|---|
| Stack | React 18 + Vite 4 + Tailwind 3 + react-router 7 + i18next (FR/EN) |
| Hébergement | Vercel (`vercel.json` : toutes les URL réécrites vers `/`) |
| Build | `vite build && node prerender.js` (prérendu Puppeteer pour le SEO) |
| Domaine | `https://thrivesportpositive.com` |
| App membre | `https://app.thrivesportpositive.com` (var. `VITE_APP_URL`) — connexion : `/login`, inscription : `/login?mode=signup` |
| Base de données | Supabase `kkdcgzvdmipmrgkawnky` — table `public.waitlist` (uniquement la liste d'attente) |
| Analytics | Google Tag `G-EKB597ZEF6` (`index.html`) |
| Vérification Google | `aYKo-K8mXclv2LHKTDKXc4Zwj-dW2ZycR2xzmpYfanU` |
| Réservation visio | Cal.com `thrive-sport-positive/30min` |
| Langue par défaut | FR (détection navigateur, repli FR) |

### Pages prérendues pour le SEO (`prerender.js`)
`/` · `/methode` · `/prix` · `/sport` · `/booking` · `/zones` · `/a-propos` ·
`/programmes/oser-essayer` · `/programmes/aller-vers-les-autres` · `/programmes/le-moment-qui-compte` · `/liste-attente`

### Sitemap (`vite.config.js`)
`/methode` · `/prix` · `/sport` · **`/evaluation`** · `/booking` · `/zones` · `/a-propos` · les 3 programmes.
⚠️ Le sitemap contient encore `/evaluation` (qui redirige) et **ne contient pas `/liste-attente`**.

### Toutes les routes du site (`src/App.jsx`)

| URL | Page affichée | Fichier |
|---|---|---|
| `/` | Accueil | `src/pages/Home.jsx` |
| `/sport` | Le Sport (5 disciplines) | `src/pages/Sport.jsx` |
| `/methode` | La Méthode | `src/pages/Method.jsx` |
| `/prix` | Prix / Programmes | `src/pages/Prix.jsx` |
| `/booking` | Tunnel de réservation | `src/pages/Booking.jsx` |
| `/programmes/oser-essayer` | Fiche produit | `src/pages/OserEssayer.jsx` |
| `/programmes/aller-vers-les-autres` | Fiche produit | `src/pages/AllerVersLesAutres.jsx` |
| `/programmes/le-moment-qui-compte` | Fiche produit | `src/pages/MomentQuiCompte.jsx` |
| `/a-propos` | À propos | `src/pages/About.jsx` |
| `/zones` | Zones (composant Locations seul) | `src/components/home/Locations.jsx` |
| `/liste-attente` | Landing liste d'attente (sans Navbar/Footer) | `src/pages/ListeAttente.jsx` |
| `/evaluation` | → **redirige** vers `/liste-attente` | — |
| `/pack/essential` | → **redirige** vers `/programmes/oser-essayer` | — |
| `/pack/avance`, `/pack/performance`, `/pack/diagnostic` | → **redirigent** vers `/prix` | — |
| tout le reste | 404 | `src/App.jsx` |

### 404 — textes (clés `error.*`)
- Titre : **« Page Introuvable »**
- Texte : **« Désolé, la page que vous cherchez n'existe pas. »**
- Bouton : **« Retour à l'accueil »**

---

## 2. COORDONNÉES ET CHIFFRES — LES VALEURS À VÉRIFIER EN PRIORITÉ

Ce sont les données qui apparaissent le plus souvent et qui sont **écrites en dur** à plusieurs endroits.
Si une seule change, il faut la changer **partout dans la liste**.

### Téléphone affiché : `(263) 362-2030` / `+1 (263) 362-2030` — lien `tel:+12633622030`
Présent dans :
- `src/components/layout/Navbar.jsx` lignes 46 et 89 (icône téléphone, desktop + mobile)
- `src/components/layout/Footer.jsx` ligne 31 → affiche **« +1 (263) 362-2030 »**
- `src/components/ui/ContactSection.jsx` ligne 34 → affiche **« +1 (263) 362-2030 »**
- `src/pages/ListeAttente.jsx` lignes 19-20 (`PHONE_DISPLAY` / `PHONE_HREF`) → affiche **« (263) 362-2030 »**
- `src/locales/fr/translation.json` clé `waitlist.contact.phone` → **« (263) 362-2030 »** *(texte non affiché aujourd'hui, voir §15)*

⚠️ **À vérifier :** `263` n'est pas un indicatif régional du Québec (Montréal = 514 / 438 / 450 / 579). Ce numéro est probablement à corriger.

### Courriel : `info@thrivesportpositive.com`
Présent dans : `Navbar.jsx` (l. 43, 86), `Footer.jsx` (l. 27), `ContactSection.jsx` (l. 27), `ListeAttente.jsx` (l. 21 `CONTACT_EMAIL`), `Evaluation.jsx` (l. 88), clé `waitlist.contact.email`.

### Adresse
- **« 5115 Rue Rivard, Montréal, QC H2J 2P5 »** — clé `home.locations.map1_addr`
- **« Centre Saint-Denis »** — clés `home.locations.map1_title`, `home.locations.desc_1_b1`, `home.logistics.item1_d1` (« Centre Saint-Denis (Montréal). »), `home.locations.effect1_title` (« L'Effet Centre Saint-Denis »)
- **« Montréal, 5115 rue Rivard »** — clé `waitlist_page.footer`
- **« À Montréal, au 5115 rue Rivard. »** — clé `waitlist.faq.q3_a` *(non affiché, voir §15)*
- **« À Montréal, sur le Plateau-Mont-Royal »** — `pricing.faq.q7_a`, `OserEssayer.jsx` (FAQ « Où et quand ont lieu les séances ? »)

⚠️ **Incohérence à trancher :** le site dit tantôt « Centre Saint-Denis / 5115 rue Rivard », tantôt « Plateau-Mont-Royal » (5115 Rivard **est** sur le Plateau, mais les deux formulations coexistent sans lien).

### Preuve sociale de la landing — **valeurs à tenir à jour à la main**
`src/pages/ListeAttente.jsx` lignes 16-17 :
- `SPOTS_LEFT = 2` → affiché : **« 2 places restantes »**
- `FAMILIES = 47` → affiché : **« 47 familles déjà inscrites »**
- Phrase complète (clé `waitlist_page.cohort_proof`) : **« {{spots}} places restantes · {{families}} familles déjà inscrites »**

### Dates et cohorte
- **« Cohorte du 6 septembre 2026 »** — clés `waitlist_page.eyebrow` (« Liste d'attente · Cohorte du 6 septembre 2026 ») et `waitlist_page.cohort`
- **« © 2026 Thrive Sport Positive · Montréal, 5115 rue Rivard »** — clé `waitlist_page.footer`
- **« Rejoignez la liste d'attente de la cohorte du 6 septembre 2026. »** — clé `waitlist_page.seo_desc`
- Textes non affichés mentionnant d'autres dates : `waitlist.hero.booking_dates` (« session du 6 septembre jusqu'au 29 novembre »), `waitlist.rarity.date` (« Lancement à Montréal : 6 septembre 2026 »), `waitlist.hero.microproof_1` (« 20 places seulement pour le lancement de septembre 2026 ») — voir §15.

⚠️ **À vérifier :** nous sommes le **14 octobre 2026**. La cohorte du **6 septembre 2026** est passée. Toutes les dates ci-dessus sont périmées.

### Prix (source unique : `src/data/pricing.js`)
| Programme | Prix (donnée) | Texte affiché |
|---|---|---|
| Aller vers les autres | `price: 2000`, `sessions: 26` | **« 2 000 $ + tx »** |
| Oser essayer | `price: 1500`, `sessions: 13` | **« 1 500 $ + tx »** |
| Le moment qui compte | `price: 15` (sans `sessions`) | **« 15 $ + tx »** |

Prix écrits **en dur dans les pages produit** (à changer aussi si le prix bouge) :
- `OserEssayer.jsx` : **« 1 500 $ »** + **« Soit environ 115 $ la séance. Rien à payer à l'inscription : 2 versements de 750 $ + tx, le premier à la séance 3, le second à la séance 7. »**
- `AllerVersLesAutres.jsx` : **« 2 000 $ »** + **« 26 séances sur 13 semaines. Rien à payer à l'inscription : 2 versements de 1 000 $ + tx, le premier en semaine 3, le second en semaine 7. »**
- `MomentQuiCompte.jsx` : **« 15 $ »** + **« toutes les 2 semaines »**
- Séance découverte : **« 97 $ + tx »** — dans `OserEssayer.jsx`, `AllerVersLesAutres.jsx`, et clés `pricing.proof.decouverte_title` / `pricing.faq.q3_a`
- Autres mentions de prix dans les clés : `pricing.seo.desc`, `pricing.essayer.price_note` (« Soit ≈ 115 $ la séance »), `pricing.faq.q6_a` (« environ 115 $ la séance »), `waitlist.pricing.tier_*_price`

### Chiffres de crédibilité répétés
- **« 13 séances »** / **« 13 semaines »** — partout (voir chaque page)
- **« 8 piliers »** — `method.pillars.title` (« 8 piliers. Une méthode. »), `waitlist_page.stat_pillars`
- **« 8 à 17 ans »** — `home.logistics.item2_d1` (« 8 à 17 ans. »), `waitlist_page.intro`, `pricing.hero.subtitle`, `waitlist.faq.q4_a`, `OserEssayer.jsx`
- **« 8 à 11 ans »** (premiers groupes) — `pricing.autres.f4`, `AllerVersLesAutres.jsx`
- **« 120+ Études Analysées »** — `home.hero.badge3_desc` *(non affiché, voir §15)* ; **« 120 études scientifiques »** — `about.hist_col1_desc_b` *(affiché)*
- **« +31% Performance »**, **« 3x Plus de Créativité »**, **« +11% Réussite Scolaire »** — `home.hero.badge*_desc` *(non affichés, voir §15)*
- **« 6 enfants maximum pour un coach »** — `AllerVersLesAutres.jsx` (section « Tout ce qui est inclus »)
- **« 2-5 ans »** — `home.faq.a3` (« Pour les 2-5 ans, oui. ») ⚠️ incohérent avec « 8 à 17 ans »
- **« 7-17 ans »** — `seo.home.desc` ⚠️ incohérent avec « 8 à 17 ans »

---

## 3. ÉLÉMENTS PRÉSENTS SUR TOUTES LES PAGES

### 3.1 Barre de navigation — `src/components/layout/Navbar.jsx`
Logo : `src/assets/logo.png`, `alt="Thrive Sport Positive"`, cliquable → `/`

Liens, dans l'ordre affiché (clés `nav.*`) :

| Libellé affiché | Clé | Destination |
|---|---|---|
| Accueil | `nav.home` | `/` |
| Le Sport | `nav.sport` | `/sport` |
| Réservation | `nav.booking` | **`/liste-attente`** |
| La Méthode | `nav.method` | `/methode` |
| Prix | `nav.pricing` | `/prix` |
| Zones | `nav.locations` | `/zones` |
| À Propos | `nav.about` | `/a-propos` |
| Connexion | `nav.login` | `https://app.thrivesportpositive.com/login` |

Plus : icône courriel (`info@thrivesportpositive.com`, infobulle **« Nous contacter par email »**), icône téléphone (infobulle **« Nous appeler »**), sélecteur FR/EN.
Aria du bouton Connexion (`nav.loginAria`) : **« Se connecter à votre compte Thrive »**.
Clé **non utilisée** : `nav.programs` (« Programmes ») — aucun onglet Programmes dans le menu.

### 3.2 Pied de page — `src/components/layout/Footer.jsx`
Trois blocs + copyright :

1. **« Modalités de Paiement Fractionné »** (`footer.payment`)
   > « L'Entreprise offre la possibilité de régler les "Packs" en plusieurs mensualités. Cette facilité de paiement ne constitue pas un crédit à la consommation. Le Client s'engage au paiement de l'intégralité de la somme totale définie au contrat. » (`footer.payment_desc`)
   ⚠️ Parle encore de **« Packs »**, notion retirée de l'offre.

2. **« Avis Légal (Loi 21) »** (`footer.legal`)
   > « IMPORTANT : Les services de Thrive visent l'amélioration de la performance et le développement des habiletés mentales. Le consultant n'est pas psychologue ni psychothérapeute membre de l'OPQ. » (`footer.legal_desc`)

3. **« Contact »** (en dur) : `info@thrivesportpositive.com` et `+1 (263) 362-2030`

Copyright : **« © 2026 Thrive Sport Positive. Tous droits réservés. »** (année générée automatiquement + `footer.copyright`)

### 3.3 Bloc Contact + Widget Diagnostic — `src/components/ui/ContactSection.jsx`
Affiché en bas de : **Accueil**, **Le Sport**, **La Méthode**.
- Titre : **« Une question spécifique ? »** (`contact.title`)
- Texte : **« Vous préférez échanger de vive voix ou par écrit avant de vous lancer ? Nous sommes là pour vous guider. »** (`contact.desc`)
- Courriel et téléphone (en dur).
- À gauche : le **Widget Diagnostic** (`src/components/ui/DiagnosticWidget.jsx`) — questionnaire en 3 questions.
  ⚠️ **Ce widget est cassé**, voir §16.1.

### 3.4 `<head>` par défaut — `index.html`
- `<title>` : **« Thrive Sport Positive | Confiance & Performance »**
- `<meta description>` et `og:description` : **« Thrive - Le premier service de tutorat sportif à Montréal supervisé par la psychologie positive. Transformez le doute de votre enfant en compétence durable. »**
- `og:title` : **« Thrive Sport Positive | Confiance & Performance »**
- `og:image` : `https://thrivesportpositive.com/favicon.png` ⚠️ un favicon comme image de partage social : image très petite, mauvais rendu sur Facebook/LinkedIn
- `theme-color` : `#1B263B`

⚠️ Le mot **« tutorat sportif »** du `<meta description>` ne correspond plus au positionnement actuel (programmes de développement des habiletés).

---

## 4. PAGE D'ACCUEIL — `/`

**SEO** (`seo.home.*`)
- Titre : **« Psychologie Sportive & Préparation Mentale pour Jeunes | THRIVE »**
- Description : **« Accompagnement en psychologie positive pour jeunes athlètes (7-17 ans). Développez leur confiance, gestion du stress et performance. Découvrez la méthode THRIVE. »**
- Données structurées : `SportsActivityLocation`, Montréal QC CA, rayon 50 km, `priceRange: "$$"`

**Sections affichées, dans l'ordre :**
Hero → Bandeau d'autorité → Notre Méthode en 3 Étapes → Votre enfant mérite plus → Pourquoi choisir Thrive → Informations Pratiques → Nos Lieux d'Intervention → Questions Fréquentes → Contact + Diagnostic

### 4.1 Hero — `src/components/home/Hero.jsx`
- Titre, ligne 1 : **« Développement personnel de votre enfant »** (`home.hero.heading_1`)
- Titre, ligne 2 : **« par le sport et pour la vie. »** (`home.hero.heading_2`)
- Sous-titre (assemblé en 9 morceaux, `home.hero.subtitle_*`) :
  > « Un coaching individuel alliant **entraînement technique** et **psychologie positive** pour bâtir la confiance et la *compétence réelle* de votre enfant avec le **modèle THRIVE**. »
- Bouton principal : **« Réserver ma place gratuitement »** → `/liste-attente?source=site`
  ⚠️ **Texte écrit en dur** dans `Hero.jsx` ligne 71 — pas traduit, pas dans les fichiers de langue.
- Bouton secondaire : **« Rencontrer un de nos coachs gratuitement »** (`home.hero.cta`) → ouvre Cal.com `thrive-sport-positive/30min`
- Image : `src/assets/pexels-gustavo-fring-6720436.jpg`, `alt="Thrive Sport Positive - Athlètes en action"`

Clés **non affichées** du hero : `badge1_title`…`badge5_desc` (les 5 badges « Résultat prouvé / +31% Performance », etc.). Voir §11.

### 4.2 Bandeau d'autorité — `src/components/home/AuthorityBar.jsx`
Affiche **deux** éléments seulement :
- **« Expertise Sportive & Académique »** (`home.authority.item2`)
- **« Approche Scientifique UNIQUE »** (`home.authority.item3`)

⚠️ `home.authority.item1` (**« Supervisé par l'UdeM »**) existe dans les traductions mais **n'est pas affiché** (non appelé dans le composant).

### 4.3 Notre Méthode en 3 Étapes — `src/components/home/ProcessSteps.jsx` (clés `home.process.*`)
- Titre : **« Notre Méthode en 3 Étapes »**
- Sous-titre : **« Un processus structuré pour transformer le potentiel en performance réelle. »**

| Badge | Titre | Texte |
|---|---|---|
| **S1–S2** | **Ancrer** | « Établir le lien de confiance, mesurer la baseline et poser les fondations des compétences mentales. L'enfant apprend à se connaître comme athlète. » |
| **S3–S10** | **Développer** | « Enseigner et pratiquer les 6 interventions. L'enfant expérimente, rate, réajuste et progresse dans un cadre sécurisant. » |
| **S11–S13** | **Intégrer** | « Consolider les acquis, mesurer la progression finale et préparer l'autonomie. L'enfant utilise ses outils seul — sur la glace et dans la vie. » |

### 4.4 « Votre enfant mérite plus… » — `src/components/home/PainPoints.jsx` (clés `home.pain_points.*`)
- Citation d'ouverture : **« Ancrer les bases, développer les forces, intégrer durablement. »**
- Titre : **« Votre enfant mérite *plus qu'un simple entraînement.* »** (`heading_1` + `heading_italic` ; `heading_2` est vide)
- Paragraphe 1 : « Dans beaucoup de parcours sportifs, on travaille la technique, mais on laisse de côté ce qui fait tenir un enfant dans la durée : **la confiance, la gestion des émotions, la concentration et la capacité à rebondir après l'erreur.** »
- Paragraphe 2 : « Quand ces bases ne sont pas construites, l'enfant peut progresser un temps, puis stagner, se crisper ou perdre son plaisir. Thrive aide les jeunes sportifs à développer une transformation plus profonde : **des compétences mentales et techniques qui s'installent dans le temps.** »
- Liste (`list_1` à `list_4`) :
  1. « Il apprend à mieux gérer la pression et l'erreur, à l'entraînement comme en match. »
  2. « Il développe des réflexes mentaux utiles à l'école, en sport et dans les moments de tension du quotidien. »
  3. « Il gagne en stabilité, en autonomie et en confiance, avec des acquis qui durent au-delà de la saison. »
  4. « Il construit des outils concrets qui l'aident aussi dans sa vie quotidienne, et pas seulement sur le terrain. »
- Conclusion : « Thrive ne cherche pas seulement à améliorer une performance. Nous construisons des fondations durables pour que votre enfant avance avec plus de solidité, plus de clarté et plus de plaisir, maintenant et pour la suite. »
- Boutons : **« Découvrir la Méthode »** → `/methode` · **« Prendre RDV Coach (30 min) »** → Cal.com 30min
- Image : `alt="Joueur dans l'ombre"`

### 4.5 « Pourquoi choisir Thrive ? » — `src/components/home/Comparison.jsx` (clés `home.comparison.*`)
- Titre : **« Pourquoi choisir Thrive ? »**
- Accroche : « Parce qu'entre le club de sport et la thérapie, il manquait une approche intermédiaire: positive, individuelle, structurée et mesurable. »
- Texte : « Chez Thrive, votre enfant ne reçoit pas seulement du temps d'activité. Il bénéficie d'un mentor dédié, d'une progression documentée et d'outils concrets pour développer sa confiance, sa concentration et sa robustesse mentale. »
- Sous-titre : **« Ce qui change vraiment »**
- Tableau (en-têtes : **Critère** / **Club Classique** / **Thrive**) :

| Critère | Club Classique | Thrive |
|---|---|---|
| Attention | Un coach répartit son attention entre plusieurs jeunes | Un mentor dédié accompagne un seul enfant à la fois |
| Nature de l'accompagnement | Coaching sportif standard ou soutien générique | Mentorat sportif positif, structuré et individualisé |
| Objectif | Faire progresser dans le sport | Développer aussi la confiance, la régulation émotionnelle et les life skills |
| Suivi | Peu ou pas de trace écrite | Progression documentée et Scorecard finale |
| Valeur pour le parent | Espérer que "ça aide" | Voir ce qui évolue, pourquoi cela compte, et comment l'enfant progresse |

- **« Pourquoi cette approche est différente »** : « La plupart des solutions classiques vendent une séance, une présence ou une correction. Thrive, lui, réduit l'incertitude et rend la progression visible. » / « Vous n'achetez pas un bloc de temps: vous investissez dans une trajectoire de développement claire, rassurante et documentée. »
- **« Ce que vous obtenez »** (6 lignes) : « 1 mentor dédié à votre enfant. » · « 13 séances structurées sur environ 3 mois. » · « Une méthode positive et scientifiquement ancrée. » · « Des outils concrets utiles dans le sport et dans la vie. » · « Un suivi écrit qui rend la progression lisible. » · « Une Scorecard finale pour voir ce qui a changé. »
- **« Pour qui Thrive est conçu »** : « Thrive s'adresse aux familles qui veulent une solution sérieuse, humaine et crédible pour aider leur enfant à mieux se connaître et à mieux performer sans pression inutile. » / « C'est aussi une réponse pensée pour les parents qui veulent des preuves, pas seulement des promesses. »
- Phrase de clôture : « Thrive aide votre enfant à développer ses outils mentaux dans un cadre positif, individuel et documenté, pour qu'il progresse avec confiance, pas au hasard. »
- Boutons : **« Réserver sa place »** → `/prix` · **« Prendre RDV (30 min) »** → Cal.com · **« Découvrir la méthode »** → `/methode`
- Image : `alt="Coach Thrive et enfant sur la glace"`

### 4.6 Informations Pratiques — `src/components/home/Logistics.jsx` (clés `home.logistics.*`)
- Titre : **« Informations Pratiques »**
- **Lieux** : « Centre Saint-Denis (Montréal). » / « Intervention à domicile possible. »
- **Âges** : « 8 à 17 ans. » / « Programmes adaptés par tranche d'âge. »
- **Équipement** : « Tenue de sport standard. » / « Le matériel spécifique est fourni par le coach. »

### 4.7 Nos Lieux d'Intervention — `src/components/home/Locations.jsx` (clés `home.locations.*`)
*Cette même section constitue à elle seule la page `/zones`.*
- Titre : **« Nos Lieux d'Intervention »** · Sous-titre : **« Des infrastructures de qualité professionnelle pour des résultats optimaux. »**
- Carte 1 — badge **« Complexe Premium »**, titre **« Centre Saint-Denis »**, « Complexe sportif de pointe au cœur de Montréal. », adresse **« 5115 Rue Rivard, Montréal, QC H2J 2P5 »**
- Carte 2 — badge **« Sur Mesure »**, titre **« Intervention à Domicile »**, « Possible selon le matériel disponible sur place (à valider avec votre coach). » / « *Frais de déplacement applicables. »
- Paragraphe : « Afin d'offrir la meilleure expérience d'encadrement, nous vous accueillons au **Centre Saint-Denis**. Ce complexe sportif premium offre des installations de **de haute qualité**, créant le cadre idéal pour favoriser la concentration, la motivation et l'excellence motrice. »
  ⚠️ **Faute de français visible : « des installations de de haute qualité »** (le « de » est dupliqué entre `desc_1_2` et `desc_1_b2`).
- Encadré **« Service Privé à Domicile »** (⚠️ la clé `box_title` commence par une espace : `" Service Privé à Domicile"`) : « Nous offrons un accompagnement sur mesure pour intervenir **directement chez vous**. Cette option est possible si vous disposez d'un espace sécuritaire et de l'équipement nécessaire (à évaluer avec le coach certifié lors de l'appel). Des frais de déplacement s'appliquent dans la région de Montréal. »
- 4 pastilles : « Installations premium » · « Équipement de pointe » · « Cadre d'entraînement idéal » · « Flexibilité à domicile »
- **« L'Effet Centre Saint-Denis »** : « Entrer dans un complexe sportif premium crée un **puissant déclic psychologique**. L'enfant change de posture. »
  - *Sanctuaire de Performance* : « Il ne vient pas juste "jouer". L'environnement élève naturellement ses standards, son niveau d'exigence et de concentration. »
  - *Espace Dédié* : « Sortir de sa routine quotidienne pour entrer dans un lieu conçu pour l'excellence sportive offre une coupure mentale idéale pour un focus absolu. »
- **« L'Avantage à Domicile »** : « S'entraîner dans son propre environnement offre une **sécurité émotionnelle inégalée**, particulièrement pour les enfants anxieux. »
  - *Cocon de Confiance* : « L'athlète évolue sur son territoire. Les barrières tombent plus vite, facilitant une connexion profonde et rapide avec le coach. »
  - *Transfert Immédiat* : « S'entraîner dans sa cour ou au parc local ancre de nouvelles habitudes là où il pratique en solo, maximisant l'autonomie. »

### 4.8 Questions Fréquentes — `src/components/home/Faq.jsx` (clés `home.faq.*`)
Titre : **« Questions Fréquentes »** — 5 questions :

1. **« Mon enfant est débutant, est-ce pour lui ? »** → « Absolument. Cet accompagnement psychologique sport enfant est idéal pour bâtir les bases techniques et la confiance dès le début, évitant ainsi de mauvaises habitudes. »
2. **« Où se déroulent les séances ? »** → « Au plus proche de chez vous : sur les terrains extérieurs, à la patinoire, dans les arénas locaux, ou à domicile. » ⚠️ contredit « Centre Saint-Denis / Plateau, créneau fixe »
3. **« Les parents doivent-ils être présents ? »** → « Pour les 2-5 ans, oui. Pour les plus grands, nous vous encourageons à assister aux 5 dernières minutes pour le bilan de fin de séance. » ⚠️ « 2-5 ans » alors que l'offre est 8-17 ans ; ⚠️ contredit `method.actors.parent_not_1` (« N'assiste pas aux séances »)
4. **« Puis-je utiliser mes assurances ? »** → « Bien que nos mentors soient formés en psychologie, le service est facturé comme du tutorat sportif. Vérifiez avec votre assureur pour la catégorie 'Activité physique' ou 'Bien-être'. »
5. **« Que faire si mon enfant veut arrêter le hockey ou son sport ? »** → « L'abandon (ou la demande d'arrêt) est souvent le symptôme d'une pression excessive, d'un blocage émotionnel ou de la comparaison aux autres. Avant de prendre une décision, notre encadrement permet d'isoler l'origine de cette perte de plaisir et travaille sur la gestion du stress en compétition jeune pour relancer sa motivation originelle. »
   ⚠️ Questions 5 **absente de la version anglaise** (`home.faq.q5` / `a5`).

---

## 5. PAGE LE SPORT — `/sport`

**SEO** (`seo.sport.*`)
- Titre : **« Développer le Potentiel par le Sport | Psychologie Positive — THRIVE »**
- Description : **« Plus qu'une activité, le sport est un tremplin pour la vie. Découvrez comment THRIVE utilise l'expérience sportive (hockey, soccer, gymnastique...) pour forger la résilience et l'autonomie. »**
  ⚠️ mentionne la **gymnastique**, qui n'est pas dans les 5 disciplines du site.

**En-tête** (`sports.*`) : titre **« Excellence Multisports »**, sous-titre **« 5 disciplines, une seule philosophie : La performance par le développement humain. »**

5 cartes retournables. Face avant : nom + 4 points techniques + mention **« Survolez pour l'approche Mentale »**. Face arrière : titre PERMA + texte + mention **« Impact Thrive »** + bouton **« Réserver ce Programme »** → **`/prix`**.

> ⚠️ **Attention — double source de données.** Les textes affichés viennent des clés `sports.*` du fichier de traduction, **mais les mêmes textes sont aussi dupliqués dans `src/data/sports.jsx`** (où ils ne servent plus qu'aux noms de sport et aux icônes). Les deux copies ont déjà **divergé** : voir Hockey ci-dessous. **Ne modifier que `translation.json`**, et penser à nettoyer `sports.jsx`.

### Patinage (`sports.patinage.*`)
Technique : « Posture de base & Centre de gravité » · « Poussée latérale & Récupération » · « Croisements & Virages brusques » · « Transition vers Hockey ou Artistique »
**« Confiance & Flow »** — « Le patin est la base. Maîtriser sa glisse crée un sentiment d'auto-efficacité (Self-Efficacy) immédiat, réduisant l'anxiété de chute pour atteindre l'état de Flow. »

### Hockey (`sports.hockey.*`)
Technique : « Maniement (Hands) & Dissociation » · « Mécanique de tir (Poignet/Frappé) » · « Protection de rondelle » · « IQ Hockey & Lecture du jeu »
**« Engagement & Focus »** — « Le hockey demande une prise d'information constante. Spécialistes du coaching mental hockey mineur Montréal, nous travaillons l'attention pour que l'enfant reste lucide et maîtrise sa progression sous pression. »
⚠️ `src/data/sports.jsx` contient encore l'**ancienne** version : « … Nous travaillons l'Attention Plena (Mindfulness) pour que l'enfant reste lucide sous la pression. » (version non affichée).

### Basketball (`sports.basket.*`)
Technique : « Dribble & 'Handle' élite » · « Mécanique de tir (Form Shooting) » · « Finition au cercle & 1vs1 » · « Jeu de pieds (Footwork) »
**« Résilience & Accomplissement »** — « Le basket est un jeu de l'échec (rater un tir est normal). Nous cultivons le 'Growth Mindset' : voir chaque tir manqué comme une donnée d'ajustement, pas une faute. »

### Soccer (`sports.soccer.*`)
Technique : « Contrôle orienté & 1ère touche » · « Passes courtes/longues & Vision » · « Dribble en espace réduit » · « Frappe & Finition »
**« Relations & Vision »** — « Le soccer est le sport d'équipe par excellence. Nous connectons la technique individuelle à l'intelligence relationnelle : anticiper les besoins du coéquipier. »

### Football (`sports.football.*`)
Technique : « Explosivité & Départ arrêté » · « Tracés de route (Route Running) » · « Coordination mains-yeux (Catch) » · « Positionnement défensif »
**« Émotions Positives & Courage »** — « Un sport d'intensité. Nous apprenons à canaliser l'adrénaline en énergie positive (Excitement) plutôt qu'en stress, renforçant le courage et la détermination. »

### Carte finale
Titre : **« Votre Sport,<br />Notre Méthode. »** · Texte : « Peu importe la discipline, nous appliquons la même rigueur scientifique pour développer l'athlète complet. » · Bouton : **« Réserver une évaluation »** → fait simplement défiler vers le bloc Contact en bas de page.

---

## 6. PAGE LA MÉTHODE — `/methode`

**SEO** (`seo.method.*`)
- Titre : **« Notre Méthode : Psychologie Positive & Préparation Mentale | THRIVE »**
- Description : **« Découvrez la méthode THRIVE, fondée sur la psychologie positive validée par la science. Une approche structurée pour bâtir la confiance, l'autonomie et la résilience de votre jeune athlète. »**

### 6.1 Sommaire latéral — `src/components/method/MethodSidebar.jsx` (clés `method.sidebar.*`)
**« Sur cette page »** : Introduction · La Transformation · Définition THRIVE · 8 Piliers Scientifiques · 6 Interventions · 13 Séances · Les 3 Acteurs · Mesures · Cadre Éthique
Encart : **« Visio gratuite<br />de 30 minutes »** + bouton **« Réserver maintenant »** → Cal.com 30min

### 6.2 Introduction (`method.*`)
- Pastille : **« Intervention Psychoéducative par le Sport »**
- H1 : **« La Méthode THRIVE — *là où le sport devient une école de vie.* »**
- Texte : « THRIVE est un programme structuré de développement des compétences mentales, enseigné intentionnellement à travers le sport. Ni thérapie, ni entraînement ordinaire — un espace conçu pour que votre enfant grandisse durablement. »
- 3 preuves : « 13 séances structurées et documentées » · « Compétences mesurées avant et après » · **« Transfert garanti : sport → vie »** ⚠️ le mot « garanti » contredit le discours « nous ne garantissons pas de résultat » des pages produit
- Boutons : **« Rencontrer un de nos coachs gratuitement »** (clé `home.hero.cta`) → Cal.com · **« Voir les programmes »** (`method.cta_secondary`) → `/prix`
  ⚠️ la clé `method.cta_primary` (« Réserver ma visio de 30 min ») existe mais **n'est pas utilisée** ici.

### 6.3 L'Impact Profond (`method.problem.*`)
- Pastille : **« L'Impact Profond »** · Titre : **« Votre enfant ne change pas seulement de performance. »**
- Texte : « Il apprend à se connaître davantage, à mieux se maîtriser et à avancer avec plus de confiance, sur la glace comme dans sa vie. »
- 5 transformations : « De vulnérable → **à solide.** » · « De passif → **à acteur.** » · « De stressé → **à régulé.** » · « De flou → **à aligné.** » · « De dépendant → **à autonome.** »
- 3 encadrés : « 🏒  Le club : technique solide, mais 1 coach pour 15 enfants. » · « 🛋  Le psychologue : intervention en situation de crise, pas de prévention. » · « ⭐  THRIVE : développement intentionnel, structuré et mesuré, 1:1. »
- Clé `method.problem.quote` (« Le club entraîne les gestes. Le psychologue traite les crises. THRIVE enseigne les compétences mentales — avant la crise. ») **n'est pas affichée**.

### 6.4 Définition THRIVE — **texte entièrement en dur** dans `src/pages/Method.jsx` ligne 203
Titre : **« Une intervention psychoéducative par le sport. »**
- 🏒 **Compétences Sportives** — « Le sport est le véhicule. L'aréna est le laboratoire. Chaque défi technique est une occasion de développer la confiance et la tolérance à l'erreur. »
- 🧠 **Ressources Psychologiques** — « Auto-efficacité, régulation émotionnelle, concentration, dureté mentale. Des compétences réelles, enseignées avec rigueur, mesurées avant et après. »
- 🌍 **Life Skills Transférables** — « Ce que votre enfant apprend au sport : gérer la pression, demander de l'aide, persévérer. Il le réutilise à l'école, en famille, dans la vie. »

**« THRIVE n'est pas : »**
- « Une psychothérapie — aucun diagnostic, aucun traitement clinique. »
- « Un entraînement sportif ordinaire — chaque séance a un objectif précis. »
- « Du développement personnel vague — tout est structuré et mesuré. »
- « Réservé aux enfants en difficulté — les enfants épanouis progressent encore plus vite. »

⚠️ Ces 7 textes **ne sont pas traduits** (ils restent en français en version anglaise).

### 6.5 8 Piliers Scientifiques — `src/components/method/ScientificPillars.jsx` (clés `method.pillars.*`)
- Pastille **« Fondements Scientifiques »** · Titre **« 8 piliers. Une méthode. »**
- Sous-titre : « THRIVE n'est pas construit sur des intuitions. Chaque intervention repose sur des recherches publiées. Les niveaux A, B, C indiquent la solidité de la preuve. »
- Note **« Transparence épistémique : »** « Niveau A = méta-analyses et essais contrôlés. Niveau B = études longitudinales et revues systématiques. Niveau C = consensus d'experts. Ce classement vous permet d'évaluer la solidité de chaque fondement. »

| Pilier | Niveau | Auteurs (en dur dans le `.jsx`) | Bénéfice affiché |
|---|---|---|---|
| Autodétermination (SDT) | **A** | Deci & Ryan (1985) | « Votre enfant joue parce qu'il le veut — pas par peur de décevoir. » |
| Auto-Efficacité | **A** | Bandura (1977) | « Il essaie les situations difficiles parce qu'il croit en sa capacité à les gérer. » |
| Développement Positif (PYD / 5C) | **B** | Lerner et al. (2005) | « Il développe les 5C : compétence, confiance, connexion, caractère et soin. » |
| Life Skills par le Sport | **B** | Gould & Carson (2008) | « Ce qu'il apprend sur la glace, il le réutilise à l'école, en famille et dans la vie. » |
| Modèle PERMA | **A** | Seligman (2011) | « Il s'épanouit — bien-être mesurable, émotion positive, sens et accomplissement. » |
| Forces de Caractère (VIA) | **B** | Peterson & Seligman (2004) | « On ne corrige plus ses faiblesses — on révèle et amplifie ses forces signatures. » |
| Buts d'Accomplissement (AGT) | **A** | Nicholls (1984) | « Il se compare à lui-même — pas aux autres. La progression devient sa boussole. » |
| Modèle DMSP (Côté) | **B** | Côté & Fraser-Thomas (2007) | « Son parcours sportif est respecté — ni brûlé, ni sous-stimulé. » |

Mécanismes affichés (clés `*_mechanism`) : SDT « Active la motivation intrinsèque via autonomie, compétence et appartenance. (Deci & Ryan, 1985) » · Auto-efficacité « Construit la confiance par expériences de maîtrise et modélisation positive. (Bandura, 1977) » · PYD « Cadre liant sport et ressources psychosociales durables. (Lerner et al., 2005) » · Life Skills « Transfert intentionnel des compétences sportives vers les compétences de vie. (Gould & Carson, 2008) » · PERMA « Cadre de psychologie positive pour l'épanouissement durable. (Seligman, 2011) » · VIA « Identification et mobilisation des forces dans le contexte sportif. (Peterson & Seligman, 2004) » · AGT « Oriente vers la maîtrise plutôt que la comparaison sociale. (Nicholls, 1984) » · DMSP « Guide la spécialisation progressive selon l'âge développemental. (Côté & Fraser-Thomas, 2007) »

⚠️ Aucun pilier n'est en **niveau C**, alors que la note explique ce qu'est le niveau C.

### 6.6 6 Interventions — `src/components/method/InterventionGrid.jsx` (clés `method.interventions.*`)
Pastille **« 6 Actions d'Intervention »** · Titre **« Ce que THRIVE enseigne, concrètement. »** · Sous-titre « Chaque intervention est un outil que votre enfant repart avec lui — utilisable immédiatement dans son sport et dans sa vie. »

| Intervention | Accroche | Dans le sport | Transfert | Outil remis |
|---|---|---|---|---|
| **Fixation d'Objectifs** | « Transformer l'ambition en plan d'action clair. » | « Il sait où il va chaque séance. L'effort a un sens. La progression sur la glace devient visible et motivante. » | « À l'école : il fixe ses objectifs de session. En famille : il exprime ses attentes clairement et calmement. » | « Fiche Objectifs SMART personnalisée » |
| **Régulation Émotionnelle** | « Transformer la frustration en énergie utile. » | « Il gère sa frustration après un mauvais but. Il ne se laisse plus envahir par la pression d'un match décisif. » | « À l'école : il régule son anxiété avant un examen. Dans la vie : il nomme et accueille ses émotions sans débordement. » | « Tableau des émotions + Technique STOP » |
| **Construction de la Confiance** | « Bâtir une confiance qui résiste à l'échec. » | « Il essaie le geste difficile. Il demande une répétition. Il ne se cache plus sur la glace après une erreur. » | « En classe : il lève la main. En groupe : il s'affirme sans agression ni retrait. » | « Journal des micro-victoires (Log personnel) » |
| **Demander de l'Aide** | « La compétence la plus sous-estimée du sport. » | « Il demande des corrections à son entraîneur. Il verbalise ce qu'il ne comprend pas sans honte. » | « À l'école : il va voir l'enseignant. À la maison : il exprime ses besoins à ses parents. » | « Script 'Je demande de l'aide' (ancre comportementale) » |
| **Relaxation Sous Pression** | « Accéder au calme même dans les moments intenses. » | « Il respire avant le tir de pénalité. Il récupère vite entre deux présences sur la glace. » | « Avant un examen : respiration 4-7-8. Avant un discours : ancrage corporel en 60 secondes. » | « Protocole de respiration + Scan corporel audio » |
| **Concentration & Imagerie Mentale** | « Voir le succès avant de l'exécuter. » | « Il visualise son geste avant de le faire. Il reste dans le moment présent malgré le bruit et la pression. » | « En révision : lecture active et ancrage attentionnel. En compétition : routine pré-performance. » | « Script d'imagerie mentale personnalisé » |

### 6.7 13 Séances — `src/components/method/SessionTimeline.jsx` (clés `method.timeline.*`)
Pastille **« Structure du Programme »** · Titre **« 13 séances. 3 phases. Une transformation. »** · Sous-titre « Chaque séance a un objectif précis. Chaque phase a une intention développementale claire. La progression est visible — pour vous et pour votre enfant. »

- **Phase 1 — Ancrer** : objectif identique à `home.process.step1_d` ; « Vous observez : moins de résistance avant les séances, plus de facilité à verbaliser ses émotions. » ; jalon **« Bilan Diagnostic remis après S2. »**
- **Phase 2 — Développer** : « Vous observez : plus d'initiative, moins de frustration visible, retours positifs après les matchs. » ; jalon **« Bilans courts au parent en semaines 4 et 8. »**
- **Phase 3 — Intégrer** : « Vous observez : langage des forces, demande d'aide spontanée, transfert hors-sport visible. » ; jalon **« Scorecard finale + Célébration S13. »**

**« Structure invariante de chaque séance »** → **« 5 temps. Toujours dans cet ordre. »**
« Accueil & Connexion » **5 min** · « Retour sur la semaine » **10 min** · « Enseignement » **20 min** · « Application terrain » **20 min** · « Bilan & Outil remis » **5 min** → **total 60 min**
⚠️ Les pages produit annoncent des séances de **« 60 à 70 min »**, ici la structure totalise 60 min.

### 6.8 Les 3 Acteurs — `src/components/method/ActorsGrid.jsx` (clés `method.actors.*`)
Pastille **« Les 3 Acteurs du Programme »** · Titre **« Chacun a un rôle précis. Ensemble, ça fonctionne. »** · Sous-titre « THRIVE fonctionne parce que les rôles sont clairs. Personne n'empiète sur l'autre. Chacun contribue à sa place, sans surcharge. »

**Le Mentor THRIVE — « Architecte du développement »**
Fait : « Conçoit et anime les 13 séances selon le protocole THRIVE » · « Enseigne les 6 interventions avec rigueur et bienveillance » · « Mesure, documente et transmet les progrès aux parents »
Ne fait pas : « N'est pas psychologue ni thérapeute — ne diagnostique pas » · « Ne remplace pas l'entraîneur sportif de votre enfant »
Ressent : « Votre enfant a une force à révéler. Mon rôle est de créer les conditions pour qu'il la trouve. »

**Le Parent — « Partenaire de confiance »**
Fait : **« Participe aux jalons de communication selon son pack (calls S1, S7, S13) »** ⚠️ parle encore de **« pack »** et de jalons S1/S7/S13 qui ne correspondent plus aux semaines 4, 8 et 13 des pages produit · « Renforce à la maison ce que l'enfant apprend en séance » · « Reçoit les livrables : scorecard, rapport PDF, observations BARS »
Ne fait pas : « N'assiste pas aux séances — pour préserver l'espace de l'enfant » · « N'évalue pas les séances — la mesure est faite par le mentor »
Ressent : « Je veux comprendre ce qui change. THRIVE me montre la progression en chiffres. »

**Le Jeune Athlète — « Héros de sa propre histoire »**
Fait : « Participe activement aux 13 séances avec curiosité et honnêteté » · « Essaie les outils en séance et les transfère dans son sport et sa vie » · « Construit son cahier de l'athlète — un tracé personnel de ses forces et progrès »
Ne fait pas : « N'est pas en thérapie — il apprend et pratique des compétences concrètes » · « N'est pas jugé sur ses performances sportives pendant les séances »
Ressent : « Je veux me sentir compris, progresser, et reprendre confiance en moi. »

### 6.9 La Batterie de Mesure — `src/components/method/MeasureBattery.jsx` (clés `method.measure.*`)
Pastille **« La Batterie de Mesure »** · Titre **« La progression ne se devine pas. Elle se mesure. »** · Sous-titre « THRIVE utilise des instruments psychométriques validés pour mesurer votre enfant avant, pendant et après le programme. Ce ne sont pas des diagnostics — ce sont des miroirs de progression. »
Avertissement **« Note importante : »** « Ces instruments ne constituent pas un diagnostic clinique. Ils mesurent l'évolution du développement de l'enfant au fil du programme. Ce qui importe, c'est la progression T1→T3, pas le score absolu. »

| Instrument | Mesure | Question parent | Programmes (en dur dans le `.jsx`) |
|---|---|---|---|
| LSSS — 10 items | Life Skills (compétences transversales) | « Utile pour la vie ? » | Oser essayer, Aller vers les autres |
| LSSS — 30 items | Life Skills complets | « Forces & faiblesses ? » | Oser essayer, Aller vers les autres |
| SMTQ | Dureté mentale | « Gestion de la pression ? » | Oser essayer, Aller vers les autres |
| RPE (Borg) | Effort perçu | « Séance bien dosée ? » | Oser essayer, Aller vers les autres |
| WHO-5 | Bien-être | « Plus heureux au quotidien ? » | Oser essayer, Aller vers les autres |
| GSE | Auto-efficacité | « Croit-il en lui ? » | Oser essayer, Aller vers les autres |

Note de bas de section : « L'évolution T1 → T3 est plus parlante que le score absolu. Ce qui compte : le chemin parcouru. »

### 6.10 Cadre Éthique — `src/components/method/EthicsSection.jsx` (clés `method.ethics.*`)
Pastille **« Cadre Éthique & Limites »** · Titre **« Ce que THRIVE est. Ce qu'il n'est pas. »** · Sous-titre « La transparence est notre engagement premier envers vous. Voici exactement ce que nous faisons, avec rigueur — et ce que nous ne faisons pas, par respect de nos limites professionnelles. »

**« Ce que THRIVE fait »** : « Enseigne des compétences mentales et des life skills à travers le sport » · « Utilise des outils psychométriques validés pour mesurer la progression » · « Accompagne le développement global de l'enfant selon un protocole structuré » · « Transfère les apprentissages du sport vers la vie quotidienne (école, famille, social) » · « Référence vers un professionnel de la santé si une situation dépasse son cadre »

**« Ce que THRIVE ne fait pas »** : « Ne pose pas de diagnostic psychologique ou psychiatrique » · « Ne remplace pas un psychologue, un psychothérapeute ou un médecin » · « Ne traite pas les troubles mentaux, les traumatismes ou les crises » · « Ne garantit pas de résultats sportifs spécifiques (classements, sélections) »

4 badges : « Protocole supervisé » · « Référencement si nécessaire » · « Niveaux de preuve A/B/C » · « Confidentialité totale »
Mention finale : **« THRIVE est un service de coaching de développement psychoéducatif par le sport. Le mentor n'est pas psychologue membre de l'OPQ. Loi 21 respectée. »**

### 6.11 CTA final (`method.final_cta.*`)
Pastille **« Prêt à commencer ? »** · Titre **« Votre enfant a une force à révéler. THRIVE est là pour ça. »** · Texte « La visio de 30 minutes est gratuite, sans engagement. C'est le moment de nous parler de votre enfant et de voir si THRIVE est le bon cadre pour lui. »
Boutons : **« Rencontrer un de nos coachs gratuitement »** → Cal.com · **« Voir les tarifs »** → `/prix`
⚠️ `method.final_cta.btn_primary` (« Réserver ma visio de 30 min ») existe mais **n'est pas utilisée**.

> ⚠️ **Toute la page `/methode` est absente du fichier anglais** (`method.cfr*`, `method.problem.*`, `method.pillars.*`, `method.interventions.*`, `method.timeline.*`, `method.actors.*`, `method.measure.*`, `method.ethics.*`, `method.final_cta.*`, `method.sidebar.l6` à `l9`). En anglais, cette page affiche le **français** (repli `fallbackLng: 'fr'`).

---

## 7. PAGE PRIX — `/prix`

**SEO** (`pricing.seo.*`)
- Titre : **« Programmes & tarifs THRIVE | Oser essayer, Aller vers les autres, Le moment qui compte »**
- Description : **« Trois programmes fondés sur la Méthode THRIVE pour les parents d'enfants de 8 à 17 ans à Montréal : Oser essayer (1 500 $ + tx), Aller vers les autres (2 000 $ + tx) et Le moment qui compte (15 $ + tx aux 2 semaines). »**
- Données structurées : `FAQPage` reprenant les 7 questions de la page.

### 7.1 Hero (`pricing.hero.*`)
- Pastille : **« Les programmes THRIVE »**
- H1 : **« Un besoin précis. *Un programme pour y répondre.* »**
- Sous-titre : « Trois programmes fondés sur la même Méthode THRIVE, pour les parents d'enfants de 8 à 17 ans à Montréal. Vous choisissez selon ce que vit votre enfant, pas selon le prix. »
- Rassurance : **« Rien à payer à l'inscription · 2 premières séances à l'essai · prix affichés + taxes. »**
- Boutons : **« Voir les programmes »** → ancre `#les-packs` · **« Parler à THRIVE »** → `/evaluation` (**qui redirige vers `/liste-attente`**)

### 7.2 Les 3 cartes (`pricing.packs.title` = **« Les trois programmes THRIVE »**)
Ordre d'affichage de gauche à droite (défini dans `src/data/pricing.js`) : **Aller vers les autres** · **Oser essayer** (mise en avant) · **Le moment qui compte**.

⚠️ Les clés `pricing.packs.subtitle` (« Choisissez selon ce que vit votre enfant. ») et `pricing.packs.note` (« Les trois programmes reposent sur la même Méthode THRIVE, fondée sur la recherche en psychologie positive et en psychologie du sport. ») **ne sont pas affichées** par `Prix.jsx`.

#### Carte 1 — ALLER VERS LES AUTRES (`pricing.autres.*`)
- Titre : **« ALLER VERS LES AUTRES »** · Accroche : **« 26 séances · 1:1 + petit groupe »**
- Chiffre en vedette : **26 séances** — détail : **« 13 en 1:1 + 13 en groupe »**
- Promesse (entre guillemets) : « Il passe souvent la récré seul ? En 13 semaines, il apprend concrètement à aborder les autres, à proposer une activité et à entretenir une amitié. »
- 6 points : « 13 séances individuelles » · « 13 séances en petit groupe, le même jour » · « 1 défi social par semaine, préparé avec vous » · « Un court point parent chaque semaine » · « Premiers groupes : enfants de 8 à 11 ans » · « Mesure avant / après + Book THRIVE »
- Prix : **« 2 000 $ + tx »** · Note : **« 1 seul déplacement par semaine »** · Facturation : **« 2 versements · le 1er en semaine 3 »**
- Boutons : **« Réserver ma place »** → `/liste-attente?source=site&programme=autres` · **« En savoir plus »** → `/programmes/aller-vers-les-autres`

#### Carte 2 — OSER ESSAYER (`pricing.essayer.*`) — badge **« Programme principal »**
- Titre : **« OSER ESSAYER »** · Accroche : **« 13 séances 1:1 · 13 semaines »**
- Chiffre en vedette : **13 séances** — détail : **« 1:1, une par semaine »**
- Promesse : « Votre enfant lâche dès que ça devient difficile ? En 13 semaines, il pratique chaque semaine l'art d'essayer, de persévérer et de rebondir après un échec. »
- 6 points : « 13 séances individuelles de 60 à 70 min, 1 par semaine » · « Au moins une réussite vécue à chaque séance » · « 1 défi par semaine à relever à la maison ou à l'école » · « Suivi dans l'app après chaque séance » · « Bilans courts aux semaines 4 et 8 » · « Mesure avant / après + Book THRIVE »
- Prix : **« 1 500 $ + tx »** · Note : **« Soit ≈ 115 $ la séance »** · Facturation : **« 2 versements · le 1er à la séance 3 »**
- Boutons : **« Réserver ma place »** → `/liste-attente?source=site&programme=essayer` · **« En savoir plus »** → `/programmes/oser-essayer`

#### Carte 3 — LE MOMENT QUI COMPTE (`pricing.moment.*`) — badge **« À la maison ! »**
- Titre : **« LE MOMENT QUI COMPTE »** · Accroche : **« Abonnement · 10 min par jour »**
- Pas de chiffre en vedette (pas de `sessions` dans les données).
- Promesse : « Chaque jour, une activité de 10 minutes à faire avec votre enfant, avec l'explication du pourquoi. Parce que c'est la qualité du moment qui compte. »
- 6 points : « 1 activité par jour, 10 minutes » · « Zéro préparation, zéro matériel » · « Le pourquoi expliqué en une ligne » · « Une notification à l'heure de votre choix » · « Un bilan à 4 semaines » · « Sans engagement, résiliable à tout moment »
- Prix : **« 15 $ + tx »** · Note : **« Toutes les 2 semaines »** · Facturation : **« 1 mois d'essai gratuit »**
- Boutons : **« Créer mon compte »** → `app.thrivesportpositive.com/login?mode=signup` · **« Découvrir »** → `/programmes/le-moment-qui-compte`

### 7.3 « Par où commencer ? » (`pricing.upgrade.*`)
Sous-titre : « Trois portes d'entrée, selon ce que vit votre enfant. Aucune n'est « moins bien » : elles répondent à des besoins différents. »
1. **« LE MOMENT QUI COMPTE — Vous manquez de temps, et vous vous en voulez »** → « Une activité de 10 minutes par jour à faire ensemble, sans rien préparer, avec l'explication du pourquoi. La façon la plus simple de découvrir la Méthode THRIVE à la maison. »
2. **« OSER ESSAYER — Votre enfant lâche dès que ça devient difficile »** → « Il hésite à se lancer, reste en retrait, perd ses moyens quand il y a un enjeu. 13 séances individuelles pour vivre des réussites graduées et apprendre à les attribuer à son effort. »
3. **« ALLER VERS LES AUTRES — Votre enfant reste souvent seul »** → « Il a du mal à aborder les autres et n'ose pas inviter un ami. Une séance individuelle, puis une séance en petit groupe, puis un défi dans sa vraie vie. Si le regard des autres lui fait peur, on commence souvent par Oser essayer : le 1:1 avant le groupe. »
Citation : « Le bon programme n'est pas le plus cher. C'est celui qui répond à ce que vit votre enfant. »

### 7.4 « Vous ne payez que ce que vous avez reçu. » (`pricing.proof.*`)
Sous-titre : « Tout est pensé pour que vous puissiez essayer sans risque, et voir le chemin parcouru. »

| Titre | Texte | Programmes concernés |
|---|---|---|
| **Une séance découverte à 97 $ + tx** | « Une vraie séance avec votre enfant, qui pose son point de départ. Si vous continuez, les 97 $ sont déduits de votre premier versement. » | Oser essayer · Aller vers les autres |
| **2 séances à l'essai** | « Si vous n'êtes pas convaincu après la deuxième séance, vous arrêtez et elles ne vous sont pas facturées. » | Oser essayer · Aller vers les autres |
| **Rien à payer à l'inscription** | « Deux versements, le premier à la séance 3. Et vous pouvez arrêter à tout moment : vous ne payez que les séances suivies. » | Oser essayer · Aller vers les autres |
| **Des progrès mesurés** | « Le même questionnaire au début et à la fin, et des bilans courts aux semaines 4 et 8. On compte ce qui se voit, pas des impressions. » | Oser essayer · Aller vers les autres |
| **Le Book THRIVE** | « En semaine 13, une séance de remise avec le bilan avant / après et le Book THRIVE : la synthèse de tout ce que votre enfant a appris. » | Oser essayer · Aller vers les autres |
| **1 mois d'essai gratuit** | « Un mois pour essayer, un rappel avant la fin de l'essai, et une annulation simple, à tout moment. » | Le moment qui compte |

### 7.5 FAQ (`pricing.faq.*`) — **« Questions fréquentes »**, sous-titre « Des réponses directes, sans jargon, pour choisir en confiance. »

1. **« Quel programme choisir ? »** → « Votre enfant lâche dès que ça devient difficile, hésite à se lancer ou perd ses moyens quand il y a un enjeu : Oser essayer. Il reste souvent seul et n'ose pas aller vers les autres : Aller vers les autres. Vous voulez surtout passer un vrai moment avec lui chaque jour, malgré le manque de temps : Le moment qui compte. Vous hésitez ? L'appel gratuit sert exactement à ça. »
2. **« Mon enfant doit-il avoir un problème ou un diagnostic ? »** → « Non. THRIVE s'adresse à des situations du quotidien : un enfant qui abandonne vite, qui reste en retrait, qui a du mal à aller vers les autres. Si votre enfant vit une détresse importante ou a reçu un diagnostic qui demande une prise en charge, nous vous orienterons vers un professionnel. »
3. **« Comment se passe le paiement ? »** → « Pour Oser essayer et Aller vers les autres : rien à l'inscription, puis deux versements égaux, le premier à la séance 3 (moins les 97 $ de la séance découverte) et le second à la séance 7. Pour Le moment qui compte : un mois d'essai gratuit, puis 15 $ + tx toutes les 2 semaines, sans engagement. Tous les prix sont affichés + taxes (TPS et TVQ). »
4. **« Et si le programme ne convient pas à mon enfant ? »** → « Les deux premières séances sont une période d'essai : si vous n'êtes pas convaincu après la deuxième, vous arrêtez et elles ne vous sont pas facturées. Ensuite, vous pouvez arrêter à tout moment : vous ne payez que les séances suivies. »
5. **« THRIVE, est-ce une thérapie ? »** → « Non. THRIVE est un programme de coaching et de développement des habiletés. Il ne remplace pas un suivi psychologique. Si votre enfant vit une détresse importante ou a reçu un diagnostic, nous vous orienterons vers un professionnel. »
6. **« Pourquoi ce prix ? »** → « Oser essayer revient à environ 115 $ la séance, pour 13 semaines structurées avec un défi à la maison chaque semaine, un suivi entre les séances et une mesure avant / après. Pour comparer : beaucoup de familles investissent déjà un budget du même ordre dans une saison de sport ou quelques semaines de camp. Le camp et le cours privé travaillent la technique ; THRIVE travaille ce qu'ils n'ont pas le temps de travailler : oser essayer, et aller vers les autres. »
7. **« Où ont lieu les séances ? »** → « À Montréal, sur le Plateau-Mont-Royal, à un créneau fixe chaque semaine. Pour Aller vers les autres, la séance individuelle et la séance de groupe ont lieu le même jour : un seul déplacement par semaine. Le moment qui compte se vit à la maison. »

### 7.6 CTA final (`pricing.cta_final.*`)
Pastille **« Prêt à commencer ? »** · Titre **« Tout commence par un appel gratuit. »** · Texte « On écoute ce que vit votre enfant, et on vous dit honnêtement quel programme lui convient. Rien à payer, aucun engagement. » · Boutons **« Voir les programmes »** (ancre) et **« Réserver un appel »**

> ⚠️ **Toute la section `pricing` du fichier anglais est l'ANCIENNE offre.** Le fichier EN contient encore `programs.Essentiel`, `programs.Avance`, `programs.Performance` et n'a aucune des clés `pricing.essayer/autres/moment`. En anglais, la page Prix affiche donc le **français**.

---

## 8. FICHE PRODUIT — `/programmes/oser-essayer`
*Page entièrement **écrite en dur** dans `src/pages/OserEssayer.jsx` — aucune clé de traduction, aucune version anglaise.*

**SEO**
- Titre : **« Oser essayer | Programme de 13 séances pour enfants de 8 à 17 ans — THRIVE »**
- Description : **« Votre enfant lâche dès que ça devient difficile ? 13 séances individuelles à Montréal pour pratiquer l'art d'essayer, de persévérer et de rebondir. Progrès mesurés au début et à la fin. 1 500 $ + tx. »**

**1. Hero** — pastille **« Le programme principal THRIVE »** · H1 **« Oser essayer »** · accroche **« Votre enfant lâche dès que ça devient difficile ? »**
> « En 13 semaines, il pratique chaque semaine l'art d'essayer, de persévérer et de rebondir après un échec. Des compétences qu'il garde pour l'école, le sport et la vie. Ses progrès sont mesurés au début et à la fin. »
Boutons : **« Réserver un appel gratuit »** → `/liste-attente?source=site&programme=essayer` · **« Voir ce qui est inclus »** (ancre `#inclus`)
4 preuves : **13 séances** / « 1:1, une par semaine » — **1 défi** / « par semaine à la maison » — **Mesuré** / « au début et à la fin » — **2 séances** / « à l'essai »

**2. « Vous le reconnaissez ? »** — sous-titre « À qui s'adresse Oser essayer ? »
- **« Il ne lève jamais la main »** — « Il connaît la réponse, mais il ne se lance pas. Il préfère se taire plutôt que de risquer de se tromper devant les autres. »
- **« Il abandonne dès que ça monte d'un cran »** — « Tant que c'est facile, tout va bien. Dès que le coach augmente la difficulté, il décroche, négocie ou refuse d'essayer. »
- **« Avant chaque match, c'est difficile »** — « Les larmes, le mal de ventre, l'envie de ne pas y aller. Il perd ses moyens dès qu'il y a un enjeu. »
- **« Il reste en retrait »** — « Une nouvelle activité, un examen, un oral : il hésite, attend, regarde les autres faire. Il a les capacités, mais pas l'élan. »
Clôture : « Pour les enfants de 8 à 17 ans qui ont besoin d'apprendre à se lancer. »

**3. « 13 séances, 3 phases. »** — « Une séance individuelle par semaine, de 60 à 70 minutes, par le sport. Chaque séance fait vivre à votre enfant au moins une réussite : ni trop facile, sinon elle ne compte pas ; ni trop dure, sinon elle confirme l'échec. »
| Phase | Séances | Rôle | Ce qu'il construit | Pour la suite |
|---|---|---|---|---|
| **ANCRER** | 1 à 2 | « Créer le lien de confiance et fixer les objectifs. » | « Il repère ses forces et ce qu'il veut réussir. » | « Pose le point de départ, pour mesurer le chemin parcouru. » |
| **DÉVELOPPER** | 3 à 10 | « Apprendre en pratiquant, dans l'action. » | « Confiance, émotions, calme sous pression, demander de l'aide, concentration. » | « Remplit sa boîte à outils, séance après séance. » |
| **INTÉGRER** | 11 à 13 | « Consolider et devenir autonome. » | « Il assemble ses outils et apprend à les utiliser seul. » | « Il repart prêt à oser, au sport comme ailleurs. » |

**4. « Ce que votre enfant pratique. »** — « Pas des conseils : des habiletés travaillées en mouvement. Selon la recherche, la confiance la plus solide vient de réussites vécues, que l'enfant apprend à attribuer à son effort. »
1. **Se fixer un objectif** — « Découper un grand défi en petites étapes atteignables, qui dépendent de lui. »
2. **Oser et persévérer** — « Progresser par paliers maîtrisés, pour que chaque réussite lui prouve qu'il en est capable. »
3. **Gérer ses émotions** — « Reconnaître ce qu'il ressent face à la difficulté, et savoir quoi en faire. »
4. **Rester calme sous pression** — « Des techniques simples pour garder ses moyens quand il y a un enjeu. »
5. **Demander de l'aide** — « Savoir quand et comment solliciter le coach, les parents ou les coéquipiers quand ça bloque. »
6. **Se concentrer** — « Ramener son attention sur l'instant présent, et se préparer mentalement par l'imagerie. »

**5. « La place du parent »** — « Votre rôle : léger, mais essentiel. »
- *Séance découverte* → **« Le point de départ »** : « On observe votre enfant et on pose ensemble sa ligne de base : dans quelles situations il bloque, à quelle fréquence, depuis quand. Idéalement, les deux parents sont là. »
- *Chaque semaine* → **« Le défi à la maison »** : « Un défi à relever hors séance, à l'école ou à la maison, suivi dans l'app. Le passage du sport à la vie ne se fait pas tout seul : il se pratique. »
- *Semaines 4, 8 et 13* → **« Les bilans »** : « Un bilan court aux semaines 4 et 8, puis une séance de remise en semaine 13 avec le bilan avant / après et le Book THRIVE. »

**6. « Des progrès que vous pouvez compter. »** — « On ne vous dit pas « il a l'air plus confiant ». On compte ce qui se voit, de la même façon au début et à la fin. »
- « Combien de fois il accepte un nouveau défi sans négocier »
- « S'il refait une tentative dans les 2 minutes après un échec »
- « Le même questionnaire, rempli au début et à la fin »
- « Des bilans courts aux semaines 4 et 8 »
- « Les défis réalisés à la maison, semaine après semaine »
Encadré visuel : **« Exemple de bilan · données fictives »** / « Semaine 0 → semaine 13 » / badge **« Exemple »** / barres : « Défis acceptés sans négocier », « Nouvelle tentative après un échec », « Défis réalisés à la maison », légende « Avant / après ».

**7. « Des repères qui restent. »** — « En semaine 13, une séance de remise pour célébrer le chemin parcouru. Votre enfant ne repart pas qu'avec des mots : il garde une trace concrète de ce qu'il a appris. »
« Le Book THRIVE : la synthèse de tout ce qu'il a appris » · « Le bilan avant / après » · « Ses objectifs et sa boîte à outils » · « Le suivi de chaque séance dans l'app »

**8. « Tout ce qui est inclus »**
- **Séance découverte** — « Une séance complète qui pose le point de départ de votre enfant. 97 $ + tx, déduits de votre premier versement si vous continuez. »
- **13 séances individuelles** — « Une par semaine, de 60 à 70 min, en 1:1. La Méthode THRIVE complète : Ancrer, Développer, Intégrer. »
- **1 défi par semaine** — « À relever hors séance, à l'école ou à la maison, avec vous. Suivi dans l'app. »
- **Suivi dans l'app** — « Ce qui a été travaillé à chaque séance, pour savoir où en est votre enfant. »
- **Mesure avant / après** — « Le même questionnaire au début et à la fin, et des bilans courts aux semaines 4 et 8. »
- **Séance de remise + Book THRIVE** — « En semaine 13 : le bilan avant / après, la synthèse de ce qu'il a appris et la suite possible. »

**9. « Ce que ce programme n'est pas »** — « Pour que vous choisissiez en connaissance de cause : »
- « Ce n'est pas une psychothérapie. THRIVE est un programme de coaching et de développement des habiletés : il ne remplace pas un suivi psychologique. »
- « Si votre enfant vit une détresse importante ou a reçu un diagnostic qui demande une prise en charge, nous vous orienterons vers un professionnel. »
- « Nous promettons le travail fait chaque semaine et la mesure des progrès, pas un résultat garanti. »
- « Pas de séance en groupe : elle fait partie du programme Aller vers les autres. »
Renvoi : « Votre enfant a surtout du mal à aller vers les autres, à se faire des amis ? Le programme **Aller vers les autres** ajoute une séance en petit groupe chaque semaine et un défi social à vivre dans sa vraie vie. »

**10. Prix** — **« Investissement »** · **« 1 500 $ + tx »**
> « Soit environ 115 $ la séance. Rien à payer à l'inscription : 2 versements de 750 $ + tx, le premier à la séance 3, le second à la séance 7. »
Boutons : **« Réserver un appel gratuit »** · **« Comparer les programmes »** → `/prix`
Mention : « Les 2 premières séances sont à l'essai : si vous n'êtes pas convaincu, vous arrêtez et elles ne vous sont pas facturées. Ensuite, vous pouvez arrêter à tout moment. »

**11. FAQ (7 questions)**
1. **« Comment se passe la première étape ? »** → « Un appel gratuit pour comprendre la situation, puis une séance découverte (97 $ + tx) : une vraie séance avec votre enfant, qui pose son point de départ. Si vous continuez, les 97 $ sont déduits de votre premier versement. Idéalement, les deux parents y assistent. »
2. **« Et si ça ne convient pas à mon enfant ? »** → « Les deux premières séances sont une période d'essai : si vous n'êtes pas convaincu après la deuxième, vous arrêtez et elles ne vous sont pas facturées. Ensuite, vous pouvez arrêter à tout moment : vous ne payez que les séances suivies. »
3. **« Pourquoi passer par le sport ? »** → « Parce que le sport offre des occasions réelles d'essayer, de rater et de recommencer, dans un cadre sans enjeu scolaire. Mais ce qui s'apprend au sport ne passe pas tout seul à l'école : c'est pour ça que chaque semaine se termine par un défi à relever hors séance. »
4. **« Le coach de son club ne fait-il pas déjà ce travail ? »** → « Rarement, et ce n'est pas un reproche : ce n'est pas son rôle, et avec une vingtaine d'enfants à gérer, c'est matériellement impossible. Oser essayer se fait en 1:1, avec une séance entièrement consacrée à votre enfant. »
5. **« Pourquoi 13 semaines ? »** → « Les programmes reconnus de développement des habiletés socio-émotionnelles durent en général de 10 à 16 semaines. Et il faut en moyenne plus de deux mois pour qu'un nouveau comportement devienne automatique. 13 semaines, c'est le temps de pratiquer, puis d'ancrer. »
6. **« Est-ce que ce programme remplace un suivi psychologique ? »** → « Non. THRIVE est un programme de coaching et de développement des habiletés. Il ne remplace pas un suivi psychologique. Si votre enfant vit une détresse importante ou a reçu un diagnostic, nous vous orienterons vers un professionnel. »
7. **« Où et quand ont lieu les séances ? »** → « À Montréal, sur le Plateau-Mont-Royal, à un créneau fixe chaque semaine. Il n'y a rien à préparer : vous déposez votre enfant, on s'occupe du reste. »

**12. CTA final** — **« Qu'il ose essayer. Et qu'il recommence. »**
> « 13 semaines pour pratiquer l'art de se lancer, de persévérer et de rebondir, avec des progrès mesurés au début et à la fin. »
Boutons : **« Réserver un appel gratuit »** · **« Découvrir Aller vers les autres »**

---

## 9. FICHE PRODUIT — `/programmes/aller-vers-les-autres`
*Page entièrement **écrite en dur** dans `src/pages/AllerVersLesAutres.jsx` — aucune version anglaise.*

**SEO**
- Titre : **« Aller vers les autres | Programme habiletés sociales pour enfants — THRIVE »**
- Description : **« Votre enfant passe souvent la récré seul ? 13 semaines à Montréal pour apprendre à aborder les autres, proposer une activité et entretenir une amitié : 1:1, petit groupe et défi social. 2 000 $ + tx. »**

**1. Hero** — pastille **« Le programme habiletés sociales »** · H1 **« Aller vers les autres »** · accroche **« Il passe souvent la récré seul et n'ose pas inviter un ami ? »**
> « En 13 semaines, votre enfant apprend concrètement à aborder les autres, à proposer une activité et à entretenir une amitié. Il pratique d'abord en 1:1, puis en petit groupe, puis dans sa vraie vie, avec votre soutien. »
Boutons : **« Réserver un appel gratuit »** → `/liste-attente?source=site&programme=autres` · **« Voir ce qui est inclus »**
4 preuves : **26 séances** / « 13 en 1:1 + 13 en groupe » — **1 déplacement** / « par semaine » — **1 défi social** / « par semaine, dans sa vie » — **8 à 11 ans** / « premiers groupes »

**2. « Vous le reconnaissez ? »** — « À qui s'adresse Aller vers les autres ? »
- **« Il a encore joué seul »** — « Il rentre de la récré et vous raconte qu'il est resté dans son coin. Encore une fois. »
- **« Dans son équipe, il est là… mais à côté »** — « Il fait partie du groupe sur le papier, mais personne ne lui passe la balle et il n'ose pas la demander. »
- **« Il n'est jamais invité »** — « Les anniversaires, les sorties, les après-midi chez un ami : ça se passe souvent sans lui. »
- **« Il n'ose pas faire le premier pas »** — « Il aimerait avoir un ami, mais il ne sait pas comment aborder les autres ni proposer une activité. »
Clôture : « Pour les parents qui ont le cœur serré de voir leur enfant seul. »

**3. « Pratiquer à l'abri, puis dans la vraie vie. »**
- **« D'abord le 1:1, sans public »** — « Chaque semaine commence par une séance individuelle de la Méthode THRIVE : un espace protégé, sans le regard des autres, pour préparer ce qui sera pratiqué ensuite. »
- **« Puis le petit groupe, pour s'entraîner »** — « Juste après, une séance avec quelques enfants qui apprennent la même méthode. Le groupe est un terrain d'entraînement : on y essaie ce qu'on vient de préparer. »
- **« Un défi social dans sa vraie vie »** — « Inviter un camarade, proposer un jeu : un défi par semaine hors programme, préparé avec vous. C'est l'ingrédient clé des programmes de référence en habiletés sociales : l'amitié se construit dehors. »
- **« Vous, outillé pour l'aider »** — « Un court point parent chaque semaine pour préparer et soutenir le défi. Vous savez enfin comment l'aider concrètement. »

**4. « Des preuves, pas seulement des impressions. »** — « On compte ce qui se voit, de la même façon au début et à la fin. Pas pour mettre votre enfant dans une case, mais pour que vous voyiez le chemin parcouru. »
- *Semaine 1 vs semaine 13* → **« En groupe »** : « Le nombre d'échanges que votre enfant lance lui-même, sans être poussé par le coach. Et s'il reste en retrait ou non pendant les exercices à deux. »
- *Le dernier mois* → **« Dans sa vraie vie »** : « Au moins une invitation ou une activité proposée à un camarade, en dehors du programme. C'est l'indicateur retenu par les programmes de référence. »
- *Début et fin* → **« Avant / après »** : « Le même questionnaire au début et à la fin du programme, et des bilans courts en cours de route. »

**5. « Les jalons »** — « Des points clairs aux moments clés. » / **« Vous voyez les progrès avant la fin du programme »** — « Un bilan court à chaque étape, pour savoir où en est votre enfant et ajuster si besoin. »
- « Semaine 4 : ses premiers échanges lancés en groupe, mesurés. »
- « Semaine 8 : son premier défi social réalisé dans sa vraie vie. »
- « Semaine 13 : la séance de remise, avec le bilan avant / après et le Book THRIVE. »

**6. « Un bilan que les parents comprennent vraiment. »** → **« Des situations du quotidien, pas du jargon. »**
- « Ce que votre enfant ose faire aujourd'hui, comparé au départ »
- « Les défis sociaux réalisés, semaine après semaine »
- « Ce qui a bien marché, et ce qui reste à pratiquer »
- « Ce qu'on vous recommande pour la suite »

**7. « Entre les séances, vous n'êtes pas seul. »** — « L'amitié se construit en dehors du programme. Chaque semaine, on prépare avec vous ce que votre enfant va essayer dans sa vraie vie. »
Badges : « Point parent chaque semaine » · « Défi social préparé ensemble » · « Suivi dans l'app » · « Bilans semaines 4 et 8 »

**8. « Tout ce qui est inclus »** (7 lignes)
- **Séance découverte** — « Une séance complète qui pose le point de départ de votre enfant. 97 $ + tx, déduits de votre premier versement si vous continuez. »
- **13 séances individuelles** — « La Méthode THRIVE en 1:1, une par semaine : l'espace protégé pour préparer. »
- **13 séances en petit groupe** — « Le même jour, juste après le 1:1 : un seul déplacement par semaine. 6 enfants maximum pour un coach. »
- **1 défi social par semaine** — « Inviter un camarade, proposer un jeu : à vivre hors programme, préparé avec vous. »
- **Point parent hebdomadaire** — « Un court échange chaque semaine pour préparer et soutenir le défi. »
- **Mesure avant / après** — « Le même questionnaire au début et à la fin, et des bilans courts aux semaines 4 et 8. »
- **Séance de remise + Book THRIVE** — « En semaine 13 : le bilan avant / après, la synthèse de ce qu'il a appris et la suite possible. »

**9. « Ce qu'il faut savoir avant de choisir »**
- « Les groupes démarrent à dates fixes, pour que tous les enfants commencent ensemble. Les premiers groupes sont ouverts aux enfants de 8 à 11 ans. »
- « Nous ne promettons pas un groupe d'amis : nous travaillons chaque semaine les gestes qui permettent d'en créer et d'en garder un, et nous mesurons les progrès. »
- « L'approche s'inspire des programmes de référence en habiletés sociales (PEERS®, UCLA). Ils ont surtout été validés auprès d'adolescents autistes ; leur efficacité chez des enfants simplement timides ou isolés est plausible, mais moins démontrée. »
- « Ce n'est pas une psychothérapie : THRIVE ne remplace pas un suivi psychologique. Si votre enfant vit une détresse importante ou a reçu un diagnostic, nous vous orienterons vers un professionnel. »
Renvoi : « Le regard des autres lui fait peur ? On commence souvent par **Oser essayer** : 13 séances en 1:1 pour reprendre confiance, avant de passer au groupe. »

**10. Prix** — **« Investissement »** · **« 2 000 $ + tx »**
> « 26 séances sur 13 semaines. Rien à payer à l'inscription : 2 versements de 1 000 $ + tx, le premier en semaine 3, le second en semaine 7. »
Mention : « Les 2 premières séances sont à l'essai : si vous n'êtes pas convaincu, vous arrêtez et elles ne vous sont pas facturées. Ensuite, vous pouvez arrêter à tout moment. »

**11. FAQ (7 questions)**
1. **« Mon enfant est très timide : le groupe ne va-t-il pas lui faire peur ? »** → « C'est pour ça que chaque semaine commence en 1:1, sans public : on prépare ensemble ce qu'il va essayer en groupe. On en parle avec vous dès la séance découverte, et si le groupe arrive trop tôt pour lui, on commence par Oser essayer. »
2. **« Vous promettez qu'il aura des amis ? »** → « Non, et personne ne peut honnêtement le promettre. Nous promettons le travail : chaque semaine, votre enfant apprend et pratique concrètement à aborder les autres, à proposer une activité et à entretenir une relation. Et nous mesurons ce qui change, au début et à la fin. »
3. **« Pourquoi le 1:1 et le groupe le même jour ? »** → « Pour vous simplifier la vie : un seul déplacement par semaine. Et parce que le 1:1 prépare directement ce qui sera pratiqué en groupe juste après. »
4. **« Pour quel âge ? »** → « Les premiers groupes sont ouverts aux enfants de 8 à 11 ans, pour que les enfants d'un même groupe aient des défis comparables. »
5. **« Quand commencent les groupes ? »** → « Les groupes démarrent à dates fixes, pour que tous les enfants commencent ensemble. Réservez un appel : on vous indique la prochaine date de départ. »
6. **« Et si ça ne convient pas à mon enfant ? »** → « Les deux premières semaines sont une période d'essai : si vous n'êtes pas convaincu, vous arrêtez et elles ne vous sont pas facturées. Ensuite, vous pouvez arrêter à tout moment : vous ne payez que les séances suivies. »
7. **« Est-ce une thérapie ? »** → « Non. THRIVE est un programme de coaching et de développement des habiletés. Il ne remplace pas un suivi psychologique. Si votre enfant vit une détresse importante ou a reçu un diagnostic, nous vous orienterons vers un professionnel. »

**12. CTA final** — **« Qu'il fasse le premier pas. Et qu'il garde un ami. »**
> « 13 semaines pour apprendre à aller vers les autres : à l'abri en 1:1, en petit groupe, puis dans sa vraie vie, avec vous. »
Boutons : **« Réserver un appel gratuit »** · **« Découvrir Oser essayer »**

---

## 10. FICHE PRODUIT — `/programmes/le-moment-qui-compte`
*Page entièrement **écrite en dur** dans `src/pages/MomentQuiCompte.jsx` — aucune version anglaise.*

**SEO**
- Titre : **« Le moment qui compte | 10 minutes par jour avec votre enfant — THRIVE »**
- Description : **« Chaque jour, une activité de 10 minutes à faire avec votre enfant, sans rien préparer, avec l'explication du pourquoi. 1 mois d'essai gratuit, puis 15 $ + tx toutes les 2 semaines, sans engagement. »**

**1. Hero** — pastille **« L'abonnement famille THRIVE »** · H1 **« Le moment qui compte »** · accroche **« 10 minutes ce soir. Rien à préparer. Et il s'en souviendra. »**
> « Chaque jour, une activité de 10 minutes à faire avec votre enfant, conçue à partir de la recherche sur le lien parent–enfant, avec l'explication du pourquoi. Parce que ce n'est pas le nombre d'heures qui compte, c'est la qualité du moment. »
Boutons : **« Créer mon compte »** → `app.thrivesportpositive.com/login?mode=signup` · **« Voir ce qui est inclus »**
4 preuves : **10 minutes** / « par jour » — **0 préparation** / « 0 matériel » — **1 mois** / « d'essai gratuit » — **Sans engagement** / « résiliable à tout moment »

**2. « Vous vous reconnaissez ? »** — « À qui s'adresse Le moment qui compte ? »
- **« Il est déjà en pyjama »** — « Vous rentrez à 19 h, il est déjà prêt pour le lit, et vous vous sentez coupable de ne pas l'avoir vu de la journée. »
- **« Vous ne le voyez pas grandir »** — « Entre le travail, la fatigue et la pression, les semaines filent. Vous avez l'impression de passer à côté. »
- **« Pas le temps de préparer »** — « Vous voulez un vrai moment avec lui, mais vous n'avez ni le temps ni l'énergie de chercher quoi faire. »
Clôture : « Pour les parents qui manquent de temps, pas d'amour. »

**3. « Pourquoi 10 minutes suffisent. »**
- **« La qualité avant la quantité »** — « Chez les enfants de 3 à 11 ans, la recherche trouve que le nombre d'heures passées avec leur mère n'est presque pas lié à leur développement. Ce qui compte, c'est ce qui se passe pendant ce temps. »
- **« Moins de culpabilité, plus de présence »** — « Le stress et la culpabilité du parent peuvent peser davantage que les heures manquées. Dix minutes vraiment présentes valent mieux qu'une soirée à s'en vouloir. »
- **« Un format court et reconnu »** — « Quelques minutes par jour d'un « moment spécial » parent–enfant : c'est un format utilisé par des programmes reconnus d'accompagnement des familles. »
- **« La pratique à la maison, c'est le programme »** — « Les programmes parentaux les plus efficaces font pratiquer le parent avec son propre enfant. Pas de théorie à lire : un geste à faire, ce soir. »
⚠️ « enfants de 3 à 11 ans » — à rapprocher du positionnement 8-17 ans du reste du site.

**4. « Au quotidien »** — « Comment ça marche, concrètement. »
- *À l'heure choisie* → **« Une notification »** : « Vous choisissez le moment de la journée qui vous convient » / « L'activité du jour se lit en 20 secondes »
- *10 minutes* → **« Le moment ensemble »** : « Zéro préparation, zéro matériel : ce que vous avez déjà à la maison » / « Une activité tirée de la Méthode THRIVE, selon l'âge de votre enfant »
- *Une ligne* → **« Le pourquoi »** : « Chaque activité explique en une phrase ce qu'elle développe chez votre enfant » / « Vous comprenez ce que vous faites, et pourquoi ça compte »
- *Semaine 4* → **« Le bilan »** : « Combien de moments vous avez partagés » / « Et le signe qui ne trompe pas : votre enfant réclame-t-il le moment ? »

**5. « Ce que vous verrez changer. »** — « Trois repères simples, suivis dans l'app. Aucun jargon, aucune note clinique : seulement ce qui se passe chez vous. »
- **« Les moments partagés »** — « Le nombre de moments réalisés chaque semaine. L'objectif : au moins 3 par semaine, 4 semaines de suite. »
- **« Il réclame le moment »** — « Le signe le plus parlant : c'est votre enfant qui vous demande « on fait notre moment ce soir ? ». »
- **« Votre ressenti »** — « Une question par semaine sur votre culpabilité, de 0 à 10. C'est votre ressenti de parent, pas un score. »

**6. « La Méthode THRIVE, à la maison. »**
- **« Pour commencer en douceur »** — « La façon la plus simple de découvrir la méthode, sans vous engager. » : « Un mois d'essai gratuit pour voir si ça vous ressemble » · « Dix minutes par jour, à votre rythme » · « Le pourquoi de chaque activité, pour comprendre ce que vous faites »
- **« Pour prolonger un programme »** — « Les activités viennent de la même méthode que nos programmes en séance. » : « Après Oser essayer ou Aller vers les autres, le lien continue à la maison » · « Ce que votre enfant a appris en séance se prolonge au quotidien » · « Vous restez acteur de sa progression »

**7. « Sans engagement, pour de vrai. »** — « Vous restez parce que ça vous apporte quelque chose, jamais parce qu'il est compliqué de partir. L'annulation reste simple et visible, à tout moment. »
Badges : « 1 mois d'essai gratuit » · « Rappel avant la fin de l'essai » · « Annulation simple, à tout moment » · « Prélèvement toutes les 2 semaines »

**8. « Tout ce qui est inclus »**
- **1 activité par jour** — « 10 minutes, dans l'app, à faire avec votre enfant. »
- **Le pourquoi** — « Une ligne d'explication psychologique pour chaque activité. »
- **Zéro préparation** — « Aucun matériel à acheter, une activité lisible en 20 secondes. »
- **Une notification** — « À l'heure que vous choisissez, pour ne pas y penser. »
- **Un bilan à 4 semaines** — « Les moments réalisés, et si votre enfant réclame le moment. »
- **1 mois d'essai gratuit** — « Avec un rappel avant la fin de l'essai. Annulation simple, à tout moment. »

**9. Prix** — **« Abonnement »** · **« 15 $ + tx »** · **« toutes les 2 semaines »**
> « Un premier mois d'essai gratuit. Un prélèvement toutes les deux semaines, au rythme de la paie. Sans engagement : vous arrêtez quand vous voulez. »
Mention : « Votre compte est actif tout de suite, dans l'app web THRIVE. »

**10. FAQ (7 questions)**
1. **« 10 minutes par jour, ça suffit vraiment ? »** → « Oui, si ces 10 minutes sont vraiment consacrées à votre enfant. Chez les 3–11 ans, la recherche montre que la qualité du moment compte bien plus que le nombre d'heures. L'objectif n'est pas de tout faire, mais de le faire bien, régulièrement. »
2. **« Et quand il devient adolescent ? »** → « À l'adolescence, le temps partagé compte davantage. Raison de plus pour installer tôt l'habitude d'un vrai moment ensemble, court et régulier. »
3. **« Faut-il préparer quelque chose ? »** → « Non. Aucun matériel à acheter, aucune préparation : l'activité se lit en 20 secondes et se fait avec ce que vous avez déjà à la maison. »
4. **« Comment fonctionne l'essai gratuit ? »** → « Vous profitez d'un mois complet gratuitement. Nous vous envoyons un rappel avant la fin de l'essai, et vous pouvez annuler simplement, à tout moment. »
5. **« Pourquoi un prélèvement toutes les 2 semaines ? »** → « Parce que la plupart des familles sont payées toutes les deux semaines : le prélèvement tombe au même rythme que la paie. C'est 15 $ + tx à chaque fois, sans engagement. »
6. **« Est-ce une thérapie ? »** → « Non. Le moment qui compte propose des activités parent–enfant tirées de la Méthode THRIVE. Il ne remplace pas un suivi psychologique. Si votre enfant vit une détresse importante, nous vous orienterons vers un professionnel. »
7. **« Quel lien avec les programmes THRIVE ? »** → « Les activités viennent de la même Méthode THRIVE que nos programmes Oser essayer et Aller vers les autres. Vous pouvez commencer par Le moment qui compte pour découvrir la méthode, ou l'utiliser pour prolonger un programme à la maison. »

**11. CTA final** — **« Dix minutes ce soir. Un souvenir pour lui. »**
> « Ce n'est pas le nombre d'heures qui compte. C'est la qualité du moment. »
Boutons : **« Créer mon compte »** · **« Découvrir les programmes »** → `/prix`

---

## 11. PAGE À PROPOS — `/a-propos` (clés `about.*`)

**SEO** (`seo.about.*`)
- Titre : **« Notre Mission : Psychologie et Performance Sportive | THRIVE »**
- Description : **« Découvrez l'histoire et la mission de THRIVE. Une équipe dédiée à la préparation mentale et au développement personnel des jeunes athlètes pour allier performance et bien-être. »**

- Titre : **« L'Élite du Mentorat Sportif »**
- Sous-titre : **« Plus qu'un préparateur mental jeune athlète Québec, nous sommes des éducateurs de la confiance. »**
- Intro : « Fondé par d'anciens athlètes de haut niveau reconvertis, Thrive comble le fossé entre la performance brute et le bien-être mental pour cultiver la résilience de vos enfants. »

**3 colonnes**
1. **« Sélection Drastique »** — « Chaque mentor est trié sur le volet selon deux critères non-négociables : une **expérience terrain significative** (athlète universitaire ou pro) et une solide **connaissance académique** en psychologie ou pédagogie. »
2. **« Formation Thrive Certifiée »** — « Avant de rencontrer votre enfant, tous nos coachs suivent une formation intensive à la **Psychologie Positive Appliquée**. Ce cursus est vérifié et validé par notre comité pédagogique pour garantir l'approche Thrive. »
3. **« Test & Validation »** — « La théorie ne suffit pas. Chaque coach passe un **examen pratique** en situation réelle. Seuls ceux qui démontrent 100% de maîtrise de la communication positive et de la sécurité affective sont validés. »

**« L'Histoire Thrive : De la Glace à la Science »**
> « **Thrive** est né d'une trajectoire unique : celle d'un **athlète de haut niveau** confronté aux extrêmes de la pression sportive, combinée à la rigueur intellectuelle de l'**Université de Montréal**. »

- **« L'Alliance Scientifique UdeM »** — « Ce projet a été co-construit main dans la main avec des professeurs émérites de l'Université de Montréal. Ils ont accompagné le développement de la méthode d'A à Z, validant l'analyse minutieuse de plus de **120 études scientifiques**. Thrive repose sur des bases prouvées et fiables. »
- **« La Science de la Mesure »** — « Nous ne devinons pas le progrès, nous le mesurons. Grâce à des échelles scientifiques reconnues, nous évaluons l'état de l'enfant **avant et après chaque séance**. Ces données permettent un débriefing précis aux parents pour valoriser concrètement chaque victoire et ancrer la confiance. »
- Citation finale : **« "Nous pensons que l'essence de la joie et de la prospérité naît de la positivité." »**

⚠️ Points à valider juridiquement/factuellement : **« co-construit avec des professeurs émérites de l'Université de Montréal »**, **« validé par notre comité pédagogique »**, **« 100% de maîtrise »**, **« 120 études scientifiques »**, **« Fondé par d'anciens athlètes de haut niveau »** (pluriel). Ce sont des affirmations fortes, affichées publiquement.

---

## 12. PAGE ZONES — `/zones`
Affiche **uniquement** la section « Nos Lieux d'Intervention » décrite au **§4.7** (même composant, mêmes textes).
**SEO** (`seo.zones.*`)
- Titre : **« Aide Aux Devoirs Montréal | Zones Desservies — Thrive »**
- Description : **« Nous nous déplaçons dans la région de Montréal, Laval et Longueuil. À domicile, en aréna ou au parc, trouvez un coach certifié. Contactez-nous ! »**

⚠️ Le titre SEO parle d'**« Aide Aux Devoirs »** et la description de **« Laval et Longueuil »**, alors que la page affiche « Centre Saint-Denis, Montréal » et que l'offre n'est pas du soutien scolaire. **Incohérence forte, visible dans Google.**

---

## 13. LANDING LISTE D'ATTENTE — `/liste-attente` (clés `waitlist_page.*`)
*Page autonome : **pas de Navbar, pas de Footer du site**. C'est la cible du QR code et de la bio Instagram.*

**SEO**
- Titre : **« Liste d'attente — Thrive Sport Positive »**
- Description : **« Rejoignez la liste d'attente de la cohorte du 6 septembre 2026. Appel de qualification gratuit de 20 minutes. »**

**En-tête** : logo (→ `/`), sélecteur FR | EN, téléphone **(263) 362-2030**, lien **« Retour »**

**Contenu**
- Pastille : **« Liste d'attente · Cohorte du 6 septembre 2026 »**
- H1 : **« Et si le sport devenait son meilleur cours de *confiance* ? »**
- Intro : « Thrive accompagne les jeunes de 8 à 17 ans sur 13 séances à Montréal. Laissez vos coordonnées : on vous rappelle pour en parler, sans engagement. »
- Image : `src/assets/waitlist-hero.jpg`, alt **« Jeune athlète accompagné par un coach Thrive »**
- 3 chiffres : **13** « séances structurées » · **8** « piliers scientifiques » · **8-17** « ans accompagnés »

**Formulaire** (écrit dans `public.waitlist` sur Supabase)
- Titre : **« Rejoindre la liste d'attente »** · Sous-titre : **« Appel de qualification gratuit de 20 min. »**
- Champ **« Le programme qui vous intéresse »** — 3 choix : **« Oser essayer »** · **« Aller vers les autres »** · **« Je ne sais pas encore »**
  (présélectionné via `?programme=essayer` ou `?programme=autres` ; enregistré dans la colonne `pack` sous `OSER_ESSAYER` / `ALLER_VERS_LES_AUTRES`)
- **« Prénom du parent »** — exemple : « Marie »
- **« Courriel »** — exemple : « marie@courriel.com »
- **« Téléphone »** — exemple : « (514) 000-0000 »
- Bouton : **« Je réserve ma place »** (pendant l'envoi : **« Envoi… »**)
- Consentement : **« En réservant ma place, j'accepte d'être recontacté par Thrive à ce sujet. Retrait possible à tout moment sur simple demande. »**
- Messages d'erreur : « Indiquez votre prénom. » · « Cette adresse courriel ne semble pas valide. » · « Indiquez un numéro de téléphone valide. » · « L'inscription n'a pas pu être enregistrée. Réessayez dans un instant. »
  ⚠️ Ces 3 premiers messages sont **écrits deux fois** : dans les traductions **et** en dur dans `src/lib/waitlist.js` (lignes 57-66). Ceux affichés sont ceux des traductions.
- Confirmation : **« C'est noté, merci. »** / « Vous êtes sur la liste prioritaire. Nous vous contactons sous 48 h. » / lien **« revoir le formulaire »**

**« Comment ça se passe »** (3 étapes)
1. **« Vous laissez vos coordonnées »** — « 30 secondes, aucun paiement. »
2. **« On s'appelle 20 minutes »** — « Pour comprendre votre enfant et répondre à vos questions. »
3. **« Vous recevez les détails du cycle »** — « Dates, lieu, déroulé des 13 séances. »

**Bandeau de rareté** : **« Cohorte du 6 septembre 2026 »** · **« 2 places restantes · 47 familles déjà inscrites »**

**Pied de page de la landing** : **« © 2026 Thrive Sport Positive · Montréal, 5115 rue Rivard »** + `info@thrivesportpositive.com`

**Suivi d'acquisition** (`src/lib/waitlist.js`) : le paramètre `?source=` (ou `?utm_source=`) est normalisé en 4 valeurs — **`qr`**, **`insta`**, **`site`**, **`direct`**.

---

## 14. TUNNEL DE RÉSERVATION — `/booking` (clés `booking.*`)

⚠️ **Cette page est un reste de l'ancienne offre et n'est plus cohérente avec les 3 programmes.** Elle reste accessible (lien depuis `/sport` et depuis le bouton « Réserver l'évaluation » de `Cta.jsx`, lui-même non affiché) et **elle est prérendue pour Google**.

**SEO** (`seo.booking.*`)
- Titre : **« Réserver votre séance | Psychologie Sportive — THRIVE »**
- Description : **« Prêt pour le changement ? Planifiez votre séance d'évaluation psychologie sportive ou votre Pack Diagnostic. Processus simple et sécurisé. »** ⚠️ parle du **« Pack Diagnostic »**, retiré de l'offre.
- H1 affiché : **« Réservation »** (écrit en dur)

**Étape 1 — « Parlez-nous de votre enfant »** (`BookingForm.jsx`) : « Ces informations permettent au mentor de préparer la séance. »
- « Prénom de l'enfant » (ex. : Thomas) · « Âge » (ex. : 8)
- « Niveau de bien-être actuel (1-10) » + bouton « Comprendre l'échelle » → « 1 = Extrêmement triste » / « Renfermé sur soi, détresse visible » … « 10 = Très joyeux » / « Épanoui, confiant, ouvert » ; « Critères d'aide à la décision : » « Notes basses (1-4) : L'enfant ne parle pas, pleure souvent, a peur de quitter ses parents, s'isole... » / « Notes moyennes (5-7) : Quelques moments de joie mais fragile, hésitant dans les interactions. » / « Notes hautes (8-10) : Va vers les autres, sourit, gère bien la séparation, un petit problème précis à résoudre. »
- « Principal défi ou trait de caractère » : Peur d'agir / Hésitation · Ne parle pas aux autres / Timidité · Est seul(e) à l'école / Isolement · Manque de confiance en soi · Difficultés de concentration · Difficulté à gérer ses émotions · Autre
- « Troubles diagnostiqués ou suspectés (Optionnel) » : Aucun · TDAH · TSA · Dyslexie · Dysorthographie · Dyscalculie · Dysphasie · Dyspraxie · Trouble de l'Anxiété · Trouble de l'Opposition (TOP) · Haut Potentiel Intellectuel (HPI)
- « Description libre (Optionnel) » — « Parlez-nous un peu plus de votre enfant, de ses besoins spécifiques ou de ce que vous aimeriez travailler. »
- Bouton : **« Voir ma recommandation »**

**Étape 2 — Recommandation** (`RecommendationView.jsx`) : « Notre recommandation pour {{prénom}} », « Basé sur votre bilan, ce programme est le plus adapté. », « Pourquoi ce pack ? », les 3 justificatifs `r_reason_perf` / `r_reason_adv` / `r_reason_ess` qui parlent de **13, 6 et 3 séances**.
⚠️ **Cassé** : ce composant cherche les programmes `performance`, `advanced`, `essential`, qui **n'existent plus**. Il affiche donc des clés brutes du type `pricing.performance.label`.

**Étape 3 — Choix du sport** : « Confirmez votre discipline » / « Quelle discipline pratiquez-vous ? », « Pack sélectionné : », « Nos coachs sont spécialisés. Sélectionnez votre sport pour que nous puissions vous attribuer l'expert idéal. », bouton « Continuer vers le calendrier »

**Étape 4 — Cal.com** : « Étape 4 sur 4 » / « Finaliser la réservation » / « Choisissez votre créneau pour le programme … »
Liens Cal.com encore référencés : `thrive-sport-positive/seance-l-vance`, `thrive-sport-positive/pack-1-l-essentiel`, `thrive-sport-positive/pack-3-performance-elite`, `thrive-sport-positive/30min`.
⚠️ Les 3 premiers correspondent aux anciens packs.

**Étape 5 — Succès** : **« Félicitations ! »** / « Votre place est sécurisée. Bienvenue dans la famille Thrive. Un reçu officiel a été envoyé à votre adresse courriel. » / « Prochaines étapes » : « Email de confirmation reçu. » · « Votre mentor vous contactera d'ici 24h. » / bouton « Retour à l'accueil »
⚠️ Parle d'un **reçu officiel** et d'une **place sécurisée** alors qu'aucun paiement n'a lieu sur le site.

---

## 15. TEXTES PRÉSENTS DANS LE SITE MAIS **JAMAIS AFFICHÉS**

Ces textes existent dans `src/locales/fr/translation.json` (et parfois en anglais) mais **aucun visiteur ne les voit**.
Deux options pour chacun : **le rebrancher** (il faut modifier le code) ou **le supprimer** (nettoyage).

### 15.1 Sections entières jamais rendues
| Clés | Contenu | Pourquoi invisible |
|---|---|---|
| `home.method_teaser.*` | **« La Méthode Thrive : Performance par le Bonheur »** + 3 cartes (Modèle PERMA / Progression Visible / Sécurité Affective) + citation **« "Le sport est le meilleur laboratoire pour la vie." »** + bouton « Voir comment nous mesurons le progrès » | aucun composant ne les lit |
| `home.parent.*` | **« Notre Engagement Parents »** + 3 cartes (Sécurité & Éthique / Anxiété de Performance / Bénéfices Scolaires) | aucun composant ne les lit |
| `method.perma.*` | les 5 lettres de PERMA détaillées (Émotions Positives, Engagement/Flow, Relations Positives, Meaning, Accomplissement) | aucun composant ne les lit |
| `home.cta.*` | **« Prêt à révéler le potentiel de votre enfant ? »** + « Les places sont limitées pour garantir la qualité du mentorat. Réservez votre évaluation dès aujourd'hui et commencez le changement. » + bouton « Réserver l'évaluation » | le composant `Cta.jsx` existe mais **n'est inséré dans aucune page** |
| `waitlist.*` (tout le bloc : hero, what_is, benefits, science, rarity, form, how_it_works, pricing, faq, contact) | ~60 textes, dont **« 20 places seulement pour le lancement de septembre 2026 »**, **« À Montréal, au 5115 rue Rivard. »**, les tarifs `tier_*`, le téléphone | ces textes alimentaient l'ancienne landing `src/pages/Evaluation.jsx`, qui **n'est plus branchée** (la route `/evaluation` redirige) |
| `evaluation.*` | **« Réservez votre place gratuitement »**, « Le Bilan Rapide », « Planifier la Rencontre », « Contact Direct », **« (Lundi-Samedi 9h-18h) »** | idem : page `Evaluation.jsx` hors circuit |
| `seo.programs.*` | **« Tuteur Parascolaire Montréal \| Nos Programmes — Thrive »** | plus aucune page ne l'utilise |
| `seo.evaluation.*` | **« Évaluation Mentale & Sportive \| Rendez-vous — THRIVE »** | la route redirige |

### 15.2 Clés isolées non affichées
- `nav.programs` → « Programmes »
- `home.authority.item1` → **« Supervisé par l'UdeM »** (le bandeau n'affiche que les items 2 et 3)
- `home.hero.badge1_title`…`badge5_desc` → **« Résultat prouvé / +31% Performance »**, **« Potentiel / 3x Plus de Créativité »**, **« Rigueur / 120+ Études Analysées »**, **« École / +11% Réussite Scolaire »**, **« Bien-être / Réduction des Troubles »**
- `method.cta_primary` et `method.final_cta.btn_primary` → « Réserver ma visio de 30 min » (remplacés à l'écran par « Rencontrer un de nos coachs gratuitement »)
- `method.problem.quote` → « Le club entraîne les gestes. Le psychologue traite les crises. THRIVE enseigne les compétences mentales — avant la crise. »
- `pricing.packs.subtitle` et `pricing.packs.note`
- `pricing.sessions_label` est utilisé, mais `pricing.cta_booking` / `cta_signup` le sont via `cta_${action}` — OK.
- `about.hist_intro_1` et `pricing.hero.title_2` sont des chaînes **vides** volontaires.

### 15.3 Fichiers de page morts (code non branché)
- `src/pages/Evaluation.jsx` — ancienne landing, conservée intacte « au cas où », non routée.
- `src/pages/DiagnosticPack.jsx` — **586 lignes**, page de l'ancien Pack Diagnostic, **importée nulle part**. Contient encore des liens Cal.com `thrive-sport-positive/thrive-performance-13-seances-du-dimanche`.
- `src/components/waitlist/*` (8 composants : Hero, WhatIs, Benefits, Science, HowItWorks, Pricing, FAQ, Form) — utilisés uniquement par `Evaluation.jsx`, donc invisibles.
- `src/components/booking/CalBooking.jsx`, `SportSelection.jsx`, `RecommendationView.jsx`, `BookingForm.jsx`, `SuccessView.jsx` — utilisés par `/booking`, page résiduelle (voir §14).

---

## 16. ANOMALIES ET INCOHÉRENCES À CORRIGER

### 16.1 Bug bloquant — le Widget Diagnostic plante
`src/components/ui/DiagnosticWidget.jsx` (affiché en bas de **l'Accueil**, de **Le Sport** et de **La Méthode**) recommande les anciens packs `essential` / `advanced` / `performance`.
- Ligne 65 : `PRICING_DATA.find(p => p.id === rec.key)` → **renvoie `undefined`** (ces identifiants n'existent plus dans `src/data/pricing.js`).
- Ligne 198 : `program.featureKeys.slice(0, 3)` → **erreur JavaScript** dès que le visiteur répond aux 3 questions.
- Ligne 194 : afficherait de toute façon la clé brute `pricing.essential.label`.
**Conséquence : le questionnaire « diagnostic » se casse à la dernière étape sur 3 pages du site.** À tester en priorité.

### 16.2 Même problème sur `/booking`
`RecommendationView.jsx` (lignes 13-21) et `Booking.jsx` (étape Cal.com) utilisent les mêmes anciens identifiants → clés brutes affichées et liens Cal.com périmés.

### 16.3 Dates périmées (nous sommes le 14 octobre 2026)
- « Cohorte du 6 septembre 2026 » (affiché 3 fois sur `/liste-attente`)
- « 2 places restantes · 47 familles déjà inscrites » (valeurs figées dans le code)
- « session du 6 septembre jusqu'au 29 novembre », « lancement de septembre 2026 » (textes non affichés, mais présents)

### 16.4 Vocabulaire de l'ancienne offre encore visible
- Pied de page : **« régler les "Packs" en plusieurs mensualités »**
- `/methode`, Les 3 Acteurs : **« selon son pack (calls S1, S7, S13) »**
- `/booking` SEO : **« votre Pack Diagnostic »**
- `booking.r_why` : **« Pourquoi ce pack ? »**

### 16.5 Contradictions internes
| Sujet | Version A | Version B |
|---|---|---|
| Âge | « 8 à 17 ans » (Logistique, Prix, liste d'attente) | « 7-17 ans » (SEO accueil) · « 2-5 ans » (FAQ accueil q3) · « 3 à 11 ans » (Le moment qui compte) |
| Lieu | « Centre Saint-Denis, 5115 Rue Rivard » | « sur les terrains extérieurs, à la patinoire, dans les arénas locaux, ou à domicile » (FAQ accueil q2) · « Plateau-Mont-Royal » (Prix, Oser essayer) |
| Présence du parent | « N'assiste pas aux séances — pour préserver l'espace de l'enfant » (`/methode`) | « nous vous encourageons à assister aux 5 dernières minutes » (FAQ accueil q3) |
| Durée de séance | « 5 temps » totalisant **60 min** (`/methode`) | « de 60 à 70 min » (Prix, Oser essayer) |
| Garantie | « Transfert **garanti** : sport → vie » (`/methode`) | « Nous promettons le travail fait chaque semaine et la mesure des progrès, **pas un résultat garanti** » (Oser essayer) |
| Nature du service | « tutorat sportif » (meta description de `index.html`, FAQ assurances) · « Aide Aux Devoirs » (SEO Zones) | « programme de coaching et de développement des habiletés » (partout ailleurs) |
| Jalons parents | semaines **4, 8 et 13** (pages produit) | **S1, S7, S13** (`/methode`) |

### 16.6 Fautes et détails d'affichage
- `/zones` et accueil : **« des installations de de haute qualité »** (clés `home.locations.desc_1_2` + `desc_1_b2`)
- `home.locations.box_title` commence par une **espace** : `" Service Privé à Domicile"`
- `waitlist.hero.booking_dates` : « 13 **seances** » (sans accent) — texte non affiché
- Téléphone **(263)** : indicatif inexistant au Québec
- `og:image` = le **favicon** → vignette de partage social illisible

### 16.7 SEO / référencement
- Le sitemap liste `/evaluation` (redirection) et **oublie `/liste-attente`**
- Titre SEO `/zones` : « Aide Aux Devoirs Montréal » — hors sujet
- SEO `/sport` mentionne la **gymnastique**, absente du site
- `vercel.json` réécrit toute URL vers `/` : les pages prérendues sont bien servies, mais toute **nouvelle** page oubliée dans `prerender.js` sera servie sans son contenu SEO

---

## 17. ÉTAT DE LA VERSION ANGLAISE

Le sélecteur FR/EN est présent dans la barre de navigation et sur `/liste-attente`.
**FR : 856 textes · EN : 768 textes.** Le repli (`fallbackLng: 'fr'`) fait que tout texte manquant en anglais **s'affiche en français**.

**Ce qui s'affiche en français quand on choisit EN :**
- **toute la page `/methode`** (piliers, interventions, 13 séances, acteurs, mesures, éthique, CTA final, items 6 à 9 du sommaire)
- **toute la page `/prix`** (le fichier EN contient encore l'ancienne offre `programs.Essentiel / Avance / Performance`)
- **les 3 fiches produit** (`/programmes/...`) — écrites en dur en français
- la section « Définition THRIVE » de `/methode` (écrite en dur)
- la question 5 de la FAQ d'accueil
- le bouton « Réserver ma place gratuitement » du hero d'accueil

**Textes anglais orphelins** (ne correspondant à rien d'affiché) : `method.science.*`, `method.scorecard.*`, `method.dashboard.*`, `programs.*` (toute l'ancienne grille tarifaire).

---

## 18. FICHIERS INUTILES DANS LE DÉPÔT (n'affectent pas le site)
| Fichier / dossier | Remarque |
|---|---|
| `dist 2/` et `dist 3/` | anciens builds commités (mai 2026). Titre figé : « Thrive - Tutorat Sportif Positif \| Confiance & Performance ». **Non servis** (Vercel rebuild depuis les sources) |
| `thrive_site_build.zip` | archive d'un build de mai 2026 |
| `fichier-pour-ia.txt` | export de contexte (juin 2026) |
| `generate_context.js` | script de génération du fichier ci-dessus |
| `public/Design sans titre.jpg` | image non référencée |
| `src/assets/6557120-uhd_4096_2160_25fps.mp4` | vidéo non référencée |
| `src/pages/DiagnosticPack.jsx`, `src/pages/Evaluation.jsx`, `src/components/waitlist/*` | code mort (voir §15.3) |

---

## 19. OÙ MODIFIER QUOI — AIDE-MÉMOIRE

| Je veux changer… | Fichier à ouvrir |
|---|---|
| un texte de l'accueil, de `/sport`, `/methode`, `/prix`, `/a-propos`, `/zones`, `/liste-attente` | `src/locales/fr/translation.json` (+ `en/translation.json`) |
| un texte des 3 fiches produit `/programmes/...` | `src/pages/OserEssayer.jsx`, `AllerVersLesAutres.jsx`, `MomentQuiCompte.jsx` (texte en dur) |
| un **prix**, le nombre de séances, l'ordre des cartes de `/prix` | `src/data/pricing.js` **puis** le bloc « Prix » en dur de la fiche produit concernée |
| le nombre de **places restantes** / de **familles inscrites** | `src/pages/ListeAttente.jsx` lignes 16-17 |
| le **téléphone** ou le **courriel** | `Navbar.jsx`, `Footer.jsx`, `ContactSection.jsx`, `ListeAttente.jsx` (l. 19-21) + clés `waitlist.contact.*` |
| la section « Définition THRIVE » de `/methode` | `src/pages/Method.jsx` ligne 203 (texte en dur) |
| les **auteurs / niveaux de preuve** des 8 piliers | `src/components/method/ScientificPillars.jsx` lignes 19-72 |
| les **programmes associés** aux instruments de mesure | `src/components/method/MeasureBattery.jsx` lignes 5-10 |
| le bouton « Réserver ma place gratuitement » du hero | `src/components/home/Hero.jsx` ligne 71 (texte en dur) |
| un **titre / description Google** | clés `seo.*` et `pricing.seo.*` du fichier de traduction ; pour les 3 fiches produit : balise `<SEO>` en haut du `.jsx` |
| le `<title>` et l'image de partage par défaut | `index.html` |
| les **menus** de navigation | `src/components/layout/Navbar.jsx` (ordre + destinations) et clés `nav.*` |
| ajouter une page au SEO | `prerender.js` (liste `routes`) **et** `vite.config.js` (`dynamicRoutes`) |
