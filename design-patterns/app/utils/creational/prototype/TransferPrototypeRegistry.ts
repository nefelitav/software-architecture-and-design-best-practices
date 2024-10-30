import BankTransfer from './BankTransfer';

export default class TransferPrototypeRegistry {
  private prototypes: { [key: string]: BankTransfer } = {};

  registerTransferType(key: string, prototype: BankTransfer): void {
    this.prototypes[key] = prototype;
  }

  createTransfer(key: string): BankTransfer {
    const prototype = this.prototypes[key];
    return prototype.clone();
  }
}
