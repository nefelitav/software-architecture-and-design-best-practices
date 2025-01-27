import Database from "./Database";
import Transaction from "./Transaction";
import TransactionMapper from "./TransactionMapper";

export default function Client() {
    const db = new Database();
    const transactionMapper = new TransactionMapper(db);

    const transaction = new Transaction(1, 500, 'credit', new Date());
    transactionMapper.save(transaction);

    const retrievedTransaction = transactionMapper.findById(1);
    if (retrievedTransaction) {
    console.log(`Retrieved Transaction: ${retrievedTransaction.amount}`);
    console.log(`Is Credit: ${retrievedTransaction.isCredit()}`);
    }
}