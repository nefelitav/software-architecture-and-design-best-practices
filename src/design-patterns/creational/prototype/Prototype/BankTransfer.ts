export default interface BankTransfer {
  holder: string;
  amount: number;
  transferType: string;
  clone(): BankTransfer;
  processTransfer(): void;
}