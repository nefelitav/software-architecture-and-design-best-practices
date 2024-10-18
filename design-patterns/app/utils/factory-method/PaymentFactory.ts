import CreditCard from './CreditCard';
import DebitCard from './DebitCard';
import PayPal from './PayPal';

export default class PaymentFactory {
    static createPaymentMethod(type: PaymentFactory) {
        switch (type) {
            case 'credit_card':
                return new CreditCard();
            case 'debit_card':
                return new DebitCard();
            case 'paypal':
                return new PayPal();
            default:
                throw new Error('Unknown payment method.');
        }
    }
}