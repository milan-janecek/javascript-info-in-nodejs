'use strict';

async function f() {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  const result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"

  return result;
}

f();

// await won’t work in the top-level code - but we can wrap it

(async () => {
  const response = await f();
  console.log(response);
})();
