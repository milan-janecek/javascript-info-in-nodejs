'use strict';

// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
//
// Its main methods are:
//
// - new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// - set.add(value) – adds a value, returns the set itself.
// - set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// - set.has(value) – returns true if the value exists in the set, otherwise false.
// - set.clear() – removes everything from the set.
// - set.size – is the elements count

let set = new Set();

const john = {name: 'John'};
const pete = {name: 'Pete'};
const mary = {name: 'Mary'};

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

for (const user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

// iterating over set

set = new Set(['oranges', 'apples', 'bananas']);

for (const value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});

// iterate over keys (vegetables)
for (const k of set.keys()) {
  console.log(k); // orange, apples, bananas
}

// iterate over values (amounts)
for (const v of set.values()) {
  console.log(v); // orange, apples, bananas
}
