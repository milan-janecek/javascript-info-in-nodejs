'use strict';

// id is a symbol with the description "id"
const id = Symbol('id');

// symbols are guaranteed to be unique - see below - description is just a label
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2); // false

// symbols don’t auto-convert to a string
// console.log(`Symbol to string: ${id}`); // TypeError: Cannot convert a Symbol value to a string

console.log(`Symbol to string: ${id.toString()}`);
console.log(`Symbol description: ${id1.description}`);

