export default class EmailService {
    sendConfirmation(email: string, amount: number): void {
        console.log(`Sending confirmation email to ${email} for payment of $${amount}...`);
    }
}