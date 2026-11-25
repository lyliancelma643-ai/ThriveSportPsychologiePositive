import React from 'react';
import ProgrammePage from '../components/programme/ProgrammePage';
import { PAGES_PROGRAMME } from '../content/textes';
import { PROGRAMMES } from '../data/offre';
import photo from '../assets/pexels-tima-miroshnichenko-6015973.jpg';

const ProgrammeGroupe = () => (
    <ProgrammePage
        programme={PROGRAMMES.groupe}
        page={PAGES_PROGRAMME.groupe}
        image={photo}
        alt="Une entraîneuse et une enfant patinent main dans la main sur une patinoire intérieure"
    />
);

export default ProgrammeGroupe;
