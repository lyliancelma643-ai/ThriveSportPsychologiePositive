import React from 'react';
import { Calendar, Check, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { PROGRAMS_DATA } from '../data/programs';

const Programs = ({ handleSelectProgram }) => {
    return (
        <section className="py-20 px-4 bg-gray-50/50">
            <SectionHeader
                title="Nos Programmes de Tutorat"
                subtitle="Investissez dans la confiance de votre enfant. Des tarifs dégressifs selon l'engagement."
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(PROGRAMS_DATA).map(([key, program]) => {
                    const unitPrice = (program.price / program.sessions).toFixed(2);

                    return (
                        <div key={key} className={`p-6 rounded-[2rem] border transition-all flex flex-col ${program.highlight ? 'border-[#8F9779] shadow-xl bg-white relative ring-1 ring-[#8F9779]/20' : 'border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1'}`}>
                            {program.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8F9779] text-white px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-lg whitespace-nowrap">
                                    <Sparkles size={12} className="mr-1" /> Recommandé
                                </div>
                            )}

                            <div className="mb-6">
                                {/* Promo Badge Container - Fixed height for alignment */}
                                <div className="h-8 mb-3 flex items-start">
                                    <div className="bg-[#1B263B]/5 text-[#1B263B] px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center border border-[#1B263B]/10">
                                        📦 {program.sessions} Séances incluses
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-2">{program.label.toUpperCase()}</h3>
                                <div className="flex items-baseline mb-1">
                                    <span className="text-3xl font-bold text-[#1B263B]">{unitPrice} $ <span className="text-lg font-medium text-gray-500">/ séance</span></span>
                                </div>
                                <div className="text-sm font-bold text-gray-400 mb-4">
                                    Total du pack : {program.price} $
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed min-h-[40px] italic">{program.desc}</p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-3 mb-8 flex-grow border-t border-gray-50 pt-6">
                                {program.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start text-xs text-gray-600 leading-tight">
                                        <CheckCircle2 className="text-[#8F9779] mr-2 shrink-0 mt-0.5" size={14} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Payment Options Summary */}
                            <div className="mb-6 pt-4 border-t border-gray-50">
                                {program.installments > 1 ? (
                                    <div className="text-xs text-gray-400 font-bold text-center">
                                        ou {program.installments} versements de {program.installmentPrice}$
                                    </div>
                                ) : (
                                    <div className="text-xs text-gray-400 font-bold text-center">
                                        Paiement unique
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => handleSelectProgram(key)}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-md ${program.highlight ? 'bg-[#1B263B] text-white hover:bg-[#253550]' : 'bg-white border-2 border-[#1B263B] text-[#1B263B] hover:bg-gray-50'}`}
                            >
                                Choisir ce pack <Calendar className="ml-2" size={18} />
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Programs;
