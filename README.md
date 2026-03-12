# Software Architecture & Design Best Practices

A comprehensive guide to building scalable, maintainable software through proven architectural patterns, design patterns, and industry best practices.

---

## 📚 What's Inside

This repository is organised into four main knowledge areas:

### **Design Principles** — `src/design-principles/`
Foundational guidelines that inform every decision you make.

**Includes:**
- **Core Simplicity** — KISS, YAGNI, DRY, Worse is Better
- **Design & Architecture** — Modularity, Abstraction, Encapsulation, Law of Demeter
- **SOLID** — SRP, OCP, LSP, ISP, DIP (the five pillars of OOP)
- **Process & Practices** — Requirement analysis, planning, MoSCoW prioritisation
- **Testing** — TDD, Arrange-Act-Assert, CI/CD, iterative delivery

→ Start here if you're new to software design or want to refresh fundamentals.

---

### **Architecture Patterns** — `src/architecture-patterns/`
High-level system structures that shape how your entire application is built.

**Includes 14 patterns:**
- **Monolithic** — one deployable unit
- **Layered** — presentation, business logic, data access layers
- **Client-Server** — centralised service with distributed clients
- **Microservices** — small, independently deployable services
- **Event-Driven** — reactive, asynchronous communication
- **SOA, Pub-Sub, Stream-Based, Pipe-and-Filter** — messaging & integration styles
- **DDD** — domain-driven design for complex business logic
- **Microkernel, Component-Based, Bridge** — structural approaches
- **Primary-Replica** — replication and failover patterns

Each pattern covers: what it is, when to use it, strengths, and trade-offs.

→ Use this to make high-level architectural decisions.

---

### **Design Patterns** — `src/design-patterns/`
Reusable solutions to common design problems at the class and object level.

**Organized in 3 categories:**

#### **Behavioral** (11 patterns)
How objects interact and distribute responsibility.
- Chain of Responsibility, Command, Iterator, Mediator, Memento
- Observer, Specification, State, Strategy, Template Method, Visitor

#### **Creational** (6 patterns)
How to instantiate objects flexibly.
- Abstract Factory, Builder, Factory Method, Pool, Prototype, Singleton

#### **Structural** (8 patterns)
How to compose objects into larger structures.
- Adapter, Bridge, Decorator, Facade, Fluent Interface, Flyweight, Mapper, Proxy

Each pattern includes: when to use it, trade-offs, and a practical code example.

→ Refer to this when designing components or solving recurring problems.

---

### **Anti-Patterns** — `src/anti-patterns/`
Common mistakes and pitfalls to avoid.

**Includes:**
- **Bloaters** — code that has grown too large (long methods, large classes, primitive obsession)
- **OOP Abusers** — misuse of inheritance and polymorphism
- **Change Preventers** — code that resists modification
- **Dispensables** — unnecessary code that should be removed
- **Couplers** — classes too dependent on each other
- **General Bad Practices** — hardcoding, scattered imports, missing validation
- **API Bad Practices** — endpoint design, status codes, security, rate limiting

→ Use this as a checklist during code review.

---

## 💡 Key Takeaways

1. **Simplicity over Cleverness** — KISS and YAGNI are your friends. Complexity should be justified.
2. **Principles over Patterns** — Understand why patterns exist before applying them. Good principles guide good design.
3. **Context Matters** — No pattern is universally "best". Choose based on your constraints and goals.
4. **Trade-offs are Real** — Every pattern solves some problems and creates others. Know both sides.
5. **Code Review is Prevention** — Anti-patterns are where the real problems often hide.

---

## 🚀 Getting Started

Pick an area that interests you or matches your current challenge:

- **New to software design?** → Start with `src/design-principles/`
- **Designing a system?** → Go to `src/architecture-patterns/`
- **Solving a code problem?** → Browse `src/design-patterns/`
- **Reviewing code?** → Scan `src/anti-patterns/`

---

## 📝 Notes

- All examples are in **TypeScript**, but the principles apply to any language.
- Patterns are presented in a **minimal, practical style** — no lengthy theory, just what you need to know and use.
- This is a **living guide**. Best practices evolve as technology and team needs change.
