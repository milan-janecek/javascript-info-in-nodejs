'use strict';

// The extended syntax looks like this:
// finally -> exact same behavior and usage as in Java

try {
  console.log('Inside try');
} catch (e) {
  console.log('Only when there is error');
} finally {
  console.log('Always - no matter if there was error or not');
}

// Variables are local inside try..catch..finally
// -> if we declared let in try block, it would only be visible inside of it

// finally and return
// -> The finally clause works for any exit from try..catch. That includes an explicit return.

// try..finally
// -> The try..finally construct, without catch clause, is also useful. We apply it when we don’t want to handle
// errors here (let them fall through), but want to be sure that processes that we started are finalized.
