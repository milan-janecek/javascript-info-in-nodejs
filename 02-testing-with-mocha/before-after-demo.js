'use strict';

const mocha = require('mocha');

const describe = mocha.describe;
const it = mocha.it;
const before = mocha.before;
const beforeEach = mocha.beforeEach;
const after = mocha.after;
const afterEach = mocha.afterEach;
const log = console.log;

describe('test', () => {

  before(() => log('Testing started – before all tests'));
  after(() => log('Testing finished – after all tests'));

  beforeEach(() => log('Before a test – enter a test'));
  afterEach(() => log('After a test – exit a test'));

  it('test 1', () => log(1));
  it('test 2', () => log(2));

});
