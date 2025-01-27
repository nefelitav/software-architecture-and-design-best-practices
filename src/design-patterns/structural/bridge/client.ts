import StripeProcessor from './ConcreteImplementors/StripeProcessor';
import PayPalProcessor from './ConcreteImplementors/PayPalProcessor';
import CreditCardPayment from './RefinedAbstractions/CreditCardPayment';
import BankTransferPayment from './RefinedAbstractions/BankTransferPayment';

export default function Client() {
    const stripeProcessor = new StripeProcessor();
    const creditCardPayment = new CreditCardPayment(stripeProcessor);
    creditCardPayment.pay(100); 

    const payPalProcessor = new PayPalProcessor();
    const bankTransferPayment = new BankTransferPayment(payPalProcessor);
    bankTransferPayment.pay(250);
}