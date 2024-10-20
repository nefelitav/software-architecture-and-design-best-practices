import CreditCardBuilder from './CreditCardBuilder';
import DebitCardBuilder from './CreditCardBuilder';
import CreditCard from './CreditCard';
import DebitCard from './DebitCard';

export default class PaymentMethodDirector {
    buildDebitCard(builder: DebitCardBuilder): DebitCard {
        return builder
            .setSupportedCurrencies(['USD', 'EUR'])
            .setTransactionFee(1.5)
            .build();
    }

    buildCreditCard(builder: CreditCardBuilder): CreditCard {
        return builder
            .setSupportedCurrencies(['USD', 'GBP', 'CAD'])
            .setTransactionFee(2.0)
            .build();
    }
}