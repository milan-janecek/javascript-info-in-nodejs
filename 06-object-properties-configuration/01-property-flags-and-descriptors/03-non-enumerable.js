'use strict';

console.log('Custom toString visible in for..in loop');

let user = {
  name: 'John',
  toString() {
    return this.name;
  },
};

// By default, both our properties are listed - but toString iherited from the Object is not
for (const key in user) console.log(key); // name, toString

console.log('Custom toString NOT visible in for..in loop - enumerable flag set to false');

user = {
  name: 'John',
  toString() {
    return this.name;
  },
};

Object.defineProperty(user, 'toString', {
  enumerable: false,
});

// Now our toString disappears:
for (const key in user) console.log(key); // name
