'use strict';

console.log(1e500); // Infinity

console.log(0.1 + 0.2 === 0.3); // false

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.1);

console.log(0.1.toFixed(22));

// use toFixed to round up result of calculation
const sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // 0.30
