# Microkernel Architecture

Microkernel architecture keeps a **minimal core** and moves optional features into **plug-ins or extension modules**. The core provides the essential rules and runtime support; extensions add specialised behaviour without changing the core.

## When it fits

Use it when a product needs a stable core plus many optional or customisable features.

## Strengths

- **Extensibility** — new features can be added as plug-ins.
- **Stable core** — the central system stays small and focused.
- **Customisation** — different users or deployments can enable different capabilities.

## Trade-offs

- **Plug-in complexity** — extension contracts must be carefully designed.
- **Debugging overhead** — behaviour may depend on which modules are installed.
- **Not ideal for everything** — simple applications may not need plugin architecture.

## Example

An IDE or e-commerce platform with a core runtime and optional extensions for themes, integrations, payments, or analytics.
