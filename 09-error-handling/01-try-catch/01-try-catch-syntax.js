'use strict';

try {

  console.log('Start of try runs'); // (1) <--

  // ...no errors here

  console.log('End of try runs'); // (2) <--

} catch (err) {

  console.log('Catch is ignored, because there are no errors'); // (3)

}

try {

  console.log('Start of try runs'); // (1) <--

  lalala; // error, variable is not defined!

  console.log('End of try (never reached)'); // (2)

} catch (err) {

  console.log('Error has occurred!'); // (3) <--

}

// try..catch only works for runtime errors
// -> For try..catch to work, the code must be runnable. In other words, it should be valid JavaScript.

// try..catch works synchronously
// -> If an exception happens in “scheduled” code, like in setTimeout, then try..catch won’t catch it:

try {
  setTimeout(() => {
    noSuchVariable; // script will die here
  }, 1000);
} catch (e) {
  console.log("won't work");
}
