'use strict';

console.log('####### How it behaves with boolean values');

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log('####### For non-boolean operands - these are converted to boolean first, then OR is applied');

if (1 || 0) { // works just like if( true || false )
  console.log('truthy!');
}

const hour = 9;

if (hour < 10 || hour > 18) {
  console.log('The office is closed.');
}

console.log('####### Short-circuit evaluation');

console.log(1 || 0); // 1 (1 is truthy)
console.log(true || 'no matter what'); // (true is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

// can be used as if - see below => not recommended - it is better to use if

let x;
true || (x = 1);
console.log(x); // undefined, because (x = 1) not evaluated

console.log('####### Getting the first truthy value from a list of variables or expressions');

const currentUser = null;
const defaultUser = 'John';

const name = currentUser || defaultUser || 'unnamed';

console.log(name); // selects "John" – the first truthy value

// OR has lowest precedence from logical operators
