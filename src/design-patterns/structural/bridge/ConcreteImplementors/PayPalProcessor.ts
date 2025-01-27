import PaymentProcessor from '../Implementors/PaymentProcessor';

export default class PayPalProcessor implements PaymentProcessor {
  processPayment(amount: number): string {
    return `Processed payment of $${amount} using PayPal.`;
  }
}