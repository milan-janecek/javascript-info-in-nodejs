'use strict';

const arr = [1, 2, 3];

console.log(`${arr}`); // 1,2,3
console.log(String(arr) === '1,2,3'); // true

console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1, 2] + 1); // "1,21"

// Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so
// here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".
