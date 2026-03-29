import React from 'react';
import { MapPin, User, Shirt } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Logistics = () => {
    const { t } = useTranslation();
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-[#1B263B] mb-4">{t('home.logistics.title')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm">
                    <div className="p-6 bg-gray-50 rounded-2xl">
                        <MapPin size={32} className="mx-auto text-[#1B263B] mb-4" />
                        <h3 className="font-bold text-[#1B263B] uppercase tracking-widest mb-2">{t('home.logistics.item1_t')}</h3>
                        <p className="text-gray-600">{t('home.logistics.item1_d1')}</p>
                        <p className="text-gray-500 text-xs mt-1">{t('home.logistics.item1_d2')}</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl">
                        <User size={32} className="mx-auto text-[#1B263B] mb-4" />
                        <h3 className="font-bold text-[#1B263B] uppercase tracking-widest mb-2">{t('home.logistics.item2_t')}</h3>
                        <p className="text-gray-600">{t('home.logistics.item2_d1')}</p>
                        <p className="text-gray-500 text-xs mt-1">{t('home.logistics.item2_d2')}</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl">
                        <Shirt size={32} className="mx-auto text-[#1B263B] mb-4" />
                        <h3 className="font-bold text-[#1B263B] uppercase tracking-widest mb-2">{t('home.logistics.item3_t')}</h3>
                        <p className="text-gray-600">{t('home.logistics.item3_d1')}</p>
                        <p className="text-gray-500 text-xs mt-1">{t('home.logistics.item3_d2')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Logistics;
