'use strict';

const options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

// based on the names of the properties
const {title, width, height} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200

// order does not matter

const options2 = {
  title2: 'Menu',
  width2: 100,
  height2: 200,
};

const {width2, height2, title2} = options2;

console.log(title2); // Menu
console.log(width2); // 100
console.log(height2); // 200s

// using variables which are named differently than properties

const options3 = {
  title3: 'Menu',
  width3: 100,
  height3: 200,
};

// { sourceProperty: targetVariable }
const {width3: w3, height3: h3, title3} = options3;

// width3 -> w
// heigh3 -> h
// title3 -> title3

console.log(title3); // Menu
console.log(w3); // 100
console.log(h3); // 200

// default values

const options4 = {
  title4: 'Menu',
  height4: 200,
};

const {width4: w4 = 'Missing Width', height4, title4: t4, price: p4 = Math.random() * 100} = options4;

console.log(t4); // Menu
console.log(w4); // Missing Width
console.log(height4); // 200
console.log(p4); // whatever Math.round() returns

// the ...rest returns object

const options5 = {
  title5: 'Menu',
  height5: 200,
  width5: 100,
};

// title = property named title
// rest = object with the rest of properties
const {title5, ...rest} = options5;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height5); // 200
console.log(rest.width5); // 100
console.log(rest);
