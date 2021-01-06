'use strict';

const user = {
  name: 'John',
  age: 30,
};

// function assigned to property => is a method
user.sayHi = function() {
  console.log('Hello!');
};

// we can also add function reference to a declared function
user.sayBye = sayBye;

user.sayHi(); // Hello!

function sayBye() {
  console.log('Bye!');
}

user.sayBye(); // Bye!

// method shorthand

// these objects do the same

const hierA = {
  sayHi() {
    console.log('A says Hello');
  },
};

// method shorthand looks better, right?
const hierB = {
  sayHi() { // same as "sayHi: function()"
    console.log('B says Hello');
  },
};

hierA.sayHi();
hierB.sayHi();
