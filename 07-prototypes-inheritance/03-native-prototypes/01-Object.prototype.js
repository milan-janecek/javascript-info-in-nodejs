'use strict';

const obj = {};
console.log(obj.toString()); // [object Object] - how come there is an method toString on empty object ?

console.log(obj.__proto__ === Object.prototype); // true - that is because prototype is set to special Object.prototype

// console.log(Object.getOwnPropertyDescriptors(Object.prototype)); // this will show what properties comes from Object.prototype

console.log(Object.prototype.__proto__); // null - there is nothing "above" Object.prototype
