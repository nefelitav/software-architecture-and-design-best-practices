export default class BasicBankAccount {
  constructor(public accountId: string, public balance: number) {}

  getDetails(): string {
    return `Account ${this.accountId}: Balance ${this.balance}`;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }
}
