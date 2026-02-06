import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Testimonials = () => {
    return (
        <section className="py-24 bg-[#1B263B] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute -top-10 -left-10 text-white/5 font-serif text-[200px] leading-none select-none">"</div>
                <SectionHeader
                    title="Ce que disent les parents investis"
                    subtitle="Plus qu'une amélioration technique, une transformation comportementale."
                    light
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C5A059" className="text-[#C5A059]" />)}
                        </div>
                        <p className="text-xl italic mb-8 font-serif">
                            "Depuis qu'il travaille avec Thrive, mon fils ne baisse plus les bras. Non seulement il est plus agile au hockey, mais il a commencé à ranger sa chambre sans qu'on lui demande et ose lever la main en classe."
                        </p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-gray-400 mr-4 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?u=parent1" alt="Parent" />
                            </div>
                            <div>
                                <p className="font-bold">Marie-Hélène L.</p>
                                <p className="text-white/60 text-sm">Parent d'un athlète (8 ans) - Outremont</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C5A059" className="text-[#C5A059]" />)}
                        </div>
                        <p className="text-xl italic mb-8 font-serif">
                            "Enfin une approche qui comprend la psychologie des enfants. Les rapports après chaque séance nous aident à mieux communiquer avec notre fille sur ses émotions. C'est le meilleur investissement pour son avenir."
                        </p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-gray-400 mr-4 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?u=parent2" alt="Parent" />
                            </div>
                            <div>
                                <p className="font-bold">Jean-Philippe R.</p>
                                <p className="text-white/60 text-sm">Parent d'une athlète (12 ans) - Ville Mont-Royal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
