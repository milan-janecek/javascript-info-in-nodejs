'use strict';

const visitedSet = new WeakSet();

let john = {name: 'John'};
const pete = {name: 'Pete'};
const mary = {name: 'Mary'};

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(john)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically

// WeakSet usage use-cases - additional per-object storage of yes/no facts
