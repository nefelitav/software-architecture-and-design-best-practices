## Mapper

Converts data from one representation to another. Centralises transformation logic so it doesn't leak into business logic or presentation layers.

### When to use
- You need to translate between domain objects, DTOs, database models, or API response shapes.
- Transformation logic is non-trivial and used in multiple places.
- You want to keep layers of the application decoupled from each other's data shapes.

### Trade-offs
- ✅ One place to update when a data shape changes.
- ✅ Keeps transformation logic out of domain and controller code.
- ❌ Extra boilerplate for simple, one-to-one mappings.

### Example
```typescript
type UserRecord = { user_id: number; full_name: string; email_address: string };
type UserDTO    = { id: number; name: string; email: string };

const UserMapper = {
  toDTO(record: UserRecord): UserDTO {
    return {
      id:    record.user_id,
      name:  record.full_name,
      email: record.email_address,
    };
  },
};

const record: UserRecord = { user_id: 1, full_name: 'Alice Smith', email_address: 'alice@example.com' };
console.log(UserMapper.toDTO(record));
// { id: 1, name: 'Alice Smith', email: 'alice@example.com' }
```