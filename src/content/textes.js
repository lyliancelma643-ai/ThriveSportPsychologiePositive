// ─────────────────────────────────────────────────────────────────────────────
//  THRIVE — Textes du site (français du Québec, vouvoiement, au parent).
//
//  Règles d'écriture (socle THRIVE, non négociables) :
//   · on parle au PARENT, jamais à l'enfant (aucune publicité aux moins de 13 ans) ;
//   · jamais « thérapie, soigner, traitement, diagnostic, guérir, garanti,
//     prouvé » — sauf dans une phrase qui dit ce que THRIVE n'est PAS ;
//   · aucun chiffre sans source, aucun compteur de places, aucune fausse preuve
//     sociale, aucun témoignage tant qu'il n'y en a pas de vrai ;
//   · les prix et les nombres viennent de src/data/offre.js, jamais d'ici.
// ─────────────────────────────────────────────────────────────────────────────

import { MAISON, PROGRAMMES, ENTREPRISE, APPEL, OFFRE_FONDATRICE } from '../data/offre';

const G = PROGRAMMES.groupe;
const I = PROGRAMMES.individuel;

// ── Boutons (mêmes libellés partout) ─────────────────────────────────────────
export const CTA = {
    appel: `Réserver l’appel gratuit (${APPEL.duree})`,
    appelCourt: 'Réserver l’appel',
    maisonBeta: 'Essayer THRIVE Maison gratuitement',
    maisonOuvert: 'Commencer gratuitement',
    maisonCourt: 'Essayer l’app',
    programmes: 'Voir les programmes',
    methode: 'Découvrir la méthode',
    partenaires: 'Devenir partenaire',
    connexion: 'Connexion',
};

