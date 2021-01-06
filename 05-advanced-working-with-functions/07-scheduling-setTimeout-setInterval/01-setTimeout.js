'use strict';

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
//
// func|code - Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.
// delay - The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
// arg1, arg2… - Arguments for the function (not supported in IE9-)

function sayHi() {
  console.log('Hello');
}

console.log('Setting timeout for sayHi to 1000 ms');
setTimeout(sayHi, 1000);

function sayHiWithArgs(phrase, who) {
  console.log(`${phrase}, ${who}`);
}

console.log('Setting timeout for sayHiWithArgs to 1000 ms');
setTimeout(sayHiWithArgs, 1000, 'Hello', 'John'); // Hello, John

// using arrow functions
console.log('Setting timeout for arrow function to 1000 ms');
setTimeout(() => console.log('Hello'), 1000);

// cancelling with clearTimeout

const timerId = setTimeout(() => console.log('never happens'), 1000);
console.log(timerId); // timer identifier
clearTimeout(timerId);
console.log(timerId); // same identifier (doesn't become null after canceling)
