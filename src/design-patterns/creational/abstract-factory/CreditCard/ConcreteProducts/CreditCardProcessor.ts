import PaymentProcessor from "../../AbstractProducts/PaymentProcessor";

export default class CreditCardProcessor implements PaymentProcessor {
    processPayment(): void {
        console.log("Credit Card payment processed");
    }
}