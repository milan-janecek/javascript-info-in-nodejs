'use strict';

const range = {
  from: 1,
  to: 5,
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {

  // ...it returns the iterator object:
  // 2. Onward, for..of works only with this iterator, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return {done: false, value: this.current++};
      } else {
        return {done: true};
      }
    },
  };
};

// now - for..of - works!
for (const num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// the iterator object is separate from the object it iterates over
// technically, we may merge them and use range itself as the iterator to make the code simpler
// the below code is shorter but has downside - does not work when there are 2 or more parallel for..of loops iterating
// at the same time

const rangeShorter = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return {done: false, value: this.current++};
    } else {
      return {done: true};
    }
  },
};

for (const num of rangeShorter) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// infinite iterators ....

// Infinite iterators are also possible. For instance, the range becomes infinite for range.to = Infinity. Or we can
// make an iterable object that generates an infinite sequence of pseudorandom numbers. Also can be useful. There are
// no limitations on next, it can return more and more values, that’s normal. Of course, the for..of loop over such an
// iterable would be endless. But we can always stop it using break.

