export default class PaymentMethod {
    protected name: string = "";
    protected supportedCurrencies: string[] = [];
    protected transactionFee: number = 0;

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