// ── Accueil ──────────────────────────────────────────────────────────────────
export const ACCUEIL = {
    seo: {
        title: 'THRIVE Sport Positive | La confiance de votre enfant, par le sport — Montréal',
        description:
            'Pour les parents d’enfants de 8 à 17 ans : 10 minutes par soir avec l’app THRIVE Maison, et des programmes sportifs en petit groupe ou en tête-à-tête à Montréal. Ni thérapie, ni simple cours de sport.',
    },
    hero: {
        surtitre: 'Pour les parents d’enfants de 8 à 17 ans',
        titre: 'Grandir par le sport,',
        titreSuite: 'réussir pour la vie.',
        texte:
            'Votre enfant lâche dès que c’est difficile, ou reste dans son coin ? THRIVE l’aide à prendre confiance, avec vous : 10 minutes par soir à la maison, et du sport pour le vivre en vrai.',
        ctaPrincipal: CTA.maisonBeta,
        ctaSecondaire: CTA.appel,
        note: 'Gratuit pour toutes les familles jusqu’au 31 décembre.',
    },
    situations: {
        titre: 'Vous reconnaissez votre enfant ?',
        items: [
            {
                id: 'oser',
                titre: 'Il lâche dès que c’est difficile.',
                texte: 'Une erreur, une défaite, une nouvelle activité… et il abandonne ou refuse d’essayer.',
                lien: { label: 'Le parcours « Oser »', to: '/methode#parcours' },
            },
            {
                id: 'lien',
                titre: 'Il reste seul, en retrait.',
                texte: 'Il hésite à aller vers les autres, au parc comme dans l’équipe.',
                lien: { label: 'Le parcours « Lien »', to: '/methode#parcours' },
            },
            {
                id: 'temps',
                titre: 'Vous manquez de temps le soir, et vous vous en voulez.',
                texte: 'Entre le travail, les devoirs et le souper, le « pas ce soir » revient trop souvent.',
                lien: { label: 'THRIVE Maison', to: '/maison' },
            },
        ],
    },
    trou: {
        titre: 'Entre « ne rien faire » et « aller voir le psychologue ».',
        texte:
            'Beaucoup d’enfants n’ont pas besoin d’un suivi clinique, mais ont besoin de plus qu’un entraînement. THRIVE occupe cet espace.',
        colonnes: [
            { titre: 'Le club sportif', texte: 'Entraîne les gestes et la performance.' },
            { titre: 'THRIVE', texte: 'Fait pratiquer la confiance, la persévérance et le lien aux autres, par le sport et à la maison, avec le parent.', accent: true },
            { titre: 'Le psychologue', texte: 'Évalue et accompagne les difficultés cliniques.' },
        ],
        note: 'THRIVE n’est pas une thérapie. Si votre enfant a besoin d’un professionnel de la santé, nous vous le disons et nous vous orientons.',
    },
    maison: {
        surtitre: 'THRIVE Maison · l’application',
        titre: 'Un moment par soir, en famille.',
        texte: `Chaque soir, une activité de ${MAISON.dureeActivite} à faire ensemble, guidée par ${MAISON.mascotte}, notre mascotte. ${MAISON.semaines} semaines pour que votre enfant comprenne comment sa confiance se construit.`,
        points: [
            `${MAISON.activites} activités parent-enfant, prêtes à lancer`,
            'Un programme de 13 semaines, une compétence à la fois',
            'Rien à préparer : le matériel est celui de la maison',
        ],
        cta: 'Découvrir THRIVE Maison',
    },
    offres: {
        titre: 'Quatre façons de commencer',
        texte: 'Commencez à la maison, gratuitement. Passez au terrain quand vous le souhaitez.',
    },
    etapes: {
        titre: 'Comment se passe un programme',
        items: [
            { titre: `Un appel de ${APPEL.duree}`, texte: 'Gratuit. Vous nous parlez de votre enfant, nous vous disons honnêtement si THRIVE est le bon cadre.' },
            { titre: 'Séance 1 : le bilan de départ', texte: 'On fait connaissance, on mesure le point de départ et on choisit le parcours : Oser ou Lien.' },
            { titre: '13 semaines', texte: 'Une séance par semaine, un petit défi entre deux séances, et les activités THRIVE Maison à la maison.' },
            { titre: 'Le bilan final', texte: 'On mesure à nouveau aux séances 7 et 13 et on vous remet un bilan individuel écrit.' },
        ],
    },
    sport: {
        titre: 'Le sport est le terrain. La confiance est l’objectif.',
        texte:
            'Hockey, soccer, basket, patinage… Peu importe le sport de votre enfant : nous utilisons le jeu et l’effort pour faire pratiquer ce qui compte ensuite à l’école, en famille et avec les amis.',
    },
    fondateur: {
        titre: 'Qui est derrière THRIVE',
        texte:
            'Lylian Celma, ancien hockeyeur de haut niveau, entraîneur de plus de 150 enfants et étudiant en psychologie à l’Université de Montréal. À 12 ans, il ne lui manquait pas le niveau : il lui manquait un guide. THRIVE, c’est ce guide.',
        lien: 'Lire son histoire',
    },
    faqTitre: 'Vos questions',
};

// ── FAQ générale (accueil) ───────────────────────────────────────────────────
export const FAQ_ACCUEIL = [
    {
        q: 'Pour quel âge ?',
        r: 'De 8 à 17 ans. Les premiers groupes en présentiel sont pensés pour les 8 à 11 ans. THRIVE Maison est ouverte à tous les âges de 8 à 17 ans.',
    },
    {
        q: 'Est-ce une thérapie ?',
        r: 'Non. THRIVE est un programme de développement de la confiance par le sport, fondé sur la recherche en psychologie positive. Si votre enfant a besoin d’un professionnel de la santé, nous vous le disons et nous vous orientons.',
    },
    {
        q: 'Mon enfant n’est pas sportif. Est-ce pour lui ?',
        r: 'Oui. Les ateliers sont multisports et adaptés au niveau de chacun. Le sport sert de terrain d’entraînement, pas de compétition.',
    },
    {
        q: 'Où ont lieu les séances ?',
        r: ENTREPRISE.lieu,
    },
    {
        q: 'Quelle est la place du parent ?',
        r: 'Centrale. Vous faites les activités THRIVE Maison avec votre enfant et vous recevez des nouvelles à mi-parcours et à la fin du programme.',
    },
    {
        q: 'Comment se fait le paiement ?',
        r: 'THRIVE Maison est gratuite pour commencer. Pour les programmes en présentiel : 2 versements égaux, au début de la séance 1 puis de la séance 7. Rien n’est prélevé avant la séance 1.',
    },
];

