# Layered Architecture

Layered architecture organises an application into **separate layers**, each with a focused responsibility. A common split is presentation, application or business logic, data access, and infrastructure.

## When it fits

Use it when you want a familiar, easy-to-understand structure for business applications, especially in monoliths.

## Strengths

- **Separation of concerns** — each layer has a clear role.
- **Maintainability** — changes are easier to localise when boundaries are respected.
- **Approachability** — it is widely understood and easy for teams to adopt.

## Trade-offs

- **Can become rigid** — forcing everything through layers can create unnecessary indirection.
- **Leakage between layers** — over time, boundaries may blur.
- **Less ideal for complex flows** — highly distributed or event-heavy systems may outgrow it.

## Example

A business application with controllers in the presentation layer, services in the business layer, repositories in the data layer, and integrations in infrastructure.
