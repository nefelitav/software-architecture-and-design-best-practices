## Fluent Interface

Designs an API so that each method returns the object itself, enabling readable method chains. The result reads almost like a sentence.

### When to use
- You are building a configuration, query, or construction API.
- Method call order is meaningful and sequential.
- Readability of the calling code is a priority.

### Trade-offs
- ✅ Expressive and readable at the call site.
- ✅ Reduces intermediate variables and boilerplate.
- ❌ Long chains can be hard to debug — one error fails the whole chain.
- ❌ Works poorly when steps are conditional or order varies.

### Example
```typescript
class EmailBuilder {
  private to_      = '';
  private subject_ = '';
  private body_    = '';

  to(address: string)   { this.to_      = address; return this; }
  subject(text: string) { this.subject_ = text;    return this; }
  body(text: string)    { this.body_    = text;     return this; }

  send() {
    console.log(`To: ${this.to_} | Subject: ${this.subject_} | Body: ${this.body_}`);
  }
}

new EmailBuilder()
  .to('user@example.com')
  .subject('Your receipt')
  .body('Thanks for your payment of $100.')
  .send();
// To: user@example.com | Subject: Your receipt | Body: Thanks for your payment of $100.
```