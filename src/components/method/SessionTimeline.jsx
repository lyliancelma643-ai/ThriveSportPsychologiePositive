import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

const PHASES = [
    { key: 'anchor',   sessions: 'S1–S2',   color: '#8F9779',  bg: '#8F977918', num: '01' },
    { key: 'develop',  sessions: 'S3–S10',  color: '#C5A059',  bg: '#C5A05918', num: '02' },
    { key: 'integrate',sessions: 'S11–S13', color: '#1B263B',  bg: '#1B263B12', num: '03' },
];


const SessionTimeline = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="13-seances" ref={sectionRef} className="scroll-mt-32 py-16">
            <div className={`text-center mb-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">{t('method.timeline.tag')}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mt-3 mb-4">
                    {t('method.timeline.title')}
                </h2>
                <div className="h-1 w-14 bg-[#C5A059] mx-auto rounded-full mb-4" />
                <p className="text-gray-600 max-w-2xl mx-auto">{t('method.timeline.subtitle')}</p>
            </div>

            {/* 3 phases */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {PHASES.map((phase, index) => (
                    <div
                        key={phase.key}
                        className={`rounded-[1.5rem] p-7 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        style={{ transitionDelay: `${800 + index * 150}ms` }}
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

        </section>
    );
};

export default SessionTimeline;
