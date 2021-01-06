'use strict';

function showMessage(from, text) { // arguments: from, text
  console.log(`${from}: ${text}`);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)


function showMessage2(from, text) {

  from = `*${from}*`; // make "from" look nicer

  console.log(`${from}: ${text}`);
}

let from = "Ann";

showMessage2(from, 'Hello'); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy (passed by value, only objects and arrays are passed by reference)
console.log(from); // Ann
