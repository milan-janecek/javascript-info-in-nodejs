'use strict';

const x = 100;
const y = 100;

if (x == y) console.log('x is eqeq to y');

if (x === y) {
  console.log('x is eqeq to y');
  console.log('x is eqeqeq to y');
}

if (0) { // 0 is falsy
  console.info('Never executed...');
}

if (1) { // 1 is truthy
  console.info('Always executed...');
}

const cond = x === y; // equality evaluates to true or false

if (cond) {
  console.log('x is eqeq to y');
  console.log('x is eqeqeq to y');
} else {
  console.log('x is not equal to y');
}

const z = 1;

if (x == z) {
  console.log('x is eqeq to z');
} else if (x < z) {
  console.log('x is less than z');
} else {
  console.log('x is greater than z');
}
