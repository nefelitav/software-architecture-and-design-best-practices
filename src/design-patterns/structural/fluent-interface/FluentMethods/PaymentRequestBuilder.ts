import { PaymentRequest } from "../TargetObject/PaymentRequest";

export class PaymentRequestBuilder {
    private payerName: string;
    private amount: number;
    private currency: string;
  
    constructor() {
      this.payerName = '';
      this.amount = 0;
      this.currency = 'USD';
    }
  
    setPayerName(name: string): this {
      this.payerName = name;
      return this; 
    }
  
    setAmount(amount: number): this {
      this.amount = amount;
      return this; 
    }
  
    setCurrency(currency: string): this {
      this.currency = currency;
      return this; 
    }
  
    build(): PaymentRequest {
      return new PaymentRequest(this.payerName, this.amount, this.currency);
    }
  }
  