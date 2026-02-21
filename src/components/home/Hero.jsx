import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import heroVisual from '../../assets/Design sans titre.png';

const Hero = ({ setBookingStep }) => {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Background Blob/Gradient for depth */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f8f9fa] rounded-l-[10rem] z-0 transform translate-x-1/3"></div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* LEFTSIDE: Text Content */}
                    <div className="lg:col-span-5 max-w-2xl relative z-20 lg:-mt-12">

                        <h1 className="text-5xl md:text-7xl font-serif text-[#1B263B] leading-tight mb-6">
                            <span className="font-bold italic">Deviens le leader du jeu.</span> <span className="text-[#8F9779] text-4xl md:text-6xl block mt-2">Nous construisons ton estime de soi durable.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Transformez le doute en <span className="relative inline-block px-1">compétence réelle<span className="absolute bottom-1 left-0 w-full h-3 bg-[#C5A059]/30 -z-10 -rotate-1"></span></span>. Un tutorat sportif unique à Montréal qui allie <span className="font-bold text-[#1B263B]">performance technique</span> et <span className="font-bold text-[#1B263B]">psychologie positive</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={() => { navigate('/evaluation'); }}
                                className="bg-[#1B263B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#253550] transition-all flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                Réserver une séance d'évaluation offerte <ChevronRight className="ml-2" size={20} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHTSIDE: Image */}
                    <div className="relative lg:col-span-7 lg:-mr-12 lg:ml-8 lg:-mt-24 transform scale-110 z-10 animate-float">
                        <div className="absolute -inset-4 bg-[#C5A059]/20 rounded-[2.5rem] blur-xl animate-pulse-slow"></div>
                        <img
                            src={heroVisual}
                            alt="Thrive Sport Positive - Athlètes en action"
                            className="relative rounded-[2.5rem] shadow-2xl border-4 border-white transition-all duration-700"
                        />

                        {/* 
                            PREMIUM FLOATING BADGES 
                            Style: Glassmorphism + Soft Shadows + Serif Typography
                            Positioning: Adjusted to prevent overlapping
                        */}

                        {/* Badge 1 (Bottom Left) - Resultat Prouve */}
                        <div className="absolute -bottom-4 -left-16 animate-float-slow z-30">
                            <div className="bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl shadow-blue-900/10 border border-white/40 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default group">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-2.5 rounded-2xl text-green-600 shadow-inner group-hover:scale-110 transition-transform">
                                    <span className="text-lg">✓</span>
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Résultat prouvé</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-lg">+31% Performance</div>
                                </div>
                            </div>
                        </div>

                        {/* Badge 2 (Top Right) - Potentiel */}
                        <div className="absolute top-8 -right-16 animate-float-reverse lg:block hidden z-20">
                            <div className="bg-white/80 backdrop-blur-lg p-3 rounded-2xl shadow-xl shadow-amber-900/5 border border-white/50 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default">
                                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-2 rounded-xl text-amber-600 shadow-sm">
                                    <span className="text-base">💡</span>
                                </div>
                                <div>
                                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Potentiel</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">3x Plus de Créativité</div>
                                </div>
                            </div>
                        </div>

                        {/* Badge 3 (Middle Right) - Rigueur */}
                        <div className="absolute top-1/2 -right-24 transform -translate-y-1/2 animate-float-slower lg:block hidden z-20">
                            <div className="bg-white/80 backdrop-blur-lg p-3 rounded-2xl shadow-xl shadow-blue-900/5 border border-white/50 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default delay-100">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-xl text-blue-500 shadow-sm">
                                    <span className="text-base">📚</span>
                                </div>
                                <div>
                                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Rigueur</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">120+ Études Analysées</div>
                                </div>
                            </div>
                        </div>

                        {/* Badge 4 (Top Left) - Ecole */}
                        <div className="absolute top-12 -left-20 animate-float lg:block hidden z-20">
                            <div className="bg-white/80 backdrop-blur-lg p-3 rounded-2xl shadow-xl shadow-purple-900/5 border border-white/50 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default delay-75">
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-xl text-purple-500 shadow-sm">
                                    <span className="text-base">🎓</span>
                                </div>
                                <div>
                                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">École</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">+11% Réussite Scolaire</div>
                                </div>
                            </div>
                        </div>

                        {/* Badge 5 (Bottom Right) - Bien-etre */}
                        <div className="absolute bottom-12 -right-12 animate-float-delayed lg:block hidden z-30">
                            <div className="bg-white/80 backdrop-blur-lg p-3 rounded-2xl shadow-xl shadow-teal-900/5 border border-white/50 flex items-center gap-3 hover:scale-105 transition-all duration-500 cursor-default delay-150">
                                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-2 rounded-xl text-teal-500 shadow-sm">
                                    <span className="text-base">😌</span>
                                </div>
                                <div>
                                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Bien-être</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">Réduction des Troubles</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
