'use strict';

const options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
const {
  size: { // put size here
    width,
    height,
  },
  items: [item1, item2], // assign items here
  title = 'Menu', // not present in the object (default value is used)
} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut
