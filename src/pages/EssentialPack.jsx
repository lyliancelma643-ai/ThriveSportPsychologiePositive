import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import { 
    ChevronDown, ArrowRight, CheckCircle2, Shield,
    BarChart2, BookOpen, MessageCircle, Star, Phone,
    Compass, Target, Zap, Clock, Activity, FileText,
    TrendingUp, Plus, Sun
} from 'lucide-react';
import ContactSection from '../components/ui/ContactSection';

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
                isVisible ? 'opacity-100 translate-y-12' : 'opacity-0 translate-y-16'
            } ${className}`}
            style={{ transitionDelay: `${delay}ms`, transform: isVisible ? 'translateY(0)' : '' }}
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
export default function EssentialPack({ setBookingStep }) {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goEval = () => { navigate('/evaluation'); window.scrollTo(0, 0); };
    const goAdv = () => { navigate('/pack/avance'); window.scrollTo(0, 0); };

    return (
        <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900 selection:bg-[#B07D4B]/20">
            <SEO 
                title="THRIVE Essential | Le programme complet"
                description="Le programme complet, clair et documenté. 13 séances individuelles pour retrouver confiance et sérénité avec des repères simples et solides."
                url="https://thrivesportpositive.com/pack/essential"
            />

            {/* 1. HERO CINÉMATIQUE */}
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden bg-[#1B263B]">
                {/* Background effects (Sage Green theme) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B07D4B]/30 via-[#1B263B]/0 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#B07D4B]/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
                    <Reveal delay={100}>
                        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full mb-10">
                            <Sun size={14} className="text-[#B07D4B]" fill="currentColor" />
                            Le point de départ THRIVE
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8">
                            THRIVE <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D0E2C8] to-[#B07D4B]">
                                Essential
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={300}>
                        <p className="text-xl md:text-3xl text-white/90 font-serif font-medium mb-8 max-w-3xl mx-auto leading-tight">
                            Le programme complet, clair et documenté.
                        </p>
                    </Reveal>

                    <Reveal delay={400}>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-14">
                            En 13 séances individuelles, votre enfant suit l’intégralité de la méthode THRIVE, développe ses 6 outils mentaux et vous repartez avec une lecture claire de sa progression.
                        </p>
                    </Reveal>

                    <Reveal delay={500} className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
                        <button
                            onClick={goEval}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B07D4B] text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-[#8e653c] transition-all hover:scale-105 shadow-[0_0_40px_rgba(143,151,121,0.3)]"
                        >
                            Réserver un appel <ArrowRight size={20} />
                        </button>
                        <a
                            href="#inclus"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                        >
                            Voir le programme
                        </a>
                    </Reveal>

                    {/* Quick proofs */}
                    <Reveal delay={700} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10">
                        {[
                            { label: "13 séances", sub: "1:1 avec le coach" },
                            { label: "6 outils", sub: "Mentaux concrets" },
                            { label: "Scorecard", sub: "Claire et lisible" },
                            { label: "Supports", sub: "Enfants inclus" }
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
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#B07D4B] mb-4 text-center">Reconnaissance immédiate</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-20 text-center max-w-4xl mx-auto leading-tight">
                            À qui s'adresse le pack Essential ?
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-20">
                        {[
                            {
                                icon: <Shield size={28} />,
                                title: "Cadre sérieux et simple",
                                text: "Parents qui veulent un accompagnement méthodique, positif, ancré dans la science, sans protocoles lourds ni suivis complexes."
                            },
                            {
                                icon: <TrendingUp size={28} />,
                                title: "Baisse de régime",
                                text: "Enfants qui vivent un « bof » passager : retrait, légère baisse de confiance, ou perte d'élan, sans pour autant nécessiter un suivi clinique."
                            },
                            {
                                icon: <Clock size={28} />,
                                title: "Agir tôt et bien",
                                text: "Familles qui préfèrent prévenir et outiller leur enfant dès maintenant avec les bonnes bases mentales avant que de vrais blocages ne s'installent."
                            },
                            {
                                icon: <FileText size={28} />,
                                title: "Lisibilité sans jargon",
                                text: "Parents qui veulent comprendre ce qui se passe et ce qui progresse, avec des mots simples, rassurants et une lecture claire en fin de parcours."
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
                            Ce pack s’adresse aux familles qui veulent une base solide, claire et positive.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* 3. SECTION "UN PROGRAMME COMPLET EN 13 SÉANCES" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B07D4B]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                
                <div className="max-w-6xl mx-auto relative z-10">
                    <Reveal className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Un parcours complet en 3 phases.
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Le pack Essential n'est pas "allégé". Il parcourt l'intégralité de la méthode THRIVE avec sérieux et rigueur, pour bâtir des fondations inébranlables.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                phase: "Phase 1",
                                title: "ANCRER",
                                s: "Séances 1 à 2",
                                role: "Créer le lien de confiance et dresser la cartographie initiale.",
                                build: "L'enfant identifie ses forces, ses valeurs et pose un rêve de saison.",
                                prep: "Donne le cap pour tout le travail à venir."
                            },
                            {
                                phase: "Phase 2",
                                title: "DÉVELOPPER",
                                s: "Séances 3 à 10",
                                role: "L'apprentissage actif au cœur du terrain.",
                                build: "Acquisition des 6 outils mentaux via la pratique et la psychologie positive.",
                                prep: "Crée la boîte à outils personnelle que l'athlète pourra réutiliser seul."
                            },
                            {
                                phase: "Phase 3",
                                title: "INTÉGRER",
                                s: "Séances 11 à 13",
                                role: "Autonomie et consolidation.",
                                build: "Mise en situation, appropriation de sa routine pré-performance.",
                                prep: "Assure que l'enfant est prêt à voler de ses propres ailes."
                            }
                        ].map((p, i) => (
                            <Reveal key={i} delay={i * 150} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] backdrop-blur-sm">
                                <div className="text-[#B07D4B] font-bold text-sm uppercase tracking-widest mb-2">{p.phase} — {p.s}</div>
                                <h3 className="text-3xl font-serif font-bold mb-6">{p.title}</h3>
                                <div className="space-y-4 text-white/80 leading-relaxed text-sm">
                                    <p><strong className="text-white font-medium">Rôle :</strong> {p.role}</p>
                                    <p><strong className="text-white font-medium">Ce qu'il construit :</strong> {p.build}</p>
                                    <p><strong className="text-white font-medium">Pour la suite :</strong> {p.prep}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SECTION "LES 6 OUTILS MENTAUX THRIVE" */}
            <section className="py-32 px-4 bg-[#fafafa]">
                <div className="max-w-6xl mx-auto">
                    <Reveal className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-6 leading-tight">
                            Les 6 outils mentaux THRIVE.
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Nous ne faisons pas que de l'écoute. Nous transmettons des compétences concrètes et claires pour que votre enfant soit autonome face aux défis sportifs et quotidiens.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Objectifs", desc: "Savoir découper un grand rêve en petites étapes SMART, atteignables et sous son propre contrôle." },
                            { name: "Confiance", desc: "Apprendre à s'appuyer sur ses forces existantes plutôt que de fixer sur ses lacunes." },
                            { name: "Émotions", desc: "Identifier ce qu'il ressent avec la Roue des émotions et savoir l'utiliser positivement dans le jeu." },
                            { name: "Routine", desc: "Bâtir une routine pré-performance physique et mentale pour entrer dans sa 'zone' à la demande." },
                            { name: "Soutien", desc: "Apprendre à demander de l'aide intelligemment (au coach, aux parents, aux coéquipiers) quand ça bloque." },
                            { name: "Focus", desc: "Utiliser l'imagerie mentale et un 'Focus Word' pour ramener instantanément son attention dans l'instant présent." }
                        ].map((tool, i) => (
                            <Reveal key={i} delay={i * 100} className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#B07D4B]/10 text-[#B07D4B] flex items-center justify-center font-bold">
                                        {i + 1}
                                    </div>
                                    <h3 className="font-serif font-bold text-[#1B263B] text-xl">{tool.name}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">{tool.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SECTION "UNE RELATION PARENT CLAIRE ET LÉGÈRE" */}
            <section className="py-32 px-4 bg-white relative">
                <div className="max-w-5xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#B07D4B] mb-4">La place du parent</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] leading-tight max-w-3xl mx-auto">
                            Une implication claire, positive et sans lourdeur.
                        </p>
                    </Reveal>

                    <div className="flex flex-col md:flex-row gap-8">
                        {[
                            {
                                step: "Séance 1",
                                title: "Contrat de confiance",
                                desc: "Une présence brève (5 min) en début de parcours pour sceller l'engagement mutuel entre le jeune, le coach et vous."
                            },
                            {
                                step: "Séance 7",
                                title: "Le point positif",
                                desc: "Un message bref (écrit ou vocal) à mi-parcours pour partager une observation de terrain positive et concrète."
                            },
                            {
                                step: "Séance 13",
                                title: "Célébration",
                                desc: "Vous assistez aux 10 dernières minutes pour célébrer le chemin parcouru et la remise du Certificat THRIVE."
                            }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 150} className="flex-1 bg-[#fafafa] border border-gray-100 p-8 rounded-[2rem] text-center hover:-translate-y-1 transition-transform">
                                <div className="text-[#B07D4B] font-bold text-sm uppercase tracking-widest mb-3">{item.step}</div>
                                <h3 className="text-xl font-bold text-[#1B263B] mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SECTION "UNE PROGRESSION QUE VOUS POUVEZ LIRE" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <Reveal className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            Une progression que vous pouvez <span className="text-[#B07D4B]">lire et comprendre.</span>
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            Essential inclut une mesure simplifiée (LSSS 10 items) pour documenter la progression des Life Skills. En fin de programme, vous recevez une **Scorecard claire**.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Rappel des forces initiales et du rêve de saison",
                                "Évolution des scores de Life Skills (S1 / S7 / S13)",
                                "2 à 3 observations concrètes sur la dimension sportive",
                                "2 à 3 observations sur le quotidien (école, relations)",
                                "Recommandations pratiques et faciles pour la maison"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/90">
                                    <CheckCircle2 size={24} className="text-[#B07D4B] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={200} className="lg:w-1/2 w-full">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B07D4B]/30 rounded-full blur-[60px]" />
                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                    <div>
                                        <div className="text-white/50 text-xs uppercase mb-1">Scorecard THRIVE</div>
                                        <div className="text-xl font-serif font-bold">Progression des Life Skills</div>
                                    </div>
                                    <div className="text-[#B07D4B] font-bold">+24%</div>
                                </div>
                                <div className="space-y-4">
                                    {['Confiance globale', 'Gestion émotionnelle', 'Capacité à demander de l\'aide'].map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-white/80">{skill}</span>
                                                <span className="text-white/60">Évolution positive</span>
                                            </div>
                                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                                <div className="bg-[#B07D4B] h-full rounded-full" style={{ width: `${60 + (i * 15)}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 7. SECTION "CE QUE VOTRE ENFANT GARDE" */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-6 leading-tight">
                            Des repères qui restent.
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-20">
                            L'accompagnement THRIVE laisse une trace matérielle. L'enfant ne repart pas qu'avec des mots, il garde des supports concrets et personnalisés pour continuer à grandir.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left">
                        {[
                            { name: "Fiche Identité Athlète", icon: <Target size={20} /> },
                            { name: "Objectif SMART", icon: <Activity size={20} /> },
                            { name: "Roue des émotions", icon: <Star size={20} /> },
                            { name: "Routine pré-performance (Plastifiée)", icon: <Shield size={20} /> },
                            { name: "Carte Focus Word", icon: <Zap size={20} /> },
                            { name: "Boîte à outils THRIVE", icon: <BookOpen size={20} /> },
                            { name: "Lettre à soi-même dans 1 an", icon: <MessageCircle size={20} /> },
                            { name: "Certificat personnalisé", icon: <FileText size={20} /> }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 50} className="bg-[#fafafa] border border-gray-100 p-6 rounded-2xl flex flex-col gap-4 group hover:bg-[#B07D4B] hover:border-[#B07D4B] transition-all duration-300">
                                <div className="text-[#B07D4B] group-hover:text-white transition-colors">{item.icon}</div>
                                <div className="font-bold text-sm text-[#1B263B] group-hover:text-white transition-colors">{item.name}</div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. SECTION "TOUT CE QUI EST INCLUS" (Grille) */}
            <section id="inclus" className="py-32 px-4 bg-[#fafafa] border-y border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1B263B]">Synthèse du pack Essential</h2>
                    </Reveal>

                    <Reveal delay={100} className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">
                        {[
                            { title: "Parcours 13 séances", desc: "Individuelles (60-75 min). Méthode complète (Ancrer, Développer, Intégrer)." },
                            { title: "6 Outils Mentaux", desc: "Objectifs, Confiance, Émotions, Routine, Demande d'aide, Focus." },
                            { title: "Implication Parent", desc: "Jalons S1 (présence 5m), S7 (message), S13 (Célébration)." },
                            { title: "Mesure Simplifiée", desc: "LSSS (Life Skills) évalué en S1, S7 et S13." },
                            { title: "Scorecard Essential", desc: "Rapport clair de 2 à 3 pages avec observations et recommandations." },
                            { title: "8 Supports Enfants", desc: "De la Fiche Identité au Certificat THRIVE, que l'enfant garde." }
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
                        <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-6">Les limites assumées de ce pack</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Essential est conçu pour être simple et autonome. C'est pourquoi il ne comprend pas de protocoles lourds :
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Pas d'appel parent formel à mi-parcours.",
                                "Pas de mesures avancées de robustesse (SMTQ) ni d'analyse chiffrée complexe.",
                                "Pas d'accès régulier au coach entre les séances hors logistique."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-500 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                            <p className="text-gray-600 leading-relaxed text-base">
                                Vous avez déjà un programme complet avec Essential. Si, pour la prochaine saison, vous voulez aussi voir la progression mentale de votre enfant en chiffres poussés et prendre un temps de débrief structuré au milieu du programme, le <button onClick={goAdv} className="text-[#B07D4B] font-bold hover:underline transition-all">pack Avancé</button> vous donnera exactement cette couche de précision.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 10. SECTION PRIX */}
            <section className="py-32 px-4 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <p className="text-[#B07D4B] font-bold uppercase tracking-widest text-sm mb-6">Investissement</p>
                        <div className="flex justify-center items-baseline gap-3 mb-10">
                            <span className="text-7xl md:text-8xl font-serif font-bold text-[#1B263B] tracking-tight">1 697</span>
                            <span className="text-3xl font-bold text-gray-400">CAD</span>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed mb-16 max-w-2xl mx-auto">
                            Un programme complet pour poser une base solide, claire et documentée dans la saison de votre enfant.
                        </p>
                        <button
                            onClick={goEval}
                            className="inline-flex items-center justify-center gap-2 bg-[#1B263B] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#2c3e5a] transition-all hover:-translate-y-1 shadow-2xl mb-6"
                        >
                            Planifier un appel découverte <ArrowRight size={20} />
                        </button>
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
                                a: "Essential est l'expérience cœur de THRIVE : 13 séances et l'apprentissage de la méthode avec une documentation claire. Avancé y ajoute des mesures chiffrées poussées et un call parent complet pour analyser ces données."
                            },
                            {
                                q: "Est-ce que ce programme est déjà complet ?",
                                a: "Absolument. Il n'est en rien 'allégé' sur le terrain. L'enfant suit le même protocole en 3 phases et acquiert les mêmes 6 outils mentaux que dans les autres packs."
                            },
                            {
                                q: "Mon enfant a perdu confiance : est-ce que ce pack est adapté ?",
                                a: "C'est exactement pour ce type de 'bof' ou de baisse de régime passagère que le pack Essential a été conçu. Il redonne de l'élan, des repères et de la confiance."
                            },
                            {
                                q: "Est-ce que ce pack remplace un suivi psychologique ?",
                                a: "Non. Si la baisse de confiance s'accompagne d'une vraie souffrance psychologique ou de signes cliniques, THRIVE n'est pas l'approche appropriée et nous vous orienterons vers un psychologue clinicien."
                            },
                            {
                                q: "Qu’est-ce qu’on reçoit à la fin du programme ?",
                                a: "En tant que parent, vous recevez la Scorecard Essential (un rapport écrit de sa progression). L'enfant repart avec 8 supports physiques, dont sa routine, ses fiches objectifs et son Certificat."
                            },
                            {
                                q: "Comment les parents sont-ils impliqués ?",
                                a: "De manière légère et positive. Une validation au début (S1), un petit message d'encouragement à mi-parcours (S7), et une célébration à la fin (S13)."
                            },
                            {
                                q: "Est-ce que les outils restent utiles après les 13 séances ?",
                                a: "C'est tout l'objectif de la méthode. L'enfant construit sa 'Boîte à outils' qu'il pourra réutiliser en autonomie pour ses défis sportifs futurs ou même à l'école."
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B07D4B] to-transparent blur-[80px]" />
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Une base claire pour <br />
                            <span className="text-[#B07D4B]">repartir dans le bon sens.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16">
                            THRIVE Essential aide votre enfant à retrouver des repères, développer ses outils mentaux et avancer dans un cadre sérieux, positif et documenté.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button
                                onClick={goEval}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B07D4B] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#8e653c] transition-all hover:scale-105 shadow-xl"
                            >
                                Réserver un appel <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={goAdv}
                                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
                            >
                                Découvrir le pack Avancé
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
}
