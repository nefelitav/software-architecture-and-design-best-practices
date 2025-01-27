import CreditCard from '../ConcreteProduct/CreditCard';
import PaymentMethodBuilder from '../../BuilderInterface/PaymentMethodBuilder';

export default class CreditCardBuilder implements PaymentMethodBuilder {
    private readonly creditCard: CreditCard;

    constructor() {
        this.creditCard = new CreditCard();
    }

    setSupportedCurrencies(currencies: string[]): this {
        this.creditCard.setSupportedCurrencies(currencies);
        return this;
    }

    setTransactionFee(fee: number): this {
        this.creditCard.setTransactionFee(fee);
        return this;
    }

    build(): CreditCard {
        return this.creditCard;
    }
}
