## Adapter
### Description
The **Adapter Pattern** enables incompatible interfaces to work together by translating one interface into another, acting as a **bridge** between systems.

### Use Cases
* Integrate a class with an incompatible interface into your application.
* Reuse existing code with a new interface.

### Components
1. **Target**: The expected interface for the client.
2. **Adapter**: Translates requests from the target to the adaptee.
3. **Adaptee**: The existing class with an incompatible interface.
4. **Client**: Uses the target interface to interact with the adapter.

### Pros
- **Reusability**: Enables integration of existing classes.  
- **Flexibility**: Bridges communication between incompatible systems.

### Cons
- **Complexity**: Adds complexity to the system.

### Example
```typescript  
const adapter = new PaymentAdapter(new LegacyPaymentSystem());  
adapter.pay(200);
```
