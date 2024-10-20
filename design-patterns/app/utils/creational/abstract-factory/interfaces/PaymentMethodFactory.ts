import PaymentMethod from './PaymentMethod';
import PaymentProcessor from './PaymentProcessor';

export default interface PaymentMethodFactory {
    createPayment(): PaymentMethod;
    createProcessor(): PaymentProcessor;
}