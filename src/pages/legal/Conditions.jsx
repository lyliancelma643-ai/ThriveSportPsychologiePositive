import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { Section, ToConfirm } from './LegalPage';
import {
    ENTREPRISE,
    MAISON,
    PROGRAMMES,
    OFFRE_FONDATRICE,
    PAIEMENT_PROGRAMMES,
    GARANTIE,
    NOTE_TAXES,
    formatPrix,
} from '../../data/offre';

// Conditions d'utilisation et de vente — site, THRIVE Maison et programmes.
// Tous les prix et réglages sont lus depuis src/data/offre.js.

const SECTIONS = [
    ['objet', 'Objet et acceptation'],
    ['nature', 'Nature des services'],
    ['maison', 'THRIVE Maison (application)'],
    ['abonnement', 'Abonnement premium, essai et résiliation'],
    ['stores', 'Achats sur l’App Store ou Google Play'],
    ['programmes', 'Programmes en présentiel'],
    ['paiement', 'Prix, paiement et taxes'],
    ['garantie', 'Si vous arrêtez après la séance 2'],
    ['absences', 'Absences, report et annulation par THRIVE'],
    ['usage', 'Utilisation permise et propriété intellectuelle'],
    ['responsabilite', 'Sécurité et responsabilité'],
    ['modifications', 'Modifications'],
    ['droit', 'Droit applicable'],
    ['contact', 'Nous joindre'],
];

const G = PROGRAMMES.groupe;
const I = PROGRAMMES.individuel;
const C = PROGRAMMES.complet;

const dateLongue = (iso) =>
    new Date(`${iso}T12:00:00`).toLocaleDateString('fr-CA', { day: 'numeric', month: 'long', year: 'numeric' });