// ── Page THRIVE Maison ───────────────────────────────────────────────────────
export const PAGE_MAISON = {
    seo: {
        title: 'THRIVE Maison | 10 minutes par soir pour la confiance de votre enfant',
        description: `L’application parent-enfant de THRIVE : ${MAISON.activites} activités de ${MAISON.dureeActivite}, un programme de ${MAISON.semaines} semaines et Cabri, la mascotte. Gratuit pour commencer.`,
    },
    hero: {
        surtitre: `THRIVE Maison · ${MAISON.accroche}`,
        titre: 'Moins de temps,',
        titreSuite: 'plus de bons moments.',
        texte: `Une activité de ${MAISON.dureeActivite} par soir, à faire avec votre enfant. Pas d’écran à regarder seul : l’app vous guide, vous la vivez ensemble.`,
    },
    pourQui: {
        titre: 'Pour qui',
        texte:
            'Pour les parents d’enfants de 8 à 17 ans qui veulent aider leur enfant à prendre confiance, mais qui n’ont ni le temps ni l’envie d’un programme lourd. Trois modes selon l’âge, une seule app pour toute la famille.',
    },
    commentCaMarche: {
        titre: 'Comment ça marche',
        items: [
            { titre: 'Ouvrez l’app le soir', texte: 'L’activité du jour vous attend, avec la durée et le matériel (celui de la maison).' },
            { titre: 'Faites-la ensemble', texte: `${MAISON.dureeActivite}, guidés pas à pas. ${MAISON.mascotte} explique, votre enfant essaie, vous l’accompagnez.` },
            { titre: 'Terminez par une mise en situation', texte: 'Un court défi pour vérifier ce qu’il a compris, sans note et sans pression.' },
            { titre: 'Voyez le chemin parcouru', texte: 'Chaque compétence débloque un outil pour Cabri. Votre enfant voit sa progression, semaine après semaine.' },
        ],
    },
    tarifs: {
        titre: 'Gratuit pour commencer',
        gratuitTitre: 'Gratuit',
        gratuitTexte: MAISON.gratuit,
        premiumTitre: 'Premium',
        premiumTexte: MAISON.premium,
        premiumEssai: `${MAISON.essaiPremium}, sans engagement.`,
        inclus: 'Inclus pendant les programmes THRIVE Groupe, Individuel et Complet, puis 3 mois offerts.',
        decembre: 'En décembre, tout est gratuit pour toutes les familles.',
    },
    acces: {
        titreBeta: 'Recevoir mon accès',
        texteBeta:
            'L’app est en bêta. Laissez votre courriel : nous vous envoyons votre accès personnel, et c’est gratuit jusqu’au 31 décembre.',
        titreOuvert: 'Commencer maintenant',
        texteOuvert: 'Créez votre compte en une minute, sur le web ou dans l’app.',
        bientot: 'Bientôt sur l’App Store et Google Play.',
    },
    faq: [
        { q: 'Faut-il du matériel ?', r: 'Non. Les activités utilisent ce que vous avez à la maison : coussins, couverture, papier, ballon.' },
        { q: 'Mon enfant va-t-il passer plus de temps sur un écran ?', r: 'Non. L’écran sert au parent à lancer l’activité. L’activité, elle, se vit ensemble, loin de l’écran.' },
        { q: 'Et si je n’ai que 10 minutes ?', r: 'C’est fait pour ça. Chaque activité tient en 10 minutes. Certaines ont une version plus longue, si vous en avez envie.' },
        { q: 'Quelles données recueillez-vous sur mon enfant ?', r: 'Le strict minimum pour adapter les activités à son âge. Vous restez maître de ces données et pouvez les supprimer en tout temps. Les détails sont dans la politique de confidentialité.' },
        { q: 'Puis-je arrêter quand je veux ?', r: 'Oui. L’abonnement premium est sans engagement et s’arrête en un clic.' },
    ],
};

