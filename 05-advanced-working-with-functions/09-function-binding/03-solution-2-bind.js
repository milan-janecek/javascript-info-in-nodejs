'use strict';

// Functions provide a built-in method bind that allows to fix this.
//
// The basic syntax is: const boundFunc = func.bind(context);

let user = {
  firstName: 'John',
};

function func() {
  console.log(this.firstName);
}

function funcPhrase(phrase) {
  console.log(`${phrase}, ${this.firstName}`);
}

const funcUser = func.bind(user);

const funcPhraseUser = funcPhrase.bind(user);

funcUser(); // John

funcPhraseUser('Hello');

// passing object method to setTimeout safely with func.bind

user = {
  firstName: 'John',
  say(phrase) {
    console.log(`${phrase}, ${this.firstName}!`);
  },
};

const say = user.say.bind(user);

say('Hello'); // Hello, John ("Hello" argument is passed to say)
say('Bye'); // Bye, John ("Bye" is passed to say)

setTimeout(() => say('Hi from timeout'), 1000);
