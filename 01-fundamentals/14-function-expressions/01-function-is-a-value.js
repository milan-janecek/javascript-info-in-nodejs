'use strict';

function sayHi() {
  console.log('Hello');
}

const sayBye = function() {
  console.log('Bye');
};

// above is equal in the sense that after it executes, sayHi and sayBye are variables that hold function's value

console.log(sayHi);
console.log(sayBye);

// refering to the variable does not call the function, you have to use parentheses

sayHi();
sayBye();

const sayHiNewName = sayHi;

sayHi();
sayHiNewName();

