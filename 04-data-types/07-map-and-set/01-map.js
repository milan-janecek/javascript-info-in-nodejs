'use strict';

// Map is a collection of keyed data items, just like an Object, but the main difference is that Map allows keys of any type

// Methods and properties are:
//
// new Map() – creates the map
// map.set(key, value) – stores the value by the key
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map
// map.has(key) – returns true if the key exists, false otherwise
// map.delete(key) – removes the value by the key
// map.clear() – removes everything from the map
// map.size – returns the current element count

const map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string

// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'

console.log(map.size); // 3
console.log(map);

// map[key] isn’t the right way to use a Map
// although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (no object keys and so on)
// so we should use map methods: set, get and so on

const john = {name: 'John'};
const fred = {name: 'Fred'};

// for every user, let's store their visits count
const visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);
visitsCountMap.set(fred, 52);

console.log(visitsCountMap.get(john)); // 123
console.log(visitsCountMap.get(fred)); // 52

// every map.set call returns the map itself, so we can “chain” the calls

console.log(new Map().set(1, 2).set('1', '2').set('str', 'str'));
