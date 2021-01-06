'use strict';

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = 'ValidationError'; // (2)
  }
}

function test() {
  throw new ValidationError('Whoops!');
}

try {
  test();
} catch (err) {
  console.log(err.message); // Whoops!
  console.log(err.name); // ValidationError
  console.log(err.stack); // a list of nested calls with line numbers for each
}
