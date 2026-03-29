import React from 'react';
import { ShieldCheck, GraduationCap, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ParentCommitment = () => {
    const { t } = useTranslation();
    return (
        <section className="py-16 bg-[#F8F9FA] border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-[#1B263B] mb-4">{t('home.parent.title')}</h2>
                    <p className="text-gray-600">{t('home.parent.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="font-bold text-[#1B263B] mb-2">{t('home.parent.card1_t')}</h3>
                        <p className="text-sm text-gray-500">{t('home.parent.card1_d')}</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                            <HeartHandshake size={24} />
                        </div>
                        <h3 className="font-bold text-[#1B263B] mb-2">{t('home.parent.card2_t')}</h3>
                        <p className="text-sm text-gray-500">{t('home.parent.card2_d')}</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="font-bold text-[#1B263B] mb-2">{t('home.parent.card3_t')}</h3>
                        <p className="text-sm text-gray-500">{t('home.parent.card3_d')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParentCommitment;
