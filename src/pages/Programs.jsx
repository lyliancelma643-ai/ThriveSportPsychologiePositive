import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Check, Sparkles, CheckCircle2, Star, Video } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import SectionHeader from '../components/ui/SectionHeader';
import { PROGRAMS_DATA } from '../data/programs';
import ContactSection from '../components/ui/ContactSection';

const Programs = ({ handleSelectProgram }) => {
    const { t, i18n } = useTranslation();
    return (
        <section className="py-20 px-4 bg-gray-50/50">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.programs.title')}</title>
                <meta name="description" content={t('seo.programs.desc')} />
                <link rel="canonical" href="https://thrivesportpositive.com/programmes" />
            </Helmet>
            <SectionHeader
                title={t('programs.page_title')}
                subtitle={t('programs.page_subtitle')}
            />

            <div className="max-w-3xl mx-auto mt-6 mb-8 lg:mb-12">
                <div className="bg-[#1B263B]/5 border border-[#1B263B]/10 rounded-[2rem] py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left transition-transform hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-full bg-[#1B263B]/10 flex items-center justify-center shrink-0">
                        <Video className="text-[#1B263B]" size={24} />
                    </div>
                    <div>
                        <h4 className="text-[#1B263B] font-bold text-[17px] mb-1">
                            {t('programs.included_title')}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-[15px] leading-snug">
                            {t('programs.included_desc_1')}
                            <span className="font-semibold text-[#1B263B]">{t('programs.included_desc_b')}</span>
                            {t('programs.included_desc_2')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-4">
                {Object.entries(PROGRAMS_DATA).map(([key, program]) => {
                    const isPerformance = program.highlight;

                    return (
                        <div
                            key={key}
                            className={`
                                group relative flex flex-col p-8 rounded-[2rem] transition-all duration-300
                                ${isPerformance
                                    ? 'bg-white border-2 border-[#C5A059]/80 shadow-[0_8px_30px_rgb(197,160,89,0.25)] scale-[1.03] z-10 lg:-mt-2 lg:-mb-2 min-h-[620px]'
                                    : 'bg-white border border-gray-100 shadow-lg hover:-translate-y-2 min-h-[580px] opacity-90 hover:opacity-100'
                                }
                            `}
                        >
                            {isPerformance && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg flex items-center whitespace-nowrap">
                                    <Star size={16} fill="white" className="mr-2" /> {t('programs.badge_popular')}
                                </div>
                            )}

                            <div className="mb-6 text-center">
                                <div className="relative overflow-hidden inline-block mb-4 px-2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-10"></div>
                                    <h3 className={`font-serif font-bold text-[#1B263B] relative z-0 ${isPerformance ? 'text-2xl' : 'text-xl'}`}>
                                        {t(`programs.${key}.label`)}
                                    </h3>
                                </div>

                                <div className="flex items-center justify-center baseline mb-2">
                                    <span className={`font-bold text-[#1B263B] ${isPerformance ? 'text-5xl' : 'text-4xl'}`}>
                                        {i18n.language === 'en' ? `$${program.price}` : `${program.price} $`}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
                                    {program.installments > 1 ? t('programs.lbl_installments', { count: program.installments, price: program.installmentPrice }) : t('programs.lbl_single')}
                                </p>

                                <div className="h-px w-full bg-gray-100 mb-6"></div>

                                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                                    {t(`programs.${key}.desc`)}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 mb-8 flex-grow">
                                {program.features.map((_, idx) => (
                                    <div key={idx} className="flex items-start text-sm text-gray-700 leading-tight">
                                        <CheckCircle2 className={`${isPerformance ? 'text-[#C5A059]' : 'text-[#8F9779]'} mr-3 shrink-0 mt-0.5`} size={18} />
                                        <span className={isPerformance ? 'font-medium' : ''}>{t(`programs.${key}.f${idx}`)}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleSelectProgram(key)}
                                className={`
                                    w-full py-5 rounded-xl font-bold flex items-center justify-center transition-all shadow-lg text-lg
                                    ${isPerformance
                                        ? 'bg-[#C5A059] text-white hover:bg-[#B08D45] hover:shadow-[#C5A059]/40 hover:-translate-y-1'
                                        : 'bg-[#1B263B] text-white hover:bg-[#253550] hover:-translate-y-1'
                                    }
                                `}
                            >
                                {isPerformance ? t('programs.btn_secure') : t('programs.btn_book')}
                                <Calendar className="ml-2" size={20} />
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="mt-20">
                <ContactSection handleSelectProgram={handleSelectProgram} />
            </div>
        </section>
    );
};

export default Programs;
