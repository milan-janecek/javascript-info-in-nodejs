'use strict';

const date = new Date();
console.log(+date === date.getTime()); // the number of milliseconds, same as date.getTime()

const start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  const a = i + i * i;
}

const end = new Date(); // end measuring time

console.log(`The loop took ${end - start} ms`);