// ── Page Programmes (vue d'ensemble + prix) ──────────────────────────────────
export const PAGE_PROGRAMMES = {
    seo: {
        title: 'Programmes et prix | THRIVE Sport Positive — Montréal',
        description: 'THRIVE Maison, Groupe, Individuel et Complet : les prix, ce qui est inclus et comment se passe le paiement. Aucune surprise.',
    },
    titre: 'Les programmes et leurs prix',
    texte: 'Commencez à la maison. Venez sur le terrain quand vous le souhaitez. Tous les programmes en présentiel commencent par un appel gratuit de 15 minutes.',
    parOuCommencer: {
        titre: 'Par où commencer ?',
        items: [
            { si: 'Vous voulez commencer ce soir, sans vous engager', alors: 'THRIVE Maison', to: '/maison' },
            { si: 'Votre enfant gagnerait à être avec d’autres jeunes', alors: 'THRIVE Groupe', to: G.path },
            { si: 'Votre enfant a besoin d’un cadre rassurant, en tête-à-tête', alors: 'THRIVE Individuel', to: I.path },
            { si: 'Vous voulez les deux, dans l’ordre', alors: 'THRIVE Complet', to: PROGRAMMES.complet.path },
        ],
    },
    lancement: `Premières vagues en présentiel : ${ENTREPRISE.lancement}.`,
    fondatrice: OFFRE_FONDATRICE.texte,
};

// ── Pages programme (gabarit commun, 6 blocs) ────────────────────────────────
export const PAGES_PROGRAMME = {
    groupe: {
        seo: {
            title: 'THRIVE Groupe | Ateliers sportifs pour la confiance, 4 enfants max — Montréal',
            description: '13 ateliers sportifs multisports de 60 minutes, à 4 enfants maximum, pour aider votre enfant à aller vers les autres et à oser. Montréal, à partir de janvier 2027.',
        },
        pourQui:
            'Pour l’enfant qui reste en retrait, qui hésite à aller vers les autres, ou qui a besoin d’un groupe bienveillant pour oser. Les premières vagues sont pensées pour les 8 à 11 ans.',
        concretement: [
            '13 ateliers sportifs multisports de 60 minutes, un par semaine',
            `${G.enfantsMax} enfants maximum par groupe`,
            'Des vagues fermées : le groupe commence et finit ensemble, sans arrivée en cours de route',
            'Deux adultes présents à chaque atelier',
            'Un parcours choisi pour votre enfant à la séance 1 : Oser ou Lien',
        ],
        recu: [
            'Le bilan de départ, puis des mesures aux séances 7 et 13',
            'Un bilan individuel écrit à la fin, au nom de votre enfant',
            'Des nouvelles à mi-parcours et à la fin du programme',
            'THRIVE Maison premium inclus pendant le programme, puis 3 mois offerts',
        ],
        faq: [
            { q: 'Quand commence la prochaine vague ?', r: `Les premières vagues commencent en ${ENTREPRISE.lancement}. Chaque vague est annoncée environ 4 semaines à l’avance ; l’appel de 15 minutes vous réserve une place.` },
            { q: 'Pourquoi 4 enfants maximum ?', r: 'Pour que chaque enfant soit vu, écouté et suivi individuellement, même en groupe.' },
            { q: 'Et si mon enfant manque une séance ?', r: 'Il reprend la semaine suivante avec son groupe. Le défi de la semaine et les activités THRIVE Maison l’aident à rattraper.' },
            { q: 'Où ?', r: ENTREPRISE.lieu },
        ],
    },
    individuel: {
        seo: {
            title: 'THRIVE Individuel | 13 séances en tête-à-tête pour la confiance — Montréal',
            description: '13 séances sportives en tête-à-tête de 60 minutes, au rythme de votre enfant, pour l’aider à oser essayer. Et THRIVE Complet : on commence seul, on finit avec les autres.',
        },
        pourQui:
            'Pour l’enfant qui lâche dès que c’est difficile, qui refuse d’essayer, ou qui a besoin d’un cadre rassurant avant de rejoindre un groupe.',
        concretement: [
            '13 séances en tête-à-tête de 60 minutes, une par semaine',
            'Un démarrage 1 à 2 semaines après l’appel',
            'Un parcours choisi pour votre enfant à la séance 1 : Oser ou Lien',
            'Une messagerie avec le coach, réponse en 24 à 48 h en semaine',
        ],
        recu: [
            'Le bilan de départ, puis des mesures aux séances 7 et 13',
            'Le Book THRIVE à la fin : ce que votre enfant a appris, en mots et en images',
            'Des nouvelles à mi-parcours et à la fin du programme',
            'THRIVE Maison premium inclus pendant le programme, puis 3 mois offerts',
        ],
        complet: {
            titre: 'THRIVE Complet',
            accroche: 'On commence seul, on finit avec les autres.',
            texte: 'Votre enfant commence en tête-à-tête, puis rejoint la prochaine vague de THRIVE Groupe pour mettre en pratique avec d’autres jeunes.',
            passerelle: 'Déjà inscrit à THRIVE Individuel ? Le passage à THRIVE Complet coûte la différence de prix.',
        },
        faq: [
            { q: 'Pourquoi en tête-à-tête ?', r: 'Certains enfants ont besoin d’un cadre rassurant pour oser. Le tête-à-tête permet d’aller à leur rythme.' },
            { q: 'Quand peut-on commencer ?', r: `À partir de ${ENTREPRISE.lancement}, 1 à 2 semaines après l’appel de 15 minutes.` },
            { q: 'Où ?', r: ENTREPRISE.lieu },
            { q: 'Et si ce n’est pas le bon cadre ?', r: 'Vous pouvez arrêter après la séance 2 : les versements déjà faits vous sont remboursés.' },
        ],
    },
};

