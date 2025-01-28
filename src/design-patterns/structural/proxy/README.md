## Proxy
### Description
The **Proxy Pattern** is a structural design pattern that provides a placeholder or surrogate for another object to control access to it. Proxies can add functionality like lazy initialization, access control, logging, or caching, without modifying the original object's code.

### Use Cases
* When controlling access to an object (e.g., authentication or permission checks).
* When adding functionality like logging, caching, or lazy initialization to an object.
* When working with remote objects, providing a local representation of them.

### Components
1. **Subject**: The interface or abstract class that defines the common operations for the real object and the proxy.
2. **RealSubject**: The actual object that performs the core operations.
3. **Proxy**: The object that acts as a placeholder, controlling access to the RealSubject and potentially adding functionality.

### Pros
- **Encapsulation**: Hides the complexities of the RealSubject from the client.
- **Additional Functionality**: Easily adds features like logging, caching, or access control without modifying the original object.

### Cons
- **Increased Complexity**: Introduces additional layers, which can make the system harder to understand and maintain.
- **Potential Overhead**: May introduce slight performance overhead due to the added layer of abstraction.

### Example
```typescript
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);
proxy.request();
// Proxy: Logging access before forwarding to RealSubject.
// RealSubject: Handling request.
```