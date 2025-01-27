## Singleton
### Description
The **Singleton Pattern** ensures that a class has only **one** instance and provides a global access point to that instance. This is useful when you need to ensure that a class is only instantiated once, such as in cases where a shared resource or configuration is required throughout an application.

### Use Cases
* When you need to ensure that a class has only one instance throughout the application.
* When managing global state, configurations, or resources that should be shared.

### Components
1. **Singleton**: The class that contains the instance and ensures that only one instance of the class is created. It also provides access to this instance through a global access method, usually `getInstance()`.
2. **Client**: The class or function that requests the singleton instance, ensuring that only one instance is used throughout the application.

### Pros
**Global Access**: Provides a global point of access to the single instance of the class. \
**Controlled Instantiation**: Ensures that only one instance is created, preventing unnecessary object creation.

### Cons
**Hidden Dependencies**: Can make testing and debugging more difficult due to the global state. \

### Example
```typescript
const logger = Logger.getInstance();
logger.log("Singleton pattern in action");
```