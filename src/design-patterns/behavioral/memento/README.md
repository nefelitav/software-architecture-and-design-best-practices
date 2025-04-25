## Memento Pattern

### Description
The **Memento Pattern** allows an object's state to be captured and restored without exposing its internal details. This is useful for implementing **undo/redo** functionality or saving and restoring the state of an object at different points in time.

### Use Cases
- **Undo/Redo** functionality in applications (e.g., text editors, graphic design tools).
- **Saving and restoring** the state of an object during transactions or workflows.
- **Snapshotting** the state of objects before making potentially risky changes.

### Components

1. **Memento**: Stores the internal state of the object. It doesn't allow modification of the state once it's stored.
2. **Originator**: The object whose state is being captured. It can create a memento that stores its state and restore its state from a memento.
3. **Caretaker**: Manages the mementos, but doesn’t alter or inspect their contents. It holds the mementos and passes them to the originator when needed.
4. **Client**: Creates the originator and caretaker, and handles the saving and restoration of state.

### Example (Transaction State Management)

```typescript
const transaction = new Transaction('Pending');
const caretaker = new Caretaker();

caretaker.addMemento(transaction.saveStateToMemento());

transaction.setState('Completed');
console.log('State after completion:', transaction.getState());

transaction.restoreStateFromMemento(caretaker.getMemento(0));
console.log('State after undo:', transaction.getState());
