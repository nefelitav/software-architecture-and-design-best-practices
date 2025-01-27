## Pool
### Description
The Pool Pattern is used to manage a set of **reusable** objects that are expensive to create and destroy, such as database connections or network sockets. A client of the pool will request an object from the pool and perform operations on the returned object. When the client has finished, it returns the object, which is a specific type of factory object, to the pool rather than destroying it.

### Use Cases
* When the cost of creating or destroying objects is high, and you want to reuse objects.
* When you have a limited number of resources (like database connections or thread pools) and need to manage access to them efficiently.

### Components
1. **Object Pool**: Manages a collection of reusable objects. It provides methods for borrowing and returning objects, ensuring the objects are available when needed.
2. **Pooled Object**: Represents the objects stored in the pool. These objects are reusable and often have initialization and reset logic.
3. **Client**: Requests an object from the pool, uses it, and returns it when done. The client interacts with the pool to manage the object's lifecycle.
4. **Factory (Optional)**: Can be used to create new objects when all existing objects in the pool are in use or when the pool needs to be expanded.

### Pros
- **Resource Management**: Helps in managing and reusing expensive resources effectively.
- **Improved Performance**: Reduces the overhead of creating and destroying objects frequently.

### Cons
- **Complexity**: Adds complexity in terms of tracking and managing pooled objects, especially when handling object states.
- **Resource Leaks**: If objects are not properly returned to the pool, it can lead to resource leaks.

### Example
```typescript
const connectionPool = new ConnectionPool();
const connection = connectionPool.borrow();
connection.executeQuery('SELECT * FROM users');
connectionPool.return(connection);
```