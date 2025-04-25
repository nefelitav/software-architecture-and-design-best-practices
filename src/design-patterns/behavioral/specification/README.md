## Specification Pattern

### Description
The **Specification Pattern** is used to encapsulate business rules and conditions into objects that can be combined and reused. It allows you to separate the specification of an object’s validation or conditions from its core business logic. Specifications can be combined using logical operations like `AND`, `OR`, and `NOT`, making it easier to manage complex validation rules.

### Use Cases
- **Complex business rules**: When you need to express multiple complex conditions or validation rules in an object-oriented way.
- **Reusable validation**: When you need to apply the same validation logic in different parts of the application.
- **Dynamic querying**: When filtering or querying objects based on multiple dynamic criteria.

### Components
1. **Specification Interface**: Declares a method for checking if an object satisfies a specification. Typically, it includes a method like `isSatisfiedBy()` to check if an object meets the criteria.
2. **Concrete Specifications**: Implement the `Specification` interface and define specific rules for different business conditions.
3. **Composite Specifications**: Combine multiple specifications using logical operations (e.g., `AndSpecification`, `OrSpecification`, `NotSpecification`).
4. **Client**: Uses the specification objects to check if an entity meets the business criteria.

### Example (User Validation)

```typescript
interface Specification<T> {
  isSatisfiedBy(candidate: T): boolean;
}

class AgeSpecification implements Specification<User> {
  constructor(private minAge: number) {}

  isSatisfiedBy(candidate: User): boolean {
    return candidate.age >= this.minAge;
  }
}

class BalanceSpecification implements Specification<User> {
  constructor(private minBalance: number) {}

  isSatisfiedBy(candidate: User): boolean {
    return candidate.balance >= this.minBalance;
  }
}

class AndSpecification<T> implements Specification<T> {
  constructor(private spec1: Specification<T>, private spec2: Specification<T>) {}

  isSatisfiedBy(candidate: T): boolean {
    return this.spec1.isSatisfiedBy(candidate) && this.spec2.isSatisfiedBy(candidate);
  }
}

class User {
  constructor(public age: number, public balance: number) {}
}

// Client usage
const ageSpec = new AgeSpecification(18);
const balanceSpec = new BalanceSpecification(1000);
const combinedSpec = new AndSpecification(ageSpec, balanceSpec);

const user = new User(25, 1500);
console.log('User is eligible:', combinedSpec.isSatisfiedBy(user));  // true

const user2 = new User(16, 1500);
console.log('User 2 is eligible:', combinedSpec.isSatisfiedBy(user2));  // false
