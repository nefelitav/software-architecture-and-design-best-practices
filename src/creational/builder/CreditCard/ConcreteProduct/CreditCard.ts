import PaymentMethod from '../../AbstractProduct/PaymentMethod';

export default class CreditCard extends PaymentMethod {
    constructor() {
        super();
        this.name = 'Credit Card';
    }
}