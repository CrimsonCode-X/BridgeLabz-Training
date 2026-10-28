// Q3: Math Utility Dashboard
// Calculate several mathematical values for x.

const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const powerOfThree = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Math Utility Dashboard
Input value: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Power (x³): ${powerOfThree.toFixed(2)}
Random number (10–50): ${randomNumber}`);
