## Chain of Responsibility

### Description
The **Chain of Responsibility** pattern is used to **pass a request along a chain of potential handlers** until one of them handles it. Each handler in the chain either processes the request or forwards it to the next handler. This pattern promotes **loose coupling** between the sender and receiver of a request, making it easier to **add**, **remove**, or **reorder** processing steps without modifying the client or the existing handlers.

It’s particularly useful when multiple objects might handle a request, but the exact handler isn’t known in advance.

### Use Cases
* When multiple objects can handle a request, but the handler isn’t known ahead of time.
* To **decouple** the sender of a request from its receivers.
* When you want to **process requests in stages**, with the ability for each stage to pass or handle the request.
* Logging, validation, processing pipelines, or event bubbling are common real-world use cases.

### Components
1. **Handler Interface / Abstract Class**: Declares a method for handling requests and holds a reference to the next handler in the chain.
2. **Concrete Handlers**: Implement the handler interface and decide whether to process the request or pass it on.
3. **Client**: Builds and initiates the chain by sending the request to the first handler.

### Pros
- **Flexible Processing**: You can dynamically compose chains at runtime.
- **Decoupling**: Request sender doesn't need to know the specific handler.
- **Extensibility**: New handlers can be added easily without changing existing ones.

### Cons
- **Debugging Difficulty**: It may be hard to track the flow of requests through the chain.
- **No Guarantee of Handling**: A request may go unhandled if no handler chooses to process it.

### Example
```typescript
type Transaction = { amount: number };
type Handler = (tx: Transaction, next: () => void) => void;

const fraudCheck: Handler = (tx, next) => tx.amount > 10000 ? console.log('🚫 Fraud!') : next();
const complianceCheck: Handler = (tx, next) => console.log('✅ Passed compliance');

const handle = (tx: Transaction) => fraudCheck(tx, () => complianceCheck(tx, () => {}));

handle({ amount: 5000 });   // ✅ Passed compliance
handle({ amount: 15000 });  // 🚫 Fraud!
