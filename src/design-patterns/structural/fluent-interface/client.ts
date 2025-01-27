import { PaymentRequestBuilder } from "./FluentMethods/PaymentRequestBuilder";

export default function Client(): void {
    const paymentRequest = new PaymentRequestBuilder()
    .setPayerName("Jane Doe")
    .setAmount(150.75)
    .setCurrency("EUR")
    .build();

    console.log(`Payment Request Created: 
    Payer Name: ${paymentRequest.payerName}, 
    Amount: ${paymentRequest.amount} ${paymentRequest.currency}`);
}