import DebitCardPayment from '../ConcreteProducts/DebitCardPayment';
import DebitCardProcessor from '../ConcreteProducts/DebitCardProcessor';
import DebitCardAuthorization from '../ConcreteProducts/DebitCardAuthorization';
import PaymentMethodFactory from "../../AbstractFactory/PaymentMethodFactory";
import PaymentMethod from "../../AbstractProducts/PaymentMethod";
import PaymentAuthorization from "../../AbstractProducts/PaymentAuthorization";
import PaymentProcessor from "../../AbstractProducts/PaymentProcessor";

export default class DebitCardFactory implements PaymentMethodFactory {
    createPayment(): PaymentMethod {
        return new DebitCardPayment();
    }

    createAuthorization(): PaymentAuthorization {
        return new DebitCardAuthorization();
    }
    
    createProcessor(): PaymentProcessor {
        return new DebitCardProcessor();
    }
}