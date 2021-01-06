'use strict';

// pop - Extracts the last element of the array and returns it

let fruits = ['Apple', 'Orange', 'Pear'];

console.log(fruits.pop()); // remove "Pear" and log it

console.log(fruits); // Apple, Orange

// push - Append the element to the end of the array

fruits = ['Apple', 'Orange'];

fruits.push('Pear');

console.log(fruits); // Apple, Orange, Pear

// shift - Extracts the first element of the array and returns it

fruits = ['Apple', 'Orange', 'Pear'];

console.log(fruits.shift()); // remove Apple and log it

console.log(fruits); // Orange, Pear

// unshift - Add the element to the beginning of the array:

fruits = ['Orange', 'Pear'];

fruits.unshift('Apple');

console.log(fruits); // Apple, Orange, Pear

// stack = push & pop
// queue = push & shift

// push and unshift can add multiple elements at once

fruits = ['Apple'];

fruits.push('Orange', 'Peach');
fruits.unshift('Pineapple', 'Lemon');

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(fruits);
