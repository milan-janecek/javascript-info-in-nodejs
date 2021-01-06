'use strict';

function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

// defer without arrow function would look like this
function deferNoArrow(f, ms) {
  return function(...args) {
    const ctx = this;
    setTimeout(() => {
      return f.apply(ctx, args);
    }, ms);
  };
}

function sayHi(who) {
  console.log(`Hello, ${who}`);
}

function sayBye(who) {
  console.log(`Bye, ${who}`);
}

const sayHiDeferred = defer(sayHi, 2000);
const sayByeDeferred = deferNoArrow(sayBye, 2000);
sayHiDeferred('John'); // Hello, John after 2 seconds
sayByeDeferred('Frank'); // Hello, Frank after 2 seconds
