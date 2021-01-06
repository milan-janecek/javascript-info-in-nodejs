'use strict';

// When a function is specified as a class or object method, its [[HomeObject]] property becomes that object.
//
// Then super uses it to resolve the parent prototype and its methods.

const animal = {
  name: 'Animal',
  eat() { // animal.eat.[[HomeObject]] == animal
    console.log(`${this.name} eats.`); // no super -> executes the console.log method
  },
};

const rabbit = {
  __proto__: animal,
  name: 'Rabbit',
  eat() { // rabbit.eat.[[HomeObject]] == rabbit
    super.eat(); // finds parent prototype and calls eat on it ([[HomeObject]].__proto__.__proto__ is animal)
  },
};

const longEar = {
  __proto__: rabbit,
  name: 'Long Ear',
  eat() { // longEar.eat.[[HomeObject]] == longEar
    super.eat(); // finds parent prototype and calls eat on it ([[HomeObject]].__proto__.__proto__ is rabbit)
  },
};

// works correctly
longEar.eat(); // Long Ear eats.
