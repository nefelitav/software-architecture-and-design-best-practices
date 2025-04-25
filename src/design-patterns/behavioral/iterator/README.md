## Iterator Pattern

### Description
The **Iterator Pattern** provides a way to **access elements of a collection sequentially** without exposing its internal structure. It promotes encapsulation and separates the logic of traversal from the collection itself.

### Use Cases
- Traversing **transaction logs**, **audit trails**, or **paginated results**.
- Hiding complex data structures behind a simple iteration interface.
- Supporting **custom iteration** (e.g., filtering failed transactions).

### Components
- **Iterator Interface**: Defines methods like `next()`, `hasNext()`.
- **Concrete Iterator**: Implements the traversal logic.
- **Aggregate (Collection)**: Provides an interface to get the iterator.
- **Client**: Uses the iterator to access items sequentially.

### Pros
- ✅ **Encapsulation**: Hides the internal structure of collections.
- ✅ **Flexibility**: Allows multiple traversal strategies.
- ✅ **Uniformity**: Treat different collections in the same way.

### Cons
- ❌ **Overhead**: Might add extra classes or complexity.
- ❌ **Limited Power**: Less useful when full access to internal structure is needed.

### Example (Iterate Over Transactions)
```typescript
type Transaction = { id: string; amount: number };
const transactions: Transaction[] = [
  { id: 'tx1', amount: 100 },
  { id: 'tx2', amount: 200 },
];

const iterator = transactions[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
  console.log(`🧾 Processing transaction ${result.value.id}`);
  result = iterator.next();
}
