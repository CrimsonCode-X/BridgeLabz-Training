// Q1: Personalized Login Greeting
// Get the user's name and current hour, then choose a suitable greeting.

const userName = "Aman";
const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
