import PaymentMethod from '../interfaces/PaymentMethod';

export default class PayPal implements PaymentMethod {
    makePayment(): void {
        console.log("PayPal payment made.");
    }
}