## Flyweight

Reduces memory usage by sharing common data across many objects. Splits state into *intrinsic* (shared, immutable) and *extrinsic* (unique per use, passed in at runtime).

### When to use
- You need to create a large number of similar objects and memory is a concern.
- Objects share significant data that doesn't change per instance.
- Common in rendering engines, text editors, and game entities.

### Trade-offs
- ✅ Significant memory savings when many objects share state.
- ✅ Reduces object creation overhead.
- ❌ More complex — you must separate and manage two kinds of state.
- ❌ Harder to reason about when extrinsic state is scattered.

### Example
```typescript
class IconStyle {
  constructor(public color: string, public size: number) {}
}

class IconStyleFactory {
  private cache = new Map<string, IconStyle>();

  get(color: string, size: number): IconStyle {
    const key = `${color}-${size}`;
    if (!this.cache.has(key)) this.cache.set(key, new IconStyle(color, size));
    return this.cache.get(key)!;
  }
}

const factory = new IconStyleFactory();

const icons = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  x: Math.random(),
  y: Math.random(),
  style: factory.get('blue', 16), // shared instance
}));

console.log(icons[0].style === icons[999].style); // true
```
