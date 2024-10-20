import PaymentMethod from './PaymentMethod';

export default class CreditCard extends PaymentMethod {
    constructor() {
        super('Credit Card', ['USD', 'EUR'], 2.5);
    }

    processPayment(amount: number): string {
        const fee = (amount * this.transactionFee) / 100;
        return `Processed credit card payment of $${amount} (Fee: $${fee}).`;
    }
}