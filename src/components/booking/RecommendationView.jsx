import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROGRAMS_DATA } from '../../data/programs';

const RecommendationView = ({ bookingData, onSelectProgram }) => {

    // Logic for recommendation
    const getRecommendation = () => {
        const score = bookingData.wellbeing;
        if (score <= 4) return {
            key: "Performance",
            reason: "Le score de bien-être indique un besoin de soutien important. Ce pack intensif (13 séances) est conçu pour reconstruire les bases émotionnelles en profondeur et transformer durablement l'état d'esprit de l'enfant."
        };
        if (score <= 7) return {
            key: "Avance",
            reason: "Votre enfant montre des signes de fragilité mais aussi de résilience. Ce programme intermédiaire (6 séances) est idéal pour cibler les blocages spécifiques qui l'empêchent de s'épanouir pleinement."
        };
        return {
            key: "Essentiel",
            reason: "Le niveau de bien-être est encourageant ! Ce pack court (3 séances) agira comme un 'boost' pour consolider ses acquis, résoudre un point précis et lui donner des outils pour maintenir cette dynamique."
        };
    };

    const recommendation = getRecommendation();
    const recommendedKey = recommendation.key;
    const recommendedProgram = PROGRAMS_DATA[recommendedKey];

    return (
        <div className="animate-in slide-in-from-right duration-500">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-[#1B263B]">Notre recommandation pour {bookingData.name}</h2>
                <p className="text-gray-500 italic mt-2">Basé sur votre bilan, ce programme est le plus adapté.</p>
            </div>

            <div className="max-w-md mx-auto mb-16">
                <div className="p-8 rounded-[2.5rem] bg-[#1B263B] text-white shadow-2xl relative overflow-hidden ring-4 ring-[#8F9779]/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#8F9779] rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8F9779] text-white text-xs font-bold mb-4">
                            <Sparkles size={12} className="mr-1" /> Recommandé pour vous
                        </div>

                        {/* Justification Block */}
                        <div className="mb-6 p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                            <p className="text-xs leading-relaxed text-gray-200">
                                <span className="font-bold text-[#8F9779] block mb-1 uppercase tracking-widest text-[10px]">Pourquoi ce pack ?</span>
                                {recommendation.reason}
                            </p>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                            <div className="bg-white/10 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border border-white/20">
                                📦 {recommendedProgram.sessions} Séances
                            </div>
                        </div>

                        <h3 className="text-2xl font-serif font-bold mb-2">{recommendedProgram.label}</h3>
                        <p className="text-gray-300 italic text-sm mb-6">{recommendedProgram.desc}</p>

                        <div className="space-y-3 mb-8">
                            {recommendedProgram.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start text-sm text-gray-200">
                                    <CheckCircle2 className="text-[#8F9779] mr-2 shrink-0 mt-0.5" size={16} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold">{(recommendedProgram.price / recommendedProgram.sessions).toFixed(2)} $</span>
                                <span className="text-lg text-gray-300 ml-2">/ séance</span>
                            </div>
                            <div className="text-sm text-gray-400 font-bold mt-1">
                                Total : {recommendedProgram.price} $ {recommendedProgram.installments > 1 && `(ou ${recommendedProgram.installments}x ${recommendedProgram.installmentPrice}$)`}
                            </div>
                        </div>

                        <button
                            onClick={() => onSelectProgram(recommendedKey)}
                            className="w-full py-4 bg-white text-[#1B263B] font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center"
                        >
                            Choisir ce programme <ArrowRight className="ml-2" size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8 bg-[#F8F9FA] rounded-3xl p-8 border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8F9779]/10 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="relative z-10">
                    <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-2">Besoin d'aide pour choisir ?</h3>
                    <p className="text-sm text-gray-600 mb-6 max-w-lg mx-auto">
                        Vous hésitez entre deux packs ou avez une question spécifique sur les besoins de votre enfant ?
                        Contactez-nous directement, nous vous guiderons vers l'option la plus adaptée.
                    </p>
                    <a
                        href="mailto:thrive.psypositive@gmail.com"
                        className="inline-flex items-center text-sm font-bold text-[#8F9779] hover:text-[#1B263B] transition-colors underline underline-offset-4"
                    >
                        thrive.psypositive@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RecommendationView;
