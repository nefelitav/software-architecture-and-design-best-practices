import PaymentGateway from './PaymentGateway';

export default function Singleton() {
    const paymentGateway = PaymentGateway.getInstance();
    paymentGateway.configure('your-api-key', 'https://api.paymentgateway.com');

    const paymentGatewayInstance = PaymentGateway.getInstance();
    paymentGatewayInstance.processPayment(100, 'USD', 'MerchantA');
    paymentGatewayInstance.processPayment(250, 'EUR', 'MerchantB');

    console.log(paymentGateway === paymentGatewayInstance); 
}