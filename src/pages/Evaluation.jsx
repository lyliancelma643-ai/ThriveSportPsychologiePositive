import React, { useState, useEffect } from 'react';
import SEO from '../components/seo/SEO';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getCalApi } from "@calcom/embed-react";
import { CheckCircle, Lock, Star, Activity, ShieldCheck, Mail, Phone, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

import WaitlistWhatIs from '../components/waitlist/WaitlistWhatIs';
import WaitlistBenefits from '../components/waitlist/WaitlistBenefits';
import WaitlistScience from '../components/waitlist/WaitlistScience';
import WaitlistHowItWorks from '../components/waitlist/WaitlistHowItWorks';
import WaitlistPricing from '../components/waitlist/WaitlistPricing';
import WaitlistFAQ from '../components/waitlist/WaitlistFAQ';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-3">
            <button className="w-full flex justify-between items-center text-left focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-serif font-bold text-[#1F2A44] text-sm pr-4">{question}</span>
                {isOpen ? <ChevronUp className="text-[#C9A14A] flex-shrink-0 w-4 h-4" /> : <ChevronDown className="text-[#C9A14A] flex-shrink-0 w-4 h-4" />}
            </button>
            {isOpen && <div className="mt-2 text-[#5F6472] text-sm leading-relaxed">{answer}</div>}
        </div>
    );
};

