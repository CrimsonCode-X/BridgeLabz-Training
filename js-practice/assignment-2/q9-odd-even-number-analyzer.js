// Q9: Odd–Even Number Analyzer
// Build a range from 1 to 30 and classify each number.

const numbers = [];

for (let number = 1; number <= 30; number++) {
  numbers.push(number);
}

const results = [];

for (const number of numbers) {
  let classification;

  if (number % 3 === 0 && number % 5 === 0) {
    classification = "FizzBuzz";
  } else if (number % 2 === 0) {
    classification = "Even";
  } else {
    classification = "Odd";
  }

  results.push({ number, classification });
}

console.table(results);
