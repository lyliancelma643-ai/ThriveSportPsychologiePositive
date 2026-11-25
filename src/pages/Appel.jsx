import React, { Suspense, lazy, useEffect, useState } from 'react';
import { CalendarDays, MapPin } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import CtaReserver from '../components/shared/CtaReserver';
import CtaMaison from '../components/shared/CtaMaison';
import FormulaireDemande from '../components/shared/FormulaireDemande';
import { PAGE_APPEL } from '../content/textes';
import { APPEL, ENTREPRISE } from '../data/offre';

const Cal = lazy(() => import('@calcom/embed-react'));

// Libellés locaux (absents de textes.js).
const LIBELLES = {
    deroulement: 'Comment se passe l’appel',
    lieu: 'Où ont lieu les séances',
    rappel: `Les premières vagues commencent en ${ENTREPRISE.lancement}.`,
    pasDeCreneau: 'Aucun créneau ne vous convient ? Être rappelé',
    maisonEnAttendant: 'En attendant, vous pouvez commencer à la maison.',
    chargement: 'Chargement du calendrier…',
};

// Pas d'embed dans les navigateurs automatisés (captures, tests).
const sansEmbed = () => typeof navigator !== 'undefined' && /HeadlessChrome/i.test(navigator.userAgent);

const Calendrier = () => {
    useEffect(() => {
        let annule = false;
        import('@calcom/embed-react').then(({ getCalApi }) =>
            getCalApi().then((cal) => {
                if (annule) return;
                cal('ui', {
                    theme: 'light',
                    cssVarsPerTheme: { light: { 'cal-brand': '#1B263B' }, dark: { 'cal-brand': '#1B263B' } },
                    hideEventTypeDetails: false,
                    layout: 'month_view',
                });
            })
        );
        return () => {
            annule = true;
        };
    }, []);

    return (
        <div className="rounded-[2rem] bg-white border border-gray-100 shadow-lg p-2 sm:p-4 min-h-[560px]">
            <Suspense fallback={<p className="p-6 text-gray-600">{LIBELLES.chargement}</p>}>
                <Cal
                    calLink={APPEL.calLink}
                    style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                    config={{ layout: 'month_view', theme: 'light' }}
                />
            </Suspense>
        </div>
    );
};

const Formulaire = () => (
    <FormulaireDemande
        type="appel"
        champs={['telephone', 'interet', 'moment']}
        titre={PAGE_APPEL.formulaireTitre}
        texte={PAGE_APPEL.formulaireTexte}
        confirmation={PAGE_APPEL.confirmation}
    />
);

const Appel = () => {
    const avecCal = Boolean(APPEL.calLink) && !sansEmbed();
    const [formulaireOuvert, setFormulaireOuvert] = useState(false);

    return (
        <>
            <SEO title={PAGE_APPEL.seo.title} description={PAGE_APPEL.seo.description} />

            <Section fond="gris" conteneurClassName="!py-12 md:!py-16">
                <div className="grid gap-10 lg:grid-cols-[5fr_6fr] lg:gap-14 items-start">
                    {/* Gauche : déroulé, lieu, rappel */}
                    <div>
                        <TitreSection
                            h1
                            alignement="gauche"
                            titre={PAGE_APPEL.titre}
                            texte={PAGE_APPEL.sousTitre}
                            className="!mb-8"
                        />
                        <h2 className="font-serif font-bold text-xl text-[#1B263B] mb-4">{LIBELLES.deroulement}</h2>
                        <ol className="space-y-4">
                            {PAGE_APPEL.deroulement.map((t, i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-[#1B263B] text-white font-serif font-bold flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                    <span className="pt-1 text-gray-700 leading-relaxed">{t}</span>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-8 space-y-3">
                            <div className="flex gap-3 rounded-2xl bg-white border border-gray-100 p-4 shadow-sm">
                                <MapPin size={22} className="shrink-0 mt-0.5 text-[#8A6A2F]" aria-hidden="true" />
                                <p className="text-gray-700 leading-relaxed">{ENTREPRISE.lieu}</p>
                            </div>
                            <div className="flex gap-3 rounded-2xl bg-white border border-gray-100 p-4 shadow-sm">
                                <CalendarDays size={22} className="shrink-0 mt-0.5 text-[#8A6A2F]" aria-hidden="true" />
                                <p className="text-gray-700 leading-relaxed">{LIBELLES.rappel}</p>
                            </div>
                        </div>
                    </div>

                    {/* Droite : calendrier ou formulaire */}
                    <div>
                        {avecCal ? (
                            <>
                                <Calendrier />
                                {!formulaireOuvert && (
                                    <p className="mt-5 text-center">
                                        <button
                                            type="button"
                                            onClick={() => setFormulaireOuvert(true)}
                                            className="underline text-[#1B263B] hover:text-[#8A6A2F] font-semibold min-h-[44px]"
                                        >
                                            {LIBELLES.pasDeCreneau}
                                        </button>
                                    </p>
                                )}
                                {formulaireOuvert && (
                                    <div className="mt-6">
                                        <Formulaire />
                                    </div>
                                )}
                            </>
                        ) : (
                            <Formulaire />
                        )}

                        <div className="mt-6 rounded-[2rem] bg-[#1B263B] text-white shadow-sm p-6 text-center">
                            <p className="mb-4 text-white/90">Vous savez déjà que vous voulez commencer en janvier ? Réservez directement votre place.</p>
                            <CtaReserver variante="or" surFonce />
                        </div>
                        <div className="mt-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm p-6 text-center">
                            <p className="text-gray-700 mb-4">{LIBELLES.maisonEnAttendant}</p>
                            <CtaMaison variante="secondaire" />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Appel;
