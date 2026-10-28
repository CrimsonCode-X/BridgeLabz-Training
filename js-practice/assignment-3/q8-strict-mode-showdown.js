"use strict";
// Function bodies created by Function() are sloppy unless their own source includes "use strict".
const sloppy = Function("function demo(a, a) { total = 10; delete total; return total; } return demo(5, 10);");
try { console.log("Sloppy-mode demo result:", sloppy()); } catch (error) { console.log("Sloppy-mode error:", error.name, error.message); }

// In strict mode duplicate parameters cause a SyntaxError while the function is being created.
// Keep the constructor inside try so the syntax error is caught and the rest of this script runs.
try {
  const strict = Function('"use strict"; function demo(a, a) { total = 10; delete total; return total; } return demo(5, 10);');
  console.log("Strict-mode demo result:", strict());
} catch (error) {
  console.log("Strict-mode error:", error.name, error.message);
}

// If duplicate parameters are removed, undeclared assignment throws ReferenceError at runtime;
// deleting an unqualified identifier is a SyntaxError in strict mode. Use unique parameters,
// explicit declarations, and delete only object properties when appropriate.
function demoCorrect(first, second) {
  const total = 10;
  return { total, sum: first + second };
}
console.log("Correct ES6 version:", demoCorrect(5, 10));
