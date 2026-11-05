"use strict";
function showEndMessage() { console.log("Welcome to the course!"); }
function greetUser(name, callback) {
  console.log("Hello " + name);
  console.log("Calling callback...");
  callback();
}
greetUser("Aman", showEndMessage);
