'use strict';

const arrA = new Array();

const arrB = []; // <- this is preferred way of constructing array

let fruits = ['Apple', 'Orange', 'Plum']; // <- we can supply initial elements during construction

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

// replace element
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

// add a new one
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

console.log(fruits.length); // 4

console.log(fruits); // log can be used to show the entire array

const mixedArr = ['Apple', {name: 'John'}, true, function() { console.log('hello'); }];

// get the object at index 1 and then show its name
console.log(mixedArr[1].name); // John

// get the function at index 3 and run it
mixedArr[3](); // hello
