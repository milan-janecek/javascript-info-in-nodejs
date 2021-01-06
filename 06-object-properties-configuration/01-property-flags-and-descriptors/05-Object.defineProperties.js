'use strict';

const user = {};

Object.defineProperties(user, {
  name: {value: 'John', writable: false},
  surname: {value: 'Smith', writable: false},
});

console.log(user.name);
console.log(user.surname);
