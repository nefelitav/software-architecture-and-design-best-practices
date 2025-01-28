## Mapper
### Description
The **Mapper Pattern** is a structural design pattern used to convert one data representation into another. It is typically used to map data between different layers of an application, such as converting database entities to DTOs (Data Transfer Objects) or between different formats (e.g., JSON to object).

### Use Cases
* When there is a need to map between different data formats or structures.
* When transforming data between different layers of an application (e.g., between database models and service models).
* When reducing code duplication by centralizing data transformation logic.

### Components
1. **Mapper**: A class or function that handles the transformation of data from one form to another.
2. **Source**: The object or data that needs to be transformed.
3. **Target**: The object or format that the source data is being mapped to.

### Pros
- **Code Reusability**: Centralizes mapping logic, making it reusable across different parts of the application.
- **Separation of Concerns**: Keeps the transformation logic separate from the core business logic, promoting clean code.

### Cons
- **Additional Complexity**: Adds extra abstraction, which might make it harder to understand for simple cases.

### Example
```typescript
const user = new User(1, "John Doe");
const userDto = UserMapper.toDto(user);
console.log(userDto); // UserDto { userId: 1, fullName: 'John Doe' }
```