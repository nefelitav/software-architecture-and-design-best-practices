import PaymentMethodFactory from '../interfaces/PaymentMethodFactory';
import PaymentMethod from '../interfaces/PaymentMethod';
import PaymentProcessor from '../interfaces/PaymentProcessor';
import CreditCard from './CreditCard';
import CreditCardProcessor from './CreditCardProcessor';
import PaymentAuthorization from '../interfaces/PaymentAuthorization';
import CreditCardAuthorization from './CreditCardAuthorization';

export default class CreditCardFactory implements PaymentMethodFactory {
    createPayment(): PaymentMethod {
        return new CreditCard();
    }
    
    createAuthorization(): PaymentAuthorization {
        return new CreditCardAuthorization();
    }

    createProcessor(): PaymentProcessor {
        return new CreditCardProcessor();
    }
}