import CreditCard from '../ConcreteProducts/CreditCard';
import DebitCard from '../ConcreteProducts/DebitCard';
import PayPal from '../ConcreteProducts/PayPal';
import PaymentMethod from '../AbstractProduct/PaymentMethod';

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