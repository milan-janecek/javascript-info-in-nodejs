'use strict';

const single = 'single-quoted';
const double = "double-quoted";

const backticks = `backticks`;

function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// backticks allow a string to span multiple lines
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // a list of guests, multiple lines

// single/double quotes cannot be used to span the string to multiple lines
// the below is syntax error

// let guestList = "Guests: // Error: Unexpected token ILLEGAL
//   * John";
