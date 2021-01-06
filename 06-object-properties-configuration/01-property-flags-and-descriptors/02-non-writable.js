'use strict';

const user = {
  name: 'John',
};

// update name property to not be writable
Object.defineProperty(user, 'name', {
  writable: false,
});

user.name = 'Pete'; // Error: Cannot assign to read only property 'name'
