'use strict';

console.log(typeof {}); // object
console.log(typeof []); // same

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
