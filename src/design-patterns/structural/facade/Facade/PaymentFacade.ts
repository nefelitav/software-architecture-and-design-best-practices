import PaymentValidator from '../SubsystemClasses/PaymentValidator';
import PaymentProcessor from '../SubsystemClasses/PaymentProcessor';
import EmailService from '../SubsystemClasses/EmailService';

export default class PaymentFacade {
    private validator: PaymentValidator;
    private processor: PaymentProcessor;
    private emailService: EmailService;

    constructor() {
        this.validator = new PaymentValidator();
        this.processor = new PaymentProcessor();
        this.emailService = new EmailService();
    }

    makePayment(cardNumber: string, expiryDate: string, amount: number, email: string): string {
        if (!this.validator.validateCardDetails(cardNumber, expiryDate)) {
            throw new Error('Invalid card details.');
        }

        const result = this.processor.processPayment(amount);

        this.emailService.sendConfirmation(email, amount);

        return result;
    }
}