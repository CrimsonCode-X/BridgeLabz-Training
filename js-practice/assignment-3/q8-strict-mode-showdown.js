"use strict";
// Function bodies created by Function() are sloppy unless their own source includes "use strict".
const sloppy = Function("function demo(a, a) { total = 10; delete total; return total; } return demo(5, 10);");
try { console.log("Sloppy-mode demo result:", sloppy()); } catch (error) { console.log("Sloppy-mode error:", error.name, error.message); }
const strict = Function('"use strict"; function demo(a, a) { total = 10; delete total; return total; } return demo(5, 10);');
try { console.log("Strict-mode demo result:", strict()); } catch (error) { console.log("Strict-mode error:", error.name, error.message); }
// Strict mode rejects duplicate parameters at parse time, undeclared assignment at runtime,
// and deleting an unqualified identifier as a syntax error. Use unique parameters and declarations instead.
function demoCorrect(first, second) { const total = 10; return { total, sum: first + second }; }
console.log("Correct ES6 version:", demoCorrect(5, 10));
