## Flyweight
### Description
The **Flyweight Pattern** is a structural design pattern used to minimize memory usage by sharing common data between multiple objects. Instead of creating a new object every time, common data is shared and externalized, which allows for a significant reduction in memory usage when many objects with similar data need to be created.

### Use Cases
* When a large number of objects need to be created with similar or identical data.
* When memory consumption is critical, and there is a need to reduce the overhead of creating many similar objects.
* When the objects have a state that can be separated into intrinsic (shared) and extrinsic (unique) properties.

### Components
1. **Flyweight**: The shared object that contains the intrinsic state (shared data).
2. **ConcreteFlyweight**: A concrete implementation of the Flyweight interface, which shares the intrinsic state.
3. **FlyweightFactory**: A factory that manages the Flyweights and ensures that the correct Flyweight instance is used or created.
4. **Client**: Uses the Flyweight objects to perform operations but is unaware of how the objects are shared or reused.

### Pros
- **Memory Efficiency**: Reduces memory usage by sharing common data between multiple objects.
- **Performance**: Improves performance by reusing existing Flyweights instead of creating new objects.

### Cons
- **Complexity**: Increases complexity due to the management of shared and unique states. The system needs to separate intrinsic and extrinsic states.

### Example
```typescript
const tree = TreeFactory.getTreeType("Oak", "Green", "Rough");
const tree1 = new Tree(10, 20, tree);  // Reuses the same Flyweight (Oak Tree)
```
