import PaymentProcessor from "../../AbstractProducts/PaymentProcessor";

export default class DebitCardProcessor implements PaymentProcessor {
    processPayment(): void {
        console.log("Debit Card payment processed");
    }
}