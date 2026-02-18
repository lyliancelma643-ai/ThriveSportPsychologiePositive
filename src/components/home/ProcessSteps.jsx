export const ProcessSteps = () => {
    const steps = [
        {
            number: "01",
            title: "L'Évaluation",
            desc: "Analyse complète du profil : tests psychométriques et bilan physique pour cibler les besoins."
        },
        {
            number: "02",
            title: "L'Action",
            desc: "Séances sur le terrain : exercices techniques combinés à des défis mentaux adaptés."
        },
        {
            number: "03",
            title: "Le Bilan",
            desc: "Validation des acquis : rapport vidéo et feedback positif pour ancrer la progression."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif text-[#1B263B] mb-4">Notre Méthode en 3 Étapes</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Un processus structuré pour transformer le potentiel en performance réelle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="text-5xl font-serif text-[#E5E7EB] absolute top-4 right-4 font-bold">
                                {step.number}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-[#1B263B] mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
