import React from 'react';
import { useTranslation } from 'react-i18next';

const INSTRUMENTS = [
    { key: 'lsss10',  packs: ['Essential', 'Avancé', 'Performance'], accent: '#8F9779' },
    { key: 'lsss30',  packs: ['Avancé', 'Performance'],              accent: '#C5A059' },
    { key: 'smtq',    packs: ['Avancé', 'Performance'],              accent: '#C5A059' },
    { key: 'rpe',     packs: ['Essential', 'Avancé', 'Performance'], accent: '#8F9779' },
    { key: 'who5',    packs: ['Avancé', 'Performance'],              accent: '#C5A059' },
    { key: 'gse',     packs: ['Avancé', 'Performance'],              accent: '#C5A059' },
];

const MeasureBattery = () => {
    const { t } = useTranslation();
    return (
        <section id="mesures" className="scroll-mt-32 py-16">
            <div className="text-center mb-10">
                <span className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">{t('method.measure.tag')}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mt-3 mb-4">
                    {t('method.measure.title')}
                </h2>
                <div className="h-1 w-14 bg-[#C5A059] mx-auto rounded-full mb-4" />
                <p className="text-gray-600 max-w-2xl mx-auto">{t('method.measure.subtitle')}</p>
            </div>

            {/* Avertissement */}
            <div className="max-w-3xl mx-auto mb-10">
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-amber-800">
                    <span className="text-lg shrink-0">⚠️</span>
                    <div>
                        <strong>{t('method.measure.warning_title')}</strong>
                        {' '}{t('method.measure.warning_body')}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-[1.5rem] border border-gray-100 shadow-sm">
                <table className="w-full text-sm bg-white">
                    <thead>
                        <tr className="bg-[#1B263B] text-white">
                            <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-widest rounded-tl-[1.5rem]">Instrument</th>
                            <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-widest">Ce que ça mesure</th>
                            <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-widest">Disponible</th>
                            <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-widest rounded-tr-[1.5rem]">Ce que ça dit au parent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {INSTRUMENTS.map((inst, i) => (
                            <tr
                                key={inst.key}
                                className={`border-t border-gray-100 hover:bg-gray-50/60 transition-colors ${i === INSTRUMENTS.length - 1 ? 'rounded-b-[1.5rem]' : ''}`}
                            >
                                <td className="px-5 py-4 font-bold text-[#1B263B]">
                                    {t(`method.measure.${inst.key}_name`)}
                                </td>
                                <td className="px-5 py-4 text-gray-600">
                                    {t(`method.measure.${inst.key}_measures`)}
                                </td>
                                <td className="px-5 py-4">
                                    <div className="flex flex-wrap gap-1">
                                        {inst.packs.map((p) => (
                                            <span
                                                key={p}
                                                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                                                style={{
                                                    background: inst.accent + '18',
                                                    color: inst.accent,
                                                }}
                                            >
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-5 py-4 text-gray-500 italic text-xs">
                                    {t(`method.measure.${inst.key}_parent`)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Note progression */}
            <div className="mt-6 text-center text-sm text-gray-500">
                <span className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-5 py-2">
                    📊 {t('method.measure.progression_note')}
                </span>
            </div>
        </section>
    );
};

export default MeasureBattery;
