## Factory Method
Defines an interface for creating an object, but lets the caller or subclass decide which class to instantiate. Centralises creation logic so the client doesn't need to know the concrete type.
### When to use
- The exact type of object to create depends on context or configuration.
- You want to centralise and encapsulate object creation.
- You need to easily swap implementations without touching client code.
### Trade-offs
- ✅ Decouples client from concrete classes.
- ✅ Easy to extend — add a new type without changing existing code.
- ❌ Can proliferate subclasses or factory functions if overused.
### Example
```typescript
interface Notifier {
  send(message: string): void;
}
class EmailNotifier implements Notifier {
  send(message: string) { console.log(`Email: ${message}`); }
}
class SmsNotifier implements Notifier {
  send(message: string) { console.log(`SM## Factory Method
Defines an interface for creating an object, but lets the caller or subclass decide which class to instantfiDefines an interew### When to use
- The exact type of object to create depends on context or configuration.
- You want to centralise and encapsulate object creation.
- Yocat > /Users/nefeli.tavoulari/software-design-best-practices/src/design-patterns/creational/pool/README.md << 'EOF'
## Pool
Maintains a set of reusable objects. Instead of creating and destroying expensive resources on demand, the pool lends them out and reclaims them when the caller is done.
### When to use
- Object creation is expensive — database connections, threads, HTTP clients.
- You have a fixed or limited number of resources to manage.
- You want to avoid allocation overhead under high throughput.
### Trade-offs
- ✅ Reduces the cost of repeated creation and destruction.
- ✅ Naturally caps resource usage.
- ❌ Objects must be properly reset before returning to the pool.
- ❌ Unreturned objects cause leaks or pool exhaustion.
### Example
```typescript
class ConnectionPool {
  private available: string[] = ['conn-1', 'conn-2', 'conn-3'];
  private inUse = new Set<string>();
  acquire(): string {
    const conn = this.available.pop();
    if (!conn) throw new Error('No connections available');
  ## Pool
Maintains a set of reusable objects. Instead of creating and destroying expensive resources on demis.available.push(### When to use
- Object creation is expensive — database connections, threads, HTTP clients.
- You have a fixed or li-3
pool.release(conn);
console.log(`Returned ${conn}`);
```
