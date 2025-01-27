import { PaymentRequestBuilder } from "./PaymentRequestBuilder";

export default function FluentInterface(): void {
    const paymentRequest = new PaymentRequestBuilder()
    .setPayerName("Jane Doe")
    .setAmount(150.75)
    .setCurrency("EUR")
    .build();

    console.log(`Payment Request Created: 
    Payer Name: ${paymentRequest.getPayerName()}, 
    Amount: ${paymentRequest.getAmount()} ${paymentRequest.getCurrency()}, 
    Payment Method: ${paymentRequest.getPaymentMethod()}`);
}