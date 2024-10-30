import PaymentProcessor from './PaymentProcessor';
import PayPal from './PayPal';

export default class PayPalAdapter implements PaymentProcessor {
  private payPal: PayPal;

  constructor() {
    this.payPal = new PayPal();
  }

  processPayment(amount: number): string {
    return this.payPal.sendPayment(amount);
  }
}