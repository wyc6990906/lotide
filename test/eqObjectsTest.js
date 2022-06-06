// FUNCTION IMPLEMENTATION
const {assert} = require('chai')

const eqObjects = require('../eqObjects')
describe('#eqObjects test group', () => {
  //Test code
  // assertEqual(eqObjects({a: {z: 1}, b: 2}, {a: {z: 1}, b: 2}), true)
  // assertEqual(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: {z: 1}, b: 2}), false)
  // assertEqual(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: 1, b: 2}), false)

  it('it should return true if ab = { a: "1", b: "2"} and ba = { b: "2", a: "1"}', () => {
    const ab = {a: "1", b: "2"};
    const ba = {b: "2", a: "1"};
    assert.equal(eqObjects(ab, ba), true);
  })
  it('it should return false if ab = {a: {y: 0, z: 1}, b: 2} and ba = {a: {z: 1}, b: 2}', () => {
    const ab = {a: {y: 0, z: 1}, b: 2}
    const ba = {a: {z: 1}, b: 2}
    assert.equal(eqObjects(ab, ba), false);
  })
  it('it should return false if ab = {a: {y: 0, z: 1}, b: 2} and ba = {a: 1, b: 2}', () => {
    const ab = {a: {y: 0, z: 1}, b: 2}
    const ba = {a: 1, b: 2}
    assert.equal(eqObjects(ab, ba), false);
  })
})


