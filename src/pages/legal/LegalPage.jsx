import React from 'react';
import SEO from '../../components/seo/SEO';

// Gabarit commun des pages légales : lecture confortable, sommaire cliquable,
// date de mise à jour visible. Les passages encore à trancher sont balisés par
// <ToConfirm> (surlignés) tant que LEGAL_DRAFT vaut true.

/** Passe à false une fois les textes validés (juriste) : retire le bandeau
 *  « version préliminaire » et le surlignage des points à confirmer. */
export const LEGAL_DRAFT = true;

export const ToConfirm = ({ children }) =>
    LEGAL_DRAFT ? (
        <mark className="bg-amber-100 text-amber-900 px-1 rounded">[À confirmer : {children}]</mark>
    ) : null;

export const Section = ({ id, title, children }) => (
    <section id={id} className="scroll-mt-28 mb-10">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1B263B] mb-4">{title}</h2>
        <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">{children}</div>
    </section>
);

const LegalPage = ({ title, seoTitle, description, url, updated, sections, children }) => (
    <div className="py-16 bg-gray-50/50">
        <SEO title={seoTitle} description={description} url={url} />
        <article className="max-w-3xl mx-auto px-4">
            {LEGAL_DRAFT && (
                <p className="mb-8 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
                    Version préliminaire en cours de révision juridique. Elle n'est pas encore en vigueur.
                </p>
            )}
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B263B] mb-3">{title}</h1>
            <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : {updated}</p>

            <nav aria-label="Sommaire" className="mb-12 rounded-2xl bg-white border border-gray-100 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-3">Sommaire</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm text-[#1B263B]">
                    {sections.map(([id, label]) => (
                        <li key={id}><a href={`#${id}`} className="hover:underline">{label}</a></li>
                    ))}
                </ol>
            </nav>

            {children}
        </article>
    </div>
);

export default LegalPage;
