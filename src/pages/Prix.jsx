import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    CheckCircle2, Star, ChevronDown, ArrowRight, Sparkles,
    BarChart2, FileText, Phone, BookOpen, Eye, Compass,
    Shield, TrendingUp, Award, Zap
} from 'lucide-react';
import { PRICING_DATA, PROOF_ITEMS, FAQ_KEYS, PACK_THEMES, UPGRADE_STEPS } from '../data/pricing';
import ContactSection from '../components/ui/ContactSection';

// ── Pack icons ────────────────────────────────────────────────
const PACK_ICONS = {
    diagnostic: Shield,
    essential: TrendingUp,
    advanced: Star,
    performance: Award,
};

const PROOF_ICONS = { BarChart2, FileText, Eye, Phone, BookOpen, Compass };

// ── Accordéon FAQ ─────────────────────────────────────────────
function FaqItem({ q, a, open, onToggle, idx }) {
    return (
        <div className="border border-gray-100 rounded-[1.5rem] overflow-hidden bg-white transition-shadow hover:shadow-sm">
            <button
                id={`faq-q-${idx}`}
                aria-expanded={open}
                aria-controls={`faq-a-${idx}`}
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2"
            >
                <span className="font-bold text-[#1B263B] text-base leading-snug">{q}</span>
                <span className={`shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden>
                    <ChevronDown size={16} className="text-[#1B263B]" />
                </span>
            </button>
            <div
                id={`faq-a-${idx}`}
                role="region"
                aria-labelledby={`faq-q-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-80' : 'max-h-0'}`}
            >
                <p className="px-7 pb-6 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">{a}</p>
            </div>
        </div>
    );
}

// ── Carte de pack ──────────────────────────────────────────────
function PriceCard({ pack, onSelect, t, lang }) {
    const theme = PACK_THEMES[pack.id];
    const Icon = PACK_ICONS[pack.id];
    const rec = pack.isRecommended;
    const entry = pack.isEntry;
    const priceStr = lang === 'en' ? `$${pack.price.toLocaleString()}` : `${pack.price.toLocaleString()} $`;

    return (
        <article
            className={`relative flex flex-col rounded-[2rem] transition-all duration-300 ${
                rec
                    ? 'bg-white border-2 shadow-[0_12px_48px_rgba(197,160,89,0.20)] scale-[1.025] z-10 lg:-mt-4 lg:-mb-4'
                    : 'bg-white border border-gray-100 shadow-md hover:-translate-y-2 hover:shadow-xl'
            }`}
            style={{ borderColor: rec ? theme.accent : undefined }}
        >
            {/* Badge */}
            {rec && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#C5A059] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    <Star size={11} fill="currentColor" /> {t('pricing.badge_recommended')}
                </div>
            )}
            {entry && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#8F9779] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full shadow whitespace-nowrap">
                    <Sparkles size={11} /> {t('pricing.badge_entry')}
                </div>
            )}

            <div className="p-7 flex flex-col h-full pt-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: theme.iconBg }}>
                        <Icon size={22} style={{ color: theme.accent }} />
                    </div>
                    <h3 className="font-serif font-bold text-[#1B263B] text-xl leading-tight mb-0.5">
                        {t(`pricing.${pack.id}.label`)}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        {t(`pricing.${pack.id}.tagline`)}
                    </p>
                </div>

                {/* Price */}
                <div className="text-center mb-5">
                    <div className="flex items-baseline justify-center gap-1">
                        <span className={`font-bold text-[#1B263B] leading-none ${rec ? 'text-5xl' : 'text-4xl'}`}>{priceStr}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{t('pricing.one_time')}</p>
                </div>

                <div className="h-px bg-gray-100 mb-5" />

                {/* Promise */}
                <p className="text-gray-500 text-sm italic leading-relaxed text-center mb-5">
                    « {t(`pricing.${pack.id}.promise`)} »
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-grow">
                    {pack.featureKeys.map(k => (
                        <li key={k} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: theme.accent }} />
                            <span className={rec ? 'font-medium' : ''}>{t(`pricing.${pack.id}.${k}`)}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <button
                    id={`cta-pack-${pack.id}`}
                    onClick={() => onSelect(pack.id)}
                    className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                        background: rec ? theme.accent : '#1B263B',
                        color: '#fff',
                        focusOutlineColor: theme.accent,
                    }}
                    aria-label={`${t('pricing.cta_choose')} — ${t(`pricing.${pack.id}.label`)}`}
                >
                    {entry ? t('pricing.cta_entry') : rec ? t('pricing.cta_recommended') : t('pricing.cta_choose')}
                    <ArrowRight size={16} />
                </button>
            </div>
        </article>
    );
}

