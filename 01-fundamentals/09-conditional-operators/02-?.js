'use strict';

const age = 18;

const accessAllowed = (age > 18) ? true : false;

console.log(`Access allowed: ${accessAllowed}`);

const message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
      'What an unusual age!';

console.log(message); // Greetings!
