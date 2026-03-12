## Command

Wraps a request as a standalone object. This lets you queue, log, or undo operations, and decouple the sender from the receiver.

### When to use
- You need undo/redo, audit logs, or scheduled operations.
- You want to queue or replay actions.
- The sender shouldn't know how the operation is executed.

### Trade-offs
- ✅ Supports undo/redo and queuing naturally.
- ✅ Decouples caller from implementation.
- ❌ Can introduce many small command classes.

### Example
```typescript
interface Command {
  execute(): void;
  undo(): void;
}

class TransferCommand implements Command {
  constructor(private from: string, private to: string, private amount: number) {}

  execute() { console.log(`Transferred $${this.amount} from ${this.from} to ${this.to}`); }
  undo()    { console.log(`Reversed $${this.amount} from ${this.to} to ${this.from}`); }
}

const cmd = new TransferCommand('Alice', 'Bob', 200);
cmd.execute(); // Transferred $200 from Alice to Bob
cmd.undo();    // Reversed $200 from Bob to Alice
```
