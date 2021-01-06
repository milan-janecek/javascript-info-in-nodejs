'use strict';

// No effect on numbers
const x = 1;
console.info(+x); // 1

const y = -2;
console.info(+y); // -2

// Converts non-numbers
console.info(+true); // 1
console.info(+''); // 0

const apples = '2';
const oranges = '3';

console.info(apples + oranges); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
console.info(+apples + +oranges); // 5

// the longer variant
console.info(Number(apples) + Number(oranges)); // 5

console.info(apples - oranges);
