import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import {
    ChevronDown, ArrowRight, CheckCircle2,
    BookOpen, Target, Activity, FileText, Sun,
    Hand, TrendingDown, CloudRain, Footprints
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
export default function OserEssayer() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goCall = () => { navigate('/liste-attente?source=site&programme=essayer'); window.scrollTo(0, 0); };
    const goAutres = () => { navigate('/programmes/aller-vers-les-autres'); window.scrollTo(0, 0); };
    const goPrix = () => { navigate('/prix'); window.scrollTo(0, 0); };
    const goInclus = () => { document.getElementById('inclus')?.scrollIntoView({ behavior: 'smooth' }); };

    return (
        <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900 selection:bg-[#B07D4B]/20">
            <SEO
                title="THRIVE Individuel | 13 séances en tête-à-tête pour oser essayer — THRIVE"
                description="Votre enfant lâche dès que ça devient difficile ? 13 séances en tête-à-tête à Montréal pour pratiquer l'art d'essayer, de persévérer et de rebondir. Progrès mesurés. 1 500 $."
                url="https://thrivesportpositive.com/programmes/oser-essayer"
            />

            {/* 1. HERO CINÉMATIQUE */}
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden bg-[#1B263B]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B07D4B]/30 via-[#1B263B]/0 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#B07D4B]/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
                    <Reveal delay={100}>
                        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full mb-10">
                            <Sun size={14} className="text-[#B07D4B]" fill="currentColor" />
                            Oser essayer · en tête-à-tête
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8">
                            THRIVE <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D0E2C8] to-[#B07D4B]">
                                Individuel
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={300}>
                        <p className="text-xl md:text-3xl text-white/90 font-serif font-medium mb-8 max-w-3xl mx-auto leading-tight">
                            Votre enfant lâche dès que ça devient difficile ?
                        </p>
                    </Reveal>

                    <Reveal delay={400}>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-14">
                            En 13 semaines, il pratique chaque semaine l’art d’essayer, de persévérer et de rebondir après un échec. Des compétences qu’il garde pour l’école, le sport et la vie. Ses progrès sont mesurés au début et à la fin.
                        </p>
                    </Reveal>

                    <Reveal delay={500} className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
                        <button
                            onClick={goCall}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B07D4B] text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-[#8e653c] transition-all hover:scale-105 shadow-[0_0_40px_rgba(143,151,121,0.3)]"
                        >
                            Réserver un appel gratuit <ArrowRight size={20} />
                        </button>
                        <button
                            onClick={goInclus}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                        >
                            Voir ce qui est inclus
                        </button>
                    </Reveal>

                    {/* Quick proofs */}
                    <Reveal delay={700} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10">
                        {[
                            { label: "13 séances", sub: "1:1, une par semaine" },
                            { label: "1 défi", sub: "par semaine à la maison" },
                            { label: "Mesuré", sub: "au début et à la fin" },
                            { label: "Remboursé", sub: "si vous arrêtez après la 2e séance" }
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
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#B07D4B] mb-4 text-center">Vous le reconnaissez ?</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-20 text-center max-w-4xl mx-auto leading-tight">
                            À qui s'adresse Oser essayer ?
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-20">
                        {[
                            {
                                icon: <Hand size={28} />,
                                title: "Il ne lève jamais la main",
                                text: "Il connaît la réponse, mais il ne se lance pas. Il préfère se taire plutôt que de risquer de se tromper devant les autres."
                            },
                            {
                                icon: <TrendingDown size={28} />,
                                title: "Il abandonne dès que ça monte d'un cran",
                                text: "Tant que c'est facile, tout va bien. Dès que le coach augmente la difficulté, il décroche, négocie ou refuse d'essayer."
                            },
                            {
                                icon: <CloudRain size={28} />,
                                title: "Avant chaque match, c'est difficile",
                                text: "Les larmes, le mal de ventre, l'envie de ne pas y aller. Il perd ses moyens dès qu'il y a un enjeu."
                            },
                            {
                                icon: <Footprints size={28} />,
                                title: "Il reste en retrait",
                                text: "Une nouvelle activité, un examen, un oral : il hésite, attend, regarde les autres faire. Il a les capacités, mais pas l'élan."
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
                            Pour les enfants de 8 à 17 ans qui ont besoin d’apprendre à se lancer.
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
                            13 séances, 3 phases.
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Une séance individuelle par semaine, de 60 minutes, par le sport. Chaque séance fait vivre à votre enfant au moins une réussite : ni trop facile, sinon elle ne compte pas ; ni trop dure, sinon elle confirme l’échec.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                phase: "Phase 1",
                                title: "ANCRER",
                                s: "Séances 1 à 2",
                                role: "Créer le lien de confiance et fixer les objectifs.",
                                build: "Il repère ses forces et ce qu'il veut réussir.",
                                prep: "Pose le point de départ, pour mesurer le chemin parcouru."
                            },
                            {
                                phase: "Phase 2",
                                title: "DÉVELOPPER",
                                s: "Séances 3 à 10",
                                role: "Apprendre en pratiquant, dans l'action.",
                                build: "Confiance, émotions, calme sous pression, demander de l'aide, concentration.",
                                prep: "Remplit sa boîte à outils, séance après séance."
                            },
                            {
                                phase: "Phase 3",
                                title: "INTÉGRER",
                                s: "Séances 11 à 13",
                                role: "Consolider et devenir autonome.",
                                build: "Il assemble ses outils et apprend à les utiliser seul.",
                                prep: "Il repart prêt à oser, au sport comme ailleurs."
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

            {/* 4. SECTION "CE QUE VOTRE ENFANT PRATIQUE" */}
            <section className="py-32 px-4 bg-[#fafafa]">
                <div className="max-w-6xl mx-auto">
                    <Reveal className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-6 leading-tight">
                            Ce que votre enfant pratique.
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Pas des conseils : des habiletés travaillées en mouvement. Selon la recherche, la confiance la plus solide vient de réussites vécues, que l’enfant apprend à attribuer à son effort.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Se fixer un objectif", desc: "Découper un grand défi en petites étapes atteignables, qui dépendent de lui." },
                            { name: "Oser et persévérer", desc: "Progresser par paliers maîtrisés, pour que chaque réussite lui prouve qu'il en est capable." },
                            { name: "Gérer ses émotions", desc: "Reconnaître ce qu'il ressent face à la difficulté, et savoir quoi en faire." },
                            { name: "Rester calme sous pression", desc: "Des techniques simples pour garder ses moyens quand il y a un enjeu." },
                            { name: "Demander de l'aide", desc: "Savoir quand et comment solliciter le coach, les parents ou les coéquipiers quand ça bloque." },
                            { name: "Se concentrer", desc: "Ramener son attention sur l'instant présent, et se préparer mentalement par l'imagerie." }
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

            {/* 5. SECTION "LA PLACE DU PARENT" */}
            <section className="py-32 px-4 bg-white relative">
                <div className="max-w-5xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#B07D4B] mb-4">La place du parent</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] leading-tight max-w-3xl mx-auto">
                            Votre rôle : léger, mais essentiel.
                        </p>
                    </Reveal>

                    <div className="flex flex-col md:flex-row gap-8">
                        {[
                            {
                                step: "Séance 1",
                                title: "Le point de départ",
                                desc: "On observe votre enfant et on pose sa ligne de base : dans quelles situations il bloque, à quelle fréquence, depuis quand. Avant, un appel de 15 minutes avec vous pour comprendre la situation."
                            },
                            {
                                step: "Chaque semaine",
                                title: "Le défi à la maison",
                                desc: "Un défi à relever hors séance, à l'école ou à la maison, suivi dans l'app. Le passage du sport à la vie ne se fait pas tout seul : il se pratique."
                            },
                            {
                                step: "Séances 7 et 13",
                                title: "Les bilans",
                                desc: "Un bilan et un appel avec vous à mi-parcours, puis une séance de remise en séance 13 avec le bilan avant / après et le Book THRIVE."
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

            {/* 6. SECTION "UNE PROGRESSION QUE VOUS POUVEZ COMPTER" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <Reveal className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            Des progrès que vous pouvez <span className="text-[#B07D4B]">compter.</span>
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            On ne vous dit pas « il a l’air plus confiant ». On compte ce qui se voit, de la même façon au début et à la fin.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Combien de fois il accepte un nouveau défi sans négocier",
                                "S'il refait une tentative dans les 2 minutes après un échec",
                                "Le même questionnaire, rempli au début et à la fin",
                                "Un bilan et un appel à mi-parcours",
                                "Les défis réalisés à la maison, semaine après semaine"
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
                                        <div className="text-white/50 text-xs uppercase mb-1">Exemple de bilan · données fictives</div>
                                        <div className="text-xl font-serif font-bold">Semaine 0 → semaine 13</div>
                                    </div>
                                    <div className="text-[#B07D4B] font-bold text-sm">Exemple</div>
                                </div>
                                <div className="space-y-4">
                                    {['Défis acceptés sans négocier', 'Nouvelle tentative après un échec', 'Défis réalisés à la maison'].map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-white/80">{skill}</span>
                                                <span className="text-white/60">Avant / après</span>
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

            {/* 7. SECTION "CE QUE VOUS GARDEZ" */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-6 leading-tight">
                            Des repères qui restent.
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-20">
                            En semaine 13, une séance de remise pour célébrer le chemin parcouru. Votre enfant ne repart pas qu’avec des mots : il garde une trace concrète de ce qu’il a appris.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left">
                        {[
                            { name: "Le Book THRIVE : la synthèse de tout ce qu'il a appris", icon: <BookOpen size={20} /> },
                            { name: "Le bilan avant / après", icon: <FileText size={20} /> },
                            { name: "Ses objectifs et sa boîte à outils", icon: <Target size={20} /> },
                            { name: "Le suivi de chaque séance dans l'app", icon: <Activity size={20} /> }
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
            <section id="inclus" className="scroll-mt-24 py-32 px-4 bg-[#fafafa] border-y border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1B263B]">Tout ce qui est inclus</h2>
                    </Reveal>

                    <Reveal delay={100} className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">
                        {[
                            { title: "Un appel gratuit de 15 minutes", desc: "Pour comprendre la situation et vérifier que l'Individuel est le bon choix." },
                            { title: "13 séances individuelles", desc: "Une par semaine, de 60 minutes, en tête-à-tête. La Méthode THRIVE complète : Ancrer, Développer, Intégrer." },
                            { title: "1 défi par semaine", desc: "À relever hors séance, à l'école ou à la maison, avec vous. Suivi dans l'app." },
                            { title: "Suivi dans l'app", desc: "Ce qui a été travaillé à chaque séance, pour savoir où en est votre enfant." },
                            { title: "Mesure au début, au milieu et à la fin", desc: "Les mêmes questionnaires en séances 1, 7 et 13, et deux appels avec votre coach." },
                            { title: "Séance de remise + Book THRIVE", desc: "En semaine 13 : le bilan avant / après, la synthèse de ce qu'il a appris et la suite possible." }
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

            {/* 9. SECTION "CE QUE CE PROGRAMME N'EST PAS" */}
            <section className="py-24 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto bg-[#fafafa] border border-gray-200 rounded-[2rem] p-10 md:p-14">
                    <Reveal>
                        <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-6">Ce que ce programme n'est pas</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Pour que vous choisissiez en connaissance de cause :
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Ce n'est pas une psychothérapie. THRIVE est un programme de coaching et de développement des habiletés : il ne remplace pas un suivi psychologique.",
                                "Si votre enfant vit une détresse importante ou a reçu un diagnostic qui demande une prise en charge, nous vous orienterons vers un professionnel.",
                                "Nous promettons le travail fait chaque semaine et la mesure des progrès, pas un résultat garanti.",
                                "Pas de séance en groupe : c'est THRIVE Groupe, ou le parcours Complet qui enchaîne les deux."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-500 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                            <p className="text-gray-600 leading-relaxed text-base">
                                Votre enfant ose seul, mais se retient devant les autres ? <button onClick={goAutres} className="text-[#B07D4B] font-bold hover:underline transition-all">THRIVE Groupe</button> le fait pratiquer avec 4 à 6 jeunes. Et le parcours Complet (2 000 $) commence en tête-à-tête, puis rejoint un groupe dès la 4e séance.
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
                            <span className="text-7xl md:text-8xl font-serif font-bold text-[#1B263B] tracking-tight">1 500 $</span>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed mb-16 max-w-2xl mx-auto">
                            Rien à payer à l’inscription : 2 versements de 750 $, au début de la 1re et de la 7e séance. THRIVE Maison est inclus pendant tout le programme.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                            <button
                                onClick={goCall}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B263B] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#2c3e5a] transition-all hover:-translate-y-1 shadow-2xl"
                            >
                                Réserver un appel gratuit <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={goPrix}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#1B263B] text-[#1B263B] px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1"
                            >
                                Comparer les programmes
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 font-medium max-w-xl mx-auto">
                            Si vous n’êtes pas convaincu après la 2e séance, vous arrêtez et votre 1er versement vous est remboursé. Ensuite, vous pouvez arrêter à tout moment.
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
                                q: "Comment se passe la première étape ?",
                                a: "Un appel gratuit de 15 minutes pour comprendre la situation. Si l'Individuel est le bon choix, la 1re séance a lieu 1 à 2 semaines plus tard : elle pose le point de départ de votre enfant."
                            },
                            {
                                q: "Et si ça ne convient pas à mon enfant ?",
                                a: "Si vous n'êtes pas convaincu après la 2e séance, vous arrêtez et votre 1er versement vous est remboursé en entier. Ensuite, vous pouvez arrêter à tout moment : vous ne payez que les séances reçues."
                            },
                            {
                                q: "Pourquoi passer par le sport ?",
                                a: "Parce que le sport offre des occasions réelles d'essayer, de rater et de recommencer, dans un cadre sans enjeu scolaire. Mais ce qui s'apprend au sport ne passe pas tout seul à l'école : c'est pour ça que chaque semaine se termine par un défi à relever hors séance."
                            },
                            {
                                q: "Le coach de son club ne fait-il pas déjà ce travail ?",
                                a: "Rarement, et ce n'est pas un reproche : ce n'est pas son rôle, et avec une vingtaine d'enfants à gérer, c'est matériellement impossible. Avec THRIVE Individuel, la séance est entièrement consacrée à votre enfant."
                            },
                            {
                                q: "Pourquoi 13 semaines ?",
                                a: "Les programmes reconnus de développement des habiletés socio-émotionnelles durent en général de 10 à 16 semaines. Et il faut en moyenne plus de deux mois pour qu'un nouveau comportement devienne automatique. 13 semaines, c'est le temps de pratiquer, puis d'ancrer."
                            },
                            {
                                q: "Est-ce que ce programme remplace un suivi psychologique ?",
                                a: "Non. THRIVE est un programme de coaching et de développement des habiletés. Il ne remplace pas un suivi psychologique. Si votre enfant vit une détresse importante ou a reçu un diagnostic, nous vous orienterons vers un professionnel."
                            },
                            {
                                q: "Où et quand ont lieu les séances ?",
                                a: "À Centre Saint-Denis, sur le Plateau-Mont-Royal, à un créneau fixe chaque semaine. Il n'y a rien à préparer : vous déposez votre enfant, on s'occupe du reste."
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
                            Qu’il ose essayer. <br />
                            <span className="text-[#B07D4B]">Et qu’il recommence.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16">
                            13 semaines pour pratiquer l’art de se lancer, de persévérer et de rebondir, avec des progrès mesurés au début et à la fin.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button
                                onClick={goCall}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B07D4B] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#8e653c] transition-all hover:scale-105 shadow-xl"
                            >
                                Réserver un appel gratuit <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={goAutres}
                                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
                            >
                                Découvrir le Groupe
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
}
