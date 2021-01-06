'use strict';

// Previously, classes only had methods.
//
// “Class fields” is a syntax that allows to add any properties.
//
// For instance, let’s add name property to class User:

class User {
  name = "Anonymous";

  sayHi() {
    console.log(`Hello from ${this.name}!`);
  }
}

new User().sayHi();

console.log(User.prototype.sayHi); // placed in User.prototype
console.log(User.prototype.name); // undefined, not placed in User.prototype