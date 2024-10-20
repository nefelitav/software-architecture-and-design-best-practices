import PaymentMethod from './PaymentMethod';

export default class CreditCard extends PaymentMethod {
    constructor() {
        super();
        this.name = 'Credit Card';
    }
}