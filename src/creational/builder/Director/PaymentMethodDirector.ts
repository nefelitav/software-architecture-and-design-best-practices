import CreditCardBuilder from '../CreditCard/ConcreteBuilder/CreditCardBuilder';
import DebitCardBuilder from '../CreditCard/ConcreteBuilder/CreditCardBuilder';
import CreditCard from '../CreditCard/ConcreteProduct/CreditCard';
import DebitCard from '../DebitCard/ConcreteBuilder/DebitCard';

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
    // instead of calling CreditCard constructor with these arguments, which could make it hard to read
}