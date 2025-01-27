## Factory Method
### Description
The Factory Method pattern defines an interface for creating objects, but allows subclasses or client code to alter the type of objects that will be created. This pattern is used when a class cannot anticipate the type of objects it must create or when the creation process should be delegated to a subclass. The factory method **encapsulates** object creation logic, promoting **loose coupling** by hiding the instantiation of objects.

### Use Cases
* When a class cannot anticipate the exact type of objects it needs to create.
* When a class wants to delegate the responsibility of object creation to its subclasses or external factors.
* When the object creation process involves complex logic or requires specific configurations that should not be handled directly by the client.
* When we want to create a single type of product. E.g. if you only need to create different types of vehicles, such as only cars, then a Factory Method would be sufficient. If, however, you need to create both cars and trucks, you may want to consider an Abstract Factory.

### Components
1. **Creator/Factory (Abstract Class or Interface)**: Declares the factory method, which returns a product object. The creator may also define default behavior, but it usually leaves the creation of objects to the factory method.
2. **Concrete Creator**: Implements the factory method to return an instance of a specific product. This class is responsible for deciding the type of object to be created.
3. **Product (Abstract Product)**: Represents the abstract class or interface for the object that is created by the factory method.
4. **Concrete Product**: Implements the product interface and represents the specific instance of the object created by the concrete creator.
5. **Client**: Uses the factory method to create objects, relying on the creator to provide the correct product without needing to know the specific class of the product.

### Pros
**Loose Coupling**: The client is decoupled from the specific product classes and relies on the creator to provide the correct product.

### Cons
**Complexity**: The introduction of additional classes (creator, concrete creator, product) can increase the complexity of the system.

### Example
```typescript
const paymentMethod = PaymentMethodFactory.createPaymentMethod('credit');
paymentMethod.processPayment(100);
```