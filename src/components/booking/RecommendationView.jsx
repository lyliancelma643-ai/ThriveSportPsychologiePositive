import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PRICING_DATA } from '../../data/pricing';

const RecommendationView = ({ bookingData, onSelectProgram }) => {
    const { t, i18n } = useTranslation();

    // Logic for recommendation
    const getRecommendation = () => {
        const score = bookingData.wellbeing;
        if (score <= 4) return {
            key: "performance",
            reason: t('booking.r_reason_perf')
        };
        if (score <= 7) return {
            key: "advanced",
            reason: t('booking.r_reason_adv')
        };
        return {
            key: "essential",
            reason: t('booking.r_reason_ess')
        };
    };

    const recommendation = getRecommendation();
    const recommendedKey = recommendation.key;
    const recommendedProgram = PRICING_DATA.find(p => p.id === recommendedKey);

    return (
        <div className="animate-in slide-in-from-right duration-500">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-[#1B263B]">{t('booking.r_title', { name: bookingData.name })}</h2>
                <p className="text-gray-500 italic mt-2">{t('booking.r_subtitle')}</p>
            </div>

            <div className="max-w-md mx-auto mb-16">
                <div className="group p-8 rounded-[2rem] bg-[#1B263B] text-white shadow-2xl relative overflow-hidden ring-4 ring-[#8F9779]/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#8F9779] rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8F9779] text-white text-xs font-bold mb-4">
                            <Sparkles size={12} className="mr-1" /> {t('booking.r_tag')}
                        </div>

                        {/* Justification Block */}
                        <div className="mb-6 p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                            <p className="text-xs leading-relaxed text-gray-200">
                                <span className="font-bold text-[#8F9779] block mb-1 uppercase tracking-widest text-[10px]">{t('booking.r_why')}</span>
                                {recommendation.reason}
                            </p>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                            <div className="bg-white/10 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border border-white/20">
                                📦 {recommendedProgram.sessions} {t('booking.r_sessions')}
                            </div>
                        </div>

                        <div className="relative overflow-hidden inline-block mb-2 px-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-10"></div>
                            <h3 className="text-2xl font-serif font-bold relative z-0">{t(`pricing.${recommendedKey}.label`)}</h3>
                        </div>
                        <p className="text-gray-300 italic text-sm mb-6">{t(`pricing.${recommendedKey}.desc`)}</p>

                        <div className="space-y-3 mb-8">
                            {recommendedProgram.featureKeys.map((k) => (
                                <div key={k} className="flex items-start text-sm text-gray-200">
                                    <CheckCircle2 className="text-[#8F9779] mr-2 shrink-0 mt-0.5" size={16} />
                                    <span>{t(`pricing.${recommendedKey}.${k}`)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold">{i18n.language === 'en' ? `$${(recommendedProgram.price / recommendedProgram.sessions).toFixed(2)}` : `${(recommendedProgram.price / recommendedProgram.sessions).toFixed(2)} $`}</span>
                                <span className="text-lg text-gray-300 ml-2">{t('booking.r_per_session')}</span>
                            </div>
                            <div className="text-sm text-gray-400 font-bold mt-1">
                                {t('booking.r_total')} {i18n.language === 'en' ? `$${recommendedProgram.price}` : `${recommendedProgram.price} $`} {recommendedProgram.installments > 1 && t('booking.r_or', { count: recommendedProgram.installments, price: recommendedProgram.installmentPrice })}
                            </div>
                        </div>

                        <button
                            onClick={() => onSelectProgram(recommendedKey)}
                            className="w-full py-4 bg-white text-[#1B263B] font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center"
                        >
                            {t('booking.btn_choose')} <ArrowRight className="ml-2" size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-[#1B263B] mb-2">{t('booking.o_title')}</h3>
                <p className="text-sm text-gray-500">{t('booking.o_subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                {PRICING_DATA.filter(p => p.id !== 'diagnostic').map((program) => {
                    const key = program.id;
                    if (key === recommendedKey) return null;
                    return (
                        <div key={key} className="p-6 rounded-[2rem] border border-gray-200 bg-white">
                            <h4 className="font-bold text-[#1B263B] mb-1">{t(`pricing.${key}.label`)}</h4>
                            <p className="text-xs text-gray-500 mb-4 line-clamp-2">{t(`pricing.${key}.desc`)}</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold">{i18n.language === 'en' ? `$${program.price}` : `${program.price} $`}</span>
                                <button
                                    onClick={() => onSelectProgram(key)}
                                    className="text-xs font-bold underline hover:text-[#8F9779]"
                                >
                                    {t('booking.btn_choose_other')}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecommendationView;
