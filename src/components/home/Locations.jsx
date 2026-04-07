import React from 'react';
import { MapPin, Home, Building2, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../ui/SectionHeader';

const Locations = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20 bg-white border-t border-gray-100 pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Maps / Visual Side */}
                    <div className="relative">
                        <div className="bg-gray-50 rounded-[2rem] p-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden border-2 border-[#C5A059]/20 shadow-inner">
                            {/* Decorative Background Map Pattern */}
                            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1B263B 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            <div className="relative z-10 w-full space-y-6">
                                {/* Centre Saint-Denis Card */}
                                <div className="bg-white p-6 rounded-[2rem] shadow-xl flex items-start transform hover:-translate-y-1 transition-transform border border-gray-100">
                                    <div className="bg-[#1B263B]/10 p-4 rounded-full mr-4 text-[#1B263B] shrink-0"><Building2 size={28} /></div>
                                    <div>
                                        <div className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest mb-1">{t('home.locations.map1_badge')}</div>
                                        <h3 className="font-serif font-bold text-xl text-[#1B263B] mb-1">{t('home.locations.map1_title')}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{t('home.locations.map1_desc')}</p>
                                        <div className="text-xs text-gray-500 flex items-start font-medium">
                                            <MapPin size={16} className="mr-1 shrink-0 mt-0.5 text-[#8F9779]" /> 
                                            {t('home.locations.map1_addr')}
                                        </div>
                                    </div>
                                </div>

                                {/* Domicile Card */}
                                <div className="bg-white p-6 rounded-[2rem] shadow-lg flex items-start transform translate-x-4 hover:-translate-y-1 transition-transform border border-gray-100">
                                    <div className="bg-[#8F9779]/10 p-4 rounded-full mr-4 text-[#8F9779] shrink-0"><Home size={28} /></div>
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{t('home.locations.map2_badge')}</div>
                                        <h3 className="font-serif font-bold text-lg text-[#1B263B] mb-1">{t('home.locations.map2_title')}</h3>
                                        <p className="text-sm text-gray-600">{t('home.locations.map2_desc_1')}<br/><span className="text-[#C5A059] font-medium text-xs">{t('home.locations.map2_desc_2')}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div>
                        <SectionHeader
                            title={t('home.locations.header_title')}
                            subtitle={t('home.locations.header_subtitle')}
                            align="left"
                        />

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {t('home.locations.desc_1')}<strong>{t('home.locations.desc_1_b1')}</strong>{t('home.locations.desc_1_2')}<strong>{t('home.locations.desc_1_b2')}</strong>{t('home.locations.desc_1_3')}
                        </p>

                        <div className="bg-[#8F9779]/10 p-6 rounded-[2rem] border border-[#8F9779]/20 mb-8">
                            <h3 className="flex items-center text-[#1B263B] font-serif font-bold text-xl mb-3">
                                <Home className="mr-2 text-[#8F9779]" /> {t('home.locations.box_title')}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('home.locations.box_desc_1')}<strong>{t('home.locations.box_desc_b')}</strong>{t('home.locations.box_desc_2')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="flex items-center text-gray-600 font-medium">
                                <CheckCircle2 size={20} className="mr-2 text-[#C5A059]" /> {t('home.locations.check1')}
                            </div>
                            <div className="flex items-center text-gray-600 font-medium">
                                <CheckCircle2 size={20} className="mr-2 text-[#C5A059]" /> {t('home.locations.check2')}
                            </div>
                            <div className="flex items-center text-gray-600 font-medium">
                                <CheckCircle2 size={20} className="mr-2 text-[#C5A059]" /> {t('home.locations.check3')}
                            </div>
                            <div className="flex items-center text-gray-600 font-medium">
                                <CheckCircle2 size={20} className="mr-2 text-[#C5A059]" /> {t('home.locations.check4')}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Benefits Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Benefices Centre Saint-Denis */}
                    <div className="bg-[#1B263B] text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700"><Building2 size={160} /></div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 relative z-10 text-white">{t('home.locations.effect1_title')}</h3>
                        <p className="text-gray-300 mb-8 relative z-10 text-lg leading-relaxed">
                            {t('home.locations.effect1_desc_1')}<strong className="text-white">{t('home.locations.effect1_desc_b')}</strong>{t('home.locations.effect1_desc_2')}
                        </p>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start">
                                <div className="bg-[#C5A059]/20 p-2 rounded-xl mr-4 shrink-0 mt-1">
                                    <CheckCircle2 className="text-[#C5A059]" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">{t('home.locations.effect1_li1_t')}</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">{t('home.locations.effect1_li1_d')}</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-[#C5A059]/20 p-2 rounded-xl mr-4 shrink-0 mt-1">
                                    <CheckCircle2 className="text-[#C5A059]" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">{t('home.locations.effect1_li2_t')}</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">{t('home.locations.effect1_li2_d')}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Benefices Domicile */}
                    <div className="bg-[#8F9779] text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700"><Home size={160} /></div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 relative z-10 text-white">{t('home.locations.effect2_title')}</h3>
                        <p className="text-[#e2e6d9] mb-8 relative z-10 text-lg leading-relaxed">
                            {t('home.locations.effect2_desc_1')}<strong className="text-white">{t('home.locations.effect2_desc_b')}</strong>{t('home.locations.effect2_desc_2')}
                        </p>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start">
                                <div className="bg-white/20 p-2 rounded-xl mr-4 shrink-0 mt-1">
                                    <CheckCircle2 className="text-white" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">{t('home.locations.effect2_li1_t')}</strong>
                                    <span className="text-white/80 text-sm leading-relaxed">{t('home.locations.effect2_li1_d')}</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-white/20 p-2 rounded-xl mr-4 shrink-0 mt-1">
                                    <CheckCircle2 className="text-white" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">{t('home.locations.effect2_li2_t')}</strong>
                                    <span className="text-white/80 text-sm leading-relaxed">{t('home.locations.effect2_li2_d')}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Locations;
