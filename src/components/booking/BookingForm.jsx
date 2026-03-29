import React from 'react';
import { ChevronLeft, Calendar, Sparkles, Repeat, ArrowRight, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BookingForm = ({
    bookingData,
    setBookingData,
    setBookingStep,
    selectedDate,
    selectedTime,
    isRecurring,
    onSubmit,
    submitLabel
}) => {
    const { t } = useTranslation();
    const [showWellbeingInfo, setShowWellbeingInfo] = React.useState(false);
    return (
        <div className="animate-in slide-in-from-right duration-500">
            {selectedDate && (
                <button onClick={() => setBookingStep('calendar')} className="flex items-center text-gray-400 hover:text-[#1B263B] mb-6 transition-colors">
                    <ChevronLeft size={18} className="mr-1" /> Retour au calendrier
                </button>
            )}

            {selectedDate && (
                <div className="mb-8 p-4 bg-[#F8F9FA] rounded-2xl flex items-center justify-between border border-gray-100">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#8F9779]/10 flex items-center justify-center text-[#8F9779] mr-4"><Calendar size={20} /></div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase">Créneau sélectionné</p>
                            <p className="font-bold text-[#1B263B]">{selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {selectedTime}</p>
                            {isRecurring && (
                                <p className="text-xs text-[#8F9779] font-bold flex items-center mt-1">
                                    <Repeat size={12} className="mr-1" /> Récurrent (Hebdomadaire)
                                </p>
                            )}
                        </div>
                    </div>
                    <Sparkles className="text-[#C5A059] opacity-50" />
                </div>
            )}

            <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-[#1B263B]">{t('booking.form_title')}</h2>
                <p className="text-gray-500 italic mt-2">{t('booking.form_subtitle')}</p>
            </div>

            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">{t('booking.lbl_name')}</label>
                        <input type="text" value={bookingData.name} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none" placeholder={t('booking.ph_name')} />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">{t('booking.lbl_age')}</label>
                        <input type="number" value={bookingData.age} onChange={(e) => setBookingData({ ...bookingData, age: e.target.value })} className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none" placeholder={t('booking.ph_age')} />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="block text-sm font-bold text-[#1B263B] uppercase tracking-tight text-[10px] mb-0">{t('booking.lbl_wellbeing')}</label>
                        <button
                            type="button"
                            onClick={() => setShowWellbeingInfo(!showWellbeingInfo)}
                            className="text-[#8F9779] hover:text-[#1B263B] transition-colors flex items-center text-xs font-semibold"
                        >
                            <Info size={14} className="mr-1" />
                            {t('booking.btn_wellbeing_info')}
                        </button>
                    </div>

                    {showWellbeingInfo && (
                        <div className="mb-4 p-4 bg-[#F8F9FA] rounded-xl border border-gray-100 text-sm text-gray-600 animate-in fade-in zoom-in-95 duration-200">
                            <div className="grid grid-cols-2 gap-4 mb-3 pb-3 border-b border-gray-100">
                                <div>
                                    <span className="font-bold text-[#1B263B] block mb-1">{t('booking.wb_desc_1')}</span>
                                    <span className="text-xs">{t('booking.wb_desc_1_sub')}</span>
                                </div>
                                <div className="text-right">
                                    <span className="font-bold text-[#1B263B] block mb-1">{t('booking.wb_desc_10')}</span>
                                    <span className="text-xs">{t('booking.wb_desc_10_sub')}</span>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-[#1B263B] mb-2 text-xs uppercase">{t('booking.wb_crit_title')}</p>
                                <ul className="space-y-1 list-disc pl-4 text-xs">
                                    <li><strong className="text-[#1B263B]">{t('booking.wb_crit_low_b')}</strong>{t('booking.wb_crit_low_t')}</li>
                                    <li><strong className="text-[#1B263B]">{t('booking.wb_crit_mid_b')}</strong>{t('booking.wb_crit_mid_t')}</li>
                                    <li><strong className="text-[#1B263B]">{t('booking.wb_crit_high_b')}</strong>{t('booking.wb_crit_high_t')}</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between gap-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <button
                                type="button"
                                key={n}
                                onClick={() => setBookingData({ ...bookingData, wellbeing: n })}
                                className={`flex-1 py-3 border rounded-lg font-bold transition-all ${bookingData.wellbeing === n ? 'bg-[#8F9779] text-white border-[#8F9779]' : 'border-gray-100 hover:border-[#8F9779]/50'}`}
                            >
                                {n}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">{t('booking.lbl_trait')}</label>
                    <select
                        value={bookingData.childTrait || ''}
                        onChange={(e) => setBookingData({ ...bookingData, childTrait: e.target.value })}
                        className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none appearance-none"
                    >
                        <option value="" disabled>{t('booking.trait_default')}</option>
                        <option value="Peur d'agir">{t('booking.trait_1')}</option>
                        <option value="Ne parle pas aux autres">{t('booking.trait_2')}</option>
                        <option value="Est seul(e) à l'école">{t('booking.trait_3')}</option>
                        <option value="Manque de confiance">{t('booking.trait_4')}</option>
                        <option value="Difficultés de concentration">{t('booking.trait_5')}</option>
                        <option value="Gestion des émotions">{t('booking.trait_6')}</option>
                        <option value="Autre">{t('booking.trait_other')}</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">{t('booking.lbl_disorder')}</label>
                    <select
                        value={bookingData.childDisorder || ''}
                        onChange={(e) => setBookingData({ ...bookingData, childDisorder: e.target.value })}
                        className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none appearance-none"
                    >
                        <option value="" disabled>{t('booking.dis_default')}</option>
                        <option value="Aucun">{t('booking.dis_none')}</option>
                        <option value="TDAH">{t('booking.dis_1')}</option>
                        <option value="TSA">{t('booking.dis_2')}</option>
                        <option value="Dyslexie">{t('booking.dis_3')}</option>
                        <option value="Dysorthographie">{t('booking.dis_4')}</option>
                        <option value="Dyscalculie">{t('booking.dis_5')}</option>
                        <option value="Dysphasie">{t('booking.dis_6')}</option>
                        <option value="Dyspraxie">{t('booking.dis_7')}</option>
                        <option value="Anxiété">{t('booking.dis_8')}</option>
                        <option value="TOP">{t('booking.dis_9')}</option>
                        <option value="HPI">{t('booking.dis_10')}</option>
                        <option value="Autre">{t('booking.trait_other')}</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">{t('booking.lbl_notes')}</label>
                    <textarea
                        value={bookingData.childNotes || ''}
                        onChange={(e) => setBookingData({ ...bookingData, childNotes: e.target.value })}
                        className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none min-h-[100px]"
                        placeholder={t('booking.ph_notes')}
                    />
                </div>

                <button
                    type="button"
                    onClick={() => onSubmit ? onSubmit() : setBookingStep('payment')}
                    disabled={!bookingData.name || !bookingData.age}
                    className="w-full py-5 bg-[#1B263B] text-white font-bold rounded-2xl shadow-xl hover:bg-[#253550] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {submitLabel || (
                        <>{t('booking.btn_submit_default')} <ArrowRight className="ml-2" /></>
                    )}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
