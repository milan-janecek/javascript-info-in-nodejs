'use strict';

// !!!!!!!!!!!!!! then

const resolvedPromise = new Promise(((resolve, reject) => {
  setTimeout(() => resolve('done!'), 1000);
}));

// resolve runs the first function in .then
resolvedPromise.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console.log(error) // doesn't run
);

const rejectedPromise = new Promise(((resolve, reject) => {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
}));

// reject runs the second function in .then
rejectedPromise.then(
  (result) => console.log(result), // doesn't run
  (error) => console.log(error.message) // shows "Whoops!" after 1 second
);

// If we’re interested only in successful completions, then we can provide only one function argument to .then:

resolvedPromise.then(
  (result) => console.log(result), // shows another "done!" after 1 second
);

// !!!!!!!!!! catch - If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction).
// Or we can use .catch(errorHandlingFunction), which is exactly the same:

rejectedPromise.catch((error) => console.log(error.message)); // shows another "Whoops!" after 1 second


// !!!!!!!!! finally - Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.
// The call .finally(f) is similar to .then(f, f) in the sense that f always runs when the promise is settled: be it resolve or reject.

resolvedPromise.finally(() => console.log('message from finally'));
