"use strict";
const input = typeof prompt === "function" ? prompt("Pyramid height (default 5):", "5") : null;
const candidate = input === null || input.trim() === "" ? 5 : Number(input);
const height = Number.isInteger(candidate) && candidate > 0 ? candidate : 5;
console.log("Pyramid pattern (height = " + height + ")");
for (let row = 1; row <= height; row++) {
  let line = "";
  for (let column = 1; column <= row; column++) line += "* ";
  console.log(line.trimEnd());
}
// Replacing let with var keeps this output but makes row/column function-scoped rather than block-scoped.
// Debug: watch row, column, line. Strict mode catches undeclared loop variables (e.g. for (i = 0; ...)).
