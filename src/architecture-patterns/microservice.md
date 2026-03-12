# Microservices Architecture

Microservices architecture splits a system into **small, independently deployable services**, each responsible for a specific business capability. Services communicate over the network using APIs or messaging.

## When it fits

Use it when a system is large enough that independent deployment, team autonomy, and service-level scaling provide real value.

## Strengths

- **Independent deployment** — services can be released without redeploying the whole system.
- **Scalability** — each service can scale based on its own load.
- **Team autonomy** — teams can own services end to end.
- **Technology flexibility** — different services can use different stacks when justified.

## Trade-offs

- **Distributed-system complexity** — networking, observability, retries, and failures become everyday concerns.
- **Data consistency is harder** — transactions across services are more complex.
- **Operational overhead** — more services mean more deployment and monitoring work.

## Example

An e-commerce platform split into catalog, checkout, payments, shipping, and notifications services.
