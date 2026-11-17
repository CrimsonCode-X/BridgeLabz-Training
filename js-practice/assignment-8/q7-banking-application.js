// Q7. Banking Application (Private Class Fields)
class BankAccount {
  #balance;
  constructor(initialBalance = 0) {
    if (!Number.isFinite(initialBalance) || initialBalance < 0) throw new Error("Initial balance must be non-negative.");
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) throw new Error("Deposit must be a positive amount.");
    this.#balance += amount; return this.#balance;
  }
  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) throw new Error("Withdrawal must be a positive amount.");
    if (amount > this.#balance) throw new Error("Insufficient balance.");
    this.#balance -= amount; return this.#balance;
  }
  getBalance() { return this.#balance; }
}
const account = new BankAccount(5000);
console.log("Opening balance: ₹" + account.getBalance());
console.log("After deposit: ₹" + account.deposit(1500));
[2000, 10000].forEach(amount => {
  try { console.log(`Withdrew ₹${amount}; balance: ₹${account.withdraw(amount)}`); }
  catch (error) { console.error(`Transaction failed: ${error.message}`); }
});
console.log("Final balance: ₹" + account.getBalance());
// account.#balance is intentionally inaccessible outside the class.