'use strict';

const str = "Hello";
const str2 = 'Single quotes are ok too';
const phrase = `can embed another ${str}`;

console.info(str);
console.info(str2);
console.info(phrase);

const name = 'John';

// embed a variable
console.info(`Hello, ${name}!`); // Hello, John!

// embed an expression
console.info(`the result is ${1 + 2}`); // the result is 3
