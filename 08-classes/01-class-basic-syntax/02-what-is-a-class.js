'use strict';

// class is a function

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi from ${this.name}!`);
  }
}

// What class User {...} construct really does is:
//
// 1) Creates a function named User, that becomes the result of the class declaration. The function code is taken from
//    the constructor method (assumed empty if we don’t write such method).
// 2) Stores class methods, such as sayHi, in User.prototype.

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // [Function: sayHi]

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