// ── La méthode ───────────────────────────────────────────────────────────────
export const PAGE_METHODE = {
    seo: {
        title: 'La méthode THRIVE | 13 séances, 8 piliers de la psychologie positive',
        description: 'Une méthode fondée sur la recherche en psychologie positive et en développement positif par le sport : 13 séances, 8 piliers, deux parcours (Oser, Lien) et des mesures aux séances 1, 7 et 13.',
    },
    titre: 'La méthode THRIVE',
    sousTitre: 'Là où le sport devient une école de vie.',
    definition:
        'THRIVE est un programme structuré qui fait pratiquer, par le sport, les habiletés qui donnent confiance : oser, persévérer, aller vers les autres. Le parent y participe, à la maison.',
    parcours: {
        titre: 'Deux parcours, choisis à la séance 1',
        items: [
            { titre: 'Oser', texte: 'Pour l’enfant qui lâche quand c’est dur : essayer, se tromper, recommencer.' },
            { titre: 'Lien', texte: 'Pour l’enfant qui reste seul : aller vers les autres, trouver sa place dans un groupe.' },
        ],
    },
    piliers: {
        titre: '8 piliers, issus de la recherche',
        items: [
            { nom: 'Autodétermination', texte: 'Il joue parce qu’il le veut, pas par peur de décevoir.', ref: 'Deci et Ryan' },
            { nom: 'Sentiment d’efficacité', texte: 'Il essaie parce qu’il croit pouvoir y arriver.', ref: 'Bandura' },
            { nom: 'Développement positif des jeunes (5C)', texte: 'Compétence, confiance, connexion, caractère et bienveillance.', ref: 'Lerner' },
            { nom: 'Habiletés de vie par le sport', texte: 'Ce qu’il apprend sur le terrain, il le réutilise ailleurs.', ref: 'Gould et Carson' },
            { nom: 'Modèle PERMA', texte: 'Émotions positives, engagement, relations, sens, accomplissement.', ref: 'Seligman' },
            { nom: 'Forces de caractère', texte: 'On part de ses forces plutôt que de ses faiblesses.', ref: 'Peterson et Seligman' },
            { nom: 'Buts de maîtrise', texte: 'Il se compare à lui-même, pas aux autres.', ref: 'Nicholls ; Ames' },
            { nom: 'Parcours sportif respectueux (DMSP)', texte: 'Ni brûlé, ni sous-stimulé : le sport à sa mesure.', ref: 'Côté' },
        ],
    },
    phases: {
        titre: '13 séances, 3 phases',
        items: [
            { nom: 'Ancrer', seances: 'Séances 1 à 4', texte: 'Faire connaissance, mesurer le point de départ, poser les bases.' },
            { nom: 'Développer', seances: 'Séances 5 à 9', texte: 'Pratiquer les habiletés, une à la fois, avec des défis de plus en plus réels.' },
            { nom: 'Intégrer', seances: 'Séances 10 à 13', texte: 'Les utiliser seul, à l’école, en famille, et mesurer le chemin parcouru.' },
        ],
    },
    acteurs: {
        titre: 'Trois rôles clairs',
        items: [
            { nom: 'Le coach', texte: 'Anime les séances selon la méthode, mesure et vous tient au courant. Il n’est pas psychologue.' },
            { nom: 'L’enfant', texte: 'Essaie, se trompe, recommence. Il choisit ses défis avec le coach.' },
            { nom: 'Le parent', texte: 'Fait les activités THRIVE Maison avec son enfant et reçoit des nouvelles aux séances 7 et 13.' },
        ],
    },
    mesure: {
        titre: 'Ce qui se mesure',
        texte: 'Aux séances 1, 7 et 13, de courts questionnaires reconnus dans la recherche mesurent l’évolution des habiletés de vie et du bien-être. Ce ne sont pas des évaluations cliniques : ce sont des repères pour voir le chemin parcouru.',
    },
    limites: {
        titre: 'Ce que THRIVE est. Ce qu’il n’est pas.',
        est: [
            'Un programme de développement de la confiance par le sport',
            'Fondé sur la recherche en psychologie positive',
            'Mesuré, avec un bilan écrit pour le parent',
        ],
        nEstPas: [
            'Une thérapie ni un suivi psychologique',
            'Un camp de jour ou un simple cours de sport',
            'Une promesse de résultat : nous promettons le travail, et de le mesurer',
        ],
    },
    references:
        'Références principales : Deci et Ryan (théorie de l’autodétermination) ; Bandura (auto-efficacité) ; Lerner et coll. (développement positif des jeunes, modèle des 5C) ; Gould et Carson (habiletés de vie par le sport) ; Seligman (modèle PERMA) ; Peterson et Seligman (forces de caractère VIA) ; Nicholls, Ames (théorie des buts d’accomplissement) ; Côté (modèle de développement de la participation sportive, DMSP).',
};

