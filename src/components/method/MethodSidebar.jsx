import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Activity, Shield, Microscope, BarChart3, Wrench, Users, FlaskConical, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MethodSidebar = ({ setBookingStep }) => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('intro');
    const navigate = useNavigate();

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
            const scrollPosition = window.scrollY + 150; // Offset for better detection

            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
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
                top: element.offsetTop - 100, // Offset for sticky header if exists, or breathing room
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="hidden lg:block sticky top-28 self-start bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100 max-w-[280px] z-30 h-fit">
            <h3 className="text-[#1B263B] font-serif font-bold text-xl mb-6 px-4">
                {t('method.sidebar.nav_title')}
            </h3>
            <nav className="space-y-2">
                {SECTIONS.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center p-4 rounded-xl text-sm font-bold transition-all duration-300 text-left group ${activeSection === section.id
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
            <div className="mt-8 bg-[#1B263B] rounded-[2rem] p-6 border border-[#1B263B] text-center shadow-lg group cursor-pointer hover:shadow-xl transition-all" onClick={() => navigate('/sport')}>
                <p className="text-white text-sm font-bold mb-3 leading-tight" dangerouslySetInnerHTML={{ __html: t('method.sidebar.cta_text') }}></p>
                <div className="w-full h-10 bg-[#C5A059] text-white rounded-lg text-xs font-bold flex items-center justify-center group-hover:bg-[#b08d4d] transition-colors">
                    {t('method.sidebar.cta_btn')} <ArrowRight size={14} className="ml-2" />
                </div>
            </div>

        </div>
    );
};

export default MethodSidebar;
