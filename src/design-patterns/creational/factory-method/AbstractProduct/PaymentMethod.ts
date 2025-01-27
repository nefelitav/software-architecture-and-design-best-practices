export default abstract class PaymentMethod {
    name: string;
    supportedCurrencies: string[];
    transactionFee: number;

    constructor(name: string, currencies: string[], transactionFee: number) {
        this.name = name;
        this.supportedCurrencies = currencies;
        this.transactionFee = transactionFee;
    }

    abstract processPayment(amount: number): string;

    getDetails(): string {
        return `Payment Method: ${this.name},\n Supported Currencies: ${this.supportedCurrencies},\n Transaction Fee: $${this.transactionFee}\n`;
    }
}