import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import { 
    ChevronDown, ArrowRight, CheckCircle2, Shield,
    BarChart2, BookOpen, MessageCircle, Star, Phone,
    Compass, Target, Zap, Clock, Activity, FileText,
    TrendingUp, Plus
} from 'lucide-react';
import ContactSection from '../components/ui/ContactSection';
import Cal, { getCalApi } from "@calcom/embed-react";

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
export default function AdvancedPack({ setBookingStep }) {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        (async function () {
            const cal = await getCalApi({ namespace: "thrive-performance-13-seances-du-dimanche" });
            cal("ui", {
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    const goEval = () => { navigate('/evaluation'); window.scrollTo(0, 0); };
    const goPerf = () => { navigate('/pack/performance'); window.scrollTo(0, 0); };

    return (
        <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900 selection:bg-[#94A3B8]/20">
            <SEO 
                title="Pack Avancé | Suivi Mental et Preuves d'Évolution — THRIVE"
                description="Notre pack recommandé : le programme complet avec des preuves chiffrées de progression et un suivi parent rapproché."
                url="https://thrivesportpositive.com/pack/avance"
            />

            {/* 1. HERO CINÉMATIQUE */}
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden bg-[#1B263B]">
                {/* Background effects (Silver/Slate theme) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#CBD5E1]/30 via-[#1B263B]/0 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#94A3B8]/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
                    <Reveal delay={100}>
                        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full mb-10">
                            <Star size={14} className="text-[#94A3B8]" fill="currentColor" />
                            Pack Recommandé
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8">
                            THRIVE <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1F5F9] to-[#94A3B8]">
                                Avancé
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={300}>
                        <p className="text-xl md:text-3xl text-white/90 font-serif font-medium mb-8 max-w-3xl mx-auto leading-tight">
                            Le programme complet, avec preuves chiffrées et call parent.
                        </p>
                    </Reveal>

                    <Reveal delay={400}>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-14">
                            Pour les parents qui veulent voir la progression, la comprendre et l’ajuster avec des repères concrets, pas seulement des impressions.
                        </p>
                    </Reveal>

                    <Reveal delay={500} className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
                        <button
                            onClick={goEval}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F1F5F9] text-[#1B263B] px-10 py-4.5 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(241,245,249,0.15)]"
                        >
                            Réserver un appel <ArrowRight size={20} />
                        </button>
                        <button
                            data-cal-namespace="thrive-performance-13-seances-du-dimanche"
                            data-cal-link="thrive-sport-positive/thrive-performance-13-seances-du-dimanche"
                            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                        >
                            reserver ma place
                        </button>
                    </Reveal>

                    {/* Quick proofs */}
                    <Reveal delay={700} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10">
                        {[
                            { label: "13 séances", sub: "sur la saison" },
                            { label: "Données", sub: "LSSS + SMTQ + RPE" },
                            { label: "Stratégie", sub: "Call parent S7" },
                            { label: "Livrable", sub: "Scorecard enrichie" }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <p className="text-white font-bold text-lg md:text-xl mb-1">{item.label}</p>
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
                            À qui s'adresse le pack Avancé ?
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-20">
                        {[
                            {
                                icon: <BarChart2 size={28} />,
                                title: "Besoin de données tangibles",
                                text: "Parents qui veulent être rassurés sur l'impact réel du programme et ont besoin de courbes, de scores et de preuves visuelles de la progression."
                            },
                            {
                                icon: <Target size={28} />,
                                title: "Enfant déjà investi",
                                text: "Familles avec un jeune athlète sérieux dans sa pratique, pour qui on veut documenter la progression mentale autant que la progression technique."
                            },
                            {
                                icon: <Activity size={28} />,
                                title: "Compréhension de l'évolution",
                                text: "Parents qui veulent comprendre précisément ce qui évolue pendant la saison : gestion de la pression, robustesse, leadership."
                            },
                            {
                                icon: <Compass size={28} />,
                                title: "Ajustement stratégique",
                                text: "Familles désirant un point d'étape structuré à mi-parcours pour ajuster intelligemment les attentes et l'environnement autour du jeune."
                            }
                        ].map((block, i) => (
                            <Reveal key={i} delay={i * 100} className="bg-[#fafafa] border border-gray-100 p-10 rounded-[2rem] flex flex-col">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#1B263B] mb-8">
                                    {block.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1B263B] mb-4">{block.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{block.text}</p>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={400} className="text-center">
                        <p className="inline-block bg-[#1B263B] text-white px-8 py-4 rounded-full font-serif text-xl md:text-2xl shadow-xl">
                            Ce pack s’adresse aux familles qui veulent des repères concrets, pas un suivi à l’aveugle.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* 3. SECTION "CE QUE CE PACK APPORTE" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#94A3B8]/10 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                
                <div className="max-w-6xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-20 max-w-3xl leading-tight">
                            Une transformation visible et documentée.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                        {[
                            {
                                title: "Rendre la progression visible",
                                desc: "Ce qui se passe dans la tête de l'athlète devient lisible sur papier. Vous voyez noir sur blanc les compétences qui se développent."
                            },
                            {
                                title: "Des ressentis aux repères",
                                desc: "On ne se contente plus de dire « il semble plus confiant ». On transforme les impressions du bord du terrain en repères objectifs."
                            },
                            {
                                title: "Comprendre sa réaction à la pression",
                                desc: "Mesurer spécifiquement comment il réagit à l'effort et aux attentes pour éviter l'épuisement silencieux."
                            },
                            {
                                title: "Ajuster intelligemment la suite",
                                desc: "Les données récoltées permettent de prendre de meilleures décisions pour la fin de saison et le choix des environnements futurs."
                            }
                        ].map((b, i) => (
                            <Reveal key={i} delay={i * 100} className="flex gap-6">
                                <div className="w-1.5 h-full min-h-[4rem] bg-[#94A3B8] rounded-full shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                                    <p className="text-white/60 text-lg leading-relaxed">{b.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SECTION "DES PREUVES, PAS SEULEMENT DES IMPRESSIONS" */}
            <section className="py-32 px-4 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <Reveal className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-6 leading-tight">
                            Des preuves, pas seulement des impressions.
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            La mesure est au cœur de la valeur de ce pack. Nous utilisons des outils scientifiques pour éclairer le chemin, pas pour enfermer l'enfant dans des cases.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { 
                                name: "LSSS (3 temps)", 
                                time: "S1, S7, S13",
                                desc: "Life Skills Scale for Sport. Mesure l'évolution des compétences de vie (10 items) en début, milieu et fin de programme pour visualiser la courbe d'apprentissage." 
                            },
                            { 
                                name: "SMTQ (Robustesse)", 
                                time: "Pré / Post",
                                desc: "Sports Mental Toughness Questionnaire. Mesure la capacité à rester solide sous la pression. Compare l'état initial à l'état final." 
                            },
                            { 
                                name: "RPE (Charge perçue)", 
                                time: "Séances clés (ex: S3, S6, S9)",
                                desc: "Suivi de l'effort perçu pour s'assurer que le développement mental reste assimilable et ne crée pas de surcharge cognitive." 
                            }
                        ].map((metric, i) => (
                            <Reveal key={i} delay={i * 100} className="bg-[#fafafa] border border-gray-100 p-10 rounded-[2rem] hover:shadow-lg transition-shadow duration-300">
                                <div className="text-[#94A3B8] font-bold text-sm uppercase tracking-widest mb-2">{metric.time}</div>
                                <div className="text-[#1B263B] font-serif font-bold text-2xl mb-4">{metric.name}</div>
                                <p className="text-gray-600 leading-relaxed">{metric.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SECTION "UN POINT CLAIR À MI-PARCOURS" */}
            <section className="py-32 px-4 bg-[#fafafa]">
                <div className="max-w-5xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#94A3B8] mb-4">Phase Stratégique</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] leading-tight">
                            Un point clair à mi-parcours (Séance 7).
                        </p>
                    </Reveal>

                    <Reveal delay={200} className="bg-white border border-gray-200 rounded-[2.5rem] p-10 md:p-16 shadow-sm flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3 flex justify-center">
                            <div className="relative w-40 h-40 bg-[#1B263B] rounded-full flex items-center justify-center text-white shadow-2xl">
                                <div className="absolute inset-0 bg-[#94A3B8]/20 rounded-full animate-ping opacity-20" />
                                <Phone size={48} />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold text-[#1B263B] mb-6">Call Parent structuré de 20 à 30 minutes</h3>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                Plus qu'un simple rapport, c'est un vrai moment de clarification stratégique pour s'assurer que nous ramons dans la même direction.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Retour sur les premiers résultats : LSSS et SMTQ initial.",
                                    "Exemples concrets observés sur la glace et dans les retours de l'enfant.",
                                    "Ajustement des objectifs pour les phases suivantes (DÉVELOPPER & INTÉGRER)."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-700">
                                        <CheckCircle2 size={24} className="text-[#94A3B8] shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 6. SECTION "UNE SCORECARD QUE LES PARENTS COMPRENNENT" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white">
                <div className="max-w-6xl mx-auto">
                    <Reveal className="mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                            Une Scorecard que les parents comprennent vraiment.
                        </h2>
                    </Reveal>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <Reveal delay={100} className="lg:w-1/2">
                            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-12 backdrop-blur-md relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#94A3B8]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 group-hover:scale-150" />
                                <FileText size={48} className="text-[#94A3B8] mb-8 relative z-10" />
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 relative z-10 leading-snug">Un document structuré, intelligent et rassurant pour matérialiser la progression.</h3>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Tableau SMTQ pré / post : « robustesse mentale en hausse de X points »",
                                        "Synthèse RPE : lecture de la charge perçue vs sentiment de maîtrise",
                                        "Explication simple des données (aucun jargon clinique)",
                                        "Section « Comment lire ces données » dédiée aux parents"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-white/80">
                                            <CheckCircle2 size={20} className="text-[#94A3B8] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                        <Reveal delay={200} className="lg:w-1/2">
                            <div className="aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-[#CBD5E1]/10 to-[#1B263B] border border-white/10 flex items-center justify-center p-8 relative overflow-hidden">
                                <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-2xl flex flex-col gap-4">
                                    <div className="w-1/3 h-4 bg-white/20 rounded-full mb-4" />
                                    <div className="flex gap-4 items-end h-32 mb-6">
                                        <div className="w-1/4 bg-[#94A3B8]/40 h-[40%] rounded-t-md" />
                                        <div className="w-1/4 bg-[#94A3B8]/60 h-[65%] rounded-t-md" />
                                        <div className="w-1/4 bg-[#94A3B8]/80 h-[85%] rounded-t-md" />
                                        <div className="w-1/4 bg-white h-[100%] rounded-t-md" />
                                    </div>
                                    <div className="w-full h-2 bg-white/10 rounded-full" />
                                    <div className="w-5/6 h-2 bg-white/10 rounded-full" />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 7. SECTION "ENTRE LES SÉANCES" */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <div className="w-20 h-20 mx-auto bg-[#fafafa] border border-gray-200 text-[#1B263B] rounded-3xl flex items-center justify-center mb-10 shadow-sm">
                            <MessageCircle size={36} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-8 leading-tight">
                            Entre les séances, une présence cadrée.
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                            Bénéficiez d'un accès léger mais réel au coach pour ne jamais rester avec une incertitude.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "1 message parent par semaine", 
                                "Canal dédié (WhatsApp/SMS)", 
                                "Clarifications sur les outils", 
                                "Délai de réponse 48-72h"
                            ].map((badge, i) => (
                                <span key={i} className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-full text-sm shadow-sm hover:border-[#94A3B8] transition-colors cursor-default">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 8. SECTION "TOUT CE QUI EST INCLUS" (Grille) */}
            <section id="inclus" className="py-32 px-4 bg-[#fafafa] border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1B263B]">Synthèse du pack Avancé</h2>
                    </Reveal>

                    <Reveal delay={100} className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">
                        {[
                            { title: "Base solide", desc: "13 séances complètes, supports enfants, jalons parents standards." },
                            { title: "LSSS (Compétences de vie)", desc: "Mesuré en S1, S7 et S13." },
                            { title: "SMTQ (Robustesse mentale)", desc: "Mesuré en S1 (pré) et S13 (post)." },
                            { title: "RPE (Charge perçue)", desc: "Suivi ciblé sur les séances clés (ex: S3, S6, S9)." },
                            { title: "Call Parent Stratégique", desc: "Un point de 20-30 min à mi-parcours (S7)." },
                            { title: "Scorecard Avancée", desc: "Livrable de 3 à 4 pages avec interprétation simple des données." },
                            { title: "Soutien hebdomadaire", desc: "1 message parent par semaine (réponse 48-72h hors urgences)." }
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

            {/* 9. SECTION "CE QUE CE PACK NE COMPREND PAS" (Upsell doux) */}
            <section className="py-24 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto bg-[#fafafa] border border-gray-200 rounded-[2rem] p-10 md:p-14">
                    <Reveal>
                        <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-6">Les limites de ce pack</h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Pas de calls parent exclusifs en début et fin de programme.",
                                "Pas de batterie psychométrique élargie (WHO-5, GSE, LSSS 30).",
                                "Pas de rapport détaillé orienté spécifiquement sur le « parcours sportif » futur."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="bg-[#1B263B] rounded-2xl p-8 text-white">
                            <p className="text-white/80 leading-relaxed text-lg">
                                Avec Avancé, vous voyez la progression mentale et vous avez un call au milieu. Si vous voulez, en plus, un accompagnement rapproché coach-parent, une batterie de mesure complète et un rapport final orienté parcours sportif, le <button onClick={goPerf} className="text-[#C5A059] font-bold underline decoration-[#C5A059]/30 hover:decoration-[#C5A059] transition-all">pack Performance</button> est conçu pour ce niveau d’engagement.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 10. SECTION PRIX */}
            <section className="py-32 px-4 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <p className="text-[#94A3B8] font-bold uppercase tracking-widest text-sm mb-6">Investissement</p>
                        <div className="flex justify-center items-baseline gap-3 mb-10">
                            <span className="text-7xl md:text-8xl font-serif font-bold text-[#1B263B] tracking-tight">1 997</span>
                            <span className="text-3xl font-bold text-gray-400">CAD</span>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed mb-16 max-w-2xl mx-auto">
                            Le bon niveau d’accompagnement pour les familles qui veulent des preuves tangibles, un point structuré à mi-parcours et une lecture claire de la progression.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                            <button
                                onClick={goEval}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B263B] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#2c3e5a] transition-all hover:-translate-y-1 shadow-2xl"
                            >
                                Planifier un appel découverte <ArrowRight size={20} />
                            </button>
                            <button
                                data-cal-namespace="thrive-performance-13-seances-du-dimanche"
                                data-cal-link="thrive-sport-positive/thrive-performance-13-seances-du-dimanche"
                                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#1B263B] text-[#1B263B] px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1"
                            >
                                reserver ma place gratuitement
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 font-medium">
                            Places limitées selon la capacité d'accompagnement.
                        </p>
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
                                q: "Quelle est la différence entre Essential et Avancé ?",
                                a: "Essential offre les séances avec un suivi minimal. Avancé y ajoute l'intégration de mesures psychométriques concrètes, une Scorecard enrichie de données, et surtout un point stratégique de vive voix (Call S7) avec le coach."
                            },
                            {
                                q: "À quoi servent les mesures comme le SMTQ ou le RPE ?",
                                a: "Elles transforment des ressentis (la confiance, l'effort) en données chiffrées. Le SMTQ évalue la robustesse mentale sous pression. Le RPE vérifie que l'enfant assimile bien les séances sans surcharge."
                            },
                            {
                                q: "Est-ce que les données sont expliquées simplement ?",
                                a: "Oui, absolument. Nous ne fournissons pas un bilan clinique indigeste. La Scorecard traduit ces données en langage clair et indique précisément ce qu'elles signifient pour l'évolution de votre enfant."
                            },
                            {
                                q: "Comment se déroule le call parent ?",
                                a: "Il a lieu en milieu de parcours (Séance 7). C'est un échange de 20-30 minutes en visio pour partager les premières observations, décrypter les scores initiaux et ajuster le tir si nécessaire pour la suite."
                            },
                            {
                                q: "Est-ce que ce pack est déjà suffisant pour un enfant très investi ?",
                                a: "Oui, c'est notre pack recommandé. Il offre le parfait équilibre entre intervention sur le terrain et documentation sérieuse de la progression pour rassurer les parents."
                            },
                            {
                                q: "Quelle est la différence avec Performance ?",
                                a: "Performance va plus loin dans l'encadrement : accompagnement parental rapproché, 3 calls complets, plus de mesures, accès WhatsApp prioritaire et un cahier athlète sur-mesure pour planifier la suite de sa carrière."
                            },
                            {
                                q: "Est-ce que ce pack remplace un psychologue du sport ?",
                                a: "Non. L'approche THRIVE se concentre sur l'optimisation mentale et l'acquisition de compétences de vie, pas sur la thérapie clinique. En cas de besoin de santé mentale, nous réorientons vers des professionnels certifiés."
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
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#94A3B8] to-transparent blur-[80px]" />
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Voir plus clair <br />
                            <span className="text-[#94A3B8]">pendant la saison.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16">
                            THRIVE Avancé est conçu pour les familles qui veulent suivre la progression avec plus de précision, plus de recul et plus de confiance.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button
                                onClick={goEval}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F1F5F9] text-[#1B263B] px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 shadow-xl"
                            >
                                Réserver un appel <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={goPerf}
                                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
                            >
                                Découvrir le pack Performance
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
}
