'use strict';

// we can call function defined as "declaration" because Javascript engine processes declarations before it executes the script

sayHi('John'); // Hello, John

function sayHi(name) {
  console.log(`Hello, ${name}`);
}

sayBye('John'); // error! function expressions are evaluated and exists since the time they are assigned to some variable

let sayBye = function(name) { // (*) no magic any more
  console.log(`Bye, ${name}`);
};
