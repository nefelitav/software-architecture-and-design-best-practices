## State Pattern

### Description
The **State Pattern** allows an object to alter its behavior when its internal state changes. The object will appear to change its class. Instead of using conditional statements to represent states, the State Pattern encapsulates state-specific behavior into separate classes, making the code more flexible and easier to maintain. This pattern is commonly used when an object can be in one of many states and its behavior depends on the current state.

### Use Cases
- When an object’s behavior is dependent on its state, and it needs to change behavior at runtime (e.g., a document going through different states like "draft", "approved", and "published").
- When an object needs to maintain an internal state and behave differently depending on it (e.g., a game character with different states like "idle", "running", or "attacking").
- When you want to eliminate large conditionals or `switch` statements in your code related to state transitions.

### Components
1. **State Interface**: Declares the behavior associated with a particular state.
2. **Concrete States**: Implement the state interface and define the specific behavior for each state.
3. **Context**: Maintains the current state and delegates the state-specific behavior to the current state object.
4. **Client**: Interacts with the context, which delegates tasks to the appropriate state.

### Example (Document Approval Process)

```typescript
interface State {
  handleRequest(): void;
}

class DraftState implements State {
  handleRequest(): void {
    console.log('Document is in draft state. Ready for review.');
  }
}

class ReviewState implements State {
  handleRequest(): void {
    console.log('Document is under review. Awaiting approval.');
  }
}

class ApprovedState implements State {
  handleRequest(): void {
    console.log('Document is approved and published.');
  }
}

class Document {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  setState(state: State): void {
    this.state = state;
  }

  request(): void {
    this.state.handleRequest();
  }
}

// Client usage
const document = new Document(new DraftState());
document.request();  // Document is in draft state. Ready for review.

document.setState(new ReviewState());
document.request();  // Document is under review. Awaiting approval.

document.setState(new ApprovedState());
document.request();  // Document is approved and published.
