## Observer Pattern

### Description
The **Observer Pattern** defines a one-to-many dependency relationship between objects. When one object (the **subject**) changes its state, all its dependent objects (the **observers**) are notified and updated automatically. This pattern is used to allow an object to notify other objects about changes without tightly coupling them, making the system more flexible and decoupled.

### Use Cases
- **Event handling**: When you need to notify multiple components of an event or state change (e.g., UI frameworks, user input).
- **Model-View-Controller (MVC)**: The Observer pattern is often used in the MVC architecture to notify views of changes in the model.
- **Real-time updates**: When multiple systems need to be updated in real-time, such as stock market data updates or notifications in a messaging app.

### Components

1. **Subject**: The object that holds the state and notifies observers about changes.
2. **Observers**: The objects that depend on the subject and are notified when the subject’s state changes.
3. **ConcreteSubject**: A concrete implementation of the subject. It stores the state and sends updates to observers when the state changes.
4. **ConcreteObserver**: A concrete implementation of the observer. It updates itself when it is notified by the subject.

### Example (Fintech – Stock Price Update)

```typescript
interface Observer {
  update(price: number): void;
}

class Investor implements Observer {
  constructor(private name: string) {}

  update(price: number): void {
    console.log(`${this.name} has been notified about stock price change: $${price}`);
  }
}

class Stock {
  private price: number = 0;
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  setPrice(price: number): void {
    this.price = price;
    this.notifyObservers();
  }

  private notifyObservers(): void {
    this.observers.forEach(observer => observer.update(this.price));
  }
}

// Client usage
const stock = new Stock();
const investor1 = new Investor("Alice");
const investor2 = new Investor("Bob");

stock.addObserver(investor1);
stock.addObserver(investor2);

stock.setPrice(100);  // Alice and Bob are notified about the stock price change.
stock.setPrice(120);  // Alice and Bob are notified again.

stock.removeObserver(investor1);
stock.setPrice(130);  // Only Bob is notified.
