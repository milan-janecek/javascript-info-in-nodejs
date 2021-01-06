'use strict';

try {
  lalala; // error, variable is not defined!
} catch (err) {
  // all engine supports this
  console.log(`err.name = ${err.name}`);
  console.log(`err.message = ${err.message}`);
  // majority engines support stack
  console.log(`err.stack = ${err.stack}`);
}
