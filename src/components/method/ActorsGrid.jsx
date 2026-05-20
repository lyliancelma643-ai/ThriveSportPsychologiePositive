import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, XCircle } from 'lucide-react';

const ACTORS = [
    { key: 'mentor',  icon: '🎓', color: '#1B263B', bg: '#1B263B12' },
    { key: 'parent',  icon: '👨‍👩‍👧', color: '#8F9779',  bg: '#8F977912' },
    { key: 'athlete', icon: '⭐', color: '#C5A059',  bg: '#C5A05912' },
];

const ActorsGrid = () => {
    const { t } = useTranslation();
    return (
        <section id="acteurs" className="scroll-mt-32 py-16">
            <div className="text-center mb-10">
                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">{t('method.actors.tag')}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mt-3 mb-4">
                    {t('method.actors.title')}
                </h2>
                <div className="h-1 w-14 bg-[#C5A059] mx-auto rounded-full mb-4" />
                <p className="text-gray-600 max-w-2xl mx-auto">{t('method.actors.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {ACTORS.map((actor) => (
                    <div
                        key={actor.key}
                        className="bg-white border border-gray-100 rounded-[1.5rem] p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div
                                className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                style={{ background: actor.bg }}
                            >
                                {actor.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1B263B] text-lg">{t(`method.actors.${actor.key}_name`)}</h3>
                                <p className="text-xs text-gray-400">{t(`method.actors.${actor.key}_role`)}</p>
                            </div>
                        </div>

                        {/* Ce qu'il fait */}
                        <div className="mb-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Ce qu'il fait</p>
                            <div className="space-y-2">
                                {[1, 2, 3].map((n) => (
                                    <div key={n} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: actor.color }} />
                                        <span>{t(`method.actors.${actor.key}_does_${n}`)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ce qu'il ne fait pas */}
                        <div className="mb-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Ce qu'il ne fait pas</p>
                            <div className="space-y-2">
                                {[1, 2].map((n) => (
                                    <div key={n} className="flex items-start gap-2 text-sm text-gray-500">
                                        <XCircle size={14} className="mt-0.5 shrink-0 text-gray-300" />
                                        <span>{t(`method.actors.${actor.key}_not_${n}`)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ce qu'il ressent */}
                        <div className="mt-auto pt-4 border-t border-gray-100">
                            <p className="text-sm italic text-gray-500">
                                « {t(`method.actors.${actor.key}_feels`)} »
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ActorsGrid;
