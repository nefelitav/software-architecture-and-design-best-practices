## Builder

Constructs a complex object step by step. Separates what is being built from how it is assembled, and only produces the final object when you call `build()`.

### When to use
- An object has many optional or dependent configuration parameters.
- You want to avoid constructors with long parameter lists.
- The construction order matters or involves multiple steps.

### Trade-offs
- ✅ Readable, fluent construction — each step is named.
- ✅ Easy to produce different configurations from the same builder.
- ❌ More boilerplate for simple objects.

### Example
```typescript
class QueryBuilder {
  private table = '';
  private conditions: string[] = [];
  private limitVal?: number;

  from(table: string)      { this.table = table; return this; }
  where(condition: string) { this.conditions.push(condition); return this; }
  limit(n: number)         { this.limitVal = n; return this; }

  build(): string {
    let query = `SELECT * FROM ${this.table}`;
    if (this.conditions.length) query += ` WHERE ${this.conditions.join(' AND ')}`;
    if (this.limitVal)          query += ` LIMIT ${this.limitVal}`;
    return query;
  }
}

const query = new QueryBuilder()
  .from('transactions')
  .where('status = "pending"')
  .where('amount > 100')
  .limit(50)
  .build();

console.log(query);
// SELECT * FROM transactions WHERE status = "pending" AND amount > 100 LIMIT 50
```