'use strict';

// mixin - the behavior
const sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

// usage: => User can now inherit from other classes
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods of mixin
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User('Dude').sayHi(); // Hello Dude!
