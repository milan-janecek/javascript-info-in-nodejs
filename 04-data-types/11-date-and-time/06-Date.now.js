'use strict';

//
// If we only want to measure time, we don’t need the Date object.
//
// There’s a special method Date.now() that returns the current timestamp.
//
// It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.
//
// It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.
//
// So this is probably better:

const start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  const doSomething = i * i * i;
}

const end = Date.now(); // done

console.log(`The loop took ${end - start} ms`); // subtract numbers, not dates
