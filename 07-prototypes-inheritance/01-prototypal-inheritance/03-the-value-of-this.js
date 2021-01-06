'use strict';

// this is not affected by prototypes at all

// no matter where the method is found: in an object or its prototype, in a method call, this is always the object before the dot

// or in other words, methods are shared, but the object state is not

// animal has methods
const animal = {
  walk() {
    if (!this.isSleeping) {
      console.log('I walk');
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

const rabbit = {
  name: 'White Rabbit',
  __proto__: animal,
};

// modifies rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (no such property in the prototype)

animal.sleep();
console.log(animal.isSleeping); // true
