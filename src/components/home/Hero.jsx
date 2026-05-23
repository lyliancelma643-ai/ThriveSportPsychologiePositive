import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, TrendingUp, Lightbulb, BookOpen, GraduationCap, SmilePlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroImage from '../../assets/pexels-gustavo-fring-6720436.jpg';
import { getCalApi } from "@calcom/embed-react";
import { Waves } from '../ui/Waves';

const Hero = ({ setBookingStep, openDiagnostic }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

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

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Background Waves */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Waves strokeColor="#C5A05930" />
            </div>

            {/* Background Blob/Gradient for depth */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f8f9fa]/80 rounded-l-[10rem] z-0 transform translate-x-1/3 backdrop-blur-sm"></div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* LEFTSIDE: Text Content */}
                    <div className="lg:col-span-5 max-w-2xl relative z-20 lg:-mt-12">

                        <div className="group relative overflow-hidden inline-block mb-6 pr-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-10"></div>
                            <h1 className="text-5xl md:text-7xl font-serif text-[#1B263B] leading-tight relative z-0">
                                <span className="font-bold italic">{t('home.hero.heading_1')}</span>
                                <span className="text-[#8F9779] text-4xl md:text-6xl block mt-2">{t('home.hero.heading_2')}</span>
                            </h1>
                        </div>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {t('home.hero.subtitle_1')}
                            <span className="font-bold text-[#1B263B]">{t('home.hero.subtitle_bold_1')}</span>
                            {t('home.hero.subtitle_2')}
                            <span className="font-bold text-[#1B263B]">{t('home.hero.subtitle_bold_2')}</span>
                            {t('home.hero.subtitle_3')}
                            <span className="relative inline-block px-1">
                                {t('home.hero.subtitle_highlight')}
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#C5A059]/30 -z-10 -rotate-1"></span>
                            </span>
                            {t('home.hero.subtitle_4')}
                            <span className="font-bold text-[#1B263B]">{t('home.hero.subtitle_bold_3')}</span>
                            {t('home.hero.subtitle_5')}
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                data-cal-namespace="30min"
                                data-cal-link="thrive-sport-positive/30min"
                                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                className="group relative overflow-hidden bg-[#1B263B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#253550] transition-all flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-10"></div>
                                <span className="relative z-20 flex items-center">{t('home.hero.cta')} <ChevronRight className="ml-2" size={20} /></span>
                            </button>
                            <button
                                onClick={openDiagnostic}
                                className="bg-transparent text-[#1B263B] border-2 border-[#1B263B] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#1B263B] hover:text-white transition-all flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1"
                            >
                                {t('home.hero.diagnostic_btn', 'Diagnostic Gratuit')}
                            </button>
                        </div>


                    </div>

                    {/* RIGHTSIDE: Image */}
                    <div className="relative lg:col-span-7 lg:ml-6 lg:-mt-6 z-10">
                        <div className="absolute -inset-8 bg-gradient-to-br from-[#1B263B]/10 to-[#C5A059]/20 rounded-[2rem] blur-3xl opacity-70"></div>
                        <img
                            src={heroImage}
                            alt="Thrive Sport Positive - Athlètes en action"
                            width="2048"
                            height="1073"
                            fetchPriority="high"
                            className="relative w-full h-[450px] sm:h-[500px] lg:h-[650px] object-cover object-top rounded-[2rem] shadow-2xl border-4 border-white transition-all duration-700"
                        />


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
