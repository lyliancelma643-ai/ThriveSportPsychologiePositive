import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import { 
    ChevronDown, ArrowRight, CheckCircle2, Shield,
    BarChart2, BookOpen, MessageCircle, Star, Phone,
    Compass, Target, Zap, Clock, Activity, FileText
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
export default function PerformancePack({ setBookingStep }) {
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
    const goPacks = () => { navigate('/prix'); window.scrollTo(0, 0); };

    return (
        <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900 selection:bg-[#C5A059]/20">
            <SEO 
                title="Pack Performance | Accompagnement Mental Haut Niveau — THRIVE"
                description="Pour les jeunes athlètes élite : un cadre sur-mesure, des mesures solides et un accompagnement de proximité avec la famille sur toute la saison."
                url="https://thrivesportpositive.com/pack/performance"
            />

            {/* 1. HERO CINÉMATIQUE */}
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden bg-[#1B263B]">
                {/* Background effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C5A059]/40 via-[#1B263B]/0 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#8F9779]/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
                    <Reveal delay={100}>
                        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full mb-10">
                            <Star size={14} className="text-[#C5A059]" fill="currentColor" />
                            Niveau Premium
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8">
                            THRIVE <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E3C687]">
                                Performance
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={300}>
                        <p className="text-xl md:text-3xl text-white/90 font-serif font-medium mb-8 max-w-3xl mx-auto leading-tight">
                            Le programme complet, avec un suivi d’athlète de haut niveau.
                        </p>
                    </Reveal>

                    <Reveal delay={400}>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-14">
                            Pour les familles qui veulent plus qu’un programme : un cadre clair, des mesures solides et un accompagnement de confiance sur toute la saison.
                        </p>
                    </Reveal>

                    <Reveal delay={500} className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
                        <button
                            onClick={goEval}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A059] text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-[#B08D45] transition-all hover:scale-105 shadow-[0_0_40px_rgba(197,160,89,0.3)]"
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
                            { label: "13 bilans détaillés", sub: "un à chaque séance" },
                            { label: "Messagerie", sub: "coach en direct" },
                            { label: "Exports", sub: "CSV + PDF" }
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
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4 text-center">Profils cibles</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-20 text-center max-w-3xl mx-auto leading-tight">
                            À qui s'adresse le niveau Performance ?
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-20">
                        {[
                            {
                                icon: <Target size={28} />,
                                title: "Enfant en compétition",
                                text: "Familles dont l'enfant évolue déjà dans un environnement exigeant (sélection, sport-études, club interrégional)."
                            },
                            {
                                icon: <Compass size={28} />,
                                title: "Besoin de pilotage",
                                text: "Parents qui veulent un pilote fiable sur toute la saison, avec des recommandations claires pour la suite."
                            },
                            {
                                icon: <Zap size={28} />,
                                title: "Clarté de progression",
                                text: "Familles qui veulent comprendre précisément quoi renforcer, sans surcharger l'enfant d'injonctions inutiles."
                            }
                        ].map((block, i) => (
                            <Reveal key={i} delay={i * 150} className="bg-[#fafafa] border border-gray-100 p-10 rounded-[2rem] flex flex-col">
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
                            Ce pack s’adresse aux familles qui ne veulent plus avancer à l’intuition.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* 3. SECTION "CE QUE CE PACK CHANGE" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                
                <div className="max-w-6xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-20 max-w-3xl leading-tight">
                            La transformation au-delà des séances.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                        {[
                            {
                                title: "Plus de clarté sur la progression réelle",
                                desc: "Des mesures objectives remplacent les impressions subjectives. Vous savez exactement où l'athlète progresse et ce qui reste à développer."
                            },
                            {
                                title: "Plus de recul dans les moments clés",
                                desc: "Pendant les périodes de haute pression (sélections, phases finales), vous bénéficiez d'un regard extérieur neutre et expert pour naviguer sans panique."
                            },
                            {
                                title: "Une cohérence parent-enfant",
                                desc: "Alignement total entre ce que l’enfant vit sur le terrain, ce qu’il ressent intérieurement, et l'attitude à adopter à la maison pour le nourrir."
                            },
                            {
                                title: "Une base sérieuse pour l'avenir",
                                desc: "Vous repartez avec une compréhension profonde de son profil, permettant de choisir les bons environnements et les bons entraîneurs pour la suite."
                            }
                        ].map((b, i) => (
                            <Reveal key={i} delay={i * 100} className="flex gap-6">
                                <div className="w-1.5 h-full min-h-[4rem] bg-[#C5A059] rounded-full shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                                    <p className="text-white/60 text-lg leading-relaxed">{b.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SECTION "UN SUIVI PARENT-COACH RARE" */}
            <section className="py-32 px-4 bg-[#fafafa]">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-24">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#8F9779] mb-4">Pilotage haut niveau</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] leading-tight">
                            Un suivi Parent-Coach rare.
                        </p>
                    </Reveal>

                    <div className="relative pl-8 md:pl-0">
                        {/* Vertical line for desktop and mobile */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />

                        {[
                            {
                                time: "Dès S1",
                                title: "Bilan détaillé à chaque séance",
                                items: ["Le bilan structuré du coach après chacune des 13 séances", "Observations chiffrées (indicateurs notés sur 5) à chaque étape", "Lecture directe dans votre espace parent, en temps réel"]
                            },
                            {
                                time: "En continu",
                                title: "Messagerie directe avec le coach",
                                items: ["Un fil privé parent ↔ coach, directement dans l'application", "Posez vos questions sans attendre la prochaine séance"]
                            },
                            {
                                time: "S1 · S7 · S13",
                                title: "Mesures scientifiques complètes",
                                items: ["Courbe LSSS et jauge par compétence avec évolution", "Roue des émotions et journal de progression"]
                            },
                            {
                                time: "S13",
                                title: "Le dossier complet, à garder",
                                items: ["Export CSV / PDF du parcours entier", "Lettre personnalisée du coach + certificat THRIVE", "Historique illimité, pour toute la famille"]
                            }
                        ].map((step, i) => (
                            <Reveal key={i} delay={i * 150} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Node marker */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#1B263B] border-4 border-[#fafafa] rounded-full -translate-x-1.5 md:-translate-x-1/2 mt-6 md:mt-0 z-10 box-content shadow-sm" />
                                
                                {/* Content Box */}
                                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                                    <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-[#C5A059] font-bold text-sm uppercase tracking-widest mb-3">{step.time}</div>
                                        <h3 className="text-xl font-bold text-[#1B263B] mb-4">{step.title}</h3>
                                        <ul className="space-y-2">
                                            {step.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-[45%]" />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SECTION "UNE LECTURE PLUS FINE DE L’ATHLÈTE" */}
            <section className="py-32 px-4 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <Reveal className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-6 leading-tight">
                            Une lecture plus fine de l'athlète.
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Des outils de mesure élargis, expliqués en langage simple. Aucun jargon, aucune médicalisation. Seulement des repères fiables pour mieux le comprendre.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Courbe LSSS", desc: "Life Skills Scale for Sport en 3 mesures (S1 · S7 · S13). La preuve longitudinale que les compétences de vie de votre enfant progressent." },
                            { name: "Jauge par compétence", desc: "Le détail de chaque compétence — confiance, régulation, concentration… — et son évolution depuis le départ, en continu dans votre espace." },
                            { name: "Observations 13/13", desc: "Les indicateurs chiffrés du coach à chacune des 13 séances : la granularité maximale pour suivre les progrès semaine après semaine." },
                            { name: "Roue des émotions", desc: "Le suivi affectif de séance en séance, avec le journal de progression. Comprendre ce que vit votre enfant, pas seulement ce qu'il fait." },
                            { name: "RPE", desc: "Évaluation de l'effort perçu, recueillie dans les séances vidéo interactives et intégrée aux rapports de niveau maximal." }
                        ].map((metric, i) => (
                            <Reveal key={i} delay={i * 100} className="bg-[#fafafa] border border-gray-100 p-8 rounded-[2rem]">
                                <div className="text-[#1B263B] font-serif font-bold text-2xl mb-4">{metric.name}</div>
                                <p className="text-gray-600 leading-relaxed">{metric.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SECTION "LES LIVRABLES QUI RESTENT" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white">
                <div className="max-w-6xl mx-auto">
                    <Reveal className="mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                            Les livrables qui restent.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Scorecard */}
                        <Reveal delay={100} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 group-hover:scale-150" />
                            <FileText size={48} className="text-[#C5A059] mb-8 relative z-10" />
                            <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">Le dossier complet du parcours</h3>
                            <p className="text-white/60 text-lg mb-8 relative z-10">Tout l'historique, exportable et à garder — au-delà des 13 séances.</p>
                            <ul className="space-y-4 relative z-10">
                                {["Export CSV / PDF du parcours entier", "Courbe LSSS et jauge par compétence en langage simple", "La lettre personnalisée du coach et le certificat THRIVE"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/80">
                                        <CheckCircle2 size={20} className="text-[#C5A059] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        {/* Cahier */}
                        <Reveal delay={200} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8F9779]/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 transition-transform duration-1000 group-hover:scale-150" />
                            <BookOpen size={48} className="text-[#8F9779] mb-8 relative z-10" />
                            <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">La carte d'identité de l'athlète</h3>
                            <p className="text-white/60 text-lg mb-8 relative z-10">Le compagnon numérique que votre enfant construit séance après séance.</p>
                            <ul className="space-y-4 relative z-10">
                                {["Passeport, forces et rêve de saison", "Focus word, routine d'avant-match et boîte à outils mentaux", "Objectifs SMART et prochaines étapes", "Accessible sans limite dans votre espace famille"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/80">
                                        <CheckCircle2 size={20} className="text-[#8F9779] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 7. SECTION "ENTRE LES SÉANCES" */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <div className="w-20 h-20 mx-auto bg-[#1B263B] text-white rounded-3xl flex items-center justify-center mb-10 shadow-2xl rotate-3">
                            <MessageCircle size={36} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-8 leading-tight">
                            Entre les séances, vous n'êtes pas seuls.
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12">
                            L'accompagnement haut niveau ne s'arrête pas à la fin de la séance. En tant que parent, vous bénéficiez de la messagerie directe avec le coach, dans votre espace sécurisé.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Fil privé dans l'application",
                                "Aide sur les outils",
                                "Ajustements pré-compétition",
                                "Réponse entre les séances"
                            ].map((badge, i) => (
                                <span key={i} className="px-5 py-2.5 bg-[#fafafa] border border-gray-200 text-gray-700 font-medium rounded-full text-sm">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 8. SECTION "TOUT CE QUI EST INCLUS" (Grille) */}
            <section id="inclus" className="py-32 px-4 bg-[#fafafa] border-y border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1B263B]">Synthèse du pack Performance</h2>
                    </Reveal>

                    <Reveal delay={100} className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">
                        {[
                            { title: "Pack Avancé complet", desc: "13 séances, bibliothèque vidéo, jauge par compétence, courbe LSSS, roue des émotions, lettre du coach." },
                            { title: "Bilan détaillé aux 13 séances", desc: "Le bilan structuré + observations chiffrées après chaque séance — pas seulement aux étapes." },
                            { title: "Messagerie directe coach", desc: "Un fil privé parent ↔ coach dans l'application, en continu pendant toute la saison." },
                            { title: "Rapports à la profondeur maximale", desc: "Niveau de détail 3 (transfert hors-sport, réussites, effort perçu) + gabarits premium." },
                            { title: "Export CSV / PDF", desc: "Le parcours complet téléchargeable, à garder ou partager avec l'entraîneur." },
                            { title: "Famille illimitée", desc: "Profils enfants et comptes parents illimités · historique illimité · stockage maximal." },
                            { title: "Synthèse IA de fin de parcours", desc: "À venir — incluse dans le pack dès sa sortie, sans supplément." }
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

            {/* 9. SECTION PRIX */}
            <section className="py-32 px-4 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <p className="text-[#C5A059] font-bold uppercase tracking-widest text-sm mb-6">Investissement</p>
                        <div className="flex justify-center items-baseline gap-3 mb-10">
                            <span className="text-7xl md:text-8xl font-serif font-bold text-[#1B263B] tracking-tight">2 500</span>
                            <span className="text-3xl font-bold text-gray-400">CAD</span>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed mb-16">
                            Un accompagnement complet pour les familles qui veulent un cadre fiable, des repères mesurés et des recommandations solides sur toute la saison.
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
                            Places limitées selon la capacité d'accompagnement du coach.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* 10. FAQ PREMIUM */}
            <section className="py-32 px-4 bg-[#fafafa]">
                <div className="max-w-3xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1B263B]">Questions fréquentes</h2>
                    </Reveal>

                    <Reveal delay={200} className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
                        {[
                            {
                                q: "Est-ce que ce pack remplace un psychologue du sport ?",
                                a: "Non. THRIVE n'est pas une démarche clinique ou thérapeutique. C'est un accompagnement en psychologie positive axé sur l'optimisation, la clarté et l'acquisition de compétences de vie. Si nous détectons un besoin clinique, nous vous réorienterons vers le bon professionnel de santé."
                            },
                            {
                                q: "Quelle est la différence avec le pack Avancé ?",
                                a: "Le pack Avancé ouvre les bilans détaillés aux séances-étapes (3, 7 et 13). Le pack Performance intègre complètement les parents dans la boucle : le bilan détaillé à chacune des 13 séances, la messagerie directe avec le coach dans l'application, les exports CSV/PDF du parcours et des profils illimités pour toute la famille."
                            },
                            {
                                q: "Mon enfant doit-il déjà être au très haut niveau ?",
                                a: "Pas nécessairement au niveau élite national, mais il doit évoluer dans un environnement compétitif engagé (sport-études, sélection, club interrégional exigeant) où la pression et les attentes justifient un encadrement renforcé."
                            },
                            {
                                q: "Comment fonctionne la messagerie avec le coach ?",
                                a: "Directement dans votre espace parent : un fil privé et sécurisé entre vous et le coach de votre enfant. Vous écrivez quand vous voulez, il vous répond entre les séances — sans passer par un numéro personnel ni une application tierce."
                            },
                            {
                                q: "Est-ce que les résultats sont expliqués simplement ?",
                                a: "Oui, c'est notre engagement. Les bilans, la jauge par compétence et la courbe LSSS sont présentés visuellement dans votre espace, avec des fiches d'explication en langage clair. Aucun jargon inutile, seulement des données traduites en recommandations pratiques."
                            },
                            {
                                q: "Est-ce que vous échangez avec le club ?",
                                a: "Si la situation l'exige et avec votre accord, nous pouvons nous coordonner avec l'entraîneur (pour éviter les injonctions contradictoires). Toutefois, nous ne nous substituons jamais à son rôle d'entraîneur technique."
                            },
                            {
                                q: "Que reste-t-il à la fin du programme ?",
                                a: "Tout. L'historique complet du parcours reste accessible sans limite dans votre espace, et vous pouvez l'exporter en CSV ou PDF : les 13 bilans, la courbe LSSS, la jauge par compétence, la lettre personnalisée du coach et le certificat THRIVE de votre enfant."
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

            {/* 11. CTA FINAL */}
            <section className="py-32 px-4 bg-[#1B263B] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A059] to-transparent blur-[80px]" />
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Un cadre plus clair pour lui. <br />
                            <span className="text-[#C5A059]">Plus de sérénité pour vous.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16">
                            THRIVE Performance est conçu pour les familles qui veulent accompagner une ambition sportive avec méthode, recul et confiance.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button
                                onClick={goEval}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A059] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#B08D45] transition-all hover:scale-105 shadow-xl"
                            >
                                Réserver un appel <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={goPacks}
                                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
                            >
                                Découvrir les autres packs
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
}
