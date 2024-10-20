import PaymentMethod from '../interfaces/PaymentMethod';

export default class CreditCard implements PaymentMethod {
    makePayment(): void {
        console.log("Credit Card payment made.");
    }
}