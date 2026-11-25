import React from 'react';
import { Building2, Briefcase, GraduationCap, Stethoscope, Trophy, ShieldCheck } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import Bouton from '../components/shared/Bouton';
import FormulaireDemande from '../components/shared/FormulaireDemande';
import { PAGE_PARTENAIRES, CTA } from '../content/textes';

const P = PAGE_PARTENAIRES;
// Même ordre que PAGE_PARTENAIRES.pourQui : cliniques, écoles, clubs, employeurs.
const ICONES = [Stethoscope, GraduationCap, Trophy, Briefcase];

// Libellés locaux (absents de textes.js).
const BOUTON_FORMULAIRE = 'Envoyer ma demande';
const CONFIRMATION = { titre: 'Merci. Lylian vous rappelle dans la semaine.' };

const Liste = ({ titre, items, fond }) => (
    <div className={`rounded-[2rem] border shadow-sm p-7 md:p-8 ${fond}`}>
        <h3 className="font-serif font-bold text-2xl text-[#1B263B] mb-5">{titre}</h3>
        <ul className="space-y-3">
            {items.map((t) => (
                <li key={t} className="flex gap-3 text-gray-700 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                    <span>{t}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Partenaires = () => (
    <>
        <SEO title={P.seo.title} description={P.seo.description} />

        <section className="bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
                <h1 className="font-serif font-bold text-4xl md:text-5xl text-[#1B263B] leading-tight max-w-3xl mx-auto">
                    {P.titre}
                </h1>
                <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">{P.texte}</p>
                <div className="mt-8">
                    <Bouton to="#contact" taille="lg">
                        {CTA.partenaires}
                    </Bouton>
                </div>
            </div>
        </section>

        <Section>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {P.pourQui.map((c, i) => {
                    const Icone = ICONES[i] || Building2;
                    return (
                        <div key={c.titre} className="rounded-[2rem] bg-white border border-gray-100 shadow-lg p-6">
                            <div className="w-12 h-12 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#8A6A2F] mb-4">
                                <Icone size={24} aria-hidden="true" />
                            </div>
                            <h2 className="font-serif font-bold text-lg text-[#1B263B] leading-snug">{c.titre}</h2>
                            <p className="mt-2 text-gray-600 leading-relaxed">{c.texte}</p>
                        </div>
                    );
                })}
            </div>
        </Section>

        <Section fond="gris">
            <div className="grid gap-6 md:grid-cols-2">
                <Liste titre={P.avantages.titre} items={P.avantages.items} fond="bg-white border-gray-100" />
                <Liste titre={P.pourVous.titre} items={P.pourVous.items} fond="bg-white border-gray-100" />
            </div>

            <div className="mt-8 max-w-3xl mx-auto flex items-start gap-3 rounded-2xl border border-[#8F9779]/50 bg-[#8F9779]/10 px-5 py-4">
                <ShieldCheck size={22} className="mt-0.5 shrink-0 text-[#4F5A3A]" aria-hidden="true" />
                <p className="text-gray-800 leading-relaxed">{P.regle}</p>
            </div>
        </Section>

        <Section id="contact">
            <div className="max-w-xl mx-auto">
                <FormulaireDemande
                    type="partenaire"
                    champs={['organisation', 'telephone', 'message']}
                    titre={P.formulaireTitre}
                    texte={P.formulaireTexte}
                    boutonLabel={BOUTON_FORMULAIRE}
                    confirmation={CONFIRMATION}
                />
            </div>
        </Section>
    </>
);

export default Partenaires;
