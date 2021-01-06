'use strict';

console.log(isNaN(NaN)); // true
console.log(isNaN('str')); // true

console.log(NaN === NaN); // false

console.log(isFinite('15')); // true
console.log(isFinite('str')); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity

// Sometimes isFinite is used to validate whether a string value is a regular number:

console.log(isFinite('')); // true
console.log(isFinite('   ')); // true
console.log(isFinite('123')); // true

// Compare with Object.is - more used in Javascript internals

console.log(Object.is(1, 1)); // true
console.log(Object.is(NaN, NaN)); // true

console.log(Object.is(0, -0)); // false
console.log(0 === -0); // true
