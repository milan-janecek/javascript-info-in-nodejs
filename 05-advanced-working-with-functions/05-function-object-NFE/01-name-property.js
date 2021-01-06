'use strict';

function sayHi() {
  console.log('Hi');
}

console.log(sayHi.name); // sayHi

const sayHi2 = function() {
  console.log('Hi 2');
};

console.log(sayHi2.name); // sayHi2 (there's a name!)

function f(sayHi3 = function() {}) {
  console.log(sayHi3.name); // sayHi3 (works!)
}

f();

// object methods have name too

const user = {

  sayHi() {
    // ...
  },

  sayBye() {
    // ...
  },

};

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

// function created inside array
const arr = [function() {}];

console.log(arr[0].name === ''); // true -> <empty string>
// the engine has no way to set up the right name, so there is none
