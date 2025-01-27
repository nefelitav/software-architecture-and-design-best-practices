import BasicBankAccount from '../AbstractComponent/BasicBankAccount';

export default abstract class BasicBankAccountDecorator extends BasicBankAccount {
    protected bankAccount: BasicBankAccount;
  
    constructor(bankAccount: BasicBankAccount) {
      super(bankAccount.accountId, bankAccount.balance);
      this.bankAccount = bankAccount;
    }
  
    getDetails(): string {
      return this.bankAccount.getDetails();
    }
  
    deposit(amount: number): void {
      this.bankAccount.deposit(amount);
    }
  
    withdraw(amount: number): void {
      this.bankAccount.withdraw(amount);
    }
  }
  