'use strict';

class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    console.log(this.value);
  }
}

let button = new Button('hello');

setTimeout(button.click, 1000); // undefined

// ^^^ loosing this applies to objects created from classes too

// solution 1

class FixedButton1 {
  constructor(value) {
    this.value = value;
    this.click = this.click.bind(this);
  }

  click() {
    console.log(this.value);
  }
}

button = new FixedButton1('hello');

setTimeout(button.click, 1000); // hello

// solution 2 using class fields

class FixedButton2 {
  constructor(value) {
    this.value = value;
  }

  // class field creates an independent function on each Button object, with this bound to the object
  click = () => {
    console.log(this.value);
  }
}

button = new FixedButton2('hello');

setTimeout(button.click, 1000); // hello