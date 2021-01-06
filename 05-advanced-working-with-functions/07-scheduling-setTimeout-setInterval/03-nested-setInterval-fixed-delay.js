'use strict';

// repeat with the interval of 2 seconds - in contrast to setInterval - this ensures fixed delay between individual executions
let timerId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 1000); // (*)
}, 1000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);
