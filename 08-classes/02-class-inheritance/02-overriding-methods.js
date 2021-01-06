'use strict';

// if child defines the same method - it is found first in child's prototype and hence called first - it overrides
// parent's implementation of the method
//
// super keyword refers to the parent and can be used in many ways - most often to call parent's version of the method
// when there is a need to preserve basic implementation and only add something to it
//
// example - Rabbit "auto-hides" when stops

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

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

const rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White rabbit hides!

// Arrow functions have no super (as they also have no this) - supper is taken from outside

class DelayedRabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
  }

  brokenStop() {
    setTimeout(function() { super.stop(); }, 1000); // call parent stop after 1sec
  }
}

const delayedRabbit = new DelayedRabbit('Delayed Rabbit');

delayedRabbit.stop(); // Error
