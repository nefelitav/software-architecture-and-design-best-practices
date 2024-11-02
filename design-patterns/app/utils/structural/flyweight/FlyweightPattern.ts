const factory = new CurrencyCountryFactory();

// accounts with shared currency-country instances
const account1 = new BankAccount('ACC001', factory.getCurrencyCountry('USD', 'US'), 1000);
const account2 = new BankAccount('ACC002', factory.getCurrencyCountry('USD', 'US'), 1500);
const account3 = new BankAccount('ACC003', factory.getCurrencyCountry('EUR', 'FR'), 2000);

console.log(account1.getDetails());
console.log(account2.getDetails());
console.log(account3.getDetails());

console.log(`Total CurrencyCountry flyweights created: ${factory.getFlyweightCount()}`);
