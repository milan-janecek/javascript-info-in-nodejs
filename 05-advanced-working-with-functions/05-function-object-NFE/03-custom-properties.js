'use strict';

function sayHi() {
  console.log('Hi');

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

console.log(`Called ${sayHi.counter} times`); // Called 2 times

// Function properties can replace closures sometimes. For instance, we can rewrite the counter function example from the chapter 03-variable-scope to use a function property:

function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter.count); // 1

// the function property is accessible
counter.count = 10;

console.log(counter()); // 10
console.log(counter()); // 11
