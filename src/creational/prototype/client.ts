import DebitTransfer from './ConcretePrototypes/DebitTransfer';
import CreditTransfer from './ConcretePrototypes/CreditTransfer';
import TransferPrototypeRegistry from './PrototypeRegistry/TransferPrototypeRegistry';

export default function Client() {
    const registry = new TransferPrototypeRegistry();

    registry.registerTransferType("credit", new CreditTransfer("Alice", 1000));
    registry.registerTransferType("debit", new DebitTransfer("Bob", 500));

    const creditTransfer = registry.createTransfer("credit");
    creditTransfer.processTransfer(); 

    const debitTransfer = registry.createTransfer("debit");
    debitTransfer.processTransfer(); 

    const creditTransfer2 = registry.createTransfer("credit");
    creditTransfer2.amount = 2000;  
    creditTransfer2.processTransfer(); 
}