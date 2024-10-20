import ConcretePaymentFactory from "./ConcretePaymentFactory";

export default function FactoryMethod() {
    const paymentFactory = new ConcretePaymentFactory();
    const amount = 100;

    const creditCard = paymentFactory.createCreditCard();
    console.log(creditCard.processPayment(amount));

    const debitCard = paymentFactory.createDebitCard();
    console.log(debitCard.processPayment(amount));

    const payPal = paymentFactory.createPayPal();
    console.log(payPal.processPayment(amount));
}