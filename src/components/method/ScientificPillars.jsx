import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Niveau de preuve badge
const LevelBadge = ({ level }) => {
    const colors = {
        A: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        B: 'bg-blue-100 text-blue-800 border-blue-200',
        C: 'bg-amber-100 text-amber-800 border-amber-200',
    };
    return (
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${colors[level] || colors.B}`}>
            Niveau {level}
        </span>
    );
};

const PILLARS = [
    {
        key: 'sdt',
        level: 'A',
        icon: '⚡',
        color: '#8F9779',
        authors: 'Deci & Ryan (1985)',
    },
    {
        key: 'efficacy',
        level: 'A',
        icon: '🏔',
        color: '#1B263B',
        authors: 'Bandura (1977)',
    },
    {
        key: 'pyd',
        level: 'B',
        icon: '🌱',
        color: '#687153',
        authors: 'Lerner et al. (2005)',
    },
    {
        key: 'lifeskills',
        level: 'B',
        icon: '🔄',
        color: '#555E40',
        authors: 'Gould & Carson (2008)',
    },
    {
        key: 'perma',
        level: 'A',
        icon: '✨',
        color: '#C5A059',
        authors: 'Seligman (2011)',
    },
    {
        key: 'via',
        level: 'B',
        icon: '💎',
        color: '#8F9779',
        authors: 'Peterson & Seligman (2004)',
    },
    {
        key: 'agt',
        level: 'A',
        icon: '🎯',
        color: '#1B263B',
        authors: 'Nicholls (1984)',
    },
    {
        key: 'dmsp',
        level: 'B',
        icon: '📈',
        color: '#687153',
        authors: 'Côté & Fraser-Thomas (2007)',
    },
];

const ScientificPillars = () => {
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
        <section 
            id="piliers" 
            ref={sectionRef}
            className="scroll-mt-32 py-16"
        >
            {/* Header */}
            <div className={`text-center mb-4 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">{t('method.pillars.tag')}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mt-3 mb-4">
                    {t('method.pillars.title')}
                </h2>
                <div className="h-1 w-14 bg-[#C5A059] mx-auto rounded-full mb-4" />
                <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
                    {t('method.pillars.subtitle')}
                </p>
            </div>

            {/* Note épistémique */}
            <div className={`max-w-3xl mx-auto mb-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                <div className="flex items-start gap-3 bg-blue-50/60 border border-blue-100 rounded-2xl p-4 text-sm text-blue-800">
                    <span className="text-lg shrink-0">🔬</span>
                    <div>
                        <strong>{t('method.pillars.note_title')}</strong>
                        {' '}{t('method.pillars.note_body')}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {PILLARS.map((p, i) => (
                    <div
                        key={p.key}
                        className={`bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-700 ease-out flex flex-col gap-3 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        style={{ transitionDelay: `${300 + i * 150}ms` }}
                    >
                        <div className="flex items-center justify-between">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                                style={{ background: p.color + '18' }}
                            >
                                {p.icon}
                            </div>
                            <LevelBadge level={p.level} />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#1B263B] text-base leading-snug mb-0.5">
                                {t(`method.pillars.${p.key}_name`)}
                            </h3>
                            <p className="text-xs text-gray-400 mb-2">{p.authors}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {t(`method.pillars.${p.key}_benefit`)}
                            </p>
                        </div>
                        <div className="mt-auto pt-3 border-t border-gray-100">
                            <p className="text-[11px] text-gray-400 italic">
                                {t(`method.pillars.${p.key}_mechanism`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScientificPillars;
