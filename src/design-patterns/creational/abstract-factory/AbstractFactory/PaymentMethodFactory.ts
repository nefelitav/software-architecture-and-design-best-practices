import PaymentAuthorization from '../AbstractProducts/PaymentAuthorization';
import PaymentMethod from '../AbstractProducts/PaymentMethod';
import PaymentProcessor from '../AbstractProducts/PaymentProcessor';

export default interface PaymentMethodFactory {
    createPayment(): PaymentMethod;
    createAuthorization(): PaymentAuthorization;
    createProcessor(): PaymentProcessor;
}