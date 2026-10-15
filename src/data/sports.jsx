import React from 'react';
import { PatinageIcon, HockeyIcon, BasketballIcon, SoccerIcon, FootballIcon } from '../components/icons/PremiumSportsIcons';

// Noms, icônes et couleurs des 5 disciplines. Les TEXTES affichés viennent de
// src/locales/*/translation.json (clés `sports.<id>.*`) : les copies ci-dessous
// sont tenues identiques pour éviter deux sources qui divergent, et Sport.jsx
// ne s'en sert que pour compter les points de la face avant.
export const SPORTS_DATA = [
    {
        id: 'patinage',
        name: "Patinage",
        icon: <PatinageIcon className="mx-auto text-cyan-500 drop-shadow-md" />,
        color: "from-blue-500 to-cyan-400",
        lightColor: "bg-blue-50 border-blue-100",
        techDetails: [
            "Équilibre et centre de gravité",
            "Parcours d'équilibre à niveaux",
            "Tomber et se relever sans drame",
            "Oser essayer un nouveau geste"
        ],
        permaFocus: {
            title: "Confiance & Flow",
            desc: "Le patin est une base. Maîtriser sa glisse donne un sentiment de « j'en suis capable » immédiat, qui réduit la peur de tomber."
        }
    },
    {
        id: 'hockey',
        name: "Hockey",
        icon: <HockeyIcon className="mx-auto text-slate-700 drop-shadow-md" />,
        color: "from-slate-700 to-slate-900",
        lightColor: "bg-slate-50 border-slate-100",
        techDetails: [
            "Lancers sur cible, objectifs chiffrés",
            "Maniement de balle en parcours gradué",
            "Mini-matchs à enjeu",
            "Lecture du jeu et concentration"
        ],
        permaFocus: {
            title: "Engagement & Focus",
            desc: "Le hockey demande de rester attentif et lucide sous la pression. Nous travaillons la concentration et le calme, pour qu'il garde ses moyens quand ça compte."
        }
    },
    {
        id: 'basket',
        name: "Basketball",
        icon: <BasketballIcon className="mx-auto text-orange-500 drop-shadow-md" />,
        color: "from-orange-500 to-amber-500",
        lightColor: "bg-orange-50 border-orange-100",
        techDetails: [
            "Tirs sur cible, objectifs chiffrés",
            "Dribble en parcours gradué",
            "Rater, puis réessayer",
            "Jeu à deux : passer et demander"
        ],
        permaFocus: {
            title: "Résilience & Accomplissement",
            desc: "Au basket, rater un tir est normal. Nous apprenons à voir chaque tir manqué comme une information pour s'ajuster, pas comme une faute."
        }
    },
    {
        id: 'soccer',
        name: "Soccer",
        icon: <SoccerIcon className="mx-auto text-emerald-500 drop-shadow-md" />,
        color: "from-emerald-500 to-green-400",
        lightColor: "bg-emerald-50 border-emerald-100",
        techDetails: [
            "Passes au mur, objectifs chiffrés",
            "Conduite de balle en parcours gradué",
            "Mini-matchs 2 contre 2",
            "Jouer pour l'équipe"
        ],
        permaFocus: {
            title: "Relations & Vision",
            desc: "Le soccer est le sport d'équipe par excellence. Nous connectons la technique individuelle à l'intelligence relationnelle : anticiper les besoins du coéquipier."
        }
    },
    {
        id: 'football',
        name: "Football",
        icon: <FootballIcon className="mx-auto text-yellow-500 drop-shadow-md" />,
        color: "from-yellow-600 to-yellow-500",
        lightColor: "bg-yellow-50 border-yellow-100",
        techDetails: [
            "Départs et réactions",
            "Réceptions : la main et le regard",
            "Relais chronométrés",
            "Garder son calme sous l'enjeu"
        ],
        permaFocus: {
            title: "Émotions Positives & Courage",
            desc: "Un sport d'intensité. Nous apprenons à canaliser l'adrénaline en énergie positive (Excitement) plutôt qu'en stress, renforçant le courage et la détermination."
        }
    }
];
