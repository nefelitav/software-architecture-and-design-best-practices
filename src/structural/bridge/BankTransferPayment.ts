import PaymentMethod from './PaymentMethod';

export default class BankTransferPayment extends PaymentMethod {
  pay(amount: number): void {
    console.log(this.processor.processPayment(amount));
  }
}