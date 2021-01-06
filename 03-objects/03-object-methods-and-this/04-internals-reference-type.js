'use strict';

const john = {
  name: 'John',
  hi() { console.log(this.name); },
  bye() { console.log('Bye'); },
};

john.hi(); // John (the simple call works)

// now let's call user.hi or user.bye depending on the name
// (john.name === 'John' ? john.hi : john.bye)(); // Error!

const fred = {
  name: 'Fred',
  hi() { console.log(this.name); },
};

// split getting and calling the method in two lines
const hi = fred.hi;
// hi(); // Error, because this is undefined

// To make user.hi() calls work, JavaScript uses a trick – the dot '.' returns not a function, but a value of the special Reference Type.
// . returns reference type and when () are applied on reference type - JavaScript can set this from the reference type
// when something else than () are applied to reference type, reference type is thrown away by Javascript so `this` is lost
