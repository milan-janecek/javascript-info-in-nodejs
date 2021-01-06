'use strict';

const user = { // belongs to another code - 3rd party library
  name: 'John',
};

const id = Symbol('id');

user[id] = 1;

console.log(user[id]); // we can access the data using the symbol as the key and be sure that the property is ours and not of the 3rd party library's code

// to use symbol in object literal - use square brackets - same as for using variables
const fred = {
  name: 'Fred',
  [id]: 123, // not "id: 123"
};

// symbols are skipped by for…in

const rob = {
  name: 'Rob',
  age: 30,
  [id]: 123,
};

for (const key in rob) console.log(key); // name, age (no symbols)

// but the direct access by the symbol works
console.log(`Direct: ${rob[id]}`);

// Object.keys(user) also does not return symbols

// above is -> hiding symbolic properties principle

const robClone = Object.assign({}, rob);

console.log(robClone[id]); // 123 => copying using Object.assign works !
