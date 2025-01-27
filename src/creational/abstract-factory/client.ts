import CreditCardFactory from "./CreditCard/ConcreteFactory/CreditCardFactory";
import PayPalFactory from "./PayPal/ConcreteFactory/PayPalFactory";
import DebitCardFactory from "./DebitCard/ConcreteFactory/DebitCardFactory";
import PaymentMethodFactory from "./AbstractFactory/PaymentMethodFactory";

function clientCode(factory: PaymentMethodFactory) {
    const payment = factory.createPayment();
    const authorization = factory.createAuthorization();
    const processor = factory.createProcessor();

    payment.makePayment();
    authorization.authorizePayment();
    processor.processPayment();
}

export default function FactoryMethod() {
    const creditCardFactory = new CreditCardFactory();
    clientCode(creditCardFactory);

    const payPalFactory = new PayPalFactory();
    clientCode(payPalFactory);

    const debitCardFactory = new DebitCardFactory();
    clientCode(debitCardFactory);
}