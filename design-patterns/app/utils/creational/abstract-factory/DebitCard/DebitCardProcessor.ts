import PaymentProcessor from '../interfaces/PaymentProcessor';

export default class DebitCardProcessor implements PaymentProcessor {
    processPayment(): void {
        console.log("Debit Card payment processed");
    }
}