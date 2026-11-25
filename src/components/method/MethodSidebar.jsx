import React, { useState, useEffect } from 'react';
import { BookOpen, Activity, Shield, Microscope, BarChart3, Wrench, Users, FlaskConical, ArrowRight } from 'lucide-react';
import CtaAppel from '../shared/CtaAppel';
import { t } from '../../content/methode';

const MethodSidebar = () => {
    const [activeSection, setActiveSection] = useState('intro');

    const SECTIONS = [
        { id: 'intro',         label: t('method.sidebar.l1'), icon: <BookOpen size={16} /> },
        { id: 'probleme',      label: t('method.sidebar.l2'), icon: <Activity size={16} /> },
        { id: 'definition',    label: t('method.sidebar.l3'), icon: <BookOpen size={16} /> },
        { id: 'piliers',       label: t('method.sidebar.l4'), icon: <Microscope size={16} /> },
        { id: 'interventions', label: t('method.sidebar.l5'), icon: <Wrench size={16} /> },
        { id: '13-seances',    label: t('method.sidebar.l6'), icon: <FlaskConical size={16} /> },
        { id: 'acteurs',       label: t('method.sidebar.l7'), icon: <Users size={16} /> },
        { id: 'mesures',       label: t('method.sidebar.l8'), icon: <BarChart3 size={16} /> },
        { id: 'ethique',       label: t('method.sidebar.l9'), icon: <Shield size={16} /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const repere = 150; // sous le menu fixe de 80 px

            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= repere && rect.bottom > repere) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 112, // menu fixe de 80 px + marge
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="hidden lg:block sticky top-28 self-start bg-white p-5 rounded-[2rem] shadow-lg border border-gray-100 max-w-[280px] z-30 h-fit">
            <h3 className="text-[#1B263B] font-serif text-2xl mb-4 px-3">
                {t('method.sidebar.nav_title')}
            </h3>
            <nav className="space-y-1">
                {SECTIONS.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center py-2.5 px-3 rounded-xl text-sm font-bold transition-all duration-300 text-left group ${activeSection === section.id
                            ? 'bg-[#1B263B] text-white shadow-md'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-[#1B263B]'
                            }`}
                    >
                        <span className={`mr-3 ${activeSection === section.id ? 'text-[#C5A059]' : 'text-gray-400 group-hover:text-[#C5A059] transition-colors'}`}>
                            {section.icon}
                        </span>
                        {section.label}
                    </button>
                ))}
            </nav>

            {/* CTA Mini Widget */}
            <div className="mt-5 w-full bg-[#1B263B] rounded-2xl p-4 border border-[#1B263B] text-center shadow-lg">
                <p className="text-white text-xs font-bold mb-3 leading-tight text-center" dangerouslySetInnerHTML={{ __html: t('method.sidebar.cta_text') }}></p>
                <CtaAppel libelle={t('method.sidebar.cta_btn')} variante="or" taille="sm" className="w-full" icone={<ArrowRight size={14} />} />
            </div>

        </div>
    );
};

export default MethodSidebar;
