import React from 'react';
import { Check } from 'lucide-react';
import Bouton from './Bouton';
import { formatPrix } from '../../data/offre';

// Carte d'offre (un programme ou THRIVE Maison).
//  nom, accroche   titre et sous-titre
//  prix            nombre (formaté avec formatPrix), 0 → « Gratuit », ou chaîne déjà formatée
//  prefixePrix     petit texte avant le prix (ex. « Dès »)
//  prixBarre       ancien prix, affiché barré (ex. PROGRAMMES.groupe.prix pendant l'offre fondatrice)
//  mention         ligne sous le prix (ex. NOTE_TAXES, « 2 versements égaux »)
//  points          liste de phrases courtes (avec coche)
//  cta             { libelle, to | href, variante? } → bouton ; ou passer un élément via `action`
//  action          élément React à la place du bouton (ex. <CtaMaison />)
//  badge           étiquette en haut (ex. PROGRAMMES.groupe.badge = « Programme phare »)
//  accent          true → carte mise en avant (bordure or)
//  id, className
const CarteOffre = ({
    nom,
    accroche,
    prix,
    prefixePrix,
    prixBarre,
    mention,
    points = [],
    cta,
    action,
    badge,
    accent = false,
    id,
    className = '',
}) => {
    const fmt = (p) => (typeof p === 'number' ? (p === 0 ? 'Gratuit' : formatPrix(p)) : p);

    return (
        <article
            id={id}
            className={`relative flex flex-col h-full bg-white rounded-[2rem] p-7 sm:p-8 shadow-lg ${
                accent ? 'border-2 border-[#C5A059]' : 'border border-gray-100'
            } ${className}`}
        >
            {badge && (
                <span className="absolute -top-3 left-7 bg-[#C5A059] text-[#1B263B] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                    {badge}
                </span>
            )}
            <h3 className="text-2xl font-serif font-bold text-[#1B263B]">{nom}</h3>
            {accroche && <p className="mt-1 text-[#6F7A5A] font-medium">{accroche}</p>}

            {prix !== undefined && prix !== null && (
                <div className="mt-6">
                    <p className="flex flex-wrap items-baseline gap-x-2">
                        {prefixePrix && <span className="text-sm text-gray-500">{prefixePrix}</span>}
                        <span className="text-4xl font-serif font-bold text-[#1B263B]">{fmt(prix)}</span>
                        {prixBarre !== undefined && prixBarre !== null && (
                            <span className="text-lg text-gray-500 line-through">
                                <span className="sr-only">Ancien prix : </span>
                                {fmt(prixBarre)}
                            </span>
                        )}
                    </p>
                    {mention && <p className="mt-1 text-sm text-gray-600">{mention}</p>}
                </div>
            )}

            {points.length > 0 && (
                <ul className="mt-6 space-y-3 flex-1">
                    {points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-gray-700">
                            <Check size={18} aria-hidden="true" className="mt-1 shrink-0 text-[#8A6A2F]" />
                            <span>{p}</span>
                        </li>
                    ))}
                </ul>
            )}

            {(cta || action) && (
                <div className="mt-8 pt-2">
                    {action ??
                        (cta && (
                            <Bouton
                                variante={cta.variante || (accent ? 'primaire' : 'secondaire')}
                                to={cta.to}
                                href={cta.href}
                                className="w-full"
                            >
                                {cta.libelle}
                            </Bouton>
                        ))}
                </div>
            )}
        </article>
    );
};

export default CarteOffre;
