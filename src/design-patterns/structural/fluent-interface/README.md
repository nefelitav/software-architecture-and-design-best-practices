## Fluent Interface
### Description
The **Fluent Interface Pattern** is used to create a more readable and expressive interface by chaining method calls. Each method returns an object, allowing the user to chain multiple method calls in a single statement.

### Use Cases
* Improve code readability and expressiveness.
* Simplify method calls with a clear and easy-to-follow syntax.

### Components
1. **Client**: The object or class that uses the fluent interface to call methods in a chain.
2. **Fluent Methods**: Methods that return the object itself or another object, allowing for chained calls.
3. **Target Object**: The object that is manipulated via method chaining.

### Pros
**Readability**: Promotes cleaner and more concise code.  
**Ease of Use**: Enhances the user experience of interacting with an API.

### Cons
**Verbosity**: Can lead to long method chains that may reduce clarity.  
**Maintainability**: Overuse may complicate the design and understanding of the code.

### Example
```typescript
const person = new Person()
    .setName("John")
    .setAge(30)
    .setAddress("123 Street");
```