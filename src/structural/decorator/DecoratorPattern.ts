import BasicBankAccount from './BasicBankAccount';
import TransactionFeeDecorator from './TransactionFeeDecorator';

export default function DecoratorPattern() {
    const basicAccount = new BasicBankAccount("ACC123", 1000);
    const accountWithFee = new TransactionFeeDecorator(basicAccount, 5);
    accountWithFee.withdraw(10);
}