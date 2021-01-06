'use strict';

// func.call(context, arg1, arg2, ...) - allows function to be called and pass this context to it

function sayHi() {
  console.log(this.name);
}

const user = {name: 'John'};
const admin = {name: 'Admin'};

// use call to pass different objects as "this"
sayHi.call(user); // John
sayHi.call(admin); // Admin

function say(phrase) {
  console.log(`${this.name}: ${phrase}`);
}

// user becomes this, and "Hello" becomes the first argument
say.call(user, 'Hello'); // John: Hello

// transparent caching used on objects

const worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log(`Called with ${x}`);
    return x * this.someMethod(); // (*)
  },
};

function cachingDecorator(func) {
  const cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    const result = func.call(this, x); // "this" is passed correctly now - we could use also func.apply
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log(worker.slow(2)); // works
console.log(worker.slow(2)); // works, doesn't call the original (cached)
