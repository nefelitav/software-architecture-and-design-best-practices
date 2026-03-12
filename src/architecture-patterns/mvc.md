# MVC Architecture

MVC stands for **Model-View-Controller**. It separates an application into three responsibilities: the **model** holds data and rules, the **view** renders the UI, and the **controller** handles input and coordinates changes.

## When it fits

Use it in UI-heavy applications where separating presentation from application state and input handling improves maintainability.

## Strengths

- **Separation of concerns** — UI, state, and request handling are split clearly.
- **Maintainability** — changes in one part are less likely to affect the others.
- **Multiple views** — the same model can support different visual representations.

## Trade-offs

- **Can become controller-heavy** — poorly designed controllers turn into dumping grounds.
- **More indirection** — simple screens may feel over-structured.
- **Not universal** — modern frontend architectures may prefer alternatives depending on the stack.

## Example

A server-rendered web app where controllers handle requests, models encapsulate business data, and views generate HTML.
