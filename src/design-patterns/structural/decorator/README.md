## Decorator

Adds behaviour to an object dynamically by wrapping it. Each decorator layer adds to — or modifies — what the previous layer does, without touching the original class.

### When to use
- You want to add optional responsibilities to objects at runtime.
- Subclassing would create too many combinations.
- Behaviour should be composable and stackable.

### Trade-offs
- ✅ Open/Closed — extend behaviour without modifying the original.
- ✅ Composable — stack as many layers as needed.
- ❌ Many small wrapper classes can be hard to navigate.
- ❌ Decorator order matters and can be easy to get wrong.

### Example
```typescript
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) { console.log(message); }
}

class TimestampLogger implements Logger {
  constructor(private inner: Logger) {}
  log(message: string) { this.inner.log(`[${new Date().toISOString()}] ${message}`); }
}

class PrefixLogger implements Logger {
  constructor(private inner: Logger, private prefix: string) {}
  log(message: string) { this.inner.log(`${this.prefix} ${message}`); }
}

const logger = new PrefixLogger(new TimestampLogger(new ConsoleLogger()), '[PAYMENT]');
logger.log('Transaction completed');
// [PAYMENT] [2026-03-12T...] Transaction completed
```
