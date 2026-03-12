# Domain-Driven Design (DDD)

Domain-Driven Design structures software around the **business domain** rather than around technical layers alone. It emphasises domain models, shared language, and **bounded contexts** so that complex business rules stay explicit and manageable.

## When it fits

Use it when the domain is complex, business rules matter, and teams need a shared understanding of the problem space.

## Strengths

- **Business alignment** — the software mirrors real business concepts and rules.
- **Clear boundaries** — bounded contexts reduce confusion between different parts of the domain.
- **Better communication** — developers and domain experts can speak the same language.

## Trade-offs

- **Higher upfront effort** — good domain modelling takes time.
- **Not always necessary** — simple CRUD systems may not need this level of modelling.
- **Requires discipline** — unclear boundaries quickly weaken the approach.

## Example

A fintech platform where payments, accounts, compliance, and billing are modelled as separate bounded contexts with their own rules and language.
