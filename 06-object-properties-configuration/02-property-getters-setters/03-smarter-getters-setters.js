'use strict';

const user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short, need at least 4 characters');
      return;
    }
    this._name = value;
  },
};

user.name = 'Pete';
console.log(user.name); // Pete

user.name = ''; // Name is too short...

// has both name (accessor property) and _name - but _name should never be accessed - convention in Javascript world
for (const key in user) {
  console.log(key);
}
