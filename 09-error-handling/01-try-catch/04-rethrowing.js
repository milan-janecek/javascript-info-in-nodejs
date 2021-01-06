'use strict';

// The “rethrowing” technique can be explained in more detail as:
//
// -> Catch gets all errors.
//   In the catch(err) {...} block we analyze the error object err.
//   If we don’t know how to handle it, we do throw err.

const json = '{ "age": 30 }'; // incomplete data
try {

  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('Incomplete data: no name');
  }

  blabla(); // unexpected error

  console.log(user.name);

} catch (e) {
  if (e instanceof SyntaxError) {
    console.log(`JSON Error: ${e.message}`);
  } else {
    throw e; // rethrow (*)
  }
}
