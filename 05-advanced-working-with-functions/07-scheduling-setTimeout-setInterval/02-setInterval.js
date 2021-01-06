'use strict';

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
//
// func|code - Function or a string of code to execute. Usually, that’s a function
// delay - Runs function regularly after the delay interval of time
// arg1, arg2… - Arguments for the function (not supported in IE9-)

// repeat with the interval of 2 seconds
const timerId = setInterval(() => console.log('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);
