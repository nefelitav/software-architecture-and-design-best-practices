export default class PaymentConnection {
    private id: number;
    private inUse: boolean;
  
    constructor(id: number) {
      this.id = id;
      this.inUse = false;
    }
  
    connect() {
      console.log(`Connection ${this.id} is now connected.`);
      this.inUse = true;
    }
  
    disconnect() {
      console.log(`Connection ${this.id} is now disconnected.`);
      this.inUse = false;
    }
  
    isInUse(): boolean {
      return this.inUse;
    }
  }
  