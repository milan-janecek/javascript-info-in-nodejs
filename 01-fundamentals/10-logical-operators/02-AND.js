'use strict';

console.log('####### How it behaves with boolean values');

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

console.log('####### For non-boolean operands - these are converted to boolean first, then AND is applied');

if (1 && 2) { // evaluated as true && false
  console.log('1 is true AND 2 is true => condition is true');
}

console.log('####### An example if');

const hour = 12;
const minute = 30;

if (hour == 12 && minute == 30) {
  console.log('The time is 12:30');
}

console.log('####### Short-circuit evaluation - finds first falsy value');

// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && 'no matter what'); // 0

console.log(1 && 2 && null && 3); // null
console.log(1 && 2 && 3); // 3, the last one

// can be used as if - see below => not recommended - it is better to use if

const x = 1;
(x > 0) && console.log('Greater than zero!');

// AND is higher precedence of OR and lower than NOT
