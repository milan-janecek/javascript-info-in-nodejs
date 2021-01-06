'use strict';

// strings are immutable !!!

let str = 'Hi';

// str[0] = 'h'; // error - cannot change string

str = `h${str[1]}`; // replace the string

console.log(str); // hi
