import PaymentMethod from '../interfaces/PaymentMethod';
import PaymentProcessor from '../interfaces/PaymentProcessor';
import PaymentMethodFactory from '../interfaces/PaymentMethodFactory';
import DebitCard from './DebitCard';
import DebitCardProcessor from './DebitCardProcessor';

export default class DebitCardFactory implements PaymentMethodFactory {
    createPayment(): PaymentMethod {
        return new DebitCard();
    }
    
    createProcessor(): PaymentProcessor {
        return new DebitCardProcessor();
    }
}