'use strict';

async function f() {
  return 1;
}

f().then(console.log); // 1 - because async functions always return promises (return 1 is wrapped into a promise)

async function fequivalent() {
  return Promise.resolve(1);
}

fequivalent().then(alert); // 1 - fequivalent function is same as function f - actually it describes what f does with 1 - wraps it into a promise