// ── Page principale ────────────────────────────────────────────
export default function Prix({ handleSelectProgram }) {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [openFaq, setOpenFaq] = useState(null);

    const goBooking = () => { navigate('/booking'); window.scrollTo(0, 0); };
    const goContact = () => { navigate('/evaluation'); window.scrollTo(0, 0); };

    return (
        <div className="bg-white">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('pricing.seo.title')}</title>
                <meta name="description" content={t('pricing.seo.desc')} />
                <link rel="canonical" href="https://thrivesportpositive.com/prix" />
            </Helmet>

            {/* ══ 1. HERO ══════════════════════════════════════════════ */}
            <section className="relative py-28 px-4 overflow-hidden bg-white" aria-labelledby="pricing-h1">
                {/* Blobs décoratifs */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                    <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-[#C5A059]/6 rounded-full blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 w-[360px] h-[360px] bg-[#8F9779]/6 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                    {/* Pill tag */}
                    <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
                        <Zap size={12} fill="currentColor" />
                        {t('pricing.hero.tag')}
                    </div>

                    <h1 id="pricing-h1" className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1B263B] leading-tight mb-6">
                        {t('pricing.hero.title_1')}{' '}
                        <span className="relative inline-block">
                            {t('pricing.hero.title_highlight')}
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-[#C5A059]/25 -rotate-1 -z-10 rounded" aria-hidden />
                        </span>
                        {t('pricing.hero.title_2') && <>{' '}{t('pricing.hero.title_2')}</>}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
                        {t('pricing.hero.subtitle')}
                    </p>
                    <p className="text-sm text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
                        {t('pricing.hero.reassurance')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#les-packs"
                            id="hero-cta-packs"
                            className="inline-flex items-center justify-center gap-2 bg-[#1B263B] text-white px-9 py-4 rounded-full font-bold text-base hover:bg-[#253550] transition-all hover:-translate-y-0.5 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                        >
                            {t('pricing.hero.cta_primary')} <ArrowRight size={17} />
                        </a>
                        <button
                            id="hero-cta-talk"
                            onClick={goContact}
                            className="inline-flex items-center justify-center gap-2 border-2 border-[#1B263B]/20 text-[#1B263B] px-9 py-4 rounded-full font-bold text-base hover:border-[#1B263B] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                        >
                            {t('pricing.hero.cta_secondary')}
                        </button>
                    </div>
                </div>
            </section>

            {/* ══ 2. BLOC ÉMOTIONNEL ═══════════════════════════════════ */}
            <section className="py-14 px-4 bg-gray-50/60" aria-label={t('pricing.emotional.aria_label')}>
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#1B263B] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0" aria-hidden>
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8F9779]/8 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3" />
                        </div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
                            <div className="md:col-span-3">
                                <p className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4">{t('pricing.emotional.tag')}</p>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-5">
                                    {t('pricing.emotional.title')}
                                </h2>
                                <p className="text-white/75 leading-relaxed mb-4 text-base">{t('pricing.emotional.body1')}</p>
                                <p className="text-white/60 leading-relaxed text-sm">{t('pricing.emotional.body2')}</p>
                            </div>
                            <div className="md:col-span-2 space-y-3">
                                {['p1', 'p2', 'p3'].map(k => (
                                    <div key={k} className="flex items-start gap-3 bg-white/7 backdrop-blur-sm rounded-2xl p-4 border border-white/8">
                                        <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 size={17} className="text-[#C5A059]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm mb-0.5">{t(`pricing.emotional.${k}_title`)}</p>
                                            <p className="text-white/60 text-xs leading-relaxed">{t(`pricing.emotional.${k}_desc`)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 3. GRILLE DES 4 PACKS ════════════════════════════════ */}
            <section id="les-packs" className="py-20 px-4 bg-white" aria-labelledby="packs-heading">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-3">
                        <h2 id="packs-heading" className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mb-4">
                            {t('pricing.packs.title')}
                        </h2>
                        <div className="h-1 w-16 bg-[#C5A059] mx-auto mb-5 rounded-full" />
                        <p className="text-gray-600 max-w-xl mx-auto">{t('pricing.packs.subtitle')}</p>
                    </div>
                    <p className="text-center text-xs text-gray-400 max-w-lg mx-auto mb-14">
                        {t('pricing.packs.note')}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch pt-5">
                        {PRICING_DATA.map(pack => (
                            <PriceCard
                                key={pack.id}
                                pack={pack}
                                onSelect={goBooking}
                                t={t}
                                lang={i18n.language}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 4. ESCALIER DE VALEUR ════════════════════════════════ */}
            <section className="py-20 px-4 bg-gray-50/60" aria-labelledby="upgrade-heading">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 id="upgrade-heading" className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mb-4">
                            {t('pricing.upgrade.title')}
                        </h2>
                        <div className="h-1 w-16 bg-[#C5A059] mx-auto mb-5 rounded-full" />
                        <p className="text-gray-600 max-w-xl mx-auto">{t('pricing.upgrade.subtitle')}</p>
                    </div>

                    <div className="space-y-4">
                        {UPGRADE_STEPS.map((step, i) => (
                            <div
                                key={step.id}
                                className="flex items-start gap-5 p-6 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
                                    style={{ background: step.color }}
                                    aria-hidden
                                >
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1B263B] mb-1 text-base">{t(`pricing.upgrade.${step.id}_title`)}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{t(`pricing.upgrade.${step.id}_desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <blockquote className="mt-12 text-center">
                        <p className="font-serif italic text-[#1B263B] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            « {t('pricing.upgrade.quote')} »
                        </p>
                    </blockquote>
                </div>
            </section>

            {/* ══ 5. PREUVES CONCRÈTES ═════════════════════════════════ */}
            <section className="py-20 px-4 bg-white" aria-labelledby="proof-heading">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 id="proof-heading" className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mb-4">
                            {t('pricing.proof.title')}
                        </h2>
                        <div className="h-1 w-16 bg-[#C5A059] mx-auto mb-5 rounded-full" />
                        <p className="text-gray-600 max-w-xl mx-auto">{t('pricing.proof.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {PROOF_ITEMS.map(item => {
                            const Icon = PROOF_ICONS[item.icon] || FileText;
                            return (
                                <div
                                    key={item.id}
                                    className="group bg-white border border-gray-100 rounded-[1.5rem] p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">
                                        <Icon size={21} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#1B263B] text-base mb-2">{t(`pricing.proof.${item.id}_title`)}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{t(`pricing.proof.${item.id}_desc`)}</p>
                                        <span className="inline-block mt-3 text-[11px] font-bold uppercase tracking-widest text-[#8F9779]">
                                            {item.packs}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══ 6. FAQ ═══════════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-gray-50/60" aria-labelledby="faq-heading">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 id="faq-heading" className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] mb-4">
                            {t('pricing.faq.title')}
                        </h2>
                        <div className="h-1 w-16 bg-[#C5A059] mx-auto mb-5 rounded-full" />
                        <p className="text-gray-600">{t('pricing.faq.subtitle')}</p>
                    </div>

                    <div className="space-y-3">
                        {FAQ_KEYS.map((k, i) => (
                            <FaqItem
                                key={k}
                                idx={i}
                                q={t(`pricing.faq.${k}_q`)}
                                a={t(`pricing.faq.${k}_a`)}
                                open={openFaq === i}
                                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 7. CTA FINAL ═════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-white" aria-label="CTA final">
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-[#1B263B] rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden">
                        <div className="pointer-events-none absolute inset-0" aria-hidden>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-[#C5A059]/10 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-7">
                                <Sparkles size={12} /> {t('pricing.cta_final.tag')}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-5">
                                {t('pricing.cta_final.title')}
                            </h2>
                            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
                                {t('pricing.cta_final.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    id="final-cta-primary"
                                    onClick={goBooking}
                                    className="inline-flex items-center justify-center gap-2 bg-[#C5A059] text-white px-10 py-4 rounded-full font-bold text-base hover:bg-[#B08D45] transition-all hover:-translate-y-0.5 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    {t('pricing.cta_final.btn_primary')} <ArrowRight size={17} />
                                </button>
                                <button
                                    id="final-cta-secondary"
                                    onClick={goContact}
                                    className="inline-flex items-center justify-center border-2 border-white/25 text-white px-10 py-4 rounded-full font-bold text-base hover:border-white/60 hover:bg-white/8 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    {t('pricing.cta_final.btn_secondary')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact réutilisé */}
            <div className="pb-8">
                <ContactSection handleSelectProgram={handleSelectProgram} />
            </div>
        </div>
    );
}
