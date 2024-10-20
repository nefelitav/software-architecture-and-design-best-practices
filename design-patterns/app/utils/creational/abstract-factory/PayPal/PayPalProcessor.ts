import PaymentProcessor from '../interfaces/PaymentProcessor';

export default class PayPalProcessor implements PaymentProcessor {
    processPayment(): void {
        console.log("PayPal payment processed");
    }
}