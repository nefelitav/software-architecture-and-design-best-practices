import PaymentMethodFactory from '../interfaces/PaymentMethodFactory';
import PaymentMethod from '../interfaces/PaymentMethod';
import PaymentProcessor from '../interfaces/PaymentProcessor';
import CreditCard from './CreditCard';
import CreditCardProcessor from './CreditCardProcessor';

export default class CreditCardFactory implements PaymentMethodFactory {
    createPayment(): PaymentMethod {
        return new CreditCard();
    }
    
    createProcessor(): PaymentProcessor {
        return new CreditCardProcessor();
    }
}