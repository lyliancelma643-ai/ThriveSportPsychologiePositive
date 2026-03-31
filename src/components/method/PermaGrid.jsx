import React from 'react';
import { Smile, Activity, Users, BookOpen, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PermaGrid = () => {
    const { t } = useTranslation();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
                { letter: 'P', title: t('method.perma.p_t'), desc: t('method.perma.p_d'), icon: <Smile />, color: '#8F9779' },
                { letter: 'E', title: t('method.perma.e_t'), desc: t('method.perma.e_d'), icon: <Activity />, color: '#7B8466' },
                { letter: 'R', title: t('method.perma.r_t'), desc: t('method.perma.r_d'), icon: <Users />, color: '#687153' },
                { letter: 'M', title: t('method.perma.m_t'), desc: t('method.perma.m_d'), icon: <BookOpen />, color: '#555E40' },
                { letter: 'A', title: t('method.perma.a_t'), desc: t('method.perma.a_d'), icon: <Award />, color: '#424B2D' }
            ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform group">
                    <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 rounded-[2rem] flex items-center justify-center text-white text-2xl font-serif font-bold shadow-md" style={{ backgroundColor: item.color }}>
                            {item.letter}
                        </div>
                        <div className="text-gray-300 group-hover:text-[#C5A059] transition-colors">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1B263B] mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default PermaGrid;
