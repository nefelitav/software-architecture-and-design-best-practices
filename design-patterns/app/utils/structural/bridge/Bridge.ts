import StripeProcessor from './StripeProcessor';
import PayPalProcessor from './PayPalProcessor';
import CreditCardPayment from './CreditCardPayment';
import BankTransferPayment from './BankTransferPayment';

export default function Bridge() {
    const stripeProcessor = new StripeProcessor();
    const creditCardPayment = new CreditCardPayment(stripeProcessor);
    creditCardPayment.pay(100); 

    const payPalProcessor = new PayPalProcessor();
    const bankTransferPayment = new BankTransferPayment(payPalProcessor);
    bankTransferPayment.pay(250);
}