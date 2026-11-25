import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { Section, ToConfirm } from './LegalPage';
import { ENTREPRISE } from '../../data/offre';

// Politique de confidentialité — Loi 25 (Loi sur la protection des
// renseignements personnels dans le secteur privé, Québec).
// Couvre le SITE VITRINE. L'app THRIVE Maison a sa propre politique pour les
// données de l'enfant.

const SECTIONS = [
    ['responsable', 'Responsable de la protection des renseignements personnels'],
    ['renseignements', 'Ce que le site recueille'],
    ['enfants', 'Aucune information sur votre enfant'],
    ['fins', 'Pourquoi nous les utilisons'],
    ['fournisseurs', 'Fournisseurs et communication hors Québec'],
    ['temoins', 'Témoins et mesure d’audience'],
    ['conservation', 'Durée de conservation'],
    ['droits', 'Vos droits'],
    ['incidents', 'Incidents de confidentialité'],
    ['app', 'L’application THRIVE Maison'],
    ['modifications', 'Modifications'],
];

const Confidentialite = () => (
    <LegalPage
        title="Politique de confidentialité"
        seoTitle="Politique de confidentialité | THRIVE Sport Positive"
        description="Ce que le site de THRIVE recueille, pourquoi, avec qui nous le partageons et comment exercer vos droits, conformément à la Loi 25 du Québec."
        url="https://thrivesportpositive.com/confidentialite"
        updated="24 novembre 2026"
        sections={SECTIONS}
    >
        <p className="mb-10 text-[15px] leading-relaxed text-gray-700">
            Cette politique explique, en termes simples, ce que le site thrivesportpositive.com recueille, pourquoi,
            avec qui nous le partageons et comment exercer vos droits. Le site est exploité par{' '}
            {ENTREPRISE.raisonSociale}, société par actions du Québec dont le siège est à {ENTREPRISE.ville}{' '}
            (NEQ : <ToConfirm>NEQ</ToConfirm>).
        </p>

        <Section id="responsable" title="1. Responsable de la protection des renseignements personnels">
            <p>
                Lylian Celma, président de {ENTREPRISE.raisonSociale}.
                <br />
                Courriel :{' '}
                <a href={`mailto:${ENTREPRISE.courriel}`} className="underline">
                    {ENTREPRISE.courriel}
                </a>{' '}
                (objet : « Confidentialité »)
            </p>
        </Section>

        <Section id="renseignements" title="2. Ce que le site recueille">
            <p>Quand vous remplissez un formulaire du site (appel de 15 minutes, accès à THRIVE Maison, partenaires), nous recueillons :</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>votre prénom et votre courriel ;</li>
                <li>votre numéro de téléphone, quand le formulaire le demande ;</li>
                <li>le moment qui vous convient pour être rappelé ;</li>
                <li>le programme qui vous intéresse ;</li>
                <li>le nom de votre organisation et votre message, pour les partenaires ;</li>
                <li>
                    le code partenaire et les paramètres de campagne (UTM) du lien par lequel vous êtes arrivé, afin de
                    savoir d’où vient la demande.
                </li>
            </ul>
        </Section>

        <Section id="enfants" title="3. Aucune information sur votre enfant">
            <p>
                Le site ne recueille <strong>aucune information sur votre enfant</strong> : pas de nom, pas d’âge, pas
                de date de naissance. Les formulaires s’adressent au parent.
            </p>
        </Section>

        <Section id="fins" title="4. Pourquoi nous les utilisons">
            <ul className="list-disc pl-6 space-y-2">
                <li>vous rappeler ou vous écrire au sujet de votre demande ;</li>
                <li>vous envoyer votre accès à THRIVE Maison ;</li>
                <li>répondre aux organisations qui souhaitent devenir partenaires ;</li>
                <li>savoir quels liens et quels partenaires amènent des familles, sans vous identifier dans nos statistiques.</li>
            </ul>
            <p>Nous ne vendons pas vos renseignements et nous ne les utilisons pas pour du profilage publicitaire.</p>
        </Section>

        <Section id="fournisseurs" title="5. Fournisseurs et communication hors Québec">
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>Supabase</strong> : hébergement des formulaires, dans la région Canada (ca-central-1) ;
                </li>
                <li>
                    <strong>Vercel</strong> : hébergement du site et mesure d’audience sans témoins (Vercel Web
                    Analytics) ;
                </li>
                <li>
                    <strong>Cal.com</strong> : réservation en ligne de l’appel, lorsqu’elle est offerte ;
                </li>
                <li>
                    <strong>Stripe</strong> : paiement des programmes, hors de ce site ;
                </li>
                <li>
                    <strong>Apple, Google et RevenueCat</strong> : abonnements de l’application THRIVE Maison.
                </li>
            </ul>
            <p>
                Certains de ces fournisseurs peuvent traiter une partie des renseignements à l’extérieur du Québec,
                notamment aux États-Unis. Avant toute communication hors Québec, nous évaluons les facteurs relatifs à
                la vie privée et nous encadrons le fournisseur par contrat. <ToConfirm>évaluations des facteurs relatifs à
                la vie privée réalisées et consignées pour chaque fournisseur</ToConfirm>
            </p>
        </Section>

        <Section id="temoins" title="6. Témoins et mesure d’audience">
            <p>
                Nous mesurons la fréquentation du site avec Vercel Web Analytics, qui n’utilise <strong>aucun témoin</strong>{' '}
                et ne vous suit pas d’un site à l’autre. Nous n’utilisons pas Google Analytics. Le site ne dépose pas de
                témoin publicitaire.
            </p>
        </Section>

        <Section id="conservation" title="7. Durée de conservation">
            <p>
                Les renseignements des formulaires sont conservés 24 mois après notre dernier contact avec vous, puis
                supprimés ou rendus anonymes. <ToConfirm>durée de 24 mois à valider</ToConfirm>
            </p>
        </Section>

        <Section id="droits" title="8. Vos droits">
            <p>Vous pouvez en tout temps :</p>
            <ul className="list-disc pl-6 space-y-1">
                <li>accéder aux renseignements que nous détenons sur vous ;</li>
                <li>les faire corriger s’ils sont inexacts ou incomplets ;</li>
                <li>retirer votre consentement et demander leur suppression ;</li>
                <li>obtenir une copie de vos renseignements dans un format structuré et couramment utilisé (portabilité).</li>
            </ul>
            <p>
                Écrivez à la personne responsable (section 1). Nous répondons dans un délai de 30 jours. Si vous n’êtes
                pas satisfait, vous pouvez vous adresser à la Commission d’accès à l’information du Québec
                (cai.gouv.qc.ca).
            </p>
        </Section>

        <Section id="incidents" title="9. Incidents de confidentialité">
            <p>
                Nous tenons un registre des incidents de confidentialité. Si un incident présente un risque de préjudice
                sérieux, nous avisons sans délai la Commission d’accès à l’information et les personnes concernées.
            </p>
        </Section>

        <Section id="app" title="10. L’application THRIVE Maison">
            <p>
                L’application THRIVE Maison a sa propre politique de confidentialité, qui décrit les renseignements
                traités pour votre compte et, le cas échéant, pour votre enfant. Vous la trouvez dans l’application, au
                moment de créer votre compte. <ToConfirm>adresse de la politique de l’application</ToConfirm>
            </p>
        </Section>

        <Section id="modifications" title="11. Modifications">
            <p>
                Nous publions ici toute mise à jour de cette politique, avec sa date. Pour les règles qui encadrent
                l’utilisation du site et des programmes, voyez nos{' '}
                <Link to="/conditions" className="underline">
                    conditions
                </Link>
                .
            </p>
        </Section>
    </LegalPage>
);

export default Confidentialite;
