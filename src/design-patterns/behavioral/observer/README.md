## Observer
Defines a one-to-many relationship. When the subject changes state, all registered observers are notified automatically. Neither side needs to know the details of the other.
### When to use
- One event or state change should trigger reactions in multiple places.
- You want to decouple the source of change from its side effects.
- Common in event systems, reactive UIs, and real-time data feeds.
### Trade-offs
- ✅ Loose coupling between subject and observers.
- ✅ Easy to add new reactions without changing the subject.
- ❌ Notification order is not always predictable.
- ❌ Memory leaks if observers aren't removed when no longer needed.
### Example
```typescript
type Observer = (price: number) => void;
class Stock {
  private observers: Observer[] = [];
  private price = 0;
  subscribe(fn: Observer)   { this.observers.push(fn); }
  unsubscribe(fn: Observer) { this.observers = this.observers.filter(o => o !== fn); }
  setPrice(price: number) {
    this.price = price;
    this.observers.forEach(o => o(price));
  }
}
const stock = new Stock();
const alice: Observer = (p) => console.log(`Alice notified: $${p}`);
const bob: Observer   = (p) => console.log(`Bob notified: $${p}`);
stock.subscribe(alice);
stock.subscribe(bob);
stock.setPrice(100); // Alice notified: $100 / Bob notified: $100
stock.unsubscribe(alice);
stock.setPrice(120); // Bob notified: $120
```
