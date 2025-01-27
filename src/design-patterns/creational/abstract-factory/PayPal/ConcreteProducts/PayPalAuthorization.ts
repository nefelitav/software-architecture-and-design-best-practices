import PaymentAuthorization from "../../AbstractProducts/PaymentAuthorization";

export default class PayPalAuthorization implements PaymentAuthorization {
    authorizePayment(): void {
        console.log("PayPalPayment payment authorized");
    }
}