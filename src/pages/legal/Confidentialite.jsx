import React from 'react';
import LegalPage, { Section, ToConfirm } from './LegalPage';

// Politique de confidentialité — Loi 25 (Loi sur la protection des
// renseignements personnels dans le secteur privé, Québec). Couvre le site
// vitrine, l'application web et les applications mobiles.

const SECTIONS = [
    ['responsable', 'Responsable de la protection des renseignements personnels'],
    ['renseignements', 'Renseignements que nous recueillons'],
    ['enfants', 'Renseignements concernant les enfants'],
    ['fins', 'Pourquoi nous les utilisons'],
    ['paiement', 'Paiements et abonnements'],
    ['fournisseurs', 'Fournisseurs et communication hors Québec'],
    ['temoins', 'Témoins et mesure d’audience'],
    ['conservation', 'Durée de conservation'],
    ['securite', 'Sécurité'],
    ['droits', 'Vos droits'],
    ['incidents', 'Incidents de confidentialité'],
    ['modifications', 'Modifications'],
];

const Confidentialite = () => (
    <LegalPage
        title="Politique de confidentialité"
        seoTitle="Politique de confidentialité — Thrive Sport Positive"
        description="Comment THRIVE recueille, utilise, conserve et protège les renseignements personnels des parents et des enfants, conformément à la Loi 25 du Québec."
        url="https://thrivesportpositive.com/confidentialite"
        updated="29 septembre 2026"
        sections={SECTIONS}
    >
        <p className="mb-10 text-[15px] leading-relaxed text-gray-700">
            Vous nous confiez des renseignements sur vous et sur votre enfant. Cette politique explique, en termes
            simples, ce que nous recueillons, pourquoi, avec qui nous le partageons et comment exercer vos droits. Elle
            s'applique au site thrivesportpositive.com, à l'application THRIVE (app.thrivesportpositive.com) et aux
            applications mobiles THRIVE.
        </p>

        <Section id="responsable" title="1. Responsable de la protection des renseignements personnels">
            <p>
                <ToConfirm>nom et titre de la personne responsable</ToConfirm>
                <br />
                Thrive Sport Positive, Montréal (Québec)
                <br />
                Courriel : <a href="mailto:info@thrivesportpositive.com" className="underline">info@thrivesportpositive.com</a>{' '}
                (objet : « Confidentialité »)
            </p>
        </Section>

        <Section id="renseignements" title="2. Renseignements que nous recueillons">
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>Parent ou tuteur</strong> : nom, courriel, téléphone, mot de passe (conservé sous forme
                    chiffrée, jamais lisible par nous), préférences de langue et de notification.
                </li>
                <li>
                    <strong>Enfant</strong> : prénom, âge ou date de naissance, sport pratiqué, réponses aux
                    questionnaires de bien-être et d'habiletés de vie, observations et bilans rédigés par le coach,
                    activités réalisées dans le module Maison, photo de profil si vous choisissez d'en ajouter une.
                </li>
                <li>
                    <strong>Liste d'attente</strong> : les renseignements que vous saisissez dans le formulaire (nom,
                    courriel, téléphone, âge de l'enfant, programme souhaité, ville).
                </li>
                <li>
                    <strong>Abonnement</strong> : formule choisie, dates d'essai et de renouvellement, statut du
                    paiement. Nous ne recevons jamais le numéro complet de votre carte.
                </li>
                <li>
                    <strong>Données techniques</strong> : journaux de connexion, type d'appareil, rapports d'erreur,
                    jeton de notification si vous les activez.
                </li>
            </ul>
        </Section>

        <Section id="enfants" title="3. Renseignements concernant les enfants">
            <p>
                L'enfant n'a pas de compte. Ses renseignements sont recueillis avec le consentement du titulaire de
                l'autorité parentale, qui peut en tout temps les consulter, les faire corriger ou les faire supprimer.
                Ils ne sont visibles que par vous, par le coach assigné et par l'équipe THRIVE autorisée, et ne sont
                jamais rendus publics ni utilisés à des fins publicitaires.
            </p>
        </Section>

        <Section id="fins" title="4. Pourquoi nous les utilisons">
            <ul className="list-disc pl-6 space-y-2">
                <li>fournir les programmes, les bilans et le module Maison ;</li>
                <li>gérer votre compte, votre abonnement et vos paiements ;</li>
                <li>vous envoyer les messages liés au service (rappel de fin d'essai, reçu, renouvellement, sécurité) ;</li>
                <li>assurer la sécurité des Services et corriger les erreurs ;</li>
                <li>améliorer nos contenus à partir de statistiques globales, sans identifier personne.</li>
            </ul>
            <p>
                Nous ne vendons pas vos renseignements. Nous ne les utilisons pas pour du profilage publicitaire. Aucune
                décision vous concernant n'est prise uniquement par un traitement automatisé.
            </p>
        </Section>

        <Section id="paiement" title="5. Paiements et abonnements">
            <p>
                Les paiements sur le web sont traités par Stripe. Les achats faits dans une application mobile sont
                traités par Apple (App Store) ou Google (Google Play). RevenueCat nous permet de reconnaître un même
                abonnement sur le web et sur mobile ; il reçoit un identifiant technique de votre compte et l'état de
                votre abonnement, jamais vos données de carte.
            </p>
        </Section>

        <Section id="fournisseurs" title="6. Fournisseurs et communication hors Québec">
            <p>
                Nos données principales (comptes, dossiers des enfants, bilans) sont hébergées au Canada, dans la région
                de Montréal, par Supabase. Certains fournisseurs peuvent traiter une partie des renseignements à
                l'extérieur du Québec, notamment aux États-Unis :
            </p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Stripe — paiements web ;</li>
                <li>RevenueCat — gestion des abonnements multiplateformes ;</li>
                <li>Apple et Google — achats intégrés et notifications ;</li>
                <li>Vercel — hébergement du site et de l'application web ;</li>
                <li>Sentry — rapports d'erreurs techniques ;</li>
                <li>Google Analytics — mesure d'audience du site vitrine (voir section 7).</li>
            </ul>
            <p>
                Avant toute communication à l'extérieur du Québec, nous évaluons les facteurs relatifs à la vie privée et
                nous encadrons le fournisseur par contrat pour qu'il protège les renseignements de façon adéquate et ne
                les utilise qu'aux fins prévues. <ToConfirm>évaluations des facteurs relatifs à la vie privée (EFVP)
                réalisées et consignées pour chaque fournisseur</ToConfirm>
            </p>
        </Section>

        <Section id="temoins" title="7. Témoins et mesure d'audience">
            <p>
                L'application utilise uniquement les témoins nécessaires à la connexion et à la sécurité. Le site
                vitrine utilise Google Analytics pour mesurer son audience ; cet outil n'est activé qu'avec votre
                consentement, que vous pouvez retirer en tout temps.{' '}
                <ToConfirm>ajouter un bandeau de consentement : Google Analytics est aujourd'hui chargé sans
                consentement, ce que la Loi 25 n'autorise pas</ToConfirm>
            </p>
        </Section>

        <Section id="conservation" title="8. Durée de conservation">
            <ul className="list-disc pl-6 space-y-2">
                <li>Compte et dossiers : tant que le compte est actif. À la fermeture, ils sont supprimés ou anonymisés
                    <ToConfirm>délai de suppression après la demande (ex. 30 jours)</ToConfirm>.</li>
                <li>Pièces comptables (factures, reçus) : six (6) ans, comme l'exigent les lois fiscales.</li>
                <li>Liste d'attente : jusqu'à votre inscription ou au plus tard <ToConfirm>durée (ex. 24 mois)</ToConfirm>.</li>
                <li>Rapports d'erreurs techniques : quelques semaines.</li>
            </ul>
            <p>
                Lors de la suppression d'un compte, nous annulons l'abonnement web en cours et supprimons les données
                d'abonnement tenues par RevenueCat. Un abonnement pris sur l'App Store ou Google Play doit être annulé
                depuis l'appareil.
            </p>
        </Section>

        <Section id="securite" title="9. Sécurité">
            <p>
                Accès limité par des règles appliquées directement par la base de données, chiffrement des
                communications, stockage privé des documents et des photos avec liens temporaires, double
                authentification disponible, accès du personnel limité à ce qui est nécessaire à son travail.
            </p>
        </Section>

        <Section id="droits" title="10. Vos droits">
            <p>Vous pouvez en tout temps :</p>
            <ul className="list-disc pl-6 space-y-1">
                <li>consulter les renseignements que nous détenons sur vous ou sur votre enfant ;</li>
                <li>les faire corriger s'ils sont inexacts ou incomplets ;</li>
                <li>retirer votre consentement ou demander leur suppression ;</li>
                <li>obtenir une copie de vos renseignements dans un format structuré et couramment utilisé ;</li>
                <li>demander la désindexation d'un renseignement diffusé.</li>
            </ul>
            <p>
                L'application permet d'exporter vos données et de demander la suppression de votre compte ; vous pouvez
                aussi écrire à la personne responsable (section 1). Nous répondons dans un délai de trente (30) jours.
                Si vous n'êtes pas satisfait, vous pouvez vous adresser à la Commission d'accès à l'information du
                Québec (cai.gouv.qc.ca).
            </p>
        </Section>

        <Section id="incidents" title="11. Incidents de confidentialité">
            <p>
                Nous tenons un registre des incidents de confidentialité. Si un incident présente un risque de préjudice
                sérieux, nous avisons sans délai la Commission d'accès à l'information et les personnes concernées.
            </p>
        </Section>

        <Section id="modifications" title="12. Modifications">
            <p>
                Nous publions ici toute mise à jour de cette politique, avec sa date. Une modification importante vous est
                annoncée par courriel ou dans l'application avant son entrée en vigueur.
            </p>
        </Section>
    </LegalPage>
);

export default Confidentialite;
