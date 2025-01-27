import PaymentMethodFactory from "./Factory/PaymentMethodFactory";

export default function Client() {
    const paymentMethods = ['credit_card', 'paypal', 'debit_card'];

    paymentMethods.forEach(method => {
        try {
            const payment = PaymentMethodFactory.createPaymentMethod(method);
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