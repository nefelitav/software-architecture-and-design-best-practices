import PaymentMethod from '../interfaces/PaymentMethod';
import PaymentProcessor from '../interfaces/PaymentProcessor';
import PaymentAuthorization from '../interfaces/PaymentAuthorization';
import PaymentMethodFactory from '../interfaces/PaymentMethodFactory';
import DebitCard from './DebitCard';
import DebitCardProcessor from './DebitCardProcessor';
import DebitCardAuthorization from './DebitCardAuthorization';

export default class DebitCardFactory implements PaymentMethodFactory {
    createPayment(): PaymentMethod {
        return new DebitCard();
    }

    createAuthorization(): PaymentAuthorization {
        return new DebitCardAuthorization();
    }
    
    createProcessor(): PaymentProcessor {
        return new DebitCardProcessor();
    }
}