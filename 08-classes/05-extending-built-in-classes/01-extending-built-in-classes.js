'use strict';

// add one more method to it (can do more)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

const arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

const filteredArr = arr.filter((item) => item >= 10);
console.log(filteredArr); // 10, 50
console.log(filteredArr.isEmpty()); // false

// Built-in methods like filter, map and others – return new objects of exactly the inherited type PowerArray.
// Their internal implementation uses the object’s constructor property for that.

console.log(arr.constructor === PowerArray); // true
