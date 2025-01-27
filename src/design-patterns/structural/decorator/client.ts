import BasicBankAccount from './AbstractComponent/BasicBankAccount';
import TransactionFeeDecorator from './ConcreteDecorator/TransactionFeeDecorator';

export default function Client() {
    const basicAccount = new BasicBankAccount("ACC123", 1000);
    const accountWithFee = new TransactionFeeDecorator(basicAccount, 5);
    accountWithFee.withdraw(10);
}