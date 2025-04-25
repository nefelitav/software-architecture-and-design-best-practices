## Template Method Pattern

### Description
The **Template Method Pattern** is a behavioral design pattern that defines the structure of an algorithm in a method, called a **template method**, which can be overridden by subclasses to provide specific implementations for certain steps of the algorithm. The pattern allows a base class to define the structure while allowing subclasses to modify certain steps without changing the overall flow.

### Use Cases
- When you have a common algorithm structure that should be shared across multiple classes, but certain steps need to vary.
- When you want to define the skeleton of an algorithm but leave some steps to be implemented by subclasses (e.g., data processing, document generation).
- When the algorithm's overall structure is fixed, but some details can be customized by subclasses.

### Components

1. **Abstract Class (Template)**: Defines the template method with the algorithm’s skeleton, calling abstract methods that subclasses can implement.
2. **Concrete Classes**: Implement the abstract methods defined in the base class to provide specific behavior for certain steps of the algorithm.

### Example (Fintech – Loan Approval Process)

```typescript
// Abstract Class
abstract class LoanApproval {
  // Template Method
  approveLoan(): void {
    this.checkEligibility();
    this.verifyDocuments();
    this.assessRisk();
    this.makeDecision();
  }

  // Abstract Methods - Subclasses must implement
  protected abstract checkEligibility(): void;
  protected abstract verifyDocuments(): void;
  protected abstract assessRisk(): void;
  protected abstract makeDecision(): void;
}

// Concrete Class - Personal Loan
class PersonalLoanApproval extends LoanApproval {
  protected checkEligibility(): void {
    console.log("Checking eligibility for personal loan...");
  }

  protected verifyDocuments(): void {
    console.log("Verifying personal loan documents...");
  }

  protected assessRisk(): void {
    console.log("Assessing risk for personal loan...");
  }

  protected makeDecision(): void {
    console.log("Making decision for personal loan approval...");
  }
}

// Concrete Class - Mortgage Loan
class MortgageLoanApproval extends LoanApproval {
  protected checkEligibility(): void {
    console.log("Checking eligibility for mortgage loan...");
  }

  protected verifyDocuments(): void {
    console.log("Verifying mortgage loan documents...");
  }

  protected assessRisk(): void {
    console.log("Assessing risk for mortgage loan...");
  }

  protected makeDecision(): void {
    console.log("Making decision for mortgage loan approval...");
  }
}

// Client usage
const personalLoan = new PersonalLoanApproval();
personalLoan.approveLoan(); 
// Output: Checking eligibility for personal loan...
// Verifying personal loan documents...
// Assessing risk for personal loan...
// Making decision for personal loan approval...

const mortgageLoan = new MortgageLoanApproval();
mortgageLoan.approveLoan(); 
// Output: Checking eligibility for mortgage loan...
// Verifying mortgage loan documents...
// Assessing risk for mortgage loan...
// Making decision for mortgage loan approval...
