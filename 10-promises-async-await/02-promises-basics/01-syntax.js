'use strict';

// The constructor syntax for a promise object is:

const resolvedPromise = new Promise(((resolve, reject) => {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => {
    console.log('Promise is done');
    resolve('done');
  }, 1000);
}));

const donePromise = new Promise(((resolve, reject) => {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => {
    console.log('Promise is rejected');
    reject(new Error('Whoops!'));
  }, 1000);
}));
