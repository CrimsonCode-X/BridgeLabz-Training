// Q5: Weather Activity Planner
// Set the weather values and print a recommendation.

const temperature = 24;
const isRaining = false;
const windSpeed = 12;

if (isRaining) {
  console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
  console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
  console.log("Too cold and windy — stay home.");
} else if ((temperature >= 15 && temperature <= 35) || windSpeed <= 20) {
  console.log("Perfect day for a walk.");
} else {
  console.log("Consider staying indoors if conditions feel uncomfortable.");
}
