import PaymentAuthorization from '../interfaces/PaymentAuthorization';
import PaymentMethod from '../interfaces/PaymentMethod';
import PaymentMethodFactory from '../interfaces/PaymentMethodFactory';
import PaymentProcessor from '../interfaces/PaymentProcessor';
import PayPal from './PayPal';
import PayPalAuthorization from './PayPalAuthorization';
import PayPalProcessor from './PayPalProcessor';

export default class PayPalFactory implements PaymentMethodFactory {
    createPayment(): PaymentMethod {
        return new PayPal();
    }

    createAuthorization(): PaymentAuthorization {
        return new PayPalAuthorization();
    }
    
    createProcessor(): PaymentProcessor {
        return new PayPalProcessor();
    }
}