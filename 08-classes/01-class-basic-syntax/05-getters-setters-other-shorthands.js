'use strict';

// Just like literal objects, classes may include getters/setters, computed properties etc.
//
// Here’s an example for user.name implemented using get/set:

class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short.');
      return;
    }
    this._name = value;
  }
}

let user = new User('John');

console.log(user.name); // John

user = new User(''); // Name is too short.

// Here’s an example with a computed property name in brackets [...]:

class UserWithComputedProperty {

  ['say' + 'Hi']() {
    console.log('Hello');
  }

}

new UserWithComputedProperty().sayHi();
