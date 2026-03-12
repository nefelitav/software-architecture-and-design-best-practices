# Architecture Patterns

Architecture patterns describe the **high-level structure of a system**: how responsibilities are divided, how parts communicate, and where complexity lives.

This folder focuses on **system-level organisation**, not class-level design. In short:

- **Architecture patterns** shape the whole system.
- **Design patterns** solve smaller design problems inside that system.
- **Principles** guide decisions across both.

---

## What you'll find here

- **Monolithic** — one deployable unit containing the whole application.
- **Layered** — responsibilities split into layers such as presentation, business, and data access.
- **Client-Server** — clients request services from central servers.
- **Component-Based** — systems composed from reusable, well-defined components.
- **MVC** — separates model, view, and controller responsibilities, especially in UI-heavy systems.
- **Microservices** — small, independently deployable services built around business capabilities.
- **SOA** — a service-based approach focused on interoperability and reuse across systems.
- **Event-Driven** — components react to events asynchronously.
- **Publish-Subscribe** — publishers emit messages without knowing which subscribers will consume them.
- **Pipe-and-Filter** — data flows through a sequence of processing steps.
- **Stream-Based** — systems process continuous flows of data in real time.
- **Microkernel** — a small core extended through plug-ins or modules.
- **Domain-Driven Design (DDD)** — architecture shaped around the business domain and its boundaries.
- **Primary-Replica** *(currently named `master-slave.md`)* — one primary node coordinates one or more replicas.

---

## How to read these patterns

Each file answers the same practical questions:

- **What it is**
- **When it fits**
- **Why teams choose it**
- **What trade-offs come with it**

The goal isn't to pick a "best" architecture. It's to understand which one fits the problem you're solving.