const Conditions = () => (
    <LegalPage
        title="Conditions d’utilisation et de vente"
        seoTitle="Conditions d’utilisation et de vente | THRIVE Sport Positive"
        description="Conditions du site, de THRIVE Maison et des programmes THRIVE Groupe, Individuel et Complet : prix, paiement, remboursement, absences et annulation."
        url="https://thrivesportpositive.com/conditions"
        updated="24 novembre 2026"
        sections={SECTIONS}
    >
        <Section id="objet" title="1. Objet et acceptation">
            <p>
                Les présentes conditions encadrent l’utilisation du site thrivesportpositive.com, de l’application{' '}
                {MAISON.nom} et des programmes en présentiel (ensemble, « les Services »), offerts par{' '}
                {ENTREPRISE.raisonSociale}, société par actions du Québec dont le siège est à {ENTREPRISE.ville} (NEQ :{' '}
                <ToConfirm>NEQ</ToConfirm>) (« THRIVE », « nous »).
            </p>
            <p>
                En utilisant les Services ou en vous inscrivant, vous acceptez ces conditions ainsi que notre{' '}
                <Link to="/confidentialite" className="text-[#1B263B] underline">
                    politique de confidentialité
                </Link>
                . Le compte et l’inscription sont faits par un parent ou un tuteur majeur, qui en est responsable.
            </p>
        </Section>

        <Section id="nature" title="2. Nature des services">
            <p>
                THRIVE est un programme de développement de la confiance par le sport. THRIVE n’est pas une thérapie
                ni un service de santé : nos intervenants ne sont pas psychologues et les Services ne remplacent pas
                l’avis d’un professionnel de la santé. Si votre enfant a besoin d’un professionnel, nous vous le disons
                et nous vous orientons.
            </p>
        </Section>

        <Section id="maison" title="3. THRIVE Maison (application)">
            <p>THRIVE Maison est offerte en deux formules :</p>
            <ul className="list-disc pl-6 space-y-1">
                <li>
                    <strong>Gratuite</strong> : {MAISON.gratuit} ;
                </li>
                <li>
                    <strong>Premium</strong> : {MAISON.premium.charAt(0).toLowerCase() + MAISON.premium.slice(1)}, à{' '}
                    {formatPrix(MAISON.prixMensuel)} par mois ou {formatPrix(MAISON.prixAnnuel)} par année.
                </li>
            </ul>
            <p>
                Jusqu’au {dateLongue(MAISON.toutGratuitJusquAu)}, tout le contenu est ouvert gratuitement à toutes les
                familles. L’application est actuellement en bêta : l’accès se fait sur demande.
            </p>
            <p>
                Les familles inscrites à un programme THRIVE Groupe, Individuel ou Complet ont accès au premium pendant
                le programme, puis pendant 3 mois offerts.
            </p>
        </Section>

        <Section id="abonnement" title="4. Abonnement premium, essai et résiliation">
            <p>
                Le premier abonnement premium comprend {MAISON.essaiPremium}, une seule fois par compte. Il est sans
                engagement. Le prix, la période et la date du premier prélèvement vous sont présentés avant la
                confirmation de l’achat.
            </p>
            <p>
                L’abonnement se renouvelle automatiquement à la fin de chaque période (mois ou année) jusqu’à ce que
                vous le résiliez. Vous pouvez résilier en tout temps, sans frais et sans justification, par Apple ou
                Google si vous vous êtes abonné dans l’application, ou depuis votre compte web. Vous gardez l’accès
                jusqu’à la fin de la période payée.
            </p>
            <p>
                Toute hausse de prix vous est annoncée par écrit au moins 30 jours avant de s’appliquer ; vous pouvez
                alors résilier sans frais.
            </p>
            <p>
                Une demande de résiliation immédiate d’un abonnement annuel, avec remboursement de la partie non
                utilisée, est traitée selon la Loi sur la protection du consommateur.{' '}
                <ToConfirm>modalités du remboursement au prorata d’un abonnement annuel (articles 188 à 196 de la Loi
                sur la protection du consommateur) et pénalité éventuelle</ToConfirm>
            </p>
        </Section>

        <Section id="stores" title="5. Achats sur l’App Store ou Google Play">
            <p>
                Si vous vous abonnez depuis une application mobile, l’achat est traité par Apple ou Google selon leurs
                conditions, et le prix affiché par le magasin fait foi. La facturation, la résiliation et les
                remboursements se gèrent alors dans les réglages de votre appareil. THRIVE ne peut pas annuler ni
                rembourser ces achats à votre place ; nous vous aidons volontiers à faire la démarche.
            </p>
        </Section>

        <Section id="programmes" title="6. Programmes en présentiel">
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>{G.nom}</strong> : {G.seances} ateliers de {G.dureeSeance}, {G.enfantsMax} enfants au
                    maximum par groupe, en vague fermée ;
                </li>
                <li>
                    <strong>{I.nom}</strong> : {I.seances} séances en tête-à-tête de {I.dureeSeance} ;
                </li>
                <li>
                    <strong>{C.nom}</strong> : {I.nom} d’abord, puis l’entrée dans la prochaine vague de {G.nom}.
                </li>
            </ul>
            <p>
                {ENTREPRISE.lieu} Les premières vagues commencent en{' '}
                {ENTREPRISE.lancement}. Tout programme commence par un appel gratuit de 15 minutes, qui permet de
                vérifier ensemble que THRIVE est le bon cadre.
            </p>
        </Section>

        <Section id="paiement" title="7. Prix, paiement et taxes">
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>{G.nom}</strong> : {formatPrix(G.prix)}
                    {OFFRE_FONDATRICE.active && (
                        <>
                            , et {formatPrix(G.prixFondateur)} avec l’offre fondatrice, pour toute inscription avant le{' '}
                            {OFFRE_FONDATRICE.finLe} (le premier mois de {MAISON.nom} premium est alors offert)
                        </>
                    )}{' '}
                    ;
                </li>
                <li>
                    <strong>{I.nom}</strong> : {formatPrix(I.prix)} ;
                </li>
                <li>
                    <strong>{C.nom}</strong> : {formatPrix(C.prix)}.
                </li>
            </ul>
            <p>
                {PAIEMENT_PROGRAMMES} Les paiements sont traités par Stripe. {NOTE_TAXES}{' '}
                <ToConfirm>mention des taxes à mettre à jour après l’inscription à la TPS et à la TVQ</ToConfirm>
            </p>
        </Section>

        <Section id="garantie" title="8. Si vous arrêtez après la séance 2">
            <p>{GARANTIE}</p>
        </Section>

        <Section id="absences" title="9. Absences, report et annulation par THRIVE">
            <p>
                <strong>THRIVE Groupe</strong> : l’enfant qui manque une séance reprend la semaine suivante avec son
                groupe. La séance manquée n’est pas reprise individuellement.
            </p>
            <p>
                <strong>THRIVE Individuel</strong> : prévenez-nous le plus tôt possible pour déplacer une séance.{' '}
                <ToConfirm>délai de préavis et nombre de reports permis en Individuel</ToConfirm>
            </p>
            <p>
                <strong>Annulation par THRIVE</strong> : si nous devons annuler une séance ou un programme, nous vous
                proposons une nouvelle date ; sinon, nous vous remboursons les séances non données.
            </p>
        </Section>

        <Section id="usage" title="10. Utilisation permise et propriété intellectuelle">
            <p>
                Les Services sont destinés à un usage personnel et familial. Il est interdit de partager votre compte
                hors de votre famille, de revendre ou de diffuser publiquement les contenus, ou de contourner les
                mesures de sécurité.
            </p>
            <p>
                Les activités, textes, illustrations, marques et logiciels des Services appartiennent à THRIVE ou à ses
                concédants. Vous avez un droit d’utilisation personnel, non exclusif et non transférable.
            </p>
        </Section>

        <Section id="responsabilite" title="11. Sécurité et responsabilité">
            <p>
                Les activités de THRIVE Maison se vivent sous la supervision d’un adulte, qui reste responsable de leur
                adaptation à l’âge, à la santé et à l’environnement de l’enfant. Cessez toute activité en cas de douleur
                ou d’inconfort.
            </p>
            <p>
                Nous faisons des efforts raisonnables pour que les Services soient disponibles et exacts, sans pouvoir
                assurer une disponibilité continue. Notre responsabilité s’applique dans les limites permises par la
                loi ; rien dans ces conditions n’exclut la responsabilité que la loi ne permet pas d’exclure envers un
                consommateur, ni ne limite vos droits en vertu de la Loi sur la protection du consommateur.{' '}
                <ToConfirm>clause de responsabilité pour les séances en présentiel (assurance, activités à risque)</ToConfirm>
            </p>
        </Section>

        <Section id="modifications" title="12. Modifications">
            <p>
                Nous pouvons modifier ces conditions. Toute modification importante vous est annoncée par courriel ou
                dans l’application au moins 30 jours avant son entrée en vigueur. Elle ne change pas le prix ni les
                conditions d’un programme déjà payé.
            </p>
        </Section>

        <Section id="droit" title="13. Droit applicable">
            <p>
                Ces conditions sont régies par les lois du Québec et les lois fédérales du Canada qui s’y appliquent. Un
                consommateur peut s’adresser au tribunal de son domicile.
            </p>
        </Section>

        <Section id="contact" title="14. Nous joindre">
            <p>
                {ENTREPRISE.raisonSociale}, {ENTREPRISE.ville} (Québec)
                <br />
                Courriel :{' '}
                <a href={`mailto:${ENTREPRISE.courriel}`} className="underline">
                    {ENTREPRISE.courriel}
                </a>
            </p>
        </Section>
    </LegalPage>
);

export default Conditions;
