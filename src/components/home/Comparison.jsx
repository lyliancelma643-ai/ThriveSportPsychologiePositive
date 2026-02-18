import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Comparison = ({ setCurrentPage, setBookingStep, openDiagnostic }) => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1B263B] mb-4">
                        Pourquoi choisir Thrive ?
                    </h2>
                    <div className="h-1 w-20 bg-[#C5A059] mx-auto mb-6"></div>

                    {/* Inserted Text */}
                    <div className="mb-6 text-center max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#1B263B] mb-4">La Science vs Le Hasard</h3>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            <span className="font-bold text-[#1B263B]">Pourquoi la majorité des parents se contentent-ils de deviner les progrès de leur enfant ?</span><br />
                            Dans un camp traditionnel, vous payez pour du temps de glace. Chez Thrive Sport Positive, vous investissez dans une trajectoire de vie.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Là où les autres voient un enfant "timide", nous mesurons un déficit de contrôle émotionnel. Là où ils voient un "manque de talent", nous identifions un besoin d'auto-efficacité.
                            <br /><span className="text-[#8F9779] font-bold">Avec le Scorecard THRIVE, nous éliminons le "peut-être".</span>
                        </p>
                    </div>

                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        La différence entre un coach d'équipe et un mentor personnel.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                    <div className="grid grid-cols-3 bg-[#1B263B] text-white p-6 text-sm md:text-base font-serif font-bold tracking-wider uppercase text-center">
                        <div>Critère</div>
                        <div className="text-gray-400">Club Classique</div>
                        <div className="text-[#C5A059]">Tutorat Thrive</div>
                    </div>
                    {[
                        { criteria: "Attention", club: "1 coach pour 15 enfants", thrive: "1 Mentor pour 1 Enfant" },
                        { criteria: "Feedback", club: "Critique les erreurs", thrive: "Renforce les réussites (Zéro Négatif)" },
                        { criteria: "Objectif", club: "Gagner le match samedi", thrive: "Bâtir la confiance à vie" },
                        { criteria: "Suivi", club: "Aucun rapport écrit", thrive: "Journal de bord, Bilan avant et après chaques séances" },
                        { criteria: "Psychologie", club: "Approche 'à la dure'", thrive: "Science PERMA & Bienveillance" },
                    ].map((row, i) => (
                        <div key={i} className={`grid grid-cols-3 p-6 text-center border-b border-gray-100 last:border-0 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <div className="font-bold text-[#1B263B] text-left">{row.criteria}</div>
                            <div className="text-gray-500 text-sm md:text-base">{row.club}</div>
                            <div className="text-[#8F9779] font-bold flex justify-center items-center">
                                <CheckCircle2 size={16} className="mr-2 hidden md:block" /> {row.thrive}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => {
                            setCurrentPage('evaluation');
                        }}
                        className="bg-[#1B263B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#253550] transition-all inline-flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Réserver une séance d'évaluation offerte <CheckCircle2 className="ml-2" size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
