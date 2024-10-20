import CreditCard from './CreditCard';
import DebitCard from './DebitCard';
import PayPal from './PayPal';
import PaymentMethod from './PaymentMethod';

export default class PaymentMethodFactory {
    static createPaymentMethod(type: string): PaymentMethod {
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