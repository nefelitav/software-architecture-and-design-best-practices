# Client-Server Architecture

Client-server architecture separates a system into **clients**, which request work, and **servers**, which provide data or services. The client is usually the user-facing side; the server handles shared resources, business logic, and storage.

## When it fits

Use it when many users or applications need to access the same central service over a network.

## Strengths

- **Centralised control** — security, data, and business rules can be managed in one place.
- **Shared resources** — many clients can use the same backend service.
- **Scalability** — servers can often be scaled independently from clients.

## Trade-offs

- **Server dependency** — if the server fails, clients may stop working.
- **Network latency** — every request depends on communication over the network.
- **Operational complexity** — availability, scaling, and security become backend concerns.

## Example

A web application where the browser is the client and the backend API plus database form the server side.
