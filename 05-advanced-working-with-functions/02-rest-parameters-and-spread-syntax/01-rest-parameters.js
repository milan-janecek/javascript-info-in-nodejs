'use strict';

function sum(a, b) {
  return a + b;
}

// a function can be called with any number of arguments, no matter how it is defined
console.log(sum(1, 2, 3, 4, 5));

// ...<name> means put the rest parameters into array named by <name>

function sumAll(...args) { // args is the name for the array
  let currentSum = 0;

  for (const arg of args) currentSum += arg;

  return currentSum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6

// the rest parameters must be at the end

function showName(firstName, lastName, ...titles) {
  console.log(`${firstName} ${lastName}`); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName('Julius', 'Caesar', 'Consul', 'Imperator');
