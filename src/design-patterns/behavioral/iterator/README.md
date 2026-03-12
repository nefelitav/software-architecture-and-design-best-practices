## Iterator

Provides a standard way to traverse a collection without exposing its internal structure.

### When to use
- You want consistent traversal across different collection types.
- You need custom iteration logic — filtering, pagination, lazy loading.
- You want to decouple traversal from the collection itself.

### Trade-offs
- ✅ Uniform interface across different data structures.
- ✅ Supports multiple simultaneous traversals.
- ❌ Overkill for simple arrays or built-in iterables.

### Example
```typescript
function* pendingTransactions(txs: { id: string; status: string }[]) {
  for (const tx of txs) {
    if (tx.status === 'pending') yield tx;
  }
}

const transactions = [
  { id: 'tx1', status: 'completed' },
  { id: 'tx2', status: 'pending' },
  { id: 'tx3', status: 'pending' },
];

for (const tx of pendingTransactions(transactions)) {
  console.log(`Processing ${tx.id}`); // tx2, tx3
}
```
