export default class PaymentValidator {
    validateCardDetails(cardNumber: string, expiryDate: string): boolean {
        const isValid = cardNumber.length === 16 && expiryDate !== '';
        console.log(`Card validation result: ${isValid}`);
        return isValid;
    }
}
