import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../ui/SectionHeader';
import coachChildImage from '../../assets/coach-child-hockey.jpg';

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
                    <div className="h-1 w-20 bg-[#C5A059] mx-auto mb-10"></div>

                    {/* Inserted Text */}
                    <div className="mb-12 text-center max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#1B263B] mb-6 leading-snug">{t('home.comparison.sub_heading_1')}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            <span className="font-bold text-[#1B263B]">{t('home.comparison.desc_1_1')}</span>
                            {t('home.comparison.desc_1_2')}
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-[#1B263B] mb-6">{t('home.comparison.subtitle')}</h3>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-gray-200 shadow-xl mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-[#1B263B] text-white p-6 text-sm md:text-base font-serif font-bold tracking-wider uppercase text-center hidden md:grid">
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
                        <div key={i} className={`grid grid-cols-1 md:grid-cols-3 p-6 text-center border-b border-gray-100 last:border-0 items-center gap-4 md:gap-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <div className="font-bold text-[#1B263B] md:text-left">{row.criteria}</div>
                            <div className="text-gray-500 text-sm md:text-base"><span className="md:hidden font-bold block mb-1">{t('home.comparison.table_h_2')} :</span>{row.club}</div>
                            <div className="text-[#8F9779] font-bold flex flex-col md:flex-row justify-center md:justify-start items-center">
                                <span className="md:hidden font-bold text-[#1B263B] block mb-1">{t('home.comparison.table_h_3')} :</span>
                                <div className="flex items-center justify-center">
                                    <CheckCircle2 size={16} className="mr-2 hidden md:block" /> {row.thrive}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Why this approach is different */}
                    <div className="bg-[#f8f9fa] rounded-[2rem] p-8 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-4">{t('home.comparison.diff_heading')}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{t('home.comparison.diff_p1')}</p>
                        <p className="text-gray-600 font-medium leading-relaxed">{t('home.comparison.diff_p2')}</p>
                    </div>

                    {/* Who Thrive is designed for */}
                    <div className="bg-[#f8f9fa] rounded-[2rem] p-8 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-4">{t('home.comparison.who_heading')}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{t('home.comparison.who_p1')}</p>
                        <p className="text-gray-600 font-medium leading-relaxed">{t('home.comparison.who_p2')}</p>
                    </div>
                </div>

                {/* What you get + Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="order-2 lg:order-1 flex flex-col space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-4 text-center lg:text-left">{t('home.comparison.obtain_heading')}</h3>
                        {[
                            t('home.comparison.obtain_l1'),
                            t('home.comparison.obtain_l2'),
                            t('home.comparison.obtain_l3'),
                            t('home.comparison.obtain_l4'),
                            t('home.comparison.obtain_l5'),
                            t('home.comparison.obtain_l6')
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start bg-white p-5 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                                <CheckCircle2 className="text-[#8F9779] mr-4 mt-1 shrink-0" size={24} />
                                <span className="text-gray-700 font-medium text-lg leading-snug">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="order-1 lg:order-2 relative rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-[400px] lg:h-[600px] w-full">
                        <img 
                            src={coachChildImage} 
                            alt="Coach Thrive et enfant sur la glace"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Closing Phrase */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <p className="text-xl md:text-2xl font-serif text-[#1B263B] font-bold italic leading-relaxed px-4 py-8 border-y-2 border-gray-100">
                        "{t('home.comparison.closing')}"
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 items-center mt-12">
                    <Link to="/prix" className="px-8 py-4 bg-[#1B263B] text-white rounded-full text-lg font-bold hover:bg-[#253550] transition-colors text-center shadow-lg w-full md:w-auto">
                        {t('home.comparison.btn_book_place')}
                    </Link>
                    <button
                        data-cal-namespace="30min"
                        data-cal-link="thrive-sport-positive/30min"
                        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                        className="px-8 py-4 bg-[#8F9779] text-white rounded-full text-lg font-bold hover:bg-[#A3AC8B] transition-colors text-center shadow-lg cursor-pointer w-full md:w-auto"
                    >
                        {t('home.comparison.btn_rdv')}
                    </button>
                    <Link to="/methode" className="px-8 py-4 bg-white text-[#1B263B] border-2 border-[#1B263B] rounded-full text-lg font-bold hover:bg-[#1B263B] hover:text-white transition-colors text-center shadow-sm hover:shadow-xl w-full md:w-auto">
                        {t('home.comparison.btn_method')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
