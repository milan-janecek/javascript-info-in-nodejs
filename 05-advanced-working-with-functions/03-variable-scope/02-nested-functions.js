'use strict';

// A function is called “nested” when it is created inside another function.

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return `${firstName} ${lastName}`;
  }

  console.log(`Hello, ${getFullName()}`);
  console.log(`Bye, ${getFullName()}`);
}

sayHiBye('Milan', 'Janecek');

// nested function can be returned - it still has access to outer variables of the place where it was declared

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
