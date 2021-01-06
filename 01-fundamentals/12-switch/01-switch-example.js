'use strict';

const a = 2 + 2;

// SWITCH USES STRICT EQUALITY - ===

switch (a) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 5:
    console.log('Too large');
    break;
  default:
    console.log("I don't know such values");
}

// execution continues from the first case that matches until the first break

switch (a) {
  case 3:
    console.log('Too small');
  case 4:
    console.log('Exactly!');
  case 5:
    console.log('Too big');
  default:
    console.log("I don't know such values");
}

// any expression can be used in switch and case

const b = '1';
const c = 0;

switch (+b) {
  case c + 1:
    console.log('this runs, because +b is 1, which exactly equals c + 1');
    break;

  default:
    console.log("this doesn't run");
}
