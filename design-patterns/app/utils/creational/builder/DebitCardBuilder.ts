import DebitCard from './DebitCard';
import PaymentMethodBuilder from './PaymentMethodBuilder';

export default class DebitCardBuilder implements PaymentMethodBuilder {
    private debitCard: DebitCard;

    constructor() {
        this.debitCard = new DebitCard();
    }

    setSupportedCurrencies(currencies: string[]): this {
        this.debitCard.setSupportedCurrencies(currencies);
        return this;
    }

    setTransactionFee(fee: number): this {
        this.debitCard.setTransactionFee(fee);
        return this;
    }

    build(): DebitCard {
        return this.debitCard;
    }
}