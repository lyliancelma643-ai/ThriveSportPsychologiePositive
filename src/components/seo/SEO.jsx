import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function SEO({ 
    title, 
    description, 
    name = "Thrive Sport Positive", 
    type = "website", 
    url = "https://thrivesportpositive.com",
    schema = null,
    image = "https://thrivesportpositive.com/favicon.png"
}) {
    const { i18n } = useTranslation();
    const lang = i18n.language || 'fr';

    return (
        <Helmet htmlAttributes={{ lang }}>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={name} />
            <meta property="og:image" content={image} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
