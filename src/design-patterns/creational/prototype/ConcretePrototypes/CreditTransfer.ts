import BankTransfer from '../Prototype/BankTransfer';

export default class CreditTransfer implements BankTransfer {
  holder: string;
  amount: number;
  transferType: string;

  constructor(holder: string, amount: number) {
    this.holder = holder;
    this.amount = amount;
    this.transferType = "Credit";
  }

  clone(): BankTransfer {
    return new CreditTransfer(this.holder, this.amount);
  }

  processTransfer(): void {
    console.log(`Processing ${this.transferType} transfer for ${this.holder} of amount ${this.amount}`);
  }
}