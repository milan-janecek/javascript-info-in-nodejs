'use strict';

// By default, a plain object has following toString and valueOf methods:
// - The toString method returns a string "[object Object]".
// - The valueOf method returns the object itself.

const john = {name: 'John'};

console.log(`${john}`); // [object Object]
console.log(john.valueOf() === john); // true

const user = {
  name: 'John',
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  },

};

console.log(`${user}`); // toString -> {name: "John"}
console.log(+user); // valueOf -> 1000
console.log(user + 500); // valueOf -> 1500
