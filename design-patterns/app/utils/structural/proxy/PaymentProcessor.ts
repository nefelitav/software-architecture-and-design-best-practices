export default interface PaymentProcessor {
    processPayment(amount: number): string;
}