export default class Transaction {
    constructor(
      public id: number,
      public amount: number,
      public type: string,
      public date: Date
    ) {}
  
    isCredit(): boolean {
      return this.type === 'credit';
    }
  
    isDebit(): boolean {
      return this.type === 'debit';
    }
  }
  