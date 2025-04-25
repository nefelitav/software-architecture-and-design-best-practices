# Software Engineering Anti-Patterns

## **Bloaters: When Code Becomes Too Large & Complex**
- **Long Methods** → Break them down using *Extract Method*, *Local Variables*, *Class Extraction*, *Decomposing Conditionals*
- **Large Classes** → Use *Extract Class*, *Extract Subclass*, or *Extract Interface*
- **Primitive Obsession** → Use *Value Objects* instead of raw primitives (e.g., `Money` instead of `int`)
- **Too Many Parameters** → Group related parameters into **objects**
- **Repeated Groups of Variables** → Turn them into **their own class**
- #### Avoid Boolean Parameters
❌ Bad Example
```java
void setUserStatus(boolean isActive) {
    if (isActive) {
        // ...
    } else {
        // ...
    }
}
```
✅ Good Example
```java
void activateUser() {
    // ...
}

void deactivateUser() {
    // ...
}
```
- #### Encapsulate Conditionals
❌ Bad Example
```java
if (employee.age > RETIREMENT_AGE) {
    // ...
}
```
✅ Good Example
```java
if (employee.isEligibleForRetirement()) {
// ...
}
```
---

## **Object-Orientation Abusers: When OOP Is Used Incorrectly**
- **Complex `if`/`switch` statements** → Replace with *Polymorphism & Subclasses*
- **Temporary Fields (only used in some situations)** → Extract a *new class*
- **Misuse of Inheritance (subclass uses only some parent methods)** → Replace *inheritance with delegation*
- **Identical Functions in Different Classes** → Extract shared behavior into a *common class*

---

## **Change Preventers: Code That’s Hard to Modify**
- **Divergent Change (one class constantly modified for different reasons)** → Split up behavior
- **Shotgun Surgery (many small changes across different classes)** → Consolidate logic into *one class*
- **Parallel Inheritance Hierarchies (adding a subclass forces adding another elsewhere)** → Replace one hierarchy with **associations**

---

## **Dispensables: Unnecessary Code That Should Be Removed**
- **Excessive Comments** → Use *self-explanatory code* instead
- **Duplicate Code** → Use *Extract Method/Class* to remove redundancy
- **Lazy Class (a class that does almost nothing)** → Merge it with another
- **Data Class (only getters/setters, no behavior)** → Add **meaningful methods** or remove it
- **Dead Code (unused code, variables, methods)** → Delete it
- **Speculative Generality (unused future-proofing code)** → Remove unnecessary abstraction

---

## **Couplers: When Classes Are Too Dependent on Each Other**
- **Feature Envy (a method accesses another object’s data more than its own)** → Move the method to the **appropriate class**
- **Inappropriate Intimacy (one class overly depends on another’s internal details)** → **Decouple** the classes
- **Long Chains of Calls (`$a->b()->c()->d()`)** → Reduce indirect dependencies by refactoring the **API**
- **Middle Man Class (a class that delegates all work elsewhere)** → Remove it
- #### ❌ Bad Example
```java
class UserService {
    UserRepository userRepository = new UserRepository();
}
```
- #### ✅ Good Example
```java
class UserService {
    UserRepository userRepository;

    UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
```
---

## **Miscellaneous Bad Practices**
- **Reinventing the Wheel** → Use **existing libraries** instead of writing everything from scratch
- **Hardcoded Configuration** → Use **config files or environment variables**
- **Logging Without Context** → Include **relevant details** in logs (e.g., request IDs, user IDs)
- **Magic Numbers & Strings** → Replace with **constants or enums** for better readability  
- Importing packages in random places throughout the file instead of at the top.
- Using relative paths for imports, making code harder to maintain.
- Putting lots of logic in the frontend rather than validating or processing it server-side
- Exposing internal logic unnecessarily through public methods instead of using private.
- Not marking class properties as readonly when appropriate.
- Not declaring a class final when it is not meant to be extended.
- Not using enums when values have a clearly defined set of options (e.g. tabs, legal URLs, billable labels).

## **API Bad Practices**
- Making everything in your API `'required'`
- Passing sensitive data in the URL
- Responding with XML
- Designing monolithic APIs instead of modular ones
- Not supporting both `PATCH` and `PUT` properly (they are different)
- Abusing `POST` (use it only for creation)
- Allowing a `GET` request to change state
- Using actions instead of nouns in endpoint names (e.g., `/getCustomer` instead of `/customers`)
- Not using path variables for specific resources (e.g., not using `/users/{id}`)
- Not leveraging query parameters for filtering, sorting, and pagination
- Allowing unlimited query results
- Ignoring API versioning (e.g., `/v1/`, `/v2/`)
- Not understanding the difference between status codes: `200`, `201`, and `204`
- Returning vague `400 Bad Request` errors without explanation
- Using generic `500` status codes for all server errors
- Designing routes around actions, not resources
- Not considering rate limiting when designing routes
- Not caching or cache-invalidating effectively
- Omitting request IDs in server logs
- Trusting data from the web browser
- Using vague API route parameters like {version} without clarifying the allowed formats or not validating them.
- Not thinking through edge cases, e.g. assuming data always exists or that inputs are always valid.

