## Facade

Provides a simple, unified interface to a complex subsystem. The client talks to the facade; the facade coordinates the underlying parts.

### When to use
- A subsystem is complex and most callers only need a simplified view of it.
- You want to reduce coupling between client code and subsystem internals.
- You need a single entry point to orchestrate multiple steps.

### Trade-offs
- ✅ Simplifies the client — hides complexity behind a clean API.
- ✅ Reduces coupling to internal details.
- ❌ Can become a bottleneck if it tries to cover too many use cases.
- ❌ May hide flexibility that some callers actually need.

### Example
```typescript
class AuthService    { verify(token: string)   { console.log('Auth verified'); } }
class OrderService   { place(orderId: string)  { console.log(`Order ${orderId} placed`); } }
class EmailService   { send(to: string)        { console.log(`Email sent to ${to}`); } }

class CheckoutFacade {
  constructor(
    private auth:  AuthService,
    private order: OrderService,
    private email: EmailService,
  ) {}

  checkout(token: string, orderId: string, userEmail: string) {
    this.auth.verify(token);
    this.order.place(orderId);
    this.email.send(userEmail);
  }
}

const facade = new CheckoutFacade(new AuthService(), new OrderService(), new EmailService());
facade.checkout('tok_abc', 'ord_123', 'user@example.com');
// Auth verified
// Order ord_123 placed
// Email sent to user@example.com
```