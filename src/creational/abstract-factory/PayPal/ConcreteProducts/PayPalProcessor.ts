import PaymentProcessor from "../../AbstractProducts/PaymentProcessor";

export default class PayPalProcessor implements PaymentProcessor {
    processPayment(): void {
        console.log("PayPalPayment payment processed");
    }
}