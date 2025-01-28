import PaymentProcessor from '../Subject/PaymentProcessor';

export default class RealPaymentProcessor implements PaymentProcessor {
  processPayment(amount: number): string {
    return `Processed payment of $${amount} successfully.`;
  }
}