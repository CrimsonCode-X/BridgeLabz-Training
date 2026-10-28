"use strict";
// Bug: greeting = "Welcome" throws ReferenceError because greeting is undeclared in strict mode.
function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
  console.log("Watch variable greeting =", greeting);
}
showMessage();
// Sloppy mode may create a global when assigning an undeclared identifier; strict mode rejects it.
// VS Code: breakpoint at const greeting; add greeting to WATCH; inspect CALL STACK (showMessage -> caller).
