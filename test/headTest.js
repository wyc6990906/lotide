// FUNCTION IMPLEMENTATION
// const assertEqual = require('../assertEqual')
const assert = require('chai').assert
const head = require('../head')

// TEST CODE
describe('#head', () => {
  it("returns 1 for [1,2,3]", () => {
    assert.equal(head([1, 2, 3]), 1)
  })
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns undefined for []", () => {
    assert.equal(head([]), undefined);
  });
  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
})

