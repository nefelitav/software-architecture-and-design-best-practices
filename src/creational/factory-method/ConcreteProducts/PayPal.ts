import PaymentMethod from '../AbstractProduct/PaymentMethod';

export default class PayPal extends PaymentMethod {
    constructor() {
        super('Debit Card', ['USD', 'HUF', 'EUR'], 3.5);
    }

    processPayment(amount: number): string {
        const fee = (amount * this.transactionFee) / 100;
        return `Processed PayPal payment of $${amount} (Fee: $${fee}).`;
    }
}