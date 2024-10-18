import PaymentFactory from "./PaymentFactory";

export default function FactoryMethod() {
    const paymentMethods = ['credit_card', 'paypal', 'debit_card'];

    paymentMethods.forEach(method => {
        try {
            const payment = PaymentFactory.createPaymentMethod(method);
            console.log(payment.processPayment(100)); 
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message); 
            } else {
                console.error('An unknown error occurred'); 
            }
        }
    });
}