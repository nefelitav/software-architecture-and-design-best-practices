import PaymentMethod from './PaymentMethod';

export default interface PaymentFactory {
    createCreditCard(): PaymentMethod;
    createDebitCard(): PaymentMethod;
    createPayPal(): PaymentMethod;
}