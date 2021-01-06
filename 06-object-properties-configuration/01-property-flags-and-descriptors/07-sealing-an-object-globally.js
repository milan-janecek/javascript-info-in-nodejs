'use strict';

// Object.preventExtensions(obj)
// Forbids the addition of new properties to the object.

const notExtensible = {};
Object.preventExtensions(notExtensible);

// Object.seal(obj)
// Forbids adding/removing of properties. Sets configurable: false for all existing properties.

const sealed = {};
Object.seal(sealed);

// Object.freeze(obj)
// Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.

const frozen = {};
Object.freeze(frozen);

// And also there are tests for them:
//
// Object.isExtensible(obj)
// Returns false if adding properties is forbidden, otherwise true.

console.log(Object.isExtensible(notExtensible));

// Object.isSealed(obj)
// Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.

console.log(Object.isSealed(notExtensible));

// Object.isFrozen(obj)
// Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.

console.log(Object.isFrozen(frozen));
