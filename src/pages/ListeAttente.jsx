import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import logo from '../assets/logo.png';
import hero from '../assets/waitlist-hero.jpg';
import { joinWaitlist, readSource, validate } from '../lib/waitlist';

// Page publique de liste d'attente — rendue HORS de la coquille du site
// (Navbar/Footer), voir App.jsx : la maquette apporte son propre en-tête et son
// propre pied de page, volontairement minimaux pour ne rien mettre entre le
// visiteur et le formulaire.

// Preuve sociale. Deux valeurs à tenir à jour à la main : elles créent
// l'urgence, donc elles doivent rester vraies.
const SPOTS_LEFT = 2;
const FAMILIES = 47;

const PHONE_DISPLAY = '(263) 362-2030';
const PHONE_HREF = 'tel:+12633622030';
const CONTACT_EMAIL = 'info@thrivesportpositive.com';

const NAVY = '#1B263B';
const GOLD = '#C5A059';
const SAGE = '#8F9779';
const GREY = '#5F6472';
const CREAM = '#F7F5F2';
const BORDER = '#E7E4DE';

const EMPTY = { prenom: '', email: '', telephone: '' };

const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '14px 16px',
    // Bordure en propriétés séparées, pas en raccourci : l'état d'erreur ne
    // surcharge que `borderColor`, et React refuse de mélanger les deux.
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: BORDER,
    borderRadius: 12,
    // 16 px minimum : en dessous, Safari iOS zoome tout seul au focus.
    font: "400 16px 'Plus Jakarta Sans', sans-serif",
    color: NAVY,
    background: '#fff',
    outline: 'none',
};

const labelStyle = { font: "500 12px 'Plus Jakarta Sans', sans-serif", color: NAVY };
const fieldWrap = { display: 'flex', flexDirection: 'column', gap: 6 };

