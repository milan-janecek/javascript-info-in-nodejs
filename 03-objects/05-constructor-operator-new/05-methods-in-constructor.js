'use strict';

// can create objects with methods with constructor - but classes are better syntax than this

function User(name) {
  this.name = name;

  this.sayHi = function() {
    console.log(`My name is: ${this.name}`);
  };
}

const john = new User('John');

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
