'use strict';

// Syntax:
//
// const obj = {
//   get propName() {
//     // getter, the code executed on getting obj.propName
//   },
//
//   set propName(value) {
//     // setter, the code executed on setting obj.propName = value
//   },
// };

// adding getter - not having a setter means we cannot set the property

let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

console.log(user.fullName); // John Smith

// user.fullName = 'Test'; // Error (property has only a getter)

// adding getter and setter to the user

user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
};

// set fullName is executed with the given value.
user.fullName = 'Alice Cooper';

console.log(user.fullName);
console.log(user.name); // Alice
console.log(user.surname); // Cooper
