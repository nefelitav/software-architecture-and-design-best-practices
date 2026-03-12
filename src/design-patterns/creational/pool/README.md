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
    this.inUse.add(conn);
    return conn;
  }

  release(conn: string) {
    this.inUse.delete(conn);
    this.available.push(conn);
  }
}

const pool = new ConnectionPool();
const conn = pool.acquire();
console.log(`Using ${conn}`); // Using conn-3
pool.release(conn);
console.log(`Returned ${conn}`);
```