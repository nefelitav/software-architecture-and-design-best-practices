## Bridge
### Description
The **Bridge Pattern** decouples an abstraction from its implementation, allowing them to vary independently. It separates the high-level logic (abstraction) from the low-level implementation (details), making the system more flexible and extensible.

### Use Cases
* Avoid a strong coupling between abstraction and implementation.
* Simplify complex hierarchies by separating different dimensions of responsibility.

### Components
1. **Abstraction**: The high-level interface that defines operations.
2. **Refined Abstraction**: A specialized version of the abstraction that may include additional operations.
3. **Implementor**: The interface for the implementation classes.
4. **Concrete Implementor**: Implements the `Implementor` interface and defines specific details.
5. **Client**: Instantiates and uses the abstraction and implementor. It doesn't directly interact with the implementation details of payment processing; it relies on the abstraction to do so.

### Pros
- **Flexibility**: Decouples abstraction and implementation, allowing independent changes.  

### Cons
- **Complexity**: Introduces additional layers to the system.

### Example
```typescript  
const remote = new RemoteControl(new SmartTV());  
remote.togglePower();
```