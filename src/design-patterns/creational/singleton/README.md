## Singleton

Ensures a class has only one instance and provides a global access point to it.

### When to use
- A single shared resource must be reused across the application — config, logger, connection manager.
- You need to control and coordinate access to a shared state.

### Trade-offs
- ✅ One instance — no duplication of expensive resources.
- ✅ Easy global access without passing instances around.
- ❌ Global state makes testing harder — instances carry state between tests.
- ❌ Hides dependencies, making code less transparent.

### Example
```typescript
class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }

  log(message: string) {
    this.logs.push(message);
    console.log(`[LOG] ${message}`);
  }
}

const a = Logger.getInstance();
const b = Logger.getInstance();
a.log('Payment received');  // [LOG] Payment received
console.log(a === b);       // true
```