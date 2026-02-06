import React from 'react';
import { Radar, Award, TrendingUp, ScrollText, PlayCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const EliteDashboard = () => {
    return (
        <section className="py-24 bg-[#F0F2F5] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B263B]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="Le Dashboard de l'Élite"
                    subtitle="Visualisation Stratégique pour maximiser la valeur. Un rapport digne d'un consultant haut de gamme, pas d'un simple moniteur."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
                    {/* 1. Radar Analysis */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#1B263B]/10 p-3 rounded-xl text-[#1B263B]">
                                <Radar size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-serif text-[#1B263B]">Le Radar de l'Épanouissement</h3>
                        </div>
                        <div className="flex-grow flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-4 relative overflow-hidden group">
                            {/* Abstract representation of a radar chart */}
                            <div className="relative w-48 h-48">
                                <div className="absolute inset-0 border-2 border-gray-200 rounded-full opacity-30 animate-pulse"></div>
                                <div className="absolute inset-4 border-2 border-gray-200 rounded-full opacity-30"></div>
                                <div className="absolute inset-8 border-2 border-gray-200 rounded-full opacity-30"></div>
                                {/* Polygon approximation */}
                                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                                    <polygon points="50,10 90,40 70,90 30,90 10,40" fill="#1B263B" fillOpacity="0.1" stroke="#1B263B" strokeWidth="1" className="group-hover:scale-90 transition-transform duration-700 origin-center" />
                                    <polygon points="50,5 95,35 80,95 20,95 5,35" fill="#C5A059" fillOpacity="0.4" stroke="#C5A059" strokeWidth="2" className="group-hover:scale-110 transition-transform duration-1000 origin-center" />
                                </svg>
                                <div className="absolute bottom-2 right-2 text-[10px] font-bold text-[#C5A059] bg-white px-2 py-0.5 rounded shadow">S6: Expansion</div>
                                <div className="absolute top-10 left-10 text-[10px] font-bold text-[#1B263B] bg-white px-2 py-0.5 rounded shadow">S1: Baseline</div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Graphique en toile d'araignée superposant la Séance 1 (Baseline) et la Séance 6. L'expansion visuelle crée le "Wow Effect" immédiat.
                        </p>
                    </div>

                    {/* 2. Log de Micro-Victoires */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#8F9779]/10 p-3 rounded-xl text-[#8F9779]">
                                <ScrollText size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-serif text-[#1B263B]">Le Log de Micro-Victoires</h3>
                        </div>
                        <div className="flex-grow space-y-3 mb-6">
                            {[
                                "A encouragé son gardien après un but encaissé (Leadership)",
                                "A demandé une répétition supplémentaire de sa propre initiative (Engagement)",
                                "A gardé son calme après deux échecs consécutifs (Contrôle Émotionnel)"
                            ].map((note, i) => (
                                <div key={i} className="flex items-start bg-gray-50 p-3 rounded-xl border-l-4 border-[#8F9779]">
                                    <PlayCircle size={14} className="mt-1 mr-2 text-[#8F9779] shrink-0" />
                                    <p className="text-xs text-gray-700 font-medium italic">"{note}"</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Observations BARS concrètes. Donne aux parents des anecdotes précises pour valoriser leur enfant.
                        </p>
                    </div>

                    {/* 3. Jauge État Interne */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-serif text-[#1B263B]">La Jauge de Régulation</h3>
                        </div>
                        <div className="flex-grow flex items-end justify-between h-32 px-4 mb-6 border-b border-gray-200 pb-2 relative">
                            {/* Fake chart */}
                            <div className="w-[10%] bg-red-200 h-[80%] rounded-t-md mx-1 relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Stress</div>
                            </div>
                            <div className="w-[10%] bg-red-100 h-[70%] rounded-t-md mx-1"></div>
                            <div className="w-[10%] bg-orange-100 h-[60%] rounded-t-md mx-1"></div>
                            <div className="w-[10%] bg-yellow-100 h-[50%] rounded-t-md mx-1"></div>
                            <div className="w-[10%] bg-green-100 h-[40%] rounded-t-md mx-1"></div>
                            <div className="w-[10%] bg-green-200 h-[35%] rounded-t-md mx-1"></div>
                            <div className="w-[10%] bg-green-300 h-[30%] rounded-t-md mx-1 relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity text-green-700">Calme</div>
                            </div>

                            {/* Trend line */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                                <path d="M 20,25 L 60,40 L 100,60 L 140,75 L 180,90 L 220,95 L 260,100" fill="none" stroke="#1B263B" strokeWidth="2" strokeDasharray="4 2" />
                            </svg>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Graphique linéaire montrant la baisse du cortisol et la régulation du HRV au fil des semaines. Preuve de la gestion du stress.
                        </p>
                    </div>

                    {/* 4. Certificat VIA */}
                    <div className="bg-[#1B263B] p-8 rounded-3xl shadow-lg border border-[#1B263B] text-white flex flex-col relative overflow-hidden">
                        <Award className="absolute -bottom-4 -right-4 text-white/5 w-48 h-48" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="bg-[#C5A059] p-3 rounded-xl text-white">
                                <Award size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-serif text-white">Certificat de Forces</h3>
                        </div>
                        <div className="flex-grow space-y-2 mb-6 relative z-10">
                            {["COURAGE", "PERSÉVÉRANCE", "INTELLIGENCE SOCIALE", "LEADERSHIP", "ESPOIR"].map((force, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0 text-sm tracking-widest font-bold">
                                    <span>0{i + 1}. {force}</span>
                                    <StarRating />
                                </div>
                            ))}
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed relative z-10 border-t border-white/10 pt-4">
                            Badge visuel des 5 forces dominantes. Transforme l'identité de l'enfant : il n'est plus "moyen", il est "puissant".
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

const StarRating = () => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>)}
    </div>
);

export default EliteDashboard;
