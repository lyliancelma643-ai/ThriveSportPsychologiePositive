import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import {
    ChevronDown, ArrowRight, CheckCircle2, Star,
    MessageCircle, FileText, BookOpen,
    Clock, Moon, Heart
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
export default function MomentQuiCompte() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goWaitlist = () => { navigate('/liste-attente?source=site'); window.scrollTo(0, 0); };
    const goPrix = () => { navigate('/prix'); window.scrollTo(0, 0); };
    const goInclus = () => { document.getElementById('inclus')?.scrollIntoView({ behavior: 'smooth' }); };

    return (
        <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900 selection:bg-[#C5A059]/20">
            <SEO
                title="Le moment qui compte | 10 minutes par jour avec votre enfant — THRIVE"
                description="Chaque jour, une activité de 10 minutes à faire avec votre enfant, sans rien préparer, avec l'explication du pourquoi. 1 mois d'essai gratuit, puis 15 $ + tx toutes les 2 semaines, sans engagement."
                url="https://thrivesportpositive.com/programmes/le-moment-qui-compte"
            />

            {/* 1. HERO CINÉMATIQUE */}
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden bg-[#1B263B]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C5A059]/40 via-[#1B263B]/0 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#8F9779]/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
                    <Reveal delay={100}>
                        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full mb-10">
                            <Star size={14} className="text-[#C5A059]" fill="currentColor" />
                            L'abonnement famille THRIVE
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8">
                            Le moment <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E3C687]">
                                qui compte
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={300}>
                        <p className="text-xl md:text-3xl text-white/90 font-serif font-medium mb-8 max-w-3xl mx-auto leading-tight">
                            10 minutes ce soir. Rien à préparer. Et il s’en souviendra.
                        </p>
                    </Reveal>

                    <Reveal delay={400}>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-14">
                            Chaque jour, une activité de 10 minutes à faire avec votre enfant, conçue à partir de la recherche sur le lien parent–enfant, avec l’explication du pourquoi. Parce que ce n’est pas le nombre d’heures qui compte, c’est la qualité du moment.
                        </p>
                    </Reveal>

                    <Reveal delay={500} className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
                        <button
                            onClick={goWaitlist}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A059] text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-[#B08D45] transition-all hover:scale-105 shadow-[0_0_40px_rgba(197,160,89,0.3)]"
                        >
                            Être prévenu du lancement <ArrowRight size={20} />
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
                            { label: "10 minutes", sub: "par jour" },
                            { label: "0 préparation", sub: "0 matériel" },
                            { label: "1 mois", sub: "d'essai gratuit" },
                            { label: "Sans engagement", sub: "résiliable à tout moment" }
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
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4 text-center">Vous vous reconnaissez ?</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-20 text-center max-w-3xl mx-auto leading-tight">
                            À qui s'adresse Le moment qui compte ?
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-20">
                        {[
                            {
                                icon: <Moon size={28} />,
                                title: "Il est déjà en pyjama",
                                text: "Vous rentrez à 19 h, il est déjà prêt pour le lit, et vous vous sentez coupable de ne pas l'avoir vu de la journée."
                            },
                            {
                                icon: <Clock size={28} />,
                                title: "Vous ne le voyez pas grandir",
                                text: "Entre le travail, la fatigue et la pression, les semaines filent. Vous avez l'impression de passer à côté."
                            },
                            {
                                icon: <Heart size={28} />,
                                title: "Pas le temps de préparer",
                                text: "Vous voulez un vrai moment avec lui, mais vous n'avez ni le temps ni l'énergie de chercher quoi faire."
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
                            Pour les parents qui manquent de temps, pas d’amour.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* 3. SECTION "POURQUOI 10 MINUTES SUFFISENT" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-20 max-w-3xl leading-tight">
                            Pourquoi 10 minutes suffisent.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                        {[
                            {
                                title: "La qualité avant la quantité",
                                desc: "Chez les enfants de 3 à 11 ans, la recherche trouve que le nombre d'heures passées avec leur mère n'est presque pas lié à leur développement. Ce qui compte, c'est ce qui se passe pendant ce temps."
                            },
                            {
                                title: "Moins de culpabilité, plus de présence",
                                desc: "Le stress et la culpabilité du parent peuvent peser davantage que les heures manquées. Dix minutes vraiment présentes valent mieux qu'une soirée à s'en vouloir."
                            },
                            {
                                title: "Un format court et reconnu",
                                desc: "Quelques minutes par jour d'un « moment spécial » parent–enfant : c'est un format utilisé par des programmes reconnus d'accompagnement des familles."
                            },
                            {
                                title: "La pratique à la maison, c'est le programme",
                                desc: "Les programmes parentaux les plus efficaces font pratiquer le parent avec son propre enfant. Pas de théorie à lire : un geste à faire, ce soir."
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

            {/* 4. SECTION "AU QUOTIDIEN" */}
            <section className="py-32 px-4 bg-[#fafafa]">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-24">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#8F9779] mb-4">Au quotidien</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] leading-tight">
                            Comment ça marche, concrètement.
                        </p>
                    </Reveal>

                    <div className="relative pl-8 md:pl-0">
                        {/* Vertical line for desktop and mobile */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />

                        {[
                            {
                                time: "À l'heure choisie",
                                title: "Une notification",
                                items: ["Vous choisissez le moment de la journée qui vous convient", "L'activité du jour se lit en 20 secondes"]
                            },
                            {
                                time: "10 minutes",
                                title: "Le moment ensemble",
                                items: ["Zéro préparation, zéro matériel : ce que vous avez déjà à la maison", "Une activité tirée de la Méthode THRIVE, selon l'âge de votre enfant"]
                            },
                            {
                                time: "Une ligne",
                                title: "Le pourquoi",
                                items: ["Chaque activité explique en une phrase ce qu'elle développe chez votre enfant", "Vous comprenez ce que vous faites, et pourquoi ça compte"]
                            },
                            {
                                time: "Semaine 4",
                                title: "Le bilan",
                                items: ["Combien de moments vous avez partagés", "Et le signe qui ne trompe pas : votre enfant réclame-t-il le moment ?"]
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

            {/* 5. SECTION "CE QUE VOUS VERREZ CHANGER" */}
            <section className="py-32 px-4 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <Reveal className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-6 leading-tight">
                            Ce que vous verrez changer.
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Trois repères simples, suivis dans l’app. Aucun jargon, aucune note clinique : seulement ce qui se passe chez vous.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Les moments partagés", desc: "Le nombre de moments réalisés chaque semaine. L'objectif : au moins 3 par semaine, 4 semaines de suite." },
                            { name: "Il réclame le moment", desc: "Le signe le plus parlant : c'est votre enfant qui vous demande « on fait notre moment ce soir ? »." },
                            { name: "Votre ressenti", desc: "Une question par semaine sur votre culpabilité, de 0 à 10. C'est votre ressenti de parent, pas un score." }
                        ].map((metric, i) => (
                            <Reveal key={i} delay={i * 100} className="bg-[#fafafa] border border-gray-100 p-8 rounded-[2rem]">
                                <div className="text-[#1B263B] font-serif font-bold text-2xl mb-4">{metric.name}</div>
                                <p className="text-gray-600 leading-relaxed">{metric.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SECTION "DEUX FAÇONS D'EN PROFITER" */}
            <section className="py-32 px-4 bg-[#1B263B] text-white">
                <div className="max-w-6xl mx-auto">
                    <Reveal className="mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                            La Méthode THRIVE, à la maison.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <Reveal delay={100} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 group-hover:scale-150" />
                            <FileText size={48} className="text-[#C5A059] mb-8 relative z-10" />
                            <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">Pour commencer en douceur</h3>
                            <p className="text-white/60 text-lg mb-8 relative z-10">La façon la plus simple de découvrir la méthode, sans vous engager.</p>
                            <ul className="space-y-4 relative z-10">
                                {["Un mois d'essai gratuit pour voir si ça vous ressemble", "Dix minutes par jour, à votre rythme", "Le pourquoi de chaque activité, pour comprendre ce que vous faites"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/80">
                                        <CheckCircle2 size={20} className="text-[#C5A059] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal delay={200} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8F9779]/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 transition-transform duration-1000 group-hover:scale-150" />
                            <BookOpen size={48} className="text-[#8F9779] mb-8 relative z-10" />
                            <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">Pour prolonger un programme</h3>
                            <p className="text-white/60 text-lg mb-8 relative z-10">Les activités viennent de la même méthode que nos programmes en séance.</p>
                            <ul className="space-y-4 relative z-10">
                                {["Après Oser essayer ou Aller vers les autres, le lien continue à la maison", "Ce que votre enfant a appris en séance se prolonge au quotidien", "Vous restez acteur de sa progression"].map((item, i) => (
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

            {/* 7. SECTION "SANS ENGAGEMENT" */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <div className="w-20 h-20 mx-auto bg-[#1B263B] text-white rounded-3xl flex items-center justify-center mb-10 shadow-2xl rotate-3">
                            <MessageCircle size={36} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B263B] mb-8 leading-tight">
                            Sans engagement, pour de vrai.
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12">
                            Vous restez parce que ça vous apporte quelque chose, jamais parce qu’il est compliqué de partir. L’annulation reste simple et visible, à tout moment.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "1 mois d'essai gratuit",
                                "Rappel avant la fin de l'essai",
                                "Annulation simple, à tout moment",
                                "Prélèvement toutes les 2 semaines"
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
            <section id="inclus" className="scroll-mt-24 py-32 px-4 bg-[#fafafa] border-y border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1B263B]">Tout ce qui est inclus</h2>
                    </Reveal>

                    <Reveal delay={100} className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">
                        {[
                            { title: "1 activité par jour", desc: "10 minutes, dans l'app, à faire avec votre enfant." },
                            { title: "Le pourquoi", desc: "Une ligne d'explication psychologique pour chaque activité." },
                            { title: "Zéro préparation", desc: "Aucun matériel à acheter, une activité lisible en 20 secondes." },
                            { title: "Une notification", desc: "À l'heure que vous choisissez, pour ne pas y penser." },
                            { title: "Un bilan à 4 semaines", desc: "Les moments réalisés, et si votre enfant réclame le moment." },
                            { title: "1 mois d'essai gratuit", desc: "Avec un rappel avant la fin de l'essai. Annulation simple, à tout moment." }
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
                        <p className="text-[#C5A059] font-bold uppercase tracking-widest text-sm mb-6">Abonnement</p>
                        <div className="flex justify-center items-baseline gap-3 mb-4">
                            <span className="text-7xl md:text-8xl font-serif font-bold text-[#1B263B] tracking-tight">15 $</span>
                            <span className="text-3xl font-bold text-gray-400">+ tx</span>
                        </div>
                        <p className="text-lg font-bold text-[#8F9779] mb-10">toutes les 2 semaines</p>
                        <p className="text-xl text-gray-600 leading-relaxed mb-16">
                            Un premier mois d’essai gratuit. Un prélèvement toutes les deux semaines, au rythme de la paie. Sans engagement : vous arrêtez quand vous voulez.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                            <button
                                onClick={goWaitlist}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B263B] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#2c3e5a] transition-all hover:-translate-y-1 shadow-2xl"
                            >
                                Être prévenu du lancement <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={goPrix}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#1B263B] text-[#1B263B] px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1"
                            >
                                Comparer les programmes
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 font-medium">
                            L’application ouvre bientôt : inscrivez-vous pour être parmi les premières familles prévenues.
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
                                q: "10 minutes par jour, ça suffit vraiment ?",
                                a: "Oui, si ces 10 minutes sont vraiment consacrées à votre enfant. Chez les 3–11 ans, la recherche montre que la qualité du moment compte bien plus que le nombre d'heures. L'objectif n'est pas de tout faire, mais de le faire bien, régulièrement."
                            },
                            {
                                q: "Et quand il devient adolescent ?",
                                a: "À l'adolescence, le temps partagé compte davantage. Raison de plus pour installer tôt l'habitude d'un vrai moment ensemble, court et régulier."
                            },
                            {
                                q: "Faut-il préparer quelque chose ?",
                                a: "Non. Aucun matériel à acheter, aucune préparation : l'activité se lit en 20 secondes et se fait avec ce que vous avez déjà à la maison."
                            },
                            {
                                q: "Comment fonctionne l'essai gratuit ?",
                                a: "Vous profitez d'un mois complet gratuitement. Nous vous envoyons un rappel avant la fin de l'essai, et vous pouvez annuler simplement, à tout moment."
                            },
                            {
                                q: "Pourquoi un prélèvement toutes les 2 semaines ?",
                                a: "Parce que la plupart des familles sont payées toutes les deux semaines : le prélèvement tombe au même rythme que la paie. C'est 15 $ + tx à chaque fois, sans engagement."
                            },
                            {
                                q: "Est-ce une thérapie ?",
                                a: "Non. Le moment qui compte propose des activités parent–enfant tirées de la Méthode THRIVE. Il ne remplace pas un suivi psychologique. Si votre enfant vit une détresse importante, nous vous orienterons vers un professionnel."
                            },
                            {
                                q: "Quel lien avec les programmes THRIVE ?",
                                a: "Les activités viennent de la même Méthode THRIVE que nos programmes Oser essayer et Aller vers les autres. Vous pouvez commencer par Le moment qui compte pour découvrir la méthode, ou l'utiliser pour prolonger un programme à la maison."
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
                            Dix minutes ce soir. <br />
                            <span className="text-[#C5A059]">Un souvenir pour lui.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16">
                            Ce n’est pas le nombre d’heures qui compte. C’est la qualité du moment.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button
                                onClick={goWaitlist}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A059] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#B08D45] transition-all hover:scale-105 shadow-xl"
                            >
                                Être prévenu du lancement <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={goPrix}
                                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
                            >
                                Découvrir les programmes
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
}
