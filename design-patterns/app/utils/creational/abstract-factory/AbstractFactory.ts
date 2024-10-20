import CreditCardFactory from "./CreditCard/CreditCardFactory";
import PayPalFactory from "./PayPal/PayPalFactory";
import DebitCardFactory from "./DebitCard/DebitCardFactory";

export default function FactoryMethod() {
    const creditCardFactory = new CreditCardFactory();
    const creditCardPayment = creditCardFactory.createPayment();
    const creditCardAuthorization = creditCardFactory.createAuthorization();
    const creditCardProcessor = creditCardFactory.createProcessor();
    creditCardPayment.makePayment();
    creditCardAuthorization.authorizePayment();
    creditCardProcessor.processPayment();

    

    const payPalFactory = new PayPalFactory();
    const payPalPayment = payPalFactory.createPayment();
    const payPalAuthorization = payPalFactory.createAuthorization();
    const payPalProcessor = payPalFactory.createProcessor();
    payPalPayment.makePayment();
    payPalAuthorization.authorizePayment();
    payPalProcessor.processPayment();



    const debitCardFactory = new DebitCardFactory();
    const debitCardPayment = debitCardFactory.createPayment();
    const debitCardAuthorization = debitCardFactory.createAuthorization();
    const debitCardProcessor = debitCardFactory.createProcessor();
    debitCardPayment.makePayment();
    debitCardAuthorization.authorizePayment();
    debitCardProcessor.processPayment();
}