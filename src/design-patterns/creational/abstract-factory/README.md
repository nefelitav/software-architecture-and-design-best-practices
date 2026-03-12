## Abstract Factory
Creates families of related objects without specifying their concrete classes. Where Factory Method produces one product, Abstract Factory produces a coordinated set.
### When to use
- You need to create multiple related objects that must be compatible with each other.
- You want to swap entire product families without changing client code.
- Common in UI toolkits, payment systems, or multi-platform libraries.
### Trade-offs
- ✅ Guarantees compatibility within a product family.
- ✅ Easy to swap families — change one factory, get a whole new set.
- ❌ Adding a new product type requires updating every factory.
### Example
```typescript
interface PaymentFactory {
  createProcessor(): { charge(amount: number): void };
  createReceipt():   { generate(): void };
}
class StripeFactory implements PaymentFactory {
  createProcessor() { return { charge: (n) => consol## Abstract Factory
Creates families of related objects without specifying their concrete classes. Where Factory Method prodclasCreates families opl### When to use
- You need to create multiple related objects that must be compatible with each other.
- You want to swap entire product families without changing cl.l- You need to ei- You want to swap entire product families without changing client codeber) {
  const p- Common in UI toolkitsteProcessor();
  const receipt   = factory.createR### Trade-offs
- ✅ Guarantees compatibility within ate();
}
checkout(- ✅ Guarantto- ✅ Easy t// Stripe charged $100
// Stripe receipt sen- ❌ Addicat > /Users/nefeli.tavoulari/software-design-best-practices/src/design-patterns/creational/builder/README.md << 'EOF'
## Builder
Constructs a complex object step by step. Separates what is being built from how it is assembled, and only produces the final object when you call `build()`.
### When to use
- An object has many optional or dependent configuration parameters.
- You want to avoid constructors with long parameter lists.
- The construction order matters or involves multiple steps.
### Trade-offs
- ✅ Readable, fluent construction — each step is named.
- ✅ Easy to produce different configurations from the same builder.
- ❌ More boilerplate for simple objects.
### Example
```typescript
class QueryBuilder {
  private table = '';
  private conditions: string[] = [];
  private limitVal?: number;
  from(table: string)      { this.table = table; return this; }
  where(condition: string) { this.conditions.push(condition); return this; }
  limit(n: number)         { this.limitVal = n; return this; }
  b## Builder
Constructs a complex object step by step. Separates what is being built from how it is assembled, ERE ${this.conditions### When to use
- An object has many optional or dependent configuration parameters.
- You want to avoid constructors with long parameter lists.
- The constsa- An object haer- You want to avoid constructors with long parameter lists.
- The cil- The construction order matters or involves multiple stepRE### Trade-offs
- ✅ Readable, fluent construct``
