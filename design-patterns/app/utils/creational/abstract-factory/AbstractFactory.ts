import CreditCardFactory from "./CreditCard/CreditCardFactory";
import PayPalFactory from "./PayPal/PayPalFactory";
import DebitCardFactory from "./DebitCard/DebitCardFactory";

export default function FactoryMethod() {
    const creditCardFactory = new CreditCardFactory();
    const creditCardPayment = creditCardFactory.createPayment();
    const creditCardProcessor = creditCardFactory.createProcessor();
    creditCardPayment.makePayment();
    creditCardProcessor.processPayment();

    

    const payPalFactory = new PayPalFactory();
    const payPalPayment = payPalFactory.createPayment();
    const payPalProcessor = payPalFactory.createProcessor();
    payPalPayment.makePayment();
    payPalProcessor.processPayment();



    const debitCardFactory = new DebitCardFactory();
    const debitCardPayment = debitCardFactory.createPayment();
    const debitCardProcessor = debitCardFactory.createProcessor();
    debitCardPayment.makePayment();
    debitCardProcessor.processPayment();
}