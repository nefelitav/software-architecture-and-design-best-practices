# Design Principles

Design principles are guidelines that help you write code that is easier to understand, extend, and maintain. Unlike patterns, they don't prescribe a specific structure, they inform every decision you make.

---

## Core Simplicity Principles

- **KISS** *(Keep It Simple, Stupid)* — the simplest solution that works is usually the best one. Complexity should only be introduced when the problem demands it.
- **YAGNI** *(You Ain't Gonna Need It)* — don't build for hypothetical future requirements. Add things when they're needed, not when you imagine they might be.
- **DRY** *(Don't Repeat Yourself)* — every piece of knowledge should have a single, authoritative representation. Duplication means two places to update and two places to get wrong.
- **Worse is Better** — there's a point where less functionality is the preferable option. A simple, working solution shipped beats a complex, perfect one that isn't.
- **Muntzing** — reduce components to the minimum needed to function correctly. Every extra part is a liability.
- **If it ain't broke, don't fix it** — unnecessary changes introduce risk. Refactor with purpose, not habit.

---

## Design & Architecture Principles

- **Modularity** — break systems into self-contained units with clear boundaries. Modules should be independently understandable, testable, and replaceable.
- **Abstraction** — expose what something does, hide how it does it. Good abstractions make complexity manageable.
- **Encapsulation** — bundle data and the behaviour that operates on it together. Don't let outside code reach into a module's internals.
- **Law of Demeter** — a unit should only talk to its immediate collaborators. Long chains of calls (`a.b().c().d()`) are a sign of excessive coupling.
- **Principle of Least Astonishment** — a component should behave in the way its users expect. Surprising behaviour erodes trust and causes bugs.

---

## SOLID Principles

Five principles for writing maintainable object-oriented code.

- **SRP** *(Single Responsibility)* — a class should have one reason to change. If it's doing two things, it should probably be two classes.
- **OCP** *(Open/Closed)* — open for extension, closed for modification. Add new behaviour by extending, not by editing existing code.
- **LSP** *(Liskov Substitution)* — a subtype must be substitutable for its base type without breaking correctness. If it can't be, inheritance is the wrong tool.
- **ISP** *(Interface Segregation)* — don't force clients to depend on interfaces they don't use. Prefer several focused interfaces over one broad one.
- **DIP** *(Dependency Inversion)* — high-level modules should depend on abstractions, not concrete implementations. This makes components easier to swap and test.

---

## Process & Practices

- **Think before you act** — understand the problem fully before writing code. A little planning prevents a lot of rework.
- **Measure twice, cut once** — get the requirements right before building. The cost of fixing a wrong assumption grows the later it's caught.
- **Better requirement analysis** — vague requirements produce vague software. Clarify ambiguities upfront.
- **Clean vision** — keep a clear picture of what you're building and why. Decisions made without context tend to contradict each other.
- **Never add extra** — scope creep kills focus. Build exactly what's agreed, nothing more.
- **Documentation for prerequisite steps** — anything someone must do before using your code should be written down. Don't rely on tribal knowledge.
- **MoSCoW prioritisation** — categorise requirements as *Must have*, *Should have*, *Could have*, and *Won't have* to keep scope manageable.

---

## Testing Principles

- **Test-Driven Development (TDD)** — write the test before the code. It forces you to design for testability and gives you a safety net from the start.
- **Arrange-Act-Assert** — structure every test in three clear phases: set up the context, perform the action, verify the outcome. Consistency makes tests easy to read and debug.
- **Continuous Integration & Delivery** — integrate and test changes frequently. The longer code lives in isolation, the harder it is to merge and the more bugs accumulate.
- **Iterative life cycle** — deliver in small increments, learn from feedback, and adjust. Big-bang releases are high-risk; iteration reduces it.
