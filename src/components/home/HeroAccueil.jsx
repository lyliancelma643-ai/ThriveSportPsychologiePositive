import React from 'react';
import { ACCUEIL } from '../../content/textes';
import { decembreGratuitActif } from '../../data/offre';
import { Waves } from '../ui/Waves';
import CtaMaison from '../shared/CtaMaison';
import CtaAppel from '../shared/CtaAppel';
import CadreTelephone from './CadreTelephone';
import ecranMaison from '../../assets/app/ecran-maison.webp';
import cabri from '../../assets/cabri/cabri-accueil.webp';

const HeroAccueil = () => {
    const h = ACCUEIL.hero;
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="absolute inset-0 z-0 opacity-60" aria-hidden="true">
                <Waves strokeColor="#C5A05930" />
            </div>
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f8f9fa]/80 rounded-l-[10rem] z-0 translate-x-1/3 hidden lg:block" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
                    <div className="lg:col-span-7 min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F7A5A] mb-4">{h.surtitre}</p>
                        <h1 className="font-serif text-[#1B263B] leading-[1.05] text-5xl sm:text-6xl xl:text-7xl">
                            <span className="font-bold italic">{h.titre}</span>
                            <span className="block mt-2 text-[#6F7A5A] text-4xl sm:text-5xl lg:text-6xl">{h.titreSuite}</span>
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl">{h.texte}</p>
                        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                            <CtaMaison taille="lg" className="w-full sm:w-auto" />
                            <CtaAppel taille="lg" variante="secondaire" className="w-full sm:w-auto" />
                        </div>
                        {decembreGratuitActif() && (
                            <p className="mt-4 text-sm font-semibold text-[#8A6A2F]">{h.note}</p>
                        )}
                    </div>

                    <div className="order-first lg:order-last lg:col-span-5 relative flex justify-center">
                        <div className="relative w-full max-w-md h-60 sm:h-[27rem] lg:h-[34rem] overflow-hidden lg:overflow-visible">
                            <div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14.5rem] h-[14.5rem] sm:w-[25rem] sm:h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-gradient-to-br from-[#C5A059]/30 via-[#8F9779]/25 to-[#1B263B]/10"
                                aria-hidden="true"
                            />
                            <CadreTelephone
                                src={ecranMaison}
                                alt="Écran d’accueil de l’application THRIVE Maison : l’activité recommandée du soir"
                                priorite
                                className="absolute right-6 sm:right-12 lg:right-8 top-4 lg:top-2 w-40 sm:w-56 lg:w-60 rotate-3"
                            />
                            <img
                                src={cabri}
                                alt="Cabri, la mascotte de THRIVE Maison, qui salue"
                                width="640"
                                height="795"
                                fetchPriority="high"
                                className="absolute left-0 sm:left-2 lg:-left-6 bottom-0 w-28 sm:w-44 lg:w-52 h-auto drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAccueil;
