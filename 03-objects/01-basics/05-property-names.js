'use strict';

// Property names (keys) must be either strings or symbols (a special type for identifiers, to be covered later)
// Other types are automatically converted to strings

const objA = {
  0: 'test', // same as "0": "test"
};

// both logs access the same property (the number 0 is converted to string "0")
console.log(objA['0']); // test
console.log(objA[0]); // test (same property)

const objB = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(objB.for + objB.let + objB.return); // 6

const objC = {};
objC.__proto__ = 5; // assign a number - this will be ignored
console.log(objC.__proto__); // [object Object] - the value is an object, didn't work as intended - was ignored
