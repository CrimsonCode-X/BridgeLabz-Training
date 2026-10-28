"use strict";
// Actual original output: undefined, undefined. Each function's var count is hoisted in its own scope.
function outer() {
  console.log("outer count before assignment:", count);
  var count = 5;
  function inner() {
    console.log("inner count before assignment:", count);
    var count = 10;
    console.log("inner count after assignment:", count);
  }
  inner();
  console.log("outer count after inner:", count);
}
outer();
// Arrow version: arrows still have their own local variables; they differ in lexical this/arguments/super.
function outerWithArrow() {
  console.log("arrow outer before assignment:", count);
  var count = 5;
  const inner = () => {
    console.log("arrow inner before assignment:", count);
    var count = 10;
    console.log("arrow inner after assignment:", count);
  };
  inner();
  console.log("arrow outer after inner:", count);
}
outerWithArrow();
// Debug: inside inner, call stack is inner -> outer -> global/script. Inspect Local and Closure scopes.
