import { useState } from 'react';
import { PROGRAMS_DATA } from '../data/programs';

const useBooking = (setCurrentPage) => {
    const [bookingStep, setBookingStep] = useState('calendar'); // 'calendar' | 'form' | 'payment' | 'success'
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isRecurring, setIsRecurring] = useState(false);
    const [bookingData, setBookingData] = useState({
        program: "Non spécifié",
        wellbeing: 5,
        confidence: "Moyenne (Hésitation)",
        objective: "Plaisir & Bien-être",
        name: "",
        age: "",
        sport: null
    });
    const [paymentMethod, setPaymentMethod] = useState('full');
    const [processingPayment, setProcessingPayment] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSelectProgram = (programName) => {
        setBookingData({ ...bookingData, program: programName });
        // Reset payment method default
        const prog = PROGRAMS_DATA[programName];
        setPaymentMethod(prog?.installments > 1 ? 'installments' : 'full');
        setBookingStep('sport');
        setIsRecurring(false); // Reset recurrence
        setSelectedDate(null);
        setSelectedTime(null);
        setCurrentPage('booking');
    };

    const handleProcessPayment = async () => {
        if (!termsAccepted) return;
        setProcessingPayment(true);
        // Simulation d'un délai de traitement API (Stripe)
        await new Promise(resolve => setTimeout(resolve, 2000));
        setProcessingPayment(false);
        setBookingStep('success');
    };

    return {
        bookingStep,
        setBookingStep,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        isRecurring,
        setIsRecurring,
        bookingData,
        setBookingData,
        paymentMethod,
        setPaymentMethod,
        processingPayment,
        termsAccepted,
        setTermsAccepted,
        handleSelectProgram,
        handleProcessPayment
    };
};

export default useBooking;
