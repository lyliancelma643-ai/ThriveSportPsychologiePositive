import React from 'react';
import { XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import childShadowImage from '../../assets/pexels-tima-miroshnichenko-6015973.jpg';

const PainPoints = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src={childShadowImage}
                                alt="Joueur dans l'ombre"
                                width="4928"
                                height="3264"
                                className="w-full h-96 object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                                <p className="text-white text-xl font-serif italic text-center">
                                    {t('home.pain_points.quote')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1B263B] mb-6">{t('home.pain_points.heading_1')}<span className="italic">{t('home.pain_points.heading_italic')}</span>{t('home.pain_points.heading_2')}</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {t('home.pain_points.desc_1')}<span className="font-bold text-[#1B263B]">{t('home.pain_points.desc_bold_1')}</span>{t('home.pain_points.desc_2')}<span className="font-bold text-[#1B263B]">{t('home.pain_points.desc_bold_2')}</span>
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                t('home.pain_points.list_1'),
                                t('home.pain_points.list_2'),
                                t('home.pain_points.list_3'),
                                t('home.pain_points.list_4')
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <XCircle className="text-red-400 mr-3 mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#8F9779] font-bold text-lg">
                            {t('home.pain_points.conclusion')}
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default PainPoints;
