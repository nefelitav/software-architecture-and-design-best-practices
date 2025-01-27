import PayPalPayment from '../ConcreteProducts/PayPalPayment';
import PayPalAuthorization from '../ConcreteProducts/PayPalAuthorization';
import PayPalProcessor from '../ConcreteProducts/PayPalProcessor';
import PaymentMethodFactory from "../../AbstractFactory/PaymentMethodFactory";
import PaymentMethod from "../../AbstractProducts/PaymentMethod";
import PaymentAuthorization from "../../AbstractProducts/PaymentAuthorization";
import PaymentProcessor from "../../AbstractProducts/PaymentProcessor";

export default class PayPalFactory implements PaymentMethodFactory {
    createPayment(): PaymentMethod {
        return new PayPalPayment();
    }

    createAuthorization(): PaymentAuthorization {
        return new PayPalAuthorization();
    }
    
    createProcessor(): PaymentProcessor {
        return new PayPalProcessor();
    }
}