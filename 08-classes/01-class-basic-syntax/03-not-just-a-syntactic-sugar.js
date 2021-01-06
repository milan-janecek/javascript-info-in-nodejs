'use strict';

// rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
  this.name = name;
}
// any function prototype has constructor property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function() {
  console.log(`Hi from ${this.name}!`);
};

// Usage:
const user = new User('John');
user.sayHi();

// Still, there are important differences between the above and the class definition:

// 1) A function created by class is labelled by a special internal property [[FunctionKind]]:"classConstructor".
//    So it’s not entirely the same as creating it manually.

// And unlike a regular function, a class constructor must be called with new:

class ClassUser {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi from ${this.name}!`);
  }
}

// ClassUser(); // Error: Class constructor User cannot be invoked without 'new'


// 2) Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

const classUser = new ClassUser('John');

// just name - no methods !
for (const key in classUser) {
  if (Object.prototype.hasOwnProperty.call(classUser, key)) {
    console.log(key);
  }
}

// 3) Classes always use strict. All code inside the class construct is automatically in strict mode.

