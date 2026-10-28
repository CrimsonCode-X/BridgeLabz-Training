// Q1: Scope Conflict Resolver
// The bonus is global, while salary and isPermanent are local to calculateSalary().

const bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
  const salary = 40000; // Local variable
  let totalSalary = salary;

  // Add the global bonus only for permanent employees.
  if (isPermanent === true) {
    totalSalary += bonus;
  }

  console.log(`Permanent employee: ${isPermanent}`);
  console.log(`Base salary: ₹${salary}`);
  console.log(`Bonus: ₹${isPermanent ? bonus : 0}`);
  console.log(`Total salary: ₹${totalSalary}`);

  // Nested function can read variables from its enclosing function scope.
  function showGlobalBonus() {
    console.log(`Global bonus remains: ₹${bonus}`);
  }

  showGlobalBonus();
}

calculateSalary(true);
console.log("--- Changing isPermanent ---");
calculateSalary(false);

// isPermanent is a function parameter, so changing it does not modify the global bonus.
