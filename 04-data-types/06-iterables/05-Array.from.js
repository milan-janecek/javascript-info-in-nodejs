'use strict';

const arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)

const iterableRange = {
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

arr = Array.from(iterableRange);
console.log(arr); // 1,2,3,4,5 (array toString conversion works)

// Array.from accepts mapping function (and thisArg if needed)
arr = Array.from(iterableRange, (num) => num * num);
console.log(arr); // 1,4,9,16,25

const chars = Array.from('test');
console.log(chars);
