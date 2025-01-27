import PaymentProcessor from './PaymentProcessor';
import Stripe from './Stripe';

export default class StripeAdapter implements PaymentProcessor {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe();
  }

  processPayment(amount: number): string {
    return this.stripe.makePayment(amount * 100);
  }
}
