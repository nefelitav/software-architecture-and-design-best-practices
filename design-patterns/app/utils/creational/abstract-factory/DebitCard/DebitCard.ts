import PaymentMethod from '../interfaces/PaymentMethod';

export default class DebitCard implements PaymentMethod {
    makePayment(): void {
        console.log("Debit Card payment made.");
    }
}