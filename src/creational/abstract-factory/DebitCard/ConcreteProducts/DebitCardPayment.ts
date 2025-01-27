import PaymentMethod from "../../AbstractProducts/PaymentMethod";

export default class DebitCardPayment implements PaymentMethod {
    makePayment(): void {
        console.log("Debit Card payment made.");
    }
}