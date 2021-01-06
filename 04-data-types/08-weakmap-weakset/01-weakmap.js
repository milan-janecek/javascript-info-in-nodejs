'use strict';

const weakMap = new WeakMap();

const obj = {};

weakMap.set(obj, 'ok'); // works fine (object key)

console.log(weakMap.get(obj));

// can't use a string as the key
// weakMap.set('test', 'Whoops'); // Error, because "test" is not an object

let john = {name: 'John'};

weakMap.set(john, '...');

john = null; // overwrite the reference

// now john will be removed from weak map automatically by garbage collector

// WeakMap has only these methods, you cannot iterate, detect size..

// - weakMap.get(key);
// - weakMap.set(key, value);
// - weakMap.delete(key);
// - weakMap.has(key);

// WeakMap usage use-cases - as an additional storage for objects or as a per-object cache which is cleared when object is
// garbage collected
