## Chain of Responsibility

Passes a request through a sequence of handlers. Each handler either handles it or forwards it to the next. The caller stays decoupled from the concrete handling logic.

### When to use
- Multiple handlers may process the same request.
- You need pipeline-style logic — validation, auth, middleware, logging.
- You want to add or reorder steps without touching the client.

### Trade-offs
- ✅ Flexible — handlers can be composed and reordered at runtime.
- ✅ Decoupled — the sender doesn't know who handles the request.
- ❌ Hard to trace — request flow is implicit.
- ❌ No guarantee — a request may go unhandled.

### Example
```typescript
type Transaction = { amount: number };
type Handler = (tx: Transaction, next: () => void) => void;

const fraudCheck: Handler = (tx, next) =>
  tx.amount > 10000 ? console.log('Rejected: fraud') : next();

const complianceCheck: Handler = (tx, next) =>
  console.log('Approved');

const handle = (tx: Transaction) =>
  fraudCheck(tx, () => complianceCheck(tx, () => {}));

handle({ amount: 5000 });   // Approved
handle({ amount: 15000 });  // Rejected: fraud
```
