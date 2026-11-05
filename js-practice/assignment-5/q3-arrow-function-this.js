"use strict";
// Arrow functions capture this lexically rather than receiving it from the call site.
const user = {
  name: "Aman",
  showName: () => console.log("Arrow function this.name:", this.name)
};
user.showName(); // Usually undefined in a browser script/module.
user.showName = function () {
  console.log("Normal function this.name:", this.name);
};
user.showName(); // Aman
