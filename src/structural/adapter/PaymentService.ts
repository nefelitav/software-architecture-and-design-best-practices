import PaymentProcessor from './PaymentProcessor';

export default class PaymentService {
  private processor: PaymentProcessor;

  constructor(processor: PaymentProcessor) {
    this.processor = processor;
  }

  executePayment(amount: number): void {
    console.log(this.processor.processPayment(amount));
  }
}