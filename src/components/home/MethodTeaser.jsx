import React from 'react';
import { ArrowRight, Brain, Target, Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import soccerPhoto from '../../assets/photo-soccer.png';

const MethodTeaser = ({ setCurrentPage }) => {
    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="La Méthode Thrive : Performance par le Bonheur"
                    subtitle="Une approche validée scientifiquement qui transforme l'attitude, sur le terrain et à la maison."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">

                    {/* Left Column: Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:-translate-y-1 transition-transform flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#8F9779]/10 rounded-xl flex items-center justify-center text-[#8F9779] shrink-0">
                                <Brain size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-serif font-bold text-[#1B263B] mb-1">Modèle PERMA</h3>
                                <p className="text-sm text-gray-600">Structure de psychologie positive validée par l'Université de Montréal pour optimiser le bien-être durable.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:-translate-y-1 transition-transform flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#C5A059]/10 rounded-xl flex items-center justify-center text-[#C5A059] shrink-0">
                                <Target size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-serif font-bold text-[#1B263B] mb-1">Progression Visible</h3>
                                <p className="text-sm text-gray-600">La règle d'or : On ne corrige pas par la critique, mais par l'addition de compétences et le renforcement positif.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:-translate-y-1 transition-transform flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#1B263B]/10 rounded-xl flex items-center justify-center text-[#1B263B] shrink-0">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-serif font-bold text-[#1B263B] mb-1">Sécurité Affective</h3>
                                <p className="text-sm text-gray-600">Un lien mentor-enfant inconditionnel pour créer un environnement où l'erreur est permise et formatrice.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                        <img
                            src={soccerPhoto}
                            alt="Coach Thrive en action"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B]/80 to-transparent flex items-end p-8">
                            <p className="text-white font-serif text-xl italic">"Le sport est le meilleur laboratoire pour la vie."</p>
                        </div>
                    </div>

                </div>

                <div className="text-center">
                    <button
                        onClick={() => setCurrentPage('methode')}
                        className="inline-flex items-center text-[#1B263B] font-bold text-lg hover:underline underline-offset-4"
                    >
                        Voir comment nous mesurons le progrès <ArrowRight className="ml-2" size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MethodTeaser;
