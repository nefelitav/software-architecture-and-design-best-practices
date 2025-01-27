## Facade
### Description
The **Facade Pattern** provides a simplified interface to a complex subsystem, hiding the complexities of the system and making it easier to use. It acts as a high-level interface that makes subsystems easier to interact with.

### Use Cases
* Simplify complex systems by providing a higher-level interface.
* Reduce dependencies on external code by providing a single entry point.

### Components
1. **Facade**: The high-level interface that provides simplified methods to interact with the complex subsystem.
2. **Subsystem Classes**: The classes that provide the actual functionality but are hidden behind the facade to simplify usage.
3. **Client**: Interacts with the facade to use the functionality without needing to understand the complexities of the subsystem.

### Pros
- **Simplicity**: Hides complexity and reduces the number of interactions with subsystems.

### Cons
- **Over-simplification**: If not done carefully, the facade might hide too much of the system’s flexibility or functionality.

### Example
```typescript
const facade = new HomeTheaterFacade(new Amplifier(), new DVDPlayer(), new Projector());
facade.watchMovie();  // Simplifies the interaction with complex subsystems
```