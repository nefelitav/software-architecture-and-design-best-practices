import PaymentMethod from '../../AbstractProduct/PaymentMethod';

export default class DebitCard extends PaymentMethod {
    constructor() {
        super();
        this.name = 'Debit Card';
    }
}