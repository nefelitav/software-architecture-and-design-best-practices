## Prototype

Creates new objects by cloning an existing one rather than constructing from scratch. Useful when object creation is expensive or when you need many similar instances with slight variations.

### When to use
- Creating a new object is expensive and a clone is cheaper.
- You need many objects with the same base configuration but different details.
- You want to avoid coupling to specific classes at creation time.

### Trade-offs
- ✅ Avoids repeating expensive initialisation.
- ✅ Simple way to produce pre-configured variants.
- ❌ Deep cloning nested objects can be tricky.

### Example
```typescript
type Config = { region: string; timeout: number; retries: number };

function cloneConfig(base: Config, overrides: Partial<Config>): Config {
  return { ...base, ...overrides };
}

const baseConfig: Config = { region: 'eu-west-1', timeout: 3000, retries: 3 };

const highRetry = cloneConfig(baseConfig, { retries: 10 });
const usConfig  = cloneConfig(baseConfig, { region: 'us-east-1' });

console.log(highRetry); // { region: 'eu-west-1', timeout: 3000, retries: 10 }
console.log(usConfig);  // { region: 'us-east-1', timeout: 3000, retries: 3 }
```