// Q3: Monthly Expense Tracker
// Add expenses for five categories, calculate the average, and apply 10% tax.

const expenses = {
  food: 4500,
  travel: 1800,
  rent: 8000,
  bills: 2200,
  leisure: 1500
};

let totalExpense = 0;

for (const category in expenses) {
  totalExpense += expenses[category];
}

const averageExpense = totalExpense / Object.keys(expenses).length;
const taxRate = 0.10;
const taxAmount = totalExpense * taxRate;
let finalAmount = totalExpense;
finalAmount += taxAmount;

console.log(`Total expenses: ₹${totalExpense.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
