## Abstract Factory
### Description
An Abstract Factory is useful for **encapsulating** the creation of *families* of related or dependent objects, ensuring that products are compatible with each other. By using an Abstract Factory, the client is **decoupled** from the specific classes of the objects it needs, making the code easier to **maintain** and adapt to changes. Additionally, it helps ensure **consistency** by **reusing** common creation logic for related products across various parts of the application. The Abstract Factory defines a Factory Method per product. 

### Use Cases
* When you need to create **families** of related objects (e.g., GUI components like Windows vs. Mac buttons).
* To ensure that objects created together are **compatible** with each other.
* To support **adding** new product families easily without modifying existing code.

### Components
1. **Abstract Factory**: Declares creation methods for producing different abstract products. Acts as an interface or abstract class.
2. **Abstract Products**: Define interfaces or abstract classes for a group of related or dependent products that the factory can create.
3. **Concrete Factories**: Implement the abstract factory interface to create specific products of a particular family.
4. **Concrete Products**: Implement the abstract product interfaces and represent specific product variants.
5. **Client**: Uses the concrete factories to create objects. The client is decoupled from the concrete classes of the products and factories.

### Pros
**Encapsulation**: Encapsulates object creation logic for families of products. \
**Consistency**: Ensures compatibility among objects from the same product family. \
**Extensibility**: New product families can be added without altering existing code.

### Cons
**Complexity**: Increases code complexity due to additional interfaces and classes.

### Example
```typescript
const factory: GUIFactory = new MacFactory(); 
const button = factory.createButton(); 
const checkbox = factory.createCheckbox();
```