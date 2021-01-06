'use strict';

const str = 'Hello';

console.log(str.toUpperCase()); // HELLO

// The string str is a primitive. So in the moment of accessing its property, a special object is created that knows
// the value of the string, and has useful methods, like toUpperCase().
// That method runs and returns a new string (shown by console.log).
// The special object is destroyed, leaving the primitive str alone

const n = 1.23456;

console.log(n.toFixed(2)); // 1.23

// Constructors String/Number/Boolean are for internal use only - don't use them (there is ESLint rule which warns you)

console.log(typeof 0); // "number"

console.log(typeof new Number(0)); // "object"! - see, these wrappers are objects, not primitives

const zero = new Number(0);

if (zero) { // zero is true, because it's an object
  console.log('zero is truthy!?!');
}

// using String/Number/Boolean for conversions (without new) is OK

const num = Number('123'); // convert a string to number
console.log(typeof num); // "number"

// The special primitives null and undefined are exceptions. They have no corresponding “wrapper objects” and
// provide no methods. In a sense, they are “the most primitive”.
