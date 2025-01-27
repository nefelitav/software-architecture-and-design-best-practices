export default class Stripe {
    makePayment(amountInCents: number): string {
      return `Stripe payment of $${amountInCents / 100} processed.`;
    }
  }