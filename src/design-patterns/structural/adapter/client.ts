import StripeAdapter from './Adapters/StripeAdapter';
import PayPalAdapter from './Adapters/PayPalAdapter';

export default function Client() {
    const stripeProcessor = new StripeAdapter();
    console.log(stripeProcessor.processPayment(50));

    const paypalProcessor = new PayPalAdapter();
    console.log(paypalProcessor.processPayment(75));
}
