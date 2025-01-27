import PaymentMethod from '../Abstractions/PaymentMethod';

export default class CreditCardPayment extends PaymentMethod {
  pay(amount: number): void {
    console.log(this.processor.processPayment(amount));
  }
}