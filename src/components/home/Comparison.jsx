import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../ui/SectionHeader';

const Comparison = ({ setBookingStep, openDiagnostic }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1B263B] mb-4">
                        {t('home.comparison.heading')}
                    </h2>
                    <div className="h-1 w-20 bg-[#C5A059] mx-auto mb-6"></div>

                    {/* Inserted Text */}
                    <div className="mb-6 text-center max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#1B263B] mb-4">{t('home.comparison.sub_heading_1')}</h3>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            <span className="font-bold text-[#1B263B]">{t('home.comparison.desc_1_1')}</span><br />
                            {t('home.comparison.desc_1_2')}
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {t('home.comparison.desc_2_1')}
                            <br /><span className="text-[#8F9779] font-bold">{t('home.comparison.desc_2_2')}</span>
                        </p>
                    </div>

                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        {t('home.comparison.subtitle')}
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                    <div className="grid grid-cols-3 bg-[#1B263B] text-white p-6 text-sm md:text-base font-serif font-bold tracking-wider uppercase text-center">
                        <div>{t('home.comparison.table_h_1')}</div>
                        <div className="text-gray-400">{t('home.comparison.table_h_2')}</div>
                        <div className="text-[#C5A059]">{t('home.comparison.table_h_3')}</div>
                    </div>
                    {[
                        { criteria: t('home.comparison.row1_c'), club: t('home.comparison.row1_cl'), thrive: t('home.comparison.row1_th') },
                        { criteria: t('home.comparison.row2_c'), club: t('home.comparison.row2_cl'), thrive: t('home.comparison.row2_th') },
                        { criteria: t('home.comparison.row3_c'), club: t('home.comparison.row3_cl'), thrive: t('home.comparison.row3_th') },
                        { criteria: t('home.comparison.row4_c'), club: t('home.comparison.row4_cl'), thrive: t('home.comparison.row4_th') },
                        { criteria: t('home.comparison.row5_c'), club: t('home.comparison.row5_cl'), thrive: t('home.comparison.row5_th') },
                    ].map((row, i) => (
                        <div key={i} className={`grid grid-cols-3 p-6 text-center border-b border-gray-100 last:border-0 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <div className="font-bold text-[#1B263B] text-left">{row.criteria}</div>
                            <div className="text-gray-500 text-sm md:text-base">{row.club}</div>
                            <div className="text-[#8F9779] font-bold flex justify-center items-center">
                                <CheckCircle2 size={16} className="mr-2 hidden md:block" /> {row.thrive}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => {
                            navigate('/evaluation');
                        }}
                        className="bg-[#1B263B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#253550] transition-all inline-flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        {t('home.comparison.btn')} <CheckCircle2 className="ml-2" size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
