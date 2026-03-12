# Pipe-and-Filter Architecture

Pipe-and-filter architecture processes data through a **sequence of independent steps**. Each filter transforms the input and passes the result to the next stage through a pipe.

## When it fits

Use it when data must move through a clear processing pipeline, especially when each step can be isolated.

## Strengths

- **Composability** — filters can be added, removed, or reordered.
- **Testability** — each stage can be tested independently.
- **Scalability** — expensive stages can often be parallelised.

## Trade-offs

- **Data format coordination** — filters must agree on what flows between them.
- **Pipeline overhead** — many stages can add latency and operational complexity.
- **Not ideal for highly stateful workflows** — it fits transformations better than rich interactive behaviour.

## Example

A log-processing pipeline where raw logs are parsed, enriched, filtered, and then indexed for search.
