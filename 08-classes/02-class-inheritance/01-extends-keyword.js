'use strict';

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

const animal = new Animal('My animal');
animal.run(10);
animal.stop();

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

const rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop();
rabbit.hide(); // White Rabbit hides!

// Any expression is allowed after extends
// Class syntax allows to specify not just a class, but any expression after extends.

function f(phrase) {
  return class {
    sayHi() { console.log(phrase); }
  };
}

class User extends f('Hello') {}

new User().sayHi(); // Hello
