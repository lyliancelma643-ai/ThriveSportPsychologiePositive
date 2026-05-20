import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, XCircle, Shield } from 'lucide-react';

const DOES = ['does_1', 'does_2', 'does_3', 'does_4', 'does_5'];
const DOESNT = ['doesnt_1', 'doesnt_2', 'doesnt_3', 'doesnt_4'];

const EthicsSection = () => {
    const { t } = useTranslation();
    return (
        <section id="ethique" className="scroll-mt-32 py-16">
            <div className="text-center mb-10">
                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">{t('method.ethics.tag')}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mt-3 mb-4">
                    {t('method.ethics.title')}
                </h2>
                <div className="h-1 w-14 bg-[#C5A059] mx-auto rounded-full mb-4" />
                <p className="text-gray-600 max-w-2xl mx-auto">{t('method.ethics.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Ce que THRIVE fait */}
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-[1.5rem] p-7">
                    <h3 className="font-bold text-emerald-800 text-base mb-4 flex items-center gap-2">
                        <CheckCircle2 size={18} /> {t('method.ethics.does_title')}
                    </h3>
                    <div className="space-y-3">
                        {DOES.map((k) => (
                            <div key={k} className="flex items-start gap-2.5 text-sm text-emerald-900">
                                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                                <span>{t(`method.ethics.${k}`)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ce que THRIVE ne fait pas */}
                <div className="bg-red-50/40 border border-red-100 rounded-[1.5rem] p-7">
                    <h3 className="font-bold text-red-800 text-base mb-4 flex items-center gap-2">
                        <XCircle size={18} /> {t('method.ethics.doesnt_title')}
                    </h3>
                    <div className="space-y-3">
                        {DOESNT.map((k) => (
                            <div key={k} className="flex items-start gap-2.5 text-sm text-red-900">
                                <XCircle size={14} className="mt-0.5 shrink-0 text-red-400" />
                                <span>{t(`method.ethics.${k}`)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Badges de réassurance */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {['supervision', 'referral', 'evidence', 'confidentiality'].map((badge) => (
                    <div
                        key={badge}
                        className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm"
                    >
                        <Shield size={20} className="text-[#C5A059]" />
                        <p className="text-xs font-bold text-[#1B263B] leading-tight">{t(`method.ethics.badge_${badge}`)}</p>
                    </div>
                ))}
            </div>

            {/* Note de bas de section */}
            <div className="bg-[#1B263B]/4 border border-[#1B263B]/10 rounded-2xl p-5 text-center text-sm text-gray-600 max-w-3xl mx-auto">
                {t('method.ethics.footer_note')}
            </div>
        </section>
    );
};

export default EthicsSection;
