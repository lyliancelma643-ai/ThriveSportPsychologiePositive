import React from 'react';
import { Activity, Brain, Shield, BarChart3, Heart, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../ui/SectionHeader';

const ScorecardLevels = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={t('method.scorecard.title')}
                    subtitle={t('method.scorecard.subtitle')}
                />

                {/* Validation Note */}
                <div className="flex justify-center mb-12">
                    <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center gap-3 max-w-2xl text-center md:text-left">
                        <div className="bg-blue-100 p-2 rounded-full shrink-0">
                            <Shield size={20} className="text-blue-600" />
                        </div>
                        <p className="text-sm text-blue-800">
                            <span className="font-bold block md:inline">{t('method.scorecard.val_bold')}</span>
                            {t('method.scorecard.val_text1')}<span className="font-semibold">{t('method.scorecard.val_bold2')}</span>
                            {t('method.scorecard.val_text2')}
                        </p>
                    </div>
                </div>

                <div className="space-y-12">
                    {/* Strate I */}
                    <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            <div className="bg-[#1B263B] text-white p-6 rounded-2xl shrink-0">
                                <Activity size={32} />
                                <div className="mt-2 font-serif font-bold text-2xl">01</div>
                                <div className="text-xs uppercase tracking-widest text-[#C5A059] mt-1">{t('method.scorecard.s1_tag')}</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-4">{t('method.scorecard.s1_title')}<span className="text-lg font-sans font-normal text-gray-500 ml-2">{t('method.scorecard.s1_title_sub')}</span></h3>
                                <p className="text-gray-600 mb-8 max-w-3xl">
                                    {t('method.scorecard.s1_desc')}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-[#1B263B] mb-2 flex items-center"><Heart size={16} className="text-[#C5A059] mr-2" />{t('method.scorecard.s1_b1_t')}</h4>
                                        <p className="text-sm text-gray-500">{t('method.scorecard.s1_b1_d')}</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-[#1B263B] mb-2 flex items-center"><Brain size={16} className="text-[#C5A059] mr-2" />{t('method.scorecard.s1_b2_t')}</h4>
                                        <p className="text-sm text-gray-500">{t('method.scorecard.s1_b2_d')}</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-[#1B263B] mb-2 flex items-center"><Zap size={16} className="text-[#C5A059] mr-2" />{t('method.scorecard.s1_b3_t')}</h4>
                                        <p className="text-sm text-gray-500">{t('method.scorecard.s1_b3_d')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Strate II */}
                    <div className="bg-[#1B263B] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Shield size={400} />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
                            <div className="bg-[#C5A059] text-white p-6 rounded-2xl shrink-0">
                                <Shield size={32} />
                                <div className="mt-2 font-serif font-bold text-2xl">02</div>
                                <div className="text-xs uppercase tracking-widest text-[#1B263B] mt-1 font-bold">{t('method.scorecard.s2_tag')}</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-4">{t('method.scorecard.s2_title')}<span className="text-lg font-sans font-normal text-white/60 ml-2">{t('method.scorecard.s2_title_sub')}</span></h3>
                                <p className="text-white/80 mb-8 max-w-3xl">
                                    {t('method.scorecard.s2_desc')}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <h4 className="font-bold text-[#C5A059] mb-2">{t('method.scorecard.s2_b1_t')}</h4>
                                        <p className="text-sm text-white/70">{t('method.scorecard.s2_b1_d')}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <h4 className="font-bold text-[#C5A059] mb-2">{t('method.scorecard.s2_b2_t')}</h4>
                                        <p className="text-sm text-white/70">{t('method.scorecard.s2_b2_d')}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <h4 className="font-bold text-[#C5A059] mb-2">{t('method.scorecard.s2_b3_t')}</h4>
                                        <p className="text-sm text-white/70">{t('method.scorecard.s2_b3_d')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Strate III */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border-2 border-[#1B263B] shadow-xl">
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            <div className="bg-gray-100 text-[#1B263B] p-6 rounded-2xl shrink-0">
                                <BarChart3 size={32} />
                                <div className="mt-2 font-serif font-bold text-2xl">03</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">{t('method.scorecard.s3_tag')}</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-4">{t('method.scorecard.s3_title')}<span className="text-lg font-sans font-normal text-gray-500 ml-2">{t('method.scorecard.s3_title_sub')}</span></h3>
                                <p className="text-gray-600 mb-8 max-w-3xl">
                                    {t('method.scorecard.s3_desc')}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <h4 className="font-bold text-[#1B263B] mb-2">{t('method.scorecard.s3_b1_t')}</h4>
                                        <div className="h-1 w-12 bg-[#8F9779] mb-3"></div>
                                        <p className="text-sm text-gray-600">{t('method.scorecard.s3_b1_d')}</p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <h4 className="font-bold text-[#1B263B] mb-2">{t('method.scorecard.s3_b2_t')}</h4>
                                        <div className="h-1 w-12 bg-[#8F9779] mb-3"></div>
                                        <p className="text-sm text-gray-600">{t('method.scorecard.s3_b2_d')}</p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <h4 className="font-bold text-[#1B263B] mb-2">{t('method.scorecard.s3_b3_t')}</h4>
                                        <div className="h-1 w-12 bg-[#8F9779] mb-3"></div>
                                        <p className="text-sm text-gray-600">{t('method.scorecard.s3_b3_d')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScorecardLevels;
