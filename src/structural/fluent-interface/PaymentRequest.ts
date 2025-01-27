export class PaymentRequest {
    constructor(
      public payerName: string,
      public amount: number,
      public currency: string,
    ) {}

    getPayerName = (): string => this.payerName;
    getAmount = (): number => this.amount;
    getCurrency = (): string => this.currency;
  }
  