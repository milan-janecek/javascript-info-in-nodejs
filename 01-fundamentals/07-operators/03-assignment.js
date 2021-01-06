'use strict';

const i = (2 * 2) + 1;

console.info(i); // 5

let a, b, c;

a = b = c = 2 + 2;

console.info(a); // 4
console.info(b); // 4
console.info(c); // 4

let x = 1;
let y = 2;

let z = 3 - (x = y + 1);

console.info(x); // 3
console.info(z); // 0
