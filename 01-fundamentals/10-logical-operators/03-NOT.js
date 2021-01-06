'use strict';

// ! NOT operator converts the value to boolean and returns inverse value

console.log(!true); // false
console.log(!0); // true

// A double NOT !! is sometimes used for converting a value to boolean type:

console.log(!!'non-empty string'); // true
console.log(!!null); // false

// NOT has highest precedence of logical operators
