'use strict';

function showMessage() {
  const message = "Hello, I'm JavaScript!"; // local variable

  console.log(message);
}

showMessage(); // Hello, I'm JavaScript!

console.log(message); // <-- Error! The variable is local to the function
