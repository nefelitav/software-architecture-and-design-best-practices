import PaymentAuthorization from "../../AbstractProducts/PaymentAuthorization";

export default class DebitCardAuthorization implements PaymentAuthorization {
    authorizePayment(): void {
        console.log("Debit Card payment authorized");
    }
}