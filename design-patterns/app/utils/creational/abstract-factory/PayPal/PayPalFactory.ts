import PaymentMethod from '../interfaces/PaymentMethod';
import PaymentMethodFactory from '../interfaces/PaymentMethodFactory';
import PaymentProcessor from '../interfaces/PaymentProcessor';
import PayPal from './PayPal';
import PayPalProcessor from './PayPalProcessor';

export default class PayPalFactory implements PaymentMethodFactory {
    createPayment(): PaymentMethod {
        return new PayPal();
    }
    
    createProcessor(): PaymentProcessor {
        return new PayPalProcessor();
    }
}