import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Faq = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Questions Fréquentes" />
                <div className="space-y-4">
                    {[
                        { q: "Mon enfant est débutant, est-ce pour lui ?", a: "Absolument. Thrive est idéal pour bâtir les bases techniques et la confiance dès le début, évitant ainsi de mauvaises habitudes." },
                        { q: "Où se déroulent les séances ?", a: "Au plus proche de chez vous, dans les arénas ou sur les lieux d'entraînement ouverts." },
                        { q: "Les parents doivent-ils être présents ?", a: "Pour les 2-5 ans, oui. Pour les plus grands, nous vous encourageons à assister aux 5 dernières minutes pour le bilan de fin de séance." },
                        { q: "Puis-je utiliser mes assurances ?", a: "Bien que nos mentors soient formés en psychologie, le service est facturé comme du tutorat sportif. Vérifiez avec votre assureur pour la catégorie 'Activité physique' ou 'Bien-être'." }
                    ].map((item, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                            >
                                <span className="font-bold text-[#1B263B]">{item.q}</span>
                                {openFaq === i ? <ChevronRight className="rotate-90 transition-transform" /> : <ChevronRight className="transition-transform" />}
                            </button>
                            {openFaq === i && (
                                <div className="p-6 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
