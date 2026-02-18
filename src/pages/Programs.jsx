import React from 'react';
import { Calendar, Check, Sparkles, CheckCircle2, Star } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { PROGRAMS_DATA } from '../data/programs';
import ContactSection from '../components/ui/ContactSection';

const Programs = ({ handleSelectProgram }) => {
    return (
        <section className="py-20 px-4 bg-gray-50/50">
            <SectionHeader
                title="Forfaits de Transformation"
                subtitle="Investissez dans la confiance de votre enfant. Des tarifs clairs, sans taux horaires cachés."
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-12">
                {Object.entries(PROGRAMS_DATA).map(([key, program]) => {
                    const isPerformance = program.highlight;

                    return (
                        <div
                            key={key}
                            className={`
                                relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-300
                                ${isPerformance
                                    ? 'bg-white border-4 border-[#C5A059] shadow-2xl scale-105 z-10 lg:-mt-4 lg:-mb-4 min-h-[640px] ring-4 ring-[#C5A059]/10'
                                    : 'bg-white border border-gray-100 shadow-lg hover:-translate-y-2 min-h-[580px] opacity-90 hover:opacity-100'
                                }
                            `}
                        >
                            {isPerformance && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg flex items-center whitespace-nowrap">
                                    <Star size={16} fill="white" className="mr-2" /> Le Choix des Parents
                                </div>
                            )}

                            <div className="mb-6 text-center">
                                <h3 className={`font-serif font-bold text-[#1B263B] mb-4 ${isPerformance ? 'text-2xl' : 'text-xl'}`}>
                                    {program.label}
                                </h3>

                                <div className="flex items-center justify-center baseline mb-2">
                                    <span className={`font-bold text-[#1B263B] ${isPerformance ? 'text-5xl' : 'text-4xl'}`}>
                                        {program.price} $
                                    </span>
                                </div>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
                                    {program.installments > 1 ? `Ou ${program.installments}x ${program.installmentPrice}$` : 'Paiement unique'}
                                </p>

                                <div className="h-px w-full bg-gray-100 mb-6"></div>

                                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                                    {program.desc}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 mb-8 flex-grow">
                                {program.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start text-sm text-gray-700 leading-tight">
                                        <CheckCircle2 className={`${isPerformance ? 'text-[#C5A059]' : 'text-[#8F9779]'} mr-3 shrink-0 mt-0.5`} size={18} />
                                        <span className={isPerformance ? 'font-medium' : ''}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleSelectProgram(key)}
                                className={`
                                    w-full py-5 rounded-xl font-bold flex items-center justify-center transition-all shadow-lg text-lg
                                    ${isPerformance
                                        ? 'bg-[#C5A059] text-white hover:bg-[#B08D45] hover:shadow-[#C5A059]/40 hover:-translate-y-1'
                                        : 'bg-[#1B263B] text-white hover:bg-[#253550] hover:-translate-y-1'
                                    }
                                `}
                            >
                                {isPerformance ? "Sécuriser la transformation" : "Réserver ce forfait"}
                                <Calendar className="ml-2" size={20} />
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="mt-20">
                <ContactSection handleSelectProgram={handleSelectProgram} />
            </div>
        </section>
    );
};

export default Programs;
