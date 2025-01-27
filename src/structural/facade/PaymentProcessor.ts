export default class PaymentProcessor {
    processPayment(amount: number): string {
        console.log(`Processing payment of $${amount}...`);
        return `Processed payment of $${amount} successfully.`;
    }
}