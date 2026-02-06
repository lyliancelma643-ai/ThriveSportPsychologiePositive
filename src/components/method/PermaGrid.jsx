import React from 'react';
import { Smile, Activity, Users, BookOpen, Award } from 'lucide-react';

const PermaGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
                { letter: 'P', title: 'Émotions Positives', desc: 'Le plaisir libère de la dopamine, accélérant l\'apprentissage moteur. Un enfant heureux apprend 3x plus vite qu\'un enfant anxieux.', icon: <Smile />, color: '#8F9779' },
                { letter: 'E', title: 'Engagement (Flow)', desc: 'Nous structurons les défis pour atteindre l\'état de "Flow", où la concentration est totale et le temps disparaît.', icon: <Activity />, color: '#7B8466' },
                { letter: 'R', title: 'Relations Positives', desc: 'Le lien mentor-athlète est la base de la sécurité affective. Savoir qu\'il est soutenu inconditionnellement libère l\'enfant de la peur de l\'erreur.', icon: <Users />, color: '#687153' },
                { letter: 'M', title: 'Meaning (Sens)', desc: 'Chaque exercice a un "pourquoi". Nous connectons l\'effort aux valeurs de l\'enfant (entraide, courage) pour donner du sens à la fatigue.', icon: <BookOpen />, color: '#555E40' },
                { letter: 'A', title: 'Accomplissement', desc: 'La confiance ne se donne pas, elle se construit par des victoires. Nous créons des "micro-succès" à chaque séance pour bâtir l\'auto-efficacité.', icon: <Award />, color: '#424B2D' }
            ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform group">
                    <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-serif font-bold shadow-md" style={{ backgroundColor: item.color }}>
                            {item.letter}
                        </div>
                        <div className="text-gray-300 group-hover:text-[#C5A059] transition-colors">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1B263B] mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default PermaGrid;
