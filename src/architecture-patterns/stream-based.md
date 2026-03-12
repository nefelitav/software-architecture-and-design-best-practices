# Stream-Based Architecture

Stream-based architecture processes data as a **continuous flow of events or records** rather than as occasional batches. Systems consume, transform, and react to data in near real time.

## When it fits

Use it when data arrives continuously and the business value depends on processing it quickly.

## Strengths

- **Real-time processing** — systems can react as data arrives.
- **Scalability** — streams can handle large, ongoing volumes of data.
- **Replayability** — persisted streams can often be replayed for recovery or reprocessing.

## Trade-offs

- **Operational complexity** — partitions, offsets, ordering, and retention need careful handling.
- **Debugging can be harder** — issues may span many services and time windows.
- **Not always necessary** — batch processing is often simpler when real-time behaviour is not required.

## Example

A fraud-detection pipeline that continuously evaluates payment events as they are produced.
