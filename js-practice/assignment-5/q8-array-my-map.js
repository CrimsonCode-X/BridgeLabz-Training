"use strict";
if (!Array.prototype.myMap) {
  Object.defineProperty(Array.prototype, "myMap", {
    value: function (callback, thisArg) {
      if (this === null || this === undefined) throw new TypeError("myMap called on null/undefined");
      if (typeof callback !== "function") throw new TypeError("Callback must be a function");
      const source = Object(this), length = source.length >>> 0, result = new Array(length);
      for (let index = 0; index < length; index++) {
        if (index in source) result[index] = callback.call(thisArg, source[index], index, source);
      }
      return result;
    },
    writable: true,
    configurable: true
  });
}
console.log([1, 2, 3].myMap(number => number * 2));
console.log(["a", "b"].myMap((value, index) => index + ":" + value));
