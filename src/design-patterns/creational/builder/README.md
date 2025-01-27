## Abstract Factory
### Description
Builder Pattern provides a **flexible** mechanism to construct objects with varying **configurations**. This is achieved by using a builder class, which provides methods for setting properties or assembling components. It separates the construction logic from the representation, ensuring the construction process is controlled and the object is only fully built when all necessary parameters are set.

### Use Cases
* When an object requires **numerous** optional or dependent **properties** to be set.
* When the construction process involves multiple steps or must follow a specific **order**.
* When constructing **immutable** objects with a large number of parameters.

### Components
1. **Builder Interface**: Declares methods for creating and configuring parts of a complex object.
2. **Concrete Builder**: Implements the builder interface, providing specific implementations for the configuration and assembly of the object.
3. **Director (Optional)**: Oversees the construction process by controlling the sequence of builder method calls, ensuring consistency and adherence to a predefined construction algorithm.
4. **Abstract Product**: Represents the abstract definition of the complex object that is being created.
5. **Concrete Product**: The actual object that is constructed using the builder methods, implementing the "Product" interface or class.
6. **Client**: Uses the director or the concrete builder to create the object. The client is responsible for configuring the product, but it doesn't manage the construction process.

### Pros
- **Step-by-Step Construction**: Allows objects to be constructed incrementally with fine-grained control. 
- **Customization**: Provides flexibility to configure complex objects differently based on the builder's method calls. 
- **Readability**: Improves code readability by clearly separating object construction logic from its representation. 
- **Immutability**: Makes it easier to create immutable objects by ensuring the object is built only when fully configured.

### Cons
- **Complexity**: Introduces additional classes and methods, increasing code complexity.

### Example
```typescript
const car = new SportsCarBuilder().setEngine("V8").setSeats(2).build();
```