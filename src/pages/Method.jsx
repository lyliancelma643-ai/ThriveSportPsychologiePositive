import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PermaGrid from '../components/method/PermaGrid';
import ScientificProof from '../components/method/ScientificProof';

import ScorecardLevels from '../components/method/ScorecardLevels';
import EliteDashboard from '../components/method/EliteDashboard';
import MethodSidebar from '../components/method/MethodSidebar';
import ContactSection from '../components/ui/ContactSection';

const Method = ({ setBookingStep }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className="py-20 bg-[#FAFAFA]">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.method.title')}</title>
                <meta name="description" content={t('seo.method.desc')} />
                <link rel="canonical" href="https://thrivesportpositive.com/methode" />
            </Helmet>
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

                    {/* Left Column: Sidebar (Sticky) */}
                    <MethodSidebar setBookingStep={setBookingStep} />

                    {/* Right Column: Content */}
                    <main className="space-y-24">

                        {/* Section 1: Intro */}
                        <section id="intro" className="text-center pt-8">
                            <span className="text-[#8F9779] font-bold uppercase tracking-widest text-sm">{t('method.intro_tag')}</span>
                            <h1 className="text-5xl md:text-6xl font-serif text-[#1B263B] mt-4 mb-6 leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: t('method.intro_title') }}></span>
                                <span className="text-4xl md:text-5xl text-gray-400 italic font-serif">{t('method.intro_title_italic')}</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                                {t('method.intro_desc')}
                            </p>
                        </section>

                        {/* Section 2: PERMA */}
                        <section id="perma" className="scroll-mt-32">
                            <PermaGrid />
                        </section>

                        {/* Section 3: Scorecard */}
                        <section id="scorecard" className="scroll-mt-32">
                            <ScorecardLevels />
                        </section>

                        {/* Section 4: Science */}
                        <section id="science" className="scroll-mt-32">
                            <ScientificProof />
                        </section>

                        {/* Section 5: Dashboard */}
                        <section id="dashboard" className="scroll-mt-32 -mx-4 md:mx-0 rounded-[3rem] overflow-hidden">
                            <EliteDashboard />
                        </section>

                        {/* Section 6: Tools */}


                    </main>
                </div>
                <ContactSection />
            </div>
        </div>
    );
};

export default Method;
