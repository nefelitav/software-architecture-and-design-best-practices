import CreditCardPayment from '../ConcreteProducts/CreditCardPayment';
import CreditCardProcessor from '../ConcreteProducts/CreditCardProcessor';
import CreditCardAuthorization from '../ConcreteProducts/CreditCardAuthorization';
import PaymentMethodFactory from "../../AbstractFactory/PaymentMethodFactory";
import PaymentMethod from "../../AbstractProducts/PaymentMethod";
import PaymentAuthorization from "../../AbstractProducts/PaymentAuthorization";
import PaymentProcessor from "../../AbstractProducts/PaymentProcessor";

export default class CreditCardFactory implements PaymentMethodFactory {
    createPayment(): PaymentMethod {
        return new CreditCardPayment();
    }
    
    createAuthorization(): PaymentAuthorization {
        return new CreditCardAuthorization();
    }

    createProcessor(): PaymentProcessor {
        return new CreditCardProcessor();
    }
}