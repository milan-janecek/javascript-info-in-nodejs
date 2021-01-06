'use strict';

// The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.
//
// A non-configurable property can not be deleted.

// Math.PI is non-configurable
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

// Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.
//
//   To be precise, non-configurability imposes several restrictions on defineProperty:
//
//   Can’t change configurable flag.
//   Can’t change enumerable flag.
//   Can’t change writable: false to true (the other way round works).
//   Can’t change get/set for an accessor property (but can assign them if absent).

const user = { };

Object.defineProperty(user, 'name', {
  value: 'John',
  writable: false,
  configurable: false,
});

// won't be able to change user.name or its flags
// all this won't work:
//   user.name = "Pete"
//   delete user.name
//   defineProperty(user, "name", { value: "Pete" })
Object.defineProperty(user, 'name', {writable: true}); // Error
