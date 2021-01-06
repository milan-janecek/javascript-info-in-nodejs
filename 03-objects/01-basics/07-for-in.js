'use strict';

const user = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

for (const key in user) {
  if ({}.hasOwnProperty.call(user, key)) {
    // keys
    console.log(`Property: ${key}`); // name, age, isAdmin
    // values for the keys
    console.log(`Property value: ${user[key]}`); // John, 30, true
  }
}

