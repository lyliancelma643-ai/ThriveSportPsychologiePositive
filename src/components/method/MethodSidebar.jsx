import React, { useState, useEffect } from 'react';
import { BookOpen, Activity, Shield, Microscope, BarChart3, Wrench } from 'lucide-react';

const SECTIONS = [
    { id: 'intro', label: 'Introduction', icon: <BookOpen size={18} /> },
    { id: 'perma', label: 'Modèle PERMA', icon: <Activity size={18} /> },
    { id: 'scorecard', label: 'Scorecard THRIVE', icon: <Shield size={18} /> },
    { id: 'science', label: 'Preuves Scientifiques', icon: <Microscope size={18} /> },
    { id: 'dashboard', label: 'Dashboard Élite', icon: <BarChart3 size={18} /> },
];

const MethodSidebar = ({ setCurrentPage, setBookingStep }) => {
    const [activeSection, setActiveSection] = useState('intro');

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
        <div className="hidden lg:block sticky top-28 self-start bg-white p-6 rounded-3xl shadow-lg border border-gray-100 max-w-[280px] z-30 h-fit">
            <h3 className="text-[#1B263B] font-serif font-bold text-xl mb-6 px-4">
                Navigation
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
            <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                <p className="text-xs text-gray-500 mb-3 font-medium">Convaincu par la méthode ?</p>
                <button
                    onClick={() => {
                        setBookingStep('calendar');
                        setCurrentPage('booking');
                    }}
                    className="w-full py-2 bg-[#C5A059] text-white rounded-lg text-xs font-bold hover:bg-[#b08d4d] transition-colors"
                >
                    Réserver une séance
                </button>
            </div>
        </div>
    );
};

export default MethodSidebar;
