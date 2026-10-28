// Q6: Event-Based Counter Simulation
// Simulate click events by calling increment() and decrement() manually.

let count = 0;

function increment() {
  count++;
  console.log(`Count: ${count}`);
}

function decrement() {
  count--;
  console.log(`Count: ${count}`);
}

// A nested function accesses and updates count from its enclosing scope.
function runNestedUpdate() {
  function addTwo() {
    count += 2;
    console.log(`Count after nested update: ${count}`);
  }

  addTwo();
}

increment(); // Simulate increment button click
increment();
decrement(); // Simulate decrement button click
runNestedUpdate();
