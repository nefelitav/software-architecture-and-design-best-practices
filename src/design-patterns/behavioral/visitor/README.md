## Visitor Pattern

### Description
The **Visitor Pattern** is a behavioral design pattern that allows you to add further operations to objects without having to modify them. The pattern decouples the algorithms from the objects they operate on, enabling new operations to be added without altering the object structure. It allows you to "visit" different types of objects and apply actions on them via a common interface.

### Use Cases
- When you need to perform a variety of operations on a set of objects of different types, and those operations must be decoupled from the object classes.
- When adding new operations or behaviors to existing object structures is needed, without modifying the objects themselves.
- When you have a complex object structure and want to apply multiple operations to it in a clean and extensible way.

### Components

1. **Visitor Interface**: Declares a visit method for each type of concrete element that can be visited.
2. **Concrete Visitor**: Implements the visit methods, defining the specific operation to be performed on each type of element.
3. **Element Interface**: Declares an `accept` method that takes a visitor as an argument.
4. **Concrete Elements**: Implement the `accept` method, which calls the visitor’s corresponding visit method.
5. **Client**: Uses the visitor to perform actions on the element structure without changing the element classes.

### Example (Fintech – Different Types of Transactions)

```typescript
// Visitor Interface
interface TransactionVisitor {
  visitCreditTransaction(transaction: CreditTransaction): void;
  visitDebitTransaction(transaction: DebitTransaction): void;
}

// Concrete Visitor
class TransactionSummaryVisitor implements TransactionVisitor {
  visitCreditTransaction(transaction: CreditTransaction): void {
    console.log(`Credit transaction of amount: $${transaction.amount}`);
  }

  visitDebitTransaction(transaction: DebitTransaction): void {
    console.log(`Debit transaction of amount: $${transaction.amount}`);
  }
}

// Element Interface
interface Transaction {
  accept(visitor: TransactionVisitor): void;
}

// Concrete Elements
class CreditTransaction implements Transaction {
  constructor(public amount: number) {}

  accept(visitor: TransactionVisitor): void {
    visitor.visitCreditTransaction(this);
  }
}

class DebitTransaction implements Transaction {
  constructor(public amount: number) {}

  accept(visitor: TransactionVisitor): void {
    visitor.visitDebitTransaction(this);
  }
}

// Client usage
const credit = new CreditTransaction(100);
const debit = new DebitTransaction(50);

const summaryVisitor = new TransactionSummaryVisitor();
credit.accept(summaryVisitor);  // Credit transaction of amount: $100
debit.accept(summaryVisitor);   // Debit transaction of amount: $50
