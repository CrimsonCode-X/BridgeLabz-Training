"use strict";
function makeMultiplier(multiplier) {
  return function (number) { return number * multiplier; };
}
const triple = makeMultiplier(3);
const double = makeMultiplier(2);
console.log("triple(5):", triple(5)); // 15
console.log("double(7):", double(7)); // 14
// Closure: the returned function retains access to multiplier after the outer call returns.
