import PaymentMethod from "../../AbstractProducts/PaymentMethod";

export default class CreditCardPayment implements PaymentMethod {
    makePayment(): void {
        console.log("Credit Card payment made.");
    }
}