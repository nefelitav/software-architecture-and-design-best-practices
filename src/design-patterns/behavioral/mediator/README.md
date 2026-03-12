## Mediator

Centralises communication between components. Instead of components talking to each other directly, they go through a mediator. This reduces the web of direct dependencies.

### When to use
- Multiple components need to coordinate but shouldn't be tightly coupled.
- You want to centralise cross-component logic in one place.
- Direct wiring between components is getting hard to manage.

### Trade-offs
- ✅ Reduces coupling between components.
- ✅ Easier to change coordination logic in one place.
- ❌ Mediator itself can grow complex if it handles too much.

### Example
```typescript
type EventType = 'payment:completed' | 'notification:send';

class EventBus {
  private handlers: Partial<Record<EventType, ((data: unknown) => void)[]>> = {};

  on(event: EventType, handler: (data: unknown) => void) {
    (this.handlers[event] ??= []).push(handler);
  }

  emit(event: EventType, data: unknown) {
    this.handlers[event]?.forEach(h => h(data));
  }
}

const bus = new EventBus();

bus.on('payment:completed', (data) => console.log('Sending receipt for', data));
bus.on('payment:completed', (data) => console.log('Updating ledger for', data));

bus.emit('payment:completed', { id: 'tx42', amount: 150 });
// Sending receipt for { id: 'tx42', amount: 150 }
// Updating ledger for { id: 'tx42', amount: 150 }
```
