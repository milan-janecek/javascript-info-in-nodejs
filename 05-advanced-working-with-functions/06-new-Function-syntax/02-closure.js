'use strict';

function getFunc() {
  const value = 'test';

  const func = new Function('console.log(value)');

  return func;
}

getFunc()(); // error: value is not defined

// functions created with new Function syntax have access only to global context - not the local one (the one in which
// they were created using the new Function syntax)
