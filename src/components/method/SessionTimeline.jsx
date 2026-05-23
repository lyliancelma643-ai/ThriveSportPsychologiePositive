import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

const PHASES = [
    { key: 'anchor',   sessions: 'S1–S2',   color: '#8F9779',  bg: '#8F977918', num: '01' },
    { key: 'develop',  sessions: 'S3–S10',  color: '#C5A059',  bg: '#C5A05918', num: '02' },
    { key: 'integrate',sessions: 'S11–S13', color: '#1B263B',  bg: '#1B263B12', num: '03' },
];

const SESSION_STEPS = ['welcome', 'review', 'learn', 'apply', 'close'];

const SessionTimeline = () => {
    const { t } = useTranslation();
    return (
        <section id="13-seances" className="scroll-mt-32 py-16">
            <div className="text-center mb-10">
                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">{t('method.timeline.tag')}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mt-3 mb-4">
                    {t('method.timeline.title')}
                </h2>
                <div className="h-1 w-14 bg-[#C5A059] mx-auto rounded-full mb-4" />
                <p className="text-gray-600 max-w-2xl mx-auto">{t('method.timeline.subtitle')}</p>
            </div>

            {/* 3 phases */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {PHASES.map((phase) => (
                    <div
                        key={phase.key}
                        className="rounded-[1.5rem] p-7 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold font-serif text-lg"
                                style={{ background: phase.bg, color: phase.color }}
                            >
                                {phase.num}
                            </div>
                            <div>
                                <p className="font-bold text-[#1B263B] text-base">{t(`method.timeline.${phase.key}_name`)}</p>
                                <p
                                    className="text-xs font-bold uppercase tracking-widest"
                                    style={{ color: phase.color }}
                                >
                                    {phase.sessions}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {t(`method.timeline.${phase.key}_goal`)}
                        </p>
                        <div className="space-y-2 mb-4">
                            <div className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: phase.color }} />
                                <span>{t(`method.timeline.${phase.key}_parent_obs`)}</span>
                            </div>
                        </div>
                        <div
                            className="rounded-xl p-3 text-xs font-medium"
                            style={{ background: phase.bg, color: phase.color }}
                        >
                            📌 {t(`method.timeline.${phase.key}_milestone`)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Structure invariante */}
            <div className="bg-[#1B263B] rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/6 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" aria-hidden />
                <div className="relative z-10">
                    <p className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-2">{t('method.timeline.structure_tag')}</p>
                    <h3 className="text-2xl font-serif font-bold text-white mb-6">{t('method.timeline.structure_title')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        {SESSION_STEPS.map((step, i) => (
                            <div key={step} className="flex flex-col items-center sm:items-start gap-2">
                                <div className="flex items-center gap-2 w-full">
                                    <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] font-bold text-sm shrink-0">
                                        {i + 1}
                                    </div>
                                    {i < SESSION_STEPS.length - 1 && (
                                        <div className="hidden sm:block flex-1 h-px bg-white/10" />
                                    )}
                                </div>
                                <p className="text-white font-bold text-sm">{t(`method.timeline.step_${step}_name`)}</p>
                                <p className="text-white/60 text-xs">{t(`method.timeline.step_${step}_time`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SessionTimeline;
