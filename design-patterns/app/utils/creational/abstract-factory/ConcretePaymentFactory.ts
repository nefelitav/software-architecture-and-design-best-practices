import PaymentMethod from './PaymentMethod';
import PaymentFactory from './PaymentFactory';
import CreditCard from './CreditCard';
import DebitCard from './DebitCard';
import PayPal from './PayPal';

export default class ConcretePaymentFactory implements PaymentFactory {
    createCreditCard(): PaymentMethod {
        return new CreditCard();
    }
    
    createDebitCard(): PaymentMethod {
        return new DebitCard();
    }

    createPayPal(): PaymentMethod {
        return new PayPal();
    }
}