const Evaluation = () => {
    const { t } = useTranslation();

    useEffect(() => {
        (async function () {
            try {
                const cal = await getCalApi({"namespace":"thrive-performance-13-seances-du-dimanche"});
                cal("ui", {
                    "styles":{"branding":{"brandColor":"#1F2A44"}},
                    "hideEventTypeDetails":false,
                    "layout":"month_view"
                });
            } catch (error) {
                console.error("Failed to initialize Cal.com:", error);
            }
        })();
    }, []);

    const faqs = [
        { q: t('waitlist.faq.q1_q'), a: t('waitlist.faq.q1_a') },
        { q: t('waitlist.faq.q2_q'), a: t('waitlist.faq.q2_a') },
        { q: t('waitlist.faq.q3_q'), a: t('waitlist.faq.q3_a') }
    ];

    return (
        <div className="min-h-screen font-sans">
            <SEO title={t('waitlist.hero.headline')} description={t('waitlist.hero.subheadline')} url="https://thrivesportpositive.com/evaluation" />
            
            {/* Split-Screen Hero Condensed */}
            <section className="bg-[#F7F5F2] pt-6 pb-12 lg:pt-12 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    
                    {/* Left Column: Value Proposition (Condensed) */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-4">
                        <span className="text-[#C9A14A] font-semibold tracking-wider uppercase text-xs mb-2 block leading-relaxed">
                            {t('waitlist.rarity.spots').split('20 places').map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i !== arr.length - 1 && (
                                        <span className="bg-[#C9A14A] text-white px-2 py-0.5 rounded shadow-sm font-bold mx-0.5 inline-block">
                                            20 places
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                            {' '}{t('waitlist.rarity.date')}
                        </span>
                        
                        <h1 className="font-serif text-[28px] sm:text-4xl lg:text-5xl text-[#1F2A44] font-bold tracking-tight mb-4 leading-tight">
                            {t('waitlist.hero.headline')}
                        </h1>
                        
                        <div className="text-sm sm:text-lg text-[#5F6472] mb-6 leading-relaxed space-y-3">
                            <p>{t('waitlist.hero.subheadline')}</p>
                            <p>{t('waitlist.what_is.desc_1')}</p>
                        </div>

                        <div className="flex flex-col gap-3 mb-6 lg:mb-8">
                            <div className="flex items-start lg:items-center gap-3 text-[13px] lg:text-sm text-[#1F2A44] font-medium bg-white p-3 lg:p-4 rounded-xl shadow-sm border border-gray-100">
                                <Star className="w-5 h-5 text-[#C9A14A] flex-shrink-0 mt-0.5 lg:mt-0" />
                                <span>{t('waitlist.benefits.b1_title')} : <span className="text-[#5F6472] font-normal">{t('waitlist.benefits.b1_desc')}</span></span>
                            </div>
                            <div className="flex items-start lg:items-center gap-3 text-[13px] lg:text-sm text-[#1F2A44] font-medium bg-white p-3 lg:p-4 rounded-xl shadow-sm border border-gray-100">
                                <ShieldCheck className="w-5 h-5 text-[#1F2A44] flex-shrink-0 mt-0.5 lg:mt-0" />
                                <span>{t('waitlist.benefits.b2_title')} : <span className="text-[#5F6472] font-normal">{t('waitlist.benefits.b2_desc')}</span></span>
                            </div>
                            <div className="flex items-start lg:items-center gap-3 text-[13px] lg:text-sm text-[#1F2A44] font-medium bg-white p-3 lg:p-4 rounded-xl shadow-sm border border-gray-100">
                                <Activity className="w-5 h-5 text-[#A7C4BC] flex-shrink-0 mt-0.5 lg:mt-0" />
                                <span>{t('waitlist.pricing.subtitle')} <span className="text-[#5F6472] font-normal">({t('waitlist.science.subtitle')})</span></span>
                            </div>
                        </div>

                        
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs text-[#5F6472] mt-2 lg:mt-auto">
                            <a href="mailto:info@thrivesportpositive.com" className="flex items-center hover:text-[#C9A14A] transition-colors"><Mail size={14} className="mr-1"/> {t('waitlist.contact.email')}</a>
                            <span className="flex items-center"><Phone size={14} className="mr-1"/> {t('waitlist.contact.phone')}</span>
                        </div>
                    </div>

                    {/* Right Column: Clickable Zone for Cal.com */}
                    <div className="w-full lg:w-1/2 mt-2 lg:mt-0 flex flex-col justify-center">
                        <div className="bg-white p-6 sm:p-10 rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl border border-gray-100 lg:sticky lg:top-32 text-center flex flex-col items-center justify-center min-h-[400px]">
                            
                            {/* Premium Banner for Dates */}
                            <div className="inline-flex items-center text-left sm:text-center gap-3 bg-gradient-to-r from-[#1F2A44] to-[#2A3754] text-white px-5 py-3 sm:px-6 sm:py-3 rounded-2xl sm:rounded-full mb-8 shadow-md border border-[#C9A14A]/20 max-w-[90%]">
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A14A] flex-shrink-0" />
                                <span className="font-serif text-xs sm:text-sm tracking-wide font-medium">
                                    {t('waitlist.hero.booking_dates')}
                                </span>
                            </div>
                            
                            <h2 className="font-serif text-2xl lg:text-3xl text-[#1F2A44] font-bold mb-4">
                                {t('waitlist.form.title')}
                            </h2>
                            
                            <p className="text-sm lg:text-base text-[#5F6472] mb-8 max-w-sm">
                                {t('waitlist.form.subtitle')}
                            </p>

                            <button 
                                onClick={() => {
                                    if(window.Cal) {
                                        window.Cal("modal", {
                                            calLink: "thrive-sport-positive/thrive-performance-13-seances-du-dimanche",
                                            config: { layout: "month_view", useSlotsViewOnSmallScreen: true }
                                        });
                                    }
                                }}
                                data-cal-namespace="thrive-performance-13-seances-du-dimanche"
                                data-cal-link="thrive-sport-positive/thrive-performance-13-seances-du-dimanche"
                                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":true}'
                                className="w-full max-w-sm bg-[#1F2A44] text-white py-4 px-6 rounded-xl font-bold text-base hover:bg-[#C9A14A] transition-colors shadow-lg flex justify-center items-center gap-3 cursor-pointer select-none active:scale-95 touch-manipulation"
                            >
                                Choisir un créneau <ArrowRight className="w-5 h-5" />
                            </button>
                            
                            <div className="flex items-center justify-center mt-5 text-xs text-[#5F6472]">
                                <Lock className="w-3 h-3 mr-1" />
                                {t('waitlist.form.trust')}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Detailed Sections below the fold */}
            <WaitlistWhatIs />
            
            {/* CTA Interstitial 1 */}
            <section className="bg-white py-8 lg:py-10 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
                    <h3 className="font-serif text-xl lg:text-2xl text-[#1F2A44] font-bold">Découvrez l'approche sportive</h3>
                    <Link to="/sport" className="w-full sm:w-auto justify-center bg-[#F7F5F2] text-[#1F2A44] px-6 py-3 rounded-xl font-medium hover:bg-[#C9A14A] hover:text-white transition-colors flex items-center">
                        En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </section>

            <WaitlistBenefits />
            <WaitlistScience />

            {/* CTA Interstitial 2 */}
            <section className="bg-[#1F2A44] py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
                    <h3 className="font-serif text-xl lg:text-2xl text-white font-bold">La Méthode expliquée en détail</h3>
                    <Link to="/methode" className="w-full sm:w-auto justify-center bg-[#C9A14A] text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-[#1F2A44] transition-colors flex items-center">
                        Lire la méthode <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </section>

            <WaitlistHowItWorks />
            <WaitlistPricing />
            <WaitlistFAQ />

        </div>
    );
};

export default Evaluation;
