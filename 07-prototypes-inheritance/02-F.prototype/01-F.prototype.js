'use strict';

const animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

// setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal"
Rabbit.prototype = animal;

const whiteRabbit = new Rabbit('White Rabbit'); //  rabbit.__proto__ == animal

console.log(whiteRabbit.eats); // true

// F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object.

// If, after the creation, F.prototype property changes (F.prototype = <another object>), then new objects created by
// new F will have another object as [[Prototype]], but already existing objects keep the old one.

const creature = {
  makesNoise: true,
};

Rabbit.prototype = creature;

const creatureRabbit = new Rabbit('Creature Rabbit');

console.log(creatureRabbit.makesNoise);

console.log('White Rabbit prototype');
console.log(whiteRabbit.__proto__);
console.log('Creature Rabbit prototype');
console.log(creatureRabbit.__proto__);
