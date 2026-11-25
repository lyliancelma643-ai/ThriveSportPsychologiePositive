import React from 'react';
import { Check, GraduationCap, Rocket, Trophy, Users, HeartHandshake } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import CtaAppel from '../components/shared/CtaAppel';
import Bouton from '../components/shared/Bouton';
import { PAGE_A_PROPOS } from '../content/textes';
import photo from '../assets/lylian-celma.webp';
import CtaReserver from '../components/shared/CtaReserver';

const A = PAGE_A_PROPOS;
const ICONES_REPERES = [Trophy, Users, GraduationCap, HeartHandshake, Rocket];

const About = () => (
    <>
        <SEO title={A.seo.title} description={A.seo.description} />

        {/* Titre + histoire + photo */}
        <Section>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F7A5A] mb-4">{A.surtitre}</p>
                    <h1 className="font-serif text-4xl md:text-6xl text-[#1B263B] leading-tight">{A.titre}</h1>
                    <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-gray-700">
                        {A.histoire.map((p) => (
                            <p key={p.slice(0, 24)}>{p}</p>
                        ))}
                    </div>
                </div>
                <figure className="lg:sticky lg:top-28">
                    <img
                        src={photo}
                        alt="Lylian Celma, fondateur de THRIVE Sport Positive, en polo THRIVE"
                        width="900"
                        height="900"
                        fetchPriority="high"
                        className="w-full max-w-md mx-auto h-auto rounded-[2rem] shadow-lg object-cover aspect-square"
                    />
                </figure>
            </div>
        </Section>

        {/* Repères */}
        <Section fond="gris">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {A.reperes.map((r, i) => {
                    const Icone = ICONES_REPERES[i] || Trophy;
                    return (
                        <div key={r.titre} className="rounded-[2rem] bg-white border border-gray-100 shadow-sm p-6">
                            <div className="w-11 h-11 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#8A6A2F] mb-4">
                                <Icone size={22} aria-hidden="true" />
                            </div>
                            <h2 className="font-sans font-semibold text-lg text-[#1B263B] leading-snug">{r.titre}</h2>
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
                <CtaReserver taille="lg" variante="or" surFonce />
                <CtaAppel taille="lg" variante="secondaire" surFonce />
                <Bouton to="/methode" variante="secondaire" taille="lg" surFonce>
                    Découvrir la méthode
                </Bouton>
            </div>
        </Section>
    </>
);

export default About;
