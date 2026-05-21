import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import childShadowImage from '../../assets/pexels-tima-miroshnichenko-6015973.jpg';

const PainPoints = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-stretch gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full min-h-[400px] lg:min-h-[600px]">
                            <img
                                src={childShadowImage}
                                alt="Joueur dans l'ombre"
                                width="4928"
                                height="3264"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-8">
                                <p className="text-white text-2xl md:text-3xl font-serif italic text-center pb-40 md:pb-56">
                                    {t('home.pain_points.quote')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1B263B] mb-6">{t('home.pain_points.heading_1')}<span className="italic">{t('home.pain_points.heading_italic')}</span>{t('home.pain_points.heading_2')}</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {t('home.pain_points.desc_1')}<span className="font-bold text-[#1B263B]">{t('home.pain_points.desc_bold_1')}</span>
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {t('home.pain_points.desc_2')}<span className="font-bold text-[#1B263B]">{t('home.pain_points.desc_bold_2')}</span>
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                t('home.pain_points.list_1'),
                                t('home.pain_points.list_2'),
                                t('home.pain_points.list_3'),
                                t('home.pain_points.list_4')
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <CheckCircle2 className="text-[#8F9779] mr-3 mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#8F9779] font-bold text-lg">
                            {t('home.pain_points.conclusion')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">
                            <Link to="/methode" className="px-8 py-4 bg-[#1B263B] text-white rounded-full font-bold hover:bg-[#2A3B5C] transition-colors text-center shadow-md">
                                {t('home.pain_points.btn_method')}
                            </Link>
                            <button
                                data-cal-namespace="30min"
                                data-cal-link="thrive-sport-positive/30min"
                                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                className="px-8 py-4 bg-[#8F9779] text-white rounded-full font-bold hover:bg-[#A3AC8B] transition-colors text-center shadow-md cursor-pointer"
                            >
                                {t('home.pain_points.btn_booking')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default PainPoints;
