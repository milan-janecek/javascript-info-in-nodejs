'use strict';

const obj = {};

const protoKey = '__proto__';
obj[protoKey] = 'some value';

// The __proto__ property is special: it must be either an object or null. A string can not become a prototype

// The __proto__ is actually accessor property (with getter and setter) and it comes from Object.prototype

console.log(obj[protoKey].toString()); // [object Object], not "some value"!

// using Map is preferred if we need associative array

// but objects can still be used for this - "plain objects" without prototype

const plainObj = Object.create(null); // this is plain object with no inherited properties/methods, so even __proto__ is not there

plainObj[protoKey] = 'some value';

console.log(plainObj[protoKey]); // some value