export default function ListeAttente() {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const [values, setValues] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [done, setDone] = useState(false);

    // D'où vient l'inscrit : ?source=qr (affiche imprimée), ?utm_source=insta
    // (bio Instagram), ?source=site. Lu une fois, figé pour la visite.
    const source = useMemo(() => readSource(location.search), [location.search]);

    const currentLang = i18n.resolvedLanguage || i18n.language || 'fr';
    const isFr = currentLang.startsWith('fr');

    const setField = (name, value) => {
        setValues((prev) => ({ ...prev, [name]: value }));
        // L'erreur disparaît dès la correction, pas au prochain envoi.
        setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);

        const found = validate(values);
        if (Object.keys(found).length > 0) {
            setErrors({
                prenom: found.prenom && t('waitlist_page.err_prenom'),
                email: found.email && t('waitlist_page.err_email'),
                telephone: found.telephone && t('waitlist_page.err_telephone'),
            });
            return;
        }

        setSubmitting(true);
        const { ok } = await joinWaitlist({ ...values, source });
        setSubmitting(false);

        if (!ok) {
            setSubmitError(t('waitlist_page.err_generic'));
            return;
        }
        setDone(true);
    };

    const field = (name, { type, autoComplete, inputMode }) => (
        <div style={fieldWrap}>
            <label htmlFor={`wl-${name}`} style={labelStyle}>
                {t(`waitlist_page.lbl_${name}`)}
            </label>
            <input
                id={`wl-${name}`}
                name={name}
                type={type}
                autoComplete={autoComplete}
                inputMode={inputMode}
                placeholder={t(`waitlist_page.ph_${name}`)}
                value={values[name]}
                onChange={(e) => setField(name, e.target.value)}
                aria-invalid={errors[name] ? 'true' : undefined}
                aria-describedby={errors[name] ? `wl-${name}-err` : undefined}
                className="wl-input"
                style={errors[name] ? { ...inputStyle, borderColor: '#C0453B' } : inputStyle}
            />
            {errors[name] && (
                <span
                    id={`wl-${name}-err`}
                    role="alert"
                    style={{ font: "500 12px 'Plus Jakarta Sans', sans-serif", color: '#C0453B' }}
                >
                    {errors[name]}
                </span>
            )}
        </div>
    );

    return (
        <div style={{ minHeight: '100dvh', background: CREAM, display: 'flex', flexDirection: 'column' }}>
            <SEO
                title={t('waitlist_page.seo_title')}
                description={t('waitlist_page.seo_desc')}
                url="https://thrivesportpositive.com/liste-attente"
            />

            {/* Styles interactifs : les pseudo-classes ne s'expriment pas en
                style inline, et la maquette repose dessus (focus doré, survol). */}
            <style>{`
                .wl-input::placeholder { color:#B4B1A9; }
                .wl-input:focus { border-color:${GOLD}; box-shadow:0 0 0 3px rgba(197,160,89,.16); }
                .wl-submit:hover:not(:disabled) { background:#2c3e5a; }
                .wl-submit:disabled { opacity:.6; cursor:default; }
                .wl-link:hover { color:${GOLD}; }
                .wl-lang { background:none; border:none; padding:0; cursor:pointer; font:inherit; color:inherit; }
            `}</style>

            <header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '16px clamp(20px,5vw,48px)',
                    background: CREAM,
                }}
            >
                <img
                    src={logo}
                    alt="Thrive Sport Positive"
                    style={{ height: 'clamp(32px,6vw,44px)', width: 'auto', objectFit: 'contain' }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px,3vw,24px)' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 7,
                            font: "500 13px 'Plus Jakarta Sans', sans-serif",
                            color: GREY,
                        }}
                    >
                        <button
                            type="button"
                            className="wl-lang"
                            onClick={() => i18n.changeLanguage('fr')}
                            aria-pressed={isFr}
                            style={{
                                color: isFr ? NAVY : GREY,
                                fontWeight: isFr ? 700 : 500,
                                minHeight: 44,
                            }}
                        >
                            FR
                        </button>
                        <span style={{ opacity: 0.35 }}>|</span>
                        <button
                            type="button"
                            className="wl-lang"
                            onClick={() => i18n.changeLanguage('en')}
                            aria-pressed={!isFr}
                            style={{
                                color: !isFr ? NAVY : GREY,
                                fontWeight: !isFr ? 700 : 500,
                                minHeight: 44,
                            }}
                        >
                            EN
                        </button>
                    </div>
                    <a
                        href={PHONE_HREF}
                        className="wl-link"
                        style={{
                            font: "600 13px 'Plus Jakarta Sans', sans-serif",
                            color: NAVY,
                            whiteSpace: 'nowrap',
                            textDecoration: 'none',
                        }}
                    >
                        {PHONE_DISPLAY}
                    </a>
                </div>
            </header>

            <main
                style={{
                    flex: 1,
                    width: '100%',
                    maxWidth: 1220,
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    padding: 'clamp(16px,3vw,40px) clamp(20px,5vw,48px) 0',
                }}
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'clamp(28px,4vw,56px)' }}>
                    {/* Colonne gauche : la promesse */}
                    <div
                        style={{
                            flex: '1 1 420px',
                            minWidth: 'min(100%,320px)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'clamp(14px,2.2vw,24px)',
                            textAlign: 'left',
                        }}
                    >
                        <div
                            style={{
                                font: "600 clamp(11px,1.2vw,12px) 'Plus Jakarta Sans', sans-serif",
                                letterSpacing: '.16em',
                                textTransform: 'uppercase',
                                color: SAGE,
                            }}
                        >
                            {t('waitlist_page.eyebrow')}
                        </div>
                        <h1
                            style={{
                                margin: 0,
                                font: "400 clamp(32px,5.2vw,52px)/1.16 'Playfair Display', serif",
                                color: NAVY,
                                maxWidth: '16ch',
                                textWrap: 'pretty',
                            }}
                        >
                            {t('waitlist_page.title_before')}
                            <em style={{ fontStyle: 'italic', color: SAGE }}>
                                {t('waitlist_page.title_accent')}
                            </em>
                            {t('waitlist_page.title_after')}
                        </h1>
                        <p
                            style={{
                                margin: 0,
                                font: "400 clamp(15px,1.6vw,18px)/1.65 'Plus Jakarta Sans', sans-serif",
                                color: GREY,
                                maxWidth: '46ch',
                            }}
                        >
                            {t('waitlist_page.intro')}
                        </p>
                        <img
                            src={hero}
                            alt={t('waitlist_page.hero_alt')}
                            style={{
                                width: '100%',
                                height: 'clamp(170px,24vw,230px)',
                                objectFit: 'cover',
                                objectPosition: 'center 25%',
                                borderRadius: 'clamp(20px,2.5vw,24px)',
                                border: 'clamp(4px,.6vw,6px) solid #fff',
                                boxShadow: '0 16px 36px rgba(27,38,59,.14)',
                            }}
                        />
                    </div>

                    {/* Colonne droite : le formulaire */}
                    <div
                        style={{
                            flex: '1 1 400px',
                            minWidth: 'min(100%,320px)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'clamp(18px,2.4vw,26px)',
                        }}
                    >
                        {/* Chiffres clés au-dessus du formulaire : ils répondent
                            au « c'est quoi, au juste ? » avant qu'on demande
                            ses coordonnées au visiteur. */}
                        <KeyFigures t={t} />

                        <div
                            id="formulaire"
                            style={{
                                background: '#fff',
                                borderRadius: 'clamp(20px,2.5vw,24px)',
                                boxShadow: '0 18px 44px rgba(27,38,59,.12)',
                                padding: 'clamp(22px,3.2vw,36px)',
                                boxSizing: 'border-box',
                            }}
                        >
                            {!done ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                        <div
                                            style={{
                                                font: "700 clamp(20px,2.6vw,26px) 'Playfair Display', serif",
                                                color: NAVY,
                                            }}
                                        >
                                            {t('waitlist_page.form_title')}
                                        </div>
                                        <div
                                            style={{
                                                font: "400 14px 'Plus Jakarta Sans', sans-serif",
                                                color: GREY,
                                            }}
                                        >
                                            {t('waitlist_page.form_subtitle')}
                                        </div>
                                    </div>

                                    <form
                                        onSubmit={handleSubmit}
                                        noValidate
                                        style={{ display: 'flex', flexDirection: 'column', gap: 15 }}
                                    >
                                        {field('prenom', { type: 'text', autoComplete: 'given-name' })}
                                        {field('email', {
                                            type: 'email',
                                            autoComplete: 'email',
                                            inputMode: 'email',
                                        })}
                                        {field('telephone', {
                                            type: 'tel',
                                            autoComplete: 'tel',
                                            inputMode: 'tel',
                                        })}

                                        {submitError && (
                                            <div
                                                role="alert"
                                                style={{
                                                    padding: '12px 14px',
                                                    borderRadius: 12,
                                                    background: 'rgba(192,69,59,.08)',
                                                    font: "500 13px/1.5 'Plus Jakarta Sans', sans-serif",
                                                    color: '#C0453B',
                                                }}
                                            >
                                                {submitError}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="wl-submit"
                                            style={{
                                                marginTop: 8,
                                                width: '100%',
                                                padding: '18px 20px',
                                                border: 'none',
                                                borderRadius: 14,
                                                background: NAVY,
                                                color: '#fff',
                                                font: "700 16px 'Plus Jakarta Sans', sans-serif",
                                                cursor: 'pointer',
                                                transition: 'background .2s',
                                            }}
                                        >
                                            {submitting
                                                ? t('waitlist_page.submitting')
                                                : t('waitlist_page.submit')}
                                        </button>
                                    </form>

                                    {/* Consentement (Loi 25) : recueilli par cette mention, et
                                        enregistré dans la colonne `consent`. */}
                                    <div
                                        style={{
                                            textAlign: 'center',
                                            font: "400 12px/1.5 'Plus Jakarta Sans', sans-serif",
                                            color: '#8B8F86',
                                        }}
                                    >
                                        {t('waitlist_page.consent')}
                                    </div>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 16,
                                        textAlign: 'center',
                                        padding: 'clamp(14px,3vw,24px) 0',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 64,
                                            height: 64,
                                            borderRadius: '50%',
                                            background: 'rgba(197,160,89,.16)',
                                            color: GOLD,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            font: "400 30px 'Plus Jakarta Sans', sans-serif",
                                        }}
                                    >
                                        ✓
                                    </div>
                                    <div
                                        style={{
                                            font: "700 clamp(22px,3vw,28px) 'Playfair Display', serif",
                                            color: NAVY,
                                        }}
                                    >
                                        {t('waitlist_page.done_title')}
                                    </div>
                                    <div
                                        style={{
                                            font: "400 15px/1.6 'Plus Jakarta Sans', sans-serif",
                                            color: GREY,
                                            maxWidth: '34ch',
                                        }}
                                    >
                                        {t('waitlist_page.done_body')}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setValues(EMPTY);
                                            setErrors({});
                                            setDone(false);
                                        }}
                                        style={{
                                            border: 'none',
                                            background: 'none',
                                            color: '#B4B1A9',
                                            font: "400 12px 'Plus Jakarta Sans', sans-serif",
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                            minHeight: 44,
                                        }}
                                    >
                                        {t('waitlist_page.done_reset')}
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                {/* Comment ça se passe */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'clamp(20px,2.4vw,32px)',
                        marginTop: 'clamp(32px,5vw,56px)',
                    }}
                >
                    {[
                        [NAVY, '#fff', '1', 'step1'],
                        [SAGE, '#fff', '2', 'step2'],
                        [GOLD, NAVY, '3', 'step3'],
                    ].map(([bg, fg, num, key]) => (
                        <div
                            key={key}
                            style={{ flex: '1 1 210px', display: 'flex', flexDirection: 'column', gap: 8 }}
                        >
                            <span
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    background: bg,
                                    color: fg,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    font: "700 13px 'Plus Jakarta Sans', sans-serif",
                                }}
                            >
                                {num}
                            </span>
                            <div style={{ font: "600 15px 'Plus Jakarta Sans', sans-serif", color: NAVY }}>
                                {t(`waitlist_page.${key}_title`)}
                            </div>
                            <div
                                style={{
                                    font: "400 14px/1.55 'Plus Jakarta Sans', sans-serif",
                                    color: GREY,
                                }}
                            >
                                {t(`waitlist_page.${key}_body`)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rareté */}
                <div
                    style={{
                        margin: 'clamp(28px,4vw,48px) 0 clamp(40px,6vw,72px)',
                        padding: 'clamp(16px,2.4vw,22px) clamp(18px,3vw,28px)',
                        borderRadius: 18,
                        background: 'rgba(197,160,89,.14)',
                        border: '1px solid rgba(197,160,89,.35)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px 14px',
                        textAlign: 'center',
                    }}
                >
                    <span
                        style={{
                            font: "700 clamp(14px,1.6vw,15px) 'Plus Jakarta Sans', sans-serif",
                            color: NAVY,
                        }}
                    >
                        {t('waitlist_page.cohort')}
                    </span>
                    <span style={{ color: GOLD }}>·</span>
                    <span
                        style={{
                            font: "400 clamp(13px,1.5vw,15px) 'Plus Jakarta Sans', sans-serif",
                            color: GREY,
                        }}
                    >
                        {t('waitlist_page.cohort_proof', { spots: SPOTS_LEFT, families: FAMILIES })}
                    </span>
                </div>
            </main>

            <footer
                style={{
                    padding: 'clamp(22px,3vw,26px) clamp(20px,5vw,48px)',
                    paddingBottom: 'calc(clamp(22px,3vw,26px) + env(safe-area-inset-bottom))',
                    background: NAVY,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px 24px',
                }}
            >
                <div
                    style={{
                        font: "400 13px 'Plus Jakarta Sans', sans-serif",
                        color: 'rgba(255,255,255,.55)',
                    }}
                >
                    {t('waitlist_page.footer')}
                </div>
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    style={{
                        font: "600 13px 'Plus Jakarta Sans', sans-serif",
                        color: GOLD,
                        textDecoration: 'none',
                    }}
                >
                    {CONTACT_EMAIL}
                </a>
            </footer>
        </div>
    );
}

