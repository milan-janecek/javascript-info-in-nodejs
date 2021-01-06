'use strict';

// as a rule of thumb - constructors does not return anything (implicit this is enough)
// but as they are just normal functions -> they can return (usability of such is questionable - not recommended)

function BigUser() {

  this.name = 'John';

  return {name: 'Godzilla'}; // <-- returns Godzilla object - instead of this (always the same Godzilla object)
}

console.log(new BigUser().name); // Godzilla, got that object

function SmallUser() {

  this.name = 'John';

  return; // <-- returns this
}

console.log(new SmallUser().name); // John

// Javascript allows omit parentheses when constructor does not have arguments => but it is not a good style
const smallUser = new SmallUser;
console.log(smallUser.name); // John