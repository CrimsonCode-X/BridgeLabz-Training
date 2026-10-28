"use strict";
const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];
const valid = [], invalid = [];
for (let i = 0; i < transactions.length; i++) {
  try {
    const transaction = transactions[i];
    if (transaction === null || transaction === undefined) { const e = new Error("Null transaction entry"); e.name = "NullTransactionError"; throw e; }
    if (transaction.id === undefined || transaction.amount === undefined) { const e = new Error("Missing id or amount"); e.name = "MissingTransactionFieldError"; throw e; }
    if (transaction.amount < 0) { const e = new Error("Negative amount"); e.name = "NegativeAmountError"; throw e; }
    valid.push(transaction); console.log("Transaction " + transaction.id + " accepted.");
  } catch (error) { invalid.push({ index: i + 1, category: error.name, message: error.message }); console.error("Entry " + (i + 1) + " rejected:", error.name, error.message); }
}
console.log("Valid transactions:", valid);
console.log("Invalid report:", invalid);
console.log("Summary: " + valid.length + " successful, " + invalid.length + " failed.");
// Debug: breakpoint inside loop; watch i, transaction, and error. Inspect Call Stack while paused.