// Trois chiffres séparés par un filet. Extrait du corps de la page pour que
// l'ordre des blocs de la colonne droite se lise d'un coup d'œil.
function KeyFigures({ t }) {
    const figures = [
        ['13', t('waitlist_page.stat_sessions')],
        ['8', t('waitlist_page.stat_pillars')],
        ['8-17', t('waitlist_page.stat_ages')],
    ];

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 'clamp(10px,2vw,24px)',
                padding: '0 clamp(4px,1.5vw,12px)',
            }}
        >
            {figures.map(([value, label], i) => (
                <React.Fragment key={value}>
                    {i > 0 && (
                        <div
                            style={{
                                flex: 'none',
                                width: 1,
                                alignSelf: 'stretch',
                                background: '#E3E0D9',
                            }}
                        />
                    )}
                    <div
                        style={{
                            flex: '1 1 0',
                            minWidth: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                        }}
                    >
                        <span
                            style={{
                                font: "700 clamp(22px,2.6vw,26px) 'Playfair Display', serif",
                                color: NAVY,
                            }}
                        >
                            {value}
                        </span>
                        <span
                            style={{
                                font: "400 clamp(12px,1.3vw,13px)/1.35 'Plus Jakarta Sans', sans-serif",
                                color: GREY,
                            }}
                        >
                            {label}
                        </span>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}
