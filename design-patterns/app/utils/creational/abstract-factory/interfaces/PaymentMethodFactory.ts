import PaymentAuthorization from './PaymentAuthorization';
import PaymentMethod from './PaymentMethod';
import PaymentProcessor from './PaymentProcessor';

export default interface PaymentMethodFactory {
    createPayment(): PaymentMethod;
    createAuthorization(): PaymentAuthorization;
    createProcessor(): PaymentProcessor;
}