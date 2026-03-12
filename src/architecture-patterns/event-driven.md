# Event-Driven Architecture

Event-driven architecture lets components communicate by **publishing and reacting to events**. Instead of calling each other directly, parts of the system respond when something meaningful happens, such as `OrderPlaced` or `PaymentFailed`.

## When it fits

Use it when systems need loose coupling, asynchronous workflows, or real-time reactions to business events.

## Strengths

- **Loose coupling** — producers and consumers can evolve independently.
- **Scalability** — multiple consumers can process events in parallel.
- **Responsiveness** — systems can react quickly to changes as they happen.

## Trade-offs

- **More moving parts** — brokers, retries, and monitoring add operational complexity.
- **Harder debugging** — tracing a workflow across events is less straightforward.
- **Eventual consistency** — not every part of the system updates at the same time.

## Example

An e-commerce system where placing an order emits events that trigger payment, inventory, email, and analytics flows independently.
