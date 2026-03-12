## Proxy

Provides a substitute for another object to control access to it. The proxy has the same interface as the real object, so the client doesn't know the difference.

### When to use
- You need to add access control, caching, logging, or lazy initialisation around an object.
- You want to defer expensive object creation until it's actually needed.
- You need to intercept calls to a remote or sensitive resource.

### Trade-offs
- ✅ Adds behaviour without touching the real object.
- ✅ Can be transparent to the client.
- ❌ Adds a layer of indirection.
- ❌ Easy to overuse — not everything needs a proxy.

### Example
```typescript
interface DataService {
  fetchUser(id: string): string;
}

class RealDataService implements DataService {
  fetchUser(id: string): string {
    console.log(`Fetching user ${id} from DB...`);
    return `User(${id})`;
  }
}

class CachingProxy implements DataService {
  private cache = new Map<string, string>();
  constructor(private real: DataService) {}

  fetchUser(id: string): string {
    if (this.cache.has(id)) {
      console.log(`Cache hit for ${id}`);
      return this.cache.get(id)!;
    }
    const result = this.real.fetchUser(id);
    this.cache.set(id, result);
    return result;
  }
}

const service = new CachingProxy(new RealDataService());
service.fetchUser('u1'); // Fetching user u1 from DB...
service.fetchUser('u1'); // Cache hit for u1
```