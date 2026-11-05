"use strict";
function Car(brand, model) { this.brand = brand; this.model = model; }
Car.prototype.getDetails = function () { console.log(this.brand + " " + this.model); };
const carOne = new Car("Toyota", "Corolla");
const carTwo = new Car("Honda", "Civic");
carOne.getDetails();
carTwo.getDetails();
console.log("Shared prototype method:", carOne.getDetails === carTwo.getDetails); // true
