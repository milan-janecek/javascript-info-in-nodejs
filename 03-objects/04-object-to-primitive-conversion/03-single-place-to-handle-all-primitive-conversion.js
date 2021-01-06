'use strict';

// In practice, it’s often enough to implement only obj.toString() as a “catch-all” method for all conversions that
// return a “human-readable” representation of an object, for logging or debugging purposes.

const user = {
  name: 'John',

  toString() {
    return this.name;
  },
};

console.log(`This is string representation of user object: ${user}`); // toString -> John
console.log(user + 500); // toString -> John500
