# Primary-Replica Architecture

> This file is currently named `master-slave.md`, but **primary-replica** is the clearer and more modern term.

Primary-replica architecture uses one **primary node** to coordinate writes or control flow, while one or more **replicas** handle copies of the data or delegated work.

## When it fits

Use it when you need replication, read scaling, workload distribution, or failover in distributed systems.

## Strengths

- **Read scalability** — replicas can serve read-heavy traffic.
- **Redundancy** — replicas improve availability and recovery options.
- **Operational control** — one primary keeps coordination straightforward.

## Trade-offs

- **Replication lag** — replicas may not always be fully up to date.
- **Failover complexity** — promoting a replica safely is not trivial.
- **Primary bottleneck** — writes or coordination can still concentrate in one place.

## Example

A database setup where the primary handles writes and replicas serve read queries and backups.
