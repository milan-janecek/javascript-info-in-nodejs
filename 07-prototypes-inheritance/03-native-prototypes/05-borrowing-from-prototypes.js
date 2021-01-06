'use strict';

// if we’re making an array-like object, we may want to copy some Array methods to it

const obj = {
  0: 'Hello',
  1: 'world!',
  length: 2,
};

obj.join = Array.prototype.join;

console.log(obj.join(',')); // Hello,world!

// It works because the internal algorithm of the built-in join method only cares about the correct indexes and the length property.

// Borrowing methods is flexible, it allows to mix functionalities from different objects if needed
