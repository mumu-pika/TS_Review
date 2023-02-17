'use strict';

const typeChallenge = require('../lib/ts-challenge');
const assert = require('assert').strict;

assert.strictEqual(typeChallenge(), 'Hello from tsChallenge');
console.info("tsChallenge tests passed");

describe('it\'s a test' ,() => {
  it ('1 + 1 equals 2', () => {
    expect(1 + 1).toBe(2)
  })
})

