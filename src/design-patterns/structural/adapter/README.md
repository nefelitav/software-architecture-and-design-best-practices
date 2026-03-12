## Adapter

Lets two incompatible interfaces work together by wrapping one with a translation layer. The client talks to the adapter as if it were the expected interface.

### When to use
- You want to use an existing class but its interface doesn't match what you need.
- You're integrating a third-party or legacy system without modifying it.
- You need to make several incompatible classes interchangeable.

### Trade-offs
- ✅ Reuse existing code without touching it.
- ✅ Keeps integration logic in one place.
- ❌ Extra indirection — can obscure what's really happening.

### Example
```typescript
// Legacy system
class LegacyPaymentGateway {
  makePayment(cents: number) {
    console.log(`Legacy: processing ${cents} cents`);
  }
}

// Interface your app expects
interface PaymentProcessor {
  charge(amount: number): void;
}

// Adapter
class LegacyPaymentAdapter implements PaymentProcessor {
  constructor(private legacy: LegacyPaymentGateway) {}
  charge(amount: number) { this.legacy.makePayment(amount * 100); }
}

const processor: PaymentProcessor = new LegacyPaymentAdapter(new LegacyPaymentGateway());
processor.charge(25); // Legacy: processing 2500 cents
```
