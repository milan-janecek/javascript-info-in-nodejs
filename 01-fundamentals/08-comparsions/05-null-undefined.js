'use strict';

// strict equality check

console.log(null === undefined); // false - different types

console.log(+null);
console.log(+undefined);

console.log(null == undefined); // true

console.log(null > 0);  // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true

console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)

let a;

console.log(a === undefined); // true because it really is undefined
console.log(a === null); // false, null is not assigned

a = null;
console.log(a === undefined); // false, a is now defined
console.log(a === null); // true, a is now null

