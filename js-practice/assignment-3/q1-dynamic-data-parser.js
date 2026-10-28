"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [], invalidNumericData = [];
for (let i = 0; i < apiData.length; i++) {
  const original = apiData[i], numberForm = Number(original), booleanForm = Boolean(original), stringForm = String(original);
  const blank = typeof original === "string" && original.trim() === "";
  console.log("--- Item " + (i + 1) + " ---", { original, numberForm, booleanForm, stringForm });
  if (!blank && Number.isFinite(numberForm)) validNumericData.push({ original, number: numberForm });
  else { invalidNumericData.push({ line: i + 1, original, attemptedNumber: numberForm }); console.warn("Invalid numeric value skipped:", original); }
}
console.log("Valid numeric data:", validNumericData);
console.log("Invalid numeric data:", invalidNumericData);
console.log("Counts:", { valid: validNumericData.length, invalid: invalidNumericData.length });
// Debug: watch original, numberForm, blank. Number(null) is 0; Number(undefined) is NaN.
