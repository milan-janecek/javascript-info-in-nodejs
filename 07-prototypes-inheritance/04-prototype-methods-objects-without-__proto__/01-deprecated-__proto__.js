'use strict';

// The __proto__ is considered outdated and somewhat deprecated

// The modern methods are:
//
// Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

const animal = {
  eats: true,
};

// create a new object with animal as a prototype

let rabbit = Object.create(animal);

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

console.log(rabbit.eats); // undefined

// create a new object with animal as a prototype and some additional properties

rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});

console.log(rabbit.jumps); // true

// fully identical shallow clone of obj
const rabbitClone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));

console.log(rabbitClone.jumps);
