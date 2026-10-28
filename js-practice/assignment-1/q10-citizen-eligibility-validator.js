// Q10: Citizen Eligibility Validator
// The assignment's conditions overlap: citizens aged 18–20 match both
// "all services if age >= 18" and "vote only if age 18–20".
// To preserve the specific "vote only" rule, check ages 18–20 first.
// Under this interpretation, citizens aged 21+ qualify for all services.

const age = 19;
const isCitizen = true;

if (isCitizen) {
  if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else if (age >= 21) {
    console.log("Eligible for all services.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}
