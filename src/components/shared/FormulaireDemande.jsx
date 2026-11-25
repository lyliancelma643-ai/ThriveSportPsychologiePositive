import React, { useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Bouton from './Bouton';
import { envoyerDemande, validerDemande } from '../../lib/formulaires';
import { FORMULAIRES } from '../../content/textes';

// Formulaire de demande réutilisable → public.waitlist (via envoyerDemande).
//
// Props
//  type          'appel' | 'reservation' | 'maison-beta' | 'partenaire' (enregistré dans notes)
//  interets      liste d'options {value,label} (défaut : FORMULAIRES.interets)
//  champs        liste parmi : 'prenom','email','telephone','interet','moment','organisation','message'
//                (prenom et email sont toujours affichés)
//  titre, texte  en-tête facultatif
//  boutonLabel   libellé du bouton d'envoi (défaut FORMULAIRES.envoyer)
//  confirmation  { titre, texte } affiché après l'envoi
//  id            ancre éventuelle (ex. « acces »)
//  className
// - Le téléphone est obligatoire sauf pour 'maison-beta' (alors facultatif).
// - ?programme=groupe|individuel|complet|maison présélectionne l'intérêt.
// - Case de consentement obligatoire (Loi 25) ; aucun champ sur l'enfant.
const PROGRAMMES_URL = ['groupe', 'individuel', 'complet', 'maison'];

const champBase =
    'w-full min-h-[48px] rounded-2xl border bg-white px-4 py-3 text-base text-gray-900 ' +
    'focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059]';

// Défini hors du composant : sinon il serait recréé à chaque frappe et le champ perdrait le focus.
const Champ = ({ uid, nom, label, erreur, children }) => (
    <div>
        <label htmlFor={`${uid}-${nom}`} className="block text-sm font-semibold text-[#1B263B] mb-1.5">
            {label}
        </label>
        {children}
        {erreur && (
            <p id={`${uid}-${nom}-err`} className="mt-1.5 text-sm text-[#B42318]">
                {erreur}
            </p>
        )}
    </div>
);

const FormulaireDemande = ({
    type,
    champs = ['prenom', 'email'],
    titre,
    texte,
    boutonLabel,
    confirmation,
    interets = FORMULAIRES.interets, // options proposées pour « Ce qui vous intéresse »
    id,
    className = '',
}) => {
    const uid = useId();
    const { search } = useLocation();
    const L = FORMULAIRES.champs;
    const veut = (c) => c === 'prenom' || c === 'email' || champs.includes(c);

    const programmeUrl = new URLSearchParams(search).get('programme');
    const interetInitial = PROGRAMMES_URL.includes(programmeUrl)
        ? programmeUrl
        : type === 'maison-beta'
          ? 'maison'
          : '';

    const [valeurs, setValeurs] = useState({
        prenom: '',
        email: '',
        telephone: '',
        interet: interetInitial,
        moment: '',
        organisation: '',
        message: '',
        consentement: false,
        site: '', // leurre anti-robots : doit rester vide
    });
    const [erreurs, setErreurs] = useState({});
    const [etat, setEtat] = useState('repos'); // repos | envoi | ok | echec
    const confirmRef = useRef(null);

    // Le paramètre d'URL peut arriver après le premier rendu (navigation interne).
    useEffect(() => {
        if (PROGRAMMES_URL.includes(programmeUrl) && champs.includes('interet')) {
            setValeurs((v) => (v.interet ? v : { ...v, interet: programmeUrl }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [programmeUrl]);

    useEffect(() => {
        if (etat === 'ok' && confirmRef.current) confirmRef.current.focus();
    }, [etat]);

    const maj = (champ) => (e) => {
        const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setValeurs((prev) => ({ ...prev, [champ]: v }));
        if (erreurs[champ]) setErreurs((prev) => ({ ...prev, [champ]: undefined }));
    };

    const telephoneAffiche = veut('telephone');
    const telephoneRequis = telephoneAffiche && type !== 'maison-beta';

    const soumettre = async (e) => {
        e.preventDefault();
        if (etat === 'envoi') return;

        // Leurre rempli : on fait semblant que c'est envoyé, sans rien écrire.
        if (valeurs.site) {
            setEtat('ok');
            return;
        }

        const err = validerDemande(valeurs, {
            telephoneRequis,
            organisationRequise: veut('organisation') && type === 'partenaire',
            consentementRequis: true,
        });
        // Seuls les champs affichés comptent.
        if (!telephoneAffiche) delete err.telephone;
        setErreurs(err);
        if (Object.keys(err).length) {
            const premier = Object.keys(err)[0];
            document.getElementById(`${uid}-${premier}`)?.focus();
            return;
        }

        setEtat('envoi');
        const { ok } = await envoyerDemande({
            type,
            prenom: valeurs.prenom,
            email: valeurs.email,
            telephone: telephoneAffiche ? valeurs.telephone : '',
            interet: veut('interet') || type === 'maison-beta' ? valeurs.interet : '',
            moment: veut('moment') ? valeurs.moment : '',
            organisation: veut('organisation') ? valeurs.organisation : '',
            message: veut('message') ? valeurs.message : '',
        });
        setEtat(ok ? 'ok' : 'echec');
    };

    if (etat === 'ok') {
        return (
            <div id={id} className={`bg-white rounded-[2rem] border border-gray-100 shadow-lg p-8 sm:p-10 ${className}`}>
                <div role="status" aria-live="polite">
                    <h3
                        ref={confirmRef}
                        tabIndex={-1}
                        className="text-2xl font-serif font-bold text-[#1B263B] focus:outline-none"
                    >
                        {confirmation?.titre}
                    </h3>
                    {confirmation?.texte && <p className="mt-3 text-gray-600 leading-relaxed">{confirmation.texte}</p>}
                </div>
            </div>
        );
    }

    const attrs = (nom) => ({
        id: `${uid}-${nom}`,
        name: nom,
        value: valeurs[nom],
        onChange: maj(nom),
        'aria-invalid': erreurs[nom] ? 'true' : undefined,
        'aria-describedby': erreurs[nom] ? `${uid}-${nom}-err` : undefined,
        className: `${champBase} ${erreurs[nom] ? 'border-[#B42318]' : 'border-gray-300'}`,
    });

    return (
        <form
            id={id}
            onSubmit={soumettre}
            noValidate
            className={`bg-white rounded-[2rem] border border-gray-100 shadow-lg p-7 sm:p-10 scroll-mt-24 ${className}`}
        >
            {titre && <h3 className="text-2xl font-serif font-bold text-[#1B263B]">{titre}</h3>}
            {texte && <p className="mt-2 text-gray-600 leading-relaxed">{texte}</p>}

            <div className={`space-y-5 ${titre || texte ? 'mt-6' : ''}`}>
                <Champ uid={uid} nom="prenom" label={L.prenom} erreur={erreurs.prenom}>
                    <input type="text" autoComplete="given-name" required {...attrs('prenom')} />
                </Champ>

                <Champ uid={uid} nom="email" label={L.email} erreur={erreurs.email}>
                    <input type="email" autoComplete="email" inputMode="email" required {...attrs('email')} />
                </Champ>

                {telephoneAffiche && (
                    <Champ uid={uid} nom="telephone" label={telephoneRequis ? L.telephone : L.telephoneFacultatif} erreur={erreurs.telephone}>
                        <input
                            type="tel"
                            autoComplete="tel"
                            inputMode="tel"
                            required={telephoneRequis}
                            {...attrs('telephone')}
                        />
                    </Champ>
                )}

                {veut('organisation') && (
                    <Champ uid={uid} nom="organisation" label={L.organisation} erreur={erreurs.organisation}>
                        <input type="text" autoComplete="organization" {...attrs('organisation')} />
                    </Champ>
                )}

                {veut('interet') && (
                    <Champ uid={uid} nom="interet" label={L.interet} erreur={erreurs.interet}>
                        <select {...attrs('interet')}>
                            <option value="">{L.choisir}</option>
                            {interets.map((o) => (
                                <option key={o.value} value={o.value}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                    </Champ>
                )}

                {veut('moment') && (
                    <Champ uid={uid} nom="moment" label={L.moment} erreur={erreurs.moment}>
                        <select {...attrs('moment')}>
                            <option value="">{L.choisir}</option>
                            {FORMULAIRES.moments.map((o) => (
                                <option key={o.value} value={o.value}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                    </Champ>
                )}

                {veut('message') && (
                    <Champ uid={uid} nom="message" label={L.message} erreur={erreurs.message}>
                        <textarea rows={4} maxLength={1000} {...attrs('message')} />
                    </Champ>
                )}

                {/* Leurre anti-robots : invisible et hors parcours clavier. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor={`${uid}-site`}>Site web</label>
                    <input
                        id={`${uid}-site`}
                        name="site"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={valeurs.site}
                        onChange={maj('site')}
                    />
                </div>

                <div>
                    <div className="flex items-start gap-3">
                        <input
                            id={`${uid}-consentement`}
                            name="consentement"
                            type="checkbox"
                            checked={valeurs.consentement}
                            onChange={maj('consentement')}
                            aria-invalid={erreurs.consentement ? 'true' : undefined}
                            aria-describedby={erreurs.consentement ? `${uid}-consentement-err` : undefined}
                            className="mt-1 h-5 w-5 shrink-0 rounded border-gray-400 accent-[#1B263B] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2"
                        />
                        <label htmlFor={`${uid}-consentement`} className="text-sm text-gray-700 leading-relaxed">
                            {FORMULAIRES.consentement}{' '}
                            <Link to="/confidentialite" className="underline text-[#1B263B] hover:text-[#8A6A2F]">
                                {FORMULAIRES.lienConfidentialite}
                            </Link>
                            .
                        </label>
                    </div>
                    {erreurs.consentement && (
                        <p id={`${uid}-consentement-err`} className="mt-1.5 text-sm text-[#B42318]">
                            {erreurs.consentement}
                        </p>
                    )}
                </div>
            </div>

            {etat === 'echec' && (
                <p role="alert" className="mt-5 rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-[#B42318]">
                    {FORMULAIRES.erreur}
                </p>
            )}

            <Bouton type="submit" taille="lg" className="w-full mt-6" disabled={etat === 'envoi'} aria-busy={etat === 'envoi'}>
                {etat === 'envoi' ? FORMULAIRES.envoiEnCours : boutonLabel || FORMULAIRES.envoyer}
            </Bouton>
        </form>
    );
};

export default FormulaireDemande;
