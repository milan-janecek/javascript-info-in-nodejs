'use strict';

const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys only returns own keys
console.log(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys

// eslint-disable-next-line guard-for-in
for (const prop in rabbit) console.log(prop); // jumps, then eats

for (const prop in rabbit) {
  if (Object.prototype.hasOwnProperty.call(prop)) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}
