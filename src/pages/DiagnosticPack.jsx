import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import { 
    ArrowRight, CheckCircle2, Shield, Search, Lightbulb, 
    FileText, Crosshair, ChevronDown, Compass, Target, 
    BrainCircuit, LineChart, FileCheck, Layers
} from 'lucide-react';

// --- Scroll Reveal Utility Component ---
const Reveal = ({ children, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// --- FAQ Component ---
const FaqItem = ({ q, a, open, onToggle }) => (
    <div className="border-b border-gray-200/50 last:border-0">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between py-6 text-left focus-visible:outline-none"
        >
            <span className="font-serif font-medium text-[#1B263B] text-lg lg:text-xl pr-8">{q}</span>
            <span className={`shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-500 ${open ? 'rotate-180 bg-[#1B263B] text-white border-[#1B263B]' : 'text-gray-400'}`}>
                <ChevronDown size={16} />
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="pb-8 text-gray-600 leading-relaxed text-base lg:text-lg max-w-3xl">
                {a}
            </p>
        </div>
    </div>
);

// --- Main Page Component ---
export default function DiagnosticPack() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goEval = () => { navigate('/evaluation'); window.scrollTo(0, 0); };
    const goPricing = () => { navigate('/prix'); window.scrollTo(0, 0); };

    return (
        <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900 selection:bg-[#94A3B8]/20">
            <SEO 
                title="Pack Diagnostic | Évaluation Mentale Sans Pression — THRIVE"
                description="Une première rencontre intelligente pour comprendre votre jeune athlète avant de s'engager. 2 séances, un rapport PDF clair, et aucune pression."
                url="https://thrivesportpositive.com/pack/diagnostic"
            />

            {/* 1. HERO CINÉMATIQUE */}
            <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden bg-[#1B263B]">
                {/* Background effects (Clean, Clinical, Slate theme) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#94A3B8]/40 via-[#1B263B]/0 to-transparent" />
                    <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#cbd5e1]/10 rounded-full blur-[100px] -translate-x-1/2" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#94A3B8]/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
                    <Reveal delay={100}>
                        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-[#cbd5e1] text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full mb-10">
                            <Shield size={14} />
                            La première étape THRIVE
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6">
                            DIAGNOSTIC
                        </h1>
                    </Reveal>

                    <Reveal delay={300}>
                        <p className="text-2xl md:text-3xl text-white/90 font-medium mb-12 flex items-center justify-center gap-4">
                            <span>2 séances</span>
                            <span className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full"></span>
                            <span>Rapport PDF</span>
                        </p>
                    </Reveal>



                    <Reveal delay={500}>
                        <p className="text-xl text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed mb-14 font-serif">
                            Une première rencontre intelligente, sans pression, pour comprendre votre enfant avant de s’engager.
                        </p>
                    </Reveal>

                    <Reveal delay={600} className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
                        <button
                            onClick={goEval}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#1B263B] px-10 py-4.5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        >
                            Commencer par le Diagnostic <ArrowRight size={20} />
                        </button>
                        <a
                            href="#inclus"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                        >
                            Voir ce que comprend le Diagnostic
                        </a>
                    </Reveal>

                    {/* Quick proofs */}
                    <Reveal delay={800} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10">
                        {[
                            { label: "2 séances", sub: "Individuelles" },
                            { label: "Rapport PDF", sub: "Profil complet" },
                            { label: "Évaluation", sub: "Forces & Blocages" },
                            { label: "Déductible", sub: "Jusqu'à 397 $ du futur pack" }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <p className="text-white font-bold text-lg mb-1">{item.label}</p>
                                <p className="text-white/40 text-xs uppercase tracking-widest">{item.sub}</p>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </section>

            {/* 2. SECTION "POUR QUI" */}
            <section className="py-32 px-4 bg-white relative">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#94A3B8] mb-4 text-center">Reconnaissance immédiate</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-20 text-center max-w-4xl mx-auto leading-tight">
                            À qui s'adresse le Diagnostic ?
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
                        {[
                            {
                                title: "Vous sentez un frein",
                                text: "Vous sentez que quelque chose bloque ou ralentit votre enfant, mais vous avez besoin d'une évaluation claire avant d'agir."
                            },
                            {
                                title: "Comprendre avant de choisir",
                                text: "Vous voulez comprendre ses besoins réels avant de décider quel pack ou quel type de suivi sera le plus pertinent pour lui."
                            },
                            {
                                title: "Besoin d'un regard extérieur",
                                text: "Vous cherchez un point de vue professionnel, neutre et structuré pour valider vos impressions de parent."
                            },
                            {
                                title: "Avancer sans pression",
                                text: "Vous souhaitez faire un premier pas utile et intelligent, sans vous engager immédiatement dans un programme long."
                            }
                        ].map((block, i) => (
                            <Reveal key={i} delay={i * 100} className="bg-[#fafafa] border border-gray-100 p-10 rounded-[2rem] flex flex-col hover:-translate-y-1 transition-transform">
                                <div className="w-1.5 h-10 bg-[#94A3B8] rounded-full mb-6" />
                                <h3 className="text-2xl font-bold text-[#1B263B] mb-4">{block.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{block.text}</p>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={400} className="text-center">
                        <p className="inline-block bg-[#1B263B] text-white px-8 py-4 rounded-full font-serif text-xl shadow-xl">
                            Le Diagnostic est pensé pour les familles qui veulent d’abord comprendre juste.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* 3. SECTION "CE QUE LE DIAGNOSTIC VOUS APPORTE" */}
            <section className="py-32 px-4 bg-[#f8fafc]">
                <div className="max-w-5xl mx-auto text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-20 leading-tight max-w-3xl mx-auto">
                            Transformez l'incertitude en clarté.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        {[
                            {
                                icon: <Lightbulb size={32} />,
                                title: "Plus de clarté",
                                desc: "Une vision objective et structurée du profil mental et comportemental actuel de votre enfant."
                            },
                            {
                                icon: <Target size={32} />,
                                title: "Identification des forces",
                                desc: "Mise en évidence des qualités et ressources sur lesquelles il peut déjà s'appuyer pour performer."
                            },
                            {
                                icon: <Crosshair size={32} />,
                                title: "Lecture des blocages",
                                desc: "Compréhension claire des zones de friction, des peurs ou des habitudes qui le limitent."
                            },
                            {
                                icon: <Compass size={32} />,
                                title: "Base de décision",
                                desc: "Les éléments concrets dont vous avez besoin pour choisir sereinement la suite de son développement."
                            }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 100} className="flex gap-6">
                                <div className="text-[#94A3B8] shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#1B263B] mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SECTION TIMELINE 2 SÉANCES */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-20">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#94A3B8] mb-4">Format</h2>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] leading-tight">
                            En 2 séances, une première lecture structurée.
                        </h3>
                    </Reveal>

                    <div className="relative border-l-2 border-gray-100 ml-4 md:ml-8 space-y-16 pb-8">
                        <Reveal delay={100} className="relative pl-10 md:pl-16">
                            <div className="absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-white border-4 border-[#1B263B] flex items-center justify-center shadow-sm" />
                            <div className="text-[#94A3B8] font-bold uppercase tracking-widest text-sm mb-2">Séance 1</div>
                            <h4 className="text-2xl font-bold text-[#1B263B] mb-3">Observation et lecture</h4>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Première rencontre avec l'athlète. Compréhension de son contexte sportif, de sa perception de la performance et repérage initial de ses modes de fonctionnement.
                            </p>
                        </Reveal>

                        <Reveal delay={200} className="relative pl-10 md:pl-16">
                            <div className="absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-white border-4 border-[#1B263B] flex items-center justify-center shadow-sm" />
                            <div className="text-[#94A3B8] font-bold uppercase tracking-widest text-sm mb-2">Séance 2</div>
                            <h4 className="text-2xl font-bold text-[#1B263B] mb-3">Approfondissement et clarification</h4>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Tests de situations, clarification des constats de la première séance et consolidation des observations sur ses forces et blocages.
                            </p>
                        </Reveal>

                        <Reveal delay={300} className="relative pl-10 md:pl-16">
                            <div className="absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-[#1B263B] flex items-center justify-center shadow-md">
                                <CheckCircle2 size={16} className="text-white" />
                            </div>
                            <div className="text-[#94A3B8] font-bold uppercase tracking-widest text-sm mb-2">Après</div>
                            <h4 className="text-2xl font-bold text-[#1B263B] mb-3">Rapport PDF</h4>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Livraison du profil complet pour les parents, offrant une grille de lecture nette pour les prochaines étapes.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 5. LE RAPPORT PDF */}
            <section className="py-32 px-4 bg-[#1B263B] text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#94A3B8] to-transparent blur-[100px]" />

                <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <Reveal className="md:w-1/2">
                        <FileText size={48} className="text-[#94A3B8] mb-8" />
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Un rapport PDF clair et utile.
                        </h2>
                        <p className="text-xl text-white/70 mb-8 leading-relaxed">
                            À l'issue des deux séances, vous ne restez pas dans le flou. Vous recevez un document de synthèse premium.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Synthèse claire et lisible.",
                                "Profil de l'athlète documenté.",
                                "Points d'appui à valoriser.",
                                "Blocages à comprendre.",
                                "Base concrète pour la suite."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/90">
                                    <CheckCircle2 size={24} className="text-[#94A3B8] shrink-0" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={200} className="md:w-1/2 w-full">
                        <div className="aspect-[3/4] max-w-sm mx-auto bg-white rounded-lg p-8 shadow-2xl relative rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="w-12 h-2 bg-[#1B263B] mb-8" />
                            <div className="text-4xl font-serif font-bold text-[#1B263B] mb-2">Profil Athletique</div>
                            <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-10">Synthèse Diagnostic</div>
                            
                            <div className="space-y-4 mb-10">
                                <div className="w-full h-4 bg-gray-100 rounded" />
                                <div className="w-5/6 h-4 bg-gray-100 rounded" />
                                <div className="w-4/6 h-4 bg-gray-100 rounded" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                    <div className="w-6 h-6 rounded-full bg-[#1B263B]/10 mb-2" />
                                    <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                                    <div className="w-2/3 h-2 bg-gray-200 rounded" />
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                    <div className="w-6 h-6 rounded-full bg-[#1B263B]/10 mb-2" />
                                    <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                                    <div className="w-1/2 h-2 bg-gray-200 rounded" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 6. FORCES ET BLOCAGES */}
            <section className="py-32 px-4 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <Reveal className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] leading-tight max-w-3xl mx-auto">
                            Une double lecture sans jargon.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Reveal delay={100} className="bg-gray-50 rounded-[2rem] p-10 md:p-14 border border-gray-100">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#1B263B] mb-8">
                                <LineChart size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1B263B] mb-4">Forces</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                L'évaluation met en lumière ce sur quoi votre enfant peut déjà s'appuyer. Nous identifions ses ressources naturelles, sa résilience ou son esprit d'analyse, afin de capitaliser sur ses atouts plutôt que de ne regarder que ce qui manque.
                            </p>
                        </Reveal>

                        <Reveal delay={200} className="bg-gray-50 rounded-[2rem] p-10 md:p-14 border border-gray-100">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#1B263B] mb-8">
                                <Layers size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1B263B] mb-4">Blocages</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Nous identifions clairement ce qui le freine, le brouille ou le ralentit. Qu'il s'agisse de gestion de l'erreur, de pression ou de perte de plaisir, ces frictions sont isolées et expliquées en termes simples et humains.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 7. UN PREMIER PAS SANS RISQUE */}
            <section className="py-24 px-4 bg-[#f8fafc]">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <Shield size={48} className="mx-auto text-[#94A3B8] mb-8" />
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-8">
                            Un premier pas intelligent.
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-[2rem] p-10 md:p-16 shadow-sm">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-serif italic mb-10">
                                « Vous commencez par comprendre. Puis, si vous poursuivez avec THRIVE, cet investissement vient alléger la suite. »
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-left">
                                <div className="bg-gray-50 px-6 py-4 rounded-xl border border-gray-100 w-full sm:w-auto">
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Aujourd'hui</div>
                                    <div className="font-bold text-[#1B263B] text-xl">397 $ investis</div>
                                </div>
                                <ArrowRight size={24} className="text-gray-300 hidden sm:block" />
                                <div className="bg-[#1B263B] px-6 py-4 rounded-xl border border-[#1B263B] w-full sm:w-auto text-white">
                                    <div className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1">Plus tard</div>
                                    <div className="font-bold text-white text-xl">Jusqu'à 397 $ déduits</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-8">
                                *Le montant du diagnostic est déduit du prix du pack (Performance) sélectionné par la suite, et une réduction s'applique pour les autres.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 8. TOUT CE QUI EST INCLUS */}
            <section id="inclus" className="py-32 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1B263B]">Synthèse du Diagnostic</h2>
                    </Reveal>

                    <Reveal delay={100} className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">
                        {[
                            { title: "Rencontres", desc: "2 séances individuelles de 1h avec l'athlète." },
                            { title: "Livrable", desc: "Rapport PDF de profil complet remis aux parents." },
                            { title: "Évaluation", desc: "Analyse structurée des forces et des blocages actuels." },
                            { title: "Finalité", desc: "Base claire de décision pour choisir la suite en toute connaissance de cause." },
                            { title: "Avantage", desc: "Jusqu'à 397 $ déduits du futur pack THRIVE sélectionné." }
                        ].map((row, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-center p-6 sm:p-8 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                <div className="sm:w-1/3 font-bold text-[#1B263B] mb-2 sm:mb-0 pr-4">
                                    {row.title}
                                </div>
                                <div className="sm:w-2/3 text-gray-600">
                                    {row.desc}
                                </div>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </section>

            {/* 9. CE QUE LE DIAGNOSTIC N'EST PAS */}
            <section className="py-24 px-4 bg-[#1B263B] text-white">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <h2 className="text-2xl font-serif font-bold mb-10 text-center">Ce que ce n'est pas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {[
                                "Ce n'est pas encore le programme complet THRIVE.",
                                "Ce n'est pas une évaluation ou un suivi clinique.",
                                "Ce n'est pas un engagement long."
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 text-white/50">×</div>
                                    <p className="text-white/80">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-medium font-serif italic text-white/90">
                                « C’est une première étape sérieuse pour comprendre avant d’aller plus loin. »
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 10. SECTION PRIX */}
            <section className="py-32 px-4 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <p className="text-[#94A3B8] font-bold uppercase tracking-widest text-sm mb-6">Tarif</p>
                        <div className="flex justify-center items-baseline gap-3 mb-4">
                            <span className="text-7xl md:text-8xl font-serif font-bold text-[#1B263B] tracking-tight">397</span>
                            <span className="text-3xl font-bold text-gray-400">$</span>
                        </div>
                        <div className="text-gray-500 font-medium mb-10">Investissement unique <span className="opacity-50 mx-2">|</span> soit 199$/heure</div>
                        
                        <div className="inline-block bg-gray-50 border border-gray-100 rounded-xl px-6 py-3 mb-10">
                            <span className="text-[#1B263B] font-bold">Jusqu'à 397 $ déduits</span>
                            <span className="text-gray-500 ml-2">du futur pack sélectionné</span>
                        </div>

                        <div>
                            <button
                                onClick={goEval}
                                className="inline-flex items-center justify-center gap-2 bg-[#1B263B] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#2c3e5a] transition-all hover:-translate-y-1 shadow-2xl"
                            >
                                Commencer par le Diagnostic <ArrowRight size={20} />
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 11. FAQ PREMIUM */}
            <section className="py-32 px-4 bg-[#fafafa]">
                <div className="max-w-3xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1B263B]">Questions fréquentes</h2>
                    </Reveal>

                    <Reveal delay={200} className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
                        {[
                            {
                                q: "À quoi sert exactement le Diagnostic ?",
                                a: "Il sert à faire une première évaluation neutre et structurée. En deux séances, nous identifions comment votre enfant perçoit sa performance, quelles sont ses forces mentales et où se situent ses blocages."
                            },
                            {
                                q: "Est-ce suffisant si je ne suis pas encore prêt à choisir un pack ?",
                                a: "Oui, c'est précisément le but. Le Diagnostic vous donne des éléments concrets sans vous engager dans un accompagnement de plusieurs mois."
                            },
                            {
                                q: "Qu'est-ce que je reçois à la fin ?",
                                a: "Un rapport PDF clair et documenté synthétisant le profil de votre enfant, ses points d'appui et les axes de travail potentiels."
                            },
                            {
                                q: "Est-ce que ce montant est perdu si je poursuis ?",
                                a: "Non. Si vous décidez de vous engager dans un pack, l'investissement du Diagnostic (397 $) est déduit du prix du pack Performance, et une réduction s'applique pour les autres."
                            },
                            {
                                q: "Est-ce que c'est un suivi clinique ?",
                                a: "Non. L'approche THRIVE relève du développement mental et de la psychologie sportive positive, et non de la psychologie clinique ou thérapeutique."
                            },
                            {
                                q: "Comment savoir ensuite quel pack choisir ?",
                                a: "Le rapport PDF du Diagnostic vous donnera une recommandation claire basée sur les besoins réels observés durant ces deux premières rencontres."
                            },
                            {
                                q: "Mon enfant doit-il déjà être très engagé dans son sport ?",
                                a: "Pas nécessairement. Le Diagnostic permet justement de comprendre sa relation à son sport, que son engagement soit total ou qu'il traverse une période de doute."
                            }
                        ].map((faq, i) => (
                            <FaqItem
                                key={i}
                                q={faq.q}
                                a={faq.a}
                                open={openFaq === i}
                                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                            />
                        ))}
                    </Reveal>
                </div>
            </section>

            {/* 12. CTA FINAL */}
            <section className="py-32 px-4 bg-[#1B263B] text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Commencer par <span className="text-[#94A3B8]">comprendre.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16">
                            Le Diagnostic THRIVE vous donne une première lecture claire, sérieuse et utile pour décider de la suite avec plus de confiance.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button
                                onClick={goEval}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#1B263B] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                            >
                                Commencer par le Diagnostic <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={goPricing}
                                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
                            >
                                Voir les packs THRIVE
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
}
