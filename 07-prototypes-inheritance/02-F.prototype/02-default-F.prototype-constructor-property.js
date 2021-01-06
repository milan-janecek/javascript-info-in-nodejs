'use strict';

// Every function has the "prototype" property even if we don’t supply it.
//
// The default "prototype" is an object with the only property constructor that points back to the function itself.

function Rabbit() {}

console.log(Rabbit.prototype);

// Naturally, if we do nothing, the constructor property is available to all rabbits through [[Prototype]]:

const rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

console.log(rabbit.constructor);

// We can use constructor property to create a new object using the same constructor as the existing one.

function NamedRabbit(name) {
  this.name = name;
  console.log(name);
}

const whiteRabbit = new NamedRabbit('White Rabbit');

const blackRabbit = new whiteRabbit.constructor('Black Rabbit');

console.log(blackRabbit);

// to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:

function Bunny() {}

// Not overwrite Bunny.prototype totally
// just add to it
Bunny.prototype.jumps = true;
// the default Bunny.prototype.constructor is preserved

const bunny = new Bunny();

console.log(bunny.jumps);

const anotherBunnyFromBunny = new bunny.constructor();

console.log(anotherBunnyFromBunny.jumps);
