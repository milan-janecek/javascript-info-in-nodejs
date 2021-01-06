'use strict';

function showName() {
  console.log(arguments.length);

  // it's iterable but not an array
  for (const arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
showName('Julius', 'Caesar');

// shows: 1, Ilya
showName('Ilya');

// arguments is sort of legacy - also - arrow function don't have arguments - they get arguments of outer function

function f() {
  const showArg = () => console.log(arguments[0]);
  showArg();
}

f(1); // 1