// ── À propos ─────────────────────────────────────────────────────────────────
export const PAGE_A_PROPOS = {
    seo: {
        title: 'À propos | Lylian Celma, fondateur de THRIVE Sport Positive',
        description: 'Ancien hockeyeur de haut niveau, entraîneur de plus de 150 enfants et étudiant en psychologie à l’Université de Montréal : l’histoire derrière THRIVE.',
    },
    titre: 'Il ne me manquait pas le niveau. Il me manquait un guide.',
    histoire: [
        'Je m’appelle Lylian Celma. J’ai joué au hockey sur glace à haut niveau, en France. À 12 ans, j’avais le niveau ; ce qui me manquait, c’était quelqu’un pour m’apprendre à gérer la pression, à oser, à rebondir.',
        'Depuis, j’ai entraîné plus de 150 enfants. J’ai vu les mêmes choses revenir : l’enfant qui abandonne au premier échec, celui qui reste au bord du groupe, le parent qui voudrait aider mais qui manque de temps.',
        'En étudiant la psychologie à l’Université de Montréal, j’ai trouvé les outils qui m’avaient manqué. THRIVE relie les deux : la science comme méthode, le sport comme terrain de pratique, et le parent comme partenaire.',
    ],
    reperes: [
        { titre: 'Ancien hockeyeur de haut niveau', texte: 'Le sport comme école de la pression, de l’effort et de l’équipe.' },
        { titre: 'Plus de 150 enfants entraînés', texte: 'Le terrain, avant la théorie.' },
        { titre: 'Psychologie à l’Université de Montréal', texte: 'La recherche en psychologie positive comme base de la méthode.' },
        { titre: 'Accompagné par un incubateur', texte: 'THRIVE est accompagné par le Parcours Concrétisez de l’Université de Montréal (Millénium Québecor).' },
    ],
    engagements: {
        titre: 'Mes engagements envers vous',
        items: [
            'Vérification des antécédents judiciaires de tout adulte qui accompagne votre enfant',
            'Deux adultes présents lors des ateliers en groupe',
            'Aucune donnée sur votre enfant au-delà du strict nécessaire',
            'Vous dire honnêtement si THRIVE n’est pas le bon cadre, et vous orienter',
        ],
    },
    citation: '« Grandir par le sport, réussir pour la vie. »',
};

