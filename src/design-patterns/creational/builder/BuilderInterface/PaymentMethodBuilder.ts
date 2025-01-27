import PaymentMethod from "../AbstractProduct/PaymentMethod";

export default interface PaymentMethodBuilder {
    setSupportedCurrencies(currencies: string[]): this;
    setTransactionFee(fee: number): this;
    build(): PaymentMethod;
}