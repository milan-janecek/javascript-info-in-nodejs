'use strict';

function ask(question, condition, ifYes, ifNo) {
  if (condition) {
    ifYes();
  } else {
    ifNo();
  }
}

function showOk() {
  console.info('You agreed.');
}

function showNotOk() {
  console.info('You did not agree.');
}

// showOk, showNotOk are so called callback functions expected to be called by ask (depending on the condition)

ask('Do you agree?', true, showOk, showNotOk);
ask('Do you agree?', false, showOk, showNotOk);

// similar as above but using function expressions
ask('Are you happy?',
    true,
       function() { console.log('I am very happy, thanks.'); },
        function() { console.log('Not really'); });

