// Q2: Task Scheduler — Microtasks vs Macrotasks
console.log("Start");
setTimeout(()=>console.log("Macrotask: setTimeout callback"),0);
Promise.resolve().then(()=>console.log("Microtask: Promise callback"));
console.log("Synchronous log");
// Finally, End is synchronous and is logged before microtasks are drained.
console.log("End");
// Promise microtasks run after the current synchronous stack empties, before
// the event loop proceeds to timer macrotasks.