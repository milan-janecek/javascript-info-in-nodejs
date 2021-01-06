'use strict';

function User(name) { // constructor functions starts with capital letter
  // this = {};  (implicitly)

  // modify this (add some properties and set their values)
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

const userA = new User('Jack'); // they are used with new operator

console.log(userA.name); // Jack
console.log(userA.isAdmin); // false

// the above user creation gives the same result as

const userB = {
  name: 'Jack',
  isAdmin: false,
};

console.log(userB.name); // Jack
console.log(userB.isAdmin); // false

// technically, any function can be used as a constructor. That is: any function can be run
// with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it
// clear that a function is to be run with new.

// sort of anonymous constructor that cannot be re-used
const userC = new function() {
  this.name = 'John';
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
}();

console.log(userC.name); // John
console.log(userC.isAdmin); // false
