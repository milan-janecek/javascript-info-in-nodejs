'use strict';

// split - str.split(delim) method does exactly that, tt splits the string into an array by the given delimiter delim

const names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (const name of arr) {
  console.log(`A message to ${name}.`); // A message to Bilbo (and other names)
}

arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

console.log(arr); // [ 'Bilbo', 'Gandalf' ]

console.log('test'.split('')); // [ 't', 'e', 's', 't' ]

// join - arr.join(glue) does the reverse to split, it creates a string of arr items joined by glue between them

arr = ['Bilbo', 'Gandalf', 'Nazgul'];

const str = arr.join('; ').trimEnd(); // glue the array into a string using ; - trimEnd is used to remove last space

console.log(str); // Bilbo; Gandalf; Nazgul
