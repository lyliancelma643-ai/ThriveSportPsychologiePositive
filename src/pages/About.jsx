import React from 'react';
import { Check, GraduationCap, Rocket, Trophy, Users } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import CtaAppel from '../components/shared/CtaAppel';
import Bouton from '../components/shared/Bouton';
import { PAGE_A_PROPOS } from '../content/textes';
import photo from '../assets/coach-child-hockey.jpg';

const A = PAGE_A_PROPOS;
const ICONES_REPERES = [Trophy, Users, GraduationCap, Rocket];

const About = () => (
    <>
        <SEO title={A.seo.title} description={A.seo.description} />

        {/* Titre + histoire + photo */}
        <Section>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
                <div>
                    <h1 className="font-serif font-bold text-4xl md:text-5xl text-[#1B263B] leading-tight">{A.titre}</h1>
                    <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-gray-700">
                        {A.histoire.map((p) => (
                            <p key={p.slice(0, 24)}>{p}</p>
                        ))}
                    </div>
                </div>
                <figure className="lg:sticky lg:top-28">
                    <img
                        src={photo}
                        alt="Un entraîneur se penche vers un jeune hockeyeur pour lui parler, sur la glace"
                        loading="lazy"
                        className="w-full h-auto rounded-[2rem] shadow-lg object-cover aspect-[4/3]"
                    />
                </figure>
            </div>
        </Section>

        {/* Repères */}
        <Section fond="gris">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {A.reperes.map((r, i) => {
                    const Icone = ICONES_REPERES[i] || Trophy;
                    return (
                        <div key={r.titre} className="rounded-[2rem] bg-white border border-gray-100 shadow-sm p-6">
                            <div className="w-11 h-11 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#8A6A2F] mb-4">
                                <Icone size={22} aria-hidden="true" />
                            </div>
                            <h2 className="font-serif font-bold text-lg text-[#1B263B] leading-snug">{r.titre}</h2>
                            <p className="mt-2 text-gray-600 leading-relaxed">{r.texte}</p>
                        </div>
                    );
                })}
            </div>
        </Section>

        {/* Engagements */}
        <Section>
            <TitreSection titre={A.engagements.titre} />
            <ul className="max-w-2xl mx-auto space-y-4">
                {A.engagements.items.map((t) => (
                    <li key={t} className="flex gap-3 text-lg text-gray-700 leading-relaxed">
                        <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#8F9779]/25 flex items-center justify-center text-[#4F5A3A]">
                            <Check size={16} strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span>{t}</span>
                    </li>
                ))}
            </ul>
        </Section>

        {/* Citation + appels */}
        <Section fond="marine">
            <blockquote className="max-w-3xl mx-auto text-center font-serif text-2xl md:text-3xl italic leading-relaxed text-white">
                {A.citation}
            </blockquote>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                <CtaAppel taille="lg" surFonce />
                <Bouton to="/methode" variante="secondaire" taille="lg" surFonce>
                    Découvrir la méthode
                </Bouton>
            </div>
        </Section>
    </>
);

export default About;
