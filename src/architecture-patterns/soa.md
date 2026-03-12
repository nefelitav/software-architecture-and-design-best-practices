# Service-Oriented Architecture (SOA)

SOA structures systems as **loosely coupled services** that communicate through standardized contracts. It emphasizes interoperability, integration, and service reuse across larger organizations or heterogeneous systems.

## When it fits

Use it when multiple systems need to integrate reliably across teams, departments, or legacy platforms.

## Strengths

- **Interoperability** — services can communicate across different technologies and platforms.
- **Reuse** — shared capabilities can be exposed as common services.
- **Integration-friendly** — it works well in enterprise environments with many existing systems.

## Trade-offs

- **Governance overhead** — service contracts and coordination require discipline.
- **Can become heavyweight** — enterprise tooling and standards may add complexity.
- **Latency and dependency chains** — multiple service hops can slow requests and complicate failures.

## Example

An enterprise system where billing, identity, inventory, and reporting are exposed as shared services used by several internal applications.
