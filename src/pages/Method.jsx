import React, { useEffect } from 'react';
import SEO from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { getCalApi } from "@calcom/embed-react";

// Existing components
import MethodSidebar from '../components/method/MethodSidebar';
import ContactSection from '../components/ui/ContactSection';

// New components
import ScientificPillars from '../components/method/ScientificPillars';
import InterventionGrid from '../components/method/InterventionGrid';
import SessionTimeline from '../components/method/SessionTimeline';
import ActorsGrid from '../components/method/ActorsGrid';
import MeasureBattery from '../components/method/MeasureBattery';
import EthicsSection from '../components/method/EthicsSection';

const Method = ({ setBookingStep, handleSelectProgram }) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        if (typeof window !== 'undefined' && /HeadlessChrome|Puppeteer/i.test(window.navigator.userAgent)) return;

        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#1B263B" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    const goBooking = () => { navigate('/booking'); window.scrollTo(0, 0); };
    const goEval = () => { navigate('/evaluation'); window.scrollTo(0, 0); };

    return (
        <div className="bg-[#FAFAFA] relative">
            {/* Ambient Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-[#C5A059]/10 to-transparent rounded-full blur-[120px] opacity-60" />
                <div className="absolute top-[20%] -left-64 w-[800px] h-[800px] bg-[#1B263B]/5 rounded-full blur-[100px] opacity-70" />
                <div className="absolute top-[60%] -right-64 w-[800px] h-[800px] bg-[#8F9779]/10 rounded-full blur-[100px] opacity-50" />
            </div>

            <SEO 
                title={t('seo.method.title')}
                description={t('seo.method.desc')}
                url="https://thrivesportpositive.com/methode"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Sports Coaching & Positive Psychology",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Thrive Sport Positive"
                    },
                    "description": t('seo.method.desc')
                }}
            />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

                    {/* Sidebar sticky */}
                    <MethodSidebar setBookingStep={setBookingStep} />

                    {/* Main content */}
                    <main className="space-y-0 min-w-0">

                        {/* ── 1. HERO / INTRO ─────────────────────────── */}
                        <section id="intro" className="text-center pt-8 pb-16">
                            {/* Pill tag */}
                            <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-7">
                                <Sparkles size={12} fill="currentColor" />
                                {t('method.intro_tag')}
                            </div>

                            <h1 className="text-5xl md:text-6xl font-serif text-[#1B263B] mt-4 mb-6 leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: t('method.intro_title') }} />
                                <span className="text-4xl md:text-5xl text-gray-400 italic font-serif block mt-2">{t('method.intro_title_italic')}</span>
                            </h1>

                            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed mb-6">
                                {t('method.intro_desc')}
                            </p>

                            {/* CFR 3 lines */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
                                {['cfr1', 'cfr2', 'cfr3'].map((k) => (
                                    <div key={k} className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                        <CheckCircle2 size={14} className="text-[#C5A059] shrink-0" />
                                        {t(`method.${k}`)}
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    id="method-cta-primary"
                                    data-cal-namespace="30min"
                                    data-cal-link="thrive-sport-positive/30min"
                                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                    className="inline-flex items-center justify-center gap-2 bg-[#1B263B] text-white px-9 py-4 rounded-full font-bold text-base hover:bg-[#253550] transition-all hover:-translate-y-0.5 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                                >
                                    {t('home.hero.cta')} <ArrowRight size={17} />
                                </button>
                                <button
                                    id="method-cta-secondary"
                                    onClick={() => { navigate('/prix'); window.scrollTo(0,0); }}
                                    className="inline-flex items-center justify-center border-2 border-[#1B263B]/20 text-[#1B263B] px-9 py-4 rounded-full font-bold text-base hover:border-[#1B263B] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                                >
                                    {t('method.cta_secondary')}
                                </button>
                            </div>
                        </section>

                        {/* ── 2. PROBLÈME & INSIGHT ────────────────────── */}
                        <section id="probleme" className="scroll-mt-32 pb-16">
                            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-12">
                                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">{t('method.problem.tag')}</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mt-3 mb-5">
                                    {t('method.problem.title')}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                    <div>
                                        <p className="text-[15px] text-gray-600 leading-relaxed mb-6">{t('method.problem.body1')}</p>
                                        <div className="space-y-3 mb-8">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <div key={i} className="flex items-center gap-2.5">
                                                    <ArrowRight size={15} className="text-[#C5A059] shrink-0" />
                                                    <span className="text-[15px] text-gray-500">{t(`method.problem.t${i}_from`)}</span>
                                                    <strong className="text-[15px] text-[#1B263B] font-bold">{t(`method.problem.t${i}_to`)}</strong>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-full flex flex-col justify-center gap-4">
                                        {['gap1', 'gap2', 'gap3'].map((k, i) => (
                                            <div key={k} className={`px-5 py-4 rounded-2xl text-sm font-medium shadow-sm transition-transform hover:-translate-y-1 ${i === 2 ? 'bg-[#1B263B] text-white ring-2 ring-[#1B263B]/10 shadow-md' : 'bg-gray-50/80 text-gray-600 border border-gray-100'}`}>
                                                {t(`method.problem.${k}`)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ── 3. DÉFINITION ────────────────────────────── */}
                        <section id="definition" className="scroll-mt-32 pb-16">
                            <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">{t('method.sidebar.l3')}</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mt-3 mb-4">Une intervention psychoéducative par le sport.</h2>
                            <div className="h-1 w-14 bg-[#C5A059] rounded-full mb-8" />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                                {[{icon:'🏒',title:'Compétences Sportives',desc:"Le sport est le véhicule. L'aréna est le laboratoire. Chaque défi technique est une occasion de développer la confiance et la tolérance à l'erreur.",color:'#8F9779'},{icon:'🧠',title:'Ressources Psychologiques',desc:'Auto-efficacité, régulation émotionnelle, concentration, dureté mentale. Des compétences réelles, enseignées avec rigueur, mesurées avant et après.',color:'#1B263B'},{icon:'🌍',title:'Life Skills Transférables',desc:"Ce que votre enfant apprend au sport : gérer la pression, demander de l'aide, persévérer. Il le réutilise à l'école, en famille, dans la vie.",color:'#C5A059'}].map((d) => (
                                    <div key={d.title} className="bg-white border border-gray-100 rounded-[1.5rem] p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{background:d.color+'18'}}>{d.icon}</div>
                                        <h3 className="font-bold text-[#1B263B] text-base mb-2">{d.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-6 text-sm text-gray-600">
                                <p className="font-bold text-[#1B263B] mb-3">THRIVE n'est pas :</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {["Une psychothérapie — aucun diagnostic, aucun traitement clinique.","Un entraînement sportif ordinaire — chaque séance a un objectif précis.","Du développement personnel vague — tout est structuré et mesuré.","Réservé aux enfants en difficulté — les enfants épanouis progressent encore plus vite."].map((item) => (
                                        <div key={item} className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">✕</span><span>{item}</span></div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* ── 4. PILIERS SCIENTIFIQUES ─────────────────── */}
                        <ScientificPillars />

                        {/* ── 5. INTERVENTIONS ─────────────────────────── */}
                        <InterventionGrid />

                        {/* ── 6. 13 SÉANCES ────────────────────────────── */}
                        <SessionTimeline />

                        {/* ── 7. ACTEURS ───────────────────────────────── */}
                        <ActorsGrid />

                        <MeasureBattery />

                        {/* ── 9. ÉTHIQUE ───────────────────────────────── */}
                        <EthicsSection />

                        {/* ── CTA FINAL ────────────────────────────────── */}
                        <section id="programmes" className="scroll-mt-32 pt-16 pb-4">
                            <div className="relative bg-[#1B263B] rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden">
                                <div className="pointer-events-none absolute inset-0" aria-hidden>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-[#C5A059]/10 rounded-full blur-3xl" />
                                </div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-7">
                                        <Sparkles size={12} /> {t('method.final_cta.tag')}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-5">
                                        {t('method.final_cta.title')}
                                    </h2>
                                    <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed mb-10">
                                        {t('method.final_cta.desc')}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button
                                            id="method-final-cta-primary"
                                            data-cal-namespace="30min"
                                            data-cal-link="thrive-sport-positive/30min"
                                            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                            className="inline-flex items-center justify-center gap-2 bg-[#C5A059] text-white px-10 py-4 rounded-full font-bold hover:bg-[#B08D45] transition-all hover:-translate-y-0.5 shadow-lg"
                                        >
                                            {t('home.hero.cta')} <ArrowRight size={17} />
                                        </button>
                                        <button
                                            id="method-final-cta-secondary"
                                            onClick={() => navigate('/prix')}
                                            className="inline-flex items-center justify-center border-2 border-white/25 text-white px-10 py-4 rounded-full font-bold hover:border-white/60 transition-all"
                                        >
                                            {t('method.final_cta.btn_secondary')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </main>
                </div>

                <ContactSection handleSelectProgram={handleSelectProgram} />
            </div>
        </div>
    );
};

export default Method;
