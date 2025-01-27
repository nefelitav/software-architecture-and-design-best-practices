import BasicBankAccountDecorator from '../AbstractDecorator/BasicBankAccountDecorator';
import BasicBankAccount from '../AbstractComponent/BasicBankAccount';

export default class TransactionFeeDecorator extends BasicBankAccountDecorator {
  private fee: number;

  constructor(bankAccount: BasicBankAccount, fee: number) {
    super(bankAccount);
    this.fee = fee;
  }

  withdraw(amount: number): void {
    const totalAmount = amount + this.fee;
    console.log(`Applying transaction fee of ${this.fee}. Total withdrawal: ${totalAmount}`);
    super.withdraw(totalAmount);
  }
}
