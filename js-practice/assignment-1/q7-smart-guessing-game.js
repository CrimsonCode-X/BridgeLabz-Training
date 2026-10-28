// Q7: Smart Guessing Game (Number Range)
// The secret number is random. Change userGuess to test different outcomes.

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number (for testing): ${secretNumber}`);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  const difference = Math.abs(userGuess - secretNumber);

  if (difference <= 3 && userGuess >= 1 && userGuess <= 50) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else if (userGuess < secretNumber) {
    console.log("Too low");
  } else {
    console.log("Please choose a number from 1 to 50.");
  }
}
