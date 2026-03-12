## Bridge

Decouples an abstraction from its implementation so both can vary independently. Instead of one large hierarchy, you have two separate ones connected by composition.

### When to use
- You want to avoid a class explosion from combining two varying dimensions (e.g. shape × colour, report × format).
- You need to switch implementations at runtime.
- Abstraction and implementation should be extensible independently.

### Trade-offs
- ✅ Independent extension of abstraction and implementation.
- ✅ Swap implementations at runtime without changing the abstraction.
- ❌ More upfront design — overkill for simple hierarchies.

### Example
```typescript
interface Renderer {
  render(content: string): void;
}

class HtmlRenderer implements Renderer {
  render(content: string) { console.log(`<p>${content}</p>`); }
}

class PlainTextRenderer implements Renderer {
  render(content: string) { console.log(content); }
}

class Report {
  constructor(private renderer: Renderer) {}
  generate(content: string) { this.renderer.render(content); }
}

const htmlReport      = new Report(new HtmlRenderer());
const plainTextReport = new Report(new PlainTextRenderer());

htmlReport.generate('Q1 Summary');       // <p>Q1 Summary</p>
plainTextReport.generate('Q1 Summary');  // Q1 Summary
```