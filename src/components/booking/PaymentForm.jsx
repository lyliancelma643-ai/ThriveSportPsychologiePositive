import React, { useState } from 'react';
import { ChevronLeft, Lock, Loader2, CheckCircle2, Repeat, CreditCard, Wallet } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PROGRAMS_DATA } from '../../data/programs';

// Initialize Stripe with a public test key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const PaymentFormContent = ({
    bookingData,
    setBookingStep,
    paymentMethod,
    setPaymentMethod,
    processingPayment,
    handleProcessPayment,
    termsAccepted,
    setTermsAccepted,
    selectedDate,
    selectedTime,
    isRecurring
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState(null);
    const program = PROGRAMS_DATA[bookingData.program];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (!termsAccepted) return;

        // Create a token or payment method
        // For demonstration, we'll verify the card is valid
        const cardElement = elements.getElement(CardElement);

        // Call the parent handler which currently simulates a delay
        // In a real app, you would pass the token/paymentMethod to this handler
        const { error, paymentMethod: stripePaymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', stripePaymentMethod);
            setCardError(null);
            handleProcessPayment(); // Continue with the existing simulation flow
        }
    };

    return (
        <div className="animate-in slide-in-from-right duration-500">
            <button onClick={() => setBookingStep('form')} className="flex items-center text-gray-400 hover:text-[#1B263B] mb-6 transition-colors">
                <ChevronLeft size={18} className="mr-1" /> Retour aux infos
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Summary Column */}
                <div className="md:col-span-1">
                    <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-gray-100 h-full">
                        <h4 className="font-serif font-bold text-[#1B263B] mb-4 text-lg">Récapitulatif</h4>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold">Programme</p>
                                <p className="font-bold text-[#1B263B]">{program?.label}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold">Athlète</p>
                                <p className="font-bold text-[#1B263B]">{bookingData.name} ({bookingData.age} ans)</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold">1ère Séance</p>
                                <p className="font-bold text-[#1B263B]">{selectedDate?.toLocaleDateString('fr-FR')} à {selectedTime}</p>

                                {isRecurring ? (
                                    <p className="text-[10px] text-[#8F9779] mt-2 font-bold flex items-start leading-tight bg-[#8F9779]/10 p-2 rounded-lg">
                                        <Repeat size={14} className="mr-1 shrink-0 mt-0.5" /> Ce créneau est verrouillé pour les semaines suivantes (Annulation 24h).
                                    </p>
                                ) : (
                                    <p className="text-[10px] text-gray-500 mt-2 italic leading-tight">
                                        * Les autres séances peuvent être réservées dès maintenant ou plus tard.
                                    </p>
                                )}
                            </div>
                            <div className="pt-4 border-t border-gray-200 mt-4">
                                <p className="text-gray-400 text-xs uppercase font-bold">À payer maintenant</p>
                                <p className="font-serif font-bold text-2xl text-[#8F9779]">
                                    {paymentMethod === 'installments'
                                        ? `${program?.installmentPrice} $`
                                        : `${program?.price} $`}
                                    <span className="text-xs text-gray-400 font-sans font-normal ml-1">CAD</span>
                                </p>
                                {paymentMethod === 'installments' && (
                                    <p className="text-xs text-gray-500 mt-1">
                                        + {program.installments - 1} versements mensuels de {program.installmentPrice}$
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Form Column */}
                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-2xl font-serif text-[#1B263B] mb-6">Paiement Sécurisé</h2>

                    {/* Payment Method Toggle */}
                    {program?.installments > 1 && (
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <button
                                onClick={() => setPaymentMethod('installments')}
                                className={`p-4 rounded-xl border-2 text-left transition-all relative ${paymentMethod === 'installments' ? 'border-[#8F9779] bg-[#8F9779]/5' : 'border-gray-100 hover:border-gray-200'}`}
                            >
                                <div className="font-bold text-[#1B263B] mb-1 flex items-center"><Wallet size={16} className="mr-2" /> Versements</div>
                                <div className="text-sm text-gray-500">{program.installments}x {program.installmentPrice} $</div>
                                {paymentMethod === 'installments' && <CheckCircle2 className="absolute top-4 right-4 text-[#8F9779]" size={20} />}
                            </button>
                            <button
                                onClick={() => setPaymentMethod('full')}
                                className={`p-4 rounded-xl border-2 text-left transition-all relative ${paymentMethod === 'full' ? 'border-[#8F9779] bg-[#8F9779]/5' : 'border-gray-100 hover:border-gray-200'}`}
                            >
                                <div className="font-bold text-[#1B263B] mb-1 flex items-center"><CreditCard size={16} className="mr-2" /> Comptant</div>
                                <div className="text-sm text-gray-500">{program.price} $</div>
                                {program.price < (program.installmentPrice * program.installments) && (
                                    <span className="absolute -top-3 right-4 bg-[#1B263B] text-white text-[10px] px-2 py-1 rounded-full font-bold">
                                        Économisez {(program.installmentPrice * program.installments) - program.price}$
                                    </span>
                                )}
                                {paymentMethod === 'full' && <CheckCircle2 className="absolute top-4 right-4 text-[#8F9779]" size={20} />}
                            </button>
                        </div>
                    )}

                    {/* Stripe Card Form */}
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="font-bold text-[#1B263B] flex items-center"><Lock size={18} className="mr-2" /> Carte de Crédit</h4>
                            <div className="flex space-x-2 opacity-50">
                                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                            </div>
                        </div>

                        <div className="p-4 bg-white border border-gray-200 rounded-lg">
                            <CardElement options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }} />
                        </div>
                        {cardError && (
                            <div className="text-red-500 text-sm mt-2 font-bold">{cardError}</div>
                        )}
                    </div>

                    {/* Legal Checkbox */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="mt-1 mr-3 w-5 h-5 accent-[#1B263B] cursor-pointer"
                        />
                        <label htmlFor="terms" className="text-xs text-gray-500 cursor-pointer">
                            Je reconnais que pour tout paiement échelonné, la totalité du contrat est due. J'accepte la politique d'annulation (24h).
                        </label>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={!termsAccepted || processingPayment || !stripe}
                        className="w-full py-5 bg-[#1B263B] text-white font-bold rounded-2xl shadow-xl hover:bg-[#253550] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {processingPayment ? (
                            <>
                                <Loader2 className="animate-spin mr-2" /> Traitement sécurisé...
                            </>
                        ) : (
                            <>
                                <Lock className="mr-2" size={18} />
                                {paymentMethod === 'installments'
                                    ? `Payer la 1ère mensualité (${program.installmentPrice}$)`
                                    : `Payer la totalité (${program.price}$)`}
                            </>
                        )}
                    </button>
                    <p className="text-center text-[10px] text-gray-400 flex items-center justify-center">
                        <Lock size={10} className="mr-1" /> Paiement chiffré SSL 256-bit via Stripe
                    </p>
                </div>
            </div>
        </div>
    );
};

const PaymentForm = (props) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentFormContent {...props} />
        </Elements>
    );
};

export default PaymentForm;
