'use strict';

const sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

const sum = function(a, b) {
  return a + b;
};
*/

console.log(sum(1, 2)); // 3

// one argument - omit parentheses

const double = (n) => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log(double(3)); // 6

// no arguments - empty parentheses

const sayHi = () => console.log('Hello!');

sayHi();
