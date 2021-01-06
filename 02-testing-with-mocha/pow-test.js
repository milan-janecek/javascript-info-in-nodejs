'use strict';

const mocha = require('mocha');
const chai = require('chai');

const describe = mocha.describe;
const it = mocha.it;
const assert = chai.assert;

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

describe('pow', () => {

  describe('raises x to power 3', () => {

    function makeTest(x) {
      const expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, () => {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it('for negative n the result is NaN', () => {
    assert.isNaN(pow(2, -1));
  });

  it('for non-integer n the result is NaN', () => {
    assert.isNaN(pow(2, 1.5));
  });

});
