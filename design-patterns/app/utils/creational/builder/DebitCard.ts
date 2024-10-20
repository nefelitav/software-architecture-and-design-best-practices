import PaymentMethod from './PaymentMethod';

export default class DebitCard extends PaymentMethod {
    constructor() {
        super();
        this.name = 'Debit Card';
    }
}