## Memento

Captures and restores an object's state without exposing its internals. The classic mechanism behind undo/redo.

### When to use
- You need undo/redo or state rollback.
- You want to snapshot state before a risky operation.
- The object's internal structure shouldn't be exposed to the outside.

### Trade-offs
- ✅ Clean undo/redo without leaking internals.
- ✅ Snapshots are self-contained.
- ❌ Can use significant memory if snapshots are large or frequent.

### Example
```typescript
class Transaction {
  constructor(private status: string) {}

  getStatus() { return this.status; }
  setStatus(s: string) { this.status = s; }
  save() { return { status: this.status }; }
  restore(snapshot: { status: string }) { this.status = snapshot.status; }
}

const tx = new Transaction('pending');
const snapshot = tx.save();

tx.setStatus('processing');
console.log(tx.getStatus()); // processing

tx.restore(snapshot);
console.log(tx.getStatus()); // pending
```