// ── Partenaires ──────────────────────────────────────────────────────────────
export const PAGE_PARTENAIRES = {
    seo: {
        title: 'Partenaires | Cliniques, écoles, clubs et employeurs — THRIVE Sport Positive',
        description: 'Offrez à vos familles un parcours simple pour la confiance de leur enfant, pendant l’attente d’un suivi ou en complément. Avantages pour les familles, bilan anonyme pour vous.',
    },
    titre: 'Pour les professionnels qui accompagnent les familles',
    texte:
        'Cliniques, écoles, clubs sportifs, organismes et employeurs : vous voyez chaque semaine des parents qui cherchent quoi faire pour leur enfant. THRIVE leur donne une première étape concrète.',
    pourQui: [
        { titre: 'Cliniques et professionnels de la santé', texte: 'Pendant l’attente d’un suivi, ou en complément : une activité structurée, sans prétention clinique.' },
        { titre: 'Écoles', texte: 'Pour les élèves qui manquent de confiance ou restent en retrait, et pour leurs parents.' },
        { titre: 'Clubs et organismes sportifs', texte: 'Pour les jeunes qui décrochent ou n’osent plus, avant qu’ils abandonnent le sport.' },
        { titre: 'Employeurs', texte: 'Un avantage concret pour les parents de votre équipe, qui manquent de temps le soir.' },
    ],
    avantages: {
        titre: 'Ce que vos familles reçoivent',
        items: [
            'Un rabais de 15 % sur les programmes en présentiel, avec votre code',
            'Un accès à THRIVE Maison pour commencer dès ce soir',
            'Un appel de 15 minutes pour savoir si THRIVE leur convient',
        ],
    },
    pourVous: {
        titre: 'Ce que vous recevez',
        items: [
            'Un parcours simple à proposer, avec une fiche à remettre',
            'Un bilan anonyme et agrégé des familles que vous avez orientées',
            'Un essai sans engagement, réversible à tout moment',
        ],
    },
    regle: 'THRIVE ne verse aucune commission aux membres d’un ordre professionnel.',
    formulaireTitre: 'Parlons-en 15 minutes',
    formulaireTexte: 'Laissez vos coordonnées : Lylian vous rappelle dans la semaine.',
};

// ── Appel ────────────────────────────────────────────────────────────────────
export const PAGE_APPEL = {
    seo: {
        title: 'Réserver l’appel gratuit de 15 minutes | THRIVE Sport Positive',
        description: 'Un appel gratuit et sans engagement pour nous parler de votre enfant et savoir si THRIVE est le bon cadre.',
    },
    titre: 'Réserver l’appel gratuit',
    sousTitre: `${APPEL.duree}, gratuit, sans engagement.`,
    deroulement: [
        'Nous nous présentons en 2 minutes.',
        'Vous nous parlez de votre enfant : nous écoutons.',
        'Nous vous disons honnêtement si THRIVE est le bon cadre, et quel programme lui conviendrait.',
    ],
    formulaireTitre: 'Être rappelé',
    formulaireTexte: 'Indiquez vos coordonnées et le moment qui vous convient : nous vous rappelons.',
    confirmation: {
        titre: 'Merci, c’est noté.',
        texte: 'Nous vous rappelons dans les 2 jours ouvrables. En attendant, vous pouvez déjà essayer THRIVE Maison.',
    },
};

