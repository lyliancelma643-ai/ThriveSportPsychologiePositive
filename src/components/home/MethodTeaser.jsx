import React from 'react';
import { ArrowRight, Brain, Target, Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const MethodTeaser = ({ setCurrentPage }) => {
    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="La Méthode Thrive : Performance par le Bonheur"
                    subtitle="Une approche validée scientifiquement qui transforme l'attitude, sur le terrain et à la maison."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform">
                        <div className="w-14 h-14 bg-[#8F9779]/10 rounded-xl flex items-center justify-center text-[#8F9779] mb-6">
                            <Brain size={30} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-4">Modèle PERMA</h3>
                        <p className="text-gray-600">Structure de psychologie positive validée par l'Université de Montréal pour optimiser le bien-être durable.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform">
                        <div className="w-14 h-14 bg-[#C5A059]/10 rounded-xl flex items-center justify-center text-[#C5A059] mb-6">
                            <Target size={30} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-4">Progression Visible</h3>
                        <p className="text-gray-600">La règle d'or : On ne corrige pas par la critique, mais par l'addition de compétences et le renforcement positif.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform">
                        <div className="w-14 h-14 bg-[#1B263B]/10 rounded-xl flex items-center justify-center text-[#1B263B] mb-6">
                            <Users size={30} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-4">Sécurité Affective</h3>
                        <p className="text-gray-600">Un lien mentor-enfant inconditionnel pour créer un environnement où l'erreur est permise et formatrice.</p>
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
