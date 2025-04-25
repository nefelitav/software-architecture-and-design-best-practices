## Command Pattern

### Description
The **Command Pattern** turns a request into a standalone object that encapsulates all information about the request. This allows you to **parameterize** methods with different commands, **queue** or **log** operations, and **support undo/redo**. It's especially useful in systems that require actions to be executed later or multiple times.

### Use Cases
- Implementing **transaction queues**, **audit logs**, or **macro operations**.
- Supporting **undo/redo** in UI or batch systems.
- Decoupling **senders** from **receivers** of requests.

### Components
1. **Command Interface**: Declares a method for executing commands (usually `execute()`) and optionally for undoing actions (`undo()`).
2. **ConcreteCommand**: Implements the `Command` interface and defines the binding between a `Receiver` and the action to be executed.
3. **Receiver**: Knows how to perform the actual operation (e.g., executing a bank transfer or processing an order).
4. **Invoker**: Requests the execution of a command, storing and triggering it when necessary (e.g., a button or task scheduler).
5. **Client**: Creates specific commands, associates them with their respective receivers, and assigns them to the invoker.

### Example (Bank Transfer Commands)
```typescript
interface Command {
  execute(): void;
}

class TransferCommand implements Command {
  constructor(private from: string, private to: string, private amount: number) {}
  execute() { console.log(`💸 Transferred ${this.amount} from ${this.from} to ${this.to}`); }
}

const queue: Command[] = [
  new TransferCommand('A', 'B', 100),
  new TransferCommand('B', 'C', 50),
];

queue.forEach(cmd => cmd.execute());
