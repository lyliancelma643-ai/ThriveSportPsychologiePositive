import React from 'react';
import { ArrowRight, Check, Flag, Users, X } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import CtaAppel from '../components/shared/CtaAppel';
import Bouton from '../components/shared/Bouton';
import { PAGE_METHODE } from '../content/textes';

const M = PAGE_METHODE;
const ICONES_PARCOURS = [Flag, Users];

// « Aucun tableau d'auteurs à l'écran » : le nom de l'auteur reste en petit sous chaque pilier.
const Method = () => (
    <>
        <SEO title={M.seo.title} description={M.seo.description} />

        {/* En-tête */}
        <section className="bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#6F7A5A]">{M.sousTitre}</p>
                <h1 className="font-serif font-bold text-4xl md:text-5xl text-[#1B263B] leading-tight">{M.titre}</h1>
                <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">{M.definition}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                    <CtaAppel taille="lg" />
                    <Bouton to="/maison" variante="secondaire" taille="lg" icone={<ArrowRight size={18} aria-hidden="true" />}>
                        THRIVE Maison
                    </Bouton>
                </div>
            </div>
        </section>

        {/* Deux parcours */}
        <Section id="parcours">
            <TitreSection titre={M.parcours.titre} />
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {M.parcours.items.map((p, i) => {
                    const Icone = ICONES_PARCOURS[i] || Flag;
                    return (
                        <div
                            key={p.titre}
                            className="rounded-[2rem] bg-white border border-gray-100 shadow-lg p-8 border-t-4 border-t-[#C5A059]"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#8A6A2F] mb-5">
                                <Icone size={24} aria-hidden="true" />
                            </div>
                            <h3 className="font-serif font-bold text-2xl text-[#1B263B]">{p.titre}</h3>
                            <p className="mt-2 text-gray-600 leading-relaxed">{p.texte}</p>
                        </div>
                    );
                })}
            </div>
        </Section>

        {/* 8 piliers */}
        <Section fond="gris">
            <TitreSection titre={M.piliers.titre} />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {M.piliers.items.map((p) => (
                    <li key={p.nom} className="rounded-[2rem] bg-white border border-gray-100 shadow-sm p-6 flex flex-col">
                        <h3 className="font-serif font-bold text-lg text-[#1B263B] leading-snug">{p.nom}</h3>
                        <p className="mt-2 text-gray-700 leading-relaxed flex-1">{p.texte}</p>
                        <p className="mt-4 text-xs text-gray-600">{p.ref}</p>
                    </li>
                ))}
            </ul>
        </Section>

        {/* 3 phases */}
        <Section>
            <TitreSection titre={M.phases.titre} />
            <ol className="relative max-w-md mx-auto lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-8">
                {/* Ligne : verticale sur mobile, horizontale sur grand écran */}
                <div
                    aria-hidden="true"
                    className="absolute left-5 top-2 bottom-2 w-0.5 bg-[#C5A059]/50 lg:left-[16.6%] lg:right-[16.6%] lg:top-5 lg:bottom-auto lg:h-0.5 lg:w-auto"
                />
                {M.phases.items.map((ph, i) => (
                    <li key={ph.nom} className="relative pl-16 pb-10 last:pb-0 lg:pl-0 lg:pb-0 lg:text-center">
                        <span className="absolute left-0 top-0 lg:static lg:mx-auto w-10 h-10 rounded-full bg-[#1B263B] text-white font-serif font-bold flex items-center justify-center ring-4 ring-white">
                            {i + 1}
                        </span>
                        <h3 className="lg:mt-5 font-serif font-bold text-xl text-[#1B263B]">{ph.nom}</h3>
                        <p className="text-sm font-semibold text-[#8A6A2F]">{ph.seances}</p>
                        <p className="mt-2 text-gray-600 leading-relaxed lg:max-w-xs lg:mx-auto">{ph.texte}</p>
                    </li>
                ))}
            </ol>
        </Section>

        {/* Acteurs */}
        <Section fond="gris">
            <TitreSection titre={M.acteurs.titre} />
            <div className="grid gap-6 md:grid-cols-3">
                {M.acteurs.items.map((a) => (
                    <div key={a.nom} className="rounded-[2rem] bg-white border border-gray-100 shadow-sm p-7">
                        <h3 className="font-serif font-bold text-xl text-[#1B263B]">{a.nom}</h3>
                        <p className="mt-2 text-gray-600 leading-relaxed">{a.texte}</p>
                    </div>
                ))}
            </div>
        </Section>

        {/* Mesure */}
        <Section>
            <div className="max-w-3xl mx-auto">
                <TitreSection titre={M.mesure.titre} texte={M.mesure.texte} alignement="gauche" className="!mb-0" />
            </div>
        </Section>

        {/* Limites */}
        <Section fond="gris">
            <TitreSection titre={M.limites.titre} />
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                <div className="rounded-[2rem] bg-white border border-gray-100 shadow-sm p-7">
                    <h3 className="font-serif font-bold text-xl text-[#1B263B] mb-4">THRIVE est</h3>
                    <ul className="space-y-3">
                        {M.limites.est.map((t) => (
                            <li key={t} className="flex gap-3 text-gray-700 leading-relaxed">
                                <Check size={20} className="shrink-0 mt-0.5 text-[#6F7A5A]" aria-hidden="true" />
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-[2rem] bg-white border border-gray-100 shadow-sm p-7">
                    <h3 className="font-serif font-bold text-xl text-[#1B263B] mb-4">THRIVE n’est pas</h3>
                    <ul className="space-y-3">
                        {M.limites.nEstPas.map((t) => (
                            <li key={t} className="flex gap-3 text-gray-700 leading-relaxed">
                                <X size={20} className="shrink-0 mt-0.5 text-[#8A6A2F]" aria-hidden="true" />
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>

        {/* Références + bouton final */}
        <Section conteneurClassName="!py-12 md:!py-16">
            <p className="max-w-3xl mx-auto text-xs leading-relaxed text-gray-600">{M.references}</p>
            <div className="mt-10 text-center">
                <CtaAppel taille="lg" />
            </div>
        </Section>
    </>
);

export default Method;
