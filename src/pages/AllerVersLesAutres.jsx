import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import {
    ChevronDown, ArrowRight, CheckCircle2, Star,
    MessageCircle, FileText, CalendarCheck,
    Users, Gift, UserX, Home
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
export default function AllerVersLesAutres() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goCall = () => { navigate('/liste-attente?source=site'); window.scrollTo(0, 0); };
    const goEssayer = () => { navigate('/programmes/oser-essayer'); window.scrollTo(0, 0); };
    const goPrix = () => { navigate('/prix'); window.scrollTo(0, 0); };
    const goInclus = () => { document.getElementById('inclus')?.scrollIntoView({ behavior: 'smooth' }); };

    return (
        <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900 selection:bg-[#94A3B8]/20">
            <SEO
                title="Aller vers les autres | Programme habiletés sociales pour enfants — THRIVE"
                description="Votre enfant passe souvent la récré seul ? 13 semaines à Montréal pour apprendre à aborder les autres, proposer une activité et entretenir une amitié : 1:1, petit groupe et défi social. 2 000 $ + tx."
                url="https://thrivesportpositive.com/programmes/aller-vers-les-autres"
            />

            {/* 1. HERO CINÉMATIQUE */}
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden bg-[#1B263B]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#CBD5E1]/30 via-[#1B263B]/0 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#94A3B8]/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
                    <Reveal delay={100}>
                        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full mb-10">
                            <Star size={14} className="text-[#94A3B8]" fill="currentColor" />
                            Le programme habiletés sociales
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8">
                            Aller vers <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1F5F9] to-[#94A3B8]">
                                les autres
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={300}>
                        <p className="text-xl md:text-3xl text-white/90 font-serif font-medium mb-8 max-w-3xl mx-auto leading-tight">
                            Il passe souvent la récré seul et n’ose pas inviter un ami ?
                        </p>
                    </Reveal>

                    <Reveal delay={400}>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-14">
                            En 13 semaines, votre enfant apprend concrètement à aborder les autres, à proposer une activité et à entretenir une amitié. Il pratique d’abord en 1:1, puis en petit groupe, puis dans sa vraie vie, avec votre soutien.
                        </p>
                    </Reveal>

                    <Reveal delay={500} className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
                        <button
                            onClick={goCall}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F1F5F9] text-[#1B263B] px-10 py-4.5 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(241,245,249,0.15)]"
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
                            { label: "26 séances", sub: "13 en 1:1 + 13 en groupe" },
                            { label: "1 déplacement", sub: "par semaine" },
                            { label: "1 défi social", sub: "par semaine, dans sa vie" },
                            { label: "8 à 11 ans", sub: "premiers groupes" }
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
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#94A3B8] mb-4 text-center">Vous le reconnaissez ?</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-20 text-center max-w-4xl mx-auto leading-tight">
                            À qui s'adresse Aller vers les autres ?
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-20">
                        {[
                            {
                                icon: <UserX size={28} />,
                                title: "Il a encore joué seul",
                                text: "Il rentre de la récré et vous raconte qu'il est resté dans son coin. Encore une fois."
                            },
                            {
                                icon: <Users size={28} />,
                                title: "Dans son équipe, il est là… mais à côté",
                                text: "Il fait partie du groupe sur le papier, mais personne ne lui passe la balle et il n'ose pas la demander."
                            },
                            {
                                icon: <Gift size={28} />,
                                title: "Il n'est jamais invité",
                                text: "Les anniversaires, les sorties, les après-midi chez un ami : ça se passe souvent sans lui."
                            },
                            {
                                icon: <Home size={28} />,
                                title: "Il n'ose pas faire le premier pas",
                                text: "Il aimerait avoir un ami, mais il ne sait pas comment aborder les autres ni proposer une activité."
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
                            Pour les parents qui ont le cœur serré de voir leur enfant seul.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* 3. SECTION "COMMENT ÇA MARCHE" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#94A3B8]/10 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-20 max-w-3xl leading-tight">
                            Pratiquer à l’abri, puis dans la vraie vie.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                        {[
                            {
                                title: "D'abord le 1:1, sans public",
                                desc: "Chaque semaine commence par une séance individuelle de la Méthode THRIVE : un espace protégé, sans le regard des autres, pour préparer ce qui sera pratiqué ensuite."
                            },
                            {
                                title: "Puis le petit groupe, pour s'entraîner",
                                desc: "Juste après, une séance avec quelques enfants qui apprennent la même méthode. Le groupe est un terrain d'entraînement : on y essaie ce qu'on vient de préparer."
                            },
                            {
                                title: "Un défi social dans sa vraie vie",
                                desc: "Inviter un camarade, proposer un jeu : un défi par semaine hors programme, préparé avec vous. C'est l'ingrédient clé des programmes de référence en habiletés sociales : l'amitié se construit dehors."
                            },
                            {
                                title: "Vous, outillé pour l'aider",
                                desc: "Un court point parent chaque semaine pour préparer et soutenir le défi. Vous savez enfin comment l'aider concrètement."
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
                            On compte ce qui se voit, de la même façon au début et à la fin. Pas pour mettre votre enfant dans une case, mais pour que vous voyiez le chemin parcouru.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "En groupe",
                                time: "Semaine 1 vs semaine 13",
                                desc: "Le nombre d'échanges que votre enfant lance lui-même, sans être poussé par le coach. Et s'il reste en retrait ou non pendant les exercices à deux."
                            },
                            {
                                name: "Dans sa vraie vie",
                                time: "Le dernier mois",
                                desc: "Au moins une invitation ou une activité proposée à un camarade, en dehors du programme. C'est l'indicateur retenu par les programmes de référence."
                            },
                            {
                                name: "Avant / après",
                                time: "Début et fin",
                                desc: "Le même questionnaire au début et à la fin du programme, et des bilans courts en cours de route."
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

            {/* 5. SECTION "DES POINTS CLAIRS AUX MOMENTS CLÉS" */}
            <section className="py-32 px-4 bg-[#fafafa]">
                <div className="max-w-5xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#94A3B8] mb-4">Les jalons</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] leading-tight">
                            Des points clairs aux moments clés.
                        </p>
                    </Reveal>

                    <Reveal delay={200} className="bg-white border border-gray-200 rounded-[2.5rem] p-10 md:p-16 shadow-sm flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3 flex justify-center">
                            <div className="relative w-40 h-40 bg-[#1B263B] rounded-full flex items-center justify-center text-white shadow-2xl">
                                <div className="absolute inset-0 bg-[#94A3B8]/20 rounded-full animate-ping opacity-20" />
                                <CalendarCheck size={48} />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold text-[#1B263B] mb-6">Vous voyez les progrès avant la fin du programme</h3>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                Un bilan court à chaque étape, pour savoir où en est votre enfant et ajuster si besoin.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Semaine 4 : ses premiers échanges lancés en groupe, mesurés.",
                                    "Semaine 8 : son premier défi social réalisé dans sa vraie vie.",
                                    "Semaine 13 : la séance de remise, avec le bilan avant / après et le Book THRIVE."
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

            {/* 6. SECTION "UN BILAN QUE LES PARENTS COMPRENNENT" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white">
                <div className="max-w-6xl mx-auto">
                    <Reveal className="mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                            Un bilan que les parents comprennent vraiment.
                        </h2>
                    </Reveal>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <Reveal delay={100} className="lg:w-1/2">
                            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-12 backdrop-blur-md relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#94A3B8]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 group-hover:scale-150" />
                                <FileText size={48} className="text-[#94A3B8] mb-8 relative z-10" />
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 relative z-10 leading-snug">Des situations du quotidien, pas du jargon.</h3>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Ce que votre enfant ose faire aujourd'hui, comparé au départ",
                                        "Les défis sociaux réalisés, semaine après semaine",
                                        "Ce qui a bien marché, et ce qui reste à pratiquer",
                                        "Ce qu'on vous recommande pour la suite"
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
                            Entre les séances, vous n’êtes pas seul.
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                            L’amitié se construit en dehors du programme. Chaque semaine, on prépare avec vous ce que votre enfant va essayer dans sa vraie vie.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Point parent chaque semaine",
                                "Défi social préparé ensemble",
                                "Suivi dans l'app",
                                "Bilans semaines 4 et 8"
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
            <section id="inclus" className="scroll-mt-24 py-32 px-4 bg-[#fafafa] border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1B263B]">Tout ce qui est inclus</h2>
                    </Reveal>

                    <Reveal delay={100} className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">
                        {[
                            { title: "Séance découverte", desc: "Une séance complète qui pose le point de départ de votre enfant. 97 $ + tx, déduits de votre premier versement si vous continuez." },
                            { title: "13 séances individuelles", desc: "La Méthode THRIVE en 1:1, une par semaine : l'espace protégé pour préparer." },
                            { title: "13 séances en petit groupe", desc: "Le même jour, juste après le 1:1 : un seul déplacement par semaine. 6 enfants maximum pour un coach." },
                            { title: "1 défi social par semaine", desc: "Inviter un camarade, proposer un jeu : à vivre hors programme, préparé avec vous." },
                            { title: "Point parent hebdomadaire", desc: "Un court échange chaque semaine pour préparer et soutenir le défi." },
                            { title: "Mesure avant / après", desc: "Le même questionnaire au début et à la fin, et des bilans courts aux semaines 4 et 8." },
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

            {/* 9. SECTION "CE QU'IL FAUT SAVOIR" */}
            <section className="py-24 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto bg-[#fafafa] border border-gray-200 rounded-[2rem] p-10 md:p-14">
                    <Reveal>
                        <h3 className="text-2xl font-serif font-bold text-[#1B263B] mb-6">Ce qu'il faut savoir avant de choisir</h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Les groupes démarrent à dates fixes, pour que tous les enfants commencent ensemble. Les premiers groupes sont ouverts aux enfants de 8 à 11 ans.",
                                "Nous ne promettons pas un groupe d'amis : nous travaillons chaque semaine les gestes qui permettent d'en créer et d'en garder un, et nous mesurons les progrès.",
                                "L'approche s'inspire des programmes de référence en habiletés sociales (PEERS®, UCLA). Ils ont surtout été validés auprès d'adolescents autistes ; leur efficacité chez des enfants simplement timides ou isolés est plausible, mais moins démontrée.",
                                "Ce n'est pas une psychothérapie : THRIVE ne remplace pas un suivi psychologique. Si votre enfant vit une détresse importante ou a reçu un diagnostic, nous vous orienterons vers un professionnel."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-[#1B263B] rounded-2xl p-8 text-white">
                            <p className="text-white/80 leading-relaxed text-lg">
                                Le regard des autres lui fait peur ? On commence souvent par <button onClick={goEssayer} className="text-[#C5A059] font-bold underline decoration-[#C5A059]/30 hover:decoration-[#C5A059] transition-all">Oser essayer</button> : 13 séances en 1:1 pour reprendre confiance, avant de passer au groupe.
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
                            <span className="text-7xl md:text-8xl font-serif font-bold text-[#1B263B] tracking-tight">2 000 $</span>
                            <span className="text-3xl font-bold text-gray-400">+ tx</span>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed mb-16 max-w-2xl mx-auto">
                            26 séances sur 13 semaines. Rien à payer à l’inscription : 2 versements de 1 000 $ + tx, le premier en semaine 3, le second en semaine 7.
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
                            Les 2 premières séances sont à l’essai : si vous n’êtes pas convaincu, vous arrêtez et elles ne vous sont pas facturées. Ensuite, vous pouvez arrêter à tout moment.
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
                                q: "Mon enfant est très timide : le groupe ne va-t-il pas lui faire peur ?",
                                a: "C'est pour ça que chaque semaine commence en 1:1, sans public : on prépare ensemble ce qu'il va essayer en groupe. On en parle avec vous dès la séance découverte, et si le groupe arrive trop tôt pour lui, on commence par Oser essayer."
                            },
                            {
                                q: "Vous promettez qu'il aura des amis ?",
                                a: "Non, et personne ne peut honnêtement le promettre. Nous promettons le travail : chaque semaine, votre enfant apprend et pratique concrètement à aborder les autres, à proposer une activité et à entretenir une relation. Et nous mesurons ce qui change, au début et à la fin."
                            },
                            {
                                q: "Pourquoi le 1:1 et le groupe le même jour ?",
                                a: "Pour vous simplifier la vie : un seul déplacement par semaine. Et parce que le 1:1 prépare directement ce qui sera pratiqué en groupe juste après."
                            },
                            {
                                q: "Pour quel âge ?",
                                a: "Les premiers groupes sont ouverts aux enfants de 8 à 11 ans, pour que les enfants d'un même groupe aient des défis comparables."
                            },
                            {
                                q: "Quand commencent les groupes ?",
                                a: "Les groupes démarrent à dates fixes, pour que tous les enfants commencent ensemble. Réservez un appel : on vous indique la prochaine date de départ."
                            },
                            {
                                q: "Et si ça ne convient pas à mon enfant ?",
                                a: "Les deux premières semaines sont une période d'essai : si vous n'êtes pas convaincu, vous arrêtez et elles ne vous sont pas facturées. Ensuite, vous pouvez arrêter à tout moment : vous ne payez que les séances suivies."
                            },
                            {
                                q: "Est-ce une thérapie ?",
                                a: "Non. THRIVE est un programme de coaching et de développement des habiletés. Il ne remplace pas un suivi psychologique. Si votre enfant vit une détresse importante ou a reçu un diagnostic, nous vous orienterons vers un professionnel."
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#94A3B8] to-transparent blur-[80px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Qu’il fasse le premier pas. <br />
                            <span className="text-[#94A3B8]">Et qu’il garde un ami.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16">
                            13 semaines pour apprendre à aller vers les autres : à l’abri en 1:1, en petit groupe, puis dans sa vraie vie, avec vous.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button
                                onClick={goCall}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F1F5F9] text-[#1B263B] px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 shadow-xl"
                            >
                                Réserver un appel gratuit <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={goEssayer}
                                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
                            >
                                Découvrir Oser essayer
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
}
