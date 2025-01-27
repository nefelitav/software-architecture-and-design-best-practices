import PaymentMethod from '../AbstractProduct/PaymentMethod';

export default class DebitCard extends PaymentMethod {
    constructor() {
        super('Debit Card', ['USD', 'HUF'], 1.5);
    }

    processPayment(amount: number): string {
        const fee = (amount * this.transactionFee) / 100;
        return `Processed debit card payment of $${amount} (Fee: $${fee}).`;
    }
}