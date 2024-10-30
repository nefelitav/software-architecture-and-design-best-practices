import PaymentFacade from './PaymentFacade';

export default function FacadePattern() {

    const paymentFacade = new PaymentFacade();

    try {
        const result = paymentFacade.makePayment('1234567812345678', '12/25', 100, 'customer@example.com');
        console.log(result); 
    } catch (error: unknown) { 
        if (error instanceof Error) {
            console.error(error.message); 
        } else {
            console.error('An unexpected error occurred.');
        }
    }
}