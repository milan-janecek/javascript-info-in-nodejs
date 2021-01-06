'use strict';

// iterables are objects that implement the Symbol.iterator method

// array-likes are objects that have indexes and length, so they look like arrays

// strings are both iterable (for..of works on them) and array-like (they have numeric indexes and length)

// the range from 01-Symbol.iterator.js is iterable, but not array-like, because it does not have indexed properties and length

// here’s the object that is array-like, but not iterable

const arrayLike = { // has indexes and length => array-like
  0: 'Hello',
  1: 'World',
  length: 2,
};

// Error (no Symbol.iterator)
for (const item of arrayLike) {
  console.log(item);
}
