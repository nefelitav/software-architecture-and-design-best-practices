import PaymentConnection from './PaymentConnection';

export default class PaymentConnectionPool {
  private connections: PaymentConnection[] = [];
  private maxPoolSize: number;
  private nextId: number = 1;

  constructor(maxPoolSize: number) {
    this.maxPoolSize = maxPoolSize;
  }

  getConnection(): PaymentConnection {
    for (const connection of this.connections) {
      if (!connection.isInUse()) {
        connection.connect();
        return connection;
      }
    }

    if (this.connections.length < this.maxPoolSize) {
      const newConnection = new PaymentConnection(this.nextId++);
      newConnection.connect();
      this.connections.push(newConnection);
      return newConnection;
    } else {
      throw new Error('No available connections in the pool.');
    }
  }

  releaseConnection(connection: PaymentConnection): void {
    connection.disconnect();
  }
}
