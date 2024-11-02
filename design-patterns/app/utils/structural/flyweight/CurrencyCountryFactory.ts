class CurrencyCountryFactory {
    private flyweights: { [key: string]: CurrencyCountry } = {};
  
    getCurrencyCountry(currencyCode: string, countryCode: string): CurrencyCountry {
      const key = `${currencyCode}-${countryCode}`;
      if (!this.flyweights[key]) {
        this.flyweights[key] = new CurrencyCountry(currencyCode, countryCode);
        console.log(`Created new CurrencyCountry for ${currencyCode} in ${countryCode}`);
      }
      return this.flyweights[key];
    }
  
    getFlyweightCount(): number {
      return Object.keys(this.flyweights).length;
    }
}
// flyweight factory