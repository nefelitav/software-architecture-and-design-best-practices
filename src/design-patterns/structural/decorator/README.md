## Decorator Pattern

### Description
The **Decorator Pattern** allows behavior to be added to an individual object dynamically, without affecting the behavior of other objects from the same class. It provides a flexible alternative to subclassing for extending functionality.

### Use Cases
* Add additional responsibilities to an object dynamically.
* Enhance or modify the behavior of an object at runtime without altering its structure.
* Avoid subclassing when only a few instances need to differ in behavior.

### Components
1. **Component**: The base interface or abstract class that defines the operations that can be decorated.
2. **ConcreteComponent**: A class that implements the `Component` interface and provides the base functionality.
3. **Decorator**: An abstract class or interface that wraps a `Component` object and extends its behavior.
4. **ConcreteDecorator**: A class that extends the `Decorator` and adds specific behavior to the `Component` object.
5. **Client**: Instantiates and uses the `ConcreteComponent` and `Decorator` objects, combining them to achieve desired behavior.

### Pros
- **Flexibility**: Allows adding functionality dynamically.
- **Open/Closed Principle**: Objects can be extended without modifying existing code.
- **Reusability**: Behaviors can be reused across different objects.

### Cons
- **Complexity**: The pattern can lead to many small classes, making the system harder to understand.

### Example
```typescript
// Decorate a basic coffee object with milk and sugar
let myCoffee = new SugarDecorator(new MilkDecorator(new SimpleCoffee()));
console.log(myCoffee.cost()); 
```
