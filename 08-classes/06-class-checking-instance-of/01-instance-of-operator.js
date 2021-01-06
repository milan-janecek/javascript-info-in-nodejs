'use strict';

// syntax is - obj instanceof Class

// It returns true if obj belongs to the Class or a class inheriting from it.

class Rabbit {}
const rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log(rabbit instanceof Rabbit); // true

// It also works with constructor functions:

// instead of class
function Pigeon() {}

console.log(new Pigeon() instanceof Pigeon); // true

// And it works with built-in classes like Array:

const arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

// Normally, instanceof examines the prototype chain for the check. We can also set a custom logic in the static method Symbol.hasInstance

// setup instanceOf check that assumes that
// anything with canEat property is an animal
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

const obj = {canEat: true};

console.log(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called
