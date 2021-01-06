'use strict';

// !!!!!!! Array.prototype

const arr = [1, 2, 3];

// it inherits from Array.prototype?
console.log(arr.__proto__ === Array.prototype); // true

// then from Object.prototype?
console.log(arr.__proto__.__proto__ === Object.prototype); // true

// and null on the top.
console.log(arr.__proto__.__proto__.__proto__); // null

// !!!!!!! Number.prototype

const num = 5;

// it inherits from Array.prototype?
console.log(num.__proto__ === Number.prototype); // true

// then from Object.prototype?
console.log(num.__proto__.__proto__ === Object.prototype); // true

// and null on the top.
console.log(num.__proto__.__proto__.__proto__); // null

// !!!!!!! Function.prototype

function f() { return 1; }

// it inherits from Array.prototype?
console.log(f.__proto__ === Function.prototype); // true

// then from Object.prototype?
console.log(f.__proto__.__proto__ === Object.prototype); // true

// and null on the top.
console.log(f.__proto__.__proto__.__proto__); // null
