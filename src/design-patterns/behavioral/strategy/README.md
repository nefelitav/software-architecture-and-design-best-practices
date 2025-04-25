## Strategy Pattern

### Description
The **Strategy Pattern** is a behavioral design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable. The pattern allows the algorithm to be selected at runtime, enabling a client to choose the appropriate algorithm to use without changing the context in which it is used. This pattern promotes the idea of **composition over inheritance** by allowing different strategies to be injected into an object, making it flexible and easily extendable.

### Use Cases
- When you need to select a specific algorithm at runtime, based on the context (e.g., different payment methods in an online store).
- When you want to avoid having many conditional statements in your code for different behaviors (e.g., different sorting algorithms).
- When you want to allow clients to choose from multiple variations of an algorithm.

### Components

1. **Strategy Interface**: Declares a common interface for all concrete strategies.
2. **Concrete Strategies**: Implement the strategy interface and provide specific implementations for each algorithm.
3. **Context**: Maintains a reference to the strategy object and can change the strategy dynamically at runtime.

### Example (Fintech – Payment Processing)

```typescript
// Strategy Interface
interface PaymentStrategy {
  processPayment(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} using Credit Card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} using PayPal.`);
  }
}

class BankTransferPayment implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} using Bank Transfer.`);
  }
}

// Context
class PaymentProcessor {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  process(amount: number): void {
    this.paymentStrategy.processPayment(amount);
  }
}

// Client usage
const processor = new PaymentProcessor(new CreditCardPayment());
processor.process(100);  // Processing payment of $100 using Credit Card.

processor.setPaymentStrategy(new PayPalPayment());
processor.process(200);  // Processing payment of $200 using PayPal.

processor.setPaymentStrategy(new BankTransferPayment());
processor.process(300);  // Processing payment of $300 using Bank Transfer.
