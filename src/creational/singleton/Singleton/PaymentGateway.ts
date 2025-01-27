export default class PaymentGateway {
    private static instance: PaymentGateway;
    private apiKey: string;
    private baseUrl: string;
  
    private constructor() {
      this.apiKey = '';
      this.baseUrl = '';
    }
  
    public static getInstance(): PaymentGateway {
      if (!PaymentGateway.instance) {
        PaymentGateway.instance = new PaymentGateway();
      }
      return PaymentGateway.instance;
    }
  
    public configure(apiKey: string, baseUrl: string): void {
      this.apiKey = apiKey;
      this.baseUrl = baseUrl;
      console.log('Payment Gateway configured with API Key:', this.apiKey);
    }
  
    public processPayment(amount: number, currency: string, recipient: string): void {
      if (!this.apiKey || !this.baseUrl) {
        console.error('Payment Gateway not configured!');
        return;
      }
  
      console.log(
        `Processing payment of ${amount} ${currency} to ${recipient} through ${this.baseUrl} with API Key ${this.apiKey}`
      );
    }
  }
  