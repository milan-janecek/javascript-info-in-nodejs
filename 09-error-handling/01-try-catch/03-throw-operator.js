'use strict';

// The throw operator generates an error.

// throw <error object>

// we can throw any object, but usually we throw objects with name and message properties

// there are some Javascript built-in errors

const message = 'Error message';
let error = new Error(message);
// or
error = new SyntaxError(message);
error = new ReferenceError(message);

throw error;
