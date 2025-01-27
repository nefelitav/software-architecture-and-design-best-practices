import Database from "./Database";
import Transaction from "./Transaction";

export default class TransactionMapper {
    constructor(private db: Database) {}
  
    public findById(id: number): Transaction | null {
      const record = this.db.findById(id);
      if (!record) return null;
  
      return new Transaction(
        record.id,
        record.amount,
        record.type,
        new Date(record.date)
      );
    }
  
    public save(transaction: Transaction): void {
      const record = {
        id: transaction.id,
        amount: transaction.amount,
        type: transaction.type,
        date: transaction.date.toISOString(),
      };
  
      this.db.save(transaction.id, record);
    }
  }
  