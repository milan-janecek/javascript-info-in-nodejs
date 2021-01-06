'use strict';

function showMessage(from, text) {
  from = `*${from}*`; // make "from" look nicer

  console.log(`${from}: ${text}`);
}

showMessage('Ann'); // omitting parameter = it is undefined

function showMessageWithDefaultText(from, text = 'no text given') {
  from = `*${from}*`; // make "from" look nicer

  console.log(`${from}: ${text}`);
}

showMessageWithDefaultText('Bob');

function defaultTextProvider() {
  return 'no text given from provider';
}

function showMessageWithDefaultTextProvider(from, text = defaultTextProvider()) {
  from = `*${from}*`; // make "from" look nicer

  console.log(`${from}: ${text}`);
}

showMessageWithDefaultTextProvider('John');
