'use strict';

// if a class extends another class and has no constructor, then the following “empty” constructor is generated:
//
// class Rabbit extends Animal {
//   // generated for extending classes without own constructors
//   constructor(...args) {
//     super(...args);
//   }
// }

// As we can see, it basically calls the parent constructor passing it all the arguments. That happens if we don’t write a constructor of our own

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    // constructors in inheriting classes must call super(...), and (!) do it before using this
    super(name);
    this.earLength = earLength;
  }
}

// Doesn't work!
const rabbit = new Rabbit('White Rabbit', 10);

console.log(rabbit.name); // White Rabbit
console.log(rabbit.earLength); // 10
