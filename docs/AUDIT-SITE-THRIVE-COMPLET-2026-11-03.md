---
type: livrable
branche: site
date: 2026-11-03
statut: PROPOSÉ
---
# AUDIT COMPLET DU SITE THRIVE — 3 novembre 2026

*Préparé pour Lylian. Sources croisées : dépôt GitHub `lyliancelma643-ai/ThriveSportPsychologiePositive` (toutes les branches), site en ligne thrivesportpositive.com (relu le 3 nov.), coffre « Cerveau THRIVE » (état, registre des décisions, à trancher, gamme V3, prix, parcours, conformité, salle), prompt du 19 oct. et audit du 14 oct.*

Mode d'emploi : la **partie A** (sections 1 à 3) est pour toi : ce qui ne va pas et ce que tu dois trancher. La **partie B** (sections 4 à 9) est la liste complète des changements. La **partie C** (section 10) contient deux prompts prêts à coller dans Claude Code.

---

## 0. Résumé en 10 lignes

1. **Le site en ligne date du 23 septembre.** Toutes les mises à jour d'octobre (gamme V3, textes du 14 oct., pages légales) dorment sur des branches jamais fusionnées dans `main`. Vercel déploie `main`.
2. Résultat : le site vend encore **l'ancienne offre** (« Reaching Out » 2 000 $ + tx, « Dare to Try » 1 500 $ + tx, « The Moment That Counts » 15 $ / 2 semaines, séance découverte 97 $, 1er versement à la séance 3).
3. **La page liste d'attente (celle du code QR de ton deck) affiche « 2 places restantes · 47 familles déjà inscrites » et une cohorte du 6 septembre 2026.** Ce sont des chiffres faux : rareté et preuve sociale inventées. **À corriger avant le sprint du 4 nov.**
4. Le site s'affiche **en anglais** sur un navigateur anglais, alors que la moitié des pages n'est pas traduite.
5. Le site annonce les séances au **Centre Saint-Denis, 5115 rue Rivard** : c'est le centre de ton employeur, et **aucune entente écrite n'existe**. Risque de loyauté et de conflit d'intérêts.
6. Le site **collecte des données** (liste d'attente, questionnaire sur l'humeur de l'enfant, Google Analytics) **sans politique de confidentialité en ligne** → non conforme à la Loi 25.
7. Le **widget « diagnostic »** plante à la dernière question sur 3 pages, et son vocabulaire (« diagnostic ») est interdit par ta charte.
8. Le site est **trop gros** : 7 onglets, 15 routes, 2 parcours de réservation concurrents (Cal.com 30 min et liste d'attente), une page Sport et une page Zones qui ne correspondent plus à l'offre, et **rien pour les partenaires**, alors que 70 % de tes familles doivent venir par eux.
9. Proposition : **6 pages utiles + 2 pages légales**, **un seul appel à l'action** partout (« Réserver l'appel gratuit de 15 min »), une page Partenaires, des prix dans **un seul fichier**.
10. Avant de lancer la refonte, il te reste **6 décisions** (section 3). Le correctif urgent (section 10.1) peut partir aujourd'hui.

---

# PARTIE A — LE CONSTAT ET TES DÉCISIONS

## 1. Où est vraiment ton code : il y a quatre versions

| Version | Où | Date | Contenu | Ce que j'en fais |
|---|---|---|---|---|
| **`main`** (= ce qui est en ligne) | GitHub | 23 sept. | Ancienne offre « Oser essayer / Aller vers les autres / Le moment qui compte », prix + tx, 97 $, cohorte 6 sept. | À remplacer |
| **`claude/clever-maxwell-8gqs6c`** | GitHub | **15 oct.** | Gamme V3 (THRIVE Groupe / Individuel / Maison, Complet en passerelle), appel de 15 min, « aucune taxe », + `AUDIT-SITE-ACTUEL.md` (texte du site au mot près) | **Base de départ de la refonte** |
| `claude/jolly-rubin-1o67s1` (PR #1 ouverte) | GitHub | 29 sept. | Brouillons **Conditions d'utilisation** et **Politique de confidentialité** (routes `/conditions`, `/confidentialite`) | À fusionner après relecture et compléments (section 6) |
| `claude/friendly-feynman-yj0e8d` | GitHub | 6 oct. | Première version de la nouvelle page Prix | Dépassée par `clever-maxwell` → à supprimer |
| `claude/admiring-hopper-r6ytv1` | GitHub | = `main` | Rien de plus | À supprimer |
| **Copie locale** `07_Site_Web/Thrive_Site_Web_code/` | ton Mac | 9–22 sept. | Une autre lignée : pages `EssentialPack / AdvancedPack / PerformancePack`, **boutique, panier, compte, parrainage, fidélité**, dossier `supabase/` (table `plans`) | **Ne pas utiliser comme base.** Le prompt du 19 oct. visait cette copie (il cite des fichiers qui n'existent pas sur GitHub) → il n'est plus exécutable tel quel |

**Conséquence pratique** : on repart de `clever-maxwell`, on y ajoute les pages légales de `jolly-rubin`, et on laisse de côté la boutique/panier de la copie locale (voir section 9 : le site n'a pas besoin de panier).

Ce que je n'ai pas pu vérifier : l'état Git exact de ta copie locale (le terminal de ton Mac était indisponible, disque trop plein). Avant la refonte, ouvre-la et regarde s'il y a des changements non commités que tu veux garder.

## 2. Ce qui est en ligne aujourd'hui (relu le 3 nov.)

| Page | Problème | Gravité |
|---|---|---|
| `/liste-attente` (cible du QR code) | « 2 places restantes · 47 familles déjà inscrites » codés en dur (`SPOTS_LEFT = 2`, `FAMILIES = 47`) ; « Cohorte du 6 septembre 2026 » ; appel « de 20 minutes » ; adresse du centre de ton employeur | 🔴 P0 |
| Toutes | Langue choisie par le navigateur → anglais pour beaucoup de visiteurs, avec des pages à moitié en français | 🔴 P0 |
| `/prix` | Ancienne offre, prix « + tx », séance découverte 97 $, 1er versement séance 3, Maison 15 $ / 2 semaines | 🔴 P0 |
| Accueil, Sport, Méthode | Widget « diagnostic » (humeur de l'enfant de 1 à 10) qui plante à la 3e question ; recommande des « packs » qui n'existent plus | 🔴 P0 |
| Accueil, Zones | « Service privé à domicile », « frais de déplacement », « Centre Saint-Denis » | 🟠 P1 |
| Accueil (bouton principal) | Ouvre un Cal.com **30 min** alors que ton appel fait 15 min | 🟠 P1 |
| Pied de page | « régler les "Packs" en plusieurs mensualités » | 🟠 P1 |
| Partout | Aucune politique de confidentialité ni conditions de vente | 🔴 P0 (légal) |

## 3. Les décisions à trancher AVANT la refonte

Le site ne peut pas être juste tant que ces six points ne le sont pas. Pour chacun, je mets l'état du coffre et ma recommandation par défaut.

| # | Question | Ce que dit le coffre | Ma recommandation pour le site |
|---|---|---|---|
| D1 | **Prix de Maison** | Registre 1er nov. : « 30 $/mois pour l'instant » ; `A_trancher` #1 encore ouvert (32,50 $ + 299 $/an) ; échéance 5 nov. | Afficher **30 $/mois**. **Ne pas afficher de prix annuel** tant qu'il n'est pas fixé et créé dans l'App Store. |
| D2 | **Prix et taille du Groupe** | 1er nov. : 4 enfants max. Prix : 600 $ fondateur → 650 $ (19 oct.) ou 650 $ (incubateur 26 oct.) | 4 enfants max. Prix : à toi de choisir ; le site lit **un seul champ** qu'on change en 1 minute. |
| D3 | **Individuel / Complet : prix fondateur ou prix unique ?** | 19 oct. : 1 500 → 1 950 $ et 2 000 → 2 450 $ ; incubateur : 1 500 $ et 2 000 $ ; offre fondateur (#6) à fixer après Van Westendorp, fin nov. | Tant que les entretiens ne sont pas faits : afficher **1 500 $ et 2 000 $ sans mention « fondateur »** et sans prix suivant. Ajouter la mécanique fondateur seulement quand #6 est tranché. |
| D4 | **Date de la 1re vague Groupe** | Lancement **1er janvier 2027**. Aucune date de vague fixée (les dates de novembre du prompt du 19 oct. sont mortes). | Écrire **« Premières places : janvier 2027 »**, sans date précise, jusqu'à confirmation de la salle. |
| D5 | **Lieu affiché** | Centre Saint-Denis : 50 % sur la R108 proposé par Dominic le 3 nov., **[À CONFIRMER] par écrit + CA** ; ton coffre dit de ne rien demander d'inapproprié ni d'utiliser le centre comme vitrine. | **Retirer partout « Centre Saint-Denis » et « 5115 rue Rivard ».** Écrire « Sur le Plateau-Mont-Royal, à Montréal. Le lieu exact vous est confirmé à l'inscription. » |
| D6 | **Langue** | Westmount (anglophone) est dans tes quartiers cibles. | Français par défaut, toujours. L'anglais **caché** jusqu'à ce que 100 % des textes soient traduits ; puis le réactiver avant toute pub à Westmount. |

Deux petites vérifications, sans enjeu de décision :
- **Téléphone (263) 362-2030** : l'audit du 14 oct. le disait faux. C'est une erreur : **263 est un indicatif de Montréal** (ajouté en 2022 en plus du 514 et du 438). Vérifie seulement que c'est bien ton numéro.
- **Noms des produits** (`A_trancher` #10, prévu T1 2027) : on garde Maison / Groupe / Individuel / Complet comme noms, et les anciennes formules deviennent des **accroches** (« Oser essayer », « Aller vers les autres », « Le moment qui compte »), comme décidé le 14 oct.

---

# PARTIE B — TOUT CE QUI DOIT CHANGER

## 4. La nouvelle architecture : plus simple, un seul chemin

### 4.1 Le principe
Un parent doit comprendre en **10 secondes** : *à qui c'est destiné · ce que ça change · combien ça coûte · quoi faire maintenant.* Une seule action partout : **« Réserver l'appel gratuit de 15 min »**. Seule exception : Maison, qui a aussi « Essayer l'app 1 mois ».

### 4.2 Plan du site proposé

| URL | Page | Remplace | Statut |
|---|---|---|---|
| `/` | **Accueil** (une longue page qui fait tout le travail) | Accueil + `/sport` + `/zones` | Refaite |
| `/programmes` | **Les 4 offres et leurs prix** sur une page | `/prix` | Refaite |
| `/programmes/groupe` | THRIVE Groupe | `/programmes/aller-vers-les-autres` | Renommée |
| `/programmes/individuel` | THRIVE Individuel (+ bloc Complet) | `/programmes/oser-essayer` | Renommée |
| `/programmes/maison` | THRIVE Maison | `/programmes/le-moment-qui-compte` | Renommée |
| `/methode` | La méthode, en version courte | `/methode` (raccourcie de moitié) | Allégée |
| `/a-propos` | Ton histoire | `/a-propos` | Allégée |
| `/partenaires` | **Pour les cliniques, écoles, clubs et employeurs** | — | **Nouvelle** |
| `/appel` | Réservation de l'appel de 15 min (Cal.com intégré + formulaire de secours) | `/booking`, `/liste-attente`, `/evaluation` | Nouvelle, unique |
| `/confidentialite`, `/conditions` | Pages légales | — | De `jolly-rubin`, complétées |

**Redirections 301 à garder** (les liens et le QR code existants ne doivent pas casser) : `/prix` → `/programmes` · `/liste-attente` → `/appel` · `/booking` → `/appel` · `/evaluation` → `/appel` · `/sport` → `/` · `/zones` → `/` · les 3 anciennes URL de programmes → les nouvelles · `/pack/*` → `/programmes`.

> ⚠️ Le QR code de ton deck pointe vers `/liste-attente`. La redirection doit exister **avant** de déplacer la page.

### 4.3 Menu
- **Ordinateur** : Programmes · La méthode · À propos · Partenaires · bouton **« Réserver l'appel »** · lien discret « Connexion » (app).
- **Mobile** : même chose + **bouton fixe en bas d'écran** « Réserver l'appel gratuit (15 min) ».
- Le téléphone et le courriel sortent du menu (ils restent dans le pied de page).

### 4.4 Le parcours unique (tiré de `Parcours_client.md`)
1. Le parent arrive (prescripteur avec code, Facebook de quartier, Reel, QR code).
2. Il lit l'accueil ou une page programme.
3. **Il réserve l'appel de 15 min** (Cal.com) — le code partenaire et les UTM sont gardés.
4. Après l'appel : inscription, **carte enregistrée, rien de prélevé avant la séance 1** (Stripe, hors site public pour l'instant).
5. Maison seul : bouton « Essayer 1 mois » → création de compte dans l'app.

## 5. Audit page par page

### 5.1 Accueil `/` — refaire, en 8 blocs

| Bloc | Contenu | Source |
|---|---|---|
| 1. Hero | Titre : « Grandir par le sport, réussir pour la vie. » Sous-titre : pour les parents d'enfants de 8 à 17 ans qui manquent de confiance (8–11 ans d'abord). 1 bouton : Réserver l'appel gratuit (15 min). | Slogan, cible du 13 oct. |
| 2. « Vous reconnaissez votre enfant ? » | 3 situations : il lâche dès que c'est difficile (Oser) · il reste seul ou en retrait (Lien) · vous manquez de temps le soir et vous vous en voulez (Maison). Chaque situation renvoie à son programme. | Parcours Oser/Lien, persona Maison |
| 3. Le trou entre rien et le psy | « Ni thérapie, ni cours de sport. » Ce que fait le club / le psychologue / THRIVE (3 colonnes courtes). | Positionnement du 22 sept. |
| 4. Les 4 offres | 4 cartes compactes avec prix (Groupe mis en avant = produit phare). | Gamme V3 |
| 5. Comment ça se passe | Appel 15 min → séance 1 (bilan de départ) → 13 semaines → bilan final + Book THRIVE. Mesures aux séances 1, 7 et 13. Le parent est impliqué (Maison inclus). | Parcours client |
| 6. Le sport comme terrain | 1 paragraphe + petites icônes (hockey, soccer, basket, patinage…) : « le sport est le terrain, la confiance est l'objectif ». **Remplace la page `/sport`.** | — |
| 7. Qui est derrière | Photo + 3 lignes sur toi (ancien hockeyeur de haut niveau, études en psychologie à l'UdeM, « ce qui m'a manqué à 12 ans : un guide ») + lien À propos. | Vision |
| 8. FAQ courte + bouton final | 6 questions max (âge, lieu, est-ce une thérapie ?, présence du parent, paiement, garantie). | — |

**À supprimer de l'accueil** : widget « diagnostic » · « Nos lieux d'intervention » (Centre Saint-Denis, domicile) · « Informations pratiques » · tous les textes non affichés `home.method_teaser`, `home.parent`, `home.cta`, `home.hero.badge*` (« +31 % performance », « 3x plus de créativité », « +11 % réussite scolaire », « validée par l'Université de Montréal » : **chiffres sans source, à effacer du code pour qu'ils ne reviennent jamais**).

**À corriger** : SEO accueil « 7-17 ans » → « 8 à 17 ans » ; FAQ « Pour les 2-5 ans, oui » → supprimer ; « tutorat sportif » (meta) → « programme de développement de la confiance par le sport ».

### 5.2 Programmes `/programmes` (ex-`/prix`)
- Titre qui reflète la gamme, pas « Un même programme. Trois niveaux de suivi. »
- **4 cartes** dans cet ordre : Maison · **Groupe (mis en avant, « Produit phare »)** · Individuel · Complet. Aujourd'hui Complet n'a pas de carte : il en mérite une petite, car c'est le choix le plus cher et le plus complet.
- Sous chaque prix : « 2 versements : au début de la séance 1, puis de la séance 7. Aucune taxe à ajouter. » (programmes) / « 1 mois d'essai, carte requise. Sans engagement. » (Maison).
- Bloc **garantie** une seule fois, avec la formulation décidée (voir 7.2).
- Bloc « Par où commencer ? » : 3 questions → 1 programme (remplace le widget diagnostic, sans score, sans recueil de données).
- Retirer : « environ 115 $ la séance » (calcul à l'heure, inutile et faux pour le Complet) · séance découverte 97 $ · « + tx » · dépôt · « paiement unique ».
- Les prix ne viennent **que** de `src/data/pricing.js` (aujourd'hui `600 $`, `32,50 $` et `2 000 $` sont aussi écrits en dur dans les pages produit → à brancher sur le fichier).

### 5.3 Pages produit (Groupe, Individuel, Maison)
Aujourd'hui : 550 à 590 lignes chacune, tout le texte écrit en dur dans le JSX, rien en anglais. **Les raccourcir à 6 blocs identiques** :
1. Pour qui (la situation, en mots de parent) · 2. Ce qui se passe concrètement · 3. Ce que vous recevez (liste) · 4. Prix et paiement · 5. FAQ (4–5 questions) · 6. Bouton.

Faits à écrire, et seulement ceux-là (Gamme V3 + décisions du 1er nov.) :
- **Groupe** : 13 ateliers sportifs multisports de 60 min, 1 par semaine, le samedi · **4 enfants maximum** (corriger « 4 à 6 jeunes » et « 6 enfants maximum pour un coach ») · 8–11 ans d'abord · vagues fermées, pas d'entrée en cours de route · 2 adultes présents à chaque séance · bilan individuel nominatif · 2 appels avec le parent (séance 7 et 13) · Maison inclus pendant le programme, puis 3 mois offerts.
- **Individuel** : 13 séances en tête-à-tête de 60 min (corriger « 60 à 70 min ») · Book THRIVE à la fin · messagerie, réponse sous 24–48 h en semaine · démarrage 1 à 2 semaines après l'appel · Maison inclus + 3 mois offerts.
- **Complet** (bloc sur la page Individuel + carte sur `/programmes`) : « On commence seul, on finit avec les autres. » Individuel d'abord, puis entrée dans la prochaine vague Groupe après la 4e séance. Passerelles : Individuel → Complet = + 500 $ ; Groupe → Complet = différence de prix.
- **Maison** : app, un moment de 10 à 30 min par jour avec votre enfant, programme de 13 semaines, mascotte · 30 $/mois (D1) · 1 mois d'essai, carte requise ; **2 mois avec un code partenaire** · incluse pendant les programmes · slogan « Moins de temps, plus de bons moments. » · bouton « Essayer 1 mois » → `app.thrivesportpositive.com/login?mode=signup`.
- **Jalons parents** : partout **séances 1, 7 et 13** (corriger « semaines 4, 8 et 13 » des pages produit).

### 5.4 La méthode `/methode`
- Garder : définition, 8 piliers, 13 séances (Ancrer / Développer / Intégrer), les 3 acteurs, la mesure, le cadre éthique.
- **Couper environ de moitié** : 1 phrase par pilier, pas de tableau d'auteurs à l'écran (garder les sources en bas, en petit : c'est ta règle « aucune affirmation sans source traçable »).
- Corriger : « Transfert garanti : sport → vie » → « Ce qu'il apprend au sport, on l'entraîne pour la vie » (jamais « garanti ») · « selon son pack (calls S1, S7, S13) » → « appels avec le parent aux séances 7 et 13 » · SEO « psychologie positive validée par la science » → « fondée sur la recherche en psychologie positive » · « Définition THRIVE » écrite en dur dans `Method.jsx` ligne ~203 → la passer dans les traductions.
- Retirer le widget diagnostic du bas de page.

### 5.5 À propos `/a-propos`
- Garder ton histoire. Ajouter les éléments forts du coffre : Pee-Wee de Québec à 12 ans, départ à 16 ans en Pôle France, « il ne m'a jamais manqué le niveau, il m'a manqué un guide », 150+ enfants entraînés, accompagné par l'incubateur de l'UdeM (Parcours Concrétisez). *(À toi de choisir ce que tu veux rendre public sur ta famille.)*
- Corriger : « 120 études scientifiques » → retirer le chiffre ou le sourcer.

### 5.6 Partenaires `/partenaires` — NOUVELLE (c'est ton canal à 70 %)
- Pour qui : cliniques de psychologie / neuropsychologie / physio, écoles, clubs et OBNL sportives, employeurs.
- Angle principal : **« Pendant l'attente »** (listes d'attente de 6 mois à 2 ans au public).
- Ce que le partenaire obtient : un parcours simple pour ses familles, **15 % de rabais** pour elles avec son code, **2 mois d'essai Maison**, un bilan anonyme agrégé (Loi 25).
- Ce que le partenaire ne reçoit **jamais** : de commission s'il est membre d'un ordre professionnel (règle du coffre).
- Action : formulaire court (organisation, nom, courriel, type) → ou « Réserver 15 min avec Lylian ».
- Pas de prix B2B affichés (P4/P5 en pause).

### 5.7 Appel `/appel` — NOUVELLE (remplace liste d'attente + booking)
- Cal.com intégré sur un **nouvel événement de 15 min** (aujourd'hui : `thrive-sport-positive/30min`, et `pack-1-l-essentiel` par défaut dans `CalBooking.jsx`).
- Ce qui se passe pendant l'appel, en 3 lignes (2 min pour se présenter, on vous écoute parler de votre enfant, on vous dit honnêtement si THRIVE est le bon cadre).
- Formulaire de secours si aucun créneau ne convient : prénom du parent, courriel, téléphone, programme qui l'intéresse, **code partenaire (champ caché rempli par `?code=`)**, case de consentement. Enregistré dans la table Supabase `waitlist` existante (ajouter les colonnes `code_partenaire`, `utm_source`, `utm_medium`, `utm_campaign`, `consentement_at`).
- **Aucun** compteur de places, **aucun** nombre de familles, **aucune** date de cohorte.

### 5.8 Pages et éléments à supprimer
`/sport` · `/zones` · `/booking` (tunnel « diagnostic » avec score d'humeur et recommandation de « pack ») · `DiagnosticWidget.jsx` · `RecommendationView.jsx`, `SportSelection.jsx`, `BookingForm.jsx`, `SuccessView.jsx` · `Evaluation.jsx` · `DiagnosticPack.jsx` (397 $, « Diagnostic ») · `src/components/waitlist/*` (code mort) · `Locations.jsx` · `Cta.jsx` (jamais branché).

## 6. Conformité (Québec) — ce qui doit être vrai le jour de la mise en ligne

| Règle | Problème actuel | Correction |
|---|---|---|
| **Loi 25** (renseignements personnels) | Aucune politique de confidentialité en ligne alors que le site collecte nom, courriel, téléphone, et une note d'humeur sur l'enfant | Fusionner `jolly-rubin` (Confidentialité + Conditions), puis la compléter : nom du responsable (toi), courriel de contact, finalités, durée de conservation, Supabase/Vercel/Cal.com/Google hors Québec, **aucune donnée sur l'enfant recueillie par le site**. Lien dans le pied de page + sous chaque formulaire + case de consentement. |
| **Loi 25 — témoins** | Google Analytics (`G-EKB597ZEF6`) chargé dès l'arrivée, sans choix | Soit une bannière de consentement (GA chargé seulement après « Accepter »), soit remplacer par une mesure **sans témoins** (Vercel Web Analytics). Plus simple : la 2e option. Ton action du 1er nov. « installer Google Tag Manager » est à revoir dans ce sens. |
| **Protection du consommateur — représentations trompeuses** | « 2 places restantes », « 47 familles déjà inscrites », « 20 places seulement » (dans le code) | Supprimer tout compteur et toute preuve sociale non vraie. « 6 places fondatrices » une seule fois par page, et seulement quand l'offre fondateur est décidée (D3). |
| **Prix et paiement** | « + tx », « 1er versement séance 3 », « 97 $ » | « Aucune taxe à ajouter » ; 2 versements S1 et S7 ; rien avant la séance 1. ⚠️ Le texte doit correspondre au prélèvement réel : tant que Stripe en 2 fois n'est pas branché (action du 13 déc.), ne pas mettre de bouton de paiement sur le site. |
| **Conditions de vente** | Le brouillon `jolly-rubin` couvre l'app/abonnement, **pas** les programmes en 2 versements ni la garantie | Ajouter une section Programmes : 2 versements, garantie, annulation, absence. (Ton action #P1 « Conditions de vente », 15 déc.) |
| **Pratique de la psychologie** | « diagnostic » (widget, tunnel booking, SEO « Évaluation mentale »), « Réduction des troubles » (badge non affiché) | Zéro « thérapie, soigner, traitement, diagnostic » sauf dans les phrases de démarcation (« THRIVE n'est pas une thérapie »). Remplacer par « bilan de départ ». |
| **Pas de pub aux moins de 13 ans** | OK : le site parle au parent | Vérifier que les nouveaux textes restent adressés au parent (vouvoiement). |
| **Promesses** | « Transfert garanti », « validée par l'Université de Montréal » | Jamais « garanti », jamais « prouvé ». Promettre le travail fait et la mesure, pas le résultat. |
| **Loyauté envers ton employeur** | Centre Saint-Denis / 5115 rue Rivard affiché comme lieu THRIVE | Retirer (D5) jusqu'à une entente écrite approuvée par le CA. |
| **Accessibilité** | Non vérifiée | Passage WAVE, contrastes (l'or `#C5A059` sur blanc est limite), textes alternatifs, sous-titres de la vidéo. |

## 7. Contenu de référence (à donner tel quel à Claude Code)

### 7.1 Faits stables
- Slogan : « Grandir par le sport, réussir pour la vie. » · Slogan Maison : « Moins de temps, plus de bons moments. »
- Cible : parents d'enfants de 8 à 17 ans (8–11 ans d'abord) qui manquent de confiance, à Montréal.
- Positionnement : entre « ne rien faire » et « aller voir le psychologue ». Ni thérapie, ni cours de sport.
- Méthode : 13 séances, 8 piliers, mesures aux séances 1, 7 et 13. Deux parcours choisis à la séance 1 : **Oser** et **Lien**.
- Entrée : appel gratuit de 15 min, puis séance 1. Pas de séance d'essai gratuite.
- Paiement des programmes : 2 versements égaux, au début de la séance 1 et de la séance 7, sur la carte enregistrée ; rien avant la séance 1.
- Taxes : « Aucune taxe à ajouter » (non inscrit TPS/TVQ, décision du 1er nov.).
- Lieu : Plateau-Mont-Royal, lieu exact confirmé à l'inscription (D5).
- Lancement : janvier 2027.
- Contact : info@thrivesportpositive.com · (263) 362-2030 (à confirmer).
- Ton : vouvoiement, phrases courtes, aucun superlatif, aucun chiffre sans source.

### 7.2 Valeurs à confirmer (une seule source : `src/data/pricing.js`)
```js
// À REMPLIR PAR LYLIAN AVANT LA REFONTE (décisions D1 à D4)
MAISON_MENSUEL      = 30        // D1 — registre du 1er nov.
MAISON_ANNUEL       = null      // D1 — ne rien afficher tant que null
GROUPE_PRIX         = ???       // D2 — 600 ou 650
GROUPE_MAX_ENFANTS  = 4         // décision du 1er nov.
INDIVIDUEL_PRIX     = 1500      // D3
COMPLET_PRIX        = 2000      // D3
OFFRE_FONDATEUR     = false     // D3 — true seulement après Van Westendorp
PREMIERE_VAGUE      = "janvier 2027"  // D4
GARANTIE = "Si vous arrêtez après la séance 2, les versements déjà faits vous sont remboursés."
// ↑ à vérifier contre la formulation de l'onglet ③ du plan de lancement (registre du 1er nov.)
```

## 8. Technique, SEO, performance

| Sujet | Constat | À faire |
|---|---|---|
| Langue | `i18next-browser-languagedetector` choisit la langue du navigateur ; EN incomplet (FR 856 textes / EN 768) | Forcer `fr` par défaut (détection seulement par `?lng=` et choix mémorisé) ; cacher le bouton EN (D6) |
| Prix en double | Prix écrits en dur dans 3 pages produit en plus de `pricing.js` | Une seule source |
| Textes en dur | Pages produit et « Définition THRIVE » écrites dans le JSX | Tout passer dans `translation.json` |
| Prérendu SEO | `prerender.js` et `vite.config.js` (sitemap) à mettre à jour ; le sitemap liste `/evaluation` et oublie `/liste-attente` | Lister exactement les nouvelles routes |
| Redirections | Faites en React (`<Navigate>`), donc invisibles pour Google | Les mettre en **301 dans `vercel.json`** (`redirects`) avant la règle de réécriture |
| Image de partage | `og:image` = le favicon | Créer une image 1200×630 (logo + slogan) |
| SEO par page | « Aide aux devoirs Montréal » (`/zones`), « gymnastique » (`/sport`), « Tuteur parascolaire » | Réécrire les 9 titres/descriptions ; mots-clés : confiance enfant Montréal, coaching sportif enfant, développement positif par le sport |
| Données structurées | À vérifier | `Organization` + `Offer` (CAD) par programme + `FAQPage` |
| Poids | Vidéo 4K de 2,4 Mo non utilisée, logo PNG d'1 Mo | Supprimer, compresser (WebP), `loading="lazy"` |
| Mesure | GA sans consentement | Vercel Web Analytics (sans témoins) + UTM gardés jusqu'au formulaire |
| Formulaire | Table `waitlist` sans code partenaire ni UTM | Ajouter les colonnes (5.7) |
| Dépendances | Vite 4, `@calcom/embed-react` | Garder ; mise à jour de Vite hors périmètre |

## 9. Nettoyage du dépôt et ce que le site ne doit PAS faire maintenant

**À supprimer du dépôt** : `dist 2/`, `dist 3/`, `thrive_site_build.zip`, `fichier-pour-ia.txt`, `generate_context.js`, `public/Design sans titre.jpg`, `src/assets/6557120-uhd_4096_2160_25fps.mp4`, tout le code mort de 5.8, les branches `friendly-feynman` et `admiring-hopper`. Garder `AUDIT-SITE-ACTUEL.md` hors du site (dossier `docs/`).

**À ne pas construire maintenant** (pour rester simple) :
- **Boutique, panier, compte, parrainage, fidélité** (copie locale de septembre) : inutiles avant le 1er client. Le paiement se fait après l'appel (Stripe) et Maison se paie dans l'app. Le parrainage (50 $) pourra revenir après la 1re vague.
- Pages B2B avec prix (P4/P5 en pause).
- Témoignages, notes, logos de clients : rien tant que tu n'en as pas de vrais.
- Version anglaise partielle.

---

# PARTIE C — À ENVOYER À CLAUDE CODE

## 10.1 Correctif express (aujourd'hui, avant le sprint du 4 nov.)

À lancer à la racine du dépôt GitHub. Il ne refait pas le site : il retire ce qui est faux sur la page du QR code et met en ligne la gamme V3 déjà prête.

```text
Dépôt : lyliancelma643-ai/ThriveSportPsychologiePositive.
But : corriger en urgence ce qui est faux sur le site en ligne. Ne refais pas le design.

1. Crée la branche hotfix/2026-11-03 à partir de origin/claude/clever-maxwell-8gqs6c
   (elle contient les textes gamme V3 du 15 oct. ; main date du 23 sept.).
2. src/pages/ListeAttente.jsx : supprime SPOTS_LEFT, FAMILIES et l'affichage de
   waitlist_page.cohort_proof (« X places restantes · Y familles déjà inscrites »).
   Supprime la clé dans fr et en.
3. Remplace partout « Cohorte du 6 septembre 2026 » / « cohorte du 6 septembre 2026 »
   par « Premières places : janvier 2027 » (FR) et « First spots: January 2027 » (EN),
   y compris dans les clés seo et waitlist non affichées. Plus aucune occurrence
   de « 6 septembre », « septembre 2026 », « 29 novembre », « 20 places ».
4. Retire « Centre Saint-Denis » et « 5115 rue Rivard » de tous les textes affichés.
   Remplace par « sur le Plateau-Mont-Royal, à Montréal. Le lieu exact vous est
   confirmé à l'inscription. » (et l'équivalent EN). Dans le pied de page de la
   landing : « © 2026 THRIVE Sport Positive · Montréal ».
5. THRIVE Maison : 30 $ par mois partout (pricing.js price: 30, MomentQuiCompte.jsx,
   SEO, FAQ). Retire toute mention de « 299 $ par an » et de « 32,50 $ ».
6. THRIVE Groupe : « 4 enfants maximum » partout (remplace « 4 à 6 jeunes »,
   « 6 enfants maximum », « max 6 »).
7. Langue : dans src/i18n.js, ajoute lng: 'fr' et
   detection: { order: ['querystring','localStorage'], caches: ['localStorage'] }
   pour que le site s'ouvre en français par défaut.
8. Le bouton du hero (src/components/home/Hero.jsx) ouvre Cal.com 30min :
   fais-le pointer vers /liste-attente avec le libellé « Réserver l'appel gratuit (15 min) ».
9. DiagnosticWidget : retire son affichage des pages Home, Sport et Method
   (ne supprime pas le fichier aujourd'hui).
10. npm run build doit passer. Vérifie avec rg qu'il ne reste aucune occurrence
    affichée de : « + tx », « 97 $ », « 6 septembre », « places restantes »,
    « familles déjà inscrites », « Centre Saint-Denis », « 32,50 », « 4 à 6 ».
11. Ouvre une PR vers main intitulée « Correctif urgent : liste d'attente et gamme V3 ».
    Ne fusionne pas : Lylian relit l'aperçu Vercel puis fusionne.
Rapport en français, 25 lignes max : fichiers touchés, occurrences restantes, lien de l'aperçu.
```

> Ce correctif suppose deux décisions du registre du 1er nov. : **Maison 30 $/mois** et **Groupe 4 enfants max**. Les prix 600 $ / 1 500 $ / 2 000 $ de la branche restent tels quels.

## 10.2 Refonte complète (après les décisions D1 à D6)

```text
Rôle : développeur front-end senior et rédacteur de pages de vente pour THRIVE Sport
Positive (React 18, Vite 4, Tailwind 3, react-router 7, react-i18next, react-helmet-async,
prérendu Puppeteer, Supabase, Vercel).

Base : la branche main APRÈS fusion du correctif hotfix/2026-11-03.
Document maître : docs/AUDIT-SITE-THRIVE-COMPLET-2026-11-03.md (copie-le dans docs/).
Il fait foi pour les textes, les prix, le plan du site et la conformité.
Si un texte actuel du site le contredit, c'est l'audit qui a raison.

Travaille en 5 phases. Une PR par phase, jamais de fusion toi-même.

PHASE 1 — Nettoyage et structure
- Supprime le code mort et les fichiers listés aux sections 5.8 et 9.
- Crée les routes de la section 4.2 et les redirections 301 dans vercel.json
  (bloc "redirects", avant les "rewrites").
- Menu de la section 4.3 + bouton fixe mobile « Réserver l'appel gratuit (15 min) ».
- Mets à jour prerender.js et le sitemap de vite.config.js avec les nouvelles routes.

PHASE 2 — Données et textes
- src/data/pricing.js devient la seule source des prix et des faits chiffrés
  (valeurs de la section 7.2). Aucun prix écrit ailleurs.
- Tout texte passe par src/locales/fr/translation.json. Supprime les clés mortes.
- Réécris l'accueil (5.1), /programmes (5.2), les 3 pages produit (5.3, 6 blocs
  identiques, un seul composant gabarit ProgramPage alimenté par des données),
  /methode (5.4), /a-propos (5.5) avec les faits de la section 7.1 seulement.
- Vouvoiement, phrases courtes, aucun superlatif, aucun chiffre sans source.
- Mots interdits hors phrases de démarcation : thérapie, traitement, soigner,
  guérir, diagnostic, garanti, prouvé, validé scientifiquement.

PHASE 3 — Conversion
- Page /appel (5.7) : Cal.com intégré sur l'événement de 15 min (lien en variable
  d'environnement VITE_CAL_LINK) + formulaire de secours vers la table waitlist.
- Garde ?code= et les UTM dans sessionStorage et envoie-les avec le formulaire.
  Migration SQL proposée pour les colonnes code_partenaire, utm_*, consentement_at :
  écris le fichier de migration, ne l'exécute pas.
- Page /partenaires (5.6) avec formulaire court.

PHASE 4 — Conformité
- Fusionne les pages légales de la branche claude/jolly-rubin-1o67s1 et complète-les
  selon la section 6 (responsable Loi 25, aucune donnée sur l'enfant, programmes en
  2 versements, garantie, annulation). Marque [À FAIRE RELIRE] en tête de chaque page.
- Case de consentement + lien sous chaque formulaire.
- Remplace Google Analytics par Vercel Web Analytics (sans témoins), ou charge GA
  seulement après consentement si Lylian le demande.
- FR par défaut ; bouton EN caché derrière un drapeau VITE_SHOW_EN=false.

PHASE 5 — Qualité
- og:image 1200×630, titres et descriptions SEO des 9 pages, JSON-LD Organization,
  Offer (CAD) et FAQPage.
- Images en WebP, lazy-loading, suppression des fichiers lourds non utilisés.
- Contrastes AA (vérifie l'or #C5A059 sur blanc), alt sur toutes les images,
  navigation clavier.

Vérifications à la fin de chaque phase :
- npm run build passe ; aucune clé brute affichée (ex. « pricing.xxx ») ;
- rg ne trouve aucun : « + tx », « 97 $ », « places restantes », « familles déjà »,
  « Centre Saint-Denis », « Rivard », « pack », « Pack », « diagnostic » (hors
  démarcation), « garanti », « 30min » ;
- toutes les anciennes URL de 4.2 répondent en 301 vers la bonne page ;
- captures d'écran mobile (390 px) et ordinateur (1440 px) de chaque page jointes à la PR.
Rapport en français, 50 lignes max par phase.
Ne pousse jamais sur main. Ne touche jamais aux fichiers .env.
```

## 11. Checklist avant de mettre en ligne la refonte
- [ ] D1 à D6 tranchées et reportées dans `pricing.js`
- [ ] Événement Cal.com de 15 min créé (avec questions courtes, sans données sur l'enfant)
- [ ] Pages légales relues (idéalement par Fasken ou un juriste)
- [ ] QR code du deck testé après la redirection `/liste-attente` → `/appel`
- [ ] Ancienne table `plans` (copie locale) : non utilisée par le site public — rien ne doit pouvoir facturer un ancien montant
- [ ] Test sur un vrai téléphone : de l'accueil à l'appel réservé en moins de 60 secondes
- [ ] Mettre à jour `90_IT_Tech/Site_web.md` (branche de référence, date)
