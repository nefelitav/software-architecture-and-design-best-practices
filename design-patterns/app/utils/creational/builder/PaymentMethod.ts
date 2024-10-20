export default class PaymentMethod {
    protected name: string = "";
    protected supportedCurrencies: string[] = [];
    protected transactionFee: number = 0;

    setName(name: string): void {
        this.name = name;
    }

    setSupportedCurrencies(supportedCurrencies: string[]): void {
        this.supportedCurrencies = supportedCurrencies;
    }

    setTransactionFee(transactionFee: number): void {
        this.transactionFee = transactionFee;
    }

    getName(): string {
        return this.name;
    }

    getSupportedCurrencies(): string[] {
        return this.supportedCurrencies;
    }

    getTransactionFee(): number {
        return this.transactionFee;
    }
}