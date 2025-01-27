import PaymentProcessorProxy from './PaymentProcessorProxy';

export default function Client() {
    const paymentProcessor = new PaymentProcessorProxy();
    const result1 = paymentProcessor.processPayment(100); 
    console.log(result1); 

    const result2 = paymentProcessor.processPayment(-50); 
    console.log(result2); 
}
