import React from 'react';
import { Microscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ScientificProof = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-[#1B263B] rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <Microscope size={300} />
            </div>

            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">{t('method.science.title')}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="text-5xl md:text-6xl font-bold text-[#C5A059] mb-4 font-serif">+31%</div>
                        <h4 className="text-xl font-bold mb-2">{t('method.science.stat1_t')}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {t('method.science.stat1_d')}
                            <br /><span className="italic text-[10px] opacity-50">{t('method.science.stat1_s')}</span>
                        </p>
                    </div>
                    <div>
                        <div className="text-5xl md:text-6xl font-bold text-[#C5A059] mb-4 font-serif">x3</div>
                        <h4 className="text-xl font-bold mb-2">{t('method.science.stat2_t')}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {t('method.science.stat2_d')}
                            <br /><span className="italic text-[10px] opacity-50">{t('method.science.stat2_s')}</span>
                        </p>
                    </div>
                    <div>
                        <div className="text-5xl md:text-6xl font-bold text-[#C5A059] mb-4 font-serif">-23%</div>
                        <h4 className="text-xl font-bold mb-2">{t('method.science.stat3_t')}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {t('method.science.stat3_d')}
                            <br /><span className="italic text-[10px] opacity-50">{t('method.science.stat3_s')}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScientificProof;
