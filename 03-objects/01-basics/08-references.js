'use strict';

// objects are passed by-reference

// variables refer to object instances

const user = {name: 'John'};

const admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

// !!!!!! Two objects are equal only if they are the same object !!!!!!

const a = {};
const b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

const x = {};
const y = {}; // two independent objects - are not equal

console.log(x == y); // false
console.log(x === y); // false

// const object

const john = {
  name: 'John',
};

john.age = 25; // we are chaning object itself - adding a new property to it - we don't re-assign john variable

console.log(john.age); // 25

// attempt to assign another object to const variable ends with error
john = {
  name: 'Pete',
};
