import PaymentProcessor from '../Implementors/PaymentProcessor';

export default abstract class PaymentMethod {
    protected processor: PaymentProcessor;
  
    constructor(processor: PaymentProcessor) {
      this.processor = processor;
    }
  
    abstract pay(amount: number): void;
}
  