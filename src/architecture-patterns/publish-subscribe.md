# Publish-Subscribe Architecture

Publish-subscribe is a messaging pattern where **publishers** emit messages to a channel or broker and **subscribers** receive the messages they are interested in. Publishers do not need to know who the subscribers are.

## When it fits

Use it when one event or message should fan out to multiple consumers without tight coupling between them.

## Strengths

- **Loose coupling** — publishers and subscribers can evolve independently.
- **Scalability** — new subscribers can be added with little impact on publishers.
- **Asynchronous communication** — producers do not need to wait for consumers to finish work.

## Trade-offs

- **Delivery complexity** — ordering, retries, duplicates, and dead-letter handling matter.
- **Harder observability** — message flows can be less obvious than direct calls.
- **Event contract drift** — producers and consumers must stay aligned on message shape and meaning.

## Example

A notification system where one `UserRegistered` event triggers email, analytics, CRM syncing, and onboarding workflows.
