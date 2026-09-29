import React from 'react';
import LegalPage, { Section, ToConfirm } from './LegalPage';

// Conditions d'utilisation et d'abonnement — site, application web et
// applications mobiles THRIVE. Le texte d'abonnement doit rester cohérent avec
// la page /parent/abonnement de l'application et le paywall mobile (prix,
// essai, renouvellement, annulation).

const SECTIONS = [
    ['objet', 'Objet et acceptation'],
    ['comptes', 'Comptes et accès'],
    ['nature', 'Nature des services'],
    ['programmes', 'Programmes d’accompagnement'],
    ['abonnement', 'Abonnement « Le moment qui compte »'],
    ['essai', 'Essai gratuit'],
    ['renouvellement', 'Renouvellement automatique et prix'],
    ['annulation', 'Annulation, résiliation et remboursement'],
    ['stores', 'Achats sur l’App Store ou Google Play'],
    ['usage', 'Utilisation permise'],
    ['propriete', 'Propriété intellectuelle'],
    ['responsabilite', 'Sécurité et responsabilité'],
    ['suspension', 'Suspension ou fermeture de compte'],
    ['modifications', 'Modifications'],
    ['droit', 'Droit applicable'],
    ['contact', 'Nous joindre'],
];

const Conditions = () => (
    <LegalPage
        title="Conditions d'utilisation et d'abonnement"
        seoTitle="Conditions d'utilisation — Thrive Sport Positive"
        description="Conditions d'utilisation du site et de l'application THRIVE, et conditions de l'abonnement « Le moment qui compte » : essai gratuit, renouvellement, annulation."
        url="https://thrivesportpositive.com/conditions"
        updated="29 septembre 2026"
        sections={SECTIONS}
    >
        <Section id="objet" title="1. Objet et acceptation">
            <p>
                Les présentes conditions encadrent l'utilisation du site thrivesportpositive.com, de l'application
                THRIVE (app.thrivesportpositive.com) et des applications mobiles THRIVE (ensemble, « les Services »),
                offerts par Thrive Sport Positive <ToConfirm>raison sociale exacte et NEQ</ToConfirm>, Montréal (Québec)
                (« THRIVE », « nous »).
            </p>
            <p>
                En créant un compte ou en souscrivant un abonnement, vous acceptez ces conditions ainsi que notre{' '}
                <a href="/confidentialite" className="text-[#1B263B] underline">politique de confidentialité</a>.
            </p>
        </Section>

        <Section id="comptes" title="2. Comptes et accès">
            <p>
                Le compte est ouvert par un parent ou un tuteur majeur, qui en est responsable. L'enfant n'a ni compte
                ni mot de passe : il participe par l'intermédiaire du compte de son parent ou par un lien unique qui lui
                est transmis.
            </p>
            <p>
                Vous vous engagez à fournir des renseignements exacts, à garder vos identifiants confidentiels et à
                nous aviser sans délai de toute utilisation non autorisée de votre compte.
            </p>
        </Section>

        <Section id="nature" title="3. Nature des services">
            <p>
                THRIVE propose du développement des habiletés de vie et du bien-être de l'enfant par le sport. Nos
                intervenants ne sont pas psychologues ni psychothérapeutes membres de l'Ordre des psychologues du
                Québec. Les Services ne constituent ni un diagnostic, ni une évaluation, ni un traitement psychologique
                ou médical, et ne remplacent pas l'avis d'un professionnel de la santé.
            </p>
        </Section>

        <Section id="programmes" title="4. Programmes d'accompagnement">
            <p>
                Les programmes accompagnés par un coach (par exemple « Oser essayer » et « Aller vers les autres ») font
                l'objet d'une entente distincte conclue avec la famille, qui en précise le prix, le calendrier et les
                modalités de paiement. En cas de contradiction, cette entente prévaut sur les présentes conditions pour
                ce programme.
            </p>
        </Section>

        <Section id="abonnement" title="5. Abonnement « Le moment qui compte »">
            <p>
                L'abonnement donne accès au module « Maison » : une activité d'environ dix minutes par jour à vivre avec
                votre enfant, avec le catalogue d'activités, les compléments et les outils associés.
            </p>
            <p>Deux formules sont offertes :</p>
            <ul className="list-disc pl-6 space-y-1">
                <li><strong>Mensuelle</strong> : 32,50 $ CA par mois ;</li>
                <li><strong>Annuelle</strong> : 299 $ CA par année.</li>
            </ul>
            <p>
                Les prix affichés sont en dollars canadiens, taxes incluses le cas échéant. Le prix exact, la période et
                la date du premier prélèvement vous sont présentés avant la confirmation de l'achat. Sur l'App Store et
                Google Play, le prix affiché par le store fait foi.
            </p>
            <p>
                Un abonnement est lié à un compte. Le co-parent rattaché à la même famille dans l'application bénéficie
                de l'accès. Les familles inscrites à un programme d'accompagnement peuvent avoir accès au module sans
                abonnement, selon leur entente.
            </p>
        </Section>

        <Section id="essai" title="6. Essai gratuit">
            <p>
                Un premier abonnement comprend un essai gratuit d'un (1) mois, offert une seule fois par compte, toutes
                plateformes confondues. Un moyen de paiement valide est demandé au début de l'essai ; aucun montant
                n'est prélevé pendant l'essai.
            </p>
            <p>
                Nous vous envoyons un rappel par courriel au moins sept (7) jours avant la fin de l'essai. Si vous
                n'annulez pas avant la fin de l'essai, l'abonnement choisi commence et le premier paiement est prélevé à
                cette date. Si vous annulez pendant l'essai, aucun montant n'est prélevé.
            </p>
        </Section>

        <Section id="renouvellement" title="7. Renouvellement automatique et prix">
            <p>
                L'abonnement se renouvelle automatiquement à la fin de chaque période (mois ou année), au prix alors en
                vigueur, jusqu'à ce que vous l'annuliez. Le paiement est prélevé au début de chaque période.
            </p>
            <p>
                Pour l'abonnement annuel, nous vous rappelons le renouvellement par courriel avant son échéance{' '}
                <ToConfirm>délai du rappel de renouvellement annuel (ex. 30 jours) à activer dans Stripe</ToConfirm>.
            </p>
            <p>
                Toute hausse de prix vous est annoncée par écrit au moins trente (30) jours avant de s'appliquer, et ne
                vise que les périodes suivantes. Vous pouvez alors annuler sans frais avant son entrée en vigueur.
            </p>
            <p>
                En cas d'échec de paiement, nous tentons à nouveau le prélèvement et vous invitons à mettre à jour votre
                moyen de paiement. Sans régularisation, l'abonnement est annulé et l'accès se ferme.
            </p>
        </Section>

        <Section id="annulation" title="8. Annulation, résiliation et remboursement">
            <p>
                Vous pouvez annuler en tout temps, sans frais et sans justification, directement dans l'application :
                menu du compte › <strong>Mon abonnement</strong> › <strong>Gérer mon abonnement</strong>. Vous pouvez
                aussi nous écrire à info@thrivesportpositive.com.
            </p>
            <p>
                <strong>Abonnement mensuel</strong> : l'annulation prend effet à la fin du mois en cours ; vous gardez
                l'accès jusqu'à cette date et aucun autre prélèvement n'est fait.
            </p>
            <p>
                <strong>Abonnement annuel</strong> : par défaut, l'annulation arrête le renouvellement et vous gardez
                l'accès jusqu'à la fin de l'année payée. Vous pouvez aussi demander la résiliation immédiate de votre
                abonnement annuel : nous vous remboursons alors la partie non utilisée, au prorata des mois restants,
                moins une pénalité qui ne peut dépasser le moindre de 50 $ ou de 10 % du prix des mois non utilisés,
                dans les trente (30) jours de votre demande.{' '}
                <ToConfirm>application des articles 188 à 196 de la Loi sur la protection du consommateur (contrat de
                service à exécution successive) et montant de la pénalité — ou aucune pénalité</ToConfirm>
            </p>
            <p>
                Rien dans les présentes ne limite les droits que vous accorde la Loi sur la protection du consommateur
                du Québec, notamment pour les contrats conclus à distance.
            </p>
        </Section>

        <Section id="stores" title="9. Achats sur l'App Store ou Google Play">
            <p>
                Si vous vous abonnez depuis une application mobile, l'achat est traité par Apple ou Google selon leurs
                propres conditions. La facturation, le renouvellement, l'annulation et les remboursements se gèrent alors
                dans les réglages de votre appareil (App Store › Abonnements, ou Google Play › Abonnements). THRIVE ne
                peut pas annuler ni rembourser ces achats à votre place ; nous vous aidons volontiers à faire la
                démarche.
            </p>
            <p>
                Un abonnement actif, quelle que soit la plateforme où il a été pris, donne accès au module sur le web et
                sur mobile avec le même compte. Évitez de souscrire deux fois : un second abonnement n'est pas remboursé
                automatiquement.
            </p>
        </Section>

        <Section id="usage" title="10. Utilisation permise">
            <p>
                Les Services sont destinés à un usage personnel et familial. Il est interdit de partager votre compte
                hors de votre famille, de revendre ou de diffuser publiquement les contenus, de contourner les mesures de
                sécurité ou d'accès, ou d'utiliser les Services de façon illégale.
            </p>
        </Section>

        <Section id="propriete" title="11. Propriété intellectuelle">
            <p>
                Les activités, textes, illustrations, vidéos, marques et logiciels des Services appartiennent à THRIVE ou
                à ses concédants. L'abonnement vous accorde un droit d'utilisation personnel, non exclusif et non
                transférable, pour sa durée.
            </p>
        </Section>

        <Section id="responsabilite" title="12. Sécurité et responsabilité">
            <p>
                Les activités proposées se vivent sous la supervision d'un adulte, qui reste responsable de leur
                adaptation à l'âge, à la santé et à l'environnement de l'enfant. Cessez toute activité en cas de douleur
                ou d'inconfort.
            </p>
            <p>
                Nous faisons des efforts raisonnables pour que les Services soient disponibles et exacts, sans pouvoir
                garantir une disponibilité continue. Notre responsabilité s'applique dans les limites permises par la
                loi ; aucune clause des présentes n'exclut la responsabilité que la loi ne permet pas d'exclure à
                l'égard d'un consommateur.
            </p>
        </Section>

        <Section id="suspension" title="13. Suspension ou fermeture de compte">
            <p>
                Nous pouvons suspendre ou fermer un compte en cas de manquement grave aux présentes conditions, après
                vous en avoir avisé lorsque c'est possible. Vous pouvez fermer votre compte en tout temps depuis
                l'application ; pensez d'abord à annuler un abonnement pris sur l'App Store ou Google Play.
            </p>
        </Section>

        <Section id="modifications" title="14. Modifications">
            <p>
                Nous pouvons modifier ces conditions. Toute modification importante vous est annoncée par courriel ou
                dans l'application au moins trente (30) jours avant son entrée en vigueur ; vous pouvez alors mettre fin
                à votre abonnement sans frais.
            </p>
        </Section>

        <Section id="droit" title="15. Droit applicable">
            <p>
                Ces conditions sont régies par les lois du Québec et les lois fédérales du Canada qui s'y appliquent. Un
                consommateur peut s'adresser au tribunal de son domicile.
            </p>
        </Section>

        <Section id="contact" title="16. Nous joindre">
            <p>
                Thrive Sport Positive — <ToConfirm>adresse d'affaires : 5115 rue Rivard (site) ou 5006 rue Fabre
                (Stripe)</ToConfirm>, Montréal (Québec)
                <br />
                Courriel : <a href="mailto:info@thrivesportpositive.com" className="underline">info@thrivesportpositive.com</a>
                <br />
                Téléphone : +1 (263) 362-2030
            </p>
        </Section>
    </LegalPage>
);

export default Conditions;
