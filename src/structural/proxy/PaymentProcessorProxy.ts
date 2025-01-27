import PaymentProcessor from './PaymentProcessor';
import RealPaymentProcessor from './RealPaymentProcessor';

export default class PaymentProcessorProxy implements PaymentProcessor {
  private realProcessor: RealPaymentProcessor;

  constructor() {
    this.realProcessor = new RealPaymentProcessor();
  }

  processPayment(amount: number): string {
    console.log(`Attempting to process payment of $${amount}...`);
    
    if (amount <= 0) {
      return 'Invalid payment amount.';
    }

    const result = this.realProcessor.processPayment(amount);
    
    console.log('Payment processed.');
    
    return result;
  }
}