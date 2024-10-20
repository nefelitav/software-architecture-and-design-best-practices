import CreditCardBuilder from './CreditCardBuilder';
import DebitCardBuilder from './CreditCardBuilder';
import PaymentMethodDirector from './PaymentMethodDirector';

const debitCardBuilder = new DebitCardBuilder();
const creditCardBuilder = new CreditCardBuilder();

const director = new PaymentMethodDirector();

const debitCard = director.buildDebitCard(debitCardBuilder);
const creditCard = director.buildCreditCard(creditCardBuilder);

console.log(debitCard.getName()); 
console.log(debitCard.getSupportedCurrencies()); 
console.log(debitCard.getTransactionFee()); 

console.log(creditCard.getName()); 
console.log(creditCard.getSupportedCurrencies()); 
console.log(creditCard.getTransactionFee()); 