// ── Formulaires (mentions Loi 25) ────────────────────────────────────────────
export const FORMULAIRES = {
    consentement:
        'J’accepte que THRIVE Sport Positive utilise ces coordonnées pour me recontacter à ce sujet. Aucune information sur mon enfant n’est demandée ici.',
    lienConfidentialite: 'Politique de confidentialité',
    erreur: 'L’envoi n’a pas fonctionné. Réessayez, ou écrivez-nous à ' + ENTREPRISE.courriel + '.',
    // Libellés, aides et messages d’erreur des champs (composant FormulaireDemande).
    champs: {
        prenom: 'Prénom',
        email: 'Courriel',
        telephone: 'Téléphone',
        telephoneFacultatif: 'Téléphone (facultatif)',
        interet: 'Ce qui vous intéresse',
        moment: 'Meilleur moment pour vous rappeler',
        organisation: 'Organisation',
        message: 'Message (facultatif)',
        choisir: 'Choisir…',
    },
    envoyer: 'Envoyer',
    envoiEnCours: 'Envoi en cours…',
    erreurs: {
        prenom: 'Indiquez votre prénom.',
        email: 'Cette adresse courriel ne semble pas valide.',
        telephone: 'Indiquez un numéro de téléphone valide.',
        organisation: 'Indiquez le nom de votre organisation.',
        consentement: 'Cochez cette case pour continuer.',
    },
    moments: [
        { value: 'peu-importe', label: 'Peu importe' },
        { value: 'matin', label: 'Le matin' },
        { value: 'midi', label: 'Le midi' },
        { value: 'apres-midi', label: 'L’après-midi' },
        { value: 'soir', label: 'Le soir' },
        { value: 'fin-de-semaine', label: 'La fin de semaine' },
    ],
    interets: [
        { value: 'groupe', label: 'THRIVE Groupe' },
        { value: 'individuel', label: 'THRIVE Individuel' },
        { value: 'complet', label: 'THRIVE Complet' },
        { value: 'maison', label: 'THRIVE Maison' },
        { value: 'ne-sais-pas', label: 'Je ne sais pas encore' },
    ],
};

// ── Pied de page ─────────────────────────────────────────────────────────────
export const PIED = {
    signature: 'Grandir par le sport, réussir pour la vie.',
    lancement: `Programmes en présentiel à Montréal à partir de ${ENTREPRISE.lancement}.`,
    colonnes: {
        offre: 'L’offre',
        thrive: 'THRIVE',
        contact: 'Contact',
    },
    legal: 'THRIVE n’est pas une thérapie et ne remplace pas un professionnel de la santé.',
};

// ── Navigation, bandeau et page introuvable ──────────────────────────────────
export const NAV = {
    accueil: 'THRIVE Sport Positive, accueil',
    menuPrincipal: 'Menu principal',
    ouvrirMenu: 'Ouvrir le menu',
    fermerMenu: 'Fermer le menu',
    actionsRapides: 'Actions rapides',
    liens: [
        { to: '/maison', label: 'THRIVE Maison' },
        { to: '/programmes', label: 'Programmes' },
        { to: '/methode', label: 'La méthode' },
        { to: '/partenaires', label: 'Partenaires' },
        { to: '/a-propos', label: 'À propos' },
    ],
};

export const BANDEAU_DECEMBRE = {
    texte: 'En décembre, THRIVE Maison est gratuite pour toutes les familles.',
    lien: 'En profiter',
};

export const PAGE_INTROUVABLE = {
    title: 'Page introuvable | THRIVE Sport Positive',
    titre: 'Cette page n’existe pas (ou plus).',
    texte: 'Le lien est peut-être ancien. Revenez à l’accueil, nous vous y retrouverons.',
    bouton: 'Retour à l’accueil',
};
