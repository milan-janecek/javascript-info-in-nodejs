'use strict';

globalThis.console.log('globalThis has console property');

console.log('console is property of globalThis object but it can be accessed directly');

// If a value is so important that you’d like to make it available globally, write it directly as a property:

// make current user information global, to let all scripts access it
globalThis.currentUser = {
  name: 'John',
};

// somewhere else in code
console.log(currentUser.name); // John

// or, if we have a local variable with the name "currentUser"
// get it from global object explicitly (safe!)
console.log(globalThis.currentUser.name); // John

if (!globalThis.Promise) {
  console.log('Your environment is really old!');
}
