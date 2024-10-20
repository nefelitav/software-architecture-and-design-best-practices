import PaymentAuthorization from '../interfaces/PaymentAuthorization';

export default class PayPalAuthorization implements PaymentAuthorization {
    authorizePayment(): void {
        console.log("PayPal payment authorized");
    }
}