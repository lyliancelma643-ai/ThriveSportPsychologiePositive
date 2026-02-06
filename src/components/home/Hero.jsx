import React from 'react';
import { ChevronRight } from 'lucide-react';
import heroVisual from '../../assets/hero-visual.jpg';

const Hero = ({ setCurrentPage, setBookingStep }) => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Background Blob/Gradient for depth */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f8f9fa] rounded-l-[10rem] z-0 transform translate-x-1/3"></div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* LEFTSIDE: Text Content */}
                    <div className="lg:col-span-5 max-w-2xl relative z-20 lg:-mt-12">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8F9779]/10 border border-[#8F9779]/20 text-[#8F9779] text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-[#8F9779]"></span>
                            <span>Tutorat Sportif Premium - Montréal</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif text-[#1B263B] leading-tight mb-6">
                            Transformez le doute de votre enfant en <span className="text-[#8F9779]">compétence durable.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Le premier service de Tutorat Sportif à Montréal supervisé par la science de la psychologie positive. Nous ne coachons pas des équipes, nous mentorons l'individu.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={() => { setBookingStep('calendar'); setCurrentPage('booking'); }}
                                className="bg-[#1B263B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#253550] transition-all flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                Réserver une évaluation <ChevronRight className="ml-2" size={20} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHTSIDE: Image */}
                    <div className="relative lg:col-span-7 lg:-mr-12 lg:ml-8 lg:-mt-24 transform scale-110 z-10 animate-float">
                        <div className="absolute -inset-4 bg-[#C5A059]/20 rounded-[2.5rem] blur-xl animate-pulse-slow"></div>
                        <img
                            src={heroVisual}
                            alt="Thrive Sport Psychology - Athlètes en action"
                            className="relative rounded-[2.5rem] shadow-2xl border-4 border-white transition-all duration-700"
                        />
                        {/* Float Badge 1 (Bottom Left) - Moves gently up/down */}
                        <div className="absolute bottom-16 -left-8 animate-float-slow z-30">
                            <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center hover:scale-110 hover:-rotate-3 transition-transform duration-300 cursor-pointer">
                                <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600 font-bold">✓</div>
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase">Résultat prouvé</div>
                                    <div className="font-serif font-bold text-[#1B263B]">+31% Performance</div>
                                </div>
                            </div>
                        </div>

                        {/* Float Badge 2 (Top Right) - Moves reverse (down/up) */}
                        <div className="absolute top-12 -right-8 animate-float-reverse lg:block hidden z-20">
                            <div className="bg-white p-3 rounded-2xl shadow-lg flex items-center hover:scale-110 hover:rotate-3 transition-transform duration-300 cursor-pointer">
                                <div className="bg-amber-100 p-2 rounded-full mr-3 text-amber-600">💡</div>
                                <div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Potentiel</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">3x Plus de Créativité</div>
                                </div>
                            </div>
                        </div>

                        {/* Float Badge 3 (Middle Right) - Slower floating */}
                        <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 animate-float-slower lg:block hidden z-20">
                            <div className="bg-white p-3 rounded-2xl shadow-lg flex items-center hover:scale-110 hover:-rotate-3 transition-transform duration-300 cursor-pointer">
                                <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-500">📚</div>
                                <div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Rigueur</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">120+ Études Analysées</div>
                                </div>
                            </div>
                        </div>

                        {/* Float Badge 4 (Top Left) - Standard Float */}
                        <div className="absolute top-20 -left-10 animate-float lg:block hidden z-20">
                            <div className="bg-white p-3 rounded-2xl shadow-lg flex items-center hover:scale-110 hover:rotate-3 transition-transform duration-300 cursor-pointer">
                                <div className="bg-purple-100 p-2 rounded-full mr-3 text-purple-500">🎓</div>
                                <div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">École</div>
                                    <div className="font-serif font-bold text-[#1B263B] text-sm">+11% Réussite Scolaire</div>
                                </div>
                            </div>
                        </div>

                        {/* Float Badge 5 (Bottom Right) - Delayed Float */}
                        <div className="absolute bottom-20 -right-6 animate-float-delayed lg:block hidden z-30">
                            <div className="bg-white p-3 rounded-2xl shadow-lg flex items-center hover:scale-110 hover:-rotate-3 transition-transform duration-300 cursor-pointer">
                                <div className="bg-teal-100 p-2 rounded-full mr-3 text-teal-500">😌</div>
                                <div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Bien-être</div>
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
