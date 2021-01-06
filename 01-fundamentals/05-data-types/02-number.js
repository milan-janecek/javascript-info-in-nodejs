'use strict';

let n = 123;
console.info(n);
n = 12.345678901234567;
console.info(n);

// Infinity
console.info(1 / 0);

n = Infinity;

console.info(n);

// NaN

console.info('not a number' / 2);

// NaN is sticky - Any further operation on NaN returns NaN

console.info('not a number' / 2 + 5);