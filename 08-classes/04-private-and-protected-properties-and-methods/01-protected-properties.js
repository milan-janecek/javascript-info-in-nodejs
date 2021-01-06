'use strict';

// Protected properties are usually prefixed with an underscore _
//
// It is by convention that

class CoffeeMachine {

  set waterAmount(value) {
    if (value < 0) throw new Error('Negative water');
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor() {
    this._waterAmount = 0;
  }

}

// create the coffee machine
const coffeeMachine = new CoffeeMachine();

// it is possible to access it outside BUT NOONE DOES IT !!!! BAD PRACTICE
coffeeMachine._waterAmount = 1;
console.log(coffeeMachine._waterAmount);

// add water
coffeeMachine.waterAmount = -10; // Error: Negative water - setter throws exception
