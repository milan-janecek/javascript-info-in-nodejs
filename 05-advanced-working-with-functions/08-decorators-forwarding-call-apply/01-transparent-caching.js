'use strict';

function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  const cache = new Map();

  return function(x) {
    if (cache.has(x)) { // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    const result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached
console.log(`Again: ${slow(1)}`); // the same

console.log(slow(2)); // slow(2) is cached
console.log(`Again: ${slow(2)}`); // the same as the previous line
