import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, TrendingUp, Lightbulb, BookOpen, GraduationCap, SmilePlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroImage from '../../assets/pexels-gustavo-fring-6720436.jpg';

const Hero = ({ setBookingStep }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Background Blob/Gradient for depth */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f8f9fa] rounded-l-[10rem] z-0 transform translate-x-1/3"></div>

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
                            {t('home.hero.subtitle_1')}<span className="relative inline-block px-1">{t('home.hero.subtitle_highlight')}<span className="absolute bottom-1 left-0 w-full h-3 bg-[#C5A059]/30 -z-10 -rotate-1"></span></span>{t('home.hero.subtitle_2')}<span className="font-bold text-[#1B263B]">{t('home.hero.subtitle_bold_1')}</span>{t('home.hero.subtitle_3')}<span className="font-bold text-[#1B263B]">{t('home.hero.subtitle_bold_2')}</span>{t('home.hero.subtitle_4')}
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={() => { navigate('/evaluation'); }}
                                className="bg-[#1B263B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#253550] transition-all flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                {t('home.hero.cta')} <ChevronRight className="ml-2" size={20} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHTSIDE: Image */}
                    <div className="relative lg:col-span-7 lg:ml-6 lg:-mt-6 z-10">
                        <div className="absolute -inset-4 bg-[#C5A059]/20 rounded-[2rem] blur-xl"></div>
                        <img
                            src={heroImage}
                            alt="Thrive Sport Positive - Athlètes en action"
                            width="2048"
                            height="1073"
                            fetchPriority="high"
                            className="relative w-full h-[450px] sm:h-[500px] lg:h-[650px] object-cover object-top rounded-[2rem] shadow-2xl border-4 border-white transition-all duration-700"
                        />

                        {/* 
                            PREMIUM FLOATING BADGES 
                            Style: Glassmorphism + Soft Shadows + Serif Typography
                            Positioning: Adjusted to prevent overlapping
                        */}

                        {/* Badge 1 (Bottom Left) - Resultat Prouve */}
                        <div className="absolute -bottom-4 -left-16 z-30">
                            <div className="bg-white/90 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-white/40 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default group">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-2.5 rounded-[2rem] text-green-600 shadow-inner group-hover:scale-110 transition-transform flex items-center justify-center">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">{t('home.hero.badge1_title')}</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-lg">{t('home.hero.badge1_desc')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Badge 2 (Top Right) - Potentiel */}
                        <div className="absolute top-8 -right-16 lg:block hidden z-20">
                            <div className="bg-white/80 backdrop-blur-lg p-3 rounded-[2rem] shadow-xl shadow-amber-900/5 border border-white/50 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default">
                                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-2 rounded-xl text-amber-600 shadow-sm flex items-center justify-center">
                                    <Lightbulb size={20} />
                                </div>
                                <div>
                                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{t('home.hero.badge2_title')}</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">{t('home.hero.badge2_desc')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Badge 3 (Middle Right) - Rigueur */}
                        <div className="absolute top-1/2 -right-24 transform -translate-y-1/2 lg:block hidden z-20">
                            <div className="bg-white/80 backdrop-blur-lg p-3 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-white/50 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default delay-100">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-xl text-blue-500 shadow-sm flex items-center justify-center">
                                    <BookOpen size={20} />
                                </div>
                                <div>
                                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{t('home.hero.badge3_title')}</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">{t('home.hero.badge3_desc')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Badge 4 (Top Left) - Ecole */}
                        <div className="absolute top-12 -left-20 lg:block hidden z-20">
                            <div className="bg-white/80 backdrop-blur-lg p-3 rounded-[2rem] shadow-xl shadow-purple-900/5 border border-white/50 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default delay-75">
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-xl text-purple-500 shadow-sm flex items-center justify-center">
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{t('home.hero.badge4_title')}</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">{t('home.hero.badge4_desc')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Badge 5 (Bottom Right) - Bien-etre */}
                        <div className="absolute bottom-12 -right-12 lg:block hidden z-30">
                            <div className="bg-white/80 backdrop-blur-lg p-3 rounded-[2rem] shadow-xl shadow-teal-900/5 border border-white/50 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default delay-150">
                                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-2 rounded-xl text-teal-500 shadow-sm flex items-center justify-center">
                                    <SmilePlus size={20} />
                                </div>
                                <div>
                                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{t('home.hero.badge5_title')}</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">{t('home.hero.badge5_desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
