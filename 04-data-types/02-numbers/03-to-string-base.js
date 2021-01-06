'use strict';

const num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

// Two dots to call a method for number represented by literal ! ESLint says we should add 0 to decimal part

console.log(123..toString(2)); // 1111011

console.log(123.0.toString(2)); // 1111011
