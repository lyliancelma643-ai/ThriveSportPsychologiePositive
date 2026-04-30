import React from 'react';

import skateImg from '../../assets/icons/ice-skating-shoes.png';
import hockeyImg from '../../assets/icons/ice-hockey.png';
import basketballImg from '../../assets/icons/ball-of-basketball.png';
import soccerImg from '../../assets/icons/football.png';
import americanFootballImg from '../../assets/icons/american-football.png';

const maskStyle = (imgSrc) => ({
    width: "1em",
    height: "1em",
    backgroundColor: "currentColor",
    maskImage: `url(${imgSrc})`,
    WebkitMaskImage: `url(${imgSrc})`,
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    display: "inline-block"
});

export const PatinageIcon = ({ className }) => (
    <div 
        className={className} 
        style={maskStyle(skateImg)}
        role="img"
        aria-label="Icône de Patinage - Coaching mental et développement"
        title="Patinage - Thrive Sport Positive"
    >
        <span className="sr-only">Patinage : Préparation mentale, développement de la confiance en soi et performance sportive avec Thrive Sport Positive.</span>
    </div>
);

export const HockeyIcon = ({ className }) => (
    <div 
        className={className} 
        style={maskStyle(hockeyImg)}
        role="img"
        aria-label="Icône de Hockey sur glace - Coaching mental et développement"
        title="Hockey - Thrive Sport Positive"
    >
        <span className="sr-only">Hockey sur glace : Préparation mentale, gestion du stress, focus et intelligence de jeu avec Thrive Sport Positive.</span>
    </div>
);

export const BasketballIcon = ({ className }) => (
    <div 
        className={className} 
        style={maskStyle(basketballImg)}
        role="img"
        aria-label="Icône de Basketball - Coaching mental et développement"
        title="Basketball - Thrive Sport Positive"
    >
        <span className="sr-only">Basketball : Préparation mentale, résilience face à l'échec et performance sportive avec Thrive Sport Positive.</span>
    </div>
);

export const SoccerIcon = ({ className }) => (
    <div 
        className={className} 
        style={maskStyle(soccerImg)}
        role="img"
        aria-label="Icône de Soccer - Coaching mental et développement"
        title="Soccer - Thrive Sport Positive"
    >
        <span className="sr-only">Soccer (Football) : Préparation mentale, intelligence relationnelle et performance en équipe avec Thrive Sport Positive.</span>
    </div>
);

export const FootballIcon = ({ className }) => (
    <div 
        className={className} 
        style={maskStyle(americanFootballImg)}
        role="img"
        aria-label="Icône de Football américain - Coaching mental et développement"
        title="Football Américain - Thrive Sport Positive"
    >
        <span className="sr-only">Football américain : Préparation mentale, gestion des émotions, courage et explosivité avec Thrive Sport Positive.</span>
    </div>
);
