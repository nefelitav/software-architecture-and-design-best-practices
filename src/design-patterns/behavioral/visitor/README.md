## Visitor
Lets you add new operations to a set of objects without modifying them. Instead of putting the operation inside each class, you pass a visitor in — it knows what to do with each type.
### When to use
- You need to perform multiple distinct operations on a set of objects with different types.
- You want to keep those operations separate from the objects themselves.
- The object structure is stable but operations on it change frequently.
### Trade-offs
- ✅ New operations can be added without touching existing classes.
- ✅ Keeps operation logic in one place per visitor.
- ❌ Adding a new element type requires updating every visitor.
- ❌ Can break encapsulation if objects need to expose internals to the visitor.
### Example
```typescript
interface Visitor {
  visitCredit(tx: CreditTx): void;
  visitDebit(tx: DebitTx): void;
}
interface Transaction {
  accept(v: Visitor): void;
}
class CreditTx implements Transaction {
  constructor(public amount: number) {}
  accept(v: Visitor) { v.visitCredit(this); }
}
class DebitTx implements Transaction {
  constructor(public amount: number) {}
  accept(v: Visitor) { v.visitDebit(this); }
}
class AuditVisitor implements Visitor {
  visitCredit(tx: CreditTx) { console.log(`Credit: +$${tx.amount}`); }
  visitDebit(tx: DebitTx)   { console.log(`Debit:  -$${tx.amount}`); }
}
const transactions: Transaction[] = [new CreditTx(200), new DebitTx(50)];
const auditor = new AuditVisitor();
transactions.forEach(tx => tx.accept(auditor));
// Credit: +$200
// Debit:  -$50
```
