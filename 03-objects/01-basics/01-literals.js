'use strict';

const log = console.log;

const userA = new Object(); // "object constructor" syntax
const userB = {}; // "object literal" syntax

const userC = { // an object
  name: 'John', // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};

// get property values of the object:
log(userC.name); // John
log(userC.age); // 30

userC.isAdmin = true;

log(userC.isAdmin); // true

delete userC.age; // delete object property

log(userC.age); // undefined
