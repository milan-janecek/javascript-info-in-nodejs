'use strict';

// we pass object to function
const options = {
  title: 'My menu',
  items: ['Item1', 'Item2'],
};

// ...and it immediately expands it to variables
function showMenu({title = 'Untitled', width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log(`${title} ${width} ${height}`); // My Menu 200 100
  console.log(items); // Item1, Item2
}

console.log('showMenu call...');
showMenu(options);

// we can use all object/array destructuring features in the function parameters
function showMenu2({
  title = 'Untitled',
  width: w = 100, // width goes to w
  height: h = 200, // height goes to h
  items: [item1 = 1, item2 = 2] = [1, 2], // items first element goes to item1, second to item2
} = {}) {
  console.log(`${title} ${w} ${h}`); // My Menu 100 200
  console.log(item1); // Item1
  console.log(item2); // Item2
}

console.log('showMenu2(options) call...');
showMenu2(options);

console.log('showMenu2({}}) call...');
showMenu2({}); // ok, all values are default

console.log('showMenu2() call...');
showMenu2(); // ok, all values are default because we gave default as empty object
