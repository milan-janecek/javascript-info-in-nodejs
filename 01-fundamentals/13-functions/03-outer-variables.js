'use strict';

// a function can access an outer variables

let userName = 'John';

function showMessage() {
  const message = `Hello, ${userName}`;
  console.log(message);
}

showMessage(); // Hello, John

function showMessage2() {
  userName = 'Bob'; // (1) changed the outer variable

  const message = `Hello, ${userName}`;
  console.log(message);
}

console.log(userName); // userName is John before the function call

showMessage2();

console.log(userName); // userName is Bob, the value was modified by the function

function showMessage3() {
  const userName = "Bob"; // declare a local variable

  const message = `Hello, ${userName}`; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage3();

console.log(userName); // userName is still Bob, unchanged, the function did not access the outer variable, it defined its own that shadowed the outer one of the same name
