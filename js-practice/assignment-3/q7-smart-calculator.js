"use strict";
class InvalidOperationError extends Error { constructor(operation) { super("Unknown operation: " + operation); this.name = "InvalidOperationError"; } }
class CalculationError extends Error { constructor(message) { super(message); this.name = "CalculationError"; } }
const operations = ["add", "divide", "power", "root", "subtract"], num1 = 25, num2 = 0;
function calculate(operation, first, second) {
  switch (operation) {
    case "add": return first + second;
    case "divide": if (second === 0) throw new CalculationError("Cannot divide by zero."); return first / second;
    case "power": return first ** second;
    case "root": if (first < 0) throw new CalculationError("Cannot take the real square root of a negative number."); return Math.sqrt(first);
    case "subtract": return first - second;
    default: throw new InvalidOperationError(operation);
  }
}
for (const operation of operations.concat("multiply")) {
  try { console.log("Operation: " + operation + " | inputs: " + num1 + ", " + num2 + " | result: " + calculate(operation, num1, num2)); }
  catch (error) { console.error("Operation: " + operation + " | " + error.name + ": " + error.message); }
}
