'use strict';

// Function Declaration is only visible inside the code block in which it resides

const age = 5;

// conditionally declare a function
if (age < 18) {
  function hello() {
    console.log('Hello!');
  }

} else {
  function greet() {
    console.log('Greetings!');
  }
}

// ...use it later
hello(); // Error: welcome is not defined
