# Anti-Patterns

Anti-patterns are recurring solutions that seem reasonable but make code harder to read, change, or maintain. Recognising them is the first step to avoiding them.

---

## Bloaters — Code That Has Grown Too Large

Code grows without discipline. Watch for:

- **Long methods** — if you need to scroll to read it, extract it.
- **Large classes** — a class doing too much should be split by responsibility.
- **Primitive obsession** — model domain concepts explicitly (`Money`, `Email`) rather than passing raw `int` or `string` values.
- **Too many parameters** — group related arguments into a dedicated object.

**Avoid boolean parameters.** They hide intent and force the caller to guess what `true` means.

```java
// ❌
void setUserStatus(boolean isActive) { ... }

// ✅
void activateUser() { ... }
void deactivateUser() { ... }
```

**Encapsulate conditionals.** Logic buried in an `if` condition belongs in a named method.

```java
// ❌
if (employee.age > RETIREMENT_AGE) { ... }

// ✅
if (employee.isEligibleForRetirement()) { ... }
```

---

## OOP Abusers — Misusing Object-Oriented Design

- **Complex `if`/`switch` on type** — replace with polymorphism.
- **Temporary fields** — if a field is only valid in some states, extract a new class.
- **Misused inheritance** — if a subclass only uses half of its parent, prefer composition over inheritance.
- **Duplicated logic across classes** — extract shared behaviour into a common abstraction.

---

## Change Preventers — Code That Resists Modification

- **Divergent change** — if one class is modified for many unrelated reasons, split it.
- **Shotgun surgery** — if one change requires edits across many classes, consolidate the logic.
- **Parallel inheritance hierarchies** — if adding a subclass always forces another elsewhere, replace one hierarchy with associations.

---

## Dispensables — Code That Shouldn't Exist

Delete, don't accumulate.

- **Excessive comments** — code should explain itself; comments should explain *why*, not *what*.
- **Duplicate code** — extract once, reuse everywhere.
- **Lazy class** — a class that barely does anything should be merged.
- **Data class** — a class with only getters/setters has no behaviour; either add it or remove the class.
- **Dead code** — unused variables, methods, and branches should be deleted, not kept "just in case".
- **Speculative generality** — don't abstract for a future that may never come.

---

## Couplers — Classes Too Dependent on Each Other

- **Feature envy** — if a method uses another object's data more than its own, move it there.
- **Inappropriate intimacy** — classes should not reach into each other's internals.
- **Message chains** — `a.b().c().d()` is a sign of too much indirect coupling; refactor the interface.
- **Middle man** — a class that only delegates to another adds no value; remove it.

Prefer dependency injection over hard-wired instantiation.

```java
// ❌
class UserService {
    UserRepository repo = new UserRepository();
}

// ✅
class UserService {
    UserService(UserRepository repo) {
        this.repo = repo;
    }
}
```

---

## General Bad Practices

- **Reinventing the wheel** — reach for a well-maintained library before writing your own.
- **Hardcoded configuration** — use config files or environment variables.
- **Magic numbers and strings** — name them; use constants or enums.
- **Logging without context** — always include relevant identifiers (request ID, user ID, etc.).
- **Imports scattered throughout the file** — keep them at the top.
- **Relative import paths** — use absolute paths for maintainability.
- **Business logic in the frontend** — validate and process server-side.
- **Unnecessary public methods** — default to private; expose only what needs to be exposed.
- **Mutable properties that should be `readonly`** — signal immutability explicitly.
- **Extendable classes that shouldn't be** — mark them `final`.
- **Ad-hoc string values where an enum fits** — if a value belongs to a fixed set, model it as one.

---

## API Bad Practices

Design APIs around **resources and intent**, not implementation details.

**Endpoints**
- Use nouns, not actions — `/customers`, not `/getCustomer`.
- Use path variables for specific resources — `/users/{id}`.
- Use query parameters for filtering, sorting, and pagination.
- Version your API — `/v1/`, `/v2/`.
- Validate path and query parameters; never assume inputs are valid or data exists.

**Methods & status codes**
- `GET` must never change state.
- Use `POST` only for creation; support `PUT` and `PATCH` correctly (they are not interchangeable).
- Return the right status code — `200`, `201`, `204` are not the same.
- Return meaningful error responses — a vague `400` or catch-all `500` helps no one.

**Security & reliability**
- Never pass sensitive data in the URL.
- Never trust data from the browser.
- Enforce rate limiting.
- Paginate results — never allow unlimited queries.
- Cache effectively and invalidate correctly.
- Include request IDs in all server logs.
- Don't make everything `required` — design for flexibility.
- Prefer JSON over XML.
