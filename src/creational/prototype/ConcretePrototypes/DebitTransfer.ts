import BankTransfer from '../Prototype/BankTransfer';

export default class DebitTransfer implements BankTransfer {
  holder: string;
  amount: number;
  transferType: string;

  constructor(holder: string, amount: number) {
    this.holder = holder;
    this.amount = amount;
    this.transferType = "Debit";
  }

  clone(): BankTransfer {
    return new DebitTransfer(this.holder, this.amount);
  }

  processTransfer(): void {
    console.log(`Processing ${this.transferType} transfer for ${this.holder} of amount ${this.amount}`);
  }
}