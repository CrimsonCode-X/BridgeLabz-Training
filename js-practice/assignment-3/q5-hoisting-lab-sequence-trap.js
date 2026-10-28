"use strict";
// Original sequence: console.log(score) prints undefined (var hoisting); announce() works (function declaration hoisting).
// status is initialized before startGame() is called, so startGame prints "ready".
// Accessing let/const before initialization triggers the temporal dead zone (ReferenceError).
const score = 50, status = "ready";
function announce() { console.log("Game started"); }
function startGame() { console.log("Status:", status); }
console.log("Score:", score); announce(); startGame();
// Function declarations are hoisted; arrow functions assigned to const/let are not callable before initialization.
const announceArrow = () => console.log("Arrow announcement");
const startGameArrow = () => console.log("Arrow status:", status);
announceArrow(); startGameArrow();
// Debug: inspect Scope; move a call above a const declaration to observe the TDZ.
