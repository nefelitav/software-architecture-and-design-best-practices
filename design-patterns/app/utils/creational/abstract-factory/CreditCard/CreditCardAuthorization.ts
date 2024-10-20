import PaymentAuthorization from '../interfaces/PaymentAuthorization';

export default class CreditCardAuthorization implements PaymentAuthorization {
    authorizePayment(): void {
        console.log("Credit Card payment authorized");
    }
}