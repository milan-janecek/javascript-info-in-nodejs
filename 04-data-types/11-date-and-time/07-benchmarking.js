'use strict';

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  const date1 = new Date(0);
  const date2 = new Date();

  const start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

// added for "heating up" prior to the main loop
bench(diffSubtract);
bench(diffGetTime);

let time1 = 0;
let time2 = 0;

// run bench(upperSlice) and bench(upperLoop) each 10 times alternating
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

console.log(`Total time for diffSubtract: ${time1}`);
console.log(`Total time for diffGetTime: ${time2}`);
