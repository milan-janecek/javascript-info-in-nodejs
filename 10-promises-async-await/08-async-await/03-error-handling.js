'use strict';

async function f() {
  await Promise.reject(new Error('Whoops!'));
}

async function fequiv() {
  throw new Error('Whoops!');
}

// f and fequiv are equivalent - async functions wraps error into rejected promise

async function handleErrors() {
  try {
    await f();
    await fequiv();
  } catch (err) {
    // catches errors both in fetch and response.json
    console.log(err);
  }
}

handleErrors();

async function unhandledErrors() {
  await f();
  await fequiv();
}

unhandledErrors();

process.on('unhandledRejection', (error) => {
  // Won't execute
  console.log('unhandledRejection', error);
});

