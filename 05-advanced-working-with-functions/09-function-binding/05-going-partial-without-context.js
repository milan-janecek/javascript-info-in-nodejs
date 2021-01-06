'use strict';

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  };
}

// Usage:
const user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

// add a partial method with fixed time
user.sayNow = partial(user.say, `${new Date().getHours()}:${new Date().getMinutes()}`);

user.sayNow('Hello');
// Something like:
// [10:00] John: Hello!
