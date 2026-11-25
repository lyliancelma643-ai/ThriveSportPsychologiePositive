import React from 'react';
import { Link } from 'react-router-dom';
import ProgrammePage from '../components/programme/ProgrammePage';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import CtaAppel from '../components/shared/CtaAppel';
import CtaReserver from '../components/shared/CtaReserver';
import { PAGES_PROGRAMME } from '../content/textes';
import { PROGRAMMES, NOTE_TAXES, formatPrix } from '../data/offre';
import photo from '../assets/pexels-cottonbro-6557330.jpg';

const ProgrammeIndividuel = () => {
    const c = PAGES_PROGRAMME.individuel.complet;
    const complet = PROGRAMMES.complet;
    return (
        <ProgrammePage
            programme={PROGRAMMES.individuel}
            page={PAGES_PROGRAMME.individuel}
            image={photo}
            alt="Un entraîneur accompagne un jeune hockeyeur casqué, en tête-à-tête, sur la patinoire"
        >
            <Section id="complet" fond="gris">
                <div className="max-w-3xl mx-auto bg-white rounded-[2rem] border-2 border-[#C5A059] shadow-xl p-8 sm:p-10 text-center">
                    <TitreSection titre={c.titre} texte={c.accroche} className="!mb-4" />
                    <p className="text-gray-700 text-lg leading-relaxed">{c.texte}</p>
                    <p className="mt-6">
                        <span className="text-5xl font-serif font-bold text-[#1B263B]">{formatPrix(complet.prix)}</span>
                    </p>
                    <p className="mt-1 text-gray-700">{NOTE_TAXES}</p>
                    <p className="mt-5 text-gray-700">{c.passerelle}</p>
                    <div className="mt-7">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3"><CtaReserver taille="lg" programme="complet" className="w-full sm:w-auto" /><CtaAppel taille="lg" variante="secondaire" to="/appel?programme=complet" className="w-full sm:w-auto" /></div>
                    </div>
                    <p className="mt-5 text-sm">
                        <Link to="/programmes/groupe" className="underline text-[#1B263B] hover:text-[#8A6A2F]">
                            {PROGRAMMES.groupe.nom}
                        </Link>
                    </p>
                </div>
            </Section>
        </ProgrammePage>
    );
};

export default ProgrammeIndividuel;
