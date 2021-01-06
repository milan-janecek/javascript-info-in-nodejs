'use strict';

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

// we can find both properties in rabbit now => because =>
// when we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype
// in programming, such thing is called “prototypal inheritance”

console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true


// so if animal has a lot of useful properties and methods, then they become automatically available in rabbit, such
// properties are called “inherited”

// same works for methods

animal = {
  eats: true,
  walk() {
    console.log('Animal walks');
  },
};

rabbit = {
  jumps: true,
  __proto__: animal,
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk

// the prototype chain can be longer

animal = {
  eats: true,
  walk() {
    console.log('Animal walks');
  },
};

rabbit = {
  jumps: true,
  __proto__: animal,
};

const longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

// There are only two limitations:
//
//   The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
//   The value of __proto__ can be either an object or null. Other types are ignored.
//
// Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others.
