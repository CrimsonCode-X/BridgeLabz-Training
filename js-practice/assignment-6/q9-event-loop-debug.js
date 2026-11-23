// Q9: Debug Event Loop
// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback
console.log("Script start");
setTimeout(()=>console.log("Timeout callback"),0);
Promise.resolve().then(()=>console.log("Promise callback"));
console.log("Script end");
// The Promise callback is a microtask, drained after synchronous code.
// Timer callbacks are macrotasks and execute in a later event-loop turn.