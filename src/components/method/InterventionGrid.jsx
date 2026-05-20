import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Target, Heart, Star, HelpCircle, Wind, Eye } from 'lucide-react';

const INTERVENTIONS = [
    { key: 'goals', icon: Target, color: '#8F9779', sessions: 'S1–S2' },
    { key: 'emotion', icon: Heart, color: '#C5A059', sessions: 'S3–S4' },
    { key: 'confidence', icon: Star, color: '#1B263B', sessions: 'S5–S6' },
    { key: 'help', icon: HelpCircle, color: '#8F9779', sessions: 'S7' },
    { key: 'relax', icon: Wind, color: '#687153', sessions: 'S8–S9' },
    { key: 'focus', icon: Eye, color: '#1B263B', sessions: 'S10–S12' },
];

const InterventionCard = ({ item, isOpen, onToggle, t }) => {
    const Icon = item.icon;
    return (
        <div className="bg-white border border-gray-100 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 p-5 text-left focus-visible:outline-2 focus-visible:outline-[#C5A059]"
            >
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: item.color + '18' }}
                >
                    <Icon size={20} style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-[#1B263B] text-base">{t(`method.interventions.${item.key}_name`)}</h3>
                        <span
                            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                            style={{ background: item.color + '18', color: item.color }}
                        >
                            {item.sessions}
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-0.5">{t(`method.interventions.${item.key}_tagline`)}</p>
                </div>
                <span className={`shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden>
                    <ChevronDown size={15} className="text-[#1B263B]" />
                </span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Pendant le sport</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{t(`method.interventions.${item.key}_sport`)}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Hors du sport</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{t(`method.interventions.${item.key}_transfer`)}</p>
                    </div>
                    <div style={{ background: item.color + '10' }} className="rounded-xl p-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>Outil remis</p>
                        <p className="text-sm font-medium text-gray-800">{t(`method.interventions.${item.key}_tool`)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InterventionGrid = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(null);

    return (
        <section id="interventions" className="scroll-mt-32 py-16">
            <div className="text-center mb-10">
                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">{t('method.interventions.tag')}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mt-3 mb-4">
                    {t('method.interventions.title')}
                </h2>
                <div className="h-1 w-14 bg-[#C5A059] mx-auto rounded-full mb-4" />
                <p className="text-gray-600 max-w-2xl mx-auto">{t('method.interventions.subtitle')}</p>
            </div>

            <div className="space-y-3">
                {INTERVENTIONS.map((item) => (
                    <InterventionCard
                        key={item.key}
                        item={item}
                        isOpen={open === item.key}
                        onToggle={() => setOpen(open === item.key ? null : item.key)}
                        t={t}
                    />
                ))}
            </div>
        </section>
    );
};

export default InterventionGrid;
