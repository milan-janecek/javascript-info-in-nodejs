'use strict';

const userA = {
  name: 'John',
  age: 30,
  'likes birds': true, // multi-word property name must be quoted
};

// this would give a syntax error
// userA.likes birds = true

const userB = {};

// set
userB['likes birds'] = true;

// get
console.log(userB['likes birds']); // true

// delete
delete userB['likes birds'];

console.log(userB['likes birds']); // undefined

const key = 'likes birds';

// same as user["likes birds"] = true;
userB[key] = true;

console.log(userB['likes birds']); // true
