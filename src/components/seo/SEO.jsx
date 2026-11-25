import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SITE = 'https://thrivesportpositive.com';
const IMAGE_DEFAUT = `${SITE}/og-image.jpg`;

// Métadonnées de page : title, description, canonical, Open Graph, Twitter, JSON-LD.
//  title, description  obligatoires (viennent de src/content/textes.js)
//  url      URL canonique complète ; par défaut déduite de la route courante
//  image    URL absolue de l'image de partage (défaut : /og-image.jpg, 1200×630)
//  schema   objet (ou tableau d'objets) JSON-LD à injecter
//  noindex  true → <meta name="robots" content="noindex">
export default function SEO({
    title,
    description,
    name = 'THRIVE Sport Positive',
    type = 'website',
    url,
    schema = null,
    image = IMAGE_DEFAUT,
    noindex = false,
}) {
    const { i18n } = useTranslation();
    const { pathname } = useLocation();
    const lang = (i18n.resolvedLanguage || i18n.language || 'fr').slice(0, 2);
    const canonique = url || `${SITE}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
    const imageParDefaut = image === IMAGE_DEFAUT;

    return (
        <Helmet htmlAttributes={{ lang }}>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonique} />
            {noindex && <meta name="robots" content="noindex" />}

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonique} />
            <meta property="og:site_name" content={name} />
            <meta property="og:locale" content="fr_CA" />
            <meta property="og:image" content={image} />
            {imageParDefaut && <meta property="og:image:width" content="1200" />}
            {imageParDefaut && <meta property="og:image:height" content="630" />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
        </Helmet>
    );
}
