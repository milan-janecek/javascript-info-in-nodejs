'use strict';

let billion = 1000000000;
console.log(billion); // 1000000000

billion = 1e9; // 1 billion, literally: 1 and 9 zeroes

console.log(billion); // 1000000000

console.log(7.3e9); // 7300000000 - 7.3 billions

// 1e3 = 1 * 1000
// 1.23e6 = 1.23 * 1000000

let microsecond = 0.000001;

console.log(microsecond); // 0.000001

microsecond = 1e-6; // six zeroes to the left from 1

console.log(microsecond); // 0.000001

// -3 divides by 1 with 3 zeroes
// 1e-3 = 1 / 1000 (=0.001)

// -6 divides by 1 with 6 zeroes
// 1.23e-6 = 1.23 / 1000000 (=0.00000123)
