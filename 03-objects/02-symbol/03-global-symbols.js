'use strict';

// read from the global registry
const id = Symbol.for('id'); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
const idAgain = Symbol.for('id');

// the same symbol
console.log(id === idAgain); // true

// get symbol by name
const sym = Symbol.for('name');
const sym2 = Symbol.for('id');

// get name by symbol
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

// Symbol.keyFor returns undefined for local symbols
const globalSymbol = Symbol.for('name');
const localSymbol = Symbol('name');

console.log(Symbol.keyFor(globalSymbol)); // name, global symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, not global

console.log(localSymbol.description); // name
