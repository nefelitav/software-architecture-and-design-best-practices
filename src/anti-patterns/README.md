# Software Engineering Anti-Patterns

## **Bloaters: When Code Becomes Too Large & Complex**
- **Long Methods** → Break them down using *Extract Method*, *Local Variables*, *Class Extraction*, *Decomposing Conditionals*
- **Large Classes** → Use *Extract Class*, *Extract Subclass*, or *Extract Interface*
- **Primitive Obsession** → Use *Value Objects* instead of raw primitives (e.g., `Money` instead of `int`)
- **Too Many Parameters** → Group related parameters into **objects**
- **Repeated Groups of Variables** → Turn them into **their own class**

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

---

## **Miscellaneous Bad Practices**
- **Reinventing the Wheel** → Use **existing libraries** instead of writing everything from scratch
- **Hardcoded Configuration** → Use **config files or environment variables**
- **Logging Without Context** → Include **relevant details** in logs (e.g., request IDs, user IDs)
- **Magic Numbers & Strings** → Replace with **constants or enums** for better readability  
