export class PaymentRequest {
    constructor(
      public payerName: string,
      public amount: number,
      public currency: string,
    ) {}
  }
  