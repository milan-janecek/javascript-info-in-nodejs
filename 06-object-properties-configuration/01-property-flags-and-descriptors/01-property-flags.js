'use strict';

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
// obj - The object to get information from.
// propertyName - The name of the property.

let user = {
  name: 'John',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(descriptor);

// Object.defineProperty(obj, propertyName, descriptor)
// obj, propertyName - The object and its property to apply the descriptor.
// descriptor - Property descriptor object to apply.

// If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags;
// in that case, if a flag is not supplied, it is assumed false.

user = {};

Object.defineProperty(user, 'name', {
  value: 'John',
});

descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(descriptor);
