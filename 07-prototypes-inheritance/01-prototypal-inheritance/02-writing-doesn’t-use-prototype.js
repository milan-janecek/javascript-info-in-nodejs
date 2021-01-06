'use strict';

// The prototype is only used for reading properties.
//
// Write/delete operations work directly with the object.

const animal = {
  eats: true,
  walk() {
    console.log('Animal walks!'); // this method won't be used by rabbit
  },
};

const rabbit = {
  __proto__: animal,
};

rabbit.walk = function() {
  console.log('Rabbit! Bounce-bounce!');
};

rabbit.walk(); // Rabbit! Bounce-bounce!

// except setters - setter is treated the same as function call

const user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

const admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = 'Alice Cooper'; // (**)

console.log(admin.fullName);
