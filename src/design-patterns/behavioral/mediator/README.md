## Mediator Pattern

### Description
The **Mediator Pattern** defines an object that centralizes communication between components (colleagues). Rather than having components interact directly, they communicate through the mediator. This reduces the dependencies between components, making the system more loosely coupled and easier to maintain.

### Use Cases
- When you have **complex communication** between multiple components that should be decoupled.
- In scenarios where you need to **simplify** interaction between various components (e.g., chat systems, form validation).
- When **centralized control** of communication is required for clarity and maintainability.

### Components

1. **Mediator Interface**: Declares a method for sending messages between colleagues. This is typically a method like `send()`.
2. **ConcreteMediator**: Implements the `Mediator` interface and coordinates communication between colleagues. It knows the colleagues and how to communicate with them.
3. **Colleague**: Each colleague is a participant that communicates with other colleagues only through the mediator. They don't directly reference each other.
4. **Client**: Creates and configures the mediator, as well as adds the colleagues to it.

### Example (Chat System for Transaction Updates)

```typescript
const mediator = new ConcreteMediator();
const transactionManager = new TransactionManager(mediator);
const notificationSystem = new NotificationSystem(mediator);

mediator.addColleague(transactionManager);
mediator.addColleague(notificationSystem);

mediator.send('Transaction successful', transactionManager); // Will notify Notification System
