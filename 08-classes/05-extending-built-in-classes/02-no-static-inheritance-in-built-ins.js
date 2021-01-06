'use strict';

// Built-in objects have their own static methods, for instance Object.keys, Array.isArray etc.

// Normally, when one class extends another, both static and non-static methods are inherited.

// But built-in classes are an exception. They don’t inherit statics from each other.

// For example, both Array and Date inherit from Object, so their instances have methods from Object.prototype. But
// Array.[[Prototype]] does not reference Object, so there’s no, for instance, Array.keys() (or Date.keys()) static
// method.
