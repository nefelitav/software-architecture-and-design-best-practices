import PaymentMethod from "../../AbstractProducts/PaymentMethod";

export default class PayPalPayment implements PaymentMethod {
    makePayment(): void {
        console.log("PayPalPayment payment made.");
    }
}