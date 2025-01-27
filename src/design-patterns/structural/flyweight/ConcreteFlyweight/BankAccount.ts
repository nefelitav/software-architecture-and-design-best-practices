import CurrencyCountry from '../Flyweight/CurrencyCountry';

export default class BankAccount {
    constructor(public accountId: string, private currencyCountry: CurrencyCountry, public balance: number) {}
  
    getDetails(): string {
      return `Account ${this.accountId}: ${this.balance} ${this.currencyCountry.currencyCode} in ${this.currencyCountry.countryCode}`;
    }
}