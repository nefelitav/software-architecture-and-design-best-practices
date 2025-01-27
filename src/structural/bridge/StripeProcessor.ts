import PaymentProcessor from './PaymentProcessor';

export default class StripeProcessor implements PaymentProcessor {
  processPayment(amount: number): string {
    return `Processed payment of $${amount} using Stripe.`;
  }
}