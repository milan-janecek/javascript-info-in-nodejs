'use strict';

// array destructuring

const arr = ['Ilya', 'Kantor'];

let firstName;
let surname;

([firstName, surname] = arr); // here we have to wrap it in parentheses

console.log(firstName); // Ilya
console.log(surname); // Kantor

// object desctructuring

let title;
let width;
let height;

// okay now
({title, width, height} = {title: 'Menu', width: 200, height: 100}); // here we have to wrap it in parenthese

console.log(`${title},${width},${height}`); // Menu, 200, 100
