import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, BookOpen, ShieldCheck, Users, GraduationCap, Activity, Quote } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import SectionHeader from '../components/ui/SectionHeader';
import ContactSection from '../components/ui/ContactSection';

const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="py-20 bg-gray-50/50">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.about.title')}</title>
                <meta name="description" content={t('seo.about.desc')} />
                <link rel="canonical" href="https://thrivesportpositive.com/a-propos" />
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 text-center mb-16">
                <SectionHeader
                    title={t('about.header_title')}
                    subtitle={t('about.header_subtitle')}
                />
                <p className="text-xl text-gray-600 leading-relaxed">
                    {t('about.intro_p')}
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-[#1B263B]/10 rounded-full flex items-center justify-center text-[#1B263B] mb-6">
                        <Users size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-4">{t('about.col1_title')}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        <Trans i18nKey="about.col1_desc">
                            {t('about.col1_desc_1')}<strong>{t('about.col1_desc_b1')}</strong>{t('about.col1_desc_2')}<strong>{t('about.col1_desc_b2')}</strong>{t('about.col1_desc_3')}
                        </Trans>
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#8F9779] to-[#C5A059]"></div>
                    <div className="w-16 h-16 bg-[#8F9779]/10 rounded-full flex items-center justify-center text-[#8F9779] mb-6">
                        <BookOpen size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-4">{t('about.col2_title')}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        <Trans i18nKey="about.col2_desc">
                            {t('about.col2_desc_1')}<strong>{t('about.col2_desc_b1')}</strong>{t('about.col2_desc_2')}
                        </Trans>
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059] mb-6">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-4">{t('about.col3_title')}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        <Trans i18nKey="about.col3_desc">
                            {t('about.col3_desc_1')}<strong>{t('about.col3_desc_b1')}</strong>{t('about.col3_desc_2')}
                        </Trans>
                    </p>
                </div>
            </div>

            {/* History & Philosophy Section */}
            <section className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Quote size={200} />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1B263B] mb-10 text-center">{t('about.hist_title')}</h2>

                        <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                            <p>
                                <span className="font-serif text-[#C5A059] text-2xl mr-1 font-bold">{t('about.hist_intro_b1')}</span>{t('about.hist_intro_2')}<strong>{t('about.hist_intro_b2')}</strong>{t('about.hist_intro_3')}<strong>{t('about.hist_intro_b3')}</strong>{t('about.hist_intro_4')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
                                <div>
                                    <h3 className="text-[#1B263B] font-bold mb-4 flex items-center text-lg"><GraduationCap className="mr-3 text-[#8F9779]" /> {t('about.hist_col1_title')}</h3>
                                    <p className="text-sm leading-7">
                                        <Trans i18nKey="about.hist_col1_desc">
                                            {t('about.hist_col1_desc_1')}<strong>{t('about.hist_col1_desc_b')}</strong>{t('about.hist_col1_desc_2')}
                                        </Trans>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#1B263B] font-bold mb-4 flex items-center text-lg"><Activity className="mr-3 text-[#8F9779]" /> {t('about.hist_col2_title')}</h3>
                                    <p className="text-sm leading-7">
                                        <Trans i18nKey="about.hist_col2_desc">
                                            {t('about.hist_col2_desc_1')}<strong>{t('about.hist_col2_desc_b')}</strong>{t('about.hist_col2_desc_2')}
                                        </Trans>
                                    </p>
                                </div>
                            </div>

                            <div className="text-center relative py-8 mt-4 border-t border-gray-100">
                                <p className="font-serif text-[#1B263B] text-2xl italic leading-relaxed">
                                    {t('about.quote')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection />
        </div>
    );
};

export default About;
