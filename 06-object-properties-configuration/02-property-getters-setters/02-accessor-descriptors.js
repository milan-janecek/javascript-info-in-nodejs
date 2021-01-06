'use strict';

//
// Descriptors for accessor properties are different from those for data properties.
//
// For accessor properties, there is no value or writable, but instead there are get and set functions.
//
// That is, an accessor descriptor may have:
//
//   get – a function without arguments, that works when a property is read,
//   set – a function with one argument, that is called when the property is set,
//   enumerable – same as for data properties,
//   configurable – same as for data properties.

const user = {
  name: 'John',
  surname: 'Smith',
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(' ');
  },
});

console.log(user.fullName); // John Smith

for (const key in user) console.log(key); // name, surname

// property cannot be a data property and accessor property at the same time

Object.defineProperty({}, 'prop', {
  get() {
    return 1;
  },

  value: 2,
});
