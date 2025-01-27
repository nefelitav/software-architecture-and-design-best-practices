export default class Database {
    private data: Record<number, any> = {};
  
    findById(id: number): any {
      return this.data[id];
    }
  
    save(id: number, record: any): void {
      this.data[id] = record;
    }
  }
  