'use strict';

// If a variable is declared inside a code block {...}, it’s only visible inside that block.

{
  // do some job with local variables that should not be seen outside

  const message = 'Hello'; // only visible in this block

  console.log(message); // Hello
}

// console.log(message); // Error: message is not defined

// We can use this to isolate a piece of code that does its own task, with variables that only belong to it:

{
  // show message
  const message = 'Hello';
  console.log(message);
}

{
  // show another message
  const message = 'Goodbye';
  console.log(message);
}

// For if, for, while and so on, variables declared in {...} are also only visible inside:

if (true) {
  const phrase = 'Hello!';

  console.log(phrase); // Hello!
}

console.log(phrase); // Error, no such variable
