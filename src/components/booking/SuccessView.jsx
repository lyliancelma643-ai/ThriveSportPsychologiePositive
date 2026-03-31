import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SuccessView = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div className="text-center py-12 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-[#8F9779]/10 rounded-full flex items-center justify-center text-[#8F9779] mx-auto mb-8 shadow-inner">
                <CheckCircle2 size={40} />
            </div>
            <h2 className="text-4xl font-serif text-[#1B263B] mb-4">{t('booking.success_title')}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                {t('booking.success_desc')}
            </p>
            <div className="bg-[#F8F9FA] p-6 rounded-[2rem] border border-gray-100 mb-8 inline-block text-left">
                <p className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-widest">{t('booking.success_next')}</p>
                <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-[#8F9779]" /> {t('booking.success_li1')}</li>
                    <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-[#8F9779]" /> {t('booking.success_li2')}</li>
                </ul>
            </div>
            <br />
            <button onClick={() => navigate('/')} className="text-[#1B263B] font-bold underline underline-offset-4">{t('booking.success_btn')}</button>
        </div>
    );
};

export default SuccessView;
