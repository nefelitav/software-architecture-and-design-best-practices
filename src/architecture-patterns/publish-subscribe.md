## 2. Publish-Subscribe Pattern

### Description
The **Publish-Subscribe** (Pub-Sub) pattern is a messaging pattern where **publishers** send messages to a message broker or channel, and **subscribers** listen to and receive messages from that channel. It decouples the sender (publisher) and receiver (subscriber), allowing them to operate independently. In this pattern:
- **Publisher**: Sends messages (events or notifications) without knowing which subscribers will consume them.
- **Subscriber**: Listens for messages on a specific topic or channel, and processes them once received.
- **Message Broker/Channel**: A component that manages the delivery of messages from publishers to subscribers.

Pub-Sub is often used in real-time systems, event-driven architectures, and systems requiring high scalability.

### Pros
**Loose Coupling**: Publishers and subscribers are decoupled, meaning changes in one do not affect the other. This leads to more flexible and maintainable code.

**Scalability**: It is easy to add more subscribers without affecting the publisher. This is beneficial for systems that require horizontal scaling.

**Asynchronous Communication**: The publisher does not have to wait for the subscriber to process the message. This allows for better performance and non-blocking operations.

**Decentralized**: Multiple subscribers can independently react to messages, allowing for a more flexible and distributed system architecture.