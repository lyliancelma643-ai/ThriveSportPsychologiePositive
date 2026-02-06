import React from 'react';
import { Activity, Brain, Shield, BarChart3, Heart, Zap } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const ScorecardLevels = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Le Scorecard THRIVE"
                    subtitle="L'Ingénierie de la Transformation : Transformer l'intangible en actif mesurable."
                />

                <div className="space-y-12">
                    {/* Strate I */}
                    <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            <div className="bg-[#1B263B] text-white p-6 rounded-2xl shrink-0">
                                <Activity size={32} />
                                <div className="mt-2 font-serif font-bold text-2xl">01</div>
                                <div className="text-xs uppercase tracking-widest text-[#C5A059] mt-1">Strate I</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-4">Le Check-up Biométrique <span className="text-lg font-sans font-normal text-gray-500 ml-2">(Suivi Systématique)</span></h3>
                                <p className="text-gray-600 mb-8 max-w-3xl">
                                    Une analyse physiologique à chaque séance pour adapter l'intensité. Nous ne forçons pas l'apprentissage sur un système nerveux fatigué.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-[#1B263B] mb-2 flex items-center"><Heart size={16} className="text-[#C5A059] mr-2" /> HRV (Variabilité Cardiaque)</h4>
                                        <p className="text-sm text-gray-500">Mesure la "Readiness". Un HRV bas signale une fatigue invisible ; nous adaptons la séance pour protéger l'estime de soi.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-[#1B263B] mb-2 flex items-center"><Brain size={16} className="text-[#C5A059] mr-2" /> DALDA (Indice de Charge)</h4>
                                        <p className="text-sm text-gray-500">Évaluation du sommeil, de l'humeur et du stress global (école, famille, sport). L'enfant est pris en compte dans sa globalité.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-[#1B263B] mb-2 flex items-center"><Zap size={16} className="text-[#C5A059] mr-2" /> RPE (Perception de l'Effort)</h4>
                                        <p className="text-sm text-gray-500">Détecte les blocages mentaux : si l'effort perçu est de 9/10 pour un exercice simple, nous intervenons immédiatement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Strate II */}
                    <div className="bg-[#1B263B] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Shield size={400} />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
                            <div className="bg-[#C5A059] text-white p-6 rounded-2xl shrink-0">
                                <Shield size={32} />
                                <div className="mt-2 font-serif font-bold text-2xl">02</div>
                                <div className="text-xs uppercase tracking-widest text-[#1B263B] mt-1 font-bold">Strate II</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-4">L'ADN de la Résilience <span className="text-lg font-sans font-normal text-white/60 ml-2">(Diagnostics S1 & S6)</span></h3>
                                <p className="text-white/80 mb-8 max-w-3xl">
                                    La preuve tangible du changement de personnalité sportive. Nous mesurons le passage de "l'évitement" à la "proactivité".
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <h4 className="font-bold text-[#C5A059] mb-2">SMTQ (Dureté Mentale)</h4>
                                        <p className="text-sm text-white/70">Mesure les 4C : Confiance, Contrôle, Challenge, Constance. On sort l'enfant de l'ombre.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <h4 className="font-bold text-[#C5A059] mb-2">PERMA-Profiler</h4>
                                        <p className="text-sm text-white/70">La mesure du "Flourishing" (Épanouissement). Validation scientifique que l'enfant est heureux, engagé et accompli.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <h4 className="font-bold text-[#C5A059] mb-2">VIA Youth (Forces)</h4>
                                        <p className="text-sm text-white/70">Change le narratif : on ne parle plus de ce qu'il faut corriger, mais de ses "forces signatures" puissantes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Strate III */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border-2 border-[#1B263B] shadow-xl">
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            <div className="bg-gray-100 text-[#1B263B] p-6 rounded-2xl shrink-0">
                                <BarChart3 size={32} />
                                <div className="mt-2 font-serif font-bold text-2xl">03</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Strate III</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-4">La Maîtrise Invisible <span className="text-lg font-sans font-normal text-gray-500 ml-2">(Mesures de Transition)</span></h3>
                                <p className="text-gray-600 mb-8 max-w-3xl">
                                    Prouver que les valeurs internes se traduisent par des actions externes sur la glace.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <h4 className="font-bold text-[#1B263B] mb-2">SMS-II (Motivation)</h4>
                                        <div className="h-1 w-12 bg-[#8F9779] mb-3"></div>
                                        <p className="text-sm text-gray-600">Prouve que l'enfant joue désormais pour lui-même (intrinsèque) et non par peur de décevoir.</p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <h4 className="font-bold text-[#1B263B] mb-2">ASES (Auto-efficacité)</h4>
                                        <div className="h-1 w-12 bg-[#8F9779] mb-3"></div>
                                        <p className="text-sm text-gray-600">Mesure chirurgicale de la confiance sur un geste technique. La confiance n'est plus floue, c'est une certitude.</p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-gray-50">
                                        <h4 className="font-bold text-[#1B263B] mb-2">BARS / BOS</h4>
                                        <div className="h-1 w-12 bg-[#8F9779] mb-3"></div>
                                        <p className="text-sm text-gray-600">Le "Standard Or". Observation de comportements concrets (ex: encourager un coéquipier après une erreur).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScorecardLevels;
