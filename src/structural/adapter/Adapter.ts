import StripeAdapter from './StripeAdapter';
import PayPalAdapter from './PayPalAdapter';
import PaymentService from './PaymentService';

export default function Adapter() {
    const stripeService = new PaymentService(new StripeAdapter());
    stripeService.executePayment(50);

    const paypalService = new PaymentService(new PayPalAdapter());
    paypalService.executePayment(75);
}