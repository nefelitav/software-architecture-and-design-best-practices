export default class PayPal {
    sendPayment(amountInDollars: number): string {
      return `PayPal payment of $${amountInDollars} processed.`;
    }
  }
  